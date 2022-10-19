const translate={en:"UNMUTE",zh:"激活声音",hi:"ध्वनि सक्रिय करें",es:"ACTIVAR SONIDO",fr:"ACTIVER LE SON",ar:"تنشيط الصوت",bn:"নিঃশব্দ",ru:"ВКЛЮЧИТЬ ЗВУК",pt:"ATIVAR SOM",de:"TON AKTIVIEREN",id:"AKTIFKAN SUARA"};let lang=window.navigator.languages?window.navigator.languages[0]:null;null==(lang=lang||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage)&&(lang="us-en");let shortLang=lang;-1!==shortLang.indexOf("-")&&(shortLang=shortLang.split("-")[0]),-1!==shortLang.indexOf("_")&&(shortLang=shortLang.split("_")[0]),console.log(lang,shortLang),void 0===translate[shortLang]?(console.log('Variable "shortLang" is undefined.'),translated="UNMUTE"):(console.log('Variable "shortLang": '+translate[shortLang]),translated=translate[shortLang]);const registerPlugin=videojs.registerPlugin||videojs.plugin;registerPlugin("unmuteButton",function(){let e=this,n=!1,t=!1,a=!1,o=e.volume();console.log(o);e.ready(function(){if(!e.autoplay())return!1;e.muted(!0);let o=e.play(),l=e.id();e.on("play",function(){t=!0,console.log("hasOverlay: "+t)}),void 0!==o&&e.autoplay()&&e.on("loadedmetadata",function(){if(console.log(e),console.log("playerid "+l),a)return!1;const t=document.getElementById(e.id());let o=document.createElement("div");if(o.addEventListener("click",function(){e.muted(!1),e.volume(1),t.removeChild(o),n=!0,a=!1}),console.log("isUnmuted: "+n),console.log("hasOverlay: "+a),n)return a&&(t.removeChild(o),a=!1),!1;a=!0,o.classList.add("vjs-unmute-overlay"),o.setAttribute("style","z-index: 1"),t.appendChild(o);let s=document.createElement("span"),r=document.getElementById(l).getElementsByClassName("vjs-unmute-overlay")[0];s.textContent=translated,s.classList.add("vjs-unmute"),s.setAttribute("style","z-index: 1"),r.appendChild(s)}),o.then(function(){console.log("CONSOLE2: Autoplay started!")}).catch(function(e){console.log("CONSOLE2 Autoplay was prevented!")})})});