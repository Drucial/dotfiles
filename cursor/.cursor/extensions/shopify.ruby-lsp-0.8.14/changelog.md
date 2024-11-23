# vscode-ruby-lsp-v0.8.14
## ✨ Enhancements

- Allow configuring rbenv executable path (https://github.com/Shopify/ruby-lsp/pull/2875) by @aurelien-reeves-scalingo
- Display output channel when addons are clicked (https://github.com/Shopify/ruby-lsp/pull/2850) by @st0012

## 🐛 Bug Fixes

- Prevent Shadowenv from mutating BUNDLE_GEMFILE (https://github.com/Shopify/ruby-lsp/pull/2874) by @vinistock
- Eagerly compute SHA's for watched files (https://github.com/Shopify/ruby-lsp/pull/2861) by @vinistock
- Merge composed bundle environment into Ruby object (https://github.com/Shopify/ruby-lsp/pull/2881) by @vinistock
- Fix enabled feature flags object composition (https://github.com/Shopify/ruby-lsp/pull/2899) by @vinistock
- Limit supported client schemes to file and git (https://github.com/Shopify/ruby-lsp/pull/2889) by @vinistock
- Make `enabled_feature?` return true when all flags are enabled (https://github.com/Shopify/ruby-lsp/pull/2900) by @vinistock

## 📦 Other Changes

- Remove experimental features from extension and migrate old settings (https://github.com/Shopify/ruby-lsp/pull/2830) by @vinistock
- Show multi-root workspace warning as progress instead (https://github.com/Shopify/ruby-lsp/pull/2879) by @vinistock
- Only include workspace name as part of telemetry (https://github.com/Shopify/ruby-lsp/pull/2883) by @vinistock
- Allow individual version managers to trigger manual Ruby selection (https://github.com/Shopify/ruby-lsp/pull/2835) by @vinistock
- Fallback to latest known Ruby if no .ruby-version is found (https://github.com/Shopify/ruby-lsp/pull/2836) by @vinistock



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


