const STORAGE_KEY = "enabled"

function getToggle() {
  return document.getElementById("enabled-toggle")
}

function readEnabled(callback) {
  chrome.storage.local.get([STORAGE_KEY], (result) => {
    callback(result?.enabled !== false)
  })
}

function writeEnabled(enabled) {
  chrome.storage.local.set({ [STORAGE_KEY]: enabled }, () => {})
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = getToggle()
  if (!toggle) return

  readEnabled((enabled) => {
    toggle.checked = enabled
  })

  toggle.addEventListener("change", () => {
    writeEnabled(toggle.checked)
  })
})
