-- Configuration for folke/which-key.nvim
-- This configuration sets up the which-key.nvim plugin, which provides
-- a visual interface to help you discover and remember key mappings in Neovim.

return {
	"folke/which-key.nvim",
	event = "VeryLazy",
	init = function()
		vim.o.timeout = true
		vim.o.timeoutlen = 500
	end,
	config = function()
		local wk = require("which-key")

		wk.setup({
			icons = {
				breadcrumb = "»",
				separator = "➜",
				group = "+",
			},
			win = {
				border = "rounded",
				padding = { 1, 0 },
			},
		})

		wk.add({
			{ "<leader>+", "<C-a>", desc = "Increment number" },
			{ "<leader>-", "<C-x>", desc = "Decrement number" },
			{ "<leader>b", group = " Buffer" },
			{ "<leader>bd", "<cmd>bd<CR>", desc = "Delete buffer" },
			{ "<leader>bf", "<cmd>Telescope buffers<cr>", desc = "Find buffers" },
			{ "<leader>bn", "<cmd>bn<CR>", desc = "Next buffer" },
			{ "<leader>bp", "<cmd>bp<CR>", desc = "Previous buffer" },
			{ "<leader>bs", "<cmd>ls<CR>", desc = "List buffers" },
			{ "<leader>c", group = " Code" },
			{ "<leader>fx", ":nohl<CR>", desc = "Clear search highlights" },
			{ "<leader>g", group = " Git" },
			{ "<leader>gg", "<cmd>LazyGit<cr>", desc = "Open lazy git" },
			{ "<leader>r", ":luafile %<CR>", desc = "Source current Lua file" },
			{ "<leader>w", group = " Workspace/Window" },
			{ "<leader>we", "<C-w>=", desc = "Make splits equal size" },
			{ "<leader>wh", "<C-w>s", desc = "Split window horizontally" },
			{ "<leader>wm", "<cmd>MaximizerToggle<CR>", desc = "Maximize/minimize a split" },
			{ "<leader>wt", ":vs<CR>:Telescope find_files<CR>", desc = "Split window vertically and open Telescope" },
			{ "<leader>wv", "<C-w>v", desc = "Split window vertically" },
			{ "<leader>wx", "<cmd>close<CR>", desc = "Close current split" },
			{ "x", '"_x', desc = "Delete character without yanking" },
		})
	end,
}
