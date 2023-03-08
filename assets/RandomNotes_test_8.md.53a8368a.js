import{_ as s,o as n,c as a,a as l}from"./app.6e5d532d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u672C\u5730\u8FDC\u7A0B\u5408\u5E76","slug":"\u672C\u5730\u8FDC\u7A0B\u5408\u5E76","link":"#\u672C\u5730\u8FDC\u7A0B\u5408\u5E76","children":[]}],"relativePath":"RandomNotes/test/8.md","lastUpdated":1678255471000}'),p={name:"RandomNotes/test/8.md"},e=l(`<h2 id="\u672C\u5730\u8FDC\u7A0B\u5408\u5E76" tabindex="-1">\u672C\u5730\u8FDC\u7A0B\u5408\u5E76 <a class="header-anchor" href="#\u672C\u5730\u8FDC\u7A0B\u5408\u5E76" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">//\u67E5\u8BE2\u5F53\u524D\u8FDC\u7A0B\u7684\u7248\u672C</span></span>
<span class="line"><span style="color:#D8DEE9FF;">$ git remote -v</span></span>
<span class="line"><span style="color:#D8DEE9FF;">//\u83B7\u53D6\u6700\u65B0\u4EE3\u7801\u5230\u672C\u5730</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">\u672C\u5730\u5F53\u524D\u5206\u652F\u4E3A</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">branch</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;">\uFF0C\u83B7\u53D6\u7684\u8FDC\u7AEF\u7684\u5206\u652F\u4E3A</span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">origin/branch</span><span style="color:#ECEFF4;">])</span></span>
<span class="line"><span style="color:#D8DEE9FF;">$ git fetch origin master  </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">\u793A\u4F8B1\uFF1A\u83B7\u53D6\u8FDC\u7AEF\u7684origin/master\u5206\u652F</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">$ git fetch origin dev </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">\u793A\u4F8B2\uFF1A\u83B7\u53D6\u8FDC\u7AEF\u7684origin/dev\u5206\u652F</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">//\u67E5\u770B\u7248\u672C\u5DEE\u5F02\uFF0C\u53EF\u4EE5\u4E0D\u6267\u884C</span></span>
<span class="line"><span style="color:#D8DEE9FF;">$ git log -p master..origin/master </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">\u793A\u4F8B1\uFF1A\u67E5\u770B\u672C\u5730master\u4E0E\u8FDC\u7AEForigin/master\u7684\u7248\u672C\u5DEE\u5F02</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">$ git log -p dev..origin/dev   </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">\u793A\u4F8B2\uFF1A\u67E5\u770B\u672C\u5730dev\u4E0E\u8FDC\u7AEForigin/dev\u7684\u7248\u672C\u5DEE\u5F02</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">//\u5408\u5E76\u6700\u65B0\u4EE3\u7801\u5230\u672C\u5730\u5206\u652F</span></span>
<span class="line"><span style="color:#D8DEE9FF;">$ git merge origin/master  </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">\u793A\u4F8B1\uFF1A\u5408\u5E76\u8FDC\u7AEF\u5206\u652Forigin/master\u5230\u5F53\u524D\u5206\u652F</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">$ git merge origin/dev </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">\u793A\u4F8B2\uFF1A\u5408\u5E76\u8FDC\u7AEF\u5206\u652Forigin/dev\u5230\u5F53\u524D\u5206\u652F</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u5148\u628A\u672C\u5730\u7684git add </span><span style="color:#88C0D0;">.</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git commit -m </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">fix</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\u540E\u9762\u518D\u6267\u884C</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git fetch origin master</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git merge origin/master</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git add </span><span style="color:#88C0D0;">.</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git commit -m </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">msg</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">git pull</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">\u5F3A\u5236\u8986\u76D6</span></span>
<span class="line"><span style="color:#D8DEE9FF;">git fetch --all </span><span style="color:#81A1C1;">&amp;&amp;</span><span style="color:#D8DEE9FF;">  git reset --hard origin/master </span><span style="color:#81A1C1;">&amp;&amp;</span><span style="color:#D8DEE9FF;"> git pull</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,3),o=[e];function t(c,r,E,F,i,D){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{g as __pageData,d as default};
