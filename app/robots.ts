export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/login", "/upload"],
      },
    ],
    sitemap: "https://sugardegree.in/sitemap.xml",
  };
}
