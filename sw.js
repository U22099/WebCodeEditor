if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>n(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Df3Nd4QR.js",revision:null},{url:"assets/index-ydB_L-gx.css",revision:null},{url:"index.html",revision:"f15b881869aeb97bdd1fe4313da8042b"},{url:"registerSW.js",revision:"5323a97d4c641b9198b6eb8a16073018"},{url:"maskable-icon-512x512.png",revision:"b7f770f71ad4c34439cac1d56bf1db2f"},{url:"pwa-192x192.png",revision:"7bc0e884d22c6e114901c06638a0e9cd"},{url:"pwa-512x512.png",revision:"32d5157cfb15679002bd1c1b68111b13"},{url:"pwa-64x64.png",revision:"e78f7aa2d83640712a679f84422ed7ac"},{url:"manifest.webmanifest",revision:"d1b18cbddf93e0c2c52c6cabe68ed834"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
