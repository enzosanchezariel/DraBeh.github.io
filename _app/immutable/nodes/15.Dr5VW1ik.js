import{c as P,a as y,t as E}from"../chunks/disclose-version.D9m7xwQo.js";import{p as F,f as A,a as J,i as t,s,c as n,j as e,t as B,k,r as l}from"../chunks/runtime.DfkX_MRI.js";import{d as R,e as I}from"../chunks/render.C_RUzaBA.js";import{i as x}from"../chunks/if.Che8I7_Z.js";import{s as K}from"../chunks/attributes.Dy5-VJ7D.js";import{s as V}from"../chunks/style.PwPRnE0L.js";import{t as h,f as w}from"../chunks/index.BZ_PEADJ.js";import{g as z}from"../chunks/entry.BIT9139B.js";import{b as G}from"../chunks/paths.DkE6e-OB.js";import{a as H,P as L}from"../chunks/public.CuSQJZaf.js";import{E as O}from"../chunks/ErrorArticle.DqpzrGdp.js";import"../chunks/shared.svelte.BeaxiWn1.js";var Q=E('<div><article><strong>Recover account</strong> <footer><form><label for="email">Email</label> <input type="email" id="email" name="email" required> <button type="submit">Send recovery code</button></form> <!></footer></article> <p>You had a membership or a special role and have trouble recovering your account? <a>Send an email over here.</a></p></div>'),W=(D,C,a)=>{e(C,!0),e(a,0)},X=E('<article><strong>Change your password</strong> <footer><p>Enter the verification code that has been sent to your email.   <a>Is the email incorrect?</a></p> <form><label for="code">Verification code</label> <input type="text" id="code" name="code" required> <label for="password">Password</label> <input type="password" id="password" name="password" required> <label for="password-confirm">Confirm password</label> <input type="password" id="password-confirm" name="password-confirm" required> <button type="submit">Send recovery code</button></form> <!></footer></article>'),Z=()=>{z(G+"/account/login")},$=E('<article><strong>Password changed</strong> <footer><p>Your password has been verified successfully</p> <button type="submit">Accept</button></footer></article>');function fe(D,C){F(C,!0);let a=k(!1),u=k(""),b=k(0),_=k(!1),d=k(!1);async function j(m){e(_,!0),m.preventDefault();const r=new FormData(m.target),f={email:r.get("email")};try{(await fetch(L+"/recover",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})).ok?(e(a,!1),e(d,!1),T=r.get("email"),e(b,1)):(e(u,"An error occurred."),e(a,!0))}catch{e(u,"Couldn't connect to the server."),e(a,!0)}e(_,!1)}let T;async function M(m){e(_,!0),m.preventDefault();const r=new FormData(m.target),f={email:T,recoveryCode:r.get("code"),password:r.get("password")};if(r.get("password")===r.get("password-confirm"))try{(await fetch(L+"/recover/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})).ok?(e(a,!1),e(d,!1),e(b,2)):(e(u,"An error occurred."),e(a,!0))}catch{e(u,"Couldn't connect to the server."),e(a,!0)}else e(u,"Passwords do not match."),e(a,!0);e(_,!1)}var q=P(),N=A(q);x(N,()=>t(b)===0,m=>{var r=Q(),f=n(r),c=s(n(f),2),o=n(c),g=s(n(o),4);l(o);var v=s(o,2);x(v,()=>t(a),S=>{O(S,{get text(){return t(u)},removeAction:()=>{e(a,!1)}})}),l(c),l(f);var i=s(f,2),p=s(n(i));K(p,"href","mailto:"+H),l(i),l(r),B(()=>g.disabled=t(_)),I("submit",o,j),h(1,r,()=>w,()=>({x:t(d)?-1e3:1e3,duration:500,delay:500})),h(2,r,()=>w,()=>({x:t(d)?1e3:-1e3,duration:500})),y(m,r)},m=>{var r=P(),f=A(r);x(f,()=>t(b)===1,c=>{var o=X(),g=s(n(o),2),v=n(g),i=s(n(v));i.__click=[W,d,b],V(i,"cursor","pointer"),l(v);var p=s(v,2),S=s(n(p),12);l(p);var U=s(p,2);x(U,()=>t(a),Y=>{O(Y,{get text(){return t(u)},removeAction:()=>{e(a,!1)}})}),l(g),l(o),B(()=>S.disabled=t(_)),I("submit",p,M),h(1,o,()=>w,()=>({x:t(d)?-1e3:1e3,duration:500,delay:500})),h(2,o,()=>w,()=>({x:t(d)?1e3:-1e3,duration:500})),y(c,o)},c=>{var o=P(),g=A(o);x(g,()=>t(b)===2,v=>{var i=$(),p=s(n(i),2),S=s(n(p),2);S.__click=[Z],l(p),l(i),h(1,i,()=>w,()=>({x:t(d)?-1e3:1e3,duration:500,delay:500})),h(2,i,()=>w,()=>({x:t(d)?1e3:-1e3,duration:500})),y(v,i)},null,!0),y(c,o)},!0),y(m,r)}),y(D,q),J()}R(["click"]);export{fe as component};
