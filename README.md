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
<script src="https://cdn.jsdelivr.net/gh/crystalthedeveloper/theme-switcher@v1.0.0/theme-switcher.js" defer></script>
```

> 💡 Optional: You can also host the minified version `theme-switcher.min.js` for better performance.

---

### 2. Add Attributes to Your Webflow Elements

| Attribute                     | Description                                                       |
|-------------------------------|-------------------------------------------------------------------|
| `data-cltd-theme-toggle`      | Add to a toggle element (e.g., button or div)                     |
| `data-cltd-set-theme="dark"` | Directly set the theme to dark when this element is clicked       |
| `data-cltd-set-theme="light"`| Directly set the theme to light when this element is clicked      |
| `data-cltd-theme-text`        | Text elements that change color per theme                         |
| `data-cltd-theme-bg`          | Elements with dynamic background color                            |
| `data-cltd-theme-link`        | Links with color changes based on theme                           |
| `data-cltd-dark="#000000"`   | Optional custom dark mode color for text/bg/link                  |
| `data-cltd-light="#ffffff"`  | Optional custom light mode color for text/bg/link                 |
| `data-cltd-icon="dark"`      | Icon that appears in dark mode only                               |
| `data-cltd-icon="light"`     | Icon that appears in light mode only                              |
| `data-cltd-theme-img="dark"` | Image shown in dark mode only                                     |
| `data-cltd-theme-img="light"`| Image shown in light mode only                                    |

---

## 💡 Default Behavior for Empty Attributes

You can safely add attributes like `data-cltd-theme-text` or `data-cltd-theme-bg` **without assigning a value**. If no custom color is set via `data-cltd-dark` or `data-cltd-light`, the script automatically applies fallback styles:

- **Text color:** `#000` (light) and `#fff` (dark)
- **Background color:** `#fff` (light) and `#000` (dark)

This ensures everything works out-of-the-box, and you can style later when needed.

Example:

```html
<h2 data-cltd-theme-text>Hello World</h2>
<section data-cltd-theme-bg>Welcome Section</section>
```

---

## 🖼 Example

```html
<!-- Toggle Button -->
<div data-cltd-theme-toggle>🌗 Toggle Theme</div>

<!-- Direct Theme Selection -->
<button data-cltd-set-theme="dark">Dark</button>
<button data-cltd-set-theme="light">Light</button>

<!-- Icon Swap -->
<img src="sun.svg" data-cltd-icon="light" />
<img src="moon.svg" data-cltd-icon="dark" />

<!-- Image Swap -->
<img src="logo-dark.svg" data-cltd-theme-img="dark" />
<img src="logo-light.svg" data-cltd-theme-img="light" />

<!-- Dynamic Text and Background -->
<h1 data-cltd-theme-text data-cltd-dark="#fff" data-cltd-light="#111">Hello</h1>
<div data-cltd-theme-bg data-cltd-dark="#000" data-cltd-light="#eee">Welcome</div>
```

---

## 🎨 Custom Colors

To use different colors for text and background, apply attributes to **separate elements**.  
Then assign `data-cltd-dark` and `data-cltd-light` to each one individually:

```html
<!-- Background Color -->
<div data-cltd-theme-bg data-cltd-dark="#cc0000" data-cltd-light="#f9f9f9">

  <!-- Text Color -->
  <p data-cltd-theme-text data-cltd-dark="#ffffff" data-cltd-light="#111111">
    This text adapts to the theme
  </p>

</div>
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
