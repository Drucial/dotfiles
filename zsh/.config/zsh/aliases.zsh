DOTS=$HOME/.config/

#-------------------
# Directories
#-------------------

alias dev='cd /Users/drucial/Dev'
alias dots='cd $DOTS'
alias scripts='cd ~/.scripts'
alias paintserver='cd /Users/drucial/Dev/craftwork-rails/'
alias craftwork='cd /Users/drucial/Dev/craftwork/'
alias hyperdirmic='cd /Users/drucial/Dev/hyperdirmic/'
alias hypertext='cd /Users/drucial/Dev/hypertext/'
alias ext='cd /Users/drucial/Dev/extensions/'
alias editdots='cd Users/drucial/Dev/extensions/edit-dotfiles/'
alias raycastyabai='cd /Users/drucial/Dev/extensions/raycast-yabai/'

#-------------------
# Locations
# ------------------

alias drucialpi='ssh drucial@drucialpi.local'
alias drucialserver='ssh drucial@drucialserver.local'

#-------------------
# VNC
# ------------------

alias start-vnc="sudo systemctl start x11vnc.service"
alias check-vnc="sudo systemctl status x11vnc.service"
alias kill-vnc="sudo systemctl stop x11vnc.service"

#-------------------
# Files
#-------------------

alias e_zsh='nvim ~/.config/zsh/.zshrc'
alias e_nvim='nvim ~/.config/nvim'
alias e_alias='nvim ~/.config/zsh/aliases.zsh'
alias e_warp='nvim ~/.warp/themes/Celestial.yaml'
alias e_kitty='nvim ~/.config/kitty/kitty.conf'
alias e_gitconfig='nvim ~/.gitconfig'
alias e_starship='nvim ~/.config/starship.toml'
alias e_bat='nvim ~/.config/bat/config'

#-------------------
# Shortcuts
#-------------------

alias ip='echo $(curl -s ipinfo.io) | jq '.'; curl -s ipinfo.io/ip | pbcopy; echo "IP address copied to cliboard."'
alias neo='nvim'
alias be='bundle exec'
alias f='fzf --preview '\''bat --color=always {}'\'' --preview-window '\''~3'\'''
alias ff="nvim \$(fzf --preview 'bat --color=always {}' --preview-window '~3')"
alias cat='bat'
alias ls='lsd'
alias lsl='lsd -l'
alias lsa='lsd -a'
alias lsla='lsd -la'
alias s_zsh='source ~/.config/zsh/.zshrc'
alias screen='screen -c ~/.config/screen/.screenrc'
alias cd='z'
alias stowconfig='cd ~/Dotfiles && stow --target=/Users/drucial/.config dot_config'



#-------------------
# CLI Utilities
# ------------------

alias c='clear'
alias h='history'
alias x='exit'
alias e="~/.scripts/nvim_wrapper.sh"

#-------------------
# Git
#-------------------

alias gg='lazygit'
alias gst='git status'
alias gco='git checkout'
alias gcom='git checkout main'
alias gcob='git checkout -b'
alias gcm='git commit -m' 
alias gcam='git commit --all -m'  
alias gb='git branch'
alias ga='git add'
alias gaa='git add -A'
alias gpo='git pull'
alias gpsup='git push --set-upstream origin $(git_branch_name)'
alias ghpr='open_github_pr' 
alias gdc='git diff main | pbcopy && echo "Diff copied to clipboard."'

#-------------------
# Scripts
# ------------------

alias resizeimage='~/.scripts/resize_image.sh'
alias renamefiles='~/.scripts/rename_files.sh'
alias openwork='~/.scripts/work_setup.sh'
alias closework='~/.scripts/work_teardown.sh'

#-------------------
# Notes
# ------------------

alias note='cd ~/Notes && nvim ~/Notes/$(date +"%B_%d_%Y").md'
alias editnotes='cd ~/Notes && nvim ~/Notes'
alias notes='ls --tree ~/Notes'