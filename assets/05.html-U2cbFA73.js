import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as n,t as u,b as s,w as e,n as d,g as r,e as m,r as p,o as k,d as t}from"./app-U_bew1in.js";const g={},v={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},b={class:"table-of-contents"},y=n("hr",null,null,-1),f=m(`<h2 id="_01-크롤링-기초" tabindex="-1"><a class="header-anchor" href="#_01-크롤링-기초"><span>01. 크롤링 기초</span></a></h2><h3 id="크롤링" tabindex="-1"><a class="header-anchor" href="#크롤링"><span>크롤링</span></a></h3><p>크롤링이란 웹 페이지로부터 데이터를 추출하는 행위를 말합니다. 그래서 크롤링하는 소프트웨어는 크롤러(crawler)라고 부르지요. 크롤링에 대해서 본격적으로 들어가기 전에, 우리가 데이터를 수집할 웹에 대해서 먼저 이해해보겠습니다.</p><p>우리는 인터넷 익스플로러, 크롬 등과 같은 &#39;인터넷 브라우저&#39;를 사용하여 인터넷 세상을 돌아다닙니다. 인터넷 브라우저를 통해서 NAVER, FACEBOOK과 같은 깔끔하고 예쁜 웹 사이트들을 방문할 수 있지요. 그런데 이 웹 사이트들은 실은 HTML이라는 웹 문서로 구성되어져 있습니다.</p><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html"><span>HTML</span></a></h3><p>HTML이란 웹 페이지를 만들기 위한 언어로 웹 브라우저에서 동작하는 언어입니다.</p><ul><li><code>H</code>: HyperText, 문서와 문서가 링크로 연결되어져 있다.</li><li><code>M</code>: Markup, 태그로 이루어져있다.</li><li><code>L</code>: Language</li></ul><p>아래는 간단하게 작성된 HTML 문서의 예제입니다</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span> HTML 문서 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> 이것은 HTML 문서입니다! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTML 문서는 정해진 문법에 의해서 작성되어져 있습니다. 물론, 네이버와 같은 웹 사이트들의 HTML 문서는 위의 간단한 예제보다는 훨씬 복잡한 구조를 가지고 있겠지요? 웹 페이지에서 마우스 우클릭 후에 &#39;소스 보기&#39;를 클릭하면 HTML 문서의 소스 코드를 확인할 수 있습니다.</p><p>http://www.naver.com 으로 이동하여 소스 코드를 확인해봅시다. 아래는 네이버의 HTML 소스 코드 중 일부를 발췌했습니다.</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direct_area<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://news.naver.com/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link_news<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-clk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>newshome<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>네이버뉴스<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://entertain.naver.com/home<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link_direct<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-clk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>entertainment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>연예<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://sports.news.naver.com/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link_direct<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-clk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sports<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>스포츠<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 수많은 꺽쇠들의 조합으로 구성된 것들을 <strong>태그(Tag)</strong> 라고 합니다. 위의 HTML 코드는 여러 개의 중첩된 태그로 구성되어져 있는 셈이죠. <code>&lt;div&gt;</code> 태그, <code>&lt;a&gt;</code> 태그 등과 같이요.</p><h3 id="태그-tag" tabindex="-1"><a class="header-anchor" href="#태그-tag"><span>태그(Tag)</span></a></h3><p>태그란 정보를 정의하는 형식을 말해요. 일반적인 태그의 형식을 봅시다.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;태그명 속성명1=&quot;속성값1&quot; 속성명2=&quot;속성값2&quot;&gt; 콘텐츠 &lt;/태그명&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>태그는 콘텐츠를 감싸서 그 정보의 성격과 의미를 정의합니다.</p><hr><h2 id="_02-beautifulsoup" tabindex="-1"><a class="header-anchor" href="#_02-beautifulsoup"><span>02. BeautifulSoup</span></a></h2><p>간단한 실습을 통해 BeautifulSoup4의 사용법을 익혀봅시다. 설치할 때는 beautifulSoup4라는 이름으로 설치했지만, 임포트할 때는 <code>from bs4</code>라고 적어주셔야 합니다. 설치할 때의 이름과 임포트할 때의 패키지 이름이 항상 동일하지는 않습니다. 이는 BeautifulSoup라는 패키지에서 정한 규칙이니까 따라주세요.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pip <span class="token function">install</span> beautifulSoup4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># bs4라는 패키지로부터 BeautifulSoup라는 모듈을 임포트</span></span>
<span class="line"><span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup</span>
<span class="line"></span>
<span class="line"><span class="token comment"># HTML 문서를 문자열 html로 저장</span></span>
<span class="line">html <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;</span>
<span class="line">&lt;html&gt; </span>
<span class="line">    &lt;head&gt; </span>
<span class="line">    &lt;/head&gt; </span>
<span class="line">    &lt;body&gt; </span>
<span class="line">        &lt;h1&gt; 장바구니</span>
<span class="line">            &lt;p id=&#39;clothes&#39; class=&#39;name&#39; title=&#39;라운드티&#39;&gt; 라운드티</span>
<span class="line">                &lt;span class = &#39;number&#39;&gt; 25 &lt;/span&gt; </span>
<span class="line">                &lt;span class = &#39;price&#39;&gt; 29000 &lt;/span&gt; </span>
<span class="line">                &lt;span class = &#39;menu&#39;&gt; 의류&lt;/span&gt; </span>
<span class="line">                &lt;a href = &#39;http://www.naver.com&#39;&gt; 바로가기 &lt;/a&gt; </span>
<span class="line">            &lt;/p&gt; </span>
<span class="line">            &lt;p id=&#39;watch&#39; class=&#39;name&#39; title=&#39;시계&#39;&gt; 시계</span>
<span class="line">                &lt;span class = &#39;number&#39;&gt; 28 &lt;/span&gt;</span>
<span class="line">                &lt;span class = &#39;price&#39;&gt; 32000 &lt;/span&gt; </span>
<span class="line">                &lt;span class = &#39;menu&#39;&gt; 악세서리 &lt;/span&gt; </span>
<span class="line">                &lt;a href = &#39;http://www.facebook.com&#39;&gt; 바로가기 &lt;/a&gt; </span>
<span class="line">            &lt;/p&gt; </span>
<span class="line">        &lt;/h1&gt; </span>
<span class="line">    &lt;/body&gt; </span>
<span class="line">&lt;/html&gt;</span>
<span class="line">&#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># BeautifulSoup 인스턴스 생성. 두번째 매개변수는 분석할 분석기(parser)의 종류.</span></span>
<span class="line">soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html<span class="token punctuation">,</span> <span class="token string">&#39;html.parser&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>맨 아랫 줄에 있는 코드를 볼까요? <code>BeautifulSoup(입력 문자열, &#39;html.parser&#39;)</code>라는 코드는 이 입력은 HTML 문법으로 작성되어져 있으니 HTML 문법을 기반으로 파싱하라는 의미입니다. 이렇게 인스턴스를 생성하고나면 본격적으로 정보를 가져오는 것은 <code>select()</code>를 가지고 수행합니다.</p><p>인스턴스의 이름은 soup이므로 <code>soup.select()</code>를 통해서 정보를 가져옵니다. <code>select()</code>의 사용 방법은 요약하자면 <code>soup.select(&#39;찾는 정보&#39;)</code>입니다. 구체적인 예시는 다음과 같습니다.</p><ul><li><code>soup.select(&#39;태그명&#39;)</code>: 태그를 입력으로 사용할 경우</li><li><code>soup.select(&#39;.클래스명&#39;)</code>: 클래스를 입력으로 사용할 경우</li><li><code>soup.select(&#39;#아이디&#39;)</code>: ID를 입력으로 사용할 경우</li><li><code>soup.select(&#39;상위태그 하위태그&#39;)</code>: 자손 관계 (띄어쓰기)</li><li><code>soup.select(&#39;상위태그 &gt; 하위태그&#39;)</code>: 자식 관계 ( <code>&gt;</code> )</li></ul><p>실습을 통해 이해해볼까요? 태그명 <code>&lt;body&gt;</code>를 입력으로 내부 정보를 가져와보겠습니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># &lt;body&gt; 태그를 입력</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># [&lt;body&gt;</span></span>
<span class="line"><span class="token comment"># &lt;h1&gt; 장바구니</span></span>
<span class="line"><span class="token comment">#             &lt;p class=&quot;name&quot; id=&quot;clothes&quot; title=&quot;라운드티&quot;&gt; 라운드티</span></span>
<span class="line"><span class="token comment">#                 &lt;span class=&quot;number&quot;&gt; 25 &lt;/span&gt;</span></span>
<span class="line"><span class="token comment"># &lt;span class=&quot;price&quot;&gt; 29000 &lt;/span&gt;</span></span>
<span class="line"><span class="token comment"># &lt;span class=&quot;menu&quot;&gt; 의류&lt;/span&gt;</span></span>
<span class="line"><span class="token comment"># &lt;a href=&quot;http://www.naver.com&quot;&gt; 바로가기 &lt;/a&gt;</span></span>
<span class="line"><span class="token comment"># &lt;/p&gt;</span></span>
<span class="line"><span class="token comment"># &lt;p class=&quot;name&quot; id=&quot;watch&quot; title=&quot;시계&quot;&gt; 시계</span></span>
<span class="line"><span class="token comment">#                 &lt;span class=&quot;number&quot;&gt; 28 &lt;/span&gt;</span></span>
<span class="line"><span class="token comment"># &lt;span class=&quot;price&quot;&gt; 32000 &lt;/span&gt;</span></span>
<span class="line"><span class="token comment"># &lt;span class=&quot;menu&quot;&gt; 악세서리 &lt;/span&gt;</span></span>
<span class="line"><span class="token comment"># &lt;a href=&quot;http://www.facebook.com&quot;&gt; 바로가기 &lt;/a&gt;</span></span>
<span class="line"><span class="token comment"># &lt;/p&gt;</span></span>
<span class="line"><span class="token comment"># &lt;/h1&gt;</span></span>
<span class="line"><span class="token comment"># &lt;/body&gt;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>내부의 정보들을 모두 가져온 것을 확인할 수 있습니다.</p><p>이번에는 자손 관계를 입력으로 하여 <code>class</code>가 <code>menu</code>인 경우만을 출력해보겠습니다. 태그명 <code>h1</code> 자손인 클래스 <code>.name</code>의 자손인 클래스 <code>.menu</code>의 정보를 찾으면?</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;h1 .name .menu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># [&lt;span class=&quot;menu&quot;&gt; 의류&lt;/span&gt;, &lt;span class=&quot;menu&quot;&gt; 악세서리 &lt;/span&gt;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>class</code>가 <code>menu</code>인 부분의 정보를 잘 가져온 것을 확인할 수 있습니다.</p><p>이번에는 의도적으로 잘못된 입력을 넣어볼게요. 태그명 <code>h1</code>은 태그명 html의 자손이기는 하지만, 자식은 아닙니다. 만약, html 자식인 <code>h1</code>의 정보를 가져오라고 하면 어떻게 될까요?</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;html &gt; h1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># []</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>아무런 정보도 출력되지 않습니다.</p><hr><h2 id="_03-pd-read-html-을-통한-테마주-추출" tabindex="-1"><a class="header-anchor" href="#_03-pd-read-html-을-통한-테마주-추출"><span>03. <code>pd.read_html()</code>을 통한 테마주 추출</span></a></h2><p><code>pd.read_html</code>은 웹 페이지로부터 테이블을 추출하여 데이터프레임으로 저장하는 코드입니다.</p><ul><li><code>pd.read_html(&#39;테이블이 존재하는 URL&#39;)</code></li></ul><p>금융 관련 사이트 하나를 선택하여 예시를 들어서 설명해보겠습니다.</p><blockquote><p>링크: http://m.infostock.co.kr/sector/sector.asp?mode=w</p></blockquote><p>예를 들어 위 사이트는 테마와 해당 테마들에 대한 종목을 알려주는 사이트입니다. 해당 사이트에서 &#39;2차 전지 테마주 링크&#39;로 이동하면 다음과 같습니다.</p><blockquote><p>링크: http://m.infostock.co.kr/sector/sector_detail.asp?code=64&amp;theme=2%uCC28%uC804%uC9C0&amp;mode=w</p></blockquote><p>해당 링크에 대해서 <code>pd.read_html()</code>을 수행해볼까요?</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd</span>
<span class="line"></span>
<span class="line">pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span><span class="token string">&#39;http://m.infostock.co.kr/sector/sector_detail.asp?code=64&amp;theme=2%uCC28%uC804%uC9C0&amp;mode=w&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># [    0   1   2     3   4</span></span>
<span class="line"><span class="token comment">#  0 NaN NaN NaN  회원가입 NaN,</span></span>
<span class="line"><span class="token comment">#                         0                                                  1</span></span>
<span class="line"><span class="token comment">#  0                    테마명                                               2차전지</span></span>
<span class="line"><span class="token comment">#  1                   테마개요  2차전지(Secondary battery)란 한 번 쓰고 버리는 배터리가 아닌 재충...</span></span>
<span class="line"><span class="token comment">#  2                테마 히스토리  (2022-07-22) 테슬라, 실적 호조에 따른 주가 급등 영향 등에 상승(주도주...</span></span>
<span class="line"><span class="token comment">#  3                   관련종목                                             테마편입사유</span></span>
<span class="line"><span class="token comment">#  4    - LG에너지솔루션 (373220)  LG그룹 계열의 전지사업 전문 업체. LG화학의 전지사업 부문이 물적분할되어 설립됐...</span></span>
<span class="line"><span class="token comment">#  ..                   ...                                                ...</span></span>
<span class="line"><span class="token comment">#  96         - 엔켐 (348370)  2차전지 및 EDLC용 전해액, 첨가제 제조 및 판매업체. 소형 2차전지용 전해액(...</span></span>
<span class="line"><span class="token comment">#  97      - 엘아이에스 (138690)  22년1월 2차전지 시장 진출을 위해 전기차 배터리팩 회사 티엔디 지분 인수. 티엔...</span></span>
<span class="line"><span class="token comment">#  98     - 세아메카닉스 (396300)  알류미늄 다이캐스팅 전문 업체. LG에너지솔루션과 협력 관계를 맺으며 미래형 전기차...</span></span>
<span class="line"><span class="token comment">#  99      - 이엔플러스 (074610)  21년4월 그래핀과 CNT를 결합한 복합 도전재 개발 성공. 22년5월 그리너지와 ...</span></span>
<span class="line"><span class="token comment">#  100        - 레몬 (294140)  22년6월 고강도, 열 안정성, 박막화의 전기자동차용 고체 전지 전해질 지지체 개발...</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment">#  [101 rows x 2 columns]]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>해당 주소에 있는 테이블들을 가져온 것처럼 보입니다. <code>pd.read_html()</code> 수행 후에는 해당 주소에 있는 테이블들을 모두 수집하여 테이블들의 리스트를 반환하므로 테이블을 몇 개 가져왔는지 확인해야 합니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token builtin">len</span><span class="token punctuation">(</span>pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span><span class="token string">&#39;http://m.infostock.co.kr/sector/sector_detail.asp?code=64&amp;theme=2%uCC28%uC804%uC9C0&amp;mode=w&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2개를 가져왔다고 나옵니다. 첫번째 테이블을 확인해봅시다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span><span class="token string">&#39;http://m.infostock.co.kr/sector/sector_detail.asp?code=64&amp;theme=2%uCC28%uC804%uC9C0&amp;mode=w&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172831/테마주테이블.PNG" alt="테마주테이블" tabindex="0" loading="lazy"><figcaption>테마주테이블</figcaption></figure><p>첫번째 테이블은 별 다른 의미가 없습니다. 두번째 테이블을 출력해봅시다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span><span class="token string">&#39;http://m.infostock.co.kr/sector/sector_detail.asp?code=64&amp;theme=2%uCC28%uC804%uC9C0&amp;mode=w&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172831/테마주테이블2.PNG" alt="테마주테이블2" tabindex="0" loading="lazy"><figcaption>테마주테이블2</figcaption></figure><p>실질적으로 우리가 원하는 테이블에 해당됩니다. 테마주 테이블이 수집되었습니다. 간단한 전처리를 통해서 2차 전지에 대한 테이블. 즉, 깔끔한 데이터프레임을 얻어봅시다. 우선 위 테이블에서 위의 3개의 행은 제거해보겠습니다. 불필요한 테마명, 테마개요, 테마 히스토리에 대한 행을 날리려고 하는 것입니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span><span class="token string">&#39;http://m.infostock.co.kr/sector/sector_detail.asp?code=64&amp;theme=2%uCC28%uC804%uC9C0&amp;mode=w&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">df <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token comment"># 상위 3개의 행 제거</span></span>
<span class="line">df</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172831/테마주테이블3.PNG" alt="테마주테이블3" tabindex="0" loading="lazy"><figcaption>테마주테이블3</figcaption></figure><p>위의 상위 3개의 행이 제거되었습니다. 첫번째 행을 데이터프레임의 열 제목으로 쓰면 좋을 것 같습니다. df.iloc[인덱스]를 통해서 특정 행을 추출 가능합니다. 첫번째 행. 즉, 0번 인덱스를 통해 첫번째 행을 추출해봅시다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">df<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 0      관련종목</span></span>
<span class="line"><span class="token comment"># 1    테마편입사유</span></span>
<span class="line"><span class="token comment"># Name: 3, dtype: object</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이를 파이썬 리스트로 변환해줍니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">df<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>to_list<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># [&#39;관련종목&#39;, &#39;테마편입사유&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>df.columns = 리스트</code>를 사용하면 데이터프레임의 열 이름들을 변경할 수 있습니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">df<span class="token punctuation">.</span>columns <span class="token operator">=</span> df<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>to_list<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">df</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172831/테마주테이블5.PNG" alt="테마주테이블5" tabindex="0" loading="lazy"><figcaption>테마주테이블5</figcaption></figure><p>이제 첫번째 행은 열 제목이 되었으므로 아직 남아있는 첫번째 행은 날립니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">df <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span></span>
<span class="line">df</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172831/테마주테이블5.PNG" alt="테마주테이블5" tabindex="0" loading="lazy"><figcaption>테마주테이블5</figcaption></figure><p>데이터프레임에 앞에 붙은 인덱스가 4부터 시작하고 있습니다. 이는 우리가 앞에서 총 4개의 행을 날렸기 때문인데요. 데이터프레임의 인덱스의 숫자의 순서가 정렬 과정, 또는 일부 행을 삭제하는 과정에서 순서가 뒤죽박죽이 되었다면 인덱스를 처음부터 다시 재할당하는 방법이 있습니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">df <span class="token operator">=</span> df<span class="token punctuation">.</span>reset_index<span class="token punctuation">(</span>drop<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></span>
<span class="line">df</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172831/테마주테이블8.PNG" alt="테마주테이블8" tabindex="0" loading="lazy"><figcaption>테마주테이블8</figcaption></figure><hr>`,69);function _(l,C){const a=p("router-link"),i=p("VPCard");return k(),o("div",null,[n("h1",v,[n("a",h,[n("span",null,u(l.$frontmatter.title)+" 관련",1)])]),n("nav",b,[n("ul",null,[n("li",null,[s(a,{to:"#_01-크롤링-기초"},{default:e(()=>[t("01. 크롤링 기초")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#크롤링"},{default:e(()=>[t("크롤링")]),_:1})]),n("li",null,[s(a,{to:"#html"},{default:e(()=>[t("HTML")]),_:1})]),n("li",null,[s(a,{to:"#태그-tag"},{default:e(()=>[t("태그(Tag)")]),_:1})])])]),n("li",null,[s(a,{to:"#_02-beautifulsoup"},{default:e(()=>[t("02. BeautifulSoup")]),_:1})]),n("li",null,[s(a,{to:"#_03-pd-read-html-을-통한-테마주-추출"},{default:e(()=>[t("03. pd.read_html()을 통한 테마주 추출")]),_:1})])])]),y,s(i,d(r({title:"05. 웹 스크래핑 기초 익히기",desc:"금융 데이터 분석을 위한 파이썬 - WikiDocs",link:"https://wikidocs.net/172734",logo:"https://wikidocs.net/static/img/favicon.ico",background:"rgba(255,255,255,0.2)"})),null,16),f])}const B=c(g,[["render",_],["__file","05.html.vue"]]),E=JSON.parse('{"path":"/py/finance/05.html","title":"05. 웹 스크래핑 기초 익히기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"05. 웹 스크래핑 기초 익히기","description":"Finance with Python > 05. 웹 스크래핑 기초 익히기","category":["Python"],"tag":["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],"head":[[{"meta":null},{"property":"og:title","content":"Finance with Python > 05. 웹 스크래핑 기초 익히기"},{"property":"og:description","content":"05. 웹 스크래핑 기초 익히기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/py/finance/05.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/py/finance/05.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"05. 웹 스크래핑 기초 익히기"}],["meta",{"property":"og:description","content":"Finance with Python > 05. 웹 스크래핑 기초 익히기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wikidocs.net/images/page/172831/%ED%85%8C%EB%A7%88%EC%A3%BC%ED%85%8C%EC%9D%B4%EB%B8%94.PNG"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"py"}],["meta",{"property":"article:tag","content":"google"}],["meta",{"property":"article:tag","content":"google-colab"}],["meta",{"property":"article:tag","content":"jupyter-notebook"}],["meta",{"property":"article:tag","content":"numpy"}],["meta",{"property":"article:tag","content":"pandas"}],["meta",{"property":"article:tag","content":"ipython"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05. 웹 스크래핑 기초 익히기\\",\\"image\\":[\\"https://wikidocs.net/images/page/172831/%ED%85%8C%EB%A7%88%EC%A3%BC%ED%85%8C%EC%9D%B4%EB%B8%94.PNG\\",\\"https://wikidocs.net/images/page/172831/%ED%85%8C%EB%A7%88%EC%A3%BC%ED%85%8C%EC%9D%B4%EB%B8%942.PNG\\",\\"https://wikidocs.net/images/page/172831/%ED%85%8C%EB%A7%88%EC%A3%BC%ED%85%8C%EC%9D%B4%EB%B8%943.PNG\\",\\"https://wikidocs.net/images/page/172831/%ED%85%8C%EB%A7%88%EC%A3%BC%ED%85%8C%EC%9D%B4%EB%B8%945.PNG\\",\\"https://wikidocs.net/images/page/172831/%ED%85%8C%EB%A7%88%EC%A3%BC%ED%85%8C%EC%9D%B4%EB%B8%945.PNG\\",\\"https://wikidocs.net/images/page/172831/%ED%85%8C%EB%A7%88%EC%A3%BC%ED%85%8C%EC%9D%B4%EB%B8%948.PNG\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"01. 크롤링 기초","slug":"_01-크롤링-기초","link":"#_01-크롤링-기초","children":[{"level":3,"title":"크롤링","slug":"크롤링","link":"#크롤링","children":[]},{"level":3,"title":"HTML","slug":"html","link":"#html","children":[]},{"level":3,"title":"태그(Tag)","slug":"태그-tag","link":"#태그-tag","children":[]}]},{"level":2,"title":"02. BeautifulSoup","slug":"_02-beautifulsoup","link":"#_02-beautifulsoup","children":[]},{"level":2,"title":"03. pd.read_html()을 통한 테마주 추출","slug":"_03-pd-read-html-을-통한-테마주-추출","link":"#_03-pd-read-html-을-통한-테마주-추출","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.49,"words":746},"filePathRelative":"py/finance/05.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{B as comp,E as data};
