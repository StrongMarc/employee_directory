(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(12),s=a(13),i=a(14),m=a(17),u=a(16),d={jumbotronStyle:{background:"LightSeaGreen",textAlign:"center"}};var h=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"jumbotron",style:d.jumbotronStyle},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Search or filter by name.")))},p=(a(23),{textAlign:"center"}),E={justifyContent:"center",marginTop:"10px"};var f=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table table-striped",style:p},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"DOB"))),r.a.createElement("tbody",null,e.results.map((function(e){return r.a.createElement("tr",{key:e.id,style:E},r.a.createElement("img",{alt:e.name.first,className:"img-fluid",src:e.picture.medium}),r.a.createElement("td",{className:"align-middle"},e.name.first," ",e.name.last),r.a.createElement("td",{className:"align-middle"},e.phone),r.a.createElement("td",{className:"align-middle"},e.email),r.a.createElement("td",{className:"align-middle"},e.dob.date.slice(5,10),"-",e.dob.date.slice(0,4)))})))))},g=a(15),y=a.n(g),b=function(e){return y.a.get("https://randomuser.me/"+e+"/?results=200&nat=us")},v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[]},e.searchEmployees=function(t){b(t).then((function(t){return e.setState({results:t.data.results},(function(){return console.log(e.state.results)}))})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(o.a)({},a,n))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployees(e.state.search)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.searchEmployees("api")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(f,{results:this.state.results}))}}]),a}(n.Component);var N=function(){return r.a.createElement(v,null)};a(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e6327408.chunk.js.map