vim.api.nvim_create_user_command("FormatAllFiles", function()
  vim.api.nvim_command("!find . -name '*.lua' -exec stylua -- {} +")
end, {})

vim.api.nvim_create_user_command("Qb", function()
	local bufnr = vim.api.nvim_get_current_buf()
	vim.cmd("q")
	if #vim.fn.win_findbuf(bufnr) == 0 then
		vim.cmd("bd " .. bufnr)
	end
end, {})

-- Ensure that Neovim recognizes .json.jbuilder files as JSON
vim.cmd([[
  augroup FiletypeJSONJbuilder
    autocmd!
    autocmd BufRead,BufNewFile *.json.jbuilder set filetype=json
  augroup END
]])
