import { Project } from "./types";

export const projects: Project[] = [
  {
    name: "VANGOLION",
    about:
      "This website showcases innovative artists and designers and is built with Next.js, Firebase, MongoDB, and Tailwind CSS",

    href: "https://vangolion.com/",
    images: [
      "/images/vangolion/one.png",
      "/images/vangolion/two.png",
      "/images/vangolion/three.png",
    ],
    builtWith: "NextJs, Contentful",
    gitHubUrl: "",
    displayGithub: false,
  },
  {
    name: "UNTRA-STUDIO",
    about:
      "A contemporary website design integrating blogs and news articles, presenting a dynamic and engaging user experience for information dissemination.",

    href: "https://untra-studio-a70e4154f13a56e751482da6fa.webflow.io/",
    images: [
      "/images/untra/one.png",
      "/images/untra/two.png",
      "/images/untra/four.png",
    ],
    builtWith: "WEBFLOW",
    gitHubUrl: "",
    displayGithub: false,
  },
  {
    name: "HUNKER-JUNKER",
    about:
      "A modern restaurant website built with Next.js, styled-components, Jest, and React Testing Library, offering an immersive dining experience with interactive menus.",

    href: "http://www.hunkerjunker.se",
    images: [
      "/images/hunker/one.png",
      "/images/hunker/two.png",
      "/images/hunker/three.png",
    ],
    builtWith: "NextJS",
    gitHubUrl: "",
    displayGithub: false,
  },
  {
    name: "SKEIDAR",
    about:
      "This purely showcases CSS, devoid of practical usage, demonstrating techniques, styles, and effects without integration or functionality.",
    href: "https://65841c432008210008deeea0--tubular-monstera-9d7aeb.netlify.app/",
    images: [
      "/images/skeidar/one.png",
      "/images/skeidar/two.png",
      "/images/skeidar/three.png",
    ],
    builtWith:
      "TypeScript, NextJS, Node, Nest, PostgreSQL, Firebase, Docker, Styled-Components",
    gitHubUrl: "https://github.com/NilsFaelt/skediar",
    displayGithub: false,
  },
];
