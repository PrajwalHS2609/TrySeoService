// generate-sitemap.js
import fs from "fs";
import { client } from "./src/sanity/client"; // your Sanity client
import { SITEMAP_QUERY } from "./src/sanity/lib/queries"; // your GROQ query

async function generateSitemap() {
  const baseUrl = "https://freelanceseo.co.in"; // your real domain

  try {
    const dynamicPaths = await client.fetch(SITEMAP_QUERY);

    const dynamicXml = dynamicPaths
      .map(({ href, _updatedAt }) => {
        return `
  <url>
    <loc>${new URL(href, baseUrl).toString()}</loc>
    <lastmod>${new Date(_updatedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;
      })
      .join("");

    // const staticPaths = [
    //   "/",
    // ];

    const staticXml = staticPaths
      .map((path) => {
        return `
  <url>
    <loc>${new URL(path, baseUrl).toString()}</loc>
    <lastmod>2024-12-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
      })
      .join("");

    const finalXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${dynamicXml}
${staticXml}
</urlset>`;

    // Save it in the public folder
    fs.writeFileSync("./public/sitemap.xml", finalXml.trim());
    console.log("✅ sitemap.xml generated successfully.");
  } catch (err) {
    console.error("❌ Failed to generate sitemap:", err);
  }
}

generateSitemap();
