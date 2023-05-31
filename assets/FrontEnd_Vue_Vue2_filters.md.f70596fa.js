import{_ as s,o as a,c as n,a as l}from"./app.7a3ebbdd.js";const C=JSON.parse('{"title":"\u{1F7E9} \u8FC7\u6EE4\u5668 filters","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u{1F330} \u4E3E\u4E2A\u4F8B\u5B50","slug":"\u{1F330}-\u4E3E\u4E2A\u4F8B\u5B50","link":"#\u{1F330}-\u4E3E\u4E2A\u4F8B\u5B50","children":[]}],"relativePath":"FrontEnd/Vue/Vue2_filters.md","lastUpdated":1685520771000}'),e={name:"FrontEnd/Vue/Vue2_filters.md"},p=l(`<h1 id="\u{1F7E9}-\u8FC7\u6EE4\u5668-filters" tabindex="-1">\u{1F7E9} \u8FC7\u6EE4\u5668 filters <a class="header-anchor" href="#\u{1F7E9}-\u8FC7\u6EE4\u5668-filters" aria-hidden="true">#</a></h1><p>\u8FC7\u6EE4\u5668\uFF0C\u5C31\u662F... \u5C31\u662F\u8FC7\u6EE4\u7528\u7684...</p><p>\u5B83\u53EF\u4EE5\u5E2E\u4F60\u628A\u4E00\u4E9B\u6570\u636E\u901A\u8FC7 <code>filters</code> \u8FD9\u4E2A \u7C7B\u4F3C \u8BA1\u7B97\u5C5E\u6027\u7684\u65B9\u6CD5\u5E2E\u4F60\u8FC7\u6EE4\u3001\u7B5B\u9009\uFF01</p><h3 id="\u{1F330}-\u4E3E\u4E2A\u4F8B\u5B50" tabindex="-1">\u{1F330} \u4E3E\u4E2A\u4F8B\u5B50 <a class="header-anchor" href="#\u{1F330}-\u4E3E\u4E2A\u4F8B\u5B50" aria-hidden="true">#</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#81A1C1;">&lt;div&gt;</span><span style="color:#D8DEE9FF;">{{ message | filteName }}</span><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">v-bind:id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">message | filteName</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/div&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#616E88;">//\u5C40\u90E8</span></span>
<span class="line"><span style="color:#D8DEE9FF;">filters</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">filteName</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">: </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">value</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230 \u5728\u8FC7\u6EE4\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u628A\u6BCF\u4E2A\u8FDB\u6765\u7684\u6570\u636E\u540E\u9762\u90FD\u591A\u52A0\u4E00\u4E2A <code>xxg</code> \u7136\u540E\u8FD4\u56DE\u56DE\u53BB~</p><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>filters\u8FC7\u6EE4\u5668\u5728Vue3.0\u4E2D\u5DF2\u7ECF\u5220\u9664\u4E86\uFF0C\u4E0D\u518D\u652F\u6301\uFF01</p></div>`,8),o=[p];function t(c,r,i,E,F,d){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{C as __pageData,D as default};