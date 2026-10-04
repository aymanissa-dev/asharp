export function createApplication(config) {
  const { root } = config;
  const rootElement = document.querySelector(root);

  if (!rootElement) {
    throw new Error(
      `[A#] Could not find an element matching "${root}". ` +
        `Make sure your HTML contains an element with that selector.`,
    );
  }

  console.log(`[A#] Application mounted at "${root}"`);
  return { root: rootElement };
}
