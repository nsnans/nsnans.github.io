import{_ as s,o as n,c as a,a as o}from"./app.5da19ece.js";const d=JSON.parse('{"title":"\u{1F40D} Python - JSON","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F40D}\u3010json.dumps\u3011Python\u5BF9\u8C61\u8F6CJSON","slug":"\u{1F40D}\u3010json-dumps\u3011python\u5BF9\u8C61\u8F6Cjson","link":"#\u{1F40D}\u3010json-dumps\u3011python\u5BF9\u8C61\u8F6Cjson","children":[]},{"level":2,"title":"\u{1F40D}\u3010json.loads\u3011JSON\u8F6CPython\u5BF9\u8C61","slug":"\u{1F40D}\u3010json-loads\u3011json\u8F6Cpython\u5BF9\u8C61","link":"#\u{1F40D}\u3010json-loads\u3011json\u8F6Cpython\u5BF9\u8C61","children":[]}],"relativePath":"WebSpider/Python/PythonNote_JSON.md","lastUpdated":1673426730000}'),p={name:"WebSpider/Python/PythonNote_JSON.md"},l=o(`<h1 id="\u{1F40D}-python-json" tabindex="-1">\u{1F40D} Python - JSON <a class="header-anchor" href="#\u{1F40D}-python-json" aria-hidden="true">#</a></h1><h2 id="\u{1F40D}\u3010json-dumps\u3011python\u5BF9\u8C61\u8F6Cjson" tabindex="-1">\u{1F40D}\u3010json.dumps\u3011Python\u5BF9\u8C61\u8F6CJSON <a class="header-anchor" href="#\u{1F40D}\u3010json-dumps\u3011python\u5BF9\u8C61\u8F6Cjson" aria-hidden="true">#</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">xxg </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[{</span><span style="color:#D8DEE9FF;">   </span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">xxg</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">xxgg</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">xxggg</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#ECEFF4;">}]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">json_xxg </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> json</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">dumps</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">xxg</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">json_xxg</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#616E88;"># [{&quot;xxg&quot;: 1, &quot;xxgg&quot;: 2, &quot;xxggg&quot;: 3}]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u{1F40D}\u3010json-loads\u3011json\u8F6Cpython\u5BF9\u8C61" tabindex="-1">\u{1F40D}\u3010json.loads\u3011JSON\u8F6CPython\u5BF9\u8C61 <a class="header-anchor" href="#\u{1F40D}\u3010json-loads\u3011json\u8F6Cpython\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">json_xxg </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">{&quot;xxg&quot;:1,&quot;xxgg&quot;:2,&quot;xxggg&quot;:3}</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">xxg</span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> json</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">loads</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">json_xxg</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">xxg</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#616E88;"># {&#39;xxg&#39;: 1, &#39;xxgg&#39;: 2, &#39;xxggg&#39;: 3}</span></span>
<span class="line"></span></code></pre></div>`,5),e=[l];function t(c,r,E,F,y,D){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
