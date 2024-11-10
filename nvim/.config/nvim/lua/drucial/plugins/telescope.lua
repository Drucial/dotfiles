-- Telescope Configuration
-- This configuration sets up the telescope.nvim plugin, which provides a highly extensible
-- and customizable fuzzy finder for Neovim.

-- Default Keymaps:
--   - <C-k>: Move to the previous result.
--   - <C-j>: Move to the next result.
--   - <C-q>: Send selected results to the quickfix list and open the quickfix list window.

-- Custom Keymaps:
--   - <leader>ff: Fuzzy find files in the current working directory.
--   - <leader>fr: Fuzzy find recent files.
--   - <leader>fs: Find strings in the current working directory.
--   - <leader>fc: Find strings under the cursor in the current working directory.

return {
  "nvim-telescope/telescope.nvim",
  branch = "0.1.x",
  dependencies = {
    "nvim-lua/plenary.nvim",
    "nvim-tree/nvim-web-devicons",
    "folke/todo-comments.nvim",
    { "nvim-telescope/telescope-fzf-native.nvim", build = "make" },
  },
  config = function()
    local telescope = require("telescope")
    local actions = require("telescope.actions")

    telescope.setup({
      defaults = {
        path_display = { "smart" },
        mappings = {
          i = {
            ["<C-k>"] = actions.move_selection_previous,
            ["<C-j>"] = actions.move_selection_next,
            ["<C-q>"] = actions.send_selected_to_qflist + actions.open_qflist,
          },
        },
      },
      pickers = {
        lsp_definitions = {
          jump_type = "vsplit",
        },
        lsp_type_definitions = {
          jump_type = "vsplit",
        },
      },
    })

    telescope.load_extension("fzf")

    local wk = require("which-key")
    wk.add({
      { "<leader>f",  group = " Find" },
      { "<leader>fB", "<cmd>Telescope buffers<cr>",                     desc = "Find buffers" },
      { "<leader>fb", "<cmd>Telescope current_buffer_fuzzy_find<cr>",   desc = "Find string in buffer" },
      { "<leader>fc", "<cmd>Telescope grep_string<cr>",                 desc = "Find string under cursor in cwd" },
      { "<leader>ff", "<cmd>Telescope find_files<cr>",                  desc = "Find files in cwd" },
      { "<leader>fr", "<cmd>Telescope oldfiles<cr>",                    desc = "Find recent files" },
      { "<leader>fs", "<cmd>Telescope live_grep<cr>",                   desc = "Find string in cwd" },
      { "<leader>ft", "<cmd>Telescope live_grep default_text=TODO<cr>", desc = "Find TODOs in cwd" },
    })
  end,
}
