"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[914],{3678:function(e,i,r){r.d(i,{_:function(){return c}});var n=r(2934),t=r(9434),o=r(1087),a=r(2605),s={logo:"OfferList_logo__RGoBV",logo__header:"OfferList_logo__header__EuUlv",logo__footer:"OfferList_logo__footer__iM1g+",logo__modal:"OfferList_logo__modal__8PdYA",logo__image:"OfferList_logo__image__fFTq6",spinner:"OfferList_spinner__Qsss6",container:"OfferList_container__+xSRc","heading-third":"OfferList_heading-third__HRISQ","paragraph-first":"OfferList_paragraph-first__9zKZu",offer:"OfferList_offer__s6oBd",offer__item:"OfferList_offer__item__n6ZwB",offer__icon:"OfferList_offer__icon__CyYSj",offer__name:"OfferList_offer__name__rK76a",offer__active:"OfferList_offer__active__jUPLV"},l=r(184),c=function(){var e=(0,n.q)().offer.routes,i=[e.wedding,e.communion,e.christening,e.birthday,e.others],r=(0,t.v9)(a.Hr);return(0,l.jsxs)("section",{className:s.container,children:[(0,l.jsx)("h3",{className:s["heading-third"],children:"Oferujemy"}),(0,l.jsx)("ul",{className:s.offer,children:i.map((function(e,i){return(0,l.jsxs)("li",{className:s.offer__item,children:[(0,l.jsx)(o.OL,{to:e.fullLocation,children:(0,l.jsx)("div",{className:s.offer__icon})}),(0,l.jsx)(o.OL,{to:e.fullLocation,children:(0,l.jsx)("p",{className:[s["paragraph-first"],s.offer__name,r===e.name?s.offer__active:null].join(" "),children:e.title})})]},i)}))})]})}},2914:function(e,i,r){r.r(i),r.d(i,{default:function(){return m}});var n=r(2791),t=r(9434),o=r(7689),a=r(2605),s=r(680),l={logo:"OfferDescription_logo__wyUJ-",logo__header:"OfferDescription_logo__header__yUv5N",logo__footer:"OfferDescription_logo__footer__yIUax",logo__modal:"OfferDescription_logo__modal__L2P7W",logo__image:"OfferDescription_logo__image__hbppJ",spinner:"OfferDescription_spinner__h8wax",container:"OfferDescription_container__n9tzg","heading-third":"OfferDescription_heading-third__pjMfN","paragraph-first":"OfferDescription_paragraph-first__8BWym",description:"OfferDescription_description__KtWCL",description__heading:"OfferDescription_description__heading__W4GSR",option:"OfferDescription_option__vkvFj",option__item:"OfferDescription_option__item__F+BUV"},c=r(184),_=function(e){var i=(0,o.TH)(),r=(0,t.I0)(),_=(0,t.v9)(a.sW);return(0,n.useEffect)((function(){return r((0,s.qX)(e)),r((0,s.Vi)(e)),function(){r((0,s.qX)({offerType:null}))}}),[i,e,r]),(0,c.jsx)("section",{className:l.container,children:!!_&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:l.description,children:[(0,c.jsx)("h3",{className:[l["heading-third"],l.description__heading].join(" "),children:_[0].title}),_[0].description.map((function(e,i){return(0,c.jsx)("p",{className:l["paragraph-first"],children:e},i)}))]}),(0,c.jsx)("h3",{className:[l["heading-third"],l.description__heading].join(" "),children:_[0].packages.name}),(0,c.jsx)("ul",{className:l.option,children:_[0].packages.types.map((function(e,i){return(0,c.jsxs)("li",{className:l.option__item,children:[(0,c.jsxs)("h4",{children:[e.name," ",e.prize.timeValue," ",e.prize.timeType," /"," ",e.prize.costValue," ",e.prize.costCurrency]}),(0,c.jsx)("ul",{children:e.options.map((function(e,i){return(0,c.jsx)("li",{className:l.option__item,children:e},i)}))})]},i)}))}),(0,c.jsx)("h3",{className:[l["heading-third"],l.description__heading].join(" "),children:" "}),(0,c.jsx)("ul",{children:_[0].others.map((function(e,i){return(0,c.jsxs)("li",{className:l.option__item,children:["* ",e]},i)}))})]})})},f=r(2934),d="OfferForm_container__XFzXz",h=function(){var e=(0,f.q)().offer,i=(0,t.v9)(a.Hr),r=(0,o.s0)();return(0,c.jsx)("section",{className:d,children:(0,c.jsxs)("form",{name:"offer",onSubmit:function(e){e.preventDefault();var i=e.currentTarget,r=i.elements,n=r.offerType,t=r.name,o=r.email,a=r.phone,s=r.date,l=r.place,c=r.feedback;window.alert("Wysy\u0142am zapytanie o tre\u015bci -> imi\u0119: ".concat(t.value,", email: ").concat(o.value,", kontakt: ").concat(a.value," || typ animacji: ").concat(n.value,", data: ").concat(s.value,", miejsce: ").concat(l.value," || dodatkowe informacje: ").concat(c.value)),i.reset()},children:[(0,c.jsx)("h3",{children:"Zapytaj o ofert\u0119"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{htmlFor:"offerType",children:"Okazja"}),(0,c.jsxs)("select",{id:"offerType",name:"offerType",value:i,onChange:function(i){for(var n=i.currentTarget.value,t=0,o=Object.keys(e.routes);t<o.length;t++){var a=o[t];e.routes[a].name===n&&r(e.routes[a].location)}},children:[(0,c.jsx)("option",{value:"wedding",children:"Wesela"}),(0,c.jsx)("option",{value:"communion",children:"Komunie"}),(0,c.jsx)("option",{value:"christening",children:"Chrzciny"}),(0,c.jsx)("option",{value:"birthday",children:"Urodziny"}),(0,c.jsx)("option",{value:"others",children:"Inne"})]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{htmlFor:"name",children:"Imi\u0119"}),(0,c.jsx)("input",{type:"text",id:"name",name:"name",required:!0}),(0,c.jsx)("label",{htmlFor:"email",children:"Email"}),(0,c.jsx)("input",{type:"email",id:"email",name:"email",required:!0}),(0,c.jsx)("label",{htmlFor:"phone",children:"Telefon"}),(0,c.jsx)("input",{type:"tel",id:"phone",name:"phone"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{htmlFor:"date",required:!0,children:"Termin"}),(0,c.jsx)("input",{type:"date",id:"date",name:"date",defaultValue:function(){var e=new Date(Date.now());return e.setDate(e.getDate()+1),e.getFullYear()+"-"+(e.getMonth()+1).toString().padStart(2,"0")+"-"+e.getDate().toString().padStart(2,"0")}()}),(0,c.jsx)("label",{htmlFor:"place",required:!0,children:"Miejscowo\u015b\u0107"}),(0,c.jsx)("input",{type:"text",id:"place",name:"place"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("label",{htmlFor:"feedback",children:"Dodatkowe informacje"}),(0,c.jsx)("textarea",{id:"feedback",name:"feedback"})]}),(0,c.jsx)("button",{type:"submit",children:"Zapytaj"})]})})},p=r(3678),m=function(){return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(p._,{}),(0,c.jsxs)(o.Z5,{children:[(0,c.jsx)(o.AW,{path:"wesela",element:(0,c.jsx)(_,{offerType:"wedding"})}),(0,c.jsx)(o.AW,{path:"komunie",element:(0,c.jsx)(_,{offerType:"communion"})}),(0,c.jsx)(o.AW,{path:"chrzciny",element:(0,c.jsx)(_,{offerType:"christening"})}),(0,c.jsx)(o.AW,{path:"urodziny",element:(0,c.jsx)(_,{offerType:"birthday"})}),(0,c.jsx)(o.AW,{path:"inne",element:(0,c.jsx)(_,{offerType:"others"})}),(0,c.jsx)(o.AW,{path:"*",element:(0,c.jsx)(o.Fg,{to:"wesela"})})]})]}),(0,c.jsx)(h,{})]})}}}]);
//# sourceMappingURL=914.b7051c64.chunk.js.map