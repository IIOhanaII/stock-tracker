(this["webpackJsonpmarket-price-tracker"]=this["webpackJsonpmarket-price-tracker"]||[]).push([[0],{116:function(e,t){},145:function(e,t,s){},146:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),c=s.n(n),i=s(81),r=s.n(i),o=(s(95),s(96),s(97),s(98),s(99),s(4)),l=s(5),u=s(7),d=s(6),h=s(147),j=function(){return Object(a.jsx)(h.a,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-12 text-center",children:[Object(a.jsx)("h1",{className:"font-header_1",children:"STOCK TRACKER"}),Object(a.jsx)("h6",{className:"font-header_2",children:"REAL-TIME PRICES FROM THE STOCK EXCHANGES"})]})})})})},b=s(10),g=s(8),m=s(102);m.ApiClient.instance.authentications.api_key.apiKey="bvcdoin48v6v1cifjdo0";var x=new m.DefaultApi,p=function(e){var t=e.isRequestSuccessful,s=e.isLoading,n=e.stockExchangeData;return t||s?null:0===n.length?Object(a.jsx)("div",{className:"row row-content d-flex align-items-center",children:Object(a.jsx)("div",{className:"col-12 text-center text-primary",children:"I am sorry, something went wrong, there are maybe too much users, please refresh the page or come back later . . ."})}):Object(a.jsx)("div",{className:"col-12 text-center text-primary",children:"I am sorry, something went wrong, there are maybe too much users, please refresh the page or come back later . . ."})},O=s(148),v=function(e){var t=e.isPageLoading,s=e.isLoading;return t?Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsxs)("div",{className:"sk-wave sk-center",children:[Object(a.jsx)("div",{className:"sk-wave-rect"}),Object(a.jsx)("div",{className:"sk-wave-rect"}),Object(a.jsx)("div",{className:"sk-wave-rect"}),Object(a.jsx)("div",{className:"sk-wave-rect"}),Object(a.jsx)("div",{className:"sk-wave-rect"})]}),Object(a.jsx)("span",{className:"d-block text-center text-primary pt-3 pb-0",children:window.innerWidth>=768?"Please wait while I am collecting data from the Stock Exchanges":"Collecting data from the US Stock Exchanges"})]}):s?Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)(O.a,{style:{width:"2rem",height:"2rem",animationDuration:"1.25s"},type:"grow",color:"primary"})}):null},f=function(e){var t=e.isRequestSuccessful,s=e.isPageLoading;return t&&s?Object(a.jsx)("div",{className:"row row-content d-flex align-items-center",children:Object(a.jsx)(v,{isPageLoading:s})}):null},S=s(9),k=s(82),y=s(85),N=function(e){var t=e.delta,s=e.percentage;return t>0?Object(a.jsxs)("div",{className:"text-success stats-size",children:[Object(a.jsxs)("span",{children:[" \u2197 ",t," "]}),Object(a.jsx)("span",{children:s>=.01?"(".concat(s,")%"):null})]}):t<0?Object(a.jsxs)("div",{className:"text-danger stats-size",children:[Object(a.jsxs)("span",{children:[" \u2198 ",-t," "]}),Object(a.jsx)("span",{children:s<=-.01?"(".concat(-s,")%"):null})]}):Object(a.jsx)("div",{style:{opacity:0},children:"0"})},R=function(e){var t=e.isLoading,s=e.isInputFocused,n=e.isSearching,c=e.description,i=e.quote,r=e.quoteColor,o=e.delta,l=e.percentage;return Object(a.jsxs)("div",{className:"col-12 text-center",children:[Object(a.jsx)(v,{isLoading:t,className:"\n                    ".concat(t&&n?"d-none":"","\n                ")}),Object(a.jsxs)("div",{className:"\n                ".concat(t||""===c||s&&n?"d-none":"","\n            "),children:[Object(a.jsxs)("p",{className:"text-primary title",children:[" ",c," "]}),Object(a.jsx)(y.a,{value:i,displayType:"text",thousandSeparator:!0,decimalScale:2,prefix:"$",className:"".concat(r," quote-size")}),Object(a.jsx)(N,{delta:o,percentage:l})]})]})},q=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={activeResult:0,delta:null,description:"",filteredResults:[],initialQuote:null,isInputFocused:!1,isLoading:!1,isRequestSuccessful:!0,isSearching:!1,maxResults:3,percentage:null,quote:null,quoteColor:"text-primary",stock:""},a.handleOnFocus=a.handleOnFocus.bind(Object(g.a)(a)),a.handleOnBlur=a.handleOnBlur.bind(Object(g.a)(a)),a.handleOnSearch=a.handleOnSearch.bind(Object(g.a)(a)),a.handleOnKeyDown=a.handleOnKeyDown.bind(Object(g.a)(a)),a.handleOnSelect=a.handleOnSelect.bind(Object(g.a)(a)),a.renderStockQuote=a.renderStockQuote.bind(Object(g.a)(a)),a}return Object(l.a)(s,[{key:"handleOnFocus",value:function(){this.setState({isInputFocused:!0}),document.getElementsByTagName("input")[0].classList.add("placeholder-color")}},{key:"handleOnBlur",value:function(e){var t=document.getElementsByTagName("input")[0];e.currentTarget.contains(e.relatedTarget)||this.state.isInputFocused&&(this.setState({isInputFocused:!1,isSearching:!1,activeResult:0}),""===t.value&&t.classList.remove("placeholder-color"))}},{key:"handleOnSearch",value:function(e,t){this.setState({isSearching:!0,filteredResults:Object(S.a)(t)})}},{key:"handleOnKeyDown",value:function(e){var t,s;this.state.isSearching&&(40===e.keyCode?(this.state.activeResult<this.state.maxResults-1&&this.setState({activeResult:this.state.activeResult+1}),t=this.state.activeResult,s=this.state.filteredResults,0===t?document.querySelector("[title='".concat(s[t].description,"']")).parentNode.classList.add("highlight-result"):(document.querySelector("[title='".concat(s[t].description,"']")).parentNode.classList.add("highlight-result"),document.querySelector("[title='".concat(s[t-1].description,"']")).parentNode.classList.remove("highlight-result"))):38===e.keyCode?(0!==this.state.activeResult&&this.setState({activeResult:this.state.activeResult-1}),function(e,t){0===e||document.querySelector("[title='".concat(t[e-1].description,"']")).parentNode.classList.add("highlight-result"),document.querySelector("[title='".concat(t[e].description,"']")).parentNode.classList.remove("highlight-result")}(this.state.activeResult,this.state.filteredResults)):13===e.keyCode&&(e.target.blur(),this.setState({stock:this.state.activeResult>0?this.state.filteredResults[this.state.activeResult-1].symbol:this.state.filteredResults[this.state.activeResult].symbol,isLoading:!0,description:this.state.activeResult>0?this.state.filteredResults[this.state.activeResult-1].description:this.state.filteredResults[this.state.activeResult].description,delta:null,percentage:null,initialQuote:null,quote:null,quoteColor:"text-primary",isInputFocused:!1,isSearching:!1,activeResult:0})))}},{key:"handleOnSelect",value:function(e){this.setState({stock:e.symbol,isLoading:!0,description:e.description,delta:null,percentage:null,initialQuote:null,quote:null,quoteColor:"text-primary",isInputFocused:!1,isSearching:!1,activeResult:0})}},{key:"renderStockQuote",value:function(e,t,s){var a=this;""!==e&&x.quote(e,(function(e,n,c){200!==c.statusCode?a.setState({isRequestSuccessful:!1,isLoading:!1,description:""}):null===s?a.setState({initialQuote:n.c,quote:n.c,isLoading:!1}):(n.c>s?a.setState({quote:n.c,quoteColor:"text-success"}):n.c<s&&a.setState({quote:n.c,quoteColor:"text-danger"}),a.setState({delta:Math.round(100*(n.c-t+Number.EPSILON))/100,percentage:Math.round(100*((n.c-t)/t+Number.EPSILON))/100}))}))}},{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval((function(){e.renderStockQuote(e.state.stock,e.state.initialQuote,e.state.quote)}),5e3),this.renderStockQuote(this.state.stock,this.state.initialQuote,this.state.quote)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("div",{className:"col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 searchbox-position",onFocus:this.handleOnFocus,onKeyDown:function(t){return e.handleOnKeyDown(t)},onBlur:function(t){return e.handleOnBlur(t)},children:Object(a.jsx)(k.ReactSearchAutocomplete,{items:this.props.stockExchangeData,fuseOptions:{keys:["description","symbol"]},resultStringKeyName:"description",onSearch:function(t,s){return e.handleOnSearch(t,s)},onSelect:function(t){return e.handleOnSelect(t)},maxResults:this.state.maxResults,placeholder:window.innerWidth>=500?"Get real-time US stock prices amongst the ".concat(this.props.stockExchangeData.length.toLocaleString("en-US")," available"):"".concat(this.props.stockExchangeData.length.toLocaleString("en-US")," stock prices"),styling:{boxShadow:"#5350ffcc 0px 1px 6px 0px",iconColor:"#5350ffcc",fontSize:"1rem",fontFamily:"'Lato', sans-serif"}})}),Object(a.jsx)(R,{isLoading:this.state.isLoading,isInputFocused:this.state.isInputFocused,isSearching:this.state.isSearching,description:this.state.description,quote:this.state.quote,quoteColor:this.state.quoteColor,delta:this.state.delta,percentage:this.state.percentage}),Object(a.jsx)(p,{isRequestSuccessful:this.state.isRequestSuccessful,isLoading:this.state.isLoading,stockExchangeData:this.props.stockExchangeData})]})}}]),s}(n.Component),L=function(e){var t=e.isRequestSuccessful,s=e.isPageLoading,n=e.stockExchangeData;return t&&!s?Object(a.jsx)("div",{className:"row row-content",children:Object(a.jsx)(q,{stockExchangeData:n})}):null},w=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={isPageLoading:!0,stockExchangeData:[],isRequestSuccessful:!0},a.updateStockExchangeData=a.updateStockExchangeData.bind(Object(g.a)(a)),a}return Object(l.a)(s,[{key:"updateStockExchangeData",value:function(){var e=this;x.stockSymbols("US",(function(t,s,a){if(console.log(a),200!==a.statusCode)e.setState({isRequestSuccessful:!1,isPageLoading:!1});else{var n=s.map((function(e,t){return Object(b.a)(Object(b.a)({},e),{},{id:e.description})}));e.setState({stockExchangeData:n,isPageLoading:!1})}}))}},{key:"componentDidMount",value:function(){this.updateStockExchangeData()}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container main",children:[Object(a.jsx)(p,{isRequestSuccessful:this.state.isRequestSuccessful,isLoading:this.state.isPageLoading,stockExchangeData:this.state.stockExchangeData}),Object(a.jsx)(f,{isRequestSuccessful:this.state.isRequestSuccessful,isPageLoading:this.state.isPageLoading}),Object(a.jsx)(L,{isRequestSuccessful:this.state.isRequestSuccessful,isPageLoading:this.state.isPageLoading,stockExchangeData:this.state.stockExchangeData})]})}}]),s}(n.Component),E=s(14),D=s(12),C=s(86),I=function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("div",{className:"col-3 d-inline-block text-center",children:Object(a.jsx)("a",{className:"btn btn-social-icon btn-github-square btn-primary btn-third-dimension",href:"https://github.com/abDevII",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(E.a,{icon:D.a})})}),Object(a.jsx)("div",{className:"col-3 d-inline-block text-center",children:Object(a.jsx)("a",{className:"btn btn-social-icon btn-linkedin btn-third-dimension",href:"https://www.linkedin.com/in/arthur-j-barbey/",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(E.a,{icon:D.b})})}),Object(a.jsx)("div",{className:"col-3 d-inline-block text-center",children:Object(a.jsx)("a",{className:"btn btn-social-icon btn-twitter btn-third-dimension",href:"https://twitter.com/BarbeyArthur",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(E.a,{icon:D.c})})}),Object(a.jsx)("div",{className:"col-3 d-inline-block text-center",children:Object(a.jsx)("a",{className:"btn btn-social-icon btn-primary btn-third-dimension",href:"mailto:barbey.arthur@gmail.com",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(E.a,{icon:C.a})})})]})})})})},F=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(w,{}),Object(a.jsx)(I,{})]})}}]),s}(n.Component),P=(s(145),function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsx)(F,{})}}]),s}(n.Component)),T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,149)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),T()},99:function(e,t,s){}},[[146,1,2]]]);
//# sourceMappingURL=main.612b6678.chunk.js.map