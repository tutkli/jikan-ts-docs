# Getting Started

## Installation

```bash
npm install --save @tutkli/jikan-ts
# or
yarn add @tutkli/jikan-ts # recommended
```

## Basic Example

Using a specific client, like AnimeClient:

```ts
import { AnimeClient } from '@tutkli/jikan-ts';

(async () => {
  const animeClient = new AnimeClient();

  await animeClient
    .getAnimeById(1)
    .then((jikanResponse) => console.log(jikanResponse.data.title)) // will output "Cowboy Bebob"
    .catch((error) => console.error(error));
})();
```

Or, using the JikanClient:

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

## Leave you feedback

- Did you find this project useful? [Leave a ⭐](https://github.com/tutkli/jikan-ts)
- Found a problem? [Create an issue 🔎](https://github.com/tutkli/jikan-ts/issues)
- Want to contribute? [Submit a PR 📑](https://github.com/tutkli/jikan-ts/pulls)

