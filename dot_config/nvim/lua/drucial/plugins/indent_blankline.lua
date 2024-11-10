-- Configuration for indent-blankline.nvim
-- This configuration sets up the indent-blankline plugin, which provides
-- customizable indentation guides to visually represent indentation levels in
-- your code.
--
-- Keymaps: None

return {
	"lukas-reineke/indent-blankline.nvim",
	event = { "BufReadPre", "BufNewFile" },
	main = "ibl",
	opts = {
		indent = { char = "·" },
	},
}
