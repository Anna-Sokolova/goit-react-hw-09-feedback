(this["webpackJsonpgoit-react-hw-09-feedback"]=this["webpackJsonpgoit-react-hw-09-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={list:"Statistics_list__TvpYs",item:"Statistics_item__1CTH4",text:"Statistics_text__MRwkF",feedback:"Statistics_feedback__2HnJU",importantText:"Statistics_importantText__1V3ox"}},,,,function(e,t,a){e.exports={Section:"Section_Section__294m5",title:"Section_title__Qn7tk"}},,function(e,t,a){e.exports={btn:"FeedbackOptions_btn__2EE0e"}},function(e,t,a){e.exports={notice:"Notification_notice__2w99u"}},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(6),i=a.n(n),r=a(3),o=a(5),l=a.n(o),j=a(0),b=function(e){var t=e.title,a=e.children;return Object(j.jsxs)("section",{className:l.a.Section,children:[Object(j.jsx)("h3",{className:l.a.title,children:t}),a]})},d=a(7),u=a.n(d),x=function(e){var t=e.options,a=e.onLeaveFeedback;return Object.keys(t).map((function(e){var t=e[0].toUpperCase()+e.slice(1).toLowerCase();return Object(j.jsx)("button",{type:"button",name:e,className:u.a.btn,onClick:a,children:t},e)}))},m=a(1),O=a.n(m),p=function(e){var t=e.good,a=e.neutral,c=e.bad,s=e.total,n=e.positivePercentage;return Object(j.jsxs)("ul",{className:O.a.list,children:[Object(j.jsxs)("li",{className:O.a.item,children:[Object(j.jsx)("span",{className:O.a.text,children:"Good:"})," ",Object(j.jsx)("span",{className:O.a.feedback,children:t})]}),Object(j.jsxs)("li",{className:O.a.item,children:[Object(j.jsx)("span",{className:O.a.text,children:"Neutral:"})," ",Object(j.jsx)("span",{className:O.a.feedback,children:a})]}),Object(j.jsxs)("li",{className:O.a.item,children:[Object(j.jsx)("span",{className:O.a.text,children:"Bad:"})," ",Object(j.jsx)("span",{className:O.a.feedback,children:c})]}),Object(j.jsxs)("li",{className:O.a.item,children:[Object(j.jsx)("span",{className:O.a.text,children:"Total:"})," ",Object(j.jsx)("span",{className:O.a.importantText,children:s})]}),Object(j.jsxs)("li",{className:O.a.item,children:[Object(j.jsx)("span",{className:O.a.text,children:"Positive feedback:"})," ",Object(j.jsxs)("span",{className:O.a.importantText,children:[n," %"]})]})]})},h=a(8),f=a.n(h),_=function(e){var t=e.message;return Object(j.jsx)("p",{className:f.a.notice,children:t})};function N(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(0),i=Object(r.a)(n,2),o=i[0],l=i[1],d=Object(c.useState)(0),u=Object(r.a)(d,2),m=u[0],O=u[1],h=function(){return a+o+m},f={good:a,neutral:o,bad:m},N=h(),k=function(){var e=h();return Math.round(100*a/e)||0}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{title:"Please leave feedback",children:Object(j.jsx)(x,{options:f,onLeaveFeedback:function(e){var t=e.target.name;switch(t){case"good":s((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:console.warn("\u0422\u0430\u043a\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ".concat(t," \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))}}})}),Object(j.jsx)(b,{title:"Statistics",children:N?Object(j.jsx)(p,{good:a,neutral:o,bad:m,total:N,positivePercentage:k}):Object(j.jsx)(_,{message:"No feedback given"})})]})}a(14),a(15);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.721392ac.chunk.js.map