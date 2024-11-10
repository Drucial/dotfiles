-- Configuration for lazygit.nvim
-- This configuration sets up the lazygit.nvim plugin, which integrates lazygit into Neovim for Git repository management.
--
-- Commands:
--   - LazyGit: Open lazygit interface
--   - LazyGitConfig: Open lazygit configuration
--   - LazyGitCurrentFile: Open lazygit for current file
--   - LazyGitFilter: Open lazygit with filter
--   - LazyGitFilterCurrentFile: Open lazygit with filter for current file
--
-- Keymaps:
--   - <leader>lg: Open lazy git

return {
	"kdheepak/lazygit.nvim",
	cmd = {
		"LazyGit",
		"LazyGitConfig",
		"LazyGitCurrentFile",
		"LazyGitFilter",
		"LazyGitFilterCurrentFile",
	},
	-- optional for floating window border decoration
	dependencies = {
		"nvim-lua/plenary.nvim",
	},
	keys = {
		{ "<leader>gg", "<cmd>LazyGit<cr>", { desc = "Open lazy git" } },
	},
}
