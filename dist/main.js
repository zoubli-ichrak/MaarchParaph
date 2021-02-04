(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, homepage, scripts, private, keywords, author, license, dependencies, devDependencies, repository, default */
/***/ (function(module) {

module.exports = {"name":"Maarch_Parapheur","version":"20.03.2","description":"Annoter ou Signer vos documents sur votre tablette","homepage":"https://labs.maarch.org/maarch/MaarchParapheur","scripts":{"ng":"ng","dep-list":"npm list --depth=0","check-update":"ncu","upgrade":"ncu -u","build":"ng build","build-watch":"ng build --watch","build-prod":"ng build --prod","build-prod-final":"ng build --prod && rm -Rf node_modules && npm i --prod","extract-translations":"ngx-translate-extract i src/frontend/app -p /**/*.html -o src/frontend/assets/i18n/en.json src/frontend/assets/i18n/fr.json --format namespaced-json","build-css":"node-sass --include-path scss src/frontend/css/maarch-material.scss src/frontend/css/maarch-material.css --output-style compressed","lint":"ng lint"},"private":true,"keywords":[],"author":"Maarch","license":"GPL-3.0","dependencies":{"core-js":"2.6.5","zone.js":"0.8.29"},"devDependencies":{"@angular-devkit/build-angular":"0.13.9","@angular/animations":"7.2.16","@angular/cdk":"7.3.7","@angular/cli":"7.3.9","@angular/common":"7.2.16","@angular/compiler":"7.2.16","@angular/compiler-cli":"7.2.16","@angular/core":"7.2.16","@angular/forms":"7.2.16","@angular/http":"7.2.16","@angular/language-service":"7.2.16","@angular/material":"7.3.7","@angular/platform-browser":"7.2.16","@angular/platform-browser-dynamic":"7.2.16","@angular/router":"7.2.16","@biesbjerg/ngx-translate-extract":"2.3.4","@fortawesome/fontawesome-free":"5.13.0","@ngrx/store":"7.4.0","@ngrx/store-devtools":"7.4.0","@ngx-translate/core":"11.0.1","@ngx-translate/http-loader":"4.0.0","@types/hammerjs":"2.0.36","@types/jasmine":"3.5.10","@types/jasminewd2":"2.0.8","@types/jquery":"3.3.33","@types/node":"11.15.7","angular2-draggable":"2.3.2","angular2-signaturepad":"2.11.0","codelyzer":"5.0.1","exif-js":"2.3.0","hammerjs":"2.0.8","jquery":"3.4.1","ngx-cookie-service":"2.4.0","ngx-pipes":"2.7.3","ngx-scroll-event":"1.0.8","node-sass":"4.13.1","npm-check-updates":"3.2.2","rxjs":"6.5.4","stylus":"0.54.7","stylus-loader":"3.0.2","tslint":"5.15.0","typescript":"3.2.4","typescript-tools":"0.3.1"},"repository":{}};

/***/ }),

/***/ "./src/frontend/app/administration/administration.scss":
/*!*************************************************************!*\
  !*** ./src/frontend/app/administration/administration.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #135F7F;\n  height: 95px;\n  color: white;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  font-size: 25px; }\n  .header-title {\n    flex: 1;\n    align-items: center;\n    display: flex;\n    white-space: pre;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .header b {\n    color: #F99830; }\n  .header span {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .mainView {\n  display: flex;\n  flex-direction: column; }\n  .container {\n  flex: 1;\n  overflow: auto; }\n  .loader {\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  background: #fffc;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  margin: 0;\n  padding: 0; }\n  .admin-form {\n  display: flex;\n  flex-direction: column;\n  padding: 20px; }\n  .actions-form {\n  display: flex;\n  justify-content: center; }\n  @media (max-width: 360px) {\n    .actions-form {\n      flex-direction: column; } }\n  .actions-form button {\n    margin: 10px;\n    width: 150px; }\n  @media (max-width: 360px) {\n      .actions-form button {\n        width: 100%; } }\n  .noResult {\n  padding: 10px;\n  text-align: center;\n  opacity: 0.5; }\n  .emptyTable {\n  height: auto; }\n  .addButton {\n  padding: 10px;\n  display: flex;\n  justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvYWRtaW5pc3RyYXRpb24vRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXGFkbWluaXN0cmF0aW9uXFxhZG1pbmlzdHJhdGlvbi5zY3NzIiwic3JjL2Zyb250ZW5kL2FwcC9hZG1pbmlzdHJhdGlvbi9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGNzc1xcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJDRmU7RURHZixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUNmO0lBQ0UsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBQTtFQWQzQjtJQWlCSSxjQUFjLEVBQUE7RUFqQmxCO0lBcUJJLGdCQUFnQjtJQUNoQix1QkFBdUIsRUFBQTtFQUkzQjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUd4QjtFQUNFLE9BQU87RUFDUCxjQUFjLEVBQUE7RUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLE1BQU07RUFDTixTQUFTO0VBQ1QsVUFBVSxFQUFBO0VBR1o7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTtFQUdmO0VBQ0UsYUFBYTtFQUliLHVCQUF1QixFQUFBO0VBSHZCO0lBRkY7TUFHSSxzQkFBc0IsRUFBQSxFQVV6QjtFQWJEO0lBT0ksWUFBWTtJQUNaLFlBQVksRUFBQTtFQUNaO01BVEo7UUFVTSxXQUFXLEVBQUEsRUFFZDtFQUdIO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFHZDtFQUNFLFlBQVksRUFBQTtFQUdkO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL2FkbWluaXN0cmF0aW9uL2FkbWluaXN0cmF0aW9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICBoZWlnaHQ6IDk1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gICYtdGl0bGUge1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBiIHtcbiAgICBjb2xvcjogI0Y5OTgzMDtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cblxuLm1haW5WaWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZmZmYztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYWRtaW4tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hY3Rpb25zLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHsgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkgeyBcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG4ubm9SZXN1bHQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICBcbiAgLmVtcHR5VGFibGUge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLmFkZEJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiIsIiRjb2xvci1tYWluOiAjNEY0RjRGOyAvLyBkZWZhdWx0IGNvbG9yIGluIGFwcGxpY2F0aW9uXG4kcHJpbWFyeTogIzEzNUY3RjsgLy8gbWFpbiBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvblxuJGFjY2VudDogIzJFQ0M3MTsgLy8gYWNjZW50IGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uIChsaWtlIHN1Y2Nlc3MgYnV0dG9ucylcbiR3YXJuOiByZ2IoMjMxLCA3NiwgNjApOyAvLyB3YXJuaW5nIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG5cbi8vIFdBUk5JTkcgISBZT1UgTVVTVCBSRUNPTVBJTEFURSBtYWFyY2gtbWF0ZXJpYWwuc2NzcyBJRiBWQUxVRVMgQ0hBTkdFUyJdfQ== */"

/***/ }),

/***/ "./src/frontend/app/administration/connection/connection.component.html":
/*!******************************************************************************!*\
  !*** ./src/frontend/app/administration/connection/connection.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize>\n  <mat-sidenav #snav [disableClose]=\"!signaturesService.mobileMode\"\n    [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" fixedInViewport=\"true\"\n    [opened]=\"!signaturesService.mobileMode\" [style.width.px]=\"350\">\n    <app-admin-sidebar [snavLeftComponent]=\"this.snav\" [snavRightComponent]=\"this.snavRight\"></app-admin-sidebar>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"mainView\">\n    <header class=\"header\">\n      <button *ngIf=\"signaturesService.mobileMode\" mat-icon-button (click)=\"this.snav.toggle();\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\" style=\"font-size: 24px;\"></mat-icon>\n      </button> {{'lang.manage_connections' | translate}}\n    </header>\n    <div class=\"container\">\n      <div *ngIf=\"loading\" class=\"loader\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <div *ngIf=\"currentConnection\" class=\"connectionType\">\n        <button mat-stroked-button [matMenuTriggerFor]=\"menu\">{{'lang.connectionMode' | translate}} :\n          <b>{{'lang.' + currentConnection.id + 'Connection' | translate}}</b><i class=\"fa fa-caret-down\"></i></button>\n        <mat-menu #menu=\"matMenu\" [class]=\"'listMenu'\">\n          <ng-container *ngFor=\"let connection of connectionList\">\n              <button mat-menu-item *ngIf=\"connection.id !== currentConnection.id\" (click)=\"changeConnection(connection)\"\n              [disabled]=\"!connection.allowed\">{{'lang.' + connection.id + 'Connection' | translate}}</button>\n          </ng-container>\n        </mat-menu>\n      </div>\n      <div class=\"admin-item\" *ngFor=\"let privilege of privileges\">\n        <button mat-stroked-button color=\"primary\" [routerLink]=\"privilege.route\">\n          <mat-icon color=\"primary\" [class]=\"privilege.icon\"></mat-icon>\n          <span>{{'lang.' + privilege.id | translate}}</span>\n          <span class=\"admin-desc\">\n            {{'lang.' + privilege.id + 'Desc' | translate}}\n          </span>\n        </button>\n      </div>\n    </div>\n  </mat-sidenav-content>\n  <mat-sidenav #snavRight disableClose [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" [opened]=\"false\"\n    fixedInViewport=\"true\" position='end'>\n  </mat-sidenav>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/frontend/app/administration/connection/connection.component.scss":
/*!******************************************************************************!*\
  !*** ./src/frontend/app/administration/connection/connection.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  flex: 1;\n  overflow: auto; }\n  .container .admin-item {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    text-align: center;\n    width: 100%;\n    display: inline-block; }\n  @media (min-width: 768px) {\n      .container .admin-item {\n        width: 50%; } }\n  @media (min-width: 992px) {\n      .container .admin-item {\n        width: 33%; } }\n  .container .admin-item .mat-stroked-button {\n      border-color: #F99830;\n      padding: 10px;\n      width: 90%;\n      height: 160px; }\n  .container .admin-item .mat-stroked-button mat-icon {\n        height: auto;\n        width: auto;\n        font-size: 50px; }\n  .container .admin-item .mat-stroked-button ::ng-deep.mat-button-wrapper {\n        display: flex;\n        flex-direction: column; }\n  .admin-desc {\n  white-space: normal;\n  font-size: 10px;\n  line-height: 15px;\n  text-align: justify;\n  color: gray;\n  height: 60px;\n  overflow: auto; }\n  .connectionType {\n  text-align: center;\n  padding: 10px; }\n  .connectionType .mat-stroked-button {\n    border-color: #F99830;\n    width: 300px; }\n  .connectionType b {\n    color: #135F7F; }\n  .connectionType i {\n    margin-left: 10px; }\n  ::ng-deep.listMenu {\n  width: 300px !important;\n  max-width: 300px !important; }\n  ::ng-deep.listMenu .mat-menu-content {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important; }\n  ::ng-deep.listMenu .mat-menu-content .mat-menu-item {\n      text-align: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvYWRtaW5pc3RyYXRpb24vY29ubmVjdGlvbi9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxcYWRtaW5pc3RyYXRpb25cXGNvbm5lY3Rpb25cXGNvbm5lY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvZnJvbnRlbmQvYXBwL2FkbWluaXN0cmF0aW9uL2Nvbm5lY3Rpb24vRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxjc3NcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLE9BQU87RUFDUCxjQUFjLEVBQUE7RUFGaEI7SUFJSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBT1gscUJBQXFCLEVBQUE7RUFOckI7TUFSSjtRQVNNLFVBQVUsRUFBQSxFQTRCYjtFQTFCQztNQVhKO1FBWU0sVUFBVSxFQUFBLEVBeUJiO0VBckNIO01BaUJNLHFCQUFxQjtNQUNyQixhQUFhO01BQ2IsVUFBVTtNQUNWLGFBQWEsRUFBQTtFQXBCbkI7UUF1QlEsWUFBWTtRQUNaLFdBQVc7UUFFWCxlQUFlLEVBQUE7RUExQnZCO1FBaUNRLGFBQWE7UUFDYixzQkFBc0IsRUFBQTtFQU05QjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQTtFQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7RUFGZjtJQUtJLHFCQUFxQjtJQUNyQixZQUFZLEVBQUE7RUFOaEI7SUFVSSxjQzlEYSxFQUFBO0VEb0RqQjtJQWNJLGlCQUFpQixFQUFBO0VBSXJCO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQixFQUFBO0VBRjdCO0lBSU0seUJBQXlCO0lBQ3pCLDRCQUE0QixFQUFBO0VBTGxDO01BT1EsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9hZG1pbmlzdHJhdGlvbi9jb25uZWN0aW9uL2Nvbm5lY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFycy5zY3NzJztcblxuXG4uY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC5hZG1pbi1pdGVtIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IFxuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7IFxuICAgICAgd2lkdGg6IDMzJTtcbiAgICB9XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgICBib3JkZXItY29sb3I6ICNGOTk4MzA7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGhlaWdodDogMTYwcHg7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIC8vIHRvcDogMTBweDtcbiAgICAgICAgLy8gbGVmdDogNTAlO1xuICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgOjpuZy1kZWVwLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hZG1pbi1kZXNjIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgY29sb3I6IGdyYXk7XG4gIGhlaWdodDogNjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jb25uZWN0aW9uVHlwZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcblxuICAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICBib3JkZXItY29sb3I6ICNGOTk4MzA7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgYiB7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICB9XG5cbiAgaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuOjpuZy1kZWVwLmxpc3RNZW51IHtcbiAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgLm1hdC1tZW51LWNvbnRlbnQge1xuICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAubWF0LW1lbnUtaXRlbSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgfVxuICB9XG59IiwiJGNvbG9yLW1haW46ICM0RjRGNEY7IC8vIGRlZmF1bHQgY29sb3IgaW4gYXBwbGljYXRpb25cbiRwcmltYXJ5OiAjMTM1RjdGOyAvLyBtYWluIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG4kYWNjZW50OiAjMkVDQzcxOyAvLyBhY2NlbnQgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb24gKGxpa2Ugc3VjY2VzcyBidXR0b25zKVxuJHdhcm46IHJnYigyMzEsIDc2LCA2MCk7IC8vIHdhcm5pbmcgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cblxuLy8gV0FSTklORyAhIFlPVSBNVVNUIFJFQ09NUElMQVRFIG1hYXJjaC1tYXRlcmlhbC5zY3NzIElGIFZBTFVFUyBDSEFOR0VTIl19 */"

/***/ }),

/***/ "./src/frontend/app/administration/connection/connection.component.ts":
/*!****************************************************************************!*\
  !*** ./src/frontend/app/administration/connection/connection.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var confirm_component_1 = __webpack_require__(/*! ../../plugins/confirm.component */ "./src/frontend/app/plugins/confirm.component.ts");
var auth_service_1 = __webpack_require__(/*! ../../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var ConnectionComponent = /** @class */ (function () {
    function ConnectionComponent(http, translate, route, router, signaturesService, notificationService, dialog, authService) {
        this.http = http;
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.authService = authService;
        this.loading = true;
        this.privileges = [
            {
                id: 'manage_ldap_configurations',
                icon: 'fas fa-database',
                route: '/administration/connections/ldaps'
            }
        ];
        this.id = 0;
        this.label = '';
        this.connectionList = [];
    }
    ConnectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.http.get('../rest/configurations', {
            params: {
                identifier: 'connection'
            }
        })
            .pipe(operators_1.finalize(function () { return _this.loading = false; }))
            .subscribe({
            next: function (data) {
                _this.label = data.configurations.label;
                _this.id = data.configurations.id;
                _this.connectionList = data.configurations.availableConnections;
                var activeIndex = _this.connectionList.findIndex(function (conn) { return conn.id === data.configurations.value; });
                if (_this.connectionList[activeIndex] !== undefined) {
                    _this.currentConnection = _this.connectionList[activeIndex];
                }
                else {
                    _this.currentConnection = _this.connectionList[0];
                }
            },
        });
    };
    ConnectionComponent.prototype.changeConnection = function (connection) {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, { autoFocus: false, data: { mode: 'warning', title: 'lang.confirmMsg', msg: 'lang.changeConnectionWarn' } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'yes') {
                _this.loading = true;
                _this.http.patch('../rest/configurations/' + _this.id, { label: _this.label, value: connection.id })
                    .pipe(operators_1.finalize(function () { return _this.loading = false; }))
                    .subscribe({
                    next: function () {
                        _this.authService.authMode = connection.id;
                        _this.currentConnection = connection;
                        _this.notificationService.success('lang.connectionModeUpdated');
                    },
                });
            }
        });
    };
    ConnectionComponent = __decorate([
        core_1.Component({
            selector: 'app-administration-connection',
            template: __webpack_require__(/*! ./connection.component.html */ "./src/frontend/app/administration/connection/connection.component.html"),
            styles: [__webpack_require__(/*! ../administration.scss */ "./src/frontend/app/administration/administration.scss"), __webpack_require__(/*! ./connection.component.scss */ "./src/frontend/app/administration/connection/connection.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, core_2.TranslateService, router_1.ActivatedRoute, router_1.Router, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService, material_1.MatDialog, auth_service_1.AuthService])
    ], ConnectionComponent);
    return ConnectionComponent;
}());
exports.ConnectionComponent = ConnectionComponent;


/***/ }),

/***/ "./src/frontend/app/administration/connection/ldap/ldap-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/frontend/app/administration/connection/ldap/ldap-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize>\n  <mat-sidenav #snav [disableClose]=\"!signaturesService.mobileMode\" [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" fixedInViewport=\"true\"\n    [opened]=\"!signaturesService.mobileMode\" [style.width.px]=\"350\">\n    <app-admin-sidebar [snavLeftComponent]=\"this.snav\" [snavRightComponent]=\"this.snavRight\"></app-admin-sidebar>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"mainView\">\n    <header class=\"header\">\n      <div class=\"header-title\">\n        <button *ngIf=\"signaturesService.mobileMode\" mat-icon-button (click)=\"this.snav.toggle();\">\n          <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\" style=\"font-size: 24px;\"></mat-icon>\n        </button>\n        <span><b>{{ldapList.length}}</b> {{'lang.manage_ldap_configurationsAlt' | translate}}</span>\n      </div>\n      <div>\n        <mat-paginator #paginator [length]=\"100\" [pageSize]=\"10\"></mat-paginator>\n      </div>\n    </header>\n    <div class=\"container\">\n      <div *ngIf=\"loading\" class=\"loader\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <mat-table #table class=\"dataTable\" [dataSource]=\"dataSource\" matSort matSortActive=\"label\"\n        matSortDirection=\"asc\" [class.emptyTable]=\"dataSource.filteredData.length === 0\">\n        <ng-container matColumnDef=\"label\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'lang.label' | translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.label}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef style=\"justify-content: end;\">\n            <mat-form-field>\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrer\">\n            </mat-form-field>\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" style=\"justify-content: flex-end;\">\n            <button mat-icon-button color=\"warn\" [disabled]=\"dataSource.data.length === 1 && authService.authMode === 'ldap'\" (click)=\"$event.stopPropagation();delete(element)\" title=\"{{'lang.delete' | translate}}\">\n              <mat-icon class=\"fa fa-trash-alt fa-2x\"></mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" routerLink=\"/administration/connections/ldaps/{{row.id}}\"\n          style=\"cursor:pointer;\"></mat-row>\n      </mat-table>\n      <div class=\"addButton\">\n        <button mat-stroked-button type=\"button\" class=\"btn blue\" routerLink=\"/administration/connections/ldaps/new\">{{'lang.ldapCreation' | translate}}</button>\n      </div>\n      <div class=\"noResult\" *ngIf=\"dataSource.filteredData.length === 0\">\n          {{'lang.noResult' | translate}}\n      </div>\n    </div>\n  </mat-sidenav-content>\n  <mat-sidenav #snavRight disableClose [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" [opened]=\"false\"\n    fixedInViewport=\"true\" position='end'>\n  </mat-sidenav>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/frontend/app/administration/connection/ldap/ldap-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/frontend/app/administration/connection/ldap/ldap-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #135F7F;\n  height: 95px;\n  color: white;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  font-size: 25px; }\n  .header-title {\n    flex: 1;\n    align-items: center;\n    display: flex;\n    white-space: pre;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .header b {\n    color: #F99830; }\n  .header span {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .mainView {\n  display: flex;\n  flex-direction: column; }\n  .container {\n  flex: 1;\n  overflow: auto;\n  background: white; }\n  .loader {\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  background: #fffc;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  margin: 0;\n  padding: 0; }\n  .noResult {\n  padding: 10px;\n  text-align: center;\n  opacity: 0.5; }\n  .emptyTable {\n  height: auto; }\n  .addButton {\n  padding: 10px;\n  display: flex;\n  justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvYWRtaW5pc3RyYXRpb24vY29ubmVjdGlvbi9sZGFwL0Q6XFxNYWFyY2hQYXJhcGhldXItMjAuMDMvc3JjXFxmcm9udGVuZFxcYXBwXFxhZG1pbmlzdHJhdGlvblxcY29ubmVjdGlvblxcbGRhcFxcbGRhcC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2Zyb250ZW5kL2FwcC9hZG1pbmlzdHJhdGlvbi9jb25uZWN0aW9uL2xkYXAvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxjc3NcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0ZlO0VER2YsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7RUFDZjtJQUNFLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7RUFkM0I7SUFpQkksY0FBYyxFQUFBO0VBakJsQjtJQXFCSSxnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7RUFJM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSxPQUFPO0VBQ1AsY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixNQUFNO0VBQ04sU0FBUztFQUNULFVBQVUsRUFBQTtFQUdaO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFHZDtFQUNFLFlBQVksRUFBQTtFQUdkO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL2FkbWluaXN0cmF0aW9uL2Nvbm5lY3Rpb24vbGRhcC9sZGFwLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICBoZWlnaHQ6IDk1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gICYtdGl0bGUge1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBiIHtcbiAgICBjb2xvcjogI0Y5OTgzMDtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cblxuLm1haW5WaWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI2ZmZmM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5vUmVzdWx0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5lbXB0eVRhYmxlIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYWRkQnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iLCIkY29sb3ItbWFpbjogIzRGNEY0RjsgLy8gZGVmYXVsdCBjb2xvciBpbiBhcHBsaWNhdGlvblxuJHByaW1hcnk6ICMxMzVGN0Y7IC8vIG1haW4gY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cbiRhY2NlbnQ6ICMyRUNDNzE7IC8vIGFjY2VudCBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvbiAobGlrZSBzdWNjZXNzIGJ1dHRvbnMpXG4kd2FybjogcmdiKDIzMSwgNzYsIDYwKTsgLy8gd2FybmluZyBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvblxuXG4vLyBXQVJOSU5HICEgWU9VIE1VU1QgUkVDT01QSUxBVEUgbWFhcmNoLW1hdGVyaWFsLnNjc3MgSUYgVkFMVUVTIENIQU5HRVMiXX0= */"

/***/ }),

/***/ "./src/frontend/app/administration/connection/ldap/ldap-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/frontend/app/administration/connection/ldap/ldap-list.component.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../../../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var confirm_component_1 = __webpack_require__(/*! ../../../plugins/confirm.component */ "./src/frontend/app/plugins/confirm.component.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var ngx_pipes_1 = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
var auth_service_1 = __webpack_require__(/*! ../../../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var LdapListComponent = /** @class */ (function () {
    function LdapListComponent(http, translate, latinisePipe, dialog, signaturesService, notificationService, authService) {
        var _this = this;
        this.http = http;
        this.translate = translate;
        this.latinisePipe = latinisePipe;
        this.dialog = dialog;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ldapList = [];
        this.loading = true;
        this.displayedColumns = ['label', 'actions'];
        this.dataSource = new material_1.MatTableDataSource(this.ldapList);
        this.dataSource.filterPredicate = function (data, filter) {
            var state = false;
            _this.displayedColumns.forEach(function (column) {
                if (data[column] !== undefined) {
                    var cleanData = _this.latinisePipe.transform(data[column].trim().toLowerCase());
                    var cleanFilter = _this.latinisePipe.transform(filter.trim().toLowerCase());
                    if (cleanData.indexOf(cleanFilter) !== -1) {
                        state = true;
                    }
                }
            });
            return state;
        };
    }
    LdapListComponent.prototype.updateDataTable = function () {
        this.dataSource.data = this.ldapList;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    LdapListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    LdapListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('../rest/configurations', {
            params: {
                identifier: 'ldapServer'
            }
        })
            .pipe(operators_1.finalize(function () { return _this.loading = false; }))
            .subscribe({
            next: function (data) {
                _this.ldapList = data.configurations;
                _this.updateDataTable();
            },
        });
        this.loading = false;
    };
    LdapListComponent.prototype.delete = function (ldapToDelete) {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, { autoFocus: false, data: { mode: '', title: 'lang.confirmMsg', msg: '' } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'yes') {
                _this.loading = true;
                _this.http.delete('../rest/configurations/' + ldapToDelete.id)
                    .pipe(operators_1.finalize(function () { return _this.loading = false; }))
                    .subscribe({
                    next: function () {
                        var indexToDelete = _this.ldapList.findIndex(function (ldap) { return ldap.id === ldapToDelete.id; });
                        _this.ldapList.splice(indexToDelete, 1);
                        _this.updateDataTable();
                        _this.notificationService.success('lang.ldapDeleted');
                    },
                });
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], LdapListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], LdapListComponent.prototype, "sort", void 0);
    LdapListComponent = __decorate([
        core_1.Component({
            selector: 'app-administration-ldap-list',
            template: __webpack_require__(/*! ./ldap-list.component.html */ "./src/frontend/app/administration/connection/ldap/ldap-list.component.html"),
            styles: [__webpack_require__(/*! ../../administration.scss */ "./src/frontend/app/administration/administration.scss"), __webpack_require__(/*! ./ldap-list.component.scss */ "./src/frontend/app/administration/connection/ldap/ldap-list.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, core_2.TranslateService, ngx_pipes_1.LatinisePipe, material_1.MatDialog, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService, auth_service_1.AuthService])
    ], LdapListComponent);
    return LdapListComponent;
}());
exports.LdapListComponent = LdapListComponent;


/***/ }),

/***/ "./src/frontend/app/administration/connection/ldap/ldap.component.html":
/*!*****************************************************************************!*\
  !*** ./src/frontend/app/administration/connection/ldap/ldap.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize>\n    <mat-sidenav #snav [disableClose]=\"!signaturesService.mobileMode\"\n                 [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" fixedInViewport=\"true\"\n                 [opened]=\"!signaturesService.mobileMode\" [style.width.px]=\"350\">\n        <app-admin-sidebar [snavLeftComponent]=\"this.snav\" [snavRightComponent]=\"this.snavRight\"></app-admin-sidebar>\n    </mat-sidenav>\n    <mat-sidenav-content class=\"mainView\">\n        <header class=\"header\">\n            <div class=\"header-title\">\n                <button *ngIf=\"signaturesService.mobileMode\" mat-icon-button (click)=\"this.snav.toggle();\">\n                    <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\" style=\"font-size: 24px;\"></mat-icon>\n                </button>\n                <span *ngIf=\"!loading\">{{title}}</span>\n            </div>\n            <div *ngIf=\"!creationMode\" style=\"width: 70px;text-align: center;\">\n                <button mat-icon-button (click)=\"snavRight.toggle()\" title=\"{{'lang.connectionTest' | translate}}\">\n                    <mat-icon class=\"fa fa-broadcast-tower fa-2x\"></mat-icon>\n                </button>\n            </div>\n        </header>\n        <div class=\"container\">\n            <div *ngIf=\"loading\" class=\"loader\">\n                <mat-spinner></mat-spinner>\n            </div>\n            <form class=\"admin-form\" *ngIf=\"!loading\" (ngSubmit)=\"onSubmit()\" #adminForm=\"ngForm\">\n                <mat-form-field class=\"input-row\">\n                    <input name=\"label\" matInput placeholder=\"{{'lang.label' | translate}}\" type=\"text\" [(ngModel)]=\"ldap.label\"\n                           required>\n                </mat-form-field>\n                <mat-form-field class=\"input-row\">\n                    <input name=\"uri\" matInput placeholder=\"{{'lang.uri' | translate}}\" type=\"text\" [(ngModel)]=\"ldap.value.uri\"\n                           required>\n                </mat-form-field>\n                <mat-form-field class=\"input-row\">\n                    <input name=\"dn\" matInput placeholder=\"{{'lang.baseDN' | translate}}\" [(ngModel)]=\"ldap.value.baseDN\">\n                    <mat-hint align=\"end\">\n                        ex: dc=maarch,dc=com\n                    </mat-hint>\n                </mat-form-field>\n                <mat-form-field class=\"input-row\">\n                    <input name=\"prefix\" matInput placeholder=\"{{'lang.prefix' | translate}}\" [(ngModel)]=\"ldap.value.prefix\">\n                    <mat-hint align=\"end\">\n                        ex: MAARCH\n                    </mat-hint>\n                </mat-form-field>\n                <mat-form-field class=\"input-row\">\n                    <input name=\"suffix\" matInput placeholder=\"{{'lang.suffix' | translate}}\" [(ngModel)]=\"ldap.value.suffix\">\n                    <mat-hint align=\"end\">\n                        ex: @maarch.com\n                    </mat-hint>\n                </mat-form-field>\n                <div class=\"actions-form\">\n                    <button mat-stroked-button type=\"submit\" class=\"btn blue\"\n                            [disabled]=\"!adminForm.form.valid || !canValidate()\">{{'lang.validate' | translate}}</button>\n                    <button mat-stroked-button type=\"button\" class=\"btn\" (click)=\"cancel()\">{{'lang.cancel' | translate}}</button>\n                    <button mat-stroked-button type=\"button\" *ngIf=\"!creationMode\" [disabled]=\"authService.authMode==='ldap' && ldap.count === 1\" class=\"btn red\"\n                            (click)=\"delete()\">{{'lang.delete' | translate}}</button>\n                </div>\n            </form>\n        </div>\n    </mat-sidenav-content>\n    <mat-sidenav #snavRight disableClose [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" [opened]=\"false\"\n                 [style.width]=\"'650px'\" fixedInViewport=\"true\" position='end'>\n        <div class=\"panel-container\">\n            <div class=\"panel-header\">\n                {{'lang.connectionTest' | translate}}\n            </div>\n            <button *ngIf=\"signaturesService.mobileMode\" class=\"cancel\" mat-icon-button type=\"button\"\n                    (click)=\"snavRight.toggle();\">\n                <mat-icon fontSet=\"fas\" fontIcon=\"fa-arrow-right fa-2x\"></mat-icon>\n            </button>\n            <div class=\"panel-content\">\n                <form class=\"admin-form\" *ngIf=\"!loading\" (ngSubmit)=\"testLdap()\" #adminTestForm=\"ngForm\">\n                    <mat-form-field class=\"input-row\">\n                        <input name=\"login\" matInput placeholder=\"{{'lang.login' | translate}}\" type=\"text\"\n                               [(ngModel)]=\"ldapTest.login\" required>\n                    </mat-form-field>\n                    <mat-form-field class=\"input-row\">\n                        <input name=\"password\" matInput type=\"password\" placeholder=\"{{'lang.password' | translate}}\"\n                               [(ngModel)]=\"ldapTest.password\" required>\n                    </mat-form-field>\n                    <fieldset>\n                        <legend align=\"left\">{{'lang.ldapInformations' | translate}} :</legend>\n                        <div class=\"form-container\">\n                            <mat-list role=\"list\">\n                                <mat-list-item role=\"listitem\"><b class=\"primary\">{{'lang.uri' | translate}}</b>&nbsp;: {{ldap.value.uri}}</mat-list-item>\n                                <mat-list-item role=\"listitem\"><b class=\"primary\">{{'lang.login' | translate}}</b>&nbsp;:&nbsp;\n                                    <span *ngIf=\"ldap.value.prefix\">\n                    {{ldap.value.prefix}}\\\n                  </span>\n                                    {{ldapTest.login}}{{ldap.value.suffix}}\n                                </mat-list-item>\n                            </mat-list>\n                        </div>\n                    </fieldset>\n                    <div class=\"actions-form\">\n                        <button mat-stroked-button type=\"submit\" class=\"btn blue connTest\"\n                                [disabled]=\"!adminTestForm.form.valid || loadingTest\">{{'lang.connectionTest' | translate}}</button>\n                    </div>\n                </form>\n                <div *ngIf=\"ldapTest.result !== '' || loadingTest\" class=\"bash\">\n                    <ng-container *ngIf=\"loadingTest\">\n                        {{'lang.connectionInProgress' | translate}}...\n                    </ng-container>\n                    <ng-container *ngIf=\"ldapTest.result !== ''\">\n                        {{ldapTest.result}}\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </mat-sidenav>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/frontend/app/administration/connection/ldap/ldap.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/frontend/app/administration/connection/ldap/ldap.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-row {\n  padding-bottom: 15px; }\n\n.connTest {\n  width: auto !important; }\n\nfieldset {\n  border: solid 1px #F1F4F4;\n  align-items: center; }\n\nlegend {\n  color: #F99830; }\n\n.panel-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n\n.panel-header {\n  box-shadow: 0px 0px 10px 0px #656565;\n  color: white;\n  background: #135F7F;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  font-size: 25px;\n  align-items: center; }\n\n.panel-content {\n  flex: 1;\n  overflow: auto; }\n\n.bash {\n  background: #34495e;\n  height: 310px;\n  border-radius: 5px;\n  top: 40px;\n  display: absolute;\n  color: #fff;\n  padding: 10px;\n  margin: 10px; }\n\n.cancel {\n  position: absolute;\n  top: 10px;\n  left: 0px;\n  height: 65px;\n  width: 65px;\n  font-size: 35px;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvYWRtaW5pc3RyYXRpb24vY29ubmVjdGlvbi9sZGFwL0Q6XFxNYWFyY2hQYXJhcGhldXItMjAuMDMvc3JjXFxmcm9udGVuZFxcYXBwXFxhZG1pbmlzdHJhdGlvblxcY29ubmVjdGlvblxcbGRhcFxcbGRhcC5jb21wb25lbnQuc2NzcyIsInNyYy9mcm9udGVuZC9hcHAvYWRtaW5pc3RyYXRpb24vY29ubmVjdGlvbi9sZGFwL0Q6XFxNYWFyY2hQYXJhcGhldXItMjAuMDMvc3JjXFxmcm9udGVuZFxcY3NzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLG1CQzVCZTtFRDZCZixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLE9BQU87RUFDUCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW9CO0VBQ3BCLGFBQWU7RUFDZixrQkFBb0I7RUFDcEIsU0FBUztFQUNULGlCQUFrQjtFQUNsQixXQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL2FkbWluaXN0cmF0aW9uL2Nvbm5lY3Rpb24vbGRhcC9sZGFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vY3NzL3ZhcnMuc2Nzcyc7XG5cbi5pbnB1dC1yb3cge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5jb25uVGVzdCB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0YxRjRGNDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubGVnZW5kIHtcbiAgY29sb3I6ICNGOTk4MzA7XG59XG5cbi5wYW5lbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggIzY1NjU2NTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgaGVpZ2h0OiA5NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYW5lbC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5iYXNoIHtcbiAgYmFja2dyb3VuZCA6ICMzNDQ5NWU7IFxuICBoZWlnaHQgOiAzMTBweCA7IFxuICBib3JkZXItcmFkaXVzIDogNXB4IDtcbiAgdG9wOiA0MHB4O1xuICBkaXNwbGF5IDogYWJzb2x1dGU7IFxuICBjb2xvciA6ICNmZmYgO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jYW5jZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMHB4OyBcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogNjVweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG59IiwiJGNvbG9yLW1haW46ICM0RjRGNEY7IC8vIGRlZmF1bHQgY29sb3IgaW4gYXBwbGljYXRpb25cbiRwcmltYXJ5OiAjMTM1RjdGOyAvLyBtYWluIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG4kYWNjZW50OiAjMkVDQzcxOyAvLyBhY2NlbnQgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb24gKGxpa2Ugc3VjY2VzcyBidXR0b25zKVxuJHdhcm46IHJnYigyMzEsIDc2LCA2MCk7IC8vIHdhcm5pbmcgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cblxuLy8gV0FSTklORyAhIFlPVSBNVVNUIFJFQ09NUElMQVRFIG1hYXJjaC1tYXRlcmlhbC5zY3NzIElGIFZBTFVFUyBDSEFOR0VTIl19 */"

/***/ }),

/***/ "./src/frontend/app/administration/connection/ldap/ldap.component.ts":
/*!***************************************************************************!*\
  !*** ./src/frontend/app/administration/connection/ldap/ldap.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../../../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var confirm_component_1 = __webpack_require__(/*! ../../../plugins/confirm.component */ "./src/frontend/app/plugins/confirm.component.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var auth_service_1 = __webpack_require__(/*! ../../../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var LdapComponent = /** @class */ (function () {
    function LdapComponent(http, translate, route, router, signaturesService, notificationService, dialog, authService) {
        this.http = http;
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.authService = authService;
        this.creationMode = true;
        this.loading = true;
        this.loadingTest = false;
        this.ldapTest = {
            login: '',
            password: '',
            result: ''
        };
        this.title = '';
    }
    LdapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ldapTest.login = this.authService.user.login;
        this.route.params.subscribe(function (params) {
            if (params['id'] === undefined) {
                _this.creationMode = true;
                _this.title = _this.translate.instant('lang.ldapCreation');
                _this.ldap = {
                    id: 0,
                    label: '',
                    identifier: 'ldapServer',
                    value: {
                        uri: '',
                        ssl: false,
                        prefix: '',
                        suffix: '',
                        baseDN: '',
                    }
                };
                _this.loading = false;
            }
            else {
                _this.creationMode = false;
                _this.http.get('../rest/configurations/' + params['id'])
                    .pipe(operators_1.map(function (data) { return data.configuration; }), operators_1.finalize(function () { return _this.loading = false; }))
                    .subscribe({
                    next: function (data) {
                        _this.ldap = data;
                        _this.ldapClone = JSON.parse(JSON.stringify(_this.ldap));
                        _this.title = _this.ldap.label;
                    },
                });
            }
        });
    };
    LdapComponent.prototype.canValidate = function () {
        if (JSON.stringify(this.ldap) === JSON.stringify(this.ldapClone)) {
            return false;
        }
        else {
            return true;
        }
    };
    LdapComponent.prototype.onSubmit = function () {
        if (this.creationMode) {
            this.createLdap();
        }
        else {
            this.modifyLdap();
        }
    };
    LdapComponent.prototype.modifyLdap = function () {
        var _this = this;
        this.loading = true;
        this.http.patch('../rest/configurations/' + this.ldap.id, this.ldap)
            .pipe(operators_1.finalize(function () { return _this.loading = false; }))
            .subscribe({
            next: function () {
                _this.router.navigate(['/administration/connections/ldaps']);
                _this.notificationService.success('lang.ldapUpdated');
            },
        });
    };
    LdapComponent.prototype.createLdap = function () {
        var _this = this;
        this.loading = true;
        this.http.post('../rest/configurations', this.ldap)
            .pipe(operators_1.finalize(function () { return _this.loading = false; }))
            .subscribe({
            next: function () {
                _this.router.navigate(['/administration/connections/ldaps']);
                _this.notificationService.success('lang.ldapAdded');
            },
        });
    };
    LdapComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, { autoFocus: false, data: { mode: '', title: 'lang.confirmMsg', msg: '' } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'yes') {
                _this.loading = true;
                _this.http.delete('../rest/configurations/' + _this.ldap.id)
                    .pipe(operators_1.finalize(function () { return _this.loading = false; }))
                    .subscribe({
                    next: function () {
                        _this.router.navigate(['/administration/connections/ldaps']);
                        _this.notificationService.success('lang.ldapDeleted');
                    },
                });
            }
        });
    };
    LdapComponent.prototype.cancel = function () {
        this.router.navigate(['/administration/connections/ldaps']);
    };
    LdapComponent.prototype.testLdap = function () {
        var _this = this;
        this.loadingTest = true;
        this.ldapTest.result = '';
        if (this.canValidate()) {
            this.http.patch('../rest/configurations/' + this.ldap.id, this.ldap)
                .subscribe({
                next: function () {
                    _this.ldapClone = JSON.parse(JSON.stringify(_this.ldap));
                    _this.notificationService.success('lang.ldapUpdated');
                    _this.http.get('../rest/configurations/' + _this.ldap.id + '/connection', {
                        params: {
                            login: _this.ldapTest.login,
                            password: _this.ldapTest.password
                        }
                    })
                        .pipe(operators_1.finalize(function () { return _this.loadingTest = false; }))
                        .subscribe({
                        next: function (data) {
                            _this.ldapTest.result = data.informations;
                            if (data.connection) {
                                _this.notificationService.success('lang.ldapConnectionSucceeded');
                            }
                        },
                    });
                },
            });
        }
        else {
            this.http.get('../rest/configurations/' + this.ldap.id + '/connection', {
                params: {
                    login: this.ldapTest.login,
                    password: this.ldapTest.password
                }
            })
                .pipe(operators_1.finalize(function () { return _this.loadingTest = false; }))
                .subscribe({
                next: function (data) {
                    _this.ldapTest.result = data.informations;
                    if (data.connection) {
                        _this.notificationService.success('lang.ldapConnectionSucceeded');
                    }
                },
            });
        }
    };
    __decorate([
        core_1.ViewChild('snavRight'),
        __metadata("design:type", material_1.MatSidenav)
    ], LdapComponent.prototype, "snavRight", void 0);
    LdapComponent = __decorate([
        core_1.Component({
            selector: 'app-administration-ldap',
            template: __webpack_require__(/*! ./ldap.component.html */ "./src/frontend/app/administration/connection/ldap/ldap.component.html"),
            styles: [__webpack_require__(/*! ../../administration.scss */ "./src/frontend/app/administration/administration.scss"), __webpack_require__(/*! ./ldap.component.scss */ "./src/frontend/app/administration/connection/ldap/ldap.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, core_2.TranslateService, router_1.ActivatedRoute, router_1.Router, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService, material_1.MatDialog, auth_service_1.AuthService])
    ], LdapComponent);
    return LdapComponent;
}());
exports.LdapComponent = LdapComponent;


/***/ }),

/***/ "./src/frontend/app/administration/group/group.component.html":
/*!********************************************************************!*\
  !*** ./src/frontend/app/administration/group/group.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize>\n    <mat-sidenav #snav [disableClose]=\"!signaturesService.mobileMode\"\n                 [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" fixedInViewport=\"true\"\n                 [opened]=\"!signaturesService.mobileMode\" [style.width.px]=\"350\">\n        <app-admin-sidebar [snavLeftComponent]=\"this.snav\" [snavRightComponent]=\"this.snavRight\"></app-admin-sidebar>\n    </mat-sidenav>\n    <mat-sidenav-content class=\"mainView\">\n        <header class=\"header\">\n            <div class=\"header-title\">\n                <button *ngIf=\"signaturesService.mobileMode\" mat-icon-button (click)=\"this.snav.toggle();\">\n                    <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\" style=\"font-size: 24px;\"></mat-icon>\n                </button>\n                <span *ngIf=\"!loading\">{{title}}</span>\n            </div>\n        </header>\n        <div class=\"container\">\n            <div *ngIf=\"loading\" class=\"loader\">\n                <mat-spinner></mat-spinner>\n            </div>\n            <form class=\"admin-form\" *ngIf=\"!loading\" (ngSubmit)=\"onSubmit()\" #adminForm=\"ngForm\">\n                <mat-form-field class=\"input-row\">\n                    <input name=\"label\" matInput placeholder=\"{{'lang.label' | translate}}\" type=\"text\" [(ngModel)]=\"group.label\"\n                           required>\n                </mat-form-field>\n                <div class=\"actions-form\">\n                    <button mat-stroked-button type=\"submit\" class=\"btn blue\"\n                            [disabled]=\"!adminForm.form.valid || !canValidate()\">{{'lang.validate' | translate}}</button>\n                    <button mat-stroked-button type=\"button\" class=\"btn\" (click)=\"cancel()\">{{'lang.cancel' | translate}}</button>\n                    <button mat-stroked-button type=\"button\" *ngIf=\"!creationMode\" class=\"btn red\" (click)=\"deleteGroup()\">{{'lang.delete' | translate}}</button>\n                </div>\n                <fieldset *ngIf=\"!creationMode\">\n                    <legend align=\"left\">{{'lang.privileges' | translate}} :</legend>\n                    <div class=\"form-container\">\n                        <div class=\"privilegesList\" *ngFor=\"let privilege of group.privileges\">\n                            <mat-slide-toggle [name]=\"privilege.id\" color=\"primary\" [(ngModel)]=\"privilege.checked\" (change)=\"togglePrivilege(privilege)\">{{'lang.' + privilege.id + 'Admin' | translate}}</mat-slide-toggle>\n                        </div>\n                    </div>\n                </fieldset>\n                <fieldset *ngIf=\"!creationMode\">\n                    <legend align=\"left\">{{'lang.linkedUsers' | translate}} :</legend>\n                    <div class=\"form-container\">\n                        <mat-table #table class=\"dataTable\" [dataSource]=\"dataSource\" matSort matSortActive=\"lastname\"\n                                   matSortDirection=\"asc\" [class.emptyTable]=\"dataSource.filteredData.length === 0\">\n                            <ng-container matColumnDef=\"firstname\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header>{{'lang.firstname' | translate}}</mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\"> {{element.firstname}} </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"lastname\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header>{{'lang.lastname' | translate}}</mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\"> {{element.lastname}} </mat-cell>\n                            </ng-container>\n                            <ng-container matColumnDef=\"actions\">\n                                <mat-header-cell *matHeaderCellDef style=\"justify-content: end;\">\n                                    <mat-paginator #paginator [length]=\"100\" [pageSize]=\"10\"></mat-paginator>\n                                </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\" style=\"justify-content: flex-end;\">\n                                    <button mat-icon-button color=\"warn\" type=\"button\" title=\"{{'lang.unlinkUser' | translate}}\" (click)=\"$event.stopPropagation();unlinkUser(element)\">\n                                        <mat-icon class=\"fa fa-unlink fa-2x\"></mat-icon>\n                                    </button>\n                                </mat-cell>\n                            </ng-container>\n                            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                            <mat-row *matRowDef=\"let row; columns: displayedColumns;\" routerLink=\"/administration/users/{{row.id}}\"\n                                     style=\"cursor:pointer;\"></mat-row>\n                        </mat-table>\n                        <div class=\"noResult\" *ngIf=\"dataSource.filteredData.length === 0\">\n                            {{'lang.noResult' | translate}}\n                        </div>\n                        <div class=\"addButton\">\n                            <button mat-raised-button type=\"button\" color=\"primary\" [matMenuTriggerFor]=\"menu\" [disabled]=\"usersList.length === group.users.length\">{{'lang.addUser' | translate}}</button>\n                            <mat-menu #menu=\"matMenu\">\n                                <ng-container *ngFor=\"let user of usersList\">\n                                    <button mat-menu-item *ngIf=\"!isInGroup(user);\" (click)=\"linkUser(user)\">{{user.firstname}} {{user.lastname}}</button>\n                                </ng-container>\n                            </mat-menu>\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </mat-sidenav-content>\n    <mat-sidenav #snavRight disableClose [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" [opened]=\"false\"\n                 fixedInViewport=\"true\" position='end'>\n    </mat-sidenav>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/frontend/app/administration/group/group.component.scss":
/*!********************************************************************!*\
  !*** ./src/frontend/app/administration/group/group.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".privilegesList {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: inline-block;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .privilegesList {\n      width: 50%; } }\n  @media (min-width: 992px) {\n    .privilegesList {\n      width: 33%; } }\n  fieldset {\n  border: solid 1px #F1F4F4;\n  align-items: center;\n  margin-top: 30px; }\n  legend {\n  color: #F99830; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvYWRtaW5pc3RyYXRpb24vZ3JvdXAvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXGFkbWluaXN0cmF0aW9uXFxncm91cFxcZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7RUFDWDtJQUxGO01BTUksVUFBVSxFQUFBLEVBS2I7RUFIQztJQVJGO01BU0ksVUFBVSxFQUFBLEVBRWI7RUFFRDtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9hZG1pbmlzdHJhdGlvbi9ncm91cC9ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Nzcy92YXJzLnNjc3MnO1xuXG4ucHJpdmlsZWdlc0xpc3Qge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBcbiAgICB3aWR0aDogMzMlO1xuICB9XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0YxRjRGNDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxubGVnZW5kIHtcbiAgY29sb3I6ICNGOTk4MzA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/frontend/app/administration/group/group.component.ts":
/*!******************************************************************!*\
  !*** ./src/frontend/app/administration/group/group.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var confirm_component_1 = __webpack_require__(/*! ../../plugins/confirm.component */ "./src/frontend/app/plugins/confirm.component.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var auth_service_1 = __webpack_require__(/*! ../../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var GroupComponent = /** @class */ (function () {
    function GroupComponent(http, translate, route, router, signaturesService, notificationService, dialog, authService) {
        this.http = http;
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.authService = authService;
        this.creationMode = true;
        this.loading = true;
        this.title = '';
        this.displayedColumns = ['firstname', 'lastname', 'actions'];
        this.group = {
            id: '',
            label: '',
            users: [],
            privileges: []
        };
        this.dataSource = new material_1.MatTableDataSource(this.group.users);
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id'] === undefined) {
                _this.creationMode = true;
                _this.title = _this.translate.instant('lang.groupCreation');
                _this.loading = false;
                _this.groupClone = JSON.parse(JSON.stringify(_this.group));
            }
            else {
                _this.creationMode = false;
                _this.usersList = [];
                _this.http.get('../rest/groups/' + params['id'])
                    .pipe(operators_1.map(function (data) { return data.group; }), operators_1.finalize(function () { return _this.loading = false; }))
                    .subscribe({
                    next: function (data) {
                        _this.group = data;
                        _this.groupClone = JSON.parse(JSON.stringify(_this.group));
                        _this.title = _this.group.label;
                        _this.updateDataTable();
                    },
                });
                _this.http.get('../rest/users?mode=all')
                    .pipe(operators_1.map(function (data) { return data.users; }))
                    .subscribe({
                    next: function (data) {
                        _this.usersList = data;
                    }
                });
            }
        });
    };
    GroupComponent.prototype.updateDataTable = function () {
        this.dataSource.data = this.group.users;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    GroupComponent.prototype.canValidate = function () {
        if (this.group.label === this.groupClone.label) {
            return false;
        }
        else {
            return true;
        }
    };
    GroupComponent.prototype.onSubmit = function () {
        if (this.creationMode) {
            this.createGroup();
        }
        else {
            this.modifyGroup();
        }
    };
    GroupComponent.prototype.linkUser = function (user) {
        var _this = this;
        this.http.put('../rest/groups/' + this.group.id + '/users', { userId: user.id })
            .subscribe({
            next: function () {
                _this.group.users.push(user);
                _this.updateDataTable();
                _this.notificationService.success('lang.userAdded');
            },
        });
    };
    GroupComponent.prototype.unlinkUser = function (userToDelete) {
        var _this = this;
        if (userToDelete.id === this.authService.user.id) {
            var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, { autoFocus: false, data: { mode: 'warning', title: 'lang.confirmMsg', msg: 'lang.groupWarnMsg' } });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result === 'yes') {
                    _this.deleteUser(userToDelete);
                }
            });
        }
        else {
            this.deleteUser(userToDelete);
        }
    };
    GroupComponent.prototype.deleteUser = function (userToDelete) {
        var _this = this;
        this.http.delete('../rest/groups/' + this.group.id + '/users/' + userToDelete.id, {})
            .subscribe({
            next: function () {
                var indexToDelete = _this.group.users.findIndex(function (user) { return user.id === userToDelete.id; });
                _this.group.users.splice(indexToDelete, 1);
                _this.updateDataTable();
                _this.notificationService.success('lang.userDeleted');
            },
        });
    };
    GroupComponent.prototype.modifyGroup = function () {
        var _this = this;
        this.loading = true;
        this.http.put('../rest/groups/' + this.group.id, this.group)
            .subscribe({
            next: function () {
                _this.router.navigate(['/administration/groups']);
                _this.notificationService.success('lang.groupUpdated');
            },
        });
    };
    GroupComponent.prototype.createGroup = function () {
        var _this = this;
        this.loading = true;
        this.http.post('../rest/groups', this.group)
            .subscribe({
            next: function (data) {
                _this.router.navigate(['/administration/groups/' + data.id]);
                _this.notificationService.success('lang.groupAdded');
            },
        });
    };
    GroupComponent.prototype.deleteGroup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, { autoFocus: false, data: { mode: '', title: 'lang.confirmMsg', msg: '' } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'yes') {
                _this.loading = true;
                _this.http.delete('../rest/groups/' + _this.group.id)
                    .subscribe({
                    next: function () {
                        _this.router.navigate(['/administration/groups']);
                        _this.notificationService.success('lang.groupDeleted');
                    },
                });
            }
        });
    };
    GroupComponent.prototype.togglePrivilege = function (privilege) {
        var _this = this;
        if (privilege.id === 'manage_groups') {
            var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, { autoFocus: false, data: { mode: 'warning', title: 'lang.confirmMsg', msg: 'lang.groupWarnMsg' } });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result === 'yes') {
                    _this.updatePrivilege(privilege);
                }
                else {
                    privilege.checked = !privilege.checked;
                }
            });
        }
        else {
            this.updatePrivilege(privilege);
        }
    };
    GroupComponent.prototype.updatePrivilege = function (privilege) {
        var _this = this;
        this.http.put('../rest/groups/' + this.group.id + '/privilege/' + privilege.id, { checked: privilege.checked })
            .subscribe({
            next: function () {
                _this.notificationService.success('lang.privilegeUpdated');
            },
        });
    };
    GroupComponent.prototype.cancel = function () {
        this.router.navigate(['/administration/groups']);
    };
    GroupComponent.prototype.isInGroup = function (user) {
        if (this.group.users.findIndex(function (userG) { return userG.id === user.id; }) > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], GroupComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], GroupComponent.prototype, "sort", void 0);
    GroupComponent = __decorate([
        core_1.Component({
            selector: 'app-administration-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/frontend/app/administration/group/group.component.html"),
            styles: [__webpack_require__(/*! ../administration.scss */ "./src/frontend/app/administration/administration.scss"), __webpack_require__(/*! ./group.component.scss */ "./src/frontend/app/administration/group/group.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, core_2.TranslateService, router_1.ActivatedRoute, router_1.Router, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService, material_1.MatDialog, auth_service_1.AuthService])
    ], GroupComponent);
    return GroupComponent;
}());
exports.GroupComponent = GroupComponent;


/***/ }),

/***/ "./src/frontend/app/administration/group/groups-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/frontend/app/administration/group/groups-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize>\n  <mat-sidenav #snav [disableClose]=\"!signaturesService.mobileMode\" [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" fixedInViewport=\"true\"\n    [opened]=\"!signaturesService.mobileMode\" [style.width.px]=\"350\">\n    <app-admin-sidebar [snavLeftComponent]=\"this.snav\" [snavRightComponent]=\"this.snavRight\"></app-admin-sidebar>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"mainView\">\n    <header class=\"header\">\n      <div class=\"header-title\">\n        <button *ngIf=\"signaturesService.mobileMode\" mat-icon-button (click)=\"this.snav.toggle();\">\n          <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\" style=\"font-size: 24px;\"></mat-icon>\n        </button>\n        <span><b>{{groupList.length}}</b> {{'lang.manage_groupsAlt' | translate}}</span>\n      </div>\n      <div>\n        <mat-paginator #paginator [length]=\"100\" [pageSize]=\"10\"></mat-paginator>\n      </div>\n    </header>\n    <div class=\"container\">\n      <div *ngIf=\"loading\" class=\"loader\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <mat-table #table class=\"dataTable\" [dataSource]=\"dataSource\" matSort matSortActive=\"label\"\n        matSortDirection=\"asc\" [class.emptyTable]=\"dataSource.filteredData.length === 0\">\n        <ng-container matColumnDef=\"label\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'lang.label' | translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.label}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef style=\"justify-content: end;\">\n            <mat-form-field>\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrer\">\n            </mat-form-field>\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" style=\"justify-content: flex-end;\">\n            <button mat-icon-button color=\"warn\" (click)=\"$event.stopPropagation();delete(element)\" title=\"{{'lang.delete' | translate}}\">\n              <mat-icon class=\"fa fa-trash-alt fa-2x\"></mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" routerLink=\"/administration/groups/{{row.id}}\"\n          style=\"cursor:pointer;\"></mat-row>\n      </mat-table>\n      <div class=\"addButton\">\n        <button mat-stroked-button type=\"button\" class=\"btn blue\" routerLink=\"/administration/groups/new\">{{'lang.groupCreation' | translate}}</button>\n      </div>\n      <div class=\"noResult\" *ngIf=\"dataSource.filteredData.length === 0\">\n          {{'lang.noResult' | translate}}\n      </div>\n    </div>\n  </mat-sidenav-content>\n  <mat-sidenav #snavRight disableClose [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" [opened]=\"false\"\n    fixedInViewport=\"true\" position='end'>\n  </mat-sidenav>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/frontend/app/administration/group/groups-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/frontend/app/administration/group/groups-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL2FkbWluaXN0cmF0aW9uL2dyb3VwL2dyb3Vwcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/frontend/app/administration/group/groups-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/frontend/app/administration/group/groups-list.component.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var confirm_component_1 = __webpack_require__(/*! ../../plugins/confirm.component */ "./src/frontend/app/plugins/confirm.component.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var ngx_pipes_1 = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
var GroupsListComponent = /** @class */ (function () {
    function GroupsListComponent(http, translate, latinisePipe, dialog, signaturesService, notificationService) {
        var _this = this;
        this.http = http;
        this.translate = translate;
        this.latinisePipe = latinisePipe;
        this.dialog = dialog;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.groupList = [];
        this.loading = true;
        this.displayedColumns = ['label', 'actions'];
        this.dataSource = new material_1.MatTableDataSource(this.groupList);
        this.dataSource.filterPredicate = function (data, filter) {
            var state = false;
            _this.displayedColumns.forEach(function (column) {
                if (data[column] !== undefined) {
                    var cleanData = _this.latinisePipe.transform(data[column].trim().toLowerCase());
                    var cleanFilter = _this.latinisePipe.transform(filter.trim().toLowerCase());
                    if (cleanData.indexOf(cleanFilter) !== -1) {
                        state = true;
                    }
                }
            });
            return state;
        };
    }
    GroupsListComponent.prototype.updateDataTable = function () {
        this.dataSource.data = this.groupList;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    GroupsListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    GroupsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('../rest/groups')
            .pipe(operators_1.map(function (data) { return data.groups; }), operators_1.finalize(function () { return _this.loading = false; }))
            .subscribe({
            next: function (data) {
                _this.groupList = data;
                _this.updateDataTable();
            },
        });
    };
    GroupsListComponent.prototype.delete = function (groupToDelete) {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, { autoFocus: false, data: { mode: '', title: 'lang.confirmMsg', msg: '' } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'yes') {
                _this.loading = true;
                _this.http.delete('../rest/groups/' + groupToDelete.id)
                    .pipe(operators_1.finalize(function () { return _this.loading = false; }))
                    .subscribe({
                    next: function (data) {
                        var indexToDelete = _this.groupList.findIndex(function (group) { return group.id === groupToDelete.id; });
                        _this.groupList.splice(indexToDelete, 1);
                        _this.updateDataTable();
                        _this.notificationService.success('lang.groupDeleted');
                    },
                });
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], GroupsListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], GroupsListComponent.prototype, "sort", void 0);
    GroupsListComponent = __decorate([
        core_1.Component({
            selector: 'app-administration-groups-list',
            template: __webpack_require__(/*! ./groups-list.component.html */ "./src/frontend/app/administration/group/groups-list.component.html"),
            styles: [__webpack_require__(/*! ../administration.scss */ "./src/frontend/app/administration/administration.scss"), __webpack_require__(/*! ./groups-list.component.scss */ "./src/frontend/app/administration/group/groups-list.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, core_2.TranslateService, ngx_pipes_1.LatinisePipe, material_1.MatDialog, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService])
    ], GroupsListComponent);
    return GroupsListComponent;
}());
exports.GroupsListComponent = GroupsListComponent;


/***/ }),

/***/ "./src/frontend/app/administration/home/administration.component.html":
/*!****************************************************************************!*\
  !*** ./src/frontend/app/administration/home/administration.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize>\n  <mat-sidenav #snav [disableClose]=\"!signaturesService.mobileMode\" [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" fixedInViewport=\"true\"\n  [opened]=\"!signaturesService.mobileMode\" [style.width.px]=\"350\">\n  <app-admin-sidebar [snavLeftComponent]=\"this.snav\" [snavRightComponent]=\"this.snavRight\"></app-admin-sidebar>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"mainView\">\n    <header class=\"header\">\n        <button *ngIf=\"signaturesService.mobileMode\" mat-icon-button (click)=\"this.snav.toggle();\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\" style=\"font-size: 24px;\"></mat-icon>\n      </button> {{'lang.administration' | translate}}\n    </header>\n    <div class=\"container\">\n        <div class=\"admin-item\" *ngFor=\"let privilege of authService.user.administrativePrivileges\">\n            <button mat-stroked-button color=\"primary\" [routerLink]=\"privilege.route\">\n              <mat-icon color=\"primary\" [class]=\"privilege.icon\"></mat-icon>\n              <span>{{'lang.' + privilege.id | translate}}</span>\n              <span class=\"admin-desc\">\n                  {{'lang.' + privilege.id + 'Desc' | translate}}\n              </span>\n            </button>\n        </div>\n    </div>\n  </mat-sidenav-content>\n  <mat-sidenav #snavRight disableClose [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" [opened]=\"false\"\n    fixedInViewport=\"true\" position='end'>\n  </mat-sidenav>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/frontend/app/administration/home/administration.component.scss":
/*!****************************************************************************!*\
  !*** ./src/frontend/app/administration/home/administration.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  flex: 1;\n  overflow: auto; }\n  .container .admin-item {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    text-align: center;\n    width: 100%;\n    display: inline-block; }\n  @media (min-width: 768px) {\n      .container .admin-item {\n        width: 50%; } }\n  @media (min-width: 992px) {\n      .container .admin-item {\n        width: 33%; } }\n  .container .admin-item .mat-stroked-button {\n      border-color: #F99830;\n      padding: 10px;\n      width: 90%;\n      height: 160px; }\n  .container .admin-item .mat-stroked-button mat-icon {\n        height: auto;\n        width: auto;\n        font-size: 50px; }\n  .container .admin-item .mat-stroked-button ::ng-deep.mat-button-wrapper {\n        display: flex;\n        flex-direction: column; }\n  .admin-desc {\n  white-space: normal;\n  font-size: 10px;\n  line-height: 15px;\n  text-align: justify;\n  color: gray;\n  height: 60px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvYWRtaW5pc3RyYXRpb24vaG9tZS9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxcYWRtaW5pc3RyYXRpb25cXGhvbWVcXGFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsT0FBTztFQUNQLGNBQWMsRUFBQTtFQUZoQjtJQUlJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFPWCxxQkFBcUIsRUFBQTtFQU5yQjtNQVJKO1FBU00sVUFBVSxFQUFBLEVBNEJiO0VBMUJDO01BWEo7UUFZTSxVQUFVLEVBQUEsRUF5QmI7RUFyQ0g7TUFpQk0scUJBQXFCO01BQ3JCLGFBQWE7TUFDYixVQUFVO01BQ1YsYUFBYSxFQUFBO0VBcEJuQjtRQXVCUSxZQUFZO1FBQ1osV0FBVztRQUVYLGVBQWUsRUFBQTtFQTFCdkI7UUFpQ1EsYUFBYTtRQUNiLHNCQUFzQixFQUFBO0VBTTlCO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9mcm9udGVuZC9hcHAvYWRtaW5pc3RyYXRpb24vaG9tZS9hZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Nzcy92YXJzLnNjc3MnO1xuXG5cbi5jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLmFkbWluLWl0ZW0ge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgXG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgXG4gICAgICB3aWR0aDogMzMlO1xuICAgIH1cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI0Y5OTgzMDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgaGVpZ2h0OiAxNjBweDtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgLy8gdG9wOiAxMHB4O1xuICAgICAgICAvLyBsZWZ0OiA1MCU7XG4gICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgICAgfVxuXG4gICAgICA6Om5nLWRlZXAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmFkbWluLWRlc2Mge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogZ3JheTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/frontend/app/administration/home/administration.component.ts":
/*!**************************************************************************!*\
  !*** ./src/frontend/app/administration/home/administration.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var auth_service_1 = __webpack_require__(/*! ../../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent(signaturesService, authService) {
        this.signaturesService = signaturesService;
        this.authService = authService;
    }
    AdministrationComponent.prototype.ngOnInit = function () { };
    AdministrationComponent = __decorate([
        core_1.Component({
            selector: 'app-administration',
            template: __webpack_require__(/*! ./administration.component.html */ "./src/frontend/app/administration/home/administration.component.html"),
            styles: [__webpack_require__(/*! ../administration.scss */ "./src/frontend/app/administration/administration.scss"), __webpack_require__(/*! ./administration.component.scss */ "./src/frontend/app/administration/home/administration.component.scss")]
        }),
        __metadata("design:paramtypes", [signatures_service_1.SignaturesContentService, auth_service_1.AuthService])
    ], AdministrationComponent);
    return AdministrationComponent;
}());
exports.AdministrationComponent = AdministrationComponent;


/***/ }),

/***/ "./src/frontend/app/administration/sendmail/sendmail.component.html":
/*!**************************************************************************!*\
  !*** ./src/frontend/app/administration/sendmail/sendmail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize>\n    <mat-sidenav #snav [disableClose]=\"!signaturesService.mobileMode\"\n        [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" fixedInViewport=\"true\"\n        [opened]=\"!signaturesService.mobileMode\" [style.width.px]=\"350\">\n        <app-admin-sidebar [snavLeftComponent]=\"this.snav\" [snavRightComponent]=\"this.snavRight\"></app-admin-sidebar>\n    </mat-sidenav>\n    <mat-sidenav-content class=\"mainView\">\n        <header class=\"header\">\n            <div class=\"header-title\">\n                <button *ngIf=\"signaturesService.mobileMode\" mat-icon-button (click)=\"this.snav.toggle();\">\n                    <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\" style=\"font-size: 24px;\"></mat-icon>\n                </button>\n                <span *ngIf=\"!loading\">{{title}}</span>\n            </div>\n            <div style=\"width: 70px;text-align: center;\">\n                <button mat-icon-button (click)=\"snavRight.toggle()\" title=\"{{'lang.connectionTest' | translate}}\">\n                    <mat-icon class=\"fa fa-broadcast-tower fa-2x\"></mat-icon>\n                </button>\n            </div>\n        </header>\n        <div class=\"container\">\n            <div *ngIf=\"loading\" class=\"loader\">\n                <mat-spinner></mat-spinner>\n            </div>\n            <form class=\"admin-form\" *ngIf=\"!loading\" (ngSubmit)=\"onSubmit()\" #sendmailForm=\"ngForm\">\n                <mat-form-field class=\"input-row\">\n                    <mat-select #smtpType name=\"smtpType\" placeholder=\"{{'lang.configurationType' | translate}}\"\n                        [(ngModel)]=\"sendmail.type\" required>\n                        <mat-option *ngFor=\"let type of smtpTypeList\" [value]=\"type.id\">\n                            {{type.label | translate}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <div class=\"auth-container\">\n                    <mat-form-field class=\"auth-1\">\n                        <mat-select name=\"SMTPSecure\" placeholder=\"{{'lang.smtpAuth' | translate}}\"\n                            [disabled]=\"['smtp', 'mail'].indexOf(sendmail.type) == -1\" [(ngModel)]=\"sendmail.secure\">\n                            <mat-option *ngFor=\"let security of smtpSecList\" [value]=\"security.id\">\n                                {{security.label| translate}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"auth-2\">\n                        <input matInput name=\"host\" [disabled]=\"['smtp', 'mail'].indexOf(sendmail.type) == -1\"\n                            [(ngModel)]=\"sendmail.host\" placeholder=\"{{'lang.host' | translate}}\" required>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"auth-3\">\n                        <input name=\"port\" type=\"number\" matInput [(ngModel)]=\"sendmail.port\"\n                            [disabled]=\"['smtp', 'mail'].indexOf(sendmail.type) == -1\"\n                            placeholder=\"{{'lang.port' | translate}}\" required>\n                    </mat-form-field>\n                </div>\n\n                <mat-slide-toggle color=\"primary\" name=\"SMTPAuth\" [(ngModel)]=\"sendmail.auth\"\n                    [disabled]=\"['smtp', 'mail'].indexOf(sendmail.type) == -1\" (change)=\"cleanAuthInfo()\"\n                    style=\"margin-bottom:15px\">{{'lang.enableAuth' | translate}}</mat-slide-toggle>\n\n                <mat-form-field class=\"input-row\">\n                    <input name=\"user\" [(ngModel)]=\"sendmail.user\"\n                        [disabled]=\"!sendmail.auth || ['smtp', 'mail'].indexOf(sendmail.type) == -1\" matInput\n                        placeholder=\"{{'lang.id' | translate}}\" required>\n                </mat-form-field>\n\n                <mat-form-field class=\"input-row\">\n                    <input name=\"password\" [type]=\"hidePassword ? 'password' : 'text'\" [(ngModel)]=\"sendmail.password\"\n                        [disabled]=\"!sendmail.auth || ['smtp', 'mail'].indexOf(sendmail.type) == -1\" matInput\n                        placeholder=\"{{passwordLanguage}}\" [required]=\"!sendmail.passwordAlreadyExists\">\n                    <mat-icon color=\"primary\" style=\"cursor: pointer;\" matSuffix (click)=\"hidePassword = !hidePassword\"\n                        class=\"fa fa-2x\" [ngClass]=\"[hidePassword ? 'fa-eye-slash' : 'fa-eye']\"></mat-icon>\n                </mat-form-field>\n\n                <mat-form-field class=\"input-row\">\n                    <input name=\"mailFrom\" [(ngModel)]=\"sendmail.from\"\n                        [disabled]=\"['smtp', 'mail'].indexOf(sendmail.type) == -1\" matInput\n                        placeholder=\"{{'lang.mailFrom' | translate}}\"\n                        pattern=\"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)\">\n                </mat-form-field>\n\n                <div class=\"actions-form\">\n                    <button mat-stroked-button type=\"submit\" class=\"btn blue\"\n                        [disabled]=\"!sendmailForm.form.valid || !canValidate()\">{{'lang.validate' | translate}}</button>\n                    <button mat-stroked-button type=\"button\" class=\"btn\"\n                        (click)=\"cancel()\">{{'lang.cancel' | translate}}</button>\n                </div>\n            </form>\n        </div>\n    </mat-sidenav-content>\n    <mat-sidenav #snavRight disableClose [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" [opened]=\"false\"\n        [style.width]=\"'650px'\" fixedInViewport=\"true\" position='end' (opened)=\"initEmailSend()\">\n        <div class=\"panel-container\">\n            <div class=\"panel-header\">\n                <span *ngIf=\"!loading\">{{'lang.emailSendTest' | translate}}</span>\n            </div>\n            <button *ngIf=\"signaturesService.mobileMode\" class=\"cancel\" mat-icon-button type=\"button\"\n                (click)=\"snavRight.toggle();\">\n                <mat-icon fontSet=\"fas\" fontIcon=\"fa-arrow-right fa-2x\"></mat-icon>\n            </button>\n            <div class=\"panel-content\">\n                <form #testSendmailForm=\"ngForm\">\n                    <mat-form-field class=\"testSendTo\">\n                        <input name=\"recipientTest\" matInput placeholder=\"{{'lang.mailTo' | translate}}\"\n                            [(ngModel)]=\"recipientTest\" [disabled]=\"emailSendLoading\"\n                            pattern=\"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)\">\n                        <mat-icon *ngIf=\"!emailSendLoading && testSendmailForm.valid\"\n                            title=\"{{'lang.beginSendTest' | translate}}\" (click)=\"testEmailSend()\" color=\"primary\"\n                            style=\"cursor: pointer;\" matSuffix class=\"fa fa-paper-plane fa-2x\"></mat-icon>\n                    </mat-form-field>\n                </form>\n\n                <div style=\"margin-left:15px\">\n                    <mat-list-item *ngIf=\"emailSendResult.msg != ''\">\n                        <mat-icon mat-list-icon class=\"fas {{emailSendResult.icon}} fa-2x\"></mat-icon>\n                        <p mat-line> {{emailSendResult.msg | translate}} </p>\n                    </mat-list-item>\n                    <div class=\"bash\" *ngIf=\"emailSendResult.error\">\n                        {{this.emailSendResult.debug}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </mat-sidenav>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/frontend/app/administration/sendmail/sendmail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/frontend/app/administration/sendmail/sendmail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testSendTo {\n  width: 95%;\n  margin-top: 10px;\n  margin-left: 10px; }\n\n.bash {\n  background: #34495e;\n  height: 310px;\n  border-radius: 5px;\n  top: 40px;\n  display: absolute;\n  color: #fff;\n  padding: 10px;\n  margin: 10px;\n  word-wrap: break-word; }\n\n.panel-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n\n.panel-header {\n  box-shadow: 0px 0px 10px 0px #656565;\n  color: white;\n  background: #135F7F;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  font-size: 25px;\n  align-items: center; }\n\n.panel-content {\n  flex: 1;\n  overflow: auto; }\n\n.cancel {\n  position: absolute;\n  top: 10px;\n  left: 0px;\n  height: 65px;\n  width: 65px;\n  font-size: 35px;\n  color: white; }\n\n.auth-container {\n  display: flex; }\n\n.auth-container .auth-1 {\n    width: 100px;\n    padding-right: 10px; }\n\n.auth-container .auth-2 {\n    flex: 1; }\n\n.auth-container .auth-3 {\n    width: 50px;\n    padding-left: 10px; }\n\n@media (max-width: 360px) {\n  .auth-container {\n    display: flex;\n    flex-direction: column; }\n    .auth-container .auth-1 {\n      width: 100%;\n      padding-right: 0px; }\n    .auth-container .auth-2 {\n      width: 100%;\n      flex: 1; }\n    .auth-container .auth-3 {\n      width: 100%;\n      padding-left: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvYWRtaW5pc3RyYXRpb24vc2VuZG1haWwvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXGFkbWluaXN0cmF0aW9uXFxzZW5kbWFpbFxcc2VuZG1haWwuY29tcG9uZW50LnNjc3MiLCJzcmMvZnJvbnRlbmQvYXBwL2FkbWluaXN0cmF0aW9uL3NlbmRtYWlsL0Q6XFxNYWFyY2hQYXJhcGhldXItMjAuMDMvc3JjXFxmcm9udGVuZFxcY3NzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFTO0VBQ1QsZ0JBQWU7RUFDZixpQkFDSixFQUFBOztBQUVBO0VBQ0ksbUJBQW9CO0VBQ3BCLGFBQWU7RUFDZixrQkFBb0I7RUFDcEIsU0FBUztFQUNULGlCQUFrQjtFQUNsQixXQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixtQkM5QmE7RUQrQmIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxPQUFPO0VBQ1AsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxhQUFZLEVBQUE7O0FBRGhCO0lBSVEsWUFBVztJQUNYLG1CQUFtQixFQUFBOztBQUwzQjtJQVFRLE9BQU0sRUFBQTs7QUFSZDtJQVdRLFdBQVU7SUFDVixrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSTtJQUNJLGFBQVk7SUFDWixzQkFBc0IsRUFBQTtJQUYxQjtNQUtRLFdBQVU7TUFDVixrQkFBa0IsRUFBQTtJQU4xQjtNQVNRLFdBQVU7TUFDVixPQUFNLEVBQUE7SUFWZDtNQWFRLFdBQVU7TUFDVixpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL2FkbWluaXN0cmF0aW9uL3NlbmRtYWlsL3NlbmRtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY3NzL3ZhcnMuc2Nzcyc7XG5cbi50ZXN0U2VuZFRvIHtcbiAgICB3aWR0aDo5NSU7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjEwcHhcbn1cblxuLmJhc2gge1xuICAgIGJhY2tncm91bmQgOiAjMzQ0OTVlOyBcbiAgICBoZWlnaHQgOiAzMTBweCA7IFxuICAgIGJvcmRlci1yYWRpdXMgOiA1cHggO1xuICAgIHRvcDogNDBweDtcbiAgICBkaXNwbGF5IDogYWJzb2x1dGU7IFxuICAgIGNvbG9yIDogI2ZmZiA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4ucGFuZWwtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuLnBhbmVsLWhlYWRlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCAjNjU2NTY1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICBoZWlnaHQ6IDk1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4gIFxuLnBhbmVsLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jYW5jZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMHB4OyBcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmF1dGgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OmZsZXg7XG5cbiAgICAuYXV0aC0xIHtcbiAgICAgICAgd2lkdGg6MTAwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5hdXRoLTIge1xuICAgICAgICBmbGV4OjE7XG4gICAgfVxuICAgIC5hdXRoLTMge1xuICAgICAgICB3aWR0aDo1MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHsgXG4gICAgLmF1dGgtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5hdXRoLTEge1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYXV0aC0yIHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBmbGV4OjE7XG4gICAgICAgIH1cbiAgICAgICAgLmF1dGgtMyB7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIiwiJGNvbG9yLW1haW46ICM0RjRGNEY7IC8vIGRlZmF1bHQgY29sb3IgaW4gYXBwbGljYXRpb25cbiRwcmltYXJ5OiAjMTM1RjdGOyAvLyBtYWluIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG4kYWNjZW50OiAjMkVDQzcxOyAvLyBhY2NlbnQgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb24gKGxpa2Ugc3VjY2VzcyBidXR0b25zKVxuJHdhcm46IHJnYigyMzEsIDc2LCA2MCk7IC8vIHdhcm5pbmcgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cblxuLy8gV0FSTklORyAhIFlPVSBNVVNUIFJFQ09NUElMQVRFIG1hYXJjaC1tYXRlcmlhbC5zY3NzIElGIFZBTFVFUyBDSEFOR0VTIl19 */"

/***/ }),

/***/ "./src/frontend/app/administration/sendmail/sendmail.component.ts":
/*!************************************************************************!*\
  !*** ./src/frontend/app/administration/sendmail/sendmail.component.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var auth_service_1 = __webpack_require__(/*! ../../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var SendmailComponent = /** @class */ (function () {
    function SendmailComponent(http, translate, route, router, signaturesService, notificationService, dialog, authService) {
        this.http = http;
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.authService = authService;
        this.loading = true;
        this.title = '';
        this.passwordLanguage = '';
        this.hidePassword = true;
        this.emailSendResult = {
            icon: '',
            msg: '',
            debug: '',
            error: false
        };
        this.smtpTypeList = [
            {
                id: 'smtp',
                label: 'lang.smtpclient'
            },
            {
                id: 'sendmail',
                label: 'lang.smtprelay'
            },
            {
                id: 'qmail',
                label: 'lang.qmail'
            },
            {
                id: 'mail',
                label: 'lang.phpmail'
            }
        ];
        this.smtpSecList = [
            {
                id: '',
                label: 'lang.none'
            },
            {
                id: 'ssl',
                label: 'ssl'
            },
            {
                id: 'tls',
                label: 'tls'
            }
        ];
    }
    SendmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function () {
            _this.http.get('../rest/configurations/1')
                .pipe(operators_1.map(function (data) { return data.configuration; }), operators_1.finalize(function () { return _this.loading = false; }))
                .subscribe({
                next: function (data) {
                    _this.sendmail = data.value;
                    _this.sendmailLabel = data.label;
                    _this.sendmailClone = JSON.parse(JSON.stringify(_this.sendmail));
                    _this.title = _this.translate.instant('lang.manage_email_configuration');
                    if (_this.sendmail.passwordAlreadyExists) {
                        _this.passwordLanguage = _this.translate.instant('lang.passwordModification');
                    }
                    else {
                        _this.passwordLanguage = _this.translate.instant('lang.password');
                    }
                },
            });
        });
    };
    SendmailComponent.prototype.canValidate = function () {
        return JSON.stringify(this.sendmail) !== JSON.stringify(this.sendmailClone);
    };
    SendmailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.http.patch('../rest/configurations/1', { 'value': this.sendmail, 'label': this.sendmailLabel })
            .pipe(operators_1.finalize(function () { return _this.loading = false; }))
            .subscribe({
            next: function () {
                _this.notificationService.success('lang.emailConfigurationUpdated');
            },
        });
    };
    SendmailComponent.prototype.initEmailSend = function () {
        this.profileInfo = JSON.parse(JSON.stringify(this.authService.user));
        this.recipientTest = this.profileInfo.email;
    };
    SendmailComponent.prototype.testEmailSend = function () {
        var _this = this;
        if (JSON.stringify(this.sendmailClone) !== JSON.stringify(this.sendmail)) {
            this.onSubmit();
        }
        this.emailSendResult = {
            icon: 'fa-paper-plane primary',
            msg: 'lang.emailSendInProgress',
            debug: '',
            error: false
        };
        var email = {
            'sender': this.sendmail.from,
            'recipients': [this.recipientTest],
            'subject': '[' + this.translate.instant('lang.doNotReply') + '] ' + this.translate.instant('lang.emailSendTest'),
            'status': 'EXPRESS',
            'body': this.translate.instant('lang.emailSendTest'),
            'isHtml': false
        };
        this.emailSendLoading = true;
        this.http.post('../rest/emails', email)
            .pipe(operators_1.finalize(function () { return _this.emailSendLoading = false; }))
            .subscribe({
            next: function (data) {
                if (data.isSent) {
                    _this.emailSendResult = {
                        icon: 'fa-check green',
                        msg: 'lang.emailSendSuccess',
                        debug: '',
                        error: false
                    };
                }
                else {
                    _this.emailSendResult = {
                        icon: 'fa-times red',
                        msg: 'lang.emailSendFailed',
                        debug: data.informations,
                        error: true
                    };
                }
            }
        });
    };
    SendmailComponent.prototype.cleanAuthInfo = function () {
        this.sendmail.passwordAlreadyExists = false;
        this.sendmail.user = '';
        this.sendmail.password = '';
    };
    SendmailComponent.prototype.cancel = function () {
        this.router.navigate(['/administration']);
    };
    SendmailComponent = __decorate([
        core_1.Component({
            selector: 'app-administration-sendmail',
            template: __webpack_require__(/*! ./sendmail.component.html */ "./src/frontend/app/administration/sendmail/sendmail.component.html"),
            styles: [__webpack_require__(/*! ../administration.scss */ "./src/frontend/app/administration/administration.scss"), __webpack_require__(/*! ./sendmail.component.scss */ "./src/frontend/app/administration/sendmail/sendmail.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, core_2.TranslateService, router_1.ActivatedRoute, router_1.Router, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService, material_1.MatDialog, auth_service_1.AuthService])
    ], SendmailComponent);
    return SendmailComponent;
}());
exports.SendmailComponent = SendmailComponent;


/***/ }),

/***/ "./src/frontend/app/administration/user/user.component.html":
/*!******************************************************************!*\
  !*** ./src/frontend/app/administration/user/user.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize>\n  <mat-sidenav #snav [disableClose]=\"!signaturesService.mobileMode\"\n    [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" fixedInViewport=\"true\"\n    [opened]=\"!signaturesService.mobileMode\" [style.width.px]=\"350\">\n    <app-admin-sidebar [snavLeftComponent]=\"this.snav\" [snavRightComponent]=\"this.snavRight\"></app-admin-sidebar>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"mainView\">\n    <header class=\"header\">\n      <div class=\"header-title\">\n        <button *ngIf=\"signaturesService.mobileMode\" mat-icon-button (click)=\"this.snav.toggle();\">\n          <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\" style=\"font-size: 24px;\"></mat-icon>\n        </button>\n        <span *ngIf=\"!loading\">{{title}}</span>\n      </div>\n      <div *ngIf=\"!signaturesService.smartphoneMode\" style=\"padding-right: 10px;\">\n        <div *ngIf=\"!loading && !creationMode\" class=\"avatarProfile\"\n          [ngStyle]=\"{'background': 'url(' + user.picture + ') no-repeat scroll center center / cover'}\">\n        </div>\n      </div>\n    </header>\n    <div class=\"container\">\n      <div *ngIf=\"loading\" class=\"loader\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <form class=\"admin-form\" *ngIf=\"!loading\" (ngSubmit)=\"onSubmit()\" #adminForm=\"ngForm\">\n        <mat-form-field class=\"input-row\">\n          <input name=\"login\" matInput placeholder=\"{{'lang.login' | translate}}\" type=\"text\" [(ngModel)]=\"user.login\"\n            oninput=\"this.value = this.value.toLowerCase()\" [disabled]=\"!creationMode\" required pattern=\"^[\\w.@-]*$\">\n        </mat-form-field>\n        <mat-form-field class=\"input-row\">\n          <input name=\"firstname\" matInput placeholder=\"{{'lang.firstname' | translate}}\" [(ngModel)]=\"user.firstname\"\n            required>\n        </mat-form-field>\n        <mat-form-field class=\"input-row\">\n          <input name=\"nom\" matInput placeholder=\"{{'lang.lastname' | translate}}\" [(ngModel)]=\"user.lastname\" required>\n        </mat-form-field>\n        <mat-form-field class=\"input-row\">\n          <input name=\"email\" matInput placeholder=\"{{'lang.email' | translate}}\" type=\"mail\" [(ngModel)]=\"user.email\"\n            pattern=\"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)\" required>\n        </mat-form-field>\n        <mat-checkbox [disabled]=\"!creationMode\" name=\"isRest\" color=\"primary\" [(ngModel)]=\"user.isRest\" [checked]=\"user.isRest\" (change)=\"getPassRules($event)\">{{'lang.restUser' | translate}}</mat-checkbox>\n        <mat-form-field class=\"input-row\" *ngIf=\"user.isRest\">\n          <input name=\"newPasswordRest\" matInput [(ngModel)]=\"passwordRest.newPassword\"\n            placeholder=\"{{'lang.newPassword' | translate}}\" [type]=\"hideNewPassword ? 'password' : 'text'\"\n            (keyup)=\"checkPasswordValidity(passwordRest.newPassword)\">\n          <mat-icon matSuffix (click)=\"hideNewPassword = !hideNewPassword\" class=\"fa fa-2x\"\n            [ngClass]=\"[hideNewPassword ? 'fa-eye-slash' : 'fa-eye']\"></mat-icon>\n          <mat-hint style=\"color:red;\">{{handlePassword.errorMsg}}</mat-hint>\n        </mat-form-field>\n        <mat-form-field class=\"input-row\" *ngIf=\"user.isRest\">\n          <input name=\"passwordConfirmation\" matInput\n              [(ngModel)]=\"passwordRest.passwordConfirmation\"\n              placeholder=\"{{'lang.passwordConfirmation' | translate}}\"\n              [type]=\"hideNewPasswordConfirm ? 'password' : 'text'\">\n          <mat-icon matSuffix (click)=\"hideNewPasswordConfirm = !hideNewPasswordConfirm\"\n              class=\"fa fa-2x\"\n              [ngClass]=\"[hideNewPasswordConfirm ? 'fa-eye-slash' : 'fa-eye']\"></mat-icon>\n          <mat-hint style=\"color:red;\"\n              *ngIf=\"passwordRest.passwordConfirmation !== passwordRest.newPassword\">\n              {{'lang.passwordNotMatch' | translate}}</mat-hint>\n          <mat-hint style=\"color:green;\"\n              *ngIf=\"passwordRest.passwordConfirmation === passwordRest.newPassword && passwordRest.newPassword.length > 0 && passwordRest.passwordConfirmation.length> 0\">\n              {{'lang.samePassword' | translate}}</mat-hint>\n      </mat-form-field>\n\n        <div class=\"actions-form\">\n          <button mat-stroked-button type=\"submit\" class=\"btn blue\"\n            [disabled]=\"!adminForm.form.valid || !canValidate()\">{{'lang.validate' | translate}}</button>\n          <button mat-stroked-button type=\"button\" class=\"btn\" (click)=\"cancel()\">{{'lang.cancel' | translate}}</button>\n          <button mat-stroked-button type=\"button\" *ngIf=\"!creationMode\" class=\"btn red\" (click)=\"delete()\">{{'lang.delete' | translate}}</button>\n        </div>\n      </form>\n    </div>\n  </mat-sidenav-content>\n  <mat-sidenav #snavRight disableClose [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" [opened]=\"false\"\n    fixedInViewport=\"true\" position='end'>\n  </mat-sidenav>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/frontend/app/administration/user/user.component.scss":
/*!******************************************************************!*\
  !*** ./src/frontend/app/administration/user/user.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatarProfile {\n  width: 65px;\n  height: 65px;\n  border-radius: 40px;\n  border: solid 3px #F99830;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 0.2s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvYWRtaW5pc3RyYXRpb24vdXNlci9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxcYWRtaW5pc3RyYXRpb25cXHVzZXJcXHVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9hZG1pbmlzdHJhdGlvbi91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLmF2YXRhclByb2ZpbGUge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBib3JkZXI6IHNvbGlkIDNweCAjRjk5ODMwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/frontend/app/administration/user/user.component.ts":
/*!****************************************************************!*\
  !*** ./src/frontend/app/administration/user/user.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var confirm_component_1 = __webpack_require__(/*! ../../plugins/confirm.component */ "./src/frontend/app/plugins/confirm.component.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var auth_service_1 = __webpack_require__(/*! ../../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var UserComponent = /** @class */ (function () {
    function UserComponent(http, translate, route, router, signaturesService, notificationService, dialog, authService) {
        this.http = http;
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.authService = authService;
        this.creationMode = true;
        this.loading = true;
        this.title = '';
        this.hideCurrentPassword = true;
        this.hideNewPassword = true;
        this.hideNewPasswordConfirm = true;
        // HANDLE PASSWORD
        this.passwordRules = {
            minLength: { enabled: false, value: 0 },
            complexityUpper: { enabled: false, value: 0 },
            complexityNumber: { enabled: false, value: 0 },
            complexitySpecial: { enabled: false, value: 0 },
            renewal: { enabled: false, value: 0 },
            historyLastUse: { enabled: false, value: 0 },
        };
        this.passwordRest = {
            newPassword: '',
            passwordConfirmation: ''
        };
        this.ruleText = '';
        this.otherRuleText = '';
        this.showPassword = false;
        this.handlePassword = {
            error: false,
            errorMsg: ''
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id'] === undefined) {
                _this.creationMode = true;
                _this.title = _this.translate.instant('lang.userCreation');
                _this.user = {
                    id: '',
                    firstname: '',
                    lastname: '',
                    login: '',
                    email: '',
                    picture: '',
                    isRest: false
                };
                _this.loading = false;
            }
            else {
                _this.creationMode = false;
                _this.http.get('../rest/users/' + params['id'])
                    .pipe(operators_1.map(function (data) { return data.user; }), operators_1.finalize(function () { return _this.loading = false; }))
                    .subscribe({
                    next: function (data) {
                        _this.user = data;
                        _this.userClone = JSON.parse(JSON.stringify(_this.user));
                        _this.title = _this.user.firstname + ' ' + _this.user.lastname;
                        if (_this.user.isRest) {
                            _this.getPassRules({ checked: true });
                        }
                    },
                });
            }
        });
    };
    UserComponent.prototype.canValidate = function () {
        if (this.user.isRest && this.passwordRest.newPassword !== '' && (this.handlePassword.error || this.passwordRest.passwordConfirmation !== this.passwordRest.newPassword)) {
            return false;
        }
        else if (JSON.stringify(this.user) === JSON.stringify(this.userClone) && this.passwordRest.newPassword === '') {
            return false;
        }
        else {
            return true;
        }
    };
    UserComponent.prototype.onSubmit = function () {
        if (this.creationMode) {
            this.createUser();
        }
        else {
            this.modifyUser();
        }
    };
    UserComponent.prototype.modifyUser = function () {
        var _this = this;
        this.loading = true;
        this.http.put('../rest/users/' + this.user.id, this.user)
            .pipe(operators_1.finalize(function () { return _this.loading = false; }))
            .subscribe({
            next: function () {
                if (_this.authService.user.id === _this.user.id) {
                    _this.authService.updateUserInfoWithTokenRefresh();
                }
                if (_this.passwordRest.newPassword !== '') {
                    _this.updateRestUser();
                }
                _this.router.navigate(['/administration/users']);
                _this.notificationService.success('lang.userUpdated');
            },
        });
    };
    UserComponent.prototype.updateRestUser = function () {
        var _this = this;
        var headers = new http_1.HttpHeaders({
            'Authorization': 'Bearer ' + this.authService.getToken()
        });
        this.http.put('../rest/users/' + this.user.id + '/password', this.passwordRest, { headers: headers })
            .subscribe(function () {
            _this.passwordRest.newPassword = '';
            _this.passwordRest.passwordConfirmation = '';
        }, function (err) {
            _this.notificationService.handleErrors(err);
        });
    };
    UserComponent.prototype.createUser = function () {
        var _this = this;
        this.loading = true;
        this.http.post('../rest/users', this.user)
            .pipe(operators_1.finalize(function () { return _this.loading = false; }))
            .subscribe({
            next: function (data) {
                if (_this.user.isRest) {
                    _this.user.id = data.id;
                    _this.updateRestUser();
                }
                _this.router.navigate(['/administration/users']);
                _this.notificationService.success('lang.userAdded');
            },
        });
    };
    UserComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, { autoFocus: false, data: { mode: '', title: 'lang.confirmMsg', msg: '' } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'yes') {
                _this.loading = true;
                _this.http.delete('../rest/users/' + _this.user.id)
                    .pipe(operators_1.finalize(function () { return _this.loading = false; }))
                    .subscribe({
                    next: function () {
                        _this.router.navigate(['/administration/users']);
                        _this.notificationService.success('lang.userDeleted');
                    },
                });
            }
        });
    };
    UserComponent.prototype.cancel = function () {
        this.router.navigate(['/administration/users']);
    };
    UserComponent.prototype.getPassRules = function (ev) {
        var _this = this;
        if (ev.checked) {
            this.handlePassword.error = false;
            this.handlePassword.errorMsg = '';
            this.http.get('../rest/passwordRules')
                .subscribe(function (data) {
                var ruleTextArr = [];
                var otherRuleTextArr = [];
                data.rules.forEach(function (rule) {
                    if (rule.label === 'minLength') {
                        _this.passwordRules.minLength.enabled = rule.enabled;
                        _this.passwordRules.minLength.value = rule.value;
                        if (rule.enabled) {
                            _this.translate.get('lang.minLengthChar', { charLength: rule.value }).subscribe(function (res) {
                                ruleTextArr.push(res);
                            });
                        }
                    }
                    else if (rule.label === 'complexityUpper') {
                        _this.passwordRules.complexityUpper.enabled = rule.enabled;
                        _this.passwordRules.complexityUpper.value = rule.value;
                        if (rule.enabled) {
                            ruleTextArr.push('lang.upperRequired');
                        }
                    }
                    else if (rule.label === 'complexityNumber') {
                        _this.passwordRules.complexityNumber.enabled = rule.enabled;
                        _this.passwordRules.complexityNumber.value = rule.value;
                        if (rule.enabled) {
                            ruleTextArr.push('lang.numberRequired');
                        }
                    }
                    else if (rule.label === 'complexitySpecial') {
                        _this.passwordRules.complexitySpecial.enabled = rule.enabled;
                        _this.passwordRules.complexitySpecial.value = rule.value;
                        if (rule.enabled) {
                            ruleTextArr.push('lang.specialCharRequired');
                        }
                    }
                    else if (rule.label === 'renewal') {
                        _this.passwordRules.renewal.enabled = rule.enabled;
                        _this.passwordRules.renewal.value = rule.value;
                        if (rule.enabled) {
                            _this.translate.get('lang.renewalInfo', { time: rule.value }).subscribe(function (res) {
                                otherRuleTextArr.push(res);
                            });
                        }
                    }
                    else if (rule.label === 'historyLastUse') {
                        _this.passwordRules.historyLastUse.enabled = rule.enabled;
                        _this.passwordRules.historyLastUse.value = rule.value;
                        if (rule.enabled) {
                            _this.translate.get('lang.historyUseInfo', { countPwd: rule.value }).subscribe(function (res) {
                                otherRuleTextArr.push(res);
                            });
                        }
                    }
                });
                _this.ruleText = ruleTextArr.join(', ');
                _this.otherRuleText = otherRuleTextArr.join('<br/>');
            }, function (err) {
                _this.notificationService.handleErrors(err);
            });
        }
    };
    UserComponent.prototype.checkPasswordValidity = function (password) {
        var _this = this;
        this.handlePassword.error = true;
        if (!password.match(/[A-Z]/g) && this.passwordRules.complexityUpper.enabled) {
            this.handlePassword.errorMsg = 'lang.upperRequired';
        }
        else if (!password.match(/[0-9]/g) && this.passwordRules.complexityNumber.enabled) {
            this.handlePassword.errorMsg = 'lang.numberRequired';
        }
        else if (!password.match(/[^A-Za-z0-9]/g) && this.passwordRules.complexitySpecial.enabled) {
            this.handlePassword.errorMsg = 'lang.specialCharRequired';
        }
        else if (password.length < this.passwordRules.minLength.value && this.passwordRules.minLength.enabled) {
            this.translate.get('lang.minLengthChar', { charLength: this.passwordRules.minLength.value }).subscribe(function (res) {
                _this.handlePassword.errorMsg = res;
            });
        }
        else {
            this.handlePassword.error = false;
            this.handlePassword.errorMsg = '';
        }
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-administration-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/frontend/app/administration/user/user.component.html"),
            styles: [__webpack_require__(/*! ../administration.scss */ "./src/frontend/app/administration/administration.scss"), __webpack_require__(/*! ./user.component.scss */ "./src/frontend/app/administration/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, core_2.TranslateService, router_1.ActivatedRoute, router_1.Router, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService, material_1.MatDialog, auth_service_1.AuthService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "./src/frontend/app/administration/user/users-list.component.html":
/*!************************************************************************!*\
  !*** ./src/frontend/app/administration/user/users-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize>\n  <mat-sidenav #snav [disableClose]=\"!signaturesService.mobileMode\" [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" fixedInViewport=\"true\"\n    [opened]=\"!signaturesService.mobileMode\" [style.width.px]=\"350\">\n    <app-admin-sidebar [snavLeftComponent]=\"this.snav\" [snavRightComponent]=\"this.snavRight\"></app-admin-sidebar>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"mainView\">\n    <header class=\"header\">\n      <div class=\"header-title\">\n        <button *ngIf=\"signaturesService.mobileMode\" mat-icon-button (click)=\"this.snav.toggle();\">\n          <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\" style=\"font-size: 24px;\"></mat-icon>\n        </button>\n        <span><b>{{userList.length}}</b> {{'lang.manage_usersAlt' | translate}}</span>\n      </div>\n      <div>\n        <mat-paginator #paginator [length]=\"100\" [pageSize]=\"10\"></mat-paginator>\n      </div>\n    </header>\n    <div class=\"container\">\n      <div *ngIf=\"loading\" class=\"loader\">\n        <mat-spinner></mat-spinner>\n      </div>\n      <mat-table #table class=\"dataTable\" [dataSource]=\"dataSource\" matSort matSortActive=\"lastname\"\n        matSortDirection=\"asc\" [class.emptyTable]=\"dataSource.filteredData.length === 0\">\n        <ng-container matColumnDef=\"firstname\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'lang.firstname' | translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.firstname}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"lastname\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'lang.lastname' | translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.lastname}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"email\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>{{'lang.email' | translate}}</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.email}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef style=\"justify-content: end;\">\n            <mat-form-field>\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrer\">\n            </mat-form-field>\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" style=\"justify-content: flex-end;\">\n            <button mat-icon-button color=\"warn\" [disabled]=\"element.id === authService.user.id\" (click)=\"$event.stopPropagation();delete(element)\" title=\"{{'lang.delete' | translate}}\">\n              <mat-icon class=\"fa fa-trash-alt fa-2x\"></mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" routerLink=\"/administration/users/{{row.id}}\"\n          style=\"cursor:pointer;\"></mat-row>\n      </mat-table>\n      <div class=\"addButton\">\n        <button mat-stroked-button type=\"button\" class=\"btn blue\" routerLink=\"/administration/users/new\">{{'lang.userCreation' | translate}}</button>\n      </div>\n      <div class=\"noResult\" *ngIf=\"dataSource.filteredData.length === 0\">\n          {{'lang.noResult' | translate}}\n      </div>\n    </div>\n  </mat-sidenav-content>\n  <mat-sidenav #snavRight disableClose [mode]=\"signaturesService.mobileMode ? 'over': 'side'\" [opened]=\"false\"\n    fixedInViewport=\"true\" position='end'>\n  </mat-sidenav>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/frontend/app/administration/user/users-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/frontend/app/administration/user/users-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL2FkbWluaXN0cmF0aW9uL3VzZXIvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/frontend/app/administration/user/users-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/frontend/app/administration/user/users-list.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var confirm_component_1 = __webpack_require__(/*! ../../plugins/confirm.component */ "./src/frontend/app/plugins/confirm.component.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var ngx_pipes_1 = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
var auth_service_1 = __webpack_require__(/*! ../../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(http, translate, latinisePipe, dialog, signaturesService, notificationService, authService) {
        var _this = this;
        this.http = http;
        this.translate = translate;
        this.latinisePipe = latinisePipe;
        this.dialog = dialog;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.userList = [];
        this.loading = true;
        if (this.signaturesService.smartphoneMode) {
            this.displayedColumns = ['firstname', 'lastname', 'actions'];
        }
        else {
            this.displayedColumns = ['firstname', 'lastname', 'email', 'actions'];
        }
        this.dataSource = new material_1.MatTableDataSource(this.userList);
        this.dataSource.filterPredicate = function (data, filter) {
            var state = false;
            _this.displayedColumns.forEach(function (column) {
                if (data[column] !== undefined) {
                    var cleanData = _this.latinisePipe.transform(data[column].trim().toLowerCase());
                    var cleanFilter = _this.latinisePipe.transform(filter.trim().toLowerCase());
                    if (cleanData.indexOf(cleanFilter) !== -1) {
                        state = true;
                    }
                }
            });
            return state;
        };
    }
    UsersListComponent.prototype.updateDataTable = function () {
        this.dataSource.data = this.userList;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UsersListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('../rest/users' + '?mode=all')
            .pipe(operators_1.map(function (data) { return data.users; }), operators_1.finalize(function () { return _this.loading = false; }))
            .subscribe({
            next: function (data) {
                _this.userList = data;
                _this.updateDataTable();
            },
        });
    };
    UsersListComponent.prototype.delete = function (userToDelete) {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, { autoFocus: false, data: { mode: '', title: 'lang.confirmMsg', msg: '' } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'yes') {
                _this.loading = true;
                _this.http.delete('../rest/users/' + userToDelete.id)
                    .pipe(operators_1.finalize(function () { return _this.loading = false; }))
                    .subscribe({
                    next: function (data) {
                        var indexToDelete = _this.userList.findIndex(function (user) { return user.id === userToDelete.id; });
                        _this.userList.splice(indexToDelete, 1);
                        _this.updateDataTable();
                        _this.notificationService.success('lang.userDeleted');
                    },
                });
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], UsersListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], UsersListComponent.prototype, "sort", void 0);
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'app-administration-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/frontend/app/administration/user/users-list.component.html"),
            styles: [__webpack_require__(/*! ../administration.scss */ "./src/frontend/app/administration/administration.scss"), __webpack_require__(/*! ./users-list.component.scss */ "./src/frontend/app/administration/user/users-list.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, core_2.TranslateService, ngx_pipes_1.LatinisePipe, material_1.MatDialog, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService, auth_service_1.AuthService])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;


/***/ }),

/***/ "./src/frontend/app/app-material.module.ts":
/*!*************************************************!*\
  !*** ./src/frontend/app/app-material.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var menu_1 = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
var drag_drop_1 = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var paginator_fr_intl_1 = __webpack_require__(/*! ./plugins/paginator-fr-intl */ "./src/frontend/app/plugins/paginator-fr-intl.ts");
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MatSidenavModule,
                material_1.MatListModule,
                material_1.MatDialogModule,
                material_1.MatBottomSheetModule,
                material_1.MatRippleModule,
                drag_drop_1.DragDropModule,
                material_1.MatSnackBarModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatCardModule,
                material_1.MatInputModule,
                material_1.MatExpansionModule,
                menu_1.MatMenuModule,
                material_1.MatTabsModule,
                material_1.MatSliderModule,
                material_1.MatSelectModule,
                material_1.MatSlideToggleModule,
                material_1.MatBadgeModule,
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatAutocompleteModule,
                material_1.MatCheckboxModule
            ],
            exports: [
                material_1.MatSidenavModule,
                material_1.MatListModule,
                material_1.MatDialogModule,
                material_1.MatBottomSheetModule,
                material_1.MatRippleModule,
                drag_drop_1.DragDropModule,
                material_1.MatSnackBarModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatCardModule,
                material_1.MatInputModule,
                material_1.MatExpansionModule,
                menu_1.MatMenuModule,
                material_1.MatTabsModule,
                material_1.MatSliderModule,
                material_1.MatSelectModule,
                material_1.MatSlideToggleModule,
                material_1.MatBadgeModule,
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatAutocompleteModule,
                material_1.MatCheckboxModule
            ],
            providers: [
                { provide: material_1.MatPaginatorIntl, useValue: paginator_fr_intl_1.getFrenchPaginatorIntl() },
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./src/frontend/app/app-routing.module.ts":
/*!************************************************!*\
  !*** ./src/frontend/app/app-routing.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var auth_guard_1 = __webpack_require__(/*! ./service/auth.guard */ "./src/frontend/app/service/auth.guard.ts");
var administration_component_1 = __webpack_require__(/*! ./administration/home/administration.component */ "./src/frontend/app/administration/home/administration.component.ts");
var users_list_component_1 = __webpack_require__(/*! ./administration/user/users-list.component */ "./src/frontend/app/administration/user/users-list.component.ts");
var user_component_1 = __webpack_require__(/*! ./administration/user/user.component */ "./src/frontend/app/administration/user/user.component.ts");
var groups_list_component_1 = __webpack_require__(/*! ./administration/group/groups-list.component */ "./src/frontend/app/administration/group/groups-list.component.ts");
var group_component_1 = __webpack_require__(/*! ./administration/group/group.component */ "./src/frontend/app/administration/group/group.component.ts");
var connection_component_1 = __webpack_require__(/*! ./administration/connection/connection.component */ "./src/frontend/app/administration/connection/connection.component.ts");
var ldap_list_component_1 = __webpack_require__(/*! ./administration/connection/ldap/ldap-list.component */ "./src/frontend/app/administration/connection/ldap/ldap-list.component.ts");
var ldap_component_1 = __webpack_require__(/*! ./administration/connection/ldap/ldap.component */ "./src/frontend/app/administration/connection/ldap/ldap.component.ts");
var sendmail_component_1 = __webpack_require__(/*! ./administration/sendmail/sendmail.component */ "./src/frontend/app/administration/sendmail/sendmail.component.ts");
var document_component_1 = __webpack_require__(/*! ./document/document.component */ "./src/frontend/app/document/document.component.ts");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/frontend/app/login/login.component.ts");
var forgotPassword_component_1 = __webpack_require__(/*! ./login/forgotPassword/forgotPassword.component */ "./src/frontend/app/login/forgotPassword/forgotPassword.component.ts");
var updatePassword_component_1 = __webpack_require__(/*! ./login/updatePassword/updatePassword.component */ "./src/frontend/app/login/updatePassword/updatePassword.component.ts");
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: 'administration', canActivate: [auth_guard_1.AuthGuard], component: administration_component_1.AdministrationComponent },
                    { path: 'administration/users', canActivate: [auth_guard_1.AuthGuard], component: users_list_component_1.UsersListComponent },
                    { path: 'administration/users/new', canActivate: [auth_guard_1.AuthGuard], component: user_component_1.UserComponent },
                    { path: 'administration/users/:id', canActivate: [auth_guard_1.AuthGuard], component: user_component_1.UserComponent },
                    { path: 'administration/groups', canActivate: [auth_guard_1.AuthGuard], component: groups_list_component_1.GroupsListComponent },
                    { path: 'administration/groups/new', canActivate: [auth_guard_1.AuthGuard], component: group_component_1.GroupComponent },
                    { path: 'administration/groups/:id', canActivate: [auth_guard_1.AuthGuard], component: group_component_1.GroupComponent },
                    { path: 'administration/connections', canActivate: [auth_guard_1.AuthGuard], component: connection_component_1.ConnectionComponent },
                    { path: 'administration/connections/ldaps', canActivate: [auth_guard_1.AuthGuard], component: ldap_list_component_1.LdapListComponent },
                    { path: 'administration/connections/ldaps/new', canActivate: [auth_guard_1.AuthGuard], component: ldap_component_1.LdapComponent },
                    { path: 'administration/connections/ldaps/:id', canActivate: [auth_guard_1.AuthGuard], component: ldap_component_1.LdapComponent },
                    { path: 'administration/emailConfiguration', canActivate: [auth_guard_1.AuthGuard], component: sendmail_component_1.SendmailComponent },
                    { path: 'documents/:id', canActivate: [auth_guard_1.AuthGuard], component: document_component_1.DocumentComponent },
                    { path: 'documents', canActivate: [auth_guard_1.AuthGuard], component: document_component_1.DocumentComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'forgot-password', component: forgotPassword_component_1.ForgotPasswordComponent },
                    { path: 'update-password', component: updatePassword_component_1.UpdatePasswordComponent },
                    { path: '**', redirectTo: 'login', pathMatch: 'full' },
                ]),
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/frontend/app/app.component.html":
/*!*********************************************!*\
  !*** ./src/frontend/app/app.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/frontend/app/app.component.scss":
/*!*********************************************!*\
  !*** ./src/frontend/app/app.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/frontend/app/app.component.ts":
/*!*******************************************!*\
  !*** ./src/frontend/app/app.component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var signatures_service_1 = __webpack_require__(/*! ./service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var notification_service_1 = __webpack_require__(/*! ./service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var auth_service_1 = __webpack_require__(/*! ./service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var local_storage_service_1 = __webpack_require__(/*! ./service/local-storage.service */ "./src/frontend/app/service/local-storage.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(translate, http, signaturesService, sanitizer, cookieService, notificationService, dialog, iconReg, authService, localStorage) {
        this.translate = translate;
        this.http = http;
        this.signaturesService = signaturesService;
        this.sanitizer = sanitizer;
        this.cookieService = cookieService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.authService = authService;
        this.localStorage = localStorage;
        //iconReg.addSvgIcon('maarchLogo', sanitizer.bypassSecurityTrustResourceUrl('../src/frontend/assets/logo_white.svg'));
        iconReg.addSvgIcon('etapLogo', sanitizer.bypassSecurityTrustResourceUrl('../src/frontend/assets/etap_logo.svg'));
        if (this.cookieService.check('maarchParapheurLang')) {
            translate.setDefaultLang('en');
        }
        else {
            this.cookieService.set('maarchParapheurLang', 'en');
            translate.setDefaultLang('en');
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/frontend/app/app.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/frontend/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            http_1.HttpClient,
            signatures_service_1.SignaturesContentService,
            platform_browser_1.DomSanitizer,
            ngx_cookie_service_1.CookieService,
            notification_service_1.NotificationService,
            material_1.MatDialog, material_1.MatIconRegistry,
            auth_service_1.AuthService,
            local_storage_service_1.LocalStorageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/frontend/app/app.module.ts":
/*!****************************************!*\
  !*** ./src/frontend/app/app.module.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_2 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var auth_interceptor_service_1 = __webpack_require__(/*! ./service/auth-interceptor.service */ "./src/frontend/app/service/auth-interceptor.service.ts");
// import ngx-translate and the http loader
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var CustomHammerConfig = /** @class */ (function (_super) {
    __extends(CustomHammerConfig, _super);
    function CustomHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'pinch': { enable: false },
            'rotate': { enable: false }
        };
        return _this;
    }
    return CustomHammerConfig;
}(platform_browser_2.HammerGestureConfig));
exports.CustomHammerConfig = CustomHammerConfig;
var ngx_scroll_event_1 = __webpack_require__(/*! ngx-scroll-event */ "./node_modules/ngx-scroll-event/index.js");
var angular2_draggable_1 = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var ngx_pipes_1 = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
var ngx_pipes_2 = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
var app_material_module_1 = __webpack_require__(/*! ./app-material.module */ "./src/frontend/app/app-material.module.ts");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/frontend/app/app-routing.module.ts");
// COMPONENTS
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/frontend/app/app.component.ts");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/frontend/app/login/login.component.ts");
var forgotPassword_component_1 = __webpack_require__(/*! ./login/forgotPassword/forgotPassword.component */ "./src/frontend/app/login/forgotPassword/forgotPassword.component.ts");
var signatures_component_1 = __webpack_require__(/*! ./signatures/signatures.component */ "./src/frontend/app/signatures/signatures.component.ts");
var pad_component_1 = __webpack_require__(/*! ./pad/pad.component */ "./src/frontend/app/pad/pad.component.ts");
var angular2_signaturepad_1 = __webpack_require__(/*! angular2-signaturepad */ "./node_modules/angular2-signaturepad/index.js");
var drawer_component_1 = __webpack_require__(/*! ./drawer/drawer.component */ "./src/frontend/app/drawer/drawer.component.ts");
var document_component_1 = __webpack_require__(/*! ./document/document.component */ "./src/frontend/app/document/document.component.ts");
var document_sign_list_component_1 = __webpack_require__(/*! ./documentSignList/document-sign-list.component */ "./src/frontend/app/documentSignList/document-sign-list.component.ts");
var document_note_list_component_1 = __webpack_require__(/*! ./documentNoteList/document-note-list.component */ "./src/frontend/app/documentNoteList/document-note-list.component.ts");
var document_note_pad_component_1 = __webpack_require__(/*! ./documentNotePad/document-note-pad.component */ "./src/frontend/app/documentNotePad/document-note-pad.component.ts");
var sidebar_component_1 = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/frontend/app/sidebar/sidebar.component.ts");
var profile_component_1 = __webpack_require__(/*! ./profile/profile.component */ "./src/frontend/app/profile/profile.component.ts");
var confirm_modal_component_1 = __webpack_require__(/*! ./modal/confirm-modal.component */ "./src/frontend/app/modal/confirm-modal.component.ts");
var warn_modal_component_1 = __webpack_require__(/*! ./modal/warn-modal.component */ "./src/frontend/app/modal/warn-modal.component.ts");
var success_info_valid_component_1 = __webpack_require__(/*! ./modal/success-info-valid.component */ "./src/frontend/app/modal/success-info-valid.component.ts");
var reject_info_component_1 = __webpack_require__(/*! ./modal/reject-info.component */ "./src/frontend/app/modal/reject-info.component.ts");
var overlay_component_1 = __webpack_require__(/*! ./overlay/overlay.component */ "./src/frontend/app/overlay/overlay.component.ts");
var visa_workflow_component_1 = __webpack_require__(/*! ./document/visa-workflow/visa-workflow.component */ "./src/frontend/app/document/visa-workflow/visa-workflow.component.ts");
var document_list_component_1 = __webpack_require__(/*! ./document/document-list/document-list.component */ "./src/frontend/app/document/document-list/document-list.component.ts");
var main_document_detail_component_1 = __webpack_require__(/*! ./document/main-document-detail/main-document-detail.component */ "./src/frontend/app/document/main-document-detail/main-document-detail.component.ts");
var updatePassword_component_1 = __webpack_require__(/*! ./login/updatePassword/updatePassword.component */ "./src/frontend/app/login/updatePassword/updatePassword.component.ts");
// ADMINISTRATION
var admin_sidebar_component_1 = __webpack_require__(/*! ./sidebar/administration/admin-sidebar.component */ "./src/frontend/app/sidebar/administration/admin-sidebar.component.ts");
var administration_component_1 = __webpack_require__(/*! ./administration/home/administration.component */ "./src/frontend/app/administration/home/administration.component.ts");
var users_list_component_1 = __webpack_require__(/*! ./administration/user/users-list.component */ "./src/frontend/app/administration/user/users-list.component.ts");
var user_component_1 = __webpack_require__(/*! ./administration/user/user.component */ "./src/frontend/app/administration/user/user.component.ts");
var connection_component_1 = __webpack_require__(/*! ./administration/connection/connection.component */ "./src/frontend/app/administration/connection/connection.component.ts");
var ldap_list_component_1 = __webpack_require__(/*! ./administration/connection/ldap/ldap-list.component */ "./src/frontend/app/administration/connection/ldap/ldap-list.component.ts");
var ldap_component_1 = __webpack_require__(/*! ./administration/connection/ldap/ldap.component */ "./src/frontend/app/administration/connection/ldap/ldap.component.ts");
var sendmail_component_1 = __webpack_require__(/*! ./administration/sendmail/sendmail.component */ "./src/frontend/app/administration/sendmail/sendmail.component.ts");
var groups_list_component_1 = __webpack_require__(/*! ./administration/group/groups-list.component */ "./src/frontend/app/administration/group/groups-list.component.ts");
var group_component_1 = __webpack_require__(/*! ./administration/group/group.component */ "./src/frontend/app/administration/group/group.component.ts");
// SERVICES
var notification_service_1 = __webpack_require__(/*! ./service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var signatures_service_1 = __webpack_require__(/*! ./service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var filters_service_1 = __webpack_require__(/*! ./service/filters.service */ "./src/frontend/app/service/filters.service.ts");
// OTHERS
var confirm_component_1 = __webpack_require__(/*! ./plugins/confirm.component */ "./src/frontend/app/plugins/confirm.component.ts");
var alert_component_1 = __webpack_require__(/*! ./plugins/alert.component */ "./src/frontend/app/plugins/alert.component.ts");
var autocomplete_component_1 = __webpack_require__(/*! ./plugins/autocomplete/autocomplete.component */ "./src/frontend/app/plugins/autocomplete/autocomplete.component.ts");
var sorting_pipe_1 = __webpack_require__(/*! ./plugins/sorting.pipe */ "./src/frontend/app/plugins/sorting.pipe.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                forgotPassword_component_1.ForgotPasswordComponent,
                updatePassword_component_1.UpdatePasswordComponent,
                signatures_component_1.SignaturesComponent,
                pad_component_1.SignaturePadPageComponent,
                drawer_component_1.DrawerComponent,
                document_component_1.DocumentComponent,
                document_sign_list_component_1.DocumentSignListComponent,
                document_note_list_component_1.DocumentNoteListComponent,
                document_note_pad_component_1.DocumentNotePadComponent,
                sidebar_component_1.SidebarComponent,
                warn_modal_component_1.WarnModalComponent,
                confirm_modal_component_1.ConfirmModalComponent,
                success_info_valid_component_1.SuccessInfoValidBottomSheetComponent,
                reject_info_component_1.RejectInfoBottomSheetComponent,
                profile_component_1.ProfileComponent,
                notification_service_1.CustomSnackbarComponent,
                overlay_component_1.OverlayComponent,
                visa_workflow_component_1.VisaWorkflowComponent,
                document_list_component_1.DocumentListComponent,
                main_document_detail_component_1.MainDocumentDetailComponent,
                administration_component_1.AdministrationComponent,
                users_list_component_1.UsersListComponent,
                user_component_1.UserComponent,
                confirm_component_1.ConfirmComponent,
                alert_component_1.AlertComponent,
                admin_sidebar_component_1.AdminSidebarComponent,
                connection_component_1.ConnectionComponent,
                ldap_list_component_1.LdapListComponent,
                ldap_component_1.LdapComponent,
                sendmail_component_1.SendmailComponent,
                groups_list_component_1.GroupsListComponent,
                group_component_1.GroupComponent,
                autocomplete_component_1.PluginAutocompleteComponent,
                sorting_pipe_1.SortPipe
            ],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                http_1.HttpClientModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient]
                    }
                }),
                angular2_signaturepad_1.SignaturePadModule,
                ngx_scroll_event_1.ScrollEventModule,
                ngx_pipes_1.NgPipesModule,
                angular2_draggable_1.AngularDraggableModule,
                app_material_module_1.AppMaterialModule,
                app_routing_module_1.AppRoutingModule,
            ],
            entryComponents: [
                notification_service_1.CustomSnackbarComponent,
                warn_modal_component_1.WarnModalComponent,
                confirm_modal_component_1.ConfirmModalComponent,
                success_info_valid_component_1.SuccessInfoValidBottomSheetComponent,
                reject_info_component_1.RejectInfoBottomSheetComponent,
                signatures_component_1.SignaturesComponent,
                confirm_component_1.ConfirmComponent,
                alert_component_1.AlertComponent
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: auth_interceptor_service_1.AuthInterceptor, multi: true },
                signatures_service_1.SignaturesContentService,
                filters_service_1.FiltersService,
                notification_service_1.NotificationService,
                {
                    provide: platform_browser_2.HAMMER_GESTURE_CONFIG,
                    useClass: CustomHammerConfig
                },
                ngx_cookie_service_1.CookieService,
                ngx_pipes_2.LatinisePipe
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
var TranslateBackendHttpLoader = /** @class */ (function () {
    function TranslateBackendHttpLoader(http) {
        this.http = http;
    }
    /**
     * Gets the translations from the server
     * @param lang
     * @returns {any}
     */
    TranslateBackendHttpLoader.prototype.getTranslation = function (lang) {
        return this.http.get("../rest/languages/en");
    };
    return TranslateBackendHttpLoader;
}());
exports.TranslateBackendHttpLoader = TranslateBackendHttpLoader;
// For traductions
function HttpLoaderFactory(http) {
    return new TranslateBackendHttpLoader(http);
}
exports.HttpLoaderFactory = HttpLoaderFactory;


/***/ }),

/***/ "./src/frontend/app/document/document-list/document-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/frontend/app/document/document-list/document-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-content\" *ngIf=\"!loading\">\n    <div class=\"panel-header\">\n        <button *ngIf=\"signaturesService.mobileMode\" class=\"closePanel\" mat-icon-button type=\"button\"\n            (tap)=\"snavRightComponent.close();\">\n            <mat-icon fontSet=\"fas\" fontIcon=\"fa-arrow-right fa-2x\"></mat-icon>\n        </button>\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-file fa-2x\"></mat-icon> <b>{{docList.length}}</b>&nbsp;{{'lang.attachedElements' | translate}}\n    </div>\n    <div class=\"pjListContent\">\n        <div *ngFor=\"let doc of docList;let i=index\" style=\"position: relative;\">\n            <div>\n                <img *ngIf=\"doc.imgContent[1] !== undefined\" (click)=\"loadDoc(i)\"\n                    [src]=\"sanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+doc.imgContent[1])\"\n                    style=\"cursor:pointer;padding:0;margin-top: 30px;width: 100%;height: auto;border-radius: 4px;transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);border: solid 1px #E0E0E0;\"\n                    [class.current]=\"i == currentDocId\" />\n                <div *ngIf=\"doc.imgContent[1] === undefined\"\n                    style=\"width: 380px;height:380px;z-index: 2;display: flex;background: #fffc;justify-content: center;align-items: center;\">\n                    <mat-spinner></mat-spinner>\n                </div>\n            </div>\n            <div class=\"pjToolsContent\">\n                {{doc.title}}&nbsp;<span class=\"red\" *ngIf=\"i == 0\">({{'lang.mainDocument' | translate}})</span><span class=\"red\" *ngIf=\"i > 0\">({{'lang.attachment' | translate}})</span>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/frontend/app/document/document-list/document-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/frontend/app/document/document-list/document-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item {\n  height: auto !important;\n  text-align: center; }\n\n.mat-card {\n  box-shadow: none;\n  border: solid 1px #E0E0E0; }\n\n.infosPj {\n  background: #F9F9F9;\n  border-top: solid 1px rgba(0, 0, 0, 0.12);\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  padding: 5px; }\n\n.infosPj ::ng-deep.mat-expansion-panel-body {\n    padding: 0px; }\n\n.infosPj ::ng-deep.mat-form-field-label {\n    color: #135F7F; }\n\n.subInfos {\n  display: block;\n  font-size: 12px;\n  color: #135F7F;\n  font-weight: bold; }\n\n.subInfosBottom {\n  font-size: 12px;\n  color: #666; }\n\n.mat-icon {\n  height: auto; }\n\n.pjToolsContent {\n  position: absolute;\n  border: solid 1px #E0E0E0;\n  border-bottom-left-radius: 5px;\n  background: white;\n  padding: 10px;\n  font-weight: 600;\n  color: #135F7F;\n  font-size: 14px;\n  top: 30px; }\n\n.current {\n  box-shadow: 0px 0px 20px 0px #656565; }\n\n.panel-header {\n  box-shadow: 0px 0px 10px 0px #656565;\n  color: white;\n  background: #135F7F;\n  height: 65px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  font-size: 20px;\n  align-items: center; }\n\n.pjListContent {\n  padding-left: 30px;\n  padding-right: 30px;\n  flex: 1;\n  overflow: auto; }\n\n.panel-content {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n\n.closePanel {\n  position: absolute;\n  left: 0px;\n  font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvZG9jdW1lbnQvZG9jdW1lbnQtbGlzdC9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxcZG9jdW1lbnRcXGRvY3VtZW50LWxpc3RcXGRvY3VtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvZnJvbnRlbmQvYXBwL2RvY3VtZW50L2RvY3VtZW50LWxpc3QvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxjc3NcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZLEVBQUE7O0FBTmhCO0lBU1EsWUFBWSxFQUFBOztBQVRwQjtJQWFRLGNDeEJTLEVBQUE7O0FENEJqQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0MvQmE7RURnQ2IsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFHYjtFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJDL0RhO0VEZ0ViLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL2RvY3VtZW50L2RvY3VtZW50LWxpc3QvZG9jdW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Nzcy92YXJzLnNjc3MnO1xuXG4ubWF0LWxpc3QtaXRlbSB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWNhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0UwRTBFMDtcbn1cblxuLmluZm9zUGoge1xuICAgIGJhY2tncm91bmQ6ICNGOUY5Rjk7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICA6Om5nLWRlZXAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG59XG5cbi5zdWJJbmZvcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1YkluZm9zQm90dG9tIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2NjY7XG59XG5cbi5tYXQtaWNvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucGpUb29sc0NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRTBFMEUwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxMzVGN0Y7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRvcDogMzBweDtcbn1cblxuLmN1cnJlbnQge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggIzY1NjU2NTtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCAjNjU2NTY1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGpMaXN0Q29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi5wYW5lbC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2xvc2VQYW5lbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59IiwiJGNvbG9yLW1haW46ICM0RjRGNEY7IC8vIGRlZmF1bHQgY29sb3IgaW4gYXBwbGljYXRpb25cbiRwcmltYXJ5OiAjMTM1RjdGOyAvLyBtYWluIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG4kYWNjZW50OiAjMkVDQzcxOyAvLyBhY2NlbnQgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb24gKGxpa2Ugc3VjY2VzcyBidXR0b25zKVxuJHdhcm46IHJnYigyMzEsIDc2LCA2MCk7IC8vIHdhcm5pbmcgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cblxuLy8gV0FSTklORyAhIFlPVSBNVVNUIFJFQ09NUElMQVRFIG1hYXJjaC1tYXRlcmlhbC5zY3NzIElGIFZBTFVFUyBDSEFOR0VTIl19 */"

/***/ }),

/***/ "./src/frontend/app/document/document-list/document-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/frontend/app/document/document-list/document-list.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(http, signaturesService, sanitizer) {
        this.http = http;
        this.signaturesService = signaturesService;
        this.sanitizer = sanitizer;
        this.loading = false;
        this.triggerEvent = new core_1.EventEmitter();
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.docList.forEach(function (element, index) {
            if (element.imgContent[1] === undefined && index > 0) {
                _this.http.get('../rest/attachments/' + element.id + '/thumbnails/1')
                    .subscribe(function (data) {
                    element.imgContent[1] = data.fileContent;
                });
            }
        });
    };
    DocumentListComponent.prototype.loadDoc = function (id) {
        this.triggerEvent.emit(id);
        if (this.signaturesService.mobileMode) {
            this.snavRightComponent.close();
        }
    };
    __decorate([
        core_1.Input('docList'),
        __metadata("design:type", Object)
    ], DocumentListComponent.prototype, "docList", void 0);
    __decorate([
        core_1.Input('currentDocId'),
        __metadata("design:type", Object)
    ], DocumentListComponent.prototype, "currentDocId", void 0);
    __decorate([
        core_1.Input('snavRightComponent'),
        __metadata("design:type", material_1.MatSidenav)
    ], DocumentListComponent.prototype, "snavRightComponent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DocumentListComponent.prototype, "triggerEvent", void 0);
    DocumentListComponent = __decorate([
        core_1.Component({
            selector: 'app-document-list',
            template: __webpack_require__(/*! ./document-list.component.html */ "./src/frontend/app/document/document-list/document-list.component.html"),
            styles: [__webpack_require__(/*! ./document-list.component.scss */ "./src/frontend/app/document/document-list/document-list.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, signatures_service_1.SignaturesContentService, platform_browser_1.DomSanitizer])
    ], DocumentListComponent);
    return DocumentListComponent;
}());
exports.DocumentListComponent = DocumentListComponent;


/***/ }),

/***/ "./src/frontend/app/document/document.component.html":
/*!***********************************************************!*\
  !*** ./src/frontend/app/document/document.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"enterApp\" class=\"enterApp\" [@enterApp]>\n    <mat-icon svgIcon=\"maarchLogo\" class=\"maarchLogo\"></mat-icon>\n</div>\n<mat-sidenav-container autosize>\n    <mat-sidenav #snav disableClose [mode]=\"signaturesService.mobileMode ? 'over': 'side'\"\n        [opened]=\"!signaturesService.mobileMode || freezeSidenavClose\" fixedInViewport=\"true\"\n        [disableClose]=\"freezeSidenavClose\" [style.width.px]=\"350\">\n        <app-sidebar [snavLeftComponent]=\"this.snav\" [snavRightComponent]=\"this.snavRight\"></app-sidebar>\n    </mat-sidenav>\n    <mat-sidenav-content class=\"mainView\">\n        <ng-container *ngIf=\"mainDocument.notes !== undefined && mainDocument.notes !== null && !this.signaturesService.annotationMode && !freezeSidenavClose\">\n            <button *ngIf=\"!expandedNote\" mat-fab color=\"primary\" [title]=\"'lang.expandNote' | translate\" (click)=\"expandedNote = true;\" style=\"top: 150px;right: 40px;z-index:2;position:absolute;\">\n                <mat-icon class=\"far fa-sticky-note\" style=\"height:auto;font-size: 25px;\"></mat-icon>\n              </button>\n    \n            <div cdkDrag cdkDragBoundary=\".mainView\" *ngIf=\"expandedNote\"\n                class=\"note\">\n                <div class=\"note-title\">\n                    <i class=\"far fa-sticky-note\" style=\"padding-right: 5px;\"></i>\n                    <span style=\"flex:1;\">{{'lang.note' | translate}}</span>\n                    <i class=\"fa fa-minus-square\" style=\"cursor: pointer;\" (click)=\"expandedNote = false;\" [title]=\"'lang.collapseNote' | translate\"></i>\n                </div>\n                <div class=\"note-creator\">\n                    {{mainDocument.notes.creator}} : \n                </div>\n                <div class=\"note-content\">\n                    {{mainDocument.notes.value}}\n                </div>\n            </div>\n        </ng-container>\n        <div *ngIf=\"signaturesService.mainLoading\"\n            style=\"position: absolute;z-index: 2;display: flex;background: #fffc;width: 100%;height: 100%;justify-content: center;align-items: center;\">\n            <mat-spinner></mat-spinner>\n        </div>\n        <header class=\"header\" *ngIf=\"!this.signaturesService.annotationMode && !freezeSidenavClose\" [@slideDown]>\n            <article class=\"header-infos\">\n                <section class=\"header-action\">\n                    <button *ngIf=\"signaturesService.mobileMode\" mat-icon-button (click)=\"this.snav.toggle();\"\n                        style=\"width:70px;\">\n                        <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\"></mat-icon>\n                    </button>\n                    <button mat-button (click)=\"openMainDocumentDetail();\">\n                        <i class=\"fas fa-info-circle fa-2x\"></i><span\n                            style=\"display: block;line-height: 10px;\">{{'lang.informations' | translate}}</span>\n                    </button>\n                </section>\n                <section class=\"header-action\">\n                    <button mat-button class=\"header-action-button\"\n                        *ngIf=\"mainDocument.linkedDocuments !== undefined && mainDocument.linkedDocuments.length > 0\"\n                        [matMenuTriggerFor]=\"assocDoc\">\n                        <i class=\"fas fa-folder-open fa-2x\" [matBadge]=\"mainDocument.linkedDocuments.length\"></i><span\n                            style=\"display: block;line-height: 15px;\">{{'lang.associatedDocuments' | translate | ucfirst}}</span>\n                    </button>\n                    <mat-menu #assocDoc=\"matMenu\">\n                        <button mat-menu-item *ngFor=\"let doc of mainDocument.linkedDocuments\" (click)=\"gotTo(doc.id)\"\n                            style=\"height: auto;line-height: inherit;font-family: 'lato', sans-serif;\">\n                            <div style=\"font-size: 12px;color: #4F4F4F;padding-top: 10px;padding-bottom: 10px;\">\n                                <div>{{doc.reference}}</div>\n                                <div style=\"font-weight: 600;color: #135F7F;font-size: 14px;\">{{doc.title}}</div>\n                            </div>\n                        </button>\n                    </mat-menu>\n                    <button mat-button class=\"header-action-button\" (click)=\"openDocumentList();\">\n                        <i class=\"fas fa-paperclip fa-2x\" [matBadge]=\"mainDocument.attachments.length + 1\"></i><span\n                            style=\"display: block;line-height: 15px;\">{{'lang.attachedElements' | translate | ucfirst}}</span>\n                    </button>\n                    <button mat-button class=\"header-action-button\" (click)=\"openVisaWorkflow();\">\n                        <i class=\"fas fa-list-ol fa-2x\" [matBadge]=\"mainDocument.workflow.length\"></i><span\n                            style=\"display: block;line-height: 15px;\">{{'lang.circuit' | translate}}</span>\n                    </button>\n                    <button mat-button class=\"header-action-button\" [matMenuTriggerFor]=\"menu\">\n                        <i class=\"fas fa-cog fa-2x\"></i><span\n                            style=\"display: block;line-height: 15px;\">{{'lang.actions' | translate}}</span>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button [disabled]=\"checkEmptiness()\" mat-menu-item\n                            (click)=\"removeTags();\">{{'lang.deleteAll' | translate}}</button>\n                        <button [disabled]=\"checkEmptyNote()\" mat-menu-item\n                            (click)=\"undoTag();\">{{'lang.cancelPreviousNote' | translate}}</button>\n                    </mat-menu>\n                </section>\n            </article>\n        </header>\n        <mat-card class=\"substitutedInformations\"\n            *ngIf=\"authService.user.substitute !== null && !this.signaturesService.annotationMode && docList[currentDoc]\">\n            <div>{{'lang.substitutionInfo' | translate}}</div>\n        </mat-card>\n        <app-overlay *ngIf=\"this.signaturesService.annotationMode\" [appDocumentNotePad]=\"appDocumentNotePad\">\n        </app-overlay>\n        <ng-container *ngIf=\"!freezeSidenavClose && !loadingUI\">\n            <button class=\"btn-previous\" (tap)=\"prevPage()\"\n                *ngIf=\"pageNum > 1 && !this.signaturesService.annotationMode\"><i\n                    class=\"fas fa-chevron-left fa-3x\"></i></button>\n            <button class=\"btn-next\" (tap)=\"nextPage()\"\n                *ngIf=\"pageNum < totalPages && !this.signaturesService.annotationMode\"><i\n                    class=\"fas fa-chevron-right fa-3x\"></i></button>\n        </ng-container>\n\n        <div [style.width]=\"widthDoc\" style=\"height:100%;overflow:hidden;background:grey;\">\n            <div *ngIf=\"!resetDragPos\" #dragElem class=\"example-box\" cdkDragLockAxis=\"y\" cdkDrag\n                [cdkDragDisabled]=\"this.signaturesService.annotationMode\"\n                style=\"width: 100%;transform: translate3d(0px, 80px, 0px)\" (cdkDragEnded)=\"testDrag($event)\">\n                <app-document-note-list (tap)=\"addAnnotation($event)\" *ngIf=\"currentDoc == 0\">\n                </app-document-note-list>\n                <app-document-sign-list *ngIf=\"currentDoc == 0\"></app-document-sign-list>\n                <img *ngIf=\"!signaturesService.mainLoading && !freezeSidenavClose\" (tap)=\"addAnnotation($event)\"\n                    id=\"snapshotPdf\"\n                    [src]=\"sanitizer.bypassSecurityTrustUrl('data:image/png;base64, '+docList[currentDoc].imgContent[pageNum])\"\n                    style=\"width:100%;\" class=\"zoom\" />\n                <app-document-note-pad (triggerEvent)=\"zoomForView()\" #appDocumentNotePad *ngIf=\"currentDoc == 0\">\n                </app-document-note-pad>\n            </div>\n        </div>\n\n        <section class=\"page-info\" *ngIf=\"!this.signaturesService.annotationMode && docList[currentDoc]\">\n            <div class=\"page-info-doc\">{{docList[currentDoc].title}}</div>\n            <div class=\"page-info-page\">{{'lang.page' | translate}} {{ pageNum }} / {{ totalPages }}</div>\n        </section>\n        <footer class=\"footer\" *ngIf=\"!this.signaturesService.annotationMode && !freezeSidenavClose && currentDoc === 0\"\n            [@slideUp]>\n            <ng-container *ngFor=\"let action of actionsList;\">\n                <button [style.color]=\"action.color\" [style.borderColor]=\"action.color\" class=\"btn\"\n                    (click)=\"launchEvent(action)\"><i class=\"{{action.logo}} fa-2x\"></i>{{action.label | translate}}\n                </button>\n            </ng-container>\n        </footer>\n        <app-drawer></app-drawer>\n    </mat-sidenav-content>\n    <mat-sidenav #snavRight disableClose [mode]=\"this.signaturesService.mobileMode ? 'over': 'side'\"\n        [opened]=\"!signaturesService.mobileMode\" fixedInViewport=\"true\"\n        [style.width]=\"signaturesService.sideNavRigtDatas.width\" position='end'\n        [disableClose]='signaturesService.sideNavRigtDatas.locked' (closedStart)=\"backToDetails()\">\n        <app-my-profile *ngIf=\"signaturesService.sideNavRigtDatas.mode == 'profile'\" [snavLeftComponent]=\"this.snav\"\n            [snavRightComponent]=\"this.snavRight\"></app-my-profile>\n        <app-visa-workflow [visaWorkflow]=\"mainDocument.workflow\" [snavRightComponent]=\"this.snavRight\"\n            *ngIf=\"signaturesService.sideNavRigtDatas.mode == 'visaWorkflow'\"></app-visa-workflow>\n        <app-document-list #appDocumentList [currentDocId]=\"currentDoc\" [snavRightComponent]=\"this.snavRight\"\n            [docList]=\"docList\" *ngIf=\"signaturesService.sideNavRigtDatas.mode == 'documentList'\"\n            (triggerEvent)=\"loadDoc($event)\"></app-document-list>\n        <app-main-document-detail #appMainDocumentDetail [snavRightComponent]=\"this.snavRight\"\n            [mainDocument]=\"mainDocument\" *ngIf=\"signaturesService.sideNavRigtDatas.mode == 'mainDocumentDetail'\">\n        </app-main-document-detail>\n    </mat-sidenav>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/frontend/app/document/document.component.scss":
/*!***********************************************************!*\
  !*** ./src/frontend/app/document/document.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".enterApp {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: #135F7F;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.maarchLogo {\n  position: absolute;\n  transition: all 1s ease-in-out;\n  width: 250px;\n  height: auto;\n  padding-bottom: 10px; }\n\n.mainView {\n  height: 100%;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden; }\n\n.header button {\n  height: 70px;\n  width: auto; }\n\n.header button mat-icon {\n  height: auto;\n  width: auto;\n  font-size: 40px; }\n\n.article {\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  flex: 1;\n  top: 0;\n  left: 0; }\n\n.canvas-wrapper {\n  position: relative;\n  padding-bottom: 120px; }\n\ncanvas {\n  margin: 0 auto;\n  display: block; }\n\n.header {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  /*&-left\n      position absolute\n      top 15px\n      left -60px*/ }\n\n.header-action {\n    justify-content: center;\n    display: flex;\n    color: #135F7F; }\n\n.header-action-button {\n      white-space: initial;\n      word-break: break-word;\n      width: 135px !important; }\n\n.header-infos {\n    background: #F1F4F4;\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    width: 100%;\n    padding-top: 12px;\n    padding-bottom: 7px;\n    position: relative;\n    overflow-y: hidden;\n    overflow-x: auto; }\n\n.header-info {\n    border-right: 1px solid #979797;\n    width: 200px;\n    height: 60px;\n    font-size: 12px;\n    padding-left: 20px; }\n\n.header-info:last-of-type {\n      border: none; }\n\n.header-info p {\n      margin: 0;\n      padding: 0; }\n\n.header-expand {\n    width: 70%;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 25px;\n    border: solid 1px #F1F4F4; }\n\n.header-expand .mat-form-field {\n      padding-top: 10px; }\n\n.header-expand ::ng-deep.mat-expansion-panel {\n      box-shadow: none; }\n\n.header-expand ::ng-deep.mat-form-field-label {\n      color: #135F7F; }\n\n.header-expand ::ng-deep .mat-form-field-underline {\n      display: none; }\n\n.header-expand-content {\n      width: 33%;\n      display: inline-block; }\n\n.header-expand-content input {\n        text-overflow: ellipsis; }\n\n.header-expand-content .mat-form-field {\n        width: 100%; }\n\n.header-expand input:disabled {\n      opacity: 1;\n      color: #666; }\n\n.header-expand div {\n      flex: 1;\n      font-size: 12px; }\n\n.page-info {\n  position: absolute;\n  bottom: 70px;\n  height: 30px;\n  width: auto;\n  max-width: 70%;\n  color: #9B9B9B;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.8;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.page-info-doc {\n    max-width: 80%;\n    background-color: #F1F4F4;\n    border-radius: 14px;\n    padding: 0 20px;\n    z-index: 1;\n    white-space: pre;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.page-info-page {\n    text-align: center;\n    border-radius: 0 14px 14px 0;\n    padding: 0 20px;\n    background: #fff;\n    border: 1px solid #ECF0F1;\n    margin-left: -15px;\n    height: 28px;\n    white-space: pre; }\n\n.btn-next {\n  color: #666;\n  background: #c6c6c680;\n  border-radius: 20px;\n  padding: 10px;\n  border: none;\n  outline: none;\n  position: absolute;\n  right: 25px;\n  top: 50%;\n  cursor: pointer;\n  z-index: 1; }\n\n.btn-next.disabled {\n    cursor: not-allowed; }\n\n.btn-previous {\n  color: #666;\n  background: #c6c6c680;\n  border-radius: 20px;\n  padding: 10px;\n  border: none;\n  outline: none;\n  position: absolute;\n  left: 25px;\n  top: 50%;\n  cursor: pointer;\n  z-index: 1; }\n\n.btn-previous.disabled {\n    cursor: not-allowed; }\n\nbutton.disabled {\n  cursor: not-allowed; }\n\n.overlay {\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5); }\n\n.pdf-page-canvas {\n  opacity: 1;\n  transition: 0.5s opacity ease-in; }\n\n.pdf-page-canvas-loading-doc {\n  opacity: 0; }\n\n.ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.leftPosDesk {\n  left: 25% !important; }\n\n.mat-badge-content {\n  background: #e74c3c; }\n\n.substutionModal {\n  color: white;\n  background: #135F7F; }\n\n.substutionModal div {\n    padding: 10px; }\n\n.substutionModal .msgModal {\n    text-align: center;\n    flex: 1; }\n\n.substitutedInformations {\n  top: 85px;\n  z-index: 1;\n  white-space: pre;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: #135F7F;\n  color: white;\n  font-size: 13px;\n  text-align: center; }\n\n.note {\n  top: 150px;\n  right: 40px;\n  z-index: 2;\n  cursor: -webkit-grab;\n  cursor: grab;\n  position: absolute;\n  background-color: #FFF8BB;\n  width: 300px;\n  max-height: 400px;\n  overflow: auto;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.note-title {\n    background-color: #FFF8BB;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0px;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    color: #135F7F;\n    font-weight: bold; }\n\n.note-creator {\n    padding: 10px;\n    color: #135F7F;\n    font-size: 12px;\n    text-decoration: underline; }\n\n.note-content {\n    padding: 10px;\n    color: #4F4F4F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvZG9jdW1lbnQvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXGRvY3VtZW50XFxkb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9mcm9udGVuZC9hcHAvZG9jdW1lbnQvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxjc3NcXHZhcnMuc2NzcyIsInNyYy9mcm9udGVuZC9hcHAvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkNMZTtFRE1mLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixPQUFPO0VBRVAsTUFBTTtFQUNOLE9BQU8sRUFBQTs7QUFLVDtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFFRSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBRVY7OztpQkVaZSxFRmVDOztBQUNoQjtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsY0NoRmEsRUFBQTs7QURrRmI7TUFDRSxvQkFBb0I7TUFDcEIsc0JBQXNCO01BQ3RCLHVCQUF1QixFQUFBOztBQUkzQjtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7SUFDRSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7O0FBTG5CO01BUUcsWUFBWSxFQUFBOztBQVJmO01BWUcsU0FBUztNQUNULFVBQVUsRUFBQTs7QUFJZDtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QseUJBQXlCLEVBQUE7O0FBTjFCO01BU0csaUJBQWlCLEVBQUE7O0FBVHBCO01BYUcsZ0JBQWdCLEVBQUE7O0FBYm5CO01BaUJHLGNDeklXLEVBQUE7O0FEd0hkO01BcUJHLGFBQWEsRUFBQTs7QUFHZjtNQUNFLFVBQVU7TUFDVixxQkFBcUIsRUFBQTs7QUFGdEI7UUFLRyx1QkFBdUIsRUFBQTs7QUFMMUI7UUFTRyxXQUFXLEVBQUE7O0FBakNoQjtNQXNDRyxVQUFVO01BQ1YsV0FBVyxFQUFBOztBQXZDZDtNQTJDRyxPQUFPO01BQ1AsZUFBZSxFQUFBOztBQU9uQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixTQUFTO0VBQ1QsMkJBQTJCLEVBQUE7O0FBRTNCO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBOztBQUd6QjtJQUNFLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFLdEI7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQVhaO0lBY0ksbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFYWjtJQWNJLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULDhCQUE4QixFQUFBOztBQUdoQztFQUNFLFVBQVU7RUFDVixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxVQUFVLEVBQUE7O0FBSVo7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLG1CQ3pScUIsRUFBQTs7QUQ0UnZCO0VBQ0UsWUFBWTtFQUNaLG1CQ2hTZSxFQUFBOztBRDhSakI7SUFLSSxhQUFhLEVBQUE7O0FBTGpCO0lBU0ksa0JBQWtCO0lBQ2xCLE9BQU8sRUFBQTs7QUFJWDtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQ1M7RUFDVCxZQUNPO0VBQ1AsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFZO0VBQVosWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUhBQXlILEVBQUE7O0FBRXpIO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZiwwQkFBMEIsRUFBQTs7QUFHNUI7SUFDRSxhQUFhO0lBQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9mcm9udGVuZC9hcHAvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLmVudGVyQXBwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hYXJjaExvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubWFpblZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVhZGVyIGJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5oZWFkZXIgYnV0dG9uIG1hdC1pY29uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uYXJ0aWNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4OiAxO1xuICAvL3RyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIC8vcGFkZGluZy10b3A6IDkwcHg7XG4gIC8vcGFkZGluZy1ib3R0b206IDEyMHB4O1xufVxuXG4uY2FudmFzLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbn1cblxuY2FudmFzIHtcblxuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuXG4gIC8qJi1sZWZ0XG4gICAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgICAgdG9wIDE1cHhcbiAgICAgIGxlZnQgLTYwcHgqL1xuICAmLWFjdGlvbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogJHByaW1hcnk7XG5cbiAgICAmLWJ1dHRvbiB7XG4gICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAmLWluZm9zIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjFGNEY0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuXG4gICYtaW5mbyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk3OTc5NztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxuXG4gICYtZXhwYW5kIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRvcDogMjVweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRjFGNEY0O1xuXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIDo6bmctZGVlcC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICYtY29udGVudCB7XG4gICAgICB3aWR0aDogMzMlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dDpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuXG4gICAgZGl2IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG5cblxuLnBhZ2Uge1xuICAmLWluZm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDcwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIGNvbG9yOiAjOUI5QjlCO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgICYtZG9jIHtcbiAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGNDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAmLXBhZ2Uge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAxNHB4IDE0cHggMDtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRUNGMEYxO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICB9XG4gIH1cbn1cblxuLmJ0bi1uZXh0IHtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQ6ICNjNmM2YzY4MDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0b3A6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxO1xuXG4gICYuZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cblxuLmJ0bi1wcmV2aW91cyB7XG4gIGNvbG9yOiAjNjY2O1xuICBiYWNrZ3JvdW5kOiAjYzZjNmM2ODA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNXB4O1xuICB0b3A6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxO1xuXG4gICYuZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cblxuYnV0dG9uLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ucGRmLXBhZ2UtY2FudmFzIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC41cyBvcGFjaXR5IGVhc2UtaW47XG59XG5cbi5wZGYtcGFnZS1jYW52YXMtbG9hZGluZy1kb2Mge1xuICBvcGFjaXR5OiAwO1xufVxuXG5cbi5lbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGVmdFBvc0Rlc2sge1xuICBsZWZ0OiAyNSUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogJHdhcm47XG59XG5cbi5zdWJzdHV0aW9uTW9kYWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuXG4gIGRpdiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5tc2dNb2RhbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cblxuLnN1YnN0aXR1dGVkSW5mb3JtYXRpb25zIHtcbiAgdG9wOiA4NXB4O1xuICB6LWluZGV4OiAxO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgYmFja2dyb3VuZDpcbiAgICAjMTM1RjdGO1xuICBjb2xvcjpcbiAgICB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub3RlIHtcbiAgdG9wOiAxNTBweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGN1cnNvcjogZ3JhYjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOEJCO1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuICAmLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOEJCO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICMxMzVGN0Y7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAmLWNyZWF0b3Ige1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICMxMzVGN0Y7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgJi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjNEY0RjRGO1xuICB9XG59IiwiJGNvbG9yLW1haW46ICM0RjRGNEY7IC8vIGRlZmF1bHQgY29sb3IgaW4gYXBwbGljYXRpb25cbiRwcmltYXJ5OiAjMTM1RjdGOyAvLyBtYWluIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG4kYWNjZW50OiAjMkVDQzcxOyAvLyBhY2NlbnQgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb24gKGxpa2Ugc3VjY2VzcyBidXR0b25zKVxuJHdhcm46IHJnYigyMzEsIDc2LCA2MCk7IC8vIHdhcm5pbmcgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cblxuLy8gV0FSTklORyAhIFlPVSBNVVNUIFJFQ09NUElMQVRFIG1hYXJjaC1tYXRlcmlhbC5zY3NzIElGIFZBTFVFUyBDSEFOR0VTIiwiLmVudGVyQXBwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzVGN0Y7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5tYWFyY2hMb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxuXG4ubWFpblZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5oZWFkZXIgYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogYXV0bzsgfVxuXG4uaGVhZGVyIGJ1dHRvbiBtYXQtaWNvbiB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtc2l6ZTogNDBweDsgfVxuXG4uYXJ0aWNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7IH1cblxuLmNhbnZhcy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7IH1cblxuY2FudmFzIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICAvKiYtbGVmdFxuICAgICAgcG9zaXRpb24gYWJzb2x1dGVcbiAgICAgIHRvcCAxNXB4XG4gICAgICBsZWZ0IC02MHB4Ki8gfVxuICAuaGVhZGVyLWFjdGlvbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogIzEzNUY3RjsgfVxuICAgIC5oZWFkZXItYWN0aW9uLWJ1dHRvbiB7XG4gICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICB3aWR0aDogMTM1cHggIWltcG9ydGFudDsgfVxuICAuaGVhZGVyLWluZm9zIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjFGNEY0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogYXV0bzsgfVxuICAuaGVhZGVyLWluZm8ge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5Nzk3OTc7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XG4gICAgLmhlYWRlci1pbmZvOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICAuaGVhZGVyLWluZm8gcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwOyB9XG4gIC5oZWFkZXItZXhwYW5kIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRvcDogMjVweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRjFGNEY0OyB9XG4gICAgLmhlYWRlci1leHBhbmQgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4OyB9XG4gICAgLmhlYWRlci1leHBhbmQgOjpuZy1kZWVwLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTsgfVxuICAgIC5oZWFkZXItZXhwYW5kIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogIzEzNUY3RjsgfVxuICAgIC5oZWFkZXItZXhwYW5kIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICAuaGVhZGVyLWV4cGFuZC1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5oZWFkZXItZXhwYW5kLWNvbnRlbnQgaW5wdXQge1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgLmhlYWRlci1leHBhbmQtY29udGVudCAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5oZWFkZXItZXhwYW5kIGlucHV0OmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBjb2xvcjogIzY2NjsgfVxuICAgIC5oZWFkZXItZXhwYW5kIGRpdiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5wYWdlLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIGNvbG9yOiAjOUI5QjlCO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMC44O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxuICAucGFnZS1pbmZvLWRvYyB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGNDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAucGFnZS1pbmZvLXBhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDE0cHggMTRweCAwO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQ0YwRjE7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlOyB9XG5cbi5idG4tbmV4dCB7XG4gIGNvbG9yOiAjNjY2O1xuICBiYWNrZ3JvdW5kOiAjYzZjNmM2ODA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgdG9wOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTsgfVxuICAuYnRuLW5leHQuZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cblxuLmJ0bi1wcmV2aW91cyB7XG4gIGNvbG9yOiAjNjY2O1xuICBiYWNrZ3JvdW5kOiAjYzZjNmM2ODA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNXB4O1xuICB0b3A6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxOyB9XG4gIC5idG4tcHJldmlvdXMuZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cblxuYnV0dG9uLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLnBkZi1wYWdlLWNhbnZhcyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDAuNXMgb3BhY2l0eSBlYXNlLWluOyB9XG5cbi5wZGYtcGFnZS1jYW52YXMtbG9hZGluZy1kb2Mge1xuICBvcGFjaXR5OiAwOyB9XG5cbi5lbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG5cbi5sZWZ0UG9zRGVzayB7XG4gIGxlZnQ6IDI1JSAhaW1wb3J0YW50OyB9XG5cbi5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNlNzRjM2M7IH1cblxuLnN1YnN0dXRpb25Nb2RhbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzEzNUY3RjsgfVxuICAuc3Vic3R1dGlvbk1vZGFsIGRpdiB7XG4gICAgcGFkZGluZzogMTBweDsgfVxuICAuc3Vic3R1dGlvbk1vZGFsIC5tc2dNb2RhbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXg6IDE7IH1cblxuLnN1YnN0aXR1dGVkSW5mb3JtYXRpb25zIHtcbiAgdG9wOiA4NXB4O1xuICB6LWluZGV4OiAxO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgYmFja2dyb3VuZDogIzEzNUY3RjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ubm90ZSB7XG4gIHRvcDogMTUwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICB6LWluZGV4OiAyO1xuICBjdXJzb3I6IGdyYWI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjhCQjtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLm5vdGUtdGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY4QkI7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogIzEzNUY3RjtcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAubm90ZS1jcmVhdG9yIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjMTM1RjdGO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuICAubm90ZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjNEY0RjRGOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/frontend/app/document/document.component.ts":
/*!*********************************************************!*\
  !*** ./src/frontend/app/document/document.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var signatures_component_1 = __webpack_require__(/*! ../signatures/signatures.component */ "./src/frontend/app/signatures/signatures.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var notification_service_1 = __webpack_require__(/*! ../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var document_note_pad_component_1 = __webpack_require__(/*! ../documentNotePad/document-note-pad.component */ "./src/frontend/app/documentNotePad/document-note-pad.component.ts");
var warn_modal_component_1 = __webpack_require__(/*! ../modal/warn-modal.component */ "./src/frontend/app/modal/warn-modal.component.ts");
var reject_info_component_1 = __webpack_require__(/*! ../modal/reject-info.component */ "./src/frontend/app/modal/reject-info.component.ts");
var confirm_modal_component_1 = __webpack_require__(/*! ../modal/confirm-modal.component */ "./src/frontend/app/modal/confirm-modal.component.ts");
var success_info_valid_component_1 = __webpack_require__(/*! ../modal/success-info-valid.component */ "./src/frontend/app/modal/success-info-valid.component.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var document_list_component_1 = __webpack_require__(/*! ./document-list/document-list.component */ "./src/frontend/app/document/document-list/document-list.component.ts");
var auth_service_1 = __webpack_require__(/*! ../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var local_storage_service_1 = __webpack_require__(/*! ../service/local-storage.service */ "./src/frontend/app/service/local-storage.service.ts");
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(translate, router, route, http, signaturesService, notificationService, cookieService, sanitizer, dialog, bottomSheet, authService, localStorage) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.http = http;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.cookieService = cookieService;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.authService = authService;
        this.localStorage = localStorage;
        this.enterApp = true;
        this.pageNum = 1;
        this.signaturesContent = [];
        this.currentDoc = 0;
        this.docList = [];
        this.actionsList = [
            {
                id: 2,
                label: 'lang.reject',
                color: '#e74c3c',
                logo: 'fas fa-backspace',
                event: 'refuseDocument'
            },
            {
                id: 3,
                label: 'lang.signatures',
                color: '#135F7F',
                logo: '',
                event: 'openDrawer'
            },
            {
                id: 1,
                label: 'lang.validate',
                color: '#2ecc71',
                logo: 'fas fa-check-circle',
                event: 'validateDocument'
            },
        ];
        this.freezeSidenavClose = false;
        this.startX = 0;
        this.startY = 0;
        this.widthDoc = '100%';
        this.resetDragPos = false;
        this.mainDocument = {
            id: 0,
            attachments: [],
            workflow: [],
        };
        this.loadingUI = false;
        this.expandedNote = true;
        this.draggable = false;
    }
    DocumentComponent.prototype.onResize = function (event) {
        var _this = this;
        this.signaturesService.annotationMode = false;
        this.widthDoc = '100%';
        this.resetDragPos = true;
        setTimeout(function () {
            _this.resetDragPos = false;
        }, 200);
        setTimeout(function () {
            _this.signaturesService.workingAreaHeight = $('#snapshotPdf').height();
            _this.signaturesService.workingAreaWidth = $('#snapshotPdf').width();
            _this.signaturesService.scale = 1;
        }, 400);
    };
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.enterApp = false;
        }, 500);
        this.route.params.subscribe(function (params) {
            if (typeof params['id'] !== 'undefined') {
                _this.signaturesService.mainLoading = true;
                _this.signaturesService.renderingDoc = true;
                _this.http.get('../rest/documents/' + params['id'])
                    .subscribe(function (data) {
                    _this.mainDocument = data.document;
                    _this.totalPages = _this.mainDocument.pages;
                    _this.signaturesService.mainDocumentId = _this.mainDocument.id;
                    _this.signaturesService.totalPage = _this.mainDocument.pages;
                    _this.initDoc();
                    var realUserWorkflow = _this.mainDocument.workflow.filter(function (line) { return line.current === true; })[0];
                    if (realUserWorkflow.userId !== _this.authService.user.id) {
                        _this.http.get('../rest/users/' + realUserWorkflow.userId + '/signatures')
                            .subscribe(function (dataSign) {
                            _this.signaturesService.signaturesListSubstituted = dataSign.signatures;
                            _this.signaturesService.loadingSign = false;
                        });
                    }
                    else {
                        _this.signaturesService.signaturesListSubstituted = [];
                    }
                    _this.docList.push({ 'id': _this.mainDocument.id, 'title': _this.mainDocument.title, 'pages': _this.mainDocument.pages, 'imgContent': [], 'imgUrl': '../rest/documents/' + _this.mainDocument.id + '/thumbnails' });
                    _this.mainDocument.attachments.forEach(function (attach) {
                        _this.docList.push({ 'id': attach.id, 'title': attach.title, 'pages': attach.pages, 'imgContent': [], 'imgUrl': '../rest/attachments/' + attach.id + '/thumbnails' });
                    });
                    _this.renderImage();
                });
            }
            else {
                _this.docList = [];
                _this.signaturesService.signaturesContent = [];
                _this.signaturesService.notesContent = [];
                _this.snav.open();
                _this.signaturesService.mainDocumentId = null;
                _this.freezeSidenavClose = true;
                _this.signaturesService.mainLoading = false;
            }
        });
    };
    DocumentComponent.prototype.renderImage = function () {
        var _this = this;
        if (this.docList[this.currentDoc].imgContent[this.pageNum] === undefined) {
            this.signaturesService.mainLoading = true;
            this.loadingUI = true;
            if (this.currentDoc === 0) {
                this.http.get('../rest/documents/' + this.docList[this.currentDoc].id + '/thumbnails/' + this.pageNum)
                    .subscribe(function (data) {
                    _this.docList[_this.currentDoc].imgContent[_this.pageNum] = data.fileContent;
                    _this.signaturesService.mainLoading = false;
                    setTimeout(function () {
                        _this.initWorkingArea();
                        _this.loadingUI = false;
                    }, 400);
                });
            }
            else {
                this.http.get('../rest/attachments/' + this.docList[this.currentDoc].id + '/thumbnails/' + this.pageNum)
                    .subscribe(function (data) {
                    _this.docList[_this.currentDoc].imgContent[_this.pageNum] = data.fileContent;
                    _this.signaturesService.mainLoading = false;
                    setTimeout(function () {
                        _this.loadingUI = false;
                    }, 400);
                });
            }
        }
    };
    DocumentComponent.prototype.initDoc = function () {
        this.docList = [];
        this.signaturesService.signaturesContent = [];
        this.signaturesService.notesContent = [];
        var notesContent = this.localStorage.get(this.mainDocument.id.toString());
        if (notesContent) {
            var storageContent = JSON.parse(notesContent);
            this.signaturesService.notesContent = storageContent['note'];
            this.signaturesService.signaturesContent = storageContent['sign'];
        }
        this.signaturesService.currentAction = 0;
        this.signaturesService.currentPage = 1;
        this.pageNum = 1;
        this.signaturesContent.currentDoc = 1;
        this.currentDoc = 0;
    };
    DocumentComponent.prototype.testDrag = function (event) {
        var element = event.source.getRootElement();
        var boundingClientRect = element.getBoundingClientRect();
        var parentPosition = this.getPosition(element);
        this.signaturesService.y = (boundingClientRect.y - parentPosition.top);
        this.signaturesService.x = (boundingClientRect.x - parentPosition.left);
    };
    DocumentComponent.prototype.getPosition = function (el) {
        var x = 0;
        var y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            x += el.offsetLeft - el.scrollLeft;
            y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: y, left: x };
    };
    DocumentComponent.prototype.zoomForNotes = function () {
        this.widthDoc = '200%';
        this.signaturesService.scale = 2;
        $('.example-box').css({ 'transform': 'translate3d(' + this.signaturesService.x * this.signaturesService.scale + 'px, ' + this.signaturesService.y * this.signaturesService.scale + 'px, 0px)' });
        this.signaturesService.workingAreaHeight *= this.signaturesService.scale;
        this.signaturesService.workingAreaWidth *= this.signaturesService.scale;
    };
    DocumentComponent.prototype.zoomForView = function () {
        var _this = this;
        this.signaturesService.mainLoading = true;
        // this.resetDragPosition();
        this.resetDragPos = true;
        this.widthDoc = '100%';
        this.signaturesService.workingAreaHeight = this.signaturesService.workingAreaHeight / 2;
        this.signaturesService.workingAreaWidth = this.signaturesService.workingAreaWidth / 2;
        setTimeout(function () {
            _this.resetDragPos = false;
        }, 200);
        setTimeout(function () {
            _this.signaturesService.mainLoading = false;
        }, 400);
        this.signaturesService.scale = 1;
    };
    DocumentComponent.prototype.prevPage = function () {
        this.pageNum--;
        if (this.pageNum === 0) {
            this.pageNum = 1;
        }
        else {
        }
        if (this.currentDoc === 0) {
            this.signaturesService.currentPage = this.pageNum;
        }
        this.renderImage();
    };
    DocumentComponent.prototype.nextPage = function () {
        if (this.pageNum >= this.totalPages) {
            this.pageNum = this.totalPages;
        }
        else {
            this.pageNum++;
        }
        // only for main document
        if (this.currentDoc === 0) {
            this.signaturesService.currentPage = this.pageNum;
        }
        this.renderImage();
    };
    DocumentComponent.prototype.initWorkingArea = function () {
        if ((typeof this.signaturesService.workingAreaHeight !== 'number' || this.signaturesService.workingAreaHeight === 0) && (typeof this.signaturesService.workingAreaWidth !== 'number' || this.signaturesService.workingAreaWidth === 0)) {
            this.img = document.querySelector('img.zoom');
            var rect = this.img.getBoundingClientRect();
            this.signaturesService.workingAreaHeight = rect.height;
            this.signaturesService.workingAreaWidth = rect.width;
        }
    };
    DocumentComponent.prototype.addAnnotation = function (e) {
        e.preventDefault();
        e = e.srcEvent;
        if (!this.signaturesService.annotationMode && this.currentDoc === 0) {
            this.backToDetails();
            this.img = document.querySelector('img.zoom');
            var rect = this.img.getBoundingClientRect();
            var offsetX = e.pageX - rect.left - window.pageXOffset;
            var offsetY = e.pageY - rect.top - window.pageYOffset;
            var posX = offsetX - this.signaturesService.x;
            var posY = offsetY - this.signaturesService.y;
            if (this.signaturesService.mobileMode) {
                this.signaturesService.x = -posX;
            }
            else {
                this.signaturesService.x = -posX + 350;
            }
            this.signaturesService.y = -posY;
            this.zoomForNotes();
            $('.example-box').css({ 'transform': 'translate3d(' + -(posX) + 'px, ' + -(posY) + 'px, 0px)' });
            this.signaturesService.annotationMode = true;
            this.appDocumentNotePad.initPad();
        }
    };
    DocumentComponent.prototype.refuseDocument = function () {
        var _this = this;
        var dialogRef = this.dialog.open(warn_modal_component_1.WarnModalComponent, {
            width: '350px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'sucess') {
                var config = {
                    disableClose: true,
                    direction: 'ltr'
                };
                _this.bottomSheet.open(reject_info_component_1.RejectInfoBottomSheetComponent, config);
                _this.localStorage.remove(_this.mainDocument.id.toString());
            }
            else if (result === 'annotation') {
                _this.signaturesService.annotationMode = true;
                _this.appDocumentNotePad.initPad();
            }
        });
    };
    DocumentComponent.prototype.validateDocument = function (mode) {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_modal_component_1.ConfirmModalComponent, {
            width: '350px',
            data: { msg: 'lang.areYouSure' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var config = {
                    disableClose: true,
                    direction: 'ltr'
                };
                _this.bottomSheet.open(success_info_valid_component_1.SuccessInfoValidBottomSheetComponent, config);
                _this.localStorage.remove(_this.mainDocument.id.toString());
            }
        });
    };
    DocumentComponent.prototype.openDrawer = function () {
        if (this.currentDoc > 0) {
            this.currentDoc = 0;
            this.pageNum = 1;
        }
        this.signaturesService.showSign = true;
        this.signaturesService.showPad = false;
        var config = {
            disableClose: false,
            direction: 'ltr'
        };
        this.bottomSheet.open(signatures_component_1.SignaturesComponent, config);
    };
    DocumentComponent.prototype.removeTags = function () {
        var _this = this;
        this.signaturesService.currentAction = 0;
        var dialogRef = this.dialog.open(confirm_modal_component_1.ConfirmModalComponent, {
            width: '350px',
            data: { msg: 'lang.deleteNoteAndSignature' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.signaturesService.signaturesContent = [];
                _this.signaturesService.notesContent = [];
                _this.localStorage.remove(_this.mainDocument.id.toString());
                _this.notificationService.success('lang.noteAndSignatureDeleted');
            }
        });
    };
    DocumentComponent.prototype.loadDoc = function (index) {
        this.signaturesService.renderingDoc = true;
        if (index > 0) {
            this.signaturesService.isTaggable = false;
        }
        this.pageNum = 1;
        this.currentDoc = index;
        this.totalPages = this.docList[index].pages;
    };
    DocumentComponent.prototype.launchEvent = function (action) {
        this.backToDetails();
        this.signaturesService.currentAction = action.id;
        this[action.event]();
    };
    DocumentComponent.prototype.undoTag = function () {
        if (this.signaturesService.notesContent[this.pageNum]) {
            this.signaturesService.notesContent[this.pageNum].pop();
            this.localStorage.remove(this.mainDocument.id.toString());
            this.localStorage.save(this.mainDocument.id.toString(), JSON.stringify({ 'sign': this.signaturesService.signaturesContent, 'note': this.signaturesService.notesContent }));
        }
    };
    DocumentComponent.prototype.checkEmptyNote = function () {
        if (!this.signaturesService.notesContent[this.pageNum]) {
            return true;
        }
        else if (this.signaturesService.notesContent[this.pageNum] === 'undefined') {
            return true;
        }
        else if (this.signaturesService.notesContent[this.pageNum].length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    DocumentComponent.prototype.checkEmptiness = function () {
        var state = true;
        for (var pageNum = 1; pageNum <= this.signaturesService.totalPage; pageNum++) {
            if (this.signaturesService.notesContent[pageNum]) {
                if (this.signaturesService.notesContent[pageNum].length > 0) {
                    state = false;
                    break;
                }
            }
            if (this.signaturesService.signaturesContent[pageNum]) {
                if (this.signaturesService.signaturesContent[pageNum].length > 0) {
                    state = false;
                    break;
                }
            }
        }
        return state;
    };
    DocumentComponent.prototype.openVisaWorkflow = function () {
        this.snavRight.open();
        this.signaturesService.sideNavRigtDatas = {
            mode: 'visaWorkflow',
            width: '450px',
            locked: false,
        };
    };
    DocumentComponent.prototype.openDocumentList = function () {
        this.snavRight.open();
        this.signaturesService.sideNavRigtDatas = {
            mode: 'documentList',
            width: '450px',
            locked: false,
        };
    };
    DocumentComponent.prototype.openMainDocumentDetail = function () {
        this.snavRight.open();
        this.signaturesService.sideNavRigtDatas = {
            mode: 'mainDocumentDetail',
            width: '450px',
            locked: false,
        };
    };
    DocumentComponent.prototype.backToDetails = function () {
        this.signaturesService.sideNavRigtDatas = {
            mode: 'mainDocumentDetail',
            width: '450px',
            locked: false,
        };
    };
    DocumentComponent.prototype.deleteSubstution = function () {
        var _this = this;
        var r = confirm(this.translate.instant('lang.deleteSubstitution') + ' ?');
        if (r) {
            this.http.put('../rest/users/' + this.authService.user.id + '/substitute', { substitute: null })
                .subscribe(function () {
                _this.authService.updateUserInfoWithTokenRefresh();
                _this.notificationService.success('lang.substitutionDeleted');
            });
        }
    };
    DocumentComponent.prototype.gotTo = function (documentId, i) {
        this.router.navigate(['/documents/' + documentId]);
        this.signaturesService.mainDocumentId = documentId;
        // this.signaturesService.indexDocumentsList = i;
        this.signaturesService.sideNavRigtDatas = {
            mode: 'mainDocumentDetail',
            width: '450px',
            locked: false,
        };
    };
    __decorate([
        core_1.ViewChild('snav'),
        __metadata("design:type", material_1.MatSidenav)
    ], DocumentComponent.prototype, "snav", void 0);
    __decorate([
        core_1.ViewChild('snavRight'),
        __metadata("design:type", material_1.MatSidenav)
    ], DocumentComponent.prototype, "snavRight", void 0);
    __decorate([
        core_1.ViewChild('dragElem'),
        __metadata("design:type", Object)
    ], DocumentComponent.prototype, "dragElem", void 0);
    __decorate([
        core_1.ViewChild('appDocumentNotePad'),
        __metadata("design:type", document_note_pad_component_1.DocumentNotePadComponent)
    ], DocumentComponent.prototype, "appDocumentNotePad", void 0);
    __decorate([
        core_1.ViewChild('appDocumentList'),
        __metadata("design:type", document_list_component_1.DocumentListComponent)
    ], DocumentComponent.prototype, "appDocumentList", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DocumentComponent.prototype, "onResize", null);
    DocumentComponent = __decorate([
        core_1.Component({
            selector: 'app-document',
            template: __webpack_require__(/*! ./document.component.html */ "./src/frontend/app/document/document.component.html"),
            animations: [
                animations_1.trigger('enterApp', [
                    animations_1.transition(':leave', [
                        animations_1.style({ transform: 'translateY(0)' }),
                        animations_1.animate('500ms', animations_1.style({ transform: 'translateY(-100%)' })),
                    ])
                ]),
                animations_1.trigger('slideDown', [
                    animations_1.transition(':enter', [
                        animations_1.style({ transform: 'translateY(-100%)', opacity: 0 }),
                        animations_1.animate('500ms', animations_1.style({ transform: 'translateY(0)', 'opacity': 1 }))
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ transform: 'translateY(0)', 'opacity': 1 }),
                        animations_1.animate('500ms', animations_1.style({ transform: 'translateY(-100%)', 'opacity': 0 })),
                    ])
                ]),
                animations_1.trigger('slideUp', [
                    animations_1.transition(':enter', [
                        animations_1.style({ transform: 'translateY(100%)', opacity: 0 }),
                        animations_1.animate('500ms', animations_1.style({ transform: 'translateY(0)', 'opacity': 1 }))
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ transform: 'translateY(0)', 'opacity': 1 }),
                        animations_1.animate('500ms', animations_1.style({ transform: 'translateY(100%)', 'opacity': 0 })),
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/frontend/app/document/document.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            router_1.Router,
            router_1.ActivatedRoute,
            http_1.HttpClient,
            signatures_service_1.SignaturesContentService,
            notification_service_1.NotificationService,
            ngx_cookie_service_1.CookieService,
            platform_browser_1.DomSanitizer,
            material_1.MatDialog,
            material_1.MatBottomSheet,
            auth_service_1.AuthService,
            local_storage_service_1.LocalStorageService])
    ], DocumentComponent);
    return DocumentComponent;
}());
exports.DocumentComponent = DocumentComponent;


/***/ }),

/***/ "./src/frontend/app/document/main-document-detail/main-document-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./src/frontend/app/document/main-document-detail/main-document-detail.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-container\" *ngIf=\"!loading\">\n    <div class=\"panel-header\">\n        <button *ngIf=\"signaturesService.mobileMode\" class=\"closePanel\" mat-icon-button type=\"button\" (tap)=\"snavRightComponent.close();\">\n            <mat-icon fontSet=\"fas\" fontIcon=\"fa-arrow-right fa-2x\"></mat-icon>\n        </button>\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-info-circle fa-2x\"></mat-icon> {{'lang.informations' | translate}}\n    </div>\n    <div class=\"panel-content\" *ngIf=\"mainDocument.id\">\n        <mat-list>\n            <mat-list-item>\n                <p mat-line style=\"display: flex;padding:10px;\">\n                    <mat-form-field style=\"width:100%;\">\n                        <input matInput [value]=\"mainDocument.sender\" title=\"{{mainDocument.sender}}\"\n                            placeholder=\"{{'lang.emittedBy' | translate}}\" disabled>\n                    </mat-form-field>\n                </p>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"mainDocument.description != null\">\n                <p mat-line style=\"display: flex;padding:10px;\">\n                    <mat-form-field style=\"width:100%;\">\n                        <input matInput [value]=\"mainDocument.description\" title=\"{{mainDocument.description}}\"\n                            placeholder=\"{{'lang.description' | translate}}\" disabled>\n                    </mat-form-field>\n                </p>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"mainDocument.deadline != null\">\n                <p mat-line style=\"display: flex;padding:10px;\">\n                    <mat-form-field style=\"width:100%;\">\n                        <input matInput [value]=\"mainDocument.deadline\" title=\"{{mainDocument.deadline}}\"\n                            placeholder=\"{{'lang.processingDeadline' | translate}}\" disabled>\n                    </mat-form-field>\n                </p>\n            </mat-list-item>\n            <mat-list-item>\n                <p mat-line style=\"display: flex;padding:10px;\">\n                    <mat-form-field style=\"width:100%;\">\n                        <input matInput [value]=\"mainDocument.reference\" title=\"{{mainDocument.reference}}\"\n                            placeholder=\"{{'lang.reference' | translate}}\" disabled>\n                    </mat-form-field>\n                </p>\n            </mat-list-item>\n            <mat-list-item>\n                <p mat-line style=\"display: flex;padding:10px;\">\n                    <mat-form-field style=\"width:100%;\">\n                        <input matInput [value]=\"mainDocument.title\" title=\"{{mainDocument.title}}\"\n                            placeholder=\"{{'lang.subject' | translate}}\" disabled>\n                    </mat-form-field>\n                </p>\n            </mat-list-item>\n            <mat-list-item *ngFor=\"let data of mainDocument.metadata;\">\n                <p mat-line style=\"display: flex;padding:10px;\">\n                    <mat-form-field style=\"width:100%;\">\n                        <input matInput [value]=\"data.value\" title=\"{{data.value | translate}}\"\n                            placeholder=\"{{data.label | translate}}\" disabled>\n                    </mat-form-field>\n                </p>\n            </mat-list-item>\n        </mat-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/frontend/app/document/main-document-detail/main-document-detail.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/frontend/app/document/main-document-detail/main-document-detail.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item {\n  height: auto !important;\n  text-align: center; }\n\n.mat-card {\n  box-shadow: none;\n  border: solid 1px #E0E0E0; }\n\n.infosPj {\n  background: #F9F9F9;\n  border-top: solid 1px rgba(0, 0, 0, 0.12);\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  padding: 5px; }\n\n.infosPj ::ng-deep.mat-expansion-panel-body {\n    padding: 0px; }\n\n.infosPj ::ng-deep.mat-form-field-label {\n    color: #135F7F; }\n\n.subInfos {\n  display: block;\n  font-size: 12px;\n  color: #135F7F;\n  font-weight: bold; }\n\n.subInfosBottom {\n  font-size: 12px;\n  color: #666; }\n\n.mat-icon {\n  height: auto; }\n\n.pjToolsContent {\n  position: absolute;\n  right: 0px;\n  border-bottom: solid 1px #E0E0E0;\n  border-left: solid 1px #E0E0E0;\n  border-bottom-left-radius: 5px;\n  background: white;\n  padding: 10px; }\n\n.current {\n  box-shadow: 0px 0px 20px 0px #656565; }\n\n.panel-header {\n  box-shadow: 0px 0px 10px 0px #656565;\n  color: white;\n  background: #135F7F;\n  height: 65px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  font-size: 20px;\n  align-items: center; }\n\n.pjListContent {\n  padding-left: 30px;\n  padding-right: 30px;\n  flex: 1;\n  overflow: auto; }\n\n.panel-content {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n\n.closePanel {\n  position: absolute;\n  left: 0px;\n  font-size: 24px; }\n\n.panel-content ::ng-deep.mat-form-field-label {\n  color: #F99830; }\n\n.panel-content ::ng-deep.mat-input-element:disabled {\n  color: #135F7F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvZG9jdW1lbnQvbWFpbi1kb2N1bWVudC1kZXRhaWwvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXGRvY3VtZW50XFxtYWluLWRvY3VtZW50LWRldGFpbFxcbWFpbi1kb2N1bWVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvZnJvbnRlbmQvYXBwL2RvY3VtZW50L21haW4tZG9jdW1lbnQtZGV0YWlsL0Q6XFxNYWFyY2hQYXJhcGhldXItMjAuMDMvc3JjXFxmcm9udGVuZFxcY3NzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQU5oQjtJQVNRLFlBQVksRUFBQTs7QUFUcEI7SUFhUSxjQ3hCUyxFQUFBOztBRDRCakI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNDL0JhO0VEZ0NiLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJDN0RhO0VEOERiLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0M5RmEsRUFBQSIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL2RvY3VtZW50L21haW4tZG9jdW1lbnQtZGV0YWlsL21haW4tZG9jdW1lbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY3NzL3ZhcnMuc2Nzcyc7XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjRTBFMEUwO1xufVxuXG4uaW5mb3NQaiB7XG4gICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgIDo6bmctZGVlcC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIH1cbn1cblxuLnN1YkluZm9zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3ViSW5mb3NCb3R0b20ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzY2Njtcbn1cblxuLm1hdC1pY29uIHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5walRvb2xzQ29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNFMEUwRTA7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjRTBFMEUwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY3VycmVudCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCAjNjU2NTY1O1xufVxuXG4ucGFuZWwtaGVhZGVyIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4ICM2NTY1NjU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgIGhlaWdodDogNjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wakxpc3RDb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLnBhbmVsLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jbG9zZVBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnBhbmVsLWNvbnRlbnQgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogI0Y5OTgzMDtcbn1cblxuLnBhbmVsLWNvbnRlbnQgOjpuZy1kZWVwLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkIHtcbiAgICBjb2xvcjogJHByaW1hcnk7XG59IiwiJGNvbG9yLW1haW46ICM0RjRGNEY7IC8vIGRlZmF1bHQgY29sb3IgaW4gYXBwbGljYXRpb25cbiRwcmltYXJ5OiAjMTM1RjdGOyAvLyBtYWluIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG4kYWNjZW50OiAjMkVDQzcxOyAvLyBhY2NlbnQgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb24gKGxpa2Ugc3VjY2VzcyBidXR0b25zKVxuJHdhcm46IHJnYigyMzEsIDc2LCA2MCk7IC8vIHdhcm5pbmcgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cblxuLy8gV0FSTklORyAhIFlPVSBNVVNUIFJFQ09NUElMQVRFIG1hYXJjaC1tYXRlcmlhbC5zY3NzIElGIFZBTFVFUyBDSEFOR0VTIl19 */"

/***/ }),

/***/ "./src/frontend/app/document/main-document-detail/main-document-detail.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/frontend/app/document/main-document-detail/main-document-detail.component.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var MainDocumentDetailComponent = /** @class */ (function () {
    function MainDocumentDetailComponent(signaturesService) {
        this.signaturesService = signaturesService;
        this.loading = false;
    }
    MainDocumentDetailComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input('mainDocument'),
        __metadata("design:type", Object)
    ], MainDocumentDetailComponent.prototype, "mainDocument", void 0);
    __decorate([
        core_1.Input('snavRightComponent'),
        __metadata("design:type", material_1.MatSidenav)
    ], MainDocumentDetailComponent.prototype, "snavRightComponent", void 0);
    MainDocumentDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-main-document-detail',
            template: __webpack_require__(/*! ./main-document-detail.component.html */ "./src/frontend/app/document/main-document-detail/main-document-detail.component.html"),
            styles: [__webpack_require__(/*! ./main-document-detail.component.scss */ "./src/frontend/app/document/main-document-detail/main-document-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [signatures_service_1.SignaturesContentService])
    ], MainDocumentDetailComponent);
    return MainDocumentDetailComponent;
}());
exports.MainDocumentDetailComponent = MainDocumentDetailComponent;


/***/ }),

/***/ "./src/frontend/app/document/visa-workflow/visa-workflow.component.html":
/*!******************************************************************************!*\
  !*** ./src/frontend/app/document/visa-workflow/visa-workflow.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-container\" *ngIf=\"!loading\">\n    <div class=\"panel-header\">\n        <button *ngIf=\"signaturesService.mobileMode\" class=\"closePanel\" mat-icon-button type=\"button\" (tap)=\"snavRightComponent.close();\">\n            <mat-icon fontSet=\"fas\" fontIcon=\"fa-arrow-right fa-2x\"></mat-icon>\n        </button>\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-list-ol fa-2x\"></mat-icon> {{'lang.circuit' | translate}}\n    </div>\n    <div class=\"panel-content\">\n        <mat-list>\n            <div *ngIf=\"visaWorkflow.length === 0\" class=\"noWorkflow\">\n                {{'lang.noPerson' | translate}}\n            </div>\n            <mat-list-item *ngFor=\"let diffusion of visaWorkflow;let i=index\" [class.current]=\"diffusion.current\">\n                <mat-icon *ngIf=\"diffusion.userPicture !== undefined\" class=\"avatar\" mat-list-icon color=\"primary\"\n                    [style.background-image]=\"'url('+diffusion.userPicture+')'\"></mat-icon>\n                <div *ngIf=\"diffusion.userPicture === undefined && diffusion.userDisplay !== ''\" mat-list-icon class=\"avatar\">\n                    <mat-spinner diameter=\"50\"></mat-spinner>\n                </div>\n                <p class=\"userSubstitute\" mat-line *ngIf=\"diffusion.current && diffusion.userId !== authService.user.id\">\n                    {{'lang.substituteMsg' | translate}}\n                </p>\n                <h4 mat-line *ngIf=\"diffusion.userDisplay != ''\" class=\"userDisplay primary\">\n                    {{diffusion.userDisplay}}\n                </h4>\n                <p mat-line *ngIf=\"diffusion.userDisplay == ''\" class=\"userDisplayDel red\">\n                    {{'lang.userDeleted' | translate}}\n                </p>\n                <p mat-line style=\"display: flex;\">\n                    <span class=\"workflowData\" style=\"text-align:left\">\n                        <span class=\"workflowSubData\" *ngIf=\"diffusion.processDate == null && diffusion.current\">\n                            <i mat-list-icon class=\"fa fa-hourglass statusIcon\"></i>\n                            {{'lang.inProgress' | translate}}\n                        </span>\n                        <span class=\"workflowSubData\" *ngIf=\"diffusion.processDate == null && !diffusion.current\">\n                            <i mat-list-icon class=\"fa fa-question statusIcon\"></i>\n                            {{'lang.waiting' | translate}}\n                        </span>\n                        <span *ngIf=\"diffusion.processDate != null\">\n                            <i mat-list-icon class=\"fa fa-check green statusIcon\"></i>\n                            <span class=\"green\">{{'lang.'+diffusion.mode+'ProcessInfo' | translate}}\n                                {{diffusion.processDate}}</span>\n                        </span>\n                    </span>\n                    <span class=\"workflowData workflowSubData\">{{'lang.'+diffusion.mode+'User' | translate}}</span>\n                </p>\n                <mat-divider></mat-divider>\n            </mat-list-item>\n        </mat-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/frontend/app/document/visa-workflow/visa-workflow.component.scss":
/*!******************************************************************************!*\
  !*** ./src/frontend/app/document/visa-workflow/visa-workflow.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panelTitle {\n  font-size: 30px;\n  opacity: 0.1;\n  padding-bottom: 30px;\n  text-align: center; }\n\n.avatar {\n  border: solid 3px #F99830;\n  height: 65px !important;\n  width: 65px !important;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.userDisplay {\n  display: flex !important;\n  flex: 1;\n  font-size: 25px !important; }\n\n.userDisplayDel {\n  font-style: italic;\n  font-size: 14px !important; }\n\n.workflowData {\n  flex: 1;\n  text-align: right;\n  font-size: 90%; }\n\n.workflowSubData {\n  opacity: 0.5; }\n\n.statusIcon {\n  font-size: 12px !important;\n  opacity: 0.5;\n  width: auto !important;\n  height: auto !important; }\n\n.current ::ng-deep.mat-list-item-content {\n  background: rgba(0, 128, 0, 0.11); }\n\n.green {\n  color: #2ECC71; }\n\n.mat-list-item {\n  height: 90px !important; }\n\n.noWorkflow {\n  opacity: 0.5;\n  text-align: center;\n  font-size: 10px;\n  padding: 10px; }\n\n.panel-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n\n.panel-header {\n  box-shadow: 0px 0px 10px 0px #656565;\n  color: white;\n  background: #135F7F;\n  height: 65px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  font-size: 20px;\n  align-items: center; }\n\n.panel-content {\n  flex: 1;\n  overflow: auto; }\n\n.mat-icon {\n  height: auto; }\n\n.closePanel {\n  position: absolute;\n  left: 0px;\n  font-size: 24px; }\n\n.mat-spinner {\n  left: 8px;\n  top: 8px; }\n\n.userSubstitute {\n  color: #F99830; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvZG9jdW1lbnQvdmlzYS13b3JrZmxvdy9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxcZG9jdW1lbnRcXHZpc2Etd29ya2Zsb3dcXHZpc2Etd29ya2Zsb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvZnJvbnRlbmQvYXBwL2RvY3VtZW50L3Zpc2Etd29ya2Zsb3cvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxjc3NcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksd0JBQXdCO0VBQ3hCLE9BQU87RUFDUCwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksT0FBTztFQUNQLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGlDQUFpQyxFQUFBOztBQUdyQztFQUNJLGNDakRZLEVBQUE7O0FEb0RoQjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixtQkMzRWE7RUQ0RWIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxPQUFPO0VBQ1AsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUduQjtFQUNJLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBR1o7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9kb2N1bWVudC92aXNhLXdvcmtmbG93L3Zpc2Etd29ya2Zsb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLnBhbmVsVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXZhdGFyIHtcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjRjk5ODMwO1xuICAgIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnVzZXJEaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbn1cblxuLnVzZXJEaXNwbGF5RGVsIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi53b3JrZmxvd0RhdGEge1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiA5MCU7XG59XG5cbi53b3JrZmxvd1N1YkRhdGEge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLnN0YXR1c0ljb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uY3VycmVudCA6Om5nLWRlZXAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyOCwgMCwgMC4xMSk7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6ICRhY2NlbnQ7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgICBoZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcbn1cblxuLm5vV29ya2Zsb3cge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wYW5lbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggIzY1NjU2NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFuZWwtY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1hdC1pY29uIHtcbiAgICBoZWlnaHQ6YXV0bztcbn1cblxuLmNsb3NlUGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubWF0LXNwaW5uZXIge1xuICAgIGxlZnQ6IDhweDtcbiAgICB0b3A6IDhweDtcbn1cblxuLnVzZXJTdWJzdGl0dXRlIHtcbiAgICBjb2xvcjogI0Y5OTgzMDtcbn0iLCIkY29sb3ItbWFpbjogIzRGNEY0RjsgLy8gZGVmYXVsdCBjb2xvciBpbiBhcHBsaWNhdGlvblxuJHByaW1hcnk6ICMxMzVGN0Y7IC8vIG1haW4gY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cbiRhY2NlbnQ6ICMyRUNDNzE7IC8vIGFjY2VudCBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvbiAobGlrZSBzdWNjZXNzIGJ1dHRvbnMpXG4kd2FybjogcmdiKDIzMSwgNzYsIDYwKTsgLy8gd2FybmluZyBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvblxuXG4vLyBXQVJOSU5HICEgWU9VIE1VU1QgUkVDT01QSUxBVEUgbWFhcmNoLW1hdGVyaWFsLnNjc3MgSUYgVkFMVUVTIENIQU5HRVMiXX0= */"

/***/ }),

/***/ "./src/frontend/app/document/visa-workflow/visa-workflow.component.ts":
/*!****************************************************************************!*\
  !*** ./src/frontend/app/document/visa-workflow/visa-workflow.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var auth_service_1 = __webpack_require__(/*! ../../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var VisaWorkflowComponent = /** @class */ (function () {
    function VisaWorkflowComponent(http, signaturesService, authService) {
        this.http = http;
        this.signaturesService = signaturesService;
        this.authService = authService;
        this.loading = false;
    }
    VisaWorkflowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visaWorkflow.forEach(function (element) {
            if (element.userPicture === undefined && element.userDisplay !== '') {
                _this.http.get('../rest/users/' + element.userId + '/picture')
                    .subscribe(function (data) {
                    element.userPicture = data.picture;
                });
            }
        });
    };
    __decorate([
        core_1.Input('visaWorkflow'),
        __metadata("design:type", Object)
    ], VisaWorkflowComponent.prototype, "visaWorkflow", void 0);
    __decorate([
        core_1.Input('snavRightComponent'),
        __metadata("design:type", material_1.MatSidenav)
    ], VisaWorkflowComponent.prototype, "snavRightComponent", void 0);
    VisaWorkflowComponent = __decorate([
        core_1.Component({
            selector: 'app-visa-workflow',
            template: __webpack_require__(/*! ./visa-workflow.component.html */ "./src/frontend/app/document/visa-workflow/visa-workflow.component.html"),
            styles: [__webpack_require__(/*! ./visa-workflow.component.scss */ "./src/frontend/app/document/visa-workflow/visa-workflow.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, signatures_service_1.SignaturesContentService, auth_service_1.AuthService])
    ], VisaWorkflowComponent);
    return VisaWorkflowComponent;
}());
exports.VisaWorkflowComponent = VisaWorkflowComponent;


/***/ }),

/***/ "./src/frontend/app/documentNoteList/document-note-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/frontend/app/documentNoteList/document-note-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let note of this.signaturesService.notesContent[this.signaturesService.currentPage];let i = index;\">\n    <div style=\"top:0;left:0;position: absolute;\" [ngClass]=\"{\n      'pdf-page-canvas':!signaturesService.renderingDoc,\n      'pdf-page-canvas-loading-doc':signaturesService.renderingDoc\n    }\">\n      <img [style.width.%]=\"100\" [src]=\"sanitization.bypassSecurityTrustUrl(note.fullPath)\">\n    </div>\n  </ng-container>"

/***/ }),

/***/ "./src/frontend/app/documentNoteList/document-note-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/frontend/app/documentNoteList/document-note-list.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var DocumentNoteListComponent = /** @class */ (function () {
    function DocumentNoteListComponent(translate, sanitization, signaturesService) {
        this.translate = translate;
        this.sanitization = sanitization;
        this.signaturesService = signaturesService;
    }
    DocumentNoteListComponent.prototype.ngOnInit = function () { };
    DocumentNoteListComponent = __decorate([
        core_1.Component({
            selector: 'app-document-note-list',
            template: __webpack_require__(/*! ./document-note-list.component.html */ "./src/frontend/app/documentNoteList/document-note-list.component.html"),
        }),
        __metadata("design:paramtypes", [core_2.TranslateService, platform_browser_1.DomSanitizer, signatures_service_1.SignaturesContentService])
    ], DocumentNoteListComponent);
    return DocumentNoteListComponent;
}());
exports.DocumentNoteListComponent = DocumentNoteListComponent;


/***/ }),

/***/ "./src/frontend/app/documentNotePad/document-note-pad.component.html":
/*!***************************************************************************!*\
  !*** ./src/frontend/app/documentNotePad/document-note-pad.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"signaturesService.annotationMode\" [style.width.px]=\"this.signaturesService.workingAreaWidth*this.signaturesService.scale\" [style.height.px]=\"this.signaturesService.workingAreaHeight*this.signaturesService.scale\"\n  style=\"top:0;position: absolute;border: dashed 1px grey;overflow: hidden;\" [ngClass]=\"{\n  'pdf-page-canvas':!signaturesService.renderingDoc,\n  'pdf-page-canvas-loading-doc':signaturesService.renderingDoc\n}\">\n  <canvas id=\"myCanvas\" #canvas></canvas>\n</div>"

/***/ }),

/***/ "./src/frontend/app/documentNotePad/document-note-pad.component.scss":
/*!***************************************************************************!*\
  !*** ./src/frontend/app/documentNotePad/document-note-pad.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tool-content {\n  display: flex;\n  position: fixed;\n  background: #8080804d;\n  border-radius: 20px;\n  top: 170px;\n  transform: translateY(-50%) rotate(-90deg);\n  padding: 10px; }\n  .tool-content-left {\n    left: -40px; }\n  .tool-content-right {\n    right: -40px; }\n  .undo {\n  cursor: pointer;\n  transform: rotate(90deg);\n  transition: all 0.2s; }\n  .undo:active {\n    transform: rotate(90deg) scale(1.5); }\n  .radio {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n  margin: 5px;\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  border-width: none;\n  border-style: solid;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.2s; }\n  .radio:checked, .radio:hover {\n    transform: scale(1.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvZG9jdW1lbnROb3RlUGFkL0Q6XFxNYWFyY2hQYXJhcGhldXItMjAuMDMvc3JjXFxmcm9udGVuZFxcYXBwXFxkb2N1bWVudE5vdGVQYWRcXGRvY3VtZW50LW5vdGUtcGFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDViwwQ0FBMEM7RUFDMUMsYUFBYSxFQUFBO0VBQ2I7SUFDRSxXQUFXLEVBQUE7RUFFYjtJQUNFLFlBQVksRUFBQTtFQUloQjtFQUNFLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsb0JBQW9CLEVBQUE7RUFIdEI7SUFLSSxtQ0FBbUMsRUFBQTtFQUl2QztFQUNFLHdCQUFnQjtLQUFoQixxQkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQixFQUFBO0VBWHRCO0lBYUkscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9kb2N1bWVudE5vdGVQYWQvZG9jdW1lbnQtbm90ZS1wYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjODA4MDgwNGQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRvcDogMTcwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTkwZGVnKTtcbiAgcGFkZGluZzogMTBweDtcbiAgJi1sZWZ0IHtcbiAgICBsZWZ0OiAtNDBweDtcbiAgfVxuICAmLXJpZ2h0IHtcbiAgICByaWdodDogLTQwcHg7XG4gIH1cbn1cblxuLnVuZG8ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS41KTtcbiAgfVxufVxuXG4ucmFkaW8ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXItd2lkdGg6IG5vbmU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICY6Y2hlY2tlZCwgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/frontend/app/documentNotePad/document-note-pad.component.ts":
/*!*************************************************************************!*\
  !*** ./src/frontend/app/documentNotePad/document-note-pad.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var auth_service_1 = __webpack_require__(/*! ../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var local_storage_service_1 = __webpack_require__(/*! ../service/local-storage.service */ "./src/frontend/app/service/local-storage.service.ts");
var DocumentNotePadComponent = /** @class */ (function () {
    function DocumentNotePadComponent(translate, sanitizer, signaturesService, notificationService, authService, localStorage) {
        this.translate = translate;
        this.sanitizer = sanitizer;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.localStorage = localStorage;
        this.penColors = [{ id: '#000000' }, { id: '#1a75ff' }, { id: '#FF0000' }];
        this.triggerEvent = new core_1.EventEmitter();
    }
    DocumentNotePadComponent.prototype.ngOnInit = function () { };
    DocumentNotePadComponent.prototype.initPad = function () {
        var _this = this;
        setTimeout(function () {
            $('#myCanvas').sign({
                mode: _this.authService.user.preferences.writingMode,
                lineWidth: _this.authService.user.preferences.writingSize,
                changeColor: $('.radio'),
                undo: $('.undo'),
                height: _this.signaturesService.workingAreaHeight,
                width: _this.signaturesService.workingAreaWidth,
                fixHeight: _this.signaturesService.y,
                fixWidth: _this.signaturesService.x,
                mobileMode: _this.signaturesService.mobileMode
            });
            $('input[value=\'' + _this.authService.user.preferences.writingColor + '\']').trigger('click');
        }, 200);
    };
    DocumentNotePadComponent.prototype.cancelAnnotation = function () {
        var _this = this;
        this.signaturesService.mainLoading = true;
        setTimeout(function () {
            _this.triggerEvent.emit();
            _this.signaturesService.x = 0;
            _this.signaturesService.y = 90;
            _this.signaturesService.annotationMode = false;
            _this.signaturesService.mainLoading = false;
        }, 200);
    };
    DocumentNotePadComponent.prototype.validateAnnotation = function () {
        this.signaturesService.mainLoading = true;
        if (!this.signaturesService.notesContent[this.signaturesService.currentPage]) {
            this.signaturesService.notesContent[this.signaturesService.currentPage] = [];
        }
        this.signaturesService.notesContent[this.signaturesService.currentPage].push({
            'fullPath': this.canvas.nativeElement.toDataURL('image/png'),
            'positionX': 0,
            'positionY': 0,
            'height': this.signaturesService.workingAreaHeight,
            'width': this.signaturesService.workingAreaWidth,
        });
        this.localStorage.save(this.signaturesService.mainDocumentId.toString(), JSON.stringify({ 'sign': this.signaturesService.signaturesContent, 'note': this.signaturesService.notesContent }));
        this.triggerEvent.emit();
        this.signaturesService.x = 0;
        this.signaturesService.y = 90;
        if (this.signaturesService.scale > 1) {
            this.signaturesService.renderingDoc = true;
        }
        this.signaturesService.annotationMode = false;
        this.notificationService.success('lang.annotationAdded');
    };
    DocumentNotePadComponent.prototype.undo = function () {
        /*const data = this.signaturePad.toData();
        if (data) {
            data.pop(); // remove the last dot or line
            this.signaturePad.fromData(data);
        }*/
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DocumentNotePadComponent.prototype, "triggerEvent", void 0);
    __decorate([
        core_1.ViewChild('canvas'),
        __metadata("design:type", core_1.ElementRef)
    ], DocumentNotePadComponent.prototype, "canvas", void 0);
    DocumentNotePadComponent = __decorate([
        core_1.Component({
            selector: 'app-document-note-pad',
            template: __webpack_require__(/*! ./document-note-pad.component.html */ "./src/frontend/app/documentNotePad/document-note-pad.component.html"),
            styles: [__webpack_require__(/*! ./document-note-pad.component.scss */ "./src/frontend/app/documentNotePad/document-note-pad.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            platform_browser_1.DomSanitizer,
            signatures_service_1.SignaturesContentService,
            notification_service_1.NotificationService,
            auth_service_1.AuthService,
            local_storage_service_1.LocalStorageService])
    ], DocumentNotePadComponent);
    return DocumentNotePadComponent;
}());
exports.DocumentNotePadComponent = DocumentNotePadComponent;


/***/ }),

/***/ "./src/frontend/app/documentSignList/document-sign-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/frontend/app/documentSignList/document-sign-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let signature of this.signaturesService.signaturesContent[this.signaturesService.currentPage];let i = index;\">\n  <div [style.width.%]=\"signature.width\" (tap)=\"$event.preventDefault();\" [position]=\"{'x': (signature.positionX*this.signaturesService.workingAreaWidth)/100, 'y': (signature.positionY*this.signaturesService.workingAreaHeight)/100}\" id=\"signaturesContent\" style=\"top:0;left:0;position: absolute;border: dashed 1px grey;background: rgba(255, 255, 255, 0.6) none repeat scroll 0% 0%;\"\n    ngDraggable preventDefaultEvent=\"true\" [bounds]=\"page\" inBounds=\"true\" (started)=\"onDragBegin($event)\" (endOffset)=\"moveSign($event,i)\" [ngClass]=\"{\n              'pdf-page-canvas':!signaturesService.renderingDoc,\n              'pdf-page-canvas-loading-doc':signaturesService.renderingDoc\n            }\">\n\n    <!-- FIX ISSUE IN DEVICE TOUCH -->\n    <button *ngIf=\"!signaturesService.mobileMode\" mat-icon-button #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"menu\" style=\"right: 0;position: absolute;color:#F99830;\">\n      <mat-icon fontSet=\"fas\" fontIcon=\"fa-ellipsis-v\"></mat-icon>\n    </button>\n    <button *ngIf=\"signaturesService.mobileMode\" (tap)=\"openMenu(menuTrigger)\" mat-icon-button #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"menu\"\n      style=\"right: 0;position: absolute;color:#F99830;\">\n      <mat-icon fontSet=\"fas\" fontIcon=\"fa-ellipsis-v\"></mat-icon>\n    </button>\n    <!---->\n\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=\"$event.stopPropagation();deleteSignature(i);\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-times\"></mat-icon>\n        <span>{{'lang.delete' | translate}}</span>\n      </button>\n      <button *ngIf=\"signaturesService.totalPage > 1\" [disabled]=\"signature.inAllPage\" mat-menu-item (click)=\"$event.stopPropagation();cloneSign(i);\" title=\"{{'lang.replicateSignatureAllPage' | translate}}\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-clone\"></mat-icon>\n        <span>{{'lang.replicate' | translate}}</span>\n      </button>\n    </mat-menu>\n    <img [src]=\"sanitization.bypassSecurityTrustUrl('data:image/png;base64,' + signature.encodedSignature)\"\n      [style.width.%]=\"100\">\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/frontend/app/documentSignList/document-sign-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/frontend/app/documentSignList/document-sign-list.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var notification_service_1 = __webpack_require__(/*! ../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var local_storage_service_1 = __webpack_require__(/*! ../service/local-storage.service */ "./src/frontend/app/service/local-storage.service.ts");
var confirm_component_1 = __webpack_require__(/*! ../plugins/confirm.component */ "./src/frontend/app/plugins/confirm.component.ts");
var DocumentSignListComponent = /** @class */ (function () {
    function DocumentSignListComponent(translate, sanitization, signaturesService, notificationService, localStorage, dialog) {
        this.translate = translate;
        this.sanitization = sanitization;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.localStorage = localStorage;
        this.dialog = dialog;
    }
    DocumentSignListComponent.prototype.ngOnInit = function () { };
    DocumentSignListComponent.prototype.onDragBegin = function (event) {
        this.signaturesService.documentFreeze = true;
    };
    DocumentSignListComponent.prototype.moveSign = function (event, i) {
        var percentx = (event.x * 100) / this.signaturesService.workingAreaWidth;
        var percenty = (event.y * 100) / this.signaturesService.workingAreaHeight;
        this.signaturesService.signaturesContent[this.signaturesService.currentPage][i].positionX = percentx;
        this.signaturesService.signaturesContent[this.signaturesService.currentPage][i].positionY = percenty;
        this.localStorage.save(this.signaturesService.mainDocumentId.toString(), JSON.stringify({ 'sign': this.signaturesService.signaturesContent, 'note': this.signaturesService.notesContent }));
        this.signaturesService.documentFreeze = false;
    };
    DocumentSignListComponent.prototype.cloneSign = function (i) {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, { autoFocus: false, width: '450px', data: { title: 'lang.wantSignOtherPage', msg: '' } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'yes') {
                _this.signaturesService.signaturesContent[_this.signaturesService.currentPage][i].inAllPage = true;
                _this.signaturesService.signaturesContent[_this.signaturesService.currentPage][i].token = Math.random().toString(36).substr(2, 9);
                for (var index = 1; index <= _this.signaturesService.totalPage; index++) {
                    if (!_this.signaturesService.signaturesContent[index]) {
                        _this.signaturesService.signaturesContent[index] = [];
                    }
                    if (index !== _this.signaturesService.currentPage) {
                        _this.signaturesService.signaturesContent[index].push(JSON.parse(JSON.stringify(_this.signaturesService.signaturesContent[_this.signaturesService.currentPage][i])));
                    }
                }
                _this.localStorage.save(_this.signaturesService.mainDocumentId.toString(), JSON.stringify({ 'sign': _this.signaturesService.signaturesContent, 'note': _this.signaturesService.notesContent }));
            }
        });
        this.menuSign.closeMenu();
    };
    DocumentSignListComponent.prototype.deleteSignature = function (i) {
        if (this.signaturesService.signaturesContent[this.signaturesService.currentPage][i].inAllPage === true) {
            var token = this.signaturesService.signaturesContent[this.signaturesService.currentPage][i].token;
            var r = confirm(this.translate.instant('lang.wantDeleteSignatureOtherPage'));
            if (r) {
                for (var index = 1; index <= this.signaturesService.totalPage; index++) {
                    if (!this.signaturesService.signaturesContent[index]) {
                        this.signaturesService.signaturesContent[index] = [];
                    }
                    for (var index2 = 0; index2 <= this.signaturesService.signaturesContent[index].length; index2++) {
                        if (this.signaturesService.signaturesContent[index][index2]) {
                            if (token === this.signaturesService.signaturesContent[index][index2].token) {
                                this.signaturesService.signaturesContent[index].splice(index2, 1);
                            }
                        }
                    }
                }
            }
            else {
                this.signaturesService.signaturesContent[this.signaturesService.currentPage].splice(i, 1);
            }
        }
        else {
            this.signaturesService.signaturesContent[this.signaturesService.currentPage].splice(i, 1);
        }
        this.localStorage.save(this.signaturesService.mainDocumentId.toString(), JSON.stringify({ 'sign': this.signaturesService.signaturesContent, 'note': this.signaturesService.notesContent }));
    };
    // USE TO PREVENT ISSUE IN MOBILE
    DocumentSignListComponent.prototype.openMenu = function (menu) {
        menu.openMenu();
    };
    __decorate([
        core_1.ViewChild('menuTrigger'),
        __metadata("design:type", material_1.MatMenuTrigger)
    ], DocumentSignListComponent.prototype, "menuSign", void 0);
    DocumentSignListComponent = __decorate([
        core_1.Component({
            selector: 'app-document-sign-list',
            template: __webpack_require__(/*! ./document-sign-list.component.html */ "./src/frontend/app/documentSignList/document-sign-list.component.html"),
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            platform_browser_1.DomSanitizer,
            signatures_service_1.SignaturesContentService,
            notification_service_1.NotificationService,
            local_storage_service_1.LocalStorageService,
            material_1.MatDialog])
    ], DocumentSignListComponent);
    return DocumentSignListComponent;
}());
exports.DocumentSignListComponent = DocumentSignListComponent;


/***/ }),

/***/ "./src/frontend/app/drawer/drawer.component.html":
/*!*******************************************************!*\
  !*** ./src/frontend/app/drawer/drawer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"drawer\" [ngClass]=\"{'open': open}\"> -->\n<section class=\"drawer\" [ngClass]=\"{'open' : signaturesService.showDrawer}\">\n  <button *ngIf=\"!signaturesService.showDrawer\" class=\"btn green btn-action\" (click)=\"openDrawer()\">\n      <i class=\"fas fa-arrow-up\"></i>\n      {{'lang.open' | translate}}\n    </button>\n  <i *ngIf=\"signaturesService.showDrawer\"  class=\"far fa-times-circle fa-3x btn-action\" (click)=\"closeDrawer()\"></i>\n  <app-signatures></app-signatures>\n  <app-pad></app-pad>\n</section>\n"

/***/ }),

/***/ "./src/frontend/app/drawer/drawer.component.scss":
/*!*******************************************************!*\
  !*** ./src/frontend/app/drawer/drawer.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drawer {\n  width: 100vw;\n  height: 0;\n  background: #FCFCFC;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);\n  transition: 0.25s all ease-in-out;\n  z-index: 2; }\n  .drawer.open {\n    height: 470px; }\n  .drawer .btn-action {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvZHJhd2VyL0Q6XFxNYWFyY2hQYXJhcGhldXItMjAuMDMvc3JjXFxmcm9udGVuZFxcYXBwXFxkcmF3ZXJcXGRyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MsaUNBQWlDO0VBQ2pDLFVBQVUsRUFBQTtFQVZaO0lBWUksYUFBYSxFQUFBO0VBWmpCO0lBZUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9mcm9udGVuZC9hcHAvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmF3ZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMDtcbiAgYmFja2dyb3VuZDogI0ZDRkNGQztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgdHJhbnNpdGlvbjogMC4yNXMgYWxsIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAyO1xuICAmLm9wZW4ge1xuICAgIGhlaWdodDogNDcwcHg7XG4gIH1cbiAgLmJ0bi1hY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/frontend/app/drawer/drawer.component.ts":
/*!*****************************************************!*\
  !*** ./src/frontend/app/drawer/drawer.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var DrawerComponent = /** @class */ (function () {
    function DrawerComponent(translate, signaturesService) {
        this.translate = translate;
        this.signaturesService = signaturesService;
    }
    DrawerComponent.prototype.openDrawer = function () {
        this.signaturesService.showSign = true;
        this.signaturesService.showDrawer = true;
    };
    DrawerComponent.prototype.closeDrawer = function () {
        this.signaturesService.showDrawer = false;
        this.signaturesService.showPad = false;
        this.signaturesService.showSign = false;
    };
    DrawerComponent = __decorate([
        core_1.Component({
            selector: 'app-drawer',
            template: __webpack_require__(/*! ./drawer.component.html */ "./src/frontend/app/drawer/drawer.component.html"),
            styles: [__webpack_require__(/*! ./drawer.component.scss */ "./src/frontend/app/drawer/drawer.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService, signatures_service_1.SignaturesContentService])
    ], DrawerComponent);
    return DrawerComponent;
}());
exports.DrawerComponent = DrawerComponent;


/***/ }),

/***/ "./src/frontend/app/login/forgotPassword/forgotPassword.component.html":
/*!*****************************************************************************!*\
  !*** ./src/frontend/app/login/forgotPassword/forgotPassword.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-content\">\n    <mat-icon svgIcon=\"etapLogo\" class=\"maarchLogo\"></mat-icon>\n    <mat-card class=\"login-form\">\n        <form (ngSubmit)=\"generateLink()\">\n            <div class=\"alert-message alert-message-info\" role=\"alert\" [innerHTML]=\"'lang.afterClickingSendLinkChangePassword' | translate\">\n            </div>\n            <mat-form-field class=\"input-row\">\n                <input name=\"login\" matInput placeholder=\"{{'lang.enterLogin' | translate}}\" [(ngModel)]=\"newLogin.login\" type=\"text\" oninput=\"this.value = this.value.toLowerCase()\">\n            </mat-form-field>\n            <button type=\"submit\" mat-button [disabled]=\"newLogin.login == '' || loading\">{{labelButton | translate}}</button>\n            <button mat-button routerLink=\"/login\">{{'lang.cancel' | translate}}</button>\n        </form>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/frontend/app/login/forgotPassword/forgotPassword.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/frontend/app/login/forgotPassword/forgotPassword.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  background-color: #135F7F;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.login-form {\n  max-width: 600px;\n  text-align: center; }\n\n.input-row {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.maarchLogo {\n  position: absolute;\n  transition: all 1s ease-in-out;\n  width: 250px;\n  height: auto;\n  padding-bottom: 10px;\n  transform: translateY(-200px); }\n\nfooter {\n  color: white;\n  position: absolute;\n  bottom: 5px;\n  font-size: 10px;\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvbG9naW4vZm9yZ290UGFzc3dvcmQvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXGxvZ2luXFxmb3Jnb3RQYXNzd29yZFxcZm9yZ290UGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvZnJvbnRlbmQvYXBwL2xvZ2luL2ZvcmdvdFBhc3N3b3JkL0Q6XFxNYWFyY2hQYXJhcGhldXItMjAuMDMvc3JjXFxmcm9udGVuZFxcY3NzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkNGZTtFREdmLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9mcm9udGVuZC9hcHAvbG9naW4vZm9yZ290UGFzc3dvcmQvZm9yZ290UGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLmxvZ2luLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubWFhcmNoTG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwcHgpO1xufVxuXG5mb290ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuIiwiJGNvbG9yLW1haW46ICM0RjRGNEY7IC8vIGRlZmF1bHQgY29sb3IgaW4gYXBwbGljYXRpb25cbiRwcmltYXJ5OiAjMTM1RjdGOyAvLyBtYWluIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG4kYWNjZW50OiAjMkVDQzcxOyAvLyBhY2NlbnQgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb24gKGxpa2Ugc3VjY2VzcyBidXR0b25zKVxuJHdhcm46IHJnYigyMzEsIDc2LCA2MCk7IC8vIHdhcm5pbmcgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cblxuLy8gV0FSTklORyAhIFlPVSBNVVNUIFJFQ09NUElMQVRFIG1hYXJjaC1tYXRlcmlhbC5zY3NzIElGIFZBTFVFUyBDSEFOR0VTIl19 */"

/***/ }),

/***/ "./src/frontend/app/login/forgotPassword/forgotPassword.component.ts":
/*!***************************************************************************!*\
  !*** ./src/frontend/app/login/forgotPassword/forgotPassword.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var notification_service_1 = __webpack_require__(/*! ../../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(translate, router, http, iconReg, sanitizer, notificationService) {
        this.translate = translate;
        this.router = router;
        this.http = http;
        this.notificationService = notificationService;
        this.loadingForm = false;
        this.loading = false;
        this.newLogin = {
            login: '',
            password: ''
        };
        this.labelButton = 'lang.send';
        this.appVersion = '';
        this.appAuthor = '';
        //iconReg.addSvgIcon('maarchLogo', sanitizer.bypassSecurityTrustResourceUrl('../src/frontend/assets/logo_white.svg'));
        iconReg.addSvgIcon('etapLogo', sanitizer.bypassSecurityTrustResourceUrl('../src/frontend/assets/etap_logo.svg'));
        iconReg.addSvgIcon('etapLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/etap_logo.svg'));
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ForgotPasswordComponent.prototype.generateLink = function () {
        var _this = this;
        this.labelButton = 'lang.generation';
        this.loading = true;
        this.http.post('../rest/password', { 'login': this.newLogin.login })
            .pipe(operators_1.finalize(function () {
            _this.labelButton = 'lang.send';
            _this.loading = false;
        }))
            .subscribe(function (data) {
            _this.loadingForm = true;
            _this.notificationService.success('lang.requestSentByEmail');
            _this.router.navigate(['/login']);
        }, function (err) {
            _this.notificationService.handleErrors(err);
        });
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./forgotPassword.component.html */ "./src/frontend/app/login/forgotPassword/forgotPassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotPassword.component.scss */ "./src/frontend/app/login/forgotPassword/forgotPassword.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService, router_1.Router, http_1.HttpClient, material_1.MatIconRegistry, platform_browser_1.DomSanitizer, notification_service_1.NotificationService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;


/***/ }),

/***/ "./src/frontend/app/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/frontend/app/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-content\">\n    <mat-icon svgIcon=\"etapLogo\" class=\"maarchLogo\"></mat-icon>\n    <mat-card class=\"login-form\" *ngIf=\"showForm\" [@myAnimation]>\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\n            <mat-form-field class=\"input-row\">\n                <input id=\"login\"  name=\"login\" matInput placeholder=\"{{'lang.login' | translate}}\" formControlName=\"login\" type=\"text\">\n            </mat-form-field>\n            <mat-form-field class=\"input-row\">\n                <input id=\"password\" name=\"password\" matInput placeholder=\"{{'lang.password' | translate}}\" type=\"password\" formControlName=\"password\">\n                <mat-hint align=\"end\" *ngIf=\"authService.authMode === 'default'\"><a routerLink=\"/forgot-password\" class=\"infoLogin\">{{'lang.forgotPassword' | translate}} ?</a></mat-hint>\n                <mat-hint align=\"end\" *ngIf=\"authService.authMode === 'ldap'\"><span class=\"infoLogin\">{{'lang.ldapEnabled' | translate}}</span></mat-hint>\n            </mat-form-field>\n            <button type=\"submit\" mat-button [disabled]=\"loginForm.invalid || loading\">{{'lang.connect' | translate}}</button>\n        </form>\n    </mat-card>\n    <footer>\n        Maarch parapheur {{environment.VERSION}} Powered by {{environment.AUTHOR}}\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/frontend/app/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/frontend/app/login/login.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  background-color: #135F7F;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.login-form {\n  max-width: 768px;\n  text-align: center; }\n\n.input-row {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.maarchLogo {\n  position: absolute;\n  transition: all 1s ease-in-out;\n  width: 250px;\n  height: auto;\n  padding-bottom: 10px; }\n\nfooter {\n  color: white;\n  position: absolute;\n  bottom: 5px;\n  font-size: 10px;\n  opacity: 0.5; }\n\n.infoLogin {\n  font-weight: bold;\n  color: #135F7F;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvbG9naW4vRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9mcm9udGVuZC9hcHAvbG9naW4vRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxjc3NcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQ0ZlO0VER2YsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Nzcy92YXJzLnNjc3MnO1xuXG4ubG9naW4tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9naW4tZm9ybSB7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0LXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5tYWFyY2hMb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuZm9vdGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmluZm9Mb2dpbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzEzNUY3RjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSIsIiRjb2xvci1tYWluOiAjNEY0RjRGOyAvLyBkZWZhdWx0IGNvbG9yIGluIGFwcGxpY2F0aW9uXG4kcHJpbWFyeTogIzEzNUY3RjsgLy8gbWFpbiBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvblxuJGFjY2VudDogIzJFQ0M3MTsgLy8gYWNjZW50IGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uIChsaWtlIHN1Y2Nlc3MgYnV0dG9ucylcbiR3YXJuOiByZ2IoMjMxLCA3NiwgNjApOyAvLyB3YXJuaW5nIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG5cbi8vIFdBUk5JTkcgISBZT1UgTVVTVCBSRUNPTVBJTEFURSBtYWFyY2gtbWF0ZXJpYWwuc2NzcyBJRiBWQUxVRVMgQ0hBTkdFUyJdfQ== */"

/***/ }),

/***/ "./src/frontend/app/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/frontend/app/login/login.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var environment_1 = __webpack_require__(/*! ../../core/environments/environment */ "./src/frontend/core/environments/environment.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var auth_service_1 = __webpack_require__(/*! ../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, authService, signaturesService, notificationService, dialog, formBuilder) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.showForm = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuth) {
            this.router.navigate(['/documents']);
        }
        this.loginForm = this.formBuilder.group({
            login: [null, forms_1.Validators.required],
            password: [null, forms_1.Validators.required]
        });
        this.environment = environment_1.environment;
        this.signaturesService.reset();
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            $('.maarchLogo').css({ 'transform': 'translateY(-200px)' });
        }, 200);
        setTimeout(function () {
            _this.showForm = true;
            _this.fixAutoFill();
        }, 500);
    };
    LoginComponent.prototype.fixAutoFill = function () {
        var _this = this;
        setTimeout(function () {
            _this.loginForm.get('login').setValue($('#login').val());
            _this.loginForm.get('password').setValue($('#password').val());
        }, 100);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.http.post('../rest/authenticate', { 'login': this.loginForm.get('login').value, 'password': this.loginForm.get('password').value }, { observe: 'response' })
            .pipe(operators_1.tap(function (data) {
            _this.loading = false;
            _this.showForm = false;
            _this.authService.saveTokens(data.headers.get('Token'), data.headers.get('Refresh-Token'));
            _this.authService.setUser({});
            $('.maarchLogo').css({ 'transform': 'translateY(0px)' });
            setTimeout(function () {
                _this.router.navigate(['/documents']);
            }, 700);
        }), operators_1.catchError(function (err) {
            _this.loading = false;
            if (err.status === 401) {
                _this.notificationService.error('lang.wrongLoginPassword');
            }
            else {
                _this.notificationService.handleErrors(err);
            }
            return rxjs_1.EMPTY;
        }))
            .subscribe();
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./login.component.html */ "./src/frontend/app/login/login.component.html"),
            animations: [
                animations_1.trigger('myAnimation', [
                    animations_1.transition(':enter', [
                        animations_1.style({ transform: 'translateX(100%)', opacity: 0 }),
                        animations_1.animate('500ms', animations_1.style({ transform: 'translateX(0)', 'opacity': 1 }))
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ transform: 'translateX(0)', 'opacity': 1 }),
                        animations_1.animate('500ms', animations_1.style({ transform: 'translateX(100%)', 'opacity': 0 })),
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/frontend/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, auth_service_1.AuthService, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService, material_1.MatDialog, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/frontend/app/login/updatePassword/updatePassword.component.html":
/*!*****************************************************************************!*\
  !*** ./src/frontend/app/login/updatePassword/updatePassword.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-content\">\n    <mat-icon svgIcon=\"etapLogo\" class=\"maarchLogo\"></mat-icon>\n    <mat-card class=\"login-form\">\n        <form (ngSubmit)=\"updatePassword()\">\n            <div class=\"alert-message alert-message-info\" role=\"alert\">\n                {{'lang.logInOncePasswordChanged' | translate}}\n            </div>\n            <mat-form-field class=\"input-row\">\n                <input name=\"newPassword\" matInput [(ngModel)]=\"password.newPassword\"\n                    placeholder=\"{{'lang.newPassword' | translate}}\" [type]=\"hideNewPassword ? 'password' : 'text'\"\n                    (keyup)=\"checkPasswordValidity(password.newPassword)\">\n                <mat-icon matSuffix (click)=\"hideNewPassword = !hideNewPassword\" class=\"fa fa-2x\"\n                    [ngClass]=\"[hideNewPassword ? 'fa-eye-slash' : 'fa-eye']\">\n                </mat-icon>\n                <mat-hint style=\"color:red;\">{{handlePassword.errorMsg | translate}}</mat-hint>\n            </mat-form-field>\n            <mat-form-field class=\"input-row\">\n                <input name=\"passwordConfirmation\" matInput [(ngModel)]=\"password.passwordConfirmation\"\n                    placeholder=\"{{'lang.passwordConfirmation' | translate}}\"\n                    [type]=\"hideNewPasswordConfirm ? 'password' : 'text'\">\n                <mat-icon matSuffix (click)=\"hideNewPasswordConfirm = !hideNewPasswordConfirm\" class=\"fa fa-2x\"\n                    [ngClass]=\"[hideNewPasswordConfirm ? 'fa-eye-slash' : 'fa-eye']\"></mat-icon>\n                <mat-hint style=\"color:red;\" *ngIf=\"password.passwordConfirmation !== password.newPassword\">\n                    {{'lang.passwordNotMatch' | translate}}</mat-hint>\n                <mat-hint style=\"color:green;\"\n                    *ngIf=\"password.passwordConfirmation === password.newPassword && password.newPassword.length > 0 && password.passwordConfirmation.length> 0\">\n                    {{'lang.samePassword' | translate}}</mat-hint>\n            </mat-form-field>\n            <button type=\"submit\" mat-button [disabled]=\"allowValidate() || loading\">{{labelButton | translate}}</button>\n            <button mat-button routerLink=\"/login\">{{'lang.cancel' | translate}}</button>\n        </form>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/frontend/app/login/updatePassword/updatePassword.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/frontend/app/login/updatePassword/updatePassword.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  background-color: #135F7F;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.login-form {\n  max-width: 600px;\n  text-align: center; }\n\n.input-row {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.maarchLogo {\n  position: absolute;\n  transition: all 1s ease-in-out;\n  width: 250px;\n  height: auto;\n  padding-bottom: 10px;\n  transform: translateY(-230px); }\n\nfooter {\n  color: white;\n  position: absolute;\n  bottom: 5px;\n  font-size: 10px;\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvbG9naW4vdXBkYXRlUGFzc3dvcmQvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXGxvZ2luXFx1cGRhdGVQYXNzd29yZFxcdXBkYXRlUGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvZnJvbnRlbmQvYXBwL2xvZ2luL3VwZGF0ZVBhc3N3b3JkL0Q6XFxNYWFyY2hQYXJhcGhldXItMjAuMDMvc3JjXFxmcm9udGVuZFxcY3NzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkNGZTtFREdmLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9mcm9udGVuZC9hcHAvbG9naW4vdXBkYXRlUGFzc3dvcmQvdXBkYXRlUGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLmxvZ2luLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubWFhcmNoTG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjMwcHgpO1xufVxuXG5mb290ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuIiwiJGNvbG9yLW1haW46ICM0RjRGNEY7IC8vIGRlZmF1bHQgY29sb3IgaW4gYXBwbGljYXRpb25cbiRwcmltYXJ5OiAjMTM1RjdGOyAvLyBtYWluIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG4kYWNjZW50OiAjMkVDQzcxOyAvLyBhY2NlbnQgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb24gKGxpa2Ugc3VjY2VzcyBidXR0b25zKVxuJHdhcm46IHJnYigyMzEsIDc2LCA2MCk7IC8vIHdhcm5pbmcgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cblxuLy8gV0FSTklORyAhIFlPVSBNVVNUIFJFQ09NUElMQVRFIG1hYXJjaC1tYXRlcmlhbC5zY3NzIElGIFZBTFVFUyBDSEFOR0VTIl19 */"

/***/ }),

/***/ "./src/frontend/app/login/updatePassword/updatePassword.component.ts":
/*!***************************************************************************!*\
  !*** ./src/frontend/app/login/updatePassword/updatePassword.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var notification_service_1 = __webpack_require__(/*! ../../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var UpdatePasswordComponent = /** @class */ (function () {
    function UpdatePasswordComponent(translate, router, route, http, iconReg, sanitizer, notificationService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.http = http;
        this.notificationService = notificationService;
        this.loadingForm = false;
        this.loading = false;
        this.token = '';
        this.password = {
            newPassword: '',
            passwordConfirmation: ''
        };
        this.labelButton = 'lang.update';
        this.hideNewPassword = true;
        this.hideNewPasswordConfirm = true;
        // HANDLE PASSWORD
        this.passwordRules = {
            minLength: { enabled: false, value: 0 },
            complexityUpper: { enabled: false, value: 0 },
            complexityNumber: { enabled: false, value: 0 },
            complexitySpecial: { enabled: false, value: 0 },
            renewal: { enabled: false, value: 0 },
            historyLastUse: { enabled: false, value: 0 },
        };
        this.handlePassword = {
            error: false,
            errorMsg: ''
        };
        this.ruleText = '';
        this.otherRuleText = '';
        //iconReg.addSvgIcon('maarchLogo', sanitizer.bypassSecurityTrustResourceUrl('../src/frontend/assets/logo_white.svg'));
        iconReg.addSvgIcon('etapLogo', sanitizer.bypassSecurityTrustResourceUrl('../src/frontend/assets/etap_logo.svg'));
        this.route.queryParams
            .subscribe(function (params) {
            _this.token = params.token;
        });
    }
    UpdatePasswordComponent.prototype.ngOnInit = function () { };
    UpdatePasswordComponent.prototype.updatePassword = function () {
        var _this = this;
        this.labelButton = 'lang.sending';
        this.loading = true;
        this.http.put('../rest/password', { 'token': this.token, 'password': this.password.newPassword })
            .pipe(operators_1.finalize(function () {
            _this.labelButton = 'lang.update';
            _this.loading = false;
        }))
            .subscribe(function (data) {
            _this.loadingForm = true;
            _this.notificationService.success('lang.passwordChanged');
            _this.router.navigate(['/login']);
        }, function (err) {
            _this.notificationService.handleErrors(err);
        });
    };
    UpdatePasswordComponent.prototype.checkPasswordValidity = function (password) {
        var _this = this;
        this.handlePassword.error = true;
        if (!password.match(/[A-Z]/g) && this.passwordRules.complexityUpper.enabled) {
            this.handlePassword.errorMsg = 'lang.upperRequired';
        }
        else if (!password.match(/[0-9]/g) && this.passwordRules.complexityNumber.enabled) {
            this.handlePassword.errorMsg = 'lang.numberRequired';
        }
        else if (!password.match(/[^A-Za-z0-9]/g) && this.passwordRules.complexitySpecial.enabled) {
            this.handlePassword.errorMsg = 'lang.specialCharRequired';
        }
        else if (password.length < this.passwordRules.minLength.value && this.passwordRules.minLength.enabled) {
            this.translate.get('lang.minLengthChar', { charLength: this.passwordRules.minLength.value }).subscribe(function (res) {
                _this.handlePassword.errorMsg = res;
            });
        }
        else {
            this.handlePassword.error = false;
            this.handlePassword.errorMsg = '';
        }
    };
    UpdatePasswordComponent.prototype.getPassRules = function () {
        var _this = this;
        this.handlePassword.error = false;
        this.handlePassword.errorMsg = '';
        this.http.get('../rest/passwordRules')
            .subscribe(function (data) {
            var ruleTextArr = [];
            var otherRuleTextArr = [];
            data.rules.forEach(function (rule) {
                if (rule.label === 'minLength') {
                    _this.passwordRules.minLength.enabled = rule.enabled;
                    _this.passwordRules.minLength.value = rule.value;
                    if (rule.enabled) {
                        _this.translate.get('lang.minLengthChar', { charLength: rule.value }).subscribe(function (res) {
                            ruleTextArr.push(res);
                        });
                    }
                }
                else if (rule.label === 'complexityUpper') {
                    _this.passwordRules.complexityUpper.enabled = rule.enabled;
                    _this.passwordRules.complexityUpper.value = rule.value;
                    if (rule.enabled) {
                        ruleTextArr.push('lang.upperRequired');
                    }
                }
                else if (rule.label === 'complexityNumber') {
                    _this.passwordRules.complexityNumber.enabled = rule.enabled;
                    _this.passwordRules.complexityNumber.value = rule.value;
                    if (rule.enabled) {
                        ruleTextArr.push('lang.numberRequired');
                    }
                }
                else if (rule.label === 'complexitySpecial') {
                    _this.passwordRules.complexitySpecial.enabled = rule.enabled;
                    _this.passwordRules.complexitySpecial.value = rule.value;
                    if (rule.enabled) {
                        ruleTextArr.push('lang.specialCharRequired');
                    }
                }
                else if (rule.label === 'renewal') {
                    _this.passwordRules.renewal.enabled = rule.enabled;
                    _this.passwordRules.renewal.value = rule.value;
                    if (rule.enabled) {
                        _this.translate.get('lang.renewalInfo', { time: rule.value }).subscribe(function (res) {
                            otherRuleTextArr.push(res);
                        });
                    }
                }
                else if (rule.label === 'historyLastUse') {
                    _this.passwordRules.historyLastUse.enabled = rule.enabled;
                    _this.passwordRules.historyLastUse.value = rule.value;
                    if (rule.enabled) {
                        _this.translate.get('lang.historyUseInfo', { countPwd: rule.value }).subscribe(function (res) {
                            otherRuleTextArr.push(res);
                        });
                    }
                }
            });
            _this.ruleText = ruleTextArr.join(', ');
            _this.otherRuleText = otherRuleTextArr.join('<br/>');
        }, function (err) {
            _this.notificationService.handleErrors(err);
        });
    };
    UpdatePasswordComponent.prototype.allowValidate = function () {
        if ((this.handlePassword.error || this.password.newPassword !== this.password.passwordConfirmation || this.password.newPassword.length === 0 || this.password.passwordConfirmation.length === 0)) {
            return true;
        }
        else {
            return false;
        }
    };
    UpdatePasswordComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./updatePassword.component.html */ "./src/frontend/app/login/updatePassword/updatePassword.component.html"),
            styles: [__webpack_require__(/*! ./updatePassword.component.scss */ "./src/frontend/app/login/updatePassword/updatePassword.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService, router_1.Router, router_1.ActivatedRoute, http_1.HttpClient, material_1.MatIconRegistry, platform_browser_1.DomSanitizer, notification_service_1.NotificationService])
    ], UpdatePasswordComponent);
    return UpdatePasswordComponent;
}());
exports.UpdatePasswordComponent = UpdatePasswordComponent;


/***/ }),

/***/ "./src/frontend/app/modal/confirm-modal.component.html":
/*!*************************************************************!*\
  !*** ./src/frontend/app/modal/confirm-modal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modalContent\">\n  <h1 mat-dialog-title class=\"default\" *ngIf=\"signaturesService.signaturesContent.length > 0 || signaturesService.notesContent.length > 0\"><i\n      class=\"fa fa-question-circle fa-2x\"></i><br />{{data.msg | translate}}</h1>\n  <h1 mat-dialog-title style=\"color: #f5a623;font-weight: bold;\" *ngIf=\"signaturesService.signaturesContent.length == 0 && signaturesService.notesContent.length == 0\"><i\n      class=\"fa fa-exclamation-triangle fa-2x\"></i><br />{{'lang.warning' | translate}} !</h1>\n  <div mat-dialog-content>\n    <p *ngIf=\"signaturesService.signaturesContent.length == 0 && signaturesService.notesContent.length == 0\">{{'lang.validateDocumentWithoutSignOrNote' | translate}}</p>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-icon-button class=\"close\" (click)=\"this.dialogRef.close();\">\n      <mat-icon fontSet=\"fas\" fontIcon=\"fa-times\"></mat-icon>\n    </button>\n    <button class=\"actions btn green\" mat-button (click)=\"confirmDoc();\" [disabled]=\"disableState\"><i class=\"fas fa-check-circle fa-2x\"></i>\n      {{ msgButton | translate}}</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/frontend/app/modal/confirm-modal.component.scss":
/*!*************************************************************!*\
  !*** ./src/frontend/app/modal/confirm-modal.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalContent {\n  position: relative; }\n\n.mat-dialog-content, .mat-dialog-title {\n  text-align: center !important; }\n\n.mat-dialog-title {\n  font-weight: bold; }\n\n.actions {\n  width: 100%;\n  margin: 10px; }\n\n.close {\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  color: #666; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvbW9kYWwvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXG1vZGFsXFxjb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksNkJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsQ29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1kaWFsb2ctY29udGVudCwgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIHRleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnQ7XG59XG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYWN0aW9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTVweDtcbiAgICByaWdodDogLTE1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzY2Njtcbn0iXX0= */"

/***/ }),

/***/ "./src/frontend/app/modal/confirm-modal.component.ts":
/*!***********************************************************!*\
  !*** ./src/frontend/app/modal/confirm-modal.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(translate, data, http, dialogRef, signaturesService, notificationService) {
        this.translate = translate;
        this.data = data;
        this.http = http;
        this.dialogRef = dialogRef;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.disableState = false;
        this.msgButton = 'lang.validate';
    }
    ConfirmModalComponent.prototype.confirmDoc = function () {
        var _this = this;
        var signatures = [];
        if (this.signaturesService.currentAction > 0) {
            var _loop_1 = function (index) {
                if (this_1.signaturesService.signaturesContent[index]) {
                    this_1.signaturesService.signaturesContent[index].forEach(function (signature) {
                        signatures.push({
                            'encodedImage': signature.encodedSignature,
                            'width': signature.width,
                            'positionX': signature.positionX,
                            'positionY': signature.positionY,
                            'type': 'PNG',
                            'page': index,
                        });
                    });
                }
                if (this_1.signaturesService.notesContent[index]) {
                    this_1.signaturesService.notesContent[index].forEach(function (note) {
                        signatures.push({
                            'encodedImage': note.fullPath.replace('data:image/png;base64,', ''),
                            'width': note.width,
                            'positionX': note.positionX,
                            'positionY': note.positionY,
                            'type': 'PNG',
                            'page': index,
                        });
                    });
                }
            };
            var this_1 = this;
            for (var index = 1; index <= this.signaturesService.totalPage; index++) {
                _loop_1(index);
            }
            this.disableState = true;
            this.msgButton = 'Envoi...';
            this.http.put('../rest/documents/' + this.signaturesService.mainDocumentId + '/actions/' + this.signaturesService.currentAction, { 'signatures': signatures })
                .pipe(operators_1.finalize(function () {
                _this.disableState = false;
                _this.msgButton = 'lang.validate';
            }))
                .subscribe(function () {
                if (_this.signaturesService.documentsList[_this.signaturesService.indexDocumentsList] !== undefined) {
                    _this.signaturesService.documentsList.splice(_this.signaturesService.indexDocumentsList, 1);
                    if (_this.signaturesService.documentsListCount.current > 0) {
                        _this.signaturesService.documentsListCount.current--;
                    }
                }
                _this.dialogRef.close('sucess');
            });
        }
        else {
            this.dialogRef.close('sucess');
        }
    };
    ConfirmModalComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/frontend/app/modal/confirm-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/frontend/app/modal/confirm-modal.component.scss")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [core_2.TranslateService, Object, http_1.HttpClient, material_1.MatDialogRef, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());
exports.ConfirmModalComponent = ConfirmModalComponent;


/***/ }),

/***/ "./src/frontend/app/modal/reject-info.component.ts":
/*!*********************************************************!*\
  !*** ./src/frontend/app/modal/reject-info.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var auth_service_1 = __webpack_require__(/*! ../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var filters_service_1 = __webpack_require__(/*! ../service/filters.service */ "./src/frontend/app/service/filters.service.ts");
var RejectInfoBottomSheetComponent = /** @class */ (function () {
    function RejectInfoBottomSheetComponent(translate, router, signaturesService, authService, filtersService, bottomSheetRef) {
        this.translate = translate;
        this.router = router;
        this.signaturesService = signaturesService;
        this.authService = authService;
        this.filtersService = filtersService;
        this.bottomSheetRef = bottomSheetRef;
        this.date = new Date();
    }
    RejectInfoBottomSheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.signaturesService.documentsList[_this.signaturesService.indexDocumentsList]) {
                _this.signaturesService.sideNavRigtDatas = {
                    mode: 'mainDocumentDetail',
                    width: '450px',
                    locked: false,
                };
                _this.filtersService.resfreshDocuments();
                _this.router.navigate(['/documents/' + _this.signaturesService.documentsList[_this.signaturesService.indexDocumentsList].id]);
            }
            else {
                _this.signaturesService.sideNavRigtDatas = {
                    mode: 'mainDocumentDetail',
                    width: '450px',
                    locked: false,
                };
                _this.router.navigate(['/documents']);
            }
            _this.bottomSheetRef.dismiss();
        }, 2000);
    };
    RejectInfoBottomSheetComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ../modal/reject-info.html */ "./src/frontend/app/modal/reject-info.html"),
            styles: [__webpack_require__(/*! ../modal/reject-info.scss */ "./src/frontend/app/modal/reject-info.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService, router_1.Router, signatures_service_1.SignaturesContentService, auth_service_1.AuthService, filters_service_1.FiltersService, material_1.MatBottomSheetRef])
    ], RejectInfoBottomSheetComponent);
    return RejectInfoBottomSheetComponent;
}());
exports.RejectInfoBottomSheetComponent = RejectInfoBottomSheetComponent;


/***/ }),

/***/ "./src/frontend/app/modal/reject-info.html":
/*!*************************************************!*\
  !*** ./src/frontend/app/modal/reject-info.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"red\" style=\"text-align: center;\">\n  <h1><i class=\"fa fa-thumbs-down fa-4x\"></i></h1>\n  <p>{{'lang.documentRefusedAs' | translate}}</p>\n\n  <p style=\"font-weight:bold;font-size: 30px;\">{{authService.user.firstname}} {{authService.user.lastname}}</p>\n  <p style=\"font-weight:bold;font-size: 15px;\">{{'lang.onRange' | translate}} {{date | date:'dd/MM/yyyy'}} {{'lang.atRange' | translate}} {{date | date:'HH:mm'}}</p>\n</div>\n"

/***/ }),

/***/ "./src/frontend/app/modal/reject-info.scss":
/*!*************************************************!*\
  !*** ./src/frontend/app/modal/reject-info.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL21vZGFsL3JlamVjdC1pbmZvLnNjc3MifQ== */"

/***/ }),

/***/ "./src/frontend/app/modal/success-info-valid.component.ts":
/*!****************************************************************!*\
  !*** ./src/frontend/app/modal/success-info-valid.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var auth_service_1 = __webpack_require__(/*! ../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var filters_service_1 = __webpack_require__(/*! ../service/filters.service */ "./src/frontend/app/service/filters.service.ts");
var SuccessInfoValidBottomSheetComponent = /** @class */ (function () {
    function SuccessInfoValidBottomSheetComponent(translate, router, signaturesService, filtersService, authService, bottomSheetRef) {
        this.translate = translate;
        this.router = router;
        this.signaturesService = signaturesService;
        this.filtersService = filtersService;
        this.authService = authService;
        this.bottomSheetRef = bottomSheetRef;
        this.date = new Date();
    }
    SuccessInfoValidBottomSheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.signaturesService.documentsList[_this.signaturesService.indexDocumentsList]) {
                _this.signaturesService.sideNavRigtDatas = {
                    mode: 'mainDocumentDetail',
                    width: '450px',
                    locked: false,
                };
                _this.filtersService.resfreshDocuments();
                _this.router.navigate(['/documents/' + _this.signaturesService.documentsList[_this.signaturesService.indexDocumentsList].id]);
            }
            else {
                _this.signaturesService.sideNavRigtDatas = {
                    mode: 'mainDocumentDetail',
                    width: '450px',
                    locked: false,
                };
                _this.router.navigate(['/documents']);
            }
            _this.bottomSheetRef.dismiss();
        }, 2000);
    };
    SuccessInfoValidBottomSheetComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./success-info-valid.html */ "./src/frontend/app/modal/success-info-valid.html"),
            styles: [__webpack_require__(/*! ./success-info-valid.scss */ "./src/frontend/app/modal/success-info-valid.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService, router_1.Router, signatures_service_1.SignaturesContentService, filters_service_1.FiltersService, auth_service_1.AuthService, material_1.MatBottomSheetRef])
    ], SuccessInfoValidBottomSheetComponent);
    return SuccessInfoValidBottomSheetComponent;
}());
exports.SuccessInfoValidBottomSheetComponent = SuccessInfoValidBottomSheetComponent;


/***/ }),

/***/ "./src/frontend/app/modal/success-info-valid.html":
/*!********************************************************!*\
  !*** ./src/frontend/app/modal/success-info-valid.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"green\" style=\"text-align: center;\">\n  <h1><i class=\"fa fa-thumbs-up fa-4x\"></i></h1>\n  <p>{{'lang.documentValidateAs' | translate}}</p>\n\n  <p style=\"font-weight:bold;font-size: 30px;\">{{authService.user.firstname}} {{authService.user.lastname}}</p>\n  <p style=\"font-weight:bold;font-size: 15px;\">{{'lang.onRange' | translate}} {{date | date:'dd/MM/yyyy'}} {{'lang.atRange' | translate}} {{date | date:'HH:mm'}}</p>\n</div>\n"

/***/ }),

/***/ "./src/frontend/app/modal/success-info-valid.scss":
/*!********************************************************!*\
  !*** ./src/frontend/app/modal/success-info-valid.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL21vZGFsL3N1Y2Nlc3MtaW5mby12YWxpZC5zY3NzIn0= */"

/***/ }),

/***/ "./src/frontend/app/modal/warn-modal.component.html":
/*!**********************************************************!*\
  !*** ./src/frontend/app/modal/warn-modal.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modalContent\">\n    <h1 mat-dialog-title><i class=\"fa fa-exclamation-triangle fa-2x\"></i><br/>{{'lang.warning' | translate}} !</h1>\n    <div mat-dialog-content>\n      <p>{{'lang.wouldLikeConfirm' | translate}}</p>\n      <p>\n        <textarea [(ngModel)]=\"note\" class=\"note\" matInput placeholder=\"{{'lang.addNote' | translate}}\"></textarea>\n      </p>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-icon-button class=\"close\" (click)=\"this.dialogRef.close();\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-times\"></mat-icon>\n      </button>\n      <button class=\"actions btn red\" mat-button cdkFocusInitial (click)=\"confirmDoc();\" [disabled]=\"disableState\"><i class=\"fas fa-backspace fa-2x\"></i> {{ msgButton | translate}}</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/frontend/app/modal/warn-modal.component.scss":
/*!**********************************************************!*\
  !*** ./src/frontend/app/modal/warn-modal.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalContent {\n  position: relative; }\n\n.mat-dialog-content, .mat-dialog-title {\n  text-align: center !important; }\n\n.mat-dialog-title {\n  color: #F5A623;\n  font-weight: bold; }\n\n.actions {\n  width: 100%;\n  margin: 10px; }\n\n.close {\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  color: #666; }\n\n.note {\n  border-radius: 4px;\n  border: solid 1px #135F7F;\n  height: 100px;\n  resize: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvbW9kYWwvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXG1vZGFsXFx3YXJuLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2Zyb250ZW5kL2FwcC9tb2RhbC9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGNzc1xcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0ksY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQzlCYTtFRCtCYixhQUFhO0VBQ2IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9mcm9udGVuZC9hcHAvbW9kYWwvd2Fybi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Nzcy92YXJzLnNjc3MnO1xuXG4ubW9kYWxDb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQsIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBjb2xvcjogI0Y1QTYyMztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFjdGlvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTVweDtcbiAgICByaWdodDogLTE1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzY2Njtcbn1cblxuLm5vdGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkcHJpbWFyeTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbn0iLCIkY29sb3ItbWFpbjogIzRGNEY0RjsgLy8gZGVmYXVsdCBjb2xvciBpbiBhcHBsaWNhdGlvblxuJHByaW1hcnk6ICMxMzVGN0Y7IC8vIG1haW4gY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cbiRhY2NlbnQ6ICMyRUNDNzE7IC8vIGFjY2VudCBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvbiAobGlrZSBzdWNjZXNzIGJ1dHRvbnMpXG4kd2FybjogcmdiKDIzMSwgNzYsIDYwKTsgLy8gd2FybmluZyBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvblxuXG4vLyBXQVJOSU5HICEgWU9VIE1VU1QgUkVDT01QSUxBVEUgbWFhcmNoLW1hdGVyaWFsLnNjc3MgSUYgVkFMVUVTIENIQU5HRVMiXX0= */"

/***/ }),

/***/ "./src/frontend/app/modal/warn-modal.component.ts":
/*!********************************************************!*\
  !*** ./src/frontend/app/modal/warn-modal.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var WarnModalComponent = /** @class */ (function () {
    function WarnModalComponent(translate, data, http, dialogRef, signaturesService, notificationService) {
        this.translate = translate;
        this.data = data;
        this.http = http;
        this.dialogRef = dialogRef;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.disableState = false;
        this.msgButton = 'lang.rejectDocument';
        this.note = '';
    }
    WarnModalComponent.prototype.confirmDoc = function () {
        var _this = this;
        var signatures = [];
        if (this.signaturesService.currentAction > 0) {
            var _loop_1 = function (index) {
                if (this_1.signaturesService.signaturesContent[index]) {
                    this_1.signaturesService.signaturesContent[index].forEach(function (signature) {
                        signatures.push({
                            'encodedImage': signature.encodedSignature,
                            'width': signature.width,
                            'positionX': signature.positionX,
                            'positionY': signature.positionY,
                            'type': 'PNG',
                            'page': index
                        });
                    });
                }
                if (this_1.signaturesService.notesContent[index]) {
                    this_1.signaturesService.notesContent[index].forEach(function (note) {
                        signatures.push({
                            'encodedImage': note.fullPath.replace('data:image/png;base64,', ''),
                            'width': note.width,
                            'positionX': note.positionX,
                            'positionY': note.positionY,
                            'type': 'PNG',
                            'page': index
                        });
                    });
                }
            };
            var this_1 = this;
            for (var index = 1; index <= this.signaturesService.totalPage; index++) {
                _loop_1(index);
            }
            this.disableState = true;
            this.msgButton = 'lang.sending';
            this.http.put('../rest/documents/' + this.signaturesService.mainDocumentId + '/actions/' + this.signaturesService.currentAction, { 'signatures': signatures, 'note': this.note })
                .pipe(operators_1.finalize(function () {
                _this.disableState = false;
                _this.msgButton = 'lang.rejectDocument';
            }))
                .subscribe(function () {
                if (_this.signaturesService.documentsList[_this.signaturesService.indexDocumentsList] !== undefined) {
                    _this.signaturesService.documentsList.splice(_this.signaturesService.indexDocumentsList, 1);
                    if (_this.signaturesService.documentsListCount.current > 0) {
                        _this.signaturesService.documentsListCount.current--;
                    }
                }
                _this.dialogRef.close('sucess');
            });
        }
        else {
            this.dialogRef.close('sucess');
        }
    };
    WarnModalComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./warn-modal.component.html */ "./src/frontend/app/modal/warn-modal.component.html"),
            styles: [__webpack_require__(/*! ./warn-modal.component.scss */ "./src/frontend/app/modal/warn-modal.component.scss")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [core_2.TranslateService, Object, http_1.HttpClient, material_1.MatDialogRef, signatures_service_1.SignaturesContentService, notification_service_1.NotificationService])
    ], WarnModalComponent);
    return WarnModalComponent;
}());
exports.WarnModalComponent = WarnModalComponent;


/***/ }),

/***/ "./src/frontend/app/overlay/overlay.component.html":
/*!*********************************************************!*\
  !*** ./src/frontend/app/overlay/overlay.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <span style=\"z-index:1;position: absolute;left:20px;bottom: 20px;font-size: 25px;height:50px;\">\n        <button class=\"btn-filled blue\" (tap)=\"this.appDocumentNotePad.cancelAnnotation();\"><i\n                class=\"fas fa-arrow-left fa-2x\"></i>{{'lang.cancelAnnotation' | translate}}</button>\n    </span>\n    <span style=\"z-index:1;position: absolute;bottom: 20px;right: 20px;font-size: 25px;\">\n        <button class=\"btn-filled green\" (tap)=\"this.appDocumentNotePad.validateAnnotation();\"><i\n                class=\"fas fa-check-circle fa-2x\"></i>{{'lang.validateAnnotation' | translate}}</button>\n    </span>\n</div>\n<div class=\"tool-content tool-content-right\">\n    <ng-container *ngFor=\"let color of this.appDocumentNotePad.penColors\" let idx=\"index\">\n        <input type=\"radio\" name=\"colors\" [checked]=\"idx === 0\" [value]=\"color.id\" class=\"radio\"\n            [ngStyle]=\"{'border-color': color.id, 'background-color': color.id}\">\n    </ng-container>\n    <hr>\n    <i class=\"fa fa-undo fa-2x undo\" (click)=\"this.appDocumentNotePad.undo()\"></i>\n</div>"

/***/ }),

/***/ "./src/frontend/app/overlay/overlay.component.scss":
/*!*********************************************************!*\
  !*** ./src/frontend/app/overlay/overlay.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tool-content {\n  z-index: 1;\n  display: flex;\n  position: absolute;\n  background: #8080804d;\n  border-radius: 20px;\n  top: 170px;\n  transform: translateY(-50%) rotate(-90deg);\n  padding: 10px; }\n  .tool-content-left {\n    left: -40px; }\n  .tool-content-right {\n    right: -40px; }\n  .undo {\n  cursor: pointer;\n  transform: rotate(90deg);\n  transition: all 0.2s; }\n  .undo:active {\n    transform: rotate(90deg) scale(1.5); }\n  .radio {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n  margin: 5px;\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  border-width: none;\n  border-style: solid;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.2s; }\n  .radio:checked, .radio:hover {\n    transform: scale(1.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvb3ZlcmxheS9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxcb3ZlcmxheVxcb3ZlcmxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDBDQUEwQztFQUMxQyxhQUFhLEVBQUE7RUFDYjtJQUNFLFdBQVcsRUFBQTtFQUViO0lBQ0UsWUFBWSxFQUFBO0VBSWhCO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixvQkFBb0IsRUFBQTtFQUh0QjtJQUtJLG1DQUFtQyxFQUFBO0VBSXZDO0VBQ0Usd0JBQWdCO0tBQWhCLHFCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7RUFYdEI7SUFhSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL292ZXJsYXkvb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sLWNvbnRlbnQge1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogIzgwODA4MDRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdG9wOiAxNzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC05MGRlZyk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAmLWxlZnQge1xuICAgICAgbGVmdDogLTQwcHg7XG4gICAgfVxuICAgICYtcmlnaHQge1xuICAgICAgcmlnaHQ6IC00MHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLnVuZG8ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgJjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuNSk7XG4gICAgfVxuICB9XG4gIFxuICAucmFkaW8ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci13aWR0aDogbm9uZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICY6Y2hlY2tlZCwgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgfVxuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/frontend/app/overlay/overlay.component.ts":
/*!*******************************************************!*\
  !*** ./src/frontend/app/overlay/overlay.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var document_note_pad_component_1 = __webpack_require__(/*! ../documentNotePad/document-note-pad.component */ "./src/frontend/app/documentNotePad/document-note-pad.component.ts");
var OverlayComponent = /** @class */ (function () {
    function OverlayComponent() {
    }
    OverlayComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input('appDocumentNotePad'),
        __metadata("design:type", document_note_pad_component_1.DocumentNotePadComponent)
    ], OverlayComponent.prototype, "appDocumentNotePad", void 0);
    OverlayComponent = __decorate([
        core_1.Component({
            selector: 'app-overlay',
            template: __webpack_require__(/*! ./overlay.component.html */ "./src/frontend/app/overlay/overlay.component.html"),
            styles: [__webpack_require__(/*! ./overlay.component.scss */ "./src/frontend/app/overlay/overlay.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverlayComponent);
    return OverlayComponent;
}());
exports.OverlayComponent = OverlayComponent;


/***/ }),

/***/ "./src/frontend/app/pad/pad.component.html":
/*!*************************************************!*\
  !*** ./src/frontend/app/pad/pad.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"pad\" *ngIf=\"signaturesService.showPad\">\n    <section class=\"pad-actions\">\n        <div class=\"pad-actions-boxed\">\n            <ng-container *ngFor=\"let color of penColors\" let idx=\"index\">\n                <input type=\"radio\" name=\"colors\" [checked]=\"idx === 0\" [value]=\"color.id\" (change)=\"onColorChange(color)\"\n                       class=\"radio\" [ngStyle]=\"{'border-color': color.id, 'background-color': color.id}\">\n            </ng-container>\n        </div>\n        <button (click)=\"drawClear()\" class=\"btn\">{{'lang.erase' | translate}}</button>\n        <div class=\"pad-actions-boxed\">\n            <input type=\"range\" name=\"dot\" min=\"1\" max=\"10\" step=\"1\" value=\"1\" (input)=\"onDotChange($event.target.value)\" class=\"range\">\n        </div>\n    </section>\n    <section class=\"pad-draw\">\n        <signature-pad class=\"padContent\" [options]=\"signaturePadOptions\" (onEndEvent)=\"drawComplete()\"></signature-pad>\n    </section>\n    <section class=\"pad-actions\">\n        <button class=\"btn red\" (click)=\"closePad()\"><i class=\"fas fa-times-circle fa-2x\"></i> {{'lang.cancel' | translate}}</button>\n        <button class=\"btn green\" (click)=\"saveSignature()\" [disabled]=\"!haveSigned || disableState\">{{'lang.save' | translate}} <i class=\"fas fa-check-circle fa-2x\"></i></button>\n    </section>\n    <div class=\"draw\"></div>\n</article>\n"

/***/ }),

/***/ "./src/frontend/app/pad/pad.component.scss":
/*!*************************************************!*\
  !*** ./src/frontend/app/pad/pad.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(151, 151, 151, 0.55);\n  border-radius: 5px; }\n  .pad-actions {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    padding: 10px 0; }\n  .pad-actions-boxed {\n      border-radius: 60px;\n      height: 60px;\n      background: #F1F4F4;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 0 20px; }\n  .pad-draw {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: white; }\n  .pad .radio {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    position: relative;\n    margin: 5px;\n    width: 30px;\n    height: 30px;\n    border-radius: 30px;\n    border-width: none;\n    border-style: solid;\n    outline: none;\n    cursor: pointer;\n    transition: all 0.2s; }\n  .pad .radio:checked, .pad .radio:hover {\n      transform: scale(1.5); }\n  .padContent {\n  border: 1px dashed rgba(151, 151, 151, 0.55); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvcGFkL0Q6XFxNYWFyY2hQYXJhcGhldXItMjAuMDMvc3JjXFxmcm9udGVuZFxcYXBwXFxwYWRcXHBhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLGtCQUFrQixFQUFBO0VBQ2xCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZSxFQUFBO0VBQ2Y7TUFDRSxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7RUFHbkI7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtFQXhCckI7SUEyQkksd0JBQWdCO09BQWhCLHFCQUFnQjtZQUFoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0JBQW9CLEVBQUE7RUFyQ3hCO01BdUNNLHFCQUFxQixFQUFBO0VBTTNCO0VBQ0UsNENBQTRDLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9wYWQvcGFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUxLCAxNTEsIDE1MSwgMC41NSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgJi1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgICYtYm94ZWQge1xuICAgICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGMUY0RjQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgIH1cbiAgfVxuICAmLWRyYXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuICAucmFkaW8ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci13aWR0aDogbm9uZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICY6Y2hlY2tlZCwgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgfVxuICB9XG59XG5cblxuLnBhZENvbnRlbnQge1xuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjU1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/frontend/app/pad/pad.component.ts":
/*!***********************************************!*\
  !*** ./src/frontend/app/pad/pad.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var signature_pad_1 = __webpack_require__(/*! angular2-signaturepad/signature-pad */ "./node_modules/angular2-signaturepad/signature-pad.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var notification_service_1 = __webpack_require__(/*! ../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var auth_service_1 = __webpack_require__(/*! ../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var local_storage_service_1 = __webpack_require__(/*! ../service/local-storage.service */ "./src/frontend/app/service/local-storage.service.ts");
var SignaturePadPageComponent = /** @class */ (function () {
    function SignaturePadPageComponent(translate, http, signaturesService, notificationService, authService, localStorage) {
        this.translate = translate;
        this.http = http;
        this.signaturesService = signaturesService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.localStorage = localStorage;
        this.penColors = [{ id: 'black' }, { id: '#1a75ff' }, { id: '#FF0000' }];
        this.disableState = false;
        this.reloaded = new core_1.EventEmitter();
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            maxWidth: 2.5,
            // dotSize: 0,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            canvasWidth: 1200,
            canvasHeight: 630
        };
    }
    SignaturePadPageComponent.prototype.ngAfterViewInit = function () {
        var signPointsData = this.localStorage.get('signature');
        if (signPointsData) {
            // this.signaturePad.fromData( signPointsData );
        }
    };
    SignaturePadPageComponent.prototype.onColorChange = function (entry) {
        this.selectedColor = Object.assign({}, this.selectedColor, entry);
        this.signaturePad.set('penColor', this.selectedColor.id);
    };
    SignaturePadPageComponent.prototype.onDotChange = function (entry) {
        this.signaturePad.set('minWidth', parseFloat(entry));
        this.signaturePad.set('maxWidth', parseFloat(entry) + 2);
    };
    SignaturePadPageComponent.prototype.drawComplete = function () {
        this.localStorage.save('signature', JSON.stringify(this.signaturePad.toData()));
        this.haveSigned = true;
    };
    SignaturePadPageComponent.prototype.drawClear = function () {
        this.signaturePad.clear();
        this.haveSigned = false;
    };
    SignaturePadPageComponent.prototype.closePad = function () {
        this.signaturesService.showPad = false;
        this.signaturesService.showSign = true;
    };
    SignaturePadPageComponent.prototype.saveSignature = function () {
        var _this = this;
        this.disableState = true;
        this.haveSigned = true;
        var newEncodedSign = this.signaturePad.toDataURL('image/png').replace('data:image/png;base64,', '');
        this.localStorage.save('signature', JSON.stringify(newEncodedSign));
        // Save signature in BDD
        var newSign = {
            'id': 0,
            'encodedSignature': newEncodedSign,
            'format': 'png'
        };
        this.http.post('../rest/users/' + this.authService.user.id + '/signatures', newSign)
            .pipe(operators_1.finalize(function () {
            _this.disableState = false;
        }))
            .subscribe(function (data) {
            newSign.id = data.signatureId;
            _this.signaturesService.newSign = newSign;
            _this.closePad();
            _this.reloaded.emit('reload');
            _this.signaturePad.clear();
            _this.notificationService.success('lang.signatureRegistered');
        });
        // BUG IMAGE CROPPED
        // this.localStorage.save('signature', JSON.stringify(this.signaturePad.toDataURL('image/svg+xml')));
    };
    __decorate([
        core_1.ViewChild(signature_pad_1.SignaturePad),
        __metadata("design:type", signature_pad_1.SignaturePad)
    ], SignaturePadPageComponent.prototype, "signaturePad", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SignaturePadPageComponent.prototype, "reloaded", void 0);
    SignaturePadPageComponent = __decorate([
        core_1.Component({
            selector: 'app-pad',
            template: __webpack_require__(/*! ./pad.component.html */ "./src/frontend/app/pad/pad.component.html"),
            styles: [__webpack_require__(/*! ./pad.component.scss */ "./src/frontend/app/pad/pad.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            http_1.HttpClient,
            signatures_service_1.SignaturesContentService,
            notification_service_1.NotificationService,
            auth_service_1.AuthService,
            local_storage_service_1.LocalStorageService])
    ], SignaturePadPageComponent);
    return SignaturePadPageComponent;
}());
exports.SignaturePadPageComponent = SignaturePadPageComponent;


/***/ }),

/***/ "./src/frontend/app/plugins/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/frontend/app/plugins/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modalContent {{data.mode}}\">\n  <h1 mat-dialog-title>{{data.title | translate}}</h1>\n  <div mat-dialog-content [innerHTML]=\"data.msg | translate\">\n\n  </div>\n  <div mat-dialog-actions>\n    <button class=\"actions btn red\" mat-button (click)=\"this.dialogRef.close();\">{{'lang.ok' | translate}}</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/frontend/app/plugins/alert.component.scss":
/*!*******************************************************!*\
  !*** ./src/frontend/app/plugins/alert.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalContent {\n  position: relative; }\n\n.mat-dialog-content, .mat-dialog-title {\n  text-align: center !important;\n  color: #666; }\n\n.mat-dialog-title {\n  font-weight: bold; }\n\n.actions {\n  width: 100%;\n  margin: 10px; }\n\n.close {\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  color: #666; }\n\n.warning .mat-dialog-title, .warning .actions {\n  color: #e74c3c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvcGx1Z2lucy9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxccGx1Z2luc1xcYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvZnJvbnRlbmQvYXBwL3BsdWdpbnMvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxjc3NcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDZCQUE0QjtFQUM1QixXQUFXLEVBQUE7O0FBRWY7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUVRLGNDekJlLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9wbHVnaW5zL2FsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY3NzL3ZhcnMuc2Nzcyc7XG5cbi5tb2RhbENvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtZGlhbG9nLWNvbnRlbnQsIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNjY2O1xufVxuLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFjdGlvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTBweDtcbn1cbi5jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE1cHg7XG4gICAgcmlnaHQ6IC0xNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM2NjY7XG59XG5cbi53YXJuaW5nIHtcbiAgICAubWF0LWRpYWxvZy10aXRsZSwgLmFjdGlvbnMge1xuICAgICAgICBjb2xvciA6ICR3YXJuO1xuICAgIH1cbn0iLCIkY29sb3ItbWFpbjogIzRGNEY0RjsgLy8gZGVmYXVsdCBjb2xvciBpbiBhcHBsaWNhdGlvblxuJHByaW1hcnk6ICMxMzVGN0Y7IC8vIG1haW4gY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cbiRhY2NlbnQ6ICMyRUNDNzE7IC8vIGFjY2VudCBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvbiAobGlrZSBzdWNjZXNzIGJ1dHRvbnMpXG4kd2FybjogcmdiKDIzMSwgNzYsIDYwKTsgLy8gd2FybmluZyBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvblxuXG4vLyBXQVJOSU5HICEgWU9VIE1VU1QgUkVDT01QSUxBVEUgbWFhcmNoLW1hdGVyaWFsLnNjc3MgSUYgVkFMVUVTIENIQU5HRVMiXX0= */"

/***/ }),

/***/ "./src/frontend/app/plugins/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/frontend/app/plugins/alert.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var AlertComponent = /** @class */ (function () {
    function AlertComponent(translate, data, dialogRef) {
        this.translate = translate;
        this.data = data;
        this.dialogRef = dialogRef;
        if (this.data.mode === null) {
            this.data.mode = '';
        }
        if (this.data.msg === null) {
            this.data.msg = '';
        }
    }
    AlertComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./alert.component.html */ "./src/frontend/app/plugins/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/frontend/app/plugins/alert.component.scss")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [core_2.TranslateService, Object, material_1.MatDialogRef])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;


/***/ }),

/***/ "./src/frontend/app/plugins/autocomplete/autocomplete.component.html":
/*!***************************************************************************!*\
  !*** ./src/frontend/app/plugins/autocomplete/autocomplete.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n    <mat-form-field [appearance]=\"singleMode !== undefined ? 'standard' : 'outline'\">\n        <mat-label *ngIf=\"singleMode !== undefined\">{{placeholder}}</mat-label>\n        <mat-icon color=\"primary\" class=\"fa fa-search\" matPrefix></mat-icon>\n        <input type=\"text\" #autoCompleteInput [placeholder]=\"singleMode !== undefined ? '' : placeholder\"\n            aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"\n            (click)=\"$event.stopPropagation();\" (focus)=\"resetAutocomplete()\" [required]=\"required\">\n        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectOpt($event)\">\n            <mat-option *ngIf=\"autoCompleteInput.textLength <= 2 && !loading\" disabled [innerHTML]=\"'lang.autocompleteInfo' | translate\"></mat-option>\n            <mat-option *ngFor=\"let option of filteredOptions | async | sortBy: key[0]\" [value]=\"option\"\n                [disabled]=\"option.disabled\">\n                <mat-icon *ngIf=\"type[option['type']]\" class=\"autcompleteIcon fas {{type[option['type']]}}\"\n                    color=\"primary\">\n                </mat-icon>&nbsp;<span>\n                    <ng-container *ngFor=\"let k of key\">\n                        {{option[k]}}\n                    </ng-container>\n                </span>&nbsp;<small>{{option[subInfoKey]}}</small>\n            </mat-option>\n            <mat-option *ngIf=\"autoCompleteInput.textLength > 2 && (filteredOptions | async)?.length === 0 && !loading\" disabled>{{'lang.noAvailableValue' | translate}}</mat-option>\n            <mat-option *ngIf=\"loading\" disabled>\n                <mat-spinner diameter=\"20\"></mat-spinner>\n            </mat-option>\n        </mat-autocomplete>\n    </mat-form-field>\n</form>"

/***/ }),

/***/ "./src/frontend/app/plugins/autocomplete/autocomplete.component.scss":
/*!***************************************************************************!*\
  !*** ./src/frontend/app/plugins/autocomplete/autocomplete.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field-appearance-outline {\n  font-size: 11px;\n  width: 100%; }\n\n/deep/.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #135F7F; }\n\n/deep/.mat-form-field-prefix {\n  top: 0px !important; }\n\n.mat-option ::ng-deep.mat-option-text {\n  display: flex; }\n\n.mat-option span {\n  font-weight: bold; }\n\n.mat-option:not(.mat-option-disabled) {\n  color: #135F7F; }\n\n.autcompleteIcon {\n  width: 20px;\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvcGx1Z2lucy9hdXRvY29tcGxldGUvRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxhcHBcXHBsdWdpbnNcXGF1dG9jb21wbGV0ZVxcYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2Zyb250ZW5kL2FwcC9wbHVnaW5zL2F1dG9jb21wbGV0ZS9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGNzc1xcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGNDTmEsRUFBQTs7QURTakI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFFUSxhQUFhLEVBQUE7O0FBRnJCO0VBS1EsaUJBQWlCLEVBQUE7O0FBSXpCO0VBQ0ksY0N0QmEsRUFBQTs7QUR5QmpCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL3BsdWdpbnMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Nzcy92YXJzLnNjc3MnO1xuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4vZGVlcC8ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICBjb2xvcjogJHByaW1hcnk7XG59XG5cbi9kZWVwLy5tYXQtZm9ybS1maWVsZC1wcmVmaXgge1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWF0LW9wdGlvbiB7XG4gICAgOjpuZy1kZWVwLm1hdC1vcHRpb24tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5tYXQtb3B0aW9uOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkgeyBcbiAgICBjb2xvcjogJHByaW1hcnk7XG59XG5cbi5hdXRjb21wbGV0ZUljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCIkY29sb3ItbWFpbjogIzRGNEY0RjsgLy8gZGVmYXVsdCBjb2xvciBpbiBhcHBsaWNhdGlvblxuJHByaW1hcnk6ICMxMzVGN0Y7IC8vIG1haW4gY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cbiRhY2NlbnQ6ICMyRUNDNzE7IC8vIGFjY2VudCBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvbiAobGlrZSBzdWNjZXNzIGJ1dHRvbnMpXG4kd2FybjogcmdiKDIzMSwgNzYsIDYwKTsgLy8gd2FybmluZyBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvblxuXG4vLyBXQVJOSU5HICEgWU9VIE1VU1QgUkVDT01QSUxBVEUgbWFhcmNoLW1hdGVyaWFsLnNjc3MgSUYgVkFMVUVTIENIQU5HRVMiXX0= */"

/***/ }),

/***/ "./src/frontend/app/plugins/autocomplete/autocomplete.component.ts":
/*!*************************************************************************!*\
  !*** ./src/frontend/app/plugins/autocomplete/autocomplete.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var ngx_pipes_1 = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var core_3 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var PluginAutocompleteComponent = /** @class */ (function () {
    function PluginAutocompleteComponent(translate, http, latinisePipe) {
        this.translate = translate;
        this.http = http;
        this.latinisePipe = latinisePipe;
        this.myControl = new forms_1.FormControl();
        this.loading = false;
        this.type = {
            user: 'fa-user',
            entity: 'fa-sitemap'
        };
        // tslint:disable-next-line:no-output-rename
        this.selectedOpt = new core_2.EventEmitter();
    }
    PluginAutocompleteComponent.prototype.ngOnInit = function () {
        this.placeholder = this.placeholder === undefined ? this.translate.instant('lang.chooseValue') : this.placeholder;
        if (this.routeDatas !== undefined) {
            this.initAutocompleteRoute();
        }
        else {
            this.initAutocompleteData();
        }
    };
    PluginAutocompleteComponent.prototype.initAutocompleteData = function () {
        var _this = this;
        this.listInfo = this.translate.instant('lang.noAvailableValue');
        this.filteredOptions = this.myControl.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (value) { return _this._filter(value); }));
    };
    PluginAutocompleteComponent.prototype.initAutocompleteRoute = function () {
        var _this = this;
        this.listInfo = this.translate.instant('lang.autocompleteInfo');
        this.options = [];
        this.myControl.valueChanges
            .pipe(operators_1.tap(function () { return _this.loading = true; }), operators_1.tap(function () {
            _this.options = [];
            _this.filteredOptions = rxjs_1.of(_this.options);
        }), operators_1.debounceTime(300), operators_1.tap(function () { return _this.loading = false; }), operators_1.filter(function (value) { return value.length > 2; }), operators_1.distinctUntilChanged(), operators_1.tap(function () { return _this.loading = true; }), operators_1.switchMap(function (data) { return _this.getDatas(data); }), operators_1.tap(function (data) {
            _this.listInfo = data.length === 0 ? _this.translate.instant('lang.noAvailableValue') : '';
            _this.options = data;
            _this.filteredOptions = rxjs_1.of(_this.options);
            _this.loading = false;
        })).subscribe();
    };
    PluginAutocompleteComponent.prototype.getDatas = function (data) {
        var _this = this;
        var arrayObs = [];
        var test = [];
        this.routeDatas.forEach(function (element) {
            arrayObs.push(_this.http.get('..' + element, { params: { 'search': data } }));
        });
        return rxjs_1.forkJoin(arrayObs).pipe(operators_1.map(function (dataMap) {
            dataMap.forEach(function (element) {
                element.forEach(function (element2) {
                    if (_this.isExcludeData(element2)) {
                        element2.disabled = true;
                    }
                    test.push(element2);
                });
            });
            return test;
        }));
    };
    PluginAutocompleteComponent.prototype.isExcludeData = function (data) {
        var state = false;
        if (this.excludeClause !== undefined) {
            this.excludeClause.forEach(function (clause) {
                if (data[Object.keys(clause)[0]] === (Object.values(clause)[0])) {
                    state = true;
                }
            });
        }
        return state;
    };
    PluginAutocompleteComponent.prototype.selectOpt = function (ev) {
        if (this.singleMode !== undefined) {
            var fullWord_1 = [];
            this.key.forEach(function (element) {
                fullWord_1.push(ev.option.value[element]);
            });
            this.myControl.setValue(fullWord_1.join(' '));
        }
        this.resetAutocomplete();
        this.autoCompleteInput.nativeElement.blur();
        this.selectedOpt.emit(ev.option.value);
    };
    PluginAutocompleteComponent.prototype.resetAutocomplete = function () {
        if (this.singleMode === undefined) {
            this.myControl.setValue('');
        }
        if (this.routeDatas !== undefined) {
            this.options = [];
            this.listInfo = this.translate.instant('lang.autocompleteInfo');
        }
    };
    PluginAutocompleteComponent.prototype._filter = function (value) {
        var _this = this;
        if (typeof value === 'string' && value !== '') {
            var filterValue_1 = this.latinisePipe.transform(value.toLowerCase());
            return this.options.filter(function (option) {
                var state = false;
                _this.key.forEach(function (element) {
                    if (_this.latinisePipe.transform(option[element].toLowerCase()).includes(filterValue_1)) {
                        state = true;
                    }
                });
                return state;
            });
        }
        else {
            return this.options;
        }
    };
    __decorate([
        core_2.Input('singleMode'),
        __metadata("design:type", Boolean)
    ], PluginAutocompleteComponent.prototype, "singleMode", void 0);
    __decorate([
        core_2.Input('required'),
        __metadata("design:type", Boolean)
    ], PluginAutocompleteComponent.prototype, "required", void 0);
    __decorate([
        core_2.Input('datas'),
        __metadata("design:type", Object)
    ], PluginAutocompleteComponent.prototype, "options", void 0);
    __decorate([
        core_2.Input('routeDatas'),
        __metadata("design:type", Array)
    ], PluginAutocompleteComponent.prototype, "routeDatas", void 0);
    __decorate([
        core_2.Input('labelPlaceholder'),
        __metadata("design:type", String)
    ], PluginAutocompleteComponent.prototype, "placeholder", void 0);
    __decorate([
        core_2.Input('targetSearchKey'),
        __metadata("design:type", Array)
    ], PluginAutocompleteComponent.prototype, "key", void 0);
    __decorate([
        core_2.Input('subInfoKey'),
        __metadata("design:type", String)
    ], PluginAutocompleteComponent.prototype, "subInfoKey", void 0);
    __decorate([
        core_2.Input('excludeClause'),
        __metadata("design:type", Array)
    ], PluginAutocompleteComponent.prototype, "excludeClause", void 0);
    __decorate([
        core_2.Output('triggerEvent'),
        __metadata("design:type", Object)
    ], PluginAutocompleteComponent.prototype, "selectedOpt", void 0);
    __decorate([
        core_2.ViewChild('autoCompleteInput'),
        __metadata("design:type", core_2.ElementRef)
    ], PluginAutocompleteComponent.prototype, "autoCompleteInput", void 0);
    PluginAutocompleteComponent = __decorate([
        core_1.Component({
            selector: 'plugin-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/frontend/app/plugins/autocomplete/autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete.component.scss */ "./src/frontend/app/plugins/autocomplete/autocomplete.component.scss")]
        }),
        __metadata("design:paramtypes", [core_3.TranslateService,
            http_1.HttpClient,
            ngx_pipes_1.LatinisePipe])
    ], PluginAutocompleteComponent);
    return PluginAutocompleteComponent;
}());
exports.PluginAutocompleteComponent = PluginAutocompleteComponent;


/***/ }),

/***/ "./src/frontend/app/plugins/confirm.component.html":
/*!*********************************************************!*\
  !*** ./src/frontend/app/plugins/confirm.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modalContent {{data.mode}}\">\n  <h1 mat-dialog-title>{{data.title | translate}}</h1>\n  <div mat-dialog-content *ngIf=\"data.msg !== null\" [innerHTML]=\"data.msg | translate\"></div>\n  <div mat-dialog-actions>\n    <button class=\"actions btn blue\" mat-button (click)=\"this.dialogRef.close('yes');\">{{'lang.yes' | translate}}</button>\n    <button class=\"actions btn red\" mat-button (click)=\"this.dialogRef.close('no');\">{{'lang.no' | translate}}</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/frontend/app/plugins/confirm.component.scss":
/*!*********************************************************!*\
  !*** ./src/frontend/app/plugins/confirm.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalContent {\n  position: relative; }\n\n.mat-dialog-content, .mat-dialog-title {\n  text-align: center !important;\n  color: #666; }\n\n.mat-dialog-title {\n  font-weight: bold; }\n\n.actions {\n  width: 100%;\n  margin: 10px; }\n\n.close {\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  color: #666; }\n\n.warning .mat-dialog-title {\n  color: #e74c3c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvcGx1Z2lucy9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxccGx1Z2luc1xcY29uZmlybS5jb21wb25lbnQuc2NzcyIsInNyYy9mcm9udGVuZC9hcHAvcGx1Z2lucy9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGNzc1xcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksNkJBQTRCO0VBQzVCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdmO0VBRVEsY0N6QmUsRUFBQSIsImZpbGUiOiJzcmMvZnJvbnRlbmQvYXBwL3BsdWdpbnMvY29uZmlybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Nzcy92YXJzLnNjc3MnO1xuXG4ubW9kYWxDb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWF0LWRpYWxvZy1jb250ZW50LCAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzY2Njtcbn1cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hY3Rpb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4uY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNjY2O1xufVxuXG4ud2FybmluZyB7XG4gICAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgICAgICBjb2xvciA6ICR3YXJuO1xuICAgIH1cbn0iLCIkY29sb3ItbWFpbjogIzRGNEY0RjsgLy8gZGVmYXVsdCBjb2xvciBpbiBhcHBsaWNhdGlvblxuJHByaW1hcnk6ICMxMzVGN0Y7IC8vIG1haW4gY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cbiRhY2NlbnQ6ICMyRUNDNzE7IC8vIGFjY2VudCBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvbiAobGlrZSBzdWNjZXNzIGJ1dHRvbnMpXG4kd2FybjogcmdiKDIzMSwgNzYsIDYwKTsgLy8gd2FybmluZyBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvblxuXG4vLyBXQVJOSU5HICEgWU9VIE1VU1QgUkVDT01QSUxBVEUgbWFhcmNoLW1hdGVyaWFsLnNjc3MgSUYgVkFMVUVTIENIQU5HRVMiXX0= */"

/***/ }),

/***/ "./src/frontend/app/plugins/confirm.component.ts":
/*!*******************************************************!*\
  !*** ./src/frontend/app/plugins/confirm.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(translate, data, dialogRef) {
        this.translate = translate;
        this.data = data;
        this.dialogRef = dialogRef;
        if (this.data.msg === null) {
            this.data.msg = '';
        }
    }
    ConfirmComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/frontend/app/plugins/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.scss */ "./src/frontend/app/plugins/confirm.component.scss")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [core_2.TranslateService, Object, material_1.MatDialogRef])
    ], ConfirmComponent);
    return ConfirmComponent;
}());
exports.ConfirmComponent = ConfirmComponent;


/***/ }),

/***/ "./src/frontend/app/plugins/paginator-fr-intl.ts":
/*!*******************************************************!*\
  !*** ./src/frontend/app/plugins/paginator-fr-intl.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var frenchRangeLabel = function (page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
        return "";
    }
    length = Math.max(length, 0);
    var startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    var endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
    var nbPage = Math.ceil(length / pageSize);
    return page + 1 + " / " + nbPage;
};
function getFrenchPaginatorIntl() {
    var paginatorIntl = new material_1.MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = 'Afficher:';
    paginatorIntl.nextPageLabel = 'Page suivante';
    paginatorIntl.previousPageLabel = 'Page précédente';
    paginatorIntl.getRangeLabel = frenchRangeLabel;
    return paginatorIntl;
}
exports.getFrenchPaginatorIntl = getFrenchPaginatorIntl;


/***/ }),

/***/ "./src/frontend/app/plugins/sorting.pipe.ts":
/*!**************************************************!*\
  !*** ./src/frontend/app/plugins/sorting.pipe.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ngx_pipes_1 = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
var SortPipe = /** @class */ (function () {
    function SortPipe(latinisePipe) {
        this.latinisePipe = latinisePipe;
    }
    SortPipe.prototype.transform = function (array, args) {
        var _this = this;
        if (array !== null) {
            array.sort(function (a, b) {
                var normA = _this.latinisePipe.transform(a[args]).toLocaleLowerCase();
                var normB = _this.latinisePipe.transform(b[args]).toLocaleLowerCase();
                if (normA < normB) {
                    return -1;
                }
                else if (normA > normB) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
        else {
            return [];
        }
    };
    SortPipe = __decorate([
        core_1.Pipe({ name: 'sortBy' }),
        __metadata("design:paramtypes", [ngx_pipes_1.LatinisePipe])
    ], SortPipe);
    return SortPipe;
}());
exports.SortPipe = SortPipe;


/***/ }),

/***/ "./src/frontend/app/profile/profile.component.html":
/*!*********************************************************!*\
  !*** ./src/frontend/app/profile/profile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-container\" *ngIf=\"this.signaturesService.sideNavRigtDatas.mode == 'profile'\">\n    <div *ngIf=\"loading\"\n        style=\"position: absolute;z-index: 2;display: flex;background: #fffc;width: 100%;height: 100%;justify-content: center;align-items: center;\">\n        <mat-spinner></mat-spinner>\n    </div>\n    <div class=\"panel-header\">\n        <div class=\"user\">\n            {{'lang.myProfil' | translate}}\n        </div>\n        <div #avatarProfile class=\"avatarProfile\"\n            [ngStyle]=\"{'background': 'url(' + this.avatarInfo.picture + ') no-repeat scroll center center / cover'}\"\n            (tap)=\"uploadFile.click();\">\n        </div>\n        <input #uploadFile type=\"file\" style=\"display:none;\" (change)=\"handleFileInput($event.target.files)\">\n    </div>\n    <div class=\"panel-content\">\n        <form (ngSubmit)=\"submitProfile()\" #profileForm=\"ngForm\">\n            <mat-tab-group #tabProfile (selectedTabChange)=\"initProfileTab($event);\">\n                <mat-tab label=\"{{'lang.informations' | translate}}\">\n                    <div class=\"profile-content\">\n                        <mat-form-field class=\"input-row\">\n                            <input name=\"login\" matInput placeholder=\"{{'lang.login' | translate}}\" type=\"text\"\n                                [(ngModel)]=\"profileInfo.login\" (keyup)=\"newLogin.login=newLogin.login.toLowerCase()\"\n                                disabled required>\n                        </mat-form-field>\n                        <mat-form-field class=\"input-row\">\n                            <input name=\"email\" matInput placeholder=\"{{'lang.email' | translate}}\" type=\"mail\"\n                                [(ngModel)]=\"profileInfo.email\"\n                                pattern=\"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)\" required>\n                        </mat-form-field>\n                        <mat-form-field class=\"input-row\">\n                            <input name=\"firstname\" matInput placeholder=\"{{'lang.firstname' | translate}}\"\n                                [(ngModel)]=\"profileInfo.firstname\" required>\n                        </mat-form-field>\n                        <mat-form-field class=\"input-row\">\n                            <input name=\"nom\" matInput placeholder=\"{{'lang.lastname' | translate}}\"\n                                [(ngModel)]=\"profileInfo.lastname\" required>\n                        </mat-form-field>\n                        <mat-accordion *ngIf=\"authService.authMode === 'default'\">\n                            <mat-expansion-panel (closed)=\"showPassword=false\" (opened)=\"changePasswd()\"\n                                #passwordContent>\n                                <mat-expansion-panel-header>\n                                    <mat-panel-title>\n                                        {{'lang.updatePassword' | translate}}\n                                    </mat-panel-title>\n                                    <mat-panel-description>\n                                    </mat-panel-description>\n                                </mat-expansion-panel-header>\n                                <ng-container *ngIf=\"showPassword\">\n                                    <mat-form-field class=\"input-row\">\n                                        <input name=\"currentPassword\" matInput [(ngModel)]=\"password.currentPassword\"\n                                            placeholder=\"{{'lang.currentPassword' | translate}}\"\n                                            [type]=\"hideCurrentPassword ? 'password' : 'text'\">\n                                        <mat-icon matSuffix (click)=\"hideCurrentPassword = !hideCurrentPassword\"\n                                            class=\"fa fa-2x\"\n                                            [ngClass]=\"[hideCurrentPassword ? 'fa-eye-slash' : 'fa-eye']\"></mat-icon>\n                                    </mat-form-field>\n                                    <mat-form-field class=\"input-row\">\n                                        <input name=\"newPassword\" matInput [(ngModel)]=\"password.newPassword\"\n                                            placeholder=\"{{'lang.newPassword' | translate}}\"\n                                            [type]=\"hideNewPassword ? 'password' : 'text'\"\n                                            (keyup)=\"checkPasswordValidity(password.newPassword)\">\n                                        <mat-icon matSuffix (click)=\"hideNewPassword = !hideNewPassword\"\n                                            class=\"fa fa-2x\" [ngClass]=\"[hideNewPassword ? 'fa-eye-slash' : 'fa-eye']\">\n                                        </mat-icon>\n                                        <mat-hint style=\"color:red;\">{{handlePassword.errorMsg | translate}}</mat-hint>\n                                    </mat-form-field>\n                                    <mat-form-field class=\"input-row\">\n                                        <input name=\"passwordConfirmation\" matInput\n                                            [(ngModel)]=\"password.passwordConfirmation\"\n                                            placeholder=\"{{'lang.passwordConfirmation' | translate}}\"\n                                            [type]=\"hideNewPasswordConfirm ? 'password' : 'text'\">\n                                        <mat-icon matSuffix (click)=\"hideNewPasswordConfirm = !hideNewPasswordConfirm\"\n                                            class=\"fa fa-2x\"\n                                            [ngClass]=\"[hideNewPasswordConfirm ? 'fa-eye-slash' : 'fa-eye']\"></mat-icon>\n                                        <mat-hint style=\"color:red;\"\n                                            *ngIf=\"password.passwordConfirmation !== password.newPassword\">\n                                            {{'lang.passwordNotMatch' | translate}}</mat-hint>\n                                        <mat-hint style=\"color:green;\"\n                                            *ngIf=\"password.passwordConfirmation === password.newPassword && password.newPassword.length > 0 && password.passwordConfirmation.length> 0\">\n                                            {{'lang.samePassword' | translate}}</mat-hint>\n                                    </mat-form-field>\n                                </ng-container>\n                            </mat-expansion-panel>\n                        </mat-accordion>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"{{'lang.preferences' | translate}}\">\n                    <div class=\"profile-content\">\n                        <div class=\"input-row\">\n                            <fieldset>\n                                <legend align=\"left\">{{'lang.notifications' | translate}}</legend>\n                                <div class=\"form-container\">\n                                    <div class=\"form-2-col\">\n                                        <mat-slide-toggle [checked]=\"this.preferenceInfo.notifications\"\n                                            (change)=\"this.preferenceInfo.notifications=!this.preferenceInfo.notifications\"\n                                            color=\"primary\">{{'lang.receiveNotif' | translate}}</mat-slide-toggle>\n                                    </div>\n                                    <div class=\"form-2-col\" style=\"text-align: justify;font-size: 12px;\">\n\n                                    </div>\n                                </div>\n                            </fieldset>\n                        </div>\n                        <div class=\"input-row\">\n                            <fieldset>\n                                <legend align=\"left\">{{'lang.language' | translate}}</legend>\n                                <div class=\"form-container\">\n                                    <div class=\"form-2-col\">\n                                        <mat-form-field>\n                                            <mat-select #langSelect name=\"langUser\"\n                                                [(ngModel)]=\"this.preferenceInfo.lang\">\n                                                <mat-option *ngFor=\"let lang of this.profileInfo['availableLanguages']\"\n                                                    [value]=\"lang\">{{'lang.'+lang | translate }}</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"form-2-col\" style=\"text-align: justify;font-size: 12px;\">\n\n                                    </div>\n                                </div>\n                            </fieldset>\n                        </div>\n                        <div class=\"input-row\">\n                            <fieldset>\n                                <legend align=\"left\">{{'lang.annotationMode' | translate}}</legend>\n                                <div class=\"form-container\">\n                                    <div class=\"form-2-col\">\n                                        <mat-form-field>\n                                            <mat-select name=\"writingMode\"\n                                                [(ngModel)]=\"this.preferenceInfo.writingMode\">\n                                                <mat-option value=\"direct\">{{'lang.free' | translate}}</mat-option>\n                                                <mat-option value=\"stylus\">{{'lang.appleStylus' | translate}} <i\n                                                        class=\"fab fa-apple\"></i>\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div *ngIf=\"this.preferenceInfo.writingMode == 'stylus'\" class=\"form-2-col\"\n                                        style=\"text-align: justify;font-size: 12px;\"\n                                        [innerHTML]=\"'lang.freeModeInfo' | translate\">\n                                    </div>\n                                    <div *ngIf=\"this.preferenceInfo.writingMode == 'direct'\" class=\"form-2-col\"\n                                        style=\"text-align: justify;font-size: 12px;\"\n                                        [innerHTML]=\"'lang.standardModeInfo' | translate\">\n                                    </div>\n                                </div>\n\n                            </fieldset>\n                        </div>\n                        <div class=\"input-row\">\n                            <fieldset>\n                                <legend align=\"left\">{{'lang.stylusWidh' | translate}}</legend>\n                                <div class=\"form-container\">\n                                    <div class=\"form-2-col\">\n                                        <mat-form-field>\n                                            <mat-select name=\"writingSize\" [(ngModel)]=\"this.preferenceInfo.writingSize\"\n                                                (selectionChange)=\"drawSample();\">\n                                                <mat-option *ngFor='let in of counter(10) ;let i = index' [value]=\"i+1\">\n                                                    {{i+1}}</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"form-2-col\">\n                                        <canvas id=\"sampleNote\" width=\"150\" height=\"150\"></canvas>\n                                    </div>\n                                </div>\n                            </fieldset>\n                        </div>\n                        <div class=\"input-row\">\n                            <fieldset style=\"display:table;\">\n                                <legend align=\"left\">{{'lang.defaultColor' | translate}}</legend>\n                                <div class=\"form-container\">\n                                    <div class=\"form-2-col\">\n                                        <mat-form-field>\n                                            <mat-select name=\"writingColor\"\n                                                [(ngModel)]=\"this.preferenceInfo.writingColor\">\n                                                <mat-option style=\"color:#000000\" value=\"#000000\">\n                                                    {{'lang.black' | translate}}</mat-option>\n                                                <mat-option style=\"color:#1a75ff\" value=\"#1a75ff\">\n                                                    {{'lang.blue' | translate}}</mat-option>\n                                                <mat-option style=\"color:#FF0000\" value=\"#FF0000\">\n                                                    {{'lang.red' | translate}}</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"form-2-col\">\n                                        <div style=\"height:50px;width:100px;margin:auto;\"\n                                            [style.backgroundColor]=\"this.preferenceInfo.writingColor\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n                        </div>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"{{'lang.substitution' | translate}}\">\n                    <div class=\"profile-content\">\n                        <div class=\"input-row\">\n                            <fieldset>\n                                <legend align=\"left\">{{'lang.substitute' | translate}}</legend>\n                                <div class=\"form-container\">\n                                    <div class=\"form-col\">\n                                        <mat-form-field class=\"selectedSubstitute\"\n                                            *ngIf=\"authService.user.substitute !== null\">\n                                            <input matInput [value]=\"authService.user.substituteUser\" readonly>\n                                            <button matSuffix mat-icon-button type=\"button\" (tap)=\"deleteSubstitute()\"\n                                                color=\"warn\" title=\"{{'lang.deleteSubstitution' | translate}}\">\n                                                <mat-icon fontSet=\"fas\" fontIcon=\"fa-times fa-2x\"></mat-icon>\n                                            </button>\n                                        </mat-form-field>\n                                        <plugin-autocomplete *ngIf=\"authService.user.substitute === null\"\n                                            [labelPlaceholder]=\"'lang.chooseSubstitute' | translate\"\n                                            [routeDatas]=\"['/rest/autocomplete/users']\"\n                                            [targetSearchKey]=\"['lastname', 'firstname']\" [subInfoKey]=\"'email'\"\n                                            (triggerEvent)=\"selectSubstitute($event)\"\n                                            [excludeClause]=\"[{id:profileInfo.id}, {substitute: true}]\">\n                                        </plugin-autocomplete>\n                                    </div>\n                                </div>\n                                <br/>\n                                <fieldset *ngIf=\"authService.user.substitute != null && signaturesService.signaturesList.length > 0\">\n                                    <legend align=\"left\">{{'lang.signSubstituted' | translate}} :</legend>\n                                    <ng-container>\n                                        <button type=\"button\" class=\"signListButton\" mat-stroked-button *ngFor=\"let signature of signaturesService.signaturesList; let i=index\" (click)=\"toggleSignature(i)\" [class.selected]=\"signature.substituted\">\n                                            <img style=\"width: 190px;\" [src]=\"sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + signature.encodedSignature)\"/>\n                                        </button>\n                                    </ng-container>\n                                </fieldset>\n                            </fieldset>\n                        </div>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n            <span class=\"actions\">\n                <button class=\"validate\" mat-button color=\"primary\" type=\"submit\"\n                    [disabled]=\"allowValidate() || !profileForm.form.valid\">{{\n                            msgButton | translate}}</button>\n                <button *ngIf=\"signaturesService.mobileMode\" class=\"cancel\" mat-icon-button type=\"button\"\n                    (tap)=\"closeProfile();\">\n                    <mat-icon fontSet=\"fas\" fontIcon=\"fa-arrow-left fa-2x\"></mat-icon>\n                </button>\n            </span>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/frontend/app/profile/profile.component.scss":
/*!*********************************************************!*\
  !*** ./src/frontend/app/profile/profile.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  position: relative;\n  height: 100%;\n  overflow: auto; }\n  .sidebar-header {\n    background: #F1F4F4;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    font-weight: 600;\n    padding-top: 10px; }\n  .sidebar-header-icon {\n      margin-right: 15px;\n      position: relative; }\n  .sidebar-header-icon.notification:after {\n        position: absolute;\n        right: -5px;\n        top: -5px;\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        background: #e74c3c;\n        content: \"\"; }\n  .sidebar-header-subtitle {\n      color: #9B9B9B; }\n  .sidebar-btn {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around; }\n  .sidebar .nav {\n    margin-top: 0px; }\n  .profile-header {\n  background: #135F7F;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  position: relative; }\n  .avatarProfile {\n  z-index: 2;\n  cursor: pointer;\n  position: absolute;\n  /*background: url(../../assets/user_sample.svg) $primary;*/\n  width: 65px;\n  height: 65px;\n  border-radius: 40px;\n  bottom: -20px;\n  border: solid 3px #F99830;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 0.2s; }\n  .avatarProfile:active {\n  box-shadow: 0px 0px 5px 0px #656565; }\n  .user {\n  color: white;\n  color: #F99830;\n  position: absolute;\n  top: 15px;\n  font-weight: bold;\n  font-size: 20px; }\n  .input-row {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n  .profile-content {\n  padding: 10px;\n  text-align: center; }\n  /*.actions {\n  position: absolute;\n  top: 0;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  z-index: 1;\n}*/\n  .actions button {\n  padding: 10px;\n  margin: 10px;\n  color: white;\n  font-size: 20px; }\n  .actions .cancel {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 65px;\n  width: 65px;\n  font-size: 35px; }\n  .actions .validate {\n  position: absolute;\n  top: 10px;\n  right: 0px;\n  font-size: 20px; }\n  canvas {\n  background-color: #F1F4F4; }\n  fieldset {\n  border: solid 1px #F1F4F4;\n  align-items: center; }\n  legend {\n  color: #F99830; }\n  .form-container {\n  display: table;\n  width: 100%; }\n  .form-2-col {\n  display: table-cell;\n  width: 50%;\n  vertical-align: middle; }\n  .form-col {\n  display: table-cell;\n  vertical-align: middle; }\n  .notification {\n  text-align: left;\n  padding: 10px; }\n  .panel-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n  .panel-header {\n  box-shadow: 0px 0px 10px 0px #656565;\n  color: white;\n  background: #135F7F;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  font-size: 20px;\n  align-items: center; }\n  .panel-content {\n  flex: 1;\n  overflow: auto; }\n  .mat-icon {\n  height: auto; }\n  .selected {\n  border: solid #F99830; }\n  .selectedSubstitute {\n  width: 100%; }\n  .selectedSubstitute /deep/.mat-input-element {\n    cursor: default; }\n  .selectedSubstitute /deep/.mat-form-field-suffix {\n    top: 0;\n    display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvcHJvZmlsZS9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9mcm9udGVuZC9hcHAvcHJvZmlsZS9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGNzc1xcdmFycy5zY3NzIiwic3JjL2Zyb250ZW5kL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWMsRUFBQTtFQUVkO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRWpCO01BQ0ksa0JBQWtCO01BQ2xCLGtCQUFrQixFQUFBO0VBRnJCO1FBTVcsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUJDMUJHO1FEMkJILFdBQVcsRUFBQTtFQUt2QjtNQUNJLGNBQWMsRUFBQTtFQUl0QjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QixFQUFBO0VBMUNyQztJQThDUSxlQUFlLEVBQUE7RUFJdkI7RUFDSSxtQkNwRGE7RURxRGIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwwREFBQTtFQUNBLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isb0JBQW9CLEVBQUE7RUFHeEI7RUFDSSxtQ0FBbUMsRUFBQTtFQUl2QztFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0VBR25CO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTtFQUd4QjtFQUNJLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtFQUd0Qjs7Ozs7OztFRWpCRTtFRjBCRjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWUsRUFBQTtFQUduQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZSxFQUFBO0VBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZSxFQUFBO0VBSW5CO0VBQ0kseUJBQXlCLEVBQUE7RUFHN0I7RUFDSSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxjQUFjLEVBQUE7RUFHbEI7RUFDSSxjQUFjO0VBQ2QsV0FBVyxFQUFBO0VBR2Y7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtFQUdqQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJDbExhO0VEbUxiLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSxPQUFPO0VBQ1AsY0FBYyxFQUFBO0VBR2xCO0VBQ0ksWUFBWSxFQUFBO0VBR2hCO0VBQ0kscUJBQXFCLEVBQUE7RUFHekI7RUFDSSxXQUFXLEVBQUE7RUFEZjtJQUdRLGVBQWUsRUFBQTtFQUh2QjtJQU9RLE1BQU07SUFDTixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAmLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGMUY0RjQ7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgJi5ub3RpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdhcm47XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1zdWJ0aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzlCOUI5QjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtYnRuIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG5cbiAgICAubmF2IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbn1cblxuLnByb2ZpbGUtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICBoZWlnaHQ6IDk1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hdmF0YXJQcm9maWxlIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLypiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3VzZXJfc2FtcGxlLnN2ZykgJHByaW1hcnk7Ki9cbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBib3R0b206IC0yMHB4O1xuICAgIGJvcmRlcjogc29saWQgM3B4ICNGOTk4MzA7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmF2YXRhclByb2ZpbGU6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggIzY1NjU2NTtcbn1cblxuXG4udXNlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjRjk5ODMwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaW5wdXQtcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2ZpbGUtY29udGVudCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qLmFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxO1xufSovXG5cbi5hY3Rpb25zIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFjdGlvbnMgLmNhbmNlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uYWN0aW9ucyAudmFsaWRhdGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cblxuY2FudmFzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGNEY0O1xufVxuXG5maWVsZHNldCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI0YxRjRGNDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5sZWdlbmQge1xuICAgIGNvbG9yOiAjRjk5ODMwO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS0yLWNvbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5mb3JtLWNvbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wYW5lbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggIzY1NjU2NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gICAgaGVpZ2h0OiA5NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFuZWwtY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1hdC1pY29uIHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAjRjk5ODMwO1xufVxuXG4uc2VsZWN0ZWRTdWJzdGl0dXRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvZGVlcC8ubWF0LWlucHV0LWVsZW1lbnQge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuXG4gICAgL2RlZXAvLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG59IiwiJGNvbG9yLW1haW46ICM0RjRGNEY7IC8vIGRlZmF1bHQgY29sb3IgaW4gYXBwbGljYXRpb25cbiRwcmltYXJ5OiAjMTM1RjdGOyAvLyBtYWluIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG4kYWNjZW50OiAjMkVDQzcxOyAvLyBhY2NlbnQgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb24gKGxpa2Ugc3VjY2VzcyBidXR0b25zKVxuJHdhcm46IHJnYigyMzEsIDc2LCA2MCk7IC8vIHdhcm5pbmcgY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cblxuLy8gV0FSTklORyAhIFlPVSBNVVNUIFJFQ09NUElMQVRFIG1hYXJjaC1tYXRlcmlhbC5zY3NzIElGIFZBTFVFUyBDSEFOR0VTIiwiLnNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgLnNpZGViYXItaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjFGNEY0O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7IH1cbiAgICAuc2lkZWJhci1oZWFkZXItaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgIC5zaWRlYmFyLWhlYWRlci1pY29uLm5vdGlmaWNhdGlvbjphZnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xuICAgICAgICBjb250ZW50OiBcIlwiOyB9XG4gICAgLnNpZGViYXItaGVhZGVyLXN1YnRpdGxlIHtcbiAgICAgIGNvbG9yOiAjOUI5QjlCOyB9XG4gIC5zaWRlYmFyLWJ0biB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxuICAuc2lkZWJhciAubmF2IHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7IH1cblxuLnByb2ZpbGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzEzNUY3RjtcbiAgaGVpZ2h0OiA5NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5hdmF0YXJQcm9maWxlIHtcbiAgei1pbmRleDogMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy91c2VyX3NhbXBsZS5zdmcpICRwcmltYXJ5OyovXG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJvdHRvbTogLTIwcHg7XG4gIGJvcmRlcjogc29saWQgM3B4ICNGOTk4MzA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cblxuLmF2YXRhclByb2ZpbGU6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICM2NTY1NjU7IH1cblxuLnVzZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjRjk5ODMwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4uaW5wdXQtcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxuXG4ucHJvZmlsZS1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi8qLmFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxO1xufSovXG4uYWN0aW9ucyBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5hY3Rpb25zIC5jYW5jZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDY1cHg7XG4gIGZvbnQtc2l6ZTogMzVweDsgfVxuXG4uYWN0aW9ucyAudmFsaWRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDBweDtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbmNhbnZhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUY0RjQ7IH1cblxuZmllbGRzZXQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjRjFGNEY0O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbmxlZ2VuZCB7XG4gIGNvbG9yOiAjRjk5ODMwOyB9XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZm9ybS0yLWNvbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiA1MCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLmZvcm0tY29sIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4ucGFuZWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnBhbmVsLWhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggIzY1NjU2NTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMTM1RjdGO1xuICBoZWlnaHQ6IDk1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4ucGFuZWwtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5tYXQtaWNvbiB7XG4gIGhlaWdodDogYXV0bzsgfVxuXG4uc2VsZWN0ZWQge1xuICBib3JkZXI6IHNvbGlkICNGOTk4MzA7IH1cblxuLnNlbGVjdGVkU3Vic3RpdHV0ZSB7XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5zZWxlY3RlZFN1YnN0aXR1dGUgL2RlZXAvLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cbiAgLnNlbGVjdGVkU3Vic3RpdHV0ZSAvZGVlcC8ubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICB0b3A6IDA7XG4gICAgZGlzcGxheTogZmxleDsgfVxuIl19 */"

/***/ }),

/***/ "./src/frontend/app/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/frontend/app/profile/profile.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var EXIF = __webpack_require__(/*! exif-js */ "./node_modules/exif-js/exif.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var filters_service_1 = __webpack_require__(/*! ../service/filters.service */ "./src/frontend/app/service/filters.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var auth_service_1 = __webpack_require__(/*! ../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(translate, http, router, sanitizer, notificationService, signaturesService, authService, cookieService, filtersService, renderer) {
        this.translate = translate;
        this.http = http;
        this.router = router;
        this.sanitizer = sanitizer;
        this.notificationService = notificationService;
        this.signaturesService = signaturesService;
        this.authService = authService;
        this.cookieService = cookieService;
        this.filtersService = filtersService;
        this.renderer = renderer;
        this.profileInfo = {
            substitute: null,
            preferences: []
        };
        this.preferenceInfo = {};
        this.avatarInfo = {
            picture: '',
            pictureOrientation: ''
        };
        this.hideCurrentPassword = true;
        this.hideNewPassword = true;
        this.hideNewPasswordConfirm = true;
        // HANDLE PASSWORD
        this.passwordRules = {
            minLength: { enabled: false, value: 0 },
            complexityUpper: { enabled: false, value: 0 },
            complexityNumber: { enabled: false, value: 0 },
            complexitySpecial: { enabled: false, value: 0 },
            renewal: { enabled: false, value: 0 },
            historyLastUse: { enabled: false, value: 0 },
        };
        this.password = {
            currentPassword: '',
            newPassword: '',
            passwordConfirmation: ''
        };
        this.handlePassword = {
            error: false,
            errorMsg: ''
        };
        this.usersList = [];
        this.ruleText = '';
        this.otherRuleText = '';
        this.showPassword = false;
        this.disableState = false;
        this.msgButton = 'lang.validate';
        this.loading = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.initProfileInfo();
    };
    ProfileComponent.prototype.initProfileInfo = function () {
        this.profileInfo = JSON.parse(JSON.stringify(this.authService.user));
        this.preferenceInfo = this.profileInfo.preferences;
        this.avatarInfo.picture = this.profileInfo.picture;
        delete this.profileInfo.picture;
        delete this.profileInfo.preferences;
    };
    ProfileComponent.prototype.closeProfile = function () {
        var _this = this;
        this.renderer.setStyle(this.avatarProfile.nativeElement, 'transform', 'rotate(0deg)');
        this.renderer.setStyle(this.avatarProfile.nativeElement, 'content', '');
        setTimeout(function () {
            _this.initProfileInfo();
        }, 200);
        if (this.passwordContent) {
            this.passwordContent.close();
        }
        if (this.signaturesService.mobileMode) {
            this.snavLeftComponent.open();
            this.snavRightComponent.close();
        }
        else {
            this.signaturesService.sideNavRigtDatas = {
                mode: 'mainDocumentDetail',
                width: '450px',
                locked: false,
            };
        }
    };
    ProfileComponent.prototype.changePasswd = function () {
        this.showPassword = true;
        this.getPassRules();
    };
    ProfileComponent.prototype.getPassRules = function () {
        var _this = this;
        this.handlePassword.error = false;
        this.handlePassword.errorMsg = '';
        this.http.get('../rest/passwordRules')
            .subscribe(function (data) {
            var ruleTextArr = [];
            var otherRuleTextArr = [];
            data.rules.forEach(function (rule) {
                if (rule.label === 'minLength') {
                    _this.passwordRules.minLength.enabled = rule.enabled;
                    _this.passwordRules.minLength.value = rule.value;
                    if (rule.enabled) {
                        _this.translate.get('lang.minLengthChar', { charLength: rule.value }).subscribe(function (res) {
                            ruleTextArr.push(res);
                        });
                    }
                }
                else if (rule.label === 'complexityUpper') {
                    _this.passwordRules.complexityUpper.enabled = rule.enabled;
                    _this.passwordRules.complexityUpper.value = rule.value;
                    if (rule.enabled) {
                        ruleTextArr.push('lang.upperRequired');
                    }
                }
                else if (rule.label === 'complexityNumber') {
                    _this.passwordRules.complexityNumber.enabled = rule.enabled;
                    _this.passwordRules.complexityNumber.value = rule.value;
                    if (rule.enabled) {
                        ruleTextArr.push('lang.numberRequired');
                    }
                }
                else if (rule.label === 'complexitySpecial') {
                    _this.passwordRules.complexitySpecial.enabled = rule.enabled;
                    _this.passwordRules.complexitySpecial.value = rule.value;
                    if (rule.enabled) {
                        ruleTextArr.push('lang.specialCharRequired');
                    }
                }
                else if (rule.label === 'renewal') {
                    _this.passwordRules.renewal.enabled = rule.enabled;
                    _this.passwordRules.renewal.value = rule.value;
                    if (rule.enabled) {
                        _this.translate.get('lang.renewalInfo', { time: rule.value }).subscribe(function (res) {
                            otherRuleTextArr.push(res);
                        });
                    }
                }
                else if (rule.label === 'historyLastUse') {
                    _this.passwordRules.historyLastUse.enabled = rule.enabled;
                    _this.passwordRules.historyLastUse.value = rule.value;
                    if (rule.enabled) {
                        _this.translate.get('lang.historyUseInfo', { countPwd: rule.value }).subscribe(function (res) {
                            otherRuleTextArr.push(res);
                        });
                    }
                }
            });
            _this.ruleText = ruleTextArr.join(', ');
            _this.otherRuleText = otherRuleTextArr.join('<br/>');
        }, function (err) {
            _this.notificationService.handleErrors(err);
        });
    };
    ProfileComponent.prototype.checkPasswordValidity = function (password) {
        var _this = this;
        this.handlePassword.error = true;
        if (!password.match(/[A-Z]/g) && this.passwordRules.complexityUpper.enabled) {
            this.handlePassword.errorMsg = 'lang.upperRequired';
        }
        else if (!password.match(/[0-9]/g) && this.passwordRules.complexityNumber.enabled) {
            this.handlePassword.errorMsg = 'lang.numberRequired';
        }
        else if (!password.match(/[^A-Za-z0-9]/g) && this.passwordRules.complexitySpecial.enabled) {
            this.handlePassword.errorMsg = 'lang.specialCharRequired';
        }
        else if (password.length < this.passwordRules.minLength.value && this.passwordRules.minLength.enabled) {
            this.translate.get('lang.minLengthChar', { charLength: this.passwordRules.minLength.value }).subscribe(function (res) {
                _this.handlePassword.errorMsg = res;
            });
        }
        else {
            this.handlePassword.error = false;
            this.handlePassword.errorMsg = '';
        }
    };
    ProfileComponent.prototype.allowValidate = function () {
        if (this.disableState) {
            return true;
        }
        else if (this.showPassword && (this.handlePassword.error || this.password.newPassword !== this.password.passwordConfirmation || this.password.currentPassword.length === 0 || this.password.newPassword.length === 0 || this.password.passwordConfirmation.length === 0)) {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.submitProfile = function () {
        var _this = this;
        this.disableState = true;
        this.msgButton = 'lang.sending';
        this.http.put('../rest/users/' + this.authService.user.id, this.profileInfo).pipe(operators_1.exhaustMap(function () { return _this.http.put('../rest/users/' + _this.authService.user.id + '/preferences', _this.preferenceInfo); }), operators_1.tap(function () {
            _this.disableState = false;
            _this.msgButton = 'lang.validate';
            _this.setLang(_this.preferenceInfo.lang);
            _this.cookieService.set('maarchParapheurLang', _this.preferenceInfo.lang);
            // this.renderer.setStyle(this.avatarProfile.nativeElement, 'transform', 'rotate(0deg)');
            _this.authService.updateUserInfoWithTokenRefresh();
        }), operators_1.exhaustMap(function () {
            if (!_this.showPassword) {
                _this.closeProfile();
                _this.notificationService.success('lang.profileUpdated');
                return rxjs_1.of(false);
            }
            else {
                var headers = new http_1.HttpHeaders({
                    'Authorization': 'Bearer ' + _this.authService.getToken()
                });
                return _this.http.put('../rest/users/' + _this.authService.user.id + '/password', _this.password, { observe: 'response', headers: headers });
            }
        }), operators_1.filter(function (data) { return !!data; }), operators_1.tap(function (dataPass) {
            _this.authService.saveTokens(dataPass.headers.get('Token'), dataPass.headers.get('Refresh-Token'));
            _this.password.newPassword = '';
            _this.password.passwordConfirmation = '';
            _this.password.currentPassword = '';
            _this.notificationService.success('lang.profileUpdated');
        }), operators_1.catchError(function (err) {
            if (err.status === 401) {
                _this.notificationService.error('lang.wrongPassword');
            }
            else {
                _this.notificationService.handleErrors(err);
            }
            return rxjs_1.of(false);
        })).subscribe();
    };
    ProfileComponent.prototype.changePicture = function () {
        var _this = this;
        this.msgButton = 'lang.sending';
        this.disableState = true;
        this.http.put('../rest/users/' + this.authService.user.id + '/picture', this.avatarInfo).pipe(operators_1.tap(function () {
            _this.authService.user.picture = _this.avatarInfo.picture;
            _this.renderer.setStyle(_this.avatarProfile.nativeElement, 'background-size', 'cover');
            _this.renderer.setStyle(_this.avatarProfile.nativeElement, 'background-position', 'center');
            _this.renderer.setStyle(_this.avatarProfile.nativeElement, 'transform', 'rotate(' + _this.avatarInfo.pictureOrientation + 'deg)');
            _this.renderer.setStyle(_this.avatarProfile.nativeElement, 'content', '\'' + _this.avatarInfo.pictureOrientation + '\'');
            _this.notificationService.success('lang.profileUpdated');
        }), operators_1.finalize(function () {
            _this.msgButton = 'lang.validate';
            _this.disableState = false;
        })).subscribe();
    };
    ProfileComponent.prototype.selectSubstitute = function (newUserSubtituted) {
        var _this = this;
        this.http.put('../rest/users/' + this.authService.user.id + '/substitute', { substitute: newUserSubtituted.id })
            .subscribe(function () {
            _this.authService.updateUserInfoWithTokenRefresh();
            _this.filtersService.resfreshDocuments();
            if (_this.signaturesService.documentsList.length > 0 && _this.signaturesService.documentsList[_this.signaturesService.indexDocumentsList].owner === false) {
                _this.router.navigate(['/documents']);
            }
            _this.notificationService.success('lang.substituteEnabled');
        });
    };
    ProfileComponent.prototype.deleteSubstitute = function () {
        var _this = this;
        var r = confirm(this.translate.instant('lang.deleteSubstitution') + ' ?');
        if (r) {
            this.profileInfo.substitute = null;
            this.http.put('../rest/users/' + this.authService.user.id + '/substitute', { substitute: this.profileInfo.substitute })
                .subscribe(function () {
                _this.authService.updateUserInfoWithTokenRefresh();
                _this.filtersService.resfreshDocuments();
                if (_this.signaturesService.documentsList.length > 0 && _this.signaturesService.documentsList[_this.signaturesService.indexDocumentsList].owner === false) {
                    _this.router.navigate(['/documents']);
                }
                _this.notificationService.success('lang.substitutionDeleted');
            });
        }
    };
    ProfileComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        if (this.passwordContent) {
            this.passwordContent.close();
        }
        var fileToUpload = files.item(0);
        this.renderer.setStyle(this.avatarProfile.nativeElement, 'content', '');
        if (fileToUpload.size <= 5000000) {
            if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].indexOf(fileToUpload.type) !== -1) {
                var myReader_1 = new FileReader();
                myReader_1.onloadend = function (e) {
                    var image = new Image();
                    image.src = myReader_1.result.toString();
                    _this.avatarInfo.picture = myReader_1.result;
                    image.onload = function () { return _this.fixImgOrientation(image); };
                };
                myReader_1.readAsDataURL(fileToUpload);
            }
            else {
                this.notificationService.error('lang.notAnImage');
            }
        }
        else {
            this.notificationService.error('lang.imageTooBig');
        }
    };
    ProfileComponent.prototype.fixImgOrientation = function (image) {
        var _this = this;
        EXIF.getData(image, function () {
            var deg = 0;
            var orientation = EXIF.getTag(image, 'Orientation');
            switch (orientation) {
                case 3:
                    deg = 180;
                    break;
                case 6:
                    deg = 90;
                    break;
                case 8:
                    deg = -90;
                    break;
            }
            _this.avatarInfo.pictureOrientation = deg;
            _this.changePicture();
        });
    };
    ProfileComponent.prototype.drawSample = function () {
        var c = document.getElementById('sampleNote');
        var ctx = c.getContext('2d');
        ctx.clearRect(0, 0, 150, 150);
        ctx.beginPath();
        ctx.lineWidth = this.preferenceInfo.writingSize;
        ctx.moveTo(0, 0);
        ctx.lineTo(150, 150);
        ctx.moveTo(150, 0);
        ctx.lineTo(0, 150);
        ctx.stroke();
    };
    ProfileComponent.prototype.initProfileTab = function (e) {
        if (e.index === 1) {
            this.drawSample();
        }
    };
    ProfileComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    ProfileComponent.prototype.setLang = function (lang) {
        this.translate.use(lang);
    };
    ProfileComponent.prototype.toggleSignature = function (i) {
        var _this = this;
        this.http.patch('../rest/users/' + this.authService.user.id + '/signatures/' + this.signaturesService.signaturesList[i].id + '/substituted', { 'substituted': !this.signaturesService.signaturesList[i].substituted })
            .subscribe(function () {
            _this.signaturesService.signaturesList[i].substituted = !_this.signaturesService.signaturesList[i].substituted;
            _this.notificationService.success('lang.modificationSaved');
        });
    };
    __decorate([
        core_1.Input('snavRightComponent'),
        __metadata("design:type", material_1.MatSidenav)
    ], ProfileComponent.prototype, "snavRightComponent", void 0);
    __decorate([
        core_1.Input('snavLeftComponent'),
        __metadata("design:type", material_1.MatSidenav)
    ], ProfileComponent.prototype, "snavLeftComponent", void 0);
    __decorate([
        core_1.ViewChild('passwordContent'),
        __metadata("design:type", material_1.MatExpansionPanel)
    ], ProfileComponent.prototype, "passwordContent", void 0);
    __decorate([
        core_1.ViewChild('avatarProfile'),
        __metadata("design:type", core_1.ElementRef)
    ], ProfileComponent.prototype, "avatarProfile", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/frontend/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/frontend/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            http_1.HttpClient,
            router_1.Router,
            platform_browser_1.DomSanitizer,
            notification_service_1.NotificationService,
            signatures_service_1.SignaturesContentService,
            auth_service_1.AuthService,
            ngx_cookie_service_1.CookieService,
            filters_service_1.FiltersService,
            core_1.Renderer2])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/frontend/app/service/auth-interceptor.service.ts":
/*!**************************************************************!*\
  !*** ./src/frontend/app/service/auth-interceptor.service.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var notification_service_1 = __webpack_require__(/*! ./notification.service */ "./src/frontend/app/service/notification.service.ts");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var signatures_service_1 = __webpack_require__(/*! ./signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/frontend/app/service/auth.service.ts");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(http, router, notificationService, signaturesService, authService) {
        this.http = http;
        this.router = router;
        this.notificationService = notificationService;
        this.signaturesService = signaturesService;
        this.authService = authService;
        this.excludeUrls = ['../rest/authenticate', '../rest/authenticate/token', '../rest/authenticationInformations', '../rest/password', '../rest/passwordRules', '../rest/languages/en'];
        this.frontUrl = ['../rest/documents/', '../rest/users/', '../rest/groups/', '../rest/configurations/'];
    }
    AuthInterceptor.prototype.addAuthHeader = function (request) {
        var authHeader = this.authService.getToken();
        return request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + authHeader
            }
        });
    };
    AuthInterceptor.prototype.logout = function () {
        this.authService.logout();
        this.notificationService.error('lang.sessionExpired');
    };
    AuthInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        // We don't want to intercept some routes
        if (this.excludeUrls.indexOf(request.url) > -1 || request.url.indexOf('/password') > -1) {
            return next.handle(request);
        }
        else {
            // Add current token in header request
            request = this.addAuthHeader(request);
            // Handle response
            return next.handle(request).pipe(
            /*map((data: any) => {
              console.log('can modify datas for each response');
              return data;
            }
            ),*/
            operators_1.catchError(function (error) {
                // Disconnect user if bad token process
                if (error.status === 401) {
                    return _this.http.get('../rest/authenticate/token', {
                        params: {
                            refreshToken: _this.authService.getRefreshToken()
                        }
                    }).pipe(operators_1.switchMap(function (data) {
                        // Update stored token
                        _this.authService.setToken(data.token);
                        // Update user info
                        _this.authService.updateUserInfo(data.token);
                        // Clone our request with token updated ant try to resend it
                        request = _this.addAuthHeader(request);
                        return next.handle(request).pipe(operators_1.catchError(function (err) {
                            // Disconnect user if bad token process
                            if (err.status === 401) {
                                _this.logout();
                                return rxjs_1.EMPTY;
                            }
                        }));
                    }), operators_1.catchError(function (err) {
                        // Disconnect user if bad token process
                        if (err.status === 401) {
                            _this.logout();
                        }
                        return rxjs_1.EMPTY;
                    }));
                }
                else {
                    if (request.method === 'GET') {
                        _this.frontUrl.forEach(function (element) {
                            if (request.url.indexOf(element) > -1) {
                                if (element === '../rest/documents/') {
                                    _this.signaturesService.mainDocumentId = null;
                                }
                                _this.router.navigate(['/documents']);
                                return rxjs_1.EMPTY;
                            }
                        });
                    }
                    _this.notificationService.handleErrors(error);
                    return rxjs_1.EMPTY;
                }
            }));
        }
    };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, notification_service_1.NotificationService, signatures_service_1.SignaturesContentService, auth_service_1.AuthService])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "./src/frontend/app/service/auth.guard.ts":
/*!************************************************!*\
  !*** ./src/frontend/app/service/auth.guard.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var signatures_service_1 = __webpack_require__(/*! ./signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/frontend/app/service/auth.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var local_storage_service_1 = __webpack_require__(/*! ./local-storage.service */ "./src/frontend/app/service/local-storage.service.ts");
var alert_component_1 = __webpack_require__(/*! ../plugins/alert.component */ "./src/frontend/app/plugins/alert.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(translate, http, router, signaturesService, cookieService, authService, localStorage, dialog) {
        this.translate = translate;
        this.http = http;
        this.router = router;
        this.signaturesService = signaturesService;
        this.cookieService = cookieService;
        this.authService = authService;
        this.localStorage = localStorage;
        this.dialog = dialog;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var tokenInfo = this.authService.getToken();
        if (tokenInfo !== null) {
            if (this.authService.user.id === undefined) {
                this.authService.user = JSON.parse(atob(tokenInfo.split('.')[1])).user;
                this.translate.use(this.authService.user.preferences.lang);
                this.cookieService.set('maarchParapheurLang', this.authService.user.preferences.lang);
                if (this.signaturesService.signaturesList.length === 0) {
                    this.http.get('../rest/users/' + this.authService.user.id + '/signatures')
                        .subscribe(function (dataSign) {
                        _this.signaturesService.signaturesList = dataSign.signatures;
                    });
                }
                if (this.authService.user.picture === undefined) {
                    this.http.get('../rest/users/' + this.authService.user.id + '/picture')
                        .subscribe(function (dataPic) {
                        _this.authService.user.picture = dataPic.picture;
                    });
                }
            }
            return true;
        }
        else {
            return this.http.get('../rest/authenticationInformations')
                .pipe(operators_1.map(function (data) {
                _this.authService.authMode = data.connection;
                _this.authService.changeKey = data.changeKey;
                _this.localStorage.setAppSession(data.instanceId);
                tokenInfo = _this.authService.getToken();
                if (tokenInfo !== null) {
                    _this.authService.user = JSON.parse(atob(tokenInfo.split('.')[1])).user;
                    _this.translate.use(_this.authService.user.preferences.lang);
                    _this.cookieService.set('maarchParapheurLang', _this.authService.user.preferences.lang);
                    if (_this.signaturesService.signaturesList.length === 0) {
                        _this.http.get('../rest/users/' + _this.authService.user.id + '/signatures')
                            .subscribe(function (dataSign) {
                            _this.signaturesService.signaturesList = dataSign.signatures;
                        });
                    }
                    if (_this.authService.user.picture === undefined) {
                        _this.http.get('../rest/users/' + _this.authService.user.id + '/picture')
                            .subscribe(function (dataPic) {
                            _this.authService.user.picture = dataPic.picture;
                        });
                    }
                    if (_this.authService.changeKey) {
                        _this.dialog.open(alert_component_1.AlertComponent, { autoFocus: false, disableClose: true, data: { mode: 'warning', title: 'lang.warnPrivateKeyTitle', msg: 'lang.warnPrivateKey' } });
                    }
                    return true;
                }
                else {
                    _this.authService.logout();
                    return false;
                }
            }));
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            http_1.HttpClient,
            router_1.Router,
            signatures_service_1.SignaturesContentService,
            ngx_cookie_service_1.CookieService,
            auth_service_1.AuthService,
            local_storage_service_1.LocalStorageService,
            material_1.MatDialog])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/frontend/app/service/auth.service.ts":
/*!**************************************************!*\
  !*** ./src/frontend/app/service/auth.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var notification_service_1 = __webpack_require__(/*! ./notification.service */ "./src/frontend/app/service/notification.service.ts");
var signatures_service_1 = __webpack_require__(/*! ./signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var local_storage_service_1 = __webpack_require__(/*! ./local-storage.service */ "./src/frontend/app/service/local-storage.service.ts");
var AuthService = /** @class */ (function () {
    function AuthService(http, router, notificationService, signaturesService, localStorage) {
        this.http = http;
        this.router = router;
        this.notificationService = notificationService;
        this.signaturesService = signaturesService;
        this.localStorage = localStorage;
        this.authMode = '';
        this.changeKey = false;
        this.user = {};
    }
    AuthService.prototype.getToken = function () {
        return this.localStorage.get('MaarchParapheurToken');
    };
    AuthService.prototype.setToken = function (token) {
        this.localStorage.save('MaarchParapheurToken', token);
    };
    AuthService.prototype.getRefreshToken = function () {
        return this.localStorage.get('MaarchParapheurRefreshToken');
    };
    AuthService.prototype.setRefreshToken = function (refreshToken) {
        this.localStorage.save('MaarchParapheurRefreshToken', refreshToken);
    };
    AuthService.prototype.clearTokens = function () {
        this.localStorage.remove('MaarchParapheurToken');
        this.localStorage.remove('MaarchParapheurRefreshToken');
    };
    AuthService.prototype.logout = function () {
        this.clearTokens();
        this.router.navigate(['/login']);
    };
    AuthService.prototype.saveTokens = function (token, refreshToken) {
        this.setToken(token);
        this.setRefreshToken(refreshToken);
    };
    AuthService.prototype.isAuth = function () {
        return this.getToken() !== null;
    };
    AuthService.prototype.updateUserInfo = function (token) {
        var currentPicture = this.user.picture;
        this.user = JSON.parse(atob(token.split('.')[1])).user;
        this.user.picture = currentPicture;
    };
    AuthService.prototype.updateUserInfoWithTokenRefresh = function () {
        var _this = this;
        this.http.get('../rest/authenticate/token', {
            params: {
                refreshToken: this.getRefreshToken()
            }
        }).subscribe({
            next: function (data) {
                _this.setToken(data.token);
                _this.updateUserInfo(_this.getToken());
            },
            error: function (err) {
                _this.notificationService.handleErrors(err);
            }
        });
    };
    AuthService.prototype.setUser = function (value) {
        this.user = value;
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router,
            notification_service_1.NotificationService,
            signatures_service_1.SignaturesContentService,
            local_storage_service_1.LocalStorageService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/frontend/app/service/filters.service.ts":
/*!*****************************************************!*\
  !*** ./src/frontend/app/service/filters.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var FiltersService = /** @class */ (function () {
    function FiltersService(http, signaturesService) {
        this.http = http;
        this.signaturesService = signaturesService;
    }
    FiltersService.prototype.resfreshDocuments = function () {
        var _this = this;
        this.http.get('../rest/documents?limit=25&offset=0&mode=')
            .subscribe(function (data) {
            _this.signaturesService.mode = '';
            _this.signaturesService.documentsList = data.documents;
            _this.signaturesService.documentsListCount = data.count;
        });
    };
    FiltersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, signatures_service_1.SignaturesContentService])
    ], FiltersService);
    return FiltersService;
}());
exports.FiltersService = FiltersService;


/***/ }),

/***/ "./src/frontend/app/service/local-storage.service.ts":
/*!***********************************************************!*\
  !*** ./src/frontend/app/service/local-storage.service.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setAppSession = function (id) {
        this.appSession = id;
    };
    LocalStorageService.prototype.getAppSession = function () {
        return this.appSession;
    };
    LocalStorageService.prototype.save = function (id, content) {
        localStorage.setItem(id + '_' + this.getAppSession(), content);
    };
    LocalStorageService.prototype.get = function (id) {
        return localStorage.getItem(id + '_' + this.getAppSession());
    };
    LocalStorageService.prototype.remove = function (id) {
        localStorage.removeItem(id + '_' + this.getAppSession());
    };
    LocalStorageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;


/***/ }),

/***/ "./src/frontend/app/service/notification.service.ts":
/*!**********************************************************!*\
  !*** ./src/frontend/app/service/notification.service.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var CustomSnackbarComponent = /** @class */ (function () {
    function CustomSnackbarComponent(translate, data) {
        this.translate = translate;
        this.data = data;
    }
    CustomSnackbarComponent = __decorate([
        core_1.Component({
            selector: 'app-custom-snackbar',
            template: '{{data.message | translate}}' // You may also use a HTML file
        }),
        __param(1, core_1.Inject(material_2.MAT_SNACK_BAR_DATA)),
        __metadata("design:paramtypes", [core_2.TranslateService, Object])
    ], CustomSnackbarComponent);
    return CustomSnackbarComponent;
}());
exports.CustomSnackbarComponent = CustomSnackbarComponent;
var NotificationService = /** @class */ (function () {
    function NotificationService(translate, router, snackBar) {
        this.translate = translate;
        this.router = router;
        this.snackBar = snackBar;
    }
    NotificationService.prototype.success = function (message) {
        this.snackBar.openFromComponent(CustomSnackbarComponent, {
            duration: 3000,
            panelClass: 'success-snackbar',
            verticalPosition: 'top',
            data: { message: message }
        });
    };
    NotificationService.prototype.error = function (message) {
        this.snackBar.openFromComponent(CustomSnackbarComponent, {
            duration: 3000,
            panelClass: 'error-snackbar',
            verticalPosition: 'top',
            data: { message: message }
        });
    };
    NotificationService.prototype.handleErrors = function (err) {
        console.log(err);
        if (err.status === 0 && err.statusText === 'Unknown Error') {
            this.error('lang.connectionServerFailed');
        }
        else {
            if (err.error.errors !== undefined) {
                if (err.error.lang !== undefined) {
                    this.error('lang.' + err.error.lang);
                }
                else {
                    this.error(err.error.errors);
                }
                if (err.status === 403 || err.status === 404) {
                    this.router.navigate(['/documents']);
                }
            }
            else if (err.error.exception !== undefined) {
                this.error(err.error.exception[0].message);
            }
            else if (err.error.error !== undefined) {
                this.error(err.error.error.message);
            }
            else {
                this.error(err.message);
            }
        }
    };
    NotificationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.TranslateService, router_1.Router, material_1.MatSnackBar])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;


/***/ }),

/***/ "./src/frontend/app/service/signatures.service.ts":
/*!********************************************************!*\
  !*** ./src/frontend/app/service/signatures.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SignaturesContentService = /** @class */ (function () {
    function SignaturesContentService() {
        this.mainDocumentId = 0;
        this.signaturesContent = [];
        this.notesContent = [];
        this.signaturesList = [];
        this.signaturesListSubstituted = [];
        this.currentPage = 1;
        this.totalPage = 1;
        this.isTaggable = true;
        this.documentFreeze = false;
        this.annotationMode = false;
        this.showSign = false;
        this.showPad = false;
        this.showDrawer = false;
        this.sideNavRigtDatas = {
            mode: '',
            width: '650px',
            locked: true,
        };
        this.currentAction = 0;
        this.loadingSign = true;
        this.indexDocumentsList = 0;
        this.documentsList = [];
        this.documentsListCount = {};
        this.newSign = {};
        this.workingAreaWidth = 0;
        this.workingAreaHeight = 0;
        this.renderingDoc = true;
        this.mobileMode = true;
        this.smartphoneMode = true;
        this.mode = '';
        this.scale = 1;
        this.x = 0;
        this.y = 90;
        this.mainLoading = true;
        console.log(location);
        if (window.screen.width <= 360) {
            this.smartphoneMode = true;
        }
        else {
            this.smartphoneMode = false;
        }
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.mobileMode = true;
        }
        else {
            this.mobileMode = false;
            this.sideNavRigtDatas = {
                mode: 'mainDocumentDetail',
                width: '450px',
                locked: true,
            };
        }
    }
    SignaturesContentService.prototype.reset = function () {
        this.mainDocumentId = 0;
        this.signaturesContent = [];
        this.notesContent = [];
        this.signaturesList = [];
        this.signaturesListSubstituted = [];
        this.currentPage = 1;
        this.totalPage = 1;
        this.isTaggable = true;
        this.annotationMode = false;
        this.showSign = false;
        this.showPad = false;
        this.showDrawer = false;
        this.sideNavRigtDatas = {
            mode: '',
            width: '650px',
            locked: true,
        };
        this.currentAction = 0;
        this.loadingSign = true;
        this.indexDocumentsList = 0;
        this.documentsList = [];
        this.documentsListCount = {};
        this.newSign = {};
        this.workingAreaWidth = 0;
        this.workingAreaHeight = 0;
        this.renderingDoc = true;
        if (window.screen.width <= 360) {
            this.smartphoneMode = true;
        }
        else {
            this.smartphoneMode = false;
        }
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.mobileMode = true;
        }
        else {
            this.mobileMode = false;
            this.sideNavRigtDatas = {
                mode: 'mainDocumentDetail',
                width: '450px',
                locked: true,
            };
        }
        this.mode = '';
        this.scale = 1;
        this.x = 0;
        this.y = 90;
    };
    SignaturesContentService.prototype.getAppSession = function () {
        this.appSession = 'AD098AD9ADA0D9IAXKJ90AKS099S';
    };
    SignaturesContentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SignaturesContentService);
    return SignaturesContentService;
}());
exports.SignaturesContentService = SignaturesContentService;


/***/ }),

/***/ "./src/frontend/app/sidebar/administration/admin-sidebar.component.html":
/*!******************************************************************************!*\
  !*** ./src/frontend/app/sidebar/administration/admin-sidebar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" *ngIf=\"snavLeftComponent.opened\">\n  <div class=\"main-header\">\n    <header class=\"profile-header\">\n      <button class=\"logout-button\" mat-icon-button (click)=\"authService.logout()\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-power-off\"></mat-icon>\n      </button>\n      <button class=\"home-button\" mat-icon-button (click)=\"openHome()\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-home\"></mat-icon>\n      </button>\n      <button *ngIf=\"checkClose()\" class=\"closePanel\" mat-icon-button type=\"button\" (tap)=\"snavLeftComponent.close();\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-arrow-left fa-2x\"></mat-icon>\n      </button>\n      <div class=\"user\" style=\"color: #F99830\" title=\"{{authService.user.firstname}} {{authService.user.lastname}}\">\n        {{authService.user.firstname}} {{authService.user.lastname}}\n      </div>\n      <div *ngIf=\"authService.user.picture\" class=\"avatar\"\n        [ngStyle]=\"{'background': 'url(' + authService.user.picture + ') no-repeat scroll center center / cover'}\">\n      </div>\n    </header>\n    <header class=\"sidebar-header\">\n      <div routerLink=\"/administration\"  style=\"cursor: pointer;\">\n        {{'lang.administration' | translate}}\n      </div>\n    </header>\n  </div>\n  <mat-nav-list class=\"admin-list\">\n    <mat-list-item *ngFor=\"let privilege of authService.user.administrativePrivileges\" [routerLink]=\"privilege.route\" [class.item-active]=\"('/' + route.routeConfig.path).indexOf(privilege.route) !== -1\">\n      <mat-icon matListIcon [class]=\"privilege.icon\" color=\"primary\"></mat-icon>\n      <p matLine>\n        {{'lang.' + privilege.id | translate}}\n      </p>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n\n  </mat-nav-list>\n</nav>"

/***/ }),

/***/ "./src/frontend/app/sidebar/administration/admin-sidebar.component.scss":
/*!******************************************************************************!*\
  !*** ./src/frontend/app/sidebar/administration/admin-sidebar.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n  .sidebar-header {\n    background: #F1F4F4;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    font-weight: 600;\n    padding-top: 10px; }\n  .sidebar .nav {\n    flex: 1;\n    overflow-y: scroll;\n    margin-top: 0px;\n    overflow-x: hidden;\n    margin-bottom: 0px;\n    padding: 0px; }\n  .profile-header {\n  background: #135F7F;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  position: relative; }\n  .avatar {\n  position: absolute;\n  width: 65px;\n  height: 65px;\n  border-radius: 40px;\n  bottom: -20px;\n  border: solid 3px #F99830;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; }\n  .user {\n  color: white;\n  padding-top: 10px;\n  font-weight: bold;\n  font-size: 20px;\n  max-width: 90%;\n  right: 0px;\n  white-space: pre;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-right: 10px; }\n  .logout-button {\n  font-size: 24px;\n  color: white;\n  position: absolute;\n  left: 10px;\n  bottom: 10px; }\n  .home-button {\n  font-size: 24px;\n  color: white;\n  position: absolute;\n  left: 50px;\n  bottom: 10px; }\n  .closePanel {\n  color: white;\n  position: absolute;\n  right: 10px;\n  font-size: 24px;\n  bottom: 10px; }\n  .admin-list {\n  padding-top: 0;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  color: #666; }\n  .item-active {\n  border-left: solid 5px #135F7F;\n  background: rgba(19, 95, 127, 0.14);\n  color: #135F7F;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvc2lkZWJhci9hZG1pbmlzdHJhdGlvbi9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxcc2lkZWJhclxcYWRtaW5pc3RyYXRpb25cXGFkbWluLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvZnJvbnRlbmQvYXBwL3NpZGViYXIvYWRtaW5pc3RyYXRpb24vRDpcXE1hYXJjaFBhcmFwaGV1ci0yMC4wMy9zcmNcXGZyb250ZW5kXFxjc3NcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUV0QjtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQWZyQjtJQWtCSSxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtFQUloQjtFQUNFLG1CQzdCZTtFRDhCZixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTtFQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCLEVBQUE7RUFHN0I7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQUdyQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZLEVBQUE7RUFHZDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZLEVBQUE7RUFHZDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZLEVBQUE7RUFHZDtFQUNJLGNBQWM7RUFDZCxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFHZjtFQUNJLDhCQzlGYTtFRCtGYixtQ0MvRmE7RURnR2IsY0NoR2E7RURpR2IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9zaWRlYmFyL2FkbWluaXN0cmF0aW9uL2FkbWluLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogI0YxRjRGNDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIC5uYXYge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuXG4ucHJvZmlsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgaGVpZ2h0OiA5NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXZhdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBib3R0b206IC0yMHB4O1xuICBib3JkZXI6IHNvbGlkIDNweCAjRjk5ODMwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi51c2VyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIHJpZ2h0OiAwcHg7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLmhvbWUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTBweDtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4uY2xvc2VQYW5lbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5hZG1pbi1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGNvbG9yOiAjNjY2O1xufVxuXG4uaXRlbS1hY3RpdmUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggJHByaW1hcnk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkcHJpbWFyeSwgMC4xNCk7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIiRjb2xvci1tYWluOiAjNEY0RjRGOyAvLyBkZWZhdWx0IGNvbG9yIGluIGFwcGxpY2F0aW9uXG4kcHJpbWFyeTogIzEzNUY3RjsgLy8gbWFpbiBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvblxuJGFjY2VudDogIzJFQ0M3MTsgLy8gYWNjZW50IGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uIChsaWtlIHN1Y2Nlc3MgYnV0dG9ucylcbiR3YXJuOiByZ2IoMjMxLCA3NiwgNjApOyAvLyB3YXJuaW5nIGNvbG9yIHRoZW1lIG9mIGFwcGxpY2F0aW9uXG5cbi8vIFdBUk5JTkcgISBZT1UgTVVTVCBSRUNPTVBJTEFURSBtYWFyY2gtbWF0ZXJpYWwuc2NzcyBJRiBWQUxVRVMgQ0hBTkdFUyJdfQ== */"

/***/ }),

/***/ "./src/frontend/app/sidebar/administration/admin-sidebar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/frontend/app/sidebar/administration/admin-sidebar.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var signatures_service_1 = __webpack_require__(/*! ../../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var auth_service_1 = __webpack_require__(/*! ../../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var AdminSidebarComponent = /** @class */ (function () {
    function AdminSidebarComponent(signaturesService, route, router, authService) {
        this.signaturesService = signaturesService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = true;
        this.privileges = [];
    }
    AdminSidebarComponent.prototype.ngOnInit = function () {
        $('.avatar').css({ 'background': 'url(data:image/png;base64,' + this.authService.user.picture + ') no-repeat #135F7F' }).css({ 'background-size': 'cover' }).css({ 'background-position': 'center' });
    };
    AdminSidebarComponent.prototype.openHome = function () {
        this.router.navigate(['/documents/']);
        if (this.signaturesService.mobileMode) {
            this.snavLeftComponent.close();
        }
    };
    AdminSidebarComponent.prototype.checkClose = function () {
        if ((this.route.routeConfig.path.indexOf('administration') !== -1 || this.signaturesService.mainDocumentId > 0) && this.signaturesService.mobileMode) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.Input('snavRightComponent'),
        __metadata("design:type", material_1.MatSidenav)
    ], AdminSidebarComponent.prototype, "snavRightComponent", void 0);
    __decorate([
        core_1.Input('snavLeftComponent'),
        __metadata("design:type", material_1.MatSidenav)
    ], AdminSidebarComponent.prototype, "snavLeftComponent", void 0);
    AdminSidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-sidebar',
            template: __webpack_require__(/*! ./admin-sidebar.component.html */ "./src/frontend/app/sidebar/administration/admin-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./admin-sidebar.component.scss */ "./src/frontend/app/sidebar/administration/admin-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [signatures_service_1.SignaturesContentService, router_1.ActivatedRoute, router_1.Router, auth_service_1.AuthService])
    ], AdminSidebarComponent);
    return AdminSidebarComponent;
}());
exports.AdminSidebarComponent = AdminSidebarComponent;


/***/ }),

/***/ "./src/frontend/app/sidebar/sidebar.component.html":
/*!*********************************************************!*\
  !*** ./src/frontend/app/sidebar/sidebar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" *ngIf=\"snavLeftComponent.opened\">\n  <div class=\"main-header\">\n    <header class=\"profile-header\">\n      <button class=\"logout-button\" mat-icon-button (click)=\"authService.logout()\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-power-off\"></mat-icon>\n      </button>\n      <button *ngIf=\"authService.user.administrativePrivileges.length > 0\" class=\"admin-button\" mat-icon-button\n        (click)=\"openAdmin()\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-tools\"></mat-icon>\n      </button>\n      <button *ngIf=\"checkClose()\" class=\"closePanel\" mat-icon-button type=\"button\" (tap)=\"snavLeftComponent.close();\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-arrow-left fa-2x\"></mat-icon>\n      </button>\n      <div class=\"user\" style=\"color: #F99830\" title=\"{{authService.user.firstname}} {{authService.user.lastname}}\">\n        {{authService.user.firstname}} {{authService.user.lastname}}\n      </div>\n      <div *ngIf=\"authService.user.picture\" class=\"avatar\"\n        [ngStyle]=\"{'background': 'url(' + authService.user.picture + ') no-repeat scroll center center / cover'}\"\n        (click)=\"openProfile()\" title=\"{{'lang.myProfil' | translate}}\">\n      </div>\n      <div *ngIf=\"authService.user.picture === '' || authService.user.picture === undefined\" class=\"avatar\" (click)=\"openProfile()\" title=\"{{'lang.myProfil' | translate}}\">\n      </div>\n    </header>\n    <header class=\"sidebar-header\">\n      <div *ngIf=\"!searchMode\" (click)=\"search();\" style=\"cursor: pointer;\">\n        <span\n          [class.primary]=\"signaturesService.mode != ''\">{{signaturesService.documentsListCount.current}}</span>&nbsp;{{'lang.documents' | translate}}&nbsp;<span\n          class=\"primary\"\n          *ngIf=\"signaturesService.mode != ''\">{{'lang.'+signaturesService.mode+'Label' | translate}}</span>\n      </div>\n      <button *ngIf=\"!searchMode\" color=\"primary\" mat-icon-button type=\"button\" (click)=\"search();\"\n        title=\"{{'lang.search' | translate}}\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-search fa-2x\"></mat-icon>\n      </button>\n      <mat-form-field *ngIf=\"searchMode\" floatLabel=\"never\" style=\"width: 80%;\">\n        <input #searchInput matInput placeholder=\"{{'lang.filterInfo' | translate}}\" [formControl]=\"searchTerm\">\n        <button matSuffix color=\"primary\" mat-icon-button type=\"button\"\n          (click)=\"searchMode = !searchMode;this.filter('');\" title=\"{{'lang.cancel' | translate}}\">\n          <mat-icon fontSet=\"fas\" fontIcon=\"fa-times fa-2x\"></mat-icon>\n        </button>\n      </mat-form-field>\n    </header>\n    <section class=\"sidebar-btn\">\n      <button class=\"btn btn-xs blue filter\" [class.noDoc]=\"signaturesService.documentsListCount.sign === 0\"\n        [matBadge]=\"signaturesService.documentsListCount.sign\"\n        [ngClass]=\"[signaturesService.mode == 'sign' ? 'active' : '']\"\n        (click)=\"filter('sign')\">{{'lang.signLabel' | translate | titlecase}}</button>\n      <button class=\"btn btn-xs blue filter\" [class.noDoc]=\"signaturesService.documentsListCount.visa === 0\"\n        [matBadge]=\"signaturesService.documentsListCount.visa\"\n        [ngClass]=\"[signaturesService.mode == 'visa' ? 'active' : '']\"\n        (click)=\"filter('visa')\">{{'lang.visaLabel' | translate | titlecase}}</button>\n      <button class=\"btn btn-xs blue filter\" [class.noDoc]=\"signaturesService.documentsListCount.note === 0\"\n        [matBadge]=\"signaturesService.documentsListCount.note\"\n        [ngClass]=\"[signaturesService.mode == 'note' ? 'active' : '']\"\n        (click)=\"filter('note')\">{{'lang.noteLabel' | translate | titlecase}}</button>\n    </section>\n  </div>\n  <ul #listContent class=\"nav\" detect-scroll (onScroll)=\"handleScroll($event)\" [bottomOffset]=\"1\" [topOffset]=\"1\">\n    <div *ngIf=\"loadingList\" class=\"loadList\">\n      <mat-spinner></mat-spinner>\n    </div>\n    <ng-container *ngFor=\"let document of signaturesService.documentsList;let i=index\">\n      <li [class.active]=\"signaturesService.mainDocumentId === document.id\" class=\"nav-item\" matRipple\n        (click)=\"gotTo(document.id, i)\">\n        <div class=\"nav-item-left\">\n          <i class=\"fas\" [ngClass]=\"{\n            'fa-file-signature':document.mode == 'sign',\n            'fa-thumbs-up':document.mode == 'visa',\n            'fa-comment-dots':document.mode == 'note'\n          }\"></i>\n        </div>\n        <div class=\"nav-item-middle\">\n          <div class=\"\">{{document.reference}}</div>\n          <div class=\"nav-item-title\">{{document.title | shorten: 50: '...'}}</div>\n          <div *ngIf=\"!document.owner\" style=\"color:#F99830;font-size: 10px;\">{{'lang.substitutedDoc' | translate}}\n          </div>\n        </div>\n        <div class=\"nav-item-right\">\n          <i class=\"fas fa-arrow-right\"></i>\n        </div>\n      </li>\n    </ng-container>\n    <span *ngIf=\"signaturesService.documentsList.length == 0\" class=\"noResult\">\n      {{'lang.noResult' | translate | titlecase}}\n    </span>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/frontend/app/sidebar/sidebar.component.scss":
/*!*********************************************************!*\
  !*** ./src/frontend/app/sidebar/sidebar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-header {\n  height: 205px;\n  overflow: auto; }\n\n.sidebar {\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n\n.sidebar-header {\n    background: #F1F4F4;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    font-weight: 600;\n    padding-top: 10px; }\n\n.sidebar-header-icon {\n      margin-right: 15px;\n      position: relative; }\n\n.sidebar-header-icon.notification:after {\n        position: absolute;\n        right: -5px;\n        top: -5px;\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        background: #e74c3c;\n        content: \"\"; }\n\n.sidebar-header-subtitle {\n      color: #9B9B9B; }\n\n.sidebar-btn {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around; }\n\n.sidebar .nav {\n    flex: 1;\n    overflow-y: scroll;\n    margin-top: 0px;\n    overflow-x: hidden;\n    margin-bottom: 0px;\n    padding: 0px;\n    position: relative; }\n\n.sidebar .nav-item {\n      height: 70px;\n      display: flex;\n      align-items: center;\n      padding: 5px;\n      margin-right: 20px;\n      border-bottom: 1px solid #e6e6e6;\n      margin: 0;\n      padding-left: 30px;\n      cursor: pointer; }\n\n.sidebar .nav-item.active {\n        border-left: solid 5px #135F7F;\n        background: rgba(19, 95, 127, 0.14); }\n\n.sidebar .nav-item.active:after {\n          position: absolute;\n          right: 10px;\n          content: \"\";\n          /*width 5px*/\n          height: 60px;\n          background: #F1F4F4; }\n\n.sidebar .nav-item-right {\n        text-align: center; }\n\n.sidebar .nav-item-left {\n        width: 50px; }\n\n.sidebar .nav-item-left .fas, .sidebar .nav-item-left .material-icons {\n          background: #f1f4f4;\n          border-radius: 50%;\n          color: #135f7f;\n          font-size: 22px;\n          height: 25px;\n          width: 25px;\n          padding: 10px;\n          margin-right: 10px; }\n\n.sidebar .nav-item-middle {\n        width: 180px;\n        height: 50px;\n        font-size: 12px;\n        color: #4F4F4F; }\n\n.sidebar .nav-item-title {\n        font-weight: 600;\n        color: #135F7F;\n        font-size: 14px; }\n\n.loadList {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  background-color: #ffffffb3;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  justify-content: center; }\n\n.profile-header {\n  background: #135F7F;\n  height: 95px;\n  display: flex;\n  justify-content: center;\n  position: relative; }\n\n.avatar {\n  cursor: pointer;\n  position: absolute;\n  width: 65px;\n  height: 65px;\n  border-radius: 40px;\n  bottom: -20px;\n  border: solid 3px #F99830;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: all 0.2s; }\n\n.avatar:hover {\n  box-shadow: 0px 0px 5px 0px #656565; }\n\n.user {\n  color: white;\n  padding-top: 10px;\n  font-weight: bold;\n  font-size: 20px;\n  max-width: 90%;\n  right: 0px;\n  white-space: pre;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-right: 10px; }\n\n.logout-button {\n  font-size: 24px;\n  color: white;\n  position: absolute;\n  left: 10px;\n  bottom: 10px; }\n\n.admin-button {\n  font-size: 24px;\n  color: white;\n  position: absolute;\n  left: 50px;\n  bottom: 10px; }\n\n.closePanel {\n  color: white;\n  position: absolute;\n  right: 10px;\n  font-size: 24px;\n  bottom: 10px; }\n\n.filter {\n  font-size: 10px;\n  width: 95px;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.filter.active {\n  background: #135F7F; }\n\n.mat-badge-content {\n  right: 0px !important;\n  top: -8px !important;\n  background: #F99830; }\n\n.noResult {\n  position: absolute;\n  top: 50%;\n  text-align: center;\n  width: 100%;\n  opacity: 0.5; }\n\n.noDoc .mat-badge-content {\n  background: #ddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvc2lkZWJhci9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9mcm9udGVuZC9hcHAvc2lkZWJhci9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGNzc1xcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBRXRCO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBOztBQUNqQjtNQUNFLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQTs7QUFGbkI7UUFLSyxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixtQkMvQmE7UURnQ2IsV0FBVyxFQUFBOztBQUlqQjtNQUNFLGNBQWMsRUFBQTs7QUFHbEI7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkIsRUFBQTs7QUF4Q2pDO0lBMkNJLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQixFQUFBOztBQWpEdEI7TUFvRE0sWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixnQ0FBZ0M7TUFDaEMsU0FBUztNQUNULGtCQUFrQjtNQUNsQixlQUFlLEVBQUE7O0FBNURyQjtRQThEUSw4QkNwRVM7UURxRVQsbUNDckVTLEVBQUE7O0FETWpCO1VBaUVVLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsV0FBVztVQUNYLFlBQUE7VUFDQSxZQUFZO1VBQ1osbUJBQW1CLEVBQUE7O0FBdEU3QjtRQTBFUSxrQkFBa0IsRUFBQTs7QUExRTFCO1FBNkVRLFdBQVcsRUFBQTs7QUE3RW5CO1VBK0VVLG1CQUFtQjtVQUNuQixrQkFBa0I7VUFDbEIsY0FBYztVQUNkLGVBQWU7VUFDZixZQUFZO1VBQ1osV0FBVztVQUNYLGFBQWE7VUFDYixrQkFBa0IsRUFBQTs7QUF0RjVCO1FBMEZRLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGNBQWMsRUFBQTs7QUE3RnRCO1FBZ0dRLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZUFBZSxFQUFBOztBQU12QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsbUJDM0hlO0VENEhmLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFFbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxtQ0FBbUMsRUFBQTs7QUFHckM7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxtQkNsTWUsRUFBQTs7QURxTWpCO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLm1haW4taGVhZGVyIHtcbiAgaGVpZ2h0OiAyMDVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgJi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNGMUY0RjQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAmLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgJi5ub3RpZmljYXRpb24ge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHdhcm47XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLXN1YnRpdGxlIHtcbiAgICAgIGNvbG9yOiAjOUI5QjlCO1xuICAgIH1cbiAgfVxuICAmLWJ0biB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAubmF2IHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJi1pdGVtIHtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggJHByaW1hcnk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHByaW1hcnksIDAuMTQpO1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAvKndpZHRoIDVweCovXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGMUY0RjQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYtcmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAmLWxlZnQge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgLmZhcywgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmNGY0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBjb2xvcjogIzEzNWY3ZjtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLW1pZGRsZSB7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjNEY0RjRGO1xuICAgICAgfVxuICAgICAgJi10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMTM1RjdGO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2FkTGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmIzO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgaGVpZ2h0OiA5NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXZhdGFyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy91c2VyX3NhbXBsZS5zdmcpICRwcmltYXJ5O1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBib3R0b206IC0yMHB4O1xuICBib3JkZXI6IHNvbGlkIDNweCAjRjk5ODMwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uYXZhdGFyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICM2NTY1NjU7XG59XG5cbi51c2VyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIHJpZ2h0OiAwcHg7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLmFkbWluLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLmNsb3NlUGFuZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4uZmlsdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogOTVweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmZpbHRlci5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbn1cblxuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB0b3A6IC04cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI0Y5OTgzMDtcbn1cblxuLm5vUmVzdWx0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubm9Eb2MgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn0iLCIkY29sb3ItbWFpbjogIzRGNEY0RjsgLy8gZGVmYXVsdCBjb2xvciBpbiBhcHBsaWNhdGlvblxuJHByaW1hcnk6ICMxMzVGN0Y7IC8vIG1haW4gY29sb3IgdGhlbWUgb2YgYXBwbGljYXRpb25cbiRhY2NlbnQ6ICMyRUNDNzE7IC8vIGFjY2VudCBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvbiAobGlrZSBzdWNjZXNzIGJ1dHRvbnMpXG4kd2FybjogcmdiKDIzMSwgNzYsIDYwKTsgLy8gd2FybmluZyBjb2xvciB0aGVtZSBvZiBhcHBsaWNhdGlvblxuXG4vLyBXQVJOSU5HICEgWU9VIE1VU1QgUkVDT01QSUxBVEUgbWFhcmNoLW1hdGVyaWFsLnNjc3MgSUYgVkFMVUVTIENIQU5HRVMiXX0= */"

/***/ }),

/***/ "./src/frontend/app/sidebar/sidebar.component.ts":
/*!*******************************************************!*\
  !*** ./src/frontend/app/sidebar/sidebar.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var notification_service_1 = __webpack_require__(/*! ../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var auth_service_1 = __webpack_require__(/*! ../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(http, signaturesService, sidenav, route, router, notificationService, authService) {
        var _this = this;
        this.http = http;
        this.signaturesService = signaturesService;
        this.sidenav = sidenav;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.authService = authService;
        this.loadingList = false;
        this.offset = 0;
        this.limit = 25;
        this.searchMode = false;
        this.searchTerm = new forms_1.FormControl();
        this.searchTerm.valueChanges.pipe(operators_1.debounceTime(500), operators_1.distinctUntilChanged(), operators_1.tap(function (value) { return _this.loadingList = true; }), operators_1.switchMap(function (data) { return _this.http.get('../rest/documents?limit=' + _this.limit + '&search=' + data); })).subscribe(function (response) {
            _this.signaturesService.documentsList = response.documents;
            _this.signaturesService.documentsListCount = response.count;
            _this.loadingList = false;
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.avatar').css({ 'background': 'url(data:image/png;base64,' + this.authService.user.picture + ') no-repeat #135F7F' }).css({ 'background-size': 'cover' }).css({ 'background-position': 'center' });
        this.http.get('../rest/documents?limit=' + this.limit + '&offset=' + this.offset + '&mode=' + this.signaturesService.mode)
            .subscribe(function (data) {
            _this.signaturesService.documentsList = data.documents;
            _this.signaturesService.documentsListCount = data.count;
        });
    };
    SidebarComponent.prototype.handleScroll = function (event) {
        var _this = this;
        if (event.isReachingBottom && !this.loadingList && this.signaturesService.documentsList.length < this.signaturesService.documentsListCount.current) {
            this.loadingList = true;
            this.listContent.nativeElement.style.overflowY = 'hidden';
            this.offset = this.offset + this.limit;
            this.http.get('../rest/documents?limit=' + this.limit + '&offset=' + this.offset + '&mode=' + this.signaturesService.mode)
                .subscribe(function (data) {
                _this.signaturesService.documentsList = _this.signaturesService.documentsList.concat(data.documents);
                _this.loadingList = false;
                _this.listContent.nativeElement.style.overflowY = 'auto';
                _this.notificationService.success('lang.updatedListDocument');
            });
        }
    };
    SidebarComponent.prototype.gotTo = function (documentId, i) {
        this.router.navigate(['/documents/' + documentId]);
        this.signaturesService.mainDocumentId = documentId;
        this.signaturesService.indexDocumentsList = i;
        this.signaturesService.sideNavRigtDatas = {
            mode: 'mainDocumentDetail',
            width: '450px',
            locked: false,
        };
        if (this.signaturesService.mobileMode) {
            this.sidenav.close();
        }
    };
    SidebarComponent.prototype.openProfile = function () {
        this.signaturesService.sideNavRigtDatas = {
            mode: 'profile',
            width: '650px',
            locked: true,
        };
        if (this.signaturesService.mobileMode) {
            this.snavLeftComponent.close();
            this.snavRightComponent.open();
        }
    };
    SidebarComponent.prototype.openAdmin = function () {
        this.router.navigate(['/administration/']);
        if (this.signaturesService.mobileMode) {
            this.snavLeftComponent.close();
        }
    };
    SidebarComponent.prototype.search = function () {
        var _this = this;
        this.searchMode = true;
        this.signaturesService.mode = '';
        this.filter('');
        setTimeout(function () {
            _this.searchInput.nativeElement.value = '';
            _this.searchInput.nativeElement.focus();
            _this.searchInput.nativeElement.click();
        }, 0);
    };
    SidebarComponent.prototype.filter = function (mode) {
        var _this = this;
        if (mode !== '') {
            this.searchMode = false;
        }
        this.loadingList = true;
        this.signaturesService.mode === mode ? this.signaturesService.mode = '' : this.signaturesService.mode = mode;
        this.offset = 0;
        this.http.get('../rest/documents?limit=' + this.limit + '&offset=' + this.offset + '&mode=' + this.signaturesService.mode)
            .pipe(operators_1.finalize(function () {
            _this.loadingList = false;
        }))
            .subscribe(function (data) {
            _this.signaturesService.documentsList = data.documents;
            _this.signaturesService.documentsListCount = data.count;
            _this.loadingList = false;
        });
    };
    SidebarComponent.prototype.checkClose = function () {
        if ((this.route.routeConfig.path.indexOf('administration') !== -1 || this.signaturesService.mainDocumentId > 0) && this.signaturesService.mobileMode) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        core_1.ViewChild('listContent'),
        __metadata("design:type", core_1.ElementRef)
    ], SidebarComponent.prototype, "listContent", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], SidebarComponent.prototype, "searchInput", void 0);
    __decorate([
        core_1.Input('snavRightComponent'),
        __metadata("design:type", material_1.MatSidenav)
    ], SidebarComponent.prototype, "snavRightComponent", void 0);
    __decorate([
        core_1.Input('snavLeftComponent'),
        __metadata("design:type", material_1.MatSidenav)
    ], SidebarComponent.prototype, "snavLeftComponent", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/frontend/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/frontend/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, signatures_service_1.SignaturesContentService, material_1.MatSidenav, router_1.ActivatedRoute, router_1.Router, notification_service_1.NotificationService, auth_service_1.AuthService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "./src/frontend/app/signatures/signatures.component.html":
/*!***************************************************************!*\
  !*** ./src/frontend/app/signatures/signatures.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"signatures\" *ngIf=\"signaturesService.showSign\">\n  <section class=\"list\">\n    <div class=\"list-item create\" (click)=\"uploadFile.click()\">\n      <i class=\"fas fa-upload fa-2x\"></i>\n      {{'lang.importNewSignature' | translate}}\n    </div>\n    <input #uploadFile type=\"file\" style=\"display:none;\" (change)=\"handleFileInput($event.target.files)\">\n    <div class=\"list-item create\" (click)=\"openPad()\">\n      <i class=\"fas fa-pen-nib fa-2x\"></i>\n      {{'lang.createNewSignature' | translate}}\n    </div>\n    <div [@listAnimation]=\"signaturesService.signaturesListSubstituted.length\" style=\"display: contents;\">\n      <div *ngFor=\"let signature of signaturesService.signaturesListSubstituted;let i=index\" class=\"list-item\" [title]=\"'lang.selectSignature' | translate\" style=\"position: relative;overflow: hidden\" (tap)=\"tapEvent(signature,i,'substitute')\">\n        <button mat-mini-fab color=\"primary\" [title]=\"'lang.selectSignature' | translate\" class=\"sign_icon add_icon\" (tap)=\"selectSignature(signature,'imgSignSub_'+i);\">\n          <mat-icon class=\"fa fa-arrow-up\"></mat-icon>\n        </button>\n        <img id=\"imgSignSub_{{i}}\" [src]=\"sanitization.bypassSecurityTrustUrl('data:image/png;base64,' + signature.encodedSignature)\"\n          style=\"width: 190px;\">\n        <div class=\"substituteInfo\">{{'lang.substitutedSignature' | translate}}</div>\n      </div>\n    </div>\n    <div [@listAnimation]=\"signaturesService.signaturesList.length\" style=\"display: contents;\">\n      <div *ngFor=\"let signature of signaturesService.signaturesList;let i=index\" class=\"list-item\" [title]=\"'lang.selectSignature' | translate\" style=\"position: relative;overflow: hidden\" (tap)=\"tapEvent(signature,i,'')\">\n        <button mat-mini-fab color=\"warn\" [title]=\"'lang.removeSignature' | translate\" class=\"sign_icon remove_icon\" (tap)=\"removeSignature(signature,i);\">\n          <mat-icon class=\"fa fa-times\"></mat-icon>\n        </button>\n        <button mat-mini-fab color=\"primary\" [title]=\"'lang.selectSignature' | translate\" class=\"sign_icon add_icon\" (tap)=\"selectSignature(signature,'imgSign_'+i);\">\n          <mat-icon class=\"fa fa-arrow-up\"></mat-icon>\n        </button>\n        <img id=\"imgSign_{{i}}\" [src]=\"sanitization.bypassSecurityTrustUrl('data:image/png;base64,' + signature.encodedSignature)\"\n          style=\"width: 190px;\">\n      </div>\n    </div>\n  </section>\n</article>\n<app-pad (reloaded)=\"reloadSignatures()\"></app-pad>\n"

/***/ }),

/***/ "./src/frontend/app/signatures/signatures.component.scss":
/*!***************************************************************!*\
  !*** ./src/frontend/app/signatures/signatures.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signatures {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .signatures-top {\n    height: 105px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    border-bottom: 1px solid #e9e8e8; }\n  .signatures .list {\n    width: 100%;\n    padding-top: 40px;\n    overflow: auto;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch; }\n  .signatures .list-item {\n      transition: 0.3s all ease-in-out;\n      height: 190px;\n      width: 190px;\n      margin: 8px;\n      border: 1px solid rgba(151, 151, 151, 0.55);\n      border-radius: 5px;\n      background-color: #fff;\n      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n  .signatures .list-item .substituteInfo {\n        color: #F99830;\n        font-size: 10px;\n        position: absolute;\n        top: 0px;\n        left: 10px; }\n  .signatures .list-item.create {\n        background-color: #F1F4F4;\n        flex-direction: column;\n        text-align: center; }\n  .signatures .list-item:hover, .signatures .list-item:active {\n        transform: translateY(-20px);\n        cursor: pointer; }\n  .sign_icon {\n  position: absolute;\n  top: 5px; }\n  .sign_icon .mat-icon {\n    color: white;\n    height: auto; }\n  .add_icon {\n  right: 5px; }\n  .remove_icon {\n  left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9udGVuZC9hcHAvc2lnbmF0dXJlcy9EOlxcTWFhcmNoUGFyYXBoZXVyLTIwLjAzL3NyY1xcZnJvbnRlbmRcXGFwcFxcc2lnbmF0dXJlc1xcc2lnbmF0dXJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7RUFFbkI7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdDQUFnQyxFQUFBO0VBWHhDO0lBZVEsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGlDQUFpQyxFQUFBO0VBdEJ6QztNQXlCWSxnQ0FBZ0M7TUFDaEMsYUFBYTtNQUNiLFlBQVk7TUFDWixXQUFXO01BQ1gsMkNBQTJDO01BQzNDLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsMkNBQTJDO01BQzNDLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7RUFuQy9CO1FBcUNnQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsVUFBVSxFQUFBO0VBekMxQjtRQTRDZ0IseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixrQkFBa0IsRUFBQTtFQTlDbEM7UUFtRGdCLDRCQUE0QjtRQUM1QixlQUFlLEVBQUE7RUFNL0I7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUSxFQUFBO0VBRlo7SUFLUSxZQUFZO0lBQ1osWUFBWSxFQUFBO0VBSXBCO0VBQ0ksVUFBVSxFQUFBO0VBSWQ7RUFDSSxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2Zyb250ZW5kL2FwcC9zaWduYXR1cmVzL3NpZ25hdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jc3MvdmFycy5zY3NzJztcblxuLnNpZ25hdHVyZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJi10b3Age1xuICAgICAgICBoZWlnaHQ6IDEwNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOGU4O1xuICAgIH1cblxuICAgIC5saXN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAgICAgICAmLWl0ZW0ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuNTUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLnN1YnN0aXR1dGVJbmZvIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Y5OTgzMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmNyZWF0ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGNDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNpZ25faWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIFxuICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cblxuLmFkZF9pY29uIHtcbiAgICByaWdodDogNXB4O1xufVxuXG5cbi5yZW1vdmVfaWNvbiB7XG4gICAgbGVmdDogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/frontend/app/signatures/signatures.component.ts":
/*!*************************************************************!*\
  !*** ./src/frontend/app/signatures/signatures.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var signatures_service_1 = __webpack_require__(/*! ../service/signatures.service */ "./src/frontend/app/service/signatures.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var notification_service_1 = __webpack_require__(/*! ../service/notification.service */ "./src/frontend/app/service/notification.service.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var auth_service_1 = __webpack_require__(/*! ../service/auth.service */ "./src/frontend/app/service/auth.service.ts");
var local_storage_service_1 = __webpack_require__(/*! ../service/local-storage.service */ "./src/frontend/app/service/local-storage.service.ts");
var SignaturesComponent = /** @class */ (function () {
    function SignaturesComponent(translate, http, signaturesService, bottomSheetRef, sanitization, notificationService, authService, localStorage, renderer) {
        this.translate = translate;
        this.http = http;
        this.signaturesService = signaturesService;
        this.bottomSheetRef = bottomSheetRef;
        this.sanitization = sanitization;
        this.notificationService = notificationService;
        this.authService = authService;
        this.localStorage = localStorage;
        this.renderer = renderer;
        this.inAllPage = false;
        this.count = 0;
    }
    SignaturesComponent_1 = SignaturesComponent;
    SignaturesComponent.prototype.ngOnInit = function () {
    };
    SignaturesComponent.prototype.openSignatures = function () {
        this.signaturesService.showSign = true;
    };
    SignaturesComponent.prototype.closeSignatures = function () {
        this.signaturesService.showSign = false;
    };
    SignaturesComponent.prototype.openPad = function () {
        this.signaturesService.showPad = true;
        this.closeSignatures();
    };
    SignaturesComponent.prototype.reloadSignatures = function () {
        this.signaturesService.signaturesList.unshift({
            id: this.signaturesService.newSign.id,
            encodedSignature: this.signaturesService.newSign.encodedSignature
        });
        this.signaturesService.newSign = {};
    };
    SignaturesComponent.prototype.selectSignature = function (signature, img) {
        signature.positionX = 60;
        signature.positionY = 80;
        var percentWidth = (this.renderer.selectRootElement('#' + img).naturalWidth * 100) / this.renderer.selectRootElement('#snapshotPdf').naturalWidth;
        signature.width = percentWidth;
        if (!this.signaturesService.signaturesContent[this.signaturesService.currentPage]) {
            this.signaturesService.signaturesContent[this.signaturesService.currentPage] = [];
        }
        this.signaturesService.signaturesContent[this.signaturesService.currentPage].push(JSON.parse(JSON.stringify(signature)));
        this.localStorage.save(this.signaturesService.mainDocumentId.toString(), JSON.stringify({ 'sign': this.signaturesService.signaturesContent, 'note': this.signaturesService.notesContent }));
        this.notificationService.success('lang.signatureInDocAdded');
        this.bottomSheetRef.dismiss();
    };
    SignaturesComponent.prototype.removeSignature = function (signature, i) {
        var _this = this;
        var r = confirm(this.translate.instant('lang.wantDeleteSignature'));
        if (r) {
            this.http.delete('../rest/users/' + this.authService.user.id + '/signatures/' + signature.id)
                .subscribe(function () {
                _this.signaturesService.signaturesList.splice(i, 1);
                _this.notificationService.success('lang.signatureDeleted');
                _this.bottomSheetRef.dismiss();
                var config = {
                    disableClose: false,
                    direction: 'ltr'
                };
                _this.bottomSheetRef.open(SignaturesComponent_1, config);
            }, function (err) {
                _this.notificationService.error(err.error.errors);
            });
        }
    };
    SignaturesComponent.prototype.toggleAllPage = function () {
        this.inAllPage = !this.inAllPage;
    };
    SignaturesComponent.prototype.tapEvent = function (signature, i, mode) {
        var _this = this;
        this.count++;
        setTimeout(function () {
            if (_this.count === 1) {
                _this.count = 0;
            }
            else if (_this.count > 1) {
                _this.count = 0;
                var id = mode === 'substitute' ? ('imgSignSub_' + i) : ('imgSign_' + i);
                _this.selectSignature(signature, id);
            }
        }, 250);
    };
    SignaturesComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        var fileToUpload = files.item(0);
        if (fileToUpload.size <= 1000000) {
            if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].indexOf(fileToUpload.type) !== -1) {
                var myReader_1 = new FileReader();
                myReader_1.onloadend = function (e) {
                    var newEncodedSign = myReader_1.result.toString().replace('data:' + fileToUpload.type + ';base64,', '');
                    _this.localStorage.save('signature', JSON.stringify(newEncodedSign));
                    // Save signature in BDD
                    var newSign = {
                        'id': 0,
                        'encodedSignature': newEncodedSign,
                        'format': 'png'
                    };
                    _this.http.post('../rest/users/' + _this.authService.user.id + '/signatures', newSign)
                        .subscribe(function (data) {
                        newSign.id = data.signatureId;
                        _this.signaturesService.newSign = newSign;
                        _this.reloadSignatures();
                        _this.notificationService.success('lang.signatureRegistered');
                        _this.bottomSheetRef.dismiss();
                        var config = {
                            disableClose: false,
                            direction: 'ltr'
                        };
                        _this.bottomSheetRef.open(SignaturesComponent_1, config);
                    });
                };
                myReader_1.readAsDataURL(fileToUpload);
            }
            else {
                this.notificationService.error('lang.notAnImage');
            }
        }
        else {
            this.notificationService.error('lang.maxFileSizeReached');
        }
    };
    var SignaturesComponent_1;
    SignaturesComponent = SignaturesComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-signatures',
            template: __webpack_require__(/*! ./signatures.component.html */ "./src/frontend/app/signatures/signatures.component.html"),
            animations: [
                animations_1.trigger('listAnimation', [
                    animations_1.transition('* => *', [
                        animations_1.query(':enter', [
                            animations_1.style({ opacity: 0 }),
                            animations_1.stagger(100, [
                                animations_1.animate('0.5s', animations_1.style({ opacity: 1 }))
                            ])
                        ], { optional: true })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./signatures.component.scss */ "./src/frontend/app/signatures/signatures.component.scss")]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService,
            http_1.HttpClient,
            signatures_service_1.SignaturesContentService,
            material_1.MatBottomSheet,
            platform_browser_1.DomSanitizer,
            notification_service_1.NotificationService,
            auth_service_1.AuthService,
            local_storage_service_1.LocalStorageService,
            core_1.Renderer2])
    ], SignaturesComponent);
    return SignaturesComponent;
}());
exports.SignaturesComponent = SignaturesComponent;


/***/ }),

/***/ "./src/frontend/core/$$_lazy_route_resource lazy recursive":
/*!************************************************************************!*\
  !*** ./src/frontend/core/$$_lazy_route_resource lazy namespace object ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/frontend/core/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/frontend/core/environments/environment.ts":
/*!*******************************************************!*\
  !*** ./src/frontend/core/environments/environment.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    VERSION: __webpack_require__(/*! ../../../../package.json */ "./package.json").version + ' (development mode)',
    AUTHOR: __webpack_require__(/*! ../../../../package.json */ "./package.json").author
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/frontend/core/main.ts":
/*!***********************************!*\
  !*** ./src/frontend/core/main.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ../app/app.module */ "./src/frontend/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/frontend/core/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/frontend/core/main.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MaarchParapheur-20.03\src\frontend\core\main.ts */"./src/frontend/core/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map