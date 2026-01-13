import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter({
      // Default options should work, tu peux spécifier "pages" et "assets" si besoin
      // pages: 'build',
      // assets: 'build'
    }),
    paths: {
      base: '/fluffy-system', // base pour GitHub Pages
    },
    prerender: {
      entries: [
        "*",
        "/api/posts/page/*",
        "/blog/category/*/page/",
        "/blog/category/*/page/*",
        "/blog/category/page/",
        "/blog/category/page/*",
        "/blog/page/",
        "/blog/page/*",
      ],
    },
  },

  preprocess: [
    mdsvex({
      extensions: [".md"],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    }),
  ],
};

export default config;
