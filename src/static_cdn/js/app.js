(function(t){function e(e){for(var o,s,n=e[0],l=e[1],c=e[2],u=0,v=[];u<n.length;u++)s=n[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("v-content",[a("router-view")],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:"",flat:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Library "),a("span",[t._v("(Using DRF & Vue)")])]),a("v-spacer"),a("v-btn",{attrs:{color:"warning"},on:{click:t.template}},[t._v("Check out templates implementation")])],1),a("v-navigation-drawer",{attrs:{app:"","disable-route-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-badge",[a("v-icon",{attrs:{large:""}},[t._v("mdi-library")])],1)],1),a("v-list-item-title",[t._v(t._s(t.$user.get().username))])],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},[t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.to}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),"guest"==t.$user.get().role?a("v-list-item",{attrs:{link:""},on:{click:t.login}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-login")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Login")])],1)],1):a("v-list-item",{attrs:{link:""},on:{click:t.logout}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-logout")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Logout")])],1)],1)],2)],1)],1)},n=[],l=a("bc3a"),c=a.n(l),d={data(){return{drawer:!0,user:{},items:[{title:"Books",icon:"mdi-book-multiple",to:"/books"},{title:"Auhtors",icon:"mdi-pen",to:"/author"},{title:"Categories",icon:"mdi-format-list-bulleted-type",to:"/category"}],mini:!0,right:null}},methods:{logout:function(){window.location.href="/logout/"},login:function(){window.location.href="/login/"},template:function(){window.location.href="/t/books/"}},mounted(){}},u=d,v=(a("9be5"),a("2877")),m=a("6544"),p=a.n(m),h=a("40dc"),g=a("5bc1"),k=a("4ca6"),f=a("8336"),b=a("ce7e"),x=a("132d"),_=a("8860"),w=a("da13"),y=a("8270"),B=a("5d23"),D=a("34c3"),C=a("f774"),$=a("2fa4"),V=a("2a7f"),I=Object(v["a"])(u,s,n,!1,null,"61536e28",null),A=I.exports;p()(I,{VAppBar:h["a"],VAppBarNavIcon:g["a"],VBadge:k["a"],VBtn:f["a"],VDivider:b["a"],VIcon:x["a"],VList:_["a"],VListItem:w["a"],VListItemAvatar:y["a"],VListItemContent:B["a"],VListItemIcon:D["a"],VListItemTitle:B["c"],VNavigationDrawer:C["a"],VSpacer:$["a"],VToolbarTitle:V["a"]});var T={name:"App",components:{Navbar:A},data(){return{}}},R=T,S=a("7496"),E=a("a75b"),F=Object(v["a"])(R,i,r,!1,null,null,null),j=F.exports;p()(F,{VApp:S["a"],VContent:E["a"]});var L=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},["staff"==t.$user.get().role?a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addBookDialog=!0}}},[t._v("\n    Add Book  \n    "),a("v-icon",[t._v("mdi-book-plus")])],1):t._e(),"user"==t.$user.get().role||"staff"==t.$user.get().role?a("v-checkbox",{attrs:{label:"Read Books",value:"value"},on:{change:t.getBooks},model:{value:t.my_books,callback:function(e){t.my_books=e},expression:"my_books"}}):t._e(),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.books,(function(e,o){return a("v-flex",{key:o,attrs:{xs12:"",sm12:"",md6:"",lg4:"","pa-2":""}},[a("v-card",{staticClass:"mx-auto"},[e.cover?a("v-img",{staticClass:"link-img white--text",attrs:{height:"600px",src:e.cover,contain:""},on:{click:function(a){return t.$router.push({path:"/books/"+e.id})}}}):a("v-img",{staticClass:"white--text link-img",attrs:{height:"600px",contain:"",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"},on:{click:function(a){return t.$router.push({path:"/books/"+e.id})}}}),a("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(e.title))]),a("v-card-text",[a("span",{staticClass:"text--primary"},[a("span",[t._v(t._s(t._f("truncate")(e.description,120,"...")))])])]),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"orange"},on:{click:function(a){return t.$router.push({path:"/books/"+e.id})}}},[t._v("Details")]),"staff"==t.$user.get().role?a("v-btn",{attrs:{text:"",color:"info"},on:{click:function(e){return t.setEditedBook(o)}}},[t._v("Edit")]):t._e(),"staff"==t.$user.get().role?a("v-btn",{attrs:{text:"",color:"red"},on:{click:function(a){return t.setDeletedBook(e.id)}}},[t._v("Delete")]):t._e()],1)],1)],1)})),1),a("v-dialog",{attrs:{"max-width":"600px",transition:"dialog-transition"},model:{value:t.addBookDialog,callback:function(e){t.addBookDialog=e},expression:"addBookDialog"}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[t._v("Add Book")]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-text-field",{attrs:{name:"title",label:"Book Title","prepend-icon":"mdi-format-title"},model:{value:t.newBook.title,callback:function(e){t.$set(t.newBook,"title",e)},expression:"newBook.title"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-dialog",{ref:"dialog",attrs:{"return-value":t.newBook.publication_date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){return t.$set(t.newBook,"publication_date",e)},"update:return-value":function(e){return t.$set(t.newBook,"publication_date",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-text-field",t._g({attrs:{label:"Publication Date","prepend-icon":"mdi-calendar-today",readonly:""},model:{value:t.newBook.publication_date,callback:function(e){t.$set(t.newBook,"publication_date",e)},expression:"newBook.publication_date"}},o))]}}]),model:{value:t.bookDateDialog,callback:function(e){t.bookDateDialog=e},expression:"bookDateDialog"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:t.newBook.publication_date,callback:function(e){t.$set(t.newBook,"publication_date",e)},expression:"newBook.publication_date"}},[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.bookDateDialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.newBook.publication_date)}}},[t._v("OK")])],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-select",{attrs:{items:t.categories,label:"Book Category","prepend-icon":"mdi-format-list-bulleted-type","item-text":"name","item-value":"id",clearable:"",required:""},model:{value:t.newBook.category,callback:function(e){t.$set(t.newBook,"category",e)},expression:"newBook.category"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-file-input",{attrs:{label:"Book Cover","prepend-icon":"mdi-file-image",clearable:"",accept:"image/png, image/jpeg, image/bmp"},model:{value:t.newBook.cover,callback:function(e){t.$set(t.newBook,"cover",e)},expression:"newBook.cover"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"","pa-2":""}},[a("v-select",{attrs:{items:t.authors,label:"Book Authors","prepend-icon":"mdi-pen","item-text":t.get_full_name,multiple:"",chips:"","item-value":"id",clearable:"",required:""},model:{value:t.newBook.authors,callback:function(e){t.$set(t.newBook,"authors",e)},expression:"newBook.authors"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"","pa-2":""}},[a("v-textarea",{attrs:{label:"Book Description",name:"description","prepend-icon":"mdi-information-outline"},model:{value:t.newBook.description,callback:function(e){t.$set(t.newBook,"description",e)},expression:"newBook.description"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{on:{click:function(e){t.addBookDialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"success"},on:{click:t.addBook}},[t._v("Add Book")])],1)],1)],1)],1),"staff"==t.$user.get().role?a("v-dialog",{attrs:{"max-width":"600px",transition:"dialog-transition"},model:{value:t.editBookDialog,callback:function(e){t.editBookDialog=e},expression:"editBookDialog"}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[t._v("Edit Book")]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-text-field",{attrs:{name:"title",label:"Book Title","prepend-icon":"mdi-format-title"},model:{value:t.editedBook.title,callback:function(e){t.$set(t.editedBook,"title",e)},expression:"editedBook.title"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-dialog",{ref:"editDialog",attrs:{"return-value":t.editedBook.publication_date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){return t.$set(t.editedBook,"publication_date",e)},"update:return-value":function(e){return t.$set(t.editedBook,"publication_date",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-text-field",t._g({attrs:{label:"Publication Date","prepend-icon":"mdi-calendar-today",readonly:""},model:{value:t.editedBook.publication_date,callback:function(e){t.$set(t.editedBook,"publication_date",e)},expression:"editedBook.publication_date"}},o))]}}],null,!1,429684837),model:{value:t.editBookDateDialog,callback:function(e){t.editBookDateDialog=e},expression:"editBookDateDialog"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:t.editedBook.publication_date,callback:function(e){t.$set(t.editedBook,"publication_date",e)},expression:"editedBook.publication_date"}},[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.editBookDateDialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.editDialog.save(t.editedBook.publication_date)}}},[t._v("OK")])],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-select",{attrs:{items:t.categories,label:"Book Category","prepend-icon":"mdi-format-list-bulleted-type","item-text":"name","item-value":"id",clearable:"",required:""},model:{value:t.editedBook.category,callback:function(e){t.$set(t.editedBook,"category",e)},expression:"editedBook.category"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-file-input",{attrs:{label:"Book Cover","prepend-icon":"mdi-file-image",clearable:"",accept:"image/png, image/jpeg, image/bmp"},model:{value:t.editedBook.cover,callback:function(e){t.$set(t.editedBook,"cover",e)},expression:"editedBook.cover"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"","pa-2":""}},[a("v-select",{attrs:{items:t.authors,label:"Book Authors","prepend-icon":"mdi-pen","item-text":t.get_full_name,multiple:"",chips:"","item-value":"id",clearable:"",required:""},model:{value:t.editedBook.authors,callback:function(e){t.$set(t.editedBook,"authors",e)},expression:"editedBook.authors"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"","pa-2":""}},[a("v-textarea",{attrs:{label:"Book Description",name:"description","prepend-icon":"mdi-information-outline"},model:{value:t.editedBook.description,callback:function(e){t.$set(t.editedBook,"description",e)},expression:"editedBook.description"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{on:{click:function(e){t.editBookDialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"success"},on:{click:t.updateBook}},[t._v("Update")])],1)],1)],1)],1):t._e(),a("v-dialog",{attrs:{"max-width":"400px",transition:"dialog-transition"},model:{value:t.deleteBookDialog,callback:function(e){t.deleteBookDialog=e},expression:"deleteBookDialog"}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[t._v("Delete Book ?")]),a("v-card-text",[t._v("\n        This action will delete all reviews associated with this book!\n        It will also delete it from users' libraries\n      ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red",text:""},on:{click:t.deleteBook}},[t._v("I understand the risk")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.deleteBookDialog=!1}}},[t._v("Take me back")])],1)],1)],1)],1)},P=[],N=a("a78e"),X=a.n(N),U=(a("9675"),{data(){return{books:[],addBookDialog:!1,bookDateDialog:!1,editBookDialog:!1,editBookDateDialog:!1,deleteBookDialog:!1,deletedBookId:null,newBook:{},editedBook:{},categories:[],authors:[],my_books:!1}},methods:{getBooks:function(){let t="api/books/";this.my_books&&(t="api/books/?mine=true"),c.a.get(t).then(t=>{this.books=t.data}).catch(t=>{console.log(t)})},getCategories:function(){let t="api/books/category/";c.a.get(t).then(t=>{this.categories=t.data}).catch(t=>{console.log(t)})},getAuthors:function(){let t="api/books/author/";c.a.get(t).then(t=>{this.authors=t.data}).catch(t=>{console.log(t)})},get_full_name:function(t){return t.first_name+" "+t.last_name},addBook:function(){let t="api/books/",e=X.a.get("csrftoken"),a={headers:{"Content-Type":"multipart/form-data","X-CSRFToken":e}},o=new FormData;o.set("title",this.newBook.title),o.set("description",this.newBook.description),o.set("publication_date",this.newBook.publication_date),this.newBook.cover&&o.set("cover",this.newBook.cover),o.set("category",this.newBook.category),o.set("authors",JSON.stringify(this.newBook.authors)),c.a.post(t,o,a).then(t=>{this.$bvToast.toast("Book was added successfully",{title:"Book Add",variant:"success",solid:!0}),this.getBooks(),this.addBookDialog=!1,this.newBook={}}).catch(t=>{console.log(t)}).finally(()=>{})},setEditedBook:function(t){this.editedBook.id=this.books[t].id,this.editedBook.cover=null,this.editedBook.category=this.books[t].category.id,this.editedBook.authors=[];for(let e=0;e<this.books[t].authors.length;e++){const a=this.books[t].authors[e];this.editedBook.authors.push(a.id)}this.editedBook.description=this.books[t].description,this.editedBook.title=this.books[t].title,this.editedBook.publication_date=this.books[t].publication_date,this.editBookDialog=!0},updateBook:function(){let t=`api/books/${this.editedBook.id}/`,e=X.a.get("csrftoken"),a={headers:{"Content-Type":"multipart/form-data","X-CSRFToken":e}},o=new FormData;o.set("title",this.editedBook.title),o.set("description",this.editedBook.description),o.set("publication_date",this.editedBook.publication_date),this.editedBook.cover&&o.set("cover",this.editedBook.cover),o.set("category",this.editedBook.category),o.set("authors",JSON.stringify(this.editedBook.authors)),c.a.patch(t,o,a).then(t=>{this.$bvToast.toast("Book was updated successfully",{title:"Book Update",variant:"success",solid:!0}),this.getBooks(),this.edited=!1,this.editedBook={},this.editBookDialog=!1}).catch(t=>{console.log(t)}).finally(()=>{})},setDeletedBook:function(t){this.deleteBookDialog=!0,this.deletedBookId=t},deleteBook:function(){let t=`api/books/${this.deletedBookId}/`,e=X.a.get("csrftoken"),a={headers:{"X-CSRFToken":e}};c.a.delete(t,a).then(t=>{this.$bvToast.toast("Book was deleted successfully",{title:"Book Delete",variant:"success",solid:!0}),this.deleteBookDialog=!1,this.deletedBookId=null,this.getBooks()}).catch(t=>{console.error(t)})}},mounted(){this.getBooks(),this.getCategories(),this.getAuthors()}}),M=U,q=(a("8c02"),a("b0af")),J=a("99d9"),H=a("ac7c"),K=a("a523"),z=a("2e4b"),G=a("169a"),Q=a("23a7"),W=a("0e8f"),Y=a("adda"),Z=a("a722"),tt=a("b974"),et=a("8654"),at=a("a844"),ot=Object(v["a"])(M,O,P,!1,null,"eed42cc6",null),it=ot.exports;p()(ot,{VBtn:f["a"],VCard:q["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VCheckbox:H["a"],VContainer:K["a"],VDatePicker:z["a"],VDialog:G["a"],VFileInput:Q["a"],VFlex:W["a"],VIcon:x["a"],VImg:Y["a"],VLayout:Z["a"],VSelect:tt["a"],VSpacer:$["a"],VTextField:et["a"],VTextarea:at["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"ma-auto":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs10:"",sm10:"",md10:"",lg10:""}},[a("v-card",[t.book.cover?a("v-img",{attrs:{contain:"",height:"800",src:t.book.cover}}):a("v-img",{attrs:{height:"800",contain:"",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("h2",[t._v(t._s(t.book.title))])]),a("v-card-title",[a("h3",{staticStyle:{color:"orange"}},[t._v("Category : "+t._s(t.book.category.name))]),a("v-spacer"),t.book_read?a("v-btn",{attrs:{color:"warning",text:""},on:{click:t.toggle_read}},[a("v-icon",[t._v("mdi-read")]),t._v("Mark Unread\n          ")],1):a("v-btn",{attrs:{color:"success",text:""},on:{click:t.toggle_read}},[a("v-icon",[t._v("mdi-check")]),t._v("Mark Read\n          ")],1)],1),a("br"),a("v-card-text",[t._v(t._s(t.book.description))]),a("v-card-title",{attrs:{"primary-title":""}},[t._v("Reviews : "+t._s(t.reviews_count))]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs8:"",sm8:"",md8:"",lg8:""}},[t.my_review.id?a("div",[a("v-textarea",{attrs:{label:"Update review","prepend-icon":"mdi-comment"},model:{value:t.my_review.text,callback:function(e){t.$set(t.my_review,"text",e)},expression:"my_review.text"}}),a("v-btn",{attrs:{color:"success",text:""},on:{click:t.updateReview}},[t._v("Update")]),a("v-btn",{attrs:{color:"error",text:""},on:{click:t.deleteReview}},[t._v("Delete")])],1):a("div",["guest"!==t.$user.get().role?a("div",[a("v-textarea",{attrs:{label:"Add review"},model:{value:t.new_review.text,callback:function(e){t.$set(t.new_review,"text",e)},expression:"new_review.text"}}),a("v-btn",{attrs:{color:"success",text:""},on:{click:t.addReview}},[t._v("Add Review")])],1):t._e()]),a("br"),a("br"),t._l(t.reviews,(function(e,o){return a("v-list-item",{key:o,attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))]),a("v-list-item-subtitle",[t._v("\n                    "+t._s(t._f("moment")(e.timestamp,"from","now"))+" by\n                    "),a("i",[t._v(t._s(e.user))])])],1)],1)}))],2)],1)],1)],1)],1)],1)],1)},st=[],nt={data(){return{book:{category:{name:""},cover:null},my_review:{},new_review:{},reviews:[],reviews_count:0,disable_review:!0,book_read:!1}},methods:{getCurrentBook:function(){let t=`api/books/${this.$route.params.id}/`;c.a.get(t).then(t=>{this.book=t.data}).catch(t=>{console.error(t)})},getBookReviews:function(){let t=`api/books/${this.$route.params.id}/reviews/`;c.a.get(t).then(t=>{this.reviews_count=t.data.length;for(let e=0;e<t.data.length;e++)t.data[e].user.id===this.$user.get().id?this.my_review={id:t.data[e].id,text:t.data[e].text}:this.reviews.push({id:t.data[e].id,text:t.data[e].text,timestamp:t.data[e].timestamp,user:t.data[e].user.username})}).catch(t=>{console.error(t)})},addReview:function(){let t=`api/books/${this.$route.params.id}/reviews/`,e=X.a.get("csrftoken"),a={headers:{"X-CSRFToken":e}};c.a.post(t,this.new_review,a).then(t=>{this.new_review={},this.$bvToast.toast("Review was added successfully",{title:"Review Added",variant:"success",solid:!0}),this.getBookReviews()}).catch(t=>{console.error(t)})},updateReview:function(){let t=`api/reviews/${this.my_review.id}/`,e=X.a.get("csrftoken"),a={headers:{"X-CSRFToken":e}};c.a.patch(t,this.my_review,a).then(t=>{this.$bvToast.toast("Review was udapted successfully",{title:"Review Update",variant:"success",solid:!0}),this.getBookReviews()}).catch(t=>{console.error(t)})},deleteReview:function(){let t=`api/reviews/${this.my_review.id}/`,e=X.a.get("csrftoken"),a={headers:{"X-CSRFToken":e}};c.a.delete(t,a).then(t=>{this.my_review={},this.getBookReviews(),this.$bvToast.toast("Review was deleted successfully",{title:"Review Delete",variant:"success",solid:!0})}).catch(t=>{console.error(t)})},getReadStatus:function(){let t=`api/books/${this.$route.params.id}/read/`;c.a.get(t).then(t=>{this.book_read=t.data.read}).catch(t=>{console.error(t)})},toggle_read:function(){let t=`api/books/${this.$route.params.id}/read/`,e=X.a.get("csrftoken"),a={headers:{"X-CSRFToken":e}};c.a.post(t,{},a).then(t=>{this.getReadStatus()}).catch(t=>{console.error(t)})}},mounted(){this.getCurrentBook(),this.getBookReviews(),this.getReadStatus()}},lt=nt,ct=Object(v["a"])(lt,rt,st,!1,null,null,null),dt=ct.exports;p()(ct,{VBtn:f["a"],VCard:q["a"],VCardText:J["b"],VCardTitle:J["c"],VContainer:K["a"],VFlex:W["a"],VIcon:x["a"],VImg:Y["a"],VLayout:Z["a"],VListItem:w["a"],VListItemContent:B["a"],VListItemSubtitle:B["b"],VListItemTitle:B["c"],VSpacer:$["a"],VTextarea:at["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",["staff"==t.$user.get().role?a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addDialog=!0}}},[t._v("\n    Add Category\n     \n    "),a("v-icon",[t._v("mdi-playlist-plus")])],1):t._e(),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md12:"",sm12:"",lg12:"","pa-5":""}},[a("v-expansion-panels",t._l(t.categories,(function(e,o){return a("v-expansion-panel",{key:o},[a("v-expansion-panel-header",[a("h3",[t._v(t._s(e.name))])]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(t._s(t._f("truncate")(e.description,120,"...")))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"success",text:""},on:{click:function(a){return t.$router.push({path:"/category/"+e.id})}}},[t._v("Details")]),"staff"==t.$user.get().role?a("v-btn",{attrs:{color:"error",text:""},on:{click:function(a){return t.setDeletedItem(e.id)}}},[t._v("Delete")]):t._e(),"staff"==t.$user.get().role?a("v-btn",{attrs:{color:"info",text:""},on:{click:function(e){return t.setEditedItem(o)}}},[t._v("Edit")]):t._e()],1)],1)],1)],1)})),1)],1)],1),a("v-dialog",{attrs:{"max-width":"400px",transition:"dialog-transition"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[t._v("Delete Category ?")]),a("v-card-text",[t._v("\n        This action will delete this category and all books associated with it !\n        Not only that, It will also delete all reviews associated with those books\n      ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red",text:""},on:{click:t.deleteItem}},[t._v("I understand the risk")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v("Take me back")])],1)],1)],1),"staff"==t.$user.get().role?a("v-dialog",{attrs:{"max-width":"500px",transition:"dialog-transition"},model:{value:t.addDialog,callback:function(e){t.addDialog=e},expression:"addDialog"}},[a("v-card",[a("v-card-title",[t._v("Add Category")]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:"","pa-2":""}},[a("v-text-field",{attrs:{name:"name",label:"Category Name"},model:{value:t.newCategory.name,callback:function(e){t.$set(t.newCategory,"name",e)},expression:"newCategory.name"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"","pa-2":""}},[a("v-textarea",{attrs:{name:"description",label:"Category Description"},model:{value:t.newCategory.description,callback:function(e){t.$set(t.newCategory,"description",e)},expression:"newCategory.description"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{on:{click:function(e){t.addDialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"success"},on:{click:t.addCategory}},[t._v("Add Category")])],1)],1)],1):t._e(),"staff"==t.$user.get().role?a("v-dialog",{attrs:{"max-width":"500px",transition:"dialog-transition"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-card",[a("v-card-title",[t._v("Edit Category")]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:"","pa-2":""}},[a("v-text-field",{attrs:{name:"name",label:"Category Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"","pa-2":""}},[a("v-textarea",{attrs:{name:"description",label:"Category Description"},model:{value:t.editedItem.description,callback:function(e){t.$set(t.editedItem,"description",e)},expression:"editedItem.description"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{on:{click:function(e){t.editDialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"success"},on:{click:t.editItem}},[t._v("Update")])],1)],1)],1):t._e()],1)},vt=[],mt={data(){return{categories:[],newCategory:{},addDialog:!1,deleteDialog:!1,deletedItem:null,editedItem:{},editDialog:!1,deleteDialog:!1,newCategory:{}}},methods:{getCategories:function(){let t="api/books/category/";c.a.get(t).then(t=>{this.categories=t.data}).catch(t=>{console.error(t)})},setDeletedItem:function(t){this.deletedItem=t,this.deleteDialog=!0},setEditedItem:function(t){this.editedItem.id=this.categories[t].id,this.editedItem.name=this.categories[t].name,this.editedItem.description=this.categories[t].description,this.editDialog=!0},deleteItem:function(){let t=X.a.get("csrftoken"),e={headers:{"X-CSRFToken":t}},a=`api/books/category/${this.deletedItem}/`;c.a.delete(a,e).then(t=>{this.$bvToast.toast("Category was deleted successfully",{title:"Category Delete",variant:"success",solid:!0}),this.getCategories(),this.deleteDialog=!1}).catch(t=>{console.error(t)})},addCategory:function(){let t="api/books/category/",e=X.a.get("csrftoken"),a={headers:{"X-CSRFToken":e}};c.a.post(t,this.newCategory,a).then(t=>{this.$bvToast.toast("Category was added successfully",{title:"Category Add",variant:"success",solid:!0}),this.getCategories(),this.newCategory={},this.addDialog=!1}).catch(t=>{console.error(t)})},editItem:function(){let t=`api/books/category/${this.editedItem.id}/`,e=X.a.get("csrftoken"),a={headers:{"X-CSRFToken":e}};c.a.patch(t,this.editedItem,a).then(t=>{this.$bvToast.toast("Category was updated successfully",{title:"Category Update",variant:"success",solid:!0}),this.getCategories(),this.editedItem={},this.editDialog=!1}).catch(t=>{console.error(t)})}},mounted(){this.getCategories()}},pt=mt,ht=a("cd55"),gt=a("49e2"),kt=a("c865"),ft=a("0393"),bt=Object(v["a"])(pt,ut,vt,!1,null,null,null),xt=bt.exports;p()(bt,{VBtn:f["a"],VCard:q["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VContainer:K["a"],VDialog:G["a"],VExpansionPanel:ht["a"],VExpansionPanelContent:gt["a"],VExpansionPanelHeader:kt["a"],VExpansionPanels:ft["a"],VFlex:W["a"],VIcon:x["a"],VLayout:Z["a"],VSpacer:$["a"],VTextField:et["a"],VTextarea:at["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",["staff"==t.$user.get().role?a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addDialog=!0}}},[t._v("\n    Add Author\n     \n    "),a("v-icon",[t._v("mdi-pen")])],1):t._e(),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md12:"",sm12:"",lg12:"","pa-5":""}},[a("v-expansion-panels",t._l(t.authors,(function(e,o){return a("v-expansion-panel",{key:o},[a("v-expansion-panel-header",[a("h3",[t._v(t._s(e.first_name+" "+e.last_name))])]),a("v-expansion-panel-content",[a("v-card",[a("v-card-text",[t._v(t._s(t._f("truncate")(e.bio,120,"...")))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"success",text:""},on:{click:function(a){return t.$router.push({path:"/author/"+e.id})}}},[t._v("Details")]),"staff"==t.$user.get().role?a("v-btn",{attrs:{color:"error",text:""},on:{click:function(a){return t.setDeletedItem(e.id)}}},[t._v("Delete")]):t._e(),"staff"==t.$user.get().role?a("v-btn",{attrs:{color:"info",text:""},on:{click:function(e){return t.setEditedItem(o)}}},[t._v("Edit")]):t._e()],1)],1)],1)],1)})),1)],1)],1),a("v-dialog",{attrs:{"max-width":"400px",transition:"dialog-transition"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[t._v("Delete Author ?")]),a("v-card-text",[t._v("This action will delete this author, it will also delete his/her association with all of his/her books")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red",text:""},on:{click:t.deleteItem}},[t._v("I understand the risk")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v("Take me back")])],1)],1)],1),"staff"==t.$user.get().role?a("v-dialog",{attrs:{"max-width":"500px",transition:"dialog-transition"},model:{value:t.addDialog,callback:function(e){t.addDialog=e},expression:"addDialog"}},[a("v-card",[a("v-card-title",[t._v("Add Author")]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-text-field",{attrs:{name:"name",label:"First Name"},model:{value:t.newAuthor.first_name,callback:function(e){t.$set(t.newAuthor,"first_name",e)},expression:"newAuthor.first_name"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-text-field",{attrs:{name:"name",label:"Last Name"},model:{value:t.newAuthor.last_name,callback:function(e){t.$set(t.newAuthor,"last_name",e)},expression:"newAuthor.last_name"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"","pa-2":""}},[a("v-textarea",{attrs:{name:"bio",label:"Bio"},model:{value:t.newAuthor.bio,callback:function(e){t.$set(t.newAuthor,"bio",e)},expression:"newAuthor.bio"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{on:{click:function(e){t.addDialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"success"},on:{click:t.addAuthor}},[t._v("Add Author")])],1)],1)],1):t._e(),"staff"==t.$user.get().role?a("v-dialog",{attrs:{"max-width":"500px",transition:"dialog-transition"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-card",[a("v-card-title",[t._v("Edit Author")]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-text-field",{attrs:{name:"name",label:"First Name"},model:{value:t.editedItem.first_name,callback:function(e){t.$set(t.editedItem,"first_name",e)},expression:"editedItem.first_name"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"","pa-2":""}},[a("v-text-field",{attrs:{name:"name",label:"Last Name"},model:{value:t.editedItem.last_name,callback:function(e){t.$set(t.editedItem,"last_name",e)},expression:"editedItem.last_name"}})],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"","pa-2":""}},[a("v-textarea",{attrs:{name:"bio",label:"Bio"},model:{value:t.editedItem.bio,callback:function(e){t.$set(t.editedItem,"bio",e)},expression:"editedItem.bio"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{on:{click:function(e){t.editDialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"success"},on:{click:t.editItem}},[t._v("Update")])],1)],1)],1):t._e()],1)},wt=[],yt={data(){return{authors:[],newAuthor:{},addDialog:!1,deleteDialog:!1,deletedItem:null,editedItem:{},editDialog:!1,deleteDialog:!1,newAuthor:{}}},methods:{getAuthors:function(){let t="api/books/author/";c.a.get(t).then(t=>{this.authors=t.data}).catch(t=>{console.error(t)})},setDeletedItem:function(t){this.deletedItem=t,this.deleteDialog=!0},setEditedItem:function(t){this.editedItem.id=this.authors[t].id,this.editedItem.first_name=this.authors[t].first_name,this.editedItem.last_name=this.authors[t].last_name,this.editedItem.bio=this.authors[t].bio,this.editDialog=!0},deleteItem:function(){let t=X.a.get("csrftoken"),e={headers:{"X-CSRFToken":t}},a=`api/books/author/${this.deletedItem}/`;c.a.delete(a,e).then(t=>{this.$bvToast.toast("Author was deleted successfully",{title:"Author Delete",variant:"success",solid:!0}),this.getAuthors(),this.deleteDialog=!1}).catch(t=>{console.error(t)})},addAuthor:function(){let t="api/books/author/",e=X.a.get("csrftoken"),a={headers:{"X-CSRFToken":e}};c.a.post(t,this.newAuthor,a).then(t=>{this.$bvToast.toast("Author was added successfully",{title:"Author Add",variant:"success",solid:!0}),this.getAuthors(),this.newAuthor={},this.addDialog=!1}).catch(t=>{console.error(t)})},editItem:function(){let t=`api/books/author/${this.editedItem.id}/`,e=X.a.get("csrftoken"),a={headers:{"X-CSRFToken":e}};c.a.patch(t,this.editedItem,a).then(t=>{this.$bvToast.toast("Author was updated successfully",{title:"Author Update",variant:"success",solid:!0}),this.getAuthors(),this.editedItem={},this.editDialog=!1}).catch(t=>{console.error(t)})}},mounted(){this.getAuthors()}},Bt=yt,Dt=Object(v["a"])(Bt,_t,wt,!1,null,null,null),Ct=Dt.exports;p()(Dt,{VBtn:f["a"],VCard:q["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VContainer:K["a"],VDialog:G["a"],VExpansionPanel:ht["a"],VExpansionPanelContent:gt["a"],VExpansionPanelHeader:kt["a"],VExpansionPanels:ft["a"],VFlex:W["a"],VIcon:x["a"],VLayout:Z["a"],VSpacer:$["a"],VTextField:et["a"],VTextarea:at["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md12:"",sm12:"",lg12:"","pa-2":""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(t.category.name))]),a("v-card-text",[t._v(t._s(t.category.description))])],1)],1)],1)],1)},Vt=[],It={data(){return{category:{id:null,name:null,description:null}}},methods:{getCategory:function(){let t=`api/books/category/${this.$route.params.id}/`;c.a.get(t).then(t=>{this.category=t.data}).catch(t=>{console.error(t)})}},mounted(){this.getCategory()}},At=It,Tt=Object(v["a"])(At,$t,Vt,!1,null,null,null),Rt=Tt.exports;p()(Tt,{VCard:q["a"],VCardText:J["b"],VCardTitle:J["c"],VContainer:K["a"],VFlex:W["a"],VLayout:Z["a"]});var St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md12:"",sm12:"",lg12:"","pa-2":""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(t.author.first_name+""+t.author.last_name))]),a("v-card-text",[t._v(t._s(t.author.bio))])],1)],1)],1)],1)},Et=[],Ft={data(){return{author:{id:null,first_name:null,last_name:null,description:null}}},methods:{getAuthor:function(){let t=`api/books/author/${this.$route.params.id}/`;c.a.get(t).then(t=>{this.author=t.data}).catch(t=>{console.error(t)})}},mounted(){this.getAuthor()}},jt=Ft,Lt=Object(v["a"])(jt,St,Et,!1,null,null,null),Ot=Lt.exports;p()(Lt,{VCard:q["a"],VCardText:J["b"],VCardTitle:J["c"],VContainer:K["a"],VFlex:W["a"],VLayout:Z["a"]}),o["default"].use(L["a"]);let Pt=new L["a"]({mode:"history",base:"/",routes:[{path:"/books",name:"books",component:it,meta:{title:"Book"}},{path:"/books/:id",name:"bookDetail",component:dt,meta:{title:"Book | Details"}},{path:"/category",name:"category",component:xt,meta:{title:"Category"}},{path:"/category/:id",name:"CategoryDetail",component:Rt,meta:{title:"Category | Details"}},{path:"/author",name:"Authors",component:Ct,meta:{title:"Author"}},{path:"/author/:id",name:"AuthorDetail",component:Ot,meta:{title:"Author | Details"}},{path:"/",redirect:"/books"}]});var Nt=Pt,Xt=a("2f62");o["default"].use(Xt["a"]);var Ut=new Xt["a"].Store({state:{},mutations:{},actions:{}}),Mt=(a("5363"),a("15f5"),a("f309"));o["default"].use(Mt["a"]);var qt=new Mt["a"]({icons:{iconfont:"mdi"}}),Jt=a("5f5b"),Ht=a("8993"),Kt=a.n(Ht);a("f9e3"),a("2dd8");c.a.defaults.baseURL="http://localhost:8000/",o["default"].config.productionTip=!1,o["default"].use(Jt["a"]),o["default"].use(Kt.a,{router:Nt}),o["default"].use(a("2ead"));var zt=function(t,e,a){a=a||"...";var o=document.createElement("div");o.innerHTML=t;var i=o.textContent;return i.length>e?i.slice(0,e)+a:i};o["default"].filter("truncate",zt);let Gt=c.a.get("/api/me/").then(t=>{return t.data}).catch(t=>{return console.log(t),{role:"guest"}});Gt.then(t=>{o["default"].prototype.$user.set(t),new o["default"]({render:t=>t(j),router:Nt,store:Ut,vuetify:qt}).$mount("#app")})},"8c02":function(t,e,a){"use strict";var o=a("c376"),i=a.n(o);i.a},"9be5":function(t,e,a){"use strict";var o=a("d9eb"),i=a.n(o);i.a},c376:function(t,e,a){},d9eb:function(t,e,a){}});
//# sourceMappingURL=app.js.map