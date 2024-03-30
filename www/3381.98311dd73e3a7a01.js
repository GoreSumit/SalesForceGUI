"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3381],{3381:(I,p,i)=>{i.r(p),i.d(p,{CustomerTypeDetailPage:()=>b});var T=i(5861),y=i(6814),n=i(95),m=i(209),o=i(3582),c=i(6306),l=i(8504),e=i(6689),_=i(4636),h=i(4414),g=i(2722);function C(a,d){if(1&a){const s=e.EpF();e.TgZ(0,"ion-buttons",13)(1,"ion-button",14),e.NdJ("click",function(){e.CHM(s);const r=e.oxw();return e.KtG(r.ChangeViewDataFlag())}),e._UZ(2,"ion-icon",15),e.qZA()()}}function f(a,d){1&a&&(e.TgZ(0,"ion-buttons",16)(1,"ion-button",17),e._uU(2,"Save"),e.qZA()()),2&a&&e.Q6J("collapse",!0)}const D=function(){return["/customer-type"]};function v(a,d){1&a&&(e.TgZ(0,"ion-buttons",16)(1,"ion-button",18),e._uU(2,"Cancel"),e.qZA()()),2&a&&(e.Q6J("collapse",!0),e.xp6(1),e.Q6J("routerLink",e.DdM(2,D)))}let b=(()=>{class a{constructor(s,t,r,u,S,E,P){this._fb=s,this.activatedRoute=t,this.customerTypeService=r,this.router=u,this.alertCtrl=S,this.toastCtrl=E,this.loader=P,this.loadedCustomerType={},this.ViewDataFlag=!1}ngOnInit(){this.initCutomerTypeForm(),this.activatedRoute.paramMap.subscribe(s=>{if(s.has("customerTypeId"))if(s.get("customerTypeId")){const t=JSON.parse(s.get("customerTypeId"));this.ViewDataFlag=!0,this.loadCustomerTypeDetails(t)}else this.loadCustomerTypeDetails();else this.router.navigate(["/customerType"])})}initCutomerTypeForm(){this.customerTypeForm=this._fb.group({id:[0],customerTypeName:["",n.kI.required],active:["",n.kI.required]}),this.customerTypeForm.controls.active.setValue("Y")}enableFormControl(s){1==s?(this.customerTypeForm.get("customerTypeName").enable(),this.customerTypeForm.get("active").enable()):(this.customerTypeForm.get("customerTypeName").disable(),this.customerTypeForm.get("active").disable())}loadCustomerTypeDetails(s=-1){-1==s||(this.customerTypeService.getCustomerType(s).pipe((0,c.K)(t=>(this.showToast("Some error has been occured","danger"),(0,l._)(()=>t)))).subscribe(t=>{t.responseData&&(this.loadedCustomerType=t.responseData[0],this.customerTypeForm.patchValue({id:this.loadedCustomerType.id,customerTypeName:this.loadedCustomerType.customerTypeName,active:this.loadedCustomerType.active}))}),this.enableFormControl(!1))}ChangeViewDataFlag(){this.ViewDataFlag=!1,this.enableFormControl(!0)}DeleteCustomerType(){const s=this.loadedCustomerType.id;this.alertCtrl.create({header:"Are you sure?",message:"Do you really want to delete the customer Type?",buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:()=>{this.loader.present(),this.customerTypeService.deleteCustomerType(s).pipe((0,c.K)(t=>(this.loader.dismiss(),this.showToast("Some error has been occured","danger"),(0,l._)(()=>t)))).subscribe(t=>{this.loader.dismiss(),t.responseData&&t.responseData.id==this.loadedCustomerType.id&&0==t.errCode&&(this.showToast("Customer Type Deleted Successfully","secondary"),this.customerTypeService.resetValues(),this.fetchCustomerTypeList(this.customerTypeService.pageIndex,this.customerTypeService.pageSize,this.customerTypeService.searchTerm),this.router.navigate(["/customer-type"]))})}}]}).then(t=>{t.present()})}onSubmit({value:s}){s.id?(this.loader.present(),this.customerTypeService.updateCustomerType(s.id,s).pipe((0,c.K)(t=>(this.loader.dismiss(),this.showToast("Some error has been occured","danger"),(0,l._)(()=>t)))).subscribe(t=>{this.loader.dismiss(),t.responseData&&t.responseData.id&&0==t.errCode&&(this.showToast("Customer Type updated Successfully","secondary"),this.customerTypeService.resetValues(),this.fetchCustomerTypeList(this.customerTypeService.pageIndex,this.customerTypeService.pageSize,this.customerTypeService.searchTerm),this.router.navigate(["/customer-type"]))})):(this.loader.present(),this.customerTypeService.AddCustomerType(s).pipe((0,c.K)(t=>(this.loader.dismiss(),this.showToast("Some error has been occured","danger"),(0,l._)(()=>t)))).subscribe(t=>{this.loader.dismiss(),t.responseData&&t.responseData.id&&0==t.errCode&&(this.showToast("Customer Type Added Successfully","secondary"),this.customerTypeService.resetValues(),this.fetchCustomerTypeList(this.customerTypeService.pageIndex,this.customerTypeService.pageSize,this.customerTypeService.searchTerm),this.router.navigate(["/customer-type"]))}))}fetchCustomerTypeList(s,t,r){var u=this;return(0,T.Z)(function*(){yield u.customerTypeService.refreshCustomerTypeList(s,t,r),u.customerTypeService.pageIndex+=1})()}showToast(s,t){var r=this;return(0,T.Z)(function*(){yield r.toastCtrl.create({message:s,duration:2e3,position:"top",color:t,buttons:[{text:"ok",handler:()=>{}}]}).then(u=>u.present())})()}static#e=this.\u0275fac=function(t){return new(t||a)(e.Y36(n.qu),e.Y36(m.gz),e.Y36(_.a),e.Y36(m.F0),e.Y36(h.Br),e.Y36(h.yF),e.Y36(g.D))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-customer-type-detail"]],standalone:!0,features:[e.jDz],decls:24,vars:6,consts:[[3,"formGroup","ngSubmit"],[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","/customer-type"],["slot","primary",4,"ngIf"],["slot","end",3,"collapse",4,"ngIf"],[3,"fullscreen"],["no-padding",""],["label","Customer Type Name","labelPlacement","floating","formControlName","customerTypeName"],["aria-label","Active","interface","popover","placeholder","Active","formControlName","active"],["value","Y"],["value","N"],["slot","primary"],[3,"click"],["name","create-outline","slot","icon-only"],["slot","end",3,"collapse"],["type","submit"],[3,"routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return r.onSubmit(r.customerTypeForm)}),e.TgZ(1,"ion-header",1)(2,"ion-toolbar",2)(3,"ion-buttons",3),e._UZ(4,"ion-back-button",4),e.qZA(),e.TgZ(5,"ion-title"),e._uU(6,"Customer Type Details"),e.qZA(),e.YNc(7,C,3,0,"ion-buttons",5),e.YNc(8,f,3,1,"ion-buttons",6),e.YNc(9,v,3,3,"ion-buttons",6),e.qZA()(),e.TgZ(10,"ion-content",7)(11,"ion-grid",8)(12,"ion-row")(13,"ion-col",8)(14,"ion-item"),e._UZ(15,"ion-input",9),e.qZA()()(),e.TgZ(16,"ion-row")(17,"ion-col",8)(18,"ion-item")(19,"ion-select",10)(20,"ion-select-option",11),e._uU(21,"Yes"),e.qZA(),e.TgZ(22,"ion-select-option",12),e._uU(23,"No"),e.qZA()()()()()()()()),2&t&&(e.Q6J("formGroup",r.customerTypeForm),e.xp6(1),e.Q6J("translucent",!0),e.xp6(6),e.Q6J("ngIf",1==r.ViewDataFlag),e.xp6(1),e.Q6J("ngIf",0==r.ViewDataFlag),e.xp6(1),e.Q6J("ngIf",0==r.ViewDataFlag),e.xp6(1),e.Q6J("fullscreen",!0))},dependencies:[o.Pc,o.YG,o.Sm,o.wI,o.W2,o.jY,o.Gu,o.gu,o.pK,o.Ie,o.Nd,o.t9,o.n0,o.wd,o.sr,o.QI,o.j9,o.oU,o.YI,m.rH,y.O5,n.UX,n._Y,n.JJ,n.JL,n.sg,n.u]})}return a})()}}]);