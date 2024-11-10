-- Treesitter Configuration
-- This configuration sets up the nvim-treesitter plugin, which enhances Neovim's
-- syntax highlighting and indentation capabilities using the Tree-sitter parsing library.
--
-- Keymaps:
--   - <C-space>: Initiate incremental selection
--   - <bs>: Contract the current selection

return {
	"nvim-treesitter/nvim-treesitter",
	event = { "BufReadPre", "BufNewFile" },
	build = ":TSUpdate",
	config = function()
		local treesitter = require("nvim-treesitter.configs")

		treesitter.setup({
			auto_install = true,
			highlight = {
				enable = true,
        -- additional_vim_regex_highlighting = true,
			},
			indent = { enable = true },
			incremental_selection = {
				enable = true,
				keymaps = {
					init_selection = "<C-space>",
					node_incremental = "<C-space>",
					scope_incremental = false,
					node_decremental = "<bs>",
				},
			},
		})
	end,
}

