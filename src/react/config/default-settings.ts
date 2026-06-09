export const DEFAULT_SETTINGS = {
  folder_path: null as string | null,
  interval_seconds: 5,
  always_on_top: false,
  random_slideshow: false,
  opacity: 1,
  max_images: 1000,
  window: {
    width: 800,
    height: 600,
  },
};

export type AppSettings = {
  folder_path?: string | null;
  interval_seconds?: number;
  always_on_top?: boolean;
  random_slideshow?: boolean;
  opacity?: number;
  max_images?: number | null;
  window?: { x?: number; y?: number; width?: number; height?: number };
};
