(self.webpackChunkholo=self.webpackChunkholo||[]).push([[626],{7673:(z,b,l)=>{l.d(b,{of:()=>g});var I=l(1413),o=l(6648);function g(...E){const _=(0,I.lI)(E);return(0,o.H)(E,_)}},274:(z,b,l)=>{l.d(b,{H:()=>g});var I=l(1397),o=l(8071);function g(E,_){return(0,o.T)(_)?(0,I.Z)(E,_,1):(0,I.Z)(E,1)}},5964:(z,b,l)=>{l.d(b,{p:()=>g});var I=l(9974),o=l(4360);function g(E,_){return(0,I.N)((x,j)=>{let v=0;x.subscribe((0,o._)(j,h=>E.call(_,h,v++)&&j.next(h)))})}},980:(z,b,l)=>{l.d(b,{j:()=>o});var I=l(9974);function o(g){return(0,I.N)((E,_)=>{try{E.subscribe(_)}finally{_.add(g)}})}},1397:(z,b,l)=>{l.d(b,{Z:()=>v});var I=l(6354),o=l(8750),g=l(9974),E=l(5225),_=l(4360),j=l(8071);function v(h,m,P=1/0){return(0,j.T)(m)?v((R,w)=>(0,I.T)((p,u)=>m(R,p,w,u))((0,o.Tg)(h(R,w))),P):("number"==typeof m&&(P=m),(0,g.N)((R,w)=>function x(h,m,P,R,w,p,u,X){const J=[];let V=0,de=0,re=!1;const q=()=>{re&&!J.length&&!V&&m.complete()},G=$=>V<R?U($):J.push($),U=$=>{p&&m.next($),V++;let ee=!1;(0,o.Tg)(P($,de++)).subscribe((0,_._)(m,F=>{w?.(F),p?G(F):m.next(F)},()=>{ee=!0},void 0,()=>{if(ee)try{for(V--;J.length&&V<R;){const F=J.shift();u?(0,E.N)(m,u,()=>U(F)):U(F)}q()}catch(F){m.error(F)}}))};return h.subscribe((0,_._)(m,G,()=>{re=!0,q()})),()=>{X?.()}}(R,w,h,P)))}},5558:(z,b,l)=>{l.d(b,{n:()=>E});var I=l(8750),o=l(9974),g=l(4360);function E(_,x){return(0,o.N)((j,v)=>{let h=null,m=0,P=!1;const R=()=>P&&!h&&v.complete();j.subscribe((0,g._)(v,w=>{h?.unsubscribe();let p=0;const u=m++;(0,I.Tg)(_(w,u)).subscribe(h=(0,g._)(v,X=>v.next(x?x(w,X,u,p++):X),()=>{h=null,R()}))},()=>{P=!0,R()}))})}},8141:(z,b,l)=>{l.d(b,{M:()=>_});var I=l(8071),o=l(9974),g=l(4360),E=l(3669);function _(x,j,v){const h=(0,I.T)(x)||j||v?{next:x,error:j,complete:v}:x;return h?(0,o.N)((m,P)=>{var R;null===(R=h.subscribe)||void 0===R||R.call(h);let w=!0;m.subscribe((0,g._)(P,p=>{var u;null===(u=h.next)||void 0===u||u.call(h,p),P.next(p)},()=>{var p;w=!1,null===(p=h.complete)||void 0===p||p.call(h),P.complete()},p=>{var u;w=!1,null===(u=h.error)||void 0===u||u.call(h,p),P.error(p)},()=>{var p,u;w&&(null===(p=h.unsubscribe)||void 0===p||p.call(h)),null===(u=h.finalize)||void 0===u||u.call(h)}))}):E.D}},4523:(z,b,l)=>{function I(g,E,_,x,j,v,h){try{var m=g[v](h),P=m.value}catch(R){return void _(R)}m.done?E(P):Promise.resolve(P).then(x,j)}function o(g){return function(){var E=this,_=arguments;return new Promise(function(x,j){var v=g.apply(E,_);function h(P){I(v,x,j,h,m,"next",P)}function m(P){I(v,x,j,h,m,"throw",P)}h(void 0)})}}l.d(b,{A:()=>o})},1626:(z,b,l)=>{l.r(b),l.d(b,{FetchBackend:()=>oe,HTTP_INTERCEPTORS:()=>pe,HTTP_TRANSFER_CACHE_ORIGIN_MAP:()=>Xe,HttpBackend:()=>p,HttpClient:()=>we,HttpClientJsonpModule:()=>Rt,HttpClientModule:()=>Pt,HttpClientXsrfModule:()=>vt,HttpContext:()=>ee,HttpContextToken:()=>$,HttpErrorResponse:()=>W,HttpEventType:()=>C,HttpFeatureKind:()=>K,HttpHandler:()=>w,HttpHeaderResponse:()=>te,HttpHeaders:()=>u,HttpParams:()=>U,HttpRequest:()=>Q,HttpResponse:()=>B,HttpResponseBase:()=>se,HttpStatusCode:()=>Me,HttpUrlEncodingCodec:()=>J,HttpXhrBackend:()=>Ee,HttpXsrfTokenExtractor:()=>ce,JsonpClientBackend:()=>Te,JsonpInterceptor:()=>yt,provideHttpClient:()=>Be,withFetch:()=>_t,withInterceptors:()=>Et,withInterceptorsFromDi:()=>Ke,withJsonpSupport:()=>Se,withNoXsrfProtection:()=>ze,withRequestsMadeViaParent:()=>gt,withXsrfConfiguration:()=>ge,\u0275HTTP_ROOT_INTERCEPTOR_FNS:()=>ye,\u0275HttpInterceptingHandler:()=>ie,\u0275HttpInterceptorHandler:()=>ie,\u0275REQUESTS_CONTRIBUTE_TO_STABILITY:()=>me,\u0275withHttpTransferCache:()=>bt});var I=l(4523),o=l(9381),g=l(7673),E=l(1985),_=l(6648),x=l(274),j=l(5964),v=l(6354),h=l(980),m=l(5558),P=l(8141),R=l(611);class w{}class p{}class u{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?"string"==typeof n?this.lazyInit=()=>{this.headers=new Map,n.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const s=t.slice(0,r),i=s.toLowerCase(),a=t.slice(r+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(a):this.headers.set(i,[a])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();const t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof u?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){const t=new u;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof u?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){const t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(n.name,t);const s=("a"===n.op?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":const i=n.value;if(i){let a=this.headers.get(t);if(!a)return;a=a.filter(d=>-1===i.indexOf(d)),0===a.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}else this.headers.delete(t),this.normalizedNames.delete(t)}}setHeaderEntries(n,t){const r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}}class J{encodeKey(n){return q(n)}encodeValue(n){return q(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}}const de=/%(\d[a-f0-9])/gi,re={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function q(e){return encodeURIComponent(e).replace(de,(n,t)=>re[t]??n)}function G(e){return`${e}`}class U{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new J,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function V(e,n){const t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[a,d]=-1==i?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,i)),n.decodeValue(s.slice(i+1))],c=t.get(a)||[];c.push(d),t.set(a,c)}),t}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{const r=n.fromObject[t],s=Array.isArray(r)?r.map(G):[G(r)];this.map.set(t,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();const t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){const t=[];return Object.keys(n).forEach(r=>{const s=n[r];Array.isArray(s)?s.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{const t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>""!==n).join("&")}clone(n){const t=new U({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":const t=("a"===n.op?this.map.get(n.param):void 0)||[];t.push(G(n.value)),this.map.set(n.param,t);break;case"d":if(void 0===n.value){this.map.delete(n.param);break}{let r=this.map.get(n.param)||[];const s=r.indexOf(G(n.value));-1!==s&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}}}),this.cloneFrom=this.updates=null)}}class ${constructor(n){this.defaultValue=n}}class ee{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}}function Pe(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Re(e){return typeof Blob<"u"&&e instanceof Blob}function Oe(e){return typeof FormData<"u"&&e instanceof FormData}class Q{constructor(n,t,r,s){let i;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase(),function F(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,i=s):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new u,this.context??=new ee,this.params){const a=this.params.toString();if(0===a.length)this.urlWithParams=t;else{const d=t.indexOf("?");this.urlWithParams=t+(-1===d?"?":d<t.length-1?"&":"")+a}}else this.params=new U,this.urlWithParams=t}serializeBody(){return null===this.body?null:"string"==typeof this.body||Pe(this.body)||Re(this.body)||Oe(this.body)||function qe(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)?this.body:this.body instanceof U?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||Oe(this.body)?null:Re(this.body)?this.body.type||null:Pe(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof U?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(n={}){const t=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,i=n.transferCache??this.transferCache,a=void 0!==n.body?n.body:this.body,d=n.withCredentials??this.withCredentials,c=n.reportProgress??this.reportProgress;let y=n.headers||this.headers,N=n.params||this.params;const O=n.context??this.context;return void 0!==n.setHeaders&&(y=Object.keys(n.setHeaders).reduce((A,D)=>A.set(D,n.setHeaders[D]),y)),n.setParams&&(N=Object.keys(n.setParams).reduce((A,D)=>A.set(D,n.setParams[D]),N)),new Q(t,r,a,{params:N,headers:y,context:O,reportProgress:c,responseType:s,withCredentials:d,transferCache:i})}}var C=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(C||{});class se{constructor(n,t=200,r="OK"){this.headers=n.headers||new u,this.status=void 0!==n.status?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}}class te extends se{constructor(n={}){super(n),this.type=C.ResponseHeader}clone(n={}){return new te({headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class B extends se{constructor(n={}){super(n),this.type=C.Response,this.body=void 0!==n.body?n.body:null}clone(n={}){return new B({body:void 0!==n.body?n.body:this.body,headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class W extends se{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${n.url||"(unknown url)"}`:`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}}var Me=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(Me||{});function ue(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}let we=(()=>{class e{constructor(t){this.handler=t}request(t,r,s={}){let i;if(t instanceof Q)i=t;else{let c,y;c=s.headers instanceof u?s.headers:new u(s.headers),s.params&&(y=s.params instanceof U?s.params:new U({fromObject:s.params})),i=new Q(t,r,void 0!==s.body?s.body:null,{headers:c,context:s.context,params:y,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}const a=(0,g.of)(i).pipe((0,x.H)(c=>this.handler.handle(c)));if(t instanceof Q||"events"===s.observe)return a;const d=a.pipe((0,j.p)(c=>c instanceof B));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe((0,v.T)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return d.pipe((0,v.T)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return d.pipe((0,v.T)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return d.pipe((0,v.T)(c=>c.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new U).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,ue(s,r))}post(t,r,s={}){return this.request("POST",t,ue(s,r))}put(t,r,s={}){return this.request("PUT",t,ue(s,r))}static{this.\u0275fac=function(r){return new(r||e)(o.\u0275\u0275inject(w))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();const tt=/^\)\]\}',?\n/;function Ie(e){if(e.url)return e.url;const n="X-Request-URL".toLocaleLowerCase();return e.headers.get(n)}let oe=(()=>{class e{constructor(){this.fetchImpl=(0,o.inject)(rt,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t)),this.ngZone=(0,o.inject)(o.NgZone)}handle(t){return new E.c(r=>{const s=new AbortController;return this.doRequest(t,s.signal,r).then(fe,i=>r.error(new W({error:i}))),()=>s.abort()})}doRequest(t,r,s){var i=this;return(0,I.A)(function*(){const a=i.createRequestInit(t);let d;try{const L=i.ngZone.runOutsideAngular(()=>i.fetchImpl(t.urlWithParams,{signal:r,...a}));(function st(e){e.then(fe,fe)})(L),s.next({type:C.Sent}),d=yield L}catch(L){return void s.error(new W({error:L,status:L.status??0,statusText:L.statusText,url:t.urlWithParams,headers:L.headers}))}const c=new u(d.headers),y=d.statusText,N=Ie(d)??t.urlWithParams;let O=d.status,A=null;if(t.reportProgress&&s.next(new te({headers:c,status:O,statusText:y,url:N})),d.body){const L=d.headers.get("content-length"),f=[],T=d.body.getReader();let H,M,k=0;const S=typeof Zone<"u"&&Zone.current;yield i.ngZone.runOutsideAngular((0,I.A)(function*(){for(;;){const{done:Y,value:ve}=yield T.read();if(Y)break;if(f.push(ve),k+=ve.length,t.reportProgress){M="text"===t.responseType?(M??"")+(H??=new TextDecoder).decode(ve,{stream:!0}):void 0;const He=()=>s.next({type:C.DownloadProgress,total:L?+L:void 0,loaded:k,partialText:M});S?S.run(He):He()}}}));const _e=i.concatChunks(f,k);try{const Y=d.headers.get("Content-Type")??"";A=i.parseBody(t,_e,Y)}catch(Y){return void s.error(new W({error:Y,headers:new u(d.headers),status:d.status,statusText:d.statusText,url:Ie(d)??t.urlWithParams}))}}0===O&&(O=A?200:0),O>=200&&O<300?(s.next(new B({body:A,headers:c,status:O,statusText:y,url:N})),s.complete()):s.error(new W({error:A,headers:c,status:O,statusText:y,url:N}))})()}parseBody(t,r,s){switch(t.responseType){case"json":const i=(new TextDecoder).decode(r).replace(tt,"");return""===i?null:JSON.parse(i);case"text":return(new TextDecoder).decode(r);case"blob":return new Blob([r],{type:s});case"arraybuffer":return r.buffer}}createRequestInit(t){const r={},s=t.withCredentials?"include":void 0;if(t.headers.forEach((i,a)=>r[i]=a.join(",")),t.headers.has("Accept")||(r.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){const i=t.detectContentTypeHeader();null!==i&&(r["Content-Type"]=i)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:s}}concatChunks(t,r){const s=new Uint8Array(r);let i=0;for(const a of t)s.set(a,i),i+=a.length;return s}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();class rt{}function fe(){}function Ae(e,n){return n(e)}function ot(e,n){return(t,r)=>n.intercept(t,{handle:s=>e(s,r)})}const pe=new o.InjectionToken(""),ne=new o.InjectionToken(""),ye=new o.InjectionToken(""),me=new o.InjectionToken("",{providedIn:"root",factory:()=>!0});function at(){let e=null;return(n,t)=>{null===e&&(e=((0,o.inject)(pe,{optional:!0})??[]).reduceRight(ot,Ae));const r=(0,o.inject)(o.\u0275PendingTasks);if((0,o.inject)(me)){const i=r.add();return e(n,t).pipe((0,h.j)(()=>r.remove(i)))}return e(n,t)}}let De,ie=(()=>{class e extends w{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=(0,o.inject)(o.\u0275PendingTasks),this.contributeToStability=(0,o.inject)(me)}handle(t){if(null===this.chain){const r=Array.from(new Set([...this.injector.get(ne),...this.injector.get(ye,[])]));this.chain=r.reduceRight((s,i)=>function it(e,n,t){return(r,s)=>(0,o.runInInjectionContext)(t,()=>n(r,i=>e(i,s)))}(s,i,this.injector),Ae)}if(this.contributeToStability){const r=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe((0,h.j)(()=>this.pendingTasks.remove(r)))}return this.chain(t,r=>this.backend.handle(r))}static{this.\u0275fac=function(r){return new(r||e)(o.\u0275\u0275inject(p),o.\u0275\u0275inject(o.EnvironmentInjector))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})(),lt=0;class be{}function pt(){return"object"==typeof window?window:{}}let Te=(()=>{class e{constructor(t,r){this.callbackMap=t,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+lt++}handle(t){if("JSONP"!==t.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==t.responseType)throw new Error("JSONP requests must use Json response type.");if(t.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new E.c(r=>{const s=this.nextCallback(),i=t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${s}$1`),a=this.document.createElement("script");a.src=i;let d=null,c=!1;this.callbackMap[s]=A=>{delete this.callbackMap[s],d=A,c=!0};const y=()=>{a.removeEventListener("load",N),a.removeEventListener("error",O),a.remove(),delete this.callbackMap[s]},N=A=>{this.resolvedPromise.then(()=>{y(),c?(r.next(new B({body:d,status:200,statusText:"OK",url:i})),r.complete()):r.error(new W({url:i,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})},O=A=>{y(),r.error(new W({error:A,status:0,statusText:"JSONP Error",url:i}))};return a.addEventListener("load",N),a.addEventListener("error",O),this.document.body.appendChild(a),r.next({type:C.Sent}),()=>{c||this.removeListeners(a),y()}})}removeListeners(t){De??=this.document.implementation.createHTMLDocument(),De.adoptNode(t)}static{this.\u0275fac=function(r){return new(r||e)(o.\u0275\u0275inject(be),o.\u0275\u0275inject(R.DOCUMENT))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();function Ne(e,n){return"JSONP"===e.method?(0,o.inject)(Te).handle(e):n(e)}let yt=(()=>{class e{constructor(t){this.injector=t}intercept(t,r){return(0,o.runInInjectionContext)(this.injector,()=>Ne(t,s=>r.handle(s)))}static{this.\u0275fac=function(r){return new(r||e)(o.\u0275\u0275inject(o.EnvironmentInjector))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();const mt=/^\)\]\}',?\n/;let Ee=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new o.\u0275RuntimeError(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,_.H)(r.\u0275loadImpl()):(0,g.of)(null)).pipe((0,m.n)(()=>new E.c(i=>{const a=r.build();if(a.open(t.method,t.urlWithParams),t.withCredentials&&(a.withCredentials=!0),t.headers.forEach((f,T)=>a.setRequestHeader(f,T.join(","))),t.headers.has("Accept")||a.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const f=t.detectContentTypeHeader();null!==f&&a.setRequestHeader("Content-Type",f)}if(t.responseType){const f=t.responseType.toLowerCase();a.responseType="json"!==f?f:"text"}const d=t.serializeBody();let c=null;const y=()=>{if(null!==c)return c;const f=a.statusText||"OK",T=new u(a.getAllResponseHeaders()),k=function Tt(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(a)||t.url;return c=new te({headers:T,status:a.status,statusText:f,url:k}),c},N=()=>{let{headers:f,status:T,statusText:k,url:H}=y(),M=null;204!==T&&(M=typeof a.response>"u"?a.responseText:a.response),0===T&&(T=M?200:0);let S=T>=200&&T<300;if("json"===t.responseType&&"string"==typeof M){const _e=M;M=M.replace(mt,"");try{M=""!==M?JSON.parse(M):null}catch(Y){M=_e,S&&(S=!1,M={error:Y,text:M})}}S?(i.next(new B({body:M,headers:f,status:T,statusText:k,url:H||void 0})),i.complete()):i.error(new W({error:M,headers:f,status:T,statusText:k,url:H||void 0}))},O=f=>{const{url:T}=y(),k=new W({error:f,status:a.status||0,statusText:a.statusText||"Unknown Error",url:T||void 0});i.error(k)};let A=!1;const D=f=>{A||(i.next(y()),A=!0);let T={type:C.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(T.total=f.total),"text"===t.responseType&&a.responseText&&(T.partialText=a.responseText),i.next(T)},L=f=>{let T={type:C.UploadProgress,loaded:f.loaded};f.lengthComputable&&(T.total=f.total),i.next(T)};return a.addEventListener("load",N),a.addEventListener("error",O),a.addEventListener("timeout",O),a.addEventListener("abort",O),t.reportProgress&&(a.addEventListener("progress",D),null!==d&&a.upload&&a.upload.addEventListener("progress",L)),a.send(d),i.next({type:C.Sent}),()=>{a.removeEventListener("error",O),a.removeEventListener("abort",O),a.removeEventListener("load",N),a.removeEventListener("timeout",O),t.reportProgress&&(a.removeEventListener("progress",D),null!==d&&a.upload&&a.upload.removeEventListener("progress",L)),a.readyState!==a.DONE&&a.abort()}})))}static{this.\u0275fac=function(r){return new(r||e)(o.\u0275\u0275inject(R.XhrFactory))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();const ae=new o.InjectionToken(""),xe="XSRF-TOKEN",je=new o.InjectionToken("",{providedIn:"root",factory:()=>xe}),Le="X-XSRF-TOKEN",Ue=new o.InjectionToken("",{providedIn:"root",factory:()=>Le});class ce{}let ke=(()=>{class e{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,R.\u0275parseCookieValue)(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(r){return new(r||e)(o.\u0275\u0275inject(R.DOCUMENT),o.\u0275\u0275inject(o.PLATFORM_ID),o.\u0275\u0275inject(je))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();function Fe(e,n){const t=e.url.toLowerCase();if(!(0,o.inject)(ae)||"GET"===e.method||"HEAD"===e.method||t.startsWith("http://")||t.startsWith("https://"))return n(e);const r=(0,o.inject)(ce).getToken(),s=(0,o.inject)(Ue);return null!=r&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,r)})),n(e)}let Ce=(()=>{class e{constructor(t){this.injector=t}intercept(t,r){return(0,o.runInInjectionContext)(this.injector,()=>Fe(t,s=>r.handle(s)))}static{this.\u0275fac=function(r){return new(r||e)(o.\u0275\u0275inject(o.EnvironmentInjector))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();var K=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(K||{});function Z(e,n){return{\u0275kind:e,\u0275providers:n}}function Be(...e){const n=[we,Ee,ie,{provide:w,useExisting:ie},{provide:p,useFactory:()=>(0,o.inject)(oe,{optional:!0})??(0,o.inject)(Ee)},{provide:ne,useValue:Fe,multi:!0},{provide:ae,useValue:!0},{provide:ce,useClass:ke}];for(const t of e)n.push(...t.\u0275providers);return(0,o.makeEnvironmentProviders)(n)}function Et(e){return Z(K.Interceptors,e.map(n=>({provide:ne,useValue:n,multi:!0})))}const We=new o.InjectionToken("");function Ke(){return Z(K.LegacyInterceptors,[{provide:We,useFactory:at},{provide:ne,useExisting:We,multi:!0}])}function ge({cookieName:e,headerName:n}){const t=[];return void 0!==e&&t.push({provide:je,useValue:e}),void 0!==n&&t.push({provide:Ue,useValue:n}),Z(K.CustomXsrfConfiguration,t)}function ze(){return Z(K.NoXsrfProtection,[{provide:ae,useValue:!1}])}function Se(){return Z(K.JsonpSupport,[Te,{provide:be,useFactory:pt},{provide:ne,useValue:Ne,multi:!0}])}function gt(){return Z(K.RequestsMadeViaParent,[{provide:p,useFactory:()=>(0,o.inject)(w,{skipSelf:!0,optional:!0})}])}function _t(){return Z(K.Fetch,[oe,{provide:p,useExisting:oe}])}let vt=(()=>{class e{static disable(){return{ngModule:e,providers:[ze().\u0275providers]}}static withOptions(t={}){return{ngModule:e,providers:ge(t).\u0275providers}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=o.\u0275\u0275defineNgModule({type:e})}static{this.\u0275inj=o.\u0275\u0275defineInjector({providers:[Ce,{provide:pe,useExisting:Ce,multi:!0},{provide:ce,useClass:ke},ge({cookieName:xe,headerName:Le}).\u0275providers,{provide:ae,useValue:!0}]})}}return e})(),Pt=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=o.\u0275\u0275defineNgModule({type:e})}static{this.\u0275inj=o.\u0275\u0275defineInjector({providers:[Be(Ke())]})}}return e})(),Rt=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=o.\u0275\u0275defineNgModule({type:e})}static{this.\u0275inj=o.\u0275\u0275defineInjector({providers:[Se().\u0275providers]})}}return e})();const Xe=new o.InjectionToken(""),Je="b",Ve="h",Ge="s",$e="st",Ze="u",Ye="rt",le=new o.InjectionToken(""),Ot=["GET","HEAD"];function Mt(e,n){const{isCacheActive:t,...r}=(0,o.inject)(le),{transferCache:s,method:i}=e;if(!t||!1===s||"POST"===i&&!r.includePostRequests&&!s||"POST"!==i&&!Ot.includes(i)||!r.includeRequestsWithAuthHeaders&&function wt(e){return e.headers.has("authorization")||e.headers.has("proxy-authorization")}(e)||!1===r.filter?.(e))return n(e);const a=(0,o.inject)(o.TransferState),d=(0,o.inject)(Xe,{optional:!0}),c=(0,R.isPlatformServer)((0,o.inject)(o.PLATFORM_ID));if(d&&!c)throw new o.\u0275RuntimeError(2803,!1);const y=c&&d?function Nt(e,n){const t=new URL(e,"resolve://").origin,r=n[t];return r?e.replace(t,r):e}(e.url,d):e.url,N=function At(e,n){const{params:t,method:r,responseType:s}=e,i=Qe(t);let a=e.serializeBody();a instanceof URLSearchParams?a=Qe(a):"string"!=typeof a&&(a="");const c=function Dt(e){let n=0;for(const t of e)n=Math.imul(31,n)+t.charCodeAt(0)|0;return n+=2147483648,n.toString()}([r,s,n,a,i].join("|"));return(0,o.makeStateKey)(c)}(e,y),O=a.get(N,null);let A=r.includeHeaders;if("object"==typeof s&&s.includeHeaders&&(A=s.includeHeaders),O){const{[Je]:D,[Ye]:L,[Ve]:f,[Ge]:T,[$e]:k,[Ze]:H}=O;let M=D;switch(L){case"arraybuffer":M=(new TextEncoder).encode(D).buffer;break;case"blob":M=new Blob([D])}let S=new u(f);return(0,g.of)(new B({body:M,headers:S,status:T,statusText:k,url:H}))}return n(e).pipe((0,P.M)(D=>{D instanceof B&&c&&a.set(N,{[Je]:D.body,[Ve]:It(D.headers,A),[Ge]:D.status,[$e]:D.statusText,[Ze]:y,[Ye]:e.responseType})}))}function It(e,n){if(!n)return{};const t={};for(const r of n){const s=e.getAll(r);null!==s&&(t[r]=s)}return t}function Qe(e){return[...e.keys()].sort().map(n=>`${n}=${e.getAll(n)}`).join("&")}function bt(e){return[{provide:le,useFactory:()=>((0,o.\u0275performanceMarkFeature)("NgHttpTransferCache"),{isCacheActive:!0,...e})},{provide:ye,useValue:Mt,multi:!0,deps:[o.TransferState,le]},{provide:o.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const n=(0,o.inject)(o.ApplicationRef),t=(0,o.inject)(le);return()=>{(0,o.\u0275whenStable)(n).then(()=>{t.isCacheActive=!1})}}}]}}}]);