import{a0 as N,a1 as re,a2 as ne,a3 as y,a4 as te,W as P,a5 as R,a6 as p,g as w,F,a7 as se,a8 as ie,C as G,v as T,N as W,m as J,a9 as ae,aa as fe,M as ue,L as j,ab as U,o as K,ac as B,w as Q,E as X,ad as le,ae as ce,b as L,y as oe,af as de,ag as ve,ah as _e,B as Y,ai as pe,f as $,aj as he,ak as be,al as k,am as we,an as H,ao as ye,ap as Pe,aq as me,V as xe,ar as S,c as A,a as ge}from"./runtime.DuyLQPOS.js";import{c as Ee}from"./store.C-UAlOMn.js";function E(e,r=null,s){if(typeof e!="object"||e===null||N in e)return e;const a=ie(e);if(a!==re&&a!==ne)return e;var n=new Map,f=G(e),v=y(0);f&&n.set("length",y(e.length));var d;return new Proxy(e,{defineProperty(l,t,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&te();var u=n.get(t);return u===void 0?(u=y(i.value),n.set(t,u)):P(u,E(i.value,d)),!0},deleteProperty(l,t){var i=n.get(t);if(i===void 0)t in l&&n.set(t,y(p));else{if(f&&typeof t=="string"){var u=n.get("length"),c=Number(t);Number.isInteger(c)&&c<u.v&&P(u,c)}P(i,p),V(v)}return!0},get(l,t,i){var h;if(t===N)return e;var u=n.get(t),c=t in l;if(u===void 0&&(!c||(h=R(l,t))!=null&&h.writable)&&(u=y(E(c?l[t]:p,d)),n.set(t,u)),u!==void 0){var o=w(u);return o===p?void 0:o}return Reflect.get(l,t,i)},getOwnPropertyDescriptor(l,t){var i=Reflect.getOwnPropertyDescriptor(l,t);if(i&&"value"in i){var u=n.get(t);u&&(i.value=w(u))}else if(i===void 0){var c=n.get(t),o=c==null?void 0:c.v;if(c!==void 0&&o!==p)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return i},has(l,t){var o;if(t===N)return!0;var i=n.get(t),u=i!==void 0&&i.v!==p||Reflect.has(l,t);if(i!==void 0||F!==null&&(!u||(o=R(l,t))!=null&&o.writable)){i===void 0&&(i=y(u?E(l[t],d):p),n.set(t,i));var c=w(i);if(c===p)return!1}return u},set(l,t,i,u){var I;var c=n.get(t),o=t in l;if(f&&t==="length")for(var h=i;h<c.v;h+=1){var b=n.get(h+"");b!==void 0?P(b,p):h in l&&(b=y(p),n.set(h+"",b))}c===void 0?(!o||(I=R(l,t))!=null&&I.writable)&&(c=y(void 0),P(c,E(i,d)),n.set(t,c)):(o=c.v!==p,P(c,E(i,d)));var m=Reflect.getOwnPropertyDescriptor(l,t);if(m!=null&&m.set&&m.set.call(u,i),!o){if(f&&typeof t=="string"){var D=n.get("length"),x=Number(t);Number.isInteger(x)&&x>=D.v&&P(D,x+1)}V(v)}return!0},ownKeys(l){w(v);var t=Reflect.ownKeys(l).filter(c=>{var o=n.get(c);return o===void 0||o.v!==p});for(var[i,u]of n)u.v!==p&&!(i in l)&&t.push(i);return t},setPrototypeOf(){se()}})}function V(e,r=1){P(e,e.v+r)}function ee(e){throw new Error("lifecycle_outside_component")}function Le(e,r,s,a=null,n=!1){T&&W();var f=e,v=null,d=null,l=null,t=n?X:0;J(()=>{if(l===(l=!!r()))return;let i=!1;if(T){const u=f.data===ae;l===u&&(f=fe(),ue(f),j(!1),i=!0)}l?(v?U(v):v=K(()=>s(f)),d&&B(d,()=>{d=null})):(d?U(d):a&&(d=K(()=>a(f))),v&&B(v,()=>{v=null})),i&&j(!0)},t),T&&(f=Q)}function qe(e,r,s){T&&W();var a=e,n,f;J(()=>{n!==(n=r())&&(f&&(B(f),f=null),n&&(f=K(()=>s(a,n))))},X),T&&(a=Q)}function Z(e,r){return e===r||(e==null?void 0:e[N])===r}function Ce(e={},r,s,a){return le(()=>{var n,f;return ce(()=>{n=f,f=[],L(()=>{e!==s(...f)&&(r(e,...f),n&&Z(s(...n),e)&&r(null,...n))})}),()=>{oe(()=>{f&&Z(s(...f),e)&&r(null,...f)})}}),e}function Fe(e,r=1){const s=e();return e(s+r),s}const Re={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ke(e,r,s){return new Proxy({props:e,exclude:r},Re)}const Ie={get(e,r){if(!e.exclude.includes(r))return w(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,s){return r in e.special||(e.special[r]=Se({get[r](){return e.props[r]}},r,k)),e.special[r](s),H(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),H(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Be(e,r){return new Proxy({props:e,exclude:r,special:{},version:y(0)},Ie)}const Oe={get(e,r){let s=e.props.length;for(;s--;){let a=e.props[s];if(S(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,s){let a=e.props.length;for(;a--;){let n=e.props[a];S(n)&&(n=n());const f=R(n,r);if(f&&f.set)return f.set(s),!0}return!1},getOwnPropertyDescriptor(e,r){let s=e.props.length;for(;s--;){let a=e.props[s];if(S(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const n=R(a,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){for(let s of e.props)if(S(s)&&(s=s()),s!=null&&r in s)return!0;return!1},ownKeys(e){const r=[];for(let s of e.props){S(s)&&(s=s());for(const a in s)r.includes(a)||r.push(a)}return r}};function Me(...e){return new Proxy({props:e},Oe)}function z(e){for(var r=F,s=F;r!==null&&!(r.f&(ve|_e));)r=r.parent;try{return Y(r),e()}finally{Y(s)}}function Se(e,r,s,a){var M;var n=(s&ye)!==0,f=(s&pe)!==0,v=(s&Pe)!==0,d=(s&me)!==0,l=!1,t;v?[t,l]=Ee(()=>e[r]):t=e[r];var i=(M=R(e,r))==null?void 0:M.set,u=a,c=!0,o=!1,h=()=>(o=!0,c&&(c=!1,d?u=L(a):u=a),u);t===void 0&&a!==void 0&&(i&&f&&de(),t=h(),i&&i(t));var b;if(f)b=()=>{var _=e[r];return _===void 0?h():(c=!0,o=!1,_)};else{var m=z(()=>(n?$:he)(()=>e[r]));m.f|=be,b=()=>{var _=w(m);return _!==void 0&&(u=void 0),_===void 0?u:_}}if(!(s&k))return b;if(i){var D=e.$$legacy;return function(_,g){return arguments.length>0?((!f||!g||D||l)&&i(g?b():_),_):b()}}var x=!1,I=!1,q=xe(t),O=z(()=>$(()=>{var _=b(),g=w(q);return x?(x=!1,I=!0,g):(I=!1,q.v=_)}));return n||(O.equals=we),function(_,g){if(arguments.length>0){const C=g?w(O):f&&v?E(_):_;return O.equals(C)||(x=!0,P(q,C),o&&u!==void 0&&(u=C),L(()=>w(O))),_}return w(O)}}function je(e){A===null&&ee(),A.l!==null?De(A).m.push(e):ge(()=>{const r=L(e);if(typeof r=="function")return r})}function Te(e,r,{bubbles:s=!1,cancelable:a=!1}={}){return new CustomEvent(e,{detail:r,bubbles:s,cancelable:a})}function Ue(){const e=A;return e===null&&ee(),(r,s,a)=>{var f;const n=(f=e.s.$$events)==null?void 0:f[r];if(n){const v=G(n)?n.slice():[n],d=Te(r,s,a);for(const l of v)l.call(e.x,d);return!d.defaultPrevented}return!0}}function De(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{E as a,Ce as b,qe as c,Ue as d,Le as i,Be as l,je as o,Se as p,Ke as r,Me as s,Fe as u};
