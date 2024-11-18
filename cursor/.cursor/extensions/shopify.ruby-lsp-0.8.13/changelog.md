# vscode-ruby-lsp-v0.8.13
## ✨ Enhancements

- Add feature flag support for gradual rollouts (https://github.com/Shopify/ruby-lsp/pull/2825) by @vinistock

## 🐛 Bug Fixes

- Use the same debounced restart for all watchers (https://github.com/Shopify/ruby-lsp/pull/2818) by @vinistock
- Use `rbenv` executable directly if available (https://github.com/Shopify/ruby-lsp/pull/2824) by @vinistock



# vscode-ruby-lsp-v0.8.12
## ✨ Enhancements

- Show that server is running on degraded mode (https://github.com/Shopify/ruby-lsp/pull/2800) by @vinistock

## 🐛 Bug Fixes

- Look for Shadowenv in specific Homebrew path and check for untrusted workspace explicitly (https://github.com/Shopify/ruby-lsp/pull/2791) by @vinistock

## 📦 Other Changes

- Add telemetry for launch failures (https://github.com/Shopify/ruby-lsp/pull/2778) by @vinistock



# vscode-ruby-lsp-v0.8.10
## 🐛 Bug Fixes

- Put git restart guard in a debounce (https://github.com/Shopify/ruby-lsp/pull/2771) by @vinistock



# vscode-ruby-lsp-v0.8.8
## 🐛 Bug Fixes

- Only restart client if the contents of the watched files have changed (https://github.com/Shopify/ruby-lsp/pull/2745) by @vinistock
- Fix activation on files that were previously opened (https://github.com/Shopify/ruby-lsp/pull/2753) by @dirceu
- Ensure default gem path is also in document selector (https://github.com/Shopify/ruby-lsp/pull/2738) by @vinistock



# vscode-ruby-lsp-v0.8.7
## ✨ Enhancements

- Add support for ASDF_DIR environment variable (https://github.com/Shopify/ruby-lsp/pull/2695) by @srcid

## 📦 Other Changes

- Log language server restart reasons (https://github.com/Shopify/ruby-lsp/pull/2736) by @vinistock



# vscode-ruby-lsp-v0.8.6
## 🐛 Bug Fixes

- Ensure all `ruby-lsp` dependencies are installed before launch (https://github.com/Shopify/ruby-lsp/pull/2730) by @vinistock
- Fix conditional local var highlight (https://github.com/Shopify/ruby-lsp/pull/2719) by @v010maaa
- Use activated gem paths to register document selectors (https://github.com/Shopify/ruby-lsp/pull/2718) by @vinistock



# vscode-ruby-lsp-v0.8.5
## 🐛 Bug Fixes

- Prevent accessing rootUri if there's no git repository (https://github.com/Shopify/ruby-lsp/pull/2727) by @vinistock



# vscode-ruby-lsp-v0.8.4
## 🐛 Bug Fixes

- Prevent the same workspace from being lazily launched more than once (https://github.com/Shopify/ruby-lsp/pull/2693) by @vinistock



# vscode-ruby-lsp-v0.8.3
## ✨ Enhancements

- Display add-on version in the displayAddons command (https://github.com/Shopify/ruby-lsp/pull/2662) by @st0012

## 🐛 Bug Fixes

- Find git root through the git extension API (https://github.com/Shopify/ruby-lsp/pull/2682) by @vinistock



# vscode-ruby-lsp-v0.8.2
## 📦 Other Changes

- Remove version manager setting migration code (https://github.com/Shopify/ruby-lsp/pull/2600) by @vinistock



# vscode-ruby-lsp-v0.8.1
## 🐛 Bug Fixes

- Fix rescue token without explicit class (https://github.com/Shopify/ruby-lsp/pull/2578) by @vinistock
- Never set shell on Windows for any version manager (https://github.com/Shopify/ruby-lsp/pull/2597) by @vinistock



# vscode-ruby-lsp-v0.8.0
## ✨ Enhancements

- Delegate all possible features for ERB (https://github.com/Shopify/ruby-lsp/pull/2563) by @vinistock

## 🐛 Bug Fixes

- Use separator for activation script result (https://github.com/Shopify/ruby-lsp/pull/2552) by @vinistock



# vscode-ruby-lsp-v0.7.20
## 📦 Other Changes

- Allow launching the server in debug mode (https://github.com/Shopify/ruby-lsp/pull/2539) by @vinistock



# vscode-ruby-lsp-v0.7.19
## 📦 Other Changes

- Downgrade engine to v1.91 (https://github.com/Shopify/ruby-lsp/pull/2527) by @vinistock



# vscode-ruby-lsp-v0.7.18
## ✨ Enhancements

- Warn users if shadownev is not installed (https://github.com/Shopify/ruby-lsp/pull/2498) by @vinistock
- Show progress while initializing the server (https://github.com/Shopify/ruby-lsp/pull/2505) by @vinistock

## 🐛 Bug Fixes

- fix(grammar): Fix syntax highlighting for Kernel.` method in Ruby grammar (https://github.com/Shopify/ruby-lsp/pull/2493) by @Sean0628
- Always run Ruby activation using cmd for RubyInstaller (https://github.com/Shopify/ruby-lsp/pull/2489) by @vinistock


