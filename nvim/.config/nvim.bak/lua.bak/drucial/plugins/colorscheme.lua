-- Aura theme pallete defs
-- {
--   purple = nil,
--   green = nil,
--   orange = nil,
--   red = nil,
--   pink = nil,
--   white = nil,
--   gray = nil,
--   black = nil,
--   purple_faded = nil,
--   blue = nil,
-- }

return {
	"baliestri/aura-theme",
	lazy = false,
	priority = 1000,
	config = function(plugin)
		vim.opt.rtp:append(plugin.dir .. "/packages/neovim")
		-- transparent backgrounds
		vim.cmd([[
			augroup MyColors
				autocmd!
				autocmd ColorScheme * highlight Normal ctermbg=none guibg=none
				autocmd ColorScheme * highlight NonText ctermbg=none guibg=none
				autocmd ColorScheme * highlight LineNr ctermbg=none guibg=none
				autocmd ColorScheme * highlight Folded ctermbg=none guibg=none
				autocmd ColorScheme * highlight EndOfBuffer ctermbg=none guibg=none
			augroup END
		]])

		-- Set the NvimTree background to transparent
		vim.cmd([[ autocmd ColorScheme * highlight NvimTreeNormal ctermbg=none guibg=none ]])
		-- Set the colorscheme
		vim.cmd([[colorscheme aura-dark]])

		local aura = require("aura-theme")
		local core = require("aura-theme.common.core")

		-- Set the colorscheme
		function aura.setupTheme()
			local theme = "aura-dark"
			vim.o.termguicolors = true
			vim.o.background = "dark"
			vim.g.colors_name = theme

			local palette = core.createPaletteByPattern(theme)

			return palette
		end

		local palette = aura.setupTheme()

		-- Theme Color Overrides
		vim.cmd("highlight WinSeparator guifg=" .. palette.purple)
	end,
}
