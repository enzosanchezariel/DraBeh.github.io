import{a as s,t as l}from"./disclose-version.CLVP8wdO.js";import{p as q,k as c,m as H,a as J,s as p,i as t,j as o,c as i,t as U,r as n}from"./runtime.OFQIcp2P.js";import{s as j}from"./render.BVhLVIDF.js";import{i as _}from"./if.CxsERAfj.js";import{e as Q,i as V}from"./each._uhWAVV4.js";import{s as W}from"./attributes.CGWwtoYz.js";import{p as B}from"./proxy.B9U5D_Zu.js";import{b as X}from"./this.DL9b0rlM.js";import{o as Y}from"./index-client.DzRFANZT.js";import{b as R}from"./paths.Dxl4Naed.js";import{P as T}from"./public.CHZCeYTi.js";import{i as Z,j as z}from"./jwtRetriever.svelte.eYKYCOXx.js";import{s as E}from"./shared.svelte.Crem28hc.js";var tt=l('<div><a aria-label="Notification link" class="svelte-1nl07fl"><div class="notif svelte-1nl07fl"><strong> </strong> <p class="svelte-1nl07fl"> </p></div></a></div>'),et=l("<p>Loading...</p>"),at=l("<p>Reached end</p>"),ot=l("<p>Failed to load notifications</p>"),rt=l("<p>No notifications</p>"),st=l('<div class="notifications svelte-1nl07fl"><!> <!> <!> <!> <!></div>');function bt(O,P){q(P,!0);let r=c(B([])),N=0,f=c(!1),d=c(!1),v=c(!1),m;async function C(){try{(await fetch(T+"/notifications/mark-read",{method:"POST",headers:{Authorization:"Bearer "+z()}})).status===200&&E.cachedUserData&&(E.cachedUserData.lastNotificationsSeenAt=new Date().toISOString())}catch{}}async function w(){if(!(t(f)||t(d))){o(f,!0),o(v,!1);try{const e=await fetch(T+`/notifications?page=${N}&size=5`,{method:"GET",headers:{Authorization:"Bearer "+z()}}),a=await e.json();e.status!==200?o(v,!0):(a.length!==0?(o(r,B([...t(r),...a])),N+=1):o(d,!0),C())}catch{o(v,!0)}o(f,!1)}}let u=c(void 0);function D(){m&&m.disconnect(),t(r).length>0&&t(u)&&(m=new IntersectionObserver(e=>{e[0].isIntersecting&&w()}),m.observe(t(u)))}H(()=>{D()}),Y(()=>{Z()&&(D(),w())});function F(e){return new Intl.DateTimeFormat("en-US",{dateStyle:"short",timeStyle:"short"}).format(new Date(e))}var g=st(),x=i(g);Q(x,17,()=>t(r),V,(e,a)=>{var h=tt(),b=i(h),A=i(b),I=i(A),G=i(I,!0);U(()=>j(G,F(t(a).creationDateTime))),n(I);var L=p(I,2),K=i(L,!0);n(L),n(A),n(b),n(h),X(h,$=>o(u,$),()=>t(u)),U(()=>{W(b,"href",t(a).postId!==null?R+"/home/post?postId="+t(a).postId:t(a).userInvolved!==null?R+"/home/user?userId="+t(a).userInvolved:null),j(K,t(a).text)}),s(e,h)});var y=p(x,2);_(y,()=>t(f),e=>{var a=et();s(e,a)});var S=p(y,2);_(S,()=>t(d)&&t(r).length!==0,e=>{var a=at();s(e,a)});var k=p(S,2);_(k,()=>t(v),e=>{var a=ot();s(e,a)});var M=p(k,2);_(M,()=>!t(f)&&t(d)&&t(r).length===0,e=>{var a=rt();s(e,a)}),n(g),s(O,g),J()}export{bt as N};
