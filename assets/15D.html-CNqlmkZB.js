import{_}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as g,a as e,t as f,b as s,n as r,g as p,w as a,d as n,e as b,r as i,o as y}from"./app-U_bew1in.js";const v={},C={id:"frontmatter-title-관련",tabindex:"-1"},S={class:"header-anchor",href:"#frontmatter-title-관련"},A={class:"table-of-contents"},T=e("hr",null,null,-1),k=e("p",null,[n("ElastiCache Memcached 클러스터와 캐시 노드가 완전히 생성되었더라도 엔드포인트 주소로 접속이 되지 않습니다. Memcached 클러스터를 생성할 때 Security Group을 기본값인 default (VPC)로 설정했습니다. 이 default (VPC)는 모든 트래픽에 대해 Inbound가 열려있지만접속 가능한 IP 대역"),e("sup",null,"Source"),n("은 default 자기 자신으로 설정되어 있습니다. 즉 같은 default (VPC) Security Group 설정 안에서만 접속이 허용되므로 외부에서는 접속할 수 없습니다. 따라서 Memcached 클러스터 전용 Security Group을 생성하고 포트(11211)를 열어줘야 합니다.")],-1),E=e("p",null,"RDS와 ElastiCache는 큰 차이점이 있습니다. RDS의 데이터베이스 엔진은 AWS 외부(인터넷)에서 접속이 허용되어 있지만 ElastiCache의 캐시 엔진은 AWS 외부에서 접속할 수 없습니다. Security Group을 생성하여 모든 IP 대역에 대해 접속을 허용하더라도 동일한 VPC에 속한 EC2 인스턴스에서만 접속할 수 있습니다.",-1),z=e("p",null,"자세한 내용은 링크를 참조하기 바랍니다.",-1),M=e("p",null,"ElastiCache Memecached 클러스터용 Security Group을 생성해보겠습니다.",-1),w=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/15_.png",alt:'AWS 콘솔의 메인 화면에서 Compute & Networking의 <FontIcon icon="iconfont icon-select"/>를 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),G=e("code",null,"[EC2]",-1),W=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/16_.png",alt:'<FontIcon icon="iconfont icon-select"/> → 를 클릭한 뒤 위쪽의 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),x=e("code",null,"[NETWORK & SECURITY]",-1),P=e("code",null,"[Security Groups]",-1),I=e("code",null,"[Create Security Group]",-1),O=e("p",null,"ElastiCache Memcached 클러스터용 Security Group을 생성합니다.",-1),D=e("ul",null,[e("li",null,[e("strong",null,"Security group name"),n(": Security Group의 이름입니다. Memcached Cluster를 입력합니다.")]),e("li",null,[e("strong",null,"Description"),n(": Security Group 설명입니다. Memcached Cluster를 입력합니다.")]),e("li",null,[e("strong",null,"VPC"),n(": Security Group이 적용될 VPC입니다. 기본값 그대로 사용합니다.")])],-1),R=e("code",null,"[Inbound]",-1),V=e("ul",null,[e("li",null,[e("strong",null,"Type"),n(": 트래픽 종류입니다. Memcached는 미리 정의된 것이 없으므로 Custom TCP Rule을 선택합니다.")]),e("li",null,[e("strong",null,"Protocol"),n(": 프토로콜 입니다. Custom TCP Rule 선택하면 자동으로 TCP가 설정됩니다.")]),e("li",null,[e("strong",null,"Port Range"),n(": 포트 번호입니다. 우리는 Memcached 포트를 열어야 하므로 11211을 입력합니다.")]),e("li",null,[e("strong",null,"Source"),n(": 접속 가능한 IP 또는 IP 대역입니다. Anywhere를 선택합니다(실무에서는 My IP를 선택하여 자신의 IP만 접속할 수 있도록 설정하거나, Custom IP를 선택하여 특정 IP 대역을 설정하도록 합니다).")])],-1),F=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/17_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),N=e("code",null,"[Create]",-1),K=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/18_.png",alt:'Security Group 목록(<FontIcon icon="iconfont icon-select"/> → )에 Memcached Cluster Security Group이 생성되었습니다.',tabindex:"0",loading:"lazy"},null,-1),j=e("code",null,"[NETWORK & SECURITY]",-1),L=e("code",null,"[Security Groups]",-1),U=e("code",null,"[Amazon ElastiCache]",-1),B=e("code",null,"[Cache Clusters]",-1),Y=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/19_.png",alt:'ElastiCache 캐시 클러스터 목록에서 Memcached 클러스터()에 있는 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),Z=e("code",null,"examplememcached",-1),q=e("code",null,"[Modify]",-1),J=e("p",null,"ElastiCache Memcached 클러스터의 설정을 변경합니다.",-1),Q=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/20_.png",alt:'VPC Security Group(s)에서 방금 생성한 Memcached Cluster를 선택하고 아래쪽 <FontIcon icon="iconfont icon-select"/>를 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),$=e("code",null,"[Yes, Modify]",-1),H=e("figure",null,[e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/21_.png",alt:"Memcached 클러스터()의 설정이 변경 중입니다. 약 10초 정도 기다리면 설정이 완전히 적용됩니다. 1 nodes 링크를 클릭하여 캐시 노드 목록으로 이동합니다.",tabindex:"0",loading:"lazy"}),e("figcaption",null,[n("Memcached 클러스터("),e("code",null,"examplememcached"),n(")의 설정이 변경 중입니다. 약 10초 정도 기다리면 설정이 완전히 적용됩니다. 1 nodes 링크를 클릭하여 캐시 노드 목록으로 이동합니다.")])],-1),X=e("figure",null,[e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/22_.png",alt:"Memcached 클러스터의 캐시 노드 목록에서 포트 번호와 엔드포인트 주소를 확인할 수 있습니다.",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Memcached 클러스터의 캐시 노드 목록에서 포트 번호와 엔드포인트 주소를 확인할 수 있습니다.")],-1),ee=e("sup",null,"telnet",-1),ne=e("p",null,[e("code",null,"telnet <엔드포인트 주소> 11211"),n(" 순으로 명령을 입력하면 Memcached 캐시 노드로 접속할 수 있습니다. 접속한 후 "),e("code",null,"stats"),n("를 입력하면 현재 캐시 노드의 정보가 표시됩니다.")],-1),se=e("code",null,"examplememcached.o5nouc.0001.apne1.cache.amazonaws.com",-1),te=b(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">telnet examplememcached.o5nouc.0001.apne1.cache.amazonaws.com <span class="token number">11211</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># Escape character is &#39;^]&#39;.</span></span>
<span class="line"><span class="token comment"># stats</span></span>
<span class="line"><span class="token comment"># STAT pid 1</span></span>
<span class="line"><span class="token comment"># STAT uptime 28596</span></span>
<span class="line"><span class="token comment"># STAT time 1399822401</span></span>
<span class="line"><span class="token comment"># STAT version 1.4.14</span></span>
<span class="line"><span class="token comment"># STAT libevent 1.4.13-stable</span></span>
<span class="line"><span class="token comment"># STAT pointer_size 64</span></span>
<span class="line"><span class="token comment"># STAT rusage_user 0.060003</span></span>
<span class="line"><span class="token comment"># STAT rusage_system 0.100006</span></span>
<span class="line"><span class="token comment"># STAT curr_connections 5</span></span>
<span class="line"><span class="token comment"># STAT total_connections 486</span></span>
<span class="line"><span class="token comment"># STAT connection_structures 7</span></span>
<span class="line"><span class="token comment"># STAT reserved_fds 5</span></span>
<span class="line"><span class="token comment"># 생략...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ae=e("code",null,"[Security Group]",-1),ce=e("p",null,"앞에서 설명한 것처럼 ElastiCache의 캐시 노드는 AWS 외부에서 접속할 수 없습니다.",-1),oe=e("hr",null,null,-1),ie=e("h2",{id:"텔넷-클라이언트-설치",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#텔넷-클라이언트-설치"},[e("span",null,"텔넷 클라이언트 설치")])],-1),le=e("code",null,"[제어판]",-1),re=e("code",null,"[프로그램 및 기능]",-1),pe=e("code",null,"[Windows 기능 사용/사용 안 함]",-1),ue=e("code",null,"[텔넷 클라이언트 선택 후 설치]",-1),de=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"sudo"),n(" yum "),e("span",{class:"token function"},"install"),n(" telnet")]),n(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),me=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(),e("span",{class:"token function"},"install"),n(" telnet")]),n(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),he=e("hr",null,null,-1);function _e(u,ge){const l=i("VPCard"),d=i("router-link"),t=i("FontIcon"),m=i("RouteLink"),h=i("Tabs");return y(),g("div",null,[e("h1",C,[e("a",S,[e("span",null,f(u.$frontmatter.title)+" 관련",1)])]),s(l,r(p({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),e("nav",A,[e("ul",null,[e("li",null,[s(d,{to:"#텔넷-클라이언트-설치"},{default:a(()=>[n("텔넷 클라이언트 설치")]),_:1})])])]),T,s(l,r(p({title:"15장 - 4. ElastiCache Memcached 클러스터 Security Group 생성 및 설정하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter15/04",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),k,E,z,s(l,r(p({title:"Amazon ElastiCache FAQ",desc:"ElastiCache와 Redis의 차이점과 ElastiCache와 Memcached의 차이점을 포함하여 Amazon ElastiCache에 대해 자주 묻는 질문에 대한 답변을 찾아보세요.",link:"https://aws.amazon.com/ko/elasticache/faqs/#general-security",logo:"https://aws.amazon.com/favicon.ico",background:"rgba(247,155,38,0.2)"})),null,16),M,e("figure",null,[w,e("figcaption",null,[n("AWS 콘솔의 메인 화면에서 Compute & Networking의 "),s(t,{icon:"iconfont icon-select"}),G,n("를 클릭합니다.")])]),e("figure",null,[W,e("figcaption",null,[s(t,{icon:"iconfont icon-select"}),x,n(" → "),P,n("를 클릭한 뒤 위쪽의 "),s(t,{icon:"iconfont icon-select"}),I,n(" 버튼을 클릭합니다.")])]),O,D,e("p",null,[n("외부에서 들어오는 트래픽인 "),s(t,{icon:"iconfont icon-select"}),R,n(" 탭을 선택합니다(Inbound가 기본으로 선택되어 있을 것입니다). 아래쪽 Add Rule 버튼을 클릭합니다.")]),V,e("figure",null,[F,e("figcaption",null,[n("설정이 완료되었으면 "),s(t,{icon:"iconfont icon-select"}),N,n(" 버튼을 클릭합니다.")])]),e("figure",null,[K,e("figcaption",null,[n("Security Group 목록("),s(t,{icon:"iconfont icon-select"}),j,n(" → "),L,n(")에 Memcached Cluster Security Group이 생성되었습니다.")])]),e("p",null,[n("이제 다시 ElastiCache 캐시 클러스터 목록("),s(t,{icon:"iconfont icon-select"}),U,n(" → "),B,n(")으로 이동합니다.")]),e("figure",null,[Y,e("figcaption",null,[n("ElastiCache 캐시 클러스터 목록에서 Memcached 클러스터("),Z,n(")에 있는 "),s(t,{icon:"iconfont icon-select"}),q,n(" 버튼을 클릭합니다.")])]),J,e("figure",null,[Q,e("figcaption",null,[n("VPC Security Group(s)에서 방금 생성한 Memcached Cluster를 선택하고 아래쪽 "),s(t,{icon:"iconfont icon-select"}),$,n("를 클릭합니다.")])]),H,X,e("p",null,[n("Memcached는 텔넷"),ee,n("으로 접속할 수 있습니다. 앞에서 생성한 EC2 인스턴스(Example Server)에서 텔넷을 이용하여 Memcached 캐시 노드로 접속해보겠습니다(아직 EC2 인스턴스를 생성하지 않았다면 "),s(m,{to:"/aws/art-of-aws/04C.html"},{default:a(()=>[n("'4.3 EC2 인스턴스 생성하기'")]),_:1}),n("를 참조하여 EC2 인스턴스를 생성하기 바랍니다).")]),ne,s(t,{icon:"fas fa-globe"}),se,n("는 제가 생성한 캐시 노드 엔드포인트 주소입니다. 여러분들이 생성한 캐시 노드의 엔드포인트 주소를 입력하기 바랍니다."),te,e("p",null,[n("접속이 되지 않는다면 Security Group에 포트 번호를 정상적으로 입력하였는지, Memcached 클러스터 설정에서 방금 생성한 "),s(t,{icon:"iconfont icon-select"}),ae,n("을 선택하였는지, 텔넷 접속에서 Endpoint와 포트 번호를 정확하게 입력하였는지, EC2 인스턴스가 같은 VPC에 속해 있는지 확인합니다.")]),ce,oe,ie,s(h,{id:"116",data:[{id:"Windows 7 이상"},{id:'<FontIcon icon="fa-brands fa-linux"/>Amazon Linux, <FontIcon icon="fa-brands fa-centos"/>CentOS'},{id:'<FontIcon icon="fa-brands fa-ubuntu"/>Ubuntu'}],active:0},{title0:a(({value:c,isActive:o})=>[n("Windows 7 이상")]),title1:a(({value:c,isActive:o})=>[s(t,{icon:"fa-brands fa-linux"}),n("Amazon Linux, "),s(t,{icon:"fa-brands fa-centos"}),n("CentOS")]),title2:a(({value:c,isActive:o})=>[s(t,{icon:"fa-brands fa-ubuntu"}),n("Ubuntu")]),tab0:a(({value:c,isActive:o})=>[s(t,{icon:"iconfont icon-select"}),le,n(" → "),re,n(" → "),pe,n(" → "),ue]),tab1:a(({value:c,isActive:o})=>[de]),tab2:a(({value:c,isActive:o})=>[me]),_:1}),he])}const ye=_(v,[["render",_e],["__file","15D.html.vue"]]),ve=JSON.parse('{"path":"/aws/art-of-aws/15D.html","title":"15D. ElastiCache Memcached 클러스터 Security Group 생성 및 설정하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"15D. ElastiCache Memcached 클러스터 Security Group 생성 및 설정하기","description":"아마존 웹 서비스를 다루는 기술 > 15D. ElastiCache Memcached 클러스터 Security Group 생성 및 설정하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 15D. ElastiCache Memcached 클러스터 Security Group 생성 및 설정하기"},{"property":"og:description","content":"15D. ElastiCache Memcached 클러스터 Security Group 생성 및 설정하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/15D.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/15D.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"15D. ElastiCache Memcached 클러스터 Security Group 생성 및 설정하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 15D. ElastiCache Memcached 클러스터 Security Group 생성 및 설정하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/15_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"15D. ElastiCache Memcached 클러스터 Security Group 생성 및 설정하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/15_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/16_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/17_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/18_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/19_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/20_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/21_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter15/22_.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"텔넷 클라이언트 설치","slug":"텔넷-클라이언트-설치","link":"#텔넷-클라이언트-설치","children":[]}],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":4}]},"readingTime":{"minutes":1.68,"words":505},"filePathRelative":"aws/art-of-aws/15D.md","localizedDate":"2024년 4월 8일","excerpt":"\\n"}');export{ye as comp,ve as data};
