import{T as n,o as l,c as d,w as t,a,u as o,Z as c,b as e,d as p,n as u,e as f}from"./app-meoLv2Yx.js";import{_}from"./GuestLayout-bA_NRQa_.js";import{_ as w,a as b,b as x}from"./TextInput-wj6gMn3a.js";import{P as g}from"./PrimaryButton-wB62lP5F.js";/* empty css            */import"./ApplicationLogo-iL7wUllx.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const h=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup(P){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(V,r)=>(l(),d(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),h,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[a(w,{for:"password",value:"Password"}),a(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(x,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",y,[a(g,{class:u(["ms-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};
