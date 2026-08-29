export default function sitemap() {
  const baseUrl = "https://roto-star.com";
  const languages = ["en", "ar"];
  const routes = ["", "/company", "/process", "/products", "/contact"];

  const entries = [];

  languages.forEach((lang) => {
    routes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "/products" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
      });
    });
  });

  return entries;
}
