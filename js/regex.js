const str = `In 2023, the world population is estimated to be around 7.9 billion. 
This number includes people from all walks of life, from different cultures, and with diverse backgrounds.

`;

const regex = /\s/gm;

let newStr = str.replace(regex, "");
console.log(newStr);

const mobile = `+4745403110`;
const regex2 = /^((\+|00)?(47))?[9|4]\d{7}$/gm;
let match = mobile.match(regex2);
console.log(match);
