import{o as s,c as a,a as n}from"./app.f59b333d.js";const t='{"title":"API","description":"","frontmatter":{},"headers":[{"level":2,"title":"パラメータ","slug":"パラメータ"},{"level":2,"title":"型定義","slug":"型定義"}],"relativePath":"ja/api/index.md","lastUpdated":1613273517202}',e={},o=n('<h1 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1><h2 id="パラメータ"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><table><thead><tr><th>キー</th><th>型</th><th>デフォルト</th><th>説明</th></tr></thead><tbody><tr><td>multiple</td><td><code>boolean</code></td><td><code>false</code></td><td>複数選択可か</td></tr><tr><td>accept</td><td><code>string | string[]</code></td><td>&#39;&#39;</td><td><code>&#39;.png&#39;</code> <code>[&#39;.jpg&#39;, &#39;.svg&#39;]</code></td></tr><tr><td>strict</td><td><code>boolean</code></td><td><code>false</code></td><td>厳格モード</td></tr></tbody></table><h2 id="型定義"><a class="header-anchor" href="#型定義" aria-hidden="true">#</a> 型定義</h2><div class="language-ts"><pre><code><span class="token generic-function"><span class="token function">fileDialog</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>parameters<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Parameters<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PickFile<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;&gt;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Parameters<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n    accept<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    multiple<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>\n    strict<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">PickFile<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">false</span></span> <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span> <span class="token operator">?</span> File <span class="token operator">:</span> FileList<span class="token punctuation">)</span> <span class="token operator">:</span> FileList<span class="token punctuation">;</span>\n</code></pre></div><table><thead><tr><th>パラメータ</th><th>戻り値</th></tr></thead><tbody><tr><td><code>{multiple: false, strict: true}</code></td><td><code>File</code></td></tr><tr><td><code>*</code></td><td><code>FileList</code></td></tr></tbody></table>',6);e.render=function(n,t,e,p,c,l){return s(),a("div",null,[o])};export default e;export{t as __pageData};
