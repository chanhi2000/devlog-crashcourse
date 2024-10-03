import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as n,t as d,b as s,n as u,g as k,w as e,e as m,r as t,o as v,d as o}from"./app-U_bew1in.js";const b={},h={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"},y=n("hr",null,null,-1),w=m(`<h2 id="avoid-finalizers-and-cleaners" tabindex="-1"><a class="header-anchor" href="#avoid-finalizers-and-cleaners"><span>Avoid finalizers and cleaners</span></a></h2><p>종료자(<code>finalizer</code>) 사용은 예측할 수 없고 종종 위험하고 일반적으로 필요없다. 종료자를 사용하면 시스템 오류, 성능 문제, 이식성 문제가 발생할 수 있다.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>As of Java 9, finalizers have been deprecated, but they are still being used by the Java libraries. The Java 9 replacement for finalizers is cleansers. Cleaners are less dangerous than finalizers, but still unpredictable, slow, and generally unnecessary.</p><blockquote><p>자바 9부터 finalizers는 deprecated됐지만, 여전히 자바 라이브러리들이 사용중이다. 자바 9에서는 finalizers 대신 cleaners로 대체됐다. cleaners는 finalizers보다는 덜 위험하지만, 여전히 예측할 수 없고 느리고 일반적으로 불필요하다.</p></blockquote></div><p>C++에서 소멸자는 객체에 배정된 자원을 반환하는 일반적인 수단이며, 생성자와 쌍으로 존재해야 한다. 하지만 자바에서는 GC가 알아서 반환하므로 프로그래머가 특별히 할 일이 없다. C++에서 소멸자는 메모리 이외의 자원을 반환하는 데도 사용되는데, 자바에서는 보통 try-with-resources 나 try-finally 블록이 그런 용도로 사용된다.</p><p>종료자의 한 가지 단점은, 즉시 실행되리라는 보장이 전혀 없다는 것이다. 어떤 객체에 대한 모든 참조가 사라지고 나서 종료자가 실행되기까지는 긴 시간이 걸릴 수도 있다. 따라서 긴급한(time-critical) 작업을 종료자 안에서 처리하면 안 된다. 예를 들어 종료자 안에서 파일을 닫도록 하면 치명적이다. 파일 기술자(file descriptor)는 유한한 자원이기 때문이다. JVM은 종료자를 천천히 실행하므로 열린 상태의 파일이 많이 남아 있을 수 있다. 그런 상황에서 새로운 파일을 열려고 하면, 한 번에 열 수 있는 파일의 개수에 제한이 있으므로 오류가 나게 된다.</p><p>그리고 finalizers 와 cleaners 실행 시점은 GC 알고리즘 구현에 따라 다양하다. 그래서 JVM에 따라 동작이 달라질 수 있기 때문에 이식성 문제가 발생할 수 있다. 또한 자바 언어 명세서에는 어떤 스레드가 종료자를 실행해야 하는지 아무 언급도 없으므로 이식성(portability)을 보장하면서 이 문제를 해결할 방법은 없다. 종료자 사용을 피하는 것만이 유일한 길이다.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>There is no portable way to prevent this sort of problem other than to refrain from using finalizers. Cleaners are a bit better than finalizers in this regard because class authors have control over their own cleaner threads, but cleaners still run in the background, under the control of the garbage collector, so there can be no guarantee of prompt cleaning.</p><blockquote><p>자바 명세에서는 어느 스레드가 finalizers를 실행시키는걸 보장하지 않았다. 그래서 finalizers를 안쓰는 것 말고 portable하게 할 수 없다.Cleaners는 조금 나은데 class authors가 자신의 cleaner 스레드를 제어할 수 있기 때문이다. 하지만 cleaners는 여전히 백그라운드에서 gc 제어로 돌기 때문에 즉시 실행의 보장이 없다.</p></blockquote></div><p>자바 명세는 종료자가 즉시 샐행되어야 한다는 문구도 없지만, 종료자가 결국에는 반드시 실행되어야 한다는 문구도 없다. 따라서 종료자가 실행되지 않은 객체가 남은 상태로 프로그램이 끝나게 되는 일도 충분히 가능하다. 그러므로 지속성이 보장되어야 하는 중요 상태 정보(critical persistent state)는 종료자로 갱신하면 안된다.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>As a consequence, you should never depend on a finalizer or cleaner to update persistent state. for example, depending on a finalizer or cleaner to release a persistent lock on a shared resource such as a database is a good way to bring your entire distributed system to a grinding halt.</p><blockquote><p>persistent state update는 finalizer 나 cleaner에 의존해서는 안된다. 분산시스템 전체를 먹통으로 만드는 가장 좋은 방법은, db같은 공유 자원에 대한 persistent lock을 종료자가 반환하게 구현하는 것이다.</p></blockquote></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@Override</span></span>
<span class="line"><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 여기서 persistent lock을 반환하게 구현</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>System.gc</code>나 <code>System.runFinalization</code> 같은 메서드에 마음이 흔들리면 곤란하다. 이런 메서드들은 종료자가 실행될 가능성을 높여주긴 하지만 보장하진 않는다. 종료자 실행을 보장하는 메서드들은 <code>System.runFinalizersOnExit</code>와 <code>Runtime.runFinalizersOnExit</code> 뿐인데, 이들 메서드는 심각한 결함을 갖고 있어서 이미 명세에서 폐기되었다.</p><p>또다른 문제는 종료 처리 도중에 무점검 예외가 던져지면, 해당 예외는 무시되며 종료 과정은 중단된다. 이런 예외는 객체의 상태를 망가뜨릴 수 있다. 일반적으로는 무점검 예외가 발생하면 스레드는 종료되고 스택 추적 정보가 표시되지만 종료자 안에서는 아니다. 경고 문구조차 출력되지 않는다.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@Override</span></span>
<span class="line"><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BongException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>Cleaners do not have this problem because a library using a cleaner has control over its thread.</p><blockquote><p>Cleaners는 이 문제를 갖고 있지 않은데 cleaner를 사용하는 라이브러리가 그 스레드를 제어하기 때문이다.</p></blockquote></div><p>그리고 종료자를 사용하면 성능이 심각하게 떨어진다. 필자의 컴퓨터에서 일반 AutoCloseable 객체를 만들고 try-with-resources를 이용해 close 시킬 때는 GC에 반환하는데 12ns가 걸렸다. finalizer를 사용하면 550ns로 증가했다. 왜냐하면 종료자가 GC 효율성을 억제시키기 때문이다.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>Cleaners are comparable in speed to finalizers if you use them to clean all instances of the class (about 500 ns per instance on my machine), but cleaners are much faster if you use them only as a safety net, as discussed below. Under these circumstances, creating, cleaning, and destroying an object takes about 66 ns on my machine, which means you pay a factor of five (not fifty) for the insurance of a safety net if you don&#39;t use it.</p><blockquote><p>Cleaners는 모든 클래스 인스턴스를 clean한다고 했을 땐 약 500ns로 finalizer와 속도가 비슷하다. 하지만 안전망에서만 사용한다면 66ns로 훨씬 빨라진다.</p></blockquote></div><div class="hint-container info"><p class="hint-container-title">Info</p><p>Finalizers have a serious security problem: they open your class up to finalizer attacks.</p><p><a href="https://yangbongsoo.gitbooks.io/study/content/finalizer-attack.html" target="_blank" rel="noopener noreferrer">Finalizer Attact에 대한 설명</a></p><p>이 책에서는 finalizer attack에 대한 설명이 자세하지 않아서 위에 따로 자세히 설명함.</p></div><h3 id="_2rd-edition-내용" tabindex="-1"><a class="header-anchor" href="#_2rd-edition-내용"><span>(2rd edition 내용)</span></a></h3><p>그렇다면 파일이나 스레드처럼 명시적으로 반환하거나 삭제해야 하는 자원을 포함하는 객체의 클래스는 어떻게 작성해야 하는 것일까?</p><p>그냥 명시적인 종료 메서드(termination method)를 하나 정의하고, 더 이상 필요하지 않는 객체라면 클라이언트가 해당 메서드를 호출하도록 하라. 한 가지 명심할 것은 종료 여부를 객체 안에 보관해야 한다는것. 즉, 유효하지 않은 객체임을 표시하는 <code>private</code> 필드를 하나 두고, 모든 메서드 맨 앞에 해당 필드를 검사하는 코드를 두어 이미 종료된 객체에 메서드를 호출하면 <code>IllegalStateException</code>이 던져지도록 해야 한다는 것이다. 이런 명시적 종료 메서드의 예로는 <code>OutputStream</code>이나 <code>InputStream</code>, <code>java.sql.Connection</code>에 정의된 close 메서드가 있다.</p><p>이런 명시적 종료 메서드는 보통 <code>try</code>-<code>finally</code> 문과 함께 쓰인다. 객체 종료를 보장하기 위해서다. 명시적 종료 메서드를 <code>finally</code> 문 안에서 호출하도록 해 놓으면 객체 사용 과정에서 예외가 던져져도 종료 메서드가 실행되도록 만들 수 있다.</p><p>종료자가 적합한 곳이 두 군데 정도 있는데 하나는, 명시적 종료 메서드 호출(<code>close</code>)을 잊은 경우에 대비하는 안전망으로서의 역할이다. 하지만 종료자는 그런 자원을 발견하게 될 경우 반드시 경고 메시지를 로그로 남겨야 한다.</p><p>명시적 종료 메서드 패턴을 따르는 예로 들었던 네 가지 클래스들(<code>FileInputStream</code>, <code>FileOutputStream</code>, <code>Timer</code>, <code>Connection</code>)은 종료 메서드가 호출되지 않을 경우에 대비하여 종료자 안전망을 갖추고 있다. 불행히도 이들 종료자는 경고 로그를 남기지 않는다. API가 공개된 다음에는 그런 기능을 추가하는 것이 일반적으로 불가능한데, 이미 작성된 클라이언트 코드를 깨뜨리게 될 것이기 때문이다.</p><p>두 번째 경우는 네이티브 피어(native peer)와 연결된 객체를 다룰 때다. 네이티브 피어는 일반 자바 객체가 네이티브 메서드를 통해 기능 수행을 위임하는 네이티브 객체를 말한다. 네이티브 피어는 일반 객체가 아니므로 gc가 알 수 없을 뿐더러 자바 측 피어 객체(java peer)가 반환될 때 같이 반환할 수도 없다. 네이티브 피어가 중요한 자원을 점유하고 있지 않다고 가정한다면, 종료자는 그런 객체의 반환에 걸맞다. 네이티브 피어가 즉시 종료되어야 하는 자원을 포함하는 경우에는, 앞서 설명한 대로 명시적인 종료 메서드를 클래스에 추가해야 한다.</p><p>위와 같이 종료자를 사용해야 하는 드문 상황에 처했다면 super.finalize 호출은 잊지 말자. &quot;종료자 연결(finalizer chaining)&quot;이 자동으로 이루어지지 않는다. 만일 (<code>Object</code>가 아닌) 어떤 클래스가 종료자를 갖고 있고 하위 클래스가 해당 메서드를 재정의하는 경우, 하위 클래스의 종료자는 상위 클래스의 종료자를 명시적으로 호출해야 한다. 이때 하위 클래스의 상태는 try 블록 안에서 종료시켜야 하고, 상위 클래스 종료자는 finally 블록 안에서 호출해야 한다. 그래야 하위 클래스의 종료 과정에서 예외가 발생해도 상위 클래스 종료자는 반드시 호출되도록 할 수 있다.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token comment">// 수동 종료자 연결</span></span>
<span class="line"><span class="token annotation punctuation">@Override</span></span>
<span class="line"><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">// 하위 클래스의 상태를 종료함</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하위 클래스에서 상위 클래스 종료자를 재정의하면서 상위 클래스 종료자 호출을 잊으면, 상위 클래스 종료자는 절대로 호출되지 않는다. 이런 멍청한 하위 클래스 덕에 생기는 문제를 방지하는 한 가지 방법은, 종료되어야 하는 모든 객체마다 여벌의 객체를 하나 더 만드는 것이다. 종료되어야 하는 객체의 클래스 안에 종료자를 정의하는 대신, 익명 클래스안에 종료자를 정의하는 것이다. 이 익명 클래스의 목적은 해당 클래스의 객체를 포함하는 객체를 종료시키는 것이다. 이 익명 클래스로 만든 객체는 종료 보호자라고 부르는데, 종료되어야 하는 객체 안에 하나씩 넣는다. 종료 보호자의 바깥 객체에는 종료 보호자를 참조하는 private 필드가 있다. 따라서 바깥 객체에 대한 모든 참조가 사라지는 순간, 종료 보호자의 종료자도 실행 가능한 상태가 된다. 이 보호자 객체의 종료자는 필요한 종료 작업을, 마치 바깥 객체의 종료자인 것처럼 수행한다.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token comment">// 종료 보호자 숙어</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 이 객체는 바깥 객체(Foo 객체)를 종료시키는 역할만 한다.</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> finalizerGuardian <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token annotation punctuation">@Override</span></span>
<span class="line">  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">// 바깥 Foo 객체를 종료시킴</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">// 이하 생략</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>public</code> 클래스 <code>Foo</code>에는 종료자가 없다는 것에 유의하자(<code>Object</code>에서 계승된, 무시해도 좋은 finalize 메서드 말곤 없다). 따라서 하위 클래스의 종료자가 상위 클래스의 종료자를 호출하건 말건 상관 없다. 이 기법은 종료자가 있는 비-final 클래스를 구현할 때 반드시 고려해야 한다.</p><h3 id="_3rd-edition-내용" tabindex="-1"><a class="header-anchor" href="#_3rd-edition-내용"><span>3rd edition 내용</span></a></h3><p>그렇다면 파일이나 스레드처럼 삭제해야 하는 자원을 포함하는 객체의 클래스는 어떻게 작성해야 하는 것일까? 클래스에 <code>AutoCloseable</code> 인터페이스를 구현해서 더 이상 필요없을 때 close() 메서드를 호출해라 (try-with-resources를 사용하면 exception 발생에도 종료가 보장된다).</p><p>언급할 가치가 있는 한가지 세부 사항은 인스턴스가 닫혀 있는지 여부를 추적해야한다는 것이다. <code>close</code> 메서드는 개체가 더 이상 유효하지 않은 필드를 기록해야 하며 다른 메서드는 이 필드를 검사하여 이미 종료된 객체에 메서드를 호출하면 <code>IllegalStateException</code>을 발생시켜야 한다.</p><p>종료자가 적합한 곳이 두 군데 정도 있는데 하나는 close 메서드 호출을 잊은 경우에 대비하는 안전망으로서의 역할이다. <code>cleaner</code>나 <code>finalizer</code>가 즉시 또는 전부 실행된다는 보장은 없지만, <code>close</code> 메서드를 잊었을 때 아무것도 안하는 것보다는(늦어지더라도) 있는게 낫다. <code>FileInputStream</code>, <code>FileOutputStream</code>, <code>ThreadPoolExecutor</code>, <code>java.sql.Connection</code> 자바 라이브러리들은 안전망으로써 <code>finalizer</code>를 구현하고 있다.</p><p>두 번째 경우는 네이티브 피어(native peer)와 연결된 객체를 다룰 때다. 네이티브 피어는 일반 자바 객체가 네이티브 메서드를 통해 기능 수행을 위임하는 네이티브 객체를 말한다. 네이티브 피어는 일반 객체가 아니므로 gc가 알 수 없을 뿐더러 자바 측 피어 객체(java peer)가 반환될 때 같이 반환할 수도 없다. 네이티브 피어가 중요한 자원을 점유하고 있지 않다고 가정한다면, 종료자는 그런 객체의 반환에 걸맞다. 네이티브 피어가 즉시 종료되어야 하는 자원을 포함하는 경우에는, 앞서 설명한 대로 close 메서드를 클래스에 추가해야 한다.</p><p><code>Cleaners</code>는 사용하기가 약간 까다롭다. 아래 코드는 간단한 Room 클래스다(<code>room</code>이 반환되기 전에 <code>clean</code> 되야 한다고 가정하자). <code>Room</code> 클래스는 <code>AutoCloseable</code> 인터페이스를 구현했다. automatic cleaning safety net이 <code>cleaner</code>를 사용한다는 사실은 단지 구현 세부 사항이다. <code>finalizers</code>와 다르게 <code>cleaners</code>는 클래스의 public API를 오염시키지 않는다.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token comment">// An autocloseable class using a cleaner as a safety net</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Room</span> <span class="token keyword">implements</span> <span class="token class-name">AutoCloseable</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Cleaner</span> cleaner <span class="token operator">=</span> <span class="token class-name">Cleaner</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Resource that requires cleaning. Must not refer to Room!</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">State</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> numJunkPiles<span class="token punctuation">;</span> <span class="token comment">// Number of junk piles in this room</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name">State</span><span class="token punctuation">(</span><span class="token keyword">int</span> numJunkPiles<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>numJunkPiles <span class="token operator">=</span> numJunkPiles<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Invoked by close method or cleaner</span></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Cleaning room&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      numJunkPiles <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// The state of this room, shared with our cleanable</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">State</span> state<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Our cleanable. Cleans the room when it&#39;s eligible for gc</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Cleaner<span class="token punctuation">.</span>Cleanable</span> cleanable<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">public</span> <span class="token class-name">Room</span><span class="token punctuation">(</span><span class="token keyword">int</span> numJunkPiles<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    state <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">State</span><span class="token punctuation">(</span>numJunkPiles<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cleanable <span class="token operator">=</span> cleaner<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token annotation punctuation">@Override</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    cleanable<span class="token punctuation">.</span><span class="token function">clean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>중첩된 State <code>static</code> 클래스는 <code>clean</code>될 자원을 갖고 있다. 위의 경우 단순한 <code>numJunkPiles</code> 필드다(represents the amount of mess in the room). 좀 더 현실적이라면 native peer를 가리키는 포인터를 갖는 final long이 될것이다.</p><p>State 클래스는 <code>Runnable</code> 인터페이스를 구현했고 <code>Room</code> 생성자에서 State 인스턴스를 등록할 때 <code>Cleanable</code>을 통해서 run 메서드가 한번만 호출된다. <code>run</code> 메서드 호출은 두가지 중 하나에 의해 트리거 된다. 보통 <code>Room</code>의 close 메서드에서 <code>Cleanable</code>의 <code>clean</code> 메서드를 호출할 때 트리거 된다. 만약 <code>Room</code> 인스턴스가 GC 자격을 얻을 때까지 <code>close</code> 메서드가 호출되지 않는다면, <code>Cleaner</code>는 <code>State</code>의 <code>run</code> 메서드를 호출할 것이다 (hopefully).</p><p><code>State</code> 인스턴스가 <code>Room</code> 인스턴스를 참조하지 않는것은 크리티컬하다. 만약 참조했다면, <code>Room</code> 인스턴스가 GC 자격을 얻는 것을 (그리고 자동으로 <code>clean</code>되는) 막아주는 순환성을 생성하게 된다. 그러므로 <code>State</code> 클래스는 반드시 중첩된 <code>staic</code> 클래스여야 한다. 왜냐하면 non static 중첩 클래스는 자신을 둘러싼 클래스 인스턴스 참조를 포함하기 때문이다.</p><p>it is similarly inadvisable to use a lambda beacause they can easily capture references to enclosing objects.</p><p>Room cleaner는 오직 안전망으로 사용되야 한다. 만약 <code>Room</code> 객체 생성을 try-with-resource 블록으로 감쌌다면, automatic cleaning은 절대 필요하지 않다.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adult</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Room</span> myRoom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Room</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Goodbye&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 실행시키면 Cleaning room 메세지와 함께 <code>Goodbye</code>가 출력될 것이다. 그러나 아래와 같이 실행하면 어떻게 될까?</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Teenager</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">Room</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Peace out&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cleaning room 메세지와 함께 <code>Peace out</code>이 출력되길 기대하겠지만, Cleaning room은 출력되지 않고 그냥 끝나버린다. 이게 전에 얘기했던 unpredictability이다. Cleaner 스펙은 <code>System.exit</code> 중 클리너의 동작은 구현에 따라 다르다고 말한다. cleaning action에 대한 보장이 없다. 필자가 System.gc()를 추가했더니 끝나기 전에 Cleaning room을 출력했다. 그러나 우리가 실행했을 때 그게 반드시 그렇게 된다는 보장이 없다.</p><hr>`,46);function j(p,_){const c=t("VPCard"),a=t("router-link"),i=t("SiteInfo");return v(),r("div",null,[n("h1",h,[n("a",f,[n("span",null,d(p.$frontmatter.title)+" 관련",1)])]),s(c,u(k({title:"목차",desc:"Effective Java",link:"/java/effective-java/README.md",logo:"https://81465973-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-Lej4tgjCgS0Wyj6JGe2%2Favatar.png?generation=1557720343650540&alt=media",background:"rgba(31,31,31,0.2)"})),null,16),n("nav",g,[n("ul",null,[n("li",null,[s(a,{to:"#avoid-finalizers-and-cleaners"},{default:e(()=>[o("Avoid finalizers and cleaners")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#_2rd-edition-내용"},{default:e(()=>[o("(2rd edition 내용)")]),_:1})]),n("li",null,[s(a,{to:"#_3rd-edition-내용"},{default:e(()=>[o("3rd edition 내용")]),_:1})])])])])]),y,s(i,{name:"객체의 생성과 삭제 | 양봉수 블로그",desc:"객체를 만들어야하는 시점과 그 방법, 객체 생성을 피해야 하는 경우와 그 방법, 적절한 순간에 객체가 삭제되도록 보장하는 방법, 그리고 삭제 전에 반드시 이루어져야 하는 청소 작업들을 관리하는 방법을 살펴본다.",url:"https://yangbongsoo.gitbook.io/study/effective-java/creating_and_destroying_objects",logo:"https://81465973-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-Lej4tgjCgS0Wyj6JGe2%2Favatar.png?generation=1557720343650540&alt=media",preview:"https://yangbongsoo.gitbook.io/study/~gitbook/ogimage/-Lf3aHUKi8T1aUZM7Y49"}),w])}const S=l(b,[["render",j],["__file","08.html.vue"]]),x=JSON.parse('{"path":"/java/effective-java/08.html","title":"규칙8 : 종료자 사용을 피하라","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"규칙8 : 종료자 사용을 피하라","description":"Effective Java > 규칙8 : 종료자 사용을 피하라","category":["Java"],"tag":["crashcourse","java","jdk","jdk8"],"head":[[{"meta":null},{"property":"og:title","content":"Effective Java > 규칙8 : 종료자 사용을 피하라"},{"property":"og:description","content":"규칙8 : 종료자 사용을 피하라"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/java/effective-java/08.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/java/effective-java/08.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"규칙8 : 종료자 사용을 피하라"}],["meta",{"property":"og:description","content":"Effective Java > 규칙8 : 종료자 사용을 피하라"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://yangbongsoo.gitbook.io/study/~gitbook/ogimage/-Lf3aHUKi8T1aUZM7Y49"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://yangbongsoo.gitbook.io/study/~gitbook/ogimage/-Lf3aHUKi8T1aUZM7Y49"}],["meta",{"name":"twitter:image:alt","content":"규칙8 : 종료자 사용을 피하라"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"jdk"}],["meta",{"property":"article:tag","content":"jdk8"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"규칙8 : 종료자 사용을 피하라\\",\\"image\\":[\\"https://yangbongsoo.gitbook.io/study/~gitbook/ogimage/-Lf3aHUKi8T1aUZM7Y49\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"isOriginal":false,"cover":"https://yangbongsoo.gitbook.io/study/~gitbook/ogimage/-Lf3aHUKi8T1aUZM7Y49"},"headers":[{"level":2,"title":"Avoid finalizers and cleaners","slug":"avoid-finalizers-and-cleaners","link":"#avoid-finalizers-and-cleaners","children":[{"level":3,"title":"(2rd edition 내용)","slug":"_2rd-edition-내용","link":"#_2rd-edition-내용","children":[]},{"level":3,"title":"3rd edition 내용","slug":"_3rd-edition-내용","link":"#_3rd-edition-내용","children":[]}]}],"git":{"createdTime":1720075859000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.12,"words":937},"filePathRelative":"java/effective-java/08.md","localizedDate":"2024년 7월 4일","excerpt":"\\n"}');export{S as comp,x as data};
