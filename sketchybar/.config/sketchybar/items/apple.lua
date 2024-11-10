local colors = require("colors")
local icons = require("icons")
local settings = require("settings")

-- Apple item configuration
local apple = sbar.add("item", {
  icon = {
    font = { size = settings.font.sizes.icons },
    -- TODO set a custom icon for this click script
    string = icons.apple,
    align = "center",
    color = colors.white,
    drawing = true,
    padding_left = settings.item_padding,
    padding_right = settings.item_padding,
  },
  label = {
    drawing = false,
  },
  background = {
    height = settings.item_height,
    color = colors.red,
    border_color = colors.black,
    corner_radius = settings.item_corner_radius
  },
  align = "center",
  -- TODO set a custom menu for thsi click script
  click_script = "$CONFIG_DIR/helpers/menus/bin/menus -s 0"
})

-- Add a spacer after the apple
sbar.add("item", "apple.spacer", {
  width = settings.item_spacing,
  background = { drawing = false }
})