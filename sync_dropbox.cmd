Echo "Sync files with DROPBOX for win10"
Echo "shortcut "mv" not working"


Echo "Sync Sublime Text 3"
move "%AppData%\Sublime Text 3\Packages\User" %USERPROFILE%\Dropbox\work\ST3
mklink /D "%AppData%\Sublime Text 3\Packages\User" %USERPROFILE%\Dropbox\work\ST3\User

Echo "Sync FileZilla"
move "%AppData%\FileZilla" %USERPROFILE%\Dropbox\work\FileZilla
mklink /D "%AppData%\FileZilla" %USERPROFILE%\Dropbox\work\FileZilla
