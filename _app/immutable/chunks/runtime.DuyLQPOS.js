var On=Array.isArray,gn=Array.from,xn=Object.defineProperty,it=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Nn=Object.prototype,Cn=Array.prototype,Jt=Object.getPrototypeOf;function bn(t){return typeof t=="function"}const qn=()=>{};function Pn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const A=2,ht=4,Y=8,rt=16,w=32,z=64,D=128,V=256,p=512,S=1024,b=2048,C=4096,j=8192,Wt=16384,dt=32768,Fn=65536,Xt=1<<18,Et=1<<19,ft=Symbol("$state"),Ln=Symbol("");function yt(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Qt(t,this.v)}function tn(t){throw new Error("effect_in_teardown")}function nn(){throw new Error("effect_in_unowned_derived")}function rn(t){throw new Error("effect_orphan")}function en(){throw new Error("effect_update_depth_exceeded")}function Mn(){throw new Error("hydration_failed")}function Hn(t){throw new Error("props_invalid_value")}function Yn(){throw new Error("state_descriptors_fixed")}function jn(){throw new Error("state_prototype_fixed")}function sn(){throw new Error("state_unsafe_local_read")}function an(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function Bn(t){return Tt(et(t))}function ln(t,n=!1){var e;const r=et(t);return n||(r.equals=wt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Un(t,n=!1){return Tt(ln(t,n))}function Tt(t){return o!==null&&o.f&A&&(y===null?Tn([t]):y.push(t)),t}function At(t,n){return o!==null&&ut()&&o.f&(A|rt)&&(y===null||!y.includes(t))&&an(),un(t,n)}function un(t,n){return t.equals(n)||(t.v=n,t.version=Bt(),mt(t,S),ut()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,S),J(u)):I===null?An([t]):I.push(t))),n}function mt(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&S||!e&&l===u||(E(l,n),i&(p|D)&&(i&A?mt(l,b):J(l)))}}const Vn=1,Gn=2,Kn=4,$n=8,Zn=16,zn=1,Jn=2,Wn=4,Xn=8,Qn=16,tr=4,nr=1,rr=2,on="[",fn="[!",_n="]",It={},er=Symbol(),sr="http://www.w3.org/2000/svg";function St(t){console.warn("hydration_mismatch")}let R=!1;function ar(t){R=t}let d;function L(t){if(t===null)throw St(),It;return d=t}function lr(){return L(O(d))}function ur(t){if(R){if(O(d)!==null)throw St(),It;d=t}}function or(t=1){if(R){for(var n=t,r=d;n--;)r=O(r);d=r}}function ir(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===_n){if(t===0)return n;t-=1}else(r===on||r===fn)&&(t+=1)}var e=O(n);n.remove(),n=e}}var _t,kt,Rt;function fr(){if(_t===void 0){_t=window;var t=Element.prototype,n=Node.prototype;kt=it(n,"firstChild").get,Rt=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function W(t=""){return document.createTextNode(t)}function X(t){return kt.call(t)}function O(t){return Rt.call(t)}function _r(t,n){if(!R)return X(t);var r=X(d);if(r===null)r=d.appendChild(W());else if(n&&r.nodeType!==3){var e=W();return r==null||r.before(e),L(e),e}return L(r),r}function cr(t,n){if(!R){var r=X(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function vr(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=O(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var a=W();return e==null||e.before(a),L(a),a}return L(e),e}function pr(t){t.textContent=""}function cn(t){var n=A|S;u===null?n|=D:u.f|=Et;const r={children:null,ctx:f,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&A){var e=o;(e.children??(e.children=[])).push(r)}return r}function hr(t){const n=cn(t);return n.equals=wt,n}function Dt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&A?st(e):P(e)}}}function Ot(t){var n,r=u;Z(t.parent);try{Dt(t),n=Ut(t)}finally{Z(r)}return n}function gt(t){var n=Ot(t),r=(g||t.f&D)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Bt())}function st(t){Dt(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function xt(t){u===null&&o===null&&rn(),o!==null&&o.f&D&&nn(),lt&&tn()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{ct(!0),B(l),l.f|=Wt}catch(c){throw P(l),c}finally{ct(i)}}else n!==null&&J(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Et)===0;if(!T&&!s&&e&&(a!==null&&vn(l,a),o!==null&&o.f&A)){var m=o;(m.children??(m.children=[])).push(l)}return l}function dr(t){const n=q(Y,null,!1);return E(n,p),n.teardown=t,n}function Er(t){xt();var n=u!==null&&(u.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Nt(t);return e}}function yr(t){return xt(),at(t)}function wr(t){const n=q(z,t,!0);return()=>{P(n)}}function Nt(t){return q(ht,t,!1)}function Tr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=at(()=>{t(),!e.ran&&(e.ran=!0,At(r.l.r2,!0),Rn(n))})}function Ar(){var t=f;at(()=>{if(Zt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),F(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function at(t){return q(Y,t,!0)}function mr(t){return pn(t)}function pn(t,n=0){return q(Y|rt|n,t,!0)}function Ir(t,n=!0){return q(Y|w,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=lt,e=o;vt(!0),$(null);try{n.call(null)}finally{vt(r),$(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)st(n[r])}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function hn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}qt(t,n&&!r),bt(t),H(t,0),E(t,j);var l=t.transitions;if(l!==null)for(const T of l)T.stop();Ct(t);var i=t.parent;i!==null&&i.first!==null&&Pt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Pt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Sr(t,n){var r=[];Ft(t,r,!0),dn(r,()=>{P(t),n&&n()})}function dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&dt)!==0||(e.f&w)!==0;Ft(e,n,a?r:!1),e=s}}}function kr(t){Lt(t,!0)}function Lt(t,n){if(t.f&C){F(t)&&B(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&w)!==0;Lt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const En=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,Q=[],tt=[];function Mt(){G=!1;const t=Q.slice();Q=[],pt(t)}function Ht(){K=!1;const t=tt.slice();tt=[],pt(t)}function Rr(t){G||(G=!0,queueMicrotask(Mt)),Q.push(t)}function Dr(t){K||(K=!0,En(Ht)),tt.push(t)}function yn(){G&&Mt(),K&&Ht()}const Yt=0,wn=1;let U=Yt,M=!1,x=!1,lt=!1;function ct(t){x=t}function vt(t){lt=t}let k=[],N=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let y=null;function Tn(t){y=t}let _=null,h=0,I=null;function An(t){I=t}let jt=0,g=!1,f=null;function Bt(){return++jt}function ut(){return f!==null&&f.l===null}function F(t){var l,i;var n=t.f;if(n&S)return!0;if(n&b){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(F(a)&&gt(a),e&&u!==null&&!g&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function mn(t,n,r){throw t}function Ut(t){var ot;var n=_,r=h,e=I,s=o,a=g,l=y,i=f,T=t.f;_=null,h=0,I=null,o=T&(w|z)?null:t,g=!x&&(T&D)!==0,y=null,f=t.ctx;try{var m=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!g)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return m}finally{_=n,h=r,I=e,o=s,g=a,y=l,f=i}}function In(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&A&&(_===null||!_.includes(n))&&(E(n,b),n.f&(D|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=u;u=t;try{n&rt?hn(t):qt(t),bt(t),Ct(t);var e=Ut(t);t.teardown=typeof e=="function"?e:null,t.version=jt}catch(s){mn(s)}finally{u=r}}}function Vt(){N>1e3&&(N=0,en()),N++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=x;x=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Kt(s,a),Sn(a)}}finally{x=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Pt(e):e.fn=null))}}function kn(){if(M=!1,N>1001)return;const t=k;k=[],Gt(t),M||(N=0)}function J(t){U===Yt&&(M||(M=!0,queueMicrotask(kn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|w)){if(!(r&p))return;n.f^=p}}k.push(n)}function Kt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&Y){a?r.f^=p:F(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var m=v.next;if(m!==null){r=m;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Kt(i,n)}function $t(t){var n=U,r=k;try{Vt();const s=[];U=wn,k=s,M=!1,Gt(r);var e=t==null?void 0:t();return yn(),(k.length>0||s.length>0)&&$t(),N=0,e}finally{U=n,k=r}}async function Or(){await Promise.resolve(),$t()}function Zt(t){var i;var n=t.f,r=(n&A)!==0;if(r&&n&j){var e=Ot(t);return st(t),e}if(o!==null){y!==null&&y.includes(t)&&sn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&u!==null&&u.f&p&&!(u.f&w)&&I.includes(t)&&(E(u,S),J(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,F(a)&&gt(a)),t.v}function Rn(t){const n=o;try{return o=null,t()}finally{o=n}}const Dn=~(S|b|p);function E(t,n){t.f=t.f&Dn|n}function gr(t,n=1){var r=+Zt(t);return At(t,r+n),r}function xr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:et(!1)})}function Nr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),$(a.reaction),Nt(a.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Jt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Bn as $,$ as A,Z as B,On as C,o as D,dt as E,u as F,fr as G,X as H,on as I,O as J,It as K,ar as L,L as M,lr as N,_n as O,St as P,Mn as Q,pr as R,gn as S,wr as T,W as U,ln as V,At as W,nr as X,rr as Y,$t as Z,Or as _,Er as a,ft as a0,Nn as a1,Cn as a2,et as a3,Yn as a4,it as a5,er as a6,jn as a7,Jt as a8,fn as a9,$n as aA,sr as aB,zt as aC,Dr as aD,Ln as aE,rt as aF,Wt as aG,tr as aH,ut as aI,Tr as aJ,Ar as aK,Un as aL,or as aM,ir as aa,kr as ab,Sr as ac,Nt as ad,at as ae,Hn as af,w as ag,z as ah,Jn as ai,hr as aj,Fn as ak,Wn as al,wt as am,gr as an,zn as ao,Xn as ap,Qn as aq,bn as ar,Kn as as,C as at,Vn as au,un as av,Gn as aw,Zn as ax,Ft as ay,dn as az,Rn as b,f as c,pt as d,Cr as e,cn as f,Zt as g,cr as h,Nr as i,_r as j,ur as k,Qt as l,pn as m,qn as n,Ir as o,xr as p,P as q,Pn as r,vr as s,mr as t,yr as u,R as v,d as w,dr as x,Rr as y,xn as z};
