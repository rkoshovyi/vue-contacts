webpackJsonp([1],{Kax8:function(t,a,e){t.exports=e.p+"img/no-avatar.88962eb.jpg"},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),i=e("mvHQ"),o=e.n(i),s={name:"Contacts",data:function(){return{contact:{name:null,phoneNumber:null,workNumber:null,email:null,image:"",isFavorite:!1,groups:null},contactsList:[],groups:[{name:"Семья",contactsCount:0},{name:"Друзья",contactsCount:0},{name:"Сотрудники",contactsCount:0}],filterValue:""}},mounted:function(){this.getContacts()},computed:{filteredContacts:function(){var t=this;return this.contactsList.filter(function(a){return a.name.toUpperCase().includes(t.filterValue.toUpperCase())})}},methods:{saveContactsList:function(){localStorage.setItem("contacts",o()(this.sortContactsList(this.contactsList))),this.contactsList=this.sortContactsList(this.contactsList)},sortContactsList:function(t){for(var a=[],e=[],n=t.slice().sort(function(t,a){return t.name.toUpperCase()>a.name.toUpperCase()?1:t.name.toUpperCase()<a.name.toUpperCase()?-1:0}),i=0;i<n.length;i++)n[i].isFavorite?a.push(n[i]):e.push(n[i]);return n=a.concat(e)},addContact:function(t){this.contactsList.push(t),this.saveContactsList()},editContact:function(t,a){this.$set(this.contactsList,a,t),this.saveContactsList()},getContacts:function(){for(var t=JSON.parse(localStorage.getItem("contacts")||"[]"),a=0;a<t.length;a++)this.contactsList.push(t[a])},isFavoriteChanging:function(t){var a=this.contactsList.indexOf(t);this.contactsList[a].isFavorite=!this.contactsList[a].isFavorite,this.saveContactsList()},deleteContact:function(t){this.$delete(this.contactsList,this.contactsList.indexOf(t)),this.saveContactsList()}}},c={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"contact-container"},[n("form",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filterValue,expression:"filterValue"}],attrs:{type:"text",placeholder:"Начните вводить имя",change:t.filteredContacts},domProps:{value:t.filterValue},on:{input:function(a){a.target.composing||(t.filterValue=a.target.value)}}})]),t._v(" "),n("div",{staticClass:"contacts-list-wrapper"},[n("ul",{staticClass:"contacts-list"},[t.contactsList.length?n("div",t._l(t.filteredContacts,function(a){return n("li",{staticClass:"contact"},[n("div",{staticClass:"contact-image"},[a.image?n("img",{attrs:{src:a.image}}):n("img",{attrs:{src:e("Kax8")}})]),t._v(" "),n("div",{staticClass:"contact-info"},[n("div",{directives:[{name:"show",rawName:"v-show",value:a.name,expression:"contact.name"}],staticClass:"contact-info-row"},[n("div",{staticClass:"contact-info-left"},[t._v("\r\n                Имя:\r\n              ")]),t._v(" "),n("div",{staticClass:"contact-info-item"},[t._v("\r\n                "+t._s(a.name)+"\r\n              ")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:a.phoneNumber,expression:"contact.phoneNumber"}],staticClass:"contact-info-row"},[n("div",{staticClass:"contact-info-left"},[t._v("\r\n                Личный:\r\n              ")]),t._v(" "),n("div",{staticClass:"contact-info-item"},[n("a",{attrs:{href:"tel:{{ contact.phoneNumber }}"}},[t._v(t._s(a.phoneNumber))])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:a.workNumber,expression:"contact.workNumber"}],staticClass:"contact-info-row"},[n("div",{staticClass:"contact-info-left"},[t._v("\r\n                Рабочий:\r\n              ")]),t._v(" "),n("div",{staticClass:"contact-info-item"},[n("a",{attrs:{href:"tel:{{ contact.workNumber }}"}},[t._v(t._s(a.workNumber))])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:a.email,expression:"contact.email"}],staticClass:"contact-info-row"},[n("div",{staticClass:"contact-info-left"},[t._v("\r\n                Email:\r\n              ")]),t._v(" "),n("div",{staticClass:"contact-info-item"},[n("a",{attrs:{href:"mailto:{{ contact.email }}"}},[t._v(t._s(a.email))])])])]),t._v(" "),n("div",{staticClass:"favorite-button contact-button",on:{click:function(e){t.isFavoriteChanging(a)}}},[n("i",{class:[a.isFavorite?"fas":"far","fa-star"]})]),t._v(" "),n("div",{staticClass:"edit-button contact-button",on:{click:function(e){t.$emit("editContactShow",a)}}},[n("i",{staticClass:"fas fa-pen"})]),t._v(" "),n("div",{staticClass:"delete-button contact-button",on:{click:function(e){t.deleteContact(a)}}},[n("i",{staticClass:"fas fa-times"})])])})):n("p",{staticClass:"no-contacts"},[t._v("Контактов нет")])]),t._v(" "),n("div",{staticClass:"bottom-bar"},[n("div",{staticClass:"contacts-count"},[t.filterValue?n("p",[t._v("Найдено: "+t._s(t.filteredContacts.length))]):n("p",[t._v("Всего контактов: "+t._s(t.contactsList.length))])]),t._v(" "),n("div",{staticClass:"add-contact-button",on:{click:function(a){t.$emit("addContactShow")}}},[n("i",{staticClass:"fas fa-plus"})])])])])},staticRenderFns:[]};var l=e("VU/8")(s,c,!1,function(t){e("wsID")},null,null).exports,r=e("zM1N"),d=e.n(r),m={name:"AddEditModal",data:function(){return{nameInput:"",phoneInput:"",isAddContactShow:!1,isEditContactShow:!1,indexOfEdit:"",newContact:{name:null,phoneNumber:null,workNumber:null,email:null,image:"",isFavorite:!1,groups:null},editableContact:{},disabled:!0,groups:[{name:"Семья",contactsCount:0},{name:"Друзья",contactsCount:0},{name:"Сотрудники",contactsCount:0}]}},computed:{required:function(){return this.isAddContactShow?!this.newContact.name||!(this.newContact.phoneNumber||this.newContact.workNumber||this.newContact.email):!this.editableContact.name||!(this.editableContact.phoneNumber||this.editableContact.workNumber||this.editableContact.email)}},methods:{clearInputs:function(){this.newContact={name:null,phoneNumber:null,workNumber:null,email:null,image:"",isFavorite:!1}},addContactShow:function(){this.isAddContactShow=!0,this.isEditContactShow=!1},editContactShow:function(t,a){this.isEditContactShow=!0,this.isAddContactShow=!1,this.editableContact=d()(t),this.indexOfEdit=a},hideModals:function(){this.isAddContactShow=!1,this.isEditContactShow=!1,this.clearInputs()},uploadImage:function(t){var a=t.target.files||t.dataTransfer.files;a.length&&this.createImage(a[0])},createImage:function(t){var a=this,e=new FileReader;e.onload=function(t){a.isAddContactShow?a.newContact.image=t.target.result:a.editableContact.image=t.target.result},e.readAsDataURL(t)},deleteImage:function(){this.isAddContactShow?this.newContact.image="":this.editableContact.image=""}}},u={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"modal-body"},[n("div",{staticClass:"modal-close",on:{click:function(a){t.$emit("modalHide"),t.hideModals()}}},[n("i",{staticClass:"fas fa-times"})]),t._v(" "),t.isAddContactShow?n("form",{staticClass:"modal-form"},[n("p",{staticClass:"modal-title"},[t._v("Добавить контакт")]),t._v(" "),n("div",{staticClass:"modal-content"},[n("div",{staticClass:"contacts-image-wrapper"},[n("div",{staticClass:"contact-image"},[t.newContact.image?n("img",{attrs:{src:t.newContact.image}}):n("img",{attrs:{src:e("Kax8")}})]),t._v(" "),n("div",{staticClass:"change-image"},[t.newContact.image?n("div",{staticClass:"image-button"},[n("button",{attrs:{type:"button"},on:{click:t.deleteImage}},[t._v("Удалить фото")])]):n("div",{staticClass:"image-button"},[n("input",{attrs:{type:"file",id:"addUploadImage"},on:{change:t.uploadImage}}),t._v(" "),n("label",{attrs:{for:"addUploadImage"}},[t._v("Загрузить фото")])])])]),t._v(" "),n("div",{staticClass:"modal-inputs"},[n("div",{staticClass:"modal-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newContact.name,expression:"newContact.name"}],attrs:{type:"text",placeholder:"Имя",name:"name"},domProps:{value:t.newContact.name},on:{input:function(a){a.target.composing||t.$set(t.newContact,"name",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"modal-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newContact.phoneNumber,expression:"newContact.phoneNumber"}],attrs:{type:"number",placeholder:"Личный номер",name:"phone"},domProps:{value:t.newContact.phoneNumber},on:{input:function(a){a.target.composing||t.$set(t.newContact,"phoneNumber",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"modal-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newContact.workNumber,expression:"newContact.workNumber"}],attrs:{type:"number",placeholder:"Рабочий номер",name:"workPhone"},domProps:{value:t.newContact.workNumber},on:{input:function(a){a.target.composing||t.$set(t.newContact,"workNumber",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"modal-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newContact.email,expression:"newContact.email"}],attrs:{type:"text",placeholder:"Email",name:"email"},domProps:{value:t.newContact.email},on:{input:function(a){a.target.composing||t.$set(t.newContact,"email",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"save-contact-button"},[n("input",{attrs:{type:"submit",value:"Сохранить",disabled:t.required},on:{click:[function(a){t.$emit("addContact",t.newContact),t.hideModals()},function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null}]}})])])])]):t.isEditContactShow?n("form",{staticClass:"modal-form"},[n("p",{staticClass:"modal-title"},[t._v("Изменить контакт")]),t._v(" "),n("div",{staticClass:"modal-content"},[n("div",{staticClass:"contacts-image-wrapper"},[n("div",{staticClass:"contact-image"},[t.editableContact.image?n("img",{staticStyle:{width:"100px"},attrs:{src:t.editableContact.image}}):n("img",{staticStyle:{width:"100px"},attrs:{src:e("Kax8")}})]),t._v(" "),n("div",{staticClass:"change-image"},[t.editableContact.image?n("div",{staticClass:"image-button"},[n("button",{attrs:{type:"button"},on:{click:t.deleteImage}},[t._v("Удалить фото")])]):n("div",{staticClass:"image-button"},[n("input",{attrs:{type:"file",id:"addUploadImage"},on:{change:t.uploadImage}}),t._v(" "),n("label",{attrs:{for:"addUploadImage"}},[t._v("Загрузить фото")])])])]),t._v(" "),n("div",{staticClass:"modal-inputs"},[n("div",{staticClass:"modal-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editableContact.name,expression:"editableContact.name"}],attrs:{type:"text",placeholder:"Имя",name:"name"},domProps:{value:t.editableContact.name},on:{input:function(a){a.target.composing||t.$set(t.editableContact,"name",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"modal-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editableContact.phoneNumber,expression:"editableContact.phoneNumber"}],attrs:{type:"number",placeholder:"Личный номер",name:"phone"},domProps:{value:t.editableContact.phoneNumber},on:{input:function(a){a.target.composing||t.$set(t.editableContact,"phoneNumber",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"modal-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editableContact.workNumber,expression:"editableContact.workNumber"}],attrs:{type:"number",placeholder:"Рабочий номер",name:"workPhone"},domProps:{value:t.editableContact.workNumber},on:{input:function(a){a.target.composing||t.$set(t.editableContact,"workNumber",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"modal-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editableContact.email,expression:"editableContact.email"}],attrs:{type:"text",placeholder:"Email",name:"email"},domProps:{value:t.editableContact.email},on:{input:function(a){a.target.composing||t.$set(t.editableContact,"email",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"save-contact-button"},[n("input",{attrs:{type:"submit",value:"Сохранить",disabled:t.required},on:{click:[function(a){t.$emit("editContact",[t.editableContact,t.indexOfEdit]),t.hideModals()},function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null}]}})])])])]):t._e()])},staticRenderFns:[]};var v={name:"App",components:{Contacts:l,AddEditModal:e("VU/8")(m,u,!1,function(t){e("msVs")},null,null).exports},data:function(){return{showModal:!1}},methods:{showAddModal:function(){this.$refs.modal.addContactShow(),this.showModal=!0},showEditModal:function(t){this.$refs.modal.editContactShow(t,this.$refs.contacts.contactsList.indexOf(t)),this.showModal=!0},addContact:function(t){this.$refs.contacts.addContact(t),this.$refs.modal.clearInputs(),this.modalHide()},editContact:function(t){this.$refs.contacts.editContact(t[0],t[1]),this.modalHide()},modalHide:function(){this.showModal=!1},scrollHanle:function(t){console.log(t)}}},p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"contacts-wrapper"},[a("contacts",{ref:"contacts",on:{addContactShow:this.showAddModal,editContactShow:this.showEditModal}}),this._v(" "),a("add-edit-modal",{directives:[{name:"show",rawName:"v-show",value:this.showModal,expression:"showModal"}],ref:"modal",on:{modalHide:this.modalHide,addContact:this.addContact,editContact:this.editContact}})],1)])},staticRenderFns:[]};var C=e("VU/8")(v,p,!1,function(t){e("lszK")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:C},template:"<App/>"})},lszK:function(t,a){},msVs:function(t,a){},wsID:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.93b13c005d170ae87d6d.js.map