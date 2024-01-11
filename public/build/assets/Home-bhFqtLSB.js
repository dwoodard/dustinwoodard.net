import{o as Pl,f as Dl,k as qc,b as Mi,a as wi,w as cs,u as Yc,j as jc,d as qa}from"./app-UtNvsXOj.js";import{_ as Ya}from"./NavLink-Cokz6gPQ.js";const Js=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let qt=[];function Jc(){for(let r=0;r<qt.length;r++)if(qt[r]!==Js[r])return!1;return!0}let Il=null;function Zc(r){Il=r}document.addEventListener("keydown",r=>{for(qt.push(r.key),console.log(qt);qt.length>Js.length;)qt.shift();Jc()?qt.toString()===Js.toString()&&(Il(),qt=[]):qt=[]});/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="134",$c=0,ja=1,Qc=2,Nl=1,Kc=2,Bi=3,qi=0,$e=1,li=2,Bl=1,an=0,ki=1,Ja=2,Za=3,$a=4,eu=5,$n=100,tu=101,nu=102,Qa=103,Ka=104,iu=200,ru=201,su=202,au=203,zl=204,Ol=205,ou=206,lu=207,cu=208,uu=209,hu=210,du=0,fu=1,pu=2,Zs=3,mu=4,gu=5,_u=6,vu=7,$r=0,xu=1,yu=2,An=0,bu=1,Mu=2,wu=3,Su=4,Eu=5,Ul=300,er=301,tr=302,$s=303,Qs=304,Qr=306,pa=307,Ks=1e3,yt=1001,ea=1002,tt=1003,eo=1004,to=1005,Mt=1006,Tu=1007,Kr=1008,un=1009,Au=1010,Cu=1011,Vr=1012,Lu=1013,Hr=1014,sn=1015,ri=1016,Ru=1017,Pu=1018,Du=1019,Hi=1020,Iu=1021,si=1022,pt=1023,Fu=1024,Nu=1025,Bu=pt,ai=1026,Yi=1027,zu=1028,Ou=1029,Uu=1030,ku=1031,Hu=1032,Vu=1033,no=33776,io=33777,ro=33778,so=33779,ao=35840,oo=35841,lo=35842,co=35843,Gu=36196,uo=37492,ho=37496,Wu=37808,Xu=37809,qu=37810,Yu=37811,ju=37812,Ju=37813,Zu=37814,$u=37815,Qu=37816,Ku=37817,eh=37818,th=37819,nh=37820,ih=37821,rh=36492,sh=37840,ah=37841,oh=37842,lh=37843,ch=37844,uh=37845,hh=37846,dh=37847,fh=37848,ph=37849,mh=37850,gh=37851,_h=37852,vh=37853,xh=2200,yh=2201,bh=2202,Gr=2300,Wr=2301,us=2302,ei=2400,ti=2401,Xr=2402,ma=2500,kl=2501,Mh=0,ct=3e3,Ln=3001,ga=3007,_a=3002,wh=3003,Hl=3004,Vl=3005,Gl=3006,Sh=3200,Eh=3201,hi=0,Th=1,hs=7680,Ah=519,ji=35044,qr=35048,fo="300 es";class Rn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const ds=Math.PI/180,ta=180/Math.PI,it=[];for(let r=0;r<256;r++)it[r]=(r<16?"0":"")+r.toString(16);const Ch=typeof crypto<"u"&&"randomUUID"in crypto;function Nt(){if(Ch)return crypto.randomUUID().toUpperCase();const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]+"-"+it[e&255]+it[e>>8&255]+"-"+it[e>>16&15|64]+it[e>>24&255]+"-"+it[t&63|128]+it[t>>8&255]+"-"+it[t>>16&255]+it[t>>24&255]+it[n&255]+it[n>>8&255]+it[n>>16&255]+it[n>>24&255]).toUpperCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Lh(r,e){return(r%e+e)%e}function fs(r,e,t){return(1-t)*r+t*e}function po(r){return(r&r-1)===0&&r!==0}function Rh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class J{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}J.prototype.isVector2=!0;class rt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],v=i[3],p=i[6],m=i[1],S=i[4],x=i[7],E=i[2],C=i[5],y=i[8];return s[0]=a*_+o*m+l*E,s[3]=a*v+o*S+l*C,s[6]=a*p+o*x+l*y,s[1]=c*_+u*m+h*E,s[4]=c*v+u*S+h*C,s[7]=c*p+u*x+h*y,s[2]=d*_+f*m+g*E,s[5]=d*v+f*S+g*C,s[8]=d*p+f*x+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}rt.prototype.isMatrix3=!0;function Wl(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function es(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mo(r,e=0){let t=3735928559^e,n=1103547991^e;for(let i=0,s;i<r.length;i++)s=r.charCodeAt(i),t=Math.imul(t^s,2654435761),n=Math.imul(n^s,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}let Dn;class di{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dn===void 0&&(Dn=es("canvas")),Dn.width=e.width,Dn.height=e.height;const n=Dn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Dn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Ph=0;class st extends Rn{constructor(e=st.DEFAULT_IMAGE,t=st.DEFAULT_MAPPING,n=yt,i=yt,s=Mt,a=Kr,o=pt,l=un,c=1,u=ct){super(),Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Nt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Nt()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ps(i[a].image)):s.push(ps(i[a]))}else s=ps(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case yt:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case yt:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}st.DEFAULT_IMAGE=void 0;st.DEFAULT_MAPPING=Ul;st.prototype.isTexture=!0;function ps(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?di.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ue{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],v=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+v)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(f+1)/2,E=(p+1)/2,C=(u+d)/4,y=(h+_)/4,F=(g+v)/4;return S>x&&S>E?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=y/n):x>E?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=C/i,s=F/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=y/s,i=F/s),this.set(n,i,s,t),this}let m=Math.sqrt((v-g)*(v-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(v-g)/m,this.y=(h-_)/m,this.z=(d-u)/m,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ue.prototype.isVector4=!0;class Bt extends Rn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t),this.texture=new st(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.prototype.isWebGLRenderTarget=!0;class Dh extends Bt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Dh.prototype.isWebGLMultipleRenderTargets=!0;class Xl extends Bt{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Xl.prototype.isWebGLMultisampleRenderTarget=!0;class gt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let v=1-o;const p=l*d+c*f+u*g+h*_,m=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const E=Math.sqrt(S),C=Math.atan2(E,p*m);v=Math.sin(v*C)/E,o=Math.sin(o*C)/E}const x=o*m;if(l=l*v+d*x,c=c*v+f*x,u=u*v+g*x,h=h*v+_*x,v===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}gt.prototype.isQuaternion=!0;class T{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}T.prototype.isVector3=!0;const ms=new T,go=new gt;class Lt{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox),gs.applyMatrix4(e.matrixWorld),this.union(gs));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),lr.subVectors(this.max,Ei),In.subVectors(e.a,Ei),Fn.subVectors(e.b,Ei),Nn.subVectors(e.c,Ei),Zt.subVectors(Fn,In),$t.subVectors(Nn,Fn),wn.subVectors(In,Nn);let t=[0,-Zt.z,Zt.y,0,-$t.z,$t.y,0,-wn.z,wn.y,Zt.z,0,-Zt.x,$t.z,0,-$t.x,wn.z,0,-wn.x,-Zt.y,Zt.x,0,-$t.y,$t.x,0,-wn.y,wn.x,0];return!_s(t,In,Fn,Nn,lr)||(t=[1,0,0,0,1,0,0,0,1],!_s(t,In,Fn,Nn,lr))?!1:(cr.crossVectors(Zt,$t),t=[cr.x,cr.y,cr.z],_s(t,In,Fn,Nn,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Si.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Lt.prototype.isBox3=!0;const kt=[new T,new T,new T,new T,new T,new T,new T,new T],Si=new T,gs=new Lt,In=new T,Fn=new T,Nn=new T,Zt=new T,$t=new T,wn=new T,Ei=new T,lr=new T,cr=new T,Sn=new T;function _s(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Sn.fromArray(r,s);const o=i.x*Math.abs(Sn.x)+i.y*Math.abs(Sn.y)+i.z*Math.abs(Sn.z),l=e.dot(Sn),c=t.dot(Sn),u=n.dot(Sn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ih=new Lt,_o=new T,vs=new T,xs=new T;class fi{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ih.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(xs.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return vs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(_o.copy(e.center).add(vs)),this.expandByPoint(_o.copy(e.center).sub(vs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ht=new T,ys=new T,ur=new T,Qt=new T,bs=new T,hr=new T,Ms=new T;class pi{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ht)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ht.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ht.copy(this.direction).multiplyScalar(t).add(this.origin),Ht.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ys.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),Qt.copy(this.origin).sub(ys);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ur),o=Qt.dot(this.direction),l=-Qt.dot(ur),c=Qt.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ur).multiplyScalar(d).add(ys),f}intersectSphere(e,t){Ht.subVectors(e.center,this.origin);const n=Ht.dot(this.direction),i=Ht.dot(Ht)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ht)!==null}intersectTriangle(e,t,n,i,s){bs.subVectors(t,e),hr.subVectors(n,e),Ms.crossVectors(bs,hr);let a=this.direction.dot(Ms),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qt.subVectors(this.origin,e);const l=o*this.direction.dot(hr.crossVectors(Qt,hr));if(l<0)return null;const c=o*this.direction.dot(bs.cross(Qt));if(c<0||l+c>a)return null;const u=-o*Qt.dot(Ms);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,u,h,d,f,g,_,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bn.setFromMatrixColumn(e,0).length(),s=1/Bn.setFromMatrixColumn(e,1).length(),a=1/Bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fh,e,Nh)}lookAt(e,t,n){const i=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),Kt.crossVectors(n,_t),Kt.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),Kt.crossVectors(n,_t)),Kt.normalize(),dr.crossVectors(_t,Kt),i[0]=Kt.x,i[4]=dr.x,i[8]=_t.x,i[1]=Kt.y,i[5]=dr.y,i[9]=_t.y,i[2]=Kt.z,i[6]=dr.z,i[10]=_t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],v=n[10],p=n[14],m=n[3],S=n[7],x=n[11],E=n[15],C=i[0],y=i[4],F=i[8],Z=i[12],O=i[1],A=i[5],ie=i[9],B=i[13],N=i[2],U=i[6],D=i[10],z=i[14],ee=i[3],ce=i[7],ve=i[11],ae=i[15];return s[0]=a*C+o*O+l*N+c*ee,s[4]=a*y+o*A+l*U+c*ce,s[8]=a*F+o*ie+l*D+c*ve,s[12]=a*Z+o*B+l*z+c*ae,s[1]=u*C+h*O+d*N+f*ee,s[5]=u*y+h*A+d*U+f*ce,s[9]=u*F+h*ie+d*D+f*ve,s[13]=u*Z+h*B+d*z+f*ae,s[2]=g*C+_*O+v*N+p*ee,s[6]=g*y+_*A+v*U+p*ce,s[10]=g*F+_*ie+v*D+p*ve,s[14]=g*Z+_*B+v*z+p*ae,s[3]=m*C+S*O+x*N+E*ee,s[7]=m*y+S*A+x*U+E*ce,s[11]=m*F+S*ie+x*D+E*ve,s[15]=m*Z+S*B+x*z+E*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],v=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+v*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],v=e[14],p=e[15],m=h*v*c-_*d*c+_*l*f-o*v*f-h*l*p+o*d*p,S=g*d*c-u*v*c-g*l*f+a*v*f+u*l*p-a*d*p,x=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,E=g*h*l-u*_*l-g*o*d+a*_*d+u*o*v-a*h*v,C=t*m+n*S+i*x+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/C;return e[0]=m*y,e[1]=(_*d*s-h*v*s-_*i*f+n*v*f+h*i*p-n*d*p)*y,e[2]=(o*v*s-_*l*s+_*i*c-n*v*c-o*i*p+n*l*p)*y,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*y,e[4]=S*y,e[5]=(u*v*s-g*d*s+g*i*f-t*v*f-u*i*p+t*d*p)*y,e[6]=(g*l*s-a*v*s-g*i*c+t*v*c+a*i*p-t*l*p)*y,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*f+t*l*f)*y,e[8]=x*y,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*p-t*h*p)*y,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*y,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*y,e[12]=E*y,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*v+t*h*v)*y,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*v-t*o*v)*y,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*y,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,v=a*h,p=o*h,m=l*c,S=l*u,x=l*h,E=n.x,C=n.y,y=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+x)*E,i[2]=(g-S)*E,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(d+p))*C,i[6]=(v+m)*C,i[7]=0,i[8]=(g+S)*y,i[9]=(v-m)*y,i[10]=(1-(d+_))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Bn.set(i[0],i[1],i[2]).length();const a=Bn.set(i[4],i[5],i[6]).length(),o=Bn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tt.copy(this);const c=1/s,u=1/a,h=1/o;return Tt.elements[0]*=c,Tt.elements[1]*=c,Tt.elements[2]*=c,Tt.elements[4]*=u,Tt.elements[5]*=u,Tt.elements[6]*=u,Tt.elements[8]*=h,Tt.elements[9]*=h,Tt.elements[10]*=h,t.setFromRotationMatrix(Tt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,d=(n+i)*c,f=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ye.prototype.isMatrix4=!0;const Bn=new T,Tt=new ye,Fh=new T(0,0,0),Nh=new T(1,1,1),Kt=new T,dr=new T,_t=new T,vo=new ye,xo=new gt;class mi{constructor(e=0,t=0,n=0,i=mi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xo.setFromEuler(this),this.setFromQuaternion(xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new T(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}mi.prototype.isEuler=!0;mi.DefaultOrder="XYZ";mi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Bh{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let zh=0;const yo=new T,zn=new gt,Vt=new ye,fr=new T,Ti=new T,Oh=new T,Uh=new gt,bo=new T(1,0,0),Mo=new T(0,1,0),wo=new T(0,0,1),kh={type:"added"},So={type:"removed"};class ze extends Rn{constructor(){super(),Object.defineProperty(this,"id",{value:zh++}),this.uuid=Nt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DefaultUp.clone();const e=new T,t=new mi,n=new gt,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new rt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=ze.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.multiply(zn),this}rotateOnWorldAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.premultiply(zn),this}rotateX(e){return this.rotateOnAxis(bo,e)}rotateY(e){return this.rotateOnAxis(Mo,e)}rotateZ(e){return this.rotateOnAxis(wo,e)}translateOnAxis(e,t){return yo.copy(e).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bo,e)}translateY(e){return this.translateOnAxis(Mo,e)}translateZ(e){return this.translateOnAxis(wo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Vt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vt.lookAt(Ti,fr,this.up):Vt.lookAt(fr,Ti,this.up),this.quaternion.setFromRotationMatrix(Vt),i&&(Vt.extractRotation(i.matrixWorld),zn.setFromRotationMatrix(Vt),this.quaternion.premultiply(zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(So)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(So)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ze.DefaultUp=new T(0,1,0);ze.DefaultMatrixAutoUpdate=!0;ze.prototype.isObject3D=!0;const At=new T,Gt=new T,ws=new T,Wt=new T,On=new T,Un=new T,Eo=new T,Ss=new T,Es=new T,Ts=new T;class Qe{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),At.subVectors(e,t),i.cross(At);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){At.subVectors(i,t),Gt.subVectors(n,t),ws.subVectors(e,t);const a=At.dot(At),o=At.dot(Gt),l=At.dot(ws),c=Gt.dot(Gt),u=Gt.dot(ws),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wt),Wt.x>=0&&Wt.y>=0&&Wt.x+Wt.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Wt),l.set(0,0),l.addScaledVector(s,Wt.x),l.addScaledVector(a,Wt.y),l.addScaledVector(o,Wt.z),l}static isFrontFacing(e,t,n,i){return At.subVectors(n,t),Gt.subVectors(e,t),At.cross(Gt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return At.subVectors(this.c,this.b),Gt.subVectors(this.a,this.b),At.cross(Gt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qe.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qe.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Qe.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Qe.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qe.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;On.subVectors(i,n),Un.subVectors(s,n),Ss.subVectors(e,n);const l=On.dot(Ss),c=Un.dot(Ss);if(l<=0&&c<=0)return t.copy(n);Es.subVectors(e,i);const u=On.dot(Es),h=Un.dot(Es);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(On,a);Ts.subVectors(e,s);const f=On.dot(Ts),g=Un.dot(Ts);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Un,o);const v=u*g-f*h;if(v<=0&&h-u>=0&&f-g>=0)return Eo.subVectors(s,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Eo,o);const p=1/(v+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(On,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hh=0;class ht extends Rn{constructor(){super(),Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Nt(),this.name="",this.type="Material",this.fog=!0,this.blending=ki,this.side=qi,this.vertexColors=!1,this.opacity=1,this.format=pt,this.transparent=!1,this.blendSrc=zl,this.blendDst=Ol,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Bl;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==pt&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ht.prototype.isMaterial=!0;const ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ct={h:0,s:0,l:0},pr={h:0,s:0,l:0};function As(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Cs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ge=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Lh(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=As(s,i,e+1/3),this.g=As(s,i,e),this.b=As(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=ql[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-t)/u+2;break;case i:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Ct),Ct.h+=e,Ct.s+=t,Ct.l+=n,this.setHSL(Ct.h,Ct.s,Ct.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ct),e.getHSL(pr);const n=fs(Ct.h,pr.h,t),i=fs(Ct.s,pr.s,t),s=fs(Ct.l,pr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};ge.NAMES=ql;ge.prototype.isColor=!0;ge.prototype.r=1;ge.prototype.g=1;ge.prototype.b=1;class ts extends ht{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}ts.prototype.isMeshBasicMaterial=!0;const ke=new T,mr=new J;class Ke{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ji,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new ge),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new J),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new T),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Ue),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ke.fromBufferAttribute(this,t),ke.applyMatrix3(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ke.x=this.getX(t),ke.y=this.getY(t),ke.z=this.getZ(t),ke.applyMatrix4(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ke.x=this.getX(t),ke.y=this.getY(t),ke.z=this.getZ(t),ke.applyNormalMatrix(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ke.x=this.getX(t),ke.y=this.getY(t),ke.z=this.getZ(t),ke.transformDirection(e),this.setXYZ(t,ke.x,ke.y,ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ji&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Ke.prototype.isBufferAttribute=!0;class Yl extends Ke{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jl extends Ke{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vh extends Ke{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Vh.prototype.isFloat16BufferAttribute=!0;class Ze extends Ke{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gh=0;const bt=new ye,Rs=new ze,kn=new T,vt=new Lt,Ai=new Lt,et=new T;class Ge extends Rn{constructor(){super(),Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Nt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wl(e)>65535?jl:Yl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bt.makeRotationFromQuaternion(e),this.applyMatrix4(bt),this}rotateX(e){return bt.makeRotationX(e),this.applyMatrix4(bt),this}rotateY(e){return bt.makeRotationY(e),this.applyMatrix4(bt),this}rotateZ(e){return bt.makeRotationZ(e),this.applyMatrix4(bt),this}translate(e,t,n){return bt.makeTranslation(e,t,n),this.applyMatrix4(bt),this}scale(e,t,n){return bt.makeScale(e,t,n),this.applyMatrix4(bt),this}lookAt(e){return Rs.lookAt(e),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];vt.setFromBufferAttribute(s),this.morphTargetsRelative?(et.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint(et),et.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint(et)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(et.addVectors(vt.min,Ai.min),vt.expandByPoint(et),et.addVectors(vt.max,Ai.max),vt.expandByPoint(et)):(vt.expandByPoint(Ai.min),vt.expandByPoint(Ai.max))}vt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)et.fromBufferAttribute(o,c),l&&(kn.fromBufferAttribute(e,c),et.add(kn)),i=Math.max(i,n.distanceToSquared(et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ke(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let O=0;O<o;O++)c[O]=new T,u[O]=new T;const h=new T,d=new T,f=new T,g=new J,_=new J,v=new J,p=new T,m=new T;function S(O,A,ie){h.fromArray(i,O*3),d.fromArray(i,A*3),f.fromArray(i,ie*3),g.fromArray(a,O*2),_.fromArray(a,A*2),v.fromArray(a,ie*2),d.sub(h),f.sub(h),_.sub(g),v.sub(g);const B=1/(_.x*v.y-v.x*_.y);isFinite(B)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(B),m.copy(f).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(B),c[O].add(p),c[A].add(p),c[ie].add(p),u[O].add(m),u[A].add(m),u[ie].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let O=0,A=x.length;O<A;++O){const ie=x[O],B=ie.start,N=ie.count;for(let U=B,D=B+N;U<D;U+=3)S(n[U+0],n[U+1],n[U+2])}const E=new T,C=new T,y=new T,F=new T;function Z(O){y.fromArray(s,O*3),F.copy(y);const A=c[O];E.copy(A),E.sub(y.multiplyScalar(y.dot(A))).normalize(),C.crossVectors(F,A);const B=C.dot(u[O])<0?-1:1;l[O*4]=E.x,l[O*4+1]=E.y,l[O*4+2]=E.z,l[O*4+3]=B}for(let O=0,A=x.length;O<A;++O){const ie=x[O],B=ie.start,N=ie.count;for(let U=B,D=B+N;U<D;U+=3)Z(n[U+0]),Z(n[U+1]),Z(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,s=new T,a=new T,o=new T,l=new T,c=new T,u=new T,h=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,d=c;h<u;h++,d++)a[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)et.fromBufferAttribute(e,t),et.normalize(),e.setXYZ(t,et.x,et.y,et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,v=l.length;_<v;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Ke(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ge,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.prototype.isBufferGeometry=!0;const To=new ye,Hn=new pi,Ps=new fi,en=new T,tn=new T,nn=new T,Ds=new T,Is=new T,Fs=new T,gr=new T,_r=new T,vr=new T,xr=new J,yr=new J,br=new J,Ns=new T,Mr=new T;class ft extends ze{constructor(e=new Ge,t=new ts){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),e.ray.intersectsSphere(Ps)===!1)||(To.copy(s).invert(),Hn.copy(e.ray).applyMatrix4(To),n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,v=f.length;_<v;_++){const p=f[_],m=i[p.materialIndex],S=Math.max(p.start,g.start),x=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let E=S,C=x;E<C;E+=3){const y=o.getX(E),F=o.getX(E+1),Z=o.getX(E+2);a=wr(this,m,e,Hn,l,c,u,h,d,y,F,Z),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const _=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let p=_,m=v;p<m;p+=3){const S=o.getX(p),x=o.getX(p+1),E=o.getX(p+2);a=wr(this,i,e,Hn,l,c,u,h,d,S,x,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,v=f.length;_<v;_++){const p=f[_],m=i[p.materialIndex],S=Math.max(p.start,g.start),x=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=S,C=x;E<C;E+=3){const y=E,F=E+1,Z=E+2;a=wr(this,m,e,Hn,l,c,u,h,d,y,F,Z),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const _=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let p=_,m=v;p<m;p+=3){const S=p,x=p+1,E=p+2;a=wr(this,i,e,Hn,l,c,u,h,d,S,x,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}ft.prototype.isMesh=!0;function Wh(r,e,t,n,i,s,a,o){let l;if(e.side===$e?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==li,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Mr);return c<t.near||c>t.far?null:{distance:c,point:Mr.clone(),object:r}}function wr(r,e,t,n,i,s,a,o,l,c,u,h){en.fromBufferAttribute(i,c),tn.fromBufferAttribute(i,u),nn.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){gr.set(0,0,0),_r.set(0,0,0),vr.set(0,0,0);for(let g=0,_=s.length;g<_;g++){const v=d[g],p=s[g];v!==0&&(Ds.fromBufferAttribute(p,c),Is.fromBufferAttribute(p,u),Fs.fromBufferAttribute(p,h),a?(gr.addScaledVector(Ds,v),_r.addScaledVector(Is,v),vr.addScaledVector(Fs,v)):(gr.addScaledVector(Ds.sub(en),v),_r.addScaledVector(Is.sub(tn),v),vr.addScaledVector(Fs.sub(nn),v)))}en.add(gr),tn.add(_r),nn.add(vr)}r.isSkinnedMesh&&(r.boneTransform(c,en),r.boneTransform(u,tn),r.boneTransform(h,nn));const f=Wh(r,e,t,n,en,tn,nn,Ns);if(f){o&&(xr.fromBufferAttribute(o,c),yr.fromBufferAttribute(o,u),br.fromBufferAttribute(o,h),f.uv=Qe.getUV(Ns,en,tn,nn,xr,yr,br,new J)),l&&(xr.fromBufferAttribute(l,c),yr.fromBufferAttribute(l,u),br.fromBufferAttribute(l,h),f.uv2=Qe.getUV(Ns,en,tn,nn,xr,yr,br,new J));const g={a:c,b:u,c:h,normal:new T,materialIndex:0};Qe.getNormal(en,tn,nn,g.normal),f.face=g}return f}class nr extends Ge{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function g(_,v,p,m,S,x,E,C,y,F,Z){const O=x/y,A=E/F,ie=x/2,B=E/2,N=C/2,U=y+1,D=F+1;let z=0,ee=0;const ce=new T;for(let ve=0;ve<D;ve++){const ae=ve*A-B;for(let Te=0;Te<U;Te++){const Y=Te*O-ie;ce[_]=Y*m,ce[v]=ae*S,ce[p]=N,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[v]=0,ce[p]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Te/y),h.push(1-ve/F),z+=1}}for(let ve=0;ve<F;ve++)for(let ae=0;ae<y;ae++){const Te=d+ae+U*ve,Y=d+ae+U*(ve+1),K=d+(ae+1)+U*(ve+1),he=d+(ae+1)+U*ve;l.push(Te,Y,he),l.push(Y,K,he),ee+=6}o.addGroup(f,ee,Z),f+=ee,d+=z}}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ci(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function lt(r){const e={};for(let t=0;t<r.length;t++){const n=ci(r[t]);for(const i in n)e[i]=n[i]}return e}const Xh={clone:ci,merge:lt};var qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends ht{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Cn.prototype.isShaderMaterial=!0;class va extends ze{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}va.prototype.isCamera=!0;class dt extends va{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}dt.prototype.isPerspectiveCamera=!0;const Vn=90,Gn=1;class xa extends ze{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new dt(Vn,Gn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new T(1,0,0)),this.add(i);const s=new dt(Vn,Gn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new T(-1,0,0)),this.add(s);const a=new dt(Vn,Gn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new T(0,1,0)),this.add(a);const o=new dt(Vn,Gn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new T(0,-1,0)),this.add(o);const l=new dt(Vn,Gn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new T(0,0,1)),this.add(l);const c=new dt(Vn,Gn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new T(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class ns extends st{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,i,s,a,o,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}ns.prototype.isCubeTexture=!0;class Jl extends Bt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new ns(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=pt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new nr(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:an});s.uniforms.tEquirect.value=t;const a=new ft(i,s),o=t.minFilter;return t.minFilter===Kr&&(t.minFilter=Mt),new xa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}Jl.prototype.isWebGLCubeRenderTarget=!0;const Bs=new T,jh=new T,Jh=new rt;class Yt{constructor(e=new T(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bs.subVectors(n,t).cross(jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Bs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jh.getNormalMatrix(e),i=this.coplanarPoint(Bs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Yt.prototype.isPlane=!0;const Wn=new fi,Sr=new T;class is{constructor(e=new Yt,t=new Yt,n=new Yt,i=new Yt,s=new Yt,a=new Yt){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],g=n[10],_=n[11],v=n[12],p=n[13],m=n[14],S=n[15];return t[0].setComponents(o-i,h-l,_-d,S-v).normalize(),t[1].setComponents(o+i,h+l,_+d,S+v).normalize(),t[2].setComponents(o+s,h+c,_+f,S+p).normalize(),t[3].setComponents(o-s,h-c,_-f,S-p).normalize(),t[4].setComponents(o-a,h-u,_-g,S-m).normalize(),t[5].setComponents(o+a,h+u,_+g,S+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zl(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zh(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,h,d),c.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(g=5121),{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,f=u.updateRange;r.bindBuffer(h,c),f.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ya extends Ge{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],v=[];for(let p=0;p<u;p++){const m=p*d-a;for(let S=0;S<c;S++){const x=S*h-s;g.push(x,-m,0),_.push(0,0,1),v.push(S/o),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<o;m++){const S=m+c*p,x=m+c*(p+1),E=m+1+c*(p+1),C=m+1+c*p;f.push(S,x,C),f.push(x,E,C)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(v,2))}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var $h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id="vec3 transformed = vec3( position );",rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,ad=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,md=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,gd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_d=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Fd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,zd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Od=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Gd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Wd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qd=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,af=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,cf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ef=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Af=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,If=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zf=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Of=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Uf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Xf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$f=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:$h,alphamap_pars_fragment:Qh,alphatest_fragment:Kh,alphatest_pars_fragment:ed,aomap_fragment:td,aomap_pars_fragment:nd,begin_vertex:id,beginnormal_vertex:rd,bsdfs:sd,bumpmap_pars_fragment:ad,clipping_planes_fragment:od,clipping_planes_pars_fragment:ld,clipping_planes_pars_vertex:cd,clipping_planes_vertex:ud,color_fragment:hd,color_pars_fragment:dd,color_pars_vertex:fd,color_vertex:pd,common:md,cube_uv_reflection_fragment:gd,defaultnormal_vertex:_d,displacementmap_pars_vertex:vd,displacementmap_vertex:xd,emissivemap_fragment:yd,emissivemap_pars_fragment:bd,encodings_fragment:Md,encodings_pars_fragment:wd,envmap_fragment:Sd,envmap_common_pars_fragment:Ed,envmap_pars_fragment:Td,envmap_pars_vertex:Ad,envmap_physical_pars_fragment:Od,envmap_vertex:Cd,fog_vertex:Ld,fog_pars_vertex:Rd,fog_fragment:Pd,fog_pars_fragment:Dd,gradientmap_pars_fragment:Id,lightmap_fragment:Fd,lightmap_pars_fragment:Nd,lights_lambert_vertex:Bd,lights_pars_begin:zd,lights_toon_fragment:Ud,lights_toon_pars_fragment:kd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Vd,lights_physical_fragment:Gd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:qd,lights_fragment_end:Yd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:Jd,logdepthbuf_pars_vertex:Zd,logdepthbuf_vertex:$d,map_fragment:Qd,map_pars_fragment:Kd,map_particle_fragment:ef,map_particle_pars_fragment:tf,metalnessmap_fragment:nf,metalnessmap_pars_fragment:rf,morphnormal_vertex:sf,morphtarget_pars_vertex:af,morphtarget_vertex:of,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:uf,normal_pars_vertex:hf,normal_vertex:df,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,output_fragment:_f,packing:vf,premultiplied_alpha_fragment:xf,project_vertex:yf,dithering_fragment:bf,dithering_pars_fragment:Mf,roughnessmap_fragment:wf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:Ef,shadowmap_pars_vertex:Tf,shadowmap_vertex:Af,shadowmask_pars_fragment:Cf,skinbase_vertex:Lf,skinning_pars_vertex:Rf,skinning_vertex:Pf,skinnormal_vertex:Df,specularmap_fragment:If,specularmap_pars_fragment:Ff,tonemapping_fragment:Nf,tonemapping_pars_fragment:Bf,transmission_fragment:zf,transmission_pars_fragment:Of,uv_pars_fragment:Uf,uv_pars_vertex:kf,uv_vertex:Hf,uv2_pars_fragment:Vf,uv2_pars_vertex:Gf,uv2_vertex:Wf,worldpos_vertex:Xf,background_vert:qf,background_frag:Yf,cube_vert:jf,cube_frag:Jf,depth_vert:Zf,depth_frag:$f,distanceRGBA_vert:Qf,distanceRGBA_frag:Kf,equirect_vert:ep,equirect_frag:tp,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:rp,meshbasic_frag:sp,meshlambert_vert:ap,meshlambert_frag:op,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:up,meshnormal_frag:hp,meshphong_vert:dp,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:vp,points_frag:xp,shadow_vert:yp,shadow_frag:bp,sprite_vert:Mp,sprite_frag:wp},ne={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new rt},uv2Transform:{value:new rt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rt}}},Ft={basic:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.fog,ne.lights,{emissive:{value:new ge(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ge(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:lt([ne.points,ne.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:lt([ne.common,ne.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:lt([ne.sprite,ne.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:lt([ne.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:lt([ne.common,ne.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:lt([ne.lights,ne.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ft.physical={uniforms:lt([Ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function Sp(r,e,t,n,i){const s=new ge(0);let a=0,o,l,c=null,u=0,h=null;function d(g,_){let v=!1,p=_.isScene===!0?_.background:null;p&&p.isTexture&&(p=e.get(p));const m=r.xr,S=m.getSession&&m.getSession();S&&S.environmentBlendMode==="additive"&&(p=null),p===null?f(s,a):p&&p.isColor&&(f(p,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Qr)?(l===void 0&&(l=new ft(new nr(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ci(Ft.cube.uniforms),vertexShader:Ft.cube.vertexShader,fragmentShader:Ft.cube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||u!==p.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,h=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new ft(new ya(2,2),new Cn({name:"BackgroundMaterial",uniforms:ci(Ft.background.uniforms),vertexShader:Ft.background.vertexShader,fragmentShader:Ft.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||h!==r.toneMapping)&&(o.material.needsUpdate=!0,c=p,u=p.version,h=r.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function f(g,_){t.buffers.color.setClear(g.r,g.g,g.b,_,i)}return{getClearColor:function(){return s},setClearColor:function(g,_=1){s.set(g),a=_,f(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,f(s,a)},render:d}}function Ep(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=_(null);let c=l;function u(B,N,U,D,z){let ee=!1;if(a){const ce=g(D,U,N);c!==ce&&(c=ce,d(c.object)),ee=v(D,z),ee&&p(D,z)}else{const ce=N.wireframe===!0;(c.geometry!==D.id||c.program!==U.id||c.wireframe!==ce)&&(c.geometry=D.id,c.program=U.id,c.wireframe=ce,ee=!0)}B.isInstancedMesh===!0&&(ee=!0),z!==null&&t.update(z,34963),ee&&(y(B,N,U,D),z!==null&&r.bindBuffer(34963,t.get(z).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(B){return n.isWebGL2?r.bindVertexArray(B):s.bindVertexArrayOES(B)}function f(B){return n.isWebGL2?r.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function g(B,N,U){const D=U.wireframe===!0;let z=o[B.id];z===void 0&&(z={},o[B.id]=z);let ee=z[N.id];ee===void 0&&(ee={},z[N.id]=ee);let ce=ee[D];return ce===void 0&&(ce=_(h()),ee[D]=ce),ce}function _(B){const N=[],U=[],D=[];for(let z=0;z<i;z++)N[z]=0,U[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:D,object:B,attributes:{},index:null}}function v(B,N){const U=c.attributes,D=B.attributes;let z=0;for(const ee in D){const ce=U[ee],ve=D[ee];if(ce===void 0||ce.attribute!==ve||ce.data!==ve.data)return!0;z++}return c.attributesNum!==z||c.index!==N}function p(B,N){const U={},D=B.attributes;let z=0;for(const ee in D){const ce=D[ee],ve={};ve.attribute=ce,ce.data&&(ve.data=ce.data),U[ee]=ve,z++}c.attributes=U,c.attributesNum=z,c.index=N}function m(){const B=c.newAttributes;for(let N=0,U=B.length;N<U;N++)B[N]=0}function S(B){x(B,0)}function x(B,N){const U=c.newAttributes,D=c.enabledAttributes,z=c.attributeDivisors;U[B]=1,D[B]===0&&(r.enableVertexAttribArray(B),D[B]=1),z[B]!==N&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,N),z[B]=N)}function E(){const B=c.newAttributes,N=c.enabledAttributes;for(let U=0,D=N.length;U<D;U++)N[U]!==B[U]&&(r.disableVertexAttribArray(U),N[U]=0)}function C(B,N,U,D,z,ee){n.isWebGL2===!0&&(U===5124||U===5125)?r.vertexAttribIPointer(B,N,U,z,ee):r.vertexAttribPointer(B,N,U,D,z,ee)}function y(B,N,U,D){if(n.isWebGL2===!1&&(B.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const z=D.attributes,ee=U.getAttributes(),ce=N.defaultAttributeValues;for(const ve in ee){const ae=ee[ve];if(ae.location>=0){let Te=z[ve];if(Te===void 0&&(ve==="instanceMatrix"&&B.instanceMatrix&&(Te=B.instanceMatrix),ve==="instanceColor"&&B.instanceColor&&(Te=B.instanceColor)),Te!==void 0){const Y=Te.normalized,K=Te.itemSize,he=t.get(Te);if(he===void 0)continue;const G=he.buffer,xe=he.type,Se=he.bytesPerElement;if(Te.isInterleavedBufferAttribute){const oe=Te.data,de=oe.stride,Ce=Te.offset;if(oe&&oe.isInstancedInterleavedBuffer){for(let V=0;V<ae.locationSize;V++)x(ae.location+V,oe.meshPerAttribute);B.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let V=0;V<ae.locationSize;V++)S(ae.location+V);r.bindBuffer(34962,G);for(let V=0;V<ae.locationSize;V++)C(ae.location+V,K/ae.locationSize,xe,Y,de*Se,(Ce+K/ae.locationSize*V)*Se)}else{if(Te.isInstancedBufferAttribute){for(let oe=0;oe<ae.locationSize;oe++)x(ae.location+oe,Te.meshPerAttribute);B.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let oe=0;oe<ae.locationSize;oe++)S(ae.location+oe);r.bindBuffer(34962,G);for(let oe=0;oe<ae.locationSize;oe++)C(ae.location+oe,K/ae.locationSize,xe,Y,K*Se,K/ae.locationSize*oe*Se)}}else if(ce!==void 0){const Y=ce[ve];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(ae.location,Y);break;case 3:r.vertexAttrib3fv(ae.location,Y);break;case 4:r.vertexAttrib4fv(ae.location,Y);break;default:r.vertexAttrib1fv(ae.location,Y)}}}}E()}function F(){A();for(const B in o){const N=o[B];for(const U in N){const D=N[U];for(const z in D)f(D[z].object),delete D[z];delete N[U]}delete o[B]}}function Z(B){if(o[B.id]===void 0)return;const N=o[B.id];for(const U in N){const D=N[U];for(const z in D)f(D[z].object),delete D[z];delete N[U]}delete o[B.id]}function O(B){for(const N in o){const U=o[N];if(U[B.id]===void 0)continue;const D=U[B.id];for(const z in D)f(D[z].object),delete D[z];delete U[B.id]}}function A(){ie(),c!==l&&(c=l,d(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:A,resetDefaultState:ie,dispose:F,releaseStatesOfGeometry:Z,releaseStatesOfProgram:O,initAttributes:m,enableAttribute:S,disableUnusedAttributes:E}}function Tp(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Ap(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),f=r.getParameter(3379),g=r.getParameter(34076),_=r.getParameter(34921),v=r.getParameter(36347),p=r.getParameter(36348),m=r.getParameter(36349),S=d>0,x=a||e.has("OES_texture_float"),E=S&&x,C=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:S,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:C}}function Cp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Yt,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,f,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!v)s?u(null):c();else{const m=s?0:n,S=m*4;let x=p.clippingState||null;l.value=x,x=u(g,d,S,f);for(let E=0;E!==S;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let v=null;if(_!==0){if(v=l.value,g!==!0||v===null){const p=f+_*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(v===null||v.length<p)&&(v=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)a.copy(h[S]).applyMatrix4(m,o),a.normal.toArray(v,x),v[x+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function Lp(r){let e=new WeakMap;function t(a,o){return o===$s?a.mapping=er:o===Qs&&(a.mapping=tr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===$s||o===Qs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=r.getRenderTarget(),u=new Jl(l.height/2);return u.fromEquirectangularTexture(r,a),e.set(a,u),r.setRenderTarget(c),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ba extends va{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}ba.prototype.isOrthographicCamera=!0;class rs extends Cn{constructor(e){super(e),this.type="RawShaderMaterial"}}rs.prototype.isRawShaderMaterial=!0;const oi=4,on=8,It=Math.pow(2,on),$l=[.125,.215,.35,.446,.526,.582],Ql=on-oi+1+$l.length,Xn=20,hn={[ct]:0,[Ln]:1,[_a]:2,[Hl]:3,[Vl]:4,[Gl]:5,[ga]:6},zs=new ba,{_lodPlanes:Ci,_sizeLods:Ao,_sigmas:Er}=Dp(),Co=new ge;let Os=null;const Tn=(1+Math.sqrt(5))/2,qn=1/Tn,Lo=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Tn,qn),new T(0,Tn,-qn),new T(qn,0,Tn),new T(-qn,0,Tn),new T(Tn,qn,0),new T(-Tn,qn,0)];class Rp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Ip(Xn),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Os=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Do(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Po(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Ci.length;e++)Ci[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Os),e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e){Os=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:tt,minFilter:tt,generateMipmaps:!1,type:un,format:Bu,encoding:Pp(e)?e.encoding:_a,depthBuffer:!1},n=Ro(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Ro(t),n}_compileMaterial(e){const t=new ft(Ci[0],e);this._renderer.compile(t,zs)}_sceneToCubeUV(e,t,n,i){const o=new dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.outputEncoding,f=u.toneMapping;u.getClearColor(Co),u.toneMapping=An,u.outputEncoding=ct,u.autoClear=!1;const g=new ts({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),_=new ft(new nr,g);let v=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,v=!0):(g.color.copy(Co),v=!0);for(let m=0;m<6;m++){const S=m%3;S==0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S==1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m])),Tr(i,S*It,m>2?It:0,It,It),u.setRenderTarget(i),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.outputEncoding=d,u.autoClear=h,e.background=p}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===pt&&t.type===un&&t.encoding===Ln?e.value=hn[ct]:e.value=hn[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===er||e.mapping===tr;i?this._cubemapShader==null&&(this._cubemapShader=Do()):this._equirectShader==null&&(this._equirectShader=Po());const s=i?this._cubemapShader:this._equirectShader,a=new ft(Ci[0],s),o=s.uniforms;o.envMap.value=e,i||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),this._setEncoding(o.outputEncoding,t.texture),Tr(t,0,0,3*It,2*It),n.setRenderTarget(t),n.render(a,zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Ql;i++){const s=Math.sqrt(Er[i]*Er[i]-Er[i-1]*Er[i-1]),a=Lo[(i-1)%Lo.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ft(Ci[i],c),d=c.uniforms,f=Ao[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xn-1),_=s/g,v=isFinite(s)?1+Math.floor(u*_):Xn;v>Xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Xn}`);const p=[];let m=0;for(let C=0;C<Xn;++C){const y=C/_,F=Math.exp(-y*y/2);p.push(F),C==0?m+=F:C<v&&(m+=2*F)}for(let C=0;C<p.length;C++)p[C]=p[C]/m;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=g,d.mipInt.value=on-n,this._setEncoding(d.inputEncoding,e.texture),this._setEncoding(d.outputEncoding,e.texture);const S=Ao[i],x=3*Math.max(0,It-2*S),E=(i===0?0:2*It)+2*S*(i>on-oi?i-on+oi:0);Tr(t,x,E,3*S,2*S),l.setRenderTarget(t),l.render(h,zs)}}function Pp(r){return r===void 0||r.type!==un?!1:r.encoding===ct||r.encoding===Ln||r.encoding===ga}function Dp(){const r=[],e=[],t=[];let n=on;for(let i=0;i<Ql;i++){const s=Math.pow(2,n);e.push(s);let a=1/s;i>on-oi?a=$l[i-on+oi-1]:i==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,g=2,_=1,v=new Float32Array(f*d*h),p=new Float32Array(g*d*h),m=new Float32Array(_*d*h);for(let x=0;x<h;x++){const E=x%3*2/3-1,C=x>2?0:-1,y=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(y,f*d*x),p.set(u,g*d*x);const F=[x,x,x,x,x,x];m.set(F,_*d*x)}const S=new Ge;S.setAttribute("position",new Ke(v,f)),S.setAttribute("uv",new Ke(p,g)),S.setAttribute("faceIndex",new Ke(m,_)),r.push(S),n>oi&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function Ro(r){const e=new Bt(3*It,3*It,r);return e.texture.mapping=Qr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Tr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ip(r){const e=new Float32Array(r),t=new T(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:hn[ct]},outputEncoding:{value:hn[ct]}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${wa()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Po(){const r=new J(1,1);return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:hn[ct]},outputEncoding:{value:hn[ct]}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${wa()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Do(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:hn[ct]},outputEncoding:{value:hn[ct]}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${wa()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ma(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wa(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Fp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===$s||l===Qs,u=l===er||l===tr;if(c||u){if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){const d=r.getRenderTarget();t===null&&(t=new Rp(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),r.setRenderTarget(d),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Np(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bp(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let v=0,p=_.length;v<p;v++)e.update(_[v],34962)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const m=f.array;_=f.version;for(let S=0,x=m.length;S<x;S+=3){const E=m[S+0],C=m[S+1],y=m[S+2];d.push(E,C,C,y,y,E)}}else{const m=g.array;_=g.version;for(let S=0,x=m.length/3-1;S<x;S+=3){const E=S+0,C=S+1,y=S+2;d.push(E,C,C,y,y,E)}}const v=new(Wl(d)>65535?jl:Yl)(d,1);v.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,v)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function zp(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,f){r.drawElements(s,f,o,d*l),t.update(f,s,1)}function h(d,f,g){if(g===0)return;let _,v;if(i)_=r,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,f,o,d*l,g),t.update(f,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Op(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class Sa extends st{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Sa.prototype.isDataTexture2DArray=!0;function Up(r,e){return r[0]-e[0]}function kp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Io(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Hp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new T,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let _=s.get(u);if(_===void 0||_.count!==g){_!==void 0&&_.texture.dispose();const m=u.morphAttributes.normal!==void 0,S=u.morphAttributes.position,x=u.morphAttributes.normal||[],E=u.attributes.position.count,C=m===!0?2:1;let y=E*C,F=1;y>e.maxTextureSize&&(F=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const Z=new Float32Array(y*F*4*g),O=new Sa(Z,y,F,g);O.format=pt,O.type=sn;const A=C*4;for(let ie=0;ie<g;ie++){const B=S[ie],N=x[ie],U=y*F*4*ie;for(let D=0;D<B.count;D++){a.fromBufferAttribute(B,D),B.normalized===!0&&Io(a,B);const z=D*A;Z[U+z+0]=a.x,Z[U+z+1]=a.y,Z[U+z+2]=a.z,Z[U+z+3]=0,m===!0&&(a.fromBufferAttribute(N,D),N.normalized===!0&&Io(a,N),Z[U+z+4]=a.x,Z[U+z+5]=a.y,Z[U+z+6]=a.z,Z[U+z+7]=0)}}_={count:g,texture:O,size:new J(y,F)},s.set(u,_)}let v=0;for(let m=0;m<f.length;m++)v+=f[m];const p=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",p),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[u.id]=_}for(let x=0;x<g;x++){const E=_[x];E[0]=x,E[1]=f[x]}_.sort(kp);for(let x=0;x<8;x++)x<g&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Up);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const E=o[x],C=E[0],y=E[1];C!==Number.MAX_SAFE_INTEGER&&y?(v&&u.getAttribute("morphTarget"+x)!==v[C]&&u.setAttribute("morphTarget"+x,v[C]),p&&u.getAttribute("morphNormal"+x)!==p[C]&&u.setAttribute("morphNormal"+x,p[C]),i[x]=y,m+=y):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const S=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Vp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Kl extends st{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Kl.prototype.isDataTexture3D=!0;const ec=new st,Gp=new Sa,Wp=new Kl,tc=new ns,Fo=[],No=[],Bo=new Float32Array(16),zo=new Float32Array(9),Oo=new Float32Array(4);function gi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Fo[i];if(s===void 0&&(s=new Float32Array(i),Fo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function nc(r,e){let t=No[e];t===void 0&&(t=new Int32Array(e),No[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Xp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2fv(this.addr,e),ut(t,e)}}function Yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;r.uniform3fv(this.addr,e),ut(t,e)}}function jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4fv(this.addr,e),ut(t,e)}}function Jp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(mt(t,n))return;Oo.set(n),r.uniformMatrix2fv(this.addr,!1,Oo),ut(t,n)}}function Zp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(mt(t,n))return;zo.set(n),r.uniformMatrix3fv(this.addr,!1,zo),ut(t,n)}}function $p(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(mt(t,n))return;Bo.set(n),r.uniformMatrix4fv(this.addr,!1,Bo),ut(t,n)}}function Qp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Kp(r,e){const t=this.cache;mt(t,e)||(r.uniform2iv(this.addr,e),ut(t,e))}function em(r,e){const t=this.cache;mt(t,e)||(r.uniform3iv(this.addr,e),ut(t,e))}function tm(r,e){const t=this.cache;mt(t,e)||(r.uniform4iv(this.addr,e),ut(t,e))}function nm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function im(r,e){const t=this.cache;mt(t,e)||(r.uniform2uiv(this.addr,e),ut(t,e))}function rm(r,e){const t=this.cache;mt(t,e)||(r.uniform3uiv(this.addr,e),ut(t,e))}function sm(r,e){const t=this.cache;mt(t,e)||(r.uniform4uiv(this.addr,e),ut(t,e))}function am(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||ec,i)}function om(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wp,i)}function lm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||tc,i)}function cm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gp,i)}function um(r){switch(r){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return jp;case 35674:return Jp;case 35675:return Zp;case 35676:return $p;case 5124:case 35670:return Qp;case 35667:case 35671:return Kp;case 35668:case 35672:return em;case 35669:case 35673:return tm;case 5125:return nm;case 36294:return im;case 36295:return rm;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}function hm(r,e){r.uniform1fv(this.addr,e)}function dm(r,e){const t=gi(e,this.size,2);r.uniform2fv(this.addr,t)}function fm(r,e){const t=gi(e,this.size,3);r.uniform3fv(this.addr,t)}function pm(r,e){const t=gi(e,this.size,4);r.uniform4fv(this.addr,t)}function mm(r,e){const t=gi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gm(r,e){const t=gi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function _m(r,e){const t=gi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vm(r,e){r.uniform1iv(this.addr,e)}function xm(r,e){r.uniform2iv(this.addr,e)}function ym(r,e){r.uniform3iv(this.addr,e)}function bm(r,e){r.uniform4iv(this.addr,e)}function Mm(r,e){r.uniform1uiv(this.addr,e)}function wm(r,e){r.uniform2uiv(this.addr,e)}function Sm(r,e){r.uniform3uiv(this.addr,e)}function Em(r,e){r.uniform4uiv(this.addr,e)}function Tm(r,e,t){const n=e.length,i=nc(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||ec,i[s])}function Am(r,e,t){const n=e.length,i=nc(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||tc,i[s])}function Cm(r){switch(r){case 5126:return hm;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return vm;case 35667:case 35671:return xm;case 35668:case 35672:return ym;case 35669:case 35673:return bm;case 5125:return Mm;case 36294:return wm;case 36295:return Sm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35680:case 36300:case 36308:case 36293:return Am}}function Lm(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=um(e.type)}function ic(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Cm(e.type)}ic.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),ut(e,r)};function rc(r){this.id=r,this.seq=[],this.map={}}rc.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const Us=/(\w+)(\])?(\[|\.)?/g;function Uo(r,e){r.seq.push(e),r.map[e.id]=e}function Rm(r,e,t){const n=r.name,i=n.length;for(Us.lastIndex=0;;){const s=Us.exec(n),a=Us.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Uo(t,c===void 0?new Lm(o,r,e):new ic(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new rc(o),Uo(t,h)),t=h}}}function ln(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);Rm(i,s,this)}}ln.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};ln.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};ln.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};ln.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function ko(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Pm=0;function Dm(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function sc(r){switch(r){case ct:return["Linear","( value )"];case Ln:return["sRGB","( value )"];case _a:return["RGBE","( value )"];case Hl:return["RGBM","( value, 7.0 )"];case Vl:return["RGBM","( value, 16.0 )"];case Gl:return["RGBD","( value, 256.0 )"];case ga:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case wh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ho(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Dm(r.getShaderSource(e))}function En(r,e){const t=sc(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Im(r,e){const t=sc(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Fm(r,e){let t;switch(e){case bu:t="Linear";break;case Mu:t="Reinhard";break;case wu:t="OptimizedCineon";break;case Su:t="ACESFilmic";break;case Eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nm(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function Bm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zm(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function zi(r){return r!==""}function Vo(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Go(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(r){return r.replace(Om,Um)}function Um(r,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return na(t)}const km=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(r){return r.replace(Hm,ac).replace(km,Vm)}function Vm(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ac(r,e,t,n)}function ac(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Wm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Qr:case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case tr:case pa:e="ENVMAP_MODE_REFRACTION";break}return e}function qm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $r:e="ENVMAP_BLENDING_MULTIPLY";break;case xu:e="ENVMAP_BLENDING_MIX";break;case yu:e="ENVMAP_BLENDING_ADD";break}return e}function Ym(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Gm(t),c=Wm(t),u=Xm(t),h=qm(t),d=r.gammaFactor>0?r.gammaFactor:1,f=t.isWebGL2?"":Nm(t),g=Bm(s),_=i.createProgram();let v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[g].filter(zi).join(`
`),v.length>0&&(v+=`
`),p=[f,g].filter(zi).join(`
`),p.length>0&&(p+=`
`)):(v=[Xo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),p=[f,Xo(t),"#define SHADER_NAME "+t.shaderName,g,"#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Re.tonemapping_pars_fragment:"",t.toneMapping!==An?Fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===si?"#define OPAQUE":"",Re.encodings_pars_fragment,t.map?En("mapTexelToLinear",t.mapEncoding):"",t.matcap?En("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?En("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?En("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?En("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?En("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?En("lightMapTexelToLinear",t.lightMapEncoding):"",Im("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=na(a),a=Vo(a,t),a=Go(a,t),o=na(o),o=Vo(o,t),o=Go(o,t),a=Wo(a),o=Wo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===fo?"":"out highp vec4 pc_fragColor;",t.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=m+v+a,x=m+p+o,E=ko(i,35633,S),C=ko(i,35632,x);if(i.attachShader(_,E),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const Z=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(E).trim(),A=i.getShaderInfoLog(C).trim();let ie=!0,B=!0;if(i.getProgramParameter(_,35714)===!1){ie=!1;const N=Ho(i,E,"vertex"),U=Ho(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+Z+`
`+N+`
`+U)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(O===""||A==="")&&(B=!1);B&&(this.diagnostics={runnable:ie,programLog:Z,vertexShader:{log:O,prefix:v},fragmentShader:{log:A,prefix:p}})}i.deleteShader(E),i.deleteShader(C);let y;this.getUniforms=function(){return y===void 0&&(y=new ln(i,_)),y};let F;return this.getAttributes=function(){return F===void 0&&(F=zm(i,_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Pm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=C,this}function jm(r,e,t,n,i,s,a){const o=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.floatVertexTextures,h=i.maxVertexUniforms,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},_=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function v(y){const Z=y.skeleton.bones;if(u)return 1024;{const A=Math.floor((h-20)/4),ie=Math.min(A,Z.length);return ie<Z.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+Z.length+" bones. This GPU supports "+ie+"."),0):ie}}function p(y){let F;return y&&y.isTexture?F=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),F=y.texture.encoding):F=ct,l&&y&&y.isTexture&&y.format===pt&&y.type===un&&y.encoding===Ln&&(F=ct),F}function m(y,F,Z,O,A){const ie=O.fog,B=y.isMeshStandardMaterial?O.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||B),U=g[y.type],D=A.isSkinnedMesh?v(A):0;y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let z,ee;if(U){const Y=Ft[U];z=Y.vertexShader,ee=Y.fragmentShader}else z=y.vertexShader,ee=y.fragmentShader;const ce=r.getRenderTarget(),ve=y.alphaTest>0,ae=y.clearcoat>0;return{isWebGL2:l,shaderID:U,shaderName:y.type,vertexShader:z,fragmentShader:ee,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:A.isInstancedMesh===!0,instancingColor:A.isInstancedMesh===!0&&A.instanceColor!==null,supportsVertexTextures:d,outputEncoding:ce!==null?p(ce.texture):r.outputEncoding,map:!!y.map,mapEncoding:p(y.map),matcap:!!y.matcap,matcapEncoding:p(y.matcap),envMap:!!N,envMapMode:N&&N.mapping,envMapEncoding:p(N),envMapCubeUV:!!N&&(N.mapping===Qr||N.mapping===pa),lightMap:!!y.lightMap,lightMapEncoding:p(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:p(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Th,tangentSpaceNormalMap:y.normalMapType===hi,clearcoat:ae,clearcoatMap:ae&&!!y.clearcoatMap,clearcoatRoughnessMap:ae&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ae&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,specularColorMapEncoding:p(y.specularColorMap),alphaMap:!!y.alphaMap,alphaTest:ve,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenColorMapEncoding:p(y.sheenColorMap),sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!A.geometry&&!!A.geometry.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!A.geometry&&!!A.geometry.attributes.color&&A.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||!!y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!ie,useFog:y.fog,fogExp2:ie&&ie.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:c,skinning:A.isSkinnedMesh===!0&&D>0,maxBones:D,useVertexTexture:u,morphTargets:!!A.geometry&&!!A.geometry.morphAttributes.position,morphNormals:!!A.geometry&&!!A.geometry.morphAttributes.normal,morphTargetsCount:A.geometry&&A.geometry.morphAttributes.position?A.geometry.morphAttributes.position.length:0,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:y.format,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&Z.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:An,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===li,flipSided:y.side===$e,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function S(y){const F=[];if(y.shaderID?F.push(y.shaderID):(F.push(mo(y.fragmentShader)),F.push(mo(y.vertexShader))),y.defines!==void 0)for(const Z in y.defines)F.push(Z),F.push(y.defines[Z]);if(y.isRawShaderMaterial===!1){for(let Z=0;Z<_.length;Z++)F.push(y[_[Z]]);F.push(r.outputEncoding),F.push(r.gammaFactor)}return F.push(y.customProgramCacheKey),F.join()}function x(y){const F=g[y.type];let Z;if(F){const O=Ft[F];Z=Xh.clone(O.uniforms)}else Z=y.uniforms;return Z}function E(y,F){let Z;for(let O=0,A=o.length;O<A;O++){const ie=o[O];if(ie.cacheKey===F){Z=ie,++Z.usedTimes;break}}return Z===void 0&&(Z=new Ym(r,F,y,s),o.push(Z)),Z}function C(y){if(--y.usedTimes===0){const F=o.indexOf(y);o[F]=o[o.length-1],o.pop(),y.destroy()}}return{getParameters:m,getProgramCacheKey:S,getUniforms:x,acquireProgram:E,releaseProgram:C,programs:o}}function Jm(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function qo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yo(r){const e=[];let t=0;const n=[],i=[],s=[],a={id:-1};function o(){t=0,n.length=0,i.length=0,s.length=0}function l(f,g,_,v,p,m){let S=e[t];const x=r.get(_);return S===void 0?(S={id:f.id,object:f,geometry:g,material:_,program:x.program||a,groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},e[t]=S):(S.id=f.id,S.object=f,S.geometry=g,S.material=_,S.program=x.program||a,S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=p,S.group=m),t++,S}function c(f,g,_,v,p,m){const S=l(f,g,_,v,p,m);_.transmission>0?i.push(S):_.transparent===!0?s.push(S):n.push(S)}function u(f,g,_,v,p,m){const S=l(f,g,_,v,p,m);_.transmission>0?i.unshift(S):_.transparent===!0?s.unshift(S):n.unshift(S)}function h(f,g){n.length>1&&n.sort(f||Zm),i.length>1&&i.sort(g||qo),s.length>1&&s.sort(g||qo)}function d(){for(let f=t,g=e.length;f<g;f++){const _=e[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.program=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:o,push:c,unshift:u,finish:d,sort:h}}function $m(r){let e=new WeakMap;function t(i,s){let a;return e.has(i)===!1?(a=new Yo(r),e.set(i,[a])):s>=e.get(i).length?(a=new Yo(r),e.get(i).push(a)):a=e.get(i)[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Qm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ge};break;case"SpotLight":t={position:new T,direction:new T,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function Km(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let eg=0;function tg(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function ng(r,e){const t=new Qm,n=Km(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new T);const s=new T,a=new ye,o=new ye;function l(u,h){let d=0,f=0,g=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let _=0,v=0,p=0,m=0,S=0,x=0,E=0,C=0;u.sort(tg);const y=h!==!0?Math.PI:1;for(let Z=0,O=u.length;Z<O;Z++){const A=u[Z],ie=A.color,B=A.intensity,N=A.distance,U=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=ie.r*B*y,f+=ie.g*B*y,g+=ie.b*B*y;else if(A.isLightProbe)for(let D=0;D<9;D++)i.probe[D].addScaledVector(A.sh.coefficients[D],B);else if(A.isDirectionalLight){const D=t.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity*y),A.castShadow){const z=A.shadow,ee=n.get(A);ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=U,i.directionalShadowMatrix[_]=A.shadow.matrix,x++}i.directional[_]=D,_++}else if(A.isSpotLight){const D=t.get(A);if(D.position.setFromMatrixPosition(A.matrixWorld),D.color.copy(ie).multiplyScalar(B*y),D.distance=N,D.coneCos=Math.cos(A.angle),D.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),D.decay=A.decay,A.castShadow){const z=A.shadow,ee=n.get(A);ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,i.spotShadow[p]=ee,i.spotShadowMap[p]=U,i.spotShadowMatrix[p]=A.shadow.matrix,C++}i.spot[p]=D,p++}else if(A.isRectAreaLight){const D=t.get(A);D.color.copy(ie).multiplyScalar(B),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=D,m++}else if(A.isPointLight){const D=t.get(A);if(D.color.copy(A.color).multiplyScalar(A.intensity*y),D.distance=A.distance,D.decay=A.decay,A.castShadow){const z=A.shadow,ee=n.get(A);ee.shadowBias=z.bias,ee.shadowNormalBias=z.normalBias,ee.shadowRadius=z.radius,ee.shadowMapSize=z.mapSize,ee.shadowCameraNear=z.camera.near,ee.shadowCameraFar=z.camera.far,i.pointShadow[v]=ee,i.pointShadowMap[v]=U,i.pointShadowMatrix[v]=A.shadow.matrix,E++}i.point[v]=D,v++}else if(A.isHemisphereLight){const D=t.get(A);D.skyColor.copy(A.color).multiplyScalar(B*y),D.groundColor.copy(A.groundColor).multiplyScalar(B*y),i.hemi[S]=D,S++}}m>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==v||F.spotLength!==p||F.rectAreaLength!==m||F.hemiLength!==S||F.numDirectionalShadows!==x||F.numPointShadows!==E||F.numSpotShadows!==C)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=m,i.point.length=v,i.hemi.length=S,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=E,i.spotShadowMatrix.length=C,F.directionalLength=_,F.pointLength=v,F.spotLength=p,F.rectAreaLength=m,F.hemiLength=S,F.numDirectionalShadows=x,F.numPointShadows=E,F.numSpotShadows=C,i.version=eg++)}function c(u,h){let d=0,f=0,g=0,_=0,v=0;const p=h.matrixWorldInverse;for(let m=0,S=u.length;m<S;m++){const x=u[m];if(x.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(x.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(x.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),E.direction.normalize(),v++}}}return{setup:l,setupView:c,state:i}}function jo(r,e){const t=new ng(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ig(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new jo(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new jo(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class oc extends ht{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}oc.prototype.isMeshDepthMaterial=!0;class lc extends ht{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}lc.prototype.isMeshDistanceMaterial=!0;const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cc(r,e,t){let n=new is;const i=new J,s=new J,a=new Ue,o=new oc({depthPacking:Eh}),l=new lc,c={},u=t.maxTextureSize,h={0:$e,1:qi,2:li},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:rg,fragmentShader:sg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl,this.render=function(x,E,C){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||x.length===0)return;const y=r.getRenderTarget(),F=r.getActiveCubeFace(),Z=r.getActiveMipmapLevel(),O=r.state;O.setBlending(an),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let A=0,ie=x.length;A<ie;A++){const B=x[A],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const U=N.getFrameExtents();if(i.multiply(U),s.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/U.x),i.x=s.x*U.x,N.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/U.y),i.y=s.y*U.y,N.mapSize.y=s.y)),N.map===null&&!N.isPointLightShadow&&this.type===Bi){const z={minFilter:Mt,magFilter:Mt,format:pt};N.map=new Bt(i.x,i.y,z),N.map.texture.name=B.name+".shadowMap",N.mapPass=new Bt(i.x,i.y,z),N.camera.updateProjectionMatrix()}if(N.map===null){const z={minFilter:tt,magFilter:tt,format:pt};N.map=new Bt(i.x,i.y,z),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();const D=N.getViewportCount();for(let z=0;z<D;z++){const ee=N.getViewport(z);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),O.viewport(a),N.updateMatrices(B,z),n=N.getFrustum(),S(E,C,N.camera,B,this.type)}!N.isPointLightShadow&&this.type===Bi&&p(N,C),N.needsUpdate=!1}v.needsUpdate=!1,r.setRenderTarget(y,F,Z)};function p(x,E){const C=e.update(_);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(E,null,C,d,_,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(E,null,C,f,_,null)}function m(x,E,C,y,F,Z,O){let A=null;const ie=y.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(ie!==void 0?A=ie:A=y.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0){const B=A.uuid,N=C.uuid;let U=c[B];U===void 0&&(U={},c[B]=U);let D=U[N];D===void 0&&(D=A.clone(),U[N]=D),A=D}return A.visible=C.visible,A.wireframe=C.wireframe,O===Bi?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:h[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaTest,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(y.matrixWorld),A.nearDistance=F,A.farDistance=Z),A}function S(x,E,C,y,F){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&F===Bi)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld);const A=e.update(x),ie=x.material;if(Array.isArray(ie)){const B=A.groups;for(let N=0,U=B.length;N<U;N++){const D=B[N],z=ie[D.materialIndex];if(z&&z.visible){const ee=m(x,A,z,y,C.near,C.far,F);r.renderBufferDirect(C,null,A,ee,x,D)}}}else if(ie.visible){const B=m(x,A,ie,y,C.near,C.far,F);r.renderBufferDirect(C,null,A,B,x,null)}}const O=x.children;for(let A=0,ie=O.length;A<ie;A++)S(O[A],E,C,y,F)}}function ag(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const se=new Ue;let q=null;const me=new Ue(0,0,0,0);return{setMask:function(ue){q!==ue&&!L&&(r.colorMask(ue,ue,ue,ue),q=ue)},setLocked:function(ue){L=ue},setClear:function(ue,Pe,at,ot,jt){jt===!0&&(ue*=ot,Pe*=ot,at*=ot),se.set(ue,Pe,at,ot),me.equals(se)===!1&&(r.clearColor(ue,Pe,at,ot),me.copy(se))},reset:function(){L=!1,q=null,me.set(-1,0,0,0)}}}function s(){let L=!1,se=null,q=null,me=null;return{setTest:function(ue){ue?K(2929):he(2929)},setMask:function(ue){se!==ue&&!L&&(r.depthMask(ue),se=ue)},setFunc:function(ue){if(q!==ue){if(ue)switch(ue){case du:r.depthFunc(512);break;case fu:r.depthFunc(519);break;case pu:r.depthFunc(513);break;case Zs:r.depthFunc(515);break;case mu:r.depthFunc(514);break;case gu:r.depthFunc(518);break;case _u:r.depthFunc(516);break;case vu:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);q=ue}},setLocked:function(ue){L=ue},setClear:function(ue){me!==ue&&(r.clearDepth(ue),me=ue)},reset:function(){L=!1,se=null,q=null,me=null}}}function a(){let L=!1,se=null,q=null,me=null,ue=null,Pe=null,at=null,ot=null,jt=null;return{setTest:function(je){L||(je?K(2960):he(2960))},setMask:function(je){se!==je&&!L&&(r.stencilMask(je),se=je)},setFunc:function(je,Ut,St){(q!==je||me!==Ut||ue!==St)&&(r.stencilFunc(je,Ut,St),q=je,me=Ut,ue=St)},setOp:function(je,Ut,St){(Pe!==je||at!==Ut||ot!==St)&&(r.stencilOp(je,Ut,St),Pe=je,at=Ut,ot=St)},setLocked:function(je){L=je},setClear:function(je){jt!==je&&(r.clearStencil(je),jt=je)},reset:function(){L=!1,se=null,q=null,me=null,ue=null,Pe=null,at=null,ot=null,jt=null}}}const o=new i,l=new s,c=new a;let u={},h=null,d={},f=null,g=!1,_=null,v=null,p=null,m=null,S=null,x=null,E=null,C=!1,y=null,F=null,Z=null,O=null,A=null;const ie=r.getParameter(35661);let B=!1,N=0;const U=r.getParameter(7938);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),B=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),B=N>=2);let D=null,z={};const ee=r.getParameter(3088),ce=r.getParameter(2978),ve=new Ue().fromArray(ee),ae=new Ue().fromArray(ce);function Te(L,se,q){const me=new Uint8Array(4),ue=r.createTexture();r.bindTexture(L,ue),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let Pe=0;Pe<q;Pe++)r.texImage2D(se+Pe,0,6408,1,1,0,6408,5121,me);return ue}const Y={};Y[3553]=Te(3553,3553,1),Y[34067]=Te(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),K(2929),l.setFunc(Zs),j(!1),te(ja),K(2884),Ce(an);function K(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function he(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function G(L){L!==h&&(r.bindFramebuffer(36160,L),h=L)}function xe(L,se){return se===null&&h!==null&&(se=h),d[L]!==se?(r.bindFramebuffer(L,se),d[L]=se,n&&(L===36009&&(d[36160]=se),L===36160&&(d[36009]=se)),!0):!1}function Se(L){return f!==L?(r.useProgram(L),f=L,!0):!1}const oe={[$n]:32774,[tu]:32778,[nu]:32779};if(n)oe[Qa]=32775,oe[Ka]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(oe[Qa]=L.MIN_EXT,oe[Ka]=L.MAX_EXT)}const de={[iu]:0,[ru]:1,[su]:768,[zl]:770,[hu]:776,[cu]:774,[ou]:772,[au]:769,[Ol]:771,[uu]:775,[lu]:773};function Ce(L,se,q,me,ue,Pe,at,ot){if(L===an){g===!0&&(he(3042),g=!1);return}if(g===!1&&(K(3042),g=!0),L!==eu){if(L!==_||ot!==C){if((v!==$n||S!==$n)&&(r.blendEquation(32774),v=$n,S=$n),ot)switch(L){case ki:r.blendFuncSeparate(1,771,1,771);break;case Ja:r.blendFunc(1,1);break;case Za:r.blendFuncSeparate(0,0,769,771);break;case $a:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ki:r.blendFuncSeparate(770,771,1,771);break;case Ja:r.blendFunc(770,1);break;case Za:r.blendFunc(0,769);break;case $a:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,m=null,x=null,E=null,_=L,C=ot}return}ue=ue||se,Pe=Pe||q,at=at||me,(se!==v||ue!==S)&&(r.blendEquationSeparate(oe[se],oe[ue]),v=se,S=ue),(q!==p||me!==m||Pe!==x||at!==E)&&(r.blendFuncSeparate(de[q],de[me],de[Pe],de[at]),p=q,m=me,x=Pe,E=at),_=L,C=null}function V(L,se){L.side===li?he(2884):K(2884);let q=L.side===$e;se&&(q=!q),j(q),L.blending===ki&&L.transparent===!1?Ce(an):Ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const me=L.stencilWrite;c.setTest(me),me&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(32926):he(32926)}function j(L){y!==L&&(L?r.frontFace(2304):r.frontFace(2305),y=L)}function te(L){L!==$c?(K(2884),L!==F&&(L===ja?r.cullFace(1029):L===Qc?r.cullFace(1028):r.cullFace(1032))):he(2884),F=L}function fe(L){L!==Z&&(B&&r.lineWidth(L),Z=L)}function re(L,se,q){L?(K(32823),(O!==se||A!==q)&&(r.polygonOffset(se,q),O=se,A=q)):he(32823)}function w(L){L?K(3089):he(3089)}function b(L){L===void 0&&(L=33984+ie-1),D!==L&&(r.activeTexture(L),D=L)}function H(L,se){D===null&&b();let q=z[D];q===void 0&&(q={type:void 0,texture:void 0},z[D]=q),(q.type!==L||q.texture!==se)&&(r.bindTexture(L,se||Y[L]),q.type=L,q.texture=se)}function $(){const L=z[D];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){ve.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ve.copy(L))}function Ee(L){ae.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ae.copy(L))}function pe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},D=null,z={},h=null,d={},f=null,g=!1,_=null,v=null,p=null,m=null,S=null,x=null,E=null,C=!1,y=null,F=null,Z=null,O=null,A=null,ve.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:K,disable:he,bindFramebuffer:xe,bindXRFramebuffer:G,useProgram:Se,setBlending:Ce,setMaterial:V,setFlipSided:j,setCullFace:te,setLineWidth:fe,setPolygonOffset:re,setScissorTest:w,activeTexture:b,bindTexture:H,unbindTexture:$,compressedTexImage2D:Q,texImage2D:le,texImage3D:Me,scissor:_e,viewport:Ee,reset:pe}}function og(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=new WeakMap;let f,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,b){return g?new OffscreenCanvas(w,b):es("canvas")}function v(w,b,H,$){let Q=1;if((w.width>$||w.height>$)&&(Q=$/Math.max(w.width,w.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const le=b?Rh:Math.floor,Me=le(Q*w.width),_e=le(Q*w.height);f===void 0&&(f=_(Me,_e));const Ee=H?_(Me,_e):f;return Ee.width=Me,Ee.height=_e,Ee.getContext("2d").drawImage(w,0,0,Me,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Me+"x"+_e+")."),Ee}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return po(w.width)&&po(w.height)}function m(w){return o?!1:w.wrapS!==yt||w.wrapT!==yt||w.minFilter!==tt&&w.minFilter!==Mt}function S(w,b){return w.generateMipmaps&&b&&w.minFilter!==tt&&w.minFilter!==Mt}function x(w,b,H,$,Q=1){r.generateMipmap(w);const le=n.get(b);le.__maxMipLevel=Math.log2(Math.max(H,$,Q))}function E(w,b,H,$){if(o===!1)return b;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=b;return b===6403&&(H===5126&&(Q=33326),H===5131&&(Q=33325),H===5121&&(Q=33321)),b===6407&&(H===5126&&(Q=34837),H===5131&&(Q=34843),H===5121&&(Q=32849)),b===6408&&(H===5126&&(Q=34836),H===5131&&(Q=34842),H===5121&&(Q=$===Ln?35907:32856)),(Q===33325||Q===33326||Q===34842||Q===34836)&&e.get("EXT_color_buffer_float"),Q}function C(w){return w===tt||w===eo||w===to?9728:9729}function y(w){const b=w.target;b.removeEventListener("dispose",y),Z(b),b.isVideoTexture&&d.delete(b),a.memory.textures--}function F(w){const b=w.target;b.removeEventListener("dispose",F),O(b)}function Z(w){const b=n.get(w);b.__webglInit!==void 0&&(r.deleteTexture(b.__webglTexture),n.remove(w))}function O(w){const b=w.texture,H=n.get(w),$=n.get(b);if(w){if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(H.__webglFramebuffer[Q]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[Q]);else r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer&&r.deleteRenderbuffer(H.__webglColorRenderbuffer),H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer);if(w.isWebGLMultipleRenderTargets)for(let Q=0,le=b.length;Q<le;Q++){const Me=n.get(b[Q]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(b[Q])}n.remove(b),n.remove(w)}}let A=0;function ie(){A=0}function B(){const w=A;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),A+=1,w}function N(w,b){const H=n.get(w);if(w.isVideoTexture&&V(w),w.version>0&&H.__version!==w.version){const $=w.image;if($===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(H,w,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,H.__webglTexture)}function U(w,b){const H=n.get(w);if(w.version>0&&H.__version!==w.version){Te(H,w,b);return}t.activeTexture(33984+b),t.bindTexture(35866,H.__webglTexture)}function D(w,b){const H=n.get(w);if(w.version>0&&H.__version!==w.version){Te(H,w,b);return}t.activeTexture(33984+b),t.bindTexture(32879,H.__webglTexture)}function z(w,b){const H=n.get(w);if(w.version>0&&H.__version!==w.version){Y(H,w,b);return}t.activeTexture(33984+b),t.bindTexture(34067,H.__webglTexture)}const ee={[Ks]:10497,[yt]:33071,[ea]:33648},ce={[tt]:9728,[eo]:9984,[to]:9986,[Mt]:9729,[Tu]:9985,[Kr]:9987};function ve(w,b,H){if(H?(r.texParameteri(w,10242,ee[b.wrapS]),r.texParameteri(w,10243,ee[b.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,ee[b.wrapR]),r.texParameteri(w,10240,ce[b.magFilter]),r.texParameteri(w,10241,ce[b.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(b.wrapS!==yt||b.wrapT!==yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,C(b.magFilter)),r.texParameteri(w,10241,C(b.minFilter)),b.minFilter!==tt&&b.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(b.type===sn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===ri&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(w,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function ae(w,b){w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",y),w.__webglTexture=r.createTexture(),a.memory.textures++)}function Te(w,b,H){let $=3553;b.isDataTexture2DArray&&($=35866),b.isDataTexture3D&&($=32879),ae(w,b),t.activeTexture(33984+H),t.bindTexture($,w.__webglTexture),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const Q=m(b)&&p(b.image)===!1,le=v(b.image,Q,!1,u),Me=p(le)||o,_e=s.convert(b.format);let Ee=s.convert(b.type),pe=E(b.internalFormat,_e,Ee,b.encoding);ve($,b,Me);let L;const se=b.mipmaps;if(b.isDepthTexture)pe=6402,o?b.type===sn?pe=36012:b.type===Hr?pe=33190:b.type===Hi?pe=35056:pe=33189:b.type===sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ai&&pe===6402&&b.type!==Vr&&b.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Vr,Ee=s.convert(b.type)),b.format===Yi&&pe===6402&&(pe=34041,b.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Hi,Ee=s.convert(b.type))),t.texImage2D(3553,0,pe,le.width,le.height,0,_e,Ee,null);else if(b.isDataTexture)if(se.length>0&&Me){for(let q=0,me=se.length;q<me;q++)L=se[q],t.texImage2D(3553,q,pe,L.width,L.height,0,_e,Ee,L.data);b.generateMipmaps=!1,w.__maxMipLevel=se.length-1}else t.texImage2D(3553,0,pe,le.width,le.height,0,_e,Ee,le.data),w.__maxMipLevel=0;else if(b.isCompressedTexture){for(let q=0,me=se.length;q<me;q++)L=se[q],b.format!==pt&&b.format!==si?_e!==null?t.compressedTexImage2D(3553,q,pe,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,pe,L.width,L.height,0,_e,Ee,L.data);w.__maxMipLevel=se.length-1}else if(b.isDataTexture2DArray)t.texImage3D(35866,0,pe,le.width,le.height,le.depth,0,_e,Ee,le.data),w.__maxMipLevel=0;else if(b.isDataTexture3D)t.texImage3D(32879,0,pe,le.width,le.height,le.depth,0,_e,Ee,le.data),w.__maxMipLevel=0;else if(se.length>0&&Me){for(let q=0,me=se.length;q<me;q++)L=se[q],t.texImage2D(3553,q,pe,_e,Ee,L);b.generateMipmaps=!1,w.__maxMipLevel=se.length-1}else t.texImage2D(3553,0,pe,_e,Ee,le),w.__maxMipLevel=0;S(b,Me)&&x($,b,le.width,le.height),w.__version=b.version,b.onUpdate&&b.onUpdate(b)}function Y(w,b,H){if(b.image.length!==6)return;ae(w,b),t.activeTexture(33984+H),t.bindTexture(34067,w.__webglTexture),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const $=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),Q=b.image[0]&&b.image[0].isDataTexture,le=[];for(let q=0;q<6;q++)!$&&!Q?le[q]=v(b.image[q],!1,!0,c):le[q]=Q?b.image[q].image:b.image[q];const Me=le[0],_e=p(Me)||o,Ee=s.convert(b.format),pe=s.convert(b.type),L=E(b.internalFormat,Ee,pe,b.encoding);ve(34067,b,_e);let se;if($){for(let q=0;q<6;q++){se=le[q].mipmaps;for(let me=0;me<se.length;me++){const ue=se[me];b.format!==pt&&b.format!==si?Ee!==null?t.compressedTexImage2D(34069+q,me,L,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,me,L,ue.width,ue.height,0,Ee,pe,ue.data)}}w.__maxMipLevel=se.length-1}else{se=b.mipmaps;for(let q=0;q<6;q++)if(Q){t.texImage2D(34069+q,0,L,le[q].width,le[q].height,0,Ee,pe,le[q].data);for(let me=0;me<se.length;me++){const Pe=se[me].image[q].image;t.texImage2D(34069+q,me+1,L,Pe.width,Pe.height,0,Ee,pe,Pe.data)}}else{t.texImage2D(34069+q,0,L,Ee,pe,le[q]);for(let me=0;me<se.length;me++){const ue=se[me];t.texImage2D(34069+q,me+1,L,Ee,pe,ue.image[q])}}w.__maxMipLevel=se.length}S(b,_e)&&x(34067,b,Me.width,Me.height),w.__version=b.version,b.onUpdate&&b.onUpdate(b)}function K(w,b,H,$,Q){const le=s.convert(H.format),Me=s.convert(H.type),_e=E(H.internalFormat,le,Me,H.encoding);Q===32879||Q===35866?t.texImage3D(Q,0,_e,b.width,b.height,b.depth,0,le,Me,null):t.texImage2D(Q,0,_e,b.width,b.height,0,le,Me,null),t.bindFramebuffer(36160,w),r.framebufferTexture2D(36160,$,Q,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function he(w,b,H){if(r.bindRenderbuffer(36161,w),b.depthBuffer&&!b.stencilBuffer){let $=33189;if(H){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===sn?$=36012:Q.type===Hr&&($=33190));const le=Ce(b);r.renderbufferStorageMultisample(36161,le,$,b.width,b.height)}else r.renderbufferStorage(36161,$,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(b.depthBuffer&&b.stencilBuffer){if(H){const $=Ce(b);r.renderbufferStorageMultisample(36161,$,35056,b.width,b.height)}else r.renderbufferStorage(36161,34041,b.width,b.height);r.framebufferRenderbuffer(36160,33306,36161,w)}else{const $=b.isWebGLMultipleRenderTargets===!0?b.texture[0]:b.texture,Q=s.convert($.format),le=s.convert($.type),Me=E($.internalFormat,Q,le,$.encoding);if(H){const _e=Ce(b);r.renderbufferStorageMultisample(36161,_e,Me,b.width,b.height)}else r.renderbufferStorage(36161,Me,b.width,b.height)}r.bindRenderbuffer(36161,null)}function G(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);const $=n.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===ai)r.framebufferTexture2D(36160,36096,3553,$,0);else if(b.depthTexture.format===Yi)r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function xe(w){const b=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture){if(H)throw new Error("target.depthTexture not supported in Cube render targets");G(b.__webglFramebuffer,w)}else if(H){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]=r.createRenderbuffer(),he(b.__webglDepthbuffer[$],w,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),he(b.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Se(w){const b=w.texture,H=n.get(w),$=n.get(b);w.addEventListener("dispose",F),w.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture=r.createTexture(),$.__version=b.version,a.memory.textures++);const Q=w.isWebGLCubeRenderTarget===!0,le=w.isWebGLMultipleRenderTargets===!0,Me=w.isWebGLMultisampleRenderTarget===!0,_e=b.isDataTexture3D||b.isDataTexture2DArray,Ee=p(w)||o;if(o&&b.format===si&&(b.type===sn||b.type===ri)&&(b.format=pt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),Q){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)H.__webglFramebuffer[pe]=r.createFramebuffer()}else if(H.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const pe=w.texture;for(let L=0,se=pe.length;L<se;L++){const q=n.get(pe[L]);q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(Me)if(o){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer);const pe=s.convert(b.format),L=s.convert(b.type),se=E(b.internalFormat,pe,L,b.encoding),q=Ce(w);r.renderbufferStorageMultisample(36161,q,se,w.width,w.height),t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,H.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),he(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(Q){t.bindTexture(34067,$.__webglTexture),ve(34067,b,Ee);for(let pe=0;pe<6;pe++)K(H.__webglFramebuffer[pe],w,b,36064,34069+pe);S(b,Ee)&&x(34067,b,w.width,w.height),t.unbindTexture()}else if(le){const pe=w.texture;for(let L=0,se=pe.length;L<se;L++){const q=pe[L],me=n.get(q);t.bindTexture(3553,me.__webglTexture),ve(3553,q,Ee),K(H.__webglFramebuffer,w,q,36064+L,3553),S(q,Ee)&&x(3553,q,w.width,w.height)}t.unbindTexture()}else{let pe=3553;_e&&(o?pe=b.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(pe,$.__webglTexture),ve(pe,b,Ee),K(H.__webglFramebuffer,w,b,36064,pe),S(b,Ee)&&x(pe,b,w.width,w.height,w.depth),t.unbindTexture()}w.depthBuffer&&xe(w)}function oe(w){const b=p(w)||o,H=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0,Q=H.length;$<Q;$++){const le=H[$];if(S(le,b)){const Me=w.isWebGLCubeRenderTarget?34067:3553,_e=n.get(le).__webglTexture;t.bindTexture(Me,_e),x(Me,le,w.width,w.height),t.unbindTexture()}}}function de(w){if(w.isWebGLMultisampleRenderTarget)if(o){const b=w.width,H=w.height;let $=16384;w.depthBuffer&&($|=256),w.stencilBuffer&&($|=1024);const Q=n.get(w);t.bindFramebuffer(36008,Q.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Q.__webglFramebuffer),r.blitFramebuffer(0,0,b,H,0,0,b,H,$,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Q.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ce(w){return o&&w.isWebGLMultisampleRenderTarget?Math.min(h,w.samples):0}function V(w){const b=a.render.frame;d.get(w)!==b&&(d.set(w,b),w.update())}let j=!1,te=!1;function fe(w,b){w&&w.isWebGLRenderTarget&&(j===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),j=!0),w=w.texture),N(w,b)}function re(w,b){w&&w.isWebGLCubeRenderTarget&&(te===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),te=!0),w=w.texture),z(w,b)}this.allocateTextureUnit=B,this.resetTextureUnits=ie,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=D,this.setTextureCube=z,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=de,this.safeSetTexture2D=fe,this.safeSetTextureCube=re}function lg(r,e,t){const n=t.isWebGL2;function i(s){let a;if(s===un)return 5121;if(s===Ru)return 32819;if(s===Pu)return 32820;if(s===Du)return 33635;if(s===Au)return 5120;if(s===Cu)return 5122;if(s===Vr)return 5123;if(s===Lu)return 5124;if(s===Hr)return 5125;if(s===sn)return 5126;if(s===ri)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Iu)return 6406;if(s===si)return 6407;if(s===pt)return 6408;if(s===Fu)return 6409;if(s===Nu)return 6410;if(s===ai)return 6402;if(s===Yi)return 34041;if(s===zu)return 6403;if(s===Ou)return 36244;if(s===Uu)return 33319;if(s===ku)return 33320;if(s===Hu)return 36248;if(s===Vu)return 36249;if(s===no||s===io||s===ro||s===so)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===no)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===io)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ro)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===so)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ao||s===oo||s===lo||s===co)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===co)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===uo||s===ho)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===uo)return a.COMPRESSED_RGB8_ETC2;if(s===ho)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===Wu||s===Xu||s===qu||s===Yu||s===ju||s===Ju||s===Zu||s===$u||s===Qu||s===Ku||s===eh||s===th||s===nh||s===ih||s===sh||s===ah||s===oh||s===lh||s===ch||s===uh||s===hh||s===dh||s===fh||s===ph||s===mh||s===gh||s===_h||s===vh)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===rh)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===Hi)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class uc extends dt{constructor(e=[]){super(),this.cameras=e}}uc.prototype.isArrayCamera=!0;class Oi extends ze{constructor(){super(),this.type="Group"}}Oi.prototype.isGroup=!0;const cg={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cg))),c&&e.hand){a=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,n);if(c.joints[_.jointName]===void 0){const m=new Oi;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[_.jointName]=m,c.add(m)}const p=c.joints[_.jointName];v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=v.radius),p.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class ug extends Rn{constructor(e,t){super();const n=this,i=e.state;let s=null,a=1,o=null,l="local-floor",c=null,u=null,h=null,d=null,f=null,g=!1,_=null,v=null,p=null,m=null,S=null,x=null;const E=[],C=new Map,y=new dt;y.layers.enable(1),y.viewport=new Ue;const F=new dt;F.layers.enable(2),F.viewport=new Ue;const Z=[y,F],O=new uc;O.layers.enable(1),O.layers.enable(2);let A=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=E[Y];return K===void 0&&(K=new ks,E[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=E[Y];return K===void 0&&(K=new ks,E[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=E[Y];return K===void 0&&(K=new ks,E[Y]=K),K.getHandSpace()};function B(Y){const K=C.get(Y.inputSource);K&&K.dispatchEvent({type:Y.type,data:Y.inputSource})}function N(){C.forEach(function(Y,K){Y.disconnect(K)}),C.clear(),A=null,ie=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),h&&t.deleteFramebuffer(h),_&&t.deleteFramebuffer(_),v&&t.deleteRenderbuffer(v),p&&t.deleteRenderbuffer(p),h=null,_=null,v=null,p=null,f=null,d=null,u=null,s=null,Te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",N),s.addEventListener("inputsourceschange",U);const K=t.getContextAttributes();if(K.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0){const he={antialias:K.antialias,alpha:K.alpha,depth:K.depth,stencil:K.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f})}else if(t instanceof WebGLRenderingContext){const he={antialias:!0,alpha:K.alpha,depth:K.depth,stencil:K.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,he),s.updateRenderState({layers:[f]})}else{g=K.antialias;let he=null;K.depth&&(x=256,K.stencil&&(x|=1024),S=K.stencil?33306:36096,he=K.stencil?35056:33190);const G={colorFormat:K.alpha?32856:32849,depthFormat:he,scaleFactor:a};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(G),h=t.createFramebuffer(),s.updateRenderState({layers:[d]}),g&&(_=t.createFramebuffer(),v=t.createRenderbuffer(),t.bindRenderbuffer(36161,v),t.renderbufferStorageMultisample(36161,4,32856,d.textureWidth,d.textureHeight),i.bindFramebuffer(36160,_),t.framebufferRenderbuffer(36160,36064,36161,v),t.bindRenderbuffer(36161,null),he!==null&&(p=t.createRenderbuffer(),t.bindRenderbuffer(36161,p),t.renderbufferStorageMultisample(36161,4,he,d.textureWidth,d.textureHeight),t.framebufferRenderbuffer(36160,S,36161,p),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}o=await s.requestReferenceSpace(l),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(Y){const K=s.inputSources;for(let he=0;he<E.length;he++)C.set(K[he],E[he]);for(let he=0;he<Y.removed.length;he++){const G=Y.removed[he],xe=C.get(G);xe&&(xe.dispatchEvent({type:"disconnected",data:G}),C.delete(G))}for(let he=0;he<Y.added.length;he++){const G=Y.added[he],xe=C.get(G);xe&&xe.dispatchEvent({type:"connected",data:G})}}const D=new T,z=new T;function ee(Y,K,he){D.setFromMatrixPosition(K.matrixWorld),z.setFromMatrixPosition(he.matrixWorld);const G=D.distanceTo(z),xe=K.projectionMatrix.elements,Se=he.projectionMatrix.elements,oe=xe[14]/(xe[10]-1),de=xe[14]/(xe[10]+1),Ce=(xe[9]+1)/xe[5],V=(xe[9]-1)/xe[5],j=(xe[8]-1)/xe[0],te=(Se[8]+1)/Se[0],fe=oe*j,re=oe*te,w=G/(-j+te),b=w*-j;K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(b),Y.translateZ(w),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const H=oe+w,$=de+w,Q=fe-b,le=re+(G-b),Me=Ce*de/$*H,_e=V*de/$*H;Y.projectionMatrix.makePerspective(Q,le,Me,_e,H,$)}function ce(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;O.near=F.near=y.near=Y.near,O.far=F.far=y.far=Y.far,(A!==O.near||ie!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),A=O.near,ie=O.far);const K=Y.parent,he=O.cameras;ce(O,K);for(let xe=0;xe<he.length;xe++)ce(he[xe],K);O.matrixWorld.decompose(O.position,O.quaternion,O.scale),Y.position.copy(O.position),Y.quaternion.copy(O.quaternion),Y.scale.copy(O.scale),Y.matrix.copy(O.matrix),Y.matrixWorld.copy(O.matrixWorld);const G=Y.children;for(let xe=0,Se=G.length;xe<Se;xe++)G[xe].updateMatrixWorld(!0);he.length===2?ee(O,y,F):O.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(Y){d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let ve=null;function ae(Y,K){if(c=K.getViewerPose(o),m=K,c!==null){const G=c.views;f!==null&&i.bindXRFramebuffer(f.framebuffer);let xe=!1;G.length!==O.cameras.length&&(O.cameras.length=0,xe=!0);for(let Se=0;Se<G.length;Se++){const oe=G[Se];let de=null;if(f!==null)de=f.getViewport(oe);else{const V=u.getViewSubImage(d,oe);i.bindXRFramebuffer(h),V.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,S,3553,V.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,V.colorTexture,0),de=V.viewport}const Ce=Z[Se];Ce.matrix.fromArray(oe.transform.matrix),Ce.projectionMatrix.fromArray(oe.projectionMatrix),Ce.viewport.set(de.x,de.y,de.width,de.height),Se===0&&O.matrix.copy(Ce.matrix),xe===!0&&O.cameras.push(Ce)}g&&(i.bindXRFramebuffer(_),x!==null&&t.clear(x))}const he=s.inputSources;for(let G=0;G<E.length;G++){const xe=E[G],Se=he[G];xe.update(Se,K,o)}if(ve&&ve(Y,K),g){const G=d.textureWidth,xe=d.textureHeight;i.bindFramebuffer(36008,_),i.bindFramebuffer(36009,h),t.invalidateFramebuffer(36008,[S]),t.invalidateFramebuffer(36009,[S]),t.blitFramebuffer(0,0,G,xe,0,0,G,xe,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,_)}m=null}const Te=new Zl;Te.setAnimationLoop(ae),this.setAnimationLoop=function(Y){ve=Y},this.dispose=function(){}}}function hg(r){function e(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function t(p,m,S,x,E){m.isMeshBasicMaterial?n(p,m):m.isMeshLambertMaterial?(n(p,m),l(p,m)):m.isMeshToonMaterial?(n(p,m),u(p,m)):m.isMeshPhongMaterial?(n(p,m),c(p,m)):m.isMeshStandardMaterial?(n(p,m),m.isMeshPhysicalMaterial?d(p,m,E):h(p,m)):m.isMeshMatcapMaterial?(n(p,m),f(p,m)):m.isMeshDepthMaterial?(n(p,m),g(p,m)):m.isMeshDistanceMaterial?(n(p,m),_(p,m)):m.isMeshNormalMaterial?(n(p,m),v(p,m)):m.isLineBasicMaterial?(i(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?a(p,m,S,x):m.isSpriteMaterial?o(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=r.get(m).envMap;if(S){p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio;const C=r.get(S).__maxMipLevel;C!==void 0&&(p.maxMipLevel.value=C)}m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let E;m.aoMap?E=m.aoMap:m.lightMap&&(E=m.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function i(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,S,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=x*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function l(p,m){m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===$e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===$e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===$e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===$e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===$e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===$e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),r.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){h(p,m),p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===$e&&p.clearcoatNormalScale.value.negate())),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===$e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===$e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function g(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function _(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}function v(p,m){m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===$e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===$e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function dg(){const r=es("canvas");return r.style.display="block",r}function Oe(r={}){const e=r.canvas!==void 0?r.canvas:dg(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ct,this.physicallyCorrectLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const _=this;let v=!1,p=0,m=0,S=null,x=-1,E=null;const C=new Ue,y=new Ue;let F=null,Z=e.width,O=e.height,A=1,ie=null,B=null;const N=new Ue(0,0,Z,O),U=new Ue(0,0,Z,O);let D=!1;const z=[],ee=new is;let ce=!1,ve=!1,ae=null;const Te=new ye,Y=new T,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return S===null?A:1}let G=t;function xe(M,P){for(let k=0;k<M.length;k++){const I=M[k],X=e.getContext(I,P);if(X!==null)return X}return null}try{const M={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",ot,!1),G===null){const P=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&P.shift(),G=xe(P,M),G===null)throw xe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Se,oe,de,Ce,V,j,te,fe,re,w,b,H,$,Q,le,Me,_e,Ee,pe,L,se,q,me;function ue(){Se=new Np(G),oe=new Ap(G,Se,r),Se.init(oe),q=new lg(G,Se,oe),de=new ag(G,Se,oe),z[0]=1029,Ce=new Op,V=new Jm,j=new og(G,Se,de,V,oe,q,Ce),te=new Lp(_),fe=new Fp(_),re=new Zh(G,oe),me=new Ep(G,Se,re,oe),w=new Bp(G,re,Ce,me),b=new Vp(G,w,re,Ce),pe=new Hp(G,oe,j),Me=new Cp(V),H=new jm(_,te,fe,Se,oe,me,Me),$=new hg(V),Q=new $m(V),le=new ig(Se,oe),Ee=new Sp(_,te,de,b,o),_e=new cc(_,b,oe),L=new Tp(G,Se,Ce,oe),se=new zp(G,Se,Ce,oe),Ce.programs=H.programs,_.capabilities=oe,_.extensions=Se,_.properties=V,_.renderLists=Q,_.shadowMap=_e,_.state=de,_.info=Ce}ue();const Pe=new ug(_,G);this.xr=Pe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(M){M!==void 0&&(A=M,this.setSize(Z,O,!1))},this.getSize=function(M){return M.set(Z,O)},this.setSize=function(M,P,k){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,O=P,e.width=Math.floor(M*A),e.height=Math.floor(P*A),k!==!1&&(e.style.width=M+"px",e.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(Z*A,O*A).floor()},this.setDrawingBufferSize=function(M,P,k){Z=M,O=P,A=k,e.width=Math.floor(M*k),e.height=Math.floor(P*k),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(N)},this.setViewport=function(M,P,k,I){M.isVector4?N.set(M.x,M.y,M.z,M.w):N.set(M,P,k,I),de.viewport(C.copy(N).multiplyScalar(A).floor())},this.getScissor=function(M){return M.copy(U)},this.setScissor=function(M,P,k,I){M.isVector4?U.set(M.x,M.y,M.z,M.w):U.set(M,P,k,I),de.scissor(y.copy(U).multiplyScalar(A).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(M){de.setScissorTest(D=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){B=M},this.getClearColor=function(M){return M.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(M,P,k){let I=0;(M===void 0||M)&&(I|=16384),(P===void 0||P)&&(I|=256),(k===void 0||k)&&(I|=1024),G.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",ot,!1),Q.dispose(),le.dispose(),V.dispose(),te.dispose(),fe.dispose(),b.dispose(),me.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Ha),Pe.removeEventListener("sessionend",Va),ae&&(ae.dispose(),ae=null),vn.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const M=Ce.autoReset,P=_e.enabled,k=_e.autoUpdate,I=_e.needsUpdate,X=_e.type;ue(),Ce.autoReset=M,_e.enabled=P,_e.autoUpdate=k,_e.needsUpdate=I,_e.type=X}function jt(M){const P=M.target;P.removeEventListener("dispose",jt),je(P)}function je(M){Ut(M),V.remove(M)}function Ut(M){const P=V.get(M).programs;P!==void 0&&P.forEach(function(k){H.releaseProgram(k)})}this.renderBufferDirect=function(M,P,k,I,X,Ae){P===null&&(P=K);const we=X.isMesh&&X.matrixWorld.determinant()<0,be=Gc(M,P,k,I,X);de.setMaterial(I,we);let Le=k.index;const Ne=k.attributes.position;if(Le===null){if(Ne===void 0||Ne.count===0)return}else if(Le.count===0)return;let De=1;I.wireframe===!0&&(Le=w.getWireframeAttribute(k),De=2),me.setup(X,I,be,k,Le);let Ie,qe=L;Le!==null&&(Ie=re.get(Le),qe=se,qe.setIndex(Ie));const xn=Le!==null?Le.count:Ne.count,Fe=k.drawRange.start*De,yi=k.drawRange.count*De,Ve=Ae!==null?Ae.start*De:0,yn=Ae!==null?Ae.count*De:1/0,bn=Math.max(Fe,Ve),Mn=Math.min(xn,Fe+yi,Ve+yn)-1,Jt=Math.max(0,Mn-bn+1);if(Jt!==0){if(X.isMesh)I.wireframe===!0?(de.setLineWidth(I.wireframeLinewidth*he()),qe.setMode(1)):qe.setMode(4);else if(X.isLine){let Ye=I.linewidth;Ye===void 0&&(Ye=1),de.setLineWidth(Ye*he()),X.isLineSegments?qe.setMode(1):X.isLineLoop?qe.setMode(2):qe.setMode(3)}else X.isPoints?qe.setMode(0):X.isSprite&&qe.setMode(4);if(X.isInstancedMesh)qe.renderInstances(bn,Jt,X.count);else if(k.isInstancedBufferGeometry){const Ye=Math.min(k.instanceCount,k._maxInstanceCount);qe.renderInstances(bn,Jt,Ye)}else qe.render(bn,Jt)}},this.compile=function(M,P){d=le.get(M),d.init(),g.push(d),M.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(_.physicallyCorrectLights),M.traverse(function(k){const I=k.material;if(I)if(Array.isArray(I))for(let X=0;X<I.length;X++){const Ae=I[X];ls(Ae,M,k)}else ls(I,M,k)}),g.pop(),d=null};let St=null;function kc(M){St&&St(M)}function Ha(){vn.stop()}function Va(){vn.start()}const vn=new Zl;vn.setAnimationLoop(kc),typeof window<"u"&&vn.setContext(window),this.setAnimationLoop=function(M){St=M,Pe.setAnimationLoop(M),M===null?vn.stop():vn.start()},Pe.addEventListener("sessionstart",Ha),Pe.addEventListener("sessionend",Va),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(P),P=Pe.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,P,S),d=le.get(M,g.length),d.init(),g.push(d),Te.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),ee.setFromProjectionMatrix(Te),ve=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,ve,P),h=Q.get(M,f.length),h.init(),f.push(h),Ga(M,P,0,_.sortObjects),h.finish(),_.sortObjects===!0&&h.sort(ie,B),ce===!0&&Me.beginShadows();const k=d.state.shadowsArray;if(_e.render(k,M,P),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(h,M),d.setupLights(_.physicallyCorrectLights),P.isArrayCamera){const I=P.cameras;for(let X=0,Ae=I.length;X<Ae;X++){const we=I[X];Wa(h,M,we,we.viewport)}}else Wa(h,M,P);S!==null&&(j.updateMultisampleRenderTarget(S),j.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(_,M,P),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1),me.resetDefaultState(),x=-1,E=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function Ga(M,P,k,I){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ee.intersectsSprite(M)){I&&Y.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const we=b.update(M),be=M.material;be.visible&&h.push(M,we,be,k,Y.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Ce.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ce.render.frame),!M.frustumCulled||ee.intersectsObject(M))){I&&Y.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const we=b.update(M),be=M.material;if(Array.isArray(be)){const Le=we.groups;for(let Ne=0,De=Le.length;Ne<De;Ne++){const Ie=Le[Ne],qe=be[Ie.materialIndex];qe&&qe.visible&&h.push(M,we,qe,k,Y.z,Ie)}}else be.visible&&h.push(M,we,be,k,Y.z,null)}}const Ae=M.children;for(let we=0,be=Ae.length;we<be;we++)Ga(Ae[we],P,k,I)}function Wa(M,P,k,I){const X=M.opaque,Ae=M.transmissive,we=M.transparent;d.setupLightsView(k),Ae.length>0&&Hc(X,P,k),I&&de.viewport(C.copy(I)),X.length>0&&or(X,P,k),Ae.length>0&&or(Ae,P,k),we.length>0&&or(we,P,k)}function Hc(M,P,k){if(ae===null){const we=a===!0&&oe.isWebGL2===!0?Xl:Bt;ae=new we(1024,1024,{generateMipmaps:!0,type:q.convert(ri)!==null?ri:un,minFilter:Kr,magFilter:tt,wrapS:yt,wrapT:yt})}const I=_.getRenderTarget();_.setRenderTarget(ae),_.clear();const X=_.toneMapping;_.toneMapping=An,or(M,P,k),_.toneMapping=X,j.updateMultisampleRenderTarget(ae),j.updateRenderTargetMipmap(ae),_.setRenderTarget(I)}function or(M,P,k){const I=P.isScene===!0?P.overrideMaterial:null;for(let X=0,Ae=M.length;X<Ae;X++){const we=M[X],be=we.object,Le=we.geometry,Ne=I===null?we.material:I,De=we.group;be.layers.test(k.layers)&&Vc(be,P,k,Le,Ne,De)}}function Vc(M,P,k,I,X,Ae){M.onBeforeRender(_,P,k,I,X,Ae),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(_,P,k,I,M,Ae),X.transparent===!0&&X.side===li?(X.side=$e,X.needsUpdate=!0,_.renderBufferDirect(k,P,I,X,M,Ae),X.side=qi,X.needsUpdate=!0,_.renderBufferDirect(k,P,I,X,M,Ae),X.side=li):_.renderBufferDirect(k,P,I,X,M,Ae),M.onAfterRender(_,P,k,I,X,Ae)}function ls(M,P,k){P.isScene!==!0&&(P=K);const I=V.get(M),X=d.state.lights,Ae=d.state.shadowsArray,we=X.state.version,be=H.getParameters(M,X.state,Ae,P,k),Le=H.getProgramCacheKey(be);let Ne=I.programs;I.environment=M.isMeshStandardMaterial?P.environment:null,I.fog=P.fog,I.envMap=(M.isMeshStandardMaterial?fe:te).get(M.envMap||I.environment),Ne===void 0&&(M.addEventListener("dispose",jt),Ne=new Map,I.programs=Ne);let De=Ne.get(Le);if(De!==void 0){if(I.currentProgram===De&&I.lightsStateVersion===we)return Xa(M,be),De}else be.uniforms=H.getUniforms(M),M.onBuild(k,be,_),M.onBeforeCompile(be,_),De=H.acquireProgram(be,Le),Ne.set(Le,De),I.uniforms=be.uniforms;const Ie=I.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=Me.uniform),Xa(M,be),I.needsLights=Xc(M),I.lightsStateVersion=we,I.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.directionalShadowMap.value=X.state.directionalShadowMap,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotShadowMap.value=X.state.spotShadowMap,Ie.spotShadowMatrix.value=X.state.spotShadowMatrix,Ie.pointShadowMap.value=X.state.pointShadowMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix);const qe=De.getUniforms(),xn=ln.seqWithValue(qe.seq,Ie);return I.currentProgram=De,I.uniformsList=xn,De}function Xa(M,P){const k=V.get(M);k.outputEncoding=P.outputEncoding,k.instancing=P.instancing,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents}function Gc(M,P,k,I,X){P.isScene!==!0&&(P=K),j.resetTextureUnits();const Ae=P.fog,we=I.isMeshStandardMaterial?P.environment:null,be=S===null?_.outputEncoding:S.texture.encoding,Le=(I.isMeshStandardMaterial?fe:te).get(I.envMap||we),Ne=I.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!I.normalMap&&!!k.attributes.tangent,Ie=!!k.morphAttributes.position,qe=!!k.morphAttributes.normal,xn=k.morphAttributes.position?k.morphAttributes.position.length:0,Fe=V.get(I),yi=d.state.lights;if(ce===!0&&(ve===!0||M!==E)){const Et=M===E&&I.id===x;Me.setState(I,M,Et)}let Ve=!1;I.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==yi.state.version||Fe.outputEncoding!==be||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Le||I.fog&&Fe.fog!==Ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Me.numPlanes||Fe.numIntersection!==Me.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==De||Fe.morphTargets!==Ie||Fe.morphNormals!==qe||oe.isWebGL2===!0&&Fe.morphTargetsCount!==xn)&&(Ve=!0):(Ve=!0,Fe.__version=I.version);let yn=Fe.currentProgram;Ve===!0&&(yn=ls(I,P,X));let bn=!1,Mn=!1,Jt=!1;const Ye=yn.getUniforms(),bi=Fe.uniforms;if(de.useProgram(yn.program)&&(bn=!0,Mn=!0,Jt=!0),I.id!==x&&(x=I.id,Mn=!0),bn||E!==M){if(Ye.setValue(G,"projectionMatrix",M.projectionMatrix),oe.logarithmicDepthBuffer&&Ye.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),E!==M&&(E=M,Mn=!0,Jt=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Et=Ye.map.cameraPosition;Et!==void 0&&Et.setValue(G,Y.setFromMatrixPosition(M.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ye.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||X.isSkinnedMesh)&&Ye.setValue(G,"viewMatrix",M.matrixWorldInverse)}if(X.isSkinnedMesh){Ye.setOptional(G,X,"bindMatrix"),Ye.setOptional(G,X,"bindMatrixInverse");const Et=X.skeleton;Et&&(oe.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),Ye.setValue(G,"boneTexture",Et.boneTexture,j),Ye.setValue(G,"boneTextureSize",Et.boneTextureSize)):Ye.setOptional(G,Et,"boneMatrices"))}return k&&(k.morphAttributes.position!==void 0||k.morphAttributes.normal!==void 0)&&pe.update(X,k,I,yn),(Mn||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,Ye.setValue(G,"receiveShadow",X.receiveShadow)),Mn&&(Ye.setValue(G,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&Wc(bi,Jt),Ae&&I.fog&&$.refreshFogUniforms(bi,Ae),$.refreshMaterialUniforms(bi,I,A,O,ae),ln.upload(G,Fe.uniformsList,bi,j)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ln.upload(G,Fe.uniformsList,bi,j),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ye.setValue(G,"center",X.center),Ye.setValue(G,"modelViewMatrix",X.modelViewMatrix),Ye.setValue(G,"normalMatrix",X.normalMatrix),Ye.setValue(G,"modelMatrix",X.matrixWorld),yn}function Wc(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function Xc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return S},this.setRenderTarget=function(M,P=0,k=0){S=M,p=P,m=k,M&&V.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M);let I=null,X=!1,Ae=!1;if(M){const be=M.texture;(be.isDataTexture3D||be.isDataTexture2DArray)&&(Ae=!0);const Le=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(I=Le[P],X=!0):M.isWebGLMultisampleRenderTarget?I=V.get(M).__webglMultisampledFramebuffer:I=Le,C.copy(M.viewport),y.copy(M.scissor),F=M.scissorTest}else C.copy(N).multiplyScalar(A).floor(),y.copy(U).multiplyScalar(A).floor(),F=D;if(de.bindFramebuffer(36160,I)&&oe.drawBuffers){let be=!1;if(M)if(M.isWebGLMultipleRenderTargets){const Le=M.texture;if(z.length!==Le.length||z[0]!==36064){for(let Ne=0,De=Le.length;Ne<De;Ne++)z[Ne]=36064+Ne;z.length=Le.length,be=!0}}else(z.length!==1||z[0]!==36064)&&(z[0]=36064,z.length=1,be=!0);else(z.length!==1||z[0]!==1029)&&(z[0]=1029,z.length=1,be=!0);be&&(oe.isWebGL2?G.drawBuffers(z):Se.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}if(de.viewport(C),de.scissor(y),de.setScissorTest(F),X){const be=V.get(M.texture);G.framebufferTexture2D(36160,36064,34069+P,be.__webglTexture,k)}else if(Ae){const be=V.get(M.texture),Le=P||0;G.framebufferTextureLayer(36160,36064,be.__webglTexture,k||0,Le)}x=-1},this.readRenderTargetPixels=function(M,P,k,I,X,Ae,we){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(be=be[we]),be){de.bindFramebuffer(36160,be);try{const Le=M.texture,Ne=Le.format,De=Le.type;if(Ne!==pt&&q.convert(Ne)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===ri&&(Se.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Se.has("EXT_color_buffer_float"));if(De!==un&&q.convert(De)!==G.getParameter(35738)&&!(De===sn&&(oe.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?P>=0&&P<=M.width-I&&k>=0&&k<=M.height-X&&G.readPixels(P,k,I,X,q.convert(Ne),q.convert(De),Ae):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Le=S!==null?V.get(S).__webglFramebuffer:null;de.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(M,P,k=0){const I=Math.pow(2,-k),X=Math.floor(P.image.width*I),Ae=Math.floor(P.image.height*I);let we=q.convert(P.format);oe.isWebGL2&&(we===6407&&(we=32849),we===6408&&(we=32856)),j.setTexture2D(P,0),G.copyTexImage2D(3553,k,we,M.x,M.y,X,Ae,0),de.unbindTexture()},this.copyTextureToTexture=function(M,P,k,I=0){const X=P.image.width,Ae=P.image.height,we=q.convert(k.format),be=q.convert(k.type);j.setTexture2D(k,0),G.pixelStorei(37440,k.flipY),G.pixelStorei(37441,k.premultiplyAlpha),G.pixelStorei(3317,k.unpackAlignment),P.isDataTexture?G.texSubImage2D(3553,I,M.x,M.y,X,Ae,we,be,P.image.data):P.isCompressedTexture?G.compressedTexSubImage2D(3553,I,M.x,M.y,P.mipmaps[0].width,P.mipmaps[0].height,we,P.mipmaps[0].data):G.texSubImage2D(3553,I,M.x,M.y,we,be,P.image),I===0&&k.generateMipmaps&&G.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(M,P,k,I,X=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=M.max.x-M.min.x+1,we=M.max.y-M.min.y+1,be=M.max.z-M.min.z+1,Le=q.convert(I.format),Ne=q.convert(I.type);let De;if(I.isDataTexture3D)j.setTexture3D(I,0),De=32879;else if(I.isDataTexture2DArray)j.setTexture2DArray(I,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,I.flipY),G.pixelStorei(37441,I.premultiplyAlpha),G.pixelStorei(3317,I.unpackAlignment);const Ie=G.getParameter(3314),qe=G.getParameter(32878),xn=G.getParameter(3316),Fe=G.getParameter(3315),yi=G.getParameter(32877),Ve=k.isCompressedTexture?k.mipmaps[0]:k.image;G.pixelStorei(3314,Ve.width),G.pixelStorei(32878,Ve.height),G.pixelStorei(3316,M.min.x),G.pixelStorei(3315,M.min.y),G.pixelStorei(32877,M.min.z),k.isDataTexture||k.isDataTexture3D?G.texSubImage3D(De,X,P.x,P.y,P.z,Ae,we,be,Le,Ne,Ve.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(De,X,P.x,P.y,P.z,Ae,we,be,Le,Ve.data)):G.texSubImage3D(De,X,P.x,P.y,P.z,Ae,we,be,Le,Ne,Ve),G.pixelStorei(3314,Ie),G.pixelStorei(32878,qe),G.pixelStorei(3316,xn),G.pixelStorei(3315,Fe),G.pixelStorei(32877,yi),X===0&&I.generateMipmaps&&G.generateMipmap(De),de.unbindTexture()},this.initTexture=function(M){j.setTexture2D(M,0),de.unbindTexture()},this.resetState=function(){p=0,m=0,S=null,de.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Oe.prototype.isWebGLRenderer=!0;class fg extends Oe{}fg.prototype.isWebGL1Renderer=!0;class Ea extends ze{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Ea.prototype.isScene=!0;class ir{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ji,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Nt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}ir.prototype.isInterleavedBuffer=!0;const Je=new T;class Ji{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ke(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ji(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Ji.prototype.isInterleavedBufferAttribute=!0;class hc extends ht{constructor(e){super(),this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}hc.prototype.isSpriteMaterial=!0;let Yn;const Li=new T,jn=new T,Jn=new T,Zn=new J,Ri=new J,dc=new ye,Ar=new T,Pi=new T,Cr=new T,Jo=new J,Hs=new J,Zo=new J;class pg extends ze{constructor(e){if(super(),this.type="Sprite",Yn===void 0){Yn=new Ge;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ir(t,5);Yn.setIndex([0,1,2,0,2,3]),Yn.setAttribute("position",new Ji(n,3,0,!1)),Yn.setAttribute("uv",new Ji(n,2,3,!1))}this.geometry=Yn,this.material=e!==void 0?e:new hc,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jn.setFromMatrixScale(this.matrixWorld),dc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jn.multiplyScalar(-Jn.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Lr(Ar.set(-.5,-.5,0),Jn,a,jn,i,s),Lr(Pi.set(.5,-.5,0),Jn,a,jn,i,s),Lr(Cr.set(.5,.5,0),Jn,a,jn,i,s),Jo.set(0,0),Hs.set(1,0),Zo.set(1,1);let o=e.ray.intersectTriangle(Ar,Pi,Cr,!1,Li);if(o===null&&(Lr(Pi.set(-.5,.5,0),Jn,a,jn,i,s),Hs.set(0,1),o=e.ray.intersectTriangle(Ar,Cr,Pi,!1,Li),o===null))return;const l=e.ray.origin.distanceTo(Li);l<e.near||l>e.far||t.push({distance:l,point:Li.clone(),uv:Qe.getUV(Li,Ar,Pi,Cr,Jo,Hs,Zo,new J),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}pg.prototype.isSprite=!0;function Lr(r,e,t,n,i,s){Zn.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ri.x=s*Zn.x-i*Zn.y,Ri.y=i*Zn.x+s*Zn.y):Ri.copy(Zn),r.copy(e),r.x+=Ri.x,r.y+=Ri.y,r.applyMatrix4(dc)}const $o=new T,Qo=new Ue,Ko=new Ue,mg=new T,el=new ye;class fc extends ft{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ye,this.bindMatrixInverse=new ye}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ue,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Qo.fromBufferAttribute(i.attributes.skinIndex,e),Ko.fromBufferAttribute(i.attributes.skinWeight,e),$o.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Ko.getComponent(s);if(a!==0){const o=Qo.getComponent(s);el.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(mg.copy($o).applyMatrix4(el),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}fc.prototype.isSkinnedMesh=!0;class gg extends ze{constructor(){super(),this.type="Bone"}}gg.prototype.isBone=!0;class _g extends st{constructor(e=null,t=1,n=1,i,s,a,o,l,c=tt,u=tt,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}_g.prototype.isDataTexture=!0;class ia extends Ke{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}ia.prototype.isInstancedBufferAttribute=!0;const tl=new ye,nl=new ye,Rr=[],Di=new ft;class vg extends ft{constructor(e,t,n){super(e,t),this.instanceMatrix=new ia(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Di.geometry=this.geometry,Di.material=this.material,Di.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,tl),nl.multiplyMatrices(n,tl),Di.matrixWorld=nl,Di.raycast(e,Rr);for(let a=0,o=Rr.length;a<o;a++){const l=Rr[a];l.instanceId=s,l.object=this,t.push(l)}Rr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}vg.prototype.isInstancedMesh=!0;class rr extends ht{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ge(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}rr.prototype.isLineBasicMaterial=!0;const il=new T,rl=new T,sl=new ye,Vs=new pi,Pr=new fi;class Ta extends ze{constructor(e=new Ge,t=new rr){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)il.fromBufferAttribute(t,i-1),rl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=il.distanceTo(rl);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=s,e.ray.intersectsSphere(Pr)===!1)return;sl.copy(i).invert(),Vs.copy(e.ray).applyMatrix4(sl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new T,u=new T,h=new T,d=new T,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,v=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let S=p,x=m-1;S<x;S+=f){const E=g.getX(S),C=g.getX(S+1);if(c.fromBufferAttribute(v,E),u.fromBufferAttribute(v,C),Vs.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),m=Math.min(v.count,a.start+a.count);for(let S=p,x=m-1;S<x;S+=f){if(c.fromBufferAttribute(v,S),u.fromBufferAttribute(v,S+1),Vs.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ta.prototype.isLine=!0;const al=new T,ol=new T;class Aa extends Ta{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)al.fromBufferAttribute(t,i),ol.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+al.distanceTo(ol);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Aa.prototype.isLineSegments=!0;class xg extends Ta{constructor(e,t){super(e,t),this.type="LineLoop"}}xg.prototype.isLineLoop=!0;class pc extends ht{constructor(e){super(),this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}pc.prototype.isPointsMaterial=!0;const ll=new ye,ra=new pi,Dr=new fi,Ir=new T;class yg extends ze{constructor(e=new Ge,t=new pc){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Dr.radius+=s,e.ray.intersectsSphere(Dr)===!1)return;ll.copy(i).invert(),ra.copy(e.ray).applyMatrix4(ll);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const v=c.getX(g);Ir.fromBufferAttribute(h,v),cl(Ir,v,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ir.fromBufferAttribute(h,g),cl(Ir,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}yg.prototype.isPoints=!0;function cl(r,e,t,n,i,s,a){const o=ra.distanceSqToPoint(r);if(o<t){const l=new T;ra.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class bg extends st{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.format=o!==void 0?o:si,this.minFilter=a!==void 0?a:Mt,this.magFilter=s!==void 0?s:Mt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}bg.prototype.isVideoTexture=!0;class Mg extends st{constructor(e,t,n,i,s,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Mg.prototype.isCompressedTexture=!0;class wg extends st{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.needsUpdate=!0}}wg.prototype.isCanvasTexture=!0;class Sg extends st{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:ai,u!==ai&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ai&&(n=Vr),n===void 0&&u===Yi&&(n=Hi),super(null,i,s,a,o,l,u,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:tt,this.minFilter=l!==void 0?l:tt,this.flipY=!1,this.generateMipmaps=!1}}Sg.prototype.isDepthTexture=!0;class wt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new J:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new T,i=[],s=[],a=[],o=new T,l=new ye;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(xt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ss extends wt{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new J,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}ss.prototype.isEllipseCurve=!0;class mc extends ss{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}mc.prototype.isArcCurve=!0;function Ca(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Fr=new T,Gs=new Ca,Ws=new Ca,Xs=new Ca;class gc extends wt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Fr.subVectors(i[0],i[1]).add(i[0]),c=Fr);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Fr.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),v<1e-4&&(v=_),Gs.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,v),Ws.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,v),Xs.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,v)}else this.curveType==="catmullrom"&&(Gs.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ws.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Xs.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Gs.calc(l),Ws.calc(l),Xs.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}gc.prototype.isCatmullRomCurve3=!0;function ul(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function Eg(r,e){const t=1-r;return t*t*e}function Tg(r,e){return 2*(1-r)*r*e}function Ag(r,e){return r*r*e}function Vi(r,e,t,n){return Eg(r,e)+Tg(r,t)+Ag(r,n)}function Cg(r,e){const t=1-r;return t*t*t*e}function Lg(r,e){const t=1-r;return 3*t*t*r*e}function Rg(r,e){return 3*(1-r)*r*r*e}function Pg(r,e){return r*r*r*e}function Gi(r,e,t,n,i){return Cg(r,e)+Lg(r,t)+Rg(r,n)+Pg(r,i)}class La extends wt{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,i.x,s.x,a.x,o.x),Gi(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}La.prototype.isCubicBezierCurve=!0;class _c extends wt{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,i.x,s.x,a.x,o.x),Gi(e,i.y,s.y,a.y,o.y),Gi(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}_c.prototype.isCubicBezierCurve3=!0;class as extends wt{constructor(e=new J,t=new J){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new J;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}as.prototype.isLineCurve=!0;class Dg extends wt{constructor(e=new T,t=new T){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ra extends wt{constructor(e=new J,t=new J,n=new J){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Vi(e,i.x,s.x,a.x),Vi(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ra.prototype.isQuadraticBezierCurve=!0;class vc extends wt{constructor(e=new T,t=new T,n=new T){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Vi(e,i.x,s.x,a.x),Vi(e,i.y,s.y,a.y),Vi(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}vc.prototype.isQuadraticBezierCurve3=!0;class Pa extends wt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(ul(o,l.x,c.x,u.x,h.x),ul(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}Pa.prototype.isSplineCurve=!0;var xc=Object.freeze({__proto__:null,ArcCurve:mc,CatmullRomCurve3:gc,CubicBezierCurve:La,CubicBezierCurve3:_c,EllipseCurve:ss,LineCurve:as,LineCurve3:Dg,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:vc,SplineCurve:Pa});class Ig extends wt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new as(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new xc[i.type]().fromJSON(i))}return this}}class sa extends Ig{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new as(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Ra(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new La(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new ss(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class sr extends sa{constructor(e){super(e),this.uuid=Nt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new sa().fromJSON(i))}return this}}const Fg={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=yc(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,f;if(n&&(s=Ug(r,e,s,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],d=r[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?1/f:0}return Zi(s,a,t,o,l,f),a}};function yc(r,e,t,n,i){let s,a;if(i===Zg(r,e,t,n)>0)for(s=e;s<t;s+=n)a=hl(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=hl(s,r[s],r[s+1],a);return a&&os(a,a.next)&&(Qi(a),a=a.next),a}function dn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(os(t,t.next)||Xe(t.prev,t,t.next)===0)){if(Qi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zi(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Wg(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Bg(r,n,i,s):Ng(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Qi(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=zg(dn(r),e,t),Zi(r,e,t,n,i,s,2)):a===2&&Og(r,e,t,n,i,s):Zi(dn(r),e,t,n,i,s,1);break}}}function Ng(r){const e=r.prev,t=r,n=r.next;if(Xe(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(ni(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Xe(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Bg(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Xe(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,u=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=aa(o,l,e,t,n),d=aa(c,u,e,t,n);let f=r.prevZ,g=r.nextZ;for(;f&&f.z>=h&&g&&g.z<=d;){if(f!==r.prev&&f!==r.next&&ni(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&Xe(f.prev,f,f.next)>=0||(f=f.prevZ,g!==r.prev&&g!==r.next&&ni(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&Xe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=h;){if(f!==r.prev&&f!==r.next&&ni(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&Xe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&ni(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&Xe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function zg(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!os(i,s)&&bc(i,n,n.next,s)&&$i(i,s)&&$i(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Qi(n),Qi(n.next),n=r=s),n=n.next}while(n!==r);return dn(n)}function Og(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Yg(a,o)){let l=Mc(a,o);a=dn(a,a.next),l=dn(l,l.next),Zi(a,e,t,n,i,s),Zi(l,e,t,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function Ug(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=yc(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(qg(c));for(i.sort(kg),s=0;s<i.length;s++)Hg(i[s],t),t=dn(t,t.next);return t}function kg(r,e){return r.x-e.x}function Hg(r,e){if(e=Vg(r,e),e){const t=Mc(e,r);dn(e,e.next),dn(t,t.next)}}function Vg(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let u=1/0,h;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&ni(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),$i(t,r)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Gg(a,t)))&&(a=t,u=h)),t=t.next;while(t!==o);return a}function Gg(r,e){return Xe(r.prev,r,e.prev)<0&&Xe(e.next,r,r.next)<0}function Wg(r,e,t,n){let i=r;do i.z===null&&(i.z=aa(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Xg(i)}function Xg(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function aa(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function qg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ni(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function Yg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!jg(r,e)&&($i(r,e)&&$i(e,r)&&Jg(r,e)&&(Xe(r.prev,r,e.prev)||Xe(r,e.prev,e))||os(r,e)&&Xe(r.prev,r,r.next)>0&&Xe(e.prev,e,e.next)>0)}function Xe(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function os(r,e){return r.x===e.x&&r.y===e.y}function bc(r,e,t,n){const i=Br(Xe(r,e,t)),s=Br(Xe(r,e,n)),a=Br(Xe(t,n,r)),o=Br(Xe(t,n,e));return!!(i!==s&&a!==o||i===0&&Nr(r,t,e)||s===0&&Nr(r,n,e)||a===0&&Nr(t,r,n)||o===0&&Nr(t,e,n))}function Nr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Br(r){return r>0?1:r<0?-1:0}function jg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&bc(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function $i(r,e){return Xe(r.prev,r,r.next)<0?Xe(r,e,r.next)>=0&&Xe(r,r.prev,e)>=0:Xe(r,e,r.prev)<0||Xe(r,r.next,e)<0}function Jg(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Mc(r,e){const t=new oa(r.i,r.x,r.y),n=new oa(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function hl(r,e,t,n){const i=new oa(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function oa(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zg(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class cn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return cn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];dl(e),fl(n,e);let a=e.length;t.forEach(dl);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,fl(n,t[l]);const o=Fg.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function dl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function fl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class _i extends Ge{constructor(e=new sr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ze(i,3)),this.setAttribute("uv",new Ze(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:$g;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let S,x=!1,E,C,y,F;p&&(S=p.getSpacedPoints(u),x=!0,d=!1,E=p.computeFrenetFrames(u,!1),C=new T,y=new T,F=new T),d||(v=0,f=0,g=0,_=0);const Z=o.extractPoints(c);let O=Z.shape;const A=Z.holes;if(!cn.isClockWise(O)){O=O.reverse();for(let V=0,j=A.length;V<j;V++){const te=A[V];cn.isClockWise(te)&&(A[V]=te.reverse())}}const B=cn.triangulateShape(O,A),N=O;for(let V=0,j=A.length;V<j;V++){const te=A[V];O=O.concat(te)}function U(V,j,te){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(te).add(V)}const D=O.length,z=B.length;function ee(V,j,te){let fe,re,w;const b=V.x-j.x,H=V.y-j.y,$=te.x-V.x,Q=te.y-V.y,le=b*b+H*H,Me=b*Q-H*$;if(Math.abs(Me)>Number.EPSILON){const _e=Math.sqrt(le),Ee=Math.sqrt($*$+Q*Q),pe=j.x-H/_e,L=j.y+b/_e,se=te.x-Q/Ee,q=te.y+$/Ee,me=((se-pe)*Q-(q-L)*$)/(b*Q-H*$);fe=pe+b*me-V.x,re=L+H*me-V.y;const ue=fe*fe+re*re;if(ue<=2)return new J(fe,re);w=Math.sqrt(ue/2)}else{let _e=!1;b>Number.EPSILON?$>Number.EPSILON&&(_e=!0):b<-Number.EPSILON?$<-Number.EPSILON&&(_e=!0):Math.sign(H)===Math.sign(Q)&&(_e=!0),_e?(fe=-H,re=b,w=Math.sqrt(le)):(fe=b,re=H,w=Math.sqrt(le/2))}return new J(fe/w,re/w)}const ce=[];for(let V=0,j=N.length,te=j-1,fe=V+1;V<j;V++,te++,fe++)te===j&&(te=0),fe===j&&(fe=0),ce[V]=ee(N[V],N[te],N[fe]);const ve=[];let ae,Te=ce.concat();for(let V=0,j=A.length;V<j;V++){const te=A[V];ae=[];for(let fe=0,re=te.length,w=re-1,b=fe+1;fe<re;fe++,w++,b++)w===re&&(w=0),b===re&&(b=0),ae[fe]=ee(te[fe],te[w],te[b]);ve.push(ae),Te=Te.concat(ae)}for(let V=0;V<v;V++){const j=V/v,te=f*Math.cos(j*Math.PI/2),fe=g*Math.sin(j*Math.PI/2)+_;for(let re=0,w=N.length;re<w;re++){const b=U(N[re],ce[re],fe);xe(b.x,b.y,-te)}for(let re=0,w=A.length;re<w;re++){const b=A[re];ae=ve[re];for(let H=0,$=b.length;H<$;H++){const Q=U(b[H],ae[H],fe);xe(Q.x,Q.y,-te)}}}const Y=g+_;for(let V=0;V<D;V++){const j=d?U(O[V],Te[V],Y):O[V];x?(y.copy(E.normals[0]).multiplyScalar(j.x),C.copy(E.binormals[0]).multiplyScalar(j.y),F.copy(S[0]).add(y).add(C),xe(F.x,F.y,F.z)):xe(j.x,j.y,0)}for(let V=1;V<=u;V++)for(let j=0;j<D;j++){const te=d?U(O[j],Te[j],Y):O[j];x?(y.copy(E.normals[V]).multiplyScalar(te.x),C.copy(E.binormals[V]).multiplyScalar(te.y),F.copy(S[V]).add(y).add(C),xe(F.x,F.y,F.z)):xe(te.x,te.y,h/u*V)}for(let V=v-1;V>=0;V--){const j=V/v,te=f*Math.cos(j*Math.PI/2),fe=g*Math.sin(j*Math.PI/2)+_;for(let re=0,w=N.length;re<w;re++){const b=U(N[re],ce[re],fe);xe(b.x,b.y,h+te)}for(let re=0,w=A.length;re<w;re++){const b=A[re];ae=ve[re];for(let H=0,$=b.length;H<$;H++){const Q=U(b[H],ae[H],fe);x?xe(Q.x,Q.y+S[u-1].y,S[u-1].x+te):xe(Q.x,Q.y,h+te)}}}K(),he();function K(){const V=i.length/3;if(d){let j=0,te=D*j;for(let fe=0;fe<z;fe++){const re=B[fe];Se(re[2]+te,re[1]+te,re[0]+te)}j=u+v*2,te=D*j;for(let fe=0;fe<z;fe++){const re=B[fe];Se(re[0]+te,re[1]+te,re[2]+te)}}else{for(let j=0;j<z;j++){const te=B[j];Se(te[2],te[1],te[0])}for(let j=0;j<z;j++){const te=B[j];Se(te[0]+D*u,te[1]+D*u,te[2]+D*u)}}n.addGroup(V,i.length/3-V,0)}function he(){const V=i.length/3;let j=0;G(N,j),j+=N.length;for(let te=0,fe=A.length;te<fe;te++){const re=A[te];G(re,j),j+=re.length}n.addGroup(V,i.length/3-V,1)}function G(V,j){let te=V.length;for(;--te>=0;){const fe=te;let re=te-1;re<0&&(re=V.length-1);for(let w=0,b=u+v*2;w<b;w++){const H=D*w,$=D*(w+1),Q=j+fe+H,le=j+re+H,Me=j+re+$,_e=j+fe+$;oe(Q,le,Me,_e)}}}function xe(V,j,te){l.push(V),l.push(j),l.push(te)}function Se(V,j,te){de(V),de(j),de(te);const fe=i.length/3,re=m.generateTopUV(n,i,fe-3,fe-2,fe-1);Ce(re[0]),Ce(re[1]),Ce(re[2])}function oe(V,j,te,fe){de(V),de(j),de(fe),de(j),de(te),de(fe);const re=i.length/3,w=m.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);Ce(w[0]),Ce(w[1]),Ce(w[3]),Ce(w[1]),Ce(w[2]),Ce(w[3])}function de(V){i.push(l[V*3+0]),i.push(l[V*3+1]),i.push(l[V*3+2])}function Ce(V){s.push(V.x),s.push(V.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qg(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new xc[i.type]().fromJSON(i)),new _i(n,e.options)}}const $g={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new J(s,a),new J(o,l),new J(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],_=e[s*3],v=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-h),new J(d,1-g),new J(_,1-p)]:[new J(o,1-l),new J(u,1-h),new J(f,1-g),new J(v,1-p)]}};function Qg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Da extends Ge{constructor(e=new sr([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ze(i,3)),this.setAttribute("normal",new Ze(s,3)),this.setAttribute("uv",new Ze(a,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;cn.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,p=g.length;v<p;v++){const m=g[v];cn.isClockWise(m)===!0&&(g[v]=m.reverse())}const _=cn.triangulateShape(f,g);for(let v=0,p=g.length;v<p;v++){const m=g[v];f=f.concat(m)}for(let v=0,p=f.length;v<p;v++){const m=f[v];i.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let v=0,p=_.length;v<p;v++){const m=_[v],S=m[0]+h,x=m[1]+h,E=m[2]+h;n.push(S,x,E),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Kg(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Da(n,e.curveSegments)}}function Kg(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Ia extends Ge{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new T,d=new T,f=[],g=[],_=[],v=[];for(let p=0;p<=n;p++){const m=[],S=p/n;let x=0;p==0&&a==0?x=.5/t:p==n&&l==Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const C=E/t;h.x=-e*Math.cos(i+C*s)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(i+C*s)*Math.sin(a+S*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),v.push(C+x,1-S),m.push(c++)}u.push(m)}for(let p=0;p<n;p++)for(let m=0;m<t;m++){const S=u[p][m+1],x=u[p][m],E=u[p+1][m],C=u[p+1][m+1];(p!==0||a>0)&&f.push(S,x,C),(p!==n-1||l<Math.PI)&&f.push(x,E,C)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(v,2))}static fromJSON(e){return new Ia(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class e_ extends ht{constructor(e){super(),this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}e_.prototype.isShadowMaterial=!0;class wc extends ht{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}wc.prototype.isMeshStandardMaterial=!0;class t_ extends wc{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}t_.prototype.isMeshPhysicalMaterial=!0;class n_ extends ht{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}n_.prototype.isMeshPhongMaterial=!0;class i_ extends ht{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}i_.prototype.isMeshToonMaterial=!0;class r_ extends ht{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}r_.prototype.isMeshNormalMaterial=!0;class s_ extends ht{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}s_.prototype.isMeshLambertMaterial=!0;class a_ extends ht{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}a_.prototype.isMeshMatcapMaterial=!0;class o_ extends rr{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}o_.prototype.isLineDashedMaterial=!0;const We={arraySlice:function(r,e,t){return We.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<t||g>=n)){h.push(c.times[f]);for(let _=0;_<u;++_)d.push(c.values[f*u+_])}}h.length!==0&&(c.times=We.convertArray(h,c.times.constructor),c.values=We.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=o.times.length-1;let _;if(s<=o.times[0]){const p=u,m=h-u;_=We.arraySlice(o.values,p,m)}else if(s>=o.times[g]){const p=g*h+u,m=p+h-u;_=We.arraySlice(o.values,p,m)}else{const p=o.createInterpolant(),m=u,S=h-u;p.evaluate(s),_=We.arraySlice(p.resultBuffer,m,S)}l==="quaternion"&&new gt().fromArray(_).normalize().conjugate().toArray(_);const v=c.times.length;for(let p=0;p<v;++p){const m=p*f+d;if(l==="quaternion")gt.multiplyQuaternionsFlat(c.values,m,_,0,c.values,m);else{const S=f-d*2;for(let x=0;x<S;++x)c.values[m+x]-=_[x]}}}return r.blendMode=kl,r}};class fn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}fn.prototype.beforeStart_=fn.prototype.copySampleValue_;fn.prototype.afterEnd_=fn.prototype.copySampleValue_;class l_ extends fn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ei,endingEnd:ei}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ti:s=e,o=2*t-n;break;case Xr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ti:a=e,l=2*n-t;break;case Xr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,v=_*g,p=-d*v+2*d*_-d*g,m=(1+d)*v+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*v+(1.5+f)*_+.5*g,x=f*v-f*_;for(let E=0;E!==o;++E)s[E]=p*a[u+E]+m*a[c+E]+S*a[l+E]+x*a[h+E];return s}}class Sc extends fn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class c_ extends fn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ot{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=We.convertArray(t,this.TimeBufferType),this.values=We.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:We.convertArray(e.times,Array),values:We.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new c_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new l_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case Wr:t=this.InterpolantFactoryMethodLinear;break;case us:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return us}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=We.arraySlice(n,s,a),this.values=We.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&We.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=We.arraySlice(this.times),t=We.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===us,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=We.arraySlice(e,0,a),this.values=We.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=We.arraySlice(this.times,0),t=We.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ot.prototype.TimeBufferType=Float32Array;Ot.prototype.ValueBufferType=Float32Array;Ot.prototype.DefaultInterpolation=Wr;class vi extends Ot{}vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Gr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ec extends Ot{}Ec.prototype.ValueTypeName="color";class Yr extends Ot{}Yr.prototype.ValueTypeName="number";class u_ extends fn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)gt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ar extends Ot{InterpolantFactoryMethodLinear(e){return new u_(this.times,this.values,this.getValueSize(),e)}}ar.prototype.ValueTypeName="quaternion";ar.prototype.DefaultInterpolation=Wr;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class xi extends Ot{}xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Gr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends Ot{}jr.prototype.ValueTypeName="vector";class pl{constructor(e,t=-1,n,i=ma){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(d_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Ot.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=We.getKeyframeOrder(l);l=We.sortedArray(l,1,u),c=We.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Yr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const v=[],p=[];We.flattenJSON(f,v,p,g),v.length!==0&&_.push(new h(d,v,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const v=[],p=[];for(let m=0;m!==d[g].morphTargets.length;++m){const S=d[g];v.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new Yr(".morphTargetInfluence["+_+"]",v,p))}l=f.length*(a||1)}else{const f=".bones["+t[h].name+"]";n(jr,f+".position",d,"pos",i),n(ar,f+".quaternion",d,"rot",i),n(jr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function h_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return Ec;case"quaternion":return ar;case"bool":case"boolean":return vi;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function d_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=h_(r.type);if(r.times===void 0){const t=[],n=[];We.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ui={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class f_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const p_=new f_;class mn{constructor(e){this.manager=e!==void 0?e:p_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Xt={};class m_ extends mn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ui.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xt[e]!==void 0){Xt[e].push({onLoad:t,onProgress:n,onError:i});return}Xt[e]=[],Xt[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(o=>{if(o.status===200||o.status===0){o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=Xt[e],c=o.body.getReader(),u=o.headers.get("Content-Length"),h=u?parseInt(u):0,d=h!==0;let f=0;return new ReadableStream({start(g){_();function _(){c.read().then(({done:v,value:p})=>{if(v)g.close();else{f+=p.byteLength;const m=new ProgressEvent("progress",{lengthComputable:d,loaded:f,total:h});for(let S=0,x=l.length;S<x;S++){const E=l[S];E.onProgress&&E.onProgress(m)}g.enqueue(p),_()}})}}})}else throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{const l=new Response(o);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(o=>{ui.add(e,o);const l=Xt[e];delete Xt[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onLoad&&h.onLoad(o)}this.manager.itemEnd(e)}).catch(o=>{const l=Xt[e];delete Xt[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onError&&h.onError(o)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Tc extends mn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ui.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=es("img");function l(){u(),ui.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class g_ extends mn{constructor(e){super(e)}load(e,t,n,i){const s=new ns,a=new Tc(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class __ extends mn{constructor(e){super(e)}load(e,t,n,i){const s=new st,a=new Tc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class zt extends ze{constructor(e,t=1){super(),this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}zt.prototype.isLight=!0;class v_ extends zt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.groundColor=new ge(t)}copy(e){return zt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}v_.prototype.isHemisphereLight=!0;const ml=new ye,gl=new T,_l=new T;class Fa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(gl),_l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_l),t.updateMatrixWorld(),ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ac extends Fa{constructor(){super(new dt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=ta*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Ac.prototype.isSpotLightShadow=!0;class x_ extends zt{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.target=new ze,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new Ac}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}x_.prototype.isSpotLight=!0;const vl=new ye,Ii=new T,qs=new T;class Cc extends Fa{constructor(){super(new dt(90,1,.5,500)),this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ii.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ii),qs.copy(n.position),qs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qs),n.updateMatrixWorld(),i.makeTranslation(-Ii.x,-Ii.y,-Ii.z),vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl)}}Cc.prototype.isPointLightShadow=!0;class Lc extends zt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Lc.prototype.isPointLight=!0;class Rc extends Fa{constructor(){super(new ba(-5,5,5,-5,.5,500))}}Rc.prototype.isDirectionalLightShadow=!0;class y_ extends zt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.target=new ze,this.shadow=new Rc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}y_.prototype.isDirectionalLight=!0;class b_ extends zt{constructor(e,t){super(e,t),this.type="AmbientLight"}}b_.prototype.isAmbientLight=!0;class M_ extends zt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}M_.prototype.isRectAreaLight=!0;class Pc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Pc.prototype.isSphericalHarmonics3=!0;class Na extends zt{constructor(e=new Pc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Na.prototype.isLightProbe=!0;class w_{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class S_ extends Ge{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}S_.prototype.isInstancedBufferGeometry=!0;class E_ extends mn{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ui.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ui.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}E_.prototype.isImageBitmapLoader=!0;let zr;const T_={getContext:function(){return zr===void 0&&(zr=new(window.AudioContext||window.webkitAudioContext)),zr},setContext:function(r){zr=r}};class A_ extends mn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new m_(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);T_.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class C_ extends Na{constructor(e,t,n=1){super(void 0,n);const i=new ge().set(e),s=new ge().set(t),a=new T(i.r,i.g,i.b),o=new T(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}C_.prototype.isHemisphereLightProbe=!0;class L_ extends Na{constructor(e,t=1){super(void 0,t);const n=new ge().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}L_.prototype.isAmbientLightProbe=!0;class R_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xl(){return(typeof performance>"u"?Date:performance).now()}class P_ extends ze{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class D_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){gt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;gt.multiplyQuaternionsFlat(e,a,e,t,e,n),gt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ba="\\[\\]\\.:\\/",I_=new RegExp("["+Ba+"]","g"),za="[^"+Ba+"]",F_="[^"+Ba.replace("\\.","")+"]",N_=/((?:WC+[\/:])*)/.source.replace("WC",za),B_=/(WCOD+)?/.source.replace("WCOD",F_),z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",za),O_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",za),U_=new RegExp("^"+N_+B_+z_+O_+"$"),k_=["material","materials","bones"];class H_{constructor(e,t,n){const i=n||Be.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Be{constructor(e,t,n){this.path=t,this.parsedPath=n||Be.parseTrackName(t),this.node=Be.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Be.Composite(e,t,n):new Be(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(I_,"")}static parseTrackName(e){const t=U_.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);k_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Be.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Be.Composite=H_;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class V_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:ei,endingEnd:ei};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=yh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case kl:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case ma:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===bh;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===xh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ti,i.endingEnd=ti):(e?i.endingStart=this.zeroSlopeAtStart?ti:ei:i.endingStart=Xr,t?i.endingEnd=this.zeroSlopeAtEnd?ti:ei:i.endingEnd=Xr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class G_ extends Rn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let g=u[f];if(g!==void 0)a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new D_(Be.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Sc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?pl.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ma),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new V_(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?pl.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}G_.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class W_ extends ir{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}W_.prototype.isInstancedInterleavedBuffer=!0;const rn=new T,Or=new ye,Ys=new ye;class X_ extends Aa{constructor(e){const t=Dc(e),n=new Ge,i=[],s=[],a=new ge(0,0,1),o=new ge(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Ze(i,3)),n.setAttribute("color",new Ze(s,3));const l=new rr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ys.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Or.multiplyMatrices(Ys,o.matrixWorld),rn.setFromMatrixPosition(Or),i.setXYZ(a,rn.x,rn.y,rn.z),Or.multiplyMatrices(Ys,o.parent.matrixWorld),rn.setFromMatrixPosition(Or),i.setXYZ(a+1,rn.x,rn.y,rn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Dc(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Dc(r.children[t]));return e}class q_ extends Aa{constructor(e=10,t=10,n=4473924,i=8947848){n=new ge(n),i=new ge(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new Ge;u.setAttribute("position",new Ze(l,3)),u.setAttribute("color",new Ze(c,3));const h=new rr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const Y_=new Float32Array(1);new Int32Array(Y_.buffer);wt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(wt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};sa.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};q_.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};X_.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};mn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),w_.extractUrlBase(r)};mn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Lt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Lt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Lt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Lt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Lt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};fi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};is.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};rt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};rt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};rt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};rt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};rt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};rt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};ye.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};ye.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};ye.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new T().setFromMatrixColumn(this,3)};ye.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};ye.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ye.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ye.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ye.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ye.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};ye.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ye.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ye.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ye.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ye.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ye.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ye.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ye.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ye.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};ye.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Yt.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};gt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};gt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};pi.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};pi.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};pi.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Qe.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Qe.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};Qe.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};Qe.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};Qe.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};Qe.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Qe.getBarycoord(r,e,t,n,i)};Qe.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Qe.getNormal(r,e,t,n)};sr.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};sr.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new _i(this,r)};sr.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Da(this,r)};J.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};J.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};J.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};T.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};T.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};T.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};T.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};T.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};T.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};T.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};T.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};T.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ue.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Ue.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ze.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};ze.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};ze.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};ze.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};ze.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(ze.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});ft.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(ft.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Mh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});fc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};dt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(zt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(Ke.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===qr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(qr)}}});Ke.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?qr:ji),this};Ke.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ke.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ge.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Ge.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new Ke(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};Ge.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};Ge.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ge.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ge.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Ge.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ge.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ir.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?qr:ji),this};ir.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};_i.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};_i.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};_i.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Ea.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ht.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ge}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Bl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Cn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Oe.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};Oe.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Oe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Oe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Oe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Oe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Oe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Oe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Oe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Oe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Oe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Oe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Oe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Oe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Oe.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Oe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Oe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Oe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Oe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Oe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Oe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Oe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Oe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Oe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Oe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Oe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Ln:ct}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(cc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Bt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});P_.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new A_().load(r,function(n){e.setBuffer(n)}),this};xa.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};xa.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};di.crossOrigin=void 0;di.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new __;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};di.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new g_;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};di.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};di.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);function j_(r){if(r&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function ii(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),a=r.a,o=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+a+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+a+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var yl=Array.prototype.forEach,Fi=Array.prototype.slice,W={BREAK:{},extend:function(e){return this.each(Fi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(Fi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=Fi.call(arguments);return function(){for(var t=Fi.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(yl&&e.forEach&&e.forEach===yl)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var a in e)if(t.call(n,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,a=arguments;function o(){i=null,n||e.apply(s,a)}var l=n||!i;clearTimeout(i),i=setTimeout(o,t),l&&e.apply(s,a)}},toArray:function(e){return e.toArray?e.toArray():Fi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},J_=[{litmus:W.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ii},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ii},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ii},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ii}}},{litmus:W.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:W.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:W.isObject,conversions:{RGBA_OBJ:{read:function(e){return W.isNumber(e.r)&&W.isNumber(e.g)&&W.isNumber(e.b)&&W.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return W.isNumber(e.r)&&W.isNumber(e.g)&&W.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return W.isNumber(e.h)&&W.isNumber(e.s)&&W.isNumber(e.v)&&W.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return W.isNumber(e.h)&&W.isNumber(e.s)&&W.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ni=void 0,Ur=void 0,la=function(){Ur=!1;var e=arguments.length>1?W.toArray(arguments):arguments[0];return W.each(J_,function(t){if(t.litmus(e))return W.each(t.conversions,function(n,i){if(Ni=n.read(e),Ur===!1&&Ni!==!1)return Ur=Ni,Ni.conversionName=i,Ni.conversion=n,W.BREAK}),W.BREAK}),Ur},bl=void 0,Jr={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),a=n*(1-t),o=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,a],[o,n,a],[a,n,l],[a,o,n],[l,a,n],[n,a,o]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),a=s-i,o=void 0,l=void 0;if(s!==0)l=a/s;else return{h:NaN,s:0,v:0};return e===s?o=(t-n)/a:t===s?o=2+(n-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(bl=t*8)|e&~(255<<bl)}},Z_=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Rt=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Pt=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),pn=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var a=i.get;return a===void 0?void 0:a.call(n)}},gn=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},_n=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},nt=function(){function r(){if(Rt(this,r),this.__state=la.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Pt(r,[{key:"toString",value:function(){return ii(this)}},{key:"toHexString",value:function(){return ii(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Oa(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(nt.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(nt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Ua(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(nt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(nt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}nt.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=Jr.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")W.extend(r.__state,Jr.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};nt.recalculateHSV=function(r){var e=Jr.rgb_to_hsv(r.r,r.g,r.b);W.extend(r.__state,{s:e.s,v:e.v}),W.isNaN(e.h)?W.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};nt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Oa(nt.prototype,"r",2);Oa(nt.prototype,"g",1);Oa(nt.prototype,"b",0);Ua(nt.prototype,"h");Ua(nt.prototype,"s");Ua(nt.prototype,"v");Object.defineProperty(nt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(nt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Jr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Pn=function(){function r(e,t){Rt(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Pt(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),$_={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Ic={};W.each($_,function(r,e){W.each(r,function(t){Ic[t]=e})});var Q_=/(\d+(\.\d+)?)px/;function Dt(r){if(r==="0"||W.isUndefined(r))return 0;var e=r.match(Q_);return W.isNull(e)?0:parseFloat(e[1])}var R={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;W.isUndefined(s)&&(s=!0),W.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},a=Ic[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;W.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}W.defaults(o,i),e.dispatchEvent(o)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),R},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),R},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return R},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return R},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Dt(t["border-left-width"])+Dt(t["border-right-width"])+Dt(t["padding-left"])+Dt(t["padding-right"])+Dt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Dt(t["border-top-width"])+Dt(t["border-bottom-width"])+Dt(t["padding-top"])+Dt(t["padding-bottom"])+Dt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Fc=function(r){gn(e,r);function e(t,n){Rt(this,e);var i=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function a(){s.setValue(!s.__prev)}return R.bind(i.__checkbox,"change",a,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Pt(e,[{key:"setValue",value:function(n){var i=pn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),pn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Pn),K_=function(r){gn(e,r);function e(t,n,i){Rt(this,e);var s=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i,o=s;if(s.__select=document.createElement("select"),W.isArray(a)){var l={};W.each(a,function(c){l[c]=c}),a=l}return W.each(a,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),o.__select.appendChild(h)}),s.updateDisplay(),R.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return Pt(e,[{key:"setValue",value:function(n){var i=pn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return R.isActive(this.__select)?this:(this.__select.value=this.getValue(),pn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Pn),ev=function(r){gn(e,r);function e(t,n){Rt(this,e);var i=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function a(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),R.bind(i.__input,"keyup",a),R.bind(i.__input,"change",a),R.bind(i.__input,"blur",o),R.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Pt(e,[{key:"updateDisplay",value:function(){return R.isActive(this.__input)||(this.__input.value=this.getValue()),pn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Pn);function Ml(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Nc=function(r){gn(e,r);function e(t,n,i){Rt(this,e);var s=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i||{};return s.__min=a.min,s.__max=a.max,s.__step=a.step,W.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Ml(s.__impliedStep),s}return Pt(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),pn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Ml(n),this}}]),e}(Pn);function tv(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Zr=function(r){gn(e,r);function e(t,n,i){Rt(this,e);var s=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var a=s,o=void 0;function l(){var g=parseFloat(a.__input.value);W.isNaN(g)||a.setValue(g)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){c()}function h(g){var _=o-g.clientY;a.setValue(a.getValue()+_*a.__impliedStep),o=g.clientY}function d(){R.unbind(window,"mousemove",h),R.unbind(window,"mouseup",d),c()}function f(g){R.bind(window,"mousemove",h),R.bind(window,"mouseup",d),o=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),R.bind(s.__input,"change",l),R.bind(s.__input,"blur",u),R.bind(s.__input,"mousedown",f),R.bind(s.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Pt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():tv(this.getValue(),this.__precision),pn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Nc);function wl(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var ca=function(r){gn(e,r);function e(t,n,i,s,a){Rt(this,e);var o=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),R.bind(o.__background,"mousedown",c),R.bind(o.__background,"touchstart",d),R.addClass(o.__background,"slider"),R.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),R.bind(window,"mousemove",u),R.bind(window,"mouseup",h),u(_)}function u(_){_.preventDefault();var v=l.__background.getBoundingClientRect();return l.setValue(wl(_.clientX,v.left,v.right,l.__min,l.__max)),!1}function h(){R.unbind(window,"mousemove",u),R.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(_){_.touches.length===1&&(R.bind(window,"touchmove",f),R.bind(window,"touchend",g),f(_))}function f(_){var v=_.touches[0].clientX,p=l.__background.getBoundingClientRect();l.setValue(wl(v,p.left,p.right,l.__min,l.__max))}function g(){R.unbind(window,"touchmove",f),R.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Pt(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",pn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Nc),Bc=function(r){gn(e,r);function e(t,n,i){Rt(this,e);var s=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,R.bind(s.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),R.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Pt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Pn),ua=function(r){gn(e,r);function e(t,n){Rt(this,e);var i=_n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new nt(i.getValue()),i.__temp=new nt(0);var s=i;i.domElement=document.createElement("div"),R.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",R.bind(i.__input,"keydown",function(_){_.keyCode===13&&h.call(this)}),R.bind(i.__input,"blur",h),R.bind(i.__selector,"mousedown",function(){R.addClass(this,"drag").bind(window,"mouseup",function(){R.removeClass(s.__selector,"drag")})}),R.bind(i.__selector,"touchstart",function(){R.addClass(this,"drag").bind(window,"touchend",function(){R.removeClass(s.__selector,"drag")})});var a=document.createElement("div");W.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),W.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),W.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),W.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),W.extend(a.style,{width:"100%",height:"100%",background:"none"}),Sl(a,"top","rgba(0,0,0,0)","#000"),W.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),iv(i.__hue_field),W.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),R.bind(i.__saturation_field,"mousedown",o),R.bind(i.__saturation_field,"touchstart",o),R.bind(i.__field_knob,"mousedown",o),R.bind(i.__field_knob,"touchstart",o),R.bind(i.__hue_field,"mousedown",l),R.bind(i.__hue_field,"touchstart",l);function o(_){f(_),R.bind(window,"mousemove",f),R.bind(window,"touchmove",f),R.bind(window,"mouseup",c),R.bind(window,"touchend",c)}function l(_){g(_),R.bind(window,"mousemove",g),R.bind(window,"touchmove",g),R.bind(window,"mouseup",u),R.bind(window,"touchend",u)}function c(){R.unbind(window,"mousemove",f),R.unbind(window,"touchmove",f),R.unbind(window,"mouseup",c),R.unbind(window,"touchend",c),d()}function u(){R.unbind(window,"mousemove",g),R.unbind(window,"touchmove",g),R.unbind(window,"mouseup",u),R.unbind(window,"touchend",u),d()}function h(){var _=la(this.value);_!==!1?(s.__color.__state=_,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(a),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function f(_){_.type.indexOf("touch")===-1&&_.preventDefault();var v=s.__saturation_field.getBoundingClientRect(),p=_.touches&&_.touches[0]||_,m=p.clientX,S=p.clientY,x=(m-v.left)/(v.right-v.left),E=1-(S-v.top)/(v.bottom-v.top);return E>1?E=1:E<0&&(E=0),x>1?x=1:x<0&&(x=0),s.__color.v=E,s.__color.s=x,s.setValue(s.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var v=s.__hue_field.getBoundingClientRect(),p=_.touches&&_.touches[0]||_,m=p.clientY,S=1-(m-v.top)/(v.bottom-v.top);return S>1?S=1:S<0&&(S=0),s.__color.h=S*360,s.setValue(s.__color.toOriginal()),!1}return i}return Pt(e,[{key:"updateDisplay",value:function(){var n=la(this.getValue());if(n!==!1){var i=!1;W.each(nt.COMPONENTS,function(o){if(!W.isUndefined(n[o])&&!W.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return i=!0,{}},this),i&&W.extend(this.__color.__state,n)}W.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,a=255-s;W.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Sl(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),W.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(Pn),nv=["-moz-","-o-","-webkit-","-ms-",""];function Sl(r,e,t,n){r.style.background="",W.each(nv,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function iv(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var rv={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},sv=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,av=function(e,t){var n=e[t];return W.isArray(arguments[2])||W.isObject(arguments[2])?new K_(e,t,arguments[2]):W.isNumber(n)?W.isNumber(arguments[2])&&W.isNumber(arguments[3])?W.isNumber(arguments[4])?new ca(e,t,arguments[2],arguments[3],arguments[4]):new ca(e,t,arguments[2],arguments[3]):W.isNumber(arguments[4])?new Zr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Zr(e,t,{min:arguments[2],max:arguments[3]}):W.isString(n)?new ev(e,t):W.isFunction(n)?new Bc(e,t,""):W.isBoolean(n)?new Fc(e,t):null};function ov(r){setTimeout(r,1e3/60)}var lv=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||ov,cv=function(){function r(){Rt(this,r),this.backgroundElement=document.createElement("div"),W.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),R.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),W.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;R.bind(this.backgroundElement,"click",function(){e.hide()})}return Pt(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),W.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",R.unbind(t.domElement,"webkitTransitionEnd",i),R.unbind(t.domElement,"transitionend",i),R.unbind(t.domElement,"oTransitionEnd",i)};R.bind(this.domElement,"webkitTransitionEnd",n),R.bind(this.domElement,"transitionend",n),R.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-R.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-R.getHeight(this.domElement)/2+"px"}}]),r}(),uv=j_(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);rv.inject(uv);var El="dg",Tl=72,Al=20,Ki="Default",Ui=function(){try{return!!window.localStorage}catch{return!1}}(),Wi=void 0,Cl=!0,Qn=void 0,js=!1,zc=[],He=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),R.addClass(this.domElement,El),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=W.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=W.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),W.isUndefined(n.load)?n.load={preset:Ki}:n.preset&&(n.load.preset=n.preset),W.isUndefined(n.parent)&&n.hideable&&zc.push(this),n.resizable=W.isUndefined(n.parent)&&n.resizable,n.autoPlace&&W.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Ui&&localStorage.getItem(Kn(this,"isLocal"))==="true",s=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,pv(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,fa(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?R.addClass(t.__ul,r.CLASS_CLOSED):R.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){Ui&&(i=d,d?R.bind(window,"unload",s):R.unbind(window,"unload",s),localStorage.setItem(Kn(t,"isLocal"),d))}}}),W.isUndefined(n.parent)){if(this.closed=n.closed||!1,R.addClass(this.domElement,r.CLASS_MAIN),R.makeSelectable(this.domElement,!1),Ui&&i){t.useLocalStorage=!0;var o=localStorage.getItem(Kn(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,R.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(R.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(R.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),R.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);R.addClass(l,"controller-name"),a=ka(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};R.addClass(this.__ul,r.CLASS_CLOSED),R.addClass(a,"title"),R.bind(a,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(W.isUndefined(n.parent)&&(Cl&&(Qn=document.createElement("div"),R.addClass(Qn,El),R.addClass(Qn,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Qn),Cl=!1),Qn.appendChild(this.domElement),R.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||fa(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},R.bind(window,"resize",this.__resizeHandler),R.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),R.bind(this.__ul,"transitionend",this.__resizeHandler),R.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&fv(this),s=function(){Ui&&localStorage.getItem(Kn(t,"isLocal"))==="true"&&localStorage.setItem(Kn(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,W.defer(function(){h.width-=1})}n.parent||u()};He.toggleHide=function(){js=!js,W.each(zc,function(r){r.domElement.style.display=js?"none":""})};He.CLASS_AUTO_PLACE="a";He.CLASS_AUTO_PLACE_CONTAINER="ac";He.CLASS_MAIN="main";He.CLASS_CONTROLLER_ROW="cr";He.CLASS_TOO_TALL="taller-than-window";He.CLASS_CLOSED="closed";He.CLASS_CLOSE_BUTTON="close-button";He.CLASS_CLOSE_TOP="close-top";He.CLASS_CLOSE_BOTTOM="close-bottom";He.CLASS_DRAG="drag";He.DEFAULT_WIDTH=245;He.TEXT_CLOSED="Close Controls";He.TEXT_OPEN="Open Controls";He._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===Tl||r.keyCode===Tl)&&He.toggleHide()};R.bind(window,"keydown",He._keydownHandler,!1);W.extend(He.prototype,{add:function(e,t){return Xi(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Xi(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;W.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Qn.removeChild(this.domElement);var e=this;W.each(this.__folders,function(t){e.removeFolder(t)}),R.unbind(window,"keydown",He._keydownHandler,!1),Ll(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new He(t);this.__folders[e]=n;var i=ka(this,n.domElement);return R.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Ll(e);var t=this;W.each(e.__folders,function(n){e.removeFolder(n)}),W.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=R.getOffset(e.__ul).top,n=0;W.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=R.getHeight(i))}),window.innerHeight-t-Al<n?(R.addClass(e.domElement,He.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Al+"px"):(R.removeClass(e.domElement,He.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&W.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:W.debounce(function(){this.onResize()},50),remember:function(){if(W.isUndefined(Wi)&&(Wi=new cv,Wi.domElement.innerHTML=sv),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;W.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&dv(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&fa(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=kr(this)),e.folders={},W.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=kr(this),ha(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ki]=kr(this,!0)),this.load.remembered[e]=kr(this),this.preset=e,da(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){W.each(this.__controllers,function(t){this.getRoot().load.remembered?Oc(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),W.each(this.__folders,function(t){t.revert(t)}),e||ha(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Uc(this.__listening)},updateDisplay:function(){W.each(this.__controllers,function(e){e.updateDisplay()}),W.each(this.__folders,function(e){e.updateDisplay()})}});function ka(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function Ll(r){R.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&R.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function ha(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function hv(r,e,t){if(t.__li=e,t.__gui=r,W.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),Xi(r,t.object,t.property,{before:o,factoryArgs:[W.toArray(arguments)]})}if(W.isArray(a)||W.isObject(a)){var l=t.__li.nextElementSibling;return t.remove(),Xi(r,t.object,t.property,{before:l,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof ca){var n=new Zr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});W.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var a=t[s],o=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),a.apply(t,l)}}),R.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Zr){var i=function(a){if(W.isNumber(t.__min)&&W.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Xi(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return a};t.min=W.compose(i,t.min),t.max=W.compose(i,t.max)}else t instanceof Fc?(R.bind(e,"click",function(){R.fakeEvent(t.__checkbox,"click")}),R.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof Bc?(R.bind(e,"click",function(){R.fakeEvent(t.__button,"click")}),R.bind(e,"mouseover",function(){R.addClass(t.__button,"hover")}),R.bind(e,"mouseout",function(){R.removeClass(t.__button,"hover")})):t instanceof ua&&(R.addClass(e,"color"),t.updateDisplay=W.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=W.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&ha(r.getRoot(),!0),s},t.setValue)}function Oc(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,a=void 0;if(s[r.preset])a=s[r.preset];else if(s[Ki])a=s[Ki];else return;if(a[n]&&a[n][e.property]!==void 0){var o=a[n][e.property];e.initialValue=o,e.setValue(o)}}}}function Xi(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new ua(e,t);else{var s=[e,t].concat(n.factoryArgs);i=av.apply(r,s)}n.before instanceof Pn&&(n.before=n.before.__li),Oc(r,i),R.addClass(i.domElement,"c");var a=document.createElement("span");R.addClass(a,"property-name"),a.innerHTML=i.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(i.domElement);var l=ka(r,o,n.before);return R.addClass(l,He.CLASS_CONTROLLER_ROW),i instanceof ua?R.addClass(l,"color"):R.addClass(l,Z_(i.getValue())),hv(r,l,i),r.__controllers.push(i),i}function Kn(r,e){return document.location.href+"."+e}function da(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function Rl(r,e){e.style.display=r.useLocalStorage?"block":"none"}function dv(r){var e=r.__save_row=document.createElement("li");R.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),R.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",R.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",R.addClass(n,"button"),R.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",R.addClass(i,"button"),R.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",R.addClass(s,"button"),R.addClass(s,"revert");var a=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?W.each(r.load.remembered,function(h,d){da(r,d,d===r.preset)}):da(r,Ki,!1),R.bind(a,"change",function(){for(var h=0;h<r.__preset_select.length;h++)r.__preset_select[h].innerHTML=r.__preset_select[h].value;r.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),Ui){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Kn(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Rl(r,o),R.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,Rl(r,o)})}var u=document.getElementById("dg-new-constructor");R.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Wi.hide()}),R.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Wi.show(),u.focus(),u.select()}),R.bind(n,"click",function(){r.save()}),R.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&r.saveAs(h)}),R.bind(s,"click",function(){r.revert()})}function fv(r){var e=void 0;r.__resize_handle=document.createElement("div"),W.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){R.removeClass(r.__closeButton,He.CLASS_DRAG),R.unbind(window,"mousemove",t),R.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,R.addClass(r.__closeButton,He.CLASS_DRAG),R.bind(window,"mousemove",t),R.bind(window,"mouseup",n),!1}R.bind(r.__resize_handle,"mousedown",i),R.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function fa(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function kr(r,e){var t={};return W.each(r.__rememberedObjects,function(n,i){var s={},a=r.__rememberedObjectIndecesToControllers[i];W.each(a,function(o,l){s[l]=e?o.initialValue:o.getValue()}),t[i]=s}),t}function pv(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function Uc(r){r.length!==0&&lv.call(window,function(){Uc(r)}),W.each(r,function(e){e.updateDisplay()})}var mv=He;const gv={id:"webgl",class:"w-screen h-screen fixed top-0 left-0 z-0"},_v={__name:"Island",setup(r){new mv;const e=document.querySelector(".webgl"),t=new Ea,n=new Ia(.5,64,64),i=new ts({color:16737095});i.color=new ge(3027431);const s=new ft(n,i);t.add(s);const a=new Lc(16777215,.1);a.position.x=2,a.position.y=3,a.position.z=4,t.add(a);const o={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{o.width=window.innerWidth,o.height=window.innerHeight,l.aspect=o.width/o.height,l.updateProjectionMatrix(),c.setSize(o.width,o.height),c.setPixelRatio(Math.min(window.devicePixelRatio,2))});const l=new dt(75,o.width/o.height,.1,100);l.position.x=0,l.position.y=0,l.position.z=2,t.add(l);const c=new Oe({canvas:e});c.setSize(o.width,o.height),c.setPixelRatio(Math.min(window.devicePixelRatio,2));const u=new R_,h=()=>{const d=u.getElapsedTime();sphere.rotation.y=.5*d,c.render(t,l),window.requestAnimationFrame(h)};return h(),(d,f)=>(Pl(),Dl("canvas",gv))}},vv={class:"flex"},xv={class:"shrink-0 flex items-center"},yv={class:"fixed backdrop-filter backdrop-blur-[5px] border-gray-100 w-full h-16 flex justify-between items-center px-4 sm:px-6 lg:px-8"},bv={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},Ev={__name:"Home",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0},currentTime:{type:String,required:!0},currentDate:{type:String,required:!0}},setup(r){return Zc(()=>{console.log("You found the Konami Code!")}),(e,t)=>{const n=qc("ApplicationLogo");return Pl(),Dl("div",null,[Mi("div",vv,[Mi("div",xv,[wi(Yc(jc),{href:e.route("dashboard")},{default:cs(()=>[wi(n,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),Mi("div",yv,[Mi("div",bv,[wi(Ya,{href:e.route("home"),active:e.route().current("home")},{default:cs(()=>[qa(" Home ")]),_:1},8,["href","active"]),wi(Ya,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:cs(()=>[qa(" Dashboard ")]),_:1},8,["href","active"])])]),Mi("div",null,[wi(_v)])])])}}};export{Ev as default};
