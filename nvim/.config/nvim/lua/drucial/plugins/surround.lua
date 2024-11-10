-- Configuration for nvim-surroun
-- This configuration sets up the nvim-surround plugin, which provides intuitive
-- mappings to quickly add, change, and delete surroundings in your code.

return {
	"kylechui/nvim-surround",
	event = { "BufReadPre", "BufNewFile" },
	version = "*", -- Use for stability; omit to use `main` branch for the latest features
	config = function()
		require("nvim-surround").setup()
		vim.cmd([[
      nmap <leader>sw ysiw
      nmap <leader>sl yss
      nmap <leader>slt ysst
      nmap <leader>se ys$
      nmap <leader>set ys$t
      nmap <leader>sp ysip
      nmap <leader>spt ySipt
      nmap <leader>sd ds
      nmap <leader>sc cs
      nmap <leader>sct cst
      vmap <leader>st St
      vmap <leader>ss S
    ]])

		local wk = require("which-key")
-- Normal mode surround mappings
wk.add({
  { "<leader>s", group = "Surround" }, -- Define a group for surround commands
  { "<leader>sw", desc = "Surround word with characters" },
  { "<leader>sl", group = "Surround line with characters/tag" },
  { "<leader>slt", desc = "Surround entire line with tag" },
  { "<leader>se", desc = "Surround to line end with characters" },
  { "<leader>sp", group = "Surround paragraph with character/tag" },
  { "<leader>spt", desc = "Surround paragraph with tag" },
  { "<leader>sd", desc = "Delete surrounding characters/tags" },
  { "<leader>sc", group = "Change surrounding characters/tag" },
  { "<leader>sct", desc = "Change surrounding tag" },
})

-- Visual mode surround mappings
wk.add({
  mode = "v", -- Specify visual mode
  { "<leader>s", group = "Surround selection with specified character" },
  { "<leader>st", desc = "Surround selection with tag" },
})
	end,
}
