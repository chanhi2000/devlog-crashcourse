import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as t,t as h,b as o,n as i,g as a,d as e,e as s,r as c,o as g}from"./app-U_bew1in.js";const m={},f={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},_=t("nav",{class:"table-of-contents"},[t("ul")],-1),u=t("hr",null,null,-1),x=t("p",null,[e("앞서 "),t("code",null,"UsersLeaderboard"),e(" 테이블과 "),t("code",null,"FriendsLeaderboard"),e(" 테이블을 생성해보았습니다. 이제 쿼리 테스트를 위해 두 테이블에 데이터를 추가해보겠습니다.")],-1),b=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/23_.png",alt:'DynamoDB 테이블 목록에서  테이블을 선택하고 위쪽 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),A=t("code",null,"UsersLeaderboard",-1),D=t("code",null,"[Explore Table]",-1),z=t("p",null,[t("code",null,"UsersLeaderboard"),e(" 테이블 안에 들어있는 아이템을 볼 수 있습니다. 현재는 빈 테이블이므로 데이터가 표시되지 않습니다.")],-1),T=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/24_.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),S=t("code",null,"[New Item]",-1),v=s("<p><code>UsersLeaderboard</code> 테이블에 아이템을 추가합니다. 추가할 데이터의 내용은 아래에 표로 나와 있습니다.</p><ul><li><code>Id</code>: 숫자 형식이며 유저를 구별하는 고윳값 입니다.</li><li><code>Week</code>: 문자열 형식이며 한 주를 표현합니다.</li><li><code>TopScore</code>: 숫자 형식이며 해당 주 동안 유저가 도달한 최고 점수입니다.</li><li><code>Name</code>: 문자열 형식이며 유저의 이름입니다.</li></ul>",2),I=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/25_.png",alt:'데이터를 입력하고 아래 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭하면 아이템이 추가됩니다.',tabindex:"0",loading:"lazy"},null,-1),W=t("code",null,"[Put Item]",-1),C=t("p",null,"아이템 추가가 성공하면 창이 나옵니다.",-1),O=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/26_.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 클릭하면 계속 아이템을 추가할 수 있습니다.',tabindex:"0",loading:"lazy"},null,-1),w=t("code",null,"[OK]",-1),F=s('<p>아래 표에 나와있는 대로 유저 3명의 데이터를 추가합니다.</p><table><thead><tr><th style="text-align:left;"><code>Id</code></th><th style="text-align:left;"><code>Week</code></th><th style="text-align:left;"><code>TopScore</code></th><th style="text-align:left;"><code>Name</code></th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">2014-05-09,2014-05-15</td><td style="text-align:left;">32847</td><td style="text-align:left;">John</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">2014-05-09,2014-05-15</td><td style="text-align:left;">42710</td><td style="text-align:left;">Maria</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">2014-05-09,2014-05-15</td><td style="text-align:left;">19202</td><td style="text-align:left;">Andrew</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">2014-05-02,2014-05-08</td><td style="text-align:left;">24209</td><td style="text-align:left;">John</td></tr></tbody></table>',2),B=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/27_.png",alt:'맨 위쪽 <FontIcon icon="iconfont icon-select"/> 탭을 클릭한 뒤 <FontIcon icon="iconfont icon-select"/>을 선택하고 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),k=t("code",null,"[Browse Items]",-1),N=t("code",null,"[Scan]",-1),L=t("code",null,"[Go]",-1),M=t("p",null,"방금 입력한 데이터가 출력됩니다.",-1),J=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/28_.png",alt:'이제 맨 위쪽 <FontIcon icon="iconfont icon-select"/> 탭을 클릭하여 테이블 목록으로 돌아갑니다.',tabindex:"0",loading:"lazy"},null,-1),P=t("code",null,"[List Tables]",-1),R=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/29_.png",alt:'DynamoDB 테이블 목록에서  테이블을 선택하고 위쪽 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),V=t("code",null,"FriendsLeaderboard",-1),E=t("code",null,"[Explore Table]",-1),K=t("p",null,[t("code",null,"FriendsLeaderboard"),e(" 테이블 안에 들어있는 아이템을 볼 수 있습니다. 현재는 빈 테이블이므로 데이터가 표시되지 않습니다.")],-1),U=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/30_.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),Z=t("code",null,"[New Item]",-1),G=s("<p><code>FriendsLeaderboard</code> 테이블에 아이템을 추가합니다. 추가할 데이터의 내용은 아래에 표로 나와 있습니다.</p><ul><li><code>Id</code>: 숫자 형식이며 유저를 구별하는 고윳값 입니다.</li><li><code>FriendIdAndWeek</code>: 문자열 형식이며 현재 유저의 친구 Id와 한 주를 함께 표현합니다.</li><li><code>Score</code>: 숫자 형식이며 현재 유저의 점수입니다.</li><li><code>Name</code>: 문자열 형식이며 유저의 이름입니다.</li></ul>",2),j=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/31_.png",alt:'데이터를 입력하고 아래 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭하면 아이템이 추가됩니다.',tabindex:"0",loading:"lazy"},null,-1),$=t("code",null,"[Put Item]",-1),q=t("p",null,"아이템 추가가 성공하면 창이 나옵니다.",-1),H=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/32_.png",alt:'<FontIcon icon="iconfont icon-select"/> 버튼을 클릭하면 계속 아이템을 추가할 수 있습니다.',tabindex:"0",loading:"lazy"},null,-1),Q=t("code",null,"[OK]",-1),X=s('<p>표에 나와있는 데로 데이터를 추가합니다. 서로 친구인 상황은 다음과 같습니다.</p><ul><li>John(1)은 Maria(2)와 친구</li><li>Maria(2)는 John(1)과 Andrew(3)가 친구</li><li>Andrew(3)은 Maia(2)와 친구</li></ul><table><thead><tr><th style="text-align:left;"><code>Id</code></th><th style="text-align:left;"><code>FriendIdAndWeek</code></th><th style="text-align:left;"><code>Score</code></th><th style="text-align:left;"><code>Name</code></th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">1,2014-05-09,2014-05-15</td><td style="text-align:left;">32847</td><td style="text-align:left;">John</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">2,2014-05-09,2014-05-15</td><td style="text-align:left;">32847</td><td style="text-align:left;">John</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">1,2014-05-09,2014-05-15</td><td style="text-align:left;">42710</td><td style="text-align:left;">Maria</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">2,2014-05-09,2014-05-15</td><td style="text-align:left;">42710</td><td style="text-align:left;">Maria</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">3,2014-05-09,2014-05-15</td><td style="text-align:left;">42710</td><td style="text-align:left;">Maria</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">2,2014-05-09,2014-05-15</td><td style="text-align:left;">19202</td><td style="text-align:left;">Andrew</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">3,2014-05-09,2014-05-15</td><td style="text-align:left;">19202</td><td style="text-align:left;">Andrew</td></tr></tbody></table>',3),Y=t("img",{src:"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/33_.png",alt:'맨 위쪽 <FontIcon icon="iconfont icon-select"/> 탭을 클릭한 뒤 <FontIcon icon="iconfont icon-select"/>을 선택하고 <FontIcon icon="iconfont icon-select"/> 버튼을 클릭합니다.',tabindex:"0",loading:"lazy"},null,-1),tt=t("code",null,"[Browse Items]",-1),et=t("code",null,"[Scan]",-1),ot=t("code",null,"[Go]",-1),nt=t("p",null,"방금 입력한 데이터가 출력됩니다.",-1),st=t("hr",null,null,-1);function lt(r,it){const l=c("VPCard"),n=c("FontIcon");return g(),p("div",null,[t("h1",f,[t("a",y,[t("span",null,h(r.$frontmatter.title)+" 관련",1)])]),o(l,i(a({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),_,u,o(l,i(a({title:"14장 - 4. DynamoDB 테이블에 데이터 추가하기",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter14/04",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),x,t("figure",null,[b,t("figcaption",null,[e("DynamoDB 테이블 목록에서 "),A,e(" 테이블을 선택하고 위쪽 "),o(n,{icon:"iconfont icon-select"}),D,e(" 버튼을 클릭합니다.")])]),z,t("figure",null,[T,t("figcaption",null,[o(n,{icon:"iconfont icon-select"}),S,e(" 버튼을 클릭합니다.")])]),v,t("figure",null,[I,t("figcaption",null,[e("데이터를 입력하고 아래 "),o(n,{icon:"iconfont icon-select"}),W,e(" 버튼을 클릭하면 아이템이 추가됩니다.")])]),C,t("figure",null,[O,t("figcaption",null,[o(n,{icon:"iconfont icon-select"}),w,e(" 버튼을 클릭하면 계속 아이템을 추가할 수 있습니다.")])]),F,t("figure",null,[B,t("figcaption",null,[e("맨 위쪽 "),o(n,{icon:"iconfont icon-select"}),k,e(" 탭을 클릭한 뒤 "),o(n,{icon:"iconfont icon-select"}),N,e("을 선택하고 "),o(n,{icon:"iconfont icon-select"}),L,e(" 버튼을 클릭합니다.")])]),M,t("figure",null,[J,t("figcaption",null,[e("이제 맨 위쪽 "),o(n,{icon:"iconfont icon-select"}),P,e(" 탭을 클릭하여 테이블 목록으로 돌아갑니다.")])]),t("figure",null,[R,t("figcaption",null,[e("DynamoDB 테이블 목록에서 "),V,e(" 테이블을 선택하고 위쪽 "),o(n,{icon:"iconfont icon-select"}),E,e(" 버튼을 클릭합니다.")])]),K,t("figure",null,[U,t("figcaption",null,[o(n,{icon:"iconfont icon-select"}),Z,e(" 버튼을 클릭합니다.")])]),G,t("figure",null,[j,t("figcaption",null,[e("데이터를 입력하고 아래 "),o(n,{icon:"iconfont icon-select"}),$,e(" 버튼을 클릭하면 아이템이 추가됩니다.")])]),q,t("figure",null,[H,t("figcaption",null,[o(n,{icon:"iconfont icon-select"}),Q,e(" 버튼을 클릭하면 계속 아이템을 추가할 수 있습니다.")])]),X,t("figure",null,[Y,t("figcaption",null,[e("맨 위쪽 "),o(n,{icon:"iconfont icon-select"}),tt,e(" 탭을 클릭한 뒤 "),o(n,{icon:"iconfont icon-select"}),et,e("을 선택하고 "),o(n,{icon:"iconfont icon-select"}),ot,e(" 버튼을 클릭합니다.")])]),nt,st])}const rt=d(m,[["render",lt],["__file","14D.html.vue"]]),dt=JSON.parse('{"path":"/aws/art-of-aws/14D.html","title":"14D. DynamoDB 테이블에 데이터 추가하기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"14D. DynamoDB 테이블에 데이터 추가하기","description":"아마존 웹 서비스를 다루는 기술 > 14D. DynamoDB 테이블에 데이터 추가하기","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 14D. DynamoDB 테이블에 데이터 추가하기"},{"property":"og:description","content":"14D. DynamoDB 테이블에 데이터 추가하기"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/14D.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/14D.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"14D. DynamoDB 테이블에 데이터 추가하기"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 14D. DynamoDB 테이블에 데이터 추가하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/23_.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"14D. DynamoDB 테이블에 데이터 추가하기\\",\\"image\\":[\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/23_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/24_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/25_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/26_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/27_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/28_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/29_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/30_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/31_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/32_.png\\",\\"https://pyrasis.com/assets/images/TheArtOfAmazonWebServicesChapter14/33_.png\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":1.33,"words":398},"filePathRelative":"aws/art-of-aws/14D.md","localizedDate":"2024년 4월 8일","excerpt":"\\n"}');export{rt as comp,dt as data};
