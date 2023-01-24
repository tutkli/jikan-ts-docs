# JikanClient


## Usage 

The JikanClient provides endpoints for all the available clients.

## Using a specific client

Access the specific client property inside the JikanClient.

### AnimeClient

`jikanClient.anime`

```ts
import { JikanClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
  const jikanClient = new JikanClient();

  await jikanClient.anime
    .getAnimeById(1)
    .then((jikanResponse: JikanResponse<Anime>) => console.log(/* your code */)) // will output "Cowboy Bebob"
    .catch((error) => console.error(error));
})();
```

### MangaClient

`jikanClient.manga`

```ts
import { JikanClient, JikanResponse, Manga } from '@tutkli/jikan-ts';

(async () => {
  const jikanClient = new JikanClient();

  await jikanClient.manga
    .getMangaSearch()
    .then((jikanResponse: JikanResponse<Manga[]>) => {})
    .catch((error) => {});
})();
```

### TopClient

`jikanClient.top`

```ts
import { JikanClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
  const jikanClient = new JikanClient();

  await jikanClient.top
    .getTopAnime()
    .then((jikanResponse: JikanResponse<Anime[]>) => {/* your code */})
    .catch((error) => {});
})();
```

### SeasonsClient

`jikanClient.seasons`

```ts
import { JikanClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
  const jikanClient = new JikanClient();

  await jikanClient.seasons
    .getSeasonNow()
    .then((jikanResponse: JikanResponse<Anime[]>) => {/* your code */})
    .catch((error) => {});
})();
```
