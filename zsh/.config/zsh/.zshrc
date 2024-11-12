# ------------------------------
# Environment and Path Settings
# ------------------------------
export PATH="$HOME/scripts:$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin"
export LG_CONFIG_FILE="$HOME/.config/lazygit/config.yml"

# ---------------------
# Custom Alias Section
# ---------------------
source ~/.config/zsh/aliases.zsh
source ~/.config/zsh/keys.zsh

# ------------------
# Theme and Plugins
# ------------------
eval "$(fzf --zsh)"
eval "$(starship init zsh)"
eval "$(gh copilot alias -- zsh)"
eval "$(zoxide init zsh)"


# FZF settings
# https://vitormv.github.io/fzf-themes#eyJib3JkZXJTdHlsZSI6InJvdW5kZWQiLCJib3JkZXJMYWJlbCI6IiQocHdkKSIsImJvcmRlckxhYmVsUG9zaXRpb24iOjAsInByZXZpZXdCb3JkZXJTdHlsZSI6InJvdW5kZWQiLCJwYWRkaW5nIjoiMSIsIm1hcmdpbiI6IjEiLCJwcm9tcHQiOiLina8gIiwibWFya2VyIjoi4pa3ICIsInBvaW50ZXIiOiLina8iLCJzZXBhcmF0b3IiOiLilIAiLCJzY3JvbGxiYXIiOiIiLCJsYXlvdXQiOiJkZWZhdWx0IiwiaW5mbyI6InJpZ2h0IiwiY29sb3JzIjoiZmc6I0ZGRkZGRixmZys6I2QwZDBkMCxiZzojMDMwNTE3LGJnKzojMjgzMDM3LGhsOiM4ODk0QUQsaGwrOiM2OUZFRTMsaW5mbzojZDBkMGQwLG1hcmtlcjojZmYzYzc3LHByb21wdDojZmYzY2E2LHNwaW5uZXI6IzY5RkVFMyxwb2ludGVyOiM2OUZFRTMsaGVhZGVyOiNmZjNjYTYsZ3V0dGVyOiMwMzA1MTcsYm9yZGVyOiM4ODk0QUQsc2VwYXJhdG9yOiMyODMwMzcscHJldmlldy1ib3JkZXI6Izg4OTRBRCxwcmV2aWV3LXNjcm9sbGJhcjojMDMwNTE3LHByZXZpZXctbGFiZWw6IzY5RkVFMyxsYWJlbDojZmYzY2E2LHF1ZXJ5OiNmZmZhZmEifQ==
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
  --color=fg:#FFFFFF,fg+:#d0d0d0,bg:#030517,bg+:#283037
  --color=hl:#8894AD,hl+:#69FEE3,info:#d0d0d0,marker:#ff3c77
  --color=prompt:#ff3ca6,spinner:#69FEE3,pointer:#69FEE3,header:#ff3ca6
  --color=gutter:#030517,border:#8894AD,separator:#283037,preview-border:#8894AD
  --color=preview-scrollbar:#030517,preview-label:#69FEE3,label:#ff3ca6,query:#fffafa
  --border="rounded" --border-label="Search" --border-label-pos="0" --preview-window="border-rounded"
  --padding="1" --margin="1" --prompt="❯ " --marker="▷ "
  --pointer="❯" --separator="─" --scrollbar="" --info="right"'
export FZF_DEFAULT_COMMAND='ag -g ""'


# ---------------------------------------
# System-wide configurations loaded last
# ---------------------------------------
# Load asdf
. /opt/homebrew/opt/asdf/libexec/asdf.sh

# ---------------------------------------
# Custom Scripts and Functions
# ---------------------------------------

source ~/.config/zsh/git.zsh
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.scripts/set_terminal_tab_title.sh

# Updates outdated brew packages after running brew commands
source ~/.config/brew/brew_update.sh

# Hyperdirmic utility commands
alias organize='source ./scripts/venv/bin/activate && PYTHONPATH=./scripts python -m src.main'
alias killhyperdirmic='pkill -f "python -m src.main"'
alias loghyperdirmic='cat /tmp/com.drucial.hyperdirmic.out'
alias errorhyperdirmic='cat /tmp/com.drucial.hyperdirmic.err'
alias debughyperdirmic='cat /tmp/com.drucial.hyperdirmic.debug.log'
alias allhyperdirmiclogs='cat /tmp/hyperdirmic.log /tmp/com.drucial.hyperdirmic.out /tmp/com.drucial.hyperdirmic.err /tmp/com.drucial.hyperdirmic.debug.log'

source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# Function to keep the prompt at the bottom
function keep_prompt_at_bottom() {
  echo -ne "\033[999;1H"
}

# Precmd function to move the prompt to the bottom
function precmd() {
  keep_prompt_at_bottom
}
