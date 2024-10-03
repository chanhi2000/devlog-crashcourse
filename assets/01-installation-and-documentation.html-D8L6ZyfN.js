import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as n,t as m,b as a,w as s,n as d,g as u,e as v,r as t,o as h,d as i}from"./app-U_bew1in.js";const g={},k={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},f={class:"table-of-contents"},w=n("hr",null,null,-1),y=v(`<hr><p>The command name <code>awk</code> is derived from its developers — Alfred V. Aho, Peter J. Weinberger, and Brian W. Kernighan. Over the years, it has been adapted and modified by various other developers. <a href="https://www.gnu.org/software/gawk/manual/gawk.html#History" target="_blank" rel="noopener noreferrer">See gawk manual: History</a> for more details.</p><p>This chapter will show how to install or upgrade awk followed by details related to documentation.</p><hr><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><p>If you are on a Unix-like system, you will most likely have some version of <code>awk</code> already installed. This book is primarily about <code>GNU awk</code>. As there are syntax and feature differences between various implementations, make sure to use <code>GNU awk</code> to follow along the examples presented in this book.</p><p><code>GNU awk</code> is part of the <a href="https://www.gnu.org/manual/manual.html" target="_blank" rel="noopener noreferrer">text creation and manipulation</a> commands and usually comes by default on GNU/Linux distributions. To install a particular version, visit <a href="https://www.gnu.org/software/gawk/" target="_blank" rel="noopener noreferrer">gnu: gawk software</a>. See also <a href="https://lists.gnu.org/archive/cgi-bin/namazu.cgi?query=gawk+released&amp;submit=Search%21&amp;idxname=info-gnu&amp;max=20&amp;result=normal&amp;sort=date%3Alate" target="_blank" rel="noopener noreferrer">release notes</a> for an overview of changes between versions.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">wget</span> https://ftp.gnu.org/gnu/gawk/gawk-5.2.2.tar.xz</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-Jxf</span> gawk-5.2.2.tar.xz</span>
<span class="line"><span class="token builtin class-name">cd</span> gawk-5.2.2/</span>
<span class="line"><span class="token comment"># see https://askubuntu.com/q/237576 if you get compiler not found error</span></span>
<span class="line">./configure</span>
<span class="line"><span class="token function">make</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token function">awk</span> <span class="token parameter variable">--version</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n1</span></span>
<span class="line"><span class="token comment"># GNU Awk 5.2.2, API 3.2, PMA Avon 8-g1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you are not using a Linux distribution, you may be able to access <code>GNU awk</code> using an option below:</p><ul><li><a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Git for Windows</a> — provides a Bash emulation used to run Git from the command line</li><li><a href="https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux" target="_blank" rel="noopener noreferrer">Windows Subsystem for Linux</a> — compatibility layer for running Linux binary executables natively on Windows</li><li><a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">brew</a> — Package Manager for macOS (or Linux)</li></ul><div class="hint-container info"><p class="hint-container-title">Info</p><p>See also <a href="https://www.gnu.org/software/gawk/manual/html_node/Installation.html" target="_blank" rel="noopener noreferrer">gawk manual: Installation</a> for advanced options and instructions to install awk on other platforms.</p></div><hr><h2 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation"><span>Documentation</span></a></h2><p>It is always good to know where to find documentation. From the command line, you can use <code>man awk</code> for a short manual and <code>info awk</code> for the full documentation. I prefer using the <a href="https://www.gnu.org/software/gawk/manual/" target="_blank" rel="noopener noreferrer">online gnu awk manual</a>, which feels much easier to use and navigate.</p><p>Here&#39;s a snippet from <code>man awk</code>:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">man</span> <span class="token function">awk</span></span>
<span class="line"><span class="token comment"># GAWK(1)                        Utility Commands                        GAWK(1)  </span></span>
<span class="line"><span class="token comment">#   </span></span>
<span class="line"><span class="token comment"># NAME</span></span>
<span class="line"><span class="token comment">#        gawk - pattern scanning and processing language</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># SYNOPSIS</span></span>
<span class="line"><span class="token comment">#        gawk [ POSIX or GNU style options ] -f program-file [ -- ] file ...</span></span>
<span class="line"><span class="token comment">#        gawk [ POSIX or GNU style options ] [ -- ] program-text file ...</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># DESCRIPTION</span></span>
<span class="line"><span class="token comment">#        Gawk  is  the  GNU Project&#39;s implementation of the AWK programming lan‐</span></span>
<span class="line"><span class="token comment">#        guage.  It conforms to the definition of  the  language  in  the  POSIX</span></span>
<span class="line"><span class="token comment">#        1003.1  Standard.   This version in turn is based on the description in</span></span>
<span class="line"><span class="token comment">#        The AWK Programming Language, by Aho, Kernighan, and Weinberger.   Gawk</span></span>
<span class="line"><span class="token comment">#        provides  the additional features found in the current version of Brian</span></span>
<span class="line"><span class="token comment">#        Kernighan&#39;s awk and numerous GNU-specific extensions.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="options-overview" tabindex="-1"><a class="header-anchor" href="#options-overview"><span>Options overview</span></a></h2><p>For a quick overview of all the available options, use <code>awk --help</code> from the command line.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">awk</span> <span class="token parameter variable">--help</span></span>
<span class="line"><span class="token comment"># Usage: awk [POSIX or GNU style options] -f progfile [--] file ...</span></span>
<span class="line"><span class="token comment"># Usage: awk [POSIX or GNU style options] [--] &#39;program&#39; file ...</span></span>
<span class="line"><span class="token comment"># POSIX options:                  GNU long options: (standard)</span></span>
<span class="line"><span class="token comment">#     -f progfile                 --file=progfile</span></span>
<span class="line"><span class="token comment">#     -F fs                       --field-separator=fs</span></span>
<span class="line"><span class="token comment">#     -v var=val                  --assign=var=val</span></span>
<span class="line"><span class="token comment"># Short options:                  GNU long options: (extensions)</span></span>
<span class="line"><span class="token comment">#     -b                          --characters-as-bytes</span></span>
<span class="line"><span class="token comment">#     -c                          --traditional</span></span>
<span class="line"><span class="token comment">#     -C                          --copyright</span></span>
<span class="line"><span class="token comment">#     -d[file]                    --dump-variables[=file]</span></span>
<span class="line"><span class="token comment">#     -D[file]                    --debug[=file]</span></span>
<span class="line"><span class="token comment">#     -e &#39;program-text&#39;           --source=&#39;program-text&#39;</span></span>
<span class="line"><span class="token comment">#     -E file                     --exec=file</span></span>
<span class="line"><span class="token comment">#     -g                          --gen-pot</span></span>
<span class="line"><span class="token comment">#     -h                          --help</span></span>
<span class="line"><span class="token comment">#     -i includefile              --include=includefile</span></span>
<span class="line"><span class="token comment">#     -I                          --trace</span></span>
<span class="line"><span class="token comment">#     -l library                  --load=library</span></span>
<span class="line"><span class="token comment">#     -L[fatal|invalid|no-ext]    --lint[=fatal|invalid|no-ext]</span></span>
<span class="line"><span class="token comment">#     -M                          --bignum</span></span>
<span class="line"><span class="token comment">#     -N                          --use-lc-numeric</span></span>
<span class="line"><span class="token comment">#     -n                          --non-decimal-data</span></span>
<span class="line"><span class="token comment">#     -o[file]                    --pretty-print[=file]</span></span>
<span class="line"><span class="token comment">#     -O                          --optimize</span></span>
<span class="line"><span class="token comment">#     -p[file]                    --profile[=file]</span></span>
<span class="line"><span class="token comment">#     -P                          --posix</span></span>
<span class="line"><span class="token comment">#     -r                          --re-interval</span></span>
<span class="line"><span class="token comment">#     -s                          --no-optimize</span></span>
<span class="line"><span class="token comment">#     -S                          --sandbox</span></span>
<span class="line"><span class="token comment">#     -t                          --lint-old</span></span>
<span class="line"><span class="token comment">#     -V                          --version</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,21);function x(l,_){const e=t("router-link"),o=t("VPCard"),r=t("TagLinks");return h(),p("div",null,[n("h1",k,[n("a",b,[n("span",null,m(l.$frontmatter.title)+" 관련",1)])]),n("nav",f,[n("ul",null,[n("li",null,[a(e,{to:"#installation"},{default:s(()=>[i("Installation")]),_:1})]),n("li",null,[a(e,{to:"#documentation"},{default:s(()=>[i("Documentation")]),_:1})]),n("li",null,[a(e,{to:"#options-overview"},{default:s(()=>[i("Options overview")]),_:1})])])]),w,a(o,d(u({title:"1. Installation and Documentation",desc:"CLI Text Processing with GNU awk",link:"https://learnbyexample.github.io/learn_gnuawk/installation-and-documentation.html",logo:"https://learnbyexample.github.io/favicon.svg",background:"rgba(22,25,35,0.2)"})),null,16),y,a(r)])}const G=c(g,[["render",x],["__file","01-installation-and-documentation.html.vue"]]),P=JSON.parse('{"path":"/cli/text-processing-w-gnu-awk/01-installation-and-documentation.html","title":"1. Installation and Documentation","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"1. Installation and Documentation","description":"Text Processing with GNU awk > 1. Installation and Documentation","category":["CLI","Linux"],"tags":["crashcourse","cli","sh","shell","gnu","linux","awk"],"head":[[{"meta":null},{"property":"og:title","content":"Text Processing with GNU awk > 1. Installation and Documentation"},{"property":"og:description","content":"1. Installation and Documentation"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/cli/text-processing-w-gnu-awk/01-installation-and-documentation.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/cli/text-processing-w-gnu-awk/01-installation-and-documentation.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"1. Installation and Documentation"}],["meta",{"property":"og:description","content":"Text Processing with GNU awk > 1. Installation and Documentation"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-03-20T07:03:32.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"cli"}],["meta",{"property":"article:tag","content":"sh"}],["meta",{"property":"article:tag","content":"shell"}],["meta",{"property":"article:tag","content":"gnu"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"awk"}],["meta",{"property":"article:modified_time","content":"2024-03-20T07:03:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1. Installation and Documentation\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-20T07:03:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Documentation","slug":"documentation","link":"#documentation","children":[]},{"level":2,"title":"Options overview","slug":"options-overview","link":"#options-overview","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1710918212000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":5}]},"readingTime":{"minutes":2.36,"words":709},"filePathRelative":"cli/text-processing-w-gnu-awk/01-installation-and-documentation.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{G as comp,P as data};
