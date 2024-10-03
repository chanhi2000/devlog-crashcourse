import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as e,t as u,b as t,w as n,n as o,g as i,d as a,e as g,r as s,o as m}from"./app-U_bew1in.js";const b={},f={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},C={class:"table-of-contents"},v=e("hr",null,null,-1),A=e("h2",{id:"about-this-course",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#about-this-course"},[e("span",null,"About This Course")])],-1),_=e("p",null,"Harnessing the incredible acceleration of NVIDIA GPUs is easier than ever. For over a decade NVIDIA has been collaborating in the C++ standard language committees on the adoption of features to enable parallel programming without the need for additional extensions or APIs. On account of this work, developers can now write GPU-accelerated C++ code using only standard language features: no language extensions, pragmas, directives, or non-standard libraries.",-1),y=e("p",null,"Standard language parallelism is the simplest, most productive, and most portable approach to accelerated computing. It requires nothing more than ISO standard C++ and allows developers to write applications that are parallel-first such that there is never a need to port them to new platforms or to run them on GPU-accelerators.",-1),I=e("hr",null,null,-1),k=e("h2",{id:"learning-objectives",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#learning-objectives"},[e("span",null,"Learning Objectives")])],-1),P=g('<ul><li>Rewrite serial C++ / MPI hybrid applications to use C++ standard template library parallel algorithms that can leverage GPU accelerators</li><li>Use the NVIDIA HPC C++ compiler (NVC++) to compile standard C++ / MPI hybrid applications for execution on NVIDIA GPUs and/or multiple nodes with GPUs</li><li>Utilize C++ standard library features to support effective inter-rank communication alongside the use of C++ STL parallel algorithms</li><li>Use NVIDIA&#39;s <a href="https://github.com/NVIDIA/stdexec" target="_blank" rel="noopener noreferrer">reference implementation</a> of Senders, a <a href="https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2022/p2300r5.html" target="_blank" rel="noopener noreferrer">proposed</a> standard model for asynchronous execution in C++</li></ul><hr><h2 id="tools-libraries-and-frameworks-used" tabindex="-1"><a class="header-anchor" href="#tools-libraries-and-frameworks-used"><span>Tools, Libraries, and Frameworks Used</span></a></h2><ul><li><a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer">C++</a></li><li><a href="https://developer.nvidia.com/hpc-sdk" target="_blank" rel="noopener noreferrer">NVIDIA HPC SDK</a></li><li><a href="https://www.open-mpi.org/" target="_blank" rel="noopener noreferrer">MPI</a></li></ul><hr><h2 id="course-prerequisites" tabindex="-1"><a class="header-anchor" href="#course-prerequisites"><span>Course Prerequisites</span></a></h2>',6),D=e("hr",null,null,-1),S=e("h2",{id:"related-trainings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#related-trainings"},[e("span",null,"Related Trainings")])],-1),U=e("ul",null,[e("li",null,[e("a",{href:"https://courses.nvidia.com/courses/course-v1:DLI+C-AC-01+V1/",target:"_blank",rel:"noopener noreferrer"},"Fundamentals of Accelerated Computing with CUDA C/C++")]),e("li",null,[e("a",{href:"https://courses.nvidia.com/courses/course-v1:DLI+S-AC-01+V1/",target:"_blank",rel:"noopener noreferrer"},"Accelerating CUDA C++ Applications with Concurrent Streams")]),e("li",null,[e("a",{href:"https://courses.nvidia.com/courses/course-v1:DLI+S-AC-02+V1/",target:"_blank",rel:"noopener noreferrer"},"Scaling Workloads Across Multiple GPUs with CUDA C++")])],-1),V=e("hr",null,null,-1);function L(c,N){const l=s("router-link"),r=s("VPCard"),d=s("RouteLink");return m(),h("div",null,[e("h1",f,[e("a",w,[e("span",null,u(c.$frontmatter.title)+" 관련",1)])]),e("nav",C,[e("ul",null,[e("li",null,[t(l,{to:"#about-this-course"},{default:n(()=>[a("About This Course")]),_:1})]),e("li",null,[t(l,{to:"#learning-objectives"},{default:n(()=>[a("Learning Objectives")]),_:1})]),e("li",null,[t(l,{to:"#tools-libraries-and-frameworks-used"},{default:n(()=>[a("Tools, Libraries, and Frameworks Used")]),_:1})]),e("li",null,[t(l,{to:"#course-prerequisites"},{default:n(()=>[a("Course Prerequisites")]),_:1})]),e("li",null,[t(l,{to:"#related-trainings"},{default:n(()=>[a("Related Trainings")]),_:1})])])]),v,t(r,o(i({title:"Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA",desc:"Learn how to accelerate and optimize existing C/C++ CPU-only applications using the most essential CUDA tools and techniques. You’ll also learn an iterative style of CUDA development that will allow you to ship accelerated applications fast.",link:"https://courses.nvidia.com/courses/course-v1:DLI+S-AC-09+V1/",logo:"https://courses.nvidia.com/wp-content/themes/nvidia-ibl-web-theme/inc/images/favicon.png",background:"rgba(118,185,0,0.2)"})),null,16),A,_,y,I,k,e("p",null,[a("In this interactive hands-on workshop, which is intended as a followup to "),t(d,{to:"/cpp/nvida-dli+s-ac-08/"},{default:n(()=>[a("GPU Acceleration with the C++ Standard Library")]),_:1}),a(" we present how to write scalable GPU-accelerated hybrid applications using C++ standard language features alongside MPI. By the time you complete this workshop you will be able to:")]),P,t(r,o(i({title:"Learn C++ | Codecademy",desc:"Learn C++ — a versatile programming language that’s important for developing software, games, databases, and more.",link:"https://www.codecademy.com/learn/learn-c-plus-plus",logo:"https://www.codecademy.com/favicon.ico",background:"rgba(255,255,255,0.2)"})),null,16),t(r,o(i({title:"C++ Standard Library Algorithms Introduction | hacking C++",desc:"Introduction, examples and visual explanations of the basic principles behind C++ standard library algorithms.",link:"https://hackingcpp.com/cpp/std/algorithms/intro.html",logo:"https://hackingcpp.com/icon.svg",background:"rgba(0,112,192,0.2)"})),null,16),t(r,o(i({title:"Tutorials · MPI Tutorial",desc:"Welcome to the MPI tutorials! In these tutorials, you will learn a wide array of concepts about MPI. Below are the available lessons, each of which contain example code.",link:"https://mpitutorial.com/tutorials/",logo:"https://mpitutorial.com/public/favicon.ico",background:"rgba(255,255,255,0.2)"})),null,16),t(r,o(i({title:"Modern C++ Concurrency: Get the most out of any machine - AI-Powered Learning for Developers",desc:"Concurrency with Modern C++ is a journey through the present and upcoming concurrency features in C++.",link:"https://www.educative.io/courses/modern-cpp-concurrency-in-practice-get-the-most-out-of-any-machine",logo:"https://www.educative.io/static/favicons/favicon-whiteV2.png",background:"rgba(73,81,245,0.2)"})),null,16),D,S,t(r,o(i({title:"GPU Acceleration with the C++ Standard Library | NVIDIA",desc:"GPU Acceleration with the C++ Standard Library | NVIDIA",link:"/cpp/nvida-dli+s-ac-08/README.md",logo:"https://courses.nvidia.com/wp-content/themes/nvidia-ibl-web-theme/inc/images/favicon.png",background:"rgba(118,185,0,0.2)"})),null,16),U,t(r,o(i({title:"Scaling CUDA C++ Applications to Multiple Nodes | NVIDIA",desc:"Scaling CUDA C++ Applications to Multiple Nodes | NVIDIA",link:"/cpp/nvida-dli+s-ac-07/README.md",logo:"https://courses.nvidia.com/wp-content/themes/nvidia-ibl-web-theme/inc/images/favicon.png",background:"rgba(118,185,0,0.2)"})),null,16),V])}const T=p(b,[["render",L],["__file","index.html.vue"]]),M=JSON.parse('{"path":"/cpp/nvidia-dli_s-ac-09/","title":"Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA","description":"Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA","icon":"fas fa-dice-two","category":["Cpp","GPU"],"tag":["crashcourse","cpp","c-plus-plus","accelerated-computing"],"head":[[{"meta":null},{"property":"og:title","content":"Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA"},{"property":"og:description","content":"Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/cpp/nvidia-dli+s-ac-09/"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/cpp/nvidia-dli_s-ac-09/"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA"}],["meta",{"property":"og:description","content":"Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"cpp"}],["meta",{"property":"article:tag","content":"c-plus-plus"}],["meta",{"property":"article:tag","content":"accelerated-computing"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Scaling GPU-Accelerated Applications with the C++ Standard Library | NVIDIA\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"About This Course","slug":"about-this-course","link":"#about-this-course","children":[]},{"level":2,"title":"Learning Objectives","slug":"learning-objectives","link":"#learning-objectives","children":[]},{"level":2,"title":"Tools, Libraries, and Frameworks Used","slug":"tools-libraries-and-frameworks-used","link":"#tools-libraries-and-frameworks-used","children":[]},{"level":2,"title":"Course Prerequisites","slug":"course-prerequisites","link":"#course-prerequisites","children":[]},{"level":2,"title":"Related Trainings","slug":"related-trainings","link":"#related-trainings","children":[]}],"git":{"createdTime":1711450107000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":4}]},"readingTime":{"minutes":2.51,"words":752},"filePathRelative":"cpp/nvidia-dli+s-ac-09/README.md","localizedDate":"2024년 3월 26일","excerpt":"\\n\\n<hr>\\n"}');export{T as comp,M as data};
