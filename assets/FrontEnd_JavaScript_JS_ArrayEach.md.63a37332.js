import{_ as s,o as a,c as n,a as l}from"./app.5da19ece.js";const C=JSON.parse('{"title":"\u{1F7E8} JS \u6570\u7EC4\u904D\u5386","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F7E8} forEach()\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u65E0\u8FD4\u56DE\u3011","slug":"\u{1F7E8}-foreach-\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u65E0\u8FD4\u56DE\u3011","link":"#\u{1F7E8}-foreach-\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u65E0\u8FD4\u56DE\u3011","children":[]},{"level":2,"title":"\u{1F7E8} map()\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u8FD4\u56DE\u3011","slug":"\u{1F7E8}-map-\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u8FD4\u56DE\u3011","link":"#\u{1F7E8}-map-\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u8FD4\u56DE\u3011","children":[]},{"level":2,"title":"\u{1F7E8} for\u3010\u904D\u5386\u5FAA\u73AF\u3011","slug":"\u{1F7E8}-for\u3010\u904D\u5386\u5FAA\u73AF\u3011","link":"#\u{1F7E8}-for\u3010\u904D\u5386\u5FAA\u73AF\u3011","children":[]},{"level":2,"title":"\u{1F7E8} for of\u3010\u904D\u5386\u5FAA\u73AF\u3011","slug":"\u{1F7E8}-for-of\u3010\u904D\u5386\u5FAA\u73AF\u3011","link":"#\u{1F7E8}-for-of\u3010\u904D\u5386\u5FAA\u73AF\u3011","children":[]},{"level":2,"title":"\u{1F7E8} filter()\u3010\u8FC7\u6EE4\u3011","slug":"\u{1F7E8}-filter-\u3010\u8FC7\u6EE4\u3011","link":"#\u{1F7E8}-filter-\u3010\u8FC7\u6EE4\u3011","children":[]},{"level":2,"title":"\u{1F7E8} every()\u3010\u6240\u6709\u90FD\u6EE1\u8DB3\u624D true\u3011","slug":"\u{1F7E8}-every-\u3010\u6240\u6709\u90FD\u6EE1\u8DB3\u624D-true\u3011","link":"#\u{1F7E8}-every-\u3010\u6240\u6709\u90FD\u6EE1\u8DB3\u624D-true\u3011","children":[]},{"level":2,"title":"\u{1F7E8} some()\u3010\u6709\u4E00\u4E2A\u6EE1\u8DB3\u5C31 true\u3011","slug":"\u{1F7E8}-some-\u3010\u6709\u4E00\u4E2A\u6EE1\u8DB3\u5C31-true\u3011","link":"#\u{1F7E8}-some-\u3010\u6709\u4E00\u4E2A\u6EE1\u8DB3\u5C31-true\u3011","children":[]},{"level":2,"title":"\u{1F7E8} reduce() \u548C reduceRight()\u3010\u8FED\u4EE3\u6240\u6709\u9879\u3011","slug":"\u{1F7E8}-reduce-\u548C-reduceright-\u3010\u8FED\u4EE3\u6240\u6709\u9879\u3011","link":"#\u{1F7E8}-reduce-\u548C-reduceright-\u3010\u8FED\u4EE3\u6240\u6709\u9879\u3011","children":[]}],"relativePath":"FrontEnd/JavaScript/JS_ArrayEach.md","lastUpdated":1673426730000}'),p={name:"FrontEnd/JavaScript/JS_ArrayEach.md"},o=l(`<h1 id="\u{1F7E8}-js-\u6570\u7EC4\u904D\u5386" tabindex="-1">\u{1F7E8} JS \u6570\u7EC4\u904D\u5386 <a class="header-anchor" href="#\u{1F7E8}-js-\u6570\u7EC4\u904D\u5386" aria-hidden="true">#</a></h1><ul><li><code>forEach()</code>\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u65E0\u8FD4\u56DE\u3011</li><li><code>map()</code>\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u8FD4\u56DE\u3011</li><li><code>for</code>\u3010\u904D\u5386\u5FAA\u73AF\u3011</li><li><code>for of</code>\u3010\u904D\u5386\u5FAA\u73AF\u3011</li><li><code>filter()</code>\u3010\u8FC7\u6EE4\u3011</li><li><code>every()</code>\u3010\u6240\u6709\u90FD\u6EE1\u8DB3\u624D true\u3011</li><li><code>some()</code>\u3010\u6709\u4E00\u4E2A\u6EE1\u8DB3\u5C31 true\u3011</li><li><code>reduce()</code> \u548C <code>reduceRight()</code>\u3010\u8FED\u4EE3\u6240\u6709\u9879\u3011</li></ul><h2 id="\u{1F7E8}-foreach-\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u65E0\u8FD4\u56DE\u3011" tabindex="-1">\u{1F7E8} forEach()\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u65E0\u8FD4\u56DE\u3011 <a class="header-anchor" href="#\u{1F7E8}-foreach-\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u65E0\u8FD4\u56DE\u3011" aria-hidden="true">#</a></h2><ol><li>\u6570\u7EC4\u5185\u5BB9</li><li>\u7D22\u5F15</li><li>\u6570\u7EC4\u672C\u8EAB</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">forEach</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">array</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">|</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">|</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">array</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">===</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#616E88;">// \u8F93\u51FA\u4E3A\uFF1A</span></span>
<span class="line"><span style="color:#616E88;">// 1|0|true</span></span>
<span class="line"><span style="color:#616E88;">// 2|1|true</span></span>
<span class="line"><span style="color:#616E88;">// 3|2|true</span></span>
<span class="line"><span style="color:#616E88;">// 4|3|true</span></span>
<span class="line"><span style="color:#616E88;">// 5|4|true</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-map-\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u8FD4\u56DE\u3011" tabindex="-1">\u{1F7E8} map()\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u8FD4\u56DE\u3011 <a class="header-anchor" href="#\u{1F7E8}-map-\u3010\u904D\u5386\u5FAA\u73AF\u3011\u3010\u8FD4\u56DE\u3011" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr2</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">map</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">arr2</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//[1, 4, 9, 16, 25]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-for\u3010\u904D\u5386\u5FAA\u73AF\u3011" tabindex="-1">\u{1F7E8} for\u3010\u904D\u5386\u5FAA\u73AF\u3011 <a class="header-anchor" href="#\u{1F7E8}-for\u3010\u904D\u5386\u5FAA\u73AF\u3011" aria-hidden="true">#</a></h2><p>for \u5FAA\u73AF\u548C forEach \u662F\u7B49\u4EF7\u7684\uFF0C\u90FD\u662F\u5FAA\u73AF\u6570\u7EC4</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-for-of\u3010\u904D\u5386\u5FAA\u73AF\u3011" tabindex="-1">\u{1F7E8} for of\u3010\u904D\u5386\u5FAA\u73AF\u3011 <a class="header-anchor" href="#\u{1F7E8}-for-of\u3010\u904D\u5386\u5FAA\u73AF\u3011" aria-hidden="true">#</a></h2><p>for of \u662F ES6 \u8BED\u6CD5\uFF0C\u652F\u6301 return,\u5E76\u4E14\u662F\u53EA\u80FD\u904D\u5386\u6570\u7EC4\uFF0C\u4E0D\u80FD\u904D\u5386\u5BF9\u8C61</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">of</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#616E88;">//1</span></span>
<span class="line"><span style="color:#616E88;">//2</span></span>
<span class="line"><span style="color:#616E88;">//3</span></span>
<span class="line"><span style="color:#616E88;">//4</span></span>
<span class="line"><span style="color:#616E88;">//5</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u8981\u904D\u5386\u5BF9\u8C61 \u53EF\u4EE5 \u{1F447}</p><h4 id="\u5BF9\u8C61-\u{1F447}" tabindex="-1">\u5BF9\u8C61 \u{1F447} <a class="header-anchor" href="#\u5BF9\u8C61-\u{1F447}" aria-hidden="true">#</a></h4><p>Object.keys \u5C06\u5BF9\u8C61\u7684 key \u4F5C\u4E3A\u65B0\u7684\u6570\u7EC4</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">obj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">school</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">age</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">8</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">of</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">Object</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">keys</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">obj</span><span style="color:#D8DEE9FF;">)) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">obj</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#616E88;">//name</span></span>
<span class="line"><span style="color:#616E88;">//8</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-filter-\u3010\u8FC7\u6EE4\u3011" tabindex="-1">\u{1F7E8} filter()\u3010\u8FC7\u6EE4\u3011 <a class="header-anchor" href="#\u{1F7E8}-filter-\u3010\u8FC7\u6EE4\u3011" aria-hidden="true">#</a></h2><ul><li>\u8FD4\u56DE\u7B26\u5408\u7684\u9879\uFF0C</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">6</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">7</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">8</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">9</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">10</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr2</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">filter</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">%</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">===</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">||</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&gt;=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">8</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">arr2</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//[1, 4, 7, 8, 9, 10]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-every-\u3010\u6240\u6709\u90FD\u6EE1\u8DB3\u624D-true\u3011" tabindex="-1">\u{1F7E8} every()\u3010\u6240\u6709\u90FD\u6EE1\u8DB3\u624D true\u3011 <a class="header-anchor" href="#\u{1F7E8}-every-\u3010\u6240\u6709\u90FD\u6EE1\u8DB3\u624D-true\u3011" aria-hidden="true">#</a></h2><ul><li>\u5224\u65AD\u6570\u7EC4\u4E2D\u6BCF\u4E00\u9879\u90FD\u662F\u5426\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u53EA\u6709\u6240\u6709\u9879\u90FD\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u624D\u4F1A\u8FD4\u56DE true\u3002</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr2</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">every</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">10</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">arr2</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//true</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr3</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">every</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">arr3</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// false</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-some-\u3010\u6709\u4E00\u4E2A\u6EE1\u8DB3\u5C31-true\u3011" tabindex="-1">\u{1F7E8} some()\u3010\u6709\u4E00\u4E2A\u6EE1\u8DB3\u5C31 true\u3011 <a class="header-anchor" href="#\u{1F7E8}-some-\u3010\u6709\u4E00\u4E2A\u6EE1\u8DB3\u5C31-true\u3011" aria-hidden="true">#</a></h2><ul><li>\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5B58\u5728\u6EE1\u8DB3\u6761\u4EF6\u7684\u9879\uFF0C\u53EA\u8981\u6709\u4E00\u9879\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u5C31\u4F1A\u8FD4\u56DE true\u3002</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr2</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">some</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">arr2</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//true</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr3</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">some</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">6</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">arr3</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// false</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-reduce-\u548C-reduceright-\u3010\u8FED\u4EE3\u6240\u6709\u9879\u3011" tabindex="-1">\u{1F7E8} reduce() \u548C reduceRight()\u3010\u8FED\u4EE3\u6240\u6709\u9879\u3011 <a class="header-anchor" href="#\u{1F7E8}-reduce-\u548C-reduceright-\u3010\u8FED\u4EE3\u6240\u6709\u9879\u3011" aria-hidden="true">#</a></h2><ul><li>\u8FED\u4EE3\u6570\u7EC4\u7684\u6240\u6709\u9879</li><li><code>reduce()</code> \u4ECE\u6570\u7EC4\u7684\u7B2C\u4E00\u9879\u5F00\u59CB\uFF0C\u9010\u4E2A\u904D\u5386\u5230\u6700\u540E\u3002</li><li><code>reduceRight()</code> \u4ECE\u6570\u7EC4\u7684\u6700\u540E\u4E00\u9879\u5F00\u59CB\uFF0C\u5411\u524D\u904D\u5386\u5230\u7B2C\u4E00\u9879\u3002</li><li>\u8FD9\u4E2A\u51FD\u6570\u8FD4\u56DE\u7684\u4EFB\u4F55\u503C\u90FD\u4F1A\u4F5C\u4E3A\u3010\u7B2C\u4E00\u4E2A\u53C2\u6570\u3011\u81EA\u52A8\u4F20\u7ED9\u4E0B\u4E00\u9879</li><li>\u56DB\u4E2A\u53C2\u6570\u5206\u522B\u4E3A\uFF1A\uFF08\u524D\u4E00\u4E2A\u8FD4\u56DE\u503C\uFF0C\u5F53\u524D\u503C\uFF0C\u7D22\u5F15\uFF0C\u6570\u7EC4\u5BF9\u8C61\uFF09</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">values</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">sum</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">values</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">reduceRight</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">prev</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">cur</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">array</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">prev</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">cur</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">},</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">10</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//\u{1F448} \u8FD9\u4E2A\u76F8\u5F53\u4E8E\u7ED9prev\u8BBE\u4E86\u4E00\u4E2A\u521D\u59CB\u503C10</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">sum</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//25</span></span>
<span class="line"><span style="color:#616E88;">//10 + 5 = 15</span></span>
<span class="line"><span style="color:#616E88;">//15 + 4 = 19</span></span>
<span class="line"><span style="color:#616E88;">//19 + 3 = 22</span></span>
<span class="line"><span style="color:#616E88;">//22 + 2 = 24</span></span>
<span class="line"><span style="color:#616E88;">//24 + 1 = 25</span></span>
<span class="line"></span></code></pre></div>`,29),e=[o];function E(r,c,t,D,F,y){return a(),n("div",null,e)}const A=s(p,[["render",E]]);export{C as __pageData,A as default};
