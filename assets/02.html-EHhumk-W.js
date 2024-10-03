import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as e,t as u,b as t,n as h,g as b,w as n,d as s,e as c,r as o,o as v}from"./app-U_bew1in.js";const k={},g={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},_=e("nav",{class:"table-of-contents"},[e("ul")],-1),y=e("hr",null,null,-1),x=e("p",null,"As mentioned in the previous step, there are two main types of streams. To view them, run the following command:",-1),w=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[s("yum module list "),e("span",{class:"token operator"},"|"),s(),e("span",{class:"token function"},"grep"),s(" container-tools")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),S=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# container-tools      rhel8 [d]       common [d]                               Most recent (rolling) versions of podman, buildah, skopeo, runc, conmon, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and updated as frequently as every 12 weeks.         ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# container-tools      1.0             common [d]                               Stable versions of podman 1.0, buildah 1.5, skopeo 0.1, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and supported for 24 months.                                          ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# container-tools      2.0             common [d]                               Stable versions of podman 1.6, buildah 1.11, skopeo 0.1, runc, conmon, etc as well as dependencies such as container-selinux built and tested together, and supported as documented on the Application Stream lifecycle page.             ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# container-tools      3.0             common [d]                               Stable versions of podman 3.0, buildah 1.19, skopeo 1.2, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and supported as documented on the Application Stream lifecycle page.")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# container-tools      4.0             common [d]                               Stable versions of podman 4.0, buildah 1.24, skopeo 1.6, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built and tested together, and supported as documented on the Application Stream lifecycle page.")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=e("p",null,"Notice there are two types:",-1),N=e("ol",null,[e("li",null,[e("code",null,"container-tools:rhel8"),s(" - this is the fast moving stream, it's updated once every 12 weeks and generally fixes bugs by rolling to new versions")]),e("li",null,[e("code",null,"container-tools:1.0"),s(" - this was released with RHEL 8.0 and supported for 24 months, and receives bug fixes with back ports that keep the API and CLI interfaces stable")]),e("li",null,[e("code",null,"container-tools:2.0"),s(" - this was released with RHEL 8.2 and supported for 24 months, and receives bug fixes with back ports that keep the API and CLI interfaces stable")])],-1),R=e("p",null,"Now, let's pretend we are developer looking for access to the latest features in RHEL. Let's inspect the description of the fast moving stream. Notice that there are multiple versions of the rhel8 application stream. Every time a package is updated the entire group of packages is version controlled and tested together:",-1),C=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"yum module info container-tools:rhel8"),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),T=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 8050020220120091659")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ... 생략 ...")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 8060020220401155929")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ... 생략 ...")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 8060020220426163604")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ... 생략 ...")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 8060020220711143429")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ... 생략 ...")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 8060020221012172321")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ... 생략 ...")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 8060020221020065705")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ... 생략 ...")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 8070020220929222448")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ... 생략 ...")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 8070020221026183352")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ... 생략 ...")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 8070020221215192736")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ... 생략 ...")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 8070020230113130632")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Context          ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ... 생략 ...")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name             : container-tools")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Stream           : rhel8 [d][a]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Version          : 820190211172150")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Context          : 20125149")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Architecture     : x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Profiles         : common [d]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Default profiles : common")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Repo             : rhui-rhel-8-for-x86_64-appstream-rhui-rpms")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Summary          : Common tools and dependencies for container runtimes")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Description      : Contains SELinux policies, binaries and other dependencies for use with container runtimes")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Requires         : platform:[el8]")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Artifacts        : buildah-0:1.5-3.gite94b4f9.module+el8+2769+577ad176.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : container-selinux-2:2.75-1.git99e2cfd.module+el8+2769+577ad176.noarch")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : containernetworking-plugins-0:0.7.4-3.git9ebe139.module+el8+2769+577ad176.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : containers-common-1:0.1.32-3.git1715c90.module+el8+2769+577ad176.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : fuse-overlayfs-0:0.3-2.module+el8+2769+577ad176.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : oci-systemd-hook-1:0.1.15-2.git2d0b8a3.module+el8+2769+577ad176.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : oci-umount-2:2.3.4-2.git87f9237.module+el8+2769+577ad176.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : podman-0:1.0.0-2.git921f98f.module+el8+2785+ff8a053f.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : podman-docker-0:1.0.0-2.git921f98f.module+el8+2785+ff8a053f.noarch")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : runc-0:1.0.0-54.rc5.dev.git2abd837.module+el8+2769+577ad176.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : skopeo-1:0.1.32-3.git1715c90.module+el8+2769+577ad176.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                  : slirp4netns-0:0.1-2.dev.gitc4e1bc5.module+el8+2769+577ad176.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled, [a]ctive")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),U=c(`<p>Now, let&#39;s install the fast moving container-tools:rhel8 Application Stream like this:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">yum module <span class="token function">install</span> <span class="token parameter variable">-y</span> container-tools:rhel8</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>We should have a whole set of tools installed:</p>`,3),V=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[s("yum module list "),e("span",{class:"token parameter variable"},"--installed")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# Last metadata expiration check: 0:31:50 ago on Tue 08 Aug 2023 12:37:52 AM UTC.")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Red Hat Enterprise Linux 8 for x86_64 - AppStream from RHUI (RPMs)")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Name            Stream       Profiles Summary                                                                       ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# container-tools rhel8 [d][e] common [ Most recent (rolling) versions of podman, buildah, skopeo, runc, conmon, runc, conmon, CRIU, Udica, etc as well as dependencies such as container-selinux built ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"#                              d] [i]   and tested together, and updated as frequently as every 12 weeks.")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),P=e("p",null,"Look at the packages that were installed as part of this Application Stream:",-1),L=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[s("yum module repoquery "),e("span",{class:"token parameter variable"},"--installed"),s(" container-tools")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),H=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{class:"token comment"},"# Last metadata expiration check: 0:33:21 ago on Tue 08 Aug 2023 12:37:52 AM UTC.")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# aardvark-dns-2:1.1.0-5.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# buildah-1:1.27.3-1.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# cockpit-podman-53-1.module+el8.7.0+17824+66a0202b.noarch")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# conmon-3:2.1.4-1.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# container-selinux-2:2.189.0-1.module+el8.7.0+17824+66a0202b.noarch")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# containernetworking-plugins-1:1.1.1-3.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# containers-common-2:1-46.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# criu-3.15-3.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# crun-1.5-1.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# fuse-overlayfs-1.9-1.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# libslirp-4.4.0-1.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# netavark-2:1.1.0-7.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# podman-3:4.2.0-8.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# podman-catatonit-3:4.2.0-8.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# python3-podman-4.2.1-1.module+el8.7.0+17824+66a0202b.noarch")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# runc-1:1.1.4-1.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# skopeo-2:1.9.4-0.1.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# slirp4netns-1.2.0-2.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# toolbox-0.0.99.3-0.6.module+el8.7.0+17824+66a0202b.x86_64")]),s(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# udica-0.2.6-10.module+el8.7.0+17824+66a0202b.noarch")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=c(`<p>Look at the version of Podman that was installed. It should be fairly new, probably within a few months of what&#39;s latest upstream:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">podman</span> <span class="token parameter variable">-v</span></span>
<span class="line"><span class="token comment"># podman version 4.2.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Let&#39;s clean up the environment, and start from scratch:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">yum module remove <span class="token parameter variable">-y</span> container-tools</span>
<span class="line">yum module reset <span class="token parameter variable">-y</span> container-tools</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>OK, now let&#39;s pretend we are a systems administrator or SRE that wants a set of stable tools which are supported for 24 months. First, inspect the stable stream that was released in RHEL 8.0. Notice that there are several versions of this Application Stream. Every time a package is updated a new stream version is generated to snapshot the exact versions of each package together as a stream:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">yum module info container-tools:1.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now, install it:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">yum module <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">--allowerasing</span> container-tools:1.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Check the version of Podman again:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">podman</span> <span class="token parameter variable">-v</span></span>
<span class="line"><span class="token comment"># podman version 1.0.2-dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that it&#39;s an older version of Podman. This version only gets back ports and will never move beyond Podman 1.0.2. Note, there is no connection between the container-tools version number and the Podman version number. It is purely coincidence that these numbers coincide. The container-tools version number is an arbitrary number representing all of the tools tested together in the Application Stream. This includes, Podman, Buildah, Skopeo, CRIU, etc.</p><p>Now, let&#39;s go back to the latest version of the container-tools for the rest of this module:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">yum module remove <span class="token parameter variable">-y</span> container-tools</span>
<span class="line">yum module reset <span class="token parameter variable">-y</span> container-tools</span>
<span class="line">yum module <span class="token function">install</span> <span class="token parameter variable">-y</span> container-tools:rhel8</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice how easy it was to move between the stable streams and the fast moving stream. This is the power of modularity. Now, let&#39;s move on to using the actual tools.</p><hr>`,15);function E(r,F){const m=o("VPCard"),i=o("Tabs");return v(),p("div",null,[e("h1",g,[e("a",f,[e("span",null,u(r.$frontmatter.title)+" 관련",1)])]),_,y,t(m,h(b({title:"Red Hat Container Tools",desc:"Intro",link:"https://developers.redhat.com/courses/devops-red-hat-container-tools",logo:"https://developers.redhat.com/themes/custom/rhdp2/images/branding/2023_RHDLogo_black_text.svg",background:"rgba(255,255,255,0.2)"})),null,16),x,t(i,{id:"11",data:[{id:"sh"},{id:"result"}],active:0},{title0:n(({value:a,isActive:l})=>[s("sh")]),title1:n(({value:a,isActive:l})=>[s("result")]),tab0:n(({value:a,isActive:l})=>[w]),tab1:n(({value:a,isActive:l})=>[S]),_:1}),A,N,R,t(i,{id:"42",data:[{id:"sh"},{id:"result"}],active:0},{title0:n(({value:a,isActive:l})=>[s("sh")]),title1:n(({value:a,isActive:l})=>[s("result")]),tab0:n(({value:a,isActive:l})=>[C]),tab1:n(({value:a,isActive:l})=>[T]),_:1}),U,t(i,{id:"57",data:[{id:"sh"},{id:"result"}],active:0},{title0:n(({value:a,isActive:l})=>[s("sh")]),title1:n(({value:a,isActive:l})=>[s("result")]),tab0:n(({value:a,isActive:l})=>[V]),tab1:n(({value:a,isActive:l})=>[j]),_:1}),P,t(i,{id:"68",data:[{id:"sh"},{id:"result"}],active:0},{title0:n(({value:a,isActive:l})=>[s("sh")]),title1:n(({value:a,isActive:l})=>[s("result")]),tab0:n(({value:a,isActive:l})=>[L]),tab1:n(({value:a,isActive:l})=>[H]),_:1}),I])}const q=d(k,[["render",E],["__file","02.html.vue"]]),B=JSON.parse('{"path":"/devops/red-hat-container-tools/02.html","title":"2. Using the Fast and Stable Streams","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"2. Using the Fast and Stable Streams","description":"Red Hat Container Tools > 2. Using the Fast and Stable Streams","category":["RedHat"],"tag":["crashcourse","redhat","buildah","podman","skopeo","sesearch","semodule"],"head":[[{"meta":null},{"property":"og:title","content":"Red Hat Container Tools > 2. Using the Fast and Stable Streams"},{"property":"og:description","content":"2. Using the Fast and Stable Streams"},{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/devops/red-hat-container-tools/02.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/crashcourse/crashcourse/devops/red-hat-container-tools/02.html"}],["meta",{"property":"og:site_name","content":"🥁Crashcourse"}],["meta",{"property":"og:title","content":"2. Using the Fast and Stable Streams"}],["meta",{"property":"og:description","content":"Red Hat Container Tools > 2. Using the Fast and Stable Streams"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-03T01:20:13.000Z"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"redhat"}],["meta",{"property":"article:tag","content":"buildah"}],["meta",{"property":"article:tag","content":"podman"}],["meta",{"property":"article:tag","content":"skopeo"}],["meta",{"property":"article:tag","content":"sesearch"}],["meta",{"property":"article:tag","content":"semodule"}],["meta",{"property":"article:modified_time","content":"2024-10-03T01:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2. Using the Fast and Stable Streams\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-03T01:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1703642364000,"updatedTime":1727918413000,"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":7}]},"readingTime":{"minutes":4.55,"words":1366},"filePathRelative":"devops/red-hat-container-tools/02.md","localizedDate":"2023년 12월 27일","excerpt":"\\n\\n<hr>\\n"}');export{q as comp,B as data};
