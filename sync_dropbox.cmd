Echo "Set utf-8"
chcp 65001

Echo "Sync files with DROPBOX for win10"
Echo "shortcut "mv" not working"



Echo "Sync Sublime Text 3"
move "%AppData%\Sublime Text 3\Packages\User" %USERPROFILE%\Dropbox\work\ST3
mklink /D "%AppData%\Sublime Text 3\Packages\User" %USERPROFILE%\Dropbox\work\ST3\User

Echo "Sync Sublime Text 3 - Package console-log"
move "%AppData%\Sublime Text 3\Packages\console-log" %USERPROFILE%\Dropbox\work\ST3
mklink /D "%AppData%\Sublime Text 3\Packages\console-log" %USERPROFILE%\Dropbox\work\ST3\console-log

Echo "Sync Sublime Text 3 - Package Open-Include"
move "%AppData%\Sublime Text 3\Packages\Open-Include" %USERPROFILE%\Dropbox\work\ST3
mklink /D "%AppData%\Sublime Text 3\Packages\Open-Include" %USERPROFILE%\Dropbox\work\ST3\Open-Include

Echo "Sync Sublime Text 3 - Package BufferScroll-st3"
move "%AppData%\Sublime Text 3\Packages\BufferScroll-st3" %USERPROFILE%\Dropbox\work\ST3
mklink /D "%AppData%\Sublime Text 3\Packages\BufferScroll-st3" %USERPROFILE%\Dropbox\work\ST3\BufferScroll-st3

Echo "Sync Sublime Text 3 - Package Tag-st3"
move "%AppData%\Sublime Text 3\Packages\Tag-st3" %USERPROFILE%\Dropbox\work\ST3
mklink /D "%AppData%\Sublime Text 3\Packages\Tag-st3" %USERPROFILE%\Dropbox\work\ST3\Tag-st3


Echo "Sync FileZilla"
move "%AppData%\FileZilla" %USERPROFILE%\Dropbox\work\FileZilla
mklink /D "%AppData%\FileZilla" %USERPROFILE%\Dropbox\work\FileZilla


Echo "Sync Zadarma"
move "%AppData%\Zadarma" %USERPROFILE%\Dropbox\work\Zadarma
mklink /D "%AppData%\Zadarma" %USERPROFILE%\Dropbox\work\Zadarma
