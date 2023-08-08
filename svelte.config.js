import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex, escapeSvelte } from "mdsvex";
import preprocess from "svelte-preprocess";
import shiki from "shiki";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md", ".svx"],
  layout: {
    _: "./src/mdsvex.svelte"
  },
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await shiki.getHighlighter({ theme: "dark-plus" });
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
      return `{@html \`${html}\` }`;
    }
  },
  remarkPlugins: [[remarkToc, { tight: false }], remarkUnwrapImages],
  rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex(mdsvexOptions),
    preprocess({
      postcss: true
    })
  ],
  extensions: [".svelte", ".md", ".svx"],
  kit: {
    adapter: adapter()
  }
};

export default config;
