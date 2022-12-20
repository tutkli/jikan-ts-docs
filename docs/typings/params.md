# Request Params

## JikanSearchParams

```ts
interface JikanSearchParams {
  q?: string;
  page?: number;
  limit?: number;
  score?: number;
  min_score?: number;
  max_score?: number;
  sfw?: boolean;
  genres?: string;
  genres_exclude?: string;
  sort?: SortOptions | string;
  letter?: string;
  producers?: string;
  start_date?: string;
  end_date?: string;
}
```

## AnimeSearchParams

- *extends* <a href="#jikansearchparams">JikanSearchParams</a>

```
interface AnimeSearchParams extends JikanSearchParams {
  type?: AnimeType | string;
  status?: AnimeStatus | string;
  rating?: AnimeRating | string;
  order_by?: AnimeSearchOrder | SearchOrder | string;
}
```

## MangaSearchParams

- *extends* <a href="#jikansearchparams">JikanSearchParams</a>

```
interface MangaSearchParams extends JikanSearchParams {
  type?: MangaType | string;
  status?: MangaStatus | string;
  order_by?: MangaSearchOrder | SearchOrder | string;
  magazines?: string;
}
```

## SortOptions

```ts
enum SortOptions {
  asc = 'asc',
  desc = 'desc',
}
```

## SearchOrder

```ts
enum SearchOrder {
  mal_id = 'mal_id',
  title = 'title',
  start_date = 'start_date',
  end_date = 'end_date',
  score = 'score',
  scored_by = 'scored_by',
  rank = 'rank',
  popularity = 'popularity',
  members = 'members',
  favorites = 'favorites',
}
```

## AnimeSearchOrder

```ts
enum AnimeSearchOrder {
  type = 'type',
  rating = 'rating',
  episodes = 'episodes',
}
```

## MangaSearchOrder

```ts
enum MangaSearchOrder {
    chapters = 'chapters',
    volumes = 'volumes',
}
```

