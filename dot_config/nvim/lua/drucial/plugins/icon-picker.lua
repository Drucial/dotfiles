return {
  "ziontee113/icon-picker.nvim",
  config = function()
    require("icon-picker").setup({ disable_legacy_commands = true })

    local wk = require("which-key")
    wk.add({
      { "<leader>i", "<cmd>IconPicker<cr>", desc = "Icon Picker" },
      { "<C-e>", "<cmd>IconPickerInsert<cr>", desc = "Insert Icon", mode = "i" },
    })
  end,
}
