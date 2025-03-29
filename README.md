# figma-to-ide

Convert your Figma design files into a developer-friendly structure (Model Context Protocol) for integration with IDEs, Copilot, Cursor, or code automation tools.

> 🛠 Built by [Mehmet ALP](https://www.linkedin.com/in/mehmetalp/), Founder of [Codigma.io](https://codigma.io) & [Rast Mobile](https://rastmobile.com)

---

## ✨ Features

- Fetch data from Figma using your API Key and File ID
- Converts design layers into a structured MCP (Model Context Protocol)
- Supports multiple pages, frames, and components
- CLI with `--visualize` flag to print design hierarchy as a tree
- Save as JSON with `--output` option

---

## 📦 Installation

```bash
npm install -g figma-to-ide
```

Or use locally in a project:

```bash
npm install figma-to-ide
```

---

## 🚀 CLI Usage

```bash
figma-to-ide --key YOUR_FIGMA_API_KEY --file YOUR_FIGMA_FILE_ID
```

### Optional Flags

| Flag         | Description                                 |
|--------------|---------------------------------------------|
| `--visualize` or `-v` | Prints a tree of your components in terminal |
| `--output` or `-o`    | Saves the output to a JSON file             |

### Example:

```bash
figma-to-ide -k abc123 -f XYZ456 -v -o mcp.json
```

---

## 🧠 What is MCP?

Model Context Protocol is a developer-friendly JSON format that captures the structure of your Figma file — pages, frames, components — so you can use it in:

- VS Code / Cursor / Copilot
- Design-to-code tools
- Static code generators
- Component visualizers

---

## 📂 Example Output

```json
{
  "name": "Design System",
  "pages": [
    {
      "name": "Home",
      "components": [
        {
          "name": "Header",
          "type": "FRAME",
          "children": [...]
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

## 🔗 Links

- 🔧 GitHub: [github.com/rastmob/figma-to-ide](https://github.com/rastmob/figma-to-ide)
- 🧠 Built by: [Mehmet ALP](https://www.linkedin.com/in/mehmetalp/)
- 🐦 Twitter: [@mhmtakifalp](https://twitter.com/mhmtakifalp)
- 💼 Company: [Rast Mobile](http://linkedin.com/company/rastmobile)

---

## 📄 License

MIT © Mehmet ALP – [mehmet.alp@rastmobile.com](mailto:mehmet.alp@rastmobile.com)
