import{_ as s,o as e,c as a,a as l}from"./app.7a3ebbdd.js";const C=JSON.parse('{"title":"\u{1F7E9} \u7F13\u5B58 keep-alive","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F7E9} activated \u548C deactivated \u751F\u547D\u5468\u671F","slug":"\u{1F7E9}-activated-\u548C-deactivated-\u751F\u547D\u5468\u671F","link":"#\u{1F7E9}-activated-\u548C-deactivated-\u751F\u547D\u5468\u671F","children":[]},{"level":2,"title":"\u{1F7E9} include \u548C exclude","slug":"\u{1F7E9}-include-\u548C-exclude","link":"#\u{1F7E9}-include-\u548C-exclude","children":[]}],"relativePath":"FrontEnd/Vue/Vue2_keep-alive.md","lastUpdated":1685520771000}'),n={name:"FrontEnd/Vue/Vue2_keep-alive.md"},o=l(`<h1 id="\u{1F7E9}-\u7F13\u5B58-keep-alive" tabindex="-1">\u{1F7E9} \u7F13\u5B58 keep-alive <a class="header-anchor" href="#\u{1F7E9}-\u7F13\u5B58-keep-alive" aria-hidden="true">#</a></h1><p>\u4F7F\u7528\u4E86 <code>&lt;keep-alive&gt;</code> \u7684\u7EC4\u4EF6\u7684\u9875\u9762\u4F1A\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u4E0D\u4F1A\u88AB\u9500\u6BC1\uFF0C\u5305\u62EC\u5B83\u91CC\u9762\u7684\u5B9A\u65F6\u5668\u3002</p><p>\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u8FD9\u4E2A\u9875\u9762\u53EA\u662F\u88AB\u9690\u85CF\u8D77\u6765\u4E86\uFF0C\u4F46\u662F\u5B83\u8FD8\u5728\uFF01</p><ul><li>keep alive \u82F1\u6587\u7FFB\u8BD1\u8FC7\u6765\u5C31\u662F\u3010\u4FDD\u6301\u6D3B\u8DC3\u3011\u7684\u610F\u601D</li></ul><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F\uFF01</p><p><code>&lt;keep-alive&gt;</code> \u7F13\u5B58\u7684\u7EC4\u4EF6\u53EA\u6709\u5728\u521D\u6B21\u6E32\u67D3\u65F6\u624D\u4F1A\u88AB\u521B\u5EFA\u3002<br> \u6240\u4EE5\uFF0C\u6211\u4EEC\u5207\u6362\u7EC4\u4EF6\u65F6\uFF0C\u7EC4\u4EF6\u7684 <code>\u751F\u547D\u5468\u671F - beforeDestroy</code> \u662F\u4E0D\u4F1A\u89E6\u53D1\u3002<br> \u82E5\u8BE5\u7EC4\u4EF6\u662F\u7B2C\u4E00\u6B21\u6E32\u67D3\uFF0C\u4F1A\u89E6\u53D1 <code>\u751F\u547D\u5468\u671F - created</code><br> \u5F53\u518D\u6B21\u5207\u6362\u663E\u793A\u8BE5\u7EC4\u4EF6\u65F6\uFF0C<code>\u751F\u547D\u5468\u671F - created</code> \u4E0D\u4F1A\u518D\u6B21\u89E6\u53D1\u3002</p></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#81A1C1;">&lt;keep-alive&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/keep-alive&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F7E9}-activated-\u548C-deactivated-\u751F\u547D\u5468\u671F" tabindex="-1">\u{1F7E9} activated \u548C deactivated \u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u{1F7E9}-activated-\u548C-deactivated-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h2><p><code>activated</code> \u548C <code>deactivated</code> \u548C\u6211\u4EEC\u4E4B\u524D\u5B66\u4E60\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u4E00\u6837\uFF0C\u4E5F\u662F\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u3002 \u4E0D\u8FC7\uFF0C <code>activated</code> \u548C <code>deactivated</code> \u53EA\u5728 <code>&lt;keep-alive&gt;</code> \u5185\u7684\u6240\u6709\u5D4C\u5957\u7EC4\u4EF6\u4E2D\u89E6\u53D1\u3002</p><ul><li><code>activated</code>\uFF1A\u8FDB\u5165\u7EC4\u4EF6\u65F6\u89E6\u53D1\u3002</li><li><code>deactivated</code>\uFF1A\u9000\u51FA\u7EC4\u4EF6\u65F6\u89E6\u53D1\u3002</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#88C0D0;">activated</span><span style="color:#D8DEE9FF;">() </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">\u7EC4\u4EF6A \u88AB\u6DFB\u52A0</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#88C0D0;">deactivated</span><span style="color:#D8DEE9FF;">() </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">\u7EC4\u4EF6A \u88AB\u79FB\u9664</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4F60\u53EF\u4EE5\u7406\u89E3\u7531\u4E8E \u8FD9\u4E2A\u7EC4\u4EF6\u88AB<code>&lt;keep-alive&gt;</code>\u7F13\u5B58\u4E86 \u5BFC\u81F4\u5931\u53BB\u4E86 <code>\u751F\u547D\u5468\u671F - created\uFF08\u521B\u5EFA\uFF09</code> <code>\u751F\u547D\u5468\u671F - beforeDestroy\uFF08\u7EC4\u4EF6\u9500\u6BC1\uFF09</code>\uFF0C\u4E3A\u4E86\u8FD8\u80FD\u6709\u4ED6\u4EEC\u7684\u5468\u671F\u7279\u6027\u800C\u8865\u4E0A\u6765\u7684\u4E24\u4E2A</p><h2 id="\u{1F7E9}-include-\u548C-exclude" tabindex="-1">\u{1F7E9} include \u548C exclude <a class="header-anchor" href="#\u{1F7E9}-include-\u548C-exclude" aria-hidden="true">#</a></h2><p>include \u548C exclude \u662F keep-alive \u7684\u4E24\u4E2A\u5C5E\u6027\uFF0C\u5141\u8BB8\u7EC4\u4EF6\u6709\u6761\u4EF6\u5730\u7F13\u5B58\u3002</p><ul><li>include\uFF1A \u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u7528\u6765\u8868\u793A\u53EA\u6709\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u4F1A\u88AB\u7F13\u5B58\u3002</li><li>exclude\uFF1A \u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u7528\u6765\u8868\u793A\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u4E0D\u4F1A\u88AB\u7F13\u5B58\u3002</li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#81A1C1;">&lt;keep-alive</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">include</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ComponentA,ComponentB</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">component</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">:is</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ComponentA</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/</span><span style="color:#D8DEE9;">component</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">component</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">:is</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ComponentB</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/</span><span style="color:#D8DEE9;">component</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9;">component</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">:is</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">ComponentC</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/</span><span style="color:#D8DEE9;">component</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/keep-alive&gt;</span></span>
<span class="line"></span></code></pre></div>`,15),p=[o];function t(c,r,d,i,E,y){return e(),a("div",null,p)}const u=s(n,[["render",t]]);export{C as __pageData,u as default};