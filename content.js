const STYLE_LINK_ID = "evil-paradigm-theme"

function injectTheme() {
  const existing = document.getElementById(STYLE_LINK_ID)
  if (existing) return

  const link = document.createElement("link")
  link.id = STYLE_LINK_ID
  link.rel = "stylesheet"
  link.href = chrome.runtime.getURL("styles.css")

  const parent = document.head ?? document.documentElement
  parent.appendChild(link)
}

function shouldEnable(result) {
  return result?.enabled !== false
}

try {
  chrome.storage.local.get(["enabled"], (result) => {
    if (chrome.runtime.lastError) {
      injectTheme()
      return
    }

    if (shouldEnable(result)) {
      injectTheme()
    }
  })
} catch {
  injectTheme()
}
