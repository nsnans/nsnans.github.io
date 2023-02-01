import{_ as s}from"./chunks/5dcc7162d6e24491abc2e73af1fd868f205e1861fd44cd67c808885e1324ddb0.cb7bb5b8.js";import{_ as n,o as a,c as l,a as p}from"./app.7c2c84eb.js";const o="/assets/e94d3721a30e500811e0f466604137f2e016b6b9a79fba2a488561775ff505f3.e94d3721.png",B=JSON.parse('{"title":"\u{1F9E9} VueCli + PWA","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u{1F9E9} vue.config.js \u914D\u7F6E PWA \u884C\u4E3A","slug":"\u{1F9E9}-vue-config-js-\u914D\u7F6E-pwa-\u884C\u4E3A","link":"#\u{1F9E9}-vue-config-js-\u914D\u7F6E-pwa-\u884C\u4E3A","children":[]},{"level":3,"title":"\u{1F9E9} \u4FEE\u6539 registerServiceWorker.js\uFF0C\u505A\u517C\u5BB9\u5904\u7406","slug":"\u{1F9E9}-\u4FEE\u6539-registerserviceworker-js\uFF0C\u505A\u517C\u5BB9\u5904\u7406","link":"#\u{1F9E9}-\u4FEE\u6539-registerserviceworker-js\uFF0C\u505A\u517C\u5BB9\u5904\u7406","children":[]},{"level":3,"title":"\u{1F9E9} \u914D\u7F6E manifest.json","slug":"\u{1F9E9}-\u914D\u7F6E-manifest-json","link":"#\u{1F9E9}-\u914D\u7F6E-manifest-json","children":[]},{"level":3,"title":"\u{1F9E9} \u65B0\u5EFA service-worker.js","slug":"\u{1F9E9}-\u65B0\u5EFA-service-worker-js","link":"#\u{1F9E9}-\u65B0\u5EFA-service-worker-js","children":[]}],"relativePath":"FrontEnd/PWA/Vue_PWA.md","lastUpdated":1675237485000}'),e={name:"FrontEnd/PWA/Vue_PWA.md"},E=p(`<h1 id="\u{1F9E9}-vuecli-pwa" tabindex="-1">\u{1F9E9} VueCli + PWA <a class="header-anchor" href="#\u{1F9E9}-vuecli-pwa" aria-hidden="true">#</a></h1><blockquote><p>\u5B98\u65B9\u63D2\u4EF6\uFF1A <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noreferrer">Github | @vue/cli-plugin-pwa</a></p></blockquote><p>\u901A\u8FC7 Vue-cli \u811A\u624B\u67B6\u521B\u5EFA Vue \u9879\u76EE</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">vue create VuePWA</span></span>
<span class="line"></span></code></pre></div><p>VueCLi \u5728\u521B\u5EFA\u65B0\u9879\u76EE\u7684\u65F6\u5019\u662F\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E\u7684 \u{1F447}</p><p><img src="`+s+`" alt="\u56FE 1"></p><p>\u5982\u679C\u4E0D\u662F\u65B0\u9879\u76EE\u4E5F\u53EF\u4EE5\u4F7F\u7528 \u{1F447}</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">vue add pwa</span></span>
<span class="line"></span></code></pre></div><p><img src="`+o+`" alt="\u56FE 3"></p><p>\u5B83\u4F1A\u5728 <code>src</code> \u4E0B\u751F\u6210 <code>registerServiceWorker.js</code> \u6587\u4EF6\uFF08\u5B83\u662F\u7528\u6765\u6CE8\u518C sw \u670D\u52A1\u7684\uFF09</p><p>\u4E0D\u7528\u914D\u7F6E\u5C31\u53EF\u4EE5\u8DD1\u8D77\u6765\uFF0C\u4F46\u662F\u914D\u7F6E\u91CC\u9762\u6709\u4E9B\u5730\u65B9\u9700\u8981\u6CE8\u610F\u7684\u800C\u4E14\u4E0D\u80FD\u4E71\u6539\u3002</p><h3 id="\u{1F9E9}-vue-config-js-\u914D\u7F6E-pwa-\u884C\u4E3A" tabindex="-1">\u{1F9E9} <code>vue.config.js</code> \u914D\u7F6E PWA \u884C\u4E3A <a class="header-anchor" href="#\u{1F9E9}-vue-config-js-\u914D\u7F6E-pwa-\u884C\u4E3A" aria-hidden="true">#</a></h3><p>\u6BD4\u4E0A\u4E00\u7AE0\u591A\u4E86\u4E9B\u914D\u7F6E\u7684\u4E1C\u897F\u{1F447}</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#616E88;">//vue.config.js\u{1F447}</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">defineConfig</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">@vue/cli-service</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">defineConfig</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">transpileDependencies</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">true</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">pwa</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">name</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">VuePWA</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">background_color</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#4c89fe</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">theme_color</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#4c89fe</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">msTileColor</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#000000</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">appleMobileWebAppCapable</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">yes</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">appleMobileWebAppStatusBarStyle</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">black</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">// configure the workbox plugin (GenerateSW or InjectManifest)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">workboxPluginMode</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">InjectManifest</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">workboxOptions</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">      </span><span style="color:#616E88;">// swSrc is required in InjectManifest mode.</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">swSrc</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">src/service-worker.js</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">importWorkboxFrom</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">disabled</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">importScripts</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">https://cdn.myun.info/workbox-v4.3.1/workbox-sw.js</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">      </span><span style="color:#616E88;">// ...other Workbox options...</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>workboxPluginMode\uFF1Aworkbox\u7684\u6A21\u5F0F <ul><li>\u3010GenerateSW\u3011\u9ED8\u8BA4\u6A21\u5F0F\uFF08\u7F16\u8BD1\u65F6\u4F1A\u81EA\u52A8\u751F\u6210 service-worker.js\u3002\u540C\u65F6\u6B64\u6A21\u5F0F\u4E0B\u4E0D\u652F\u6301 swSrc \u53C2\u6570\uFF0C\u4E0D\u80FD\u914D\u7F6E swSrc\uFF0C\u5426\u5219\u5728\u7F16\u8BD1\u65F6\u4F1A\u62A5\u9519\u3002\uFF09</li><li>\u3010InjectManifest\u3011\u81EA\u5B9A\u4E49\u6A21\u5F0F\uFF08\u5728 InjectManifest \u6A21\u5F0F\u65F6 swSrc \u9879\u5FC5\u987B\u914D\u7F6E\uFF09</li></ul></li><li>workboxOptions\uFF1A <ul><li>swSrc\uFF1A\u6307\u5B9Aservice-worker.js\u6240\u5728\u4F4D\u7F6E</li><li>importWorkboxFrom\uFF1A\u5F15\u5165workbox\u4F9D\u8D56\u5E93\u7684\u65B9\u5F0F(\u9ED8\u8BA4\u7684\u4F9D\u8D56\u5E93\u5728Google\u7684cdn\u4E0A)</li><li>importScripts\uFF1A\u4F9D\u8D56\u5E93\u7684cdn\u7684url</li></ul></li></ul><h3 id="\u{1F9E9}-\u4FEE\u6539-registerserviceworker-js\uFF0C\u505A\u517C\u5BB9\u5904\u7406" tabindex="-1">\u{1F9E9} \u4FEE\u6539 registerServiceWorker.js\uFF0C\u505A\u517C\u5BB9\u5904\u7406 <a class="header-anchor" href="#\u{1F9E9}-\u4FEE\u6539-registerserviceworker-js\uFF0C\u505A\u517C\u5BB9\u5904\u7406" aria-hidden="true">#</a></h3><p>\u5176\u5B9E\u5C31\u591A\u4E00\u53E5 <code>&#39;serviceWorker&#39; in window.navigator &amp;&amp;</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#616E88;">//...</span></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">serviceWorker</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">in</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">window</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">navigator</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&amp;&amp;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">process</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">env</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">NODE_ENV</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">===</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">production</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">//...</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F9E9}-\u914D\u7F6E-manifest-json" tabindex="-1">\u{1F9E9} \u914D\u7F6E <code>manifest.json</code> <a class="header-anchor" href="#\u{1F9E9}-\u914D\u7F6E-manifest-json" aria-hidden="true">#</a></h3><p>\u5728 publice \u76EE\u5F55\u4E0B\uFF0C\u65B0\u5EFA <code>manifest.json</code>\u{1F447}</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Vue-PWA</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">short_name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">VPWA</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">start_url</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">/</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">icons</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:[</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">src</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">img/icons/logo.svg</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">sizes</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">144x144</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">type</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">image/svg</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">],</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">background_color</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#333</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">theme_color</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">#222</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">display</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">standalone</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F9E9}-\u65B0\u5EFA-service-worker-js" tabindex="-1">\u{1F9E9} \u65B0\u5EFA <code>service-worker.js</code> <a class="header-anchor" href="#\u{1F9E9}-\u65B0\u5EFA-service-worker-js" aria-hidden="true">#</a></h3><p>\u5B83\u5C31\u662F\u4E3B\u8981\u7528\u6765\u63A7\u5236\u7F13\u5B58\u7684\u3002</p><p>\u5982\u679C\u5728<code>vue.config.js</code>\u4E2D\u914D\u7F6E\u662F\u7528\u3010GenerateSW\u3011\u9ED8\u8BA4\u6A21\u5F0F\uFF0C\u5219\u4E0D\u7528\u81EA\u5DF1\u5199\u{1F447}</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#616E88;">// \u5224\u65ADworkbox\u662F\u5426\u52A0\u8F7D\u6210\u529F</span></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">workbox</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">Yay! Workbox is loaded \u{1F389}</span><span style="color:#ECEFF4;">\`</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">\`</span><span style="color:#A3BE8C;">Boo! Workbox didn&#39;t load \u{1F62C}</span><span style="color:#ECEFF4;">\`</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u8BBE\u7F6E\u7F13\u5B58\u524D\u7F00\u548C\u540E\u7F00\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u9879\u76EE\u540D\u4FEE\u6539</span></span>
<span class="line"><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">core</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setCacheNameDetails</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">prefix</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">xxg-vue-pwa</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">suffix</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">v1.0.0</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u8FD9\u4E24\u4E2A\u5176\u5B9E\u5C31\u662F\u524D\u9762\u8BF4\u7684\u3010\u8DF3\u8FC7\u7B49\u5F85\u3011\u3010\u7ACB\u5373\u6267\u884C\u3011</span></span>
<span class="line"><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">core</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">skipWaiting</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u5F3A\u5236\u7B49\u5F85\u4E2D\u7684 Service Worker \u88AB\u6FC0\u6D3B</span></span>
<span class="line"><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">core</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">clientsClaim</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// Service Worker \u88AB\u6FC0\u6D3B\u540E\u4F7F\u5176\u7ACB\u5373\u83B7\u5F97\u9875\u9762\u63A7\u5236\u6743</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u3010\u4E0D\u77E5\u9053\u6709\u4EC0\u4E48\u7528...\u3011</span></span>
<span class="line"><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">precaching</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">precacheAndRoute</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">self</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">__precacheManifest</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">||</span><span style="color:#D8DEE9FF;"> [])</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u8BBE\u7F6E\u9884\u52A0\u8F7D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u7F13\u5B58web\u7684css\u8D44\u6E90</span></span>
<span class="line"><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">routing</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">registerRoute</span><span style="color:#D8DEE9FF;">(</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">// Cache CSS files</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">/</span><span style="color:#EBCB8B;">.</span><span style="color:#81A1C1;">*</span><span style="color:#EBCB8B;">\\.css</span><span style="color:#ECEFF4;">/</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">// \u4F7F\u7528\u7F13\u5B58\uFF0C\u4F46\u5C3D\u5FEB\u5728\u540E\u53F0\u66F4\u65B0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">strategies</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">StaleWhileRevalidate</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">// \u4F7F\u7528\u81EA\u5B9A\u4E49\u7F13\u5B58\u540D\u79F0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">cacheName</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">css-cache</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u7F13\u5B58web\u7684js\u8D44\u6E90</span></span>
<span class="line"><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">routing</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">registerRoute</span><span style="color:#D8DEE9FF;">(</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">// \u7F13\u5B58JS\u6587\u4EF6</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">/</span><span style="color:#EBCB8B;">.</span><span style="color:#81A1C1;">*</span><span style="color:#EBCB8B;">\\.js</span><span style="color:#ECEFF4;">/</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">// \u4F7F\u7528\u7F13\u5B58\uFF0C\u4F46\u5C3D\u5FEB\u5728\u540E\u53F0\u66F4\u65B0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">strategies</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">StaleWhileRevalidate</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">// \u4F7F\u7528\u81EA\u5B9A\u4E49\u7F13\u5B58\u540D\u79F0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">cacheName</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">js-cache</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u7F13\u5B58web\u7684\u56FE\u7247\u8D44\u6E90</span></span>
<span class="line"><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">routing</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">registerRoute</span><span style="color:#D8DEE9FF;">(</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">/</span><span style="color:#EBCB8B;">\\.</span><span style="color:#ECEFF4;">(?:</span><span style="color:#EBCB8B;">png</span><span style="color:#81A1C1;">|</span><span style="color:#EBCB8B;">gif</span><span style="color:#81A1C1;">|</span><span style="color:#EBCB8B;">jpg</span><span style="color:#81A1C1;">|</span><span style="color:#EBCB8B;">jpeg</span><span style="color:#81A1C1;">|</span><span style="color:#EBCB8B;">svg</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">$</span><span style="color:#ECEFF4;">/</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">strategies</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">StaleWhileRevalidate</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">cacheName</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">images</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">plugins</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> [</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">expiration</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">ExpirationPlugin</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">maxEntries</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">maxAgeSeconds</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">30</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">24</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u8BBE\u7F6E\u7F13\u5B58\u6709\u6548\u671F\u4E3A30\u5929</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    ]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u6211\u4EEC\u5F88\u591A\u8D44\u6E90\u5728\u5176\u4ED6\u57DF\u540D\u4E0A\uFF0C\u6BD4\u5982cdn\u3001oss\u7B49\uFF0C\u8FD9\u91CC\u505A\u5355\u72EC\u5904\u7406\uFF0C\u9700\u8981\u652F\u6301\u8DE8\u57DF</span></span>
<span class="line"><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">routing</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">registerRoute</span><span style="color:#D8DEE9FF;">(</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">/</span><span style="color:#81A1C1;">^</span><span style="color:#EBCB8B;">https:\\/\\/cdn\\.my\\.com\\/.</span><span style="color:#81A1C1;">*</span><span style="color:#EBCB8B;">\\.</span><span style="color:#ECEFF4;">(</span><span style="color:#EBCB8B;">jpe</span><span style="color:#81A1C1;">?</span><span style="color:#EBCB8B;">g</span><span style="color:#81A1C1;">|</span><span style="color:#EBCB8B;">png</span><span style="color:#81A1C1;">|</span><span style="color:#EBCB8B;">gif</span><span style="color:#81A1C1;">|</span><span style="color:#EBCB8B;">svg</span><span style="color:#ECEFF4;">)/</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">strategies</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">StaleWhileRevalidate</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">cacheName</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">cdn-images</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">plugins</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> [</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">workbox</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">expiration</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">ExpirationPlugin</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">maxEntries</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">maxAgeSeconds</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">24</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u8BBE\u7F6E\u7F13\u5B58\u6709\u6548\u671F\u4E3A5\u5929</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    ]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">fetchOptions</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">credentials</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">include</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u652F\u6301\u8DE8\u57DF</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u7F13\u5B58\u4E3B\u7AD9\u8DEF\u7531\uFF0C\u6309\u81EA\u5DF1\u57DF\u540D\u89C4\u5219\u8FDB\u884C\u914D\u7F6E</span></span>
<span class="line"><span style="color:#616E88;">// workbox.routing.registerRoute(</span></span>
<span class="line"><span style="color:#616E88;">//     // Vue</span></span>
<span class="line"><span style="color:#616E88;">//     new RegExp(&#39;https://xxggg.github.io&#39;),</span></span>
<span class="line"><span style="color:#616E88;">//     // \u4F7F\u7528\u7F13\u5B58\uFF0C\u4F46\u5C3D\u5FEB\u5728\u540E\u53F0\u66F4\u65B0</span></span>
<span class="line"><span style="color:#616E88;">//     workbox.strategies.staleWhileRevalidate()</span></span>
<span class="line"><span style="color:#616E88;">// );</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// api\u7F13\u5B58\uFF0C\u4F18\u9009\u4ECE\u7F51\u7EDC\u83B7\u53D6\uFF0C\u7F51\u7EDC\u5F02\u5E38\u65F6\u518D\u4F7F\u7528\u7F13\u5B58\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645api url\u914D\u7F6ERegExp\uFF0C\u53EA\u652F\u6301get\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#616E88;">// workbox.routing.registerRoute(</span></span>
<span class="line"><span style="color:#616E88;">//     new RegExp(&#39;https://xxggg.github.io&#39;),</span></span>
<span class="line"><span style="color:#616E88;">//     workbox.strategies.staleWhileRevalidate({</span></span>
<span class="line"><span style="color:#616E88;">//         plugins: [</span></span>
<span class="line"><span style="color:#616E88;">//             new workbox.cacheableResponse.Plugin({</span></span>
<span class="line"><span style="color:#616E88;">//                 statuses: [0, 200]</span></span>
<span class="line"><span style="color:#616E88;">//             })</span></span>
<span class="line"><span style="color:#616E88;">//         ]</span></span>
<span class="line"><span style="color:#616E88;">//     })</span></span>
<span class="line"><span style="color:#616E88;">// );</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,25),c=[E];function t(r,F,y,D,C,i){return a(),l("div",null,c)}const g=n(e,[["render",t]]);export{B as __pageData,g as default};