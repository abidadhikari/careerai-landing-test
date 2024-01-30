import React from "react";
import blogData from "@/components/lib/blogData.js";

export const getServerSideProps = async ({ res }) => {
  const sites = [
    "/",
    "/blog",
    "/for-institution",
    "/about",
    "/contact",
    "/faq",
    "/privacy-policy",
  ];
  const req = await fetch(`${process.env.BACKEND_API}`);
  const data = await req.json();
  const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        
          ${sites
            .map((e) => {
              return `
                <url>
                  <loc>https://www.careerai.io${e}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>daily</changefreq>
                  <priority>${e === "/" ? 1.0 : 0.8}</priority>
                </url>
              `;
            })
            .join("")}

    ${blogData
      .map((e) => {
        return `
          <url>
            <loc>https://www.careerai.io/blog/${e.slug}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
          </url>
        `;
      })
      .join("")}







    </urlset>
  `;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {
      data: data.data,
    },
  };
};

function Sitemap({ data }) {
  return <></>;
}

export default Sitemap;
