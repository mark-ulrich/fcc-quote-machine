(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),c=a(1),s=a(2),u=a(4),h=a(3),l=a(5),m=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.quote,t=e.text,a=e.author,n='https://twitter.com/intent/tweet?text="'.concat(t,'"++-+').concat(a);return o.a.createElement("div",{className:"share-links"},o.a.createElement("a",{href:n,target:"_blank",id:"tweet-quote"},o.a.createElement("i",{className:"fab fa-twitter fa-2x"})))}}]),t}(n.Component),d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"generate"},o.a.createElement("button",{className:"btn",id:"new-quote",onClick:this.props.generateMethod},"Next Quote\xa0\xa0",o.a.createElement("i",{className:"fas fa-arrow-circle-right"})))}}]),t}(n.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.quote,t=e.text,a=e.author;return o.a.createElement("div",{id:"quote-box"},o.a.createElement("div",{className:"quote"},o.a.createElement("p",{id:"text"},o.a.createElement("span",{className:"begin-quotation-mark quotation-mark"},o.a.createElement("i",{className:"fa fa-quote-left"})),t,o.a.createElement("span",{className:"quotation-mark end-quotation-mark"},o.a.createElement("i",{className:"fa fa-quote-right"}))),o.a.createElement("p",{id:"author"},"-\xa0",a)),o.a.createElement("div",{className:"bottom-container"},o.a.createElement(m,{quote:e}),o.a.createElement(d,{generateMethod:this.props.generateMethod})))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"by Mark Ulrich"))}}]),t}(n.Component),b=(a(14),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={title:"Quote Machine",quotes:[{text:"Without passion, you don't have energy. Without energy, you have nothing.",author:"Donald Trump"},{text:"Whenever you find yourself on the side of the majority, it is time to pause and reflect.",author:"Mark Twain"},{text:"The true sign of intelligence is not knowledge but imagination.",author:"Albert Einstein"},{text:"Political correctness is tyranny with manners",author:"Charlton Heston"},{text:"What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.",author:"John Ruskin"},{text:"Happiness is not an ideal of reason but of imagination.",author:"Immanuel Kant"},{text:"It is one thing to show a man that he is in error, and another to put him in possession of truth",author:"John Locke"},{text:"Whether you think you can or whether you think you can't, you're right.",author:"Henry Ford"},{text:"A bird doesn't sing because it has an answer, it sings because it has a song.",author:"Maya Angelou"}],index:0},a.generateQuote=function(){var e=Math.floor(Math.random()*a.state.quotes.length);a.setState({index:e})},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.generateQuote()}},{key:"render",value:function(){var e=this.state.quotes[this.state.index];return o.a.createElement("div",{id:"app-container"},o.a.createElement(p,{title:this.state.title,quote:e,generateMethod:this.generateQuote}),o.a.createElement(f,null))}}]),t}(n.Component));i.a.render(o.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1659bc73.chunk.js.map