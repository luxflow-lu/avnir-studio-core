module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Créer un composant UI (cva + story Ladle)",
    prompts: [{ type: "input", name: "name", message: "Nom du composant ?" }],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../../apps/ladle/src/stories/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/story.tsx.hbs",
      },
      {
        type: "modify",
        path: "src/index.ts",
        pattern: /(\/\/ PLOP_EXPORT_ANCHOR)/g,
        template: 'export * from "./components/{{pascalCase name}}";\n$1',
      },
    ],
  });
};
