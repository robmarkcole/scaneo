import{S as Lt,i as Ht,s as Pt,Q as Ne,e as Nt,R as Fe,m as p,h as o,n as O,b as _,H as f,I as It,q as r,r as c,u as jt,a8 as Jt,C as Wt,k as E,a as C,l as $,c as g,U as Dt,D as Xt,E as xt,F as el,g as D,v as tl,d as L,f as ll,V as ol,y as S,z as U,A as R,a9 as al,aa as Ft,B as V,w as sl}from"../chunks/index.a81f82fa.js";function Mt(i){let t,l;return{c(){t=Ne("desc"),l=r(i[7])},l(a){t=Fe(a,"desc",{});var n=p(t);l=c(n,i[7]),n.forEach(o)},m(a,n){_(a,t,n),f(t,l)},p(a,n){n&128&&jt(l,a[7])},d(a){a&&o(t)}}}function Gt(i){let t,l;return{c(){t=Ne("title"),l=r(i[6])},l(a){t=Fe(a,"title",{});var n=p(t);l=c(n,i[6]),n.forEach(o)},m(a,n){_(a,t,n),f(t,l)},p(a,n){n&64&&jt(l,a[6])},d(a){a&&o(t)}}}function fl(i){let t,l,a,n=i[7]&&Mt(i),h=i[6]&&Gt(i);return{c(){t=Ne("svg"),n&&n.c(),l=Nt(),h&&h.c(),a=Ne("path"),this.h()},l(m){t=Fe(m,"svg",{viewBox:!0,width:!0,height:!0,class:!0,"aria-label":!0,"aria-hidden":!0});var d=p(t);n&&n.l(d),l=Nt(),h&&h.l(d),a=Fe(d,"path",{d:!0,fill:!0}),p(a).forEach(o),d.forEach(o),this.h()},h(){O(a,"d","M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"),O(a,"fill",i[2]),O(t,"viewBox",i[3]),O(t,"width",i[0]),O(t,"height",i[1]),O(t,"class",i[8]),O(t,"aria-label",i[4]),O(t,"aria-hidden",i[5])},m(m,d){_(m,t,d),n&&n.m(t,null),f(t,l),h&&h.m(t,null),f(t,a)},p(m,[d]){m[7]?n?n.p(m,d):(n=Mt(m),n.c(),n.m(t,l)):n&&(n.d(1),n=null),m[6]?h?h.p(m,d):(h=Gt(m),h.c(),h.m(t,a)):h&&(h.d(1),h=null),d&4&&O(a,"fill",m[2]),d&8&&O(t,"viewBox",m[3]),d&1&&O(t,"width",m[0]),d&2&&O(t,"height",m[1]),d&256&&O(t,"class",m[8]),d&16&&O(t,"aria-label",m[4]),d&32&&O(t,"aria-hidden",m[5])},i:It,o:It,d(m){m&&o(t),n&&n.d(),h&&h.d()}}}function il(i,t,l){let{size:a="1em"}=t,{width:n=a}=t,{height:h=a}=t,{color:m="currentColor"}=t,{viewBox:d="0 0 24 24"}=t,{ariaLabel:k=void 0}=t,{ariaHidden:I=void 0}=t,{title:b=void 0}=t,{desc:v=void 0}=t,{class:w=void 0}=t;return i.$$set=u=>{"size"in u&&l(9,a=u.size),"width"in u&&l(0,n=u.width),"height"in u&&l(1,h=u.height),"color"in u&&l(2,m=u.color),"viewBox"in u&&l(3,d=u.viewBox),"ariaLabel"in u&&l(4,k=u.ariaLabel),"ariaHidden"in u&&l(5,I=u.ariaHidden),"title"in u&&l(6,b=u.title),"desc"in u&&l(7,v=u.desc),"class"in u&&l(8,w=u.class)},[n,h,m,d,k,I,b,v,w,a]}class nl extends Lt{constructor(t){super(),Ht(this,t,il,fl,Pt,{size:9,width:0,height:1,color:2,viewBox:3,ariaLabel:4,ariaHidden:5,title:6,desc:7,class:8})}}function Qt(i,{delay:t=0,duration:l=400,easing:a=Jt}={}){const n=+getComputedStyle(i).opacity;return{delay:t,duration:l,easing:a,css:h=>`opacity: ${h*n}`}}function Zt(i){let t,l,a,n,h,m;return l=new nl({props:{size:"15"}}),{c(){t=E("button"),S(l.$$.fragment),this.h()},l(d){t=$(d,"BUTTON",{class:!0});var k=p(t);U(l.$$.fragment,k),k.forEach(o),this.h()},h(){O(t,"class","absolute top-2 right-2 bg-white hover:cursor-pointer rounded-lg p-2 active:transform active:scale-95")},m(d,k){_(d,t,k),R(l,t,null),n=!0,h||(m=Dt(t,"click",i[7]),h=!0)},p:It,i(d){n||(D(l.$$.fragment,d),al(()=>{n&&(a||(a=Ft(t,Qt,{duration:200},!0)),a.run(1))}),n=!0)},o(d){L(l.$$.fragment,d),a||(a=Ft(t,Qt,{duration:200},!1)),a.run(0),n=!1},d(d){d&&o(t),V(l),d&&a&&a.end(),h=!1,m()}}}function rl(i){let t,l,a,n,h,m,d,k;const I=i[5].default,b=Wt(I,i,i[4],null);let v=i[1]&&Zt(i);return{c(){t=E("div"),l=E("pre"),a=E("code"),b&&b.c(),h=C(),v&&v.c(),this.h()},l(w){t=$(w,"DIV",{class:!0});var u=p(t);l=$(u,"PRE",{class:!0});var J=p(l);a=$(J,"CODE",{});var P=p(a);b&&b.l(P),P.forEach(o),J.forEach(o),h=g(u),v&&v.l(u),u.forEach(o),this.h()},h(){O(l,"class",n="language-"+i[0]),O(t,"class","relative w-full mb-7")},m(w,u){_(w,t,u),f(t,l),f(l,a),b&&b.m(a,null),i[6](a),f(t,h),v&&v.m(t,null),m=!0,d||(k=[Dt(t,"mouseenter",i[8]),Dt(t,"mouseleave",i[9])],d=!0)},p(w,[u]){b&&b.p&&(!m||u&16)&&Xt(b,I,w,w[4],m?el(I,w[4],u,null):xt(w[4]),null),(!m||u&1&&n!==(n="language-"+w[0]))&&O(l,"class",n),w[1]?v?(v.p(w,u),u&2&&D(v,1)):(v=Zt(w),v.c(),D(v,1),v.m(t,null)):v&&(tl(),L(v,1,1,()=>{v=null}),ll())},i(w){m||(D(b,w),D(v),m=!0)},o(w){L(b,w),L(v),m=!1},d(w){w&&o(t),b&&b.d(w),i[6](null),v&&v.d(),d=!1,ol(k)}}}function cl(i,t,l){let{$$slots:a={},$$scope:n}=t,{lang:h="bash"}=t,m=!1,d=!1,k=null;function I(u){sl[u?"unshift":"push"](()=>{k=u,l(3,k)})}const b=()=>{const u=document.createElement("textarea");u.value=k.innerText,document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u),l(2,d=!0)},v=()=>l(1,m=!0),w=()=>l(1,m=!1);return i.$$set=u=>{"lang"in u&&l(0,h=u.lang),"$$scope"in u&&l(4,n=u.$$scope)},[h,m,d,k,n,a,I,b,v,w]}class K extends Lt{constructor(t){super(),Ht(this,t,cl,rl,Pt,{lang:0})}}function ul(i){let t;return{c(){t=r("pip install scaneo")},l(l){t=c(l,"pip install scaneo")},m(l,a){_(l,t,a)},d(l){l&&o(t)}}}function dl(i){let t;return{c(){t=r("scaneo --help")},l(l){t=c(l,"scaneo --help")},m(l,a){_(l,t,a)},d(l){l&&o(t)}}}function _l(i){let t;return{c(){t=r("pip install eotdl --upgrade")},l(l){t=c(l,"pip install eotdl --upgrade")},m(l,a){_(l,t,a)},d(l){l&&o(t)}}}function ml(i){let t;return{c(){t=r("scaneo --port 8080")},l(l){t=c(l,"scaneo --port 8080")},m(l,a){_(l,t,a)},d(l){l&&o(t)}}}function hl(i){let t;return{c(){t=r("scaneo --host")},l(l){t=c(l,"scaneo --host")},m(l,a){_(l,t,a)},d(l){l&&o(t)}}}function pl(i){let t;return{c(){t=r("scaneo --reload")},l(l){t=c(l,"scaneo --reload")},m(l,a){_(l,t,a)},d(l){l&&o(t)}}}function vl(i){let t;return{c(){t=r("scaneo --version")},l(l){t=c(l,"scaneo --version")},m(l,a){_(l,t,a)},d(l){l&&o(t)}}}function El(i){let t;return{c(){t=r("scaneo --data ./path-to-data/")},l(l){t=c(l,"scaneo --data ./path-to-data/")},m(l,a){_(l,t,a)},d(l){l&&o(t)}}}function $l(i){let t;return{c(){t=r("scaneo --env")},l(l){t=c(l,"scaneo --env")},m(l,a){_(l,t,a)},d(l){l&&o(t)}}}function wl(i){let t,l,a,n,h,m,d,k,I,b,v,w,u,J,P,Ie,X,Me,De,z,Le,x,se,Ge,He,ee,Qe,Pe,T,Ze,fe,je,Je,ie,We,Xe,Te,N,ye,y,xe,ne,et,tt,re,lt,ot,Be,F,Ae,B,at,ce,st,ft,ue,it,nt,Ye,M,Se,A,rt,de,ct,ut,_e,dt,_t,Ue,G,Re,Y,mt,me,ht,pt,he,vt,Et,Ve,Q,qe,H,$t,pe,wt,bt,ve,Ct,gt,Ee,kt,Ot,Ke,Z,ze;return d=new K({props:{$$slots:{default:[ul]},$$scope:{ctx:i}}}),P=new K({props:{$$slots:{default:[dl]},$$scope:{ctx:i}}}),z=new K({props:{$$slots:{default:[_l]},$$scope:{ctx:i}}}),N=new K({props:{$$slots:{default:[ml]},$$scope:{ctx:i}}}),F=new K({props:{$$slots:{default:[hl]},$$scope:{ctx:i}}}),M=new K({props:{$$slots:{default:[pl]},$$scope:{ctx:i}}}),G=new K({props:{$$slots:{default:[vl]},$$scope:{ctx:i}}}),Q=new K({props:{$$slots:{default:[El]},$$scope:{ctx:i}}}),Z=new K({props:{$$slots:{default:[$l]},$$scope:{ctx:i}}}),{c(){t=E("h1"),l=r("Installation"),a=C(),n=E("p"),h=r("You can install the library and CLI using pip."),m=C(),S(d.$$.fragment),k=C(),I=E("p"),b=r("To verify the installation you can run the "),v=E("code"),w=r("help"),u=r(" command, which will give you a list of all the available commands in the CLI."),J=C(),S(P.$$.fragment),Ie=C(),X=E("p"),Me=r("Until we hit a stable release (v1.0 is planned for October 2023) it is recommended to upgrade the cli regularly to get the latest changes."),De=C(),S(z.$$.fragment),Le=C(),x=E("blockquote"),se=E("p"),Ge=r("The library and CLI require Python >= 3.8."),He=C(),ee=E("h1"),Qe=r("CLI"),Pe=C(),T=E("p"),Ze=r("You can pick a port to run the server on with the flag "),fe=E("code"),je=r("--port"),Je=r(" or "),ie=E("code"),We=r("-p"),Xe=r("."),Te=C(),S(N.$$.fragment),ye=C(),y=E("p"),xe=r("You can also specify the host with the flag "),ne=E("code"),et=r("--host"),tt=r(" or "),re=E("code"),lt=r("-h"),ot=r("."),Be=C(),S(F.$$.fragment),Ae=C(),B=E("p"),at=r("To run the server in reload mode you can use the flag "),ce=E("code"),st=r("--reload"),ft=r(" or "),ue=E("code"),it=r("-r"),nt=r("."),Ye=C(),S(M.$$.fragment),Se=C(),A=E("p"),rt=r("Find out which version of the CLI you are running with the flag "),de=E("code"),ct=r("--version"),ut=r(" or "),_e=E("code"),dt=r("-v"),_t=r("."),Ue=C(),S(G.$$.fragment),Re=C(),Y=E("p"),mt=r("If you’re working with local data, you can specify a path to a local file with the flag "),me=E("code"),ht=r("--data"),pt=r(" or "),he=E("code"),vt=r("-d"),Et=r(" before the path to the data."),Ve=C(),S(Q.$$.fragment),qe=C(),H=E("p"),$t=r("Add a path to environment file with credentials to a cloud bucket (URL, ACCESS_KEY, SECRET_KEY, BUCKET, REGION) with the flag "),pe=E("code"),wt=r("--env"),bt=r(", "),ve=E("code"),Ct=r(".env"),gt=r(" or "),Ee=E("code"),kt=r("-e"),Ot=r("."),Ke=C(),S(Z.$$.fragment)},l(e){t=$(e,"H1",{});var s=p(t);l=c(s,"Installation"),s.forEach(o),a=g(e),n=$(e,"P",{});var $e=p(n);h=c($e,"You can install the library and CLI using pip."),$e.forEach(o),m=g(e),U(d.$$.fragment,e),k=g(e),I=$(e,"P",{});var W=p(I);b=c(W,"To verify the installation you can run the "),v=$(W,"CODE",{});var we=p(v);w=c(we,"help"),we.forEach(o),u=c(W," command, which will give you a list of all the available commands in the CLI."),W.forEach(o),J=g(e),U(P.$$.fragment,e),Ie=g(e),X=$(e,"P",{});var be=p(X);Me=c(be,"Until we hit a stable release (v1.0 is planned for October 2023) it is recommended to upgrade the cli regularly to get the latest changes."),be.forEach(o),De=g(e),U(z.$$.fragment,e),Le=g(e),x=$(e,"BLOCKQUOTE",{});var Ce=p(x);se=$(Ce,"P",{});var ge=p(se);Ge=c(ge,"The library and CLI require Python >= 3.8."),ge.forEach(o),Ce.forEach(o),He=g(e),ee=$(e,"H1",{});var ke=p(ee);Qe=c(ke,"CLI"),ke.forEach(o),Pe=g(e),T=$(e,"P",{});var q=p(T);Ze=c(q,"You can pick a port to run the server on with the flag "),fe=$(q,"CODE",{});var Oe=p(fe);je=c(Oe,"--port"),Oe.forEach(o),Je=c(q," or "),ie=$(q,"CODE",{});var Tt=p(ie);We=c(Tt,"-p"),Tt.forEach(o),Xe=c(q,"."),q.forEach(o),Te=g(e),U(N.$$.fragment,e),ye=g(e),y=$(e,"P",{});var te=p(y);xe=c(te,"You can also specify the host with the flag "),ne=$(te,"CODE",{});var yt=p(ne);et=c(yt,"--host"),yt.forEach(o),tt=c(te," or "),re=$(te,"CODE",{});var Bt=p(re);lt=c(Bt,"-h"),Bt.forEach(o),ot=c(te,"."),te.forEach(o),Be=g(e),U(F.$$.fragment,e),Ae=g(e),B=$(e,"P",{});var le=p(B);at=c(le,"To run the server in reload mode you can use the flag "),ce=$(le,"CODE",{});var At=p(ce);st=c(At,"--reload"),At.forEach(o),ft=c(le," or "),ue=$(le,"CODE",{});var Yt=p(ue);it=c(Yt,"-r"),Yt.forEach(o),nt=c(le,"."),le.forEach(o),Ye=g(e),U(M.$$.fragment,e),Se=g(e),A=$(e,"P",{});var oe=p(A);rt=c(oe,"Find out which version of the CLI you are running with the flag "),de=$(oe,"CODE",{});var St=p(de);ct=c(St,"--version"),St.forEach(o),ut=c(oe," or "),_e=$(oe,"CODE",{});var Ut=p(_e);dt=c(Ut,"-v"),Ut.forEach(o),_t=c(oe,"."),oe.forEach(o),Ue=g(e),U(G.$$.fragment,e),Re=g(e),Y=$(e,"P",{});var ae=p(Y);mt=c(ae,"If you’re working with local data, you can specify a path to a local file with the flag "),me=$(ae,"CODE",{});var Rt=p(me);ht=c(Rt,"--data"),Rt.forEach(o),pt=c(ae," or "),he=$(ae,"CODE",{});var Vt=p(he);vt=c(Vt,"-d"),Vt.forEach(o),Et=c(ae," before the path to the data."),ae.forEach(o),Ve=g(e),U(Q.$$.fragment,e),qe=g(e),H=$(e,"P",{});var j=p(H);$t=c(j,"Add a path to environment file with credentials to a cloud bucket (URL, ACCESS_KEY, SECRET_KEY, BUCKET, REGION) with the flag "),pe=$(j,"CODE",{});var qt=p(pe);wt=c(qt,"--env"),qt.forEach(o),bt=c(j,", "),ve=$(j,"CODE",{});var Kt=p(ve);Ct=c(Kt,".env"),Kt.forEach(o),gt=c(j," or "),Ee=$(j,"CODE",{});var zt=p(Ee);kt=c(zt,"-e"),zt.forEach(o),Ot=c(j,"."),j.forEach(o),Ke=g(e),U(Z.$$.fragment,e)},m(e,s){_(e,t,s),f(t,l),_(e,a,s),_(e,n,s),f(n,h),_(e,m,s),R(d,e,s),_(e,k,s),_(e,I,s),f(I,b),f(I,v),f(v,w),f(I,u),_(e,J,s),R(P,e,s),_(e,Ie,s),_(e,X,s),f(X,Me),_(e,De,s),R(z,e,s),_(e,Le,s),_(e,x,s),f(x,se),f(se,Ge),_(e,He,s),_(e,ee,s),f(ee,Qe),_(e,Pe,s),_(e,T,s),f(T,Ze),f(T,fe),f(fe,je),f(T,Je),f(T,ie),f(ie,We),f(T,Xe),_(e,Te,s),R(N,e,s),_(e,ye,s),_(e,y,s),f(y,xe),f(y,ne),f(ne,et),f(y,tt),f(y,re),f(re,lt),f(y,ot),_(e,Be,s),R(F,e,s),_(e,Ae,s),_(e,B,s),f(B,at),f(B,ce),f(ce,st),f(B,ft),f(B,ue),f(ue,it),f(B,nt),_(e,Ye,s),R(M,e,s),_(e,Se,s),_(e,A,s),f(A,rt),f(A,de),f(de,ct),f(A,ut),f(A,_e),f(_e,dt),f(A,_t),_(e,Ue,s),R(G,e,s),_(e,Re,s),_(e,Y,s),f(Y,mt),f(Y,me),f(me,ht),f(Y,pt),f(Y,he),f(he,vt),f(Y,Et),_(e,Ve,s),R(Q,e,s),_(e,qe,s),_(e,H,s),f(H,$t),f(H,pe),f(pe,wt),f(H,bt),f(H,ve),f(ve,Ct),f(H,gt),f(H,Ee),f(Ee,kt),f(H,Ot),_(e,Ke,s),R(Z,e,s),ze=!0},p(e,[s]){const $e={};s&1&&($e.$$scope={dirty:s,ctx:e}),d.$set($e);const W={};s&1&&(W.$$scope={dirty:s,ctx:e}),P.$set(W);const we={};s&1&&(we.$$scope={dirty:s,ctx:e}),z.$set(we);const be={};s&1&&(be.$$scope={dirty:s,ctx:e}),N.$set(be);const Ce={};s&1&&(Ce.$$scope={dirty:s,ctx:e}),F.$set(Ce);const ge={};s&1&&(ge.$$scope={dirty:s,ctx:e}),M.$set(ge);const ke={};s&1&&(ke.$$scope={dirty:s,ctx:e}),G.$set(ke);const q={};s&1&&(q.$$scope={dirty:s,ctx:e}),Q.$set(q);const Oe={};s&1&&(Oe.$$scope={dirty:s,ctx:e}),Z.$set(Oe)},i(e){ze||(D(d.$$.fragment,e),D(P.$$.fragment,e),D(z.$$.fragment,e),D(N.$$.fragment,e),D(F.$$.fragment,e),D(M.$$.fragment,e),D(G.$$.fragment,e),D(Q.$$.fragment,e),D(Z.$$.fragment,e),ze=!0)},o(e){L(d.$$.fragment,e),L(P.$$.fragment,e),L(z.$$.fragment,e),L(N.$$.fragment,e),L(F.$$.fragment,e),L(M.$$.fragment,e),L(G.$$.fragment,e),L(Q.$$.fragment,e),L(Z.$$.fragment,e),ze=!1},d(e){e&&o(t),e&&o(a),e&&o(n),e&&o(m),V(d,e),e&&o(k),e&&o(I),e&&o(J),V(P,e),e&&o(Ie),e&&o(X),e&&o(De),V(z,e),e&&o(Le),e&&o(x),e&&o(He),e&&o(ee),e&&o(Pe),e&&o(T),e&&o(Te),V(N,e),e&&o(ye),e&&o(y),e&&o(Be),V(F,e),e&&o(Ae),e&&o(B),e&&o(Ye),V(M,e),e&&o(Se),e&&o(A),e&&o(Ue),V(G,e),e&&o(Re),e&&o(Y),e&&o(Ve),V(Q,e),e&&o(qe),e&&o(H),e&&o(Ke),V(Z,e)}}}class Cl extends Lt{constructor(t){super(),Ht(this,t,null,wl,Pt,{})}}export{Cl as component};
