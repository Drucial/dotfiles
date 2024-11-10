return {
  "akinsho/nvim-toggleterm.lua",
  config = function()
    local toggleterm = require("toggleterm")
    -- local colorscheme = require("drucial/plugins/colorscheme")
    -- local colors = colorscheme.colors

    toggleterm.setup({
      size = 50,
      open_mapping = [[<C-t>]], -- or { [[<c-\>]], [[<c-¥>]] } if you also use a Japanese keyboard.
      shade_terminals = false,
      direction = "vertical",
      float_opts = {
        border = "curved",
        height = 30,
        winblend = 10,
        title_pos = "center",
      },
      hide_numbers = true,
      start_in_insert = true,
      persist_size = true,
      -- highlights = {
      --   FloatBorder = { guibg = colors.bg, guifg = colors.grey }, -- Border color for the floating window
      --   NormalFloat = { guibg = colors.bg, guifg = colors.fg }, -- Normal text color
      -- },
    })

    local Terminal = require("toggleterm.terminal").Terminal
    local float_terminal = Terminal:new({
      direction = "float",
      float_opts = {
        border = "curved",
        height = 30,
        winblend = 10,
        -- highlights = {
        --   FloatBorder = { guibg = colors.bg, guifg = colors.grey }, -- Border color for the floating window
        --   NormalFloat = { guibg = colors.bg, guifg = colors.fg }, -- Normal text color
       -- },
      },
    })

    function _G.toggle_float_terminal()
      float_terminal:toggle()
    end

    -- Keybindings
    vim.api.nvim_set_keymap("t", "<Esc>", [[<C-\><C-n><cmd>:bd!<cr>]], { noremap = true, silent = true })
    vim.api.nvim_set_keymap("t", "<C-w>", [[<C-\><C-n><cmd>:bd!<cr>]], { noremap = true, silent = true })
    vim.api.nvim_set_keymap("t", "<C-h>", [[<C-\><C-n><C-w>h]], { noremap = true, silent = true })
    vim.api.nvim_set_keymap("t", "<C-j>", [[<C-\><C-n><C-w>j]], { noremap = true, silent = true })
    vim.api.nvim_set_keymap("t", "<C-k>", [[<C-\><C-n><C-w>k]], { noremap = true, silent = true })
    vim.api.nvim_set_keymap("t", "<C-l>", [[<C-\><C-n><C-w>l]], { noremap = true, silent = true })

    local wk = require("which-key")
    wk.add({
      { "<leader>t",  group = " Terminal" },
      { "<leader>tf", "<cmd>lua toggle_float_terminal()<cr>", desc = "Terminal" },
    })
  end,
}
