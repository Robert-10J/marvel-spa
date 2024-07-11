import { type Comic } from '../types';

export function comicsWithFrontPage(comics: Comic[], url: string) {
  return comics.filter(comic => comic.thumbnail && comic.thumbnail.path && comic.thumbnail.path !== url)
}