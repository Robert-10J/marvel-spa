export type ResponseComics = {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: Data
}

export type Data = {
  offset: number
  limit: number
  total: number
  count: number
  results: Comic[]
}

export type Comic = {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description?: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: TextObject[]
  resourceURI: string
  urls: Url[]
  series: Series
  variants: Variant[]
  collections: Collection[]
  collectedIssues: CollectedIssue[]
  dates: Date[]
  prices: Price[]
  thumbnail: Thumbnail
  images: Image[]
  creators: Creators
  characters: Characters
  stories: Stories
  events: Events
}

export type TextObject = {
  type: string
  language: string
  text: string
}

export type Url = {
  type: string
  url: string
}

export type Series = {
  resourceURI: string
  name: string
}

export type Variant = {
  resourceURI: string
  name: string
}

export type Collection = {
  resourceURI: string
  name: string
}

export type CollectedIssue = {
  resourceURI: string
  name: string
}

export type Date = {
  type: string
  date: string
}

export type Price = {
  type: string
  price: number
}

export type Thumbnail = {
  path: string
  extension: string
}

export type Image = {
  path: string
  extension: string
}

export type Creators = {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export type Item = {
  resourceURI: string
  name: string
  role: string
}

export type Characters = {
  available: number
  collectionURI: string
  items: Item2[]
  returned: number
}

export type Item2 = {
  resourceURI: string
  name: string
}

export type Stories = {
  available: number
  collectionURI: string
  items: Item3[]
  returned: number
}

export type Item3 = {
  resourceURI: string
  name: string
  type: string
}

export type Events = {
  available: number
  collectionURI: string
  items: any[]
  returned: number
}
