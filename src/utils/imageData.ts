import {
  BathRoomImages,
  BedRoomImages,
  CommonAreasImages,
  DiningImages,
  FrontViewImages,
  GardenViewImages,
  KitchenImages,
  LivingSpaceImages,
  EntertainmentImages,
  RelaxationSpaceImages,
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
      BedRoomImages.one,
      BedRoomImages.two,
      BedRoomImages.three,
      BedRoomImages.four,
      BedRoomImages.five,
      BedRoomImages.six,
      BedRoomImages.seven,
    ],
  },
  {
    url: localImages.bathroom,
    title: "Bathroom",
    description: "Clean and accessible bathrooms",
    category: "interior",
    images: [
      BathRoomImages.one,
      BathRoomImages.two,
      BathRoomImages.three,
      BathRoomImages.four,
      BathRoomImages.five,
      BathRoomImages.six,
      BathRoomImages.seven,
    ],
  },
  {
    url: localImages.commonArea,
    title: "Common Area",
    description: "Shared spaces for socializing",
    category: "interior",
    images: [CommonAreasImages.two, CommonAreasImages.three],
  },
  {
    url: localImages.relaxation,
    title: "Relaxation Space",
    description: "Quiet areas for peace and comfort",
    category: "interior",
    images: [
      RelaxationSpaceImages.one,
      RelaxationSpaceImages.two,
      RelaxationSpaceImages.three,
      RelaxationSpaceImages.four,
    ],
  },
  {
    url: localImages.garden,
    title: "Garden View",
    description: "Beautiful outdoor garden spaces",
    category: "exterior",
    images: [
      GardenViewImages.one,
      GardenViewImages.two,
      GardenViewImages.three,
    ],
  },
  {
    url: localImages.entertainment,
    title: "Entertainment Area",
    description: "Space for activities and entertainment",
    category: "interior",
    images: [
      EntertainmentImages.one,
      EntertainmentImages.two,
      EntertainmentImages.three,
      EntertainmentImages.four,
      EntertainmentImages.five,
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

export const FamilyImages = [
  "https://i.ibb.co/Kr0t5LF/1.jpg",
  "https://i.ibb.co/ry3Xr9G/2.jpg",
  "https://i.ibb.co/gjjYMjX/3.jpg",
  "https://i.ibb.co/TgFJf2g/4.jpg",
  "https://i.ibb.co/3ddRqNt/6.jpg",
  "https://i.ibb.co/fS9ZnTy/7.jpg",
  "https://i.ibb.co/x2LvP5g/8.jpg",
  "https://i.ibb.co/bL92Pxs/9.jpg",
  "https://i.ibb.co/m6vbtFJ/10.jpg",
  "https://i.ibb.co/Z24WB0M/11.jpg",
  "https://i.ibb.co/kqVv2s3/12.jpg",
  "https://i.ibb.co/NxjCfKy/13.jpg",
  "https://i.ibb.co/XD5jD5m/14.jpg",
];
