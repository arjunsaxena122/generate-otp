const lowerAplha = "abcdefghijklmnopqrstuvwxyz";
const upperAplha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";

function randNumber(max = 6) {
  if (isNaN(max)) throw new Error("Please enter the number");
  return Math.round(Math.random() * Number(max));
}

function generateOtpFromSet(charStr, length) {
  let otp = "";
  while (0 < length) {
    otp += charStr[randNumber(charStr.length - 1)];
    length--;
  }
  return otp;
}

const generateOtp = {
  numeric: (length) => generateOtpFromSet(number, length),

  lowAplha: (length) => generateOtpFromSet(lowerAplha, length),

  capsAlpha: (length) => generateOtpFromSet(upperAplha, length),

  lowCapsAplha: (length) => generateOtpFromSet(lowerAplha + upperAplha, length),

  lowAplhaNumeric: (length) => generateOtpFromSet(number + lowerAplha, length),

  capsAplhaNumeric: (length) => generateOtpFromSet(number + upperAplha, length),
};

export default generateOtp;
