(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e){e.exports=[{id:1,name:"user",faviconName:"user"},{id:2,name:"coffee",faviconName:"coffee"},{id:3,name:"check-square",faviconName:"check-square"},{id:4,name:"rocket",faviconName:"rocket"},{id:5,name:"fan",faviconName:"fan"},{id:6,name:"tachometer-alt",faviconName:"tachometer-alt"},{id:7,name:"adjust",faviconName:"adjust"},{id:8,name:"skiing",faviconName:"skiing"},{id:9,name:"hamburger",faviconName:"hamburger"}]},32:function(e,t,n){e.exports=n(64)},37:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),s=(n(37),n(11)),i=n(5),u=(n(41),n(3)),l=n.n(u),m=n(8),d=n(14),f=n(15),h=n(18),p=n(16),v=n(19),k=n(26),g=n(31),b=n(27),x=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={hover:!1,style:{margin:"20px",cursor:"pointer",backgroundColor:"rgb(96, 125, 139)"}},n.toggleHover=Object(m.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({hover:!n.state.hover});case 2:case"end":return e.stop()}},e)})),n.setColorOnHover=function(){return n.state.hover?{color:"#ed1212"}:{color:"#000"}},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{onClick:function(){return e.props.handleClick(e.props.id)},style:Object(g.a)({},this.state.style,this.setColorOnHover()),icon:this.props.icon,onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover,spin:this.state.hover,size:"10x",border:!0,fixedWidth:!0}))}}]),t}(r.a.Component),w=n(17),S=n.n(w),O=n(28),j=n.n(O),C=function(e){return r.a.createElement(S.a,{style:{overflow:!0}},r.a.createElement(j.a,null,e.renderIconCards()))},E=n(29),y=n.n(E),G=function(e){return r.a.createElement("div",null,r.a.createElement(y.a,{style:{textAlign:"center"},variant:e.variant,show:e.show},e.message))},W=n(30),N=n.n(W),I={textAlign:"center",backgroundColor:"rgb(48, 99, 127)",color:"white"},A=function(e){return r.a.createElement(S.a,{fluid:"true",style:I},r.a.createElement("h1",null,"Clicky Game"),r.a.createElement("div",{id:"score"},"Score:"," ",e.score," ","| Top Score:"," ",e.topScore),r.a.createElement(N.a,{variant:"success",onClick:function(){return e.handleResetGame()}},"Reset Game"))},M=function(){return k.map(function(e){return e.clicked=!1,e})},H=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,topScore:0,icons:M(),gameOver:!1,gameWon:!1},n.handleClick=function(){var e=Object(m.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.gameOver){e.next=2;break}return e.abrupt("return");case 2:if(a=n.state.icons.findIndex(function(e){return e.id===t}),!n.state.icons[a].clicked){e.next=9;break}return e.next=7,n.updateGameState(!0);case 7:e.next=18;break;case 9:return e.next=11,n.updateClicked(!0,a);case 11:return e.next=13,n.incrementScore();case 13:if(n.state.score!==n.state.icons.length){e.next=18;break}return e.next=16,n.updateGameState(!0);case 16:return e.next=18,n.updateGameWon(!0);case 18:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.uncheckAllIcons=function(){var e=n.state.icons.map(function(e){return e.clicked=!1,e});n.setState({icons:e})},n.updateClicked=function(e,t){var a=n.state.icons;a[t].clicked=e,n.setState({icons:a})},n.shuffleIcons=Object(m.a)(l.a.mark(function e(){var t,a,r,c,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=n.state.icons,a=t.length,r=a-1;r>0;r--)c=Math.floor(Math.random()*(r+1)),o=t[c],t[c]=t[r],t[r]=o;return e.next=5,n.setState({icons:t});case 5:case"end":return e.stop()}},e)})),n.incrementScore=Object(m.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({score:n.state.score+1});case 2:return e.next=4,n.setTopScore();case 4:case"end":return e.stop()}},e)})),n.resetScore=function(){n.setState({score:0})},n.setTopScore=Object(m.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.state.score>n.state.topScore)){e.next=3;break}return e.next=3,n.setState({topScore:n.state.score});case 3:case"end":return e.stop()}},e)})),n.handleResetGame=Object(m.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.updateGameState(!1);case 2:return e.next=4,n.updateGameWon(!1);case 4:return e.next=6,n.resetScore();case 6:return e.next=8,n.shuffleIcons();case 8:return e.next=10,n.uncheckAllIcons();case 10:case"end":return e.stop()}},e)})),n.updateGameState=function(e){n.setState({gameOver:e})},n.updateGameWon=function(e){n.setState({gameWon:e})},n.isGameWon=function(){return n.state.gameOver&&n.state.gameWon},n.determineVariant=function(){return n.isGameWon()?"success":"danger"},n.determineMessage=function(){return n.isGameWon()?"You Win!":"You Lose!"},n.renderIconCards=function(){return n.state.icons.map(function(e){return r.a.createElement(x,{key:e.id,id:e.id,icon:e.faviconName,handleClick:n.handleClick,clicked:e.clicked})})},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{overflow:!0}},r.a.createElement(A,{score:this.state.score,topScore:this.state.topScore,handleResetGame:this.handleResetGame}),r.a.createElement(G,{show:this.state.gameOver,variant:this.determineVariant(),message:this.determineMessage()}),r.a.createElement(C,{renderIconCards:this.renderIconCards}))}}]),t}(r.a.Component);s.b.add(i.i,i.b,i.c,i.f,i.d,i.h,i.a,i.g,i.e);var R=function(){return r.a.createElement(H,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.005ddfaf.chunk.js.map