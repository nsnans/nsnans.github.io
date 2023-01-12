import{_ as s,o as a,c as e,a as n}from"./app.5da19ece.js";const l="/assets/ce3e8d16fda4aaf2d239a250481f8366e2a4588995998673b42ae811e995dd7f.ce3e8d16.png",c="/assets/46f6d83ca7998df6b6062422af1059eee0547e9be242c92b8863f8223f836a34.46f6d83c.png",p="/assets/7817b7dfb3da26071c267e6b34ebb33bd3df703151d7c46316b117f8d915d1b2.7817b7df.png",_=JSON.parse('{"title":"\u{1F512} \u5BC6\u7801\u52A0\u5BC6 bcryptjs","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u{1F512} bcryptjs\u5305\u8FDB\u884C\u52A0\u5BC6","slug":"\u{1F512}-bcryptjs\u5305\u8FDB\u884C\u52A0\u5BC6","link":"#\u{1F512}-bcryptjs\u5305\u8FDB\u884C\u52A0\u5BC6","children":[]},{"level":3,"title":"\u{1F512} \u5B89\u88C5","slug":"\u{1F512}-\u5B89\u88C5","link":"#\u{1F512}-\u5B89\u88C5","children":[]},{"level":3,"title":"\u{1F512} \u5F15\u5165","slug":"\u{1F512}-\u5F15\u5165","link":"#\u{1F512}-\u5F15\u5165","children":[]},{"level":3,"title":"\u{1F512} \u52A0\u5BC6 bcrypt.hashSync()","slug":"\u{1F512}-\u52A0\u5BC6-bcrypt-hashsync","link":"#\u{1F512}-\u52A0\u5BC6-bcrypt-hashsync","children":[]},{"level":3,"title":"\u{1F512} \u89E3\u5BC6 bcrypt.compareSync()","slug":"\u{1F512}-\u89E3\u5BC6-bcrypt-comparesync","link":"#\u{1F512}-\u89E3\u5BC6-bcrypt-comparesync","children":[]}],"relativePath":"BackEnd/Express/Express_bcryptjs.md","lastUpdated":1673426730000}'),t={name:"BackEnd/Express/Express_bcryptjs.md"},o=n('<h1 id="\u{1F512}-\u5BC6\u7801\u52A0\u5BC6-bcryptjs" tabindex="-1">\u{1F512} \u5BC6\u7801\u52A0\u5BC6 bcryptjs <a class="header-anchor" href="#\u{1F512}-\u5BC6\u7801\u52A0\u5BC6-bcryptjs" aria-hidden="true">#</a></h1><h3 id="\u{1F512}-bcryptjs\u5305\u8FDB\u884C\u52A0\u5BC6" tabindex="-1">\u{1F512} bcryptjs\u5305\u8FDB\u884C\u52A0\u5BC6 <a class="header-anchor" href="#\u{1F512}-bcryptjs\u5305\u8FDB\u884C\u52A0\u5BC6" aria-hidden="true">#</a></h3><p><img src="'+l+`" alt="\u56FE 12"></p><h3 id="\u{1F512}-\u5B89\u88C5" tabindex="-1">\u{1F512} \u5B89\u88C5 <a class="header-anchor" href="#\u{1F512}-\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm i bcryptjs</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F512}-\u5F15\u5165" tabindex="-1">\u{1F512} \u5F15\u5165 <a class="header-anchor" href="#\u{1F512}-\u5F15\u5165" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">bcrypt</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">require</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">bcryptjs</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F512}-\u52A0\u5BC6-bcrypt-hashsync" tabindex="-1">\u{1F512} \u52A0\u5BC6 bcrypt.hashSync() <a class="header-anchor" href="#\u{1F512}-\u52A0\u5BC6-bcrypt-hashsync" aria-hidden="true">#</a></h3><p><img src="`+c+`" alt="\u56FE 13"></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">password</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">bcrypt</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">hashSync</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">req</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">body</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">password</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">10</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F512}-\u89E3\u5BC6-bcrypt-comparesync" tabindex="-1">\u{1F512} \u89E3\u5BC6 bcrypt.compareSync() <a class="header-anchor" href="#\u{1F512}-\u89E3\u5BC6-bcrypt-comparesync" aria-hidden="true">#</a></h3><p><img src="`+p+`" alt="\u56FE 14"></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D8DEE9;">bcrypt</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">compareSync</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">\u91CD\u6E29\u4E00\u4E0B\u4E0A\u4E00\u7AE0\u6700\u540E\u8BF4\u7684\u8FC7\u7A0B\u{1F447}</p><ol><li>\u3010\u7528\u6237\u6CE8\u518C\u3011\uFF1A\u524D\u7AEF\u9A8C\u8BC1\u8D26\u53F7\u548C\u5BC6\u7801\u662F\u5426\u5408\u89C4</li><li>\u540E\u7AEF\u63A5\u6536\u5230\u540E\u4E5F\u9A8C\u8BC1\u4E00\u6B21\uFF0C\u7136\u540E\u628A\u3010\u7528\u6237\u540D\u3011\u5B58\u5165\u6570\u636E\u5E93</li><li>\u3010\u5BC6\u7801\u3011\u901A\u8FC7\u3010\u{1F512}bcryptjs\u52A0\u5BC6\u3011\u540E\u4E5F\u5B58\u5165\u6570\u636E\u5E93</li><li>\u628A\u3010\u968F\u673A\u76D0\u3011\u4E5F\u5B58\u5165\u6570\u636E\u5E93\uFF0C\u5F53\u7136\uFF0C\u6BD4\u8F83\u61D2\u4E5F\u53EF\u4EE5\u7528\u3010\u56FA\u5B9A\u76D0\u3011</li><li>\u7136\u540E\u8FD9\u76F8\u5F53\u4E8E\u3010\u6CE8\u518C\u6210\u529F\u3011\u3002</li><li>\u5728\u3010\u6CE8\u518C\u6210\u529F\u3011\u548C\u3010\u767B\u5F55\u6210\u529F\u3011\u540E\u90FD\u9700\u8981\u7ED9\u7528\u6237\u751F\u6210\u4E00\u4E2A\u3010Token\u3011</li><li>\u3010\u767B\u5F55\u3011\u7684\u8BDD\uFF0C\u7528\u6237\u63D0\u4F9B\u7528\u6237\u540D\u548C\u5BC6\u7801</li><li>\u5148\u53BB\u6570\u636E\u5E93\u67E5\u770B\u662F\u5426\u6709\u8FD9\u4E2A\u3010\u7528\u6237\u540D\u3011\uFF0C\u5982\u679C\u6CA1\u6709\u5C31\u544A\u77E5\u3010\u5BC6\u7801\u9519\u8BEF\u3011\u6216\u3010\u6B64\u7528\u6237\u540D\u4E0D\u5B58\u5728\u3011</li><li>\u5982\u679C\u6709\u6B64\u7528\u6237\u5C31\u628A\u5B83\u7684\u3010\u52A0\u5BC6\u8FC7\u7684\u5BC6\u7801\u3011\u62FF\u51FA\u6765\u3002</li><li>\u5229\u7528<code>bcrypt.compareSync(\u7528\u6237\u767B\u5F55\u65F6\u4F20\u6765\u7684\u5BC6\u7801,\u6570\u636E\u5E93\u91CC\u52A0\u5BC6\u7684\u5BC6\u7801)</code>\u91CC\u7684\u65B9\u6CD5\u8FDB\u884C\u6BD4\u5BF9\u3002\u5982\u679C\u5BC6\u7801\u6BD4\u5BF9\u6B63\u786E\uFF0C\u5C31\u4F1A\u8FD4\u56DE<code>True</code></li><li>\u8FD9\u65F6\u5019\u5C31\u7B97\u767B\u5F55\u6210\u529F\uFF0C\u53EF\u4EE5\u7ED9\u7528\u6237\u8FD4\u56DE\u4E00\u4E2A<code>Token</code>\u4EE5\u53CA\u76F8\u5173\u7684\u7528\u6237\u4FE1\u606F\u3002</li><li>\u8FD9\u4E2A\u3010Token\u3011\u662F\u4F1A\u4FDD\u5B58\u5728\u7528\u6237\u7684\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\u7684\uFF0C\u5982\u679C\u3010\u8FC7\u671F\u3011\u4E86\u5C31\u4F1A\u5931\u6548\u3002\u6240\u4EE5\u8981\u8BBE\u7F6E\u597D\u8FC7\u671F\u7684\u3010\u91CD\u65B0\u767B\u5F55\u3011</li></ol></div>`,14),r=[o];function i(d,y,E,b,h,D){return a(),e("div",null,r)}const u=s(t,[["render",i]]);export{_ as __pageData,u as default};