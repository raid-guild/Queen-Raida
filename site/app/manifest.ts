import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/lib/siteMetadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Queen Raida",
    description: siteDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#070807",
    theme_color: "#070807",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
