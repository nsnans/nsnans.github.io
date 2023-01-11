import{_ as n,o as a,c as l,a as p}from"./app.5da19ece.js";const s="/assets/3.d3bec9d6.gif",o="/assets/2.6ac91272.gif",e="/assets/1.6be18042.gif",A=JSON.parse('{"title":"\u{1F90F} H5\u3010\u62D6\u62FD\u3011\u5B9E\u73B0\u5217\u8868\u6392\u5E8F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F7E5} \u524D\u8A00","slug":"\u{1F7E5}-\u524D\u8A00","link":"#\u{1F7E5}-\u524D\u8A00","children":[]},{"level":2,"title":"\u{1F7E7} Drag \u548C Drop","slug":"\u{1F7E7}-drag-\u548C-drop","link":"#\u{1F7E7}-drag-\u548C-drop","children":[]},{"level":2,"title":"\u{1F7E8} \u3010\u6D4B\u8BD5\u4E00\u4E0B\u3011\u5217\u8868\u62D6\u52A8\uFF08\u5728Vue3)","slug":"\u{1F7E8}-\u3010\u6D4B\u8BD5\u4E00\u4E0B\u3011\u5217\u8868\u62D6\u52A8\uFF08\u5728vue3","link":"#\u{1F7E8}-\u3010\u6D4B\u8BD5\u4E00\u4E0B\u3011\u5217\u8868\u62D6\u52A8\uFF08\u5728vue3","children":[]},{"level":2,"title":"\u{1F7E9} \u8FD0\u7528\u5728\u6211\u524D\u8A00\u8BF4\u7684\u9879\u76EE\u91CC\u{1F447}","slug":"\u{1F7E9}-\u8FD0\u7528\u5728\u6211\u524D\u8A00\u8BF4\u7684\u9879\u76EE\u91CC\u{1F447}","link":"#\u{1F7E9}-\u8FD0\u7528\u5728\u6211\u524D\u8A00\u8BF4\u7684\u9879\u76EE\u91CC\u{1F447}","children":[]}],"relativePath":"Explore/2022/Drag_Drop.md","lastUpdated":1673426730000}'),E={name:"Explore/2022/Drag_Drop.md"},t=p('<h1 id="\u{1F90F}-h5\u3010\u62D6\u62FD\u3011\u5B9E\u73B0\u5217\u8868\u6392\u5E8F" tabindex="-1">\u{1F90F} H5\u3010\u62D6\u62FD\u3011\u5B9E\u73B0\u5217\u8868\u6392\u5E8F <a class="header-anchor" href="#\u{1F90F}-h5\u3010\u62D6\u62FD\u3011\u5B9E\u73B0\u5217\u8868\u6392\u5E8F" aria-hidden="true">#</a></h1><h2 id="\u{1F7E5}-\u524D\u8A00" tabindex="-1">\u{1F7E5} \u524D\u8A00 <a class="header-anchor" href="#\u{1F7E5}-\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u6700\u8FD1\u4E3A\u4E86\u81EA\u5DF1\u7684\u4E00\u4E2A\u5C0F\u9879\u76EE\u5C0Fdemo\uFF08\u4E00\u4E2A\u5DE5\u5177\u7C7B\u7F51\u7AD9\uFF09\uFF0C\u9700\u8981\u5B9E\u73B0\u4E00\u79CD\u7C7B\u4F3C\u4E8E\u624B\u673A \u62D6\u52A8\u56FE\u6807\u6362\u4F4D\u7F6E\u7684\u6548\u679C</p><p><img src="'+s+`" alt="\u56FE 1"></p><p>\u4E8E\u662F\u60F3\u5230H5\u7684\u4E00\u79CD\u65B0\u7279\u6027\uFF0CHTML5 \u62D6\u653E\uFF08Drag \u548C Drop\uFF09</p><h2 id="\u{1F7E7}-drag-\u548C-drop" tabindex="-1">\u{1F7E7} Drag \u548C Drop <a class="header-anchor" href="#\u{1F7E7}-drag-\u548C-drop" aria-hidden="true">#</a></h2><ol><li>draggable=\u201Ctrue\u201D \u662F\u4E3A\u4E86\u8BA9\u5143\u7D20\u53EF\u4EE5\u88AB\u3010\u62D6\u52A8\u3011</li><li>ondragstart \u3010\u5F00\u59CB\u62D6\u52A8\u3011\u5C31\u6267\u884C\u7684\u94A9\u5B50\u51FD\u6570</li><li>ondragover \u89C4\u5B9A\u5728\u4F55\u5904\u653E\u7F6E\u88AB\u62D6\u52A8\u7684\u6570\u636E</li><li>ondrop \u3010\u653E\u7F6E\u3011\u5C31\u6267\u884C\u7684\u94A9\u5B50\u51FD\u6570</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#81A1C1;">&lt;img</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">drag1</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">src</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">img.png</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">draggable</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">ondragstart</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#88C0D0;">drag</span><span style="color:#A3BE8C;">(</span><span style="color:#D8DEE9;">event</span><span style="color:#A3BE8C;">)</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;div</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">id</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">div1</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">ondrop</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#88C0D0;">drop</span><span style="color:#A3BE8C;">(</span><span style="color:#D8DEE9;">event</span><span style="color:#A3BE8C;">)</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">ondragover</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#88C0D0;">allowDrop</span><span style="color:#A3BE8C;">(</span><span style="color:#D8DEE9;">event</span><span style="color:#A3BE8C;">)</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/div&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#616E88;">//\u53D6\u6D88 \u6D4F\u89C8\u5668\u5BF9\u6570\u636E\u7684\u9ED8\u8BA4\u5904\u7406</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">allowDrop</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">ev</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;">   </span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#D8DEE9;">ev</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">preventDefault</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//ondragstart \u5F00\u59CB\u62D6\u52A8\uFF08\u628Aid\u653E\u5728\u201CText\u201D\u91CC\uFF09</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">drag</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">ev</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#D8DEE9;">ev</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">dataTransfer</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setData</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Text</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;">ev</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">target</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">id</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//drop\u3010\u653E\u3011\u7B49\u5143\u7D20\u653E\u8FDB\u6765\u7684\u65F6\u5019\u53BB\u83B7\u53D6\uFF08Text)\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u5B50\u8282\u70B9\u3002</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">drop</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">ev</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;">   </span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">//\u53D6\u6D88 \u6D4F\u89C8\u5668\u5BF9\u6570\u636E\u7684\u9ED8\u8BA4\u5904\u7406</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#D8DEE9;">ev</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">preventDefault</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">data</span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9;">ev</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">dataTransfer</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getData</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Text</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#D8DEE9;">ev</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">target</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">appendChild</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getElementById</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">data</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>preventDefault \u662F\u4E3A\u4E86\u53D6\u6D88 \u6D4F\u89C8\u5668\u5BF9\u6570\u636E\u7684\u9ED8\u8BA4\u5904\u7406</li><li>ondragstart \u5F00\u59CB\u62D6\u52A8\uFF08\u628Aid\u653E\u5728\u201CText\u201D\u91CC\uFF09</li><li>drop\u3010\u653E\u3011\u7B49\u5143\u7D20\u653E\u8FDB\u6765\u7684\u65F6\u5019\u53BB\u83B7\u53D6\uFF08Text)\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u5B50\u8282\u70B9\u3002</li></ul><h2 id="\u{1F7E8}-\u3010\u6D4B\u8BD5\u4E00\u4E0B\u3011\u5217\u8868\u62D6\u52A8\uFF08\u5728vue3" tabindex="-1">\u{1F7E8} \u3010\u6D4B\u8BD5\u4E00\u4E0B\u3011\u5217\u8868\u62D6\u52A8\uFF08\u5728Vue3) <a class="header-anchor" href="#\u{1F7E8}-\u3010\u6D4B\u8BD5\u4E00\u4E0B\u3011\u5217\u8868\u62D6\u52A8\uFF08\u5728vue3" aria-hidden="true">#</a></h2><ul><li>\u5728Vue\u91CC\u8981\u4F7F\u7528\u3010$event\u3011</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#81A1C1;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;li</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">v-for</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">in</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">key</span><span style="color:#ECEFF4;">=</span><span style="color:#D8DEE9FF;">index </span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#8FBCBB;">draggable</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">true</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">@</span><span style="color:#8FBCBB;">dragstart</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#88C0D0;">drag</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">$event</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">@</span><span style="color:#8FBCBB;">drop</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#88C0D0;">drop</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">$event</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">@</span><span style="color:#8FBCBB;">dragover</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#88C0D0;">allowDrop</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">$event</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">{{</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">name</span><span style="color:#ECEFF4;">}}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{{</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">age</span><span style="color:#ECEFF4;">}}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">&lt;/li&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">&lt;script</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">setup</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">ref</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">vue</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u968F\u4FBF\u641E\u4E2A\u8868\u5B9E\u9A8C\u4E00\u4E0B</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">list</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">ref</span><span style="color:#D8DEE9FF;">([</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">{</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">list1</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">age</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">18</span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">{</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">list2</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">age</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">19</span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">{</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">name</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">list3</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">age</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">20</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">//\u5217\u8868item \u88AB\u62D6\u52A8\u65F6 \u9644\u52A0\u4E0A\u6570\u636E\u4FE1\u606F\u3010index\u3011</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">drag</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">event</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">event</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">dataTransfer</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setData</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">index</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#616E88;">//\u3010\u653E\u7F6E\u5143\u7D20\u3011\u65F6\u7684\u64CD</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">drop</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">event</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">//\u53D6\u6D88\u6D4F\u89C8\u5668\u9ED8\u8BA4\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">event</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">preventDefault</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">//\u5217\u8868\u88AB\u62D6\u52A8\u7684 \u653E\u5230index1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">Index1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">parseInt</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">event</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">dataTransfer</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getData</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">index</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">//\u653E\u7F6E\u7684\u4F4D\u7F6E \u4E3A index2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">Index2</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">parseInt</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">//\u5F53item\u4ECE\u540E\u5F80\u524D\u653E</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">Index1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">Index2</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">//\u5229\u7528splice\u3010\u66FF\u6362\u3011\u628Aindex1 \u653E\u5230 index2\u7684\u4F4D\u7F6E </span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">splice</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">Index2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">Index1</span><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">//\u7136\u540E\u5220\u9664\u539F\u6765 index1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">splice</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">Index1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">Index1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">Index2</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">//\u5F53item\u4ECE\u524D\u9762\u5F80\u540E\u9762\u62D6\u653E</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">splice</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">Index2</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">Index1</span><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">splice</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">Index1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">else</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#616E88;">//\u6D4F\u89C8\u5668\u9ED8\u8BA4\u4E0D\u8BA9\u5143\u7D20\u5185\u90E8\u88AB\u653E\u7F6E\uFF0C\u53D6\u6D88\u9ED8\u8BA4\uFF0C\u3010\u5141\u8BB8\u653E\u7F6E\u3011</span></span>
<span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">allowDrop</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">event</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">  </span><span style="color:#616E88;">//\u53D6\u6D88\u6D4F\u89C8\u5668\u9ED8\u8BA4\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">event</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">preventDefault</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div><p><img src="`+o+'" alt="\u56FE 2"></p><h2 id="\u{1F7E9}-\u8FD0\u7528\u5728\u6211\u524D\u8A00\u8BF4\u7684\u9879\u76EE\u91CC\u{1F447}" tabindex="-1">\u{1F7E9} \u8FD0\u7528\u5728\u6211\u524D\u8A00\u8BF4\u7684\u9879\u76EE\u91CC\u{1F447} <a class="header-anchor" href="#\u{1F7E9}-\u8FD0\u7528\u5728\u6211\u524D\u8A00\u8BF4\u7684\u9879\u76EE\u91CC\u{1F447}" aria-hidden="true">#</a></h2><p><img src="'+e+'" alt="\u56FE 1"></p><p>\u867D\u7136\u529F\u80FD\u662F\u5B9E\u73B0\u4E86\uFF08\u901A\u8FC7\u62D6\u62FD\u66F4\u6362\u5217\u8868\u6392\u5E8F\uFF09\uFF0C\u4F46\u662F\u2026 \u8FD9\u4E2A\u6548\u679C\u561B\u2026</p><p>\u8FD8\u662F\u548C\u6211\u60F3\u8FBE\u6210\u7684\u6548\u679C\u4E0D\u4E00\u6837\u{1F447}<br><img src="'+s+'" alt="\u56FE 4"></p><p>\u8FD9\u4E2A\u95EE\u9898\u5C31\u7559\u5230\u4EE5\u540E\u518D\u89E3\u51B3\u5427~</p>',19),r=[t];function c(F,y,D,C,i,d){return a(),l("div",null,r)}const B=n(E,[["render",c]]);export{A as __pageData,B as default};
