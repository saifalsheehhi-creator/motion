import localFont from "next/font/local";

export const reemKufi = localFont({
  src: [
    { path: "./fonts/reemar.woff2", weight: "400", style: "normal" },
    { path: "./fonts/reemla.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-reem-kufi",
  display: "swap",
});

export const plexArabic = localFont({
  src: [
    { path: "./fonts/plex400ar.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plex400la.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plex500ar.woff2", weight: "500", style: "normal" },
    { path: "./fonts/plex500la.woff2", weight: "500", style: "normal" },
    { path: "./fonts/plex600ar.woff2", weight: "600", style: "normal" },
    { path: "./fonts/plex600la.woff2", weight: "600", style: "normal" },
    { path: "./fonts/plex700ar.woff2", weight: "700", style: "normal" },
    { path: "./fonts/plex700la.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const plexMono = localFont({
  src: [
    { path: "./fonts/mono400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/mono500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/mono600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});
