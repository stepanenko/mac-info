# MacOS Notes

To check if soft is Apple M1 ready go to https://isapplesiliconready.com/

## Keyboard Shortcuts:

**Command + Shift + .** (period) - to make the hidden files appear. (In Terminal, view hidden files with: `ls -la`)

**Command + Shift + 4** - to make selective screenshot.

**Option + Command + C** - to open the console in Safari.

## Terminal Commands:

List all env variables: `env`

Print specific env variable, e.g. PATH: `echo $PATH`

Move smth to `/usr/local/bin`, e.g. terragrunt: `sudo mv ~/Downloads/terragrunt /usr/local/bin`

## PATH Variable in macOS

- PATH is an essential environment variable that decides how programs and commands work on macOS
- Setting the PATH variable for a program or script allows you to run it from anywhere on the file system without specifying its absolute path
- Depending on your usage requirements, you can either set the PATH environment variable temporarily or permanently via the terminal
- More at: https://techpp.com/2021/09/08/set-path-variable-in-macos-guide/

## nano

`nano [filename]` - open file

My Notes - https://github.com/stepanenko/mac-info/blob/master/NANO.md

The editor's cheatsheet: https://www.nano-editor.org/dist/latest/cheatsheet.html

## Vim

`vim [filename]` - open file

My Notes - https://github.com/stepanenko/mac-info/blob/master/VIM.md

The editor's cheatsheet: https://vim.rtorr.com/

## Troubleshooting:

1. After upgrading macOS and running `git` commands, the following error appears:

`xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun`

Solution: Open Terminal, and run the following: `xcode-select --install`

This will pop a dialogue box, Select "Install", and it will download and install the Command Line Tools package and fix the problem.

You do not need Xcode, you can install only the Command Line Tools here, it is about 130Mb.

If the above alone doesn't do it, then also run: `sudo xcode-select --reset`
