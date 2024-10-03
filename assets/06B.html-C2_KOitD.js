import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as t,t as m,b as s,n,g as c,d as e,r as i,o as h}from"./app-U_bew1in.js";const d={},g={id:"frontmatter-title-관련",tabindex:"-1"},_={class:"header-anchor",href:"#frontmatter-title-관련"},u=t("nav",{class:"table-of-contents"},[t("ul")],-1),f=t("hr",null,null,-1),E=t("p",null,"이제 Elastic IP를 사용할 수 있도록 EC2 인스턴스(Example Server)에 연결해보겠습니다.",-1),I=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/7_.png",alt:'Elastic IP 목록(<FontIcon icon="iconfont icon-select"/> → )에서 새로 할당 받은 Elastic IP를 선택하고 마우스 오른쪽 버튼을 클릭하면 팝업 메뉴가 나옵니다. <FontIcon icon="iconfont icon-select"/>를 클릭합니다(맨 위의 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭해도 됩니다).',tabindex:"0",loading:"lazy"},null,-1),P=t("code",null,"[NETWORK & SECURITY]",-1),y=t("code",null,"[Elastic IPs]",-1),A=t("code",null,"[Associate Address]",-1),b=t("code",null,"[Associate Address]",-1),C=t("p",null,"EC2 인스턴스에 Elastic IP를 연결합니다.",-1),v=t("ul",null,[t("li",null,[t("strong",null,"Instance"),e(": Instance 입력 부분을 클릭하면 현재 실행되고 있는 EC2 인스턴스의 목록이 표시됩니다. 이전에 만든 Example Server를 선택합니다.")]),t("li",null,[t("strong",null,"Network Interface"),e(": Network Interface 입력 부분을 클릭하면 현재 생성되어 있는 Network Interface가 표시됩니다. 우리는 EC2 인스턴스에 연결하기로 했으므로 이 부분은 비워둡니다.")]),t("li",null,[t("strong",null,"Private IP Address"),e(": 내부 사설 IP 주소입니다. Instance에서 EC2 인스턴스를 선택하면 자동으로 설정됩니다.")]),t("li",null,[t("strong",null,"Reassociation"),e(": 해당 Elastic IP가 이미 다른 곳에 연결되어 있는데도 다시 새로운 곳에 연결하려고 하면 에러가 발생합니다. Reassociation에 체크하면 다른 곳에 연결되어 있더라도 강제로 가져와서 연결합니다.")])],-1),T=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/8_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),S=t("code",null,"[Associate]",-1),w=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/9_.png",alt:'Elastic IP 목록(<FontIcon icon="iconfont icon-select"/> → )을 보면 EC2 인스턴스(Example Server)에 Elastic IP가 연결되었습니다.',tabindex:"0",loading:"lazy"},null,-1),z=t("code",null,"[NETWORK & SECURITY]",-1),B=t("code",null,"[Elastic IPs]",-1),x=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/10_.png",alt:'EC2 인스턴스 목록(<FontIcon icon="iconfont icon-select"/> → )에서도 앞에서 생성한 EC2 인스턴스 (Example Server)를 선택하면 아래 세부 내용에 연결된 Elastic IP가 표시됩니다 (Elastic IP를 연결하면 Public IP도 Elastic IP 주소와 같은 IP 주소로 설정됩니다).',tabindex:"0",loading:"lazy"},null,-1),O=t("code",null,"[INSTANCES]",-1),W=t("code",null,"[Instances]",-1),k=t("p",null,"이제 이 공인 IP를 DNS 서버에서 도메인과 연결하거나 HTTP, SSH, RDP 등의 접속을 할 수 있습니다.",-1),R=t("hr",null,null,-1);function N(r,F){const a=i("VPCard"),o=i("FontIcon");return h(),p("div",null,[t("h1",g,[t("a",_,[t("span",null,m(r.$frontmatter.title)+" 관련",1)])]),s(a,n(c({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),u,f,s(a,n(c({title:"6장 - 2. Elastic IP 연결하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter06/02",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),E,t("figure",null,[I,t("figcaption",null,[e("Elastic IP 목록("),s(o,{icon:"iconfont icon-select"}),P,e(" → "),y,e(")에서 새로 할당 받은 Elastic IP를 선택하고 마우스 오른쪽 버튼을 클릭하면 팝업 메뉴가 나옵니다. "),s(o,{icon:"iconfont icon-select"}),A,e("를 클릭합니다(맨 위의 "),s(o,{icon:"iconfont icon-select"}),b,e(" 버튼을 클릭해도 됩니다).")])]),C,v,t("figure",null,[T,t("figcaption",null,[e("설정이 완료되었으면 "),s(o,{icon:"iconfont icon-select"}),S,e(" 버튼을 클릭합니다.")])]),t("figure",null,[w,t("figcaption",null,[e("Elastic IP 목록("),s(o,{icon:"iconfont icon-select"}),z,e(" → "),B,e(")을 보면 EC2 인스턴스(Example Server)에 Elastic IP가 연결되었습니다.")])]),t("figure",null,[x,t("figcaption",null,[e("EC2 인스턴스 목록("),s(o,{icon:"iconfont icon-select"}),O,e(" → "),W,e(")에서도 앞에서 생성한 EC2 인스턴스 (Example Server)를 선택하면 아래 세부 내용에 연결된 Elastic IP가 표시됩니다 (Elastic IP를 연결하면 Public IP도 Elastic IP 주소와 같은 IP 주소로 설정됩니다).")])]),k,R])}const K=l(d,[["render",N],["__file","06B.html.vue"]]),V=JSON.parse('{"path":"/aws/art-of-aws/06B.html","title":"06B. Elastic IP 연결하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"06B. Elastic IP 연결하기","description":"아마존 웹 서비스를 다루는 기술 > 06B. Elastic IP 연결하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 06B. Elastic IP 연결하기"},{"property":"og:description","content":"06B. Elastic IP 연결하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/06B.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/06B.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"06B. Elastic IP 연결하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 06B. Elastic IP 연결하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/7_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/7_.png"}],["meta",{"name":"twitter:image:alt","content":"06B. Elastic IP 연결하기"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:published_time","content":"2014-09-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06B. Elastic IP 연결하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/7_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/8_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/9_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/10_.png\\"],\\"datePublished\\":\\"2014-09-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"next":"/aws/art-of-aws/07.md","date":"2014-09-30T00:00:00.000Z","isOriginal":false,"cover":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter06/7_.png"},"headers":[],"git":{"createdTime":1711896857000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":5}]},"readingTime":{"minutes":0.77,"words":230},"filePathRelative":"aws/art-of-aws/06B.md","localizedDate":"2014년 9월 30일","excerpt":"\\n"}');export{K as comp,V as data};
