# Anime Client

## Usage 

Client used to access the Anime Endpoints:

- [AnimeSearch](#getanimesearch-anime)
- [AnimeById](#getanimebyid-anime-id)
- [AnimeFullById](#getanimefullbyid-anime-id-full)
- [AnimeCharacters](#getanimecharacters-anime-id-characters)
- [AnimeStaff](#getanimestaff-anime-id-staff)
- [AnimeEpisodes](#getanimeepisodes-anime-id-episodes)
- [AnimeEpisodeById](#getanimeepisodebyid-anime-id-episodes-episode)
- [AnimeVideos](#getanimevideos-anime-id-videos)
- [AnimeVideosEpisodes](#getanimeepisodevideos-anime-id-videos-episodes)
- [AnimePictures](#getanimepictures-anime-id-pictures)
- [AnimeStatistics](#getanimestatistics-anime-id-statistics)
- [AnimeRecommendations](#getanimerecommendations-anime-id-recommendations)

See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)


## getAnimeSearch `/anime`

Search animes within the given filter params. If no params are given, returns all the animes.

### Params

- **[Optional]** searchParams: <a href="/jikan-ts-docs/typings/params#animesearchparams">**AnimeSearchParams**</a>

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#anime">Anime</a>[]>

### Example

```ts
import { AnimeClient, AnimeSearchParams, AnimeType, AnimeStatus, SearchOrder } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    const searchParams: AnimeSearchParams = {
        type: AnimeType.tv,
        status: AnimeStatus.airing,
        order_by: SearchOrder.score
    }

    await animeClient
        .getAnimeSearch(searchParams)
        .then((jikanResponse: JikanResponse<Anime[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimeById `/anime/{id}`

Get partial data of an Anime.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#anime">Anime</a>>

### Example

```ts
import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeById(1)
        .then((jikanResponse: JikanResponse<Anime>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimeFullById `/anime/{id}/full`

Get complete data of an Anime.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#anime">Anime</a>>

### Example

```ts
import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeFullById(1)
        .then((jikanResponse: JikanResponse<Anime>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimeCharacters `/anime/{id}/characters`

Get Characters of a specific Anime.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#animecharacter">AnimeCharacter</a>[]>

### Example

```ts
import { AnimeClient, JikanResponse, AnimeCharacter } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeCharacters(1)
        .then((jikanResponse: JikanResponse<AnimeCharacter[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimeStaff `/anime/{id}/staff`

Get Staff of a specific Anime.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#animestaff">AnimeStaff</a>[]>

### Example

```ts
import { AnimeClient, JikanResponse, AnimeStaff } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeStaff(1)
        .then((jikanResponse: JikanResponse<AnimeStaff[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimeEpisodes `/anime/{id}/episodes`

Get a list of all the episodes of a specific Anime.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#animeepisode">AnimeEpisode</a>[]>

### Example

```ts
import { AnimeClient, JikanResponse, AnimeEpisode } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeEpisode(1)
        .then((jikanResponse: JikanResponse<AnimeEpisode[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimeEpisodeById `/anime/{id}/episodes/{episode}`

Get a single Episode of a specific Anime by the episode ID.

### Params

- **[Required]** anime_mal_id: **number**
- **[Required]** episode_mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#animeepisode">AnimeEpisode</a>>

### Example

```ts
import { AnimeClient, JikanResponse, AnimeEpisode } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeEpisodeById(1, 1)
        .then((jikanResponse: JikanResponse<AnimeEpisode>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimeVideos `/anime/{id}/videos`

Get Videos related to a specific Anime.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#animevideos">AnimeVideos</a>[]>

### Example

```ts
import { AnimeClient, JikanResponse, AnimeVideos } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeVideos(1)
        .then((jikanResponse: JikanResponse<AnimeVideos>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimeEpisodeVideos `/anime/{id}/videos/episodes`

Get Episode Videos related to a specific Anime.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#animeepisodevideo">AnimeEpisodeVideo</a>[]>

### Example

```ts
import { AnimeClient, JikanResponse, AnimeEpisodeVideo } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeEpisodeVideos(1)
        .then((jikanResponse: JikanResponse<AnimeEpisodeVideo[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimePictures `/anime/{id}/pictures`

Get Pictures related to a specific Anime.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#animepicture">AnimePicture</a>[]>

### Example

```ts
import { AnimeClient, JikanResponse, AnimePicture } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimePictures(1)
        .then((jikanResponse: JikanResponse<AnimePicture[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimeStatistics `/anime/{id}/statistics`

Get Statistics related to a specific Anime.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/anime#animestatistics">AnimeStatistics</a>>

### Example

```ts
import { AnimeClient, JikanResponse, AnimeStatistics } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeStatistics(1)
        .then((jikanResponse: JikanResponse<AnimeStatistics>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getAnimeRecommendations `/anime/{id}/recommendations`

Get Recommendations related to a specific Anime.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/jikan-ts-docs/guides/client#client-response">JikanResponse</a><<a href="/jikan-ts-docs/typings/common/recommendation">Recommendation</a>[]>

### Example

```ts
import { AnimeClient, JikanResponse, Recommendation } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeRecommendation(1)
        .then((jikanResponse: JikanResponse<Recommendation>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```
