-- Configuration for completion plugins
-- This configuration is for the nvim-cmp plugin, which is a completion plugin designed to be fast and extensible.
-- It is configured to work with the nvim-lspconfig plugin, which provides Language Server Protocol (LSP) support for Neovim.
--
-- Keymaps:
--   - ctrl-b: Scroll documentation up
--   - ctrl-f: Scroll documentation down
--   - ctrl-space: Trigger completion
--   - ctrl-e: Cancel completion
--   - enter: Confirm completion

return {
	-- Integration with nvim-lsp for LSP completion
	{ "hrsh7th/cmp-nvim-lsp" },
	-- Integration with GitHub Copilot for AI-assisted completion
	{ "github/copilot.vim" },
	-- Integration with LuaSnip for snippet completion
	{
		"L3MON4D3/LuaSnip",
		dependencies = {
			"saadparwaiz1/cmp_luasnip",
			"rafamadriz/friendly-snippets",
		},
	},
	-- Configuration for nvim-cmp
	{
		"hrsh7th/nvim-cmp",
		config = function()
			local cmp = require("cmp")
			require("luasnip.loaders.from_vscode").lazy_load()

			cmp.setup({
				snippet = {
					expand = function(args)
						require("luasnip").lsp_expand(args.body)
					end,
				},
				window = {
					completion = cmp.config.window.bordered(),
					documentation = cmp.config.window.bordered(),
				},
				mapping = cmp.mapping.preset.insert({
					["<C-b>"] = cmp.mapping.scroll_docs(-4),
					["<C-f>"] = cmp.mapping.scroll_docs(4),
					["<C-Space>"] = cmp.mapping.complete(),
					["<C-e>"] = cmp.mapping.abort(),
					["<CR>"] = cmp.mapping.confirm({ select = false }),
				}),
				sources = cmp.config.sources({
					{ name = "nvim_lsp" },
					{ name = "luasnip" },
					{ name = "buffer" },
					{ name = "path" },
					{ name = "copilot" },
					{ name = "treesitter" },
				}),
			})
		end,
	},
}
