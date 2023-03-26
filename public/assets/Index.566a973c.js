import{d as $,r as g,A as I,_ as k,o as c,S as u,g as t,f as s,as as h,e as l,Q as N,h as E,at as P,W as C,c as D,au as q,av as V,aw as U,ax as Q,U as b,T as B,X as j,i as z}from"./index.2c7c5b43.js";import{Q as w,a as T}from"./QTable.200aae8f.js";import{Q as x}from"./QBadge.d2a8fc0c.js";import{Q as O}from"./QPage.152e8f99.js";import{A as y}from"./Api.b16e05d9.js";import{Q as S}from"./QForm.8d724ed1.js";import{u as A}from"./useHelpers.e401e0ad.js";import{u as F}from"./useRolPermisos.72458214.js";import"./QList.f8aa654c.js";import"./QSelect.cd845e3e.js";import"./QItem.3a1f1059.js";import"./rtl.b51694b1.js";import"./use-fullscreen.36e0f58f.js";import"./index.2cf0d985.js";import"./auth-user.3faec0ee.js";const M=$({name:"AgregarEspecialidad",setup(e,{emit:i}){const o=g(""),n=g(!1),{mostrarNotify:m}=A(),r=async()=>{try{n.value=!0;const{data:d}=await y.post("/especialidades",{nombre:o.value});i("actualizarLista"),m("positive",d.msg,"top-right"),n.value=!1}catch(d){alert(d)}};return I(o,(d,p)=>{o.value=d.toUpperCase()}),{nombreEspecialidad:o,loading:n,submit:r}}}),R=l("div",{class:"text-h6"},"Agregar Especialidad",-1),G={class:"row q-gutter-sm justify-around"},H={class:"col-xs-12 col-sm-9"},W=l("label",null,"Nombre de la Especialidad:",-1),X={class:"col-xs-9 col-sm-12 flex justify-center q-my-md"};function J(e,i,o,n,m,r){return c(),u(P,{style:{width:"500px","max-width":"80vw"}},{default:t(()=>[s(h,null,{default:t(()=>[R]),_:1}),s(h,{class:"q-pt-none"},{default:t(()=>[s(S,{onSubmit:e.submit},{default:t(()=>[l("div",G,[l("div",H,[W,s(N,{modelValue:e.nombreEspecialidad,"onUpdate:modelValue":i[0]||(i[0]=d=>e.nombreEspecialidad=d),modelModifiers:{trim:!0},"input-class":"text-center",dense:"",filled:"",required:""},null,8,["modelValue"])]),l("div",X,[s(E,{label:"Guardar",class:"q-px-xl",loading:e.loading,type:"submit",color:"green-9"},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var K=k(M,[["render",J]]);const Y=$({name:"EditarEspecialidad",props:["especialidadData"],setup(e,{emit:i}){const o=g(!1),{id:n,nombre:m}=e.especialidadData,r=g(m),{mostrarNotify:d}=A(),p=async()=>{try{o.value=!0;const{data:a}=await y.put("/especialidades",{nombre:r.value,id:n});i("actualizarLista"),d("positive",a.msg,"top-right"),o.value=!1}catch(a){alert(a)}};return I(r,(a,f)=>{r.value=a.toUpperCase()}),{nombreEspecialidad:r,loading:o,submit:p}}}),Z=l("div",{class:"text-h6"},"Editar Especialidad",-1),ee={class:"row q-gutter-sm justify-around"},ae={class:"col-xs-12 col-sm-9"},se=l("label",null,"Nombre de la Especialidad:",-1),ie={class:"col-xs-9 col-sm-12 flex justify-center q-my-md"};function le(e,i,o,n,m,r){return c(),u(P,{style:{width:"500px","max-width":"80vw"}},{default:t(()=>[s(h,null,{default:t(()=>[Z]),_:1}),s(h,{class:"q-pt-none"},{default:t(()=>[s(S,{onSubmit:e.submit},{default:t(()=>[l("div",ee,[l("div",ae,[se,s(N,{modelValue:e.nombreEspecialidad,"onUpdate:modelValue":i[0]||(i[0]=d=>e.nombreEspecialidad=d),modelModifiers:{trim:!0},"input-class":"text-center",dense:"",filled:"",required:""},null,8,["modelValue"])]),l("div",ie,[s(E,{label:"Editar",class:"q-px-xl",loading:e.loading,type:"submit",color:"green-9"},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var te=k(Y,[["render",le]]);const oe=[{name:"id",label:"#",align:"left",field:"id",sortable:!0},{name:"rol",label:"ESPECIALIDADES",align:"left",field:"nombre",sortable:!0},{name:"estado",label:"ESTADO",align:"left",field:"estado",sortable:!0},{name:"acciones",label:"ACCIONES",align:"center"}],de=$({name:"IndexEspecialidad",components:{AgregarEspecialidad:K,EditarEspecialidad:te},setup(){const e=g([]),i=g(!1),o=g(!1),{mostrarNotify:n}=A(),m=g({}),r=g(!1),{validarPermisos:d}=F(),p=async()=>{i.value=!1,o.value=!1,r.value=!0;try{const{data:{especialidades:v}}=await y.get("/especialidades/all");e.value=v}catch(v){alert(v)}r.value=!1};return p(),{activarDesactivarEspecialidad:async(v,_)=>{try{await y.delete(`/especialidades/${v}/${_}`),n("positive",`Especialidad ${_?"Activado":"Inactivado"} exitosamente`),p()}catch(L){alert(L)}},columns:oe,editarEspecialidad:v=>{m.value=v,o.value=!0},eliminarEspecialidad:async v=>{U.create({title:"\xBFDeseas Eliminar esta especialidad?",message:"Una vez eliminado no podra recuperarse...!",ok:{push:!0,label:"Eliminar",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{Q.show({message:"Cargando..."});try{const{data:_}=await y.delete(`/especialidades/${v}`);n("positive",_.msg,"top-right"),p()}catch(_){n("negative",_.response.data.message)}Q.hide()})},modalAgregarEspecialidad:i,loading:r,modalEditarDignidad:o,getEspecialidades:p,especialidadData:m,rows:e,validarPermisos:d}}}),re={class:"row q-py-lg q-pl-md"},ne=l("div",{class:"col-md-6"},[l("label",{class:"text-h6"},"Listado de Especialidades")],-1),ce={class:"col-md-6 flex justify-end"},ue={class:"row"},me={class:"col-md-12"},pe={class:"q-pa-md"},ve={class:"full-width row flex-center text-lime-10 q-gutter-sm"},ge=l("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1);function fe(e,i,o,n,m,r){const d=C("AgregarEspecialidad"),p=C("EditarEspecialidad");return c(),D(V,null,[s(O,null,{default:t(()=>[l("div",re,[ne,l("div",ce,[e.validarPermisos("Agregar Especialidad")?(c(),u(E,{key:0,class:"q-mr-md",color:"secondary","icon-right":"add_circle",label:"nuevo",onClick:i[0]||(i[0]=a=>e.modalAgregarEspecialidad=!0)})):b("",!0)])]),l("div",ue,[l("div",me,[l("div",pe,[e.validarPermisos("Ver Especialidades")?(c(),u(T,{key:0,class:"my-sticky-header-table",rows:e.rows,loading:e.loading,columns:e.columns,"row-key":"name"},{"body-cell-acciones":t(a=>[s(w,{props:a},{default:t(()=>[e.validarPermisos("Editar Especialidad")&&a.row.estado?(c(),u(E,{key:0,round:"",color:"primary",onClick:f=>e.editarEspecialidad(a.row),icon:"edit",class:"q-mr-sm",size:"11px"},null,8,["onClick"])):b("",!0),a.row.estado&&e.validarPermisos("Inactivar Especialidad")?(c(),u(E,{key:1,round:"",color:"blue-grey",icon:"close",onClick:f=>e.activarDesactivarEspecialidad(a.row.id,!1),size:"11px"},null,8,["onClick"])):(c(),D(V,{key:2},[!a.row.estado&&e.validarPermisos("Activar Especialidad")?(c(),u(E,{key:0,round:"",color:"positive",class:"q-mr-sm",icon:"done",onClick:f=>e.activarDesactivarEspecialidad(a.row.id,!0),size:"11px"},null,8,["onClick"])):b("",!0),!a.row.estado&&e.validarPermisos("Eliminar Especialidad")?(c(),u(E,{key:1,round:"",color:"deep-orange",icon:"delete",onClick:f=>e.eliminarEspecialidad(a.row.id),size:"11px"},null,8,["onClick"])):b("",!0)],64))]),_:2},1032,["props"])]),"body-cell-estado":t(a=>[s(w,{props:a},{default:t(()=>[a.value?(c(),u(x,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(c(),u(x,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-id":t(a=>[s(w,{props:a},{default:t(()=>[B(j(a.pageIndex+1),1)]),_:2},1032,["props"])]),"no-data":t(({icon:a,filter:f})=>[l("div",ve,[s(z,{size:"2em",name:"sentiment_dissatisfied"}),ge,s(z,{size:"2em",name:f?"filter_b_and_w":a},null,8,["name"])])]),_:1},8,["rows","loading","columns"])):b("",!0)])])])]),_:1}),s(q,{modelValue:e.modalAgregarEspecialidad,"onUpdate:modelValue":i[1]||(i[1]=a=>e.modalAgregarEspecialidad=a)},{default:t(()=>[s(d,{onActualizarLista:e.getEspecialidades},null,8,["onActualizarLista"])]),_:1},8,["modelValue"]),s(q,{modelValue:e.modalEditarDignidad,"onUpdate:modelValue":i[2]||(i[2]=a=>e.modalEditarDignidad=a)},{default:t(()=>[s(p,{onActualizarLista:e.getEspecialidades,especialidadData:e.especialidadData},null,8,["onActualizarLista","especialidadData"])]),_:1},8,["modelValue"])],64)}var Ie=k(de,[["render",fe]]);export{Ie as default};
