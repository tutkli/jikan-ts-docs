# Manga Typings

## Manga

```ts
interface Manga {
  mal_id: number;
  url: string;
  images: JikanImages;
  approved: boolean;
  titles: JikanResourceTitle[];
  title: string;
  title_japanese: string;
  title_synonyms?: string[];
  type: MangaType;
  chapters: number;
  volumes: number;
  status: MangaStatus;
  publishing: boolean;
  published: JikanResourcePeriod;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: JikanResource[];
  serializations: JikanResource[];
  explicit_genres: JikanResource[];
  themes: JikanResource[];
  demographics: JikanResource[];
  relations?: JikanResourceRelation[];
  external?: JikanNamedResource[];
}
```

## MangaType

```ts 
enum MangaType {
  manga = 'Manga',
  novel = 'Novel',
  lightnovel = 'Lightnovel',
  oneshot = 'Oneshot',
  doujin = 'Doujin',
  manwha = 'Manwha',
  manhua = 'Manhua',
}
```

## MangaStatus

```ts
enum MangaStatus {
  publishing = 'Publishing',
  complete = 'Complete',
  hiatus = 'Hiatus',
  discontinued = 'Discontinued',
  upcoming = 'Upcoming',
}
```

## MangaStatistics

- *extends* <a href="/jikan-ts-docs/typings/common#statistics">Statistics</a>

```ts
interface MangaStatistics extends Statistics {
  reading: number;
  plan_to_read: number;
}
```
