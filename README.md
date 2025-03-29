# figma-to-ide

Convert Figma design files into Claude-compatible Model Context Protocol (MCP) for use in IDEs, AI code assistants like Copilot, Cursor, or static generators.

> 🔧 Built by [Mehmet ALP](https://www.linkedin.com/in/mehmetalp/), Founder of [Codigma.io](https://getcodigma.com) & [Rast Mobile](https://rastmobile.com)

---

## ✨ Features

- Accepts full Figma design URLs (e.g. `https://www.figma.com/design/...`)
- Automatically normalizes and extracts the correct file ID
- Generates MCP (Model Context Protocol) structure from Figma design data
- CLI support to visualize component structure
- Supports multiple pages, nested frames, and components
- Saves result as JSON or displays in terminal

---

## 📦 Installation

```bash
npm install -g figma-to-ide
```

Or install locally in your project:

```bash
npm install figma-to-ide
```

---

## 🚀 CLI Usage

```bash
figma-to-ide --key YOUR_FIGMA_API_KEY --file "https://www.figma.com/design/FILE_ID/Project-Name" --visualize
```

### Optional Flags

| Flag           | Description                                                |
|----------------|------------------------------------------------------------|
| `--key`, `-k`  | Your Figma personal access token                           |
| `--file`, `-f` | Full Figma file URL or just the file ID                    |
| `--visualize`, `-v` | Show component/page hierarchy as a tree in the terminal |
| `--output`, `-o` | Save the result to a file as `output.json`                |

---

## 🔁 Example

```bash
figma-to-ide -k figd_ABC123... -f "https://www.figma.com/design/uek5kq.../Project" -v -o mcp.json
```

---

## 🧠 What is MCP?

MCP (Model Context Protocol) is a structured JSON format that allows AI coding assistants to understand the layout and design structure of a frontend project.

Each component has:

```json
{
  "type": "component",
  "name": "Header",
  "description": "Generated from Figma",
  "children": ["Logo", "NavBar"],
  "props": {},
  "source": "Figma",
  "filePath": "/Home/Header.tsx",
  "parent": null
}
```

---

## 📄 Output Sample

```json
{
  "type": "project",
  "source": "Figma",
  "name": "Design System",
  "pages": [
    {
      "name": "Home",
      "components": [
        {
          "name": "Header",
          "type": "FRAME",
          "children": ["Logo", "Nav"]
        }
      ]
    }
  ],
  "meta": {
    "lastModified": "2025-03-29T10:00:00Z"
  }
}
```

---

## 🌍 Project Links

- 🔗 GitHub: [github.com/rastmob/figma-to-ide](https://github.com/rastmob/figma-to-ide)
- 🌐 Website: [https://getcodigma.com](https://getcodigma.com)
- 🧑‍💻 Author: [Mehmet ALP](https://www.linkedin.com/in/mehmetalp/)
- 🐦 Twitter: [@mhmtakifalp](https://twitter.com/mhmtakifalp)
- 💼 Company: [Rast Mobile](http://linkedin.com/company/rastmobile)

---

## 📄 License

MIT © Mehmet ALP – [mehmet.alp@rastmobile.com](mailto:mehmet.alp@rastmobile.com)
