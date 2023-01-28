"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49,205],{2049:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(7294),l=r(2205),a=r(9680),o=r(1636),s=r(5893);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,o,s=[],i=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);i=!0);}catch(e){c=!0,l=e}finally{try{if(!i&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw l}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const p=function(){var e=d((0,n.useState)({email:"",password:""}),2),t=e[0],r=e[1];function i(e){var t=e.target.id,n=e.target.value;r((function(e){return u(u({},e),{},f({},t,n))}))}var c=(0,o.qt)().props.errors;return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex flex-wrap w-full",children:[(0,s.jsxs)("div",{className:"flex flex-col w-full md:w-1/2",children:[(0,s.jsx)("div",{className:"flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24",children:(0,s.jsx)(o.ZQ,{href:"/",className:"p-4 text-xl font-bold text-white bg-black",children:"Logo"})}),(0,s.jsxs)("div",{className:"flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32",children:[(0,s.jsx)("p",{className:"text-3xl text-center",children:"Welcome."}),(0,s.jsxs)("form",{className:"flex flex-col pt-3 md:pt-8",onSubmit:function(e){e.preventDefault(),a.Inertia.post("/login",{email:t.email,password:t.password})},children:[(0,s.jsxs)("div",{className:"flex flex-col pt-4",children:[(0,s.jsx)("label",{htmlFor:"email",className:"text-lg",children:"Email"}),(0,s.jsx)("input",{type:"email",id:"email",placeholder:"your@email.com",value:t.email,onChange:i,className:"w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"}),c.email&&(0,s.jsx)("div",{className:"text-sm text-red-500",children:c.email})]}),(0,s.jsxs)("div",{className:"flex flex-col pt-4",children:[(0,s.jsx)("label",{htmlFor:"password",className:"text-lg",children:"Password"}),(0,s.jsx)("input",{type:"password",id:"password",placeholder:"Password",value:t.password,onChange:i,className:"w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"}),c.password&&(0,s.jsx)("div",{className:"text-sm text-red-500",children:c.password})]}),(0,s.jsx)("input",{type:"submit",value:"Log In",className:"p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700"})]}),(0,s.jsx)("div",{className:"pt-12 pb-12 text-center",children:(0,s.jsxs)("p",{children:["Don't have an account? ",(0,s.jsx)(o.ZQ,{href:"/register",className:"font-semibold underline",children:"Register here."})]})})]})]}),(0,s.jsx)("div",{className:"w-1/2 shadow-2xl",children:(0,s.jsx)("img",{className:"hidden object-cover w-full h-screen md:block",src:l.default})})]})})}},2205:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/images/auth-image.jpg?a1376b5cfe5ebfba46663db0629e6b1e"}}]);