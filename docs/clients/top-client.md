# Top Client

## Usage

Client used to access the Top Endpoints:

- [TopAnime](#gettopanime-top-anime)
- [TopManga](#gettopmanga-top-manga)

See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)


## getTopAnime `/top/anime`

Get the current top Animes.

### Params

- **[Optional]** searchParams: <a href="/jikan-ts-docs/typings/params#animetopparams">**AnimeTopParams**</a>

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#anime">Anime</a>[]>

### Example

```ts
import { TopClient, AnimeTopParams, AnimeType, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
    const topClient = new TopClient();

    const searchParams: AnimeTopParams = {
        type: AnimeType.tv
    }

    await topClient
        .getTopAnime(searchParams)
        .then((jikanResponse: JikanResponse<Anime[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getTopManga `/top/manga`

Get the current top Mangas.

### Params

- **[Optional]** searchParams: <a href="/jikan-ts-docs/typings/params#mangatopparams">**MangaTopParams**</a>

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/manga#manga">Manga</a>[]>

### Example

```ts
import { TopClient, MangaTopParams, MangaType, JikanResponse, Manga } from '@tutkli/jikan-ts';

(async () => {
    const topClient = new TopClient();

    const searchParams: MangaTopParams = {
        type: MangaType.manwha
    }

    await topClient
        .getTopManga(searchParams)
        .then((jikanResponse: JikanResponse<Manga[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```
