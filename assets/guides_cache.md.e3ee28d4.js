import{_ as s,c as a,o as n,a as e}from"./app.8a5d3fe5.js";const d=JSON.parse('{"title":"Cache Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"guides/cache.md"}'),o={name:"guides/cache.md"},p=e(`<h1 id="cache-configuration" tabindex="-1">Cache Configuration <a class="header-anchor" href="#cache-configuration" aria-hidden="true">#</a></h1><p>To use a specific configuration, pass the <code>cacheOptions</code> argument when instantiating a client:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">AnimeClient</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@tutkli/jikan-ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> animeClient </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">AnimeClient</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cacheOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// your custom axios-cache-interceptor options</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>The default options provided are:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    storage: buildMemoryStorage(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    generateKey: defaultKeyGenerator,</span></span>
<span class="line"><span style="color:#A6ACCD;">    headerInterpreter: defaultHeaderInterpreter,</span></span>
<span class="line"><span style="color:#A6ACCD;">    debug: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>See also: <a href="https://axios-cache-interceptor.js.org/guide" target="_blank" rel="noreferrer">axios-cache-interceptor Configuration</a>.</p>`,6),l=[p];function t(c,r,i,C,D,A){return n(),a("div",null,l)}const F=s(o,[["render",t]]);export{d as __pageData,F as default};
