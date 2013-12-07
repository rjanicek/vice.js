VICE.js
=======

Versatile Commodore Emulator for JavaScript

JavaScript port of VICE 2.4 using Emscripten.

[Demo](http://retroplay.co/)  
[VICE](http://sourceforge.net/projects/vice-emu/)  
[Emscripten](https://github.com/kripken/emscripten)  

Status
------
* Firefox 25 - ok
    * -o3 -> 100 second asm.js compile time
* Firefox 28 - sound clicks
* Chrome 31 - slow
* Chrome 33 - ok
* IE 11 - broken
    * Typed array constructor argument is invalid

Tasks
-----
* fix joystick
* [Gamepad API](https://github.com/kripken/emscripten/pull/1763)
* try using worker thread (emcc --proxy-to-worker)
* add other computers
    * VIC-20
* fix vice menu ui (F12)
* fix IE

Example
-------

```html
<!doctype html>
<html lang="en-us">
    <head></head>
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