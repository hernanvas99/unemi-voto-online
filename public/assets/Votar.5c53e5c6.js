import{l as J,n as ye,s as xe,x as _,F as c,H as R,J as oe,r as $,A as K,D as be,am as Ce,ap as qe,aa as we,ab as Y,Z as ke,ac as Ae,ad as F,ae as Z,ah as ie,R as ee,ai as te,C as Pe,bk as Ie,bl as $e,B as Se,G as Te,aD as Ve,h as G,a9 as Ne,_ as Ee,d as De,a as Be,o as A,S as H,g as f,aw as Le,ax as le,c as E,e as g,f as p,av as Q,X as U,be as ae,at as re,T as j,as as W,bm as se,aq as ue,U as Qe}from"./index.86c036ad.js";import{d as ze,Q as ce,c as de,a as ve}from"./QItem.faa27fdc.js";import{g as fe,s as me}from"./touch.70a9dd44.js";import{u as Me,d as ge}from"./date.348aeeb6.js";import{u as Re,a as Ue,b as Oe}from"./use-fullscreen.7000f2af.js";import{Q as Ye}from"./QPage.4cf48411.js";import{l as Fe}from"./index.013d7452.js";import{A as ne}from"./Api.0193aa3b.js";import{u as He}from"./auth-user.43655eae.js";import{u as je}from"./useHelpers.4fa72bec.js";import"./index.2cf0d985.js";var X=J({name:"QBanner",props:{...ye,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:i}){const{proxy:{$q:u}}=oe(),y=xe(e,u),s=_(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(y.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),t=_(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const a=[c("div",{class:"q-banner__avatar col-auto row items-center self-start"},R(i.avatar)),c("div",{class:"q-banner__content col text-body2"},R(i.default))],l=R(i.action);return l!==void 0&&a.push(c("div",{class:t.value},l)),c("div",{class:s.value+(e.inlineActions===!1&&l!==void 0?" q-banner--top-padding":""),role:"alert"},a)}}});const We={ratio:[String,Number]};function Xe(e,i){return _(()=>{const u=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const Ge=16/9;var he=J({name:"QImg",props:{...We,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ge},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:i,emit:u}){const y=$(e.initialRatio),s=Xe(e,y);let t;const a=[$(null),$(T())],l=$(0),r=$(!1),x=$(!1),d=_(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),w=_(()=>({width:e.width,height:e.height})),b=_(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),S=_(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));K(()=>P(),I);function P(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function T(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function I(n){clearTimeout(t),x.value=!1,n===null?(r.value=!1,a[l.value^1].value=T()):r.value=!0,a[l.value].value=n}function L({target:n}){t!==null&&(clearTimeout(t),y.value=n.naturalHeight===0?.5:n.naturalWidth/n.naturalHeight,C(n,1))}function C(n,D){t===null||D===1e3||(n.complete===!0?v(n):t=setTimeout(()=>{C(n,D+1)},50))}function v(n){t!==null&&(l.value=l.value^1,a[l.value].value=null,r.value=!1,x.value=!1,u("load",n.currentSrc||n.src))}function q(n){clearTimeout(t),r.value=!1,x.value=!0,a[l.value].value=null,a[l.value^1].value=T(),u("error",n)}function V(n){const D=a[n].value,B={key:"img_"+n,class:b.value,style:S.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...D};return l.value===n?(B.class+=" q-img__image--waiting",Object.assign(B,{onLoad:L,onError:q})):B.class+=" q-img__image--loaded",c("div",{class:"q-img__container absolute-full",key:"img"+n},c("img",B))}function m(){return r.value!==!0?c("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},R(i[x.value===!0?"error":"default"])):c("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():e.noSpinner===!0?void 0:[c(qe,{color:e.spinnerColor,size:e.spinnerSize})])}return I(P()),be(()=>{clearTimeout(t),t=null}),()=>{const n=[];return s.value!==null&&n.push(c("div",{key:"filler",style:s.value})),x.value!==!0&&(a[0].value!==null&&n.push(V(0)),a[1].value!==null&&n.push(V(1))),n.push(c(Ce,{name:"q-transition--fade"},m)),c("div",{class:d.value,style:w.value,role:"img","aria-label":e.alt},n)}}});function Ke(e){const i=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((u,y)=>{const s=parseFloat(u);s&&(i[y]=s)}),i}var Je=we({name:"touch-swipe",beforeMount(e,{value:i,arg:u,modifiers:y}){if(y.mouse!==!0&&Y.has.touch!==!0)return;const s=y.mouseCapture===!0?"Capture":"",t={handler:i,sensitivity:Ke(u),direction:fe(y),noop:ke,mouseStart(a){me(a,t)&&Ae(a)&&(F(t,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(me(a,t)){const l=a.target;F(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,l){Y.is.firefox===!0&&Z(e,!0);const r=ie(a);t.event={x:r.left,y:r.top,time:Date.now(),mouse:l===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){ee(a);return}const l=Date.now()-t.event.time;if(l===0)return;const r=ie(a),x=r.left-t.event.x,d=Math.abs(x),w=r.top-t.event.y,b=Math.abs(w);if(t.event.mouse!==!0){if(d<t.sensitivity[1]&&b<t.sensitivity[1]){t.end(a);return}}else if(d<t.sensitivity[2]&&b<t.sensitivity[2])return;const S=d/l,P=b/l;t.direction.vertical===!0&&d<b&&d<100&&P>t.sensitivity[0]&&(t.event.dir=w<0?"up":"down"),t.direction.horizontal===!0&&d>b&&b<100&&S>t.sensitivity[0]&&(t.event.dir=x<0?"left":"right"),t.direction.up===!0&&d<b&&w<0&&d<100&&P>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&d<b&&w>0&&d<100&&P>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&d>b&&x<0&&b<100&&S>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&d>b&&x>0&&b<100&&S>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(ee(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ze(),t.styleCleanup=T=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const I=()=>{document.body.classList.remove("no-pointer-events--children")};T===!0?setTimeout(I,50):I()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:d,y:b}})):t.end(a)},end(a){t.event!==void 0&&(te(t,"temp"),Y.is.firefox===!0&&Z(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&ee(a),t.event=void 0)}};if(e.__qtouchswipe=t,y.mouse===!0){const a=y.mouseCapture===!0||y.mousecapture===!0?"Capture":"";F(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}Y.has.touch===!0&&F(t,"main",[[e,"touchstart","touchStart",`passive${y.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const u=e.__qtouchswipe;u!==void 0&&(i.oldValue!==i.value&&(typeof i.value!="function"&&u.end(),u.handler=i.value),u.direction=fe(i.modifiers))},beforeUnmount(e){const i=e.__qtouchswipe;i!==void 0&&(te(i,"main"),te(i,"temp"),Y.is.firefox===!0&&Z(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchswipe)}});const Ze={name:{required:!0},disable:Boolean},pe={setup(e,{slots:i}){return()=>c("div",{class:"q-panel scroll",role:"tabpanel"},R(i.default))}},et={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},tt=["update:modelValue","beforeTransition","transition"];function at(){const{props:e,emit:i,proxy:u}=oe(),{getCacheWithFn:y}=Me();let s,t;const a=$(null),l=$(null);function r(o){const h=e.vertical===!0?"up":"left";n((u.$q.lang.rtl===!0?-1:1)*(o.direction===h?1:-1))}const x=_(()=>[[Je,r,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),d=_(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),w=_(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),b=_(()=>`--q-transition-duration: ${e.transitionDuration}ms`),S=_(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),P=_(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),T=_(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);K(()=>e.modelValue,(o,h)=>{const N=v(o)===!0?q(o):-1;t!==!0&&m(N===-1?0:N<q(h)?-1:1),a.value!==N&&(a.value=N,i("beforeTransition",o,h),Pe(()=>{i("transition",o,h)}))});function I(){n(1)}function L(){n(-1)}function C(o){i("update:modelValue",o)}function v(o){return o!=null&&o!==""}function q(o){return s.findIndex(h=>h.props.name===o&&h.props.disable!==""&&h.props.disable!==!0)}function V(){return s.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function m(o){const h=o!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?d.value:w.value):null;l.value!==h&&(l.value=h)}function n(o,h=a.value){let N=h+o;for(;N>-1&&N<s.length;){const M=s[N];if(M!==void 0&&M.props.disable!==""&&M.props.disable!==!0){m(o),t=!0,i("update:modelValue",M.props.name),setTimeout(()=>{t=!1});return}N+=o}e.infinite===!0&&s.length>0&&h!==-1&&h!==s.length&&n(o,o===-1?s.length:-1)}function D(){const o=q(e.modelValue);return a.value!==o&&(a.value=o),!0}function B(){const o=v(e.modelValue)===!0&&D()&&s[a.value];return e.keepAlive===!0?[c($e,P.value,[c(T.value===!0?y(S.value,()=>({...pe,name:S.value})):pe,{key:S.value,style:b.value},()=>o)])]:[c("div",{class:"q-panel scroll",style:b.value,key:S.value,role:"tabpanel"},[o])]}function k(){if(s.length!==0)return e.animated===!0?[c(Ce,{name:l.value},B)]:B()}function z(o){return s=Ie(R(o.default,[])).filter(h=>h.props!==null&&h.props.slot===void 0&&v(h.props.name)===!0),s.length}function O(){return s}return Object.assign(u,{next:I,previous:L,goTo:C}),{panelIndex:a,panelDirectives:x,updatePanelsList:z,updatePanelIndex:D,getPanelContent:k,getEnabledPanels:V,getPanels:O,isValidPanelName:v,keepAliveProps:P,needsUniqueKeepAliveWrapper:T,goToPanelByOffset:n,goToPanel:C,nextPanel:I,previousPanel:L}}var _e=J({name:"QCarouselSlide",props:{...Ze,imgSrc:String},setup(e,{slots:i}){const u=_(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>c("div",{class:"q-carousel__slide",style:u.value},R(i.default))}});const nt=["top","right","bottom","left"],ot=["regular","flat","outline","push","unelevated"];var it=J({name:"QCarousel",props:{...ye,...et,...Re,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>ot.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>nt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ue,...tt],setup(e,{slots:i}){const{proxy:{$q:u}}=oe(),y=xe(e,u);let s,t;const{updatePanelsList:a,getPanelContent:l,panelDirectives:r,goToPanel:x,previousPanel:d,nextPanel:w,getEnabledPanels:b,panelIndex:S}=at(),{inFullscreen:P}=Oe(),T=_(()=>P.value!==!0&&e.height!==void 0?{height:e.height}:{}),I=_(()=>e.vertical===!0?"vertical":"horizontal"),L=_(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(P.value===!0?" fullscreen":"")+(y.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${I.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${V.value}`:"")),C=_(()=>{const k=[e.prevIcon||u.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||u.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&u.lang.rtl===!0?k.reverse():k}),v=_(()=>e.navigationIcon||u.iconSet.carousel.navigationIcon),q=_(()=>e.navigationActiveIcon||v.value),V=_(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),m=_(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));K(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(s),n())}),K(()=>e.autoplay,k=>{k?n():clearInterval(s)});function n(){const k=Ve(e.autoplay)===!0?e.autoplay:5e3;s=setTimeout(k>=0?w:d,Math.abs(k))}Se(()=>{e.autoplay&&n()}),be(()=>{clearInterval(s)});function D(k,z){return c("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${k} q-carousel__navigation--${V.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[c("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},b().map(z))])}function B(){const k=[];if(e.navigation===!0){const z=i["navigation-icon"]!==void 0?i["navigation-icon"]:o=>c(G,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),O=t-1;k.push(D("buttons",(o,h)=>{const N=o.props.name,M=S.value===h;return z({index:h,maxIndex:O,name:N,active:M,btnProps:{icon:M===!0?q.value:v.value,size:"sm",...m.value},onClick:()=>{x(N)}})}))}else if(e.thumbnails===!0){const z=e.controlColor!==void 0?` text-${e.controlColor}`:"";k.push(D("thumbnails",O=>{const o=O.props;return c("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+z,src:o.imgSrc||o["img-src"],onClick:()=>{x(o.name)}})}))}return e.arrows===!0&&S.value>=0&&((e.infinite===!0||S.value>0)&&k.push(c("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${I.value} absolute flex flex-center`},[c(G,{icon:C.value[0],...m.value,onClick:d})])),(e.infinite===!0||S.value<t-1)&&k.push(c("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${I.value} absolute flex flex-center`},[c(G,{icon:C.value[1],...m.value,onClick:w})]))),Ne(i.control,k)}return()=>(t=a(i),c("div",{class:L.value,style:T.value},[Te("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>r.value)].concat(B())))}});const lt=De({name:"IndexElegirCandidato",setup(){const e=$([]),i=He(),u=$([{descripcion:""}]),{mostrarNotify:y}=je(),s=$(!1),t=$(!1),a=window.screen.width;let l;const r=$({isVoteToday:!1,msg:"",error:!1});let x="",d="";const{claim:{user:w}}=Be.read(i.token);d=`${"http://localhost:3000/api".slice(0,-4)}/imgs`;let S=new Date;x=S.getFullYear()+"-"+String(S.getMonth()+1).padStart(2,"0")+"-"+String(S.getDate()).padStart(2,"0");const P=async()=>{try{s.value=!0;const{data:{existeVoto:q}}=await ne.get(`/votaciones/comprobar-voto/${w.id}`);if(s.value=q.voto,!s.value||s.value==0){const{data:{msg:V,response:m}}=await ne.get("/votaciones/get");if(!m)t.value=!0;else if(m.disponible){if(!m.inicio_votacion){r.value.msg=`La hora de votacion inicia a las ${m.hora_inicio} y finaliza a las ${m.hora_fin}`,r.value.error=!0;return}if(m.finalizo_votacion){r.value.msg=`Ya paso el tiem de votacion inicio a las ${m.hora_inicio} y finaliza a las ${m.hora_fin}`,r.value.error=!0;return}V.map(n=>n.selected=!1),e.value=V,u.value=m}else{let n=m.fecha_inicio.split("T")[0].split("-");var C=new Date(parseInt(n[0]),parseInt(n[1]),parseInt(n[2])),v=new Date(parseInt(x.split("-")[0]),parseInt(x.split("-")[1]),parseInt(x.split("-")[2]));C>v&&(r.value.msg=`Aun no es la fecha de votacion, esta prevista para el ${n[2]}/${n[1]}/${n[0]} desde las ${m.hora_inicio} hasta ${m.hora_fin}`,r.value.error=!0),C<v&&(r.value.msg=`La fecha de votacion ya paso, fue realizado el ${n[2]}/${n[1]}/${n[0]} a las ${m.hora_inicio} hasta ${m.hora_fin}`,r.value.error=!0)}}}catch(q){alert(q)}},T=(C,v)=>{if(C==0)return v<=4;if(C==1)return v>4&&v<10;if(C==2)return v>9&&v<15},I=C=>{e.value.map(v=>{v.id!=C&&(v.selected=!1)})},L=()=>{let C="<b>Lista Elegida:</b> Voto en Blanco";const v=e.value.find(q=>q.selected);v&&(C=`<b>LISTA SELECTA:</b> ${v.descripcion} <br>
        <b>CANDIDATO:</b> ${v.participante}`),Le.create({title:"Confirmar votaci\xF3n?",message:C,ok:{push:!0,label:"Guardar",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"},html:!0}).onOk(async()=>{try{const q=Date.now(),V={votante_id:w.id,email:w.email,estudiante:w.estudiante,fecha_votacion:ge.formatDate(q,"DD/MM/YYYY"),hora_votacion:ge.formatDate(q,"HH:mmA"),cedula:w.cedula,presidente_id:v.presidente_id,eleccion:u.value.descripcion,periodo:e.value[0].periodo};le.show({message:"Cargando..."});const{data:m}=await ne.post("/votaciones/add",V);le.hide(),y("positive",m.msg,"top-right"),P(),l.emit("voto-generado")}catch(q){console.log(q),y("negative",q.response.data.message)}})};return P(),Se(()=>{l=Fe("http://localhost:3000"),l.on("connect",()=>{console.log("conectado")})}),{anchoPantalla:a,detalleApertura:u,existeVoto:s,error:r,listCandidatos:e,slide:$(1),guardarVotacion:L,seleccionarCandidato:I,isPeriodoActivo:t,urlImage:d,validarCarousel:T}}}),rt={key:0,class:"row flex flex-center",style:{height:"50vh"}},st={class:"col-md-6"},ut={class:"q-pa-md q-gutter-sm"},ct=g("img",{src:"https://periodicoamarillo.com/wp-content/uploads/2020/11/V-1024x576-1.jpg",style:{width:"180px",height:"144px"}},null,-1),dt=g("span",{class:"text-h6"}," NO HAY ELECCIONES ACTIVAS ACTUALMENTE...! ",-1),vt={key:0,class:"row flex flex-center",style:{height:"50vh"}},ft={class:"col-md-6"},mt={class:"q-pa-md q-gutter-sm"},gt=g("img",{src:"https://periodicoamarillo.com/wp-content/uploads/2020/11/V-1024x576-1.jpg",style:{width:"180px",height:"144px"}},null,-1),ht={class:"text-h6"},pt={class:"row q-pt-md"},_t={class:"col-md-4 offset-4 flex flex-center"},yt={class:"q-my-none"},xt={class:"row"},bt={class:"col-xs-12 col-md-12 bg-positive q-mt-md"},Ct={style:{"margin-left":"-25px"},class:"row fit flex-center items-center q-gutter-xl q-col-gutter no-wrap"},St={class:"row fit flex-center items-center q-gutter-xl q-col-gutter no-wrap"},qt={class:"row q-mt-lg"},wt={class:"col-md-4 offset-4 flex flex-center"},kt={key:1,class:"row flex flex-center",style:{height:"50vh"}},At={class:"col-md-6"},Pt={class:"q-pa-md q-gutter-sm"},It=g("span",{class:"text-h6"}," NO HAY CANDIDATOS INSCRITOS AUN EN ESTA ELECCI\xD3N ",-1),$t={key:1,class:"row flex flex-center",style:{height:"50vh"}},Tt={class:"col-md-6"},Vt={class:"q-pa-md q-gutter-sm"},Nt=g("img",{src:"https://periodicoamarillo.com/wp-content/uploads/2020/11/V-1024x576-1.jpg",style:{width:"180px",height:"144px"}},null,-1),Et=g("span",{class:"text-h6"}," USTED YA HA VOTADO, MUCHAS GRACIAS POR PARTICIPAR..! ",-1);function Dt(e,i,u,y,s,t){return A(),H(Ye,{class:""},{default:f(()=>[e.isPeriodoActivo?(A(),E("div",rt,[g("div",st,[g("div",ut,[p(X,{rounded:"",class:"bg-grey-3 q-py-xl text-center"},{avatar:f(()=>[ct]),default:f(()=>[dt]),_:1})])])])):(A(),E(Q,{key:1},[e.existeVoto?(A(),E("div",$t,[g("div",Tt,[g("div",Vt,[p(X,{rounded:"",class:"bg-grey-3 q-py-xl text-center"},{avatar:f(()=>[Nt]),default:f(()=>[Et]),_:1})])])])):(A(),E(Q,{key:0},[e.error.error?(A(),E("div",vt,[g("div",ft,[g("div",mt,[p(X,{rounded:"",class:"bg-grey-3 q-py-xl text-center"},{avatar:f(()=>[gt]),default:f(()=>[g("span",ht,U(e.error.msg),1)]),_:1})])])])):(A(),E(Q,{key:1},[g("div",pt,[g("div",_t,[g("h5",yt,U(e.detalleApertura.descripcion),1)])]),e.listCandidatos.length>0?(A(),E(Q,{key:0},[g("div",xt,[g("div",bt,[p(it,{modelValue:e.slide,"onUpdate:modelValue":i[0]||(i[0]=a=>e.slide=a),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary",navigation:"",padding:"",arrows:"",height:"470px",class:"bg-grey-1 shadow-2 rounded-borders q-pb-none"},{default:f(()=>[e.anchoPantalla<500?(A(!0),E(Q,{key:0},ae(e.listCandidatos,(a,l)=>(A(),H(_e,{key:l,name:l+1,class:"column no-wrap"},{default:f(()=>[g("div",Ct,[p(re,{class:"my-card col-xs-12 col-md-2"},{default:f(()=>[p(ce,{class:"q-pt-md"},{default:f(()=>[p(de,null,{default:f(()=>[p(ve,{class:"text-center text-h6 text-red-10"},{default:f(()=>[j(U(a.descripcion),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),p(W,{class:"flex flex-center q-py-none"},{default:f(()=>[p(he,{src:e.urlImage+"/"+a.ruta_foto,style:{"max-width":"140px",height:"160px"},fit:"scale-down"},null,8,["src"])]),_:2},1024),p(W,{class:"text-subtitle1 text-center q-pb-none q-pt-sm text-weight-regular descripcion"},{default:f(()=>[j(U(a.participante),1)]),_:2},1024),p(se,{class:"flex flex-center q-py-none"},{default:f(()=>[p(ue,{size:"70px",color:"teal",onClick:r=>e.seleccionarCandidato(a.id),modelValue:a.selected,"onUpdate:modelValue":r=>a.selected=r},null,8,["onClick","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)])]),_:2},1032,["name"]))),128)):(A(!0),E(Q,{key:1},ae(Math.ceil(e.listCandidatos.length/5),(a,l)=>(A(),H(_e,{key:l,name:l+1,class:"column no-wrap"},{default:f(()=>[g("div",St,[(A(!0),E(Q,null,ae(e.listCandidatos,(r,x)=>(A(),E(Q,{key:r.id},[e.validarCarousel(l,x)?(A(),H(re,{key:0,class:"my-card col-xs-12 col-md-2"},{default:f(()=>[p(ce,{class:"q-pt-md"},{default:f(()=>[p(de,null,{default:f(()=>[p(ve,{class:"text-center text-h6 text-red-10"},{default:f(()=>[j(U(r.descripcion),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),p(W,{class:"flex flex-center q-py-none"},{default:f(()=>[p(he,{src:e.urlImage+"/"+r.ruta_foto,style:{"max-width":"140px",height:"160px"},fit:"scale-down"},null,8,["src"])]),_:2},1024),p(W,{class:"text-subtitle1 text-center q-pb-none q-pt-sm text-weight-regular descripcion"},{default:f(()=>[j(U(r.participante),1)]),_:2},1024),p(se,{class:"flex flex-center q-py-none"},{default:f(()=>[p(ue,{size:"70px",color:"teal",onClick:d=>e.seleccionarCandidato(r.id),modelValue:r.selected,"onUpdate:modelValue":d=>r.selected=d},null,8,["onClick","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):Qe("",!0)],64))),128))])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])]),g("div",qt,[g("div",wt,[p(G,{onClick:e.guardarVotacion,color:"purple",class:"full-width",glossy:"","icon-right":"how_to_vote",label:"TERMINAR"},null,8,["onClick"])])])],64)):(A(),E("div",kt,[g("div",At,[g("div",Pt,[p(X,{rounded:"",class:"bg-grey-3 q-py-xl text-center"},{avatar:f(()=>[]),default:f(()=>[It]),_:1})])])]))],64))],64))],64))]),_:1})}var jt=Ee(lt,[["render",Dt]]);export{jt as default};