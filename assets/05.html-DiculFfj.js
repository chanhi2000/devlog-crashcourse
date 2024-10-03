import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as e,t as c,b as a,w as t,e as s,r as d,o,d as n}from"./app-U_bew1in.js";const u={},p={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"},_=s('<hr><h2 id="a-동적-메모리-관리" tabindex="-1"><a class="header-anchor" href="#a-동적-메모리-관리"><span>A. 동적 메모리 관리</span></a></h2><h3 id="메모리-관리의-필요성" tabindex="-1"><a class="header-anchor" href="#메모리-관리의-필요성"><span>메모리 관리의 필요성</span></a></h3><h3 id="카운터-관리-방식과-arc-가비지-컬랙션" tabindex="-1"><a class="header-anchor" href="#카운터-관리-방식과-arc-가비지-컬랙션"><span>카운터 관리 방식과 ARC, 가비지 컬랙션</span></a></h3><hr><h2 id="b-수동-카운터-관리-방식" tabindex="-1"><a class="header-anchor" href="#b-수동-카운터-관리-방식"><span>B. 수동 카운터 관리 방식</span></a></h2><h3 id="참조-카운터" tabindex="-1"><a class="header-anchor" href="#참조-카운터"><span>참조 카운터</span></a></h3><h3 id="참조-카운터-확인-프로그램" tabindex="-1"><a class="header-anchor" href="#참조-카운터-확인-프로그램"><span>참조 카운터 확인 프로그램</span></a></h3><h3 id="인스턴스를-해제하는-메서드-정의" tabindex="-1"><a class="header-anchor" href="#인스턴스를-해제하는-메서드-정의"><span>인스턴스를 해제하는 메서드 정의</span></a></h3><h3 id="접근자-메서드와-소유권" tabindex="-1"><a class="header-anchor" href="#접근자-메서드와-소유권"><span>접근자 메서드와 소유권</span></a></h3><h3 id="인스턴스-자동-해제" tabindex="-1"><a class="header-anchor" href="#인스턴스-자동-해제"><span>인스턴스 자동 해제</span></a></h3><h3 id="자동-해제-풀-사용법과-주의점" tabindex="-1"><a class="header-anchor" href="#자동-해제-풀-사용법과-주의점"><span>자동 해제 풀 사용법과 주의점</span></a></h3><h3 id="임시-인스턴스-생성" tabindex="-1"><a class="header-anchor" href="#임시-인스턴스-생성"><span>임시 인스턴스 생성</span></a></h3><h3 id="실행-반복과-자동-해제-풀" tabindex="-1"><a class="header-anchor" href="#실행-반복과-자동-해제-풀"><span>실행 반복과 자동 해제 풀</span></a></h3><h3 id="해제되지-않은-객체" tabindex="-1"><a class="header-anchor" href="#해제되지-않은-객체"><span>해제되지 않은 객체</span></a></h3><hr><h2 id="c-분수-계산기-예제" tabindex="-1"><a class="header-anchor" href="#c-분수-계산기-예제"><span>C. 분수 계산기 예제</span></a></h2><h3 id="분수-클래스-fraction" tabindex="-1"><a class="header-anchor" href="#분수-클래스-fraction"><span>분수 클래스 <code>Fraction</code></span></a></h3><h3 id="계산-결과를-저장하는-클래스-fracregister" tabindex="-1"><a class="header-anchor" href="#계산-결과를-저장하는-클래스-fracregister"><span>계산 결과를 저장하는 클래스 <code>FracRegister</code></span></a></h3><h3 id="메인-함수와-실행-예" tabindex="-1"><a class="header-anchor" href="#메인-함수와-실행-예"><span>메인 함수와 실행 예</span></a></h3><hr><h2 id="d-arc-개요" tabindex="-1"><a class="header-anchor" href="#d-arc-개요"><span>D. ARC 개요</span></a></h2><h3 id="arc란" tabindex="-1"><a class="header-anchor" href="#arc란"><span>ARC란</span></a></h3><h3 id="수동-카운터-조작-금지" tabindex="-1"><a class="header-anchor" href="#수동-카운터-조작-금지"><span>수동 카운터 조작 금지</span></a></h3><h3 id="자동-해제-풀의-새로운-구문" tabindex="-1"><a class="header-anchor" href="#자동-해제-풀의-새로운-구문"><span>자동 해제 풀의 새로운 구문</span></a></h3><h3 id="변수-초기값" tabindex="-1"><a class="header-anchor" href="#변수-초기값"><span>변수 초기값</span></a></h3><h3 id="메서드-패밀리" tabindex="-1"><a class="header-anchor" href="#메서드-패밀리"><span>메서드 패밀리</span></a></h3><h3 id="메서드-dealloc-정의" tabindex="-1"><a class="header-anchor" href="#메서드-dealloc-정의"><span>메서드 <code>dealloc</code> 정의</span></a></h3><h3 id="arc를-사용한-프로그램-컴파일" tabindex="-1"><a class="header-anchor" href="#arc를-사용한-프로그램-컴파일"><span>ARC를 사용한 프로그램 컴파일</span></a></h3><h3 id="arc-기본-사항-정리" tabindex="-1"><a class="header-anchor" href="#arc-기본-사항-정리"><span>ARC 기본 사항 정리</span></a></h3><h3 id="분수-계산-프로그램을-arc로-동작시키디" tabindex="-1"><a class="header-anchor" href="#분수-계산-프로그램을-arc로-동작시키디"><span>분수 계산 프로그램을 ARC로 동작시키디</span></a></h3><hr><h2 id="e-유지-순환과-약한-참조" tabindex="-1"><a class="header-anchor" href="#e-유지-순환과-약한-참조"><span>E. 유지 순환과 약한 참조</span></a></h2><h3 id="유지-순환" tabindex="-1"><a class="header-anchor" href="#유지-순환"><span>유지 순환</span></a></h3><h3 id="소유권과-객체의-관계" tabindex="-1"><a class="header-anchor" href="#소유권과-객체의-관계"><span>소유권과 객체의 관계</span></a></h3><h3 id="약한-참조" tabindex="-1"><a class="header-anchor" href="#약한-참조"><span>약한 참조</span></a></h3><h3 id="변수-제로화" tabindex="-1"><a class="header-anchor" href="#변수-제로화"><span>변수 제로화</span></a></h3><h3 id="객체-구조의-기본-장침" tabindex="-1"><a class="header-anchor" href="#객체-구조의-기본-장침"><span>객체 구조의 기본 장침</span></a></h3><hr><h2 id="f-arc-프로그래밍의-기타-주의사항" tabindex="-1"><a class="header-anchor" href="#f-arc-프로그래밍의-기타-주의사항"><span>F. ARC 프로그래밍의 기타 주의사항</span></a></h2><h3 id="객체를-일반-포인터처럼-취급" tabindex="-1"><a class="header-anchor" href="#객체를-일반-포인터처럼-취급"><span>객체를 일반 포인터처럼 취급</span></a></h3><h3 id="객체를-저장하는-세터-메서드" tabindex="-1"><a class="header-anchor" href="#객체를-저장하는-세터-메서드"><span>객체를 저장하는 세터 메서드</span></a></h3><h3 id="메서드-인수를-통해-객체-받기" tabindex="-1"><a class="header-anchor" href="#메서드-인수를-통해-객체-받기"><span>메서드 인수를 통해 객체 받기</span></a></h3><h3 id="객체를-포함한-c-배열" tabindex="-1"><a class="header-anchor" href="#객체를-포함한-c-배열"><span>객체를 포함한 C 배열</span></a></h3><h3 id="구조체-관련-제약" tabindex="-1"><a class="header-anchor" href="#구조체-관련-제약"><span>구조체 관련 제약</span></a></h3><h3 id="컴파일러-지정" tabindex="-1"><a class="header-anchor" href="#컴파일러-지정"><span>컴파일러 지정</span></a></h3><hr>',47);function b(i,k){const l=d("router-link");return o(),h("div",null,[e("h1",p,[e("a",f,[e("span",null,c(i.$frontmatter.title)+" 관련",1)])]),e("nav",g,[e("ul",null,[e("li",null,[a(l,{to:"#a-동적-메모리-관리"},{default:t(()=>[n("A. 동적 메모리 관리")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#메모리-관리의-필요성"},{default:t(()=>[n("메모리 관리의 필요성")]),_:1})]),e("li",null,[a(l,{to:"#카운터-관리-방식과-arc-가비지-컬랙션"},{default:t(()=>[n("카운터 관리 방식과 ARC, 가비지 컬랙션")]),_:1})])])]),e("li",null,[a(l,{to:"#b-수동-카운터-관리-방식"},{default:t(()=>[n("B. 수동 카운터 관리 방식")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#참조-카운터"},{default:t(()=>[n("참조 카운터")]),_:1})]),e("li",null,[a(l,{to:"#참조-카운터-확인-프로그램"},{default:t(()=>[n("참조 카운터 확인 프로그램")]),_:1})]),e("li",null,[a(l,{to:"#인스턴스를-해제하는-메서드-정의"},{default:t(()=>[n("인스턴스를 해제하는 메서드 정의")]),_:1})]),e("li",null,[a(l,{to:"#접근자-메서드와-소유권"},{default:t(()=>[n("접근자 메서드와 소유권")]),_:1})]),e("li",null,[a(l,{to:"#인스턴스-자동-해제"},{default:t(()=>[n("인스턴스 자동 해제")]),_:1})]),e("li",null,[a(l,{to:"#자동-해제-풀-사용법과-주의점"},{default:t(()=>[n("자동 해제 풀 사용법과 주의점")]),_:1})]),e("li",null,[a(l,{to:"#임시-인스턴스-생성"},{default:t(()=>[n("임시 인스턴스 생성")]),_:1})]),e("li",null,[a(l,{to:"#실행-반복과-자동-해제-풀"},{default:t(()=>[n("실행 반복과 자동 해제 풀")]),_:1})]),e("li",null,[a(l,{to:"#해제되지-않은-객체"},{default:t(()=>[n("해제되지 않은 객체")]),_:1})])])]),e("li",null,[a(l,{to:"#c-분수-계산기-예제"},{default:t(()=>[n("C. 분수 계산기 예제")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#분수-클래스-fraction"},{default:t(()=>[n("분수 클래스 Fraction")]),_:1})]),e("li",null,[a(l,{to:"#계산-결과를-저장하는-클래스-fracregister"},{default:t(()=>[n("계산 결과를 저장하는 클래스 FracRegister")]),_:1})]),e("li",null,[a(l,{to:"#메인-함수와-실행-예"},{default:t(()=>[n("메인 함수와 실행 예")]),_:1})])])]),e("li",null,[a(l,{to:"#d-arc-개요"},{default:t(()=>[n("D. ARC 개요")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#arc란"},{default:t(()=>[n("ARC란")]),_:1})]),e("li",null,[a(l,{to:"#수동-카운터-조작-금지"},{default:t(()=>[n("수동 카운터 조작 금지")]),_:1})]),e("li",null,[a(l,{to:"#자동-해제-풀의-새로운-구문"},{default:t(()=>[n("자동 해제 풀의 새로운 구문")]),_:1})]),e("li",null,[a(l,{to:"#변수-초기값"},{default:t(()=>[n("변수 초기값")]),_:1})]),e("li",null,[a(l,{to:"#메서드-패밀리"},{default:t(()=>[n("메서드 패밀리")]),_:1})]),e("li",null,[a(l,{to:"#메서드-dealloc-정의"},{default:t(()=>[n("메서드 dealloc 정의")]),_:1})]),e("li",null,[a(l,{to:"#arc를-사용한-프로그램-컴파일"},{default:t(()=>[n("ARC를 사용한 프로그램 컴파일")]),_:1})]),e("li",null,[a(l,{to:"#arc-기본-사항-정리"},{default:t(()=>[n("ARC 기본 사항 정리")]),_:1})]),e("li",null,[a(l,{to:"#분수-계산-프로그램을-arc로-동작시키디"},{default:t(()=>[n("분수 계산 프로그램을 ARC로 동작시키디")]),_:1})])])]),e("li",null,[a(l,{to:"#e-유지-순환과-약한-참조"},{default:t(()=>[n("E. 유지 순환과 약한 참조")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#유지-순환"},{default:t(()=>[n("유지 순환")]),_:1})]),e("li",null,[a(l,{to:"#소유권과-객체의-관계"},{default:t(()=>[n("소유권과 객체의 관계")]),_:1})]),e("li",null,[a(l,{to:"#약한-참조"},{default:t(()=>[n("약한 참조")]),_:1})]),e("li",null,[a(l,{to:"#변수-제로화"},{default:t(()=>[n("변수 제로화")]),_:1})]),e("li",null,[a(l,{to:"#객체-구조의-기본-장침"},{default:t(()=>[n("객체 구조의 기본 장침")]),_:1})])])]),e("li",null,[a(l,{to:"#f-arc-프로그래밍의-기타-주의사항"},{default:t(()=>[n("F. ARC 프로그래밍의 기타 주의사항")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#객체를-일반-포인터처럼-취급"},{default:t(()=>[n("객체를 일반 포인터처럼 취급")]),_:1})]),e("li",null,[a(l,{to:"#객체를-저장하는-세터-메서드"},{default:t(()=>[n("객체를 저장하는 세터 메서드")]),_:1})]),e("li",null,[a(l,{to:"#메서드-인수를-통해-객체-받기"},{default:t(()=>[n("메서드 인수를 통해 객체 받기")]),_:1})]),e("li",null,[a(l,{to:"#객체를-포함한-c-배열"},{default:t(()=>[n("객체를 포함한 C 배열")]),_:1})]),e("li",null,[a(l,{to:"#구조체-관련-제약"},{default:t(()=>[n("구조체 관련 제약")]),_:1})]),e("li",null,[a(l,{to:"#컴파일러-지정"},{default:t(()=>[n("컴파일러 지정")]),_:1})])])])])]),_])}const m=r(u,[["render",b],["__file","05.html.vue"]]),C=JSON.parse('{"path":"/swift/shuokai-objc/05.html","title":"05. 참조 카운터를 사용한 메모리 관리 방법","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"05. 참조 카운터를 사용한 메모리 관리 방법","description":"OSX 구조를 이해하면서 배우는 Objective-C > 05. 참조 카운터를 사용한 메모리 관리 방법","category":["Objective-C"],"tag":["crashcourse","xcode","objective-c","objc"],"head":[[{"meta":null},{"property":"og:title","content":"OSX 구조를 이해하면서 배우는 Objective-C > 05. 참조 카운터를 사용한 메모리 관리 방법"},{"property":"og:description","content":"05. 참조 카운터를 사용한 메모리 관리 방법"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/swift/shuokai-objc/05.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/swift/shuokai-objc/05.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"05. 참조 카운터를 사용한 메모리 관리 방법"}],["meta",{"property":"og:description","content":"OSX 구조를 이해하면서 배우는 Objective-C > 05. 참조 카운터를 사용한 메모리 관리 방법"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"objective-c"}],["meta",{"property":"article:tag","content":"objc"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05. 참조 카운터를 사용한 메모리 관리 방법\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"A. 동적 메모리 관리","slug":"a-동적-메모리-관리","link":"#a-동적-메모리-관리","children":[{"level":3,"title":"메모리 관리의 필요성","slug":"메모리-관리의-필요성","link":"#메모리-관리의-필요성","children":[]},{"level":3,"title":"카운터 관리 방식과 ARC, 가비지 컬랙션","slug":"카운터-관리-방식과-arc-가비지-컬랙션","link":"#카운터-관리-방식과-arc-가비지-컬랙션","children":[]}]},{"level":2,"title":"B. 수동 카운터 관리 방식","slug":"b-수동-카운터-관리-방식","link":"#b-수동-카운터-관리-방식","children":[{"level":3,"title":"참조 카운터","slug":"참조-카운터","link":"#참조-카운터","children":[]},{"level":3,"title":"참조 카운터 확인 프로그램","slug":"참조-카운터-확인-프로그램","link":"#참조-카운터-확인-프로그램","children":[]},{"level":3,"title":"인스턴스를 해제하는 메서드 정의","slug":"인스턴스를-해제하는-메서드-정의","link":"#인스턴스를-해제하는-메서드-정의","children":[]},{"level":3,"title":"접근자 메서드와 소유권","slug":"접근자-메서드와-소유권","link":"#접근자-메서드와-소유권","children":[]},{"level":3,"title":"인스턴스 자동 해제","slug":"인스턴스-자동-해제","link":"#인스턴스-자동-해제","children":[]},{"level":3,"title":"자동 해제 풀 사용법과 주의점","slug":"자동-해제-풀-사용법과-주의점","link":"#자동-해제-풀-사용법과-주의점","children":[]},{"level":3,"title":"임시 인스턴스 생성","slug":"임시-인스턴스-생성","link":"#임시-인스턴스-생성","children":[]},{"level":3,"title":"실행 반복과 자동 해제 풀","slug":"실행-반복과-자동-해제-풀","link":"#실행-반복과-자동-해제-풀","children":[]},{"level":3,"title":"해제되지 않은 객체","slug":"해제되지-않은-객체","link":"#해제되지-않은-객체","children":[]}]},{"level":2,"title":"C. 분수 계산기 예제","slug":"c-분수-계산기-예제","link":"#c-분수-계산기-예제","children":[{"level":3,"title":"분수 클래스 Fraction","slug":"분수-클래스-fraction","link":"#분수-클래스-fraction","children":[]},{"level":3,"title":"계산 결과를 저장하는 클래스 FracRegister","slug":"계산-결과를-저장하는-클래스-fracregister","link":"#계산-결과를-저장하는-클래스-fracregister","children":[]},{"level":3,"title":"메인 함수와 실행 예","slug":"메인-함수와-실행-예","link":"#메인-함수와-실행-예","children":[]}]},{"level":2,"title":"D. ARC 개요","slug":"d-arc-개요","link":"#d-arc-개요","children":[{"level":3,"title":"ARC란","slug":"arc란","link":"#arc란","children":[]},{"level":3,"title":"수동 카운터 조작 금지","slug":"수동-카운터-조작-금지","link":"#수동-카운터-조작-금지","children":[]},{"level":3,"title":"자동 해제 풀의 새로운 구문","slug":"자동-해제-풀의-새로운-구문","link":"#자동-해제-풀의-새로운-구문","children":[]},{"level":3,"title":"변수 초기값","slug":"변수-초기값","link":"#변수-초기값","children":[]},{"level":3,"title":"메서드 패밀리","slug":"메서드-패밀리","link":"#메서드-패밀리","children":[]},{"level":3,"title":"메서드 dealloc 정의","slug":"메서드-dealloc-정의","link":"#메서드-dealloc-정의","children":[]},{"level":3,"title":"ARC를 사용한 프로그램 컴파일","slug":"arc를-사용한-프로그램-컴파일","link":"#arc를-사용한-프로그램-컴파일","children":[]},{"level":3,"title":"ARC 기본 사항 정리","slug":"arc-기본-사항-정리","link":"#arc-기본-사항-정리","children":[]},{"level":3,"title":"분수 계산 프로그램을 ARC로 동작시키디","slug":"분수-계산-프로그램을-arc로-동작시키디","link":"#분수-계산-프로그램을-arc로-동작시키디","children":[]}]},{"level":2,"title":"E. 유지 순환과 약한 참조","slug":"e-유지-순환과-약한-참조","link":"#e-유지-순환과-약한-참조","children":[{"level":3,"title":"유지 순환","slug":"유지-순환","link":"#유지-순환","children":[]},{"level":3,"title":"소유권과 객체의 관계","slug":"소유권과-객체의-관계","link":"#소유권과-객체의-관계","children":[]},{"level":3,"title":"약한 참조","slug":"약한-참조","link":"#약한-참조","children":[]},{"level":3,"title":"변수 제로화","slug":"변수-제로화","link":"#변수-제로화","children":[]},{"level":3,"title":"객체 구조의 기본 장침","slug":"객체-구조의-기본-장침","link":"#객체-구조의-기본-장침","children":[]}]},{"level":2,"title":"F. ARC 프로그래밍의 기타 주의사항","slug":"f-arc-프로그래밍의-기타-주의사항","link":"#f-arc-프로그래밍의-기타-주의사항","children":[{"level":3,"title":"객체를 일반 포인터처럼 취급","slug":"객체를-일반-포인터처럼-취급","link":"#객체를-일반-포인터처럼-취급","children":[]},{"level":3,"title":"객체를 저장하는 세터 메서드","slug":"객체를-저장하는-세터-메서드","link":"#객체를-저장하는-세터-메서드","children":[]},{"level":3,"title":"메서드 인수를 통해 객체 받기","slug":"메서드-인수를-통해-객체-받기","link":"#메서드-인수를-통해-객체-받기","children":[]},{"level":3,"title":"객체를 포함한 C 배열","slug":"객체를-포함한-c-배열","link":"#객체를-포함한-c-배열","children":[]},{"level":3,"title":"구조체 관련 제약","slug":"구조체-관련-제약","link":"#구조체-관련-제약","children":[]},{"level":3,"title":"컴파일러 지정","slug":"컴파일러-지정","link":"#컴파일러-지정","children":[]}]}],"git":{"createdTime":1706172246000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":5}]},"readingTime":{"minutes":0.2,"words":60},"filePathRelative":"swift/shuokai-objc/05.md","localizedDate":"2024년 1월 25일","excerpt":"\\n\\n<hr>\\n<h2>A. 동적 메모리 관리</h2>\\n<h3>메모리 관리의 필요성</h3>\\n<h3>카운터 관리 방식과 ARC, 가비지 컬랙션</h3>\\n<hr>\\n<h2>B. 수동 카운터 관리 방식</h2>\\n<h3>참조 카운터</h3>\\n<h3>참조 카운터 확인 프로그램</h3>\\n<h3>인스턴스를 해제하는 메서드 정의</h3>\\n<h3>접근자 메서드와 소유권</h3>\\n<h3>인스턴스 자동 해제</h3>\\n<h3>자동 해제 풀 사용법과 주의점</h3>\\n<h3>임시 인스턴스 생성</h3>\\n<h3>실행 반복과 자동 해제 풀</h3>\\n<h3>해제되지 않은 객체</h3>"}');export{m as comp,C as data};
