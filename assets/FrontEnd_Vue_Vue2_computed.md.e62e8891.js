import{_ as s,o as a,c as n,a as l}from"./app.5da19ece.js";const i=JSON.parse('{"title":"\u{1F7E9} \u8BA1\u7B97 computed","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u{1F330} \u4E3E\u4E2A\u4F8B\u5B50","slug":"\u{1F330}-\u4E3E\u4E2A\u4F8B\u5B50","link":"#\u{1F330}-\u4E3E\u4E2A\u4F8B\u5B50","children":[]},{"level":2,"title":"\u5E95\u5C42\u539F\u7406\u{1F447}","slug":"\u5E95\u5C42\u539F\u7406\u{1F447}","link":"#\u5E95\u5C42\u539F\u7406\u{1F447}","children":[]}],"relativePath":"FrontEnd/Vue/Vue2_computed.md","lastUpdated":1673426730000}'),o={name:"FrontEnd/Vue/Vue2_computed.md"},p=l(`<h1 id="\u{1F7E9}-\u8BA1\u7B97-computed" tabindex="-1">\u{1F7E9} \u8BA1\u7B97 computed <a class="header-anchor" href="#\u{1F7E9}-\u8BA1\u7B97-computed" aria-hidden="true">#</a></h1><p>\u8BA1\u7B97\u5C5E\u6027 <code>computed</code> \u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF01\u4ED6\u662F\u4E00\u4E2A\u4F1A\u81EA\u52A8\u53BB\u89E6\u53D1\u7684\u51FD\u6570\uFF01\uFF01<br> \u5E73\u65F6\u6211\u4EEC\u5199\u7684\u90A3\u4E9B\u65B9\u6CD5\u90FD\u5728 <code>methods</code> \u91CC \u9700\u8981\u6211\u4EEC\u8BBE\u7F6E\u4E00\u4E2A\u3010button\u6309\u952E\u3011\u53BB\u89E6\u53D1\uFF01<br> \u800C\u8FD9\u4E2A\u51FD\u6570\u4E0D\u662F\u7528\u666E\u901A\u7684\u6309\u952E\u53BB\u89E6\u53D1\u7684\uFF01\u89E6\u53D1\u5B83\u7684\u6761\u4EF6\u662F\u5B83\u8981\u8BA1\u7B97\u7684\u6570 \u53D8\u4E86\uFF01</p><p>\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\uFF01</p><h3 id="\u{1F330}-\u4E3E\u4E2A\u4F8B\u5B50" tabindex="-1">\u{1F330} \u4E3E\u4E2A\u4F8B\u5B50 <a class="header-anchor" href="#\u{1F330}-\u4E3E\u4E2A\u4F8B\u5B50" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#88C0D0;">data</span><span style="color:#D8DEE9FF;">()</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;">: </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">firstName</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">\u8C22</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">lastName</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">\u590F\u6208</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">computed</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#88C0D0;">fullName</span><span style="color:#D8DEE9FF;">() </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">firstName</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">lastName</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><ol><li>\u8BBE\u7F6E <code>computed</code> \u8DDF\u8BBE\u7F6E <code>methods</code> \u4E00\u6837\uFF01 \u5B83\u91CC\u9762\u4E5F\u662F\u65B9\u6CD5\uFF01</li><li>\u8FD9\u4E2A <code>fullName</code> \u65B9\u6CD5\u628A <code>\u59D3</code> \u548C <code>\u540D</code> \u4E5F\u5C31\u662F <code>firstName</code> <code>lastName</code> \u7EC4\u5408\u5728\u4E86\u4E00\u8D77\uFF01</li><li>\u8FD9\u65F6\u5019\uFF01\u6211\u4EEC\u5728\u9700\u8981\u7684\u4F4D\u7F6E\u4E0A\u8C03\u7528 <code>fullName</code> \u5C31\u53EF\u4EE5\u4E86\uFF01</li><li>\u800C\u5B83\u7684\u7279\u6027\u5C31\u5728\u4E8E\uFF01\u5F53 <code>firstName</code> \u6216 <code>lastName</code> \u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u5B83\u4F1A\u91CD\u65B0\u8BA1\u7B97 <code>fullName</code></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>\u901A\u5E38\u6211\u4EEC\u628A\u8FD9\u79CD\u4F1A\u56E0\u4E3A\u67D0\u4E9B\u4E8B\u60C5\u800C\u81EA\u52A8\u89E6\u53D1\u7684\u51FD\u6570\u53EB\u4F5C\uFF1A\u3010\u94A9\u5B50\u51FD\u6570\u3011\u3010\u56DE\u8C03\u51FD\u6570\u3011</li><li>\u7C7B\u4F3C\u7684\u8FD8\u6709\u3010\u76D1\u542Cwatch\u3011\u3010\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u3011\uFF0C\u90FD\u4F1A\u5728\u7279\u5B9A\u7684\u6761\u4EF6\u4E0B\u89E6\u53D1\uFF01</li></ul></div><h2 id="\u5E95\u5C42\u539F\u7406\u{1F447}" tabindex="-1">\u5E95\u5C42\u539F\u7406\u{1F447} <a class="header-anchor" href="#\u5E95\u5C42\u539F\u7406\u{1F447}" aria-hidden="true">#</a></h2><blockquote><p>\u521D\u5B66\u8005\u53EF\u4EE5\u6682\u65F6\u4E0D\u4E86\u89E3</p></blockquote><p>Vue2 \u91CC\u7684 <code>computed</code> \u7684\u5E95\u5C42\u539F\u7406\u662F ES6\u91CC\u7684 <code>Objcet.defineProperty</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">computed</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  fullName</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">// getter</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    get</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">firstName</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">lastName</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">// setter</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    set</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">newValue</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">names</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">newValue</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">split</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">firstName</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">names</span><span style="color:#D8DEE9FF;">[</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">lastName</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">names</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">names</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length </span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">]</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><ul><li><code>setter</code>: \u6BCF\u6B21\u4FEE\u6539 <code>fullName</code> \u65F6\u5C06\u59D3\u8D4B\u503C\u7ED9 <code>firstName</code>\uFF0C\u5C06\u540D\u8D4B\u503C\u7ED9 <code>lastName</code>\u3002</li><li><code>getter</code>: \u6BCF\u6B21\u83B7\u53D6 <code>fullName</code> \u65F6\u5C06 <code>firstName</code> \u548C <code>lastName</code> \u62FC\u63A5\u540E\u8FD4\u56DE\u3002</li></ul><hr><ol><li>\u8981\u7528\u7684\u5C5E\u6027\u4E0D\u5B58\u5728\uFF0C\u6BD4\u5982 <code>fullName</code> \uFF0C\u8981\u901A\u8FC7\u5DF2\u6709\u5C5E\u6027\u8BA1\u7B97\u5F97\u6765</li><li>\u5E95\u5C42\u539F\u7406\u501F\u52A9\u4E86 <code>Objcet.defineproperty</code> \u65B9\u6CD5\u63D0\u4F9B\u7684 <code>getter</code> \u548C <code>setter</code></li><li><code>get</code> \u51FD\u6570\u4EC0\u4E48\u65F6\u5019\u6267\u884C\uFF1F <ol><li>\u521D\u6B21\u8BFB\u53D6\u65F6\u4F1A\u6267\u884C\u4E00\u6B21</li><li>\u4F46\u4F9D\u8D56\u7684\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\u4F1A\u88AB\u518D\u6B21\u8C03\u7528</li></ol></li><li>\u4F18\u52BF\uFF1A\u4E0E <code>methods</code> \u76F8\u6BD4\uFF0C\u5185\u90E8\u6709\u7F13\u5B58\u673A\u5236\uFF08\u590D\u7528\uFF09\uFF0C\u6548\u679C\u66F4\u9AD8</li><li>\u5907\u6CE8\uFF1A</li><li>\u8BA1\u7B97\u5C5E\u6027\u6700\u7EC8\u4F1A\u51FA\u73B0\u5728 <code>vm</code> \u4E0A\uFF0C\u76F4\u63A5\u8BFB\u53D6\u4F7F\u7528\u5373\u53EF</li><li>\u5982\u679C\u8BA1\u7B97\u5C5E\u6027\u8981\u88AB\u4FEE\u6539\uFF0C\u5FC5\u987B\u5199 <code>set</code> \u51FD\u6570\u53BB\u54CD\u5E94\u4FEE\u6539\u4E14 <code>set</code> \u4E2D\u8981\u5F15\u8D77\u8BA1\u7B97\u65F6\u4F9D\u8D56\u7684\u6570\u636E\u53D1\u751F\uFF01</li></ol>`,14),e=[p];function c(t,E,r,F,y,D){return a(),n("div",null,e)}const C=s(o,[["render",c]]);export{i as __pageData,C as default};
