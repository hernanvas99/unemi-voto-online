import{l as Te,n as Ve,s as Ke,r as _,an as Le,x as S,A as I,F as h,J as Ue,C as ze,ao as De,ap as Ne,i as re,aq as Qe,R as ne,E as Ie,P as Fe,ar as oe,d as J,_ as W,o as $,S as K,g as E,f as g,as as F,e as v,Q as fe,h as U,at as me,W as de,c as Be,au as se,av as je,aw as Me,ax as ce,U as Q,T as Oe,X as He}from"./index.2c7c5b43.js";import{Q as ue,a as Ge}from"./QTable.200aae8f.js";import{Q as Je}from"./QPage.152e8f99.js";import{u as be,A as B}from"./Api.b16e05d9.js";import{Q as We}from"./QSlideTransition.2e360e31.js";import{Q as ge}from"./QForm.8d724ed1.js";import{u as X}from"./useRolPermisos.72458214.js";import{u as Xe}from"./useHelpers.e401e0ad.js";import"./QList.f8aa654c.js";import"./QSelect.cd845e3e.js";import"./QItem.3a1f1059.js";import"./rtl.b51694b1.js";import"./use-fullscreen.36e0f58f.js";import"./index.2cf0d985.js";import"./auth-user.3faec0ee.js";const Ye=["none","strict","leaf","leaf-filtered"];var ve=Te({name:"QTree",props:{...Ve,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>Ye.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:n,emit:d}){const{proxy:y}=Ue(),{$q:m}=y,k=Ke(e,m),u=_({}),x=_(e.ticked||[]),s=_(e.expanded||[]);let R={};Le(()=>{R={}});const A=S(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(k.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),w=S(()=>e.selected!==void 0),C=S(()=>e.icon||m.iconSet.tree.icon),L=S(()=>e.controlColor||e.color),P=S(()=>e.textColor!==void 0?` text-${e.textColor}`:""),he=S(()=>{const a=e.selectedColor||e.color;return a?` text-${a}`:""}),ye=S(()=>e.filterMethod!==void 0?e.filterMethod:(a,t)=>{const l=t.toLowerCase();return a[e.labelKey]&&a[e.labelKey].toLowerCase().indexOf(l)>-1}),q=S(()=>{const a={},t=(l,r)=>{const i=l.tickStrategy||(r?r.tickStrategy:e.tickStrategy),c=l[e.nodeKey],f=l[e.childrenKey]&&l[e.childrenKey].length>0,T=l.disabled!==!0&&w.value===!0&&l.selectable!==!1,p=l.disabled!==!0&&l.expandable!==!1,we=i!=="none",N=i==="strict",te=i==="leaf-filtered",H=i==="leaf"||i==="leaf-filtered";let G=l.disabled!==!0&&l.tickable!==!1;H===!0&&G===!0&&r&&r.tickable!==!0&&(G=!1);let V=l.lazy;V===!0&&u.value[c]!==void 0&&Array.isArray(l[e.childrenKey])===!0&&(V=u.value[c]);const o={key:c,parent:r,isParent:f,lazy:V,disabled:l.disabled,link:l.disabled!==!0&&(T===!0||p===!0&&(f===!0||V===!0)),children:[],matchesFilter:e.filter?ye.value(l,e.filter):!0,selected:c===e.selected&&T===!0,selectable:T,expanded:f===!0?s.value.includes(c):!1,expandable:p,noTick:l.noTick===!0||N!==!0&&V&&V!=="loaded",tickable:G,tickStrategy:i,hasTicking:we,strictTicking:N,leafFilteredTicking:te,leafTicking:H,ticked:N===!0?x.value.includes(c):f===!0?!1:x.value.includes(c)};if(a[c]=o,f===!0&&(o.children=l[e.childrenKey].map(b=>t(b,o)),e.filter&&(o.matchesFilter!==!0?o.matchesFilter=o.children.some(b=>b.matchesFilter):o.noTick!==!0&&o.disabled!==!0&&o.tickable===!0&&te===!0&&o.children.every(b=>b.matchesFilter!==!0||b.noTick===!0||b.tickable!==!0)===!0&&(o.tickable=!1)),o.matchesFilter===!0&&(o.noTick!==!0&&N!==!0&&o.children.every(b=>b.noTick)===!0&&(o.noTick=!0),H))){if(o.ticked=!1,o.indeterminate=o.children.some(b=>b.indeterminate===!0),o.tickable=o.tickable===!0&&o.children.some(b=>b.tickable),o.indeterminate!==!0){const b=o.children.reduce((ie,Pe)=>Pe.ticked===!0?ie+1:ie,0);b===o.children.length?o.ticked=!0:b>0&&(o.indeterminate=!0)}o.indeterminate===!0&&(o.indeterminateNextState=o.children.every(b=>b.tickable!==!0||b.ticked!==!0))}return o};return e.nodes.forEach(l=>t(l,null)),a});I(()=>e.ticked,a=>{x.value=a}),I(()=>e.expanded,a=>{s.value=a});function z(a){const t=[].reduce,l=(r,i)=>{if(r||!i)return r;if(Array.isArray(i)===!0)return t.call(Object(i),l,r);if(i[e.nodeKey]===a)return i;if(i[e.childrenKey])return l(null,i[e.childrenKey])};return l(null,e.nodes)}function ke(){return x.value.map(a=>z(a))}function pe(){return s.value.map(a=>z(a))}function _e(a){return a&&q.value[a]?q.value[a].expanded:!1}function xe(){e.expanded!==void 0?d("update:expanded",[]):s.value=[]}function Y(){const a=s.value,t=l=>{l[e.childrenKey]&&l[e.childrenKey].length>0&&l.expandable!==!1&&l.disabled!==!0&&(a.push(l[e.nodeKey]),l[e.childrenKey].forEach(t))};e.nodes.forEach(t),e.expanded!==void 0?d("update:expanded",a):s.value=a}function M(a,t,l=z(a),r=q.value[a]){if(r.lazy&&r.lazy!=="loaded"){if(r.lazy==="loading")return;u.value[a]="loading",Array.isArray(l[e.childrenKey])!==!0&&(l[e.childrenKey]=[]),d("lazyLoad",{node:l,key:a,done:i=>{u.value[a]="loaded",l[e.childrenKey]=Array.isArray(i)===!0?i:[],ze(()=>{const c=q.value[a];c&&c.isParent===!0&&Z(a,!0)})},fail:()=>{delete u.value[a],l[e.childrenKey].length===0&&delete l[e.childrenKey]}})}else r.isParent===!0&&r.expandable===!0&&Z(a,t)}function Z(a,t){let l=s.value;const r=e.expanded!==void 0;if(r===!0&&(l=l.slice()),t){if(e.accordion&&q.value[a]){const i=[];q.value[a].parent?q.value[a].parent.children.forEach(c=>{c.key!==a&&c.expandable===!0&&i.push(c.key)}):e.nodes.forEach(c=>{const f=c[e.nodeKey];f!==a&&i.push(f)}),i.length>0&&(l=l.filter(c=>i.includes(c)===!1))}l=l.concat([a]).filter((i,c,f)=>f.indexOf(i)===c)}else l=l.filter(i=>i!==a);r===!0?d("update:expanded",l):s.value=l}function Ee(a){return a&&q.value[a]?q.value[a].ticked:!1}function D(a,t){let l=x.value;const r=e.ticked!==void 0;r===!0&&(l=l.slice()),t?l=l.concat(a).filter((i,c,f)=>f.indexOf(i)===c):l=l.filter(i=>a.includes(i)===!1),r===!0&&d("update:ticked",l)}function Ae(a,t,l){const r={tree:y,node:a,key:l,color:e.color,dark:k.value};return oe(r,"expanded",()=>t.expanded,i=>{i!==t.expanded&&M(l,i)}),oe(r,"ticked",()=>t.ticked,i=>{i!==t.ticked&&D([l],i)}),r}function ee(a){return(e.filter?a.filter(t=>q.value[t[e.nodeKey]].matchesFilter):a).map(t=>Ce(t))}function Re(a){if(a.icon!==void 0)return h(re,{class:"q-tree__icon q-mr-sm",name:a.icon,color:a.iconColor});const t=a.img||a.avatar;if(t)return h("img",{class:`q-tree__${a.img?"img":"avatar"} q-mr-sm`,src:t})}function qe(){d("afterShow")}function Se(){d("afterHide")}function Ce(a){const t=a[e.nodeKey],l=q.value[t],r=a.header&&n[`header-${a.header}`]||n["default-header"],i=l.isParent===!0?ee(a[e.childrenKey]):[],c=i.length>0||l.lazy&&l.lazy!=="loaded";let f=a.body&&n[`body-${a.body}`]||n["default-body"];const T=r!==void 0||f!==void 0?Ae(a,l,t):null;return f!==void 0&&(f=h("div",{class:"q-tree__node-body relative-position"},[h("div",{class:P.value},[f(T)])])),h("div",{key:t,class:`q-tree__node relative-position q-tree__node--${c===!0?"parent":"child"}`},[h("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(l.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(l.selected===!0?" q-tree__node--selected":"")+(l.disabled===!0?" q-tree__node--disabled":""),tabindex:l.link===!0?0:-1,onClick:p=>{ae(a,l,p)},onKeypress(p){De(p)!==!0&&(p.keyCode===13?ae(a,l,p,!0):p.keyCode===32&&O(a,l,p,!0))}},[h("div",{class:"q-focus-helper",tabindex:-1,ref:p=>{R[l.key]=p}}),l.lazy==="loading"?h(Ne,{class:"q-tree__spinner",color:L.value}):c===!0?h(re,{class:"q-tree__arrow"+(l.expanded===!0?" q-tree__arrow--rotate":""),name:C.value,onClick(p){O(a,l,p)}}):null,l.hasTicking===!0&&l.noTick!==!0?h(Qe,{class:"q-tree__tickbox",modelValue:l.indeterminate===!0?null:l.ticked,color:L.value,dark:k.value,dense:!0,keepColor:!0,disable:l.tickable!==!0,onKeydown:ne,"onUpdate:modelValue":p=>{$e(l,p)}}):null,h("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(l.selected===!0?he.value:P.value)},[r?r(T):[Re(a),h("div",a[e.labelKey])]])]),c===!0?e.noTransition===!0?h("div",{class:"q-tree__node-collapsible"+P.value,key:`${t}__q`},[f,h("div",{class:"q-tree__children"+(l.disabled===!0?" q-tree__node--disabled":"")},l.expanded?i:null)]):h(We,{duration:e.duration,onShow:qe,onHide:Se},()=>Ie(h("div",{class:"q-tree__node-collapsible"+P.value,key:`${t}__q`},[f,h("div",{class:"q-tree__children"+(l.disabled===!0?" q-tree__node--disabled":"")},i)]),[[Fe,l.expanded]])):f])}function le(a){const t=R[a];t&&t.focus()}function ae(a,t,l,r){r!==!0&&le(t.key),w.value&&t.selectable?e.noSelectionUnset===!1?d("update:selected",t.key!==e.selected?t.key:null):t.key!==e.selected&&d("update:selected",t.key===void 0?null:t.key):O(a,t,l,r),typeof a.handler=="function"&&a.handler(a)}function O(a,t,l,r){l!==void 0&&ne(l),r!==!0&&le(t.key),M(t.key,!t.expanded,a,t)}function $e(a,t){if(a.indeterminate===!0&&(t=a.indeterminateNextState),a.strictTicking)D([a.key],t);else if(a.leafTicking){const l=[],r=i=>{i.isParent?(t!==!0&&i.noTick!==!0&&i.tickable===!0&&l.push(i.key),i.leafTicking===!0&&i.children.forEach(r)):i.noTick!==!0&&i.tickable===!0&&(i.leafFilteredTicking!==!0||i.matchesFilter===!0)&&l.push(i.key)};r(a),D(l,t)}}return e.defaultExpandAll===!0&&Y(),Object.assign(y,{getNodeByKey:z,getTickedNodes:ke,getExpandedNodes:pe,isExpanded:_e,collapseAll:xe,expandAll:Y,setExpanded:M,isTicked:Ee,setTicked:D}),()=>{const a=ee(e.nodes);return h("div",{class:A.value},a.length===0?e.filter?e.noResultsLabel||m.lang.tree.noResults:e.noNodesLabel||m.lang.tree.noNodes:a)}}}),j=[{label:"Seleccionar todos los permisos",children:[{label:"Usuario",children:[{label:"Ver Usuarios",id:2},{label:"Agregar Usuario",id:3},{label:"Editar Usuario",id:4},{label:"Inactivar Usuario",id:5},{label:"Activar Usuario",id:6},{label:"Eliminar Usuario",id:7}]},{label:"Roles",children:[{label:"Ver Roles",id:8},{label:"Agregar Rol",id:9},{label:"Editar Rol",id:10},{label:"Eliminar Rol",id:11}]},{label:"Dignidades",children:[{label:"Ver Dignidades",id:12},{label:"Agregar Dignidad",id:13},{label:"Editar Dignidad",id:14},{label:"Eliminar Dignidad",id:15}]},{label:"Especialidades",children:[{label:"Ver Especialidades",id:16},{label:"Agregar Especialidad",id:17},{label:"Editar Especialidad",id:18},{label:"Activar Especialidad",id:19},{label:"Inactivar Especialidad",id:20},{label:"Eliminar Especialidad",id:21}]},{label:"Estudiantes Empadronados",children:[{label:"Ver Estudiantes",id:22},{label:"Agregar Estudiante",id:23},{label:"Editar Estudiante",id:24},{label:"Activar Estudiante",id:25},{label:"Inactivar Estudiante",id:26},{label:"Eliminar Estudiante",id:27}]},{label:"Periodos",children:[{label:"Ver Periodos",id:28},{label:"Agregar Periodo",id:29},{label:"Editar Periodo",id:30},{label:"Activar Periodo",id:31},{label:"Inactivar Periodo",id:32},{label:"Eliminar Periodo",id:33}]},{label:"Apertura de Elecciones",children:[{label:"Ver Aperturas",id:34},{label:"Agregar Apertura",id:35},{label:"Editar Apertura",id:36},{label:"Activar Apertura",id:37},{label:"Inactivar Apertura",id:38},{label:"Eliminar Apertura",id:39}]},{label:"Ver Listas de votacion",children:[{label:"Ver Listas",id:40},{label:"Agregar Lista",id:41},{label:"Editar Lista",id:42},{label:"Activar Lista",id:43},{label:"Inactivar Lista",id:44},{label:"Eliminar Lista",id:45}]},{label:"Ver Lista de Presidentes",children:[{label:"Ver Presidentes",id:46},{label:"Agregar Presidente",id:47},{label:"Editar Presidente",id:48},{label:"Activar Presidente",id:49},{label:"Inactivar Presidente",id:50},{label:"Eliminar Presidente",id:51}]},{label:"Ver Resultados",children:[{label:"Ver Resultados",id:52}]}]}];const Ze=J({name:"AgregarRol",setup(e,{emit:n}){const d=_(""),y=_(!1),m=_([]),k=be(),{encontrarPermisosId:u}=X(),x=async()=>{if(m.value.length==0)return k.notify({type:"warning",message:"Debes elegir algun permiso",position:"top-right"});const s=u(m,j),R={rol:d.value,permisosId:s};try{y.value=!0,await B.post("/roles",R),n("actualizarLista"),k.notify({type:"positive",message:"Rol Agregado Exitosamente",position:"top-right"}),y.value=!1}catch(A){alert(A)}};return I(d,(s,R)=>{d.value=s.toUpperCase()}),{nombreRol:d,expanded:_(["Seleccionar todos los permisos"]),rolesSelected:m,listPermisos:j,loading:y,submit:x}}}),el=v("div",{class:"text-h6"},"Agregar Rol",-1),ll={class:"row q-gutter-sm justify-around"},al={class:"col-xs-12 col-sm-5"},tl=v("label",null,"Nombre del Rol:",-1),il={class:"col-xs-12"},rl={class:"col-xs-9 col-sm-12 flex justify-center"};function nl(e,n,d,y,m,k){return $(),K(me,{style:{width:"700px","max-width":"80vw"}},{default:E(()=>[g(F,null,{default:E(()=>[el]),_:1}),g(F,{class:"q-pt-none"},{default:E(()=>[g(ge,{onSubmit:e.submit},{default:E(()=>[v("div",ll,[v("div",al,[tl,g(fe,{modelValue:e.nombreRol,"onUpdate:modelValue":n[0]||(n[0]=u=>e.nombreRol=u),modelModifiers:{trim:!0},"input-class":"text-center",dense:"",filled:"",required:""},null,8,["modelValue"])]),v("div",il,[g(ve,{class:"col-12 col-sm-6",nodes:e.listPermisos,"node-key":"label","tick-strategy":"leaf",expanded:e.expanded,"onUpdate:expanded":n[1]||(n[1]=u=>e.expanded=u),ticked:e.rolesSelected,"onUpdate:ticked":n[2]||(n[2]=u=>e.rolesSelected=u)},null,8,["nodes","expanded","ticked"])]),v("div",rl,[g(U,{label:"Guardar",class:"q-px-xl",loading:e.loading,type:"submit",color:"green-9"},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var ol=W(Ze,[["render",nl]]);const dl=J({name:"EditarRol",props:["rolData"],setup(e,{emit:n}){const d=_(""),y=_(!1),m=_([]),k=be(),{encontrarPermisosId:u}=X(),{id:x,nombre:s,permisos_nombres:R}=e.rolData;R.split("|").forEach(C=>{m.value.push(C)}),d.value=s;const w=async()=>{if(m.value.length==0)return k.notify({type:"warning",message:"Debes elegir algun permiso",position:"top-right"});const C=u(m,j),L={rol:d.value,permisosId:C};try{y.value=!0,await B.put(`/roles/${x}`,L),n("actualizarLista"),k.notify({type:"positive",message:"Rol Agregado Exitosamente",position:"top-right"}),y.value=!1}catch(P){alert(P)}};return I(d,(C,L)=>{d.value=C.toUpperCase()}),{nombreRol:d,expanded:_(["Seleccionar todos los permisos"]),rolesSelected:m,loading:y,listPermisos:j,submit:w}}}),sl=v("div",{class:"text-h6"},"Editar Rol",-1),cl={class:"row q-gutter-sm justify-around"},ul={class:"col-xs-12 col-sm-5"},fl=v("label",null,"Nombre del Rol:",-1),ml={class:"col-xs-12"},bl={class:"col-xs-9 col-sm-12 flex justify-center"};function gl(e,n,d,y,m,k){return $(),K(me,{style:{width:"700px","max-width":"80vw"}},{default:E(()=>[g(F,null,{default:E(()=>[sl]),_:1}),g(F,{class:"q-pt-none"},{default:E(()=>[g(ge,{onSubmit:e.submit},{default:E(()=>[v("div",cl,[v("div",ul,[fl,g(fe,{modelValue:e.nombreRol,"onUpdate:modelValue":n[0]||(n[0]=u=>e.nombreRol=u),modelModifiers:{trim:!0},"input-class":"text-center",dense:"",filled:"",required:""},null,8,["modelValue"])]),v("div",ml,[g(ve,{class:"col-12 col-sm-6",nodes:e.listPermisos,"node-key":"label","tick-strategy":"leaf",expanded:e.expanded,"onUpdate:expanded":n[1]||(n[1]=u=>e.expanded=u),ticked:e.rolesSelected,"onUpdate:ticked":n[2]||(n[2]=u=>e.rolesSelected=u)},null,8,["nodes","expanded","ticked"])]),v("div",bl,[g(U,{label:"Editar",class:"q-px-xl",loading:e.loading,type:"submit",color:"green-9"},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var vl=W(dl,[["render",gl]]);const hl=[{name:"id",label:"#",align:"left",field:"id",sortable:!0},{name:"rol",label:"Nombre del Rol",align:"left",field:"nombre",sortable:!0},{name:"acciones",label:"acciones",align:"center"}],yl=J({name:"IndexUsuario",components:{AgregarRol:ol,EditarRol:vl},setup(){const e=_([]),n=_(!1),d=_(!1),{mostrarNotify:y}=Xe(),m=_({}),k=_(!1),{validarPermisos:u}=X(),x=async()=>{n.value=!1,d.value=!1,k.value=!0;try{const{data:{roles:A}}=await B.get("/roles");e.value=A}catch(A){alert(A)}k.value=!1};return x(),{columns:hl,editarRol:A=>{m.value=A,d.value=!0},eliminarRol:async A=>{Me.create({title:"\xBFDeseas Eliminar este rol?",message:"Una vez eliminado no podra recuperarse...!",ok:{push:!0,label:"Eliminar",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{ce.show({message:"Cargando..."});try{await B.delete(`/roles/${A}`),y("positive","Rol eliminado exitosamente"),x()}catch(w){y("negative",w.response.data.message)}ce.hide()})},modalAgregarRol:n,loading:k,modalEditarRol:d,getRoles:x,rolData:m,rows:e,validarPermisos:u}}}),kl={class:"row q-py-lg q-pl-md"},pl=v("div",{class:"col-md-6"},[v("label",{class:"text-h6"},"Listado de Roles")],-1),_l={class:"col-md-6 flex justify-end"},xl={class:"row"},El={class:"col-md-12"},Al={class:"q-pa-md"};function Rl(e,n,d,y,m,k){const u=de("AgregarRol"),x=de("EditarRol");return $(),Be(je,null,[g(Je,null,{default:E(()=>[v("div",kl,[pl,v("div",_l,[e.validarPermisos("Agregar Rol")?($(),K(U,{key:0,class:"q-mr-md",color:"secondary","icon-right":"add_circle",label:"nuevo",onClick:n[0]||(n[0]=s=>e.modalAgregarRol=!0)})):Q("",!0)])]),v("div",xl,[v("div",El,[v("div",Al,[e.validarPermisos("Ver Roles")?($(),K(Ge,{key:0,class:"my-sticky-header-table",rows:e.rows,loading:e.loading,columns:e.columns,"row-key":"name"},{"body-cell-acciones":E(s=>[g(ue,{props:s},{default:E(()=>[e.validarPermisos("Editar Rol")?($(),K(U,{key:0,round:"",color:"primary",onClick:R=>e.editarRol(s.row),icon:"edit",class:"q-mr-sm",size:"13px"},null,8,["onClick"])):Q("",!0),e.validarPermisos("Eliminar Rol")?($(),K(U,{key:1,onClick:R=>e.eliminarRol(s.row.id),round:"",color:"deep-orange",icon:"close",size:"13px"},null,8,["onClick"])):Q("",!0)]),_:2},1032,["props"])]),"body-cell-id":E(s=>[g(ue,{props:s},{default:E(()=>[Oe(He(s.pageIndex+1),1)]),_:2},1032,["props"])]),_:1},8,["rows","loading","columns"])):Q("",!0)])])])]),_:1}),g(se,{modelValue:e.modalAgregarRol,"onUpdate:modelValue":n[1]||(n[1]=s=>e.modalAgregarRol=s)},{default:E(()=>[g(u,{onActualizarLista:e.getRoles},null,8,["onActualizarLista"])]),_:1},8,["modelValue"]),g(se,{modelValue:e.modalEditarRol,"onUpdate:modelValue":n[2]||(n[2]=s=>e.modalEditarRol=s)},{default:E(()=>[g(x,{onActualizarLista:e.getRoles,rolData:e.rolData},null,8,["onActualizarLista","rolData"])]),_:1},8,["modelValue"])],64)}var Il=W(yl,[["render",Rl]]);export{Il as default};
