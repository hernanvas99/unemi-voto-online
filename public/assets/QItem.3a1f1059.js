import{aj as L,l as v,x as u,F as c,H as q,n as R,M as S,s as I,ak as A,r as b,J as E,al as Q,R as j,a0 as K}from"./index.2c7c5b43.js";function M(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),L.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function P(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function z(e,t,n){if(n<=t)return t;const l=n-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}function D(e,t=2,n="0"){if(e==null)return e;const l=""+e;return l.length>=t?l:new Array(t-l.length+1).join(n)+l}var F=v({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=u(()=>parseInt(e.lines,10)),l=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=u(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>c("div",{style:i.value,class:l.value},q(t.default))}}),N=v({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:n.value},q(t.default))}}),T=v({name:"QItem",props:{...R,...S,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=E(),i=I(e,l),{hasLink:d,linkAttrs:k,linkClass:h,linkTag:y,navigateOnClick:g}=A(),s=b(null),r=b(null),m=u(()=>e.clickable===!0||d.value===!0||e.tag==="label"),o=u(()=>e.disable!==!0&&m.value===!0),_=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(o.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=u(()=>{if(e.insetLevel===void 0)return null;const a=l.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function B(a){o.value===!0&&(r.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===s.value?r.value.focus():document.activeElement===r.value&&s.value.focus()),g(a))}function x(a){if(o.value===!0&&Q(a,13)===!0){j(a),a.qKeyEvent=!0;const f=new MouseEvent("click",a);f.qKeyEvent=!0,s.value.dispatchEvent(f)}n("keyup",a)}function C(){const a=K(t.default,[]);return o.value===!0&&a.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:r})),a}return()=>{const a={ref:s,class:_.value,style:w.value,role:"listitem",onClick:B,onKeyup:x};return o.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,k.value)):m.value===!0&&(a["aria-disabled"]="true"),c(y.value,a,C())}}});export{T as Q,F as a,$ as b,N as c,M as d,P as e,z as n,D as p};
