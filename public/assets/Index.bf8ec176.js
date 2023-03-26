import{d as $,r as m,A as q,_ as w,o as p,S as f,g as n,f as d,as as _,e as s,Q,h as v,at as N,W as C,c as z,au as V,av as S,aw as I,ax as k,U as D,T as P,X as U}from"./index.2c7c5b43.js";import{Q as E,a as L}from"./QTable.200aae8f.js";import{Q as j}from"./QPage.152e8f99.js";import{A as b}from"./Api.b16e05d9.js";import{Q as x}from"./QForm.8d724ed1.js";import{u as A}from"./useHelpers.e401e0ad.js";import{u as B}from"./useRolPermisos.72458214.js";import"./QList.f8aa654c.js";import"./QSelect.cd845e3e.js";import"./QItem.3a1f1059.js";import"./rtl.b51694b1.js";import"./use-fullscreen.36e0f58f.js";import"./index.2cf0d985.js";import"./auth-user.3faec0ee.js";const T=$({name:"AgregarDignidad",setup(a,{emit:e}){const o=m(""),r=m(!1),{mostrarNotify:u}=A(),l=async()=>{try{r.value=!0;const{data:t}=await b.post("/dignidades",{nombre:o.value});e("actualizarLista"),u("positive",t.msg,"top-right"),r.value=!1}catch(t){alert(t)}};return q(o,(t,c)=>{o.value=t.toUpperCase()}),{nombreDignidad:o,loading:r,submit:l}}}),F=s("div",{class:"text-h6"},"Agregar Dignidad",-1),G={class:"row q-gutter-sm justify-around"},M={class:"col-xs-12 col-sm-9"},O=s("label",null,"Nombre de la Dignidad:",-1),H={class:"col-xs-9 col-sm-12 flex justify-center q-my-md"};function R(a,e,o,r,u,l){return p(),f(N,{style:{width:"500px","max-width":"80vw"}},{default:n(()=>[d(_,null,{default:n(()=>[F]),_:1}),d(_,{class:"q-pt-none"},{default:n(()=>[d(x,{onSubmit:a.submit},{default:n(()=>[s("div",G,[s("div",M,[O,d(Q,{modelValue:a.nombreDignidad,"onUpdate:modelValue":e[0]||(e[0]=t=>a.nombreDignidad=t),modelModifiers:{trim:!0},"input-class":"text-center",dense:"",filled:"",required:""},null,8,["modelValue"])]),s("div",H,[d(v,{label:"Guardar",class:"q-px-xl",loading:a.loading,type:"submit",color:"green-9"},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var W=w(T,[["render",R]]);const X=$({name:"EditarDignidad",props:["dignidadData"],setup(a,{emit:e}){const o=m(!1),{id:r,nombre:u}=a.dignidadData,l=m(u),{mostrarNotify:t}=A(),c=async()=>{try{o.value=!0;const{data:i}=await b.put("/dignidades",{nombre:l.value,id:r});e("actualizarLista"),t("positive",i.msg,"top-right"),o.value=!1}catch(i){alert(i)}};return q(l,(i,y)=>{l.value=i.toUpperCase()}),{nombreDignidad:l,loading:o,submit:c}}}),J=s("div",{class:"text-h6"},"Editar Dignidad",-1),K={class:"row q-gutter-sm justify-around"},Y={class:"col-xs-12 col-sm-9"},Z=s("label",null,"Nombre de la Dignidad:",-1),aa={class:"col-xs-9 col-sm-12 flex justify-center q-my-md"};function ea(a,e,o,r,u,l){return p(),f(N,{style:{width:"500px","max-width":"80vw"}},{default:n(()=>[d(_,null,{default:n(()=>[J]),_:1}),d(_,{class:"q-pt-none"},{default:n(()=>[d(x,{onSubmit:a.submit},{default:n(()=>[s("div",K,[s("div",Y,[Z,d(Q,{modelValue:a.nombreDignidad,"onUpdate:modelValue":e[0]||(e[0]=t=>a.nombreDignidad=t),modelModifiers:{trim:!0},"input-class":"text-center",dense:"",filled:"",required:""},null,8,["modelValue"])]),s("div",aa,[d(v,{label:"Editar",class:"q-px-xl",loading:a.loading,type:"submit",color:"green-9"},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var ia=w(X,[["render",ea]]);const da=[{name:"id",label:"#",align:"left",field:"id",sortable:!0},{name:"rol",label:"DIGNIDADES",align:"left",field:"nombre",sortable:!0},{name:"acciones",label:"ACCIONES",align:"center"}],sa=$({name:"IndexDignidad",components:{AgregarDignidad:W,EditarDignidad:ia},setup(){const a=m([]),e=m(!1),o=m(!1),{mostrarNotify:r}=A(),u=m({}),l=m(!1),{validarPermisos:t}=B(),c=async()=>{e.value=!1,o.value=!1,l.value=!0;try{const{data:{dignidades:g}}=await b.get("/dignidades");a.value=g}catch(g){alert(g)}l.value=!1};return c(),{columns:da,editarDignidad:g=>{u.value=g,o.value=!0},eliminarDignidad:async g=>{I.create({title:"\xBFDeseas Eliminar esta dignidad?",message:"Una vez eliminado no podra recuperarse...!",ok:{push:!0,label:"Eliminar",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{k.show({message:"Cargando..."});try{const{data:h}=await b.delete(`/dignidades/${g}`);r("positive",h.msg,"top-right"),c()}catch(h){r("negative",h.response.data.message)}k.hide()})},modalAgregarDignidad:e,loading:l,modalEditarDignidad:o,getDignidades:c,dignidadData:u,rows:a,validarPermisos:t}}}),oa={class:"row q-py-lg q-pl-md"},ta=s("div",{class:"col-md-6"},[s("label",{class:"text-h6"},"Listado de Dignidades")],-1),na={class:"col-md-6 flex justify-end"},la={class:"row"},ra={class:"col-md-12"},ua={class:"q-pa-md"};function ma(a,e,o,r,u,l){const t=C("AgregarDignidad"),c=C("EditarDignidad");return p(),z(S,null,[d(j,null,{default:n(()=>[s("div",oa,[ta,s("div",na,[a.validarPermisos("Agregar Dignidad")?(p(),f(v,{key:0,class:"q-mr-md",color:"secondary","icon-right":"add_circle",label:"nuevo",onClick:e[0]||(e[0]=i=>a.modalAgregarDignidad=!0)})):D("",!0)])]),s("div",la,[s("div",ra,[s("div",ua,[a.validarPermisos("Ver Dignidades")?(p(),f(L,{key:0,class:"my-sticky-header-table",rows:a.rows,loading:a.loading,columns:a.columns,"row-key":"name"},{"body-cell-acciones":n(i=>[d(E,{props:i},{default:n(()=>[a.validarPermisos("Editar Dignidad")?(p(),f(v,{key:0,round:"",color:"primary",onClick:y=>a.editarDignidad(i.row),icon:"edit",class:"q-mr-sm",size:"13px"},null,8,["onClick"])):D("",!0),a.validarPermisos("Eliminar Dignidad")?(p(),f(v,{key:1,onClick:y=>a.eliminarDignidad(i.row.id),round:"",color:"deep-orange",icon:"close",size:"13px"},null,8,["onClick"])):D("",!0)]),_:2},1032,["props"])]),"body-cell-id":n(i=>[d(E,{props:i},{default:n(()=>[P(U(i.pageIndex+1),1)]),_:2},1032,["props"])]),_:1},8,["rows","loading","columns"])):D("",!0)])])])]),_:1}),d(V,{modelValue:a.modalAgregarDignidad,"onUpdate:modelValue":e[1]||(e[1]=i=>a.modalAgregarDignidad=i)},{default:n(()=>[d(t,{onActualizarLista:a.getDignidades},null,8,["onActualizarLista"])]),_:1},8,["modelValue"]),d(V,{modelValue:a.modalEditarDignidad,"onUpdate:modelValue":e[2]||(e[2]=i=>a.modalEditarDignidad=i)},{default:n(()=>[d(c,{onActualizarLista:a.getDignidades,dignidadData:a.dignidadData},null,8,["onActualizarLista","dignidadData"])]),_:1},8,["modelValue"])],64)}var Va=w(sa,[["render",ma]]);export{Va as default};