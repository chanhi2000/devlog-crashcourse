import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as s,t as m,b as n,w as o,n as l,g as c,d as a,e,r,o as k}from"./app-U_bew1in.js";const v={},w={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},g=s("hr",null,null,-1),b=s("h2",{id:"structs-part-two",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#structs-part-two"},[s("span",null,"Structs, part two")])],-1),_=s("p",null,"As you’ve seen, structs let us combine individual pieces of data to make something new, then attach methods so we can manipulate that data.",-1),S=s("p",null,[a("Today you’re going to learn about some of the more advanced features of structs that make them more powerful, including access control, static properties, and laziness. Yes, "),s("em",null,"laziness"),a(" – Bill Gates once said, “I choose a lazy person to do a hard job, Because a lazy person will find an easy way to do it.” In Swift, laziness is an important performance optimization, as you’ll see.")],-1),z=s("p",null,[s("strong",null,"Today you have six one-minute videos to watch"),a(", and as always once you’ve completed each video there’s some optional extra reading and a short test to help make sure you’ve understood what was taught.")],-1),x=s("h3",{id:"_1-initializers",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-initializers"},[s("span",null,"1. Initializers")])],-1),T={class:"hint-container details"},q=s("summary",null,"1. Initializers",-1),D=e(`<p>Initializers are special methods that provide different ways to create your struct. All structs come with one by default, called their memberwise initializer – this asks you to provide a value for each property when you create the struct.</p><p>You can see this if we create a <code>User</code> struct that has one property:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> username<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When we create one of those structs, we must provide a username:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span>username<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;twostraws&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>We can provide our own initializer to replace the default one. For example, we might want to create all new users as “Anonymous” and print a message, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> username<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        username <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Anonymous&quot;</span></span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Creating a new user!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You don’t write <code>func</code> before initializers, but you do need to make sure all properties have a value before the initializer ends.</p><p>Now our initializer accepts no parameters, we need to create the struct like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">user<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;twostraws&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),A=e('<div class="hint-container info"><p class="hint-container-title">1. Initializers - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/how-do-swifts-memberwise-initializers-work" target="_blank" rel="noopener noreferrer">How do Swift’s memberwise initializers work?</a></li><li>Test: <a href="https://hackingwithswift.com/review/initializers" target="_blank" rel="noopener noreferrer">Initializers</a></li></ul></div><h3 id="_2-referring-to-the-current-instance" tabindex="-1"><a class="header-anchor" href="#_2-referring-to-the-current-instance"><span>2. Referring to the current instance</span></a></h3>',2),j={class:"hint-container details"},I=s("summary",null,"2. Referring to the current instance",-1),P=e(`<p>Inside methods you get a special constant called <code>self</code>, which points to whatever instance of the struct is currently being used. This <code>self</code> value is particularly useful when you create initializers that have the same parameter names as your property.</p><p>For example, if you create a <code>Person</code> struct with a <code>name</code> property, then tried to write an initializer that accepted a <code>name</code> parameter, <code>self</code> helps you distinguish between the property and the parameter – <code>self.name</code> refers to the property, whereas <code>name</code> refers to the parameter.</p><p>Here’s that in code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> was born!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),R=e('<div class="hint-container info"><p class="hint-container-title">2. Referring to the current instance - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/when-would-you-use-self-in-a-method" target="_blank" rel="noopener noreferrer">When would you use self in a method?</a></li><li>Test: <a href="https://hackingwithswift.com/review/referring-to-the-current-instance" target="_blank" rel="noopener noreferrer">Referring to the current instance</a></li></ul></div><h3 id="_3-lazy-properties" tabindex="-1"><a class="header-anchor" href="#_3-lazy-properties"><span>3. Lazy properties</span></a></h3>',2),F={class:"hint-container details"},Y=s("summary",null,"3. Lazy properties",-1),N=e(`<p>As a performance optimization, Swift lets you create some properties only when they are needed. As an example, consider this <code>FamilyTree</code> struct – it doesn’t do much, but in theory creating a family tree for someone takes a long time:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">FamilyTree</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Creating family tree!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We might use that <code>FamilyTree</code> struct as a property inside a <code>Person</code> struct, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">var</span> familyTree <span class="token operator">=</span> <span class="token class-name">FamilyTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> ed <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Ed&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But what if we didn’t always need the family tree for a particular person? If we add the <code>lazy</code> keyword to the <code>familyTree</code> property, then Swift will only create the <code>FamilyTree</code> struct when it’s first accessed:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">lazy</span> <span class="token keyword">var</span> familyTree <span class="token operator">=</span> <span class="token class-name">FamilyTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>So, if you want to see the “Creating family tree!” message, you need to access the property at least once:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">ed<span class="token punctuation">.</span>familyTree</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,8),B=e('<div class="hint-container info"><p class="hint-container-title">3. Lazy properties - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/when-should-properties-be-lazy" target="_blank" rel="noopener noreferrer">When should properties be lazy?</a></li><li>Test: <a href="https://hackingwithswift.com/review/lazy-properties" target="_blank" rel="noopener noreferrer">Lazy properties</a></li></ul></div><h3 id="_4-static-properties-and-methods" tabindex="-1"><a class="header-anchor" href="#_4-static-properties-and-methods"><span>4. Static properties and methods</span></a></h3>',2),O={class:"hint-container details"},W=s("summary",null,"4. Static properties and methods",-1),C=e(`<p>All the properties and methods we’ve created so far have belonged to individual instances of structs, which means that if we had a <code>Student</code> struct we could create several student instances each with their own properties and methods:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> ed <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Ed&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> taylor <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Taylor&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also ask Swift to share specific properties and methods across all instances of the struct by declaring them as static.</p><p>To try this out, we’re going to add a static property to the <code>Student</code> struct to store how many students are in the class. Each time we create a new student, we’ll add one to it:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">var</span> classSize <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        <span class="token class-name">Student</span><span class="token punctuation">.</span>classSize <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Because the <code>classSize</code> property belongs to the struct itself rather than instances of the struct, we need to read it using <code>Student.classSize</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">.</span>classSize<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,7),L=e('<div class="hint-container info"><p class="hint-container-title">4. Static properties and methods - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/whats-the-point-of-static-properties-and-methods-in-swift" target="_blank" rel="noopener noreferrer">What’s the point of static properties and methods in Swift?</a></li><li>Test: <a href="https://hackingwithswift.com/review/static-properties-and-methods" target="_blank" rel="noopener noreferrer">Static properties and methods</a></li></ul></div><h3 id="_5-access-control" tabindex="-1"><a class="header-anchor" href="#_5-access-control"><span>5. Access control</span></a></h3>',2),V={class:"hint-container details"},U=s("summary",null,"5. Access control",-1),Z=e(`<p>Access control lets you restrict which code can use properties and methods. This is important because you might want to stop people reading a property directly, for example.</p><p>We could create a <code>Person</code> struct that has an <code>id</code> property to store their social security number:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> ed <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;12345&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once that person has been created, we can make their <code>id</code> be private so you can’t read it from outside the struct – trying to write <code>ed.id</code> simply won’t work.</p><p>Just use the <code>private</code> keyword, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now only methods inside <code>Person</code> can read the <code>id</code> property. For example:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">identify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;My social security number is </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">id</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another common option is <code>public</code>, which lets all other code use the property or method.</p>`,9),E=e('<div class="hint-container info"><p class="hint-container-title">5. Access control - Additional</p><ul><li>Optional: <a href="https://hackingwithswift.com/quick-start/understanding-swift/whats-the-point-of-access-control" target="_blank" rel="noopener noreferrer">What’s the point of access control?</a></li><li>Test: <a href="https://hackingwithswift.com/review/access-control" target="_blank" rel="noopener noreferrer">Access control</a></li></ul></div><h3 id="_6-structs-summary" tabindex="-1"><a class="header-anchor" href="#_6-structs-summary"><span>6. Structs summary</span></a></h3>',2),K={class:"hint-container details"},H=s("summary",null,"6. Structs summary",-1),J=e("<p>You’ve made it to the end of the seventh part of this series, so let’s summarize:</p><ol><li>You can create your own types using structures, which can have their own properties and methods.</li><li>You can use stored properties or use computed properties to calculate values on the fly.</li><li>If you want to change a property inside a method, you must mark it as <code>mutating</code>.</li><li>Initializers are special methods that create structs. You get a memberwise initializer by default, but if you create your own you must give all properties a value.</li><li>Use the <code>self</code> constant to refer to the current instance of a struct inside a method.</li><li>The <code>lazy</code> keyword tells Swift to create properties only when they are first used.</li><li>You can share properties and methods across all instances of a struct using the <code>static</code> keyword.</li><li>Access control lets you restrict what code can use properties and methods.</li></ol>",2),M=s("div",{class:"hint-container info"},[s("p",{class:"hint-container-title"},"6. Structs summary - Additional"),s("ul",null,[s("li",null,[a("Test: "),s("a",{href:"https://hackingwithswift.com/review/structs-summary",target:"_blank",rel:"noopener noreferrer"},"Structs")])])],-1),Q=s("p",null,"That’s another key Swift topic under your belt – good job! Now do the smart thing and post your progress online: it forces you to write about these things in your own words, and also encourages you to continue on to tomorrow.",-1),G=s("hr",null,null,-1);function X(d,$){const t=r("router-link"),i=r("VPCard"),p=r("VidStack");return k(),h("div",null,[s("h1",w,[s("a",f,[s("span",null,m(d.$frontmatter.title)+" 관련",1)])]),s("nav",y,[s("ul",null,[s("li",null,[n(t,{to:"#structs-part-two"},{default:o(()=>[a("Structs, part two")]),_:1}),s("ul",null,[s("li",null,[n(t,{to:"#_1-initializers"},{default:o(()=>[a("1. Initializers")]),_:1})]),s("li",null,[n(t,{to:"#_2-referring-to-the-current-instance"},{default:o(()=>[a("2. Referring to the current instance")]),_:1})]),s("li",null,[n(t,{to:"#_3-lazy-properties"},{default:o(()=>[a("3. Lazy properties")]),_:1})]),s("li",null,[n(t,{to:"#_4-static-properties-and-methods"},{default:o(()=>[a("4. Static properties and methods")]),_:1})]),s("li",null,[n(t,{to:"#_5-access-control"},{default:o(()=>[a("5. Access control")]),_:1})]),s("li",null,[n(t,{to:"#_6-structs-summary"},{default:o(()=>[a("6. Structs summary")]),_:1})])])])])]),g,n(i,l(c({title:"100 Days of Swift - Day 9",desc:"Structs, part two",link:"https://www.hackingwithswift.com/100/9",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),b,_,S,z,x,s("details",T,[q,n(i,l(c({title:"100 Days of Swift - Day 9 - 1. Initializers",desc:"1. Initializers",link:"https://hackingwithswift.com/sixty/7/8/initializers",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),n(p,{src:"youtube/k6NvWnmjIf4"}),D]),A,s("details",j,[I,n(i,l(c({title:"100 Days of Swift - Day 9 - 2. Referring to the current instance",desc:"2. Referring to the current instance",link:"https://hackingwithswift.com/sixty/7/9/referring-to-the-current-instance",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),n(p,{src:"youtube/ZFz3KORr8Bw"}),P]),R,s("details",F,[Y,n(i,l(c({title:"100 Days of Swift - Day 9 - 3. Lazy properties",desc:"3. Lazy properties",link:"https://hackingwithswift.com/sixty/7/10/lazy-properties",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),n(p,{src:"youtube/fau8QgH0pIA"}),N]),B,s("details",O,[W,n(i,l(c({title:"100 Days of Swift - Day 9 - 4. Static properties and methods",desc:"4. Static properties and methods",link:"https://hackingwithswift.com/sixty/7/11/static-properties-and-methods",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),n(p,{src:"youtube/4Y1zZwJOBNk"}),C]),L,s("details",V,[U,n(i,l(c({title:"100 Days of Swift - Day 9 - 5. Access control",desc:"5. Access control",link:"https://hackingwithswift.com/sixty/7/12/access-control",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),n(p,{src:"youtube/FrXYhufwSZc"}),Z]),E,s("details",K,[H,n(i,l(c({title:"100 Days of Swift - Day 9 - 6. Structs summary",desc:"6. Structs summary",link:"https://hackingwithswift.com/sixty/7/13/structs-summary",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),n(p,{src:"youtube/q8El3m2dl-Q"}),J]),M,Q,G])}const as=u(v,[["render",X],["__file","09.html.vue"]]),es=JSON.parse('{"path":"/swift/100-days-of-swift/09.html","title":"Day 09","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 09","description":"100 Days of Swift > Day 09","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of Swift > Day 09"},{"property":"og:description","content":"Day 09"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swift/09.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swift/09.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 09"}],["meta",{"property":"og:description","content":"100 Days of Swift > Day 09"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 09\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Structs, part two","slug":"structs-part-two","link":"#structs-part-two","children":[{"level":3,"title":"1. Initializers","slug":"_1-initializers","link":"#_1-initializers","children":[]},{"level":3,"title":"2. Referring to the current instance","slug":"_2-referring-to-the-current-instance","link":"#_2-referring-to-the-current-instance","children":[]},{"level":3,"title":"3. Lazy properties","slug":"_3-lazy-properties","link":"#_3-lazy-properties","children":[]},{"level":3,"title":"4. Static properties and methods","slug":"_4-static-properties-and-methods","link":"#_4-static-properties-and-methods","children":[]},{"level":3,"title":"5. Access control","slug":"_5-access-control","link":"#_5-access-control","children":[]},{"level":3,"title":"6. Structs summary","slug":"_6-structs-summary","link":"#_6-structs-summary","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":8}]},"readingTime":{"minutes":5.64,"words":1693},"filePathRelative":"swift/100-days-of-swift/09.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{as as comp,es as data};
