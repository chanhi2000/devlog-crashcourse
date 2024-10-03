import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,a as n,t as g,b as a,w as o,n as i,g as l,d as s,e as u,r as p,o as m}from"./app-U_bew1in.js";const w={},b={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},v=n("hr",null,null,-1),q=n("h2",{id:"project-6-part-one",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#project-6-part-one"},[n("span",null,"Project 6, part one")])],-1),_=n("p",null,"Famed French fashion designer Coco Chanel once said that “fashion is architecture: it is a matter of proportions.” The same is true of user interface design: our goal is to make all our important functionality available to the user without making it feel squashed or squeezed in.",-1),L=n("p",null,"Today we’re starting a new technique project where we’ll look at how Auto Layout lets us set some fairly complicated rules to make our UI look great. There are several different ways of doing this, and I’ll be showing you them all in this project – I’d rather you tried them yourself and decided which worked best for you, rather than me trying to pick and choose based on my own preferences.",-1),A=n("p",null,"Regardless of which you choose, as you’ll see the end result is that we have extraordinary power over the way our user interface adapts to different devices and rotation changes.",-1),S=n("p",null,[n("strong",null,"Today you have three topics to work through, and you’ll learn about using aspect ratio constraints, Visual Format language, and more.")],-1),C=n("h3",{id:"setting-up",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#setting-up"},[n("span",null,"Setting up")])],-1),T={class:"hint-container details"},j=n("summary",null,"Setting up",-1),F=n("p",null,"In this technique project you're going to learn more about Auto Layout, the powerful and expressive way iOS lets you design your layouts. We used it in project 2 to make sure our flag buttons were positioned correctly, but that project has a problem: if you rotate your device, the flags don't fit on the screen!",-1),I=n("p",null,"So, we're first going to fix project 2 so that it demonstrates more advanced Auto Layout techniques (while also making the flags stay on the screen correctly!), then take a look at ways you can use Auto Layout in code.",-1),V=n("p",null,"First: take a copy of project 2, call it project6a, then open it in Xcode. All set? Then let's begin…",-1),x=n("h3",{id:"advanced-auto-layout",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#advanced-auto-layout"},[n("span",null,"Advanced Auto Layout")])],-1),D={class:"hint-container details"},z=n("summary",null,"Advanced Auto Layout",-1),E=u('<p>When you run the project, it looks fine in portrait, but is unplayable on landscape because some of the buttons are hidden. You have two options: either disable landscape mode, or make your layout work across both orientations.</p><p>Disabling orientations isn&#39;t a great solution, but sometimes it&#39;s the <em>right</em> solution. Most games, for example, fix their orientation because it just doesn&#39;t make sense to support both. If you want to do this, press <kbd>Cmd</kbd>+<kbd>1</kbd> to show the project navigator on the left of your Xcode window, select your project (it&#39;s the first item in the pane), then to the right of where you just clicked will appear another pane showing &quot;PROJECT&quot; and &quot;TARGETS&quot;, along with some more information in the center.</p><p><strong>Please note</strong>: This project and targets list can be hidden by clicking the disclosure button in the top-left of the project editor (directly beneath the icon with four squares), and you may find yours is already hidden. I strongly recommend you show this list – hiding it will only make things harder to find, so please make sure it&#39;s visible!</p><p>In the picture below you can see the project editor, with the device orientations at the bottom. This is the collapsed view of projects and targets, so there&#39;s a dropdown arrow at the top that says &quot;Project2&quot; (just above where it says Identity in bold), and to the left of that is the button to show the projects and targets list.</p><figure><img src="https://www.hackingwithswift.com/img/books/hws/6-1.png" alt="Use the project editor to set the device orientations you want to support." tabindex="0" loading="lazy"><figcaption>Use the project editor to set the device orientations you want to support.</figcaption></figure><p>This view is called the project editor, and contains a huge number of options that affect the way your app works. You&#39;ll be using this a lot in the future, so remember how to get here! Select Project 2 under TARGETS, then choose the General tab, and scroll down until you see four checkboxes called Device Orientation. You can select only the ones you want to support.</p><p>You&#39;ll need to support selective orientations in some later projects, but for now let&#39;s take the smart solution: add extra rules to Auto Layout so it can make the layout work great in landscape mode.</p>',7),N=n("code",null,"Main.storyboard",-1),P=n("kbd",null,"Ctrl",-1),R=u("<p>When you release your mouse button, a popup will appear that includes the option “Bottom Space to Safe Area” – please select that. This creates a new Auto Layout constraint that the bottom of the flag must be at least X points away from the bottom of the view controller, where X is equal to whatever space there is in there now.</p><p>Although this is a valid rule, it will screw up your layout because we now have a complete set of exact vertical rules: the top flag should be 36 points from the top, the second 30 from the first, the third 30 from the second, and the third X away from the bottom. It&#39;s 207 for me, but yours might be different.</p><p>Because we&#39;ve told Auto Layout exactly how big all the spaces should be, it will add them up and divide the remaining space among the three flags however it thinks best. That is, the flags must now be stretched vertically in order to fill the space, which is almost certainly what we don&#39;t want.</p><p>Instead, we&#39;re going to tell Auto Layout where there is some flexibility, and that&#39;s in the new bottom rule we just created. The bottom flag doesn&#39;t need to be precisely 207 points away from the bottom of the safe area – it just needs to be <em>some</em> distance away, so that it doesn&#39;t touch the edge. If there is more space, great, Auto Layout should use it, but all we care about is the minimum.</p><p>Select the third flag to see its list of constraints drawn in blue, then (carefully!) select the bottom constraint we just added. In the utilities view on the right, choose the attributes inspector (<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>4</kbd>), and you should see Relation set to Equal and Constant set to 207 (or some other value, depending on your layout).</p><p>What you need to do is change Equal to be &quot;Greater Than or Equal&quot;, then change the Constant value to be 20. This sets the rule &quot;make it at least 20, but you can make it more to fill up space.&quot; The layout won&#39;t change visually while you&#39;re doing this, because the end result is the same. But at least now that Auto Layout knows it has some flexibility beyond just stretching the flags!</p><p>Our problem is still not fixed, though: in landscape, an iPhone SE has just 320 points of space to work with, so Auto Layout is going to make our flags fit by squashing one or maybe even two of them. Squashed flags aren&#39;t good, and having uneven sizes of flags isn&#39;t good either, so we&#39;re going to add some more rules.</p><p>Select the second button, then <kbd>Ctrl</kbd>-drag to the first button. When given the list of options, choose Equal Heights. Now do the same from the third button to the second button. This rule ensures that at all times the three flags have the same height, so Auto Layout can no longer squash one button to make it all fit and instead has to squash all three equally.</p><p>That fixes part of the problem, but in some respects it has made things worse. Rather than having one squashed flag, we now have three! But with one more rule, we can stop the flags from being squashed ever. Select the first button, then <kbd>Ctrl</kbd>-drag a little bit upwards – but stay within the button! When you release your mouse button, you&#39;ll see the option &quot;Aspect Ratio&quot;, so please choose it.</p><p>The Aspect Ratio constraint solves the squashing once and for all: it means that if Auto Layout is forced to reduce the height of the flag, it will reduce its width by the same proportion, meaning that the flag will always look correct. Add the Aspect Ratio constraint to the other two flags, and run your app again. It should work great in portrait and landscape, all thanks to Auto Layout!</p>",10),U=n("h3",{id:"auto-layout-in-code-addconstraints-with-visual-format-language",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#auto-layout-in-code-addconstraints-with-visual-format-language"},[n("span",null,[s("Auto Layout in code: "),n("code",null,"addConstraints()"),s(" with Visual Format Language")])])],-1),W={class:"hint-container details"},B=n("summary",null,"Auto Layout in code: addConstraints() with Visual Format Language",-1),H=u(`<p>Create a new Single View App project in Xcode, naming it Project6b. We&#39;re going to create some views by hand, then position them using Auto Layout. Put this into your <code>viewDidLoad()</code> method:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> label1 <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    label1<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    label1<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red</span>
<span class="line">    label1<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;THESE&quot;</span></span></span>
<span class="line">    label1<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> label2 <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    label2<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    label2<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>cyan</span>
<span class="line">    label2<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;ARE&quot;</span></span></span>
<span class="line">    label2<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> label3 <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    label3<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    label3<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>yellow</span>
<span class="line">    label3<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;SOME&quot;</span></span></span>
<span class="line">    label3<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> label4 <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    label4<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    label4<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>green</span>
<span class="line">    label4<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;AWESOME&quot;</span></span></span>
<span class="line">    label4<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> label5 <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    label5<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    label5<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>orange</span>
<span class="line">    label5<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;LABELS&quot;</span></span></span>
<span class="line">    label5<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        </span>
<span class="line"></span>
<span class="line">    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label1<span class="token punctuation">)</span></span>
<span class="line">    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label2<span class="token punctuation">)</span></span>
<span class="line">    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label3<span class="token punctuation">)</span></span>
<span class="line">    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label4<span class="token punctuation">)</span></span>
<span class="line">    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label5<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>All that code creates five <code>UILabel</code> objects, each with unique text and a unique background color. All five views then get added to the view belonging to our view controller by using <code>view.addSubview()</code>.</p><p>We also set the property <code>translatesAutoresizingMaskIntoConstraints</code> to be <code>false</code> on each label, because by default iOS generates Auto Layout constraints for you based on a view&#39;s size and position. We&#39;ll be doing it by hand, so we need to disable this feature.</p><p>If you run the app now, you&#39;ll see seem some colorful labels at the top, overlapping so it looks like it says &quot;LABELS ME&quot;. That&#39;s because our labels are placed in their default position (at the top-left of the screen) and are all sized to fit their content thanks to us calling <code>sizeToFit()</code> on each of them.</p><p>We&#39;re going to add some constraints that say each label should start at the left edge of its superview, and end at the right edge. What’s more, we&#39;re going to do this using a technique called Auto Layout Visual Format Language (VFL), which is kind of like a way of drawing the layout you want with a series of keyboard symbols.</p><p>Before we do that, we need to create a dictionary of the views we want to lay out. The reason this is needed for VFL will become clear shortly, but first here&#39;s the dictionary you need to add below the last call to <code>addSubview()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> viewsDictionary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;label1&quot;</span></span><span class="token punctuation">:</span> label1<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;label2&quot;</span></span><span class="token punctuation">:</span> label2<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;label3&quot;</span></span><span class="token punctuation">:</span> label3<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;label4&quot;</span></span><span class="token punctuation">:</span> label4<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;label5&quot;</span></span><span class="token punctuation">:</span> label5<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That creates a dictionary with strings for its keys and our labels as its values (the values). So, to get access to <code>label1</code>, we can now use <code>viewsDictionary[&quot;label1&quot;]</code>. This might seem redundant, but wait just a moment longer: it&#39;s time for some Visual Format Language!</p><p>Add these lines directly below the <code>viewsDictionary</code> that was just created:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span> <span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;H:|[label1]|&quot;</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span> <span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;H:|[label2]|&quot;</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span> <span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;H:|[label3]|&quot;</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span> <span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;H:|[label4]|&quot;</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span> <span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;H:|[label5]|&quot;</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That&#39;s a lot of code, but actually it&#39;s just the same thing five times over. As a result, we could easily rewrite those in a loop, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">for</span> label <span class="token keyword">in</span> viewsDictionary<span class="token punctuation">.</span>keys <span class="token punctuation">{</span></span>
<span class="line">    view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span> <span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;H:|[</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">label</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">]|&quot;</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that we&#39;re using string interpolation to put the key (&quot;label1&quot;, etc) into the VFL.</p><p>Let&#39;s eliminate the easy stuff, then focus on what remains.</p><ul><li><code>view.addConstraints()</code>: this adds an array of constraints to our view controller&#39;s view. This array is used rather than a single constraint because VFL can generate multiple constraints at a time.</li><li><code>NSLayoutConstraint.constraints(withVisualFormat:)</code> is the Auto Layout method that converts VFL into an array of constraints. It accepts lots of parameters, but the important ones are the first and last.</li><li>We pass <code>[]</code> (an empty array) for the options parameter and <code>nil</code> for the metrics parameter. You can use these options to customize the meaning of the VFL, but for now we don&#39;t care.</li></ul><p>That&#39;s the easy stuff. So, let&#39;s look at the Visual Format Language itself: <code>&quot;H:|[label1]|&quot;</code>. As you can see it&#39;s a string, and that string describes how we want the layout to look. That VFL gets converted into Auto Layout constraints, then added to the view.</p><p>The <code>H:</code> parts means that we&#39;re defining a horizontal layout; we&#39;ll do a vertical layout soon. The pipe symbol, |, means &quot;the edge of the view.&quot; We&#39;re adding these constraints to the main view inside our view controller, so this effectively means &quot;the edge of the view controller.&quot; Finally, we have <code>[label1]</code>, which is a visual way of saying &quot;put <code>label1</code> here&quot;. Imagine the brackets, [ and ], are the edges of the view.</p><p>So, <code>&quot;H:|[label1]|&quot;</code> means &quot;horizontally, I want my <code>label1</code> to go edge to edge in my view.&quot; But there&#39;s a hiccup: what is &quot;label1&quot;? Sure, <em>we</em> know what it is because it&#39;s the name of our variable, but variable names are just things for humans to read and write – the variable names aren&#39;t actually saved and used when the program runs.</p><p>This is where our <code>viewsDictionary</code> dictionary comes in: we used strings for the key and <code>UILabel</code>s for the value, then set &quot;label1&quot; to be our label. This dictionary gets passed in along with the VFL, and gets used by iOS to look up the names from the VFL. So when it sees <code>[label1]</code>, it looks in our dictionary for the &quot;label1&quot; key and uses its value to generate the Auto Layout constraints.</p><p>That&#39;s the entire VFL line explained: each of our labels should stretch edge-to-edge in our view. If you run the program now, that&#39;s sort of what you&#39;ll see, although it highlights our second problem: we don&#39;t have a vertical layout in place, so although all the labels sit edge-to-edge in the view, they all overlap.</p><p>We&#39;re going to fix this with another set of constraints, but this time it&#39;s just one (long) line.</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span> <span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;V:|[label1]-[label2]-[label3]-[label4]-[label5]&quot;</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That&#39;s identical to the previous five, except for the VFL part. This time we&#39;re specifying V:, meaning that these constraints are vertical. And we have multiple views inside the VFL, so lots of constraints will be generated. The new thing in the VFL this time is the - symbol, which means &quot;space&quot;. It&#39;s 10 points by default, but you can customize it.</p><p>Note that our vertical VFL doesn&#39;t have a pipe at the end, so we&#39;re not forcing the last label to stretch all the way to the edge of our view. This will leave whitespace after the last label, which is what we want right now.</p><p>If you run your program now, you&#39;ll see all five labels stretching edge-to-edge horizontally, then spaced neatly vertically. It would have taken quite a lot of <kbd>Ctrl</kbd>-dragging in Interface Builder to make this same layout, so I hope you can appreciate how powerful VFL is!</p>`,26),M=n("hr",null,null,-1);function O(r,G){const t=p("router-link"),e=p("VPCard"),c=p("VidStack"),d=p("FontIcon");return m(),k("div",null,[n("h1",b,[n("a",f,[n("span",null,g(r.$frontmatter.title)+" 관련",1)])]),n("nav",y,[n("ul",null,[n("li",null,[a(t,{to:"#project-6-part-one"},{default:o(()=>[s("Project 6, part one")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#setting-up"},{default:o(()=>[s("Setting up")]),_:1})]),n("li",null,[a(t,{to:"#advanced-auto-layout"},{default:o(()=>[s("Advanced Auto Layout")]),_:1})]),n("li",null,[a(t,{to:"#auto-layout-in-code-addconstraints-with-visual-format-language"},{default:o(()=>[s("Auto Layout in code: addConstraints() with Visual Format Language")]),_:1})])])])])]),v,a(e,i(l({title:"100 Days of Swift - Day 30",desc:"Project 6, part one",link:"https://www.hackingwithswift.com/100/30",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),q,_,L,A,S,C,n("details",T,[j,a(e,i(l({title:"100 Days of Swift - Day 30 - Setting up",desc:"Setting up",link:"https://hackingwithswift.com/read/6/1/setting-up",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),a(c,{src:"youtube/acqxNJ4Kbhk"}),F,I,V]),x,n("details",D,[z,a(e,i(l({title:"100 Days of Swift - Day 30 - Advanced Auto Layout",desc:"Advanced Auto Layout",link:"https://hackingwithswift.com/read/6/2/advanced-auto-layout",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),a(c,{src:"youtube/OxIQZciPHdY"}),E,n("p",null,[s("Open "),a(d,{icon:"fas fa-file-lines"}),N,s(" in Interface Builder, select the bottom flag, then "),P,s("-drag from the flag to the white space directly below the flag – in the view controller itself. The direction you drag is important, so please drag straight down.")]),R]),U,n("details",W,[B,a(e,i(l({title:"100 Days of Swift - Day 30 - Auto Layout in code: `addConstraints()` with Visual Format Language",desc:"Auto Layout in code: `addConstraints()` with Visual Format Language",link:"https://hackingwithswift.com/read/6/3/auto-layout-in-code-addconstraints-with-visual-format-language",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),a(c,{src:"youtube/GiGhVZ-2EQg"}),H]),M])}const Z=h(w,[["render",O],["__file","30.html.vue"]]),K=JSON.parse('{"path":"/swift/100-days-of-swift/30.html","title":"Day 30","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 30","description":"100 Days of Swift > Day 30","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of Swift > Day 30"},{"property":"og:description","content":"Day 30"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swift/30.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swift/30.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 30"}],["meta",{"property":"og:description","content":"100 Days of Swift > Day 30"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.hackingwithswift.com/img/books/hws/6-1.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 30\\",\\"image\\":[\\"https://www.hackingwithswift.com/img/books/hws/6-1.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Project 6, part one","slug":"project-6-part-one","link":"#project-6-part-one","children":[{"level":3,"title":"Setting up","slug":"setting-up","link":"#setting-up","children":[]},{"level":3,"title":"Advanced Auto Layout","slug":"advanced-auto-layout","link":"#advanced-auto-layout","children":[]},{"level":3,"title":"Auto Layout in code: addConstraints() with Visual Format Language","slug":"auto-layout-in-code-addconstraints-with-visual-format-language","link":"#auto-layout-in-code-addconstraints-with-visual-format-language","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":12}]},"readingTime":{"minutes":9.29,"words":2786},"filePathRelative":"swift/100-days-of-swift/30.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{Z as comp,K as data};
