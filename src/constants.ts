export const SITE_CONFIG = {
  title: "👋 Welcome | Liam Walsh",
  description: "Helping software engineers reach the next level",
};

export const SOCIALS = {
  github: {
    icon: "🤖",
    platformName: "GitHub",
    link: "https://github.com/LiamWalshTech",
  },
  linkedin: {
    icon: "🧑‍💻",
    platformName: "LinkedIn",
    link: "https://www.linkedin.com/in/liam-walsh-tech/",
  },
  twitter: {
    icon: "🐦",
    platformName: "Twitter",
    link: "https://x.com/LiamWalshTech",
  },
  youtube: {
    icon: "📺",
    platformName: "YouTube",
    link: "https://www.youtube.com/@LiamWalshTech",
  },
} as const;

export const SOCIALS_ARRAY = Object.values(SOCIALS);
