-- Nvim-Tree Configuration
-- This configuration sets up the nvim-tree.lua plugin, which provides a file explorer
-- sidebar for Neovim.

local function root_folder_label(root_cwd)
	local icon = "" -- Folder icon
	local folder_name = vim.fn.fnamemodify(root_cwd, ":t")
	folder_name = folder_name:gsub("[-_]", " ")

	local capitalized_folder_name = folder_name:gsub("(%a)([%w]*)", function(first, rest)
		return first:upper() .. rest:lower()
	end)

	return icon .. " " .. capitalized_folder_name
end

local function start_cursor_on_second_line()
	vim.defer_fn(function()
		local bufname = vim.fn.bufname()
		if string.find(bufname, "NvimTree_") then
			vim.api.nvim_win_set_cursor(0, { 2, 0 })
		end
	end, 100)
end

return {
	"nvim-tree/nvim-tree.lua",
	dependencies = "nvim-tree/nvim-web-devicons",
	config = function()
		local nvimtree = require("nvim-tree")

		vim.g.loaded_netrw = 1
		vim.g.loaded_netrwPlugin = 1

		local nvim_tree_api = require("nvim-tree.api")
		local Event = nvim_tree_api.events.Event

		nvim_tree_api.events.subscribe(Event.TreeOpen, function()
			start_cursor_on_second_line()
		end)

		nvimtree.setup({
			actions = {
				open_file = {
					window_picker = {
						enable = false,
					},
				},
				change_dir = {
					enable = false,
				},
			},
			diagnostics = {
				enable = true,
				icons = {
					hint = "",
					info = "",
					warning = "",
					error = "",
				},
			},
			git = {
				enable = true,
				ignore = false,
			},
			filters = {
				enable = true,
				custom = {
					"node_modules",
					"^.git$",
					".pytest_cache",
					".idea",
					".DS_Store",
					"venv",
					".venv",
					"__pycache__",
					"*.swp",
					"*.swo",
					"*.bak",
					"*.tmp",
					"logs",
					"*.log",
					"cache",
				},
			},
			hijack_cursor = true,
			modified = {
				enable = true,
			},
			renderer = {
				group_empty = true,
				highlight_diagnostics = "all",
				highlight_opened_files = "all",
				highlight_modified = "all",
				indent_markers = {
					enable = true,
					inline_arrows = false,
					icons = {
						corner = "⎩",
						edge = "⎥",
						item = "⎬",
						bottom = "─",
						none = " ",
					},
				},
				root_folder_label = root_folder_label,
				icons = {
					diagnostics_placement = "after",
					git_placement = "after",
					padding = " ",
					show = {
						folder_arrow = false,
						bookmarks = false,
						diagnostics = false,
						modified = false,
					},
					glyphs = {
						default = "",
						symlink = "",
						git = {
							unstaged = "*",
							staged = "+",
							unmerged = "⇡",
							renamed = "»",
							untracked = "?",
							deleted = "-",
							ignored = "◌",
						},
						folder = {
							default = "",
							open = "",
							empty = "",
							empty_open = "",
							symlink = "",
						},
					},
					web_devicons = {
						folder = {
							color = false,
						},
					},
				},
			},
			select_prompts = true,
			view = {
				number = true,
				relativenumber = true,
				cursorline = false,
				signcolumn = "no",
				width = {
					min = 25,
					max = 35,
					padding = 2,
				},
			},
			on_attach = function(bufnr)
				local api = require("nvim-tree.api")

				-- Default mappings
				api.config.mappings.default_on_attach(bufnr)

				-- Remove the C-t key mapping
				vim.api.nvim_buf_del_keymap(bufnr, "n", "<C-t>")
			end,
		})

		local wk = require("which-key")
-- Leader-prefixed navigation mappings
wk.add({
  { "<leader>n", group = "Nav" }, -- Define a group for navigation commands
  { "<leader>nf", "<cmd>NvimTreeFindFile<CR>", desc = "Open nav on file" },
  { "<leader>nx", "<cmd>NvimTreeCollapse<CR>", desc = "Collapse nav" },
  { "<leader>nr", "<cmd>NvimTreeRefresh<CR>", desc = "Refresh nav" },
})

-- Standalone mapping for toggling navigation
wk.add({
  { "<C-n>", "<cmd>NvimTreeToggle<CR>", desc = "Toggle nav" },
})
	end,
}
