"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5468],{5468:(O,y,s)=>{s.d(y,{K:()=>E});var e=s(2116),d=s(1224),h=s(6716),n=s(7515),m=s(9984),_=s(8980);let C=(()=>{var o;class l{constructor(){this.jsonData=[{id:1,label:"saw",name:"Prithivi"},{id:2,label:"saw1",name:"Abimanyu"},{id:3,label:"saw2",name:"malliga"},{id:3,label:"saw2",name:"Gowdaman"},{id:3,label:"saw2",name:"Neethi"},{id:3,label:"saw2",name:"abirami1"},{id:3,label:"saw2",name:"abirami2"},{id:3,label:"saw2",name:"Harrish"},{id:3,label:"saw2",name:"Lokesh"},{id:3,label:"saw2",name:"Deepak"},{id:3,label:"saw2",name:"malliga"},{id:3,label:"saw2",name:"malliga"}]}filterItems(r){return this.jsonData.filter(t=>t.name.toLowerCase().includes(r.toLowerCase()))}}return(o=l).\u0275fac=function(r){return new(r||o)},o.\u0275prov=e.wxM({token:o,factory:o.\u0275fac,providedIn:"root"}),l})();var a=s(1368),g=s(4716);function c(o,l){if(1&o&&(e.I0R(0,"ion-item")(1,"ion-label"),e.OEk(2),e.C$Y()()),2&o){const i=l.$implicit;e.yG2(2),e.cNF(i.name)}}function b(o,l){1&o&&(e.I0R(0,"ion-card",28)(1,"ion-list")(2,"ion-thumbnail",29),e.wR5(3,"ion-skeleton-text",30),e.C$Y(),e.I0R(4,"ion-item",14),e.wR5(5,"ion-skeleton-text",31),e.C$Y(),e.I0R(6,"ion-item",14),e.wR5(7,"ion-skeleton-text",32)(8,"ion-skeleton-text",33),e.C$Y()()()),2&o&&(e.yG2(3),e.E7m("animated",!0),e.yG2(2),e.E7m("animated",!0),e.yG2(2),e.E7m("animated",!0),e.yG2(),e.E7m("animated",!0))}function v(o,l){if(1&o&&(e.I0R(0,"div"),e.yuY(1,b,9,4,"ion-card",27),e.C$Y()),2&o){const i=e.GaO();e.yG2(),e.E7m("ngForOf",i.isLoadNum)}}function w(o,l){if(1&o&&(e.I0R(0,"ion-text",46),e.OEk(1),e.C$Y()),2&o){const i=e.GaO().$implicit;e.yG2(),e.cNF(i.old_price)}}function R(o,l){if(1&o&&(e.I0R(0,"ion-text",47),e.OEk(1),e.C$Y()),2&o){const i=e.GaO().$implicit;e.yG2(),e.cNF(i.badge)}}function I(o,l){if(1&o&&(e.I0R(0,"ion-text",48),e.OEk(1),e.C$Y()),2&o){const i=e.GaO().$implicit;e.yG2(),e.cNF(i.price)}}const f=o=>[o];function k(o,l){if(1&o&&(e.I0R(0,"ion-nav-link",35)(1,"ion-card"),e.wR5(2,"img",36)(3,"div",9),e.I0R(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6),e.C$Y(),e.I0R(7,"ion-card-subtitle"),e.OEk(8),e.C$Y()(),e.I0R(9,"ion-footer")(10,"ion-row")(11,"ion-col",37)(12,"div")(13,"ion-text",38),e.wR5(14,"ion-icon",39)(15,"ion-icon",39)(16,"ion-icon",39)(17,"ion-icon",39)(18,"ion-icon",39),e.C$Y()(),e.I0R(19,"div"),e.yuY(20,w,2,1,"ion-text",40)(21,R,2,1,"ion-text",41)(22,I,2,1,"ion-text",42),e.C$Y()(),e.I0R(23,"ion-col",43)(24,"div")(25,"ion-text",1),e.wR5(26,"ion-icon",44),e.OEk(27," Duration: "),e.I0R(28,"strong"),e.OEk(29),e.C$Y()()(),e.I0R(30,"ion-button",45),e.OEk(31,"Book Now"),e.C$Y()()()()()()),2&o){const i=l.$implicit,r=e.GaO(2);e.E7m("routerLink",e.S45(10,f,i.link))("component",r.component),e.yG2(2),e._6D("alt",i.title),e._6D("src",i.image,e.K6U),e.yG2(4),e.cNF(i.title),e.yG2(2),e.cNF(i.category),e.yG2(12),e.E7m("ngIf",i.old_price&&"CA$0"!==i.old_price),e.yG2(),e.E7m("ngIf",i.badge),e.yG2(),e.E7m("ngIf",i.price),e.yG2(7),e.cNF(i.duration)}}function P(o,l){if(1&o&&(e.I0R(0,"div"),e.yuY(1,k,32,12,"ion-nav-link",34),e.C$Y()),2&o){const i=e.GaO();e.yG2(),e.E7m("ngForOf",i.item_list)}}let E=(()=>{var o;class l{constructor(r,t){this.service=r,this.data=t,this.component=m.A,this.content=n._i,this.activatedRoute=(0,e.uUt)(d.gV),this.logo=h.O.logo,this.image1=h.O.image1,this.image2=h.O.image2,this.image3=h.O.image3,this.image4=h.O.image4,this.home_link="/home",this.p=[],this.item_list=[],this.isLoad=!0,this.isLoadNum=Array(5),this.searchTerm="",this.total_item=0,this.data1=["Amsterdam","Buenos Aires","Cairo","Geneva","Hong Kong","Istanbul","London","Madrid","New York","Panama City"],this.results=[...this.data1],this.isSearch=!1}ngOnInit(){this.category=this.activatedRoute.snapshot.paramMap.get("id"),this.loadCategory({per_page:10,category:this.category,page:1,orderby:"date",order:"DESC"})}sortByChange(r){this.loadCategory({per_page:10,category:this.category,page:1,orderby:r.target.value})}loadCategory(r){this.isLoad=!0,this.service.toursByCategory(r).subscribe({next:t=>{console.log(t),this.p=t.category,this.item_list=t.tours,this.total_item=t.tours.length,this.isLoad=!1},error:t=>{console.log(t)}})}scrollToTop(){this.content.scrollToTop(500)}handleInput(r){const t=r.target.value.toLowerCase();console.log(t),t?(this.results=this.data1.filter(p=>p.toLowerCase().indexOf(t)>-1),this.isSearch=!0):this.isSearch=!1}}return(o=l).\u0275fac=function(r){return new(r||o)(e.GI1(_.e),e.GI1(C))},o.\u0275cmp=e.In1({type:o,selectors:[["app-category"]],viewQuery:function(r,t){if(1&r&&e.CC$(n._i,5),2&r){let p;e.wto(p=e.Gqi())&&(t.content=p.first)}},decls:54,vars:21,consts:[[3,"translucent"],["color","dark"],["slot","start"],["slot","end"],["slot","start","width","90","routerDirection","root",3,"src","routerLink"],["color","light"],["color","light","placeholder","Search Tours","show-clear-button","focus",3,"ngModel","ngModelChange","ionInput"],[3,"fullscreen"],[1,"banner"],[1,"card-overlay"],["fixed",""],["size","3",1,"ion-text-center"],["width","50",3,"src"],["height","45",3,"src"],["lines","none"],[4,"ngFor","ngForOf"],[2,"line-height","26px"],["value","date","label","Sort by","label-placement","floating",1,"ion-no-padding",3,"ionChange"],["value","date"],["value","popularity"],["value","price-low-to-high"],["value","price-high-to-low"],["value","rating"],[4,"ngIf"],[3,"innerHtml"],["fill","clear","expand","block",3,"click"],["color","primary","name","arrow-up-circle-outline","size","large","aria-hidden","true"],["class","ion-no-padding",4,"ngFor","ngForOf"],[1,"ion-no-padding"],[2,"width","100%","height","12rem","margin-bottom","10px"],[3,"animated"],["expand","block",2,"width","100%","height","2rem",3,"animated"],[2,"width","50%","height","2rem",3,"animated"],["slot","end",2,"width","40%","height","2rem",3,"animated"],["router-direction","forward",3,"routerLink","component",4,"ngFor","ngForOf"],["router-direction","forward",3,"routerLink","component"],[3,"alt","src"],["size","6",1,"text-left",2,"line-height","1.6em"],["color","warning"],["name","star"],["class","old_price",4,"ngIf"],["class","badge",4,"ngIf"],["color","dark","expand","block","class","price",4,"ngIf"],["size","6",1,"text-right"],["name","time-outline"],["size","default","color","success","shape","round"],[1,"old_price"],[1,"badge"],["color","dark","expand","block",1,"price"]],template:function(r,t){1&r&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.wR5(3,"ion-back-button"),e.C$Y(),e.I0R(4,"ion-buttons",3),e.wR5(5,"ion-menu-button"),e.C$Y(),e.wR5(6,"img",4),e.C$Y(),e.I0R(7,"ion-toolbar",5)(8,"ion-searchbar",6),e.iHE("ngModelChange",function(u){return e.kNx(t.searchTerm,u)||(t.searchTerm=u),u}),e.qCj("ionInput",function(u){return t.handleInput(u)}),e.C$Y()()(),e.I0R(9,"ion-content",7)(10,"ion-card",8),e.wR5(11,"div",9),e.I0R(12,"ion-card-header")(13,"ion-card-subtitle"),e.OEk(14),e.C$Y(),e.I0R(15,"ion-card-title"),e.OEk(16),e.C$Y()()(),e.I0R(17,"ion-grid",10)(18,"ion-row")(19,"ion-col",11),e.wR5(20,"img",12),e.C$Y(),e.I0R(21,"ion-col",11),e.wR5(22,"img",12),e.C$Y(),e.I0R(23,"ion-col",11),e.wR5(24,"img",12),e.C$Y(),e.I0R(25,"ion-col",11),e.wR5(26,"img",13),e.C$Y()()(),e.I0R(27,"ion-list",14),e.yuY(28,c,3,1,"ion-item",15),e.C$Y(),e.I0R(29,"ion-grid")(30,"ion-row")(31,"ion-col",16),e.OEk(32),e.wR5(33,"br"),e.OEk(34,"Available"),e.C$Y(),e.I0R(35,"ion-col")(36,"ion-select",17),e.qCj("ionChange",function(u){return t.sortByChange(u)}),e.I0R(37,"ion-select-option",18),e.OEk(38,"Latest"),e.C$Y(),e.I0R(39,"ion-select-option",19),e.OEk(40,"Popularity"),e.C$Y(),e.I0R(41,"ion-select-option",20),e.OEk(42,"Price (Low to High)"),e.C$Y(),e.I0R(43,"ion-select-option",21),e.OEk(44,"Price (High to Low)"),e.C$Y(),e.I0R(45,"ion-select-option",22),e.OEk(46,"Rating"),e.C$Y()()()()(),e.yuY(47,v,2,1,"div",23)(48,P,2,1,"div",23),e.I0R(49,"ion-card")(50,"ion-card-content"),e.wR5(51,"div",24),e.C$Y()(),e.I0R(52,"ion-button",25),e.qCj("click",function(){return t.scrollToTop()}),e.wR5(53,"ion-icon",26),e.C$Y()()),2&r&&(e.E7m("translucent",!0),e.yG2(6),e._6D("src",t.logo,e.K6U),e.E7m("routerLink",e.S45(19,f,t.home_link)),e.yG2(2),e.OKB("ngModel",t.searchTerm),e.yG2(),e.E7m("fullscreen",!0),e.yG2(),e.aUe("--background: url('",t.p.banner,"') 0 0/100% 100% no-repeat;background-size: cover;"),e.yG2(4),e.cNF(t.p.category),e.yG2(2),e.cNF(t.p.title),e.yG2(4),e._6D("src",t.image1,e.K6U),e.yG2(2),e._6D("src",t.image2,e.K6U),e.yG2(2),e._6D("src",t.image3,e.K6U),e.yG2(2),e._6D("src",t.image4,e.K6U),e.yG2(2),e.E7m("ngForOf",t.jsonData),e.yG2(4),e.oRS("",t.total_item," Tours "),e.yG2(15),e.E7m("ngIf",t.isLoad),e.yG2(),e.E7m("ngIf",!1===t.isLoad),e.yG2(3),e.E7m("innerHtml",t.p.description,e.E3n))},dependencies:[a.ay,a.u_,g.ue,g._G,n.sn,n.GS,n.KC,n.Gg,n.YY,n.MN,n.I7,n.Kk,n._i,n.eV,n.YP,n.wB,n.Ko,n.Yb,n.QR,n.OC,n.QT,n.Mp,n.qo,n.KQ,n.Cy,n.gd,n.iI,n.Wg,n.uu,n.Md,n.IT,n.qG,n.Im,n.mY,d.ER],styles:[".banner[_ngcontent-%COMP%]{min-height:150px;position:relative;border-radius:0;margin:0 0 15px}.banner[_ngcontent-%COMP%]   .card-overlay[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;background-color:#0000007c;z-index:99}.banner[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{position:absolute;top:20%;left:0;right:0;z-index:100;text-align:center}.banner[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{background-color:#1c1d2066;display:inline-block;color:#fff;padding:4px}.banner[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:25px;color:#fff}ion-searchbar[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px;min-height:auto}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:150px}ion-card-title[_ngcontent-%COMP%]{font-size:21px}ion-card-content[_ngcontent-%COMP%], ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px!important}ion-footer[_ngcontent-%COMP%]{margin:0 0 0 15px;box-shadow:none;-webkit-box-shadow:none}.old_price[_ngcontent-%COMP%]{color:red;text-decoration:line-through;font-size:18px;margin-right:5px}.badge[_ngcontent-%COMP%]{color:#4caf50;background:#d7fad8;font-size:15px;padding:2px 5px;border-radius:15px}.price[_ngcontent-%COMP%]{font-size:25px;font-weight:800;display:block}"]}),l})()},8980:(O,y,s)=>{s.d(y,{e:()=>n});var e=s(7048),d=s(6716),h=s(2116);let n=(()=>{var m;class _{constructor(a){this.http=a,this.httpOptions={headers:new e.UD({"Content-Type":"application/json"})}}allPosts(a){let c=d.O.apiUrl+"/wp-all-posts.php?posts_per_page="+a.posts_per_page+"&page="+a.page+"&orderby="+a.orderby+"&order="+a.order;return console.log(c),this.http.get(c,this.httpOptions)}singlePost(a){let c=d.O.apiUrl+"/wp-single-post.php?post_id="+a;return console.log(c),this.http.get(c,this.httpOptions)}singleCategory(a){let c=d.O.apiUrl+"/wp-single-category.php?category="+a;return console.log(c),this.http.get(c,this.httpOptions)}toursByCategory(a){let c=d.O.apiUrl+"/wp-all-tours.php?posts_per_page="+a.posts_per_page+"&category="+a.category+"&page="+a.page+"&orderby="+a.orderby+"&order="+a.order;return console.log(c),this.http.get(c,this.httpOptions)}homeCats(){let a=d.O.apiUrl+"/wp-home-category.php";return console.log(a),this.http.get(a,this.httpOptions)}privateTourCats(){let a=d.O.apiUrl+"/wp-private-tour-category.php";return console.log(a),this.http.get(a,this.httpOptions)}}return(m=_).\u0275fac=function(a){return new(a||m)(h.CoB(e.KK))},m.\u0275prov=h.wxM({token:m,factory:m.\u0275fac,providedIn:"root"}),_})()}}]);