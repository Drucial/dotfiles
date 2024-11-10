-- Autopairs configuration
-- This snippet configures the nvim-autopairs plugin to work with nvim-cmp.

return {
	{
		"windwp/nvim-ts-autotag",
		config = function()
			require("nvim-ts-autotag").setup()
		end,
	},
	{
		"windwp/nvim-autopairs",
		event = { "InsertEnter" },
		dependencies = {
			"hrsh7th/nvim-cmp",
		},
		config = function()
			local autopairs = require("nvim-autopairs")

			-- Configure autopairs to work with treesitter
			autopairs.setup({
				check_ts = true, -- Check treesitter trees
				ts_config = {
					lua = { "string" }, -- Don't add pairs in lua string treesitter nodes
					javascript = { "template_string" }, -- Don't add pairs in javscript template_string treesitter nodes
				},
			})

			-- Import nvim-autopairs completion functionality
			local cmp_autopairs = require("nvim-autopairs.completion.cmp")

			-- Import nvim-cmp plugin (completions plugin)
			local cmp = require("cmp")

			-- Make autopairs and completion work together
			cmp.event:on("confirm_done", cmp_autopairs.on_confirm_done())
		end,
	},
}
