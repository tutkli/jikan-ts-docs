# Seasons Client

## Usage

Client used to access the Seasons Endpoints:

- [Season](#getseason-seasons-year-season)
- [SeasonNow](#getseasonnow-seasons-now)
- [SeasonsList](#getseasonslist-seasons)
- [SeasonUpcoming](#getupcoming-seasons-upcoming)

See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)


## getSeason `/seasons/{year}/{season}`

Get the seasonal anime by year and season.

### Params

- **[Required]** year: **number**
- **[Required]** season: <a href="/jikan-ts-docs/typings/anime#animeseason">**AnimeSeason**</a>
- **[Optional]** searchParams: <a href="/jikan-ts-docs/typings/params#jikansearchparams">**JikanSearchParams**</a>

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#anime">Anime</a>[]>

### Example

```ts
import { SeasonsClient, AnimeSeason, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
    const seasonsClient = new SeasonsClient();

    await seasonsClient
        .getSeason(2023, AnimeSeason.winter)
        .then((jikanResponse: JikanResponse<Anime[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getSeasonNow `/seasons/now`

Get current seasonal anime.

### Params

- **[Optional]** searchParams: <a href="/jikan-ts-docs/typings/params#seasonnowparams">**SeasonNowParams**</a>

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#anime">Anime</a>[]>

### Example

```ts
import { SeasonsClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
    const seasonsClient = new SeasonsClient();
    const searchParams = { limit: 10 };

    await seasonsClient
        .getSeasonNow(searchParams)
        .then((jikanResponse: JikanResponse<Anime[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getSeasonsList `/seasons`

Get available list of seasons.

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/common.html#seasonslistdata">SeasonsListData</a>[]>

### Example

```ts
import { SeasonsClient, JikanResponse, SeasonsListData } from '@tutkli/jikan-ts';

(async () => {
    const seasonsClient = new SeasonsClient();

    await seasonsClient
        .getSeasonsList(searchParams)
        .then((jikanResponse: JikanResponse<SeasonsListData[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getUpcoming `/seasons/upcoming`

Get upcoming season's anime.

### Params

- **[Optional]** searchParams: <a href="/jikan-ts-docs/typings/params#jikanseasonsparams">**JikanSeasonsParams**</a>

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#anime">Anime</a>[]>

### Example

```ts
import { SeasonsClient, AnimeType, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
    const seasonsClient = new SeasonsClient();
    const searchParams = { filter: AnimeType.tv };

    await seasonsClient
        .getSeasonUpcoming(searchParams)
        .then((jikanResponse: JikanResponse<Anime[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```
