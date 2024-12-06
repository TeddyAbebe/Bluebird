import { imageConfig, localImages } from "./imageConfig";

export const galleryImages = [
  {
    url: localImages.hero,
    title: "Front View",
    description: "Beautiful front view of our facility",
    category: "exterior",
    images: [localImages.hero, localImages.garden, localImages.outdoor],
  },
  {
    url: localImages.about,
    title: "Living Space",
    description: "Comfortable and welcoming living area",
    category: "interior",
    images: [localImages.about, localImages.relaxation, localImages.commonArea],
  },
  {
    url: localImages.dining,
    title: "Dining Area",
    description: "Spacious dining room for residents",
    category: "interior",
  },
  {
    url: localImages.kitchen,
    title: "Kitchen",
    description: "Modern, fully-equipped kitchen",
    category: "interior",
  },
  {
    url: localImages.bedroom,
    title: "Bedroom",
    description: "Comfortable and private bedrooms",
    category: "interior",
  },
  {
    url: localImages.bathroom,
    title: "Bathroom",
    description: "Clean and accessible bathrooms",
    category: "interior",
  },
  {
    url: localImages.commonArea,
    title: "Common Area",
    description: "Shared spaces for socializing",
    category: "interior",
  },
  {
    url: localImages.relaxation,
    title: "Relaxation Space",
    description: "Quiet areas for peace and comfort",
    category: "interior",
  },
  {
    url: localImages.garden,
    title: "Garden View",
    description: "Beautiful outdoor garden spaces",
    category: "exterior",
  },
  {
    url: localImages.outdoor,
    title: "Outdoor Space",
    description: "Accessible outdoor areas",
    category: "exterior",
  },
  {
    url: localImages.entertainment,
    title: "Entertainment Area",
    description: "Space for activities and entertainment",
    category: "interior",
  },
];

export const heroContent = {
  main: {
    url: localImages.hero,
    quality: imageConfig.quality.high,
  },
  about: {
    url: localImages.about,
    quality: imageConfig.quality.medium,
  },
};

export const videoContent = {
  thumbnail: localImages.commonArea,
  url: "https://drive.google.com/file/d/10eTBGEzEV4eeAOm2nqIWSLEqHdgfLsle/preview",
};
