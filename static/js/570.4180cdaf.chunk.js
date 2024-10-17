"use strict";(self.webpackChunkpet_foundation=self.webpackChunkpet_foundation||[]).push([[570],{9632:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var s=t(5043),l=t(1895),c=t(580),r=t(5475),d=t(6958),n=t(6213),o=t(579);const i=e=>{let{banner:a,PetCategory:t,heading:i,subheading:h,setShowLoginModal:p}=e;const[v,x]=(0,s.useState)([]),[j,u]=(0,s.useState)([]),[g,m]=(0,s.useState)(""),[A,f]=(0,s.useState)(!0),[L,z]=(0,s.useState)(null);return(0,s.useEffect)((()=>{(async()=>{try{const e=await n.A.get("http://localhost:8081/api/Pets/getPets");x(e.data),f(!1)}catch(e){console.error("Error fetching data:",e),z("Failed to load pets data"),f(!1)}})()}),[]),(0,s.useEffect)((()=>{if(v.length>0){const e=v.filter((e=>e.category===t));u(e),m("Showing 1 - ".concat(e.length," out of available ").concat(v.length," Pets"))}}),[v,t]),A?(0,o.jsx)("p",{children:"Loading..."}):L?(0,o.jsx)("p",{children:L}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{setShowLoginModal:p}),(0,o.jsx)(a,{}),(0,o.jsxs)("div",{className:"sec-container PetsCategory-part1",children:[(0,o.jsx)("div",{className:"alert-header",children:(0,o.jsx)("p",{className:"alert-box1",children:g})}),(0,o.jsx)("div",{className:"petCategory-Box",children:j.map((e=>(0,o.jsx)(r.N_,{to:"/pet/".concat(e.id),children:(0,o.jsxs)("div",{className:"petCategory-card2",children:[(0,o.jsx)("img",{src:"http://localhost:8081/uploads/".concat(e.image),alt:e.pet})," ",(0,o.jsxs)("div",{className:"petCategory-content",children:[(0,o.jsx)("h3",{children:e.pet}),(0,o.jsxs)("div",{className:"petCategory-data",children:[(0,o.jsxs)("p",{children:["Gender: ",(0,o.jsx)("span",{children:e.gender})]}),(0,o.jsxs)("p",{children:["Age: ",(0,o.jsx)("span",{children:e.age})]})]}),(0,o.jsxs)("p",{className:"petCategory-price",children:["RS ",e.price,"/-"]})]})]})},e.id)))})]}),(0,o.jsx)(d.A,{}),(0,o.jsx)(c.A,{})]})}},974:(e,a,t)=>{var s=t(4994);a.A=void 0;var l=s(t(39)),c=t(579);a.A=(0,l.default)((0,c.jsx)("path",{d:"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm0 6-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25zm-7.5-5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zm-1.51 3.49L9 15.17l-.99-2.18L5.83 12l2.18-.99L9 8.83l.99 2.18 2.18.99z"}),"AutoAwesomeOutlined")},1707:(e,a,t)=>{var s=t(4994);a.A=void 0;var l=s(t(39)),c=t(579);a.A=(0,l.default)((0,c.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight")},155:(e,a,t)=>{var s=t(4994);a.A=void 0;var l=s(t(39)),c=t(579);a.A=(0,l.default)((0,c.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear")},7402:(e,a,t)=>{var s=t(4994);a.A=void 0;var l=s(t(39)),c=t(579);a.A=(0,l.default)((0,c.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email")},2405:(e,a,t)=>{var s=t(4994);a.A=void 0;var l=s(t(39)),c=t(579);a.A=(0,l.default)((0,c.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"LocalPhone")},9611:(e,a,t)=>{var s=t(4994);a.A=void 0;var l=s(t(39)),c=t(579);a.A=(0,l.default)((0,c.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},2177:(e,a,t)=>{var s=t(4994);a.A=void 0;var l=s(t(39)),c=t(579);a.A=(0,l.default)((0,c.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person")}}]);
//# sourceMappingURL=570.4180cdaf.chunk.js.map