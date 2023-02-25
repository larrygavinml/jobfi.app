"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[299,366,322,676,726,892],{7366:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var n=t(7294),s=t(5892),a=t(9680),o=t(1636),i=t(5893);function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,s,a,o,i=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw s}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const d=function(){var e=l((0,n.useState)(!1),2),r=e[0],t=e[1],c=l((0,n.useState)(),2),d=c[0],u=c[1],m=(0,n.useRef)(),f=(0,o.qt)().props.errors;return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"mt-10 md:grid md:grid-cols-3 md:gap-6 sm:mt-0",children:[(0,i.jsx)("div",{className:"md:col-span-1",children:(0,i.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,i.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:" Delete Account "}),(0,i.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:" Permanently delete your account. "})]})}),(0,i.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:(0,i.jsxs)("div",{className:"px-4 py-5 bg-white shadow sm:p-6 sm:rounded-lg",children:[(0,i.jsx)("div",{className:"max-w-xl text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."}),(0,i.jsx)("div",{className:"mt-5",children:(0,i.jsx)("button",{type:"button",onClick:function(){t(!0),setTimeout((function(){return m.current.focus()}),250)},className:"inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-red-600 border border-transparent rounded-md hover:bg-red-500",children:"Delete Account"})}),(0,i.jsx)(s.default,{show:r,setShow:t,title:"Delete Account",children:(0,i.jsxs)("form",{children:[(0,i.jsx)("div",{children:"Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),(0,i.jsxs)("div",{className:"mt-4",children:[(0,i.jsx)("input",{id:"name",type:"password",placeholder:"Password",ref:m,onChange:function(e){return u(e.target.value)},className:"block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"}),f.password&&(0,i.jsx)("div",{className:"mt-2 text-sm text-red-500",children:f.password})]}),(0,i.jsx)("div",{className:"flex items-center justify-end mt-4",children:(0,i.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),a.router.post("/profileDelete",{_method:"delete",password:d,preserveScroll:!0},{onError:function(){return m.current.focus()}})},className:"inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-red-600 border border-transparent rounded-md hover:bg-red-500",children:"Delete Account"})})]})})]})})]})})}},7299:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});t(7294);var n=t(5893);const s=function(){return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"hidden sm:block",children:(0,n.jsx)("div",{className:"py-8",children:(0,n.jsx)("div",{className:"border-t border-gray-200"})})})})};var a=t(7366),o=t(3322),i=t(676),l=t(372),c=t(726);const d=function(){return(0,n.jsx)("div",{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("div",{className:"header",children:(0,n.jsx)("h1",{className:"header-text",children:"Profile"})}),(0,n.jsxs)("div",{className:"mx-auto max-w-7xl",children:[(0,n.jsx)(c.default,{}),(0,n.jsx)(s,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(s,{}),(0,n.jsx)(o.default,{}),(0,n.jsx)(s,{}),(0,n.jsx)(a.default,{})]})]})})}},3322:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var n=t(7294),s=t(9680),a=t(1636),o=t(5893);function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,s,a,o,i=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw s}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const c=function(){var e=i((0,n.useState)(),2),r=e[0],t=e[1],l=i((0,n.useState)(),2),c=l[0],d=l[1],u=i((0,n.useState)(),2),m=u[0],f=u[1],x=(0,n.useRef)(),h=(0,n.useRef)(),p=(0,n.useRef)(),g=(0,a.qt)().props.errors;return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"mt-10 md:grid md:grid-cols-3 md:gap-6 sm:mt-0",children:[(0,o.jsx)("div",{className:"md:col-span-1",children:(0,o.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,o.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:" Update Password "}),(0,o.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]})}),(0,o.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:(0,o.jsxs)("form",{children:[(0,o.jsx)("div",{className:"px-4 py-5 bg-white shadow sm:p-6 sm:rounded-tl-md sm:rounded-tr-md",children:(0,o.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[(0,o.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:"current_password",children:(0,o.jsx)("span",{children:"Current Password"})}),(0,o.jsx)("input",{ref:x,onChange:function(e){return t(e.target.value)},className:"block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",id:"current_password",type:"password",autoComplete:"current-password"}),g.updatePassword&&(0,o.jsx)("div",{className:"mt-2 text-sm text-red-500",children:g.updatePassword.current_password}),(0,o.jsx)("div",{className:"mt-2",children:(0,o.jsx)("p",{className:"text-sm text-red-600"})})]}),(0,o.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:"password",children:(0,o.jsx)("span",{children:"New Password"})}),(0,o.jsx)("input",{ref:h,onChange:function(e){return d(e.target.value)},className:"block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",id:"password",type:"password",autoComplete:"new-password"}),g.updatePassword&&(0,o.jsx)("div",{className:"mt-2 text-sm text-red-500",children:g.updatePassword.password})]}),(0,o.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:"password_confirmation",children:(0,o.jsx)("span",{children:"Confirm Password"})}),(0,o.jsx)("input",{ref:p,onChange:function(e){return f(e.target.value)},className:"block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",id:"password_confirmation",type:"password",autoComplete:"new-password"})]})]})}),(0,o.jsx)("div",{className:"flex items-center justify-end px-4 py-3 text-right border-t shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md",children:(0,o.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),s.router.post("user/password",{_method:"put",current_password:r,password:c,password_confirmation:m,preserveScroll:!0},{onSuccess:function(){x.current.value="",h.current.value="",p.current.value=""},onError:function(e){e.updatePassword.current_password&&(x.current.value="",x.current.focus()),e.updatePassword.password&&(h.current.value="",h.current.focus(),p.current.value="")}})},className:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25",children:"Save"})})]})})]})})}},676:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var n=t(7294),s=t(1636),a=t(9680),o=t(5893);function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,s,a,o,i=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw s}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const c=function(){var e=i((0,n.useState)(),2),r=e[0],t=e[1],l=i((0,n.useState)(),2),c=l[0],d=l[1],u=(0,n.useRef)(),m=(0,n.useRef)(),f=(0,s.qt)().props,x=(0,s.qt)().props.errors;return(0,n.useEffect)((function(){u.current.value=f.user.name,t(f.user.name),m.current.value=f.user.email,d(f.user.email)}),[]),(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,o.jsxs)("div",{className:"md:col-span-1",children:[(0,o.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:" Profile Information "}),(0,o.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:" Update your account's profile information and email address. "})]}),(0,o.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:(0,o.jsxs)("form",{children:[(0,o.jsx)("div",{className:"px-4 py-5 bg-white shadow sm:p-6 sm:rounded-tl-md sm:rounded-tr-md",children:(0,o.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[(0,o.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:"name",children:(0,o.jsx)("span",{children:"Name"})}),(0,o.jsx)("input",{id:"name",type:"text",ref:u,onChange:function(e){return t(e.target.value)},className:"block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"}),x.updateProfileInformation&&(0,o.jsx)("div",{className:"text-sm text-red-500",children:x.updateProfileInformation.name})]}),(0,o.jsxs)("div",{className:"col-span-6 mb-3 sm:col-span-4",children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:"email",children:(0,o.jsx)("span",{children:"Email"})}),(0,o.jsx)("input",{id:"email",type:"email",ref:m,onChange:function(e){return d(e.target.value)},className:"block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"}),x.updateProfileInformation&&(0,o.jsx)("div",{className:"text-sm text-red-500",children:x.updateProfileInformation.email})]})]})}),(0,o.jsx)("div",{className:"flex items-center justify-end px-4 py-3 text-right border-t shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md",children:(0,o.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),a.router.post("user/profile-information",{_method:"put",name:r,email:c})},className:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 border border-transparent rounded-md hover:bg-gray-700",children:"save"})})]})})]})})}},726:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var n=t(7294),s=t(1636),a=t(9680),o=t(1730),i=t(5893);function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,s,a,o,i=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw s}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const d=function(){var e=l((0,n.useState)(null),2),r=e[0],t=e[1],c=(0,n.useRef)(),d=l((0,n.useState)(!1),2),u=d[0],m=d[1],f=(0,n.useRef)(null),x=(0,s.qt)().props,h=(0,s.qt)().props.photoMessage;return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"mt-10 md:grid md:grid-cols-3 md:gap-6 sm:mt-0",children:[(0,i.jsx)("div",{className:"md:col-span-1",children:(0,i.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,i.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:" Update Profile Photo"}),(0,i.jsx)("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]})}),(0,i.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:(0,i.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[(0,i.jsx)("div",{className:"px-4 py-5 bg-white shadow sm:p-6 sm:rounded-tl-md sm:rounded-tr-md",children:(0,i.jsx)("div",{className:"grid grid-cols-6 gap-6",children:(0,i.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[(0,i.jsx)("input",{type:"file",className:"hidden",ref:f,onChange:function(){var e=new FileReader;e.onload=function(e){var r=e.target.result;t(r)},f.current.files[0]&&e.readAsDataURL(f.current.files[0])}}),(0,i.jsx)("label",{className:"block text-sm font-medium text-gray-700",htmlFor:"photo",children:(0,i.jsx)("span",{children:"Photo"})}),!r&&(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("img",{src:x.user.photo_name?"/storage/profilePhotos/".concat(x.user.photo_name):(0,o.h)(x.user.name),alt:"",className:"object-cover w-20 h-20 rounded-full"})}),r&&(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("span",{className:"block w-20 h-20 rounded-full",style:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundImage:'url( "'.concat(r,'" )')}})}),(0,i.jsx)("button",{className:"inline-flex items-center px-4 py-2 mt-2 mr-2 text-xs font-semibold tracking-widest text-gray-700 uppercase transition bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500",onClick:function(e){e.preventDefault(),f.current.click()},children:"Select a new photo"}),(0,i.jsx)("button",{className:"inline-flex items-center px-4 py-2 mt-2 text-xs font-semibold tracking-widest text-gray-700 uppercase transition bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500",onClick:function(e){e.preventDefault(),a.Inertia.delete("/profilePhotoDelete",{preserveScroll:!0,onSuccess:function(){return t(null)}})},children:"remove photo"}),h&&(0,i.jsx)("div",{className:"mt-4 text-sm text-red-500",children:h})]})})}),(0,i.jsx)("div",{className:"flex items-center justify-end px-4 py-3 text-right border-t shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md",children:(0,i.jsx)("button",{type:"submit",className:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25",onClick:function(){f.current&&(c.current=f.current.files[0]),a.router.post("/profilePhotoUpdate",{_method:"put",photo:c.current,forceFormData:!0},{onSuccess:function(){m(!u)}})},children:"Save"})})]})})]})})}},5892:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});t(7294);var n=t(5893);const s=function(e){return(0,n.jsx)("div",{children:e.show&&(0,n.jsx)("div",{onClick:function(){return e.setShow(!1)},className:"fixed inset-0 flex justify-center bg-gray-900 bg-opacity-50",children:(0,n.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:"fixed flex flex-col w-full overflow-auto bg-gray-100 rounded-md top-1/4 py-7 md:w-3/4 md:px-7 md:py-7",children:[(0,n.jsxs)("div",{className:"flex justify-between pl-4 mb-5 mr-5 md:pl-0",children:[(0,n.jsx)("div",{className:"text-xl font-bold",children:e.title}),(0,n.jsx)("div",{onClick:function(){return e.setShow(!1)},children:(0,n.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"w-full pl-4 md:pl-0",children:e.children})})]})})})}},1730:(e,r,t)=>{t.d(r,{h:()=>n});var n=function(e){return"https://ui-avatars.com/api/?name='.urlencode(".concat(e,").'&color=7F9CF5&background=random")}},372:(e,r,t)=>{t.d(r,{Z:()=>h});var n=t(7294),s=t(1636),a=t(5893);const o=function(e){var r=e.sidebarOpen,t=e.setSidebarOpen,o=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e=function(e){var n=e.target;i.current&&o.current&&(!r||i.current.contains(n)||o.current.contains(n)||t(!1))};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[r]),(0,n.useEffect)((function(){var e=function(e){var n=e.keyCode;r&&27===n&&t(!1)};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[r]),(0,a.jsxs)("div",{className:"lg:w-64",children:[(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ".concat(r?"opacity-100":"opacity-0 pointer-events-none"),"aria-hidden":"true"}),(0,a.jsxs)("div",{id:"sidebar",ref:i,className:"absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ".concat(r?"translate-x-0":"-translate-x-64"),children:[(0,a.jsxs)("div",{className:"flex justify-between pr-3 mb-10 sm:px-2",children:[(0,a.jsxs)("button",{ref:o,className:"text-gray-500 lg:hidden hover:text-gray-400",onClick:function(){return t(!1)},"aria-controls":"sidebar","aria-expanded":r,children:[(0,a.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,a.jsx)("svg",{className:"w-6 h-6 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"})})]}),(0,a.jsx)(s.ZQ,{href:"/home",className:"block",children:(0,a.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{x1:"28.538%",y1:"20.229%",x2:"100%",y2:"108.156%",id:"logo-a",children:[(0,a.jsx)("stop",{stopColor:"#A5B4FC",stopOpacity:"0",offset:"0%"}),(0,a.jsx)("stop",{stopColor:"#A5B4FC",offset:"100%"})]}),(0,a.jsxs)("linearGradient",{x1:"88.638%",y1:"29.267%",x2:"22.42%",y2:"100%",id:"logo-b",children:[(0,a.jsx)("stop",{stopColor:"#38BDF8",stopOpacity:"0",offset:"0%"}),(0,a.jsx)("stop",{stopColor:"#38BDF8",offset:"100%"})]})]}),(0,a.jsx)("rect",{fill:"#6366F1",width:"32",height:"32",rx:"16"}),(0,a.jsx)("path",{d:"M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",fill:"#4F46E5"}),(0,a.jsx)("path",{d:"M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",fill:"url(#logo-a)"}),(0,a.jsx)("path",{d:"M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",fill:"url(#logo-b)"})]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"pl-3 text-xs font-semibold text-gray-500 uppercase",children:"Pages"}),(0,a.jsxs)("ul",{className:"mt-3",children:[(0,a.jsx)("li",{className:"px-3 py-2 rounded-sm mb-0.5",children:(0,a.jsx)(s.ZQ,{href:"/home",className:"block text-gray-200 hover:text-white",children:(0,a.jsxs)("div",{className:"flex items-center flex-grow",children:[(0,a.jsx)("svg",{className:"w-6 h-6 mr-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})}),(0,a.jsx)("span",{className:"text-sm font-medium",children:"Home"})]})})}),(0,a.jsx)("li",{className:"px-3 py-2 rounded-sm mb-0.5",children:(0,a.jsx)(s.ZQ,{href:"#",className:"block text-gray-200 hover:text-white",children:(0,a.jsxs)("div",{className:"flex items-center flex-grow",children:[(0,a.jsx)("svg",{className:"w-6 h-6 mr-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"})}),(0,a.jsx)("span",{className:"text-sm font-medium",children:"Customers"})]})})}),(0,a.jsx)("li",{className:"px-3 py-2 rounded-sm mb-0.5",children:(0,a.jsx)(s.ZQ,{href:"#",className:"block text-gray-200 hover:text-white",children:(0,a.jsxs)("div",{className:"flex items-center flex-grow",children:[(0,a.jsx)("i",{className:"w-6 h-6 mr-1 fa-solid fa-briefcase"}),(0,a.jsx)("span",{className:"text-sm font-medium",children:"Jobs"})]})})}),(0,a.jsx)("li",{className:"px-3 py-2 rounded-sm mb-0.5",children:(0,a.jsx)(s.ZQ,{href:"#",className:"block text-gray-200 hover:text-white",children:(0,a.jsxs)("div",{className:"flex items-center flex-grow",children:[(0,a.jsx)("i",{className:"w-6 h-6 mr-1 fa-solid fa-vault"}),(0,a.jsx)("span",{className:"text-sm font-medium",children:"Firms"})]})})})]})]})]})]})};var i=t(9680),l=t(1730);function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,s,a,o,i=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw s}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const u=function(){var e=c((0,n.useState)(!1),2),r=e[0],t=e[1],o=(0,n.useRef)(null),d=(0,n.useRef)(null),u=(0,s.qt)().props;return(0,n.useEffect)((function(){var e=function(e){var n=e.target;!r||d.current.contains(n)||o.current.contains(n)||t(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[r]),(0,n.useEffect)((function(){var e=function(e){var n=e.keyCode;r&&27===n&&t(!1)};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[r]),(0,a.jsxs)("div",{className:"relative inline-flex",children:[(0,a.jsxs)("button",{ref:o,className:"inline-flex items-center justify-center group","aria-haspopup":"true",onClick:function(){return t(!0)},"aria-expanded":r,children:[(0,a.jsx)("img",{className:"w-8 h-8 rounded-full",src:u.user.photo_name?"/storage/profilePhotos/".concat(u.user.photo_name):(0,l.h)(u.user.name),width:"32",height:"32",alt:""}),(0,a.jsxs)("div",{className:"flex items-center truncate",children:[(0,a.jsx)("span",{className:"ml-2 text-sm font-medium truncate group-hover:text-gray-800",children:u.user.name}),(0,a.jsx)("svg",{className:"flex-shrink-0 w-3 h-3 ml-1 text-gray-400 fill-current",viewBox:"0 0 12 12",children:(0,a.jsx)("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"})})]})]}),r&&(0,a.jsx)("section",{className:"origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",children:(0,a.jsxs)("div",{ref:d,onFocus:function(){return t(!0)},onBlur:function(){return t(!1)},children:[(0,a.jsxs)("div",{className:"pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200",children:[(0,a.jsx)("div",{className:"font-medium text-gray-800",children:u.user.name}),(0,a.jsx)("div",{className:"text-xs italic text-gray-500",children:u.user.email})]}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.ZQ,{className:"flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600",href:"/profile",children:"Profile"})}),(0,a.jsx)("li",{children:(0,a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.router.post("/logout")},children:(0,a.jsx)("button",{className:"flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600",type:"submit",children:"Sign Out"})})})]})]})})]})};const m=function(e){var r=e.sidebarOpen,t=e.setSidebarOpen;return(0,a.jsx)("header",{className:"sticky top-0 z-30 bg-white border-b border-gray-200",children:(0,a.jsx)("div",{className:"px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex items-center justify-between h-16 -mb-px",children:[(0,a.jsx)("div",{className:"flex",children:(0,a.jsxs)("button",{className:"text-gray-500 hover:text-gray-600 lg:hidden","aria-controls":"sidebar","aria-expanded":r,onClick:function(){return t(!0)},children:[(0,a.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,a.jsxs)("svg",{className:"w-6 h-6 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("rect",{x:"4",y:"5",width:"16",height:"2"}),(0,a.jsx)("rect",{x:"4",y:"11",width:"16",height:"2"}),(0,a.jsx)("rect",{x:"4",y:"17",width:"16",height:"2"})]})]})}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(u,{})})]})})})};function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,s,a,o,i=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw s}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return x(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const h=function(e){var r=e.children,t=f((0,n.useState)(!1),2),s=t[0],i=t[1];return(0,a.jsxs)("div",{className:"flex h-screen overflow-hidden",children:[(0,a.jsx)(o,{sidebarOpen:s,setSidebarOpen:i}),(0,a.jsxs)("div",{className:"relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto bg-gray-100",children:[(0,a.jsx)(m,{sidebarOpen:s,setSidebarOpen:i}),(0,a.jsx)("main",{children:(0,a.jsx)("div",{className:"w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl",children:r})})]})]})}}}]);