return {
  black = 0xff15141b,
  white = 0xffedecee,
  red = 0xffff6767,
  green = 0xff61ffca,
  blue = 0xff82e2ff,
  yellow = 0xffa277ff,
  orange = 0xffffca85,
  magenta = 0xfff694ff,
  grey = 0xff6d6d6d,
  teal = 0xff82e2ff,
  purple = 0xffa277ff,
  transparent = 0x00000000,

  bar = {
    bg = 0xe621202e,
    border = 0xff29263c,
  },
  popup = {
    bg = 0xe621202e,
    border = 0xff6d6d6d
  },
  spaces = {
    active = 0xff3d375e,
    inactive = 0x0029263c
  },
  bg1 = 0xff15141b,
  bg2 = 0xff29263c,

  with_alpha = function(color, alpha)
    if alpha > 1.0 or alpha < 0.0 then return color end
    return (color & 0x00ffffff) | (math.floor(alpha * 255.0) << 24)
  end,
}
