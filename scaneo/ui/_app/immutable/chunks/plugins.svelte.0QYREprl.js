import{p as l}from"./proxy.B3-__M_J.js";import{e as c,g as u,b as n}from"./runtime.B40kIuYm.js";import{b as g,f as d}from"./fetcher.CybOVi2G.js";async function p(){const r=`${g.url}/_plugins`;return d(r)}const f=async r=>{const t=`${g.url}/_plugins`;return d(t,"POST",{name:r})},b=async r=>{const t=`${g.url}/_plugins/${r}`;return d(t,"DELETE")};function m(){let r=c(l([])),t=c(!0),i=c(null);return{get data(){return u(r)},get loading(){return u(t)},get error(){return u(i)},retrieve:async()=>{n(t,!0);const{data:e,error:a}=await p();a&&n(i,l(a.message)),n(r,l(e)),n(t,!1)},enable:async e=>{const{data:a,error:s}=await f(e);if(s)throw s;n(r,l(u(r).map(o=>o.name===e?a:o)))},disable:async e=>{const{data:a,error:s}=await b(e);s&&console.error(s),n(r,l(u(r).map(o=>o.name===e?a:o)))}}}const P=m();export{P as p};