// Non-digits อย่างเดียว ได้
// Digits อย่างเดียวไม่ได้
// ผสม digits และ Non-digits ได้
export const regexDigitMixedNonDigits = /^(?=.*[a-zA-Z\u0080-\uFFFF~`!@#$%^&*()\[\]\-_\+={}\|;:'",<\.>\/?])(?=.*[^\d])[a-zA-Z\u0080-\uFFFF~`!@#$%^&*()\[\]\-_\+={}\|;:'",<\.>\/?\d\s]*$/

export const regexOnlyDigits = /^(?<!\S)(-?\d+\.?\d*|-?\.\d+)(?!\S)$/;