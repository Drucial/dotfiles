-- Auto session configuration
-- This snippet configures the auto-session plugin to save and restore workspace sessions.

local function change_nvim_tree_dir()
  local nvim_tree = require("nvim-tree")
  nvim_tree.change_dir(vim.fn.getcwd())
end

return {
  "rmagatti/auto-session",
  config = function()
    local auto_session = require("auto-session")

    auto_session.setup({
      auto_restore_enabled = false,
      auto_session_suppress_dirs = { "~/", "~/Dev/", "~/Downloads", "~/Documents", "~/Desktop/" },
      post_restore_cmds = { change_nvim_tree_dir, "NvimTreeOpen" },
      pre_save_cmds = { "NvimTreeClose" },
    })

    local wk = require("which-key")
    wk.add({
      { "<leader>w",  group = " Workspace" },
      { "<leader>wr", "<cmd>SessionRestore<CR>", desc = "Restore last session" },
      { "<leader>ws", "<cmd>SessionSave<CR>",    desc = "Save session" },
    })
  end,
}
