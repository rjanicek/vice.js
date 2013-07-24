VICE.js
=======

Versatile Commodore Emulator for JavaScript

JavaScript port of VICE 2.4 using Emscripten.

Website -> http://vice.janicek.co  
x64 Library -> http://rjanicek.github.io/vice.js/js/x64.js  
VICE -> http://sourceforge.net/projects/vice-emu/  
Emscripten -> https://github.com/kripken/emscripten  

###Tasks

* fix joystick
* add other computers
 * VIC-20
 * C128
* fix vice menu ui (F12)
* improve sound
* fix IE

###Example
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

###Best Configuration Options

async mode:
* soundfragsize 2 -soundrate 22050 -soundsync 0

sync mode:
* soundfragsize 2 -soundrate 22050 -soundsync 0 -ntsc
* ntsc is important because browser requestAnimationFame is going to deliver 60 fps which means less cpu time is wasted during vsync delay

###Resources

[C64 Wiki](http://www.c64-wiki.com)  
[Commodore 64 keyboard matrix layout](http://sta.c64.org/cbm64kbdlay.html)  
[SDL 1.2 to 2.0 Migration Guide](http://wiki.libsdl.org/moin.fcg/MigrationGuide)  
[COMMODORE 64 ROGRAMMER'S REFERENCE GUIDE](http://www.c64.ch/programming/c64prg10.txt)  
[VICE Manual](http://www.viceteam.org/vice_toc.html)  
[requestAnimationFrame setting fps](http://creativejs.com/resources/requestanimationframe/)  
[Coroutines in C](http://www.chiark.greenend.org.uk/~sgtatham/coroutines.html)  
