import{a as h,t as _}from"../chunks/disclose-version.CLVP8wdO.js";import{h as ne,p as we,k as u,m as xe,g as F,a as be,j as s,i as e,s as o,c as p,r as v,t as ce}from"../chunks/runtime.OFQIcp2P.js";import{d as ye,s as I}from"../chunks/render.BVhLVIDF.js";import{i as b}from"../chunks/if.CxsERAfj.js";import{e as ze,i as ke}from"../chunks/each._uhWAVV4.js";import{s as y}from"../chunks/style.PwPRnE0L.js";import{p as f}from"../chunks/proxy.B9U5D_Zu.js";import{o as qe}from"../chunks/index-client.DzRFANZT.js";import{o as Ie,g as z}from"../chunks/entry.JVcXWMU4.js";import{P as G}from"../chunks/public.CHZCeYTi.js";import{L as Ne,F as Ue}from"../chunks/FeedPost.Dq1CLr13.js";import{i as T,c as Pe,j as H}from"../chunks/jwtRetriever.svelte.eYKYCOXx.js";import{s as $}from"../chunks/shared.svelte.Crem28hc.js";import{b as k}from"../chunks/paths.Dxl4Naed.js";function pe(i,d){var n=i.__className,a=Re(d);ne&&i.className===a?i.__className=a:(n!==a||ne&&i.className!==a)&&(d==null?i.removeAttribute("class"):i.className=a,i.__className=a)}function Re(i){return i??""}async function Le(i,d,n,a){if(!e(d))return;s(n,!0),s(a,!e(a));const N={followed:e(a),userId:e(d).id};try{(await fetch(G+"/user/follow",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+H()},body:JSON.stringify(N)})).ok?e(a)?e(d).followers+=1:e(d).followers-=1:s(a,!e(a))}catch{s(a,!e(a))}s(n,!1)}var Me=_("<button> </button>"),Se=(i,d)=>{T()?z(k+"/home/report?reported="+e(d)):z(k+"/account/login")},Te=_('<h1> </h1> <div class="sbs svelte-1axzuq2"><div class="lottie svelte-1axzuq2"><!></div> <div class="user-details svelte-1axzuq2"><div class="user-datetime svelte-1axzuq2"><strong class="svelte-1axzuq2"> </strong> <p class="svelte-1axzuq2">&bull;</p> <p class="svelte-1axzuq2"> </p></div> <p class="svelte-1axzuq2"> </p> <div></div> <div class="sbs svelte-1axzuq2"><div><p class="svelte-1axzuq2"> </p></div> <div></div> <!> <button class="report-btn svelte-1axzuq2" aria-label="Report user"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16"></path></svg></button></div></div></div>',1),De=_("<p>In response to another post</p>"),Ee=_("<!> <!>",1),je=_("<p>Loading...</p>"),Be=_("<p>Reached end</p>"),Ce=_("<p>Failed to load posts</p>"),Oe=_("<p>This user didn't post anything</p>"),Ae=_("<!> <hr> <!> <!> <!> <!> <!>",1);function at(i,d){we(d,!0);let n=u(void 0),a=u(f([])),N=0,m=u(!1),U=u(!1),P=u(!1),L;async function D(){if(console.log("loadMore"),!(e(m)||e(U)||!T())){s(m,!0),s(P,!1);try{const t=await fetch(G+"/posts/"+e(n)+`?page=${N}&size=5`,{method:"GET",headers:{Authorization:"Bearer "+H()}});if(t.status!==200)s(P,!0);else{const r=await t.json();r.length!==0?(s(a,f([...e(a),...r])),N+=1):s(U,!0)}}catch{s(P,!0)}s(m,!1)}}function E(){if(L&&L.disconnect(),e(a).length>0){const t=document.querySelector(".post:last-child");t&&(L=new IntersectionObserver(r=>{r[0].isIntersecting&&D()}),L.observe(t))}}Ie(t=>{var c,g;if(((c=t.to)==null?void 0:c.route.id)!=="/home/user"||((g=t.from)==null?void 0:g.route.id)!=="/home/user")return;const r=new URLSearchParams(window.location.search);s(n,f(r.get("userId"))),e(n)?(s(a,f([])),N=0,s(m,!1),s(U,!1),s(P,!1),s(l,null),s(j,null),T()||z(k+"/account/login",{replaceState:!0}),D(),E(),K()):z(k+"/home")}),qe(()=>{const t=new URLSearchParams(window.location.search);s(n,f(t.get("userId"))),e(n)?(T()||z(k+"/account/login",{replaceState:!0}),D(),E(),K(),$.cachedUserData===null&&Pe()):z(k+"/home")}),xe(()=>{E()});let l=u(null),j=u(null),J=u("chip chip-default");async function K(){var c;const t=await fetch(G+"/user-info/"+e(n),{method:"GET",headers:{Authorization:"Bearer "+H()}}),r=await t.json();t.ok&&(s(l,f(r)),s(J,f(e(l)&&(e(l).role==="OWNER"||e(l).role==="MODERATOR")?"chip chip-blue":e(l)&&e(l).role==="MEMBER"?"chip chip-yellow":"chip chip-default")),s(j,f(new Intl.DateTimeFormat("en-US",{dateStyle:"short"}).format(r.creationDateTime))),s(M,f(((c=e(l))==null?void 0:c.followed)??!1)))}let M=u(!1),W=u(!1);var Q=Ae(),V=F(Q);b(V,()=>e(l),t=>{var r=Te(),c=F(r),g=p(c,!0);v(c);var R=o(c,2);y(R,"gap","1rem");var w=p(R),x=p(w);Ne(x,{emoteId:"0",get userId(){return e(l).id}}),v(w);var B=o(w,2);y(B,"flex-grow","1");var C=p(B),O=p(C),de=p(O,!0);v(O);var te=o(O,2);y(te,"color","grey");var ae=o(te,2),ue=p(ae);v(ae),v(C);var A=o(C,2),fe=p(A);v(A);var se=o(A,2);y(se,"flex-grow","1");var re=o(se,2),S=p(re),oe=p(S),he=p(oe,!0);v(oe),v(S);var le=o(S,2);y(le,"flex-grow","1");var ie=o(le,2);b(ie,()=>$.cachedUserData&&$.cachedUserData.id!==Number(e(n)),me=>{var q=Me();q.__click=[Le,l,W,M];var ge=p(q,!0);v(q),ce(()=>{pe(q,`${(e(M)?"follow-btn unfollow-btn":"follow-btn")??""} svelte-1axzuq2`),q.disabled=e(W),I(ge,e(M)?"Unfollow":"Follow")}),h(me,q)});var _e=o(ie,2);_e.__click=[Se,n],v(re),v(B),v(R),ce(()=>{I(g,e(l).nickname),I(de,e(l).username),I(ue,`Member since ${e(j)??""}`),I(fe,`followers: ${e(l).followers??""}`),pe(S,`${e(J)??""} svelte-1axzuq2`),I(he,e(l).role)}),h(t,r)});var X=o(V,4);ze(X,17,()=>e(a),ke,(t,r)=>{var c=Ee(),g=F(c);b(g,()=>e(r).post.replyTo,w=>{var x=De();y(x,"margin","5px 0"),y(x,"color","grey"),h(w,x)});var R=o(g,2);Ue(R,{get post(){return e(r)},redirectOnClick:"true",replied:()=>{z(k+"/home/post?postId="+e(r).post.id)},ondelete:w=>{s(a,f(e(a).filter(x=>x.post.id!==w)))}}),h(t,c)});var Y=o(X,2);b(Y,()=>e(m),t=>{var r=je();h(t,r)});var Z=o(Y,2);b(Z,()=>e(U)&&e(a).length!==0,t=>{var r=Be();h(t,r)});var ee=o(Z,2);b(ee,()=>e(P),t=>{var r=Ce();h(t,r)});var ve=o(ee,2);b(ve,()=>!e(m)&&e(U)&&e(a).length===0,t=>{var r=Oe();h(t,r)}),h(i,Q),be()}ye(["click"]);export{at as component};
