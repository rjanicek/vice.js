VICE command-line options: 
--------------------------
```
-logfile <Name> 
    Specify log file name 
-verbose 
    Enable verbose log output. 
-help 
    Show a list of the available options and exit normally 
-? 
    Show a list of the available options and exit normally 
-h 
    Show a list of the available options and exit normally 
-config <filename> 
    Specify config file 
-chdir <Directory> 
    Change current working directory. 
-console 
    Console mode (for music playback) 
-core 
    Allow production of core dumps 
+core 
    Do not produce core dumps 
-default 
    Restore default settings 
-autostart <Name> 
    Attach and autostart tape/disk image <name> 
-autoload <Name> 
    Attach and autoload tape/disk image <name> 
-1 <Name> 
    Attach <name> as a tape image 
-8 <Name> 
    Attach <name> as a disk image in drive #8 
-9 <Name> 
    Attach <name> as a disk image in drive #9 
-10 <Name> 
    Attach <name> as a disk image in drive #10 
-11 <Name> 
    Attach <name> as a disk image in drive #11 
-directory <Path> 
    Define search path to locate system files 
-menukey <key> 
    Keycode of the menu activate key 
-menukeyup <key> 
    Keycode of the menu up key 
-menukeydown <key> 
    Keycode of the menu down key 
-menukeyleft <key> 
    Keycode of the menu left key 
-menukeyright <key> 
    Keycode of the menu right key 
-menukeyselect <key> 
    Keycode of the menu select key 
-menukeycancel <key> 
    Keycode of the menu cancel key 
-menukeyexit <key> 
    Keycode of the menu exit key 
-menukeymap <key> 
    Keycode of the menu map key 
-saveresourcesonexit 
    Enable save resource on exit 
+saveresourcesonexit 
    Disable save resource on exit 
-confirmonexit 
    Enable confirm on exit 
+confirmonexit 
    Disable confirm on exit 
-statusbar 
    Enable statusbar 
+statusbar 
    Disable statusbar 
-basicload 
    On autostart, load to BASIC start (without ',1') 
+basicload 
    On autostart, load with ',1' 
-autostartwithcolon 
    On autostart, use the 'RUN' command with a colon, i.e., 'RUN:' 
+autostartwithcolon 
    On autostart, do not use the 'RUN' command with a colon; i.e., 'RUN' 
-autostart-handle-tde 
    Handle True Drive Emulation on autostart 
+autostart-handle-tde 
    Do not handle True Drive Emulation on autostart 
-autostart-warp 
    Enable warp mode during autostart 
+autostart-warp 
    Disable warp mode during autostart 
-autostartprgmode 
    Set autostart mode for PRG files 
-autostartprgdiskimage 
    Set disk image for autostart of PRG files 
-autostart-delay 
    Set initial autostart delay (0: use default) 
-autostart-delay-random 
    Enable random initial autostart delay. 
+autostart-delay-random 
    Disable random initial autostart delay. 
-flipname <Name> 
    Specify name of the flip list file image 
-device8 <Type> 
    Set device type for device #8 (0: NONE, 1: FILESYSTEM, 2: OPENCBM, 3: BLOCK DEVICE) 
-device9 <Type> 
    Set device type for device #9 (0: NONE, 1: FILESYSTEM, 2: OPENCBM, 3: BLOCK DEVICE) 
-device10 <Type> 
    Set device type for device #10 (0: NONE, 1: FILESYSTEM, 2: OPENCBM, 3: BLOCK DEVICE) 
-device11 <Type> 
    Set device type for device #11 (0: NONE, 1: FILESYSTEM, 2: OPENCBM, 3: BLOCK DEVICE) 
-attach8ro 
    Attach disk image for drive #8 read only 
-attach8rw 
    Attach disk image for drive #8 read write (if possible) 
-attach9ro 
    Attach disk image for drive #9 read only 
-attach9rw 
    Attach disk image for drive #9 read write (if possible) 
-attach10ro 
    Attach disk image for drive #10 read only 
-attach10rw 
    Attach disk image for drive #10 read write (if possible) 
-attach11ro 
    Attach disk image for drive #11 read only 
-attach11rw 
    Attach disk image for drive #11 read write (if possible) 
-playback 
    Playback recorded events 
-moncommands <Name> 
    Execute monitor commands from file 
-initbreak <value> 
    Set an initial breakpoint for the monitor 
-virtualdev 
    Enable general mechanisms for fast disk/tape emulation 
+virtualdev 
    Disable general mechanisms for fast disk/tape emulation 
-speed 
    Limit emulation speed to specified value 
-refresh <value> 
    Update every <value> frames (`0' for automatic) 
-warp 
    Enable warp mode 
+warp 
    Disable warp mode 
-sdlbitdepth <bpp> 
    Set bitdepth (0 = current, 8, 15, 16, 24, 32) 
-sdllimitmode <mode> 
    Set resolution limiting mode (0 = off, 1 = max, 2 = fixed) 
-sdlcustomw <width> 
    Set custom resolution width 
-sdlcustomh <height> 
    Set custom resolution height 
-pal 
    Use PAL sync factor 
-ntsc 
    Use NTSC sync factor 
-ntscold 
    Use old NTSC sync factor 
-paln 
    Use PAL-N sync factor 
-kernal <Name> 
    Specify name of Kernal ROM image 
-basic <Name> 
    Specify name of BASIC ROM image 
-chargen <Name> 
    Specify name of character generator ROM image 
-kernalrev <Revision> 
    Patch the Kernal ROM to the specified <revision> 
-keymap <number> 
    Specify index of keymap file (0=sym, 1=symDE, 2=pos) 
-symkeymap <Name> 
    Specify name of symbolic keymap file 
-symdekeymap <Name> 
    Specify name of symbolic German keymap file 
-poskeymap <Name> 
    Specify name of positional keymap file 
-ciamodel <Model> 
    Set both CIA models (0 = old 6526, 1 = new 6526A) 
-cia1model <Model> 
    Set CIA 1 model (0 = old 6526, 1 = new 6526A) 
-cia2model <Model> 
    Set CIA 2 model (0 = old 6526, 1 = new 6526A) 
-model <Model> 
    Set C64 model (c64/c64c/c64old, ntsc/newntsc/oldntsc, drean) 
-burstmod <value> 
    Burst modification (0 = None, 1 = CIA1, 2 = CIA2) 
-plus60k 
    Enable the PLUS60K RAM expansion 
+plus60k 
    Disable the PLUS60K RAM expansion 
-plus60kimage <Name> 
    Specify name of PLUS60K image 
-plus60kbase <Base address> 
    Base address of the PLUS60K expansion 
-plus256k 
    Enable the PLUS256K RAM expansion 
+plus256k 
    Disable the PLUS256K RAM expansion 
-plus256kimage <Name> 
    Specify name of PLUS256K image 
-256k 
    Enable the 256K RAM expansion 
+256k 
    Disable the 256K RAM expansion 
-256kimage <Name> 
    Specify name of 256K image 
-256kbase <Base address> 
    Base address of the 256K expansion 
-VICIIvcache 
    Enable the video cache 
+VICIIvcache 
    Disable the video cache 
-VICIIdsize 
    Enable double size 
+VICIIdsize 
    Disable double size 
-VICIIdscan 
    Enable double scan 
+VICIIdscan 
    Disable double scan 
-VICIIaudioleak 
    Enable audio leak emulation 
+VICIIaudioleak 
    Disable audio leak emulation 
-VICIIhwscale 
    Enable hardware scaling 
+VICIIhwscale 
    Disable hardware scaling 
-VICIIfilter <Mode> 
    Select rendering filter, 0:none, 1:CRT emulation, 2: scale2x 
-VICIIintpal 
    Use an internal calculated palette 
-VICIIextpal 
    Use an external palette (file) 
-VICIIpalette <Name> 
    Specify name of file of external palette 
-VICIIfulldevice <device> 
    Select fullscreen device 
-VICIISDLfullmode <Mode> 
    Select fullscreen mode 
-VICIIsaturation <0-2000> 
    Set saturation of internal calculated palette [1000] 
-VICIIcontrast <0-2000> 
    Set contrast of internal calculated palette [1000] 
-VICIIbrightness <0-2000> 
    Set brightness of internal calculated palette [1000] 
-VICIIgamma <0-4000> 
    Set gamma of internal calculated palette [2200] 
-VICIItint <0-2000> 
    Set tint of internal calculated palette [1000] 
-VICIIcrtblur <0-1000> 
    Amount of horizontal blur for the CRT emulation. [500] 
-VICIIcrtscanlineshade <0-1000> 
    Amount of scan line shading for the CRT emulation [667] 
-VICIIoddlinesphase <0-2000> 
    Set phase for color carrier in odd lines [1250] 
-VICIIoddlinesoffset <0-2000> 
    Set phase offset for color carrier in odd lines [750] 
-VICIIborders <Mode> 
    Set VIC-II border display mode (0: normal, 1: full, 2: debug) 
-VICIIchecksb 
    Enable sprite-background collision registers 
+VICIIchecksb 
    Disable sprite-background collision registers 
-VICIIcheckss 
    Enable sprite-sprite collision registers 
+VICIIcheckss 
    Disable sprite-sprite collision registers 
-VICIInewluminance 
    Use new luminances 
+VICIInewluminance 
    Use old luminances 
-sound 
    Enable sound playback 
+sound 
    Disable sound playback 
-soundrate <value> 
    Set sound sample rate to <value> Hz 
-soundbufsize <value> 
    Set sound buffer size to <value> msec 
-soundfragsize <value> 
    Set sound fragment size (0 = small, 1 = medium, 2 = large) 
-sounddev <Name> 
    Specify sound driver 
-soundarg <args> 
    Specify initialization parameters for sound driver 
-soundrecdev <Name> 
    Specify recording sound driver 
-soundrecarg <args> 
    Specify initialization parameters for recording sound driver 
-soundsync <sync> 
    Set sound speed adjustment (0: flexible, 1: adjusting, 2: exact) 
-soundoutput <output mode> 
    Sound output mode: (0: system decides mono/stereo, 1: always mono, 2: always stereo) 
-sidenginemodel <engine and model> 
    Specify SID engine and model (0: FastSID 6581, 1: FastSID 8580) 
-sidstereo <amount> 
    amount of extra SID chips 
-sidstereoaddress <Base address> 
    Specify base address for 2nd SID 
-sidtripleaddress <Base address> 
    Specify base address for 3rd SID 
-sidfilters 
    Emulate SID filters 
+sidfilters 
    Do not emulate SID filters 
-rsuser 
    Enable RS232 userport emulation 
+rsuser 
    Disable RS232 userport emulation 
-rsuserbaud <baud> 
    Set the baud rate of the RS232 userport emulation. 
-rsuserdev <0-3> 
    Specify VICE RS232 device for userport 
-iecdevice4 
    Enable IEC device emulation for device #4 
+iecdevice4 
    Disable IEC device emulation for device #4 
-iecdevice5 
    Enable IEC device emulation for device #5 
+iecdevice5 
    Disable IEC device emulation for device #5 
-iecdevice8 
    Enable IEC device emulation for device #8 
+iecdevice8 
    Disable IEC device emulation for device #8 
-iecdevice9 
    Enable IEC device emulation for device #9 
+iecdevice9 
    Disable IEC device emulation for device #9 
-iecdevice10 
    Enable IEC device emulation for device #10 
+iecdevice10 
    Disable IEC device emulation for device #10 
-iecdevice11 
    Enable IEC device emulation for device #11 
+iecdevice11 
    Disable IEC device emulation for device #11 
-prtxtdev1 <Name> 
    Specify name of printer text device or dump file 
-prtxtdev2 <Name> 
    Specify name of printer text device or dump file 
-prtxtdev3 <Name> 
    Specify name of printer text device or dump file 
-pr4txtdev <0-2> 
    Specify printer text output device for printer #4 
-pr5txtdev <0-2> 
    Specify printer text output device for printer #5 
-prusertxtdev <0-2> 
    Specify printer text output device for userport printer 
-pr4output <Name> 
    Specify name of output device for device #4 
-pr5output <Name> 
    Specify name of output device for device #5 
-pruseroutput <Name> 
    Specify name of output device for the userport printer 
-pr4drv <Name> 
    Specify name of printer driver for device #4 
-pr5drv <Name> 
    Specify name of printer driver for device #5 
-pruserdrv <Name> 
    Specify name of printer driver for the userport printer 
-device4 <Type> 
    Set device type for device #4 (0: NONE, 1: FS, 2: REAL) 
-device5 <Type> 
    Set device type for device #5 (0: NONE, 1: FS, 2: REAL) 
-pruser 
    Enable the userport printer emulation 
+pruser 
    Disable the userport printer emulation 
-mouse 
    Enable mouse grab 
+mouse 
    Disable mouse grab 
-mousetype <value> 
    Select the mouse type (0 = 1351, 1 = NEOS, 2 = Amiga, 3 = Paddles, 4 = CX-22, 5 = ST, 6 = Smart) 
-mouseport <value> 
    Select the joystick port the mouse is attached to 
-lightpen 
    Enable lightpen emulation 
+lightpen 
    Disable lightpen emulation 
-lightpentype <Type> 
    Set lightpen type 
-drive8type <Type> 
    Set drive type (0: no drive) 
-drive8extend <method> 
    Set drive 40 track extension policy (0: never, 1: ask, 2: on access) 
-drive8idle <method> 
    Set drive idling method (0: no traps, 1: skip cycles, 2: trap idle) 
-drive9type <Type> 
    Set drive type (0: no drive) 
-drive9extend <method> 
    Set drive 40 track extension policy (0: never, 1: ask, 2: on access) 
-drive9idle <method> 
    Set drive idling method (0: no traps, 1: skip cycles, 2: trap idle) 
-drive10type <Type> 
    Set drive type (0: no drive) 
-drive10extend <method> 
    Set drive 40 track extension policy (0: never, 1: ask, 2: on access) 
-drive10idle <method> 
    Set drive idling method (0: no traps, 1: skip cycles, 2: trap idle) 
-drive11type <Type> 
    Set drive type (0: no drive) 
-drive11extend <method> 
    Set drive 40 track extension policy (0: never, 1: ask, 2: on access) 
-drive11idle <method> 
    Set drive idling method (0: no traps, 1: skip cycles, 2: trap idle) 
-truedrive 
    Enable hardware-level emulation of disk drives 
+truedrive 
    Disable hardware-level emulation of disk drives 
-drivesound 
    Enable sound emulation of disk drives 
+drivesound 
    Disable sound emulation of disk drives 
-drive8ram2000 
    Enable 8KB RAM expansion at $2000-$3FFF 
+drive8ram2000 
    Disable 8KB RAM expansion at $2000-$3FFF 
-drive8ram4000 
    Enable 8KB RAM expansion at $4000-$5FFF 
+drive8ram4000 
    Disable 8KB RAM expansion at $4000-$5FFF 
-drive8ram6000 
    Enable 8KB RAM expansion at $6000-$7FFF 
+drive8ram6000 
    Disable 8KB RAM expansion at $6000-$7FFF 
-drive8ram8000 
    Enable 8KB RAM expansion at $8000-$9FFF 
+drive8ram8000 
    Disable 8KB RAM expansion at $8000-$9FFF 
-drive8rama000 
    Enable 8KB RAM expansion at $A000-$BFFF 
+drive8rama000 
    Disable 8KB RAM expansion at $A000-$BFFF 
-drive9ram2000 
    Enable 8KB RAM expansion at $2000-$3FFF 
+drive9ram2000 
    Disable 8KB RAM expansion at $2000-$3FFF 
-drive9ram4000 
    Enable 8KB RAM expansion at $4000-$5FFF 
+drive9ram4000 
    Disable 8KB RAM expansion at $4000-$5FFF 
-drive9ram6000 
    Enable 8KB RAM expansion at $6000-$7FFF 
+drive9ram6000 
    Disable 8KB RAM expansion at $6000-$7FFF 
-drive9ram8000 
    Enable 8KB RAM expansion at $8000-$9FFF 
+drive9ram8000 
    Disable 8KB RAM expansion at $8000-$9FFF 
-drive9rama000 
    Enable 8KB RAM expansion at $A000-$BFFF 
+drive9rama000 
    Disable 8KB RAM expansion at $A000-$BFFF 
-drive10ram2000 
    Enable 8KB RAM expansion at $2000-$3FFF 
+drive10ram2000 
    Disable 8KB RAM expansion at $2000-$3FFF 
-drive10ram4000 
    Enable 8KB RAM expansion at $4000-$5FFF 
+drive10ram4000 
    Disable 8KB RAM expansion at $4000-$5FFF 
-drive10ram6000 
    Enable 8KB RAM expansion at $6000-$7FFF 
+drive10ram6000 
    Disable 8KB RAM expansion at $6000-$7FFF 
-drive10ram8000 
    Enable 8KB RAM expansion at $8000-$9FFF 
+drive10ram8000 
    Disable 8KB RAM expansion at $8000-$9FFF 
-drive10rama000 
    Enable 8KB RAM expansion at $A000-$BFFF 
+drive10rama000 
    Disable 8KB RAM expansion at $A000-$BFFF 
-drive11ram2000 
    Enable 8KB RAM expansion at $2000-$3FFF 
+drive11ram2000 
    Disable 8KB RAM expansion at $2000-$3FFF 
-drive11ram4000 
    Enable 8KB RAM expansion at $4000-$5FFF 
+drive11ram4000 
    Disable 8KB RAM expansion at $4000-$5FFF 
-drive11ram6000 
    Enable 8KB RAM expansion at $6000-$7FFF 
+drive11ram6000 
    Disable 8KB RAM expansion at $6000-$7FFF 
-drive11ram8000 
    Enable 8KB RAM expansion at $8000-$9FFF 
+drive11ram8000 
    Disable 8KB RAM expansion at $8000-$9FFF 
-drive11rama000 
    Enable 8KB RAM expansion at $A000-$BFFF 
+drive11rama000 
    Disable 8KB RAM expansion at $A000-$BFFF 
-dos1541 <Name> 
    Specify name of 1541 DOS ROM image 
-dos1541II <Name> 
    Specify name of 1541-II DOS ROM image 
-dos1570 <Name> 
    Specify name of 1570 DOS ROM image 
-dos1571 <Name> 
    Specify name of 1571 DOS ROM image 
-dos1581 <Name> 
    Specify name of 1581 DOS ROM image 
-dos2000 <Name> 
    Specify name of 2000 DOS ROM image 
-dos4000 <Name> 
    Specify name of 4000 DOS ROM image 
-parallel8 <Type> 
    Set parallel cable type (0: none, 1: standard, 2: Dolphin DOS 3, 3: Formel 64) 
-drive8profdos 
    Enable Professional DOS 
+drive8profdos 
    Disable Professional DOS 
-drive8supercard 
    Enable SuperCard+ 
+drive8supercard 
    Disable SuperCard+ 
-parallel9 <Type> 
    Set parallel cable type (0: none, 1: standard, 2: Dolphin DOS 3, 3: Formel 64) 
-drive9profdos 
    Enable Professional DOS 
+drive9profdos 
    Disable Professional DOS 
-drive9supercard 
    Enable SuperCard+ 
+drive9supercard 
    Disable SuperCard+ 
-parallel10 <Type> 
    Set parallel cable type (0: none, 1: standard, 2: Dolphin DOS 3, 3: Formel 64) 
-drive10profdos 
    Enable Professional DOS 
+drive10profdos 
    Disable Professional DOS 
-drive10supercard 
    Enable SuperCard+ 
+drive10supercard 
    Disable SuperCard+ 
-parallel11 <Type> 
    Set parallel cable type (0: none, 1: standard, 2: Dolphin DOS 3, 3: Formel 64) 
-drive11profdos 
    Enable Professional DOS 
+drive11profdos 
    Disable Professional DOS 
-drive11supercard 
    Enable SuperCard+ 
+drive11supercard 
    Disable SuperCard+ 
-profdos1571 <Name> 
    Specify name of Professional DOS 1571 ROM image 
-supercard <Name> 
    Specify name of SuperCard+ ROM image 
-dos2031 <Name> 
    Specify name of 2031 DOS ROM image 
-dos2040 <Name> 
    Specify name of 2040 DOS ROM image 
-dos3040 <Name> 
    Specify name of 3040 DOS ROM image 
-dos4040 <Name> 
    Specify name of 4040 DOS ROM image 
-dos1001 <Name> 
    Specify name of 1001/8050/8250 DOS ROM image 
-dsresetwithcpu 
    Enable automatic Datasette-Reset 
+dsresetwithcpu 
    Disable automatic Datasette-Reset 
-dszerogapdelay <value> 
    Set delay in cycles for a zero in the tap 
-dsspeedtuning <value> 
    Set number of cycles added to each gap in the tap 
-gluelogictype <Type> 
    Set glue logic type (0 = discrete, 1 = 252535-01) 
-userportrtc 
    Enable Userport DAC for sound output 
+userportrtc 
    Disable Userport DAC for sound output 
-iocollision <method> 
    Select the way the I/O collisions should be handled, (0: error message and detach all involved carts, 1: error message and detach last attached involved carts, 2: warning in log and 'AND' the valid return values 
-mmc64 
    Enable the MMC64 expansion 
+mmc64 
    Disable the MMC64 expansion 
-mmc64bios <Name> 
    Specify name of MMC64 BIOS image 
-mmc64image <Name> 
    Specify name of MMC64 image 
-mmc64readonly 
    Set the MMC64 card to read-only 
-mmc64readwrite 
    Set the MMC64 card to read/write 
-mmc64bioswrite 
    Save the MMC64 bios when changed 
-ieee488 
    Enable the IEEE488 interface emulation 
+ieee488 
    Disable the IEEE488 interface emulation 
-ieee488image <Name> 
    specify IEEE488 interface image name 
-dqbb 
    Enable Double Quick Brown Box 
+dqbb 
    Disable Double Quick Brown Box 
-dqbbimage <Name> 
    Specify Double Quick Brown Box filename 
-dqbbimagerw 
    Allow writing to DQBB image 
+dqbbimagerw 
    Do not write to DQBB image 
-expert 
    Enable the Expert Cartridge 
+expert 
    Disable the Expert Cartridge 
-expertimagename <Name> 
    Set Expert Cartridge image name 
-expertimagerw 
    Allow writing to Expert Cartridge image 
+expertimagerw 
    Do not write to Expert Cartridge image 
-isepic 
    Enable the ISEPIC cartridge 
+isepic 
    Disable the ISEPIC cartridge 
-isepicimagename <Name> 
    Set ISEPIC image name 
-isepicimagerw 
    Allow writing to ISEPIC image 
+isepicimagerw 
    Do not write to ISEPIC image 
-ramcart 
    Enable the RamCart expansion 
+ramcart 
    Disable the RamCart expansion 
-ramcartsize <size in KB> 
    Size of the RAMCART expansion 
-ramcartimage <Name> 
    Specify name of RAMCART image 
-ramcartimagerw 
    Allow writing to RAMCart image 
+ramcartimagerw 
    Do not write to RAMCart image 
-miditype <0-4> 
    MIDI interface type (0: Sequential, 1: Passport, 2: DATEL, 3: Namesoft, 4: Maplin) 
-midi 
    Enable MIDI emulation 
+midi 
    Disable MIDI emulation 
-midiin Name 
    Specify MIDI-In device 
-midiout Name 
    Specify MIDI-Out device 
-digimax 
    Enable the DigiMAX cartridge 
+digimax 
    Disable the DigiMAX cartridge 
-digimaxbase <Base address> 
    Base address of the DigiMAX cartridge 
-ds12c887rtc 
    Enable the DS12C887 RTC cartridge 
+ds12c887rtc 
    Disable the DS12C887 RTC cartridge 
-ds12c887rtcbase <Base address> 
    Base address of the DS12C887 RTC cartridge 
-georam 
    Enable the GEO-RAM expansion unit 
+georam 
    Disable the GEO-RAM expansion unit 
-georamsize <size in KB> 
    Size of the GEORAM expansion unit 
-georamimage <Name> 
    Specify name of GEORAM image 
-georamimagerw 
    Allow writing to GEORAM image 
+georamimagerw 
    Do not write to GEORAM image 
-reu 
    Enable the RAM Expansion Unit 
+reu 
    Disable the RAM Expansion Unit 
-reusize <size in KB> 
    Size of the RAM expansion unit 
-reuimage <Name> 
    Specify name of REU image 
-reuimagerw 
    Allow writing to REU image 
+reuimagerw 
    Do not write to REU image 
-sfxse 
    Enable the SFX Sound Expander cartridge 
+sfxse 
    Disable the SFX Sound Expander cartridge 
-sfxsetype <Type> 
    Set YM chip type (3526 / 3812) 
-sfxss 
    Enable the SFX Sound Sampler cartridge 
+sfxss 
    Disable the SFX Sound Sampler cartridge 
-easyflashjumper 
    Enable EasyFlash jumper 
+easyflashjumper 
    Disable EasyFlash jumper 
-easyflashcrtwrite 
    Enable writing to EasyFlash .crt image 
+easyflashcrtwrite 
    Disable writing to EasyFlash .crt image 
-IDE64image1 <Name> 
    Specify name of IDE64 image file 
-IDE64image2 <Name> 
    Specify name of IDE64 image file 
-IDE64image3 <Name> 
    Specify name of IDE64 image file 
-IDE64image4 <Name> 
    Specify name of IDE64 image file 
-IDE64cyl1 <value> 
    Set number of cylinders for the IDE64 emulation 
-IDE64cyl2 <value> 
    Set number of cylinders for the IDE64 emulation 
-IDE64cyl3 <value> 
    Set number of cylinders for the IDE64 emulation 
-IDE64cyl4 <value> 
    Set number of cylinders for the IDE64 emulation 
-IDE64hds1 <value> 
    Set number of heads for the IDE64 emulation 
-IDE64hds2 <value> 
    Set number of heads for the IDE64 emulation 
-IDE64hds3 <value> 
    Set number of heads for the IDE64 emulation 
-IDE64hds4 <value> 
    Set number of heads for the IDE64 emulation 
-IDE64sec1 <value> 
    Set number of sectors for the IDE64 emulation 
-IDE64sec2 <value> 
    Set number of sectors for the IDE64 emulation 
-IDE64sec3 <value> 
    Set number of sectors for the IDE64 emulation 
-IDE64sec4 <value> 
    Set number of sectors for the IDE64 emulation 
-IDE64autosize1 
    Autodetect image size 
+IDE64autosize1 
    Do not autodetect geometry of formatted images 
-IDE64autosize2 
    Autodetect image size 
+IDE64autosize2 
    Do not autodetect geometry of formatted images 
-IDE64autosize3 
    Autodetect image size 
+IDE64autosize3 
    Do not autodetect geometry of formatted images 
-IDE64autosize4 
    Autodetect image size 
+IDE64autosize4 
    Do not autodetect geometry of formatted images 
-IDE64version4 
    Emulate version 4 hardware 
+IDE64version4 
    Emulate pre version 4 hardware 
-mmcrrescue 
    Enable MMC Replay rescue mode 
+mmcrrescue 
    Disable MMC Replay rescue mode 
-mmcrimagerw 
    Allow writing to MMC Replay image 
+mmcrimagerw 
    Do not write to MMC Replay image 
-mmcrcardimage <filename> 
    Specify MMC Replay card image filename 
-mmcrcardrw 
    Enable writes to MMC Replay card image 
+mmcrcardrw 
    Disable writes to MMC Replay card image 
-mmcreepromimage 
    Specify MMC Replay EEPROM image filename 
-mmcreepromrw 
    Enable writes to MMC Replay EEPROM image 
+mmcreepromrw 
    Disable writes to MMC Replay EEPROM image 
-rrbioswrite 
    Enable saving of the RR ROM at exit 
+rrbioswrite 
    Disable saving of the RR ROM at exit 
-rrbankjumper 
    Set RR Bank Jumper 
+rrbankjumper 
    Unset RR Bank Jumper 
-rrflashjumper 
    Set RR Flash Jumper 
+rrflashjumper 
    Unset RR Bank Jumper 
-cart8 <Name> 
    Attach raw 8KB cartridge image 
-cart16 <Name> 
    Attach raw 16KB cartridge image 
-cartultimax <Name> 
    Attach generic 16kB Ultimax cartridge image 
-cartcrt <Name> 
    Attach CRT cartridge image 
-cartap <Name> 
    Attach raw 32KB Atomic Power cartridge image 
-cartar2 <Name> 
    Attach raw 16kB Action Replay MK2 cartridge image 
-cartar3 <Name> 
    Attach raw 16KB Action Replay MK3 cartridge image 
-cartar4 <Name> 
    Attach raw 32KB Action Replay MK4 cartridge image 
-cartar5 <Name> 
    Attach raw 32KB Action Replay cartridge image 
-cartcap <Name> 
    Attach raw 8kB Capture cartridge image 
-cartcomal <Name> 
    Attach raw 64kB Comal 80 cartridge image 
-cartdep256 <Name> 
    Attach raw Dela EP256 cartridge image 
-cartdep64 <Name> 
    Attach raw Dela EP64 cartridge image 
-cartdep7x8 <Name> 
    Attach raw Dela EP7x8 cartridge image 
-cartdin <Name> 
    Attach raw 128kB Dinamic cartridge image 
-cartdsm <Name> 
    Attach raw 8kB Diashow-Maker cartridge image 
-cartdqbb <Name> 
    Attach raw 16kB Double Quick Brown Box cartridge image 
-carteasy <Name> 
    Attach raw EasyFlash cartridge image 
-cartepyx <Name> 
    Attach raw 8KB Epyx FastLoad cartridge image 
-cartexos <Name> 
    Attach raw 8kB EXOS cartridge image 
-cartexpert <Name> 
    Attach raw 8kB Expert Cartridge image 
-cartf64 <Name> 
    Attach raw 32kB Formel 64 image 
-cartfc1 <Name> 
    Attach raw 16kB Final Cartridge image 
-cartfc3 <Name> 
    Attach raw 64kB Final Cartridge III image 
-cartfcplus <Name> 
    Attach raw 32kB Final Cartridge Plus image 
-cartff <Name> 
    Attach raw 8kB Freeze Frame image 
-cartfm <Name> 
    Attach raw 32kB Freeze Machine image 
-cartfp <Name> 
    Attach raw 128kB Fun Play/Power Play cartridge image 
-cartgk <Name> 
    Attach raw 8KB Game Killer cartridge image 
-cartgeoram <Name> 
    Attach raw GEO-RAM cartridge image 
-cartgs <Name> 
    Attach raw 512kB Game System cartridge image 
-cartide64 <Name> 
    Attach raw 64KB IDE64 cartridge image 
-cartieee <Name> 
    Attach IEEE-488 Interface cartridge image 
-cartisepic <Name> 
    Attach raw 2kB ISEPIC cartridge image 
-cartkcs <Name> 
    Attach raw 16kB KCS Power cartridge image 
-cartks <Name> 
    Attach raw 24kB Kingsoft cartridge image 
-cartmach5 <Name> 
    Attach raw 8kB MACH 5 cartridge image 
-cartmd <Name> 
    Attach raw 32/64/128kB Magic Desk cartridge image 
-cartmf <Name> 
    Attach raw Magic Formel cartridge image 
-cartmikro <Name> 
    Attach raw 8kB Mikro Assembler cartridge image 
-cartmmc64 <Name> 
    Attach raw 8kB MMC64 cartridge image 
-cartmmcr <Name> 
    Attach raw 512kB MMC Replay cartridge image 
-cartmv <Name> 
    Attach raw 16kB Magic Voice cartridge image 
-cartocean <Name> 
    Attach raw Ocean cartridge image 
-cartpf <Name> 
    Attach raw 64KB Pagefox cartridge image 
-cartp64 <Name> 
    Attach raw 256KB Prophet 64 cartridge image 
-cartramcart <Name> 
    Attach raw RamCart cartridge image 
-cartreu <Name> 
    Attach raw REU cartridge image 
-cartrep256 <Name> 
    Attach raw REX EP256 cartridge image 
-cartross <Name> 
    Attach raw 16/32kB ROSS cartridge image 
-cartrr <Name> 
    Attach raw 64KB Retro Replay cartridge image 
-cartru <Name> 
    Attach raw 8kB REX Utility cartridge image 
-carts64 <Name> 
    Attach raw 4kB Snapshot 64 cartridge image 
-cartsb <Name> 
    Attach raw Structured Basic cartridge image 
-cartse5 <Name> 
    Attach raw 16kB Super Explode V5 cartridge image 
-cartsg <Name> 
    Attach raw 64kB Super Games cartridge image 
-cartsilver <Name> 
    Attach raw Silverrock 128 cartridge image 
-cartsimon <Name> 
    Attach raw 16kB Simons Basic cartridge image 
-cartss4 <Name> 
    Attach raw 32KB Super Snapshot V4 cartridge image 
-cartss5 <Name> 
    Attach raw 64KB Super Snapshot V5 cartridge image 
-cartstar <Name> 
    Attach raw 16KB Stardos cartridge image 
-cartwl <Name> 
    Attach raw 16KB Westermann Learning cartridge image 
-cartws <Name> 
    Attach raw 8kB Warp Speed cartridge image 
-cartzaxxon <Name> 
    Attach raw 16kB Zaxxon cartridge image 
-cartreset 
    Reset machine if a cartridge is attached or detached 
+cartreset 
    Do not reset machine if a cartridge is attached or detached 
+cart 
    Disable default cartridge 
-fs8 <Name> 
    Use <name> as directory for file system device #8 
-fs9 <Name> 
    Use <name> as directory for file system device #9 
-fs10 <Name> 
    Use <name> as directory for file system device #10 
-fs11 <Name> 
    Use <name> as directory for file system device #11 
-joydev1 <0-4> 
    Set device for joystick port 1 
-joydev2 <0-4> 
    Set device for joystick port 2 
-extrajoydev1 <0-4> 
    Set device for extra joystick port 1 
-extrajoydev2 <0-4> 
    Set device for extra joystick port 2 
-keybuf <string> 
    Put the specified string into the keyboard buffer. 
-raminitstartvalue <value> 
    Set the value for the very first RAM address after powerup 
-raminitvalueinvert <num of bytes> 
    Length of memory block initialized with the same value 
-raminitpatterninvert <num of bytes> 
    Length of memory block initialized with the same pattern 
-doodleoversize <method> 
    Select the way the oversized input should be handled, (0: scale down, 1: crop left top, 2: crop center top,  3: crop right top, 4: crop left center, 5: crop center, 6: crop right center, 7: crop left bottom, 8: crop center bottom, 9:  crop right bottom) 
-doodlemc <method> 
    Select the way the multicolor to hires should be handled, (0: b&w, 1: 2 colors, 2: 4 colors, 3: gray scale,  4: best cell colors) 
-doodletedlum <method> 
    Select the way the TED luminosity should be handled, (0: ignore, 1: dither) 
-doodlecrtctextcolor <color> 
    Select the CRTC text color (0: white, 1: amber, 2: green) 
-remotemonitor 
    Enable remote monitor 
+remotemonitor 
    Disable remote monitor 
-remotemonitoraddress <Name> 
    The local address the remote monitor should bind to Available command-line options: 
 ```