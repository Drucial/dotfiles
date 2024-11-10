-- Configuration for folke/trouble.nvim
-- This configuration sets up the trouble.nvim plugin, which provides a comprehensive
-- interface for managing and navigating diagnostics, quickfix lists, and more.
--
-- Keymaps:
--  - <leader>xx: Open/close trouble list
--  - <leader>xw: Open trouble workspace diagnostics
--  - <leader>xd: Open trouble document diagnostics
--  - <leader>xq: Open trouble quickfix list
--  - <leader>xl: Open trouble location list
--  - <leader>xt: Open todos in trouble

return {
  "folke/trouble.nvim",
  dependencies = { "nvim-tree/nvim-web-devicons", "folke/todo-comments.nvim" },
  config = function()
    require("trouble").setup({
      auto_preview = false,
      auto_fold = true,
      auto_close = true,
      use_diagnostic_signs = true,
    })

    local wk = require("which-key")
    wk.add({
      { "<leader>x",  group = " Trouble" },
      { "<leader>xd", "<cmd>TroubleToggle document_diagnostics<CR>", desc = "Open trouble document diagnostics" },
      { "<leader>xl", "<cmd>TroubleToggle loclist<CR>",              desc = "Open trouble location list" },
      { "<leader>xq", "<cmd>TroubleToggle quickfix<CR>",             desc = "Open trouble quickfix list" },
      { "<leader>xt", "<cmd>TodoTrouble<CR>",                        desc = "Open todos in trouble" },
      {
        "<leader>xw",
        "<cmd>TroubleToggle workspace_diagnostics<CR>",
        desc = "Open trouble workspace diagnostics",
      },
      { "<leader>xx", "<cmd>TroubleToggle<CR>", desc = "Open trouble list" },
    })
  end,
}
