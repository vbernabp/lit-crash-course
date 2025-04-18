(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,Q=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),G=new WeakMap;let ce=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Q&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=G.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&G.set(t,e))}return e}toString(){return this.cssText}};const $e=n=>new ce(typeof n=="string"?n:n+"",void 0,Z),H=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new ce(t,n,Z)},_e=(n,e)=>{if(Q)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},X=Q?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return $e(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ge,defineProperty:ye,getOwnPropertyDescriptor:ve,getOwnPropertyNames:Ae,getOwnPropertySymbols:be,getPrototypeOf:Ee}=Object,_=globalThis,ee=_.trustedTypes,Se=ee?ee.emptyScript:"",j=_.reactiveElementPolyfillSupport,O=(n,e)=>n,B={toAttribute(n,e){switch(e){case Boolean:n=n?Se:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},de=(n,e)=>!ge(n,e),te={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:de};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=te){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&ye(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=ve(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){const l=s==null?void 0:s.call(this);r==null||r.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??te}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,i=[...Ae(t),...be(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(X(s))}else e!==void 0&&t.push(X(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _e(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:B).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var r,o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:B;this._$Em=s,this[s]=a.fromAttribute(t,l.type)??((o=this._$Ej)==null?void 0:o.get(s))??null,this._$Em=null}}requestUpdate(e,t,i){var s;if(e!==void 0){const r=this.constructor,o=this[e];if(i??(i=r.getPropertyOptions(e)),!((i.hasChanged??de)(o,t)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s){const{wrapped:l}=o,a=this[r];l!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[O("elementProperties")]=new Map,b[O("finalized")]=new Map,j==null||j({ReactiveElement:b}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,z=M.trustedTypes,se=z?z.createPolicy("lit-html",{createHTML:n=>n}):void 0,pe="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ue="?"+$,we=`<${ue}>`,A=document,x=()=>A.createComment(""),L=n=>n===null||typeof n!="object"&&typeof n!="function",Y=Array.isArray,Ce=n=>Y(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",I=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,re=/>/g,g=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ne=/'/g,oe=/"/g,fe=/^(?:script|style|textarea|title)$/i,Pe=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),w=Pe(1),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ae=new WeakMap,y=A.createTreeWalker(A,129);function me(n,e){if(!Y(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return se!==void 0?se.createHTML(e):e}const Oe=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":e===3?"<math>":"",o=P;for(let l=0;l<t;l++){const a=n[l];let c,p,h=-1,f=0;for(;f<a.length&&(o.lastIndex=f,p=o.exec(a),p!==null);)f=o.lastIndex,o===P?p[1]==="!--"?o=ie:p[1]!==void 0?o=re:p[2]!==void 0?(fe.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=g):p[3]!==void 0&&(o=g):o===g?p[0]===">"?(o=s??P,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?g:p[3]==='"'?oe:ne):o===oe||o===ne?o=g:o===ie||o===re?o=P:(o=g,s=void 0);const m=o===g&&n[l+1].startsWith("/>")?" ":"";r+=o===P?a+we:h>=0?(i.push(c),a.slice(0,h)+pe+a.slice(h)+$+m):a+$+(h===-2?l:m)}return[me(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class T{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const l=e.length-1,a=this.parts,[c,p]=Oe(e,t);if(this.el=T.createElement(c,i),y.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=y.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(pe)){const f=p[o++],m=s.getAttribute(h).split($),D=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:D[2],strings:m,ctor:D[1]==="."?xe:D[1]==="?"?Le:D[1]==="@"?Te:R}),s.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:r}),s.removeAttribute(h));if(fe.test(s.tagName)){const h=s.textContent.split($),f=h.length-1;if(f>0){s.textContent=z?z.emptyScript:"";for(let m=0;m<f;m++)s.append(h[m],x()),y.nextNode(),a.push({type:2,index:++r});s.append(h[f],x())}}}else if(s.nodeType===8)if(s.data===ue)a.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf($,h+1))!==-1;)a.push({type:7,index:r}),h+=$.length-1}r++}}static createElement(e,t){const i=A.createElement("template");return i.innerHTML=e,i}}function S(n,e,t=n,i){var o,l;if(e===E)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=L(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=S(n,s._$AS(n,e.values),s,i)),e}class Me{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??A).importNode(t,!0);y.currentNode=s;let r=y.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new U(r,r.nextSibling,this,e):a.type===1?c=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(c=new He(r,this,e)),this._$AV.push(c),a=i[++l]}o!==(a==null?void 0:a.index)&&(r=y.nextNode(),o++)}return y.currentNode=A,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),L(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ce(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=T.createElement(me(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(t);else{const o=new Me(s,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=ae.get(e.strings);return t===void 0&&ae.set(e.strings,t=new T(e)),t}k(e){Y(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new U(this.O(x()),this.O(x()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=S(this,e,t,0),o=!L(e)||e!==this._$AH&&e!==E,o&&(this._$AH=e);else{const l=e;let a,c;for(e=r[0],a=0;a<r.length-1;a++)c=S(this,l[i+a],t,a),c===E&&(c=this._$AH[a]),o||(o=!L(c)||c!==this._$AH[a]),c===d?e=d:e!==d&&(e+=(c??"")+r[a+1]),this._$AH[a]=c}o&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class xe extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Le extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Te extends R{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??d)===E)return;const i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class He{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const W=M.litHtmlPolyfillSupport;W==null||W(T,U),(M.litHtmlVersions??(M.litHtmlVersions=[])).push("3.3.0");const Ue=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new U(e.insertBefore(x(),r),r,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=globalThis;class u extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ue(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}}var he;u._$litElement$=!0,u.finalized=!0,(he=v.litElementHydrateSupport)==null||he.call(v,{LitElement:u});const q=v.litElementPolyfillSupport;q==null||q({LitElement:u});(v.litElementVersions??(v.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};var De=Object.getOwnPropertyDescriptor,Ne=(n,e,t,i)=>{for(var s=i>1?void 0:i?De(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let k=class extends u{render(){return w`<header><h1>Fundamentos de Web Components y Lit</h1></header>`}};k.styles=H`
    header {
      padding: 1rem;
      text-align: center;
    }
  `;k=Ne([C("lc-header")],k);var ze=Object.getOwnPropertyDescriptor,Re=(n,e,t,i)=>{for(var s=i>1?void 0:i?ze(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let V=class extends u{render(){return w`
      <main>
        <section id="introduccion-web-components">
          <h2>Introducción a Web Components</h2>
          <p>Los Web Components son un conjunto de tecnologías que permiten crear elementos reutilizables y encapsulados para la web.</p>
          <section id="custom-elements">
            <h3>Custom Elements</h3>
            <p>Los Custom Elements permiten definir nuevos elementos HTML personalizados con comportamiento propio, utilizando JavaScript. Estos elementos pueden ser reutilizados en cualquier parte de la web y siguen el estándar del navegador.</p>
            <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements" target="_blank">Más sobre Custom Elements en MDN</a>
          </section>
          <section id="shadow-dom">
            <h3>Shadow DOM</h3>
            <p>El Shadow DOM proporciona encapsulamiento para los elementos, permitiendo que el marcado y los estilos definidos dentro de un componente no afecten ni sean afectados por el resto del documento. Esto ayuda a evitar conflictos de CSS y JavaScript.</p>
            <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">Más sobre Shadow DOM en MDN</a>
          </section>
          <section id="html-template">
            <h3>HTML Template</h3>
            <p>La etiqueta &lt;template&gt; permite definir fragmentos de HTML que no se renderizan inmediatamente, sino que pueden ser clonados y utilizados dinámicamente mediante JavaScript. Es fundamental para la creación de Web Components.</p>
            <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/template" target="_blank">Más sobre HTML Template en MDN</a>
          </section>
        </section>
        <section id="lit">
          <h2>Lit</h2>
          <section id="que-es-lit">
            <h3>¿Qué es Lit?</h3>
          </section>
          <section id="primeros-pasos">
            <h3>Primeros pasos</h3>
          </section>
          <section id="componentes">
            <h3>Componentes</h3>
            <p>Un componente en Lit es una clase que extiende de LitElement y define su interfaz y estilos usando JavaScript y plantillas HTML. Puedes ver un ejemplo interactivo en StackBlitz:</p>
            <iframe height="300" style="width: 100%;" scrolling="no" title="Lit - Hola Mundo" src="https://codepen.io/victorbernabeperez/embed/jEEPPLd?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen>
  See the Pen <a href="https://codepen.io/victorbernabeperez/pen/jEEPPLd">
  Lit - Hola Mundo</a> by Victor Bernabe Perez (<a href="https://codepen.io/victorbernabeperez">@victorbernabeperez</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
          </section>
          <section id="plantillas">
            <h3>Plantillas</h3>
          </section>
          <section id="organizacion-codigo">
            <h3>Organización del código</h3>
          </section>
          <section id="propiedades-reactivas">
            <h3>Propiedades reactivas</h3>
          </section>
          <section id="estilos">
            <h3>Estilos</h3>
          </section>
          <section id="soporte-ide-herramientas">
            <h3>Soporte de IDE y herramientas</h3>
          </section>
        </section>
        <section id="lit-vs-stencil">
          <h2>Lit vs Stencil</h2>
        </section>
      </main>
    `}};V.styles=H`
    main {
      padding: 2rem;
      margin-top: 2rem;
    }
  `;V=Re([C("lc-main")],V);var je=Object.getOwnPropertyDescriptor,Ie=(n,e,t,i)=>{for(var s=i>1?void 0:i?je(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let F=class extends u{render(){const n=new Date().getFullYear();return w`<footer><p>&copy; ${n} NTT Data</p></footer>`}};F.styles=H`
    footer {
      padding: 1rem;
      text-align: center;
    }
  `;F=Ie([C("lc-footer")],F);var We=Object.getOwnPropertyDescriptor,qe=(n,e,t,i)=>{for(var s=i>1?void 0:i?We(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let J=class extends u{render(){return w`
      <nav>
        <h2>Tabla de Contenidos</h2>
        <ul>
          <li><a href="#introduccion-web-components">Introducción a Web Components</a></li>
          <li><a href="#custom-elements">Custom Elements</a></li>
          <li><a href="#shadow-dom">Shadow DOM</a></li>
          <li><a href="#html-template">HTML Template</a></li>
          <li><a href="#lit">Lit</a></li>
          <li><a href="#que-es-lit">¿Qué es Lit?</a></li>
          <li><a href="#primeros-pasos">Primeros pasos</a></li>
          <li><a href="#componentes">Componentes</a></li>
          <li><a href="#plantillas">Plantillas</a></li>
          <li><a href="#organizacion-codigo">Organización del código</a></li>
          <li><a href="#propiedades-reactivas">Propiedades reactivas</a></li>
          <li><a href="#estilos">Estilos</a></li>
          <li><a href="#soporte-ide-herramientas">Soporte de IDE y herramientas</a></li>
          <li><a href="#lit-vs-stencil">Lit vs Stencil</a></li>
        </ul>
      </nav>
    `}};J.styles=H`
    nav {
      padding: 1rem;
    }
    li {
      margin: 0.5rem 0;
    }
  `;J=qe([C("lc-table-of-content")],J);var Be=Object.getOwnPropertyDescriptor,ke=(n,e,t,i)=>{for(var s=i>1?void 0:i?Be(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let K=class extends u{render(){return w`
      <div class="container">
        <lc-header></lc-header>
        <lc-table-of-content></lc-table-of-content>
        <lc-main>
          <p>Fundamentos de Web Components y Lit</p>
        </lc-main>
        <lc-footer></lc-footer>
      </div>
    `}};K.styles=H`
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 1rem;
      box-sizing: border-box;
    }
  `;K=ke([C("lc-layout")],K);var Ve=Object.getOwnPropertyDescriptor,Fe=(n,e,t,i)=>{for(var s=i>1?void 0:i?Ve(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(s)||s);return s};let le=class extends u{render(){return w`<lc-layout></lc-layout>`}};le=Fe([C("my-element")],le);
