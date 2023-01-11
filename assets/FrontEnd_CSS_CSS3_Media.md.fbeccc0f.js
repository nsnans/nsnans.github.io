import{_ as s,o as a,c as n,a as l}from"./app.5da19ece.js";const C=JSON.parse('{"title":"\u{1F7E5} \u5A92\u4F53\u7C7B\u578B - media","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u6839\u636E\u5A92\u4F53\u7C7B\u578B\u52A0\u8F7D\u4E0D\u540C\u7684\u6837\u5F0F","slug":"\u6839\u636E\u5A92\u4F53\u7C7B\u578B\u52A0\u8F7D\u4E0D\u540C\u7684\u6837\u5F0F","link":"#\u6839\u636E\u5A92\u4F53\u7C7B\u578B\u52A0\u8F7D\u4E0D\u540C\u7684\u6837\u5F0F","children":[]},{"level":3,"title":"link\u65B9\u6CD5","slug":"link\u65B9\u6CD5","link":"#link\u65B9\u6CD5","children":[]},{"level":3,"title":"@import\u65B9\u6CD5","slug":"import\u65B9\u6CD5","link":"#import\u65B9\u6CD5","children":[]},{"level":3,"title":"@media\u65B9\u6CD5","slug":"media\u65B9\u6CD5","link":"#media\u65B9\u6CD5","children":[]}],"relativePath":"FrontEnd/CSS/CSS3_Media.md","lastUpdated":1673426730000}'),e={name:"FrontEnd/CSS/CSS3_Media.md"},p=l(`<h1 id="\u{1F7E5}-\u5A92\u4F53\u7C7B\u578B-media" tabindex="-1">\u{1F7E5} \u5A92\u4F53\u7C7B\u578B - media <a class="header-anchor" href="#\u{1F7E5}-\u5A92\u4F53\u7C7B\u578B-media" aria-hidden="true">#</a></h1><h3 id="\u6839\u636E\u5A92\u4F53\u7C7B\u578B\u52A0\u8F7D\u4E0D\u540C\u7684\u6837\u5F0F" tabindex="-1">\u6839\u636E\u5A92\u4F53\u7C7B\u578B\u52A0\u8F7D\u4E0D\u540C\u7684\u6837\u5F0F <a class="header-anchor" href="#\u6839\u636E\u5A92\u4F53\u7C7B\u578B\u52A0\u8F7D\u4E0D\u540C\u7684\u6837\u5F0F" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">All       -     </span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">\u6240\u6709</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Screen    -     </span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">\u7535\u8111\u663E\u793A\u5668</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Print     -     </span><span style="color:#ECEFF4;">[</span><span style="color:#8FBCBB;">\u6253\u5370\u7528\u7EB8\u6216\u6253\u5370\u9884\u89C8\u89C6\u56FE</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="link\u65B9\u6CD5" tabindex="-1">link\u65B9\u6CD5 <a class="header-anchor" href="#link\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">&lt;</span><span style="color:#81A1C1;">link</span><span style="color:#D8DEE9FF;"> media=&quot;print&quot;/</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="import\u65B9\u6CD5" tabindex="-1">@import\u65B9\u6CD5 <a class="header-anchor" href="#import\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#81A1C1;">@importurl</span><span style="color:#D8DEE9FF;">(print.css) print</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">@importurl</span><span style="color:#D8DEE9FF;">(xxg.css)  screen</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="media\u65B9\u6CD5" tabindex="-1">@media\u65B9\u6CD5 <a class="header-anchor" href="#media\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#D08770;">@media</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">screen</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  \u9009\u62E9\u5668</span><span style="color:#ECEFF4;">{</span><span style="color:#616E88;">/*\u6837\u5F0F\u4EE3\u7801*/</span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D08770;">@media</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">screen</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">and</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">max-width</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">600</span><span style="color:#81A1C1;">px</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div>`,9),o=[p];function t(c,r,i,d,E,F){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{C as __pageData,h as default};
