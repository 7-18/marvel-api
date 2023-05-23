import md5 from "md5";

export const baseUrl = `${process.env.MARVEL_API_HOST}/v1/public/`;
const ts = new Date().getTime().toString();
const hash = md5(
  ts + process.env.MARVEL_PRIVATE_API_KEY +process.env.MARVEL_PUBLIC_API_KEY
);
export const auth = `ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hash}`;
