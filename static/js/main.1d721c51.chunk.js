(this.webpackJsonpuly=this.webpackJsonpuly||[]).push([[0],{15:function(n,t,e){},16:function(n,t,e){},22:function(n,t,e){"use strict";e.r(t);var a=e(0),i=e(1),s=e.n(i),c=e(9),u=e.n(c),o=(e(15),e(5)),l=e(6),r=e(2),h=e(8),d=e(7),j=(e(16),e(3)),p=e.n(j),b=[{soundURL:"coq.mp3",name:"Coq"},{soundURL:"ch\xe8vre.mp3",name:"Ch\xe8vre"},{soundURL:"klaxon.mp3",name:"Klaxon"}],y=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(n){var a;return Object(o.a)(this,e),(a=t.call(this,n)).handleClick=a.handleClick.bind(Object(r.a)(a)),a.handleSongFinishedPlaying=a.handleSongFinishedPlaying(Object(r.a)(a)),a.state={playStatus:p.a.status.STOPPED},a}return Object(l.a)(e,[{key:"handleClick",value:function(){this.setState({playStatus:p.a.status.PLAYING})}},{key:"handleSongFinishedPlaying",value:function(){this.setState({playStatus:p.a.status.STOPPED})}},{key:"render",value:function(){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("button",{onClick:this.handleClick,children:this.props.name}),Object(a.jsx)(p.a,{url:"/uly/"+this.props.soundURL,playStatus:this.state.playStatus,onFinishedPlaying:this.handleSongFinishedPlaying})]})}}]),e}(s.a.Component),O=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(o.a)(this,e),t.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){var n=b.map((function(n){return Object(a.jsx)(y,{name:n.name,soundURL:n.soundURL},n.name)}));return Object(a.jsx)("div",{className:"App",children:n})}}]),e}(s.a.Component),m=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,23)).then((function(t){var e=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;e(n),a(n),i(n),s(n),c(n)}))};u.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),m()}},[[22,1,2]]]);
//# sourceMappingURL=main.1d721c51.chunk.js.map