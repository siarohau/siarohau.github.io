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


Echo "Sync FileZilla"
move "%AppData%\FileZilla" %USERPROFILE%\Dropbox\work\FileZilla
mklink /D "%AppData%\FileZilla" %USERPROFILE%\Dropbox\work\FileZilla
