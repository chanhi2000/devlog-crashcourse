import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,a as n,t as u,b as s,w as t,n as r,g as d,e as k,r as p,o as m,d as e}from"./app-U_bew1in.js";const g={},h={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},b={class:"table-of-contents"},y=n("hr",null,null,-1),f=k(`<h2 id="_01-종목의-가격-데이터-크롤링" tabindex="-1"><a class="header-anchor" href="#_01-종목의-가격-데이터-크롤링"><span>01. 종목의 가격 데이터 크롤링</span></a></h2><h3 id="셀트리온-종가-크롤링" tabindex="-1"><a class="header-anchor" href="#셀트리온-종가-크롤링"><span>셀트리온 종가 크롤링</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd</span>
<span class="line"><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt</span>
<span class="line"><span class="token keyword">import</span> requests</span>
<span class="line"><span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime</span>
<span class="line"><span class="token keyword">from</span> matplotlib <span class="token keyword">import</span> dates <span class="token keyword">as</span> mdates</span>
<span class="line"><span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup <span class="token keyword">as</span> bs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래의 주소로부터 크롤링을 해봅시다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://finance.naver.com/item/sise_day.nhn?code=068270&amp;page=1&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172789/셀트리온종가.PNG" alt="셀트리온증가" tabindex="0" loading="lazy"><figcaption>셀트리온증가</figcaption></figure><p>해당 주소로 접속해보면 셀트리온의 일별 종가, 전일비, 시가, 고가, 저가, 거래량이 업데이트 되고 있는 사이트입니다. 네이버 금융 사이트에서 셀트리온을 검색 후 접속하여 얻은 주소라고 보시면 됩니다.</p><p>requests라는 패키지에 있는 get이라는 모듈(함수)에 url을 입력으로 하고, 이를 변수에 저장한 후에 변수.text를 하면 해당 URL의 HTML 코드를 받아올 수 있습니다. HTML 코드를 받아오는 방법은 아래와 같습니다.</p><ul><li><code>response = requests.get(url)</code></li><li><code>response.text</code></li></ul><p>HTML 코드를 받아오는 파이썬 코드를 실행하기 전에 앞서 headers라는 개념이 필요합니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36&#39;</span><span class="token punctuation">}</span></span>
<span class="line">response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><a href="https://hogni.tistory.com/64" target="_blank" rel="noopener noreferrer">headers에 대한 설명</a></p></blockquote><p>위의 링크에서 설명하고 있듯이, 유저 에이전트를 인자로 넣어서 get 함수를 사용하면 크롤링 방지 차단을 뚫고 크롤링을 할 수 있습니다. 위의 headers값은 강사의 브라우저에서 추출한 값으로 여러분들은 여러분들의 에이전트 정보를 추출해서 사용하셔도 됩니다! 이제 <code>response.text</code>를 출력해볼까요?</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">response<span class="token punctuation">.</span>text</span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># \\n&lt;html lang=&quot;ko&quot;&gt;\\n&lt;head&gt;\\n&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=euc-kr&quot;&gt;\\n&lt;title&gt;네이버 금융&lt;/title&gt;\\n\\n&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://ssl.pstatic.net/imgstock/static.pc/20220819210825/css/newstock.css&quot;&gt;\\n&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://ssl.pstatic.net/imgstock/static.pc/20220819210825/css/common.css&quot;&gt;\\n&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://ssl.pstatic.net/imgstock/static.pc/20220819210825/css/layout.css&quot;&gt;\\n&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://ssl.pstatic.net/imgstock/static.pc/20220819210825/css/main.css&quot;&gt;\\n&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://ssl.pstatic.net/imgstock/static.pc/20220819210825/css/newstock2.css&quot;&gt;\\n&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://ssl.pstatic.net/imgstock/static.pc/20220819210825/css/newstock3.css&quot;&gt;\\n&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://ssl.pstatic.net/imgstock/static.pc/20220819210825/css/world.css&quot;&gt;\\n&lt;/head&gt;\\n&lt;body&gt;\\n&lt;script ... 중략 ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BeautifulSoup4를 통해서 해당 HTML 코드를 파싱합니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">html <span class="token operator">=</span> bs<span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">&#39;html.parser&#39;</span><span class="token punctuation">)</span></span>
<span class="line">html_table <span class="token operator">=</span> html<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;table&quot;</span><span class="token punctuation">)</span></span>
<span class="line">table <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>html_table<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;파싱된 테이블의 개수 :&#39;</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 파싱된 테이블의 개수 : 2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>첫번째 테이블을 출력해봅시다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">table<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172789/첫번째테이블.PNG" alt="첫번째테이블" tabindex="0" loading="lazy"><figcaption>첫번째테이블</figcaption></figure><ul><li><strong>불러온 결과가 저와 달라도 상관없습니다. 저는 이 실습을 2022년 8월 29일에 하였기때문에 8월 29일까지의 주가가 있는 것이고, 여러분들이 실습을 할 때는 또 그때 기준의 주가 데이터를 불러올 것입니다.</strong></li></ul><p>셀트리온의 일별 종가, 전일비, 시가, 고가, 저가, 거래량이 있는 테이블입니다. 다만, 중간에 결측값들이 존재합니다. 두번째 테이블을 출력해봅시다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">table<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172789/두번째테이블.PNG" alt="두번째테이블" tabindex="0" loading="lazy"><figcaption>두번째테이블</figcaption></figure><p>두번째 테이블은 우리가 원하는 테이블이 아닙니다. 첫번째 테이블만을 사용한다고 가정해봅시다. 그런데 첫번째 테이블은 앞서 확인했을 때 결측값이 있었으므로 결측값을 제거하여 출력해봅시다. 단순히 결측값을 제거하는 것은 <code>dropna()</code>를 통해서 가능합니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">table<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>dropna<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172789/첫번째테이블2.PNG" alt="첫번째테이블2" tabindex="0" loading="lazy"><figcaption>첫번째테이블2</figcaption></figure><p>앞서 진행했던 일련의 과정들을 1페이지부터 99페이지까지 반복해봅시다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">df <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">sise_url <span class="token operator">=</span> <span class="token string">&#39;https://finance.naver.com/item/sise_day.nhn?code=068270&#39;</span>  </span>
<span class="line"><span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    page_url <span class="token operator">=</span> <span class="token string">&#39;{}&amp;page={}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>sise_url<span class="token punctuation">,</span> page<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>page_url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 위에서 했던 일련의 과정들을 각 url에 대해서 (99페이지에 대해서 반복)</span></span>
<span class="line">    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>page_url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line">    html <span class="token operator">=</span> bs<span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">&#39;html.parser&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    html_table <span class="token operator">=</span> html<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;table&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    table <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>html_table<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 현재 얻은 데이터프레임을 기존 데이터프레임에 누적.</span></span>
<span class="line">    df <span class="token operator">=</span> df<span class="token punctuation">.</span>append<span class="token punctuation">(</span>table<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>dropna<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>크롤링이 끝났다면 데이터프레임을 출력해봅시다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">df</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172789/데이터프레임.PNG" alt="데이터프레임" tabindex="0" loading="lazy"><figcaption>데이터프레임</figcaption></figure><p>최근 데이터 30행만 사용하겠습니다. 네이버 금융의 데이터가 내림차순으로 되어져 있으므로 오름차순으로 변경합니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">df <span class="token operator">=</span> df<span class="token punctuation">.</span>dropna<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">df <span class="token operator">=</span> df<span class="token punctuation">.</span>iloc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">30</span><span class="token punctuation">]</span> </span>
<span class="line">df <span class="token operator">=</span> df<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span>by<span class="token operator">=</span><span class="token string">&#39;날짜&#39;</span><span class="token punctuation">)</span></span>
<span class="line">df</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172789/셀트리온테이블.PNG" alt="셀트리온테이블" tabindex="0" loading="lazy"><figcaption>셀트리온테이블</figcaption></figure><p>셀트리온의 종가를 시각화해봅시다. x축 레이블의 날짜가 겹쳐서 보기어려우므로 90도 회전하여 표시했습니다. x축은 날짜 데이터로 y축은 종가 데이터로 출력합니다. co는 좌표를 청록색(<code>cyan</code>) 원으로, -는 각 좌표를 실선으로 연결해서 표시합니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> </span>
<span class="line">plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;Celltrion (close)&#39;</span><span class="token punctuation">)</span></span>
<span class="line">plt<span class="token punctuation">.</span>xticks<span class="token punctuation">(</span>rotation<span class="token operator">=</span><span class="token number">45</span><span class="token punctuation">)</span> </span>
<span class="line">plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;날짜&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> df<span class="token punctuation">[</span><span class="token string">&#39;종가&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;co-&#39;</span><span class="token punctuation">)</span></span>
<span class="line">plt<span class="token punctuation">.</span>grid<span class="token punctuation">(</span>color<span class="token operator">=</span><span class="token string">&#39;gray&#39;</span><span class="token punctuation">,</span> linestyle<span class="token operator">=</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">)</span></span>
<span class="line">plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://wikidocs.net/images/page/172789/셀트리온종가시각화.PNG" alt="셀트리온증가시각화" tabindex="0" loading="lazy"><figcaption>셀트리온증가시각화</figcaption></figure><hr><h2 id="_02-캔들차트-시각화" tabindex="-1"><a class="header-anchor" href="#_02-캔들차트-시각화"><span>02. 캔들차트 시각화</span></a></h2><p>이번 실습은 이전 실습에서 이어서 진행한다고 가정합니다.</p><p><a href="https://m.blog.naver.com/freeism_7/221866826086" target="_blank" rel="noopener noreferrer">캔들 차트에 대한 기본적인 지식</a></p><p>캔들 차트를 그리는 패키지는 구버전과 신버전이 있습니다.</p><p>패키지명이 비슷한데, 패키지명 중간에 하이픈(<code>-</code>)이나 언더스코어(<code>_</code>)가 있으면 예전 패키지이고, 중간에 아무 문자도 없는 것이 새로운 패키지입니다. 구버전, 새로운 신버전 두 가지 모두를 소개하겠습니다. 가급적이면 신버전 사용을 권합니다.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 구버전 설치</span></span>
<span class="line">!pip install <span class="token operator">-</span><span class="token operator">-</span>upgrade mpl_finance  </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 신버전 설치</span></span>
<span class="line">!pip install <span class="token operator">-</span><span class="token operator">-</span>upgrade mplfinance</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="구버전-캔들차트" tabindex="-1"><a class="header-anchor" href="#구버전-캔들차트"><span>구버전 캔들차트</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> mpl_finance <span class="token keyword">import</span> candlestick_ohlc</span>
<span class="line"></span>
<span class="line">df <span class="token operator">=</span> df<span class="token punctuation">.</span>sort_values<span class="token punctuation">(</span>by<span class="token operator">=</span><span class="token string">&#39;날짜&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> idx <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>df<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 날짜열을 datetime 형으로 변환.</span></span>
<span class="line">    dt <span class="token operator">=</span> datetime<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;날짜&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>values<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;%Y.%m.%d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>date<span class="token punctuation">(</span><span class="token punctuation">)</span> </span>
<span class="line">    <span class="token comment"># datetime 형을 float 형으로 변환</span></span>
<span class="line">    df<span class="token punctuation">[</span><span class="token string">&#39;날짜&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>values<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> mdates<span class="token punctuation">.</span>date2num<span class="token punctuation">(</span>dt<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># candlestick_ohlc()에서 요구하는 형식으로 변경</span></span>
<span class="line">ohlc <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;날짜&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;시가&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;고가&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;저가&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;종가&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplot<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>    </span>
<span class="line">plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;Celltrion (mpl_finance candle stick)&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># candlestick_ohlc 함수를 이용하여 캔들차트를 그린다.</span></span>
<span class="line">candlestick_ohlc<span class="token punctuation">(</span>ax<span class="token punctuation">,</span> ohlc<span class="token punctuation">.</span>values<span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">0.7</span><span class="token punctuation">,</span> colorup<span class="token operator">=</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> colordown<span class="token operator">=</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># x축의 레이블이 숫자. %Y-%m-%d 형식 문자열로 변환하여 표시</span></span>
<span class="line">ax<span class="token punctuation">.</span>xaxis<span class="token punctuation">.</span>set_major_formatter<span class="token punctuation">(</span>mdates<span class="token punctuation">.</span>DateFormatter<span class="token punctuation">(</span><span class="token string">&#39;%Y-%m-%d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">plt<span class="token punctuation">.</span>xticks<span class="token punctuation">(</span>rotation<span class="token operator">=</span><span class="token number">45</span><span class="token punctuation">)</span></span>
<span class="line">plt<span class="token punctuation">.</span>grid<span class="token punctuation">(</span>color<span class="token operator">=</span><span class="token string">&#39;gray&#39;</span><span class="token punctuation">,</span> linestyle<span class="token operator">=</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">)</span></span>
<span class="line">plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>캔들 차트를 통해 주가 일자별로의 주가 변동폭을 확인할 수 있습니다. 캔들 차트를 위해서 사용하는 <code>candlestick_ohlc()</code>를 호출할 때는 두번째 인자에 OHLC 데이터를 넣어주어야 합니다.</p><hr>`,48);function _(l,q){const a=p("router-link"),i=p("VPCard");return m(),c("div",null,[n("h1",h,[n("a",v,[n("span",null,u(l.$frontmatter.title)+" 관련",1)])]),n("nav",b,[n("ul",null,[n("li",null,[s(a,{to:"#_01-종목의-가격-데이터-크롤링"},{default:t(()=>[e("01. 종목의 가격 데이터 크롤링")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#셀트리온-종가-크롤링"},{default:t(()=>[e("셀트리온 종가 크롤링")]),_:1})])])]),n("li",null,[s(a,{to:"#_02-캔들차트-시각화"},{default:t(()=>[e("02. 캔들차트 시각화")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#구버전-캔들차트"},{default:t(()=>[e("구버전 캔들차트")]),_:1})])])])])]),y,s(i,r(d({title:"06. 웹 스크래핑 실습 - 종목의 캔들차트",desc:"금융 데이터 분석을 위한 파이썬 - WikiDocs",link:"https://wikidocs.net/172829",logo:"https://wikidocs.net/static/img/favicon.ico",background:"rgba(255,255,255,0.2)"})),null,16),f])}const w=o(g,[["render",_],["__file","06.html.vue"]]),B=JSON.parse('{"path":"/py/finance/06.html","title":"06. 웹 스크래핑 실습 - 종목의 캔들차트","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"06. 웹 스크래핑 실습 - 종목의 캔들차트","description":"Finance with Python > 06. 웹 스크래핑 실습 - 종목의 캔들차트","category":["Python"],"tag":["crashcourse","python","py","google","google-colab","jupyter-notebook","numpy","pandas","ipython"],"head":[[{"meta":null},{"property":"og:title","content":"Finance with Python > 06. 웹 스크래핑 실습 - 종목의 캔들차트"},{"property":"og:description","content":"06. 웹 스크래핑 실습 - 종목의 캔들차트"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/py/finance/06.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/py/finance/06.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"06. 웹 스크래핑 실습 - 종목의 캔들차트"}],["meta",{"property":"og:description","content":"Finance with Python > 06. 웹 스크래핑 실습 - 종목의 캔들차트"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wikidocs.net/images/page/172789/%EC%85%80%ED%8A%B8%EB%A6%AC%EC%98%A8%EC%A2%85%EA%B0%80.PNG"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"py"}],["meta",{"property":"article:tag","content":"google"}],["meta",{"property":"article:tag","content":"google-colab"}],["meta",{"property":"article:tag","content":"jupyter-notebook"}],["meta",{"property":"article:tag","content":"numpy"}],["meta",{"property":"article:tag","content":"pandas"}],["meta",{"property":"article:tag","content":"ipython"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06. 웹 스크래핑 실습 - 종목의 캔들차트\\",\\"image\\":[\\"https://wikidocs.net/images/page/172789/%EC%85%80%ED%8A%B8%EB%A6%AC%EC%98%A8%EC%A2%85%EA%B0%80.PNG\\",\\"https://wikidocs.net/images/page/172789/%EC%B2%AB%EB%B2%88%EC%A7%B8%ED%85%8C%EC%9D%B4%EB%B8%94.PNG\\",\\"https://wikidocs.net/images/page/172789/%EB%91%90%EB%B2%88%EC%A7%B8%ED%85%8C%EC%9D%B4%EB%B8%94.PNG\\",\\"https://wikidocs.net/images/page/172789/%EC%B2%AB%EB%B2%88%EC%A7%B8%ED%85%8C%EC%9D%B4%EB%B8%942.PNG\\",\\"https://wikidocs.net/images/page/172789/%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%94%84%EB%A0%88%EC%9E%84.PNG\\",\\"https://wikidocs.net/images/page/172789/%EC%85%80%ED%8A%B8%EB%A6%AC%EC%98%A8%ED%85%8C%EC%9D%B4%EB%B8%94.PNG\\",\\"https://wikidocs.net/images/page/172789/%EC%85%80%ED%8A%B8%EB%A6%AC%EC%98%A8%EC%A2%85%EA%B0%80%EC%8B%9C%EA%B0%81%ED%99%94.PNG\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"01. 종목의 가격 데이터 크롤링","slug":"_01-종목의-가격-데이터-크롤링","link":"#_01-종목의-가격-데이터-크롤링","children":[{"level":3,"title":"셀트리온 종가 크롤링","slug":"셀트리온-종가-크롤링","link":"#셀트리온-종가-크롤링","children":[]}]},{"level":2,"title":"02. 캔들차트 시각화","slug":"_02-캔들차트-시각화","link":"#_02-캔들차트-시각화","children":[{"level":3,"title":"구버전 캔들차트","slug":"구버전-캔들차트","link":"#구버전-캔들차트","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.13,"words":638},"filePathRelative":"py/finance/06.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{w as comp,B as data};
