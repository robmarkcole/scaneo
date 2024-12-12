import{a as i,t as m,c as G}from"../chunks/disclose-version.hHXjza9X.js";import{p as J,e as h,u as W,f as H,g as e,b as u,a as Q,s as a,c as o,r as l,d as se,t as T}from"../chunks/runtime.B40kIuYm.js";import{s as Y}from"../chunks/render.CM3wPBfR.js";import{i as M}from"../chunks/if.BU02RLSO.js";import{r as R,s as ie,a as ne}from"../chunks/attributes.faLUl4vZ.js";import{s as B}from"../chunks/class.ysGxxhcu.js";import{d as X,e as de}from"../chunks/events.DTvxUH_b.js";import{b as U}from"../chunks/input.CHcNizJA.js";import{p as N}from"../chunks/proxy.B3-__M_J.js";import{c as g}from"../chunks/campaigns.svelte.DnA75T3i.js";import{p as ce}from"../chunks/plugins.svelte.DxBglWfE.js";import{e as Z,i as ee}from"../chunks/each.DvJ5DvNT.js";import{b as pe,P as ue,D as me}from"../chunks/DeleteOutline.CIoqQZFN.js";import{p as te}from"../chunks/props.BJTpJmXG.js";import{s as be,M as ve}from"../chunks/ModelSelector.BwSXSnKI.js";import{b as fe}from"../chunks/fetcher.CDkwpESE.js";var _e=m('<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="form-control"><label class="label font-medium mb-1">S3 URL</label> <input type="text" class="input input-bordered w-full" placeholder="Enter S3 URL" required></div> <div class="form-control"><label class="label font-medium mb-1">Bucket</label> <input type="text" class="input input-bordered w-full" placeholder="Enter bucket name" required></div> <div class="form-control"><label class="label font-medium mb-1">Region</label> <input type="text" class="input input-bordered w-full" placeholder="Enter region" required></div> <div class="form-control"><label class="label font-medium mb-1">Access Key</label> <input type="text" class="input input-bordered w-full" placeholder="Enter access key" required></div> <div class="form-control"><label class="label font-medium mb-1">Secret Key</label> <input type="password" class="input input-bordered w-full" placeholder="Enter secret key" required></div></div>');function ge(x){var s=_e();i(x,s)}var xe=m('<div class="alert"><p>Loading datasets...</p></div>'),ye=m('<div class="alert"><p>No datasets found</p></div>'),he=m("<option> </option>"),we=m('<div class="form-control"><label class="label font-medium mb-1">Search EOTDL Dataset</label> <input type="text" class="input input-bordered w-full mb-2" placeholder="Search datasets..."> <label class="label font-medium mb-1">Select EOTDL Dataset</label> <select class="select select-bordered w-full"></select></div>');function De(x,s){J(s,!0);let n=te(s,"eotdlDatasetId",15,""),d=h(N([])),b=h(!1),p=h(""),k=se(()=>e(d).filter(c=>c.name.toLowerCase().includes(e(p).toLowerCase())));W(async()=>{u(b,!0);const c=await fetch("https://api.eotdl.com/datasets");if(!c.ok)return alert("Failed to fetch EOTDL datasets");u(d,N(await c.json())),u(b,!1)});var v=G(),L=H(v);M(L,()=>e(b),c=>{var C=xe();i(c,C)},c=>{var C=G(),I=H(C);M(I,()=>e(d).length==0,E=>{var S=ye();i(E,S)},E=>{var S=we(),f=a(o(S),2);R(f);var q=a(f,4);Z(q,21,()=>e(k),ee,($,w)=>{var _=he(),D={},z=o(_);l(_),T(()=>{D!==(D=e(w).id)&&(_.value=(_.__value=e(w).id)==null?"":e(w).id),Y(z,e(w).name)}),i($,_)}),l(q),l(S),U(f,()=>e(p),$=>u(p,$)),pe(q,n),i(E,S)},!0),i(c,C)}),i(x,v),Q()}const ke=async(x,s,n,d)=>{x.preventDefault(),!(e(s)==""||n().map(b=>b.name).includes(e(s)))&&n().push({name:e(s),color:e(d)})};var Le=(x,s,n)=>s(s().filter(d=>d.name!==e(n).name)),Ce=m('<li class="flex items-center gap-2"><button class="btn btn-ghost btn-xs"><!></button> <div class="w-4 h-4 rounded"></div> </li>'),Ee=m('<ul class="mt-2"></ul>'),Se=m(`<div class="form-control"><label class="label font-medium">Create labels (optional)</label> <p class="text-xs text-gray-600 italic mb-2">You can create labels later in the labelling interface. However, you will
    need to create labels in order to use a Model for assisted labelling (which
    can as well be defined later).</p> <div class="flex"><input type="text" placeholder="new label" class="rounded-r-none input input-sm border border-1 border-gray-300"> <button type="submit" class="rounded-none btn btn-primary btn-sm"><!></button> <div class="box-border flex w-24 rounded-tr-lg rounded-br-lg"><input class="box-border h-full p-0 m-0 rounded-tr-lg rounded-br-lg" type="color"></div></div> <!></div>`);function qe(x,s){J(s,!0);let n=te(s,"labels",31,()=>N([])),d=h("#000000"),b=h(""),p=!1;var k=Se(),v=a(o(k),4),L=o(v);R(L);var c=a(L,2);c.__click=[ke,b,n,d];var C=o(c);ue(C,{size:"15"}),l(c);var I=a(c,2),E=o(I);R(E),l(I),l(v);var S=a(v,2);M(S,()=>n().length>0,f=>{var q=Ee();Z(q,21,n,ee,($,w)=>{var _=Ce(),D=o(_);D.__click=[Le,n,w];var z=o(D);me(z,{size:"15"}),l(D);var F=a(D,2),A=a(F);l(_),T(()=>{be(F,"background-color",e(w).color),Y(A,` ${e(w).name??""}`)}),i($,_)}),l(q),i(f,q)}),l(k),T(()=>c.disabled=p),U(L,()=>e(b),f=>u(b,f)),U(E,()=>e(d),f=>u(d,f)),i(x,k),Q()}X(["click"]);const Oe=()=>{g.cancel()};var $e=(x,s)=>u(s,0),Te=()=>{console.log("Coming soon")},Me=(x,s)=>u(s,2),Ie=m('<button type="button">EOTDL</button>'),Pe=m('<div class="form-control"><label class="mb-1 font-medium label">Local Folder Path</label> <input type="text" class="w-full input input-bordered" placeholder="Enter folder path" required></div>'),Ne=m('<div class="flex flex-row justify-between alert"><p>Campaign created successfully !</p> <a class="btn btn-primary">Label</a></div>'),je=m('<div class="flex flex-col gap-2"><div class="flex items-center justify-between"><span class="text-sm"> </span> <button type="button" class="btn btn-sm btn-error">Cancel</button></div> <progress class="w-full progress progress-primary" max="100"></progress></div>'),Re=m('<div><button class="btn btn-primary md:w-auto md:self-end" type="submit"> </button></div>'),Ue=m('<div class="w-full max-w-2xl p-6 mx-auto"><h1 class="mb-6 text-3xl font-bold">Create a new labelling campaign</h1> <form class="flex flex-col gap-4"><div class="form-control"><label for="campaign-name" class="mb-1 font-medium label">Campaign Name</label> <input id="campaign-name" required type="text" class="w-full input input-bordered" placeholder="Enter campaign name"></div> <div class="form-control"><label for="campaign-description" class="mb-1 font-medium label">Campaign Description</label> <input id="campaign-description" required type="text" class="w-full input input-bordered" placeholder="Enter campaign description"></div> <div class="form-control"><label class="mb-2 font-medium label">Select Storage</label> <div class="flex flex-wrap gap-2"><button type="button">Local</button> <button type="button" data-tip="Coming soon">Cloud (S3)</button> <!></div></div> <!> <!> <!> <!></form></div>');function at(x,s){J(s,!0);let n=h(""),d=h(""),b=h(""),p=h(0),k=h(""),v=h(N([])),L=h(N({}));const c=async r=>{if(r.preventDefault(),e(p)==2){if(!e(k))return alert("EOTDL dataset is required");try{g.createEOTDL(e(n),e(d),e(k),e(v),e(L))}catch(t){alert(t)}}else{if(e(p)==1)return alert("S3 not implemented yet");if(e(n)!==""&&e(d)!=="")try{g.create(e(n),e(d),e(b),e(v),e(L))}catch(t){alert(t)}}};W(()=>{g.reset()});var C=Ue(),I=a(o(C),2),E=o(I),S=a(o(E),2);R(S),l(E);var f=a(E,2),q=a(o(f),2);R(q),l(f);var $=a(f,2),w=a(o($),2),_=o(w);_.__click=[$e,p];var D=a(_,2);D.__click=[Te];var z=a(D,2);M(z,()=>{var r;return(r=ce.data.find(t=>t.name=="eotdl"))==null?void 0:r.enabled},r=>{var t=Ie();t.__click=[Me,p],T(()=>B(t,`btn btn-outline ${(e(p)===2?"btn-primary":"")??""}`)),i(r,t)}),l(w),l($);var F=a($,2);M(F,()=>e(p)==0,r=>{var t=Pe(),P=a(o(t),2);R(P),l(t),U(P,()=>e(b),y=>u(b,y)),i(r,t)},r=>{var t=G(),P=H(t);M(P,()=>e(p)==1,y=>{ge(y)},y=>{De(y,{get eotdlDatasetId(){return e(k)},set eotdlDatasetId(O){u(k,N(O))}})},!0),i(r,t)});var A=a(F,2);qe(A,{get labels(){return e(v)},set labels(r){u(v,N(r))}});var V=a(A,2);M(V,()=>e(v).length>0,r=>{ve(r,{get labels(){return e(v)},get labelMappings(){return e(L)},set labelMappings(t){u(L,N(t))}})});var ae=a(V,2);M(ae,()=>g.completed,r=>{var t=Ne(),P=a(o(t),2);l(t),T(()=>{var y;return ne(P,"href",`${fe.url}/campaigns/label?id=${(y=g.data[0])==null?void 0:y.id}`)}),i(r,t)},r=>{var t=G(),P=H(t);M(P,()=>g.creating,y=>{var O=je(),j=o(O),K=o(j),le=o(K);l(K);var re=a(K,2);re.__click=[Oe],l(j);var oe=a(j,2);T(()=>ie(oe,isNaN(g.progress)?0:g.progress*100)),l(O),T(()=>Y(le,g.message)),i(y,O)},y=>{var O=Re(),j=o(O),K=o(j);l(j),l(O),T(()=>{B(O,`flex w-full gap-4 mt-4 md:w-auto md:self-end ${(g.creating?"hidden":"")??""}`),j.disabled=g.creating,Y(K,g.creating?"Creating...":"Create Campaign")}),i(y,O)},!0),i(r,t)}),l(I),l(C),T(()=>{B(_,`btn btn-outline ${(e(p)===0?"btn-primary":"")??""}`),B(D,`btn btn-outline tooltip ${(e(p)===1?"btn-primary":"")??""}`)}),de("submit",I,c),U(S,()=>e(n),r=>u(n,r)),U(q,()=>e(d),r=>u(d,r)),i(x,C),Q()}X(["click"]);export{at as component};
