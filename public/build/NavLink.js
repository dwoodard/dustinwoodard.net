import{h as n,o as s,c as a,w as i,r as c,n as l,u,j as d}from"./app.js";const p={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(e){const r=e,t=n(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":" inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition ");return(o,f)=>(s(),a(u(d),{href:e.href,class:l(t.value)},{default:i(()=>[c(o.$slots,"default")]),_:3},8,["href","class"]))}};export{p as _};
