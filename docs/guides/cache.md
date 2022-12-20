# Cache Configuration

To use a specific configuration, pass the `cacheOptions` argument when instantiating a client:

```ts
import {AnimeClient} from '@tutkli/jikan-ts';

const animeClient = new AnimeClient({ 
    cacheOptions: { ... } // your custom axios-cache-interceptor options
  }
);
```

The default options provided are:

```
{
    storage: buildMemoryStorage(),
    generateKey: defaultKeyGenerator,
    headerInterpreter: defaultHeaderInterpreter,
    debug: undefined,
};
```

See also: [axios-cache-interceptor Configuration](https://axios-cache-interceptor.js.org/guide).
