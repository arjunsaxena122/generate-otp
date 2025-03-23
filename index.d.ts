declare module "otp-genius" {
    export const generateOtp: {
      numeric: (length: number) => string;
      lowAplha: (length: number) => string;
      capsAlpha: (length: number) => string;
      lowCapsAplha: (length: number) => string;
      lowAplhaNumeric: (length: number) => string;
      capsAplhaNumeric: (length: number) => string;
    };
    export default generateOtp;
  }
  