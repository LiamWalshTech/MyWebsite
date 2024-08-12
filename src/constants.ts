export const socials = {
  github: {
    platformName: "GitHub",
    link: "https://github.com/LiamWalshTech",
  },
  linkedin: {
    platformName: "LinkedIn",
    link: "https://www.linkedin.com/in/liam-walsh-tech/",
  },
  twitter: { platformName: "Twitter", link: "https://x.com/LiamWalshTech" },
  youtube: {
    platformName: "YouTube",
    link: "https://www.youtube.com/@LiamWalshTech",
  },
} as const;

export const socialsArray = Object.values(socials);
