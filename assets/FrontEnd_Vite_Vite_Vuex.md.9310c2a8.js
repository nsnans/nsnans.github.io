import{_ as s,o as a,c as n,a as p}from"./app.7c2c84eb.js";const C=JSON.parse('{"title":"\u26A1 Vite \u5B89\u88C5 Vuex","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u26A1 \u5B89\u88C5","slug":"\u26A1-\u5B89\u88C5","link":"#\u26A1-\u5B89\u88C5","children":[]},{"level":3,"title":"\u26A1 \u914D\u7F6E","slug":"\u26A1-\u914D\u7F6E","link":"#\u26A1-\u914D\u7F6E","children":[]},{"level":2,"title":"\u26A1 \u66F4\u591A","slug":"\u26A1-\u66F4\u591A","link":"#\u26A1-\u66F4\u591A","children":[]}],"relativePath":"FrontEnd/Vite/Vite_Vuex.md","lastUpdated":1675237485000}'),l={name:"FrontEnd/Vite/Vite_Vuex.md"},o=p(`<h1 id="\u26A1-vite-\u5B89\u88C5-vuex" tabindex="-1">\u26A1 Vite \u5B89\u88C5 Vuex <a class="header-anchor" href="#\u26A1-vite-\u5B89\u88C5-vuex" aria-hidden="true">#</a></h1><h3 id="\u26A1-\u5B89\u88C5" tabindex="-1">\u26A1 \u5B89\u88C5 <a class="header-anchor" href="#\u26A1-\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm install vuex --save</span></span>
<span class="line"></span></code></pre></div><h3 id="\u26A1-\u914D\u7F6E" tabindex="-1">\u26A1 \u914D\u7F6E <a class="header-anchor" href="#\u26A1-\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u{1F447} <code>src/store/index.ts</code> \u{1F447}</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">createStore</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">vuex</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">store</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">createStore</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">state</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;">  </span></span>
<span class="line"><span style="color:#D8DEE9FF;">	  </span><span style="color:#D8DEE9;">test</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">test1</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">mutations</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;">   </span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">actions</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">getters</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">default</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">store</span></span>
<span class="line"></span></code></pre></div><p>\u{1F447} <code>main.ts</code> \u{1F447}</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">createApp</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">vue</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">App</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./App.vue</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">router</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./router</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">store</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">./store</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">app</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">createApp</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">App</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">app</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">router</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">use</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">store</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">mount</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">#app</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u26A1-\u66F4\u591A" tabindex="-1">\u26A1 \u66F4\u591A <a class="header-anchor" href="#\u26A1-\u66F4\u591A" aria-hidden="true">#</a></h2><p>\u66F4\u591A\u5173\u4E8E Vuex \u7684\u64CD\u4F5C\u8BF7\u770B <a href="./Vuex">\u{1F9E9} Vuex</a></p>`,10),e=[o];function t(E,c,r,F,D,y){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};