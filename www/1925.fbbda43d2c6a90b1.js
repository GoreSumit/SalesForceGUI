"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1925],{1925:(T,p,i)=>{i.r(p),i.d(p,{ExpenseMasterPage:()=>f});var c=i(5861),x=i(6814),u=i(209),r=i(3582),_=i(95),e=i(6689),M=i(2005),h=i(4414);const g=function(){return["/expensemaster",""]};function m(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"ion-toolbar",5)(1,"ion-buttons",6),e._UZ(2,"ion-back-button",7),e.qZA(),e.TgZ(3,"ion-title"),e._uU(4,"Expense Master"),e.qZA(),e.TgZ(5,"ion-buttons",8)(6,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.toggleSearchBar())}),e._UZ(7,"ion-icon",10),e.qZA()(),e.TgZ(8,"ion-buttons",8)(9,"ion-button",11),e._UZ(10,"ion-icon",12),e.qZA()()()}2&a&&(e.xp6(9),e.Q6J("routerLink",e.DdM(1,g)))}function S(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"ion-toolbar",5)(1,"ion-buttons",6),e._UZ(2,"ion-back-button"),e.qZA(),e.TgZ(3,"ion-searchbar",13),e.NdJ("ngModelChange",function(s){e.CHM(t);const o=e.oxw();return e.KtG(o.expenseMasterService.searchTerm=s)}),e.qZA(),e.TgZ(4,"ion-buttons",14)(5,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.search(s.expenseMasterService.searchTerm))}),e._uU(6,"Search"),e.qZA()(),e.TgZ(7,"ion-buttons",14)(8,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.cancelSearch())}),e._uU(9,"Cancel"),e.qZA()()()}if(2&a){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.expenseMasterService.searchTerm)}}const d=function(a){return["/expensemaster",a]};function v(a,l){if(1&a&&(e.TgZ(0,"ion-item",11)(1,"ion-label")(2,"strong"),e._uU(3),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"ion-note",16),e._uU(6),e.qZA()(),e.TgZ(7,"div",17),e._UZ(8,"ion-icon",18),e.qZA()()),2&a){const t=l.$implicit;e.Q6J("routerLink",e.VKq(3,d,t.id)),e.xp6(3),e.Oqu(t.DailyAllowanceLocal),e.xp6(3),e.hij(" ",t.DesignationId," ")}}let f=(()=>{class a{constructor(t,n){this.expenseMasterService=t,this.toastCtrl=n}ngOnInit(){this.expenseMasterService.searchTerm="",this.fetchExpenseMasterList(this.expenseMasterService.pageIndex,this.expenseMasterService.pageSize,this.expenseMasterService.searchTerm),this.expenseMasterService.pageIndex+=1}fetchExpenseMasterList(t,n,s){var o=this;return(0,c.Z)(function*(){yield o.expenseMasterService.refreshExpenseMasterList(t,n,s)})()}onScrollLoadData(t){var n=this;return(0,c.Z)(function*(){n.expenseMasterService.expensemasterList.length!==n.expenseMasterService.totalCount&&(n.fetchExpenseMasterList(n.expenseMasterService.pageIndex,n.expenseMasterService.pageSize,n.expenseMasterService.searchTerm),n.expenseMasterService.pageIndex+=1),setTimeout(()=>{t.target.complete()},500)})()}toggleSearchBar(){this.expenseMasterService.showSearchBar=!this.expenseMasterService.showSearchBar}cancelSearch(){var t=this;return(0,c.Z)(function*(){t.expenseMasterService.showSearchBar=!1,t.expenseMasterService.searchTerm="",t.expenseMasterService.pageIndex=1,t.expenseMasterService.expensemasterList=[],yield t.fetchExpenseMasterList(t.expenseMasterService.pageIndex,t.expenseMasterService.pageSize,t.expenseMasterService.searchTerm),t.expenseMasterService.pageIndex+=1})()}search(t){var n=this;return(0,c.Z)(function*(){n.expenseMasterService.pageIndex=1,n.expenseMasterService.expensemasterList=[],yield n.fetchExpenseMasterList(n.expenseMasterService.pageIndex,n.expenseMasterService.pageSize,n.expenseMasterService.searchTerm),n.expenseMasterService.pageIndex+=1})()}showToast(t,n){var s=this;return(0,c.Z)(function*(){yield s.toastCtrl.create({message:t,duration:2e3,position:"top",color:n,buttons:[{text:"ok",handler:()=>{}}]}).then(o=>o.present())})()}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(M.a),e.Y36(h.yF))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-expense-master"]],standalone:!0,features:[e.jDz],decls:8,vars:5,consts:[[3,"translucent"],["color","primary",4,"ngIf"],[3,"fullscreen"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"ionInfinite"],["color","primary"],["slot","start"],["defaultHref","/"],["slot","primary"],["expand","block",3,"click"],["name","search-outline"],[3,"routerLink"],["name","add-outline","slot","icon-only"],[3,"ngModel","ngModelChange"],["slot","end"],[2,"text-transform","none",3,"click"],["color","medium",1,"ion-text-wrap"],["slot","end",1,"metadata-end-wrapper"],["color","medium","name","chevron-forward"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-header",0),e.YNc(1,m,11,2,"ion-toolbar",1),e.YNc(2,S,10,1,"ion-toolbar",1),e.qZA(),e.TgZ(3,"ion-content",2)(4,"ion-list"),e.YNc(5,v,9,5,"ion-item",3),e.qZA(),e.TgZ(6,"ion-infinite-scroll",4),e.NdJ("ionInfinite",function(E){return s.onScrollLoadData(E)}),e._UZ(7,"ion-infinite-scroll-content"),e.qZA()()),2&n&&(e.Q6J("translucent",!0),e.xp6(1),e.Q6J("ngIf",!s.expenseMasterService.showSearchBar),e.xp6(1),e.Q6J("ngIf",s.expenseMasterService.showSearchBar),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("ngForOf",s.expenseMasterService.expensemasterList))},dependencies:[r.Pc,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.ju,r.MB,r.Ie,r.Q$,r.q_,r.uN,r.VI,r.wd,r.sr,r.j9,r.oU,r.YI,u.rH,x.ax,x.O5,_.u5,_.JJ,_.On]})}return a})()}}]);