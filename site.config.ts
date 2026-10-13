import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "bykatengg",
  tagline: "Certified lash and PMU artist in Mississauga. Extensions, lip blush, and brows.",
  category: "Lash extensions and PMU",
  schemaType: "BeautySalon",
  area: "Mississauga, ON",
  siteUrl: "https://bykatengg.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#a8647a" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Mississauga lash and PMU artist",
    headline: "Wispy volume, soft lips, clean brows",
    subhead:
      "Eyelash extensions, lip blush, and brow wax and tint from a certified artist with over five years of experience. Send a DM to book.",
    images: [
      { src: "/images/post-1.jpg", alt: "Wispy volume lash set by bykatengg", width: 1080, height: 1440 },
      { src: "/images/post-2.jpg", alt: "Moonlight wispy lashes", width: 1080, height: 1350 },
      { src: "/images/post-5.jpg", alt: "Wispy volume lash close up", width: 1080, height: 1350 },
    ],
    primaryCta: { label: "DM to book", href: "#order" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Certified lash and PMU artist",
    "Over 5 years of experience",
    "Mississauga, ON",
    "Bookings by Instagram DM",
  ],

  about: {
    title: "Soft sets, clean detail",
    body: [
      "bykatengg is a certified lash and PMU artist based in Mississauga, Ontario, with over five years of experience. Services include eyelash extensions, lip blush and neutralization, and brow wax and tint.",
      "From wispy volume and moonlight sets to custom designs, every appointment starts with a quick DM. Share the look you want and we will get you booked.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Moonlight wispy lash set", width: 1080, height: 1440 },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Popular lash sets and beauty services. Message for current pricing and availability.",
    variant: "list",
    showPrices: false,
    priceNote: "Message for current pricing. Refills are recommended every 2 to 3 weeks.",
    groups: [
      {
        title: "Eyelash extensions",
        items: [
          { name: "Wispy volume", description: "Soft texture with clean spikes.", href: "https://www.instagram.com/p/DeR77npOspm/" },
          { name: "Moonlight wispy", description: "Lightweight fullness for brighter looking eyes.", href: "https://www.instagram.com/p/DeN5r5wO8nv/" },
          { name: "Medusa set", description: "Wispy, flirty, and bold.", href: "https://www.instagram.com/p/DeFQEMOhmdO/" },
        ],
      },
      {
        title: "Also offered",
        items: [
          { name: "Lip blush and neutralization" },
          { name: "Brow wax and tint" },
        ],
      },
    ],
    footnote: "Anything after 3.5 weeks is counted as a new set.",
  },

  gallery: {
    title: "Recent sets",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Wispy volume lashes", caption: "Wispy volume", href: "https://www.instagram.com/p/DeR77npOspm/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1350, alt: "Moonlight wispy lashes", caption: "Moonlight wispy", href: "https://www.instagram.com/p/DeN5r5wO8nv/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1350, alt: "Wispy volume set", caption: "Your sign to try wispy volume", href: "https://www.instagram.com/p/DeBI0EeOurZ/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1440, alt: "Moonlight wispy detail", caption: "Soft texture, clean spikes", href: "https://www.instagram.com/p/DYpTULtjhuq/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "Wispy volume with spikes", caption: "Wispy volume energy", href: "https://www.instagram.com/p/DYIRA4eCTZj/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "Lash set close up", caption: "Recent set", href: "https://www.instagram.com/p/DeCr1Q_OWXd/" },
      { src: "/images/post-3.jpg", width: 640, height: 1136, alt: "Medusa set lashes", caption: "Medusa set", href: "https://www.instagram.com/p/DeFQEMOhmdO/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "bykatengg",
    embeds: [
      "https://www.instagram.com/p/DeR77npOspm/",
      "https://www.instagram.com/p/DeN5r5wO8nv/",
      "https://www.instagram.com/p/DeBI0EeOurZ/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book in a quick DM",
    intro: "Bookings and inquiries are through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage:
      "Hi bykatengg! I would like to book.\nService (lashes, lip blush, brows):\nPreferred date:\nPreferred time:\nSet or style idea:\nNotes:",
    links: [],
    note: "Refills are recommended every 2 to 3 weeks. Anything after 3.5 weeks is counted as a new set.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram with the service you want, your preferred date, and any style details." },
    { q: "Where are you based?", a: "bykatengg is based in Mississauga, Ontario." },
    { q: "How often should I get a lash refill?", a: "Refills are recommended every 2 to 3 weeks. Anything after 3.5 weeks is counted as a new set." },
    { q: "What services do you offer?", a: "Eyelash extensions, lip blush and neutralization, and brow wax and tint." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Mississauga, Ontario",
    socials: [],
  },

  seo: {
    title: "bykatengg | Lash extensions and PMU in Mississauga",
    description:
      "Certified lash and PMU artist in Mississauga. Wispy volume lashes, lip blush, and brow wax and tint. Book by Instagram DM.",
    keywords: [
      "Mississauga lashes",
      "GTA lash tech",
      "wispy volume lashes Mississauga",
      "lip blush Mississauga",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
