import d from"./Shield-Cfqq1klw.js";import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,o as t,c as r,F as m,O as _,P as f}from"./app-U_bew1in.js";const g={name:"ShieldsGroup",components:{Shield:d},data(){return{items:[]}},props:{logos:{type:String,required:!0}},methods:{async processData(o=""){if(o==""){console.warn("no logo value found ...");return}const n=o.split(",")??[],s=(await(await fetch("https://chanhi2000.github.io/json/shields.json")).json()??[]).filter(e=>n.includes(e.logo)).map(e=>e.logo)??[];this.items=s}},mounted(){this.processData(this.logos)}},S={align:"center"};function k(o,n,i,l,s,e){const a=h("Shield");return t(),r("p",S,[(t(!0),r(m,null,_(s.items,(c,p)=>(t(),f(a,{key:p,logo:c},null,8,["logo"]))),128))])}const x=u(g,[["render",k],["__file","ShieldsGroup.vue"]]);export{x as default};
