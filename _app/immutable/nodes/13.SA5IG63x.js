import{a as L,t as _}from"../chunks/disclose-version.7XzoFcgQ.js";import{p as A,f as C,a as E,j as e,s as c,c as l,i as d,k as g,r as b,l as P}from"../chunks/runtime.CcS7PSai.js";import{e as S}from"../chunks/render.CfWg8y1S.js";import{i as j}from"../chunks/if.Bc-vB0Lk.js";import{o as k}from"../chunks/index-client.DhXnJF1D.js";import{P as I}from"../chunks/public.CuSQJZaf.js";import{i as w,s as U}from"../chunks/jwtRetriever.svelte.D-u_pXbS.js";import{g as h}from"../chunks/entry.PtJ6w72k.js";import"../chunks/shared.svelte.MLCOWDAd.js";import{E as q}from"../chunks/ErrorArticle.onCvV9Yg.js";var B=_(`<article><strong>Login</strong> <footer><form><label for="username">Username</label> <input type="text" id="username" name="username" required> <label for="password">Password</label> <input type="password" id="password" name="password" required> <button type="submit">Login</button></form> <!></footer></article> <p>Don't have an account yet? <a href="/account/register">Sign up.</a></p> <p>Forgot your password? <a href="/account/recover">Recover account.</a></p>`,1);function G(v,y){A(y,!0);let t=g(""),r=g(!1);k(()=>{w()&&(e(t,"You are already logged in."),e(r,!0))});async function x(o){o.preventDefault();const p=new FormData(o.target),u={username:p.get("username"),password:p.get("password")};try{const a=await fetch(I+"/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!a.ok)a.status===401?e(t,"Invalid username or password."):e(t,"An error occurred."),e(r,!0);else{e(r,!1);const f=await a.text();f==="banned"?h("/about/ban/"+u.username):(U(f),w(),h("/home"))}}catch{e(t,"Couldn't connect to the server."),e(r,!0)}}var s=B(),n=C(s),i=c(l(n),2),m=l(i),D=c(m,2);j(D,()=>d(r),o=>{q(o,{get text(){return d(t)},removeAction:()=>{e(r,!1)}})}),b(i),b(n),P(4),S("submit",m,x),L(v,s),E()}export{G as component};
