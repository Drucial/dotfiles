# Precmd function to move the prompt to the bottom
function precmd() {
  echo -ne "\033[999;1H"
}

# Function to add a new alias
function add_alias() {
  if [ -z "$1" ]; then
    echo "Enter alias name: "
    read alias_name
  fi
  echo "Enter alias command: "
  read alias_command
  echo "alias $alias_name='$alias_command'" >> ~/.config/zsh/aliases.zsh
  # Reload the aliases
  source ~/.config/zsh/.zshrc
  # check if the alias was added
  if grep -q "alias $alias_name=" ~/.config/zsh/aliases.zsh; then
    echo "Alias $alias_name added."
  else
    echo "Alias $alias_name not added."
  fi
}

# Function to remove an  existing alias
function remove_alias() {
  if [ -z "$1" ]; then
    echo "Enter alias name: "
    read alias_name
  fi
  # does the alias exist?
  if grep -q "alias $alias_name=" ~/.config/zsh/aliases.zsh; then
    sed -i '' "/alias $alias_name=/d" ~/.config/zsh/aliases.zsh
    # Reload the aliases
    source ~/.config/zsh/.zshrc
    # confirm alias removed
    echo "Alias $alias_name removed."
  else
    echo "Alias $alias_name not found."
  fi
}
