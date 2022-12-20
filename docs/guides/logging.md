# Logging Configuration

Logging is disabled by default. To enable logging, pass the `loggerOptions` argument with `enabled: true`. You can also customize the styling of the logger with your custom tslog settings.

```ts
import {AnimeClient} from '@tutkli/jikan-ts';

const animeClient = new AnimeClient({ 
    loggerOptions: { 
        enabled: true, // enables logging
        settings: { ... } // [Optional] your custom tslog settings
    } 
  }
);
```

The default tslog settings are: 

```
{
  prettyLogTemplate: '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}} {{logLevelName}} [{{name}}] ',
  name: 'Jikan-ts Logger',
}
```

See also: [tslog Settings](https://tslog.js.org/#/?id=settings).
