"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3687],{3687:(_,l,r)=>{r.r(l),r.d(l,{LoginPageModule:()=>f});var s=r(6814),c=r(95),t=r(3582),g=r(209),n=r(6689);function p(o,P){if(1&o){const e=n.EpF();n.TgZ(0,"ion-content")(1,"ion-toolbar")(2,"ion-title",20),n._uU(3,"Forgot Password"),n.qZA(),n.TgZ(4,"ion-buttons",21)(5,"ion-button",22),n.NdJ("click",function(){n.CHM(e),n.oxw();const a=n.MAs(30);return n.KtG(a.dismiss())}),n._uU(6,"Close"),n.qZA()()(),n.TgZ(7,"p",23),n._uU(8," You will receive the Reset Password Email on your registered email id. "),n.qZA(),n.TgZ(9,"form",24),n.NdJ("ngSubmit",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.onPassSubmit())}),n.TgZ(10,"ion-grid",8)(11,"ion-row")(12,"ion-col",8)(13,"ion-item",25),n._UZ(14,"ion-input",26)(15,"ion-icon",27),n.qZA()()(),n.TgZ(16,"ion-row")(17,"ion-col",8)(18,"ion-item",25),n._UZ(19,"ion-input",28)(20,"ion-icon",29),n.qZA()()()(),n.TgZ(21,"div",23)(22,"ion-grid")(23,"ion-row")(24,"ion-col")(25,"ion-button",30),n._uU(26,"Send OTP"),n.qZA()(),n._uU(27," \xa0 "),n.TgZ(28,"ion-col")(29,"ion-button",31),n.NdJ("click",function(){n.CHM(e),n.oxw();const a=n.MAs(30);return n.KtG(a.dismiss())}),n._uU(30,"Submit"),n.qZA()()()()()()()}}const u=function(){return["/"]},d=[{path:"",component:(()=>{class o{constructor(e){this.router=e}ngOnInit(){}onSubmit(){localStorage.setItem("UserId","abc"),this.router.navigate(["/dashboard"])}onPassSubmit(){localStorage.setItem("UserId","abc"),this.router.navigate(["/"])}static#n=this.\u0275fac=function(i){return new(i||o)(n.Y36(g.F0))};static#t=this.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:32,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],[1,"form","login_form"],["action","#",2,"margin-top","35px",3,"ngSubmit"],[1,"title"],["src","../../assets/maskbc_logo.png",2,"height","100px"],[1,"description"],[2,"color","rgb(92, 92, 92)"],["no-padding",""],[2,"margin-top","20px"],["id","ionInputUserName","label","User name","labelPlacement","floating"],["name","person"],[2,"margin-top","10px"],["id","ionInputPassword","label","Password","labelPlacement","floating"],["name","key"],["href","","id","open-modal",1,"ForgetPass",2,"margin-top","10px",3,"routerLink"],["type","submit","expand","block",1,"loginbutton"],[2,"text-align","center","margin-top","20px"],["trigger","open-modal",2,"margin","10px"],["modal",""],[2,"margin-left","10px"],["slot","end"],["color","light",3,"click"],[1,"container-fluid"],["action","#",2,"margin-top","5px",3,"ngSubmit"],[2,"margin-top","5px"],["id","Email","label","Email","labelPlacement","floating",1,"lable"],["name","mail"],["id","otp","label","OTP","labelPlacement","floating",1,"lable"],["name","password"],["expand","block",1,"Submitbutton"],["type","submit","expand","block",1,"Submitbutton",3,"click"]],template:function(i,a){1&i&&(n._UZ(0,"ion-header",0),n.TgZ(1,"ion-content",1)(2,"div",2)(3,"form",3),n.NdJ("ngSubmit",function(){return a.onSubmit()}),n.TgZ(4,"div",4),n._UZ(5,"ion-img",5),n.qZA(),n.TgZ(6,"div",6)(7,"h3",7),n._uU(8,"Sales CRM"),n.qZA(),n.TgZ(9,"h6"),n._uU(10,"Version: 1.0.0.1"),n.qZA()(),n.TgZ(11,"ion-grid",8)(12,"ion-row")(13,"ion-col",8)(14,"ion-item",9),n._UZ(15,"ion-input",10)(16,"ion-icon",11),n.qZA()()(),n.TgZ(17,"ion-row")(18,"ion-col",8)(19,"ion-item",12),n._UZ(20,"ion-input",13)(21,"ion-icon",14),n.qZA()()(),n.TgZ(22,"ion-col",8)(23,"a",15),n._uU(24,"Forgot Password ? "),n.qZA()()(),n.TgZ(25,"ion-button",16),n._uU(26,"Log In"),n.qZA(),n.TgZ(27,"h6",17),n._uU(28,"Copyright \xa9 2023 MASK BC. All Rights reserved."),n.qZA()()(),n.TgZ(29,"ion-modal",18,19),n.YNc(31,p,31,0,"ng-template"),n.qZA()()),2&i&&(n.Q6J("translucent",!0),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(22),n.Q6J("routerLink",n.DdM(3,u)))},dependencies:[c._Y,c.JL,c.F,t.YG,t.Sm,t.wI,t.W2,t.jY,t.Gu,t.gu,t.Xz,t.pK,t.Ie,t.Nd,t.wd,t.sr,t.ki,t.j9,t.Fo,g.rH],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif}.title[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}h1[_ngcontent-%COMP%]{color:#7a7a7a}h6[_ngcontent-%COMP%]{color:#898989}h3[_ngcontent-%COMP%]{color:orange}.login_form[_ngcontent-%COMP%]{background-color:#fdfdfd;background-image:linear-gradient(-225deg,#f2f2f3 50%,#f2f2f3 50%);padding:20px;border-radius:8px;height:100vh}.description[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;justify-content:center;align-items:center;margin-top:30px}.input_box[_ngcontent-%COMP%]{position:relative;margin-top:30px;width:100%;height:40px}.input_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:100%;width:100%;border:none;outline:none;padding:0 30px;color:#333;transition:all .2s ease;border-bottom:1.5px solid #aaaaaa}.input_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#2c4d6c}.input_box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);font-size:20px;color:#707070}.input_box[_ngcontent-%COMP%]   i.user[_ngcontent-%COMP%], .input_box[_ngcontent-%COMP%]   i.password[_ngcontent-%COMP%]{left:5px}.input_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ i.user[_ngcontent-%COMP%], .input_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ i.password[_ngcontent-%COMP%]{color:#2c4d6c}a[_ngcontent-%COMP%]{color:#2c4d6c;font-size:12px}.loginbutton[_ngcontent-%COMP%]{background:#2c4d6c;margin-top:30px;width:100%;border-radius:5px;color:#fff;font-weight:700}footer[_ngcontent-%COMP%]{font-size:12px;text-align:center}ion-modal[_ngcontent-%COMP%]{--height: 50%;--border-radius: 16px;--box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)}ion-modal[_ngcontent-%COMP%]::part(backdrop){background:rgb(209,213,219);opacity:1}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: rgb(95 188 128);--color: white}.Submitbutton[_ngcontent-%COMP%]{background:#2c4d6c;margin-top:20px;width:100%;border-radius:25px;margin-right:16px;color:#fff;font-weight:700}.OTPbutton[_ngcontent-%COMP%]{background:#2c4d6c;margin-top:30px;margin-right:16px;width:100%;border-radius:25px;color:#fff;font-weight:700}.ForgetPass[_ngcontent-%COMP%]{text-decoration:none;color:#2c4d6c;margin-top:3px}.container-fluid[_ngcontent-%COMP%]{margin:10px;display:flex;font-family:Poppins,sans-serif}.lable[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.scroll-y[_ngcontent-%COMP%]{overflow-y:var(--overflow)}"]})}return o})()}];let m=(()=>{class o{static#n=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=n.oAB({type:o});static#o=this.\u0275inj=n.cJS({imports:[g.Bz.forChild(d),g.Bz]})}return o})(),f=(()=>{class o{static#n=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275mod=n.oAB({type:o});static#o=this.\u0275inj=n.cJS({imports:[s.ez,c.u5,t.Pc,m]})}return o})()}}]);