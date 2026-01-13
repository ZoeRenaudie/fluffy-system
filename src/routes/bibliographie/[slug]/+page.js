import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const modules = import.meta.glob("/src/lib/bibliographie/*.md", { eager: true });

  const normalizeSlug = (str) =>
    str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  const slugParam = normalizeSlug(params.slug);

  const entries = Object.entries(modules).map(([path, mod]) => {
    const filename = path.split("/").pop().replace(".md", "");
    const slug = normalizeSlug(filename);
    const metadata = mod.metadata ?? {};
    return { slug, metadata, content: mod.default };
  });

  const entry = entries.find((e) => e.slug === slugParam);
  if (!entry) throw error(404, "Article non trouvé");

  return entry;
}
