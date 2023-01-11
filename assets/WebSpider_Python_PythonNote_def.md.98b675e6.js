import{_ as s,o as a,c as n,a as l}from"./app.5da19ece.js";const h=JSON.parse('{"title":"\u{1F40D} \u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F40D} Python\u5185\u7F6E\u51FD\u6570","slug":"\u{1F40D}-python\u5185\u7F6E\u51FD\u6570","link":"#\u{1F40D}-python\u5185\u7F6E\u51FD\u6570","children":[{"level":3,"title":"\u{1F40D} abs() \u6C42\u7EDD\u5BF9\u503C","slug":"\u{1F40D}-abs-\u6C42\u7EDD\u5BF9\u503C","link":"#\u{1F40D}-abs-\u6C42\u7EDD\u5BF9\u503C","children":[]},{"level":3,"title":"\u{1F40D} max() \u6C42\u6700\u5927\u503C","slug":"\u{1F40D}-max-\u6C42\u6700\u5927\u503C","link":"#\u{1F40D}-max-\u6C42\u6700\u5927\u503C","children":[]},{"level":3,"title":"\u{1F40D} \u68C0\u67E5\u7C7B\u578B - isinstance()","slug":"\u{1F40D}-\u68C0\u67E5\u7C7B\u578B-isinstance","link":"#\u{1F40D}-\u68C0\u67E5\u7C7B\u578B-isinstance","children":[]}]},{"level":2,"title":"\u{1F40D} \u5B9A\u4E49\u51FD\u6570 - def","slug":"\u{1F40D}-\u5B9A\u4E49\u51FD\u6570-def","link":"#\u{1F40D}-\u5B9A\u4E49\u51FD\u6570-def","children":[{"level":3,"title":"\u{1F40D} \u7528def \u6765\u5B9A\u4E49\u51FD\u6570","slug":"\u{1F40D}-\u7528def-\u6765\u5B9A\u4E49\u51FD\u6570","link":"#\u{1F40D}-\u7528def-\u6765\u5B9A\u4E49\u51FD\u6570","children":[]},{"level":3,"title":"\u{1F40D} \u8C03\u7528\u81EA\u5DF1\u5199\u7684\u51FD\u6570","slug":"\u{1F40D}-\u8C03\u7528\u81EA\u5DF1\u5199\u7684\u51FD\u6570","link":"#\u{1F40D}-\u8C03\u7528\u81EA\u5DF1\u5199\u7684\u51FD\u6570","children":[]},{"level":3,"title":"\u{1F40D} \u7A7A\u51FD\u6570 - pass","slug":"\u{1F40D}-\u7A7A\u51FD\u6570-pass","link":"#\u{1F40D}-\u7A7A\u51FD\u6570-pass","children":[]}]},{"level":2,"title":"\u{1F40D} \u9012\u5F52\u51FD\u6570","slug":"\u{1F40D}-\u9012\u5F52\u51FD\u6570","link":"#\u{1F40D}-\u9012\u5F52\u51FD\u6570","children":[]}],"relativePath":"WebSpider/Python/PythonNote_def.md","lastUpdated":1673426730000}'),p={name:"WebSpider/Python/PythonNote_def.md"},e=l(`<h1 id="\u{1F40D}-\u51FD\u6570" tabindex="-1">\u{1F40D} \u51FD\u6570 <a class="header-anchor" href="#\u{1F40D}-\u51FD\u6570" aria-hidden="true">#</a></h1><p>\u51FD\u6570\u5C31\u662F\u65B9\u6CD5\u3002\u5C31\u662F\u6211\u4EEC\u628A\u89E3\u51B3\u95EE\u9898\u7684\u4EE3\u7801\u5C01\u88C5\u8D77\u6765\uFF0C\u4EE5\u540E\u9047\u5230\u7C7B\u4F3C\u7684\u95EE\u9898\uFF0C\u518D\u62FF\u51FA\u6765\u7528\uFF0C\u800CPython\u5185\u7F6E\u4E86\u4E00\u4E9B\u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u5E2E\u6211\u4EEC\u63D0\u524D\u5199\u4E86\u4E00\u4E9B\u65B9\u6CD5\u3002</p><p>\u6BD4\u5982\u6211\u9700\u8981\u3010\u6C42\u7EDD\u5BF9\u503C\u3011 \u53EF\u4EE5\u76F4\u63A5\u7528Python\u5185\u7F6E\u51FD\u6570\u91CC\u7684\u3010abs()\u3011\u{1F447}</p><h2 id="\u{1F40D}-python\u5185\u7F6E\u51FD\u6570" tabindex="-1">\u{1F40D} Python\u5185\u7F6E\u51FD\u6570 <a class="header-anchor" href="#\u{1F40D}-python\u5185\u7F6E\u51FD\u6570" aria-hidden="true">#</a></h2><h3 id="\u{1F40D}-abs-\u6C42\u7EDD\u5BF9\u503C" tabindex="-1">\u{1F40D} abs() \u6C42\u7EDD\u5BF9\u503C <a class="header-anchor" href="#\u{1F40D}-abs-\u6C42\u7EDD\u5BF9\u503C" aria-hidden="true">#</a></h3><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#88C0D0;">abs</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">20</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#616E88;"># 20</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F40D}-max-\u6C42\u6700\u5927\u503C" tabindex="-1">\u{1F40D} max() \u6C42\u6700\u5927\u503C <a class="header-anchor" href="#\u{1F40D}-max-\u6C42\u6700\u5927\u503C" aria-hidden="true">#</a></h3><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#88C0D0;">max</span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#616E88;"># 3</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F40D}-\u68C0\u67E5\u7C7B\u578B-isinstance" tabindex="-1">\u{1F40D} \u68C0\u67E5\u7C7B\u578B - isinstance() <a class="header-anchor" href="#\u{1F40D}-\u68C0\u67E5\u7C7B\u578B-isinstance" aria-hidden="true">#</a></h3><p>\u68C0\u67E5x \u662F\u4E0D\u662Fint\u7C7B\u578B \u6216\u8005float \u5982\u679C\u4E0D\u662F \u629B\u51FAFalse</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#88C0D0;">isinstance</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">x</span><span style="color:#ECEFF4;">,(</span><span style="color:#88C0D0;">int</span><span style="color:#ECEFF4;">,</span><span style="color:#88C0D0;">float</span><span style="color:#ECEFF4;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F40D}-\u5B9A\u4E49\u51FD\u6570-def" tabindex="-1">\u{1F40D} \u5B9A\u4E49\u51FD\u6570 - def <a class="header-anchor" href="#\u{1F40D}-\u5B9A\u4E49\u51FD\u6570-def" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u5185\u7F6E\u7684\u51FD\u6570\u4E0D\u80FD\u6EE1\u8DB3\u6211\u4EEC\u4E86\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u81EA\u5DF1\u5199\u4E00\u4E9B\u89E3\u51B3\u95EE\u9898\u7684\u65B9\u6CD5\uFF01</p><h3 id="\u{1F40D}-\u7528def-\u6765\u5B9A\u4E49\u51FD\u6570" tabindex="-1">\u{1F40D} \u7528def \u6765\u5B9A\u4E49\u51FD\u6570 <a class="header-anchor" href="#\u{1F40D}-\u7528def-\u6765\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">my_abs</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> x </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> x</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">else</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;">x</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F40D}-\u8C03\u7528\u81EA\u5DF1\u5199\u7684\u51FD\u6570" tabindex="-1">\u{1F40D} \u8C03\u7528\u81EA\u5DF1\u5199\u7684\u51FD\u6570 <a class="header-anchor" href="#\u{1F40D}-\u8C03\u7528\u81EA\u5DF1\u5199\u7684\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#88C0D0;">my_abs</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">100</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#616E88;"># 100</span></span>
<span class="line"></span></code></pre></div><h3 id="\u{1F40D}-\u7A7A\u51FD\u6570-pass" tabindex="-1">\u{1F40D} \u7A7A\u51FD\u6570 - pass <a class="header-anchor" href="#\u{1F40D}-\u7A7A\u51FD\u6570-pass" aria-hidden="true">#</a></h3><p>\u5982\u679C\u60F3\u5B9A\u4E49\u4E00\u4E2A\u4EC0\u4E48\u4E8B\u4E5F\u4E0D\u505A\u7684\u7A7A\u51FD\u6570\uFF0C\u53EF\u4EE5\u7528pass\u8BED\u53E5\uFF1A</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">nop</span><span style="color:#ECEFF4;">():</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">pass</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">pass</p><p>pass\u8BED\u53E5\u4EC0\u4E48\u90FD\u4E0D\u505A\uFF0C\u90A3\u6709\u4EC0\u4E48\u7528\uFF1F\u5B9E\u9645\u4E0Apass\u53EF\u4EE5\u7528\u6765\u4F5C\u4E3A\u5360\u4F4D\u7B26<br> \u6BD4\u5982\u73B0\u5728\u8FD8\u6CA1\u60F3\u597D\u600E\u4E48\u5199\u51FD\u6570\u7684\u4EE3\u7801\uFF0C\u5C31\u53EF\u4EE5\u5148\u653E\u4E00\u4E2Apass\uFF0C\u8BA9\u4EE3\u7801\u80FD\u8FD0\u884C\u8D77\u6765\u3002</p></div><h2 id="\u{1F40D}-\u9012\u5F52\u51FD\u6570" tabindex="-1">\u{1F40D} \u9012\u5F52\u51FD\u6570 <a class="header-anchor" href="#\u{1F40D}-\u9012\u5F52\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u5728\u51FD\u6570\u5185\u90E8\uFF0C\u53EF\u4EE5\u8C03\u7528\u5176\u4ED6\u51FD\u6570\u3002\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u5728\u5185\u90E8\u8C03\u7528\u81EA\u8EAB\u672C\u8EAB\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5C31\u662F\u9012\u5F52\u51FD\u6570\u3002</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">xxg </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span></span>
<span class="line"><span style="color:#81A1C1;">def</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">recursion</span><span style="color:#ECEFF4;">():</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">global</span><span style="color:#D8DEE9FF;"> xxg</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> xxg </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">100</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        xxg </span><span style="color:#81A1C1;">+=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">xxg</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">recursion</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span></span>
<span class="line"><span style="color:#88C0D0;">recursion</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"></span></code></pre></div>`,24),o=[e];function t(c,r,i,y,d,E){return a(),n("div",null,o)}const D=s(p,[["render",t]]);export{h as __pageData,D as default};
