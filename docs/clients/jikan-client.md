# JikanClient


## Usage 

The JikanClient provides endpoints for all the available clients.

## Using a specific client

Access the specific client property inside the JikanClient.

### AnimeClient

`jikanClient.anime`

```ts
import { JikanClient } from '@tutkli/jikan-ts';

(async () => {
  const jikanClient = new JikanClient();

  await jikanClient.anime
    .getAnimeById(1)
    .then((jikanResponse) => console.log(jikanResponse.data.title)) // will output "Cowboy Bebob"
    .catch((error) => console.error(error));
})();
```

### MangaClient

`jikanClient.manga`

```ts
import { JikanClient } from '@tutkli/jikan-ts';

(async () => {
  const jikanClient = new JikanClient();

  await jikanClient.manga
    .getMangaSearch()
    .then((jikanResponse) => {})
    .catch((error) => {});
})();
```

### TopClient

`jikanClient.top`

```ts
import { JikanClient } from '@tutkli/jikan-ts';

(async () => {
  const jikanClient = new JikanClient();

  await jikanClient.top
    .getTopAnime()
    .then((jikanResponse) => {})
    .catch((error) => {});
})();
```
