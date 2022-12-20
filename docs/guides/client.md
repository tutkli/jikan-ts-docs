# Clients

## Client Args

Client arguments for logging and cache configurations:

```ts
export interface ClientArgs {
  loggerOptions?: LoggerOptions;
  cacheOptions?: CacheOptions;
  baseURL?: string; // Location of the JikanAPI. Leave empty to use the official JikanAPI instance.
}
```

See also:

- [axios-cache-interceptor Configuration](https://axios-cache-interceptor.js.org/guide).
- [tslog Settings](https://tslog.js.org/#/?id=settings).


## Client Response

### `JikanResponse<T>`

The requested resource is received in the data property.

```
{
  data: T;
  pagination?: JikanPagination;
}
```

### Pagination 

If the endpoint is paginated, it will receive a *JikanPagination* property.

#### `JikanPagination`

```
{
  last_visible_page: number;
  has_next_page: boolean;
  items?: JikanPaginationItems;
}
```

#### `JikanPaginationItems`

```
{
  count: number;
  total: number;
  per_page: number;
}
```
