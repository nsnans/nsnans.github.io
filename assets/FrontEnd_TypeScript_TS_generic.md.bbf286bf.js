import{_ as s,o as n,c as a,a as l}from"./app.5da19ece.js";const i=JSON.parse('{"title":"\u{1F7E6} \u6CDB\u578B <?>","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/TypeScript/TS_generic.md","lastUpdated":1673426730000}'),p={name:"FrontEnd/TypeScript/TS_generic.md"},o=l(`<h1 id="\u{1F7E6}-\u6CDB\u578B" tabindex="-1">\u{1F7E6} \u6CDB\u578B &lt;?&gt; <a class="header-anchor" href="#\u{1F7E6}-\u6CDB\u578B" aria-hidden="true">#</a></h1><blockquote><p>\u6CDB\u578B\uFF08Generics\uFF09\u662F\u6307\u5728\u5B9A\u4E49\u51FD\u6570\u3001\u63A5\u53E3\u6216\u7C7B\u7684\u65F6\u5019\uFF0C\u4E0D\u9884\u5148\u6307\u5B9A\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u800C\u5728\u4F7F\u7528\u7684\u65F6\u5019\u518D\u6307\u5B9A\u7C7B\u578B\u7684\u4E00\u79CD\u7279\u6027\u3002</p></blockquote><p>\u8FD9\u4E2A\u5728Vue\u91CC\u611F\u89C9\u8981\u7ECF\u5E38\u4F7F\u7528\u7684...</p><p>\u7279\u522B\u662FVue3...</p><p>\u56E0\u4E3AVue3\u8981\u7ECF\u5E38\u4F7F\u7528ref</p><p>\u6BD4\u5982\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">ref</span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">&gt;</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><hr><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">createArray</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">length</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">value</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">any</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Array</span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">any</span><span style="color:#ECEFF4;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">result</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> []</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">length</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">result</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">] </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">value</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">result</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">createArray</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">x</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// [&#39;x&#39;, &#39;x&#39;, &#39;x&#39;]</span></span>
<span class="line"></span></code></pre></div><p>\u4F18\u5316\u{1F447} \u8FD9\u6837\u5C31\u53EF\u4EE5\u77E5\u9053\u8FD4\u56DE\u6765\u7684\u4EC0\u4E48\u7C7B\u578B\u4E86\uFF01</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">createArray</span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">T</span><span style="color:#ECEFF4;">&gt;(</span><span style="color:#D8DEE9;">length</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">value</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">T</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Array</span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">T</span><span style="color:#ECEFF4;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">result</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">T</span><span style="color:#D8DEE9FF;">[] </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> []</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">length</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">result</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">] </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">value</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">result</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">createArray</span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">string</span><span style="color:#ECEFF4;">&gt;</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">x</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// [&#39;x&#39;, &#39;x&#39;, &#39;x&#39;]</span></span>
<span class="line"><span style="color:#616E88;">//\u6216 \u8BA9\u7C7B\u578B\u63A8\u8BBA\u81EA\u52A8\u63A8\u7B97</span></span>
<span class="line"><span style="color:#88C0D0;">createArray</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">x</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// [&#39;x&#39;, &#39;x&#39;, &#39;x&#39;]</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function t(c,r,E,F,y,D){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{i as __pageData,A as default};
