// This script is loaded by FigmaWebviewPanel and can be used to run JS in its
// context, for example for handling messages

const figmaIframe = document.getElementById('figma-iframe')
if (!figmaIframe) {
  throw new Error('Figma iframe not found')
}

const figmaIframeSource = figmaIframe.contentWindow
const vsCode = acquireVsCodeApi()

// Handle messages from the extension by passing into the Figma iframe
window.addEventListener('message', (message) => {
  // console.log('Extension recevied message', message)

  if (message.data.type === 'KEYDOWN') {
    // Handle keypresses from Figma which were not handled by it - instead
    // pass them to VS Code for it to handle
    window.dispatchEvent(new KeyboardEvent('keydown', JSON.parse(message.data.data)))
  } else if (message.origin.startsWith('vscode-webview://')) {
    // console.log('Extension webview posting received message from VS Code to iframe', message.data)
    document.getElementById('figma-iframe').contentWindow.postMessage(message.data, '*')
  } else {
    // console.log('Extension webview posting received message from iframe to VS Code', message.data)
    vsCode.postMessage(message.data)

    if (message.data.type === 'FIGMA_READY' || message.data.type === 'INDEX_PAGE_LOADED') {
      document.getElementById('loader').classList.add('hidden')
    } else if (message.data.type === 'SHOW_WEBVIEW_LOADER') {
      document.getElementById('loader').classList.remove('hidden')
    }
  }
})
