import { defineConfig } from "histoire";

export default defineConfig({
  setupFile: "./src/histoire.setup.ts",
  tree: {
    groups: [
      {
        title: "Variables",
        id: "Variables"
      },
      {
        title: "Components",
        include: (file) => !file.title.includes("Serialize")
      },
      {
        title: "UI",
        id: "UI"
      }
    ]
  }
});
