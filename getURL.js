import url from "url";

const getPath = (req) => {
  return req.url;
};

const getParamsURL = (req) => {
  let urlData = url.parse(req.url, true);
};

export { getParamsURL, getParamsURL };
