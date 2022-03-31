import { isMobileOnly } from "react-device-detect";

export const FadeInUp = !isMobileOnly
  ? {
      initial: { y: 0, opacity: 0 },
      animate: { y: -50, opacity: 1, transition: { duration: 1 } },
    }
  : { initial: { y: 0, opacity: 1 } };

export const FadeInDown = !isMobileOnly
  ? {
      initial: { y: 0, opacity: 0 },
      animate: { y: 50, opacity: 1, transition: { duration: 1 } },
    }
  : { initial: { y: 0, opacity: 1 } };
