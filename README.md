VICE.js
=======

Versatile Commodore Emulator for JavaScript

JavaScript port of VICE 2.4 using Emscripten.

[Demo](http://vice.janicek.co/)  
[VICE](http://sourceforge.net/projects/vice-emu/)  
[Emscripten](https://github.com/kripken/emscripten)  

| Browser  | Version    | Status | Note
| -------- | ---------- | ------ | ----
| Firefox  | 39         | :)     | ok
| Chrome   | 43         | :|     | sound clicks
| IE       | 11         | :(     | broken

Examples
-------

###[c64 basic](http://rjanicek.github.io/vice.js/c64-basic.html)

```html
<!doctype html>
<html lang="en-us">
    <body>
        <!-- the canvas *must not* have any border or padding, or mouse coords will be wrong -->
        <canvas  id="canvas" style="border: 0px none;"></canvas>
        <script type="text/javascript" >
            var Module = {
                arguments: ['+sound'],
                canvas: document.getElementById('canvas'),
            };
        </script>
        <script type="text/javascript" src="js/x64.js"></script>
    </body>
</html>
```

###[auto-run a D64 disk image](http://rjanicek.github.io/vice.js/auto-run-a-D64-disk-image.html)

```html
<!doctype html>
<html lang="en-us">
    <body>
        <!-- the canvas *must not* have any border or padding, or mouse coords will be wrong -->
        <canvas  id="canvas" style="border: 0px none;"></canvas>
        <script type="text/javascript" >

            function audioDetected() {
                return (typeof Audio === 'function' && new Audio().mozSetup === 'function') ||
                    (typeof AudioContext === 'function') ||
                    (typeof webkitAudioContext === 'function');
            }

            function loadFiles() {
                var base64EncodedFile = '...';
                FS.createDataFile('/', 'disk-image.d64', window.atob(base64EncodedFile), true, true);
            }

            var viceArguments = ['-autostart', 'disk-image.d64'].concat(
                audioDetected() ? ['-soundsync', 0, '-soundrate', 22050, '-soundfragsize', 2] : ['-sound']
            );

            var Module = {
                preRun: [loadFiles],
                arguments: viceArguments,
                canvas: document.getElementById('canvas'),
            };

        </script>
        <script type="text/javascript" src="js/x64.js"></script>
    </body>
</html>
```

###[send keyboard commands](http://rjanicek.github.io/vice.js/c64-keyboard.html)

```html
<!doctype html>
<html lang="en-us">
    <body>
        <!-- the canvas *must not* have any border or padding, or mouse coords will be wrong -->
        <canvas  id="canvas" style="border: 0px none;"></canvas>
        <p><button onmousedown="sendSpaceKeyPressedCode()" onmouseup="sendSpaceKeyReleasedCode()">space bar</button></p>
        <script type="text/javascript" >

            var C64_SPACE_KEY_CODE = 32;

            function sendSpaceKeyPressedCode() {
                Module.ccall('keyboard_key_pressed', 'undefined', ['number'], [C64_SPACE_KEY_CODE]);  
            }

            function sendSpaceKeyReleasedCode() {
                Module.ccall('keyboard_key_released', 'undefined', ['number'], [C64_SPACE_KEY_CODE]);
            }

            var Module = {
                arguments: ['+sound'],
                canvas: document.getElementById('canvas'),
            };
            
        </script>
        <script type="text/javascript" src="js/x64.js"></script>
    </body>
</html>
```

Best Configuration Options
--------------------------

async mode:
* soundfragsize 2 -soundrate 22050 -soundsync 0

sync mode:
* soundfragsize 2 -soundrate 22050 -soundsync 0 -ntsc
* ntsc is important because browser requestAnimationFame is going to deliver 60 fps which means less cpu time is wasted during vsync delay

Development
-----------

###How to find key codes
* in `/vice/src/arch/sdl/kbd.c # sdlkbd_press()`
* this line prints key codes to console when key is pressed
```c
fprintf(stderr, "%s: %i (%s),%i\n",__func__,key,SDL_GetKeyName(key),mod);
```
* activate by compiling vice with SDL_DEBUG flag

Resources
---------
[C64 Wiki](http://www.c64-wiki.com)  
[Commodore 64 keyboard matrix layout](http://sta.c64.org/cbm64kbdlay.html)  
[COMMODORE 64 ROGRAMMER'S REFERENCE GUIDE](http://www.c64.ch/programming/c64prg10.txt)  
[Commodore Manuals](http://www.commodore.ca/commodore-manuals/)  
[Coroutines in C](http://www.chiark.greenend.org.uk/~sgtatham/coroutines.html)  
[requestAnimationFrame setting fps](http://creativejs.com/resources/requestanimationframe/)  
[SDL 1.2 to 2.0 Migration Guide](http://wiki.libsdl.org/moin.fcg/MigrationGuide)  
[VICE Manual](http://www.viceteam.org/vice_toc.html)  
[VICE options](vice-options.md)

Tasks
-----
* try using worker thread (emcc --proxy-to-worker) 
    * initial tests show +10% perf in Chrome, but missing SDL Audio
    * [discuss proxy-to-worker](https://groups.google.com/forum/#!searchin/emscripten-discuss/worker$20proxy/emscripten-discuss/uUbvJsM_jUU/KL-a3YPVWuoJ)
    * [discuss web audio & web workers](https://groups.google.com/forum/#!searchin/emscripten-discuss/web$20audio$20web$20workers/emscripten-discuss/erT7NCEeWgY/lPyK2rF_t6sJ)
    * [nice callback pattern for web workers](http://stackoverflow.com/questions/18056637/html5-web-worker-communication)
    * Proxy SDL Audio
        * \vice\src\sounddrv\soundsdl.c
        * \emscripten\src\library_sdl.js
            * line 1636 creates Audio object
        * \emscripten\src\proxyWorker.js
        * \emscripten\src\proxyClient.js
        * Native audio classes shim proxy option: Create proxies for each Audio class and simply define these classes in proxyWorker.js.
            * proxyClient will feature detect available Audio classes and send this info the proxyWorker
            * proxyWorker will implement Audio classes based on features detected by proxyClient
            * Conclusions
                * A large API needs to be proxied, lots of different Classes some vary by browser.
                * Managing all the audio object proxies (createBufferSource, createBuffer) is complicated.
                * Need to track references to proxied objects.
                * Determining when to free objects can be difficult.
                * `postMessage` communication would be chatty.
        * Proxy SDL_*Audio C functions
            * Seperate C code from Web Audio API's
                * Re-factor `pushAudio` function to use data arrays instead of a pointer to heap
            * Copy Web Audio parts of SDL_*Audio functions to proxyClient
            * Detect proxyClient in library_sdl and invoke proxy versions of SDL_*Audio functions
            * Conclusions
                * Code duplication, some code from SDL_*Audio functions exist in both library_sdl and proxyClient
                * extra data copy required by pushAudio function
                    * current process
                        * copy data from heap directly into Web Audio buffers $expensive
                    * new worker process
                        * copy data from heap into ArrayBuffer $expensive
                        * transfer ownership of data to browser thread
                        * copy data into Web Audio buffers $expensive
            * Issues
                * SDL init is synchronous so if there's a problem in the browser context part, worker does not know.
                    * Possible solution is to feature detect Web Audio and send the info to worker ahead of time so it can make a better SDL init process.
                * Sound buffer overflows if tab goes to background, probably caused by request animation frame slowing down browser thread but worker is still at full speed.
                * Sound clicks, weird timing
            * Use `function addRunDependency(id)` instead of custom `waitForAudioFeatures` logic.
            * Test with \emscripten\tests\sdl_audio_beep.cpp
                * ./emcc -O2 --minify 0 -s DISABLE_EXCEPTION_CATCHING=0 -o audio-beep.html --proxy-to-worker --closure 1 tests/sdl_audio_beep.cpp
            * proxy-dependency-bug
                * ./emcc tests/hello_world_sdl.cpp -o hello.html --proxy-to-worker --post-js hello_world_dependencies.js
* file issue for Emscripten with patch
    * Chrome has a `console` in web worker context so detect it before over-writing @ proxyWorker.js line ~81
```
self.console = self.console || {
  log: function(x) {
    Module.printErr(x);
  }
};
```    
* add other computers
    * VIC-20
* fix vice menu ui (F12)