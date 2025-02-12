# -----------------------------
# Environment and Path Settings
# -----------------------------

# Function to add a directory to PATH if it's not already included
add_to_path() {
  if [[ ":$PATH:" != *":$1:"* ]]; then
    export PATH="$1:$PATH"
  fi
}

# Add custom scripts directory
add_to_path "$HOME/scripts"

# Add Postgres binaries
add_to_path "/Applications/Postgres.app/Contents/Versions/latest/bin"

# Add ASDF shims
add_to_path "${ASDF_DATA_DIR:-$HOME/.asdf}/shims"

# Add PNPM home
export PNPM_HOME="/Users/drucial/Library/pnpm"
add_to_path "$PNPM_HOME"

# Other environment variables
export LG_CONFIG_FILE="$HOME/.config/lazygit/config.yml"
export EDITOR='nvim'
export VISUAL='nvim'
export STARSHIP_CONFIG=~/.config/starship/starship.toml
# export OBJC_DISABLE_INITIALIZE_FORK_SAFETY=YES
export DISABLE_SPRING=true

# --------------
# zsh Extensions
# --------------
source ~/.config/zsh/aliases.zsh
source ~/.config/zsh/keys.zsh
source ~/.config/zsh/functions.zsh
source ~/.config/zsh/git.zsh
source ~/.config/brew/brew_update.sh

# -------
# Plugins
# -------
eval "$(fzf --zsh)"
eval "$(starship init zsh)"
eval "$(gh copilot alias -- zsh)"
eval "$(zoxide init zsh)"

# ZSH Stuff
source $HOMEBREW_PREFIX/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source $HOMEBREW_PREFIX/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# FZF settings
export FZF_DEFAULT_COMMAND='fd --type f --strip-cwd-prefix --hidden --follow --exclude .git'
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
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

# --------
# Keybinds
# --------
bindkey -r '^N' 

# --------------------------------------
# System-wide configurations loaded last
# --------------------------------------

touch ~/.hushlogin

# Load asdf
# . /opt/homebrew/opt/asdf/libexec/asdf.sh

# pnpm
export PNPM_HOME="/Users/drucial/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end
