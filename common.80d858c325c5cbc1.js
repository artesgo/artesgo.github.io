(self.webpackChunkholo=self.webpackChunkholo||[]).push([[76],{8394:(h,d,s)=>{s.r(d),s.d(d,{AccordionComponent:()=>c,AccordionJoinComponent:()=>m});var t=s(9381);const e=["*"];let m=(()=>{class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["atg-accordion-join"]],standalone:!0,features:[t.\u0275\u0275StandaloneFeature],ngContentSelectors:e,decls:2,vars:0,consts:[[1,"join","join-vertical","w-full"]],template:function(r,p){1&r&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275projection(1),t.\u0275\u0275elementEnd())},encapsulation:2})}}return o})();var u=s(611);const a=[[["","title",""]],"*"],l=["[title]","*"];let c=(()=>{class o{constructor(){this.id=(0,t.input)(""),this.name=t.input.required(),this.arrow=(0,t.input)(!1),this.join=(0,t.input)(!1),this.titleClass=(0,t.input)(""),this.contentClass=(0,t.input)(""),this._collapse=!0}get _arrow(){return this.arrow()}get _join(){return this.join()}get _borderColor(){return this.join()}get _border(){return this.join()}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["atg-accordion"]],hostVars:10,hostBindings:function(r,p){2&r&&t.\u0275\u0275classProp("collapse",p._collapse)("collapse-arrow",p._arrow)("join-item",p._join)("border-base-300",p._borderColor)("border",p._border)},inputs:{id:[1,"id"],name:[1,"name"],arrow:[1,"arrow"],join:[1,"join"],titleClass:[1,"titleClass"],contentClass:[1,"contentClass"]},standalone:!0,features:[t.\u0275\u0275StandaloneFeature],ngContentSelectors:l,decls:5,vars:3,consts:[["type","radio",3,"id","name"],[1,"collapse-title"],[1,"collapse-content"]],template:function(r,p){1&r&&(t.\u0275\u0275projectionDef(a),t.\u0275\u0275element(0,"input",0),t.\u0275\u0275elementStart(1,"div",1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",2),t.\u0275\u0275projection(4,1),t.\u0275\u0275elementEnd()),2&r&&(t.\u0275\u0275property("id",p.id())("name",p.name()),t.\u0275\u0275attribute("data-testid",p.id()))},dependencies:[u.CommonModule],encapsulation:2})}}return o})()},8231:(h,d,s)=>{s.r(d),s.d(d,{ButtonComponent:()=>u});var t=s(611),e=s(9381);const m=["*"];let u=(()=>{class a{constructor(){this.type=(0,e.input)("button"),this.style=(0,e.input)("primary"),this.size=(0,e.input)("md"),this.class=(0,e.input)(""),this.id=(0,e.input)("")}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["atg-button"]],inputs:{type:[1,"type"],style:[1,"style"],size:[1,"size"],class:[1,"class"],id:[1,"id"]},standalone:!0,features:[e.\u0275\u0275StandaloneFeature],ngContentSelectors:m,decls:2,vars:24,consts:[[1,"btn","flex","justify-between","items-center","whitespace-nowrap",3,"type","id","ngClass"]],template:function(o,n){1&o&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275projection(1),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275classProp("btn-xs","xs"===n.size())("btn-sm","sm"===n.size())("btn-md","md"===n.size())("btn-lg","lg"===n.size())("btn-accent","accent"===n.style())("btn-ghost","ghost"===n.style())("btn-info","info"===n.style())("btn-neutral","neutral"===n.style())("btn-primary","primary"===n.style())("btn-secondary","secondary"===n.style()),e.\u0275\u0275property("type",n.type())("id",n.id())("ngClass",n.class()),e.\u0275\u0275attribute("data-testid",n.id()))},dependencies:[t.CommonModule,t.NgClass],encapsulation:2})}}return a})()},6870:(h,d,s)=>{s.r(d),s.d(d,{CheckboxComponent:()=>u});var t=s(611),e=s(9381);const m=["*"];let u=(()=>{class a{constructor(){this.size=(0,e.input)("md"),this.style=(0,e.input)("primary"),this.id=e.input.required(),this.checked=(0,e.model)(!1),this.name=(0,e.input)(""),this.class=(0,e.input)({container:"gap-1",control:"",label:""}),this.reverse=(0,e.input)(!1)}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["atg-checkbox"]],inputs:{size:[1,"size"],style:[1,"style"],id:[1,"id"],checked:[1,"checked"],name:[1,"name"],class:[1,"class"],reverse:[1,"reverse"]},outputs:{checked:"checkedChange"},standalone:!0,features:[e.\u0275\u0275StandaloneFeature],ngContentSelectors:m,decls:4,vars:38,consts:[[1,"flex","items-center",3,"ngClass"],["type","checkbox",1,"checkbox",3,"checkedChange","name","id","ngClass","checked"],[3,"for","ngClass"]],template:function(o,n){1&o&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"div",0)(1,"input",1),e.\u0275\u0275twoWayListener("checkedChange",function(r){return e.\u0275\u0275twoWayBindingSet(n.checked,r)||(n.checked=r),r}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"label",2),e.\u0275\u0275projection(3),e.\u0275\u0275elementEnd()()),2&o&&(e.\u0275\u0275classProp("flex-row-reverse",n.reverse()),e.\u0275\u0275property("ngClass",n.class().container),e.\u0275\u0275advance(),e.\u0275\u0275classProp("checkbox-xs","xs"===n.size())("checkbox-sm","sm"===n.size())("checkbox-md","md"===n.size())("checkbox-lg","lg"===n.size())("checkbox-accent","accent"===n.style())("checkbox-ghost","ghost"===n.style())("checkbox-info","info"===n.style())("checkbox-neutral","neutral"===n.style())("checkbox-primary","primary"===n.style())("checkbox-secondary","secondary"===n.style()),e.\u0275\u0275property("name",n.name())("id",n.id())("ngClass",n.class().control),e.\u0275\u0275twoWayProperty("checked",n.checked),e.\u0275\u0275attribute("data-testid",n.id()),e.\u0275\u0275advance(),e.\u0275\u0275classProp("text-xs","xs"===n.size())("text-sm","sm"===n.size())("text-md","md"===n.size())("text-lg","lg"===n.size()),e.\u0275\u0275property("for",n.id())("ngClass",n.class().label))},dependencies:[t.CommonModule,t.NgClass],encapsulation:2})}}return a})()},3982:(h,d,s)=>{s.r(d),s.d(d,{DrawerComponent:()=>l});var t=s(9381),e=s(611),m=s(7225);const u=[[["","trigger",""]],"*"],a=["[trigger]","*"];let l=(()=>{class c{constructor(){this.id=t.input.required(),this.open=(0,t.model)(!1)}static{this.\u0275fac=function(i){return new(i||c)}}static{this.\u0275cmp=t.\u0275\u0275defineComponent({type:c,selectors:[["atg-drawer"]],inputs:{id:[1,"id"],open:[1,"open"]},outputs:{open:"openChange"},standalone:!0,features:[t.\u0275\u0275StandaloneFeature],ngContentSelectors:a,decls:9,vars:2,consts:[[1,"drawer"],["tabindex","-1","type","checkbox",1,"drawer-toggle",3,"ngModelChange","id","ngModel"],[1,"drawer-content"],[3,"click","keydown.esc"],[1,"drawer-side","z-10"],["aria-label","close sidebar","tabindex","-1",1,"drawer-overlay",3,"click"],["tabindex","-1",1,"bg-base-200","text-base-content","min-h-full","w-80","p-4",3,"keydown.esc"]],template:function(i,r){1&i&&(t.\u0275\u0275projectionDef(u),t.\u0275\u0275elementStart(0,"div",0)(1,"input",1),t.\u0275\u0275twoWayListener("ngModelChange",function(f){return t.\u0275\u0275twoWayBindingSet(r.open,f)||(r.open=f),f}),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"div",2)(3,"button",3),t.\u0275\u0275listener("click",function(){return r.open.set(!0)})("keydown.esc",function(){return r.open.set(!1)}),t.\u0275\u0275projection(4),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(5,"div",4)(6,"button",5),t.\u0275\u0275listener("click",function(){return r.open.set(!1)}),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"div",6),t.\u0275\u0275listener("keydown.esc",function(){return r.open.set(!1)}),t.\u0275\u0275projection(8,1),t.\u0275\u0275elementEnd()()()),2&i&&(t.\u0275\u0275advance(),t.\u0275\u0275property("id",r.id()),t.\u0275\u0275twoWayProperty("ngModel",r.open))},dependencies:[e.CommonModule,m.FormsModule,m.CheckboxControlValueAccessor,m.NgControlStatus,m.NgModel]})}}return c})()},5352:(h,d,s)=>{s.r(d),s.d(d,{DropdownComponent:()=>a});var t=s(611),e=s(9381);const m=["*"];function u(l,c){if(1&l){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"li",4)(1,"button",6),e.\u0275\u0275listener("click",function(){const i=e.\u0275\u0275restoreView(o).$implicit,r=e.\u0275\u0275nextContext(),p=e.\u0275\u0275reference(7);return r.select.emit(i),e.\u0275\u0275resetView(p.focus())}),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()()}if(2&l){const o=c.$implicit,n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275classMapInterpolate1("m-1 w-full btn-",n.size()," flex items-center whitespace-nowrap"),e.\u0275\u0275advance(),e.\u0275\u0275textInterpolate1(" ",o," ")}}let a=(()=>{class l{constructor(){this.style=(0,e.input)("primary"),this.options=(0,e.input)(),this.select=(0,e.output)(),this.size=(0,e.input)("md"),this.align=(0,e.input)("start"),this.glass=(0,e.input)(!0)}static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["atg-dropdown"]],inputs:{style:[1,"style"],options:[1,"options"],size:[1,"size"],align:[1,"align"],glass:[1,"glass"]},outputs:{select:"select"},standalone:!0,features:[e.\u0275\u0275StandaloneFeature],ngContentSelectors:m,decls:9,vars:20,consts:[["anchor",""],[1,"dropdown"],["type","button",3,"keydown.esc"],["tabindex","-1",3,"keydown.esc"],[1,"w-full"],["tabindex","-1",1,"sr-only"],[3,"click"]],template:function(n,i){if(1&n){const r=e.\u0275\u0275getCurrentView();e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"div",1)(1,"button",2),e.\u0275\u0275listener("keydown.esc",function(){e.\u0275\u0275restoreView(r);const f=e.\u0275\u0275reference(7);return e.\u0275\u0275resetView(f.focus())}),e.\u0275\u0275projection(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"ul",3),e.\u0275\u0275listener("keydown.esc",function(){e.\u0275\u0275restoreView(r);const f=e.\u0275\u0275reference(7);return e.\u0275\u0275resetView(f.focus())}),e.\u0275\u0275repeaterCreate(4,u,3,4,"li",4,e.\u0275\u0275repeaterTrackByIndex),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"a",5,0),e.\u0275\u0275text(8," Dropdown Closed\n"),e.\u0275\u0275elementEnd()}2&n&&(e.\u0275\u0275classProp("dropdown-end","end"===i.align()),e.\u0275\u0275advance(),e.\u0275\u0275classMapInterpolate2("btn btn-",i.style()," border-",i.style()," border-solid m-1 btn-outline whitespace-nowrap text-neutral-content"),e.\u0275\u0275classProp("btn-xs","xs"===i.size())("btn-sm","sm"===i.size())("btn-md","md"===i.size())("btn-lg","lg"===i.size()),e.\u0275\u0275advance(2),e.\u0275\u0275classMapInterpolate2("menu z-20 rounded-md border-s dropdown-content flex flex-row bg-",i.style(),"-content text-",i.style(),"-content h-56 overflow-scroll"),e.\u0275\u0275classProp("glass",i.glass()),e.\u0275\u0275advance(),e.\u0275\u0275repeater(i.options()))},dependencies:[t.CommonModule],encapsulation:2})}}return l})()},8565:(h,d,s)=>{s.r(d),s.d(d,{InputComponent:()=>a});var t=s(611),e=s(9381),m=s(7225);const u=["*"];let a=(()=>{class l{constructor(){this.style=(0,e.input)("primary"),this.size=(0,e.input)("md"),this.id=e.input.required(),this.value="",this.name=(0,e.input)(""),this.touched=!1,this.disabled=!1,this.onChange=o=>{this.value=o},this.onTouched=()=>{}}writeValue(o){this.value=o,this.onChange(o),this.onTouched()}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}markAsTouched(){this.touched||(this.onTouched(),this.touched=!0)}setDisabledState(o){this.disabled=o}updateValue(o){this.writeValue(o.target.value)}static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["atg-input"]],inputs:{style:[1,"style"],size:[1,"size"],id:[1,"id"],name:[1,"name"]},standalone:!0,features:[e.\u0275\u0275ProvidersFeature([{provide:m.NG_VALUE_ACCESSOR,multi:!0,useExisting:l}]),e.\u0275\u0275StandaloneFeature],ngContentSelectors:u,decls:3,vars:25,consts:[[1,"block",3,"for"],["type","text",1,"input",3,"keyup","id","name","value"]],template:function(n,i){1&n&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"label",0),e.\u0275\u0275projection(1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"input",1),e.\u0275\u0275listener("keyup",function(p){return i.updateValue(p)}),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275property("for",i.id()),e.\u0275\u0275advance(2),e.\u0275\u0275classProp("input-xs","xs"===i.size())("input-sm","sm"===i.size())("input-md","md"===i.size())("input-lg","lg"===i.size())("input-accent","accent"===i.style())("input-ghost","ghost"===i.style())("input-info","info"===i.style())("input-neutral","neutral"===i.style())("input-primary","primary"===i.style())("input-secondary","secondary"===i.style()),e.\u0275\u0275property("id",i.id())("name",i.name())("value",i.value),e.\u0275\u0275attribute("data-testid",i.id()))},dependencies:[t.CommonModule,m.FormsModule]})}}return l})()},3565:(h,d,s)=>{s.r(d),s.d(d,{ModalComponent:()=>u});var t=s(611),e=s(9381);const m=["*"];let u=(()=>{class a{constructor(){this.open=(0,e.model)(!1),this.position=(0,e.model)("middle"),this.class=(0,e.input)(""),this.width=(0,e.input)("w-1/2")}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["atg-modal"]],inputs:{open:[1,"open"],position:[1,"position"],class:[1,"class"],width:[1,"width"]},outputs:{open:"openChange",position:"positionChange"},standalone:!0,features:[e.\u0275\u0275StandaloneFeature],ngContentSelectors:m,decls:6,vars:10,consts:[[1,"modal",3,"ngClass"],["tabindex","-1",1,"modal-backdrop",3,"click","keypress"],[1,"modal-box","mx-auto",3,"ngClass"],[1,"btn","btn-sm","btn-circle","absolute","right-2","top-2",3,"click"]],template:function(o,n){1&o&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"div",0)(1,"div",1),e.\u0275\u0275listener("click",function(){return n.open.set(!1)})("keypress",function(r){return"Escape"===r.key&&n.open.set(!1)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",2)(3,"button",3),e.\u0275\u0275listener("click",function(){return n.open.set(!1)}),e.\u0275\u0275text(4," \u2715 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275projection(5),e.\u0275\u0275elementEnd()()),2&o&&(e.\u0275\u0275classProp("modal-open",n.open())("modal-top","top"===n.position())("modal-middle","middle"===n.position())("modal-bottom","bottom"===n.position()),e.\u0275\u0275property("ngClass",n.class()),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngClass",n.width()))},dependencies:[t.CommonModule,t.NgClass]})}}return a})()},4598:(h,d,s)=>{s.r(d),s.d(d,{RadioComponent:()=>u});var t=s(9381),e=s(611);const m=["*"];let u=(()=>{class a{constructor(){this.id=t.input.required(),this.style=(0,t.input)("primary"),this.size=(0,t.input)("sm"),this.name=(0,t.input)("name"),this.value=(0,t.input)(""),this.disabled=(0,t.input)(!1)}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["atg-radio"]],inputs:{id:[1,"id"],style:[1,"style"],size:[1,"size"],name:[1,"name"],value:[1,"value"],disabled:[1,"disabled"]},standalone:!0,features:[t.\u0275\u0275StandaloneFeature],ngContentSelectors:m,decls:3,vars:32,consts:[[1,"flex","items-center",3,"for"],["type","radio",1,"radio","mr-2",3,"id","name","value"]],template:function(o,n){1&o&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"label",0),t.\u0275\u0275element(1,"input",1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275classProp("text-xs","xs"===n.size())("text-sm","sm"===n.size())("text-md","md"===n.size())("text-lg","lg"===n.size()),t.\u0275\u0275property("for",n.id()),t.\u0275\u0275advance(),t.\u0275\u0275classProp("radio-xs","xs"===n.size())("radio-sm","sm"===n.size())("radio-md","md"===n.size())("radio-lg","lg"===n.size())("radio-accent","accent"===n.style())("radio-ghost","ghost"===n.style())("radio-info","info"===n.style())("radio-neutral","neutral"===n.style())("radio-primary","primary"===n.style())("radio-secondary","secondary"===n.style()),t.\u0275\u0275property("id",n.id())("name",n.name())("value",n.value()))},dependencies:[e.CommonModule]})}}return a})()},5326:(h,d,s)=>{s.r(d),s.d(d,{TabsComponent:()=>u});var t=s(9381),e=s(611);function m(a,l){if(1&a){const c=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",2),t.\u0275\u0275listener("click",function(){const n=t.\u0275\u0275restoreView(c).$implicit,i=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(i.selected.set(n))}),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()}if(2&a){const c=l.$implicit,o=t.\u0275\u0275nextContext();t.\u0275\u0275classProp("tab-active",o.selected()===c)("text-neutral-content",o.selected()!==c),t.\u0275\u0275advance(),t.\u0275\u0275textInterpolate1(" ",c," ")}}let u=(()=>{class a{constructor(){this.tabs=t.input.required(),this.selected=(0,t.model)(),this.style=(0,t.input)("bordered"),this.size=(0,t.input)("md")}static{this.\u0275fac=function(o){return new(o||a)}}static{this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["atg-tabs"]],inputs:{tabs:[1,"tabs"],selected:[1,"selected"],style:[1,"style"],size:[1,"size"]},outputs:{selected:"selectedChange"},standalone:!0,features:[t.\u0275\u0275StandaloneFeature],decls:3,vars:14,consts:[["role","tablist",1,"tabs","w-full"],["role","tab",1,"tab","whitespace-nowrap","bg-neutral",3,"tab-active","text-neutral-content"],["role","tab",1,"tab","whitespace-nowrap","bg-neutral",3,"click"]],template:function(o,n){1&o&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275repeaterCreate(1,m,2,5,"button",1,t.\u0275\u0275repeaterTrackByIndex),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275classProp("tabs-bordered","bordered"===n.style())("tabs-lifted","lifted"===n.style())("tabs-boxed","boxed"===n.style())("tabs-sm","sm"===n.size())("tabs-md","md"===n.size())("tabs-lg","lg"===n.size())("tabs-xs","xs"===n.size()),t.\u0275\u0275advance(),t.\u0275\u0275repeater(n.tabs()))},dependencies:[e.CommonModule]})}}return a})()},1730:(h,d,s)=>{s.r(d),s.d(d,{ThemeComponent:()=>a});var t=s(9381),e=s(611);let m=(()=>{class l{constructor(){this.theme=(0,t.signal)("lemonade"),this.getTheme=(0,t.effect)(()=>{const o=localStorage.getItem("theme");o&&(0,t.untracked)(()=>{this.theme.set(o)})}),this.setTheme=(0,t.effect)(()=>{document.documentElement.setAttribute("data-theme",this.theme()),localStorage.setItem("theme",this.theme())})}static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275prov=t.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var u=s(1199);let a=(()=>{class l{constructor(){this.theme=(0,t.inject)(m),this.themes=(0,t.input)(["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter","dim","nord","sunset"])}static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275cmp=t.\u0275\u0275defineComponent({type:l,selectors:[["atg-theme"]],inputs:{themes:[1,"themes"]},standalone:!0,features:[t.\u0275\u0275StandaloneFeature],decls:2,vars:3,consts:[[3,"select","size","options","align"]],template:function(n,i){1&n&&(t.\u0275\u0275elementStart(0,"atg-dropdown",0),t.\u0275\u0275listener("select",function(p){return i.theme.theme.set(p)}),t.\u0275\u0275text(1," Change Theme\n"),t.\u0275\u0275elementEnd()),2&n&&t.\u0275\u0275property("size","xs")("options",i.themes())("align","end")},dependencies:[e.CommonModule,u.DropdownComponent]})}}return l})()}}]);