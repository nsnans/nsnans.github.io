import{_ as s,o as n,c as a,a as l}from"./app.5da19ece.js";const C=JSON.parse('{"title":"\u{1F529} ESLint","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5 - \u6A21\u5757\u5305","slug":"\u5B89\u88C5-\u6A21\u5757\u5305","link":"#\u5B89\u88C5-\u6A21\u5757\u5305","children":[]},{"level":2,"title":"\u521D\u59CB\u5316 \u751F\u6210\u914D\u7F6E\u6587\u4EF6 .eslintrc.js \u{1F447}","slug":"\u521D\u59CB\u5316-\u751F\u6210\u914D\u7F6E\u6587\u4EF6-eslintrc-js-\u{1F447}","link":"#\u521D\u59CB\u5316-\u751F\u6210\u914D\u7F6E\u6587\u4EF6-eslintrc-js-\u{1F447}","children":[]},{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6","link":"#\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":2,"title":"\u4F7F\u7528\u547D\u4EE4\u8FDB\u884C\u68C0\u67E5 \u{1F447}","slug":"\u4F7F\u7528\u547D\u4EE4\u8FDB\u884C\u68C0\u67E5-\u{1F447}","link":"#\u4F7F\u7528\u547D\u4EE4\u8FDB\u884C\u68C0\u67E5-\u{1F447}","children":[]},{"level":2,"title":"VScode \u6269\u5C55\u5DE5\u5177 \u{1F447}","slug":"vscode-\u6269\u5C55\u5DE5\u5177-\u{1F447}","link":"#vscode-\u6269\u5C55\u5DE5\u5177-\u{1F447}","children":[]}],"relativePath":"Note/ESLint.md","lastUpdated":1673426730000}'),p={name:"Note/ESLint.md"},o=l(`<h1 id="\u{1F529}-eslint" tabindex="-1">\u{1F529} ESLint <a class="header-anchor" href="#\u{1F529}-eslint" aria-hidden="true">#</a></h1><blockquote><p>ESLint \u662F\u4E00\u4E2A\u7528\u6765\u8BC6\u522B ECMAScript/JavaScript \u5E76\u4E14\u6309\u7167\u89C4\u5219\u7ED9\u51FA\u62A5\u544A\u7684\u4EE3\u7801\u68C0\u6D4B\u5DE5\u5177</p></blockquote><p>\u5B83\u662F\u68C0\u67E5\u6211\u4EEC\u4EE3\u7801\u5199\u5F97\u89C4\u4E0D\u89C4\u8303\u7684\u4E00\u4E2A\u5DE5\u5177\uFF08\u6BD4\u5982 \u201C=\u201D \u53F7\u7684\u5DE6\u53F3\u8981\u7559\u6709\u7A7A\u683C\uFF09<br> \u8FD9\u6837\u53EF\u4EE5\u4F7F\u6211\u4EEC\u7684\u4EE3\u7801\u770B\u8D77\u6765\u6BD4\u8F83\u7F8E\u89C2\uFF0C\u6BD4\u8F83\u89C4\u8303\u3001\u7EDF\u4E00\uFF01\u8FD9\u662F\u597D\u4E8B\uFF01 \u4F46\uFF01\u5B83\u6709\u65F6\u4F1A\u56E0\u4E3A\u4E00\u4E9B\u4E0D\u91CD\u8981\u7684\u95EE\u9898\u5C31\u6253\u65AD\u547D\u4EE4\u7684\u6267\u884C\u3002 \u6240\u4EE5\u901A\u5E38\u6211\u4F1A\u628A\u5B83\u5173\u95ED\uFF01\u9009\u62E9 VScode \u914D\u7F6E\u7684\u3010\u683C\u5F0F\u5316 - prettier \u63D2\u4EF6\u3011\u3002</p><p>\u4F46\u8FD8\u662F\u8981\u4E86\u89E3\u4E00\u4E0B ESLint \u5982\u4F55\u914D\u7F6E\uFF0C\u6765\u66F4\u597D\u7684\u638C\u63A7\u5B83\u3002</p><p>ESLint \u4E24\u4E2A\u5DE5\u5177\uFF1A</p><ol><li>\u6A21\u5757\u5305\u3010\u5728\u7F16\u8BD1\u65F6\u62A5\u9519\u3011</li><li>VSCode \u7684\u6269\u5C55\u5DE5\u5177\u3010\u5728\u5199\u7684\u65F6\u5019\u5C31\u62A5\u9519\uFF01\u3011</li></ol><h2 id="\u5B89\u88C5-\u6A21\u5757\u5305" tabindex="-1">\u5B89\u88C5 - \u6A21\u5757\u5305 <a class="header-anchor" href="#\u5B89\u88C5-\u6A21\u5757\u5305" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npm i eslint -D</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u4F7F\u7528 Vue/cli \u521B\u5EFA Vue \u9879\u76EE\u7684\u65F6\u5019\u53EF\u4EE5\u76F4\u63A5\u9009\u62E9</p><h2 id="\u521D\u59CB\u5316-\u751F\u6210\u914D\u7F6E\u6587\u4EF6-eslintrc-js-\u{1F447}" tabindex="-1">\u521D\u59CB\u5316 \u751F\u6210\u914D\u7F6E\u6587\u4EF6 <code>.eslintrc.js</code> \u{1F447} <a class="header-anchor" href="#\u521D\u59CB\u5316-\u751F\u6210\u914D\u7F6E\u6587\u4EF6-eslintrc-js-\u{1F447}" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npx eslint --init</span></span>
<span class="line"></span></code></pre></div><h4 id="\u9009\u9879-\u{1F447}" tabindex="-1">\u9009\u9879 \u{1F447} <a class="header-anchor" href="#\u9009\u9879-\u{1F447}" aria-hidden="true">#</a></h4><ol><li>\u4F60\u60F3\u600E\u6837\u53BB\u4F7F\u7528 ESLint? <ol><li>\u9009\u7B2C\u4E09\u4E2A\u3010\u68C0\u67E5\u8BED\u6CD5/\u627E\u51FA\u95EE\u9898/\u5F3A\u8FEB\u4F60\u8981\u4EE3\u7801\u89C4\u8303\uFF01\u3011\u2705</li></ol></li><li>\u4F60\u5F53\u524D\u662F\u4F7F\u7528\u4EC0\u4E48\u3010\u5BFC\u5165\u5BFC\u51FA\u7684\u89C4\u8303\u3011 <ol><li>\u7B2C\u4E00\u4E2A\u662F ES6\u3010import/export\u3011</li><li>\u7B2C\u4E8C\u4E2A\u662F CommonJS\u3010require/exports\u3011\u2705</li></ol></li><li>\u4F60\u4F7F\u7528\u4E86\u4EC0\u4E48 js \u6846\u67B6 <ol><li>\u8FD9\u91CC\u6211\u9009\u62E9 Vue.js\u2705</li></ol></li><li>\u662F\u5426\u4F7F\u7528 TypeScript</li><li>\u89C4\u8303\u4E4B\u540E\uFF0C\u4EE3\u7801\u5728\u54EA\u91CC\u8FD0\u884C\uFF1F <ol><li>\u6D4F\u89C8\u5668 \u2705</li><li>Node</li></ol></li><li>\u4E3A\u4F60\u5F53\u524D\u9879\u76EE\u53BB\u5236\u5B9A\u4E00\u5957\u89C4\u5219 \u{1F447} <ol><li>\u6D41\u884C\u7684\u98CE\u683C\uFF08\u4F1A\u8BA9\u4F60\u9009\u62E9\u4EBA\u5BB6\u89C4\u5B9A\u597D\u7684\u98CE\u683C\uFF09\u2705</li><li>\u81EA\u5B9A\u4E49\u98CE\u683C</li></ol></li><li>\u6D41\u884C\u7684\u98CE\u683C \u{1F447} <ol><li>Airbnb</li><li>Standard\u3010\u63A8\u8350\u3011\u2705</li><li>Google</li><li>XO</li></ol></li><li>\u4EE5\u4EC0\u4E48\u5F62\u5F0F\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6 <ol><li>JavaScript\u3010\u63A8\u8350\u3011\u2705</li><li>YAML</li><li>JSON</li></ol></li><li>\u662F\u5426\u73B0\u5728\u5B89\u88C5\uFF1F\u3010yes\u3011</li></ol><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">//\u6765\u544A\u8BC9eslint\u627E\u5F53\u524D\u914D\u7F6E\u6587\u4EF6\u4E0D\u80FD\u5F80\u7236\u7EA7\u67E5\u627E</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">root</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">true</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">//\u6307\u5B9Aeslint\u89E3\u6790\u5668\u7684</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">parser</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">babel-eslint</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">// \u3010env\u3011\u6307\u5B9A\u4EE3\u7801\u7684\u8FD0\u884C\u73AF\u5883</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">env</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">browser</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">true</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//\u5728\u6D4F\u89C8\u5668\u8FD0\u884C\u7684\u4EE3\u7801\u3010\u53EF\u4EE5\u4F7F\u7528 windows / document\u3011</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">commonjs</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;">true</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//\u4F7F\u7528\u7684\u662Fcommonjs\u7684\u5BFC\u5165\u5BFC\u51FA</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">es2021</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;">true</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#ECEFF4;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">// \u3010globals\u3011\u5168\u5C40</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">globals</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;">[</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">$</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">:</span><span style="color:#81A1C1;">true</span><span style="color:#D8DEE9FF;">  </span><span style="color:#616E88;">// \u5F53\u4E3Atrue\u65F6\uFF01 $\u4E0D\u58F0\u660E\u4E5F\u53EF\u4EE5\u4F7F\u7528\uFF0Cfalse\u65F6\u53EA\u53EF\u4EE5\u8BBF\u95EE</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">// \u3010extends\u3011\u914D\u7F6E\u6807\u51C6\u7684js\u98CE\u683C</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">extends</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">standard</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">//\u3010parserOptions\u3011\u6307\u5B9A\u8BED\u8A00\u7C7B\u578B\u548C\u98CE\u683C</span></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">//sourceType\u7528\u6765\u6307\u5B9Ajs\u5BFC\u5165\u7684\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u662Fscript</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">parserOptions</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">ecmaVersion</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">12</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">//\u8FD9\u4E2A\u662F\u8BF4\u7528 js12\u89E3\u6790\u5668</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#88C0D0;">sourceType</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">module</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#ECEFF4;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">// \u63D0\u4F9B\u63D2\u4EF6\u7684\uFF0C\u63D2\u4EF6\u540D\u79F0\u7701\u7565\u4E86eslint-plugin-\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E\u662F\u7528\u6765\u89C4\u8303html\u7684</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">plugins</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> [</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">html</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	]</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">//\u3010rules\u3011\u5C31\u662F\u81EA\u5B9A\u4E49\u89C4\u5219\uFF0C\u3010extends\u8FD9\u79CD\u662F\u9009\u5B9A\u4EBA\u5BB6\u8BBE\u7F6E\u597D\u7684\u89C4\u5219\u3011</span></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">// rules\u53EF\u4EE5\u914D\u5408\u4E0A\u9762\u7684\u3010extends\u3011,rules\u4F1A\u8986\u76D6\u3010extends\u3011\u91CC\u5B9A\u4E49\u7684</span></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">// &quot;off&quot; -&gt; 0 \u5173\u95ED\u89C4\u5219</span></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">// &quot;warn&quot; -&gt; 1 \u5F00\u542F\u8B66\u544A\u89C4\u5219</span></span>
<span class="line"><span style="color:#ECEFF4;">	</span><span style="color:#616E88;">// &quot;error&quot; -&gt; 2 \u5F00\u542F\u9519\u8BEF\u89C4\u5219</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#88C0D0;">rules</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">		</span><span style="color:#616E88;">// allow paren-less arrow functions</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">arrow-parens</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">		</span><span style="color:#616E88;">// allow async-await</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">generator-star-spacing</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">		</span><span style="color:#616E88;">// allow debugger during development</span></span>
<span class="line"><span style="color:#D8DEE9FF;">		</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">no-debugger</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">process</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">env</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">NODE_ENV</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">===</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">production</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">?</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span></span>
<span class="line"><span style="color:#D8DEE9FF;">	</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528\u547D\u4EE4\u8FDB\u884C\u68C0\u67E5-\u{1F447}" tabindex="-1">\u4F7F\u7528\u547D\u4EE4\u8FDB\u884C\u68C0\u67E5 \u{1F447} <a class="header-anchor" href="#\u4F7F\u7528\u547D\u4EE4\u8FDB\u884C\u68C0\u67E5-\u{1F447}" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#D8DEE9FF;">npx eslint ./\u9700\u8981\u68C0\u67E5\u8BED\u6CD5\u7684\u6587\u4EF6\u8DEF\u5F84</span></span>
<span class="line"></span></code></pre></div><p>\u4E00\u822C\u4E0D\u8FD9\u6837\u4F7F\u7528</p><h2 id="vscode-\u6269\u5C55\u5DE5\u5177-\u{1F447}" tabindex="-1">VScode \u6269\u5C55\u5DE5\u5177 \u{1F447} <a class="header-anchor" href="#vscode-\u6269\u5C55\u5DE5\u5177-\u{1F447}" aria-hidden="true">#</a></h2><p>\u5B83\u4F1A\u5E2E\u4F60\u542F\u52A8\u4E00\u4E2A ESLint \u670D\u52A1\u5668\u53BB\u68C0\u67E5\u4F60\u7684\u4EE3\u7801\uFF01</p>`,20),e=[o];function t(c,r,E,F,i,y){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
