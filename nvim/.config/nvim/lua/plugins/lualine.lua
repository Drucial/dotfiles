return {
  "nvim-lualine/lualine.nvim",
  event = "VeryLazy",
  init = function()
    vim.g.lualine_laststatus = vim.o.laststatus
    if vim.fn.argc(-1) > 0 then
      vim.o.statusline = " "
    else
      vim.o.laststatus = 0
    end
  end,
  opts = function()
    local lualine_require = require("lualine_require")
    lualine_require.require = require

    vim.o.laststatus = vim.g.lualine_laststatus

    -- Define the custom theme
    local colors = {
      normal = { fg = "#edecee", bg = "#15141b" },
      insert = { fg = "#61ffca", bg = "#21202e" },
      visual = { fg = "#ffca85", bg = "#3d375e" },
      replace = { fg = "#ff6767", bg = "#21202e" },
      inactive = { fg = "#6d6d6d", bg = "#15141b" },
      diff_add = "#a1e3a1",
      diff_modified = "#e3e3a1",
      diff_removed = "#e3a1a1",
    }

    local custom_theme = {
      normal = {
        a = { fg = colors.normal.fg, bg = "NONE", gui = "bold" },
        b = { fg = colors.normal.fg, bg = "NONE" },
        c = { fg = colors.normal.fg, bg = "NONE" },
      },
      insert = {
        a = { fg = colors.insert.fg, bg = colors.insert.bg, gui = "bold" },
      },
      visual = {
        a = { fg = colors.visual.fg, bg = colors.visual.bg, gui = "bold" },
      },
      replace = {
        a = { fg = colors.replace.fg, bg = colors.replace.bg, gui = "bold" },
      },
      inactive = {
        a = { fg = colors.inactive.fg, bg = colors.inactive.bg, gui = "bold" },
        b = { fg = colors.inactive.fg, bg = "NONE" },
        c = { fg = colors.inactive.fg, bg = "NONE" },
      },
    }

    local opts = {
      options = {
        theme = custom_theme, -- Use the custom theme
        globalstatus = vim.o.laststatus == 3,
        disabled_filetypes = { statusline = { "dashboard", "alpha", "ministarter", "snacks_dashboard" } },
        component_separators = "",
        section_separators = "",
        icons_enabled = true,
      },
      sections = {
        lualine_a = { "mode" },
        lualine_b = {
          { "branch", color = { fg = "#a277ff" } },
          {
            "filename",
            path = 4,
          },
          {
            "diff",
            colored = true, -- Enable colored diffs
            diff_color = {
              added = { fg = "#54c59f" },
              modified = { fg = "#c7a06f" },
              removed = { fg = "#c55858" },
            },
          },

          "diagnostics",
        },
        lualine_c = {},
        lualine_x = {},
        lualine_y = {},
        lualine_z = {
          { "location", color = { fg = "#a277ff" } },
        },
      },
      inactive_sections = {
        lualine_a = {},
        lualine_b = {},
        lualine_c = { "filename" },
        lualine_x = { "location" },
        lualine_y = {},
        lualine_z = {},
      },
      extensions = { "neo-tree", "lazy", "fzf" },
    }
    return opts
  end,
}
