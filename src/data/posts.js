// Every Markdown file in src/pages/blog/ becomes a post. Newest first.
const modules = import.meta.glob('../pages/blog/*.md', { eager: true });

export function getPosts() {
  return Object.values(modules)
    .map((m) => ({
      url: m.url,
      title: m.frontmatter.title,
      excerpt: m.frontmatter.excerpt,
      image: m.frontmatter.image,
      date: m.frontmatter.date,
      tags: m.frontmatter.tags ?? [],
    }))
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}
