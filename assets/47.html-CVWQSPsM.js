import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,a as e,t as m,b as t,w as n,n as s,g as i,e as c,r,o as f,d as l}from"./app-U_bew1in.js";const w={},y={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},v=e("hr",null,null,-1),b=c('<h2 id="project-11-part-three" tabindex="-1"><a class="header-anchor" href="#project-11-part-three"><span>Project 11, part three</span></a></h2><p>Today we reach the end of project 11, which means it’s time for some more challenges. I know the clue is right there in the name, but these are challenges are designed to be <em>challenging</em> – you need to think about previous problems you’ve solved across other projects, then apply that knowledge in a new and different way here.</p><p>These challenges are designed to help you learn, because it’s one thing to follow my instructions and quite another to apply your knowledge to new problems. However, if you find them tricky don’t get worried if you see folks online solving them quickly – they are here to help you learn, not as some sort of way for you to measure yourself against others. As Shakuntala Devi once said, “nobody challenges me – I challenge myself.”</p><p><strong>Today you should work through the <code>SKEmitterNode</code> and wrap up chapters for project 11, complete its review, then work through all three of its challenges.</strong></p><h3 id="special-effects-skemitternode" tabindex="-1"><a class="header-anchor" href="#special-effects-skemitternode"><span>Special effects: <code>SKEmitterNode</code></span></a></h3>',5),_={class:"hint-container details"},S=e("summary",null,"Special effects: SKEmitterNode",-1),j=c(`<p>Our current <code>destroy()</code> method does nothing much, it just removes the ball from the game. But I made it a method for a reason, and that&#39;s so that we can add some special effects now, in one place, so that however a ball gets destroyed the same special effects are used.</p><p>Perhaps unsurprisingly, it&#39;s remarkably easy to create special effects with SpriteKit. In fact, it has a built-in particle editor to help you create effects like fire, snow, rain and smoke almost entirely through a graphical editor. I already created an example particle effect for you (which you can customize soon, don&#39;t worry!) so let&#39;s take a look at the code first.</p><p>Modify your <code>destroy()</code> method to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">destroy</span><span class="token punctuation">(</span>ball<span class="token punctuation">:</span> <span class="token class-name">SKNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">let</span> fireParticles <span class="token operator">=</span> <span class="token class-name">SKEmitterNode</span><span class="token punctuation">(</span>fileNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;FireParticles&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        fireParticles<span class="token punctuation">.</span>position <span class="token operator">=</span> ball<span class="token punctuation">.</span>position</span>
<span class="line">        <span class="token function">addChild</span><span class="token punctuation">(</span>fireParticles<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    ball<span class="token punctuation">.</span><span class="token function">removeFromParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>SKEmitterNode</code> class is new and powerful: it&#39;s designed to create high-performance particle effects in SpriteKit games, and all you need to do is provide it with the filename of the particles you designed and it will do the rest. Once we have an <code>SKEmitterNode</code> object to work with, we position it where the ball was then use <code>addChild()</code> to add it to the scene.</p><p>If you run the app now, you&#39;ll see the balls explode in a fireball when they touch a slot – a pretty darn amazing effect given how little code was written!</p><p>But the real fun is yet to come, because the code for this project is now all done and you get to play with the particle editor. In Xcode, look in the Content folder you dragged in and select the FireParticles.sks file to load the particle editor.</p><p>The particle editor is split in two: the center area shows how the current particle effect looks, and the right pane shows one of three inspectors. Of those three inspectors, only the third is useful because that&#39;s where you&#39;ll see all the options you can use to change the way your particles look.</p><p>At the time of writing, Xcode&#39;s particle editor is a little buggy, so I suggest you change the Maximum value to 0 before beginning otherwise you might see nothing at all.</p><p>Confused by all the options? Here&#39;s what they do:</p><ul><li>Particle Texture: what image to use for your particles.</li><li>Particles Birthrate: how fast to create new particles.</li><li>Particles Maximum: the maximum number of particles this emitter should create before finishing.</li><li>Lifetime Start: the basic value for how many seconds each particle should live for.</li><li>Lifetime Range: how much, plus or minus, to vary lifetime.</li><li>Position Range X/Y: how much to vary the creation position of particles from the emitter node&#39;s position.</li><li>Angle Start: which angle you want to fire particles, in degrees, where 0 is to the right and 90 is straight up.</li><li>Angle Range: how many degrees to randomly vary particle angle.</li><li>Speed Start: how fast each particle should move in its direction.</li><li>Speed Range: how much to randomly vary particle speed.</li><li>Acceleration X/Y: how much to affect particle speed over time. This can be used to simulate gravity or wind.</li><li>Alpha Start: how transparent particles are when created.</li><li>Alpha Range: how much to randomly vary particle transparency.</li><li>Alpha Speed: how much to change particle transparency over time. A negative value means &quot;fade out.&quot;</li><li>Scale Start / Range / Speed: how big particles should be when created, how much to vary it, and how much it should change over time. A negative value means &quot;shrink slowly.&quot;</li><li>Rotation Start / Range / Speed: what Z rotation particles should have, how much to vary it, and how much they should spin over time.</li><li>Color Blend Factor / Range / Speed: how much to color each particle, how much to vary it, and how much it should change over time.</li></ul><p>Note: Once you&#39;ve finished editing your particles, make sure you put a maximum value back on them otherwise they&#39;ll never go away!</p><p>It&#39;s worth adding that you can create particles from one of Xcode&#39;s built-in particle template. Add a new file, but this time choose &quot;Resource&quot; under the iOS heading, then choose &quot;SpriteKit Particle File&quot; to see the list of options.</p>`,13),x=e("h3",{id:"wrap-up",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wrap-up"},[e("span",null,"Wrap up")])],-1),P={class:"hint-container details"},D=e("summary",null,"Wrap up",-1),K=c('<p>This project is done, and it&#39;s been a long one, but I hope you look at the results and think it was all worth it. Plus, you&#39;ve once again learned a lot: SpriteKit, physics, blend modes, radians and <code>CGFloat</code>.</p><p>You’ve got the firm foundations of a real game here, but there&#39;s lots more you can do to make it even better.</p><h4 id="review-what-you-learned" tabindex="-1"><a class="header-anchor" href="#review-what-you-learned"><span>Review what you learned</span></a></h4><p>Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.</p><p><a href="https://www.hackingwithswift.com/review/hws/project-11-pachinko" target="_blank" rel="noopener noreferrer">Click here to review what you learned in project 11.</a></p><h4 id="challenge" tabindex="-1"><a class="header-anchor" href="#challenge"><span>Challenge</span></a></h4><p>One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:</p><ol><li>The pictures we’re using in have other ball pictures rather than just “ballRed”. Try writing code to use a random ball color each time they tap the screen.</li><li>Right now, users can tap anywhere to have a ball created there, which makes the game too easy. Try to force the Y value of new balls so they are near the top of the screen.</li><li>Give players a limit of five balls, then remove obstacle boxes when they are hit. Can they clear all the pins with just five balls? You could make it so that landing on a green slot gets them an extra ball.</li></ol>',8),R=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"Wrap up - Additional"),e("ul",null,[e("li",null,[e("a",{href:"https://www.hackingwithswift.com/review/hws/project-11-pachinko",target:"_blank",rel:"noopener noreferrer"},"Review for Project 11: Pachinko")])])],-1),T=e("p",null,"That’s another project finished, and your first using SpriteKit! Why not record a video of your finished product and show it around?",-1),N=e("hr",null,null,-1);function A(p,C){const a=r("router-link"),o=r("VPCard"),h=r("VidStack");return f(),u("div",null,[e("h1",y,[e("a",g,[e("span",null,m(p.$frontmatter.title)+" 관련",1)])]),e("nav",k,[e("ul",null,[e("li",null,[t(a,{to:"#project-11-part-three"},{default:n(()=>[l("Project 11, part three")]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#special-effects-skemitternode"},{default:n(()=>[l("Special effects: SKEmitterNode")]),_:1})]),e("li",null,[t(a,{to:"#wrap-up"},{default:n(()=>[l("Wrap up")]),_:1})])])])])]),v,t(o,s(i({title:"100 Days of Swift - Day 47",desc:"Project 11, part three",link:"https://www.hackingwithswift.com/100/47",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),b,e("details",_,[S,t(o,s(i({title:"100 Days of Swift - Day 47 - Special effects: SKEmitterNode",desc:"Special effects: SKEmitterNode",link:"https://www.hackingwithswift.com/read/11/7/special-effects-skemitternode",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),t(h,{src:"youtube/cv-G8dzQlug"}),j]),x,e("details",P,[D,t(o,s(i({title:"100 Days of Swift - Day 47 - Wrap up",desc:"Wrap up",link:"https://www.hackingwithswift.com/read/11/8/wrap-up",logo:"https://www.hackingwithswift.com/favicon.svg",background:"rgba(213,52,58,0.2)"})),null,16),t(h,{src:"youtube/njZ8SkzlDxU"}),K]),R,T,N])}const E=d(w,[["render",A],["__file","47.html.vue"]]),V=JSON.parse('{"path":"/swift/100-days-of-swift/47.html","title":"Day 47","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Day 47","description":"100 Days of Swift > Day 47","category":["Swift"],"tag":["crashcourse","paul-hudson","swift","hacking-with-swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"100 Days of Swift > Day 47"},{"property":"og:description","content":"Day 47"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/100-days-of-swift/47.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/100-days-of-swift/47.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Day 47"}],["meta",{"property":"og:description","content":"100 Days of Swift > Day 47"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"paul-hudson"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"hacking-with-swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Day 47\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Project 11, part three","slug":"project-11-part-three","link":"#project-11-part-three","children":[{"level":3,"title":"Special effects: SKEmitterNode","slug":"special-effects-skemitternode","link":"#special-effects-skemitternode","children":[]},{"level":3,"title":"Wrap up","slug":"wrap-up","link":"#wrap-up","children":[]}]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":10}]},"readingTime":{"minutes":4.49,"words":1348},"filePathRelative":"swift/100-days-of-swift/47.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{E as comp,V as data};
