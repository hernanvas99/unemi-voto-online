import{d as P,r as m,A as Q,_ as U,o as g,S as _,g as i,f as l,as as q,e as o,Q as h,h as $,at as M,W as z,c as I,au as N,av as R,aw as O,U as V,i as C,T as B,X as T}from"./index.86c036ad.js";import{Q as S}from"./QSelect.ff69d042.js";import{Q as H}from"./QSpace.3a2d759c.js";import{a as W,Q as A}from"./QTable.29ed5419.js";import{Q as j}from"./QBadge.265b8235.js";import{Q as X}from"./QPage.4cf48411.js";import{A as b}from"./Api.0193aa3b.js";import{Q as F}from"./QForm.dbcce163.js";import{u as D}from"./useHelpers.4fa72bec.js";import{u as J}from"./useRolPermisos.1ee2517c.js";import"./QItem.faa27fdc.js";import"./rtl.b51694b1.js";import"./QList.aebb5a08.js";import"./use-fullscreen.7000f2af.js";import"./index.2cf0d985.js";import"./auth-user.43655eae.js";const K=P({name:"AgregarLista",setup(e,{emit:s}){const d=m({periodo_id:"",representante:"",descripcion:"",siglas:""}),c=m(!1),p=m([]),{mostrarNotify:v}=D(),t=async()=>{try{const{data:{periodos:a}}=await b.get("/periodos/activos");p.value=[],a.forEach(r=>{p.value.push({label:r.nombre,value:r.id})})}catch(a){alert(a)}},u=async()=>{try{c.value=!0;const{data:a}=await b.post("/listas",d.value);s("actualizarLista"),v("positive",a.msg,"top-right"),c.value=!1}catch(a){c.value=!1,v("warning",a.response.data.errors[0].msg,"top-right")}};return Q(d.value,(a,r)=>{d.value.descripcion=a.descripcion.toUpperCase(),d.value.representante=a.representante.toUpperCase(),d.value.siglas=a.siglas.toUpperCase()}),t(),{listPeriodos:p,loading:c,formLista:d,onSubmit:u}}}),Y=o("div",{class:"text-h6"},"Agregar Lista",-1),Z={class:"row q-gutter-sm justify-around"},x={class:"col-xs-12 col-sm-5"},ee=o("label",null,"Periodo:",-1),ae={class:"col-xs-12 col-sm-5"},se=o("label",null,"Descripci\xF3n:",-1),oe={class:"col-xs-12 col-sm-5"},le=o("label",null,"Siglas:",-1),te={class:"col-xs-12 col-sm-5"},ie=o("label",null,"Representante Legal:",-1),re={class:"col-xs-9 col-sm-12 flex justify-center"};function ne(e,s,d,c,p,v){return g(),_(M,{style:{width:"650px","max-width":"80vw"}},{default:i(()=>[l(q,null,{default:i(()=>[Y]),_:1}),l(q,null,{default:i(()=>[l(F,{onSubmit:e.onSubmit},{default:i(()=>[o("div",Z,[o("div",x,[ee,l(S,{filled:"",required:"",dense:"","emit-value":"","map-options":"",modelValue:e.formLista.periodo_id,"onUpdate:modelValue":s[0]||(s[0]=t=>e.formLista.periodo_id=t),options:e.listPeriodos},null,8,["modelValue","options"])]),o("div",ae,[se,l(h,{modelValue:e.formLista.descripcion,"onUpdate:modelValue":s[1]||(s[1]=t=>e.formLista.descripcion=t),dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",oe,[le,l(h,{modelValue:e.formLista.siglas,"onUpdate:modelValue":s[2]||(s[2]=t=>e.formLista.siglas=t),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",te,[ie,l(h,{modelValue:e.formLista.representante,"onUpdate:modelValue":s[3]||(s[3]=t=>e.formLista.representante=t),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",re,[l($,{label:"Guardar",class:"q-px-xl q-my-sm",loading:e.loading,type:"submit",color:"green-9"},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var de=U(K,[["render",ne]]);const ue=P({name:"EditarLista",props:["listaData"],setup(e,{emit:s}){const{periodo_id:d,representante_legal:c,descripcion:p,siglas:v,id:t}=e.listaData,u=m({id:t,periodo_id:d,representante:c,descripcion:p,siglas:v}),a=m(!1),r=m([]),{mostrarNotify:y}=D(),E=async()=>{try{const{data:{periodos:f}}=await b.get("/periodos/activos");r.value=[],f.forEach(w=>{r.value.push({label:w.nombre,value:w.id})})}catch(f){alert(f)}},k=async()=>{try{a.value=!0;const{data:f}=await b.put("/listas",u.value);s("actualizarLista"),y("positive",f.msg,"top-right"),a.value=!1}catch(f){a.value=!1,y("warning",f.response.data.errors[0].msg,"top-right")}};return Q(u.value,(f,w)=>{u.value.descripcion=f.descripcion.toUpperCase(),u.value.representante=f.representante.toUpperCase(),u.value.siglas=f.siglas.toUpperCase()}),E(),{listPeriodos:r,loading:a,formLista:u,onSubmit:k}}}),me=o("div",{class:"text-h6"},"Editar Lista",-1),ce={class:"row q-gutter-sm justify-around"},pe={class:"col-xs-12 col-sm-5"},fe=o("label",null,"Periodo:",-1),ve={class:"col-xs-12 col-sm-5"},ge=o("label",null,"Descripci\xF3n:",-1),Le={class:"col-xs-12 col-sm-5"},_e=o("label",null,"Siglas:",-1),ye={class:"col-xs-12 col-sm-5"},be=o("label",null,"Representante Legal:",-1),$e={class:"col-xs-9 col-sm-12 flex justify-center"};function he(e,s,d,c,p,v){return g(),_(M,{style:{width:"650px","max-width":"80vw"}},{default:i(()=>[l(q,null,{default:i(()=>[me]),_:1}),l(q,null,{default:i(()=>[l(F,{onSubmit:e.onSubmit},{default:i(()=>[o("div",ce,[o("div",pe,[fe,l(S,{filled:"",required:"",dense:"","emit-value":"","map-options":"",modelValue:e.formLista.periodo_id,"onUpdate:modelValue":s[0]||(s[0]=t=>e.formLista.periodo_id=t),options:e.listPeriodos},null,8,["modelValue","options"])]),o("div",ve,[ge,l(h,{modelValue:e.formLista.descripcion,"onUpdate:modelValue":s[1]||(s[1]=t=>e.formLista.descripcion=t),dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",Le,[_e,l(h,{modelValue:e.formLista.siglas,"onUpdate:modelValue":s[2]||(s[2]=t=>e.formLista.siglas=t),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",ye,[be,l(h,{modelValue:e.formLista.representante,"onUpdate:modelValue":s[3]||(s[3]=t=>e.formLista.representante=t),modelModifiers:{trim:!0},dense:"",filled:"",required:""},null,8,["modelValue"])]),o("div",$e,[l($,{label:"Editar",class:"q-px-xl q-my-sm",loading:e.loading,type:"submit",color:"green-9"},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var we=U(ue,[["render",he]]);const Ve=[{name:"id",label:"#",align:"left",field:"id",sortable:!0},{name:"periodo",label:"PERIODO",align:"center",field:"periodo",sortable:!0},{name:"descripcion",align:"center",label:"DESCRIPCI\xD3N",field:"descripcion"},{name:"siglas",align:"center",label:"SIGLAS",field:"siglas"},{name:"representante",label:"REPRESENTANTE LEGAL",field:"representante_legal",align:"center"},{name:"estado",label:"Estado",align:"center",field:"estado"},{name:"acciones",label:"acciones",align:"center"}],Ae=P({name:"IndexLista",components:{Add:de,Edit:we},setup(){const{validarPermisos:e}=J(),s=m(""),d=m([]),c=m(!0),p=m(""),{mostrarNotify:v}=D(),t=m(!1),u=m(!1),a=m({}),r=m([]),y=async()=>{t.value=!1,u.value=!1,c.value=!0;try{const{data:{listas:n}}=await b.get(`/listas/all?periodo_id=${p.value}`);d.value=n}catch(n){alert(n)}c.value=!1},E=async(n,L)=>{try{await b.delete(`/listas/${n}/${L}`),v("positive",`Lista ${L?"Activado":"Inactivado"} exitosamente`),y()}catch(G){alert(G)}},k=async n=>{O.create({title:"\xBFDeseas Eliminar a esta lista?",message:"Una vez eliminado no podra recuperarse...!",ok:{push:!0,label:"Eliminar",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{const{data:L}=await b.delete(`/listas/${n}`);v("positive",L.msg),y()}catch(L){v("negative",L.response.data.message)}})},f=async()=>{try{const{data:{periodos:n}}=await b.get("/periodos/all");r.value=[],n.forEach(L=>{r.value.push({label:L.nombre,value:L.id})}),p.value=n[0].id,y()}catch(n){alert(n)}};return Q(p,(n,L)=>{y()}),f(),{editarLista:n=>{a.value=n,u.value=!0},eliminarLista:k,modalAgregarLista:t,modalEditarLista:u,activarDesactivarLista:E,columns:Ve,filter:s,loading:c,getListas:y,rows:d,listaData:a,listPeriodos:r,periodo_id:p,validarPermisos:e}}}),qe={class:"row q-py-lg q-pl-md"},Ee=o("div",{class:"col-md-6"},[o("label",{class:"text-h6"},"Registros de listas")],-1),ke={class:"col-md-6 flex justify-end"},Ce={class:"row"},Pe={class:"col-md-12 col-xs-12"},Qe={class:"q-pa-md"},Ue=o("label",{class:"text-h6 text-weight-regular"},"Filtrar por Periodo:",-1),Se={style:{width:"20%"},class:"q-ml-lg"},De={class:"full-width row flex-center text-lime-10 q-gutter-sm"},ze=o("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1);function Ie(e,s,d,c,p,v){const t=z("Add"),u=z("Edit");return g(),I(R,null,[l(X,null,{default:i(()=>[o("div",qe,[Ee,o("div",ke,[e.validarPermisos("Agregar Lista")?(g(),_($,{key:0,color:"secondary","icon-right":"person_add",label:"Agregar Apertura",class:"q-mr-md",onClick:s[0]||(s[0]=a=>e.modalAgregarLista=!e.modalAgregarLista)})):V("",!0)])]),o("div",Ce,[o("div",Pe,[o("div",Qe,[l(W,{class:"my-sticky-header-table",rows:e.rows,columns:e.columns,loading:e.loading,filter:e.filter,"row-key":"name"},{top:i(()=>[Ue,o("div",Se,[l(S,{filled:"",required:"",dense:"","emit-value":"","map-options":"",modelValue:e.periodo_id,"onUpdate:modelValue":s[1]||(s[1]=a=>e.periodo_id=a),options:e.listPeriodos},null,8,["modelValue","options"])]),l(H),l(h,{dense:"",debounce:"300",color:"primary",modelValue:e.filter,"onUpdate:modelValue":s[2]||(s[2]=a=>e.filter=a),label:"Buscar..."},{append:i(()=>[l(C,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-id":i(a=>[l(A,{props:a},{default:i(()=>[B(T(a.pageIndex+1),1)]),_:2},1032,["props"])]),"body-cell-pv":i(a=>[l(A,{props:a},{default:i(()=>[B(T(a.row.punto_venta),1)]),_:2},1032,["props"])]),"body-cell-estado":i(a=>[l(A,{props:a},{default:i(()=>[a.value?(g(),_(j,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(g(),_(j,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":i(a=>[l(A,{props:a},{default:i(()=>[e.validarPermisos("Editar Lista")&&a.row.estado?(g(),_($,{key:0,round:"",color:"primary",onClick:r=>e.editarLista(a.row),icon:"edit",class:"q-mr-sm",size:"11px"},null,8,["onClick"])):V("",!0),a.row.estado&&e.validarPermisos("Inactivar Lista")?(g(),_($,{key:1,round:"",color:"blue-grey",icon:"close",onClick:r=>e.activarDesactivarLista(a.row.id,!1),size:"11px"},null,8,["onClick"])):(g(),I(R,{key:2},[!a.row.estado&&e.validarPermisos("Activar Lista")?(g(),_($,{key:0,round:"",color:"positive",class:"q-mr-sm",icon:"done",onClick:r=>e.activarDesactivarLista(a.row.id,!0),size:"11px"},null,8,["onClick"])):V("",!0),!a.row.estado&&e.validarPermisos("Eliminar Lista")?(g(),_($,{key:1,round:"",color:"deep-orange",icon:"delete",onClick:r=>e.eliminarLista(a.row.id),size:"11px"},null,8,["onClick"])):V("",!0)],64))]),_:2},1032,["props"])]),"no-data":i(({icon:a,filter:r})=>[o("div",De,[l(C,{size:"2em",name:"sentiment_dissatisfied"}),ze,l(C,{size:"2em",name:r?"filter_b_and_w":a},null,8,["name"])])]),_:1},8,["rows","columns","loading","filter"])])])])]),_:1}),l(N,{modelValue:e.modalAgregarLista,"onUpdate:modelValue":s[3]||(s[3]=a=>e.modalAgregarLista=a)},{default:i(()=>[l(t,{onActualizarLista:e.getListas},null,8,["onActualizarLista"])]),_:1},8,["modelValue"]),l(N,{modelValue:e.modalEditarLista,"onUpdate:modelValue":s[4]||(s[4]=a=>e.modalEditarLista=a)},{default:i(()=>[l(u,{listaData:e.listaData,onActualizarLista:e.getListas},null,8,["listaData","onActualizarLista"])]),_:1},8,["modelValue"])],64)}var xe=U(Ae,[["render",Ie]]);export{xe as default};