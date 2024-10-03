import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as e,t as p,b as t,n as s,g as r,w as l,d as n,e as k,r as i,o as b}from"./app-U_bew1in.js";const g={},_={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},f={class:"table-of-contents"},K=e("hr",null,null,-1),y=e("hr",null,null,-1),w=e("h2",{id:"kubernetes-환경",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kubernetes-환경"},[e("span",null,"Kubernetes 환경")])],-1),S=e("h3",{id:"로컬-환경",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#로컬-환경"},[e("span",null,"로컬 환경")])],-1),x=e("p",null,"로컬 환경에서 학습 환경을 구축하는 경우는 아래의 내용을 참고로 설치하여라.",-1),A=e("h3",{id:"설치-없이-쿠버네티스-사용하기",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#설치-없이-쿠버네티스-사용하기"},[e("span",null,"설치 없이 쿠버네티스 사용하기")])],-1),z=e("p",null,"웹상에서 Kubernetes를 사용할 수 있는 사이트는 아래와 같다. 로컬 환경에 환경을 구축하는 것이 귀찮다면 아래 사이트를 이용해도 된다.",-1),E=e("li",null,[e("s",null,"카타코다 쿠버네티스 플레이 그라운드"),e("ul",null,[e("li",null,[e("s",null,"Master, node1이 구성되어 있어 바로 사용 가능")]),e("li",null,[e("em",null,"2022년 6월 15일에 사이트를 폐쇄")])])],-1),T={href:"https://labs.play-with-k8s.com/",target:"_blank",rel:"noopener noreferrer"},I=e("ul",null,[e("li",null,"doccker 에서 제공. docker hub 계정 혹은 GitHub 계정으로 로그인"),e("li",null,"4시간 사용 가능. Master, work Node를 직접 구성한 후 사용 가능")],-1),P=e("h3",{id:"클라우드-서비스에-제공하는-쿠버네티스-도구",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#클라우드-서비스에-제공하는-쿠버네티스-도구"},[e("span",null,"클라우드 서비스에 제공하는 쿠버네티스 도구")])],-1),D=k('<hr><h2 id="kubeadm을-이용한-쿠버네티스-설치-온프레미스" tabindex="-1"><a class="header-anchor" href="#kubeadm을-이용한-쿠버네티스-설치-온프레미스"><span>kubeadm을 이용한 쿠버네티스 설치 - 온프레미스</span></a></h2><ol><li>Docker Install a. Master, Node 모든 시스템에 설치해야 한다. b. <a href="https://docs.docker.com/desktop/install/linux-install/" target="_blank" rel="noopener noreferrer">Install Docker Desktop on Linux | 공식 문서</a></li><li>Kubenetes Intall</li><li>설치 전 환경 설정</li><li><code>kubeadm</code>, <code>kubectl</code>, <code>kubelet</code> 설치</li><li><code>control-plane</code> 구성</li><li>worker node 구성</li><li>설치 확인</li></ol><hr>',4);function N(u,V){const a=i("VPCard"),o=i("router-link"),d=i("FontIcon"),c=i("SiteInfo");return b(),h("div",null,[e("h1",_,[e("a",v,[e("span",null,p(u.$frontmatter.title)+" 관련",1)])]),t(a,s(r({title:"목차",desc:"Kubernetes | devkuma",link:"/k8s/devkuma/README.md",logo:"https://devkuma.com/favicons/favicon.ico",background:"rgba(48,99,142,0.2)"})),null,16),e("nav",f,[e("ul",null,[e("li",null,[t(o,{to:"#kubernetes-환경"},{default:l(()=>[n("Kubernetes 환경")]),_:1}),e("ul",null,[e("li",null,[t(o,{to:"#로컬-환경"},{default:l(()=>[n("로컬 환경")]),_:1})]),e("li",null,[t(o,{to:"#설치-없이-쿠버네티스-사용하기"},{default:l(()=>[n("설치 없이 쿠버네티스 사용하기")]),_:1})]),e("li",null,[t(o,{to:"#클라우드-서비스에-제공하는-쿠버네티스-도구"},{default:l(()=>[n("클라우드 서비스에 제공하는 쿠버네티스 도구")]),_:1})])])]),e("li",null,[t(o,{to:"#kubeadm을-이용한-쿠버네티스-설치-온프레미스"},{default:l(()=>[n("kubeadm을 이용한 쿠버네티스 설치 - 온프레미스")]),_:1})])])]),K,t(a,s(r({title:"Kubernetes 사용하기 | devkuma",desc:"Kubernetes 사용하기",link:"https://devkuma.com/docs/kubernetes/environment/",logo:"https://devkuma.com/favicons/favicon.ico",background:"rgba(48,99,142,0.2)"})),null,16),y,w,S,x,t(a,s(r({title:"Kubernetes 로컬 개발 환경 만들기 - minikube 설치 및 사용 | devkuma",desc:"Kubernetes 로컬 개발 환경 만들기 - minikube 설치 및 사용",link:"k8s/devkuma/minikube.md",logo:"https://devkuma.com/favicons/favicon.ico",background:"rgba(48,99,142,0.2)"})),null,16),A,z,e("ul",null,[E,e("li",null,[e("a",T,[t(d,{icon:"fas fa-globe"}),n("Play with Kubernetes")]),I])]),P,t(c,{name:"Google Kubernetes Engine (GKE) | Google Cloud",desc:"GKE is the industry's first fully managed Kubernetes service with full Kubernetes API, 4-way autoscaling, release channels, and multi-cluster support.",url:"https://cloud.google.com/kubernetes-engine",logo:"https://www.gstatic.com/devrel-devsite/prod/v0d244f667a3683225cca86d0ecf9b9b81b1e734e55a030bdcd3f3094b835c987/cloud/images/favicons/onecloud/favicon.ico",preview:"https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png"}),t(a,s(r({title:"Amazon EKS란 무엇입니까? - Amazon EKS",desc:"Amazon Elastic Kubernetes Service(Amazon EKS)는 Amazon Web Services(AWS)에 Kubernetes 컨트롤 플레인을 설치, 운영 및 유지 관리할 필요가 없는 관리형 서비스입니다.",link:"https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/what-is-eks.html",logo:"https://docs.aws.amazon.com/assets/images/favicon.ico",background:"rgba(247,155,38,0.2)"})),null,16),t(c,{name:"Azure Kubernetes Service (AKS) documentation",desc:"AKS allows you to quickly deploy a production ready Kubernetes cluster in Azure. Learn how to use AKS with these quickstarts, tutorials, and samples.",url:"https://learn.microsoft.com/en-us/azure/aks/",logo:"https://learn.microsoft.com/favicon.ico",preview:"https://learn.microsoft.com/en-us/media/open-graph-image.png"}),D])}const R=m(g,[["render",N],["__file","environment.html.vue"]]),Z=JSON.parse('{"path":"/k8s/devkuma/environment.html","title":"Kubernetes 사용하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Kubernetes 사용하기","description":"devkuma > Kubernetes 사용하기","icon":"iconfont icon-k8s","category":["DevOps","Kubernetes","VM"],"tag":["crashcourse","devkuma.com","kubernetes","k8s"],"head":[[{"meta":null},{"property":"og:title","content":"devkuma > Kubernetes 사용하기"},{"property":"og:description","content":"Kubernetes 사용하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/k8s/devkuma/environment.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/k8s/devkuma/environment.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Kubernetes 사용하기"}],["meta",{"property":"og:description","content":"devkuma > Kubernetes 사용하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"devkuma.com"}],["meta",{"property":"article:tag","content":"kubernetes"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2022-09-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kubernetes 사용하기\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"date":"2022-09-09T00:00:00.000Z","isOriginal":false},"headers":[{"level":2,"title":"Kubernetes 환경","slug":"kubernetes-환경","link":"#kubernetes-환경","children":[{"level":3,"title":"로컬 환경","slug":"로컬-환경","link":"#로컬-환경","children":[]},{"level":3,"title":"설치 없이 쿠버네티스 사용하기","slug":"설치-없이-쿠버네티스-사용하기","link":"#설치-없이-쿠버네티스-사용하기","children":[]},{"level":3,"title":"클라우드 서비스에 제공하는 쿠버네티스 도구","slug":"클라우드-서비스에-제공하는-쿠버네티스-도구","link":"#클라우드-서비스에-제공하는-쿠버네티스-도구","children":[]}]},{"level":2,"title":"kubeadm을 이용한 쿠버네티스 설치 - 온프레미스","slug":"kubeadm을-이용한-쿠버네티스-설치-온프레미스","link":"#kubeadm을-이용한-쿠버네티스-설치-온프레미스","children":[]}],"git":{"createdTime":1718254231000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":5}]},"readingTime":{"minutes":0.99,"words":298},"filePathRelative":"k8s/devkuma/environment.md","localizedDate":"2022년 9월 9일","excerpt":"\\n"}');export{R as comp,Z as data};
