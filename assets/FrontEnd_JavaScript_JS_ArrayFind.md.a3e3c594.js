import{_ as s,o as n,c as a,a as l}from"./app.065fef31.js";const C=JSON.parse('{"title":"\u{1F7E8} JS \u6570\u7EC4\u67E5\u627E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F7E8} includes()","slug":"\u{1F7E8}-includes","link":"#\u{1F7E8}-includes","children":[{"level":3,"title":"\u{1F330} \u4E3E\u4E2A\u6817\u5B50\u{1F447}","slug":"\u{1F330}-\u4E3E\u4E2A\u6817\u5B50\u{1F447}","link":"#\u{1F330}-\u4E3E\u4E2A\u6817\u5B50\u{1F447}","children":[]}]},{"level":2,"title":"\u{1F7E8} find()","slug":"\u{1F7E8}-find","link":"#\u{1F7E8}-find","children":[]},{"level":2,"title":"\u{1F7E8} findIndex()","slug":"\u{1F7E8}-findindex","link":"#\u{1F7E8}-findindex","children":[]},{"level":2,"title":"\u{1F7E8} indexOf()","slug":"\u{1F7E8}-indexof","link":"#\u{1F7E8}-indexof","children":[]},{"level":2,"title":"\u{1F7E8} lastIndexOf()","slug":"\u{1F7E8}-lastindexof","link":"#\u{1F7E8}-lastindexof","children":[]}],"relativePath":"FrontEnd/JavaScript/JS_ArrayFind.md","lastUpdated":1673571829000}'),p={name:"FrontEnd/JavaScript/JS_ArrayFind.md"},o=l(`<h1 id="\u{1F7E8}-js-\u6570\u7EC4\u67E5\u627E" tabindex="-1">\u{1F7E8} JS \u6570\u7EC4\u67E5\u627E <a class="header-anchor" href="#\u{1F7E8}-js-\u6570\u7EC4\u67E5\u627E" aria-hidden="true">#</a></h1><ul><li><code>includes()</code> \u3010\u5224\u65AD\uFF08\u5B57\u7B26 / \u6570\u7EC4\uFF09\u91CC\u6709\u6CA1\u6709\u8FD9\u4E2A\u6570\u3011</li><li><code>find()</code> \u3010\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684key\u3011</li><li><code>findIndex()</code> \u3010\u4ECE0\u5F00\u59CB\u627E\u3011\u3010\u8FD4\u56DEindex\u7D22\u5F15\u3011\u3010\u9488\u5BF9\u5BF9\u8C61\u3011</li><li><code>indexOf()</code> \u3010\u4ECE0\u5F00\u59CB\u627E\u3011\u3010\u8FD4\u56DEindex\u7D22\u5F15\u3011\u3010\u9488\u5BF9\u666E\u901A\u6570\u7EC4\u3011</li><li><code>lastIndexOf()</code> \u3010\u4ECE\u540E\u5F80\u524D\u627E\u3011\u3010\u8FD4\u56DEindex\u7D22\u5F15\u3011\u3010\u9488\u5BF9\u666E\u901A\u6570\u7EC4\u3011</li></ul><h2 id="\u{1F7E8}-includes" tabindex="-1">\u{1F7E8} includes() <a class="header-anchor" href="#\u{1F7E8}-includes" aria-hidden="true">#</a></h2><p>\u5224\u65AD\uFF08\u5B57\u7B26 / \u6570\u7EC4\uFF09\u91CC\u6709\u6CA1\u6709\u8FD9\u4E2A\u6570</p><ol><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u8981\u627E\u7684</li><li>\u7B2C\u4E8C\u4E2A\u662F\u4ECE\u54EA\u4E2A\u7D22\u5F15\u5F00\u59CB\u627E\uFF0C\u9ED8\u8BA4\u4ECE0\u5F00\u59CB\u627E</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#D8DEE9;">data</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">includes</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">\u627E\u7684\u53C2\u6570</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">\u53EF\u9009</span><span style="color:#D8DEE9FF;">\u3002</span><span style="color:#D8DEE9;">\u4ECE\u54EA\u4E2A\u7D22\u5F15\u4F4D\u7F6E\u5F00\u59CB\u641C\u5BFB</span><span style="color:#D8DEE9FF;">\uFF0C</span><span style="color:#D8DEE9;">\u9ED8\u8BA4\u503C\u4E3A0</span><span style="color:#D8DEE9FF;">])</span></span>
<span class="line"><span style="color:#616E88;">// \u8FD4\u56DE\u5E03\u5C14\u503C true/false</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F330}-\u4E3E\u4E2A\u6817\u5B50\u{1F447}" tabindex="-1">\u{1F330} \u4E3E\u4E2A\u6817\u5B50\u{1F447} <a class="header-anchor" href="#\u{1F330}-\u4E3E\u4E2A\u6817\u5B50\u{1F447}" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">3</span><span style="color:#D8DEE9FF;">]</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">includes</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#616E88;">//true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxgg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">includes</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">) </span><span style="color:#616E88;">//\u4ECE\u7B2C\u4E00\u4F4D\u5F80\u540E\u6570\uFF01\u6570\u7EC4\u7684\u4ECE0\u5F00\u59CB\u7684</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">xxgg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#616E88;">//false</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">str</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">\u8C22\u590F\u6208\u662F\u4E2A\u5E05\u54E5\uFF01</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxgg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">str</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">includes</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">\u662F</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">xxgg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#616E88;">//true</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-find" tabindex="-1">\u{1F7E8} find() <a class="header-anchor" href="#\u{1F7E8}-find" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u6570\u636E</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">20</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">30</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">40</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">50</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">70</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">80</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">90</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">find</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">40</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//50</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-findindex" tabindex="-1">\u{1F7E8} findIndex() <a class="header-anchor" href="#\u{1F7E8}-findindex" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u7D22\u5F15(\u4ECE0\u5F00\u59CB), \u4E0D\u6EE1\u8DB3\u8FD4\u56DE-1</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">20</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">30</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">40</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">50</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">70</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">80</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">90</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">findIndex</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">40</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//4</span></span>
<span class="line"></span></code></pre></div><ul><li><code>findIndex</code> \uFF1A\u6BD4\u8F83\u51FD\u6570\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u591A\u7528\u4E8E\u975E\u57FA\u672C\u7C7B\u578B(\u4F8B\u5982\u5BF9\u8C61)\u7684\u6570\u7EC4\u7D22\u5F15\u67E5\u627E\uFF0C\u6216\u67E5\u627E\u6761\u4EF6\u5F88\u590D\u6742</li><li><code>indexOf</code> \uFF1A\u67E5\u627E\u503C\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u91C7\u7528 === \u6BD4\u8F83\uFF0C\u66F4\u591A\u7684\u662F\u7528\u4E8E\u67E5\u627E\u57FA\u672C\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5219\u662F\u5224\u65AD\u662F\u5426\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528</li></ul><h2 id="\u{1F7E8}-indexof" tabindex="-1">\u{1F7E8} indexOf() <a class="header-anchor" href="#\u{1F7E8}-indexof" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u7D22\u5F15(\u4ECE0\u5F00\u59CB), \u4E0D\u6EE1\u8DB3\u8FD4\u56DE-1</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#616E88;">// var num = [10, 20, 30, 40, 50, 60, 70, 80, 90];</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">20</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">30</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">40</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">50</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">70</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">80</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">90</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">indexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxgg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">indexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">10</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//\u4ECE\u7D22\u5F1510\u7684\u4F4D\u7F6E\u5F00\u59CB\u5411\u540E\u67E5\u627E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">xxg = </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//3</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">xxgg = </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxgg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//-1</span></span>
<span class="line"></span></code></pre></div><ul><li><code>indexOf</code> \u66F4\u591A\u7684\u662F\u7528\u4E8E\u67E5\u627E\u57FA\u672C\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5219\u662F\u5224\u65AD\u662F\u5426\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">{</span><span style="color:#88C0D0;">a</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">},</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#88C0D0;">b</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">sisters</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">indexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span><span style="color:#88C0D0;">b</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">// -1 \u3010\u627E\u4E0D\u5230\u8FD9\u4E2A\u5BF9\u8C61\u3011</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">an</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#88C0D0;">b</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#ECEFF4;">{</span><span style="color:#88C0D0;">a</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">},</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">an</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">sisters</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">indexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">an</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">// 1 \u3010\u5BF9\u8C61\u7684\u5F15\u7528\u662F\u53EF\u4EE5\u5339\u914D\u7684\uFF01\u3011</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E8}-lastindexof" tabindex="-1">\u{1F7E8} lastIndexOf() <a class="header-anchor" href="#\u{1F7E8}-lastindexof" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6700\u540E\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684\u7D22\u5F15(\u4ECE0\u5F00\u59CB), \u4E0D\u6EE1\u8DB3\u8FD4\u56DE-1</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">20</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">30</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">40</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">50</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">60</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">70</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">80</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">90</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">lastIndexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxgg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">lastIndexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">9</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//\u4ECE\u7D22\u5F151\u7684\u4F4D\u7F6E\u5F00\u59CB\u5411\u524D\u67E5\u627E</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">xxggg</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">lastIndexOf</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">40</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//\u4ECE\u7D22\u5F151\u7684\u4F4D\u7F6E\u5F00\u59CB\u5411\u524D\u67E5\u627E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">xxg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//3</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">xxgg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//3</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">xxggg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">//-1 \u4ECE1\u5F80\u524D\u627E\u662F\u627E\u4E0D\u5230\u7684\u4E86\u54E6~</span></span>
<span class="line"></span></code></pre></div>`,24),e=[o];function E(c,t,r,D,F,y){return n(),a("div",null,e)}const d=s(p,[["render",E]]);export{C as __pageData,d as default};