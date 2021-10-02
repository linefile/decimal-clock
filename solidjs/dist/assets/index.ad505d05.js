import{t as l,c as p,o as _,i as f,a as v,b as m,F as h,S as y,d as g,r as N}from"./vendor.07743358.js";const M=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function $(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=$(t);fetch(t.href,e)}};M();const P=l("<h2>Decimal Clock</h2>"),S=l('<div id="short-hand"></div>'),O=l('<div id="long-hand"></div>'),A=l('<div id="second-hand"></div>'),D=l('<div id="clock-face"></div>'),F=l('<h1 id="clock-time"></h1>'),k=l('<div class="digit"></div>'),w=l("<div></div>"),L=[...Array(10)],b=[...Array(100)],I=()=>{const[a,c]=p(new Date),$=()=>(a().getHours()*3600+a().getMinutes()*60+a().getSeconds())*1e3+a().getMilliseconds(),o=()=>$()/864e5,t=()=>`${Math.floor(o()*10)}:${Math.floor(o()*1e3%100).toString().padStart(2,"0")}:${Math.floor(o()*1e5%100).toString().padStart(2,"0")}`;return _(()=>{let e;const r=()=>{c(new Date),e=requestAnimationFrame(r)};e=requestAnimationFrame(r),g(()=>{cancelAnimationFrame(e)})}),[P.cloneNode(!0),(()=>{const e=D.cloneNode(!0);return f(e,v(h,{each:L,children:(r,i)=>(()=>{const s=k.cloneNode(!0);return f(s,i),m(n=>{const d=50-Math.sin(Math.PI*i()/5)*40+"%",u=50+Math.cos(Math.PI*i()/5)*40+"%";return d!==n._v$&&s.style.setProperty("left",n._v$=d),u!==n._v$2&&s.style.setProperty("top",n._v$2=u),n},{_v$:void 0,_v$2:void 0}),s})()}),null),f(e,v(h,{each:b,children:(r,i)=>(()=>{const s=w.cloneNode(!0);return m(n=>{const d=i()%10==0?"large tick":"tick",u=`rotate(${i()*3.6}deg)`;return d!==n._v$3&&(s.className=n._v$3=d),u!==n._v$4&&s.style.setProperty("transform",n._v$4=u),n},{_v$3:void 0,_v$4:void 0}),s})()}),null),f(e,v(y,{get when(){return t()!==null},get children(){return[(()=>{const r=S.cloneNode(!0);return m(()=>r.style.setProperty("transform",`rotate(${o()*360+180}deg)`)),r})(),(()=>{const r=O.cloneNode(!0);return m(()=>r.style.setProperty("transform",`rotate(${o()*10%1*360+180}deg)`)),r})(),(()=>{const r=A.cloneNode(!0);return m(()=>r.style.setProperty("transform",`rotate(${o()*1e3%1*360+180}deg)`)),r})()]}}),null),e})(),(()=>{const e=F.cloneNode(!0);return f(e,t),e})()]};N(()=>v(I,{}),document.getElementById("root"));