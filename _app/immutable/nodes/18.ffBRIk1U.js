import{c as L,a as g,t as P}from"../chunks/disclose-version.7XzoFcgQ.js";import{p as ee,f as O,a as te,j as t,i as e,s as a,c as s,t as q,k as v,r as l,l as re}from"../chunks/runtime.CcS7PSai.js";import{d as ae,e as G,s as J}from"../chunks/render.CfWg8y1S.js";import{i as A}from"../chunks/if.Bc-vB0Lk.js";import{r as K}from"../chunks/attributes.B2B5KGyN.js";import{s as Y}from"../chunks/style.PwPRnE0L.js";import{t as w,f as j,s as oe}from"../chunks/index.D4VyEPYp.js";import{b as $}from"../chunks/input.RtaRc4WU.js";import{p as F}from"../chunks/proxy.DTRB1kLB.js";import{o as ie}from"../chunks/index-client.DhXnJF1D.js";import{g as ne}from"../chunks/entry.PtJ6w72k.js";import{P as M}from"../chunks/public.CuSQJZaf.js";import{E as H}from"../chunks/ErrorArticle.onCvV9Yg.js";import{i as se,j as N}from"../chunks/jwtRetriever.svelte.D-u_pXbS.js";import"../chunks/shared.svelte.MLCOWDAd.js";var le=P('<p class="error-tip">This is the current verified email</p>'),ce=(U,S,o)=>{t(S,!1),t(o,1)},fe=P("<a>I already have a code.</a>"),me=P('<div><article><strong> </strong> <footer><form><label for="email">Email</label> <input type="email" id="email" name="email" required> <!> <button type="submit">Accept</button></form> <!></footer></article>   <!> <p>Unverified accounts are deleted after a week.</p> <p>If you are changing your email, your account becomes unverified until you enter the verification code (unless you have a membership or a special role).</p></div>'),ue=(U,S,o)=>{t(S,!0),t(o,0)},de=P('<article><strong>Verify email</strong> <footer><p>Enter the verification code that has been sent to your email (<strong> </strong>).   <a>Is the email incorrect?</a></p> <form><label for="code">Verification code</label> <input id="code" name="code" required> <button type="submit">Accept</button></form> <!></footer></article>'),pe=()=>{history.back()},ve=P('<article><strong>Email verified</strong> <footer><p>Your email has been verified successfully</p> <button type="submit">Accept</button></footer></article>');function Te(U,S){ee(S,!0);let o=v(!1),C=v(""),b=v(""),y=v(""),T=v(""),_=v(0),V=v(""),D=v(!1),c=v(!1);ie(()=>{se()||ne("/account/login",{replaceState:!0}),W()});async function Q(n){n.preventDefault(),t(D,!0);const u={email:new FormData(n.target).get("email")};try{(await fetch(M+"/add-email",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+N()},body:JSON.stringify(u)})).ok?(t(o,!1),t(c,!1),t(_,1)):(t(C,"An error occurred."),t(o,!0))}catch{t(C,"Couldn't connect to the server."),t(o,!0)}t(D,!1)}async function W(){const n=await fetch(M+"/private-user-info",{method:"GET",headers:{Authorization:"Bearer "+N()}}),r=await n.json();n.ok&&(t(b,F(r.email)),t(y,F(r.email)),t(T,F(r.activationCode)))}async function X(n){n.preventDefault(),t(D,!0);const r=new FormData(n.target);try{(await fetch(M+"/verify-email",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+N()},body:r.get("code")})).ok?(t(o,!1),t(c,!1),t(_,2)):(t(C,"An error occurred."),t(o,!0),t(c,!0),t(_,0))}catch{t(C,"Couldn't connect to the server."),t(o,!0)}t(D,!1)}var R=L(),Z=O(R);A(Z,()=>e(_)===0,n=>{var r=me(),u=s(r),d=s(u),f=s(d);q(()=>J(f,`${(e(b)?e(T)?"Verify":"Change":"Add")??""} email`)),l(d);var k=a(d,2),m=s(k),i=a(s(m),2);K(i);var x=a(i,2);A(x,()=>e(b)&&e(b)===e(y)&&!e(T),p=>{var h=le();w(3,h,()=>oe,()=>({axis:"y",duration:500})),g(p,h)});var B=a(x,2);l(m);var E=a(m,2);A(E,()=>e(o),p=>{H(p,{get text(){return e(C)},removeAction:()=>{t(o,!1)}})}),l(k),l(u);var I=a(u,2);A(I,()=>e(b)&&e(T),p=>{var h=fe();h.__click=[ce,c,_],Y(h,"cursor","pointer"),g(p,h)}),re(4),l(r),q(()=>B.disabled=e(D)||!e(y)||e(b)!==null&&e(b)===e(y)&&!e(T)),G("submit",m,Q),$(i,()=>e(y),p=>t(y,p)),w(1,r,()=>j,()=>({x:e(c)?-1e3:1e3,duration:500,delay:500})),w(2,r,()=>j,()=>({x:e(c)?1e3:-1e3,duration:500})),g(n,r)},n=>{var r=L(),u=O(r);A(u,()=>e(_)===1,d=>{var f=de(),k=a(s(f),2),m=s(k),i=a(s(m)),x=s(i,!0);l(i);var B=a(i,2);B.__click=[ue,c,_],Y(B,"cursor","pointer"),l(m);var E=a(m,2),I=a(s(E),2);K(I);var p=a(I,2);l(E);var h=a(E,2);A(h,()=>e(o),z=>{H(z,{get text(){return e(C)},removeAction:()=>{t(o,!1)}})}),l(k),l(f),q(()=>{J(x,e(y)),p.disabled=e(V)===""||e(D)}),G("submit",E,X),$(I,()=>e(V),z=>t(V,z)),w(1,f,()=>j,()=>({x:e(c)?-1e3:1e3,duration:500,delay:500})),w(2,f,()=>j,()=>({x:e(c)?1e3:-1e3,duration:500})),g(d,f)},d=>{var f=L(),k=O(f);A(k,()=>e(_)===2,m=>{var i=ve(),x=a(s(i),2),B=a(s(x),2);B.__click=[pe],l(x),l(i),w(1,i,()=>j,()=>({x:e(c)?-1e3:1e3,duration:500,delay:500})),w(2,i,()=>j,()=>({x:e(c)?1e3:-1e3,duration:500})),g(m,i)},null,!0),g(d,f)},!0),g(n,r)}),g(U,R),te()}ae(["click"]);export{Te as component};
