import{a as y,t as q}from"../chunks/disclose-version.7XzoFcgQ.js";import{p as C,s as w,f as b,t as _,a as x,j as i,k as c,c as l,r as p,l as g,i as h}from"../chunks/runtime.CcS7PSai.js";import{s as j}from"../chunks/render.CfWg8y1S.js";import{p as u}from"../chunks/proxy.DTRB1kLB.js";import{o as k}from"../chunks/index-client.DhXnJF1D.js";import{g as A}from"../chunks/entry.PtJ6w72k.js";import{P as D}from"../chunks/public.CuSQJZaf.js";import{i as U,j as B}from"../chunks/jwtRetriever.svelte.D-u_pXbS.js";var L=q('<h1>Account settings</h1> <a href="/account/names" class="option svelte-1h4graq" role="button"><strong>Change username or nickname</strong> <p class="svelte-1h4graq">Uh, basically for changing your username or nickname.</p></a> <a href="/account/avatar" class="option svelte-1h4graq" role="button"><strong>Change avatar</strong> <p class="svelte-1h4graq">Change the avatar that appears as your profile picture.</p></a> <a href="/account/verify-email" class="option svelte-1h4graq" role="button"><strong> </strong> <p class="svelte-1h4graq">Change the email associated with your account.</p></a> <a href="/account/change-password" class="option svelte-1h4graq" role="button"><strong>Change password</strong> <p class="svelte-1h4graq">Here you can... change your password.</p></a> <a href="/account/delete" class="option svelte-1h4graq" role="button"><strong>Delete account</strong> <p class="svelte-1h4graq">Delete your account and all data associated with it.</p></a>',1);function M(m,f){C(f,!0),k(()=>{U()||A("/account/login",{replaceState:!0}),v()});let a=c(""),t=c("");async function v(){const r=await fetch(D+"/private-user-info",{method:"GET",headers:{Authorization:"Bearer "+B()}}),n=await r.json();r.ok&&(i(a,u(n.email)),i(t,u(n.activationCode)))}var e=L(),o=w(b(e),6),s=l(o),d=l(s);_(()=>j(d,`${(h(a)?h(t)?"Verify":"Change":"Add")??""} email`)),p(s),g(2),p(o),g(4),y(m,e),x()}export{M as component};
