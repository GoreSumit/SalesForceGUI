"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2203],{2203:(P,_,s)=>{s.r(_),s.d(_,{AreaDetailPage:()=>I});var g=s(5861),m=s(6814),n=s(95),h=s(209),r=s(3582),c=s(6306),d=s(8504),e=s(6689),f=s(8353),p=s(4414),A=s(2722);function v(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"ion-buttons",15)(1,"ion-button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.ChangeViewDataFlag())}),e._UZ(2,"ion-icon",17),e.qZA()()}}function D(i,u){1&i&&(e.TgZ(0,"ion-buttons",18)(1,"ion-button",19),e._uU(2,"Save"),e.qZA()()),2&i&&e.Q6J("collapse",!0)}const b=function(){return["/area"]};function T(i,u){1&i&&(e.TgZ(0,"ion-buttons",18)(1,"ion-button",20),e._uU(2,"Cancel"),e.qZA()()),2&i&&(e.Q6J("collapse",!0),e.xp6(1),e.Q6J("routerLink",e.DdM(2,b)))}function S(i,u){if(1&i&&(e.TgZ(0,"ion-select-option",21),e._uU(1),e.qZA()),2&i){const t=u.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.regionCode," ")}}let I=(()=>{class i{constructor(t,a,o,l,C,E,F){this.activatedRoute=t,this.areaService=a,this.router=o,this._fb=l,this.alertCtrl=C,this.toastCtrl=E,this.loader=F,this.loadedArea={},this.ViewDataFlag=!1}ngOnInit(){this.initAreaForm(),this.activatedRoute.paramMap.subscribe(t=>{if(t.has("areaId"))if(t.get("areaId")){const a=JSON.parse(t.get("areaId"));this.ViewDataFlag=!0,this.loadAreaDetails(a)}else this.loadAreaDetails();else this.router.navigate(["/area"])})}initAreaForm(){this.areaForm=this._fb.group({id:[0],areaCode:["",n.kI.required],areaName:["",n.kI.required],regionId:["",n.kI.required],active:["",n.kI.required]}),this.areaForm.controls.active.setValue("Y"),this.areaService.getRegionList()}enableFormControl(t){1==t?(this.areaForm.get("areaCode").enable(),this.areaForm.get("areaName").enable(),this.areaForm.get("regionId").enable(),this.areaForm.get("active").enable()):(this.areaForm.get("areaCode").disable(),this.areaForm.get("areaName").disable(),this.areaForm.get("regionId").disable(),this.areaForm.get("active").disable())}loadAreaDetails(t=-1){-1==t||(this.areaService.getArea(t).pipe((0,c.K)(a=>(this.showToast("Some error has been occured","danger"),(0,d._)(()=>a)))).subscribe(a=>{a.responseData&&(this.loadedArea=a.responseData[0],this.areaForm.patchValue({id:this.loadedArea.id,areaCode:this.loadedArea.areaCode,areaName:this.loadedArea.areaName,regionId:this.loadedArea.regionId,active:this.loadedArea.active}))}),this.enableFormControl(!1))}ChangeViewDataFlag(){this.ViewDataFlag=!1,this.enableFormControl(!0)}DeleteArea(){const t=this.loadedArea.id;this.alertCtrl.create({header:"Are you sure?",message:"Do you really want to delete the Area?",buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:()=>{this.loader.present(),this.areaService.deleteArea(t).pipe((0,c.K)(a=>(this.loader.dismiss(),this.showToast("Some error has been occured","danger"),(0,d._)(()=>a)))).subscribe(a=>{this.loader.dismiss(),a.responseData&&a.responseData.id==this.loadedArea.id&&0==a.errCode&&(this.showToast("Area Deleted Successfully","secondary"),this.areaService.resetValues(),this.fetchAreaList(this.areaService.pageIndex,this.areaService.pageSize,this.areaService.searchTerm),this.router.navigate(["/area"]))})}}]}).then(a=>{a.present()})}onSubmit({value:t}){t.id?this.areaService.updateArea(t.id,t).pipe((0,c.K)(a=>(this.showToast("Some error has been occured","danger"),(0,d._)(()=>a)))).subscribe(a=>{a.responseData&&a.responseData.id&&0==a.errCode&&(this.showToast("Area updated Successfully","secondary"),this.areaService.resetValues(),this.fetchAreaList(this.areaService.pageIndex,this.areaService.pageSize,this.areaService.searchTerm),this.router.navigate(["/area"]))}):(this.loader.present(),this.areaService.AddArea(t).pipe((0,c.K)(a=>(this.loader.dismiss(),this.showToast("Some error has been occured","danger"),(0,d._)(()=>a)))).subscribe(a=>{this.loader.dismiss(),a.responseData&&a.responseData.id&&0==a.errCode&&(this.showToast("Area Added Successfully","secondary"),this.areaService.resetValues(),this.fetchAreaList(this.areaService.pageIndex,this.areaService.pageSize,this.areaService.searchTerm),this.router.navigate(["/area"]))}))}fetchAreaList(t,a,o){var l=this;return(0,g.Z)(function*(){yield l.areaService.refreshAreaList(t,a,o),l.areaService.pageIndex+=1})()}showToast(t,a){var o=this;return(0,g.Z)(function*(){yield o.toastCtrl.create({message:t,duration:2e3,position:"top",color:a,buttons:[{text:"ok",handler:()=>{}}]}).then(l=>l.present())})()}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(h.gz),e.Y36(f.T),e.Y36(h.F0),e.Y36(n.qu),e.Y36(p.Br),e.Y36(p.yF),e.Y36(A.D))};static#a=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-area-detail"]],standalone:!0,features:[e.jDz],decls:29,vars:7,consts:[[3,"formGroup","ngSubmit"],[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","/area"],["slot","primary",4,"ngIf"],["slot","end",3,"collapse",4,"ngIf"],[3,"fullscreen"],["no-padding",""],["label","Area Name","labelPlacement","floating","formControlName","areaName"],["aria-label","Active","interface","popover","placeholder","Region Id","formControlName","regionId"],[3,"value",4,"ngFor","ngForOf"],["aria-label","Active","interface","popover","placeholder","Active","formControlName","active"],["value","Y"],["value","N"],["slot","primary"],[3,"click"],["name","create-outline","slot","icon-only"],["slot","end",3,"collapse"],["type","submit"],[3,"routerLink"],[3,"value"]],template:function(a,o){1&a&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.onSubmit(o.areaForm)}),e.TgZ(1,"ion-header",1)(2,"ion-toolbar",2)(3,"ion-buttons",3),e._UZ(4,"ion-back-button",4),e.qZA(),e.TgZ(5,"ion-title"),e._uU(6,"Area Details"),e.qZA(),e.YNc(7,v,3,0,"ion-buttons",5),e.YNc(8,D,3,1,"ion-buttons",6),e.YNc(9,T,3,3,"ion-buttons",6),e.qZA()(),e.TgZ(10,"ion-content",7)(11,"ion-grid",8)(12,"ion-row")(13,"ion-col",8)(14,"ion-item"),e._UZ(15,"ion-input",9),e.qZA()()(),e.TgZ(16,"ion-row")(17,"ion-col",8)(18,"ion-item")(19,"ion-select",10),e.YNc(20,S,2,2,"ion-select-option",11),e.qZA()()()(),e.TgZ(21,"ion-row")(22,"ion-col",8)(23,"ion-item")(24,"ion-select",12)(25,"ion-select-option",13),e._uU(26,"Yes"),e.qZA(),e.TgZ(27,"ion-select-option",14),e._uU(28,"No"),e.qZA()()()()()()()()),2&a&&(e.Q6J("formGroup",o.areaForm),e.xp6(1),e.Q6J("translucent",!0),e.xp6(6),e.Q6J("ngIf",1==o.ViewDataFlag),e.xp6(1),e.Q6J("ngIf",0==o.ViewDataFlag),e.xp6(1),e.Q6J("ngIf",0==o.ViewDataFlag),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(10),e.Q6J("ngForOf",o.areaService.regionList))},dependencies:[r.Pc,r.YG,r.Sm,r.wI,r.W2,r.jY,r.Gu,r.gu,r.pK,r.Ie,r.Nd,r.t9,r.n0,r.wd,r.sr,r.QI,r.j9,r.oU,r.YI,h.rH,m.ax,m.O5,n.UX,n._Y,n.JJ,n.JL,n.sg,n.u]})}return i})()}}]);