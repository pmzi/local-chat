// eslint-disable-next-line no-useless-escape
const paramRegExp = /:([^\/]+)/g;

export default function parseUrl(url, { params }) {
  return url.replace(paramRegExp, (_, param) => {
    if (param in params) {
      return params[param];
    }

    return '';
  });
}
