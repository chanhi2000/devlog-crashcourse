import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as t,t as p,b as e,n as c,g as m,e as l,r as a,o as g}from"./app-U_bew1in.js";const h={},u={id:"frontmatter-title-관련",tabindex:"-1"},d={class:"header-anchor",href:"#frontmatter-title-관련"},f=t("nav",{class:"table-of-contents"},[t("ul")],-1),y=t("hr",null,null,-1),A=l('<p>소프트웨어 기술이 발전하면서 가상화 소프트웨어도 매우 빠르게 발전했습니다. 가상화 기술이 나온 것은 1960년대로 오래되었지만 성능 문제 때문에 널리 사용되지 못했습니다.</p><p>초기에 나왔던 VMware Workstation, Virtual PC는 게스트의 하드웨어와 명령어Instruction를 모두 에뮬레이션해야 했기 때문에 속도가 매우 느렸습니다.</p><figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter01/3.png" alt="에뮬레이터(VMware, Virtual PC)를 사용한 가상화" tabindex="0" loading="lazy"><figcaption>에뮬레이터(VMware, Virtual PC)를 사용한 가상화</figcaption></figure><p>이후 인텔과 AMD에서는 CPU 차원에서 가상화를 지원하기 시작했습니다. Intel VT-x와 AMD-V라는 기술로 인해 HVM<sup>Hardware</sup> <sup>Virtual</sup> <sup>Machine</sup>, Hardware-assisted virtualization이 가능하게 되었습니다. 기존과 같이 하드웨어와 명령어를 모두 에뮬레이션하지 않고, CPU의 하이퍼바이저<sup>Hypervisor</sup>가 빠른 속도로 처리해줄 수 있게 되어 성능이 매우 향상되었습니다. 이 방식은 전가상화<sup>Full</sup> <sup>Virtualization</sup>라고 하여 게스트 운영체제<sup>OS</sup> 수정 없이 바로 실행할 수 있습니다.</p><figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter01/4.png" alt="하드웨어 가상화 기술을 이용한 HVM, 전가상화" tabindex="0" loading="lazy"><figcaption>하드웨어 가상화 기술을 이용한 HVM, 전가상화</figcaption></figure><p>Xen(젠)이라는 소프트웨어 하이퍼바이저가 나오면서 가상화에 획기적인 성능 개선이 이루어졌습니다. Xen은 반가상화<sup>Paravirtualization</sup>를 제공해주는데 이 방식은 게스트 OS(커널)을 수정해야 했지만 전가상화보다 훨씬 빠르며 호스트와 거의 동일한 성능을 냈기 때문에 큰 인기를 끌게 되었습니다. 시간이 지날수록 서버용 OS로 Linux를 많이 사용하게 되었고, Linux는 오픈소스이기 때문에 커널 수정은 큰 문제가 되지 않았습니다.</p><figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter01/5.png" alt="Xen을 이용한 반가상화" tabindex="0" loading="lazy"><figcaption>Xen을 이용한 반가상화</figcaption></figure><p>가상화 기술 덕분에 클릭 몇 번이면 서버를 손쉽게 만들어 낼 수 있게 되었습니다. 이렇게 만들어낸 가상 서버를 일정 사용료를 받고 서비스 형태로 제공하는 것이 클라우드 컴퓨팅입니다.</p><hr>',9);function _(s,b){const r=a("VPCard"),o=a("SiteInfo");return g(),n("div",null,[t("h1",u,[t("a",d,[t("span",null,p(s.$frontmatter.title)+" 관련",1)])]),e(r,c(m({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),f,y,e(o,{name:"1장 - 1. 가상화와 클라우드 컴퓨팅",desc:"아마존 웹 서비스를 다루는 기술",url:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter01/01",logo:"https://pyrasis.com/assets/images/pyrasis.png",preview:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter01/3.png"}),A])}const z=i(h,[["render",_],["__file","01A.html.vue"]]),T=JSON.parse('{"path":"/aws/art-of-aws/01A.html","title":"01A. 가상화와 클라우드 컴퓨팅","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"01A. 가상화와 클라우드 컴퓨팅","description":"아마존 웹 서비스를 다루는 기술 > 01A. 가상화와 클라우드 컴퓨팅","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 01A. 가상화와 클라우드 컴퓨팅"},{"property":"og:description","content":"01A. 가상화와 클라우드 컴퓨팅"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/01A.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/01A.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"01A. 가상화와 클라우드 컴퓨팅"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 01A. 가상화와 클라우드 컴퓨팅"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter01/3.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter01/3.png"}],["meta",{"name":"twitter:image:alt","content":"01A. 가상화와 클라우드 컴퓨팅"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:published_time","content":"2014-09-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01A. 가상화와 클라우드 컴퓨팅\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter01/3.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter01/4.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter01/5.png\\"],\\"datePublished\\":\\"2014-09-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"date":"2014-09-30T00:00:00.000Z","isOriginal":false,"cover":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter01/3.png"},"headers":[],"git":{"createdTime":1712118043000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":4}]},"readingTime":{"minutes":0.45,"words":134},"filePathRelative":"aws/art-of-aws/01A.md","localizedDate":"2014년 9월 30일","excerpt":"\\n"}');export{z as comp,T as data};
