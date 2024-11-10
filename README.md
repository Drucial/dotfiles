# Drucial Dotfiles

![CleanShot 2024-11-10 at 16 20 13@2x](https://github.com/user-attachments/assets/e9e48663-fef0-4b0e-944f-44c6899fe6aa)

Welcome to my personal dotfiles repository! This repository contains configuration files for various applications and tools I use on my machine. The setup is managed using GNU Stow for easy symlink management.

## Table of Contents

-  [Installation](#installation)
-  [Included Configurations](#included-configurations)
-  [Syncing to Another Computer](#syncing-to-another-computer)
-  [Forking the Repository](#forking-the-repository)
-  [Usage](#usage)
-  [Custom Scripts](#custom-scripts)
-  [Contributing](#contributing)
-  [License](#license)

## Installation

To get started with my dotfiles, clone the repository and use GNU Stow to manage the symlinks:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Drucial/dotfiles.git
   cd dotfiles
   ```

2. **Install GNU Stow** (if not already installed):
   - On Debian/Ubuntu-based systems:
     ```bash
     sudo apt install stow
     ```
   - On macOS (using Homebrew):
     ```bash
     brew install stow
     ```

3. **Symlink the Configurations**:
   Use Stow to create symlinks for the configuration you want to use. For example, to set up your Neovim configuration:

   ```bash
   stow nvim
   ```

   This command will symlink the contents of the `nvim` directory to your home directory.

4. **Repeat for Other Configurations**:
   You can repeat the stow command for other configurations like `alacritty`, `zsh`, `tmux`, etc.:
   ```bash
   stow alacritty
   stow zsh
   ```

## Included Configurations

Here's a list of the configurations included in this repository:

-  **Alacritty**: Configuration for the Alacritty terminal emulator.
-  **Bat**: Configuration for `bat`, a cat clone with syntax highlighting.
-  **Borders**: Custom border settings for your window manager or terminal.
-  **GH (GitHub CLI)**: Configuration for the GitHub command-line interface.
-  **GH Copilot**: Settings related to GitHub Copilot.
-  **Kitty**: Configuration for the Kitty terminal emulator.
-  **Lazygit**: Configuration for Lazygit, a simple terminal UI for git commands.
-  **Neofetch**: Configuration for Neofetch, a command-line system information tool.
-  **Neovim (Nvim)**: Configuration for Neovim with plugins and custom settings.
-  **Raycast**: Configuration for Raycast, a productivity tool.
-  **Screen**: Configuration for GNU Screen, a terminal multiplexer.
-  **Sketchybar**: Configuration for Sketchybar, a customizable macOS status bar.
-  **Starship**: Configuration for Starship, a cross-shell prompt.
-  **Theme**: Custom themes for various applications.
-  **Yabai**: Configuration for Yabai, a tiling window manager for macOS.
-  **Zsh**: Configuration files for Zsh, including plugins and themes.

## Syncing to Another Computer

To sync your dotfiles on another computer, follow these steps:

1. **Ensure Git and Stow are Installed**:
   Make sure `git` and `stow` are installed on the new machine. You can install them using your package manager as shown in the installation section above.

2. **Clone the Repository**:
   Open a terminal on the new computer and clone your dotfiles repository:
   ```bash
   git clone https://github.com/Drucial/dotfiles.git
   cd dotfiles
   ```

3. **Symlink the Configurations**:
   Use Stow to set up the configurations you need. For example:
   ```bash
   stow nvim
   stow zsh
   ```

4. **Customize as Needed**:
   You can edit any configuration files to make machine-specific adjustments if necessary.

5. **Pull Updates**:
   If you make changes to your dotfiles on one machine and push them to GitHub, you can update the other machine by navigating to the dotfiles directory and running:
   ```bash
   git pull
   ```

## Forking the Repository

If you want to create your own version of these dotfiles, you can fork this repository. Here’s how:

1. **Fork the Repository**:
   - Go to the repository page on GitHub: [Drucial/dotfiles](https://github.com/Drucial/dotfiles).
   - Click the "Fork" button in the upper right corner of the page. This will create a copy of the repository under your own GitHub account.

2. **Clone Your Fork**:
   - Clone your forked repository to your local machine:
     ```bash
     git clone https://github.com/YOUR_USERNAME/dotfiles.git
     cd dotfiles
     ```

3. **Make Your Changes**:
   - You can now make changes to your fork. Customize the configurations as needed.

4. **Push Changes**:
   - Once you have made your changes, commit them and push to your fork:
     ```bash
     git add .
     git commit -m "Your commit message"
     git push origin main
     ```

5. **Sync with Original**:
   - To keep your fork up to date with the original repository, you can add the original repository as an upstream remote and pull changes:
     ```bash
     git remote add upstream https://github.com/Drucial/dotfiles.git
     git fetch upstream
     git merge upstream/main
     ```

## Usage

After installing, you can customize the configurations to suit your workflow. For example, you can edit the `.zshrc`, `.vimrc`, or `alacritty.yml` files to add your own aliases or functions.

To apply changes, you might need to reload your shell or restart applications.

## Custom Scripts

This repository may contain custom scripts to automate tasks or enhance productivity. Check the `scripts` directory for more information.

## Contributing

At this time, I am not accepting pull requests for this repository. However, feel free to fork the repository and make any changes you need for your personal use. If you have suggestions or feedback, you can reach out to me directly.

## License

This repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details
