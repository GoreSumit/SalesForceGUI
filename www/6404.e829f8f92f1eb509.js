"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6404],{6404:(x,m,i)=>{i.r(m),i.d(m,{CustomerPage:()=>C});var a=i(5861),l=i(6814),u=i(95),h=i(209),r=i(3582),e=i(6689),g=i(8010),S=i(4414);const d=function(){return["/customer",""]};function v(c,_){if(1&c){const t=e.EpF();e.TgZ(0,"ion-toolbar",5)(1,"ion-buttons",6),e._UZ(2,"ion-back-button",7),e.qZA(),e.TgZ(3,"ion-buttons",8)(4,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.toggleSearchBar())}),e._UZ(5,"ion-icon",10),e.qZA()(),e.TgZ(6,"ion-title"),e._uU(7,"Customer"),e.qZA(),e.TgZ(8,"ion-buttons",8)(9,"ion-button",11),e._UZ(10,"ion-icon",12),e.qZA()()()}2&c&&(e.xp6(9),e.Q6J("routerLink",e.DdM(1,d)))}function f(c,_){if(1&c){const t=e.EpF();e.TgZ(0,"ion-toolbar",5)(1,"ion-buttons",6),e._UZ(2,"ion-back-button"),e.qZA(),e.TgZ(3,"ion-searchbar",13),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.customerService.searchTerm=n)}),e.qZA(),e.TgZ(4,"ion-buttons",14)(5,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.search(n.customerService.searchTerm))}),e._uU(6,"Search"),e.qZA()(),e.TgZ(7,"ion-buttons",14)(8,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.cancelSearch())}),e._uU(9,"Cancel"),e.qZA()()()}if(2&c){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.customerService.searchTerm)}}const p=function(c){return["/customer",c]};function T(c,_){if(1&c&&(e.TgZ(0,"ion-item",11)(1,"ion-label")(2,"strong"),e._uU(3),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"ion-note",16),e._uU(6),e.qZA()(),e.TgZ(7,"div",17),e._UZ(8,"ion-icon",18),e.qZA()()),2&c){const t=_.$implicit;e.Q6J("routerLink",e.VKq(3,p,t.id)),e.xp6(3),e.Oqu(t.customerCode),e.xp6(3),e.hij(" ",t.customerName," ")}}let C=(()=>{class c{constructor(t,o){this.customerService=t,this.toastCtrl=o}ngOnInit(){this.customerService.searchTerm="",this.fetchCustomerList(this.customerService.pageIndex,this.customerService.pageSize,this.customerService.searchTerm),this.customerService.pageIndex+=1}fetchCustomerList(t,o,n){var s=this;return(0,a.Z)(function*(){yield s.customerService.refreshCustomerList(t,o,n)})()}onScrollLoadData(t){var o=this;return(0,a.Z)(function*(){o.customerService.customerList.length!==o.customerService.totalCount&&(o.fetchCustomerList(o.customerService.pageIndex,o.customerService.pageSize,o.customerService.searchTerm),o.customerService.pageIndex+=1),setTimeout(()=>{t.target.complete()},500)})()}toggleSearchBar(){this.customerService.showSearchBar=!this.customerService.showSearchBar}cancelSearch(){var t=this;return(0,a.Z)(function*(){t.customerService.showSearchBar=!1,t.customerService.searchTerm="",t.customerService.pageIndex=1,t.customerService.customerList=[],yield t.fetchCustomerList(t.customerService.pageIndex,t.customerService.pageSize,t.customerService.searchTerm),t.customerService.pageIndex+=1})()}search(t){var o=this;return(0,a.Z)(function*(){o.customerService.pageIndex=1,o.customerService.customerList=[],yield o.fetchCustomerList(o.customerService.pageIndex,o.customerService.pageSize,o.customerService.searchTerm),o.customerService.pageIndex+=1})()}showToast(t,o){var n=this;return(0,a.Z)(function*(){yield n.toastCtrl.create({message:t,duration:2e3,position:"top",color:o,buttons:[{text:"ok",handler:()=>{}}]}).then(s=>s.present())})()}static#e=this.\u0275fac=function(o){return new(o||c)(e.Y36(g.v),e.Y36(S.yF))};static#t=this.\u0275cmp=e.Xpm({type:c,selectors:[["app-customer"]],standalone:!0,features:[e.jDz],decls:9,vars:6,consts:[[3,"translucent"],["color","primary",4,"ngIf"],[3,"fullscreen"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"ionInfinite"],["color","primary"],["slot","start"],["defaultHref","/"],["slot","primary"],["expand","block",3,"click"],["name","search-outline"],[3,"routerLink"],["name","add-outline","slot","icon-only"],[3,"ngModel","ngModelChange"],["slot","end"],[2,"text-transform","none",3,"click"],["color","medium",1,"ion-text-wrap"],["slot","end",1,"metadata-end-wrapper"],["color","medium","name","chevron-forward"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header",0),e.YNc(1,v,11,2,"ion-toolbar",1),e.YNc(2,f,10,1,"ion-toolbar",1),e.qZA(),e.TgZ(3,"ion-content",2)(4,"ion-content",2)(5,"ion-list"),e.YNc(6,T,9,5,"ion-item",3),e.qZA(),e.TgZ(7,"ion-infinite-scroll",4),e.NdJ("ionInfinite",function(Z){return n.onScrollLoadData(Z)}),e._UZ(8,"ion-infinite-scroll-content"),e.qZA()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(1),e.Q6J("ngIf",!n.customerService.showSearchBar),e.xp6(1),e.Q6J("ngIf",n.customerService.showSearchBar),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("ngForOf",n.customerService.customerList))},dependencies:[r.Pc,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.ju,r.MB,r.Ie,r.Q$,r.q_,r.uN,r.VI,r.wd,r.sr,r.j9,r.oU,r.YI,h.rH,l.ax,l.O5,u.u5,u.JJ,u.On]})}return c})()}}]);