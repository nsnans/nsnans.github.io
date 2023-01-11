import{_ as s,o as n,c as a,a as l}from"./app.5da19ece.js";const i=JSON.parse('{"title":"\u{1F7E6} \u51FD\u6570\u7684\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F7E6} \u51FD\u6570\u58F0\u660E","slug":"\u{1F7E6}-\u51FD\u6570\u58F0\u660E","link":"#\u{1F7E6}-\u51FD\u6570\u58F0\u660E","children":[]},{"level":2,"title":"\u{1F7E6} \u51FD\u6570\u8868\u8FBE\u5F0F","slug":"\u{1F7E6}-\u51FD\u6570\u8868\u8FBE\u5F0F","link":"#\u{1F7E6}-\u51FD\u6570\u8868\u8FBE\u5F0F","children":[{"level":3,"title":"\u53EF\u4EE5\u7528\u63A5\u53E3","slug":"\u53EF\u4EE5\u7528\u63A5\u53E3","link":"#\u53EF\u4EE5\u7528\u63A5\u53E3","children":[]}]}],"relativePath":"FrontEnd/TypeScript/TS_Funsion.md","lastUpdated":1673426730000}'),p={name:"FrontEnd/TypeScript/TS_Funsion.md"},o=l(`<h1 id="\u{1F7E6}-\u51FD\u6570\u7684\u7C7B\u578B" tabindex="-1">\u{1F7E6} \u51FD\u6570\u7684\u7C7B\u578B <a class="header-anchor" href="#\u{1F7E6}-\u51FD\u6570\u7684\u7C7B\u578B" aria-hidden="true">#</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#616E88;">// \u51FD\u6570\u58F0\u660E\uFF08Function Declaration\uFF09</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">sum</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// \u51FD\u6570\u8868\u8FBE\u5F0F\uFF08Function Expression\uFF09</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">mySum</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E6}-\u51FD\u6570\u58F0\u660E" tabindex="-1">\u{1F7E6} \u51FD\u6570\u58F0\u660E <a class="header-anchor" href="#\u{1F7E6}-\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">sum</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//          \u{1F447}x\u6709\u3010\u9ED8\u8BA4\u503C\u3011\u{1F447}y\u662F\u3010\u53EF\u9009\u53C2\u6570\u3011</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">sum</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">?:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">y</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">x</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">else</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E6}-\u51FD\u6570\u8868\u8FBE\u5F0F" tabindex="-1">\u{1F7E6} \u51FD\u6570\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u{1F7E6}-\u51FD\u6570\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">mySum</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><p>\u{1F446} \u8FD9\u6837\u662F\u4E0D\u884C\u7684\uFF0C\u5B83\u53EA\u5BF9\u3010\u7B49\u53F7\u53F3\u8FB9\u3011\u8FDB\u884C\u4E86\u3010\u7C7B\u578B\u5B9A\u4E49\u3011<br> \u5E94\u8BE5 \u{1F447}</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">mySum</span><span style="color:#81A1C1;">:</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u6CE8\u610F\u4E0D\u8981\u6DF7\u6DC6\u4E86 TypeScript \u4E2D\u7684 =&gt; \u548C ES6 \u4E2D\u7684 =&gt;\u3002</p></blockquote><div class="danger custom-block"><p class="custom-block-title">=&gt;</p><p>\u5728 TypeScript \u7684\u7C7B\u578B\u5B9A\u4E49\u4E2D\uFF0C=&gt; \u7528\u6765\u8868\u793A\u51FD\u6570\u7684\u5B9A\u4E49\uFF0C\u5DE6\u8FB9\u662F\u8F93\u5165\u7C7B\u578B\uFF0C\u9700\u8981\u7528\u62EC\u53F7\u62EC\u8D77\u6765\uFF0C\u53F3\u8FB9\u662F\u8F93\u51FA\u7C7B\u578B\u3002</p><p>\u5728 ES6 \u4E2D\uFF0C=&gt; \u53EB\u505A\u7BAD\u5934\u51FD\u6570</p></div><h3 id="\u53EF\u4EE5\u7528\u63A5\u53E3" tabindex="-1">\u53EF\u4EE5\u7528\u63A5\u53E3 <a class="header-anchor" href="#\u53EF\u4EE5\u7528\u63A5\u53E3" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#81A1C1;">interface</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">mySum</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">){</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">x</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">y</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function t(c,r,E,y,F,D){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};
