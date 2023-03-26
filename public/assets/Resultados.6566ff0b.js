import{Q as W}from"./QSelect.cd845e3e.js";import{c as k,Q as P,a as T}from"./QItem.3a1f1059.js";import{Q as X}from"./QList.f8aa654c.js";import{Q as K}from"./QPage.152e8f99.js";import{_ as Y,d as Z,r as i,A as ee,B as te,o as g,c as B,f as p,g as u,av as D,e as t,X as c,E as N,S as A,T as ae,bd as se,V as O}from"./index.2c7c5b43.js";import{l as oe}from"./index.013d7452.js";import{d as U,A as z}from"./dom-to-image.158f8a69.js";import{u as le,A as q}from"./Api.b16e05d9.js";import"./rtl.b51694b1.js";import"./index.2cf0d985.js";const ie=Z({name:"IndexResultados",setup(){const s=i([]),h=le(),y=i([]),S=i([]),b=i({cedula:"",candidato:""}),m=i(""),n=i([]),_=i([]),x=i([]);let V=0,f=null,w=i(0),E=i("----"),C=i("----"),$=i("----"),v=i("----");const Q=i({series:[{data:_}],chart:{height:280,type:"bar",events:{click:function(e,l,o){o.dataPointIndex!=-1&&L(x.value[o.dataPointIndex],o.dataPointIndex)}}},colors:n,plotOptions:{bar:{columnWidth:"45%",distributed:!0}},dataLabels:{enabled:!0},legend:{show:!1},xaxis:{categories:x,labels:{style:{colors:n,fontSize:"12px"}}}}),M=async()=>{try{const{data:{aperturas:e}}=await q.get("/aperturas/all");e.forEach(l=>{l.estado&&(m.value=l.id),y.value.push({label:l.descripcion,value:l.id})}),R()}catch(e){alert(e)}},I=e=>Math.floor(Math.random()*e),F=async()=>{try{var e=document.querySelector("#chart"),l=document.querySelector("#comitiva");const d=y.value.find(J=>J.value==m.value);let r={estadistica:"",comitiva:"",fecha:E.value,horas:`${C.value} hasta ${$.value}`,totalVotos:w.value,numCandidatos:_.value.length,ganador:v.value,eleccionSelecta:d.label};h.loading.show({message:"Cargando..."});const j=await U.toPng(e),G=await U.toPng(l);r.estadistica=j,r.comitiva=G;const H=await q.post("/reportes/ganador",JSON.stringify(r),{responseType:"blob"});var o=new Blob([H.data],{type:"application/pdf"}),a=URL.createObjectURL(o);window.open(a),h.loading.hide()}catch(d){h.loading.hide(),alert(d)}},R=async()=>{try{n.value=[],x.value=[],_.value=[],w.value=0;const{data:{msg:e}}=await q.get(`/votaciones/votos/get/${m.value}`);s.value=e;let l=Math.max(...e.map(a=>parseInt(a.totalVotos))),o=e.filter(a=>a.totalVotos==l);if(o.length>0&&L(o[0].descripcion,null,o[0]),e.length>0){if(e[0].comenzo_votacion)v.value="Sin Empezar";else if(e[0].disponible&&!e[0].finalizo_votacion)v.value="En Proceso";else if(o.length==1&&(v.value=o[0].descripcion),o.length>1){let a="";o.forEach((d,r)=>{a+=` ${d.descripcion} ${r+1==o.length?"":","}`}),v.value=`Empate entre las listas ${a}`}}for(let a=0;a<e.length;a++)n.value.push(`rgb(${I(256)}, ${I(256)}, ${I(256)})`),x.value.push(e[a].descripcion),_.value.push(e[a].totalVotos),w.value+=e[a].totalVotos;if(e.length!=0){let a=e[0].fecha_inicio.split("T"),d=e[0].hora_inicio.split(":"),r=e[0].hora_fin.split(":");E.value=`${a[0].split("-")[2]}/${a[0].split("-")[1]}/${a[0].split("-")[0]}`,C.value=`${d[0]}:${d[1]}${parseInt(d[0])<12?"am":"pm"}`,$.value=`${r[0]}:${r[1]}${parseInt($[0])<12?"am":"pm"}`}V==0?(f=new z(document.querySelector("#chart"),Q.value),f.render()):(f.destroy(),f=new z(document.querySelector("#chart"),Q.value),f.render()),V++}catch(e){alert(e)}},L=async(e,l=null,o=null)=>{try{const{data:{msg:a}}=await q.get(`/votaciones/votos/getComitiva/${m.value}/${e}`);b.value=l!=null?s.value[l]:o,b.value.lista=e,S.value=a}catch(a){alert(a)}};return ee(m,(e,l)=>{V!=0&&R()}),te(()=>{M();const e=oe("http://localhost:3000");e.on("connect",()=>{console.log("conectado")}),e.on("actualizar-grafica",l=>{R()})}),{arrayAperturas:y,fecha_inicio:E,hora_inicio:C,hora_fin:$,ganador:v,apertura_id:m,getPDF:F,data:_,listComitivaCandidato:S,presidenteSelected:b,totalVotos:w}}}),ce={class:"row q-py-lg q-pl-md"},ne=t("div",{class:"col-md-6"},[t("label",{class:"text-h6"},"RESULTADOS ELECTORALES")],-1),de={class:"col-md-6 flex justify-end"},re=t("label",{class:"flex flex-center q-pr-md text-weight-medium text-body2"}," Filtrar por elecciones: ",-1),ue={class:"row"},me=t("div",{class:"col-7 q-ml-lg"},[t("div",{style:{width:"100%",height:"300px"},id:"chart"})],-1),he={class:"col-4 q-my-md q-ml-lg"},ve=t("label",{class:"flex flex-center text-h6"},"Detalles:",-1),pe={class:"row q-pb-xl"},_e=t("div",{class:"text-subtitle1 q-my-sm col-6 text-weight-medium"},"Fecha de votacion:",-1),fe={class:"text-subtitle1 q-my-sm col-6"},ge=t("div",{class:"text-subtitle1 q-my-sm col-6 text-weight-medium"},"Horas de votacion:",-1),ye={class:"text-subtitle1 q-my-sm col-6"},be=t("div",{class:"text-subtitle1 q-my-sm col-6 text-weight-medium"},"Total de votos:",-1),xe={class:"text-subtitle1 q-my-sm col-6"},we=t("div",{class:"text-subtitle1 q-my-sm col-6 text-weight-medium"},"N\xB0 de Candidatos:",-1),$e={class:"text-subtitle1 q-my-sm col-6"},qe=t("div",{class:"text-subtitle1 q-my-sm col-6 text-weight-medium flex flex-center"},"Ganador:",-1),Se={class:"text-subtitle1 q-my-sm col-6"},Ve={class:"row",id:"comitiva"},Ee={class:"col-7 offset-2"},Ce={class:"text-weight-bold"},Ie={class:"row"},Re={class:"col-3"},Ae={class:"col-6"},Qe={class:"col-3"},Le={class:"row"},ke={class:"col-3"},Pe={class:"col-6"},Te={class:"col-3"},Be=t("div",{id:"captura"},null,-1);function De(s,h,y,S,b,m){return g(),B(D,null,[p(K,null,{default:u(()=>[t("div",ce,[ne,t("div",de,[re,p(W,{filled:"",required:"",dense:"","emit-value":"","map-options":"",modelValue:s.apertura_id,"onUpdate:modelValue":h[0]||(h[0]=n=>s.apertura_id=n),options:s.arrayAperturas,style:{width:"50%"},class:"q-mr-lg"},null,8,["modelValue","options"])])]),t("div",ue,[me,t("div",he,[ve,t("div",pe,[_e,t("div",fe,c(s.fecha_inicio),1),ge,t("div",ye,c(s.hora_inicio)+" hasta "+c(s.hora_fin),1),be,t("div",xe,c(s.totalVotos),1),we,t("div",$e,c(s.data.length),1),qe,t("div",Se,c(s.ganador),1)])])]),t("div",Ve,[t("div",Ee,[p(X,{bordered:"",separator:""},{default:u(()=>[N((g(),A(P,{clickable:"",class:"bg-blue-grey-6 text-white flex flex-center"},{default:u(()=>[p(k,{class:"text-center flex flex-center",style:{display:"inline"}},{default:u(()=>[ae("COMITIVA - "),t("label",Ce,c(s.presidenteSelected.lista),1)]),_:1})]),_:1})),[[O]]),N((g(),A(P,{clickable:""},{default:u(()=>[p(k,null,{default:u(()=>[p(T,null,{default:u(()=>[t("div",Ie,[t("div",Re,c(s.presidenteSelected.cedula==""?"----":s.presidenteSelected.cedula),1),t("div",Ae,c(s.presidenteSelected.candidato==""?"----":s.presidenteSelected.candidato),1),t("div",Qe,c(s.presidenteSelected.candidato==""?"----":"PRESIDENTE"),1)])]),_:1}),(g(!0),B(D,null,se(s.listComitivaCandidato,n=>(g(),A(T,{key:n},{default:u(()=>[t("div",Le,[t("div",ke,c(n.cedula),1),t("div",Pe,c(n.candidato),1),t("div",Te,c(n.nombre),1)])]),_:2},1024))),128))]),_:1})]),_:1})),[[O]])]),_:1})])])]),_:1}),Be],64)}var We=Y(ie,[["render",De]]);export{We as default};
