# Anime Client

## Usage 

Client used to access the Anime Endpoints:

- [AnimeSearch](https://docs.api.jikan.moe/#tag/anime)
- [AnimeFullById](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeFullById)
- [AnimeById](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeById)
- [AnimeCharacters](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeCharacters)
- [AnimeStaff](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeStaff)
- [AnimeEpisodes](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeEpisodes)
- [AnimeEpisodeById](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeEpisodeById)
- [AnimeVideos](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeVideos)
- [AnimeVideosEpisodes](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeVideosEpisodes)
- [AnimePictures](https://docs.api.jikan.moe/#tag/anime/operation/getAnimePictures)
- [AnimeStatistics](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeStatistics)
- [AnimeRecommendations](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeRecommendations)

See also: [JikanAPI](https://docs.api.jikan.moe/)

## Example

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
