export function transformToMCP(figmaData: any) {
  const pages = figmaData.document.children || [];

  const mcp = {
    type: "project",
    source: "Figma",
    name: figmaData.name,
    pages: pages.map((page: any) => ({
      id: page.id,
      name: page.name ?? "Unnamed Page",
      type: page.type,
      components: extractComponents(page, page.name ?? "UnnamedPage"),
    })),
    meta: {
      lastModified: figmaData.lastModified,
    },
  };

  return mcp;
}

function extractComponents(node: any, pageName: string): any[] {
  const result: any[] = [];

  function traverse(n: any, parent: string | null = null) {
    if (["FRAME", "COMPONENT"].includes(n.type)) {
      result.push({
        type: "component",
        name: n.name,
        description: "Generated from Figma",
        children: n.children?.map((c: any) => c.name) || [],
        props: {},
        source: "Figma",
        filePath: `/${pageName}/${n.name}.tsx`,
        parent: parent,
      });
    }

    if (n.children) {
      n.children.forEach((child: any) => traverse(child, n.name));
    }
  }

  traverse(node);
  return result;
}
