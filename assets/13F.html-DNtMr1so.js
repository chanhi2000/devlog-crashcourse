import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,a as e,t as h,b as o,n as a,g as i,d as t,e as r,r as c,o as g}from"./app-U_bew1in.js";const d={},_={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},y=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),S={href:"http://dev.mysql.com/downloads/tools/workbench/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"http://dev.mysql.com/downloads/tools/workbench/",-1),A=e("figure",null,[e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/22_.png",alt:"MySQL Workbench",tabindex:"0",loading:"lazy"}),e("figcaption",null,"MySQL Workbench")],-1),D={class:"hint-container info"},T=e("p",{class:"hint-container-title"},"오라클 계정 없이 MySQL Workbench Windows 버전 받기",-1),W=e("code",null,"MySQLWorkbench.exe",-1),C=e("code",null,"[+]",-1),v=r('<figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/23_.png" alt="MySQL Workbench 실행" tabindex="0" loading="lazy"><figcaption>MySQL Workbench 실행</figcaption></figure><p>새 MySQL 연결을 생성합니다.</p><ul><li><strong>Connection Name</strong>: 연결의 이름입니다. RDS를 입력합니다.</li><li><strong>Connection Method</strong>: 접속 방식입니다. 기본값 그대로 Standard (TCP/IP)를 사용합니다.</li><li><strong>Hostname</strong>: RDS DB 인스턴스의 엔드포인트 주소를 입력합니다. 단 포트 번호는 제외하고 도메인만 입력합니다. 엔드포인트 주소는 RDS DB 목록에서 DB 인스턴스를 선택한 뒤 세부 내용에서 확인할 수 있습니다.</li><li><strong>Port</strong>: MySQL 접속 포트 번호입니다. 기본값 그대로 사용합니다.</li><li><strong>Username</strong>: RDS DB 인스턴스를 생성할 때 설정했던 Master Username을 입력합니다. 예제에서는 admin으로 설정했습니다.</li></ul>',3),z=e("code",null,"[Store in Vault ...]",-1),M=e("figure",null,[e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/24_.png",alt:"새 MySQL 연결 생성",tabindex:"0",loading:"lazy"}),e("figcaption",null,"새 MySQL 연결 생성")],-1),k=e("code",null,"[OK]",-1),R=e("figure",null,[e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/25_.png",alt:"MySQL 접속 비밀번호 설정",tabindex:"0",loading:"lazy"}),e("figcaption",null,"MySQL 접속 비밀번호 설정")],-1),w=e("code",null,"[OK]",-1),L=e("figure",null,[e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/26_.png",alt:"MySQL 연결 생성 완료",tabindex:"0",loading:"lazy"}),e("figcaption",null,"MySQL 연결 생성 완료")],-1),Q=e("code",null,"[Create Table...]",-1),B=r('<figure><img src="https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/27_.png" alt="MySQL Workbench에서 RDS DB 인스턴스에 접속" tabindex="0" loading="lazy"><figcaption>MySQL Workbench에서 RDS DB 인스턴스에 접속</figcaption></figure><p>새 테이블을 생성합니다.</p><ul><li><strong>Table Name</strong>: 테이블 이름입니다. ExampleTable을 입력합니다.</li><li><strong>Collation</strong>: 문자 데이터 타입입니다. 기본값 그대로 사용합니다.</li><li><strong>Engine</strong>: MySQL의 스토리지 엔진입니다. 기본값 그대로 InnoDB를 사용합니다.</li></ul><p>새 칼럼을 추가합니다. Column Name의 빈 칸을 클릭하면 새 칼럼을 추가할 수 있습니다. 아래 형식과 같이 칼럼을 생성합니다.</p><ul><li><strong>Column Name</strong>: id, DataType: INT, PK 체크, NN 체크, AI 체크</li><li><strong>Column Name</strong>: name, DataType: VARCHAR(45)</li><li><strong>Column Name</strong>: address, DataType: VARCHAR(45)</li></ul>',5),x=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/28_.png",alt:'칼럼 추가가 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),O=e("code",null,"[Apply]",-1),F=e("p",null,"테이블을 생성하는 SQL 문이 표시됩니다.",-1),I=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/29_.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 클릭하고, 아무 에러 없이 적용이 완료되면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),N=e("code",null,"[Apply]",-1),P=e("code",null,"[Finish]",-1),E=e("p",null,"MySQL Workbench의 왼쪽을 보면 방금 생성한 ExampleTable을 확인할 수 있습니다. 이 ExampleTable에서 마우스 오른쪽 버튼을 클릭하면 팝업 메뉴가 나옵니다.",-1),V=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/30_.png",alt:'<FontIcon icon="iconfont icon-select"/>을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),q=e("code",null,"[Select Rows - Limit 1000]",-1),K=e("p",null,"ExampleTable의 데이터가 출력됩니다. 테이블만 생성했으므로 아무 데이터가 없습니다. 이곳에서 엑셀처럼 데이터를 입력할 수 있습니다. 그림처럼 John, New York과 Maria, Seattle을 추가합니다.",-1),G=e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/31_.png",alt:'입력이 완료되었으면 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),U=e("code",null,"[Apply]",-1),Z=e("p",null,"ExampleTable에 데이터 추가가 완료되었습니다. id 칼럼은 AI(Auto Increment)로 설정했기 때문에 자동으로 값이 지정됩니다.",-1),H=e("figure",null,[e("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/32_.png",alt:"이렇게 MySQL Workbench를 이용하여 RDS DB 인스턴스의 내용을 확인하거나 데이터를 추가할 수 있습니다.",tabindex:"0",loading:"lazy"}),e("figcaption",null,"이렇게 MySQL Workbench를 이용하여 RDS DB 인스턴스의 내용을 확인하거나 데이터를 추가할 수 있습니다.")],-1),J=e("hr",null,null,-1);function j(l,Y){const s=c("VPCard"),n=c("FontIcon");return g(),m("div",null,[e("h1",_,[e("a",u,[e("span",null,h(l.$frontmatter.title)+" 관련",1)])]),o(s,a(i({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),y,f,o(s,a(i({title:"13장 - 6. RDS DB 인스턴스 사용하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter13/06",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),e("p",null,[t("RDS DB 인스턴스의 생성이 완료되었으면 실제로 생성이 되었는지 확인해보겠습니다. 이 책에서는 GUI 도구인 MySQL Workbench를 사용하겠습니다. "),e("a",S,[o(n,{icon:"iconfont icon-mysql"}),b]),t("에 접속한 뒤 각자 운영체제에 맞는 버전을 다운로드합니다. 다운로드에는 오라클 계정이 필요합니다. Windows 버전의 경우 MSI Installer를 다운로드합니다(ZIP Archive는 MySQL 테이블을 생성하려면 관련 라이브러리를 따로 설치해야 하기 때문에 번거롭습니다).")]),A,e("div",D,[T,o(s,a(i({title:"MySQL Workbench 8.0.36 Installation File",desc:"mysql-workbench-community-8.0.36-winx64.msi",link:"http://dev.mysql.com/get/Downloads/MySQLGUITools/mysql-workbench-community-8.0.36-winx64.msi",logo:"https://labs.mysql.com/common/themes/sakila/favicon.ico",background:"rgba(34,124,168,0.2)"})),null,16)]),e("p",null,[t("MySQL Workbench Windows 버전을 기준으로 설명 하겠습니다. 다운로드한 파일을 설치하고 "),o(n,{icon:"iconfont icon-play"}),W,t("를 실행합니다. MySQL Workbench가 실행되면 MySQL Connections 옆의 "),o(n,{icon:"iconfont icon-select"}),C,t(" 버튼을 클릭합니다.")]),v,e("p",null,[t("Password의 "),o(n,{icon:"iconfont icon-select"}),z,t(" 버튼을 클릭합니다.")]),M,e("p",null,[t("RDS DB 인스턴스를 생성할 때 설정했던 Master Password를 입력하고 "),o(n,{icon:"iconfont icon-select"}),k,t(" 버튼을 클릭합니다.")]),R,e("p",null,[t("설정이 완료되었으면 Setup New Connection 창의 "),o(n,{icon:"iconfont icon-select"}),w,t(" 버튼을 클릭합니다. 이제 RDS 연결 생성이 완료되었습니다. RDS 연결을 클릭하여 MySQL에 접속합니다. 접속이 되지 않으면 '13.5 RDS DB 인스턴스 Security Group 생성 및 설정하기'에서 Security Group을 생성한 뒤 사용하도록 설정하였는지 확인합니다.")]),L,e("p",null,[t("MySQL Workbench에서 RDS DB 인스턴스에 접속했습니다. 왼쪽을 보면 RDS DB 인스턴스를 생성할 때 함께 생성한 ExampleDB를 확인할 수 있습니다. 이 ExampleDB를 클릭하고 Tables에서 마우스 오른쪽 버튼을 클릭하면 팝업 메뉴가 나옵니다. "),o(n,{icon:"iconfont icon-select"}),Q,t("를 클릭합니다.")]),B,e("figure",null,[x,e("figcaption",null,[t("칼럼 추가가 완료되었으면 "),o(n,{icon:"iconfont icon-select"}),O,t(" 버튼을 클릭합니다.")])]),F,e("figure",null,[I,e("figcaption",null,[o(n,{icon:"iconfont icon-select"}),N,t(" 버튼을 클릭하고, 아무 에러 없이 적용이 완료되면 "),o(n,{icon:"iconfont icon-select"}),P,t(" 버튼을 클릭합니다.")])]),E,e("figure",null,[V,e("figcaption",null,[o(n,{icon:"iconfont icon-select"}),q,t("을 클릭합니다.")])]),K,e("figure",null,[G,e("figcaption",null,[t("입력이 완료되었으면 "),o(n,{icon:"iconfont icon-select"}),U,t(" 버튼을 클릭합니다.")])]),Z,H,J])}const ee=p(d,[["render",j],["__file","13F.html.vue"]]),te=JSON.parse('{"path":"/aws/art-of-aws/13F.html","title":"13F. RDS DB 인스턴스 사용하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"13F. RDS DB 인스턴스 사용하기","description":"아마존 웹 서비스를 다루는 기술 > 13F. RDS DB 인스턴스 사용하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 13F. RDS DB 인스턴스 사용하기"},{"property":"og:description","content":"13F. RDS DB 인스턴스 사용하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/13F.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/13F.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"13F. RDS DB 인스턴스 사용하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 13F. RDS DB 인스턴스 사용하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/22_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"13F. RDS DB 인스턴스 사용하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/22_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/23_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/24_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/25_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/26_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/27_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/28_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/29_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/30_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/31_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter13/32_.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":1.38,"words":413},"filePathRelative":"aws/art-of-aws/13F.md","localizedDate":"2024년 4월 8일","excerpt":"\\n"}');export{ee as comp,te as data};
