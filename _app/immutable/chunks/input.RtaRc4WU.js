import{A as y,B as n,h as i,C as A,D as b}from"./runtime.CcS7PSai.js";import{l as k}from"./render.CfWg8y1S.js";import{i as B}from"./proxy.DTRB1kLB.js";function g(e,c,a=c){var v=y();k(e,"input",()=>{var r=u(e)?h(e.value):e.value;a(r),v&&r!==(r=c())&&(e.value=r??"")}),n(()=>{var r=c();if(i&&e.defaultValue!==e.value){a(u(e)?h(e.value):e.value);return}u(e)&&r===h(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}const _=new Set;function q(e,c,a,v,r=v){var d=a.getAttribute("type")==="checkbox",f=e;let m=!1;if(c!==null)for(var o of c)f=f[o]??(f[o]=[]);f.push(a),k(a,"change",()=>{var l=a.__value;d&&(l=t(f,l,a.checked)),r(l)},()=>r(d?[]:null)),n(()=>{var l=v();if(i&&a.defaultChecked!==a.checked){m=!0;return}d?(l=l||[],a.checked=l.includes(a.__value)):a.checked=B(a.__value,l)}),A(()=>{var l=f.indexOf(a);l!==-1&&f.splice(l,1)}),_.has(f)||(_.add(f),b(()=>{f.sort((l,s)=>l.compareDocumentPosition(s)===4?-1:1),_.delete(f)})),b(()=>{if(m){var l;if(d)l=t(f,l,a.checked);else{var s=f.find(w=>w.checked);l=s==null?void 0:s.__value}r(l)}})}function O(e,c,a=c){k(e,"change",()=>{var v=e.checked;a(v)}),c()==null&&a(!1),n(()=>{var v=c();e.checked=!!v})}function t(e,c,a){for(var v=new Set,r=0;r<e.length;r+=1)e[r].checked&&v.add(e[r].__value);return a||v.delete(c),Array.from(v)}function u(e){var c=e.type;return c==="number"||c==="range"}function h(e){return e===""?null:+e}export{q as a,g as b,O as c};
