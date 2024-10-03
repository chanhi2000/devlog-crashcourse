import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,a as t,t as h,b as e,n as r,g as i,d as s,e as g,r as n,o as d}from"./app-U_bew1in.js";const u={},f={id:"frontmatter-title-관련",tabindex:"-1"},_={class:"header-anchor",href:"#frontmatter-title-관련"},k=t("nav",{class:"table-of-contents"},[t("ul")],-1),b=t("hr",null,null,-1),y=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/5_.png",alt:'AWS 콘솔로 접속한 뒤 메인 화면에서 Deployment & Management의 <FontIcon icon="iconfont icon-select"/>를 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),A=t("code",null,"[OpsWorks]",-1),v=t("p",null,"생성한 OpsWorks 스택이 하나도 없을 때 위와 같은 페이지가 표시됩니다.",-1),C=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/6_.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),W=t("code",null,"[Add Your First Stack]",-1),O=g(`<p>OpsWorks 스택을 생성합니다.</p><ul><li><strong>Region</strong>: EC2 인스턴스가 생성될 리전입니다. <code>Tokyo</code>를 선택합니다.</li><li><strong>Name</strong>: 리전을 선택하면 스택 이름을 설정할 수 있습니다. <code>ExampleStack</code>을 입력합니다.</li><li><strong>VPC</strong>: EC2 인스턴스가 위치할 VPC입니다. 기본값 그대로 사용합니다.</li><li><strong>Default subnet</strong>: EC2 인스턴스가 위치할 서브넷입니다. 기본값 그대로 사용합니다.</li><li><strong>Default operating system</strong>: EC2 인스턴스에 설치될 운영체제입니다. 기본값 그대로 사용합니다.</li><li><strong>Default root device type</strong>: EC2 인스턴스의 Root 장치 유형입니다. 기본값 그대로 사용합니다.</li><li><strong>IAM role</strong>: OpsWorks의 IAM 역할입니다. 기본값 그대로 사용합니다.</li><li><strong>Default SSH key</strong>: EC2 인스턴스에 접속할 때 사용할 키 쌍입니다. 앞에서 생성한 <code>awskeypair</code>를 선택합니다.</li><li><strong>Default IAM instance profile</strong>: EC2 인스턴스에 사용할 IAM 역할입니다. 기본값 그대로 사용합니다.</li><li><strong>Hostname theme</strong>: EC2 인스턴스에 이름을 붙이는 방식입니다. 과일 이름, 태양계 행성 이름 등을 사용할 수 있습니다. 기본값 그대로 사용합니다.</li><li><strong>Stack color</strong>: 스택 상징 색입니다. 기본값 그대로 사용합니다.</li><li><strong>Chef version</strong>: Chef 버전입니다. 기본 값 그대로 사용합니다.</li><li><strong>Use custom Chef cookbooks</strong>: OpsWorks에서 제공하는 Chef 쿡북 이외에 인터넷에 공개된 Chef 쿡북이나 사용자가 작성한 Chef 쿡북을 사용하는 옵션입니다. 여기서는 OpsWorks에서 제공하는 Chef 쿡북을 사용할 것이므로 기본값 그대로 No를 선택합니다.</li><li><strong>Custom JSON</strong>: Chef 레시피에 넘겨줄 속성(Attribute) 값입니다. 다음 코드를 입력합니다. (Apache의 설정을 변경하는 예제입니다).</li></ul><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;apache&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;keepalivetimeout&quot;</span><span class="token operator">:</span> <span class="token number">5</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Use OpsWorks security groups</strong>: OpsWorks용 Security Group을 사용하는 옵션입니다. 기본값 그대로 사용합니다.</li></ul>`,4),S=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/7_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),w=t("code",null,"[Add Stack]",-1),T={class:"hint-container info"},z=t("p",{class:"hint-container-title"},"Apache Chef 속성",-1),x=t("p",null,"Apache Chef 속성은 다음 링크를 참조하기 바랍니다.",-1),E=t("figure",null,[t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/8_.png",alt:"OpsWorks 스택이 생성되었습니다.",tabindex:"0",loading:"lazy"}),t("figcaption",null,"OpsWorks 스택이 생성되었습니다.")],-1),I=t("hr",null,null,-1);function D(c,M){const a=n("VPCard"),o=n("FontIcon"),p=n("SiteInfo");return d(),m("div",null,[t("h1",f,[t("a",_,[t("span",null,h(c.$frontmatter.title)+" 관련",1)])]),e(a,r(i({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),k,b,e(a,r(i({title:"24장 - 1. OpsWorks 스택 생성하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter24/01",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),t("figure",null,[y,t("figcaption",null,[s("AWS 콘솔로 접속한 뒤 메인 화면에서 Deployment & Management의 "),e(o,{icon:"iconfont icon-select"}),A,s("를 클릭합니다.")])]),v,t("figure",null,[C,t("figcaption",null,[e(o,{icon:"iconfont icon-select"}),W,s(" 버튼을 클릭합니다.")])]),O,t("figure",null,[S,t("figcaption",null,[s("설정이 완료되었으면 "),e(o,{icon:"iconfont icon-select"}),w,s(" 버튼을 클릭합니다.")])]),t("div",T,[z,x,e(p,{name:"GitHub - aws/opsworks-cookbooks: Chef Cookbooks for the AWS OpsWorks Service",desc:"Chef Cookbooks for the AWS OpsWorks Service. Contribute to aws/opsworks-cookbooks development by creating an account on GitHub.",url:"https://github.com/aws/opsworks-cookbooks/blob/release-chef-11.10/apache2/attributes/apache.rb",logo:"https://avatars.githubusercontent.com/u/2232217?s=200&v=4",preview:"https://opengraph.githubassets.com/385d2fa9e8faf691751f6827a31117b8d487c9d55d08a801224a55de018b40a9/aws/opsworks-cookbooks"})]),E,I])}const R=l(u,[["render",D],["__file","24A.html.vue"]]),V=JSON.parse('{"path":"/aws/art-of-aws/24A.html","title":"24A. OpsWorks 스택 생성하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"24A. OpsWorks 스택 생성하기","description":"아마존 웹 서비스를 다루는 기술 > 24A. OpsWorks 스택 생성하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 24A. OpsWorks 스택 생성하기"},{"property":"og:description","content":"24A. OpsWorks 스택 생성하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/24A.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/24A.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"24A. OpsWorks 스택 생성하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 24A. OpsWorks 스택 생성하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/5_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/5_.png"}],["meta",{"name":"twitter:image:alt","content":"24A. OpsWorks 스택 생성하기"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:published_time","content":"2014-09-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"24A. OpsWorks 스택 생성하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/5_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/6_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/7_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/8_.png\\"],\\"datePublished\\":\\"2014-09-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"date":"2014-09-30T00:00:00.000Z","isOriginal":false,"cover":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter24/5_.png"},"headers":[],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":0.97,"words":290},"filePathRelative":"aws/art-of-aws/24A.md","localizedDate":"2014년 9월 30일","excerpt":"\\n"}');export{R as comp,V as data};
