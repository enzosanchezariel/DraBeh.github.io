import{b as j,h as g,Y as k,Z as ee,_ as ae,$ as re,a0 as F,a1 as ne,a2 as W,a3 as M,g as N,a4 as D,a5 as G,d as J,a6 as fe,D as ie,T as X,a7 as L,a8 as Z,a9 as O,aa as le,ab as se,ac as ue,e as te,ad as K,ae as ve,af as de,ag as _e,ah as ce,W as oe,ai as $,aj as he,ak as Ee}from"./runtime.CcS7PSai.js";function xe(l,e){return e}function pe(l,e,a,t){for(var v=[],_=e.length,u=0;u<_;u++)le(e[u].e,v,!0);var c=_>0&&v.length===0&&a!==null;if(c){var T=a.parentNode;se(T),T.append(a),t.clear(),m(l,e[0].prev,e[_-1].next)}ue(v,()=>{for(var h=0;h<_;h++){var d=e[h];c||(t.delete(d.k),m(l,d.prev,d.next)),te(d.e,!c)}})}function me(l,e,a,t,v,_=null){var u=l,c={flags:e,items:new Map,first:null},T=(e&K)!==0;if(T){var h=l;u=g?k(ve(h)):h.appendChild(ee())}g&&ae();var d=null,C=!1;j(()=>{var r=a(),s=re(r)?r:r==null?[]:F(r),i=s.length;if(C&&i===0)return;C=i===0;let I=!1;if(g){var E=u.data===ne;E!==(i===0)&&(u=W(),k(u),M(!1),I=!0)}if(g){for(var p=null,A,o=0;o<i;o++){if(N.nodeType===8&&N.data===de){u=N,I=!0,M(!1);break}var n=s[o],f=t(n,o);A=P(N,c,p,null,n,f,o,v,e),c.items.set(f,A),p=A}i>0&&k(W())}if(!g){var H=_e;Te(s,c,u,v,e,(H.f&D)!==0,t)}_!==null&&(i===0?d?G(d):d=J(()=>_(u)):d!==null&&fe(d,()=>{d=null})),I&&M(!0),a()}),g&&(u=N)}function Te(l,e,a,t,v,_,u){var Y,V,q,B;var c=(v&ce)!==0,T=(v&(L|O))!==0,h=l.length,d=e.items,C=e.first,r=C,s,i=null,I,E=[],p=[],A,o,n,f;if(c)for(f=0;f<h;f+=1)A=l[f],o=u(A,f),n=d.get(o),n!==void 0&&((Y=n.a)==null||Y.measure(),(I??(I=new Set)).add(n));for(f=0;f<h;f+=1){if(A=l[f],o=u(A,f),n=d.get(o),n===void 0){var H=r?r.e.nodes_start:a;i=P(H,e,i,i===null?e.first:i.next,A,o,f,t,v),d.set(o,i),E=[],p=[],r=i.next;continue}if(T&&Ae(n,A,f,v),n.e.f&D&&(G(n.e),c&&((V=n.a)==null||V.unfix(),(I??(I=new Set)).delete(n))),n!==r){if(s!==void 0&&s.has(n)){if(E.length<p.length){var b=p[0],x;i=b.prev;var y=E[0],R=E[E.length-1];for(x=0;x<E.length;x+=1)z(E[x],b,a);for(x=0;x<p.length;x+=1)s.delete(p[x]);m(e,y.prev,R.next),m(e,i,y),m(e,R,b),r=b,i=R,f-=1,E=[],p=[]}else s.delete(n),z(n,r,a),m(e,n.prev,n.next),m(e,n,i===null?e.first:i.next),m(e,i,n),i=n;continue}for(E=[],p=[];r!==null&&r.k!==o;)(_||!(r.e.f&D))&&(s??(s=new Set)).add(r),p.push(r),r=r.next;if(r===null)continue;n=r}E.push(n),i=n,r=n.next}if(r!==null||s!==void 0){for(var w=s===void 0?[]:F(s);r!==null;)(_||!(r.e.f&D))&&w.push(r),r=r.next;var S=w.length;if(S>0){var Q=v&K&&h===0?a:null;if(c){for(f=0;f<S;f+=1)(q=w[f].a)==null||q.measure();for(f=0;f<S;f+=1)(B=w[f].a)==null||B.fix()}pe(e,w,Q,d)}}c&&ie(()=>{var U;if(I!==void 0)for(n of I)(U=n.a)==null||U.apply()}),X.first=e.first&&e.first.e,X.last=i&&i.e}function Ae(l,e,a,t){t&L&&Z(l.v,e),t&O?Z(l.i,a):l.i=a}function P(l,e,a,t,v,_,u,c,T){var h=(T&L)!==0,d=(T&he)===0,C=h?d?oe(v):$(v):v,r=T&O?$(u):u,s={i:r,v:C,k:_,a:null,e:null,prev:a,next:t};try{return s.e=J(()=>c(l,C,r),g),s.e.prev=a&&a.e,s.e.next=t&&t.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),t!==null&&(t.prev=s,t.e.prev=s.e),s}finally{}}function z(l,e,a){for(var t=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==t;){var u=Ee(_);v.before(_),_=u}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{me as e,xe as i};
