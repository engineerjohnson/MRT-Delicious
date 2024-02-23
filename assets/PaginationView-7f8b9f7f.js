import{s as p,I as _,_ as h,o as a,c as o,g,b as s,F as d,h as u,n as v,t as b,f as r}from"./index-28460db4.js";import{T as m}from"./Toast-0e28cdc5.js";function H(){const l=_(),e=document.cookie.replace(/(?:(?:^|.*;\s*)deliciousfood\s*=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=e;function c(){p.post("https://vue3-course-api.hexschool.io/v2/api/user/check").then(()=>{}).catch(i=>{m.fire({title:`${i.response.data.message}`,icon:"error"}),l.push("/login")})}return{checkLogin:c}}const w={},f=g('<p class="placeholder-glow" data-v-32523cb7><span class="placeholder col-12" data-v-32523cb7></span></p><p class="placeholder-glow" data-v-32523cb7><span class="placeholder col-4 me-2" data-v-32523cb7></span><span class="placeholder col-7" data-v-32523cb7></span></p><p class="placeholder-glow" data-v-32523cb7><span class="placeholder col-3 me-2" data-v-32523cb7></span><span class="placeholder col-6 me-2" data-v-32523cb7></span><span class="placeholder col-2" data-v-32523cb7></span></p><p class="placeholder-glow" data-v-32523cb7><span class="placeholder col-3 me-2" data-v-32523cb7></span><span class="placeholder col-2 me-2" data-v-32523cb7></span><span class="placeholder col-2 me-2" data-v-32523cb7></span><span class="placeholder col-3" data-v-32523cb7></span></p><a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-4" aria-hidden="true" data-v-32523cb7></a>',5),k=[f];function x(l,e){return a(),o("div",null,k)}const J=h(w,[["render",x],["__scopeId","data-v-32523cb7"]]),y={key:0,"aria-label":"Page navigation example"},$={class:"pagination justify-content-center mt-4"},L={class:"page-item"},C={class:"text-info",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 512 512",style:{fill:"#0d6efd"}},z=s("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"},null,-1),B=[z],V={class:"page-item"},P={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"10",viewBox:"0 0 320 512",style:{fill:"#0d6efd"}},M=s("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"},null,-1),S=[M],F={key:0,class:"page-item"},N=["onClick","disabled"],j={class:"page-item"},I={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"10",viewBox:"0 0 320 512",style:{fill:"#0d6efd"}},T=s("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"},null,-1),U=[T],A={class:"page-item"},D={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 512 512",style:{fill:"#0d6efd"}},E=s("path",{d:"M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"},null,-1),O=[E],K={__name:"PaginationView",props:{onSubmit:Function,pagination:Object},setup(l){const e=l;function c(i){e.onSubmit(i)}return(i,n)=>e.pagination?(a(),o("nav",y,[s("ul",$,[s("li",L,[s("button",{type:"button",class:"page-link",href:"#",onClick:n[0]||(n[0]=t=>c(1))},[(a(),o("svg",C,B))])]),s("li",V,[s("button",{type:"button",class:"page-link",href:"#",onClick:n[1]||(n[1]=t=>c(e.pagination.current_page-1))},[(a(),o("svg",P,S))])]),(a(!0),o(d,null,u(e.pagination.total_pages,t=>(a(),o(d,{key:t},[t>e.pagination.current_page-3&&t<e.pagination.current_page+3?(a(),o("li",F,[s("button",{class:v(["page-link",{disabled:t==e.pagination.current_page}]),onClick:R=>c(t),href:"#",disabled:t==e.pagination.current_page},b(t),11,N)])):r("",!0)],64))),128)),s("li",j,[s("button",{type:"button",class:"page-link",href:"#",onClick:n[2]||(n[2]=t=>c(e.pagination.current_page+1))},[(a(),o("svg",I,U))])]),s("li",A,[s("button",{type:"button",class:"page-link",href:"#",onClick:n[3]||(n[3]=t=>c(e.pagination.total_pages))},[(a(),o("svg",D,O))])])])])):r("",!0)}};export{J as L,H as U,K as _};