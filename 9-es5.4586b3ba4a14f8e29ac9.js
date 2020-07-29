!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9iNo":function(e,a,i){"use strict";i.r(a),i.d(a,"FeatureListModule",(function(){return R}));var o=i("2kYt"),r=i("PCNd"),s=i("sEIs"),c=i("pKmL"),m=i("AytR"),u=[{name:"Angular",version:m.a.versions.angular,description:"anms.features.angular",github:"https://github.com/angular/angular",documentation:"https://angular.io/docs/ts/latest/"},{name:"Angular Material",version:m.a.versions.material,description:"anms.features.angular-material",github:"https://github.com/angular/material2/",documentation:"https://material.angular.io/"},{name:"Angular Cli",version:m.a.versions.angularCli,description:"anms.features.angular-cli",github:"https://github.com/angular/angular-cli",documentation:"https://cli.angular.io/"},{name:"NgRx",version:m.a.versions.ngrx,description:"anms.features.ngrx",github:"https://github.com/ngrx/platform",documentation:"http://ngrx.github.io/",medium:"https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0"},{name:"RxJS",version:m.a.versions.rxjs,description:"anms.features.rxjs",github:"https://github.com/ReactiveX/RxJS",documentation:"http://reactivex.io/rxjs/",medium:"https://medium.com/@tomastrajan/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293"},{name:"Bootstrap",version:m.a.versions.bootstrap,description:"anms.features.bootstrap",github:"https://github.com/twbs/bootstrap",documentation:"https://getbootstrap.com/docs/4.0/layout/grid/",medium:"https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b"},{name:"Typescript",version:m.a.versions.typescript,description:"anms.features.typescript",github:"https://github.com/Microsoft/TypeScript",documentation:"https://www.typescriptlang.org/docs/home.html"},{name:"I18n",version:m.a.versions.ngxtranslate,description:"anms.features.ngxtranslate",github:"https://github.com/ngx-translate/core",documentation:"http://www.ngx-translate.com/"},{name:"Font Awesome 5",version:m.a.versions.fontAwesome,description:"anms.features.fontawesome",github:"https://github.com/FortAwesome/Font-Awesome",documentation:"https://fontawesome.com/icons"},{name:"Cypress",version:m.a.versions.cypress,description:"anms.features.cypress",github:"https://github.com/cypress-io/cypress",documentation:"https://www.cypress.io/"},{name:"anms.features.themes.title",description:"anms.features.themes.description",documentation:"https://material.angular.io/guide/theming",medium:"https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1"},{name:"anms.features.lazyloading.title",description:"anms.features.lazyloading.description",documentation:"https://angular.io/guide/router#lazy-loading-route-configuration"}],l=i("EM62"),g=i("cz58"),p=i("Meci"),b=i("PBFl"),d=i("Pq5H"),f=i("s2Ay");function h(t,n){if(1&t&&(l.Rb(0,"code"),l.Cc(1),l.Qb()),2&t){var e=l.cc().$implicit;l.Ab(1),l.Dc(e.version)}}var v=function(){return["fab","github"]};function w(t,n){if(1&t&&(l.Rb(0,"a",13),l.Nb(1,"fa-icon",14),l.Qb()),2&t){var e=l.cc().$implicit;l.ic("href",e.github,l.tc),l.Ab(1),l.ic("icon",l.lc(2,v))}}var C=function(){return["fab","medium-m"]};function y(t,n){if(1&t&&(l.Rb(0,"a",10),l.Nb(1,"fa-icon",14),l.Cc(2),l.dc(3,"translate"),l.Qb()),2&t){var e=l.cc().$implicit;l.ic("href",e.medium,l.tc),l.Ab(1),l.ic("icon",l.lc(5,C)),l.Ab(1),l.Ec("",l.ec(3,3,"anms.features.guide")," ")}}function x(t,n){if(1&t&&(l.Rb(0,"div",6),l.Rb(1,"mat-card"),l.Rb(2,"mat-card-title"),l.Ac(3,h,2,1,"code",7),l.Cc(4),l.dc(5,"translate"),l.Qb(),l.Rb(6,"mat-card-subtitle",8),l.Cc(7),l.dc(8,"translate"),l.Qb(),l.Rb(9,"mat-card-actions"),l.Ac(10,w,2,3,"a",9),l.Rb(11,"a",10),l.Nb(12,"fa-icon",11),l.Cc(13),l.dc(14,"translate"),l.Qb(),l.Ac(15,y,4,6,"a",12),l.Qb(),l.Qb(),l.Qb()),2&t){var e=n.$implicit,a=l.cc();l.ic("ngClass",a.routeAnimationsElements),l.Ab(3),l.ic("ngIf",e.version),l.Ab(1),l.Ec("",l.ec(5,8,e.name)," "),l.Ab(3),l.Ec(" ",l.ec(8,10,e.description)," "),l.Ab(3),l.ic("ngIf",e.github),l.Ab(1),l.ic("href",e.documentation,l.tc),l.Ab(2),l.Ec("",l.ec(14,12,"anms.features.documentation")," "),l.Ab(2),l.ic("ngIf",e.medium)}}var A,M,_,O=[{path:"",component:(A=function(){function e(){t(this,e),this.routeAnimationsElements=c.e,this.features=u}var a,i,o;return a=e,(i=[{key:"ngOnInit",value:function(){}},{key:"openLink",value:function(t){window.open(t,"_blank")}}])&&n(a.prototype,i),o&&n(a,o),e}(),A.\u0275fac=function(t){return new(t||A)},A.\u0275cmp=l.Gb({type:A,selectors:[["anms-feature-list"]],decls:8,vars:4,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],["rtl","",1,"main-heading"],[1,"row","align-items-end"],["class","col-md-6 col-lg-4",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-4",3,"ngClass"],[4,"ngIf"],["rtl",""],["mat-icon-button","","rel","noopener noreferrer","target","_blank",3,"href",4,"ngIf"],["mat-button","","rel","noopener noreferrer","target","_blank",3,"href"],["icon","book"],["mat-button","","rel","noopener noreferrer","target","_blank",3,"href",4,"ngIf"],["mat-icon-button","","rel","noopener noreferrer","target","_blank",3,"href"],[3,"icon"]],template:function(t,n){1&t&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"div",2),l.Rb(3,"h1",3),l.Cc(4),l.dc(5,"translate"),l.Qb(),l.Qb(),l.Qb(),l.Rb(6,"div",4),l.Ac(7,x,16,14,"div",5),l.Qb(),l.Qb()),2&t&&(l.Ab(4),l.Dc(l.ec(5,2,"anms.features.title")),l.Ab(3),l.ic("ngForOf",n.features))},directives:[g.a,o.j,o.i,p.a,p.h,o.k,p.g,p.b,b.a,d.a],pipes:[f.c],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}.main-heading[_ngcontent-%COMP%]{text-transform:uppercase}.main-heading[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]{margin:0 0 20px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{position:absolute;top:11px;right:0;float:right;font-size:10px}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:60px}@media (max-width:576px){mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:auto}}mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:2px;font-size:16px;margin:6px}mat-card[_ngcontent-%COMP%]   a[mat-icon-button][_ngcontent-%COMP%]{position:relative;left:5px}"],changeDetection:0}),A),data:{title:"anms.menu.features"}}],P=((_=function n(){t(this,n)}).\u0275mod=l.Kb({type:_}),_.\u0275inj=l.Jb({factory:function(t){return new(t||_)},imports:[[s.k.forChild(O)],s.k]}),_),R=((M=function n(){t(this,n)}).\u0275mod=l.Kb({type:M}),M.\u0275inj=l.Jb({factory:function(t){return new(t||M)},imports:[[o.c,r.a,P]]}),M)}}])}();