import{_ as C,m as I,a as A,s as g,c as i,d as b,b as t,F as v,h as T,t as a,r as y,o as l,p as j,l as k}from"./index-28460db4.js";import{c as w}from"./CartStore-65229a2b.js";import{c as V}from"./CartNavbar-ae520ae5.js";import{T as x,S as E}from"./Toast-0e28cdc5.js";import{L as B}from"./index-c262e860.js";const{VITE_APP_API:P,VITE_APP_PATH:D}={VITE_APP_API:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"deliciousfood",BASE_URL:"/MRT-Delicious/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},O={data(){return{location:"Checkouts",orderData:{},PaymentState:"",isLoading:!1}},computed:{...I(w,["form"])},components:{cartNavbar:V,Loading:B},methods:{...A(w,["getCart"]),Cart(){this.$router.push("/Cart")},getOrder(){this.isLoading=!0,g.get(`${P}/v2/api/${D}/order/${this.$route.params.orderId}`).then(s=>{this.getCart(),this.orderData=s.data.order,this.isLoading=!1}).catch(s=>{this.isLoading=!1,x.fire({title:`${s.response.data.message}`,icon:"error"})})},formatPrice(s){return s==null?"":s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},Payment(){g.post(`${P}/v2/api/${D}/pay/${this.orderData.id}`).then(s=>{this.PaymentState=!0,E.fire({icon:"success",title:`${s.data.message}`,confirmButtonText:"回首頁"}).then(n=>{(n.isConfirmed||n.isDismissed)&&this.$router.push("/")})}).catch(s=>{x.fire({title:`${s.response.data.message}`,icon:"error"})})}},mounted(){this.getOrder()}},c=s=>(j("data-v-a8eb1a75"),s=s(),k(),s),N={class:"content"},$={class:"container"},R={class:"row justify-content-center"},U={class:"col-lg-9 mt-4 bg-lightOrange"},F=c(()=>t("h2",{class:"text-center py-md-2 py-1 mb-0 fw-bold"},"確認訂單資料",-1)),H={class:"d-flex justify-content-center"},M={class:"table align-middle table-hover"},q=c(()=>t("thead",null,[t("tr",{class:"bg-warning"},[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th",{class:"text-center"},"數量")])],-1)),z={id:"Cart-img"},G=["src","alt"],J={class:"text-center"},K={class:"text-end fs-4"},Q={class:"container mb-4"},W={class:"row justify-content-center"},X={class:"col-lg-9 py-5 bg-lightOrange"},Y=c(()=>t("div",{class:"text-center py-md-2 py-1 mb-0 fw-bold"},null,-1)),Z={class:"row text-center align-items-center justify-content-center"},tt=c(()=>t("li",{class:"fs-5 col-4"},"姓名:",-1)),st={class:"col-4 ms-5 ms-lg-0"},et={class:"row text-center justify-content-center"},ot=c(()=>t("li",{class:"fs-5 col-4"},"電話:",-1)),nt={class:"col-4 ms-5 ms-lg-0"},at={class:"row text-center justify-content-center"},ct=c(()=>t("li",{class:"fs-5 col-4"},"信箱:",-1)),rt={class:"col-4 ms-5 ms-lg-0"},it={class:"row text-center justify-content-center"},lt=c(()=>t("li",{class:"fs-5 col-4"},"地址:",-1)),dt={class:"col-4 ms-5 ms-lg-0"},_t={class:"row text-center justify-content-center"},ut=c(()=>t("li",{class:"fs-5 col-4"},"留言:",-1)),ht={class:"col-4 ms-5 ms-lg-0",style:{"overflow-wrap":"break-word"}},mt={class:"d-flex justify-content-around mt-5"};function pt(s,n,ft,gt,e,r){var d,_,u,h,m,p,f;const L=y("Loading"),S=y("cartNavbar");return l(),i(v,null,[b(L,{active:e.isLoading,"onUpdate:active":n[0]||(n[0]=o=>e.isLoading=o),loader:"dots"},null,8,["active"]),t("div",N,[t("div",$,[b(S,{cartLocation:e.location},null,8,["cartLocation"]),t("div",R,[t("div",U,[F,t("div",H,[t("table",M,[q,t("tbody",null,[(l(!0),i(v,null,T((d=e.orderData)==null?void 0:d.products,o=>(l(),i("tr",{key:o.id},[t("td",null,[t("div",z,[t("img",{src:o.product.imageUrl,alt:o.product.title},null,8,G)])]),t("td",null,a(o.product.title),1),t("td",null,a(o.product.price),1),t("td",J,a(o.qty),1)]))),128))])])]),t("p",K,"總計:"+a(r.formatPrice((_=e.orderData)==null?void 0:_.total)),1)])])]),t("div",Q,[t("div",W,[t("div",X,[Y,t("ul",Z,[tt,t("li",st,a((u=e.orderData.user)==null?void 0:u.name),1)]),t("ul",et,[ot,t("li",nt,a((h=e.orderData.user)==null?void 0:h.tel),1)]),t("ul",at,[ct,t("li",rt,a((m=e.orderData.user)==null?void 0:m.email),1)]),t("ul",it,[lt,t("li",dt,a((p=e.orderData.user)==null?void 0:p.address),1)]),t("ul",_t,[ut,t("li",ht,a((f=e.orderData)==null?void 0:f.message),1)])])])]),t("div",mt,[t("button",{type:"button",class:"btn btn-warning text-white mb-5",onClick:n[1]||(n[1]=o=>r.Cart())}," 回購物車 "),t("button",{type:"button",class:"btn btn-warning text-white mb-5",onClick:n[2]||(n[2]=o=>r.Payment())}," 結帳 ")])])],64)}const Pt=C(O,[["render",pt],["__scopeId","data-v-a8eb1a75"]]);export{Pt as default};