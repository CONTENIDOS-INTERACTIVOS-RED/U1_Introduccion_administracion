(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comple","chunk-4e410830"],{"3ac0":function(t,n,a){},"3cd8":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container-fluid banner-interno"},[a("div",{staticClass:"banner-interno__fondo"}),a("div",{staticClass:"container"},[a("div",{staticClass:"banner-interno__titulo py-5"},[a("h3",{staticClass:"text-uppercase",domProps:{innerHTML:t._s("Unidad "+t.globalData.numeroUnidad+". "+t.globalData.tituloUnidad)}}),a("h2",{staticClass:"mb-0 text-uppercase",domProps:{innerHTML:t._s(t.subTitulo)}})])])])},r=[],o={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},s=o,i=(a("8385"),a("2877")),c=Object(i["a"])(s,e,r,!1,null,null,null);n["default"]=c.exports},8385:function(t,n,a){"use strict";a("d36b")},"857a":function(t,n,a){var e=a("1d80"),r=/"/g;t.exports=function(t,n,a,o){var s=String(e(t)),i="<"+n;return""!==a&&(i+=" "+a+'="'+String(o).replace(r,"&quot;")+'"'),i+">"+s+"</"+n+">"}},9911:function(t,n,a){"use strict";var e=a("23e7"),r=a("857a"),o=a("af03");e({target:"String",proto:!0,forced:o("link")},{link:function(t){return r(this,"a","href",t)}})},af03:function(t,n,a){var e=a("d039");t.exports=function(t){return e((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},d36b:function(t,n,a){},dbb5:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"curso-main-container complementario"},[a("BannerInterno",{attrs:{icono:"far fa-folder-open",titulo:"Material complementario"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a("div",{staticClass:"table-responsive"},[a("table",[t._m(0),a("tbody",t._l(t.computedData,(function(n,e){return a("tr",{key:"complementario-"+e},[a("td",{staticClass:"text-start",attrs:{colspan:"3",scope:"row"},domProps:{innerHTML:t._s(n.tema)}}),a("td",{staticClass:"text-start",attrs:{colspan:"5",scope:"row"},domProps:{innerHTML:t._s(n.referencia)}}),a("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(n.tipo)}}),a("td",{attrs:{colspan:"2"}},[a("div",{staticClass:"complementario__enlaces"},t._l(n.link,(function(t){return a("a",{staticClass:"complementario__btn",attrs:{href:t,target:"_blank"}},[a("i",{staticClass:"fas fa-external-link-alt"})])})),0)])])})),0)])])])],1)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("thead",[a("tr",[a("th",{attrs:{colspan:"3",scope:"col"}},[t._v("Tema")]),a("th",{attrs:{colspan:"5",scope:"col"}},[t._v("Referencia APA del material")]),a("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Tipo ")]),a("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Enlace")])])])}],o=a("5530"),s=(a("d81d"),a("9911"),a("d3b7"),a("159b"),a("3cd8")),i={name:"MaterialComplementario",components:{BannerInterno:s["default"]},computed:{complementarioData:function(){return this.$config.complementario},computedData:function(){var t=this,n=this.$config.complementario;return n.map((function(n){var a=[];return n.link?"string"===typeof n.link?a.push(n.link):a=n.link:n.descarga&&("string"===typeof n.descarga?a.push(t.obtenerLink(n.descarga)):n.descarga.forEach((function(n){a.push(t.obtenerLink(n))}))),Object(o["a"])(Object(o["a"])({},n),{},{link:a})}))}}},c=i,l=(a("f52b"),a("2877")),u=Object(l["a"])(c,e,r,!1,null,null,null);n["default"]=u.exports},f52b:function(t,n,a){"use strict";a("3ac0")}}]);
//# sourceMappingURL=comple.25d772e3.js.map