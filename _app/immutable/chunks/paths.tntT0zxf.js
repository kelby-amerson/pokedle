import{n as l,d as w,l as k}from"./runtime.DwSah60A.js";import{s as v}from"./utils.DK664Fln.js";const c=[];function x(e,i){return{subscribe:z(e,i).subscribe}}function z(e,i=l){let n=null;const r=new Set;function u(t){if(k(e,t)&&(e=t,n)){const o=!c.length;for(const s of r)s[1](),c.push(s,e);if(o){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function f(t){u(t(e))}function b(t,o=l){const s=[t,o];return r.add(s),r.size===1&&(n=i(u,f)||l),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:u,update:f,subscribe:b}}function E(e,i,n){const r=!Array.isArray(e),u=r?[e]:e;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const f=i.length<2;return x(n,(b,t)=>{let o=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const a=i(r?s[0]:s,b,t);f?b(a):p=typeof a=="function"?a:l},m=u.map((a,_)=>v(a,q=>{s[_]=q,d&=~(1<<_),o&&g()},()=>{d|=1<<_}));return o=!0,g(),function(){w(m),p(),o=!1}})}var h;const A=((h=globalThis.__sveltekit_fqsrod)==null?void 0:h.base)??"";var y;const S=((y=globalThis.__sveltekit_fqsrod)==null?void 0:y.assets)??A;export{S as a,A as b,E as d,x as r,z as w};
