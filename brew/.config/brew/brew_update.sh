#!/bin/bash

function brew() {
  echo "Custom brew function triggered!"
  command brew "$@" 

  if [[ $* =~ "upgrade" ]] || [[ $* =~ "update" ]] || [[ $* =~ "outdated" ]]; then
    sketchybar --trigger brew_update
  fi

  if [[ $* =~ "upgrade" ]] || [[ $* =~ "update" ]] || [[ $* =~ "uninstall" ]] || [[ $* =~ "install" ]]; then
    echo "Updating Brewfile..."
    rm -f ~/.config/brew/brewfile
    brew bundle dump --file=~/.config/brew/brewfile
    sed -i '' '1s/^/# Last updated: '"$(date)"'\n/' ~/.config/brew/brewfile
  fi
}
