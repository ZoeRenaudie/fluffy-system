// bibliographie/+page.js
export const load = () => {
  const modules = import.meta.glob('/src/lib/bibliographie/*.md', { eager: true });

  const entries = Object.entries(modules).map(([path, mod]) => {
    const slug = path.split('/').pop().replace('.md', '');
    return {
      slug,
      ...mod.metadata
    };
  });

  // Trier par date décroissante
  entries.sort((a, b) => (b.date || 0) - (a.date || 0));

  return { entries };
};
