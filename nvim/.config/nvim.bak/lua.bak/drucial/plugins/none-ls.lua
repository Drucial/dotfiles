-- Configuration for None-ls
-- This configuration sets up the none-ls.nvim plugin, which provides a lightweight
-- language server protocol (LSP) implementation for Neovim. It is used to provide
-- diagnostic information and formatting capabilities for various languages.
--
-- Keymaps:
--   - <leader>gf: Trigger formatting for the current buffer.

return {
  "nvimtools/none-ls.nvim",
  dependencies = {
    "nvimtools/none-ls-extras.nvim",
  },
  config = function()
    local null_ls = require("null-ls")
    local augroup = vim.api.nvim_create_augroup("LspFormatting", {})

    null_ls.setup({
      sources = {
        -- require("none-ls.diagnostics.eslint"),
        null_ls.builtins.formatting.stylua,
        null_ls.builtins.formatting.black,
        null_ls.builtins.formatting.isort,
        null_ls.builtins.formatting.rubocop,
        null_ls.builtins.formatting.prettier,
        null_ls.builtins.diagnostics.rubocop,
        null_ls.builtins.formatting.erb_lint,
      },
      on_attach = function(client, bufnr)
        if client.supports_method("textDocument/formatting") then
          vim.api.nvim_clear_autocmds({ group = augroup, buffer = bufnr })
        end
      end,
    })

    local wk = require("which-key")
    wk.add({
      { "<leader>cf", "<cmd>lua vim.lsp.buf.format()<CR>", desc = "Format buffer" },
    })
  end,
}
