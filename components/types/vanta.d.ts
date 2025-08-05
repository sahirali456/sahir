declare module 'vanta/dist/vanta.net.min' {
  const NET: (options: {
    el: HTMLDivElement | null;
    THREE: typeof import("three");
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    backgroundAlpha?: number;
    points?: number;
    spacing?: number;
    maxDistance?: number;
  }) => {
    destroy: () => void;
  };
  export default NET;
}
