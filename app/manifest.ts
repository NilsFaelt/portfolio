import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nils Falt",
    short_name: "Nils Falt",
    description: "Portfolio for Nils Faly ",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "../public/ico/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
