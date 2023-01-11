import{_ as s,o as a,c as n,a as e}from"./app.5da19ece.js";const y=JSON.parse('{"title":"\u5220 DELETE","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5220\u9664\u6240\u6709\u6570\u636E","slug":"\u5220\u9664\u6240\u6709\u6570\u636E","link":"#\u5220\u9664\u6240\u6709\u6570\u636E","children":[]}],"relativePath":"Database/SQL/SQL_delete.md","lastUpdated":1673426730000}'),l={name:"Database/SQL/SQL_delete.md"},p=e(`<h1 id="\u5220-delete" tabindex="-1">\u5220 DELETE <a class="header-anchor" href="#\u5220-delete" aria-hidden="true">#</a></h1><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F \u8BB0\u5F97\u5E26 WHERE</p><p>SQL DELETE \u8BED\u53E5\u4E2D\u7684 WHERE \u5B50\u53E5\uFF01<br> WHERE \u5B50\u53E5\u89C4\u5B9A\u54EA\u6761\u8BB0\u5F55\u6216\u8005\u54EA\u4E9B\u8BB0\u5F55\u9700\u8981\u5220\u9664\u3002</p><p>\u5982\u679C\u7701\u7565\u4E86 WHERE \u5B50\u53E5\uFF0C\u6240\u6709\u7684\u8BB0\u5F55\u90FD\u5C06\u88AB\u5220\u9664\uFF01</p></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">DELETE</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> \u8868\u540D</span></span>
<span class="line"><span style="color:#81A1C1;">WHERE</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">name=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">AND</span><span style="color:#D8DEE9FF;"> age</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">18</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5220\u9664\u6240\u6709\u6570\u636E" tabindex="-1">\u5220\u9664\u6240\u6709\u6570\u636E <a class="header-anchor" href="#\u5220\u9664\u6240\u6709\u6570\u636E" aria-hidden="true">#</a></h3><p>\u5728\u4E0D\u5220\u9664\u8868\u7684\u60C5\u51B5\u4E0B\uFF0C\u5220\u9664\u8868\u4E2D\u6240\u6709\u7684\u884C\u3002\u8FD9\u610F\u5473\u7740\u8868\u7ED3\u6784\u3001\u5C5E\u6027\u3001\u7D22\u5F15\u5C06\u4FDD\u6301\u4E0D\u53D8\uFF1A</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre><code><span class="line"><span style="color:#81A1C1;">DELETE</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> table_name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u6216</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">DELETE</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">FROM</span><span style="color:#D8DEE9FF;"> table_name;</span></span>
<span class="line"></span></code></pre></div><p><strong>\u5728\u5220\u9664\u8BB0\u5F55\u65F6\u8981\u683C\u5916\u5C0F\u5FC3\uFF01</strong>\u3010\u9664\u975E\u4F60\u6709\u5907\u4EFD...\u3011</p>`,7),o=[p];function t(c,r,E,d,i,D){return a(),n("div",null,o)}const _=s(l,[["render",t]]);export{y as __pageData,_ as default};
