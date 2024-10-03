import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as e,t as h,b as i,w as s,n as m,g as v,e as b,d as t,r as o,o as g}from"./app-U_bew1in.js";const _={},y={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},x={class:"table-of-contents"},f=e("hr",null,null,-1),w=e("p",null,'The default Containers SELinux policy does a really good job Podman in RHEL 8. Most containers "just work" but like any security tool, every now and then we need to make some customizations. Sometimes, especially as we expand the types of workloads that we run in containers, we bump into places where SELinux blocks us. Udica allows an administrator to customize the SELinux policy specifically for a workload for without being an SELinux expert.',-1),A=e("p",null,"For example, run the following container:",-1),R=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"podman"),t(" run "),e("span",{class:"token parameter variable"},"--name"),t(" home-test "),e("span",{class:"token parameter variable"},"--privileged"),t(),e("span",{class:"token parameter variable"},"-v"),t(" /home/:/home:ro "),e("span",{class:"token parameter variable"},"-it"),t(" ubi8 "),e("span",{class:"token function"},"ls"),t(" /home")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},'# Error: OCI runtime error: runc: container_linux.go:349: starting container process caused "unknown capability \\"CAP_BPF\\""')]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),S=e("p",null,"The above command will fail because the default SELinux policy does not allow containers to mount /home as read only. We can verify that there are no allow rules which permit this command to be executed:",-1),j=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[t("sesearch "),e("span",{class:"token parameter variable"},"-A"),t(),e("span",{class:"token parameter variable"},"-s"),t(" container_t "),e("span",{class:"token parameter variable"},"-t"),t(" home_root_t "),e("span",{class:"token parameter variable"},"-c"),t(),e("span",{class:"token function"},"dir"),t(),e("span",{class:"token parameter variable"},"-p"),t(),e("span",{class:"token builtin class-name"},"read")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),C=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}})],-1),L=b(`<p>With Udica, we can quickly and easily configure SELinxux to allow us to mount /home as root. First, we have to extract the meta-data from our container:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">podman</span> inspect home-test <span class="token operator">&gt;</span> home-test.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now, Udica will analyze this data and create a custom SELinux policy for us:</p>`,3),I=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[t("udica "),e("span",{class:"token parameter variable"},"-j"),t(" home-test.json home_test")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),P=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# Policy home_test created!")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Please load these modules using: ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# # semodule -i home_test.cil /usr/share/udica/templates/{base_container.cil,home_container.cil}")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},'# Restart the container with: "--security-opt label=type:home_test.process" parameter')]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T=e("p",null,"Use the SELinux tools to load the new policy:",-1),U=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[t("semodule "),e("span",{class:"token parameter variable"},"-i"),t(" home_test.cil /usr/share/udica/templates/"),e("span",{class:"token punctuation"},"{"),t("base_container.cil,home_container.cil"),e("span",{class:"token punctuation"},"}")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),N=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}})],-1),H=e("p",null,"Now, run the same type of container again, but pass it a security option telling it to label the process to use our new custom policy, and it will execute without being blocked. First start the contaier:",-1),V=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"podman"),t(" run "),e("span",{class:"token parameter variable"},"--name"),t(" home-test-2 "),e("span",{class:"token parameter variable"},"--privileged"),t(" --security-opt "),e("span",{class:"token assign-left variable"},"label"),e("span",{class:"token operator"},"="),t("type:home_test.process "),e("span",{class:"token parameter variable"},"-v"),t(" /home/:/home:ro "),e("span",{class:"token parameter variable"},"-id"),t(" ubi8 "),e("span",{class:"token function"},"bash")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),z=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}})],-1),B=e("p",null,[t("Execute the "),e("code",null,"ls"),t(" command:")],-1),F=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"podman"),t(),e("span",{class:"token builtin class-name"},"exec"),t(),e("span",{class:"token parameter variable"},"-it"),t(" home-test-2 "),e("span",{class:"token function"},"ls"),t(" /home")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),Z=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# Error: can only create exec sessions on running containers: container state improper")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),D=e("p",null,'You will notice that the process is running with the "home_test.process" SELinux context:',-1),K=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token function"},"ps"),t(),e("span",{class:"token parameter variable"},"-efZ"),t(),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"grep"),t(" home_test")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),W=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# system_u:system_r:unconfined_service_t:s0 root 9611 9134  0 09:23 pts/1    00:00:00 grep --color=auto home_test")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),M=e("p",null,"We can also verify that there is a new rule in this policy to allow our container to mount /home read only:",-1),O=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[t("sesearch "),e("span",{class:"token parameter variable"},"-A"),t(),e("span",{class:"token parameter variable"},"-s"),t(" home_test.process "),e("span",{class:"token parameter variable"},"-t"),t(" home_root_t "),e("span",{class:"token parameter variable"},"-c"),t(),e("span",{class:"token function"},"dir"),t(),e("span",{class:"token parameter variable"},"-p"),t(),e("span",{class:"token builtin class-name"},"read")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),q=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# allow home_test.process home_root_t:dir { getattr ioctl lock open read search };")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),J=e("hr",null,null,-1),Y=e("h2",{id:"conclusions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#conclusions"},[e("span",null,"Conclusions")])],-1),$=e("p",null,[t("It's always best to have SELinux enabled, especially with containers. It's so easy to create a custom SELinux policy with Udica, that you should never disable it. If you'd like to understand Udica a bit deeper, check out this great article, "),e("a",{href:"https://fedoramagazine.org/use-udica-to-build-selinux-policy-for-containers/",target:"_blank",rel:"noopener noreferrer"},[t("Use "),e("code",null,"udica"),t(" to build SELinux policy for containers")]),t(" by Lukas Vrabec. Now, let's move on to another tool.")],-1);function G(r,Q){const c=o("router-link"),u=o("VPCard"),l=o("Tabs");return g(),p("div",null,[e("h1",y,[e("a",k,[e("span",null,h(r.$frontmatter.title)+" 관련",1)])]),e("nav",x,[e("ul",null,[e("li",null,[i(c,{to:"#conclusions"},{default:s(()=>[t("Conclusions")]),_:1})])])]),f,i(u,m(v({title:"Red Hat Container Tools",desc:"Intro",link:"https://developers.redhat.com/courses/devops-red-hat-container-tools",logo:"https://developers.redhat.com/themes/custom/rhdp2/images/branding/2023_RHDLogo_black_text.svg",background:"rgba(255,255,255,0.2)"})),null,16),w,A,i(l,{id:"14",data:[{id:"Input"},{id:"Result"}],active:0},{title0:s(({value:a,isActive:n})=>[t("Input")]),title1:s(({value:a,isActive:n})=>[t("Result")]),tab0:s(({value:a,isActive:n})=>[R]),tab1:s(({value:a,isActive:n})=>[E]),_:1}),S,i(l,{id:"25",data:[{id:"Input"},{id:"Result"}],active:0},{title0:s(({value:a,isActive:n})=>[t("Input")]),title1:s(({value:a,isActive:n})=>[t("Result")]),tab0:s(({value:a,isActive:n})=>[j]),tab1:s(({value:a,isActive:n})=>[C]),_:1}),L,i(l,{id:"40",data:[{id:"Input"},{id:"Result"}],active:0},{title0:s(({value:a,isActive:n})=>[t("Input")]),title1:s(({value:a,isActive:n})=>[t("Result")]),tab0:s(({value:a,isActive:n})=>[I]),tab1:s(({value:a,isActive:n})=>[P]),_:1}),T,i(l,{id:"51",data:[{id:"Input"},{id:"Result"}],active:0},{title0:s(({value:a,isActive:n})=>[t("Input")]),title1:s(({value:a,isActive:n})=>[t("Result")]),tab0:s(({value:a,isActive:n})=>[U]),tab1:s(({value:a,isActive:n})=>[N]),_:1}),H,i(l,{id:"62",data:[{id:"Input"},{id:"Result"}],active:0},{title0:s(({value:a,isActive:n})=>[t("Input")]),title1:s(({value:a,isActive:n})=>[t("Result")]),tab0:s(({value:a,isActive:n})=>[V]),tab1:s(({value:a,isActive:n})=>[z]),_:1}),B,i(l,{id:"73",data:[{id:"Input"},{id:"Result"}],active:0},{title0:s(({value:a,isActive:n})=>[t("Input")]),title1:s(({value:a,isActive:n})=>[t("Result")]),tab0:s(({value:a,isActive:n})=>[F]),tab1:s(({value:a,isActive:n})=>[Z]),_:1}),D,i(l,{id:"84",data:[{id:"Input"},{id:"Result"}],active:0},{title0:s(({value:a,isActive:n})=>[t("Input")]),title1:s(({value:a,isActive:n})=>[t("Result")]),tab0:s(({value:a,isActive:n})=>[K]),tab1:s(({value:a,isActive:n})=>[W]),_:1}),M,i(l,{id:"95",data:[{id:"Input"},{id:"Result"}],active:0},{title0:s(({value:a,isActive:n})=>[t("Input")]),title1:s(({value:a,isActive:n})=>[t("Result")]),tab0:s(({value:a,isActive:n})=>[O]),tab1:s(({value:a,isActive:n})=>[q]),_:1}),J,Y,$])}const te=d(_,[["render",G],["__file","07.html.vue"]]),se=JSON.parse('{"path":"/devops/red-hat-container-tools/07.html","title":"7. Udica - Custom SELinux Policies","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"7. Udica - Custom SELinux Policies","description":"Red Hat Container Tools > 7. Udica - Custom SELinux Policies","category":["RedHat"],"tag":["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],"head":[[{"meta":null},{"property":"og:title","content":"Red Hat Container Tools > 7. Udica - Custom SELinux Policies"},{"property":"og:description","content":"7. Udica - Custom SELinux Policies"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/devops/red-hat-container-tools/07.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/devops/red-hat-container-tools/07.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"7. Udica - Custom SELinux Policies"}],["meta",{"property":"og:description","content":"Red Hat Container Tools > 7. Udica - Custom SELinux Policies"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-03-20T07:03:32.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"redhat"}],["meta",{"property":"article:tag","content":"buildah"}],["meta",{"property":"article:tag","content":"podman"}],["meta",{"property":"article:tag","content":"skopeo"}],["meta",{"property":"article:tag","content":"sesearch"}],["meta",{"property":"article:tag","content":"semodule"}],["meta",{"property":"article:modified_time","content":"2024-03-20T07:03:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7. Udica - Custom SELinux Policies\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-20T07:03:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Conclusions","slug":"conclusions","link":"#conclusions","children":[]}],"git":{"createdTime":1703642364000,"updatedTime":1710918212000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":6}]},"readingTime":{"minutes":2.1,"words":630},"filePathRelative":"devops/red-hat-container-tools/07.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{te as comp,se as data};
