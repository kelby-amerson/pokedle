import{n as l,d as q,l as k}from"./runtime.DwSah60A.js";import{s as v}from"./utils.DK664Fln.js";const c=[];function x(e,i){return{subscribe:z(e,i).subscribe}}function z(e,i=l){let r=null;const n=new Set;function a(t){if(k(e,t)&&(e=t,r)){const o=!c.length;for(const s of n)s[1](),c.push(s,e);if(o){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){a(t(e))}function b(t,o=l){const s=[t,o];return n.add(s),n.size===1&&(r=i(a,f)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:f,subscribe:b}}function E(e,i,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const f=i.length<2;return x(r,(b,t)=>{let o=!1;const s=[];let p=0,d=l;const g=()=>{if(p)return;d();const u=i(n?s[0]:s,b,t);f?b(u):d=typeof u=="function"?u:l},m=a.map((u,_)=>v(u,w=>{s[_]=w,p&=~(1<<_),o&&g()},()=>{p|=1<<_}));return o=!0,g(),function(){q(m),d(),o=!1}})}var h;const A=((h=globalThis.__sveltekit_59aa48)==null?void 0:h.base)??"";var y;const S=((y=globalThis.__sveltekit_59aa48)==null?void 0:y.assets)??A;export{S as a,A as b,E as d,x as r,z as w};
