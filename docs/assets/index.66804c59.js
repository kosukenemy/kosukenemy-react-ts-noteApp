import{j as T,s as c,a as R,u as I,r as a,L as $,b as G,c as J,R as K,d as F,e as W,f as X,B as Y}from"./vendor.abb2ffb2.js";const Z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};Z();const e=T.exports.jsx,h=T.exports.jsxs,N=T.exports.Fragment,Q=()=>e(_,{children:h(ee,{children:[e("div",{children:"\u{1F5D2}"}),e("div",{children:"memo"})]})}),_=c.header`
  width: 100%;
  margin: 10px auto 10px;
  font-size: 20px;
`,ee=c.h1`
  margin: 0;
  color: #707070;
  display: flex;
  font-size: 30px;

  img {
    width: 100%;
  }
`,te=[{title:"\u30E1\u30E2\u4E00\u89A7"},{title:"\u65B0\u898F\u4F5C\u6210"}],y=({text:r,onClick:n,background:s,color:u})=>e(re,{theme:{background:s,color:u},onClick:n,children:r}),re=c.button`
  width: 89px;
  height: 34px;
  border-radius: 3px;
  background: ${({theme:r})=>r.background};
  border: none;
  outline: none;
  color: ${({theme:r})=>r.color};
  font-weight: bold;
  letter-spacing: 0.03em;
  margin: 3px;
  cursor: pointer;
`;var ne="/assets/loader.fba18c43.gif";const oe=()=>e(se,{children:e("img",{src:ne,alt:"loader"})}),se=c.div`
  display: block;
  margin: 0 auto;

  img {
    display: block;
    margin: 0 auto;
  }
`,A="246513f2-92d1-11ec-b909-0242ac120002",C="https://script.google.com/macros/s/AKfycbzariRxpsboPYGlVzlbfAnhzV2zIz3Pd7aqeXL5p0g4TnNJ0wAB5SJq8-VCzR76ZJPUow/exec",B=R.create({headers:{"Content-type":"application/x-www-form-urlencoded"}});B.interceptors.response.use(r=>r.data.error?Promise.reject(r.data.error):Promise.resolve(r),r=>Promise.reject(r));const ae={url:`${C}`,method:"GET"},z=async()=>{try{return(await R(ae)).data}catch(r){return r}},ce=async r=>B.post(C,{method:"POST",authToken:A,params:r}).then(n=>n).catch(n=>n),ie=async r=>B.post(C,{method:"PUT",authToken:A,params:r}).then(n=>n).catch(n=>n),ue=async r=>B.post(C,{method:"DELETE",authToken:A,params:r}).then(n=>n).catch(n=>n),v=(r,n,s)=>{const u=I(),[t,o]=a.exports.useState([]),[d,m]=a.exports.useState(!1),[g,x]=a.exports.useState(!1),[p,f]=a.exports.useState(!1);switch(r){case"GET":a.exports.useEffect(()=>{(async()=>{m(!d),o(await z())})().then(()=>{m(d),f(!p)}).catch(l=>{x(l)})},[]);break;case"POST":a.exports.useEffect(()=>{(async()=>{if(typeof n=="undefined")return!1;const l=await ce(n);return l.status===200?f(!p):x(!g),l})()},[n]);break;case"PUT":a.exports.useEffect(()=>{(async()=>{if(typeof n=="undefined")return!1;const l=await ie(n);return l.status===200?(async()=>{f(!p),o(await z())})().then(()=>{f(p),console.log("\u5B8C\u4E86\uFF01")}):x(!g),l})()},[n]);break;case"DELETE":a.exports.useEffect(()=>{(async()=>s===void 0?!1:((await ue(s)).status===200?f(!p):x(!g),u("/",{replace:!0})))()},[s]);break}return{data:t,isLoading:d,isError:g,isSuccess:p}},le=()=>{const{data:r,isLoading:n,isError:s}=v("GET");return h(de,{children:[s&&e("div",{children:"error"}),n&&e(oe,{}),!n&&(r==null?void 0:r.length)===0&&"\u30E1\u30E2\u306F\u3042\u308A\u307E\u305B\u3093\u3002",r==null?void 0:r.map(({id:u,title:t},o)=>e($,{style:{textDecoration:"none"},to:`/${u}`,state:{items:r},children:h(pe,{children:[e(fe,{children:t}),e(y,{text:"\u8A73\u7D30",background:"#5c9ca5",color:"#fff"})]})},o))]})},de=c.ul`
  margin: 0 auto;
  padding: 0;
  list-style:none;
  padding-left:1.5em;

`,pe=c.li`
  border-bottom:dotted 1px #555;
  margin:0.5em 0;
  padding:0.5em 0 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-of-type(1){
    margin-top:0;
  }
  &:nth-last-of-type(1){
    margin-bottom:0;
  }
`,fe=c.h3`
  font-size: 18px;
  font-weight: bold;
  color: #707070;
  text-decoration: none;
`,he=()=>e(xe,{children:e(le,{})}),xe=c.div`
  width: 860px;
`,w=({type:r,name:n,title:s,displayName:u,value:t})=>h(ge,{children:[e(be,{htmlFor:n,children:u}),r==="text"&&e(me,{id:n,type:r,ref:s,defaultValue:t,required:!0}),r==="textarea"&&e(ye,{name:n,id:n,ref:s,defaultValue:t,required:!0})]}),ge=c.fieldset`
  width: 460px;
  border: none;
  padding: 0;
`,me=c.input`
  width: 100%; 
  padding: 10px 15px; 
  font-size: 16px;
  border-radius: 3px; 
  border: 1px solid #ddd; 
  box-sizing: border-box;
`,ye=c.textarea`
  width: 100%; 
  min-height: 400px;
  padding: 10px 15px; 
  font-size: 16px;
  border-radius: 3px; 
  border: 1px solid #ddd; 
  box-sizing: border-box;
`,be=c.label`
  font-size: 16px;
  font-weight: bold;
  color: #707070;
  display: block;
  margin: 10px auto 5px;
`;function Ee(r){let n=1e3;return r&&(n=r),new Date().getTime().toString(16)+Math.floor(n*Math.random()).toString(16)}const Se=()=>{const r=Ee(),n=a.exports.useRef(null),s=a.exports.useRef(null),[u,t]=a.exports.useState(),{data:o,isSuccess:d,isError:m}=v("POST",u),g=async x=>{var f,l;x.preventDefault();const p={id:r,title:(f=n.current)==null?void 0:f.value,content:(l=s.current)==null?void 0:l.value};return t(p),o};return h("form",{onSubmit:x=>g(x),children:[m&&e("div",{children:"error!: \u6295\u7A3F\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}),d&&e("div",{children:"success!: \u6295\u7A3F\u3057\u307E\u3057\u305F"}),e(w,{type:"text",name:"title",title:n,displayName:"\u30BF\u30A4\u30C8\u30EB"}),e(w,{type:"textarea",name:"content",title:s,displayName:"\u672C\u6587"}),e(y,{text:"\u65B0\u898F\u4F5C\u6210",background:"#5c9ca5",color:"#fff"})]})},ve=()=>{let{id:r}=G();const n=I(),s=J(),{items:u}=s.state,[t,o]=a.exports.useState(),[d,m]=a.exports.useState(!1),[g,x]=a.exports.useState();let{data:p,isSuccess:f,isError:l,isLoading:j}=v("PUT",g);const[O,M]=a.exports.useState(),U=v("DELETE",void 0,O),E=a.exports.useRef(null),S=a.exports.useRef(null),L=i=>(i.preventDefault(),m(!d)),V=async i=>{var k,D;i.preventDefault();const b={id:t==null?void 0:t.id,title:(k=E==null?void 0:E.current)==null?void 0:k.value,content:(D=S==null?void 0:S.current)==null?void 0:D.value};return x(b),p},q=async i=>(M(i),U),H=i=>(i.preventDefault(),n("/",{replace:!0}));return a.exports.useEffect(()=>{let i=new AbortController;return(async()=>o(u.find(b=>b.id===r)))(),f&&(async()=>(m(!d),o(p.find(b=>b.id===r)),console.log(p,"data"),console.log(f,l,j)))(),()=>{i.abort()}},[p]),h("div",{children:[l&&e("div",{children:"error!: \u66F4\u65B0\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}),f&&e("div",{children:"success!: \u6295\u7A3F\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F"}),d?h("form",{onSubmit:i=>V(i),children:[e(w,{type:"text",name:"title",title:E,value:t==null?void 0:t.title,displayName:"\u30BF\u30A4\u30C8\u30EB"}),e(w,{type:"textarea",name:"title",title:S,value:t==null?void 0:t.content,displayName:"\u672C\u6587"}),e(y,{text:"\u66F4\u65B0",background:"#5c9ca5",color:"#fff"}),e(y,{text:"\u623B\u308B",background:"#E2E2E2",color:"#C96A8B",onClick:i=>L(i)})]}):h("div",{children:[h(we,{children:[e(P,{children:"\u30BF\u30A4\u30C8\u30EB"}),e(Ce,{children:t==null?void 0:t.title}),e(P,{children:"\u672C\u6587"}),e(Be,{children:t==null?void 0:t.content})]}),e(y,{text:"\u7DE8\u96C6",background:"#5c9ca5",color:"#fff",onClick:i=>L(i)}),e(y,{text:"\u524A\u9664",background:"#C96A8B",color:"#E2E2E2",onClick:()=>q(t==null?void 0:t.id)}),e(y,{text:"\u623B\u308B",background:"#E2E2E2",color:"#C96A8B",onClick:i=>H(i)})]})]})},we=c.ul`
  margin: 0 auto 10px;
  padding: 0;
`,P=c.p`
  font-size: 16px;
  font-weight: bold;
  color: #707070;
  display: block;
  margin: 10px auto 5px;
`,Ce=c.li`
  list-style: none;
  font-size: 18px;
`,Be=c.li`
  list-style: none;
  white-space: pre;
  font-size: 18px;
`,Fe=()=>e("div",{children:e(N,{children:h(K,{children:[e(F,{index:!0,element:e(he,{})}),e(F,{path:"/new",element:e(Se,{})}),e(F,{path:"/:id",element:e(ve,{})})]})})}),Te=()=>{let[r,n]=a.exports.useState(0);const s=I(),u=t=>{if(n(t),t===0)return s("/");if(t===1)return s("/new")};return h(N,{children:[e(Ie,{children:te.map((t,o)=>e(Ae,{"data-tab":o===r?"true":"false",onClick:()=>u(o),className:o===r?"isValid":"",children:t.title},t.title))}),e(Fe,{})]})},Ie=c.div`
  display: flex;
  margin: 0 auto 20px;
  border-bottom: solid 1px #cccccc;
`,Ae=c.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: #707070;
  padding: 0 2px;
  letter-spacing: 0.03em;

  &.isValid {
    border-bottom: solid 3px #5C9CA5;
  }
`;function Le(){return e("div",{className:"App",children:h(ke,{children:[e(Q,{}),e(Te,{})]})})}const ke=c.div`
  width: 860px;
  margin: 0 auto;
`;W.render(e(X.StrictMode,{children:e(Y,{children:e(Le,{})})}),document.getElementById("root"));
