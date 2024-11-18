## 0.4.0 – 25th October 2024

### Fixed

- Changed how the extension makes HTTP requests to resolve issues when connecting through a proxy. Please [submit a support ticket](https://help.figma.com/hc/en-us/requests/new?ticket_form_id=360001744374) if you continue to have connection issues after this update.
- Fixed issue with recent files not loading in some cases

## 0.3.5 - 8th May 2024

### Fixed

- Updated an internal dependency

## 0.3.4 - 7th March 2024

### Features

- Added support for the Cursor editor (https://cursor.sh)

## 0.3.3 - 31st January 2024

### Other

- Updated marketplace description

## 0.3.2 - 24th January 2024

### Fixed

- Fixed an issue with extension startup

## 0.3.1 - 11th December 2023

### Fixed

- Fixed an issue creating plugins on Windows

## 0.3.0 - 6th December 2023

### Features

- Added an index page, showing you a quick overview of your Figma document
- Added focus mode, allowing you to focus on the screen you are building
- Inspect panel is now resizable
- Figma documents load quicker
- Support for developing Figma plugins in VS Code ([see plugin docs](https://www.figma.com/plugin-docs/updates/2023/12/06/version-1-update-82/))

### Fixed

- Keyboard shortcuts which are not recognised by Figma are now forwarded to VS Code
- Notifications badge now always shows on startup
- Miscellaneous bug fixes

## 0.2.7 - 10th August 2023

### Fixed

- Improved error logging

## 0.2.6 - 28th July 2023

### Fixed

- Updated an internal dependency

## 0.2.5 - 27th July 2023

### Features

- Files and notifications now show a merged list for all organizations which you are a member of
- "Select Organization" command added to filter files and notifications to a particular organization
- "..." menu added to the files panel, providing easy access to log out or switch organization
- "Beta Feedback" button added to the Figma tab header

### Fixed

- Improvements to the login flow
- CSS ID selectors now support autocomplete
- Show a message to users with incompatible VS Code versions

### Notes

Figma for VS Code is only compatible with VS Code version 1.75 and newer. If you are using an older version, you will see a message advising you to upgrade - you can also upgrade by [downloading the latest version of VS Code](https://code.visualstudio.com/download). You will not be able to install future Figma for VS Code versions if you have an incompatible version of VS Code.

If you have any issues or suggestions, please get in touch. You can use the "Beta Feedback" button in the Figma tab, or you can use these links to [submit a support ticket for any issues](https://help.figma.com/hc/en-us/requests/new?ticket_form_id=360001744374) or [give feedback](https://form.asana.com/?k=wksnkyJe5TlKwleZgXZHng&d=104970866580210). Thank you for using Figma for VS Code!

## 0.2.4 - 17th July 2023

### Fixed

- Improved error logging

## 0.2.3 - 11th July 2023

### Fixed

- Fixed an issue with error logging

## 0.2.2 - 6th July 2023

### Features

- Added support for VS Code Insiders
- Added "Save Debug Information" command to capture information to send to Figma support, to help diagnose issues

### Fixed

- Login state now synchronises across multiple VS Code windows

## 0.2.1 - 22nd June 2023

### Fixed

- Clicking "Open in VS Code" now shows a login prompt if you are not already logged in to Figma for VS Code

### Notes

Figma for VS Code is not currently compatible with VS Code Insiders, though we're hoping to have support for this soon.

For now, we suggest using the regular VS Code version if you'd like to use Figma for VS Code

## 0.2.0 - 21st June 2023

Initial release
