import{_,d as v,r as u,u as y,a as h,o as w,c as V,e as t,w as S,f as a,g as d,Q as p,h as I,i as c}from"./index.2c7c5b43.js";import{u as k}from"./auth-user.3faec0ee.js";import{u as $}from"./useHelpers.e401e0ad.js";import{A as f}from"./Api.b16e05d9.js";import{_ as q}from"./logo.d3decd69.js";import"./index.2cf0d985.js";const B=v({name:"Login",setup(){const e=u(!1),{mostrarNotify:o}=$(),n=u({email:"",password:""}),l=y();return{form:n,loading:e,onSubmit:async()=>{try{e.value=!0;const{data:r}=await f.post("/auth/login",n.value),i=k();i.setToken(r.token);const{claim:{user:s}}=h.read(r.token);if(r.user=="administrativo"){const g=await f.get(`/roles/getPermisos/${s.rol_id}`);let m=[];g.data.permisos.forEach(b=>m.push(b.nombre)),i.setPermisos(m),l.push("/")}else l.push("/votaciones");e.value=!1}catch({response:{data:r}}){o("warning",r.msg,"top"),e.value=!1}},router:l}}}),Q={class:"area-login"},U=t("h1",{class:"title"},"Iniciar Sesion",-1),A={class:"login"},L=t("div",{class:"element-form"},[t("img",{src:q})],-1);function M(e,o,n,l,r,i){return w(),V("section",Q,[U,t("div",A,[L,t("form",{onSubmit:o[2]||(o[2]=S((...s)=>e.onSubmit&&e.onSubmit(...s),["prevent"])),class:"element-form"},[a(p,{"label-color":"blue-grey-3",class:"q-mb-lg","bg-color":"blue-grey-10",filled:"",label:"Ingresa tu email",modelValue:e.form.email,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form.email=s),modelModifiers:{trim:!0},required:""},{prepend:d(()=>[a(c,{name:"event",color:"blue-grey-3"})]),_:1},8,["modelValue"]),a(p,{type:"password","label-color":"blue-grey-3",filled:"","bg-color":"blue-grey-10",label:"Ingresa tu contrase\xF1a",modelValue:e.form.password,"onUpdate:modelValue":o[1]||(o[1]=s=>e.form.password=s),modelModifiers:{trim:!0},required:""},{prepend:d(()=>[a(c,{name:"event",color:"blue-grey-3"})]),_:1},8,["modelValue"]),a(I,{label:"Ingresar",class:"q-px-xl",loading:e.loading,type:"submit",color:"deep-purple-6"},null,8,["loading"])],32)])])}var T=_(B,[["render",M]]);export{T as default};