const STYLE_LINK_ID = "evil-paradigm-theme"

const existing = document.getElementById(STYLE_LINK_ID)

if (!existing) {
  const link = document.createElement("link")
  link.id = STYLE_LINK_ID
  link.rel = "stylesheet"
  link.href = chrome.runtime.getURL("styles.css")

  const parent = document.head ?? document.documentElement
  parent.appendChild(link)
}
