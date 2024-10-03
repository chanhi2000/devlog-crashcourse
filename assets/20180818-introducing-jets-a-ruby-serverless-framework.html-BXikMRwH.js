import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,a as e,t as m,b as s,w as o,n as h,g as b,d as n,e as l,r,o as g}from"./app-U_bew1in.js";const f={},v={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},w=e("hr",null,null,-1),_=e("hr",null,null,-1),j=l('<hr><div class="hint-container info"><p class="hint-container-title">Update 2018/12/12</p><p><a href="https://aws.amazon.com/blogs/compute/announcing-ruby-support-for-aws-lambda/" target="_blank" rel="noopener noreferrer">Official Ruby Support</a> was announced at <a href="https://twitter.com/tongueroo/status/1068199997097750528" target="_blank" rel="noopener noreferrer">AWS re:Invent 2018 on Nov 29!</a> Jets has switched over to it: <a href="https://blog.boltops.com/2018/12/12/official-aws-ruby-support-for-jets-serverless-framework" target="_blank" rel="noopener noreferrer">Official AWS Ruby Support for Jets 🎉</a>. This article has been updated to reflect official Ruby support, but video in the post is out-of-date and will be updated in time.</p></div><p><a href="http://rubyonjets.com/" target="_blank" rel="noopener noreferrer">Ruby on Jets</a> is a framework that allows you to build serverless applications in a beautiful language: Ruby. It includes everything needed to build and deploy applications to <a href="https://aws.amazon.com/lambda/" target="_blank" rel="noopener noreferrer">AWS Lambda</a>. I love working with Rails, Ruby and AWS; and wanted to work with something similar in the serverless world. So I built Jets.</p><p>It is key to understand AWS Lambda and API Gateway to understand Jets conceptually. Jets maps your code to Lambda functions and API Gateway resources.</p><ul><li><strong>AWS Lambda</strong> provides Functions as a Service. It allows you to upload and run functions without worrying about the underlying infrastructure.</li><li><strong>API Gateway</strong> is the routing layer for Lambda. It is used to route REST URL endpoints to Lambda functions.</li></ul><hr><h2 id="example-architecture" tabindex="-1"><a class="header-anchor" href="#example-architecture"><span>Example Architecture</span></a></h2><p>Many architectures can be built with Jets. Here’s an example traditional Web architecture that can easily be accomplished with Jets:</p><figure><img src="https://blog.boltops.com/img/posts/2018/09/jets-web-architecture.png" alt="With Jets, you write code and Jets turns the code into AWS Lambda functions and API Gateway resources." tabindex="0" loading="lazy"><figcaption>With Jets, you write code and Jets turns the code into AWS Lambda functions and API Gateway resources.</figcaption></figure><hr><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions"><span>Functions</span></a></h2>',11),x=e("a",{href:"http://rubyonjets.com/",target:"_blank",rel:"noopener noreferrer"},"Jets",-1),A=e("code",null,"app/functions",-1),q=e("code",null,"app/functions/",-1),S=e("code",null,"simple.rb",-1),J=l(`<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb" data-title="rb"><pre><code><span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">handler_function</span></span><span class="token punctuation">(</span><span class="token symbol">event</span><span class="token operator">:</span><span class="token punctuation">,</span> <span class="token symbol">context</span><span class="token operator">:</span><span class="token punctuation">)</span></span>
<span class="line">  puts <span class="token string-literal"><span class="token string">&quot;hello world&quot;</span></span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The default handler is named <code>handler_function</code>.</p><figure><img src="https://blog.boltops.com/img/posts/2018/10/jets-simple-lambda-function-console.png" alt="The lambda function shows up in the Lambda console like this" tabindex="0" loading="lazy"><figcaption>The lambda function shows up in the Lambda console like this</figcaption></figure><figure><img src="https://blog.boltops.com/img/posts/2018/10/jets-simple-lambda-function-result.png" alt="You can run the function in the AWS Lambda console and see the results" tabindex="0" loading="lazy"><figcaption>You can run the function in the AWS Lambda console and see the results</figcaption></figure><p>Though simple functions are supported by Jets, they do not add much value as other classes like <a href="http://rubyonjets.com/docs/controllers/" target="_blank" rel="noopener noreferrer">Controllers</a> and <a href="http://rubyonjets.com/docs/jobs/" target="_blank" rel="noopener noreferrer">Jobs</a>. These other classes add many conveniences and are more powerful to use. We’ll cover them next.</p><hr><h2 id="controllers" tabindex="-1"><a class="header-anchor" href="#controllers"><span>Controllers</span></a></h2><p>Here’s the first example of Jets code, a controller:</p>`,8),R=e("code",null,"app/controllers/",-1),I=e("code",null,"posts_controller.rb",-1),L=l(`<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb" data-title="rb"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">PostsController</span> <span class="token operator">&lt;</span> ApplicationController</span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">index</span></span></span>
<span class="line">    <span class="token comment"># renders Lambda Proxy structure compatiable with API Gateway</span></span>
<span class="line">    render json<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token symbol">hello</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;world&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">action</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;index&quot;</span></span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">show</span></span></span>
<span class="line">    id <span class="token operator">=</span> params<span class="token punctuation">[</span><span class="token symbol">:id</span><span class="token punctuation">]</span> <span class="token comment"># params available</span></span>
<span class="line">    <span class="token comment"># puts goes to the lambda logs</span></span>
<span class="line">    puts event <span class="token comment"># raw lambda event available</span></span>
<span class="line">    render json<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token symbol">action</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;show&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">id</span><span class="token operator">:</span> id<span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you’re familiar with Rails and Sinatra, this will look familiar. Helper methods like params provide the parameters from the API Gateway event. The render method renders a Lambda Proxy structure back that API Gateway understands.</p><p>Jets takes each controller’s public methods and turns them into Lambda functions.</p><figure><img src="https://blog.boltops.com/img/posts/2018/08/intro/demo-lambda-functions-controller.png" alt="Here are the functions in the Lambda console" tabindex="0" loading="lazy"><figcaption>Here are the functions in the Lambda console</figcaption></figure><hr><h2 id="routes" tabindex="-1"><a class="header-anchor" href="#routes"><span>Routes</span></a></h2><p>Here’s what a routes file could look like:</p>`,7),P=e("code",null,"config/",-1),W=e("code",null,"routes.rb",-1),T=l(`<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb" data-title="rb"><pre><code><span class="line">Jets<span class="token punctuation">.</span>application<span class="token punctuation">.</span>routes<span class="token punctuation">.</span>draw <span class="token keyword">do</span></span>
<span class="line">  get  <span class="token string-literal"><span class="token string">&quot;posts&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">to</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;posts#index&quot;</span></span></span>
<span class="line">  get  <span class="token string-literal"><span class="token string">&quot;posts/new&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">to</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;posts#new&quot;</span></span></span>
<span class="line">  get  <span class="token string-literal"><span class="token string">&quot;posts/:id&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">to</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;posts#show&quot;</span></span></span>
<span class="line">  post <span class="token string-literal"><span class="token string">&quot;posts&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">to</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;posts#create&quot;</span></span></span>
<span class="line">  get  <span class="token string-literal"><span class="token string">&quot;posts/:id/edit&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">to</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;posts#edit&quot;</span></span></span>
<span class="line">  put  <span class="token string-literal"><span class="token string">&quot;posts&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">to</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;posts#update&quot;</span></span></span>
<span class="line">  delete  <span class="token string-literal"><span class="token string">&quot;posts&quot;</span></span><span class="token punctuation">,</span> <span class="token symbol">to</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;posts#delete&quot;</span></span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Jets takes the routes file, creates the corresponding API Gateway resources, and associates them with Lambda functions.</p><figure><img src="https://blog.boltops.com/img/posts/2018/08/intro/demo-api-gateway.png" alt="Here are the routes in the API Gateway console" tabindex="0" loading="lazy"><figcaption>Here are the routes in the API Gateway console</figcaption></figure><hr><h2 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs"><span>Jobs</span></a></h2><p>Jets also supports asynchronous jobs that work outside the web request-response cycle. Job code looks like:</p>`,6),C=e("code",null,"app/jobs/",-1),E=e("code",null,"hard_job.rb",-1),G=l(`<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb" data-title="rb"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">HardJob</span> <span class="token operator">&lt;</span> ApplicationJob</span>
<span class="line">  rate <span class="token string-literal"><span class="token string">&quot;10 hours&quot;</span></span> <span class="token comment"># every 10 hours</span></span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">dig</span></span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token symbol">done</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;digging&quot;</span></span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">  cron <span class="token string-literal"><span class="token string">&quot;0 */12 * * ? *&quot;</span></span> <span class="token comment"># every 12 hours</span></span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">lift</span></span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token symbol">done</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;lifting&quot;</span></span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The code above creates Lambda functions and CloudWatch event rules to handle the scheduling of work.</p><figure><img src="https://blog.boltops.com/img/posts/2018/08/intro/demo-lambda-functions-jobs.png" alt="You can check for the job functions in the Lambda console" tabindex="0" loading="lazy"><figcaption>You can check for the job functions in the Lambda console</figcaption></figure><figure><img src="https://blog.boltops.com/img/posts/2018/08/intro/demo-job-cloudwatch-rule.png" alt="You can also see the associated CloudWatch Event Rule in the CloudWatch console" tabindex="0" loading="lazy"><figcaption>You can also see the associated CloudWatch Event Rule in the CloudWatch console</figcaption></figure><hr><h2 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure"><span>Project structure</span></a></h2><p>Here’s what a Jets project structure looks like.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.</span>
<span class="line">├── app</span>
<span class="line">│   ├── controllers</span>
<span class="line">│   ├── helpers</span>
<span class="line">│   ├── javascript</span>
<span class="line">│   ├── jobs</span>
<span class="line">│   ├── models</span>
<span class="line">│   └── views</span>
<span class="line">├── bin</span>
<span class="line">├── config</span>
<span class="line">├── db</span>
<span class="line">├── public</span>
<span class="line">└── spec</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),F=e("code",null,"app/models",-1),z=e("code",null,"app/views",-1),H=e("code",null,"app/controllers",-1),V=e("code",null,"config",-1),Y=e("a",{href:"http://rubyonjets.com/docs/structure/",target:"_blank",rel:"noopener noreferrer"},"Project Structure",-1),N=l(`<hr><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start"><span>Quick Start</span></a></h2><p>Here are commands that generate a CRUD app to get you started:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">gem <span class="token function">install</span> jets</span>
<span class="line">jets new demo</span>
<span class="line"><span class="token builtin class-name">cd</span> demo</span>
<span class="line">jets generate scaffold Post title:string</span>
<span class="line"><span class="token function">vim</span> .env.development <span class="token comment"># edit with local db settings</span></span>
<span class="line">jets db:create db:migrate</span>
<span class="line">jets server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The jets server command starts a server that mimics API Gateway so you can test locally. Open <a href="http://localhost:8888/posts" target="_blank" rel="noopener noreferrer">http://localhost:8888/posts</a> and test out the CRUD site created from the scaffold.</p>`,5),B=e("code",null,".env.development.remote",-1),D=l(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">vim</span> .env.development.remote <span class="token comment"># adjust with remote db settings</span></span>
<span class="line">jets deploy</span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># API Gateway Endpoint: https://puc3xyk4cj.execute-api.us-west-2.amazonaws.com/dev/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You should see something like this</p><figure><img src="https://blog.boltops.com/img/posts/2018/08/intro/demo-lambda-functions.png" alt="Lambda Functions" tabindex="0" loading="lazy"><figcaption>Lambda Functions</figcaption></figure><figure><img src="https://blog.boltops.com/img/posts/2018/08/intro/demo-api-gateway.png" alt="API Gateway" tabindex="0" loading="lazy"><figcaption>API Gateway</figcaption></figure><figure><img src="https://blog.boltops.com/img/posts/2018/08/intro/jets-demo-posts-list-v2.png" alt="The app itself" tabindex="0" loading="lazy"><figcaption>The app itself</figcaption></figure><p>Here’s a live <a href="https://demo.rubyonjets.com/posts" target="_blank" rel="noopener noreferrer">Demo</a> of this tutorial. Note, the example records automatically get deleted and reseeded daily.</p><hr><h2 id="other-live-demos" tabindex="-1"><a class="header-anchor" href="#other-live-demos"><span>Other Live demos</span></a></h2><p>Here are additional Live Demos of Jets applications:</p><ul><li><a href="https://api.demo.rubyonjets.com/" target="_blank" rel="noopener noreferrer">A Simple API with Jets</a>: A Simple API. Here’s a the blog post: <a href="https://blog.boltops.com/2019/01/13/build-an-api-service-with-jets-ruby-serverless-framework/" target="_blank" rel="noopener noreferrer">Build an API with the Jets Ruby Serverless Framework</a></li><li><a href="https://afterburner.demo.rubyonjets.com/" target="_blank" rel="noopener noreferrer">Jets Afterburner: Rails Support</a>: Please read over the considerations in the docs.</li><li><a href="https://mega.demo.rubyonjets.com/" target="_blank" rel="noopener noreferrer">Mega Mode: Jets and Rails Combined</a>: A interesting hybrid mode.</li><li><a href="https://upload.demo.rubyonjets.com/" target="_blank" rel="noopener noreferrer">Image Upload with CarrierWave</a>: Binary Support</li></ul>`,10),M={href:"https://github.com/tongueroo/jets-examples",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"tongueroo/jets-examples",-1),U=l(`<hr><h2 id="extra-environments" tabindex="-1"><a class="header-anchor" href="#extra-environments"><span>Extra Environments</span></a></h2><p>An interesting benefit of running applications on AWS Lambda is that you only get charged for actual requests. So <a href="https://blog.boltops.com/2018/09/13/jets-tutorial-extra-environments-part-7" target="_blank" rel="noopener noreferrer">extra environments</a> are likely in the <a href="https://aws.amazon.com/free/" target="_blank" rel="noopener noreferrer">AWS free tier</a>. You could do this:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">JETS_ENV_EXTRA=2 jets deploy</span>
<span class="line">JETS_ENV_EXTRA=3 jets deploy</span>
<span class="line">...</span>
<span class="line">JETS_ENV_EXTRA=8 jets deploy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You essentially get unlimited free environments, each of them taking a few minutes to provision.</p><hr><h2 id="binary-gems" tabindex="-1"><a class="header-anchor" href="#binary-gems"><span>Binary Gems</span></a></h2><p>With Serverless, you will might run into the quirky binary gem issue. Most gems are pure Ruby code and can be used as-is on AWS Lambda. However, some gems like nokogiri use compiled native extensions. So you must compile these binary gems to the Lambda target architecture for them to work. Jets uses Lambda Gems to resolve this and makes for a much more seamless and pleasant developer experience. The Beta for <a href="https://blog.boltops.com/2019/01/01/introducing-lamdagems-hassle-free-serverless-ruby-build-and-deploy" target="_blank" rel="noopener noreferrer">Lambda Gems</a> is has been open. Early signups for <a href="https://www.lambdagems.com" target="_blank" rel="noopener noreferrer">Lambda Gems</a> will receive a special offer for their support.</p><hr>`,9);function K(i,Q){const t=r("router-link"),p=r("VPCard"),c=r("VidStack"),a=r("FontIcon");return g(),u("div",null,[e("h1",v,[e("a",k,[e("span",null,m(i.$frontmatter.title)+" 관련",1)])]),e("nav",y,[e("ul",null,[e("li",null,[s(t,{to:"#example-architecture"},{default:o(()=>[n("Example Architecture")]),_:1})]),e("li",null,[s(t,{to:"#functions"},{default:o(()=>[n("Functions")]),_:1})]),e("li",null,[s(t,{to:"#controllers"},{default:o(()=>[n("Controllers")]),_:1})]),e("li",null,[s(t,{to:"#routes"},{default:o(()=>[n("Routes")]),_:1})]),e("li",null,[s(t,{to:"#jobs"},{default:o(()=>[n("Jobs")]),_:1})]),e("li",null,[s(t,{to:"#project-structure"},{default:o(()=>[n("Project structure")]),_:1})]),e("li",null,[s(t,{to:"#quick-start"},{default:o(()=>[n("Quick Start")]),_:1})]),e("li",null,[s(t,{to:"#other-live-demos"},{default:o(()=>[n("Other Live demos")]),_:1})]),e("li",null,[s(t,{to:"#extra-environments"},{default:o(()=>[n("Extra Environments")]),_:1})]),e("li",null,[s(t,{to:"#binary-gems"},{default:o(()=>[n("Binary Gems")]),_:1})])])]),w,s(p,h(b({title:"Introducing Jets - A Ruby Serverless Framework",desc:"...",link:"https://blog.boltops.com/2018/08/18/introducing-jets-a-ruby-serverless-framework",logo:"https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_800/https://blog.boltops.com/img/posts/2018/08/introducing-jets-v5.png",background:"rgba(20,27,106,0.2)"})),null,16),_,s(c,{src:"youtube/17Y3AJl9dw4"}),j,e("p",null,[x,n(" supports writing simple AWS Lambda functions with Ruby. You define them in the "),s(a,{icon:"fas fa-folder-open"}),A,n(" folder. A function looks like this:")]),e("blockquote",null,[s(a,{icon:"fas fa-folder-open"}),q,s(a,{icon:"iconfont icon-advanced"}),S,n(":")]),J,e("blockquote",null,[s(a,{icon:"fas fa-folder-open"}),R,s(a,{icon:"iconfont icon-advanced"}),I,n(":")]),L,e("blockquote",null,[s(a,{icon:"fas fa-folder-open"}),P,s(a,{icon:"iconfont icon-advanced"}),W,n(":")]),T,e("blockquote",null,[s(a,{icon:"fas fa-folder-open"}),C,s(a,{icon:"iconfont icon-advanced"}),E,n(":")]),G,e("p",null,[n("We have the traditional MVC folders: "),s(a,{icon:"fas fa-folder-open"}),F,n(", "),s(a,{icon:"fas fa-folder-open"}),z,n(", and "),s(a,{icon:"fas fa-folder-open"}),H,n(". The "),s(a,{icon:"fas fa-folder-open"}),V,n(" folder contains your application’s configuration settings. Further explanation for each folder is provided on the "),Y,n(" docs.")]),N,e("p",null,[n("When you’re ready, adjust your "),s(a,{icon:"fas fa-file-lines"}),B,n(" with an RDS database and deploy to AWS Lambda.")]),D,e("p",null,[n("More examples are in the "),e("a",M,[s(a,{icon:"iconfont icon-github"}),O]),n(" repo.")]),U])}const $=d(f,[["render",K],["__file","20180818-introducing-jets-a-ruby-serverless-framework.html.vue"]]),ee=JSON.parse('{"path":"/ruby/rubyonjets-learning-content/20180818-introducing-jets-a-ruby-serverless-framework.html","title":"Introducing Jets - A Ruby Serverless Framework","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Introducing Jets - A Ruby Serverless Framework","description":"Jets - Learning Content > Introducing Jets - A Ruby Serverless Framework","category":["Ruby"],"tag":["crashcourse","ruby","jets","aws","aws-lambda","cloudwatch"],"head":[[{"meta":null},{"property":"og:title","content":"Jets - Learning Content > Introducing Jets - A Ruby Serverless Framework"},{"property":"og:description","content":"Introducing Jets - A Ruby Serverless Framework"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/ruby/rubyonjets-learning-content/20180818-introducing-jets-a-ruby-serverless-framework.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/ruby/rubyonjets-learning-content/20180818-introducing-jets-a-ruby-serverless-framework.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Introducing Jets - A Ruby Serverless Framework"}],["meta",{"property":"og:description","content":"Jets - Learning Content > Introducing Jets - A Ruby Serverless Framework"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.boltops.com/img/posts/2018/09/jets-web-architecture.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"ruby"}],["meta",{"property":"article:tag","content":"jets"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"aws-lambda"}],["meta",{"property":"article:tag","content":"cloudwatch"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Introducing Jets - A Ruby Serverless Framework\\",\\"image\\":[\\"https://blog.boltops.com/img/posts/2018/09/jets-web-architecture.png\\",\\"https://blog.boltops.com/img/posts/2018/10/jets-simple-lambda-function-console.png\\",\\"https://blog.boltops.com/img/posts/2018/10/jets-simple-lambda-function-result.png\\",\\"https://blog.boltops.com/img/posts/2018/08/intro/demo-lambda-functions-controller.png\\",\\"https://blog.boltops.com/img/posts/2018/08/intro/demo-api-gateway.png\\",\\"https://blog.boltops.com/img/posts/2018/08/intro/demo-lambda-functions-jobs.png\\",\\"https://blog.boltops.com/img/posts/2018/08/intro/demo-job-cloudwatch-rule.png\\",\\"https://blog.boltops.com/img/posts/2018/08/intro/demo-lambda-functions.png\\",\\"https://blog.boltops.com/img/posts/2018/08/intro/demo-api-gateway.png\\",\\"https://blog.boltops.com/img/posts/2018/08/intro/jets-demo-posts-list-v2.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Example Architecture","slug":"example-architecture","link":"#example-architecture","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":2,"title":"Controllers","slug":"controllers","link":"#controllers","children":[]},{"level":2,"title":"Routes","slug":"routes","link":"#routes","children":[]},{"level":2,"title":"Jobs","slug":"jobs","link":"#jobs","children":[]},{"level":2,"title":"Project structure","slug":"project-structure","link":"#project-structure","children":[]},{"level":2,"title":"Quick Start","slug":"quick-start","link":"#quick-start","children":[]},{"level":2,"title":"Other Live demos","slug":"other-live-demos","link":"#other-live-demos","children":[]},{"level":2,"title":"Extra Environments","slug":"extra-environments","link":"#extra-environments","children":[]},{"level":2,"title":"Binary Gems","slug":"binary-gems","link":"#binary-gems","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":8}]},"readingTime":{"minutes":4.53,"words":1358},"filePathRelative":"ruby/rubyonjets-learning-content/20180818-introducing-jets-a-ruby-serverless-framework.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{$ as comp,ee as data};
