import{a as l,t as c,c as Q}from"../chunks/disclose-version.BfD_MglS.js";import{h as z,p as R,e as U,a6 as B,t as y,s as p,f as o,r as i,W as a,a7 as C,T as b}from"../chunks/runtime.B004VIJJ.js";import{s as x}from"../chunks/render.1O50ArsI.js";import{i as u}from"../chunks/if.GpQQpzwI.js";import{e as V,i as X}from"../chunks/each.BLrIcC-g.js";import{d as Y}from"../chunks/events.D0jbzQKS.js";import{p as F}from"../chunks/proxy.DjSrSXEw.js";import{p as f}from"../chunks/plugins.svelte.Dr_EqWe7.js";function T(t,v){var e=t.__className,s=Z(v);z&&t.className===s?t.__className=s:(e!==s||z&&t.className!==s)&&(v==null?t.removeAttribute("class"):t.className=s,t.__className=s)}function Z(t){return t??""}var aa=c("<div>loading...</div>"),sa=c("<div> </div>"),ea=(t,v,e)=>v(a(e).name),ta=c('<span class="loading loading-spinner"></span>'),ra=c("<button><!> </button>"),na=(t,v,e)=>v(a(e).name),ia=c('<span class="loading loading-spinner"></span>'),la=c("<button><!> </button>"),oa=c('<div class="card bg-base-100 shadow-xl border border-1"><div class="card-body"><h2 class="card-title"> </h2> <p class="text-sm opacity-70">Status: <span> </span></p> <div class="card-actions justify-end mt-4"><!></div></div></div>'),da=c('<h1 class="text-3xl font-bold mb-8">Plugins</h1> <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>',1),ca=c('<div class="p-6"><!></div>');function ua(t,v){R(v,!0);let e=C(!1),s=C(null);const G=async d=>{b(e,!0),b(s,F(d));try{await f.enable(d)}catch(_){alert(_.message)}b(e,!1),b(s,null)},H=async d=>{b(e,!0),b(s,F(d));try{await f.disable(d)}catch(_){alert(_.message)}b(e,!1),b(s,null)};var k=ca(),I=o(k);u(I,()=>f.loading,d=>{var _=aa();l(d,_)},d=>{var _=Q(),J=B(_);u(J,()=>f.error,N=>{var m=sa(),h=o(m);i(m),y(()=>x(h,f.error)),l(N,m)},N=>{var m=da(),h=p(B(m),2);V(h,21,()=>f.data,X,(K,n)=>{var w=oa(),W=o(w),$=o(W),L=o($);i($);var P=p($,2),j=p(o(P)),M=o(j);i(j),i(P);var q=p(P,2),O=o(q);u(O,()=>!a(n).enabled,A=>{var r=ra();r.__click=[ea,G,n];var g=o(r);u(g,()=>a(e)&&a(n).name==a(s),E=>{var S=ta();l(E,S)});var D=p(g);i(r),y(()=>{r.disabled=a(e),T(r,`btn btn-primary ${(a(n).name==a(s)?"btn-disabled":"")??""}`),x(D,` ${(a(e)&&a(n).name==a(s)?"enabling...":"Enable")??""}`)}),l(A,r)},A=>{var r=la();r.__click=[na,H,n];var g=o(r);u(g,()=>a(e)&&a(n).name==a(s),E=>{var S=ia();l(E,S)});var D=p(g);i(r),y(()=>{r.disabled=a(e),T(r,`btn btn-error ${(a(n).name==a(s)?"btn-disabled":"")??""}`),x(D,` ${(a(e)&&a(n).name==a(s)?"disabling...":"Disable")??""}`)}),l(A,r)}),i(q),i(W),i(w),y(()=>{x(L,a(n).name),T(j,a(n).enabled?"text-success":"text-warning"),x(M,a(n).enabled?"enabled":"disabled")}),l(K,w)}),i(h),l(N,m)},!0),l(d,_)}),i(k),l(t,k),U()}Y(["click"]);export{ua as component};