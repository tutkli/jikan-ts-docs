# Client Args

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
