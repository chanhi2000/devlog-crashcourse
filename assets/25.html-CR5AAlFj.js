import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as e,t as w,b as s,w as n,n as o,g as i,e as p,r as c,o as m,d as l}from"./app-U_bew1in.js";const g={},k={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},b=e("hr",null,null,-1),v=p('<h2 id="project-4-part-two" tabindex="-1"><a class="header-anchor" href="#project-4-part-two"><span>Project 4, part two</span></a></h2><p>If there’s one Martin Fowler quote that I love, it’s this: “I&#39;m not a great programmer; I&#39;m just a good programmer with great habits.” Today we need to add some more functionality to our project, but we’re faced with a choice: do we take the easy route or take the harder route?</p><p>As you’ll see, sometimes the “easy” route ends up being hard in the long term, because we need to maintain that code for a long time. The harder route takes a little rewriting of our code, but it’s one of many steps you’ll take towards having better coding habits – an important skill to have!</p><p><strong>Today you have two topics to work through, and you’ll meet <code>UIProgressView</code>, key-value observing, and more.</strong></p><h3 id="monitoring-page-loads-uitoolbar-and-uiprogressview" tabindex="-1"><a class="header-anchor" href="#monitoring-page-loads-uitoolbar-and-uiprogressview"><span>Monitoring page loads: <code>UIToolbar</code> and <code>UIProgressView</code></span></a></h3>',5),I={class:"hint-container details"},x=e("summary",null,"Monitoring page loads: `UIToolbar` and `UIProgressView`",-1),T=p(`<p>Now is a great time to meet two new <code>UIView</code> subclasses: <code>UIToolbar</code> and <code>UIProgressView. UIToolbar</code> holds and shows a collection of <code>UIBarButtonItem</code> objects that the user can tap on. We already saw how each view controller has a <code>rightBarButton</code> item, so a <code>UIToolbar</code> is like having a whole bar of these items. <code>UIProgressView</code> is a colored bar that shows how far a task is through its work, sometimes called a &quot;progress bar.&quot;</p><p>The way we&#39;re going to use <code>UIToolbar</code> is quite simple: all view controllers automatically come with a <code>toolbarItems</code> array that automatically gets read in when the view controller is active inside a <code>UINavigationController</code>.</p><p>This is very similar to the way <code>rightBarButtonItem</code> is shown only when the view controller is active. All we need to do is set the array, then tell our navigation controller to show its toolbar, and it will do the rest of the work for us.</p><p>We&#39;re going to create two <code>UIBarButtonItems</code> at first, although one is special because it&#39;s a flexible space. This is a unique <code>UIBarButtonItem</code> type that acts like a spring, pushing other buttons to one side until all the space is used.</p><p>In <code>viewDidLoad()</code>, put this new code directly below where we set the <code>rightBarButtonItem</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> spacer <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>barButtonSystemItem<span class="token punctuation">:</span> <span class="token punctuation">.</span>flexibleSpace<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> refresh <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>barButtonSystemItem<span class="token punctuation">:</span> <span class="token punctuation">.</span>refresh<span class="token punctuation">,</span> target<span class="token punctuation">:</span> webView<span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>webView<span class="token punctuation">.</span>reload<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">toolbarItems <span class="token operator">=</span> <span class="token punctuation">[</span>spacer<span class="token punctuation">,</span> refresh<span class="token punctuation">]</span></span>
<span class="line">navigationController<span class="token operator">?</span><span class="token punctuation">.</span>isToolbarHidden <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The first line is new, or at least part of it is: we&#39;re creating a new bar button item using the special system item type <code>.flexibleSpace</code>, which creates a flexible space. It doesn&#39;t need a target or action because it can&#39;t be tapped. The second line you&#39;ve seen before, although now it&#39;s calling the <code>reload()</code> method on the web view rather than using a method of our own.</p><p>The last two lines are new: the first creates an array containing the flexible space and the refresh button, then sets it to be our view controller&#39;s <code>toolbarItems</code> array. The second sets the navigation controller&#39;s <code>isToolbarHidden</code> property to be false, so the toolbar will be shown – and its items will be loaded from our current view.</p><p>That code will compile and run, and you&#39;ll see the refresh button neatly aligned to the right – that&#39;s the effect of the flexible space automatically taking up as much room as it can on the left.</p><p>The next step is going to be to add a <code>UIProgressView</code> to our toolbar, which will show how far the page is through loading. However, this requires two new pieces of information:</p><ul><li>You can&#39;t just add random <code>UIView</code> subclasses to a <code>UIToolbar</code>, or to the <code>rightBarButtonItem</code> property. Instead, you need to wrap them in a special <code>UIBarButtonItem</code>, and use that instead.</li><li>Although <code>WKWebView</code> tells us how much of the page has loaded using its <code>estimatedProgress</code> property, the <code>WKNavigationDelegate</code> system doesn&#39;t tell us when this value has changed. So, we&#39;re going to ask iOS to tell us using a powerful technique called key-value observing, or KVO.</li></ul><p>First, let&#39;s create the progress view and place it inside the bar button item. Begin by declaring the property at the top of the <code>ViewController</code> class next to the existing <code>WKWebView</code> property:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> progressView<span class="token punctuation">:</span> <span class="token class-name">UIProgressView</span><span class="token operator">!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now place this code directly before the <code>let spacer =</code> line in <code>viewDidLoad()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">progressView <span class="token operator">=</span> <span class="token class-name">UIProgressView</span><span class="token punctuation">(</span>progressViewStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span></span>
<span class="line">progressView<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> progressButton <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>customView<span class="token punctuation">:</span> progressView<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>All three of those lines are new, so let&#39;s go over them:</p><ol><li>The first line creates a new <code>UIProgressView</code> instance, giving it the default style. There is an alternative style called <code>.bar</code>, which doesn&#39;t draw an unfilled line to show the extent of the progress view, but the default style looks best here.</li><li>The second line tells the progress view to set its layout size so that it fits its contents fully.</li><li>The last line creates a new <code>UIBarButtonItem</code> using the <code>customView</code> parameter, which is where we wrap up our <code>UIProgressView</code> in a <code>UIBarButtonItem</code> so that it can go into our toolbar.</li></ol><p>With the new <code>progressButton</code> item created, we can put it into our toolbar items anywhere we want it. The existing spacer will automatically make itself smaller to give space to the progress button, so I&#39;m going to modify my <code>toolbarItems</code> array to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">toolbarItems <span class="token operator">=</span> <span class="token punctuation">[</span>progressButton<span class="token punctuation">,</span> spacer<span class="token punctuation">,</span> refresh<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That is, progress view first, then a space in the center, then the refresh button on the right.</p><p>If you run the app now, you&#39;ll just see a thin gray line for our progress view – that&#39;s because it&#39;s default value is 0, so there&#39;s nothing colored in. Ideally we want to set this to match our webView&#39;s <code>estimatedProgress</code> value, which is a number from 0 to 1, but WKNavigationDelegate doesn&#39;t tell us when this value has changed.</p><p>Apple&#39;s solution to this is huge. Apple&#39;s solution is powerful. And, best of all, Apple&#39;s solution is almost everywhere in its toolkits, so once you learn how it works you can apply it elsewhere. It&#39;s called key-value observing (KVO), and it effectively lets you say, &quot;please tell me when the property X of object Y gets changed by anyone at any time.&quot;</p><p>We&#39;re going to use KVO to watch the <code>estimatedProgress</code> property, and I hope you&#39;ll agree that it&#39;s useful. First, we add ourselves as an observer of the property on the web view by adding this to <code>viewDidLoad()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">webView<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> forKeyPath<span class="token punctuation">:</span> <span class="token other-directive property">#keyPath</span><span class="token punctuation">(</span><span class="token class-name">WKWebView</span><span class="token punctuation">.</span>estimatedProgress<span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>new<span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The <code>addObserver()</code> method takes four parameters: who the observer is (we&#39;re the observer, so we use <code>self</code>), what property we want to observe (we want the <code>estimatedProgress</code> property of <code>WKWebView</code>), which value we want (we want the value that was just set, so we want the new one), and a context value.</p><p><code>forKeyPath</code> and <code>context</code> bear a little more explanation. <code>forKeyPath</code> isn&#39;t named <code>forProperty</code> because it&#39;s not just about entering a property name. You can actually specify a path: one property inside another, inside another, and so on. More advanced key paths can even add functionality, such as averaging all elements in an array! Swift has a special keyword, <code>#keyPath</code>, which works like the <code>#selector</code> keyword you saw previously: it allows the compiler to check that your code is correct – that the <code>WKWebView</code> class actually has an <code>estimatedProgress</code> property.</p><p><code>context</code> is easier: if you provide a unique value, that same context value gets sent back to you when you get your notification that the value has changed. This allows you to check the context to make sure it was your observer that was called. There are some corner cases where specifying (and checking) a context is required to avoid bugs, but you won&#39;t reach them during any of this series.</p><p>Warning: in more complex applications, all calls to <code>addObserver()</code> should be matched with a call to <code>removeObserver()</code> when you&#39;re finished observing – for example, when you&#39;re done with the view controller.</p><p>Once you have registered as an observer using KVO, you <em>must</em> implement a method called <code>observeValue()</code>. This tells you when an observed value has changed, so add this method now:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">observeValue</span><span class="token punctuation">(</span>forKeyPath keyPath<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span><span class="token punctuation">,</span> of object<span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token operator">?</span><span class="token punctuation">,</span> change<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NSKeyValueChangeKey</span> <span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token class-name">UnsafeMutableRawPointer</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> keyPath <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;estimatedProgress&quot;</span></span> <span class="token punctuation">{</span></span>
<span class="line">        progressView<span class="token punctuation">.</span>progress <span class="token operator">=</span> <span class="token class-name">Float</span><span class="token punctuation">(</span>webView<span class="token punctuation">.</span>estimatedProgress<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see it&#39;s telling us which key path was changed, and it also sends us back the context we registered earlier so you can check whether this callback is for you or not.</p><p>In this project, all we care about is whether the <code>keyPath</code> parameter is set to <code>estimatedProgress</code> – that is, if the <code>estimatedProgress</code> value of the web view has changed. And if it has, we set the <code>progress</code> property of our progress view to the new <code>estimatedProgress</code> value.</p><p>Minor note: <code>estimatedProgress</code> is a <code>Double</code>, which as you should remember is one way of representing decimal numbers like 0.5 or 0.55555. Unhelpfully, <code>UIProgressView</code>&#39;s <code>progress</code> property is a <code>Float</code>, which is another (lower-precision) way of representing decimal numbers. Swift doesn&#39;t let you put a <code>Double</code> into a <code>Float</code>, so we need to create a new <code>Float</code> from the <code>Double</code>.</p><p>If you run your project now, you&#39;ll see the progress view fills up with blue as the page loads.</p>`,34),V=e("h3",{id:"refactoring-for-the-win",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#refactoring-for-the-win"},[e("span",null,"Refactoring for the win")])],-1),U={class:"hint-container details"},P=e("summary",null,"Refactoring for the win",-1),_=p(`<p>Our app has a fatal flaw, and there are two ways to fix it: double up on code, or refactor. Cunningly, the first option is nearly always the easiest, and yet counter-intuitively also the hardest.</p><p>The flaw is this: we let users select from a list of websites, but once they are on that website they can get pretty much anywhere else they want just by following links. Wouldn&#39;t it be nice if we could check every link that was followed so that we can make sure it&#39;s on our safe list?</p><p>One solution – doubling up on code – would have us writing the list of accessible websites twice: once in the <code>UIAlertController</code> and once when we&#39;re checking the link. This is extremely easy to write, but it can be a trap: you now have two lists of websites, and it&#39;s down to you to keep them both up to date. And if you find a bug in your duplicated code, will you remember to fix it in the other place too?</p><p>The second solution is called refactoring, and it&#39;s effectively a rewrite of the code. The end result should do the same thing, though. The purpose of the rewrite is to make it more efficient, make it easier to read, reduce its complexity, and to make it more flexible. This last use is what we&#39;ll be shooting for: we want to refactor our code so there&#39;s a shared array of allowed websites.</p><p>Up where we declared our two properties <code>webView</code> and <code>progressView</code>, add this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> websites <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;apple.com&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;hackingwithswift.com&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That&#39;s an array containing the websites we want the user to be able to visit.</p><p>With that array, we can modify the web view&#39;s initial web page so that it&#39;s not hard-coded. In <code>viewDidLoad()</code>, change the initial web page to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://&quot;</span></span> <span class="token operator">+</span> websites<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">webView<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">URLRequest</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> url<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>So far, so easy. The next change is to make our <code>UIAlertController</code> use the websites for its list of <code>UIAlertActions</code>. Go down to the <code>openTapped()</code> method and replace these two lines:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;apple.com&quot;</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">,</span> handler<span class="token punctuation">:</span> openPage<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;hackingwithswift.com&quot;</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">,</span> handler<span class="token punctuation">:</span> openPage<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>…with this loop:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">for</span> website <span class="token keyword">in</span> websites <span class="token punctuation">{</span></span>
<span class="line">    ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> website<span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">,</span> handler<span class="token punctuation">:</span> openPage<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That will add one <code>UIAlertAction</code> object for each item in our array. Again, not too complicated.</p><p>The final change is something new, and it belongs to the <code>WKNavigationDelegate</code> protocol. If you find space for a new method and start typing &quot;web&quot; you&#39;ll see the list of <code>WKWebView</code>-related code completion options. Look for the one called <code>decidePolicyFor</code> and let Xcode fill in the method for you.</p><p>This delegate callback allows us to decide whether we want to allow navigation to happen or not every time something happens. We can check which part of the page started the navigation, we can see whether it was triggered by a link being clicked or a form being submitted, or, in our case, we can check the URL to see whether we like it.</p><p>Now that we&#39;ve implemented this method, it expects a response: should we load the page or should we not? When this method is called, you get passed in a parameter called <code>decisionHandler</code>. This actually holds a function, which means if you &quot;call&quot; the parameter, you&#39;re actually calling the function.</p><p>In project 2 I talked about closures: chunks of code that you can pass into a function like a variable and have executed at a later date. This <code>decisionHandler</code> is also a closure, except it&#39;s the other way around – rather than giving someone else a chunk of code to execute, you&#39;re being given it and are required to execute it.</p><p>And make no mistake: you <em>are required</em> to do something with that <code>decisionHandler</code> closure. That might make sound an extremely complicated way of returning a value from a method, and that&#39;s true – but it&#39;s also underestimating the power a little! Having this <code>decisionHandler</code> variable/function means you can show some user interface to the user &quot;Do you really want to load this page?&quot; and call the closure when you have an answer.</p><p>You might think that already sounds complicated, but I’m afraid there’s one more thing that might hurt your head. Because you might call the <code>decisionHandler</code> closure straight away, or you might call it later on (perhaps after asking the user what they want to do), Swift considers it to be an <em>escaping</em> closure. That is, the closure has the potential to escape the current method, and be used at a later date. We won’t be using it that way, but it has the <em>potential</em> and that’s what matters.</p><p>Because of this, Swift wants us to add the special keyword <code>@escaping</code> when specifying this method, so we’re acknowledging that the closure might be used later. You don’t need to do anything else – just add that one keyword, as you’ll see in the code below.</p><p>So, we need to evaluate the URL to see whether it&#39;s in our safe list, then call the <code>decisionHandler</code> with a negative or positive answer. Here&#39;s the code for the method:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">webView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> webView<span class="token punctuation">:</span> <span class="token class-name">WKWebView</span><span class="token punctuation">,</span> decidePolicyFor navigationAction<span class="token punctuation">:</span> <span class="token class-name">WKNavigationAction</span><span class="token punctuation">,</span> decisionHandler<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token class-name">WKNavigationActionPolicy</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> url <span class="token operator">=</span> navigationAction<span class="token punctuation">.</span>request<span class="token punctuation">.</span>url</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">let</span> host <span class="token operator">=</span> url<span class="token operator">?</span><span class="token punctuation">.</span>host <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> website <span class="token keyword">in</span> websites <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> host<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>website<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">decisionHandler</span><span class="token punctuation">(</span><span class="token punctuation">.</span>allow<span class="token punctuation">)</span></span>
<span class="line">                <span class="token keyword">return</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">decisionHandler</span><span class="token punctuation">(</span><span class="token punctuation">.</span>cancel<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are some easy bits, but they are outweighed by the hard bits so let&#39;s go through every line in detail to make sure:</p><ol><li>First, we set the constant <code>url</code> to be equal to the <code>URL</code> of the navigation. This is just to make the code clearer.</li><li>Second, we use <code>if let</code> syntax to unwrap the value of the optional <code>url.host</code>. Remember I said that <code>URL</code> does a lot of work for you in parsing URLs properly? Well, here&#39;s a good example: this line says, &quot;if there is a host for this URL, pull it out&quot; – and by &quot;host&quot; it means &quot;website domain&quot; like apple.com. Note: we need to unwrap this carefully because not all URLs have hosts.</li><li>Third, we loop through all sites in our safe list, placing the name of the site in the <code>website</code> variable.</li><li>Fourth, we use the <code>contains()</code> String method to see whether each safe website exists somewhere in the host name.</li><li>Fifth, if the website was found then we call the decision handler with a positive response - we want to allow loading.</li><li>Sixth, if the website was found, after calling the <code>decisionHandler</code> we use the <code>return</code> statement. This means &quot;exit the method now.&quot;</li><li>Last, if there is no host set, or if we&#39;ve gone through all the loop and found nothing, we call the decision handler with a negative response: cancel loading.</li></ol><p>You give the <code>contains()</code> method a string to check, and it will return true if it is found inside whichever string you used with <code>contains()</code>. You&#39;ve already met the <code>hasPrefix()</code> method in project 1, but <code>hasPrefix()</code> isn&#39;t suitable here because our safe site name could appear anywhere in the URL. For example, slashdot.org redirects to m.slashdot.org for mobile devices, and <code>hasPrefix()</code> would fail that test.</p><p>The <code>return</code> statement is new, but it&#39;s one you&#39;ll be using a lot from now on. It exits the method immediately, executing no further code. If you said your method returns a value, you&#39;ll use the <code>return</code> statement to return that value.</p><p>Your project is complete: press <kbd>Cmd</kbd>+<kbd>R</kbd> to run the finished app, and enjoy!</p>`,28),q=e("hr",null,null,-1);function j(d,B){const a=c("router-link"),t=c("VPCard"),r=c("VidStack");return m(),h("div",null,[e("h1",k,[e("a",f,[e("span",null,w(d.$frontmatter.title)+" 관련",1)])]),e("nav",y,[e("ul",null,[e("li",null,[s(a,{to:"#project-4-part-two"},{default:n(()=>[l("Project 4, part two")]),_:1}),e("ul",null,[e("li",null,[s(a,{to:"#monitoring-page-loads-uitoolbar-and-uiprogressview"},{default:n(()=>[l("Monitoring page loads: UIToolbar and UIProgressView")]),_:1})]),e("li",null,[s(a,{to:"#refactoring-for-the-win"},{default:n(()=>[l("Refactoring for the win")]),_:1})])])])])]),b,s(t,o(i({title:"100 Days of Swift - Day 25",desc:"Project 4, part two",link:"https://www.hackingwithswift.com/100/25",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),v,e("details",I,[x,s(t,o(i({title:"100 Days of Swift - Day 25 - Monitoring page loads: UIToolbar and UIProgressView",desc:"Monitoring page loads: UIToolbar and UIProgressView",link:"https://hackingwithswift.com/read/4/4/monitoring-page-loads-uitoolbar-and-uiprogressview",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(r,{src:"youtube/Nj6qvHyNMug"}),T]),V,e("details",U,[P,s(t,o(i({title:"100 Days of Swift - Day 25 - Refactoring for the win",desc:" Refactoring for the win",link:"https://hackingwithswift.com/read/4/5/refactoring-for-the-win",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),s(r,{src:"youtube/4GfOfx9z3Ss"}),_]),q])}const D=u(g,[["render",j],["__file","25.html.vue"]]),W=JSON.parse('{"path":"/swift/100-days-of-swift/25.html","title":"Day 25","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 25","description":"100 Days of Swift > Day 25","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of Swift > Day 25"},{"property":"og:description","content":"Day 25"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swift/25.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swift/25.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 25"}],["meta",{"property":"og:description","content":"100 Days of Swift > Day 25"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 25\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Project 4, part two","slug":"project-4-part-two","link":"#project-4-part-two","children":[{"level":3,"title":"Monitoring page loads: UIToolbar and UIProgressView","slug":"monitoring-page-loads-uitoolbar-and-uiprogressview","link":"#monitoring-page-loads-uitoolbar-and-uiprogressview","children":[]},{"level":3,"title":"Refactoring for the win","slug":"refactoring-for-the-win","link":"#refactoring-for-the-win","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":10}]},"readingTime":{"minutes":9.98,"words":2993},"filePathRelative":"swift/100-days-of-swift/25.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{D as comp,W as data};
