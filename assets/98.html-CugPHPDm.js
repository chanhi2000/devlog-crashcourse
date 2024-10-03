import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,a as e,t as g,b as t,w as p,n as o,g as i,d as n,e as a,r,o as w}from"./app-U_bew1in.js";const f={},y={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},b={class:"table-of-contents"},v=e("hr",null,null,-1),_=a('<h2 id="project-30-part-two" tabindex="-1"><a class="header-anchor" href="#project-30-part-two"><span>Project 30, part two</span></a></h2><p>After all these days of learning how to write Swift and then how to build apps, you might now be wondering how fast all that code you wrote was. Did you get blended layers right? Where you using off-screen rendered images? Was there wasted memory?</p><p>I know it might seem like a lot to keep in your head: not only are you thinking about the language and Apple’s many frameworks, but you now also need to think about how to keep your performance high! But don’t despair: the key here isn’t to do everything perfectly. You’ll make mistakes and you’ll learn from them, even after 20 or 30 years of this job. As Izey Victoria Odiase said, “don&#39;t aim for perfection – aim for &#39;better than yesterday’.”</p><p>Once you accept that you’ll make mistakes, learning to identify them using Instruments becomes second nature, and you’ll actually start to benefit from those mistakes.</p><p>And you know what we call developers who make mistakes?</p><p>Developers.</p><p><strong>Today you should work through the “Fixing the bugs: Running out of memory” chapter and wrap up for project 30, complete its review, then work through all three of its challenges.</strong></p><h3 id="fixing-the-bugs-running-out-of-memory" tabindex="-1"><a class="header-anchor" href="#fixing-the-bugs-running-out-of-memory"><span>Fixing the bugs: Running out of memory</span></a></h3>',8),I={class:"hint-container details"},x=e("summary",null,"Fixing the bugs: Running out of memory",-1),j=a(`<p>Now, why does the app crash when you go the detail view controller enough times? There are two answers to this question, one code related and one not. For the second question, I already explained that we’re working with supremely over-sized images here – far larger than we actually need.</p><p>But there&#39;s something else subtle here, and it&#39;s something we haven&#39;t covered yet so this is the perfect time. When you create a <code>UIImage</code> using <code>UIImage(named:)</code> iOS loads the image and puts it into an image cache for reuse later. This is sometimes helpful, particularly if you know the image will be used again. But if you know it&#39;s unlikely to be reused or if it&#39;s quite large, then don&#39;t bother putting it into the cache – it will just add memory pressure to your app and probably flush out other more useful images!</p><p>If you look in the <code>viewDidLoad()</code> method of <code>ImageViewController</code> you&#39;ll see this line of code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> original <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> image<span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>How likely is it that users will go back and forward to the same image again and again? Not likely at all, so we can skip the image cache by creating our images using the <code>UIImage(contentsOfFile:)</code> initializer instead. This isn&#39;t as friendly as <code>UIImage(named:)</code> because you need to specify the exact path to an image rather than just its filename in your app bundle. The solution is to use <code>Bundle.main.path(forResource:ofType:)</code>, which is similar to the <code>Bundle.main.url(forResource:)</code> method we’ve used previously, except it returns a simple string rather than a <code>URL</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span>forResource<span class="token punctuation">:</span> image<span class="token punctuation">,</span> ofType<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line"><span class="token keyword">let</span> original <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>contentsOfFile<span class="token punctuation">:</span> path<span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Let&#39;s take a look at one more problem, this time quite subtle. Loading the images was slow because they were so big, and iOS was caching them unnecessarily. But <code>UIImage</code>&#39;s cache is intelligent: if it senses memory pressure, it automatically clears itself to make room for other stuff. So why does our app run out of memory?</p><p>To find another problems, profile the app using Instruments and select the allocations instrument again. This time filter on &quot;imageviewcontroller&quot; and to begin with you&#39;ll see nothing because the app starts on the table view. But if you tap into a detail view then go back, you&#39;ll see one is created <em>and remains persistent</em> – it hasn&#39;t been destroyed. Which means the image it&#39;s showing also hasn&#39;t been destroyed, hence the massive memory usage.</p>`,8),D=e("code",null,"SelectionViewController.swift",-1),T=e("code",null,"ImageViewController.swift",-1),S=a(`<ol><li>The selection view controller has a <code>viewControllers</code> array that claims to be a cache of the detail view controllers. This cache is never actually used, and even if it were used it really isn&#39;t needed.</li><li>The image view controller has a property <code>var owner: SelectionViewController</code>! – that makes it a strong reference to the view controller that created it.</li></ol><p>The first problem is easily fixed: just delete the <code>viewControllers</code> array and any code that uses it, because it&#39;s just not needed. The second problem smells like a strong reference cycle, so you should probably change it to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">weak</span> <span class="token keyword">var</span> owner<span class="token punctuation">:</span> <span class="token class-name">SelectionViewController</span><span class="token operator">!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Run Instruments again and you&#39;ll see that the problem is… still there?! That&#39;s right: those two were either red herrings or weren&#39;t enough to solve the problem, because something far more sneaky is happening.</p>`,4),R=e("code",null,"ImageViewController.swift",-1),C=a(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">animTimer <span class="token operator">=</span> <span class="token class-name">Timer</span><span class="token punctuation">.</span><span class="token function">scheduledTimer</span><span class="token punctuation">(</span>withTimeInterval<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> repeats<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> timer <span class="token keyword">in</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That timer does a hacky animation on the image, and it could easily be replaced with better animations as done inside project 15. But even so, why does that cause the image view controllers to never leak?</p><p>The reason is that when you provide code for your timer to run, the timer holds a strong reference to it so it can definitely be called when the timer is up. We&#39;re using <code>self</code> inside our timer’s code, which means our view controller owns the timer strongly and the timer owns the view controller strongly, so we have a strong reference cycle.</p><p>There are several solutions here: rewrite the code using smarter animations, use a <code>weak self</code> closure capture list, or destroy the timer when it&#39;s no longer needed, thus breaking the cycle. We’re going to take the last option here, to give you a little more practice with invalidating timers – all we need to do is detect when the image view controller is about to disappear and stop the timer. We&#39;ll do this in <code>viewWillDisappear()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewWillDisappear</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> animated<span class="token punctuation">:</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewWillDisappear</span><span class="token punctuation">(</span>animated<span class="token punctuation">)</span></span>
<span class="line">    animTimer<span class="token punctuation">.</span><span class="token function">invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Calling <code>invalidate()</code> on a timer stops it immediately, which also forces it to release its strong reference on the view controller it belongs to, thus breaking the strong reference cycle. If you profile again, you&#39;ll see all the ImageViewController objects are now transient, and the app should no longer be quite so crash-prone.</p><p>That being said, the app might still crash <em>sometimes</em> because despite our best efforts we’re still juggling pictures that are far too big. However, the code is at least a great deal more efficient now, and none of the problems were too hard to find.</p>`,7),W=e("h3",{id:"wrap-up",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wrap-up"},[e("span",null,"Wrap up")])],-1),F={class:"hint-container details"},V=e("summary",null,"Wrap up",-1),P=a(`<p>Hold up your right hand and repeat after me: “I will never ship an app without running it through Instruments first.” It doesn&#39;t take long, it&#39;s not difficult, and I promise it will pay off – your user interfaces will be smoother, your code will run faster, and you&#39;ll avoid wasting memory, all using a tool that&#39;s completely free and you already have installed.</p><p>I have, predictably, only touched briefly on the many features of Instruments, Xcode, and the Simulator here, but I hope I&#39;ve inspired you to learn more. Instruments can tell you exactly what each CPU core is doing at any given time, it can tell you when every object was created and when it was destroyed along with what code triggered it, and it can even simulate user interface interactions to help you stress test your apps!</p><p>At the same time, I also snuck in a few more techniques for you to try in your own apps – layer shadows, Core Graphics clipping, and how <code>UIImage</code> has an automatic cache for when you need it.</p><p>So: all in all another great technique project, and you’ve learned some important skills that will be useful in every iOS project you make from now on.</p><h4 id="review-what-you-learned" tabindex="-1"><a class="header-anchor" href="#review-what-you-learned"><span>Review what you learned</span></a></h4><p>Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.</p><p><a href="https://hackingwithswift.com/review/hws/project-30-instruments" target="_blank" rel="noopener noreferrer">Click here to review what you learned in project 30.</a></p><h4 id="challenge" tabindex="-1"><a class="header-anchor" href="#challenge"><span>Challenge</span></a></h4><p>One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:</p><ol><li>Go through project 30 and remove all the force unwraps. Note: implicitly unwrapped optionals are not the same thing as force unwraps – you’re welcome to fix the implicitly unwrapped optionals too, but that’s a bonus task.</li><li>Pick any of the previous 29 projects that interests you, and try exploring it using the Allocations instrument. Can you find any objects that are persistent when they should have been destroyed?</li><li>For a tougher challenge, take the image generation code out of <code>cellForRowAt</code>: generate all images when the app first launches, and use those smaller versions instead. For bonus points, combine the <code>getDocumentsDirectory()</code> method I introduced in project 10 so that you save the resulting cache to make sure it never happens again.</li></ol><p>As a reminder, here’s the code for <code>getDocumentsDirectory()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token constant">URL</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> paths <span class="token operator">=</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">urls</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>documentDirectory<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>userDomainMask<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> paths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),B={class:"hint-container info"},A=e("p",{class:"hint-container-title"},"Wrap up - Additional",-1),U=e("p",null,"You’ve learned an important tool for any serious iOS developer – good job! Now share your progress with others.",-1),N=e("hr",null,null,-1);function O(d,q){const l=r("router-link"),s=r("VPCard"),u=r("VidStack"),c=r("FontIcon");return w(),m("div",null,[e("h1",y,[e("a",k,[e("span",null,g(d.$frontmatter.title)+" 관련",1)])]),e("nav",b,[e("ul",null,[e("li",null,[t(l,{to:"#project-30-part-two"},{default:p(()=>[n("Project 30, part two")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#fixing-the-bugs-running-out-of-memory"},{default:p(()=>[n("Fixing the bugs: Running out of memory")]),_:1})]),e("li",null,[t(l,{to:"#wrap-up"},{default:p(()=>[n("Wrap up")]),_:1})])])])])]),v,t(s,o(i({title:"100 Days of Swift - Day 98",desc:"Project 30, part two",link:"https://www.hackingwithswift.com/100/98",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgb(213,52,58,0.2)"})),null,16),_,e("details",I,[x,t(s,o(i({title:"100 Days of Swift - Day 98 - Fixing the bugs (Running out of memory) ",desc:"Fixing the bugs (Running out of memory)",link:"https://hackingwithswift.com/read/30/6/fixing-the-bugs-running-out-of-memory",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgb(213,52,58,0.2)"})),null,16),t(u,{src:"youtube/Tg_ExH0ivoE"}),j,e("p",null,[n("What's causing the image view controller to never be destroyed? If you read through "),t(c,{icon:"fa-brands fa-swift"}),D,n(" and "),t(c,{icon:"fa-brands fa-swift"}),T,n(" you might spot these two things:")]),S,e("p",null,[n("The view controllers aren't destroyed because of this line of code in "),t(c,{icon:"fa-brands fa-swift"}),R,n(":")]),C]),W,e("details",F,[V,t(s,o(i({title:"100 Days of Swift - Day 98 - Wrap up",desc:"Wrap up",link:"https://hackingwithswift.com/read/30/7/wrap-up",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgb(213,52,58,0.2)"})),null,16),t(u,{src:"youtube/Cy8NswcPZAE"}),P]),e("div",B,[A,t(s,o(i({title:"100 Days of Swift - Day 98 - Review for Project 30 (Instruments)",desc:"Review for Project 30 (Instruments)",link:"https://hackingwithswift.com/review/hws/project-30-instruments",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgb(213,52,58,0.2)"})),null,16)]),U,N])}const E=h(f,[["render",O],["__file","98.html.vue"]]),H=JSON.parse('{"path":"/swift/100-days-of-swift/98.html","title":"Day 98","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 98","description":"100 Days of Swift > Day 98","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of Swift > Day 98"},{"property":"og:description","content":"Day 98"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swift/98.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swift/98.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 98"}],["meta",{"property":"og:description","content":"100 Days of Swift > Day 98"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 98\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Project 30, part two","slug":"project-30-part-two","link":"#project-30-part-two","children":[{"level":3,"title":"Fixing the bugs: Running out of memory","slug":"fixing-the-bugs-running-out-of-memory","link":"#fixing-the-bugs-running-out-of-memory","children":[]},{"level":3,"title":"Wrap up","slug":"wrap-up","link":"#wrap-up","children":[]}]}],"git":{"createdTime":1708587337000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":7}]},"readingTime":{"minutes":6.09,"words":1827},"filePathRelative":"swift/100-days-of-swift/98.md","localizedDate":"2024년 2월 22일","excerpt":"\\n\\n<hr>\\n"}');export{E as comp,H as data};
