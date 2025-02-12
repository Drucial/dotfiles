-- Comment plugin configurations
-- This snippet configures the Comment plugin to work with nvim-ts-context-commentstring.
--
-- Keymaps:
--   - gcc: Comment/uncomment lines
--   - gc: Comment/uncomment lines in visual mode
--   - gcb: Comment/uncomment block of code
--   - gcip: Comment/uncomment paragraph
--   - gco: New-line comment below
--   - gcO: New-line comment above

return {
	"numToStr/Comment.nvim",
	event = { "BufReadPre", "BufNewFile" },
	dependencies = {
		"JoosepAlviste/nvim-ts-context-commentstring",
	},
	config = function()
		local comment = require("Comment")
		local ts_context_commentstring = require("ts_context_commentstring.integrations.comment_nvim")

		comment.setup({
			-- For commenting tsx, jsx, svelte, html files
			pre_hook = ts_context_commentstring.create_pre_hook(),
		})
	end,
}
