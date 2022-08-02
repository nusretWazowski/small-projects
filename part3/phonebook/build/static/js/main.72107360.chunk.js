(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(50)},50:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(18),o=t.n(u),c=t(19),l=t(2),i=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.name,onChange:e.onChangeName})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.number,onChange:e.onChangeNumber})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){if(null===e.message)return null;return r.a.createElement("div",{style:e.error?{margin:"2rem",padding:"0.5rem",backgroundColor:"salmon",border:"solid",borderRadius:"0.3rem",borderColor:"red",color:"red"}:{margin:"2rem",padding:"0.5rem",backgroundColor:"lightcyan",border:"solid",borderRadius:"0.3rem",borderColor:"green",color:"green"}},e.message)},d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){e.onDelete(e.id,e.name)}},"delete")))},f=function(e){return r.a.createElement(r.a.Fragment,null,e.filtered.map(function(n){return r.a.createElement(d,{key:n.id,id:n.id,name:n.name,number:n.number,onDelete:e.delete})}))},b=function(e){return r.a.createElement(r.a.Fragment,null,"Filter by name: ",r.a.createElement("input",{value:e.filter,onChange:e.onChange}))},s=t(4),h=t.n(s),g="/api/persons",E=function(){return h.a.get(g).then(function(e){return e.data})},p=function(e){return h.a.post(g,e).then(function(e){return e.data})},v=function(e,n){return h.a.put("".concat(g,"/").concat(e),n).then(function(e){return e.data})},j=function(e){return h.a.delete("".concat(g,"/").concat(e))},O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),s=d[0],h=d[1],g=Object(a.useState)(""),O=Object(l.a)(g,2),w=O[0],C=O[1],S=Object(a.useState)(""),y=Object(l.a)(S,2),k=y[0],F=y[1],N=Object(a.useState)(t),R=Object(l.a)(N,2),D=R[0],T=R[1],x=Object(a.useState)(null),A=Object(l.a)(x,2),I=A[0],J=A[1],B=Object(a.useState)(!1),P=Object(l.a)(B,2),q=P[0],z=P[1];Object(a.useEffect)(function(){E().then(function(e){return u(e)})},[]),Object(a.useEffect)(function(){var e=new RegExp(k,"gi"),n=t.filter(function(n){return n.name.match(e)});T(n)},[k,t]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement("div",null,r.a.createElement(b,{filter:k,onChange:function(e){F(e.target.value)}})),r.a.createElement(m,{message:I,error:q}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(i,{onSubmit:function(e){e.preventDefault();var n={name:s,number:w},a=!1,r=[];if(t.forEach(function(e){e.name!==n.name?r.push(!1):r.push(!0),a=!!r.every(function(e){return!1===e})}),0===t.length&&(a=!0),!1!==a)p(n).then(function(e){u(t.concat(e)),J("Added ".concat(s)),setTimeout(function(){return J(null)},5e3),h(""),C("")}).catch(function(e){var n=e.response.data.error;J(n),z(!0),setTimeout(function(){J(null),z(!1)},5e3)});else{var o=t.find(function(e){return e.name===s}),l=Object(c.a)({},o,{number:w});window.confirm("".concat(s," is already added to the phonebook. Replace the old number with a new one?"))&&(v(o.id,l).then(function(e){u(t.map(function(n){return n.id!==o.id?n:e})),J("".concat(s," updated!")),setTimeout(function(){return J(null)},5e3)}).catch(function(e){J("Information of ".concat(s," has already been removed from the server")),z(!0),setTimeout(function(){J(null),z(!1)},5e3),u(t.filter(function(e){return e.id!==o.id}))}),h(""),C(""))}},name:s,number:w,onChangeName:function(e){h(e.target.value)},onChangeNumber:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,r.a.createElement(f,{filtered:D,delete:function(e,n){window.confirm("Delete ".concat(n,"?"))&&(j(e),u(t.filter(function(n){return n.id!==e})))}})))};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(O,null))}},[[20,2,1]]]);
//# sourceMappingURL=main.72107360.chunk.js.map