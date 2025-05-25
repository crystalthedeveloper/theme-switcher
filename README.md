# 🌗 theme-switcher
**Dark/Light theme toggle script for Webflow with custom attributes**

A lightweight and fully customizable theme switcher designed for Webflow projects. Automatically detects system preferences and allows users to toggle themes manually with clean, accessible behavior.

---

## ✅ Features

- 🌙 Auto-detect system theme (dark or light)
- 🌓 Manual theme toggle support
- 🎨 Dynamic styling for text, backgrounds, links
- 🖼 Image and icon switching support
- ⚡ Zero dependencies, works in all Webflow sites

---

## 📦 How to Use

### 1. Add the Script

Paste this into your **Webflow project settings** under:
`Settings → Custom Code → Footer`

```html
<script src="https://cdn.jsdelivr.net/gh/crystalthedeveloper/theme-switcher/theme-switcher.js" defer></script>
```

> 💡 Optional: You can also host the minified version `theme-switcher.min.js` for better performance.

---

### 2. Add Attributes to Your Webflow Elements

| Attribute                | Description                                                       |
|--------------------------|-------------------------------------------------------------------|
| `data-theme-toggle`      | Add to a toggle element (e.g., button or div)                     |
| `data-theme-text`        | Text elements that change color per theme                         |
| `data-theme-bg`          | Elements with dynamic background color                            |
| `data-theme-link`        | Links with color changes based on theme                           |
| `data-dark="#000000"`    | Optional custom dark mode color for text/bg/link                  |
| `data-light="#ffffff"`   | Optional custom light mode color for text/bg/link                 |
| `data-icon="dark"`       | Icon that appears in dark mode only                               |
| `data-icon="light"`      | Icon that appears in light mode only                              |
| `data-theme-img="dark"`  | Image shown in dark mode only                                     |
| `data-theme-img="light"` | Image shown in light mode only                                    |

---

## 🖼 Example

```html
<!-- Toggle Button -->
<div data-theme-toggle>🌗 Toggle Theme</div>

<!-- Icon Swap -->
<img src="sun.svg" data-icon="light" />
<img src="moon.svg" data-icon="dark" />

<!-- Image Swap -->
<img src="logo-dark.svg" data-theme-img="dark" />
<img src="logo-light.svg" data-theme-img="light" />

<!-- Dynamic Text and Background -->
<h1 data-theme-text data-dark="#fff" data-light="#111">Hello</h1>
<div data-theme-bg data-dark="#000" data-light="#eee">Welcome</div>
```

---

## 📄 License

MIT © [Crystal the Developer Inc.](https://www.crystalthedeveloper.ca)

---

## 🛠 Built For

- Webflow Developers
- No-code/Low-code creators
- Marketplace-ready Webflow Apps

---

## 📬 Support or Questions?

Open an issue on [GitHub](https://github.com/crystalthedeveloper/theme-switcher/issues) or contact me via [crystalthedeveloper.ca](https://www.crystalthedeveloper.ca)
