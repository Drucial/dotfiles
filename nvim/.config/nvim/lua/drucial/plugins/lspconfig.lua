-- LSP Configuration
-- This configuration sets up language servers for various filetypes using nvim-lspconfig,
-- along with additional configurations for diagnostics and key mappings.

-- Mason NVIM and Mason LSP Configuration
-- These plugins provide enhanced support for Mason files and integrate with nvim-lspconfig
-- to configure language servers.

return {
  {
    "williamboman/mason.nvim",
    config = function()
      require("mason").setup()
    end,
  },
  {
    "williamboman/mason-lspconfig.nvim",
    config = function()
      require("mason-lspconfig").setup({
        ensure_installed = { "lua_ls", "ts_ls", "ruby_lsp", "tailwindcss" },
      })
    end,
  },
  {
    "neovim/nvim-lspconfig",
    config = function()
      local capabilities = require("cmp_nvim_lsp").default_capabilities()
      local lspconfig = require("lspconfig")
      lspconfig.lua_ls.setup({
        capabilities = capabilities,
      })
      lspconfig.ts_ls.setup({
        capabilities = capabilities,
      })
      lspconfig.ruby_lsp.setup({
        capabilities = capabilities,
      })
      lspconfig.tailwindcss.setup({
        capabilities = capabilities,
      })
      lspconfig.astro.setup({
        capabilities = capabilities,
      })

      vim.diagnostic.config({
        virtual_text = false,
        float = {
          source = "always",
          border = "rounded",
        },
        signs = true,
        underline = true,
        update_in_insert = true,
        severity_sort = false,
      })

      vim.api.nvim_create_autocmd({ "CursorHold", "CursorHoldI" }, {
        group = vim.api.nvim_create_augroup("float_diagnostic_cursor", { clear = true }),
        callback = function()
          vim.diagnostic.open_float(nil, { focus = false, scope = "cursor" })
        end,
      })

      local wk = require("which-key")
      wk.add({
        { "<leader>cD", vim.lsp.buf.declaration,              desc = "Go to declaration" },
        { "<leader>cI", vim.lsp.buf.hover,                    desc = "Show hover info" },
        { "<leader>cR", "<cmd>Telescope lsp_references<CR>",  desc = "Find references" },
        { "<leader>ca", vim.lsp.buf.code_action,              desc = "Code actions" },
        { "<leader>cd", "<CMD>Telescope lsp_definitions<CR>", desc = "Go to definition" },
        {
          "<leader>ci",
          "<cmd>lua vim.diagnostic.open_float(nil, {focus=true, scope='line'})<CR>",
          desc = "Show diagnostics",
        },
        { "<leader>cs", "<cmd>LspRestart<CR>", desc = "Restart LSP servers" },
      })
    end,
  },
}
