import{a as L,t as $}from"./disclose-version.hHXjza9X.js";import{e as v,g as t,b as a,p as R,u as V,t as B,a as W,c as n,s as _,r as o}from"./runtime.B40kIuYm.js";import{s as X}from"./render.CM3wPBfR.js";import{i as Y}from"./if.BU02RLSO.js";import{e as Z,i as ee}from"./each.DvJ5DvNT.js";import{r as C,a as te}from"./attributes.faLUl4vZ.js";import{s as re}from"./class.ysGxxhcu.js";import{d as ae,e as se}from"./events.DTvxUH_b.js";import{b as F}from"./input.CHcNizJA.js";import{s as le,a as oe,p as ne}from"./stores.CV_BPUgT.js";import{p as b}from"./proxy.B3-__M_J.js";import{b as O,f as q}from"./fetcher.CABHu9Eq.js";import{P as ce,D as ie}from"./DeleteOutline.CIoqQZFN.js";const ue=async e=>{const r=`${O.api_url}/labels/${e}`;return q(r)},de=async(e,r,c)=>{const u=`${O.api_url}/labels`;return q(u,"POST",{name:e,color:r,campaign:c})},fe=async e=>{const r=`${O.api_url}/labels/${e}`;return q(r,"DELETE")};function be(){let e=v(b([])),r=v(!0),c=v(null),u=v(null);return{get data(){return t(e)},get loading(){return t(r)},get error(){return t(c)},get current(){return t(u)},set current(s){a(u,b(s))},retrieve:async s=>{a(r,!0);const{data:i,error:d}=await ue(s);d&&a(c,b(d.message)),a(e,b(i)),a(r,!1)},create:async(s,i,d)=>{const{data:g,error:x}=await de(s,i,d);if(x)throw new Error(x);return a(e,b([g,...t(e)])),g},delete:s=>{a(e,b(t(e).filter(i=>i.id!==s))),fe(s)},reset:()=>{a(e,b([])),a(r,!0),a(c,null),a(u,null)}}}const p=be();var pe=$('<p class="italic">No labels found</p>'),ve=(e,r,c)=>r(t(c).name),me=(e,r,c)=>r(t(c).id),_e=$('<tr><td class="w-8"><div class="w-4 h-4 ml-2 rounded-full"></div></td><td><button class="w-full px-2 text-left"> </button></td><td class="w-8"><button class="px-2 hover:text-red-600"><!></button></td></tr>'),ge=$('<div class="flex flex-col flex-1 h-full overflow-auto"><table class="w-full"></table></div>'),xe=$('<section class="flex flex-col flex-1 h-full gap-2 mt-2"><form class="flex"><input type="text" placeholder="new label" required class="rounded-r-none input input-sm border border-1"> <button type="submit" class="rounded-none btn btn-primary btn-sm"><!></button> <div class="box-border flex w-24 rounded-tr-lg rounded-br-lg"><input class="box-border h-full p-0 m-0 rounded-tr-lg rounded-br-lg" type="color"></div></form> <div class="flex flex-col flex-1 h-full"><!></div></section>');function Ae(e,r){R(r,!0);const c=le(),u=()=>oe(ne,"$page",c);V(async()=>{p.retrieve(u().url.searchParams.get("id"))});let s=v("#000000"),i=v(""),d=v(!1);const g=async l=>{if(l.preventDefault(),a(d,!0),t(i)){try{await p.create(t(i),t(s),u().url.searchParams.get("id")),a(i,"")}catch(f){alert(f.message)}a(d,!1)}},x=async l=>{p.current=l},G=async l=>{confirm("Are you sure you want to delete this label? This action is irreversible and will delete all the associated annotations.")&&p.delete(l)};var k=xe(),h=n(k),P=n(h);C(P);var y=_(P,2),H=n(y);ce(H,{size:"15"}),o(y);var A=_(y,2),N=n(A);C(N),o(A),o(h);var S=_(h,2),I=n(S);Y(I,()=>p.data.length==0,l=>{var f=pe();L(l,f)},l=>{var f=ge(),U=n(f);Z(U,21,()=>p.data,ee,(J,m)=>{var w=_e(),D=n(w),K=n(D);o(D);var E=_(D),T=n(E);T.__click=[ve,x,m];var M=n(T);o(T),o(E);var j=_(E),z=n(j);z.__click=[me,G,m];var Q=n(z);ie(Q,{size:"15"}),o(z),o(j),o(w),B(()=>{re(w,`h-8 hover:bg-slate-100 ${(p.current==t(m).name?"bg-slate-50":"")??""}`),te(K,"style",`background-color: ${t(m).color??""};`),X(M,t(m).name)}),L(J,w)}),o(U),o(f),L(l,f)}),o(S),o(k),B(()=>y.disabled=t(d)),se("submit",h,g),F(P,()=>t(i),l=>a(i,l)),F(N,()=>t(s),l=>a(s,l)),L(e,k),W()}ae(["click"]);export{Ae as L,p as l};
