import{_ as s,o as a,c as n,a as l}from"./app.5da19ece.js";const p="/assets/8bd7b265547579e122ecec58cfcf8b40be0433157ab69a063d3386ac24a847ee.8bd7b265.png",D=JSON.parse('{"title":"\u{1F7E9} Vue \u8FC7\u6E21 & \u52A8\u753B","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/Vue/Vue2_animation.md","lastUpdated":1673426730000}'),e={name:"FrontEnd/Vue/Vue2_animation.md"},o=l(`<h1 id="\u{1F7E9}-vue-\u8FC7\u6E21-\u52A8\u753B" tabindex="-1">\u{1F7E9} Vue \u8FC7\u6E21 &amp; \u52A8\u753B <a class="header-anchor" href="#\u{1F7E9}-vue-\u8FC7\u6E21-\u52A8\u753B" aria-hidden="true">#</a></h1><p>\u8FC7\u6E21\u52A8\u753B\u521D\u5B66\u8005\u4E5F\u53EF\u4EE5\u6682\u65F6\u4E0D\u5B66\uFF0C\u6BD5\u7ADF\u53EA\u662F\u4E00\u4E2A\u4F18\u5316\u5C55\u793A\u6548\u679C\u7684\uFF0C\u6CA1\u4ED6\u4E00\u6837\u53EF\u4EE5\u505A\u51FA\u7F51\u7AD9\u7F51\u9875~</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#81A1C1;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;transition</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">name</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">fade</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#81A1C1;">&lt;p</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">v-show</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9;">show</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;">hello !</span><span style="color:#81A1C1;">&lt;/p&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">&lt;/transition&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">fade-enter-active</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">fade-leave-active</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">transition</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">opacity </span><span style="color:#B48EAD;">3</span><span style="color:#81A1C1;">s;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">fade-enter</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">fade-leave-to</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">opacity</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/style&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u7406\u89E3\u4E3A\u5728\u3010p \u8FD9\u4E2A\u6807\u7B7E\u3011\u901A\u8FC7 <code>v-show</code> \u51FA\u73B0\u7684\u65F6\u5019\uFF0C\u5916\u5C42\u5305\u88F9\u7740<code>transition</code>!<br> \u8FD9\u4E2A<code>transition</code>\u901A\u8FC7\u5B83\u7684<code>name</code>\u5C5E\u6027\uFF0C\u8BA9\u5B83\u6709\u4E86\u52A8\u753B\u6548\u679C\uFF01</p><ul><li>v-enter\uFF1A\u8FDB\u5165\u9636\u6BB5\u7684\u5F00\u59CB</li><li>v-enter-active\uFF1A\u6574\u4E2A\u8FDB\u5165\u7684\u8FC7\u7A0B</li><li>v-enter-to: \u8FDB\u5165\u9636\u6BB5\u7684\u7ED3\u675F</li></ul><hr><ul><li>v-leave: \u79BB\u5F00\u9636\u6BB5\u7684\u5F00\u59CB</li><li>v-leave-active\uFF1A\u6574\u4E2A\u79BB\u5F00\u7684\u8FC7\u7A0B</li><li>v-leave-to: \u79BB\u5F00\u9636\u6BB5\u7684\u7ED3\u675F</li></ul><p>\u524D\u7F00\u8FD9\u4E2A<code>v</code>\u5C31\u662F<code>transition</code>\u7684<code>name</code>\u5C5E\u6027\u7684\u540D\u5B57\uFF01</p><p><img src="`+p+'" alt="\u56FE 15"></p>',9),t=[o];function c(r,i,E,F,y,d){return a(),n("div",null,t)}const _=s(e,[["render",c]]);export{D as __pageData,_ as default};
