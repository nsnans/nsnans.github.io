import{_ as s,o as n,c as a,a as l}from"./app.7a3ebbdd.js";const i=JSON.parse('{"title":"\u6846\u67B6\u5F15\u7528\u7EC4\u4EF6\u76F4\u63A5\u6E32\u67D3","description":"","frontmatter":{},"headers":[{"level":2,"title":"vue+tsx","slug":"vue-tsx","link":"#vue-tsx","children":[{"level":3,"title":"\u83B7\u53D6\u6570\u636E","slug":"\u83B7\u53D6\u6570\u636E","link":"#\u83B7\u53D6\u6570\u636E","children":[]},{"level":3,"title":"\u6E32\u67D3","slug":"\u6E32\u67D3","link":"#\u6E32\u67D3","children":[]}]},{"level":2,"title":"react","slug":"react","link":"#react","children":[{"level":3,"title":"\u83B7\u53D6\u6570\u636E","slug":"\u83B7\u53D6\u6570\u636E-1","link":"#\u83B7\u53D6\u6570\u636E-1","children":[]},{"level":3,"title":"\u6E32\u67D3","slug":"\u6E32\u67D3-1","link":"#\u6E32\u67D3-1","children":[]}]}],"relativePath":"RandomNotes/test/10.md","lastUpdated":1685520771000}'),p={name:"RandomNotes/test/10.md"},o=l(`<h1 id="\u6846\u67B6\u5F15\u7528\u7EC4\u4EF6\u76F4\u63A5\u6E32\u67D3" tabindex="-1">\u6846\u67B6\u5F15\u7528\u7EC4\u4EF6\u76F4\u63A5\u6E32\u67D3 <a class="header-anchor" href="#\u6846\u67B6\u5F15\u7528\u7EC4\u4EF6\u76F4\u63A5\u6E32\u67D3" aria-hidden="true">#</a></h1><h2 id="vue-tsx" tabindex="-1">vue+tsx <a class="header-anchor" href="#vue-tsx" aria-hidden="true">#</a></h2><h3 id="\u83B7\u53D6\u6570\u636E" tabindex="-1">\u83B7\u53D6\u6570\u636E <a class="header-anchor" href="#\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">demoComponents</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">ref</span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">any</span><span style="color:#ECEFF4;">&gt;</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{}</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">initComponents</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">async</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">context</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">import</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">meta</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">glob</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">./test/**/*.tsx</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">// \u5F15\u5165\u5F53\u524D\u76EE\u5F55\u4E0B\u7684test\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709tsx\u6587\u4EF6</span></span>
<span class="line"><span style="color:#ECEFF4;">        </span><span style="color:#616E88;">// const context=i<wbr>mport.meta.glob(&#39;./**/*.tsx&#39;);// \u5F15\u5165\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709tsx\u6587\u4EF6</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">components</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">Object</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">keys</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">context</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">map</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">key</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                </span><span style="color:#D8DEE9;">fileName</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">key</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                </span><span style="color:#D8DEE9;">component</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">context</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">key</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9;">data1</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">await</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Promise</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">all</span><span style="color:#D8DEE9FF;">([</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#8FBCBB;">Promise</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">all</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">components</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">map</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">component</span><span style="color:#D8DEE9FF;">()))</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        ])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">_demoComponents</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">data1</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">reduce</span><span style="color:#D8DEE9FF;">(</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">prev</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">any</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">cur</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">any</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                </span><span style="color:#D8DEE9;">prev</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">components</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">fileName</span><span style="color:#D8DEE9FF;">] </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">cur</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">prev</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">{}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        )</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">_demoComponents</span><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">demoComponents</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">value</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">initComponents</span><span style="color:#D8DEE9FF;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6E32\u67D3" tabindex="-1">\u6E32\u67D3 <a class="header-anchor" href="#\u6E32\u67D3" aria-hidden="true">#</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">// \u6E32\u67D3\u7EC4\u4EF6\u540D\u5B57</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">Object</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">keys</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">demoComponents</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">?.</span><span style="color:#88C0D0;">map</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">key</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">string</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">key</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">replace</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">./test/</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">replace</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">.tsx</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;&quot;</span><span style="color:#D8DEE9FF;">))</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">// \u6E32\u67D3\u6240\u6709\u7EC4\u4EF6\u5185\u5BB9</span></span>
<span class="line"><span style="color:#D8DEE9FF;">     </span><span style="color:#D8DEE9;">Object</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">keys</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">demoComponents</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">?.</span><span style="color:#88C0D0;">map</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">key</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">string</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">h</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">demoComponents</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">key</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">?.</span><span style="color:#D8DEE9;">default</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="react" tabindex="-1">react <a class="header-anchor" href="#react" aria-hidden="true">#</a></h2><h3 id="\u83B7\u53D6\u6570\u636E-1" tabindex="-1">\u83B7\u53D6\u6570\u636E <a class="header-anchor" href="#\u83B7\u53D6\u6570\u636E-1" aria-hidden="true">#</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">   </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9;">demoComponents</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">setDemoComponents</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">useState</span><span style="color:#ECEFF4;">&lt;</span><span style="color:#8FBCBB;">any</span><span style="color:#ECEFF4;">&gt;</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">initComponents</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">async</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">context</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">import</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">meta</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">glob</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">./test/**/*.tsx</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;">// \u5F15\u5165\u5F53\u524D\u76EE\u5F55\u4E0B\u7684test\u6587\u4EF6\u5939\u4E0B\u7684\u6240\u6709tsx\u6587\u4EF6</span></span>
<span class="line"><span style="color:#ECEFF4;">        </span><span style="color:#616E88;">// const context=i<wbr>mport.meta.glob(&#39;./**/*.tsx&#39;);// \u5F15\u5165\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709tsx\u6587\u4EF6</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">components</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">Object</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">keys</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">context</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">map</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">key</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                </span><span style="color:#D8DEE9;">fileName</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">key</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                </span><span style="color:#D8DEE9;">component</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">context</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">key</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9;">data1</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">await</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Promise</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">all</span><span style="color:#D8DEE9FF;">([</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#8FBCBB;">Promise</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">all</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">components</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">map</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">component</span><span style="color:#D8DEE9FF;">()))</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        ])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">_demoComponents</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">data1</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">reduce</span><span style="color:#D8DEE9FF;">(</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">prev</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">any</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">cur</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">any</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">index</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">number</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                </span><span style="color:#D8DEE9;">prev</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">components</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">fileName</span><span style="color:#D8DEE9FF;">] </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">cur</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">                </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">prev</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">},</span></span>
<span class="line"><span style="color:#D8DEE9FF;">            </span><span style="color:#ECEFF4;">{}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        )</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">_demoComponents</span><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#88C0D0;">setDemoComponents</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">_demoComponents</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6E32\u67D3-1" tabindex="-1">\u6E32\u67D3 <a class="header-anchor" href="#\u6E32\u67D3-1" aria-hidden="true">#</a></h3><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">// \u6E32\u67D3\u7EC4\u4EF6\u540D\u5B57</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">Object</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">keys</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">demoComponents</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">?.</span><span style="color:#88C0D0;">map</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">key</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">string</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">key</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">replace</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">./test/</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">replace</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">.tsx</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;&quot;</span><span style="color:#D8DEE9FF;">))</span></span>
<span class="line"><span style="color:#ECEFF4;">    </span><span style="color:#616E88;">// \u6E32\u67D3\u6240\u6709\u7EC4\u4EF6\u5185\u5BB9</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">Object</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">keys</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">demoComponents</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">?.</span><span style="color:#88C0D0;">map</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">key</span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">string</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9;">React</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">createElement</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">demoComponents</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">key</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">?.</span><span style="color:#D8DEE9;">default</span><span style="color:#D8DEE9FF;">))</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function E(t,c,F,r,D,y){return n(),a("div",null,e)}const d=s(p,[["render",E]]);export{i as __pageData,d as default};
