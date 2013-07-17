VICE.js
=======

Versatile Commodore Emulator for JavaScript

JavaScript port of VICE 2.4 using Emscripten.

Website -> http://vice.janicek.co

x64 -> http://rjanicek.github.io/vice.js/js/x64.js

VICE -> http://sourceforge.net/projects/vice-emu/

Emscripten -> https://github.com/kripken/emscripten


###Tasks

* fix asm.js for FireFox stable
* fix keyboard
* fix joystick
* add other computers
 * VIC-20
 * C128
* improve sound
* fix IE


###Best Configuration Options

async mode:
* soundfragsize 2 -soundrate 22050 -soundsync 0

sync mode:
* soundfragsize 2 -soundrate 22050 -soundsync 0 -ntsc
* ntsc is important because browser requestAnimationFame is going to deliver 60 fps which means less cpu time is wasted during vsync delay