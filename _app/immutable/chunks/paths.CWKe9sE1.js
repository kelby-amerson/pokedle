import{n as l,d as q,l as k}from"./runtime.JnVdmd9I.js";import{s as v}from"./utils.TGFjQC3G.js";const c=[];function x(e,i){return{subscribe:z(e,i).subscribe}}function z(e,i=l){let n=null;const r=new Set;function u(t){if(k(e,t)&&(e=t,n)){const o=!c.length;for(const s of r)s[1](),c.push(s,e);if(o){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){u(t(e))}function b(t,o=l){const s=[t,o];return r.add(s),r.size===1&&(n=i(u,f)||l),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:u,update:f,subscribe:b}}function E(e,i,n){const r=!Array.isArray(e),u=r?[e]:e;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const f=i.length<2;return x(n,(b,t)=>{let o=!1;const s=[];let p=0,d=l;const _=()=>{if(p)return;d();const a=i(r?s[0]:s,b,t);f?b(a):d=typeof a=="function"?a:l},w=u.map((a,g)=>v(a,m=>{s[g]=m,p&=~(1<<g),o&&_()},()=>{p|=1<<g}));return o=!0,_(),function(){q(w),d(),o=!1}})}var h;const A=((h=globalThis.__sveltekit_hrwggq)==null?void 0:h.base)??"";var y;const S=((y=globalThis.__sveltekit_hrwggq)==null?void 0:y.assets)??A;export{S as a,A as b,E as d,x as r,z as w};
