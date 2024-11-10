return {
  bar_height = 28,
  bar_corner_radius = 8,
  bar_padding = 2,
  bar_margin = 8,
  bar_blur_radius = 8,

  item_height = 24,
  item_padding = 8,
  item_corner_radius = 6,
  item_spacing = 8,

  group_spacing = 16,

  popup_border_width = 2,
  popup_blur_radius = 8,
  popup_y_offset = 4,
  popup_padding = 16,
  popup_image_padding = 0,

  -- Defaults settings
  display = 1,
  paddings = 0,

  icons = "sf-symbols",   -- Options: "sf-symbols", "nerdfont"
  animated_icons = false, -- Set to true if you want to use animated icons

  font = {
      text = "JetBrainsMono Nerd Font",    -- Used for text
      numbers = "JetBrainsMono Nerd Font", -- Used for numbers
      icons = "SF Pro Text",               -- Used for icons (or NerdFont)
      app_icons = "sketchybar-app-font",    -- Used for app icons
      sizes = {
        text = 12.0,
        numbers = 12.0,
        icons = 13.0,
        app_icons = 14.0,
      },
      style_map = {
          ["Regular"] = "Regular",
          ["Medium"] = "SemiBold",
          ["Bold"] = "Bold",
          ["Black"] = "ExtraBold"
      }
  }
}
