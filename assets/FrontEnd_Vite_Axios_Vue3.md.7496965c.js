import{_ as s,o as n,c as a,a as p}from"./app.5da19ece.js";const C=JSON.parse('{"title":"\u{1F4E1} Axios + Vue3\u3010\u4E8C\u6B21\u5C01\u88C5/\u8DE8\u57DF\u3011","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u{1F4E1} \u4E8C\u6B21\u5C01\u88C5axios\uFF0C\u6DFB\u52A0\u62E6\u622A\u5668","slug":"\u{1F4E1}-\u4E8C\u6B21\u5C01\u88C5axios\uFF0C\u6DFB\u52A0\u62E6\u622A\u5668","link":"#\u{1F4E1}-\u4E8C\u6B21\u5C01\u88C5axios\uFF0C\u6DFB\u52A0\u62E6\u622A\u5668","children":[]},{"level":2,"title":"\u{1F4E1} \u96C6\u5408 api\u8BF7\u6C42\u63A5\u53E3","slug":"\u{1F4E1}-\u96C6\u5408-api\u8BF7\u6C42\u63A5\u53E3","link":"#\u{1F4E1}-\u96C6\u5408-api\u8BF7\u6C42\u63A5\u53E3","children":[]},{"level":2,"title":"\u{1F4E1} \u4F7F\u7528\u63A5\u53E3","slug":"\u{1F4E1}-\u4F7F\u7528\u63A5\u53E3","link":"#\u{1F4E1}-\u4F7F\u7528\u63A5\u53E3","children":[{"level":3,"title":"Vite \u8DE8\u57DF\u8BBE\u7F6E\u{1F447}","slug":"vite-\u8DE8\u57DF\u8BBE\u7F6E\u{1F447}","link":"#vite-\u8DE8\u57DF\u8BBE\u7F6E\u{1F447}","children":[]}]}],"relativePath":"FrontEnd/Vite/Axios_Vue3.md","lastUpdated":1673426730000}'),l={name:"FrontEnd/Vite/Axios_Vue3.md"},o=p(`<h1 id="\u{1F4E1}-axios-vue3\u3010\u4E8C\u6B21\u5C01\u88C5-\u8DE8\u57DF\u3011" tabindex="-1">\u{1F4E1} Axios + Vue3\u3010\u4E8C\u6B21\u5C01\u88C5/\u8DE8\u57DF\u3011 <a class="header-anchor" href="#\u{1F4E1}-axios-vue3\u3010\u4E8C\u6B21\u5C01\u88C5-\u8DE8\u57DF\u3011" aria-hidden="true">#</a></h1><h3 id="\u{1F4E1}-\u4E8C\u6B21\u5C01\u88C5axios\uFF0C\u6DFB\u52A0\u62E6\u622A\u5668" tabindex="-1">\u{1F4E1} \u4E8C\u6B21\u5C01\u88C5axios\uFF0C\u6DFB\u52A0\u62E6\u622A\u5668 <a class="header-anchor" href="#\u{1F4E1}-\u4E8C\u6B21\u5C01\u88C5axios\uFF0C\u6DFB\u52A0\u62E6\u622A\u5668" aria-hidden="true">#</a></h3><p>\u2714\uFE0F \u65B0\u5EFA src/api/request.ts</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">axios</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">axios</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u8BBE\u7F6E\u57FA\u7840\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">baseURL</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/api</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u521B\u5EFA\u4E00\u4E2A axios \u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">requests</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">axios</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">create</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">baseURL</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">baseURL</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u6240\u6709\u7684\u8BF7\u6C42\u5730\u5740\u524D\u7F00\u90E8\u5206</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">timeout</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60000</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4\u6BEB\u79D2</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u6DFB\u52A0\u8BF7\u6C42\u62E6\u622A\u5668</span></span>
<span class="line"><span style="color:#D8DEE9;">requests</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">interceptors</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">request</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">config</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">// \u5728\u8FD9\u91CC\u53EF\u4EE5\u6DFB\u52A0token\u{1F447}</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">// config.headers.token = &quot;token&quot;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">config</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">headers</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">authorization</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">localStorage</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getItem</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Token</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">||</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">config</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u6DFB\u52A0\u54CD\u5E94\u62E6\u622A\u5668</span></span>
<span class="line"><span style="color:#D8DEE9;">requests</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">interceptors</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">response</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">response</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">response</span></span>
<span class="line"><span style="color:#ECEFF4;">},(</span><span style="color:#D8DEE9;">error</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Promise</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">reject</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">error</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">default</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">requests</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F4E1}-\u96C6\u5408-api\u8BF7\u6C42\u63A5\u53E3" tabindex="-1">\u{1F4E1} \u96C6\u5408 api\u8BF7\u6C42\u63A5\u53E3 <a class="header-anchor" href="#\u{1F4E1}-\u96C6\u5408-api\u8BF7\u6C42\u63A5\u53E3" aria-hidden="true">#</a></h2><p><strong>\u2714\uFE0F\u65B0\u5EFA src/api/index.ts</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#616E88;">// \u5F15\u5165\u4E0A\u9762\u914D\u7F6E\u597D\u7684</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">requests</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./request</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">test</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">requests</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">url</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">method</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">get</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#616E88;">//....</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F4E1}-\u4F7F\u7528\u63A5\u53E3" tabindex="-1">\u{1F4E1} \u4F7F\u7528\u63A5\u53E3 <a class="header-anchor" href="#\u{1F4E1}-\u4F7F\u7528\u63A5\u53E3" aria-hidden="true">#</a></h2><p>app.vue\u{1F447}</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#81A1C1;">&lt;script</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">setup</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">lang</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ts</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#8FBCBB;">test</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./api/index</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">goApi</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">async</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">testApi</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">await</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">test</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">testApi</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="vite-\u8DE8\u57DF\u8BBE\u7F6E\u{1F447}" tabindex="-1">Vite \u8DE8\u57DF\u8BBE\u7F6E\u{1F447} <a class="header-anchor" href="#vite-\u8DE8\u57DF\u8BBE\u7F6E\u{1F447}" aria-hidden="true">#</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">defineConfig</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">vite</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">vue</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">@vitejs/plugin-vue</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">default</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">defineConfig</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">plugins</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#88C0D0;">vue</span><span style="color:#D8DEE9FF;">()]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">server</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">proxy</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">/api</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">target</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">http://api.xgtools.top</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">changeOrigin</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">true</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">rewrite</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">path</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">path</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">replace</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">/</span><span style="color:#81A1C1;">^</span><span style="color:#EBCB8B;">\\/api</span><span style="color:#ECEFF4;">/</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function t(E,c,r,F,y,D){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
