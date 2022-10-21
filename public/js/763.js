"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[763],{1369:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(7757),s=r.n(a);function n(e,t,r,a,s,n,i){try{var o=e[n](i),d=o.value}catch(e){return void r(e)}o.done?t(d):Promise.resolve(d).then(a,s)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var i=e.apply(t,r);function o(e){n(i,a,s,o,d,"next",e)}function d(e){n(i,a,s,o,d,"throw",e)}o(void 0)}))}}function o(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var d=r(9669);const u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseuri=t}var t,r,a,n,u;return t=e,r=[{key:"getlist",value:function(e){return d.get("/api/".concat(this.baseuri).concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"create",value:(u=i(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/api/"+this.baseuri,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"delete",value:function(e){e.query;var t=e.id;return d.delete("/api/".concat(this.baseuri,"/").concat(t))}},{key:"get",value:function(e){return d.get("/api/".concat(this.baseuri,"/").concat(e)).then((function(e){return e.data.data}))}},{key:"update",value:(n=i(s().mark((function e(t,r){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("_method","put"),e.next=3,d.post("/api/"+this.baseuri+"/"+r,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})}],r&&o(t.prototype,r),a&&o(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()},3763:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var a=r(7757),s=r.n(a),n=r(1369);function i(e,t,r,a,s,n,i){try{var o=e[n](i),d=o.value}catch(e){return void r(e)}o.done?t(d):Promise.resolve(d).then(a,s)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var n=e.apply(t,r);function o(e){i(n,a,s,o,d,"next",e)}function d(e){i(n,a,s,o,d,"throw",e)}o(void 0)}))}}var d=new n.Z("tickets"),u=new n.Z("item-types"),c=new n.Z("brands"),l=new n.Z("products"),m=new n.Z("common-issues");var p;const f={name:"auth.tickets.add",watch:{"form.brand_id":function(){this.getProducts()},"form.itme_type_id":function(){this.getProducts()}},mounted:function(){var e=this;return o(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.getlist("").then((function(e){return e.data}));case 2:return e.itemTypes=t.sent,t.next=5,c.getlist("").then((function(e){return e.data}));case 5:return e.brands=t.sent,t.next=8,m.getlist("?parent_id=0").then((function(e){return e.data}));case 8:if(e.issues=t.sent,!e.$route.params.id){t.next=20;break}return t.next=12,d.get(e.form.id);case 12:return r=t.sent,e.form={first_name:r.first_name?r.first_name:"",last_name:r.last_name?r.last_name:"",email:r.email?r.email:"",phone:r.phone?r.phone:"",brand_id:r.brand_id?r.brand_id:0,itme_type_id:r.itme_type_id?r.itme_type_id:0,product_id:r.product_id?r.product_id:0,serial:r.serial?r.serial:"",purchase_date:r.purchase_date?r.purchase_date:"",issue:r.issue?r.issue:"",resolution:r.resolution?r.resolution:1,id:e.$route.params.id},e.bread.push({text:"Edit",to:{name:"auth.tickets.edit",params:{id:e.$route.params.id}},disabled:!1,exact:!0}),t.next=17,e.$nextTick();case 17:e.getProducts(),t.next=21;break;case 20:e.bread.push({text:"Add",to:{name:"auth.tickets.add"},disabled:!1,exact:!0});case 21:case"end":return t.stop()}}),t)})))()},methods:{getCurrentSelectionParent:function(e){this.form.issue=e[0]},getProducts:function(){var e=this;return o(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.products=[],!e.form.brand_id||!e.form.itme_type_id){t.next=5;break}return t.next=4,l.getlist("?brand_id="+e.form.brand_id+"&itme_type_id="+e.form.itme_type_id).then((function(e){return e.data}));case 4:e.products=t.sent;case 5:case"end":return t.stop()}}),t)})))()},resetError:function(){this.errors={first_name:[],last_name:[],email:[],phone:[],brand_id:[],itme_type_id:[],product_id:[],serial:[],purchase_date:[],issue:[],resolution:[]}},addpermission:(p=o(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resetError(),!this.$refs.form.validate()){e.next=26;break}if(this.btnloading=!0,(t=new FormData).append("first_name",this.form.first_name),t.append("last_name",this.form.last_name),t.append("email",this.form.email),t.append("phone",this.form.phone),t.append("brand_id",this.form.brand_id),t.append("itme_type_id",this.form.itme_type_id),t.append("product_id",this.form.product_id),t.append("serial",this.form.serial),t.append("purchase_date",this.form.purchase_date),t.append("issue",this.form.issue),t.append("resolution",this.form.resolution),this.btnloading=!1,!(this.form.id>0)){e.next=22;break}return e.next=19,d.update(t,this.form.id);case 19:r=e.sent,e.next=25;break;case 22:return e.next=24,d.create(t);case 24:r=e.sent;case 25:r.status?this.$router.push({name:"auth.tickets.listing"}):(r.data.first_name&&(this.errors.first_name=r.data.first_name),r.data.last_name&&(this.errors.last_name=r.data.last_name),r.data.email&&(this.errors.email=r.data.email),r.data.phone&&(this.errors.phone=r.data.phone),r.data.brand_id&&(this.errors.brand_id=r.data.brand_id),r.data.itme_type_id&&(this.errors.itme_type_id=r.data.itme_type_id),r.data.product_id&&(this.errors.product_id=r.data.product_id),r.data.serial&&(this.errors.serial=r.data.serial),r.data.purchase_date&&(this.errors.purchase_date=r.data.purchase_date),r.data.issue&&(this.errors.issue=r.data.issue),r.data.resolution&&(this.errors.resolution=r.data.resolution));case 26:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser},filter:function(){return this.caseSensitive?function(e,t,r){return e[r].indexOf(t)>-1}:void 0}},data:function(){return{brands:[],itemTypes:[],products:[],issues:[],resolutions:[{id:1,name:"CF - Warranty Claim"},{id:2,name:"TS - Tech Support"},{id:3,name:"PS"},{id:4,name:"OOW"},{id:5,name:"Non-Curtis Products"},{id:6,name:"Invalid Calls"},{id:7,name:"Others"},{id:8,name:"Case Follow Up"},{id:9,name:"Escalated Case"}],form:{id:this.$route.params.id?this.$route.params.id:0,item_number:"",unit:"",brand_id:0,itme_type_id:0,product_id:0,serial:"",purchase_date:"",issue:"",resolution:1},errors:{first_name:[],last_name:[],email:[],phone:[],brand_id:[],itme_type_id:[],product_id:[],serial:[],purchase_date:[],issue:[],resolution:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Tickets",to:{name:"auth.tickets.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(e){return!!e||"Required."}},open:[1,2],search:null,caseSensitive:!1,date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),purchase_date_menu:!1}}};const _=(0,r(1900).Z)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{attrs:{items:e.bread},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-forward")])]},proxy:!0}])}),e._v(" "),r("v-row",{staticClass:"pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.first_name,label:"First Name"},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.last_name,label:"Last Name"},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.email,label:"Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.phone,label:"Phone#"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:e.brands,"item-text":"brand_name","item-value":"id",label:"Brands",required:"","error-messages":e.errors.brand_id},model:{value:e.form.brand_id,callback:function(t){e.$set(e.form,"brand_id",t)},expression:"form.brand_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:e.itemTypes,"item-text":"name","item-value":"id",label:"Item Type",required:"","error-messages":e.errors.itme_type_id},model:{value:e.form.itme_type_id,callback:function(t){e.$set(e.form,"itme_type_id",t)},expression:"form.itme_type_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-select",{attrs:{items:e.products,"item-text":"item_number","item-value":"id",label:"Products",required:"","error-messages":e.errors.product_id},model:{value:e.form.product_id,callback:function(t){e.$set(e.form,"product_id",t)},expression:"form.product_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"4",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.serial,label:"Serial#"},model:{value:e.form.serial,callback:function(t){e.$set(e.form,"serial",t)},expression:"form.serial"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"4",sm:"4"}},[r("v-select",{attrs:{items:e.resolutions,"item-text":"name","item-value":"id",label:"Resolution",required:"","error-messages":e.errors.resolution},model:{value:e.form.resolution,callback:function(t){e.$set(e.form,"resolution",t)},expression:"form.resolution"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"4",sm:"4"}},[r("v-menu",{ref:"purchase_date_ref",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{label:"Purchase date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.form.purchase_date,callback:function(t){e.$set(e.form,"purchase_date",t)},expression:"form.purchase_date"}},"v-text-field",s,!1),a))]}}]),model:{value:e.purchase_date_menu,callback:function(t){e.purchase_date_menu=t},expression:"purchase_date_menu"}},[e._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.form.purchase_date,callback:function(t){e.$set(e.form,"purchase_date",t)},expression:"form.purchase_date"}},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.purchase_date_menu=!1}}},[e._v("\n                                    Cancel\n                                ")]),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.purchase_date_ref.save(e.date)}}},[e._v("\n                                    OK\n                                ")])],1)],1)],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-card",{staticClass:"mx-auto"},[r("v-sheet",{staticClass:"pa-4 primary lighten-2"},[r("v-text-field",{attrs:{label:"Search Issues Directory",dark:"",flat:"","solo-inverted":"","hide-details":"",clearable:"","clear-icon":"mdi-close-circle-outline"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-checkbox",{attrs:{dark:"","hide-details":"",label:"Case sensitive search"},model:{value:e.caseSensitive,callback:function(t){e.caseSensitive=t},expression:"caseSensitive"}})],1),e._v(" "),r("v-card-text",[r("v-treeview",{attrs:{items:e.issues,search:e.search,filter:e.filter,open:e.open,rounded:"",hoverable:"",dense:"",activatable:""},on:{"update:open":function(t){e.open=t},"update:active":e.getCurrentSelectionParent,input:e.getCurrentSelectionParent},scopedSlots:e._u([{key:"prepend",fn:function(e){e.item}}])})],1)],1)],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:e.btnloading,disabled:e.btnloading},on:{click:e.addpermission}},[e._v(e._s(e.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);