
export function isExternalURL(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

const EN = ['en'];

export function urlByLocale(url: string, locale: string) {
  if (!isExternalURL(url)) {
    url = url.split('/').slice(-1).pop() as string;
    if (EN.includes(locale)) {
      return '/' + EN[0] + '/' + url;
    }
    return '/' + url;
  }
  return url;
}
