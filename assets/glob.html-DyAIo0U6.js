import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,a as t,t as h,b as a,n as c,g as i,w as n,d as e,e as g,r,o as b}from"./app-U_bew1in.js";const y={},k={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},_=t("nav",{class:"table-of-contents"},[t("ul")],-1),v=t("hr",null,null,-1),T=t("p",null,[e("Glob 라이브러리는 파일 시스템에서 패턴 매칭을 사용하여 파일 목록을 찾는 Python의 내장 라이브러리입니다. 특정 규칙을 따르는 파일 이름을 검색할 때 유용하며, 복잡한 디렉토리 구조에서도 원하는 파일을 쉽게 찾을 수 있게 도와줍니다. Glob는 주로 와일드카드 문자(예: "),t("code",null,"*"),e(", "),t("code",null,"?"),e(", "),t("code",null,"[...]"),e(")를 사용하여 파일 패턴을 지정합니다.")],-1),w=t("p",null,[e("Glob"),t("sup",{class:"footnote-ref"},[t("a",{href:"#footnote1"},"[1]"),t("a",{class:"footnote-anchor",id:"footnote-ref1"})]),e(" 라이브러리의 주요 함수는 "),t("code",null,"glob.glob()"),e(" 입니다. 이 함수는 지정된 패턴과 일치하는 모든 파일 경로의 리스트를 반환합니다.")],-1),x=t("div",{class:"language-python line-numbers-mode","data-highlighter":"prismjs","data-ext":"py","data-title":"py"},[t("pre",null,[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"import"),e(" glob")]),e(`
`),t("span",{class:"line"}),e(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# 현재 디렉토리의 모든 .txt 파일 목록을 찾습니다.")]),e(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"for"),e(" filename "),t("span",{class:"token keyword"},"in"),e(" glob"),t("span",{class:"token punctuation"},"."),e("glob"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'*.txt'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},":")]),e(`
`),t("span",{class:"line"},[e("    "),t("span",{class:"token keyword"},"print"),t("span",{class:"token punctuation"},"("),e("filename"),t("span",{class:"token punctuation"},")")]),e(`
`),t("span",{class:"line"}),e(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"# 하위 디렉토리를 포함하여 모든 .py 파일을 찾습니다.")]),e(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"for"),e(" filename "),t("span",{class:"token keyword"},"in"),e(" glob"),t("span",{class:"token punctuation"},"."),e("glob"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'**/*.py'"),t("span",{class:"token punctuation"},","),e(" recursive"),t("span",{class:"token operator"},"="),t("span",{class:"token boolean"},"True"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},":")]),e(`
`),t("span",{class:"line"},[e("    "),t("span",{class:"token keyword"},"print"),t("span",{class:"token punctuation"},"("),e("filename"),t("span",{class:"token punctuation"},")")]),e(`
`),t("span",{class:"line"})])]),t("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),P=t("p",null,[e("첫 번째 예제에서는 현재 디렉토리에 있는 모든 "),t("code",null,".txt"),e(" 파일을 찾습니다. 두 번째 예제에서는 "),t("code",null,"**"),e(" 패턴과 "),t("code",null,"recursive=True"),e(" 옵션을 사용하여 현재 디렉토리와 모든 하위 디렉토리에서 "),t("code",null,".py"),e(" 파일을 찾습니다.")],-1),A=t("ul",null,[t("li",null,[t("strong",null,"파일 정리 및 관리"),e(": 특정 패턴을 가진 파일을 찾아서 정리하거나 이동시킬 때 사용할 수 있습니다.")]),t("li",null,[t("strong",null,"데이터 분석"),e(": 데이터 분석 프로젝트에서 특정 패턴을 가진 데이터 파일만을 선택적으로 로드하기 위해 사용될 수 있습니다.")]),t("li",null,[t("strong",null,"자동화 스크립트"),e(": 백업, 로그 분석, 파일 시스템 관리 등의 자동화 스크립트에서 특정 파일을 대상으로 작업할 때 활용됩니다.")])],-1),R=t("p",null,"Glob 라이브러리는 파일 시스템에서 패턴 기반의 파일 검색을 간단하게 해주는 매우 유용한 Python의 내장 라이브러리입니다. 간단한 API와 와일드카드 패턴을 사용하여 다양한 파일 처리 작업을 효율적으로 수행할 수 있으며, 파일 관리 및 데이터 처리 작업의 자동화에 큰 도움을 줍니다.",-1),V=g('<hr><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><a href="https://docs.python.org/ko/3/library/glob.html" target="_blank" rel="noopener noreferrer">https://docs.python.org/ko/3/library/glob.html</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',3);function Z(p,C){const l=r("VPCard"),u=r("Tabs");return b(),m("div",null,[t("h1",k,[t("a",f,[t("span",null,h(p.$frontmatter.title)+" 관련",1)])]),a(l,c(i({title:"목차",desc:"함께해요 파이썬 생태계",link:"/py/ecosystem/README.md",logo:"https://wikidocs.net/static/img/favicon.ico",background:"rgba(51,122,183,0.2)"})),null,16),_,v,a(l,c(i({title:"glob: 패턴 매칭 기반 파일 목록 찾기 | WikiDocs",desc:"함께해요 파이썬 생태계",link:"https://wikidocs.net/230408",logo:"https://wikidocs.net/static/img/favicon.ico",background:"rgba(51,122,183,0.2)"})),null,16),T,a(u,{id:"12",data:[{id:"예제 코드"},{id:"사용 사례"},{id:"결론"}],active:0},{title0:n(({value:o,isActive:s})=>[e("예제 코드")]),title1:n(({value:o,isActive:s})=>[e("사용 사례")]),title2:n(({value:o,isActive:s})=>[e("결론")]),tab0:n(({value:o,isActive:s})=>[w,x,P]),tab1:n(({value:o,isActive:s})=>[A]),tab2:n(({value:o,isActive:s})=>[R]),_:1}),V])}const G=d(y,[["render",Z],["__file","glob.html.vue"]]),B=JSON.parse('{"path":"/py/ecosystem/02/glob.html","title":"glob: 패턴 매칭 기반 파일 목록 찾기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"glob: 패턴 매칭 기반 파일 목록 찾기","description":"함께해요 파이썬 생태계 > glob: 패턴 매칭 기반 파일 목록 찾기","category":["Python"],"tag":["crashcourse","python","py"],"head":[[{"meta":null},{"property":"og:title","content":"함께해요 파이썬 생태계 > glob: 패턴 매칭 기반 파일 목록 찾기"},{"property":"og:description","content":"glob: 패턴 매칭 기반 파일 목록 찾기"},{"property":"og:url","content":"https://chanhi2002.github.io/crashcourse/py/ecostystem/02/glob.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/py/ecosystem/02/glob.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"glob: 패턴 매칭 기반 파일 목록 찾기"}],["meta",{"property":"og:description","content":"함께해요 파이썬 생태계 > glob: 패턴 매칭 기반 파일 목록 찾기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"py"}],["meta",{"property":"article:published_time","content":"2024-05-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"glob: 패턴 매칭 기반 파일 목록 찾기\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]],"date":"2024-05-06T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"createdTime":1718788955000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":3}]},"readingTime":{"minutes":0.44,"words":132},"filePathRelative":"py/ecosystem/02/glob.md","localizedDate":"2024년 5월 6일","excerpt":"\\n"}');export{G as comp,B as data};
