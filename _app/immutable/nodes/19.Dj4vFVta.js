import{a as s,t as l}from"../chunks/disclose-version.7XzoFcgQ.js";import{p as D,k as i,m as G,f as O,a as T,j as o,i as a,s as n}from"../chunks/runtime.CcS7PSai.js";import{i as c}from"../chunks/if.Bc-vB0Lk.js";import{e as V,i as q}from"../chunks/each.BmzqR-dK.js";import{p as f}from"../chunks/proxy.DTRB1kLB.js";import{o as K}from"../chunks/index-client.DhXnJF1D.js";import{g as I}from"../chunks/entry.PtJ6w72k.js";import{P as A}from"../chunks/public.CuSQJZaf.js";import{P as N,F as S}from"../chunks/FeedPost.DcBA4ZlU.js";import{i as B,j as E}from"../chunks/jwtRetriever.svelte.D-u_pXbS.js";import{s as Y}from"../chunks/shared.svelte.MLCOWDAd.js";var $=l('<article class="veryfy-account-banner svelte-bptypl"><a href="/account/verify-email" aria-label="Verify account" class="svelte-bptypl">Verify your account.</a> <p class="svelte-bptypl">Unverified accounts are deleted after a week (unless you have a membership or a special role).</p></article>'),H=l("<p>Loading...</p>"),J=l("<p>Reached end</p>"),Q=l("<p>Failed to load posts</p>"),W=l("<p>You came early to the party. Make a post!</p>"),X=l("<!> <!> <!> <!> <!> <!> <!>",1);function ce(F,M){D(M,!0);let r=i(f([])),h=0,p=i(!1),d=i(!1),m=i(!1),v;async function g(){if(console.log("loadMore"),!(a(p)||a(d))){o(p,!0),o(m,!1);try{const e=await fetch(A+`/posts?page=${h}&size=5`,{method:"GET",headers:B()?{Authorization:"Bearer "+E()}:{}}),t=await e.json();e.status!==200?o(m,!0):t.length!==0?(o(r,f([...a(r),...t])),h+=1):o(d,!0)}catch{o(m,!0)}o(p,!1)}}function _(){if(v&&v.disconnect(),a(r).length>0){const e=document.querySelector(".post:last-child");e&&(v=new IntersectionObserver(t=>{t[0].isIntersecting&&g()}),v.observe(e))}}K(()=>{g(),_(),B()&&U()}),G(()=>{_()});let y=i(!1),u=i(null);async function U(){const e=await fetch(A+"/private-user-info",{method:"GET",headers:{Authorization:"Bearer "+E()}}),t=await e.json();e.ok&&(o(u,f(t.email)),o(y,f(t.activationCode)))}var b=X(),P=O(b);c(P,()=>(a(y)||a(u)===null||a(u)==="")&&Y.isLoggedIn,e=>{var t=$();s(e,t)});var w=n(P,2);N(w,{onsend:e=>{I("/home/post/"+e)}});var k=n(w,2);V(k,17,()=>a(r),q,(e,t)=>{S(e,{get post(){return a(t)},redirectOnClick:"true",replied:()=>{I("/home/post/"+a(t).post.id)},ondelete:z=>{o(r,f(a(r).filter(R=>R.post.id!==z)))}})});var L=n(k,2);c(L,()=>a(p),e=>{var t=H();s(e,t)});var j=n(L,2);c(j,()=>a(d)&&a(r).length!==0,e=>{var t=J();s(e,t)});var C=n(j,2);c(C,()=>a(m),e=>{var t=Q();s(e,t)});var x=n(C,2);c(x,()=>!a(p)&&a(d)&&a(r).length===0,e=>{var t=W();s(e,t)}),s(F,b),T()}export{ce as component};
