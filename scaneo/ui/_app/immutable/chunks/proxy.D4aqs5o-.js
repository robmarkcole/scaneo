import{af as b,ag as D,ah as E,a6 as v,ai as T,b as l,o as P,aj as u,g as m,E as A,ak as K,al as L,V as M}from"./runtime.cJOh_ioU.js";function y(i,o=null,S){if(typeof i!="object"||i===null||b in i)return i;const I=L(i);if(I!==D&&I!==E)return i;var a=new Map,c=M(i),h=v(0);c&&a.set("length",v(i.length));var g;return new Proxy(i,{defineProperty(f,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&T();var n=a.get(e);return n===void 0?(n=v(t.value),a.set(e,n)):l(n,y(t.value,g)),!0},deleteProperty(f,e){var t=a.get(e);if(t===void 0)e in f&&a.set(e,v(u));else{if(c&&typeof e=="string"){var n=a.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&l(n,r)}l(t,u),j(h)}return!0},get(f,e,t){var d;if(e===b)return i;var n=a.get(e),r=e in f;if(n===void 0&&(!r||(d=P(f,e))!=null&&d.writable)&&(n=v(y(r?f[e]:u,g)),a.set(e,n)),n!==void 0){var s=m(n);return s===u?void 0:s}return Reflect.get(f,e,t)},getOwnPropertyDescriptor(f,e){var t=Reflect.getOwnPropertyDescriptor(f,e);if(t&&"value"in t){var n=a.get(e);n&&(t.value=m(n))}else if(t===void 0){var r=a.get(e),s=r==null?void 0:r.v;if(r!==void 0&&s!==u)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(f,e){var s;if(e===b)return!0;var t=a.get(e),n=t!==void 0&&t.v!==u||Reflect.has(f,e);if(t!==void 0||A!==null&&(!n||(s=P(f,e))!=null&&s.writable)){t===void 0&&(t=v(n?y(f[e],g):u),a.set(e,t));var r=m(t);if(r===u)return!1}return n},set(f,e,t,n){var O;var r=a.get(e),s=e in f;if(c&&e==="length")for(var d=t;d<r.v;d+=1){var _=a.get(d+"");_!==void 0?l(_,u):d in f&&(_=v(u),a.set(d+"",_))}r===void 0?(!s||(O=P(f,e))!=null&&O.writable)&&(r=v(void 0),l(r,y(t,g)),a.set(e,r)):(s=r.v!==u,l(r,y(t,g)));var w=Reflect.getOwnPropertyDescriptor(f,e);if(w!=null&&w.set&&w.set.call(n,t),!s){if(c&&typeof e=="string"){var N=a.get("length"),x=Number(e);Number.isInteger(x)&&x>=N.v&&l(N,x+1)}j(h)}return!0},ownKeys(f){m(h);var e=Reflect.ownKeys(f).filter(r=>{var s=a.get(r);return s===void 0||s.v!==u});for(var[t,n]of a)n.v!==u&&!(t in f)&&e.push(t);return e},setPrototypeOf(){K()}})}function j(i,o=1){l(i,i.v+o)}function R(i){return i!==null&&typeof i=="object"&&b in i?i[b]:i}function B(i,o){return Object.is(R(i),R(o))}export{R as g,B as i,y as p};