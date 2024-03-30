"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8744],{8744:(m,p,c)=>{c.r(p),c.d(p,{WorkingTypePage:()=>f});var g=c(5861),l=c(6814),s=c(95),T=c(209),o=c(3582),e=c(6689),u=c(2131),y=c(4414);const k=function(){return["/working-type",""]};function h(t,_){if(1&t){const n=e.EpF();e.TgZ(0,"ion-toolbar",5)(1,"ion-buttons",6),e._UZ(2,"ion-back-button",7),e.qZA(),e.TgZ(3,"ion-title"),e._uU(4,"Working Type"),e.qZA(),e.TgZ(5,"ion-buttons",8)(6,"ion-button",9),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.toggleSearchBar())}),e._UZ(7,"ion-icon",10),e.qZA()(),e.TgZ(8,"ion-buttons",8)(9,"ion-button",11),e._UZ(10,"ion-icon",12),e.qZA()()()}2&t&&(e.xp6(9),e.Q6J("routerLink",e.DdM(1,k)))}function w(t,_){if(1&t){const n=e.EpF();e.TgZ(0,"ion-toolbar",5)(1,"ion-buttons",6),e._UZ(2,"ion-back-button"),e.qZA(),e.TgZ(3,"ion-searchbar",13),e.NdJ("ngModelChange",function(r){e.CHM(n);const a=e.oxw();return e.KtG(a.workingTypeService.searchTerm=r)}),e.qZA(),e.TgZ(4,"ion-buttons",14)(5,"ion-button",15),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.search(r.workingTypeService.searchTerm))}),e._uU(6,"Search"),e.qZA()(),e.TgZ(7,"ion-buttons",14)(8,"ion-button",15),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.cancelSearch())}),e._uU(9,"Cancel"),e.qZA()()()}if(2&t){const n=e.oxw();e.xp6(3),e.Q6J("ngModel",n.workingTypeService.searchTerm)}}const d=function(t){return["/working-type",t]};function S(t,_){if(1&t&&(e.TgZ(0,"ion-item",11)(1,"ion-label")(2,"strong"),e._uU(3),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"ion-note",16),e._uU(6),e.qZA()(),e.TgZ(7,"div",17),e._UZ(8,"ion-icon",18),e.qZA()()),2&t){const n=_.$implicit;e.Q6J("routerLink",e.VKq(3,d,n.id)),e.xp6(3),e.Oqu(n.typeName),e.xp6(3),e.hij(" ",n.typeName," ")}}let f=(()=>{class t{constructor(n,i){this.workingTypeService=n,this.toastCtrl=i}ngOnInit(){this.workingTypeService.searchTerm="",this.fetchworkingTypeList(this.workingTypeService.pageIndex,this.workingTypeService.pageSize,this.workingTypeService.searchTerm),this.workingTypeService.pageIndex+=1}fetchworkingTypeList(n,i,r){var a=this;return(0,g.Z)(function*(){yield a.workingTypeService.refreshworkingTypeList(n,i,r)})()}onScrollLoadData(n){var i=this;return(0,g.Z)(function*(){i.workingTypeService.workingTypeList.length!==i.workingTypeService.totalCount&&(i.fetchworkingTypeList(i.workingTypeService.pageIndex,i.workingTypeService.pageSize,i.workingTypeService.searchTerm),i.workingTypeService.pageIndex+=1),setTimeout(()=>{n.target.complete()},500)})()}toggleSearchBar(){this.workingTypeService.showSearchBar=!this.workingTypeService.showSearchBar}cancelSearch(){var n=this;return(0,g.Z)(function*(){n.workingTypeService.showSearchBar=!1,n.workingTypeService.searchTerm="",n.workingTypeService.pageIndex=1,n.workingTypeService.workingTypeList=[],yield n.fetchworkingTypeList(n.workingTypeService.pageIndex,n.workingTypeService.pageSize,n.workingTypeService.searchTerm),n.workingTypeService.pageIndex+=1})()}search(n){var i=this;return(0,g.Z)(function*(){i.workingTypeService.pageIndex=1,i.workingTypeService.workingTypeList=[],yield i.fetchworkingTypeList(i.workingTypeService.pageIndex,i.workingTypeService.pageSize,n),i.workingTypeService.pageIndex+=1})()}showToast(n,i){var r=this;return(0,g.Z)(function*(){yield r.toastCtrl.create({message:n,duration:2e3,position:"top",color:i,buttons:[{text:"ok",handler:()=>{}}]}).then(a=>a.present())})()}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(u.d),e.Y36(y.yF))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-working-type"]],standalone:!0,features:[e.jDz],decls:8,vars:5,consts:[[3,"translucent"],["color","primary",4,"ngIf"],[3,"fullscreen"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"ionInfinite"],["color","primary"],["slot","start"],["defaultHref","/"],["slot","primary"],["expand","block",3,"click"],["name","search-outline"],[3,"routerLink"],["name","add-outline","slot","icon-only"],[3,"ngModel","ngModelChange"],["slot","end"],[2,"text-transform","none",3,"click"],["color","medium",1,"ion-text-wrap"],["slot","end",1,"metadata-end-wrapper"],["color","medium","name","chevron-forward"]],template:function(i,r){1&i&&(e.TgZ(0,"ion-header",0),e.YNc(1,h,11,2,"ion-toolbar",1),e.YNc(2,w,10,1,"ion-toolbar",1),e.qZA(),e.TgZ(3,"ion-content",2)(4,"ion-list"),e.YNc(5,S,9,5,"ion-item",3),e.qZA(),e.TgZ(6,"ion-infinite-scroll",4),e.NdJ("ionInfinite",function(v){return r.onScrollLoadData(v)}),e._UZ(7,"ion-infinite-scroll-content"),e.qZA()()),2&i&&(e.Q6J("translucent",!0),e.xp6(1),e.Q6J("ngIf",!r.workingTypeService.showSearchBar),e.xp6(1),e.Q6J("ngIf",r.workingTypeService.showSearchBar),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("ngForOf",r.workingTypeService.workingTypeList))},dependencies:[o.Pc,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.ju,o.MB,o.Ie,o.Q$,o.q_,o.uN,o.VI,o.wd,o.sr,o.j9,o.oU,o.YI,T.rH,l.ax,l.O5,s.u5,s.JJ,s.On]})}return t})()}}]);