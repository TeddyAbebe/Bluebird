import { imageConfig } from "./imageConfig";

export const optimizeImageUrl = (
  url: string,
  quality: keyof typeof imageConfig.quality = "medium"
): string => {
  if (url.startsWith("http")) {
    return `${url}?${imageConfig.quality[quality]}`;
  }
  return url;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const generateBlurHash = (_width: number, _height: number): string => {
  return imageConfig.placeholders.blur;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (images: string[]): Promise<void> => {
  await Promise.all(images.map(preloadImage));
};

export const getImageDimensions = (
  src: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.src = src;
  });
};
