# Manga Client

## Usage

Client used to access the Manga Endpoints:

- [MangaSearch](https://docs.api.jikan.moe/#tag/manga)
- [MangaFullById](https://docs.api.jikan.moe/#tag/manga/operation/getMangaFullById)
- [MangaById](https://docs.api.jikan.moe/#tag/manga/operation/getMangaById)
- [MangaCharacters](https://docs.api.jikan.moe/#tag/manga/operation/getMangaCharacters)
- [MangaPictures](https://docs.api.jikan.moe/#tag/manga/operation/getMangaPictures)
- [MangaStatistics](https://docs.api.jikan.moe/#tag/manga/operation/getMangaStatistics)
- [MangaRecommendations](https://docs.api.jikan.moe/#tag/manga/operation/getMangaRecommendations)

See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)


## getMangaSearch `/manga`

Search mangas within the given filter params. If no params are given, returns all the mangas.

### Params

- **[Optional]** searchParams: <a href="/typings/params#mangasearchparams">**MangaSearchParams**</a>

### Response

- <a href="/guides/client#client-response">JikanResponse</a><<a href="/typings/manga#manga">Manga</a>[]>

### Example

```ts
import { MangaClient, MangaSearchParams, MangaType, JikanResponse, Manga } from '@tutkli/jikan-ts';

(async () => {
    const mangaClient = new MangaClient();

    const searchParams: MangaSearchParams = {
        type: MangaType.manwha
    }

    await mangaClient
        .getMangaSearch(searchParams)
        .then((jikanResponse: JikanResponse<Manga[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getMangaById `/manga/{id}`

Get partial data of a Manga.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/guides/client#client-response">JikanResponse</a><<a href="/typings/manga#manga">Manga</a>>

### Example

```ts
import { MangaClient, JikanResponse, Manga } from '@tutkli/jikan-ts';

(async () => {
    const mangaClient = new MangaClient();

    await mangaClient
        .getMangaById(1)
        .then((jikanResponse: JikanResponse<Manga>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getMangaFullById `/manga/{id}/full`

Get complete data of a Manga.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/guides/client#client-response">JikanResponse</a><<a href="/typings/manga#manga">Manga</a>>

### Example

```ts
import { MangaClient, JikanResponse, Manga } from '@tutkli/jikan-ts';

(async () => {
    const mangaClient = new MangaClient();

    await mangaClient
        .getMangaFullById(1)
        .then((jikanResponse: JikanResponse<Manga>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getMangaCharacters `/manga/{id}/characters`

Get Characters of a specific Manga.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/guides/client#client-response">JikanResponse</a><<a href="/typings/manga#mangacharacter">MangaCharacter</a>[]>

### Example

```ts
import { MangaClient, JikanResponse, MangaCharacter } from '@tutkli/jikan-ts';

(async () => {
    const mangaClient = new MangaClient();

    await mangaClient
        .getMangaCharacters(1)
        .then((jikanResponse: JikanResponse<MangaCharacter[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getMangaPictures `/manga/{id}/pictures`

Get Pictures related to a specific Manga.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/guides/client#client-response">JikanResponse</a><<a href="/typings/common#jikanimages">JikanImages</a>[]>

### Example

```ts
import { MangaClient, JikanResponse, JikanImages } from '@tutkli/jikan-ts';

(async () => {
    const mangaClient = new MangaClient();

    await mangaClient
        .getMangaPictures(1)
        .then((jikanResponse: JikanResponse<JikanImages[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getMangaStatistics `/manga/{id}/statistics`

Get Statistics related to a specific Manga.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/guides/client#client-response">JikanResponse</a><<a href="/typings/manga#mangastatistics">MangaStatistics</a>>

### Example

```ts
import { MangaClient, JikanResponse, MangaStatistics } from '@tutkli/jikan-ts';

(async () => {
    const mangaClient = new MangaClient();

    await mangaClient
        .getMangaStatistics(1)
        .then((jikanResponse: JikanResponse<MangaStatistics>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```

<!-- ENDPOINT SPLIT MARKER -->

## getMangaRecommendations `/manga/{id}/recommendations`

Get Recommendations related to a specific Manga.

### Params

- **[Required]** mal_id: **number**

### Response

- <a href="/guides/client#client-response">JikanResponse</a><<a href="/typings/common#recommendation">Recommendation</a>[]>

### Example

```ts
import { MangaClient, JikanResponse, Recommendation } from '@tutkli/jikan-ts';

(async () => {
    const mangaClient = new MangaClient();

    await mangaClient
        .getMangaRecommendations(1)
        .then((jikanResponse: JikanResponse<Recommendation[]>) => { /* your code */ })
        .catch((error) => console.error(error));
})();
```
