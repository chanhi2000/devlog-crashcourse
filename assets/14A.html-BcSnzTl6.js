import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as t,t as c,b as n,n as e,g as l,e as m,d as a,r as p,o as u}from"./app-U_bew1in.js";const h={},d={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},y=t("nav",{class:"table-of-contents"},[t("ul")],-1),x=t("hr",null,null,-1),D=m("<p>DynamoDB를 사용하기 전에 DynamoDB의 데이터 모델을 먼저 알아보겠습니다.</p><p>DynamoDB의 기본 데이터 저장 구조는 다음과 같습니다.</p><ul><li><strong>테이블(Table)</strong>: 테이블은 아이템들의 모음입니다. 들어갈 수 있는 아이템의 개수는 제한이 없습니다. 그리고 테이블은 기본 키(Primary Key)를 반드시 지정해야 합니다. 리전당 생성할 수 있는 테이블의 최대 개수는 256개이며 AWS에 요청하여 더 늘릴 수 있습니다.</li><li><strong>아이템(Item)</strong>: 아이템은 속성(Attribute)들의 모음입니다. 들어갈 수 있는 속성의 개수는 제한이 없습니다. 단 아이템의 크기는 속성 이름과 값을 포함하여 64KB까지입니다. 기본 키는 필수로 포함하고 있어야 하며 복합키와 기타 속성을 가집니다.</li><li><strong>속성(Attribute)</strong>: 속성은 키-값(Key-Value) 방식입니다. 키는 문자열이라야 합니다.</li></ul><p>속성이 지원하는 값 데이터 형식은 다음과 같습니다.</p><ul><li><strong>스칼라 데이터 형식(Scalar data types)</strong>: 숫자(Number), 문자열(String), 바이너리(Binary)가 있습니다. <ul><li><strong>숫자</strong>: 정수와 실수를 지원하며 실수는 소수점 이하 38자리, 10-128에서 10+126까지입니다. 숫자는 0을 트림(Trim)합니다. 예) 0.3 → .3, 00300 → 300</li><li><strong>문자열</strong>: UTF8 형식이며 대소를 비교할 때에는 아스키(ASCII) 코드 기준으로 합니다.</li><li><strong>바이너리</strong>: 바이너리 데이터는 BASE64 형식으로 인코딩하여 저장하면 됩니다. 대소를 비교할 때에는 각 바이트를 부호 없는(unsigned) 정수로 취급합니다.</li></ul></li><li><strong>다중 값 형식(Multi-valued types)</strong>: 스칼라 데이터 형식의 배열 형태입니다. 숫자 세트(Number Set), 문자열 세트(String Set), 바이너리 세트(Binary Set)가 있습니다. 다중 값 형식에 들어가는 값은 중복될 수 없으며 값이 하나라도 들어가 있어야 합니다. 값들은 정렬되지 않으며 정렬 순서도 저장되지 않습니다. 다중 값 형식은 기본 키로 사용할 수 없습니다.</li></ul><p>속성의 값에 NULL이나 빈 문자열은 저장할 수 없습니다.</p><p>DynamoDB에서 검색을 하려면 기본 키<sup>Primary</sup> <sup>Key</sup>로 인덱스<sup>Index</sup>를 생성해야 합니다. 그리고 이 기본 키는 테이블을 생성할 때 반드시 지정해야 하며 이 기본 키로 생성되는 인덱스를 테이블 인덱스라고 합니다. DynamoDB가 지원하는 기본 키 형식은 두 가지입니다.</p><ul><li><strong>해시(Hash) 형식 기본 키</strong>: 속성 하나를 기본 키로 사용합니다. 기본 키의 값은 스칼라 데이터 형식만 가능합니다. 다중 값 형식은 지원하지 않습니다.</li><li><strong>해시와 범위(Range) 형식 기본 키</strong>: 속성 두 개를 기본 키로 사용합니다.(복합키) 첫 번째 속성은 해시 기본 키로 사용하고 두 번째 속성은 범위 기본 키로 사용하여 두 가지를 복합적으로 사용하는 방식입니다.</li></ul><p>해시 기본 키는 일치<sup>Equal</sup> 방식 검색만 지원하며 범위 기본 키는 일치, 부등호, 포함, ~로 시작 등의 검색을 지원합니다. 그리고 해시 기본 키 속성 값의 최대 크기는 2048 바이트이며 범위 기본 키 속성 값의 최대 크기는 1024 바이트입니다.</p><p>DynamoDB는 기본 키로 생성하는 테이블 인덱스 이외에도 보조 인덱스<sup>Secondary</sup> <sup>Index</sup>를 생성할 수 있습니다. 기본 키로 생성한 인덱스 하나만으로는 검색 기능이 부족하기 때문에 사용자가 원하는 속성으로 보조 인덱스를 생성하여 검색에 활용할 수 있습니다. 이 보조 인덱스는 사용이 빈번하기 때문에 성능을 위해 읽기/쓰기 용량 유닛을 따로 설정할 수 있습니다.</p><ul><li><strong>로컬 보조 인덱스(Local Secondary Index)</strong>: 해시 키는 테이블 인덱스의 해시 기본 키와 같고, 범위 키는 다르게 설정한 것입니다. 테이블당 5개까지 생성할 수 있습니다. 로컬 보조 인덱스는 테이블을 생성할 때 함께 생성해야 하며 테이블이 생성된 이후에는 추가, 수정, 삭제를 할 수 없습니다(로컬 보조 인덱스 추가, 수정, 삭제 기능 출시 예정). 또한, 로컬 보조 인덱스는 테이블에서 해시 기본 키와 범위 기본 키를 사용할 때만 생성할 수 있습니다.</li><li><strong>글로벌 보조 인덱스(Global Secondary Index)</strong>: 해시 키와 범위 키 모두 테이블 인덱스와 다르게 설정한 것입니다. 범위 키는 생략할 수 있습니다. 테이블당 5개까지 생성할 수 있습니다. 글로벌 보조 인덱스는 테이블을 생성할 때 함께 생성해야 하며 테이블이 생성된 이후에는 추가, 수정, 삭제를 할 수 없습니다.</li></ul><p>DynamoDB는 데이터를 읽을 때 Eventually Consistent Read와 Strongly Consistent Read를 사용할 수 있습니다.</p><ul><li><strong>Eventually Consistent Read(기본)</strong>: 읽기 처리량(Read Throughput)을 최대화하지만 읽은 데이터가 최근 완료된 쓰기 결과를 반영하지 못했을 수도 있습니다. 쓰기가 데이터의 모든 복사본에 반영되는 것은 1초내에 이루어집니다. 최신 데이터를 얻으려면 짧은 시간 내에 읽기를 반복해야 합니다.</li><li><strong>Strongly Consistent Read</strong>: 최근 완료된 쓰기 결과가 모두 반영된 데이터를 가져옵니다.</li></ul><p>프로비저닝된 처리량<sup>Provisioned</sup> <sup>Throughput</sup>은 사용자가 원하는 수치를 지정하면 DynamoDB가 알아서 지정된 수치만큼 처리량을 제공해주는 것을 말합니다.</p><ul><li><strong>필요한 읽기 용량 유닛(Read Capacity Units)</strong>: 초당 읽은 아이템 수 x KB 단위 아이템 크기(근사치 반올림) (Eventually Consistent Read를 사용하는 경우 초당 읽은 아이템 용량은 두 배가됩니다.)</li><li><strong>필요한 쓰기 용량 유닛(Write Capacity Units)</strong>: 초당 쓴 아이템 수 x KB 단위 아이템 크기(근사치 반올림)</li></ul>",15),_=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"예"),t("ul",null,[t("li",null,[a("512바이트(1KB로 반올림 됨)를 초당 "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mn",null,"200")]),t("annotation",{encoding:"application/x-tex"},"200")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6444em"}}),t("span",{class:"mord"},"200")])])]),a("개 항목을 읽으면(쓰면), "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mn",null,"1"),t("mtext",null,"KB"),t("mo",null,"×"),t("mn",null,"200"),t("mo",null,"="),t("mn",null,"200"),t("mtext",null,"유닛")]),t("annotation",{encoding:"application/x-tex"},"1\\text{KB}\\times{200}=200\\text{유닛}")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),t("span",{class:"mord"},"1"),t("span",{class:"mord text"},[t("span",{class:"mord"},"KB")]),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),t("span",{class:"mbin"},"×"),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6444em"}}),t("span",{class:"mord"},[t("span",{class:"mord"},"200")]),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6833em"}}),t("span",{class:"mord"},"200"),t("span",{class:"mord text"},[t("span",{class:"mord hangul_fallback"},"유닛")])])])])]),t("li",null,[a("1.5KB(2KB로 반올림 됨)를 초당 "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mn",null,"200")]),t("annotation",{encoding:"application/x-tex"},"200")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6444em"}}),t("span",{class:"mord"},"200")])])]),a("개 항목을 읽으면(쓰면), "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mn",null,"2"),t("mtext",null,"KB"),t("mo",null,"×"),t("mn",null,"200"),t("mo",null,"="),t("mn",null,"400"),t("mtext",null,"유닛")]),t("annotation",{encoding:"application/x-tex"},"2\\text{KB}\\times{200}=400\\text{유닛}")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),t("span",{class:"mord"},"2"),t("span",{class:"mord text"},[t("span",{class:"mord"},"KB")]),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),t("span",{class:"mbin"},"×"),t("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6444em"}}),t("span",{class:"mord"},[t("span",{class:"mord"},"200")]),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"="),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6833em"}}),t("span",{class:"mord"},"400"),t("span",{class:"mord text"},[t("span",{class:"mord hangul_fallback"},"유닛")])])])])])])],-1),B=t("p",null,"Strongly Consistent Read는 1000 읽기 용량 유닛으로 1KB 짜리 아이템을 초당 1000번 읽을 수 있으며 Eventually Consistent Read는 500 읽기 용량 유닛으로 1KB 짜리 아이템을 1000번 읽을 수 있습니다.",-1),w=t("p",null,"그리고 읽기 용량의 유닛 수는 API 호출 수가 아닌 초당 읽은 아이템 수로 결정됩니다. 500 유닛을 읽는다고 하면 1KB 짜리 아이템을 GetItem으로 500번 호출하는 것과, BatchGetItem으로 아이템 10개씩 50번 호출하는 것은 동일합니다.",-1),b=t("p",null,"DynamoDB의 데이터 조회 방법은 두 가지입니다. 두 가지 모두 한 번에 조회할 수 있는 용량은 1MB입니다.",-1),f=t("ul",null,[t("li",null,[t("strong",null,"Scan"),a(": 조건 없이 모든 데이터를 가져옵니다.")]),t("li",null,[t("strong",null,"Query"),a(": 해시 (기본)키에 특정 값을 지정하고, 범위 (기본)키에 조건을 지정하여 원하는 데이터를 가져옵니다. 범위 (기본)키에 조건을 지정하는 것은 생략할 수 있습니다.")])],-1),k={class:"hint-container info"},A=t("p",{class:"hint-container-title"},"DynamoDB의 제약 조건",-1),v=t("p",null,"DynamoDB의 기술적 제약 및 한계(Limit)에 대해서는 다음 링크를 참조하기 바랍니다.",-1),S=t("hr",null,null,-1);function K(o,M){const s=p("VPCard");return u(),i("div",null,[t("h1",d,[t("a",g,[t("span",null,c(o.$frontmatter.title)+" 관련",1)])]),n(s,e(l({title:"목차",desc:"아마존 웹 서비스를 다루는 기술",link:"/aws/art-of-aws/README.md",logo:"https://pyrasis.com/assets/images/pyrasis.png",background:"rgba(31,41,55,0.2)"})),null,16),y,x,n(s,e(l({title:"14장 - 1. DynamoDB의 데이터",desc:"아마존 웹 서비스를 다루는 기술",link:"https://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter14/01",logo:"https://pyrasis.com/favicon.ico",background:"rgba(31,41,55,0.2)"})),null,16),D,_,B,w,b,f,t("div",k,[A,v,n(s,e(l({title:"Service, account, and table quotas in Amazon DynamoDB - Amazon DynamoDB",desc:"Examine the service, account, and table level quotas in place with DynamoDB, and learn which are default values and which can be tuned for your workloads.",link:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html",logo:"https://docs.aws.amazon.com/assets/images/favicon.ico",background:"rgba(247,155,38,0.2)"})),null,16)]),S])}const T=r(h,[["render",K],["__file","14A.html.vue"]]),z=JSON.parse('{"path":"/aws/art-of-aws/14A.html","title":"14A. DynamoDB의 데이터","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"14A. DynamoDB의 데이터","description":"아마존 웹 서비스를 다루는 기술 > 14A. DynamoDB의 데이터","category":["AWS"],"tag":["crashcourse","pyrasis","aws","amazon-web-services"],"head":[[{"meta":null},{"property":"og:title","content":"아마존 웹 서비스를 다루는 기술 > 14A. DynamoDB의 데이터"},{"property":"og:description","content":"14A. DynamoDB의 데이터"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/aws/art-of-aws/14A.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/aws/art-of-aws/14A.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"14A. DynamoDB의 데이터"}],["meta",{"property":"og:description","content":"아마존 웹 서비스를 다루는 기술 > 14A. DynamoDB의 데이터"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"pyrasis"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"amazon-web-services"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"14A. DynamoDB의 데이터\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1712541541000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":5}]},"readingTime":{"minutes":1.13,"words":340},"filePathRelative":"aws/art-of-aws/14A.md","localizedDate":"2024년 4월 8일","excerpt":"\\n"}');export{T as comp,z as data};
