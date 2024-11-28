# ------------------------------
# Environment and Path Settings
# ------------------------------
export PATH="$HOME/scripts:$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin"
export LG_CONFIG_FILE="$HOME/.config/lazygit/config.yml"
export EDITOR='nvim'
export VISUAL='nvim'

# ------------------------------
# zsh Extensions
# ---------------------
source ~/.config/zsh/aliases.zsh
source ~/.config/zsh/keys.zsh
source ~/.config/zsh/functions.zsh
source ~/.config/zsh/git.zsh
source ~/.config/brew/brew_update.sh

# ------------------------------
# Plugins
# ------------------------------
eval "$(fzf --zsh)"
eval "$(starship init zsh)"
eval "$(gh copilot alias -- zsh)"
eval "$(zoxide init zsh)"

# FZF settings

# Setting fd as the default source for fzf
export FZF_DEFAULT_COMMAND='fd --type f --strip-cwd-prefix --hidden --follow --exclude .git'
# To apply the command to CTRL-T as well
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"

# https://vitormv.github.io/fzf-themes#eyJib3JkZXJTdHlsZSI6InJvdW5kZWQiLCJib3JkZXJMYWJlbCI6IiIsImJvcmRlckxhYmVsUG9zaXRpb24iOjAsInByZXZpZXdCb3JkZXJTdHlsZSI6InJvdW5kZWQiLCJwYWRkaW5nIjoiIiwibWFyZ2luIjoiMCIsInByb21wdCI6IuKJiCIsIm1hcmtlciI6IuKclO+4jiIsInBvaW50ZXIiOiLihpIiLCJzZXBhcmF0b3IiOiLilIAiLCJzY3JvbGxiYXIiOiLilIIiLCJsYXlvdXQiOiJkZWZhdWx0IiwiaW5mbyI6InJpZ2h0IiwiY29sb3JzIjoiZmc6I2QwZDBkMCxmZys6I2ZmZmZmZixiZzojMjEyMDJlLGJnKzojMzYzNDRhLGhsOiNhMjc3ZmYsaGwrOiNhMzc4ZmYsaW5mbzojNGQ0ZDRkLG1hcmtlcjojNjFmZmNhLHByb21wdDojYTI3N2ZmLHNwaW5uZXI6I2ZmNjc2Nyxwb2ludGVyOiNhMjc3ZmYsaGVhZGVyOiM0ZDRkNGQsYm9yZGVyOiM0ZDRkNGQsc2VwYXJhdG9yOiM0ZDRkNGQsc2Nyb2xsYmFyOiM0ZDRkNGQscHJldmlldy1ib3JkZXI6IzRkNGQ0ZCxwcmV2aWV3LXNjcm9sbGJhcjojNGQ0ZDRkLGxhYmVsOiNhZWFlYWUscXVlcnk6I2VkZWNlZSxkaXNhYmxlZDojNGQ0ZDRkIn0=
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
  --color=fg:#d0d0d0,fg+:#ffffff,bg:#21202e,bg+:#36344a
  --color=hl:#a277ff,hl+:#a378ff,info:#4d4d4d,marker:#61ffca
  --color=prompt:#a277ff,spinner:#ff6767,pointer:#a277ff,header:#4d4d4d
  --color=border:#4d4d4d,separator:#4d4d4d,scrollbar:#4d4d4d,preview-border:#4d4d4d
  --color=preview-scrollbar:#4d4d4d,label:#aeaeae,query:#edecee,disabled:#4d4d4d
  --border="rounded" --border-label="FzF" --preview-window="border-rounded" --padding="0"
  --prompt="≈" --marker="✔︎" --pointer="→" --separator="─"
  --scrollbar="│"
  --layout=reverse-list
  --info=inline'
# export FZF_DEFAULT_COMMAND='ag -g ""'



bindkey -r '^N' 


# ---------------------------------------
# System-wide configurations loaded last
# ---------------------------------------

# remove ctrl+n keybinding for cursor terminal functionality
# preexec () {
#   stty quit '^N'
# }
# precmd () {
#   stty quit undef
# }

# Load asdf
. /opt/homebrew/opt/asdf/libexec/asdf.sh

# ZSH Stuff
source $HOMEBREW_PREFIX/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source $HOMEBREW_PREFIX/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# pnpm
export PNPM_HOME="/Users/drucial/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end
