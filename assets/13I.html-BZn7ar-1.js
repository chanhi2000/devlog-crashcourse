import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as e,t as m,b as a,n as s,g as c,d as t,e as i,r as l,o as R}from"./app-U_bew1in.js";const g={},h={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},_=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),D=i('<p>마스터 DB 인스턴스에 쓰기를 하면 자동으로 슬레이브 DB 인스턴스로 데이터가 복제됩니다. 단 쓰기 작업을 실시한 즉시 복제되는 것은 아니며 약간의 시간차가 있습니다.</p><div class="hint-container info"><p class="hint-container-title">Multi-AZ 복제와 Read Replica</p><ul><li><strong>Multi-AZ 복제</strong>: 쓰기 작업을 실시한 즉시 예비 인스턴스에 복제됩니다. 따라서 데이터가 항상 일치한다는 것을 보장할 수 있습니다. Multi-AZ 복제는 서비스가 항상 가동해야 하는 가용성(Availability)을 위한 것이지 부하 분산을 통한 성능 향상을 위한 것은 아닙니다. 또한, 예비 인스턴스에서는 읽기 작업을 할 수 없습니다.</li><li><strong>Read Replica</strong>: 쓰기 작업을 실시하면 약간의 시간차를 가지고 복제됩니다. 따라서 데이터가 일치하지 않을 수 있습니다. Read Replica는 읽기 부하 분산을 통해 성능 향상을 위한 기능입니다.</li></ul></div><p>RDS DB 인스턴스(<code>exampledbinstance</code>)의 Read Replica를 생성해보겠습니다. RDS DB 인스턴스 목록(Instances)에서 DB 인스턴스(<code>exampledbinstance</code>)를 선택하고 마우스 오른쪽 버튼을 클릭하면 팝업 메뉴가 나옵니다.</p>',3),y=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/50_.png",alt:'<FontIcon icon="iconfont icon-select"/>를 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),b=e("code",null,"[Create Read Replica]",-1),S=e("p",null,"Read Replica를 생성합니다.",-1),B=i("<li><strong>Destination Region</strong>: Read Replica 인스턴스가 위치할 리전입니다. Read Replica는 여러 리전에 생성할 수 있어, 지역별로 읽기 성능을 향상시킬 수 있습니다. 기본값 그대로 사용합니다.</li><li><strong>Read Replica Source</strong>: Read Replica를 생성할 DB 인스턴스입니다. <code>exampledbinstance</code>가 선택되었는지 확인합니다.</li><li><strong>DB Instance Identifier</strong>: 새로 생성될 Read Replica 인스턴스의 이름입니다. 구분을 쉽게 하기 위해 <code>exampledbinstance-read-1</code>로 입력합니다.</li><li><strong>DB Instance Class</strong>: 생성할 Read Replica 인스턴스의 클래스입니다. Read Replica 인스턴스를 생성할 때 성능이 더 좋은 인스턴스 클래스로 바꿀 수 있습니다. 여기서는 db.t1.micro를 선택합니다.</li><li><strong>Storage Type</strong>: 스토리지 타입입니다. 마스터 DB 인스턴스가 Provisioned IOPS를 사용했다면 여기서 Provisioned IOPS를 선택할 수 있습니다. Standard를 선택하여 일반 스토리지를 사용할 수도 있습니다. 기본값 그대로 사용합니다.</li>",5),A=e("strong",null,"Auto Minor Version Upgrade",-1),v=e("strong",null,"Database Port",-1),I=e("li",null,[e("strong",null,"Availability Zone"),t(": Read Replica가 생성될 가용 영역(Availability Zone)입니다. 추후 각자 상황에 맞게 리전에 속한 AZ를 선택하면 됩니다. 기본값 그대로 사용합니다.")],-1),T=e("li",null,[e("strong",null,"Publicly Accessible"),t(": DB를 외부에서 접근할 수 있게 하는 옵션입니다. No로 설정하면 VPC 내부에서만 접근할 수 있습니다. 기본값 그대로 사용합니다.")],-1),z=e("li",null,[e("strong",null,"Destination DB Subnet Group"),t(": Read Replica 인스턴스가 위치할 서브넷입니다. 기본값 그대로 사용합니다.")],-1),x=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/51_.png",alt:'설정이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),C=e("code",null,"[Yes, Create Read Replica]",-1),w=e("p",null,[t("RDS DB 인스턴스 목록(Instances)에서 Read Replica 인스턴스("),e("code",null,"exampledbinstance-read-1"),t(")가 생성되고 있습니다. 완전히 생성되기까지 약 10~15분 정도 소요됩니다(DB의 용량에 따라 시간은 달라질 수 있습니다).")],-1),P=e("figure",null,[e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/52_.png",alt:"마스터 DB 인스턴스()도 설정을 해야 하기 때문에 Status가 modifying으로 표시됩니다(설정은 약 5분 정도 소요됩니다).",tabindex:"0",loading:"lazy"}),e("figcaption",null,[t("마스터 DB 인스턴스("),e("code",null,"exampledbinstance"),t(")도 설정을 해야 하기 때문에 Status가 modifying으로 표시됩니다(설정은 약 5분 정도 소요됩니다).")])],-1),k=e("code",null,"exampledbinstance-read-1",-1),O=e("code",null,"exampledbinstance-read-1.cnlconsezo7y.ap-northeast-1.rds.amazonaws.com:3306",-1),W=i('<figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/53_.png" alt="RDS DB Read Replica 생성 확인" tabindex="0" loading="lazy"><figcaption>RDS DB Read Replica 생성 확인</figcaption></figure><p>이 Read Replica 인스턴스의 엔드포인트 주소로 접속하면 마스터 DB와 동일한 데이터를 사용할 수 있습니다. 단 읽기 전용이므로 SQL문의 <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>는 사용할 수 없습니다.</p><div class="hint-container info"><p class="hint-container-title">Promote Read Replica</p><p>Promote Read Replica 기능은 Read Replica 인스턴스를 새로운 마스터 DB 인스턴스로 승격(promote)시키는 기능입니다. 이 기능을 사용하면 이전 마스터(소스) DB 인스턴스와의 복제 관계는 끊어지고, 별개의 DB 인스턴스가 됩니다.</p><p>이 기능을 사용하려면 먼저 자동 백업(Enable Automatic Backups), 백업 유지 기간(Backup Retention Period), 백업 시간(Backup Window)를 설정해야 합니다.</p></div><hr>',4);function E(r,M){const n=l("VPCard"),o=l("FontIcon");return R(),d("div",null,[e("h1",h,[e("a",u,[e("span",null,m(r.$frontmatter.title)+" 관련",1)])]),a(n,s(c({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),_,f,a(n,s(c({title:"13장 - 9. RDS DB 인스턴스 Read Replica 생성하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter13/09",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),e("p",null,[t("Read Replica는 DB 인스턴스의 읽기 복제본을 만들어 성능을 향상에 쓰입니다(현재 Read Replica는 "),a(o,{icon:"iconfont icon-mysql"}),t("MySQL만 지원합니다). 서비스에서 읽기 위주의 작업이 많을 경우 Read Replica를 여러 개(최대 5개) 만들어 부하를 분산할 수 있습니다. 즉 쓰기 작업은 마스터 DB 인스턴스에 하고 읽기 작업은 Read Replica인 슬레이브 DB 인스턴스에서 실시한다면 마스터 DB 인스턴스의 부하를 줄일 수 있습니다.")]),D,e("figure",null,[y,e("figcaption",null,[a(o,{icon:"iconfont icon-select"}),b,t("를 클릭합니다.")])]),S,e("ul",null,[B,e("li",null,[A,t(": 자동으로 마이너 버전을 업데이트하는 옵션입니다. 보안 패치나 버그가 수정된 버전을 자동으로 업데이트합니다. 예를 들면 "),a(o,{icon:"iconfont icon-mysql"}),t("MySQL의 경우 5.6.13을 사용하고 있는데 5.6.14가 나오면 5.6.14 버전으로 업데이트하게 됩니다. 기본값 그대로 사용합니다.")]),e("li",null,[v,t(": "),a(o,{icon:"iconfont icon-mysql"}),t("MySQL 접속 포트 번호입니다. 기본값 그대로 사용합니다.")]),I,T,z]),e("figure",null,[x,e("figcaption",null,[t("설정이 완료되었으면 "),a(o,{icon:"iconfont icon-select"}),C,t(" 버튼을 클릭합니다.")])]),w,P,e("p",null,[t("Read Replica 인스턴스("),k,t(")가 완전히 생성된 후 세부 내용에 엔드포인트 주소, Read Replica Source, Replication State가 표시됩니다. 제가 생성한 Read Replica 인스턴스의 엔드포인트 주소는 "),a(o,{icon:"fas fa-globe"}),O,t("입니다.")]),W])}const N=p(g,[["render",E],["__file","13I.html.vue"]]),L=JSON.parse('{"path":"/aws/art-of-aws/13I.html","title":"13I. RDS DB 인스턴스 Read Replica 생성하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"13I. RDS DB 인스턴스 Read Replica 생성하기","description":"아마존 웹 서비스를 다루는 기술 > 13I. RDS DB 인스턴스 Read Replica 생성하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 13I. RDS DB 인스턴스 Read Replica 생성하기"},{"property":"og:description","content":"13I. RDS DB 인스턴스 Read Replica 생성하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/13I.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/13I.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"13I. RDS DB 인스턴스 Read Replica 생성하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 13I. RDS DB 인스턴스 Read Replica 생성하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/50_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"13I. RDS DB 인스턴스 Read Replica 생성하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/50_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/51_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/52_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/53_.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":1.24,"words":373},"filePathRelative":"aws/art-of-aws/13I.md","localizedDate":"2024년 4월 8일","excerpt":"\\n"}');export{N as comp,L as data};
