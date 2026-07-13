import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trevio Technologies",
    short_name: "Trevio",
    description: "Engineering the future, one digital experience at a time.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070d",
    theme_color: "#3b5bff",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
