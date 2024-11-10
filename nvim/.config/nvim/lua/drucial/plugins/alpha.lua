-- Alpha configuration
-- Alpha manages the dashboard and the lazy plugin loaders.

return {
	"goolord/alpha-nvim",
	event = "VimEnter",
	enabled = true,
	init = false,
	opts = function()
		local dashboard = require("alpha.themes.dashboard")
		-- local colorscheme = require("drucial/plugins/colorscheme")
		-- local colors = colorscheme.colors

		-- Set colors for dashboard logos from global colorscheme
		-- vim.api.nvim_set_hl(0, "NeovimDashboardLogo1", { fg = colors.pink })
		-- vim.api.nvim_set_hl(0, "NeovimDashboardLogo2", { fg = colors.magenta })
		-- vim.api.nvim_set_hl(0, "NeovimDashboardLogo3", { fg = colors.cyan })
		-- vim.api.nvim_set_hl(0, "NeovimDashboardLogo4", { fg = colors.magenta })
		-- vim.api.nvim_set_hl(0, "NeovimDashboardLogo5", { fg = colors.pink })

		-- Dashboard header art
		-- Visualization of dashboard.section.header.val:
		-- [[  Y88b Y88  888'Y88   e88 88e   Y88b Y88    Y8b Y88888P  888      e   e     ]]
		-- [[   Y88b Y8  888 ,'Y  d888 888b   Y88b Y8     Y8b Y888P   888     d8b d8b    ]]
		-- [[  b Y88b Y  888C8   C8888 8888D b Y88b Y      Y8b Y8P    888    e Y8b Y8b   ]]
		-- [[  8b Y88b   888 ",d  Y888 888P  8b Y88b        Y8b Y     888   d8b Y8b Y8b  ]]
		-- [[  88b Y88b  888,d88   "88 88"   88b Y88b        Y8P      888  d888b Y8b Y8b ]]

		dashboard.section.header.type = "group"
		-- dashboard.section.header.val = {
		-- 	{
		-- 		type = "text",
		-- 		val = [[  Y88b Y88  888'Y88   e88 88e   Y88b Y88    Y8b Y88888P  888      e   e     ]],
		-- 		opts = { hl = "NeovimDashboardLogo1", shrink_margin = false, position = "center" },
		-- 	},
		-- 	{
		-- 		type = "text",
		-- 		val = [[   Y88b Y8  888 ,'Y  d888 888b   Y88b Y8     Y8b Y888P   888     d8b d8b    ]],
		-- 		opts = { hl = "NeovimDashboardLogo2", shrink_margin = false, position = "center" },
		-- 	},
		-- 	{
		-- 		type = "text",
		-- 		val = [[  b Y88b Y  888C8   C8888 8888D b Y88b Y      Y8b Y8P    888    e Y8b Y8b   ]],
		-- 		opts = { hl = "NeovimDashboardLogo3", shrink_margin = false, position = "center" },
		-- 	},
		-- 	{
		-- 		type = "text",
		-- 		val = [[  8b Y88b   888 ",d  Y888 888P  8b Y88b        Y8b Y     888   d8b Y8b Y8b  ]],
		-- 		opts = { hl = "NeovimDashboardLogo4", shrink_margin = false, position = "center" },
		-- 	},
		-- 	{
		-- 		type = "text",
		-- 		val = [[  88b Y88b  888,d88   "88 88"   88b Y88b        Y8P      888  d888b Y8b Y8b ]],
		-- 		opts = { hl = "NeovimDashboardLogo5", shrink_margin = false, position = "center" },
		-- 	},
		-- }

		local colors = {
			"#a277ff",
			"#a57afc",
			"#a87cf9",
			"#aa7ef7",
			"#ad81f4",
			"#b083f1",
			"#b386ee",
			"#b688eb",
			"#b98ae9",
			"#bb8de6",
			"#be8fe3",
			"#c191e0",
			"#c494de",
			"#c796db",
			"#ca98d8",
			"#cc9bd5",
			"#cf9dd3",
			"#d29fd0",
			"#d5a2cd",
			"#d8a4ca",
			"#dba7c8",
			"#dea9c5",
			"#e1abc2",
			"#e4aec0",
			"#e7b0bd",
			"#eab2ba",
			"#edb5b7",
			"#efb7b5",
			"#f2b9b2",
			"#f5bcb0",
			"#f8bead",
			"#fbc0aa",
			"#fec3a7",
			"#ffbea4",
			"#ffb8a1",
			"#ffb29e",
			"#ffac9b",
			"#ffa698",
			"#ff9f95",
			"#ff9992",
			"#ff938f",
			"#ff8d8c",
			"#ff8789",
			"#ff8086",
			"#ff7a83",
			"#ff747f",
			"#ff6e7c",
			"#ff6879",
			"#ff6176",
			"#ff5b73",
			"#ff556f",
			"#ff4f6c",
			"#ff4969",
			"#ff4266",
			"#ff3c63",
			"#ff365f",
			"#ff305c",
			"#ff2a59",
			"#ff2456",
			"#ff1d53",
			"#ff174f",
			"#ff114c",
			"#ff0b49",
			"#ff0546",
			"#ff0043",
			"#ff0040",
			"#ff003d",
			"#ff003a",
			"#ff0037",
			"#ff0034",
			"#ff0031",
			"#ff002e",
			"#ff002b",
			"#ff0028",
			"#ff0025",
			"#ff0022",
			"#ff001f",
			"#ff001c",
			"#ff0019",
			"#ff0016",
			"#ff0013",
			"#ff0010",
			"#ff000d",
			"#ff000a",
			"#ff0007",
			"#ff0004",
			"#ff0001",
			"#ff0000",
		}

		-- Apply these colors to your highlights
		for i, color in ipairs(colors) do
			vim.api.nvim_set_hl(0, "NeovimDashboardLogo" .. i, { fg = color })
		end

		dashboard.section.header.val = {
			{
				type = "text",
				val = [[      ___                   ___          ___      ]],
				opts = { hl = "NeovimDashboardLogo1", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[     /\__\                 /\  \        /\  \     ]],
				opts = { hl = "NeovimDashboardLogo2", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[    /:/ _/_               /::\  \      _\:\  \    ]],
				opts = { hl = "NeovimDashboardLogo3", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[   /:/ /\__\             /:/\:\  \    /\ \:\  \   ]],
				opts = { hl = "NeovimDashboardLogo4", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[  /:/ /:/  /__     ___  /:/  \:\  \  _\:\ \:\  \  ]],
				opts = { hl = "NeovimDashboardLogo5", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[ /:/_/:/  /\  \   /\__\/:/__/ \:\__\/\ \:\ \:\__\ ]],
				opts = { hl = "NeovimDashboardLogo6", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[ \:\/:/  /\:\  \ /:/  /\:\  \ /:/  /\:\ \:\/:/  / ]],
				opts = { hl = "NeovimDashboardLogo7", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[  \::/__/  \:\  /:/  /  \:\  /:/  /  \:\ \::/  /  ]],
				opts = { hl = "NeovimDashboardLogo8", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[   \:\  \   \:\/:/  /    \:\/:/  /    \:\/:/  /   ]],
				opts = { hl = "NeovimDashboardLogo9", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[    \:\__\   \::/  /      \::/  /      \::/  /    ]],
				opts = { hl = "NeovimDashboardLogo10", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[     \/__/    \/__/     ___\/__/        \/__/     ]],
				opts = { hl = "NeovimDashboardLogo11", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[     /\__\             /\  \             /\__\    ]],
				opts = { hl = "NeovimDashboardLogo12", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[    /:/ _/_      ___  /::\  \      ___  /:/ _/_   ]],
				opts = { hl = "NeovimDashboardLogo13", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[   /:/ /\  \    /\__\/:/\:\  \    /\__\/:/ /\__\  ]],
				opts = { hl = "NeovimDashboardLogo14", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[  /:/ /::\  \  /:/  /:/ /::\  \  /:/  /:/ /:/ _/_ ]],
				opts = { hl = "NeovimDashboardLogo15", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[ /:/_/:/\:\__\/:/__/:/_/:/\:\__\/:/__/:/_/:/ /\__\]],
				opts = { hl = "NeovimDashboardLogo16", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[ \:\/:/ /:/  /::\  \:\/:/  \/__/::\  \:\/:/ /:/  /]],
				opts = { hl = "NeovimDashboardLogo17", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[  \::/ /:/  /:/\:\  \::/__/   /:/\:\  \::/_/:/  / ]],
				opts = { hl = "NeovimDashboardLogo18", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[   \/_/:/  /\/__\:\  \:\  \   \/__\:\  \:\/:/  /  ]],
				opts = { hl = "NeovimDashboardLogo19", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[     /:/  /      \:\__\:\__\       \:\__\::/  /   ]],
				opts = { hl = "NeovimDashboardLogo20", shrink_margin = false, position = "center" },
			},
			{
				type = "text",
				val = [[     \/__/        \/__/\/__/        \/__/\/__/    ]],
				opts = { hl = "NeovimDashboardLogo21", shrink_margin = false, position = "center" },
			},
		}

		-- Dashboard buttons
		dashboard.section.buttons.val = {
			dashboard.button("e", " " .. " Toggle file explorer", "<cmd>NvimTreeToggle<CR>"),
			dashboard.button("s", " " .. " Restore Session", "<cmd>SessionRestore<cr>"),
			dashboard.button("r", " " .. " Recent files", "<cmd> Telescope oldfiles <cr>"),
			dashboard.button("n", " " .. " New file", "<cmd> ene <BAR> startinsert <cr>"),
			dashboard.button("f", " " .. " Find file", "<cmd> Telescope find_files <cr>"),
			dashboard.button("g", " " .. " Find text", "<cmd> Telescope live_grep <cr>"),
			dashboard.button("l", "󰒲 " .. " Lazy", "<cmd> Lazy <cr>"),
			dashboard.button("q", " " .. " Quit", "<cmd> qa <cr>"),
		}

		-- Set highlights for dashboard
		for _, button in ipairs(dashboard.section.buttons.val) do
			button.opts.hl = "AlphaButtons"
			button.opts.hl_shortcut = "AlphaShortcut"
		end

		-- Set highlights for dashboard sections
		dashboard.section.buttons.opts.hl = "AlphaButtons"
		dashboard.section.footer.opts.hl = "AlphaFooter"
		dashboard.opts.layout[1].val = 8
		return dashboard
	end,

	-- Lazy configuration
	config = function(_, dashboard)
		local lazy = require("lazy")
		-- close Lazy and re-open when the dashboard is ready
		if vim.o.filetype == "lazy" then
			vim.cmd.close()
			vim.api.nvim_create_autocmd("User", {
				once = true,
				pattern = "AlphaReady",
				callback = function()
					lazy.show()
				end,
			})
		end

		require("alpha").setup(dashboard.opts)

		-- Show lazy stats in the footer
		vim.api.nvim_create_autocmd("User", {
			once = true,
			pattern = "LazyVimStarted",
			callback = function()
				local stats = lazy.stats()
				local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)
				dashboard.section.footer.val = "⚡ Neovim loaded "
					.. stats.loaded
					.. "/"
					.. stats.count
					.. " plugins in "
					.. ms
					.. "ms"
				pcall(vim.cmd.AlphaRedraw)
			end,
		})
	end,
}
