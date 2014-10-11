---
layout: post
title: Git Aliases
date: 2014-10-15
---

Git is amazing, but the commands are too long. Aliases fix this. If you've done [Git Immersion](http://gitimmersion.com/), you'll recognize a lot of the aliases here. If you don't now what aliases are, this tutorial is for you. If you have been too lazy to add them to your config files, I'm lazier--that's why I alias as much as I can. Less typing = happier me.  
Let's get started.
Open your bash profile in your favorite text editor.

    $ atom ~/.bash_profile

You add your shortcuts here. The layout for aliases is

    alias shortcut='thing you are making a shortcut for'

Here is a list of my git aliases. I'm usually anti copy-paste, but feel free to copy and paste these into your bash profile and tell me so that I feel like I helped someone:

    alias ga="git add"  
    alias gc="git commit --verbose"  
    alias gb="git branch"  
    alias gs="git status"  
    alias go="git checkout"  
    alias gd="git diff"

This makes my git workflow much nicer, faster, and better--I type 'gs' way faster, mistype it less, and type it more (no more accidental commits from not checking myself) than 'git status'  

You can also customize your gitconfig settings. You can access those by opening
it in your text editor. ```$ atom ~/.gitconfig```  
The game changer here is this awesome alias for making your git log better.

    hist = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative

Make your life easier. Alias your commands. When I was doing learn you node, I aliased ```learnyounode``` to ```lyn```. My life is now better.
