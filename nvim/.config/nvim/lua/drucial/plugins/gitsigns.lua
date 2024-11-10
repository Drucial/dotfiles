-- Configuration for gitsigns.lua
-- This configuration sets up the gitsigns.nvim plugin, which provides
-- Git signs (additions, changes, deletions) in the sign column and commands
-- to stage and reset hunks.

-- Keymaps:
--   - ]h: Navigate to the next hunk
--   - [h: Navigate to the previous hunk
--   - <leader>hs: Stage the current hunk
--   - <leader>hr: Reset the current hunk
--   - <leader>hS: Stage all hunks in the current buffer
--   - <leader>hR: Reset all hunks in the current buffer
--   - <leader>hu: Undo staging of the current hunk
--   - <leader>hp: Preview changes in the current hunk
--   - <leader>hb: Blame the line under the cursor
--   - <leader>hB: Toggle line blame for the current line
--   - <leader>hd: Diff the current changes
--   - <leader>hD: Diff the current changes against the previous version
--   - ih: Select the current hunk

local current_line_blame_formatter = function(name, blame_info)
	if blame_info.author == name then
		blame_info.author = "You"
	end

	local text
	if blame_info.author == "Not Committed Yet" then
		text = "Not Committed Yet"
	else
		local current_time = os.time()
		local time_difference = current_time - blame_info["author_time"]
		local date_string
		if time_difference >= 14 * 24 * 60 * 60 then
			date_string = os.date("%b %d", blame_info["author_time"])
			local current_year = tonumber(os.date("%Y", current_time))
			local author_year = tonumber(os.date("%Y", blame_info["author_time"]))
			if current_year ~= author_year then
				date_string = date_string .. ", " .. author_year
			end
		else
			date_string = vim.fn.strftime("%b %d", blame_info["author_time"])
		end
		text = blame_info.author .. " on " .. date_string .. " -> " .. blame_info.summary
	end

	return { { " " .. text, "GitSignsCurrentLineBlame" } }
end

return {
	"lewis6991/gitsigns.nvim",
	event = { "BufReadPre", "BufNewFile" },
	opts = {
		preview_config = {
			border = "rounded",
		},
		current_line_blame = true,
		current_line_blame_opts = {
			virt_text = true,
			virt_text_pos = "eol", -- 'eol' | 'overlay' | 'right_align'
			delay = 1000,
			ignore_whitespace = false,
			virt_text_priority = 100,
		},
		current_line_blame_formatter = current_line_blame_formatter,
		on_attach = function(bufnr)
			local gs = package.loaded.gitsigns

			local function map(mode, l, r, desc)
				vim.keymap.set(mode, l, r, { buffer = bufnr, desc = desc })
			end

      local wk = require("which-key")
-- Normal mode mappings
wk.add({
  { "<leader>g", group = "Git" }, -- Define a group for Git commands
  { "<leader>gs", function() gs.stage_hunk() end, desc = "Stage hunk" },
  { "<leader>gr", function() gs.reset_hunk() end, desc = "Reset hunk" },
  { "<leader>gS", function() gs.stage_buffer() end, desc = "Stage buffer" },
  { "<leader>gR", function() gs.reset_buffer() end, desc = "Reset buffer" },
  { "<leader>gu", function() gs.undo_stage_hunk() end, desc = "Undo stage hunk" },
  { "<leader>gp", function() gs.preview_hunk() end, desc = "Preview hunk" },
  { "<leader>gb", function() gs.blame_line() end, desc = "Blame line" },
  { "<leader>gB", function() gs.toggle_current_line_blame() end, desc = "Toggle line blame" },
  { "<leader>gd", function() gs.diffthis() end, desc = "Diff this" },
  { "<leader>gD", function() gs.diffthis("~") end, desc = "Diff this ~" },
}, { buffer = bufnr })

-- Visual mode mappings
wk.add({
  mode = "v", -- Specify visual mode
  { "<leader>gs", function() gs.stage_hunk({ vim.fn.line("."), vim.fn.line("v") }) end, desc = "Stage hunk" },
  { "<leader>gr", function() gs.reset_hunk({ vim.fn.line("."), vim.fn.line("v") }) end, desc = "Reset hunk" },
}, { buffer = bufnr })
			-- Navigation
			map("n", "]h", gs.next_hunk, "Next Hunk")
			map("n", "[h", gs.prev_hunk, "Prev Hunk")
		end,
	},
}
