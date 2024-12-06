import {
  DiningImages,
  FrontViewImages,
  KitchenImages,
  LivingSpaceImages,
  imageConfig,
  localImages,
} from "./imageConfig";

export const galleryImages = [
  {
    url: localImages.hero,
    title: "Front View",
    description: "Beautiful front view of our facility",
    category: "exterior",
    images: [
      FrontViewImages.one,
      FrontViewImages.two,
      FrontViewImages.three,
      FrontViewImages.four,
    ],
  },
  {
    url: localImages.livingSpace,
    title: "Living Space",
    description: "Comfortable and welcoming living area",
    category: "interior",
    images: [
      LivingSpaceImages.one,
      LivingSpaceImages.two,
      LivingSpaceImages.three,
    ],
  },
  {
    url: localImages.dining,
    title: "Dining Area",
    description: "Spacious dining room for residents",
    category: "interior",
    images: [
      DiningImages.one,
      DiningImages.two,
      DiningImages.three,
      DiningImages.four,
      DiningImages.five,
      DiningImages.six,
      DiningImages.seven,
      DiningImages.eight,
    ],
  },
  {
    url: localImages.kitchen,
    title: "Kitchen",
    description: "Modern, fully-equipped kitchen",
    category: "interior",
    images: [
      KitchenImages.one,
      KitchenImages.two,
      KitchenImages.three,
      KitchenImages.four,
      KitchenImages.five,
      KitchenImages.six,
    ],
  },
  {
    url: localImages.bedroom,
    title: "Bedroom",
    description: "Comfortable and private bedrooms",
    category: "interior",
    images: [
      FrontViewImages.one,
      FrontViewImages.two,
      FrontViewImages.three,
      FrontViewImages.four,
    ],
  },
  {
    url: localImages.bathroom,
    title: "Bathroom",
    description: "Clean and accessible bathrooms",
    category: "interior",
    images: [
      FrontViewImages.one,
      FrontViewImages.two,
      FrontViewImages.three,
      FrontViewImages.four,
    ],
  },
  {
    url: localImages.commonArea,
    title: "Common Area",
    description: "Shared spaces for socializing",
    category: "interior",
    images: [
      FrontViewImages.one,
      FrontViewImages.two,
      FrontViewImages.three,
      FrontViewImages.four,
    ],
  },
  {
    url: localImages.relaxation,
    title: "Relaxation Space",
    description: "Quiet areas for peace and comfort",
    category: "interior",
    images: [
      FrontViewImages.one,
      FrontViewImages.two,
      FrontViewImages.three,
      FrontViewImages.four,
    ],
  },
  {
    url: localImages.garden,
    title: "Garden View",
    description: "Beautiful outdoor garden spaces",
    category: "exterior",
    images: [
      FrontViewImages.one,
      FrontViewImages.two,
      FrontViewImages.three,
      FrontViewImages.four,
    ],
  },
  {
    url: localImages.outdoor,
    title: "Outdoor Space",
    description: "Accessible outdoor areas",
    category: "exterior",
    images: [
      FrontViewImages.one,
      FrontViewImages.two,
      FrontViewImages.three,
      FrontViewImages.four,
    ],
  },
  {
    url: localImages.entertainment,
    title: "Entertainment Area",
    description: "Space for activities and entertainment",
    category: "interior",
    images: [
      FrontViewImages.one,
      FrontViewImages.two,
      FrontViewImages.three,
      FrontViewImages.four,
    ],
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
