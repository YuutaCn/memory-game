(()=>{var e={661:()=>{window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},Math.randMinMax=function(e,t,n){var o=e+Math.random()*(t-e);return n&&(o=Math.round(o)),o},Math.TO_RAD=Math.PI/180,Math.getAngle=function(e,t,n,o){var r=e-n,i=t-o;return Math.atan2(i,r)},Math.getDistance=function(e,t,n,o){var r=n-e,i=o-t;return r*=r,i*=i,Math.sqrt(r+i)};var e={};!function(){var t,n,o=document.getElementById("myCanvas"),r=o.getContext("2d"),i=new Date;function a(){for(var e,t,n,o=document.getElementById("button"),r=o.offsetHeight,i=o.offsetLeft,a=o.offsetTop,d=o.offsetWidth,c=0;c<40;c+=1)Math.random()<.5?(t=Math.randMinMax(a,a+r),Math.random()<.5?(e=i,n=Math.randMinMax(-45,45)):(e=i+d,n=Math.randMinMax(135,225))):(e=Math.randMinMax(i,i+d),Math.random()<.5?(t=a,n=Math.randMinMax(45,135)):(t=a+r,n=Math.randMinMax(-135,-45))),s({x:e,y:t,degree:n,speed:Math.randMinMax(100,150),vs:Math.randMinMax(-4,-1)})}function s(o){var r={x:t/2,y:n/2,color:"hsla("+Math.randMinMax(160,290)+", 100%, 50%, "+Math.random().toFixed(2)+")",degree:Math.randMinMax(0,360),speed:Math.randMinMax(300,350),vd:Math.randMinMax(-90,90),vs:Math.randMinMax(-8,-5)};for(key in o)r[key]=o[key];e.particles.push(r)}function d(){t=o.width=window.innerWidth,n=o.height=window.innerHeight}new Date,e.particles=[],d(),document.getElementById("button").addEventListener("mousedown",a),window.setTimeout(a,100),function o(){var a,s=new Date,d=(i-s)/1e3,c=e.particles.length,u=0;for(r.fillStyle="rgba(15,15,15,0.25)",r.fillRect(0,0,t,n),r.globalCompositeStyle="lighter";u<c;u+=1)(a=e.particles[u]).degree+=a.vd*d,a.speed+=a.vs,a.speed<0||(a.x+=Math.cos(a.degree*Math.TO_RAD)*(a.speed*d),a.y+=Math.sin(a.degree*Math.TO_RAD)*(a.speed*d),r.save(),r.translate(a.x,a.y),r.rotate(a.degree*Math.TO_RAD),r.fillStyle=a.color,r.fillRect(-2,-2,4,4),r.restore());i=s,requestAnimFrame(o)}(),window.addEventListener("resize",d)}()},598:()=>{function e(e){var t=!0,n=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function d(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),d())}),!0),d(),e.addEventListener("focus",(function(e){var n,o,s;i(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(s=n.tagName)&&r[o]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(598),window,document,document.documentElement,document.body,n(661);class t{constructor(t,n,o){e(this,"_open",!1),e(this,"_success",!1),this.card=document.createElement("div"),this.card.classList.add("card"),this.card.innerHTML=`<div class="card__back"></div><div class="card__front"><p class="card__front-text">${n}</p></div>`,this.number=n,this.card.addEventListener("click",(()=>{0==this._open&&0==this._success&&(this.open=!0,o(this))})),t.append(this.card)}set open(e){this._open=e,e?this.card.classList.add("open"):this.card.classList.remove("open")}get open(){return this._open}set success(e){this._open=e,e?this.card.classList.add("success"):this.card.classList.remove("success")}get success(){return this._success}}let o=[],r=[],i=null,a=null,s=1,d=1,c=document.querySelector(".stop-button"),u=document.querySelector(".main__go-button"),l=document.querySelector(".game-setting"),m=document.querySelector(".form__btn");function v(){let e=/(?:^|\s)card(?:\s|$)/,t=document.getElementsByTagName("*");for(let n=t.length;n--;)e.test(t[n].className)&&t[n].parentNode.removeChild(t[n]);o=[],r=[],timer.classList.remove("low-timer"),timer.innerHTML="REPEAT?",timer.style.transition="transform 5s var(--default-cubic)",s=1,document.querySelector(".game-zone").classList.add("hidden")}function h(){document.querySelector(".game-setting").classList.add("hidden")}u.addEventListener("click",(()=>{l.classList.remove("hidden")})),m.addEventListener("click",(()=>{Number(document.querySelector(".form__input-number").value)<=14&&Number(document.querySelector(".form__input-number").value)>=2&&(function(e,n){let c=document.getElementById("timer");n=Number(document.querySelector(".form__input-number").value),d=Number(document.querySelector(".form__select").value),1==d&&(s=5*n),2==d&&(s=3*n),3==d&&(s=Math.round(1.7*n));let u=setInterval((()=>{s--;let e=s/60;e<10&&(e=`0${Math.floor(e)}`.toString());let t=s%60;if(t<10&&(t=`0${Math.floor(t)}`.toString()),c.innerHTML=`${e}:${t}`,s<=20&&c.classList.add("low-timer"),0===s){let e=/(?:^|\s)card(?:\s|$)/,t=document.getElementsByTagName("*");for(let n=t.length;n--;)e.test(t[n].className)&&t[n].parentNode.removeChild(t[n]);o=[],r=[],clearInterval(u),c.classList.remove("low-timer"),c.innerHTML="REPEAT?",c.style.transition="transform 5s var(--default-cubic)",alert("YOU LOSE!~")}}),1e3);for(let e=1;e<=n/2;e++)o.push(e),o.push(e);o=o.sort((()=>Math.random()-.5));for(const n of o)r.push(new t(e,n,l));function l(e){null!=i&&null!=a&&i.number!=a.number&&(i.open=!1,a.open=!1,i=null,a=null),null==i?i=e:null==a&&(a=e),null!=i&&null!=a&&i.number==a.number&&(i.success=!0,a.success=!0,i=null,a=null),document.querySelectorAll(".card.success").length==o.length&&(c.classList.remove("low-timer"),c.innerHTML="REPEAT?",c.style.transition="transform 5s var(--default-cubic)",clearInterval(u),alert("You WIN"))}}(document.getElementById("game-zone"),0),document.querySelector(".game-zone").classList.remove("hidden"),h())})),document.onkeydown=function(e){27==(e=e||window.event).keyCode&&(v(),h())},c.addEventListener("click",(()=>{v()})),document.addEventListener("click",(e=>{e.target!=document.querySelector(".game-zone")&&e.target!=document.querySelector(".game-setting")||(v(),h())}))})()})();
