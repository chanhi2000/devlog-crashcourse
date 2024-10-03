import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,a as t,t as g,b as a,n,g as o,e as i,d as e,r as p,o as m}from"./app-U_bew1in.js";const u={},h={id:"frontmatter-title-관련",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title-관련"},R=t("nav",{class:"table-of-contents"},[t("ul")],-1),y=t("hr",null,null,-1),f=i('<p>Latency Based Routing, Weighted Round Robin, Geo Routing 기능을 사용하는 방법은 어렵지 않습니다. 반복되는 내용을 모두 설명하기에는 분량이 많아지므로 간단하게 설명하겠습니다.</p><p>Latency Based Routing을 설정하는 방법은 다음과 같습니다.</p><ul><li><strong>Name</strong>: 사용하고 싶은 서브 도메인을 설정합니다(루트 도메인도 설정할 수 있습니다).</li><li><strong>Type</strong>: A - IPv4 address를 선택합니다.</li><li><strong>Alias</strong>: EC2 인스턴스라면 No를 선택하고, ELB라면 Yes를 선택합니다. <ul><li><strong>Alias Target</strong>: Alias를 Yes로 선택했다면 목록에서 ELB 주소를 선택합니다.</li></ul></li><li><strong>Value</strong>: EC2 인스턴스의 공인 IP 주소를 입력합니다. ELB는 이 부분을 생략합니다.</li><li><strong>Routing Policy</strong>: Latency를 선택합니다.</li><li><strong>Region</strong>: Value에 입력된 IP 주소, Alias Target에서 선택한 ELB가 속한 리전이 자동으로 선택됩니다.</li><li><strong>Set ID:</strong> 같은 도메인의 Latency Based Routing A 레코드끼리 구분할 수 있도록 ID를 설정합니다(예: Tokyo Data Center, California Data Center).</li></ul><figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/56_.png" alt="동일한 도메인(서브, 루트 도메인)으로 IP 주소(리전)를 다르게 설정하여 Latency Based Routing A 레코드를 계속 생성합니다." tabindex="0" loading="lazy"><figcaption>동일한 도메인(서브, 루트 도메인)으로 IP 주소(리전)를 다르게 설정하여 Latency Based Routing A 레코드를 계속 생성합니다.</figcaption></figure><p>Weighted Round Robin을 설정하는 방법은 다음과 같습니다.</p>',5),b=t("ul",null,[t("li",null,[t("strong",null,"Name"),e(": 사용하고 싶은 서브 도메인을 설정합니다(루트 도메인도 설정할 수 있습니다).")]),t("li",null,[t("strong",null,"Type"),e(": A - IPv4 address를 선택합니다. Weighted Round Robin은 CNAME 레코드를 사용할 수 없습니다.")]),t("li",null,[t("strong",null,"Alias"),e(": EC2 인스턴스라면 No를 선택하고, ELB라면 Yes를 선택합니다. "),t("ul",null,[t("li",null,[t("strong",null,"Alias Target"),e(": Alias를 Yes로 선택했다면 목록에서 ELB 주소를 선택합니다.")])])]),t("li",null,[t("strong",null,"Value"),e(": EC2 인스턴스의 공인 IP 주소를 입력합니다. ELB는 이 부분을 생략합니다.")]),t("li",null,[t("strong",null,"Routing Policy"),e(": Weighted를 선택합니다.")]),t("li",null,[t("strong",null,"Weight"),e(": 가중치를 설정합니다. 0부터 255까지 설정할 수 있습니다. 각 레코드별 가중치 계산은 "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mfrac",null,[t("mrow",null,[t("mo",{fence:"true"},"("),t("mtext",null,"설정한 가중치"),t("mo",{fence:"true"},")")]),t("mrow",null,[t("mo",{fence:"true"},"("),t("mtext",null,"전체 가중치 합계"),t("mo",{fence:"true"},")")])])]),t("annotation",{encoding:"application/x-tex"},"\\frac{\\left(\\text{설정한 가중치}\\right)}{\\left(\\text{전체 가중치 합계}\\right)}")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1.53em","vertical-align":"-0.52em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"1.01em"}},[t("span",{style:{top:"-2.655em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"minner mtight"},[t("span",{class:"mopen mtight delimcenter",style:{top:"0em"}},[t("span",{class:"mtight"},"(")]),t("span",{class:"mord text mtight"},[t("span",{class:"mord hangul_fallback mtight"},"전체"),t("span",{class:"mord mtight"}," "),t("span",{class:"mord hangul_fallback mtight"},"가중치"),t("span",{class:"mord mtight"}," "),t("span",{class:"mord hangul_fallback mtight"},"합계")]),t("span",{class:"mclose mtight delimcenter",style:{top:"0em"}},[t("span",{class:"mtight"},")")])])])])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.485em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"minner mtight"},[t("span",{class:"mopen mtight delimcenter",style:{top:"0em"}},[t("span",{class:"mtight"},"(")]),t("span",{class:"mord text mtight"},[t("span",{class:"mord hangul_fallback mtight"},"설정한"),t("span",{class:"mord mtight"}," "),t("span",{class:"mord hangul_fallback mtight"},"가중치")]),t("span",{class:"mclose mtight delimcenter",style:{top:"0em"}},[t("span",{class:"mtight"},")")])])])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.52em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])])])]),e(" 입니다.")]),t("li",null,[t("strong",null,"Set ID"),e(": 같은 도메인의 Weighted Round Robin A 레코드끼리 구분할 수 있도록 ID를 설정합니다(예: Tokyo Data Center, California Data Center).")])],-1),_=i('<figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/57_.png" alt="동일한 도메인(서브, 루트 도메인)으로 가중치Weight 값을 다르게 설정하여 Weighted Round Robin A 레코드를 계속 생성합니다." tabindex="0" loading="lazy"><figcaption>동일한 도메인(서브, 루트 도메인)으로 가중치<sup>Weight</sup> 값을 다르게 설정하여 Weighted Round Robin A 레코드를 계속 생성합니다.</figcaption></figure><p>Geo Routing을 설정하는 방법은 다음과 같습니다.</p><ul><li><strong>Name</strong>: 사용하고 싶은 서브 도메인을 설정합니다(루트 도메인도 설정할 수 있습니다).</li><li><strong>Type</strong>: A - IPv4 address를 선택합니다.</li><li><strong>Alias</strong>: EC2 인스턴스라면 No를 선택하고, ELB라면 Yes를 선택합니다. <ul><li><strong>Alias Target</strong>: Alias를 Yes로 선택했다면 목록에서 ELB 주소를 선택합니다.</li></ul></li><li><strong>Value</strong>: EC2 인스턴스의 공인 IP 주소를 입력합니다. ELB는 이 부분을 생략합니다.</li><li><strong>Routing Policy</strong>: Geolocation을 선택합니다.</li><li><strong>Location</strong>: 지역 설정이며 국가별로 선택할 수 있습니다.</li><li><strong>Sublocation</strong>: 미국은 주(State)를 선택할 수 있습니다.</li><li><strong>Set ID</strong>: 같은 도메인의 Geo Routing A 레코드끼리 구분할 수 있도록 ID를 설정합니다(예: Tokyo Data Center, California Data Center).</li></ul><figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/58_.png" alt="동일한 도메인(서브, 루트 도메인)으로 지역을 다르게 설정하여 Geo Routing A 레코드를 계속 생성합니다. 지역은 달라도 같은 IP 주소를 설정할 수 있습니다." tabindex="0" loading="lazy"><figcaption>동일한 도메인(서브, 루트 도메인)으로 지역을 다르게 설정하여 Geo Routing A 레코드를 계속 생성합니다. 지역은 달라도 같은 IP 주소를 설정할 수 있습니다.</figcaption></figure><hr>',5);function A(l,v){const s=p("VPCard");return m(),c("div",null,[t("h1",h,[t("a",d,[t("span",null,g(l.$frontmatter.title)+" 관련",1)])]),a(s,n(o({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),R,y,a(s,n(o({title:"17장 - 6. Route53 Latency Based Routing, Weighted Round Robin, Geo Routing 설정하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter17/06",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),f,b,_])}const B=r(u,[["render",A],["__file","17F.html.vue"]]),L=JSON.parse('{"path":"/aws/art-of-aws/17F.html","title":"17F. Route53 Latency Based Routing, Weighted Round Robin, Geo Routing 설정하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"17F. Route53 Latency Based Routing, Weighted Round Robin, Geo Routing 설정하기","description":"아마존 웹 서비스를 다루는 기술 > 17F. Route53 Latency Based Routing, Weighted Round Robin, Geo Routing 설정하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 17F. Route53 Latency Based Routing, Weighted Round Robin, Geo Routing 설정하기"},{"property":"og:description","content":"17F. Route53 Latency Based Routing, Weighted Round Robin, Geo Routing 설정하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/17F.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/17F.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"17F. Route53 Latency Based Routing, Weighted Round Robin, Geo Routing 설정하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 17F. Route53 Latency Based Routing, Weighted Round Robin, Geo Routing 설정하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/56_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17F. Route53 Latency Based Routing, Weighted Round Robin, Geo Routing 설정하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/56_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/57_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter17/58_.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":1.07,"words":321},"filePathRelative":"aws/art-of-aws/17F.md","localizedDate":"2024년 4월 8일","excerpt":"\\n"}');export{B as comp,L as data};
