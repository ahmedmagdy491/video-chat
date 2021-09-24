(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{122:function(e,n){},124:function(e,n){},135:function(e,n,t){"use strict";t.r(n);var r,a,c=t(0),i=t.n(c),o=t(59),u=t.n(o),l=(t(73),t(64)),s=t(1),f=t(137),m=function(e){return i.a.createElement("button",{onClick:function(){var n=Object(f.a)();e.history.push("/room/".concat(n))}},"Create room")},h=t(66),p=t(67),d=t(30),g=t(60),v=t.n(g),w=t(31),b=t.n(w),j=t(32),E=j.a.div(r||(r=Object(d.a)(["\n    padding: 20px;\n    display: flex;\n    height: 100vh;\n    width: 90%;\n    margin: auto;\n    flex-wrap: wrap;\n"]))),O=j.a.video(a||(a=Object(d.a)(["\n    height: 40%;\n    width: 50%;\n"]))),I=function(e){var n=Object(c.useRef)();return Object(c.useEffect)((function(){e.peer.on("stream",(function(e){n.current.srcObject=e}))}),[]),i.a.createElement(O,{playsInline:!0,autoPlay:!0,ref:n})},D={height:window.innerHeight/2,width:window.innerWidth/2},y=function(e){var n=Object(c.useState)([]),t=Object(p.a)(n,2),r=t[0],a=t[1],o=Object(c.useRef)(),u=Object(c.useRef)(),l=Object(c.useRef)([]),s=e.match.params.roomID;return Object(c.useEffect)((function(){o.current=v.a.connect("/"),navigator.mediaDevices.getUserMedia({video:D,audio:!0}).then((function(e){u.current.srcObject=e,o.current.emit("join room",s),o.current.on("all users",(function(n){var t=[];n.forEach((function(n){var r=function(e,n,t){var r=new b.a({initiator:!0,trickle:!1,stream:t});return r.on("signal",(function(t){o.current.emit("sending signal",{userToSignal:e,callerID:n,signal:t})})),r}(n,o.current.id,e);l.current.push({peerID:n,peer:r}),t.push(r)})),a(t)})),o.current.on("user joined",(function(n){var t=function(e,n,t){var r=new b.a({initiator:!1,trickle:!1,stream:t});return r.on("signal",(function(e){o.current.emit("returning signal",{signal:e,callerID:n})})),r.signal(e),r}(n.signal,n.callerID,e);l.current.push({peerID:n.callerID,peer:t}),a((function(e){return[].concat(Object(h.a)(e),[t])}))})),o.current.on("receiving returned signal",(function(e){l.current.find((function(n){return n.peerID===e.id})).peer.signal(e.signal)}))}))}),[]),i.a.createElement(E,null,i.a.createElement(O,{muted:!0,ref:u,autoPlay:!0,playsInline:!0}),r.map((function(e,n){return i.a.createElement(I,{key:n,peer:e})})))};var k=function(){return i.a.createElement(l.a,null,i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/",exact:!0,component:m}),i.a.createElement(s.a,{path:"/room/:roomID",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,n,t){e.exports=t(135)},73:function(e,n,t){},99:function(e,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.39f05f21.chunk.js.map