(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/github.2977a212.svg"},114:function(e,t,a){e.exports=a(225)},119:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),l=a.n(o),c=(a(119),a(13)),i=a(14),s=a(16),u=a(15),d=a(51),m=a(38),h=a(230),f=a(235),p=a(231),E=a(236),v=a(232),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={covidSummaryData:["Loading Data..."]},e.searchCountry=e.searchCountry.bind(Object(d.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.data.map((function(e){return r.a.createElement("tr",{key:e.Country},r.a.createElement("td",null,r.a.createElement("a",{href:"#/Detail/".concat(e.CountryCode)},e.Country," ",r.a.createElement(m.a,{countryCode:e.CountryCode,svg:!0,cdnUrl:"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/",cdnSuffix:"svg",title:e.CountryCode}))),r.a.createElement("td",null,e.NewConfirmed.toLocaleString()),r.a.createElement("td",null,e.TotalConfirmed.toLocaleString()),r.a.createElement("td",null,e.NewRecovered.toLocaleString()),r.a.createElement("td",null,e.NewDeaths.toLocaleString()),r.a.createElement("td",null,e.TotalDeaths.toLocaleString()),r.a.createElement("td",null,new Date(e.Date).toLocaleDateString()))}));this.setState({covidSummaryData:e})}},{key:"searchCountry",value:function(e){var t=this.props.data.filter((function(t){return t.Country.toLowerCase().includes(e.target.value.toString().toLowerCase())}));console.log(t[0]);var a=t.map((function(e){return r.a.createElement("tr",{key:e.Country},r.a.createElement("td",null,r.a.createElement("a",{href:"#/Detail/".concat(e.CountryCode)},e.Country," ",r.a.createElement(m.a,{countryCode:e.CountryCode,svg:!0,cdnUrl:"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/",cdnSuffix:"svg",title:e.CountryCode}))),r.a.createElement("td",null,e.NewConfirmed.toLocaleString()),r.a.createElement("td",null,e.TotalConfirmed.toLocaleString()),r.a.createElement("td",null,e.NewRecovered.toLocaleString()),r.a.createElement("td",null,e.NewDeaths.toLocaleString()),r.a.createElement("td",null,e.TotalDeaths.toLocaleString()),r.a.createElement("td",null,new Date(e.Date).toLocaleDateString()))}));this.setState({covidSummaryData:a})}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("h1",null,"World COVID-19 Stats"),r.a.createElement(f.a,null,r.a.createElement(f.a.Body,null,r.a.createElement(p.a,{size:"sm",className:"mb-3"},r.a.createElement(E.a,{"aria-label":"Large",placeholder:"Search Country Name...",onChange:this.searchCountry})),r.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",{style:{color:"#bf7171"}},"New Confirmed"),r.a.createElement("th",{style:{color:"#cfa534"}},"Total Confirmed"),r.a.createElement("th",{style:{color:"#56d143"}},"New Recovered"),r.a.createElement("th",{style:{color:"#eb2828"}},"New Deaths"),r.a.createElement("th",{style:{color:"#e32749"}},"Total Deaths"),r.a.createElement("th",null,"Last Updated"))),r.a.createElement("tbody",null,this.state.covidSummaryData)))))}}]),a}(n.Component),g=a(108),b=a(109),y=a(40);function D(e,t,a){var n=[];switch(e){case"NewConfirmed":return n=a.filter((function(e){return e.CountryCode===t})).map((function(e){return e.NewConfirmed}));case"TotalConfirmed":return n=a.filter((function(e){return e.CountryCode===t})).map((function(e){return e.TotalConfirmed}));case"NewRecovered":return n=a.filter((function(e){return e.CountryCode===t})).map((function(e){return e.NewRecovered}));case"TotalRecovered":return n=a.filter((function(e){return e.CountryCode===t})).map((function(e){return e.TotalRecovered}));case"NewDeaths":return n=a.filter((function(e){return e.CountryCode===t})).map((function(e){return e.NewDeaths}));case"TotalDeaths":return n=a.filter((function(e){return e.CountryCode===t})).map((function(e){return e.TotalDeaths}));case"LastUpdated":return n=a.filter((function(e){return e.CountryCode===t})).map((function(e){return e.Date})),new Date(n).toLocaleDateString();default:return"N/A"}}var w=Object(n.memo)((function(e){var t=e.setTooltipContent,a=e.data;return r.a.createElement(r.a.Fragment,null,console.log(a),r.a.createElement(y.ComposableMap,{"data-tip":"",projectionConfig:{scale:200}},r.a.createElement(y.ZoomableGroup,null,r.a.createElement(y.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(e){return e.geographies.map((function(e){return r.a.createElement(y.Geography,{key:e.rsmKey,geography:e,onMouseEnter:function(){var n=e.properties,o=n.NAME,l=n.ISO_A2;t(r.a.createElement("div",null,r.a.createElement("b",null,o),r.a.createElement("br",null),"New Confirmed: ",D("NewConfirmed",l,a),r.a.createElement("br",null),"Total Confirmed: ",D("TotalConfirmed",l,a),r.a.createElement("br",null),"New Recovered: ",D("NewRecovered",l,a),r.a.createElement("br",null),"Total Recovered: ",D("TotalRecovered",l,a),r.a.createElement("br",null),"New Deaths: ",D("NewDeaths",l,a),r.a.createElement("br",null),"Total Deaths: ",D("TotalDeaths",l,a),r.a.createElement("br",null),"Last Updated: ",D("LastUpdated",l,a)))},onMouseLeave:function(){t("")},style:{default:{fill:"#D6D6DA",outline:"none"},hover:{fill:"#F7615E",outline:"none"},pressed:{fill:"#E42",outline:"none"}}})}))})))))}));var S=function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),o=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(w,{setTooltipContent:l,data:e.data}),r.a.createElement(b.a,null,o)))},T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={summary:["Loading..."],loadingData:!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19api.com/world/total").then((function(e){return e.json()})).then((function(t){return e.setState({summary:t,loadingData:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement(h.a,{className:"d-flex justify-content-center"},r.a.createElement(f.a,{className:"bg-success text-white",style:{padding:15,margin:1,fontSize:25}},r.a.createElement("b",null,"Total Recovered")," ",r.a.createElement("span",{style:{textAlign:"center",fontSize:50}},null!=this.state.summary.TotalRecovered?this.state.summary.TotalRecovered.toLocaleString():null)),r.a.createElement(f.a,{className:"bg-info text-white",style:{padding:15,margin:1,fontSize:25}},r.a.createElement("b",null,"Total Confirmed")," ",r.a.createElement("span",{style:{textAlign:"center",fontSize:50}},null!=this.state.summary.TotalConfirmed?this.state.summary.TotalConfirmed.toLocaleString():null)),r.a.createElement(f.a,{className:"bg-danger text-white",style:{padding:15,margin:1,fontSize:25}},r.a.createElement("b",null,"Total Deaths")," ",r.a.createElement("span",{style:{textAlign:"center",fontSize:50}},null!=this.state.summary.TotalDeaths?this.state.summary.TotalDeaths.toLocaleString():null))))}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={loadingData:!0,apiData:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(t){e.setState({apiData:t,loadingData:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,{data:this.state.apiData.Countries}),r.a.createElement(T,null),this.state.loadingData?r.a.createElement("h1",null,"Fetching Data..."):r.a.createElement(C,{data:this.state.apiData.Countries}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(234),N=a(110);var R=function(){return r.a.createElement("div",null,r.a.createElement(L.a,{bg:"light",expand:"lg"},r.a.createElement(L.a.Brand,{href:"#"},"CoVid-19 Stats"),r.a.createElement(L.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(L.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(N.a,{className:"mr-auto"},r.a.createElement(N.a.Link,{href:"#/"},"Home"),r.a.createElement(N.a.Link,{href:"#/About"},"About")))))},k=a(105),O=a.n(k);var x=function(){return r.a.createElement("div",{className:"fixed-bottom"},r.a.createElement(L.a,{expand:"lg",bg:"light"},r.a.createElement("div",null,"Crafted with ",r.a.createElement("span",{style:{color:"#e25555"}},"\u2665")," by Chi Li. - "),r.a.createElement("div",{style:{paddingBottom:5}},r.a.createElement("a",{href:"https://github.com/ChiShingLi/"},"\xa0",r.a.createElement("img",{src:O.a,width:20})))))},B=a(106),A=a(6);var H=function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement("h1",null,"About"),r.a.createElement("h5",null," This React web app was created as an personal project."),"Please Note: The data presented on this site might not be accurate or complete.",r.a.createElement("br",null),"*All the COVID data are gathered from (http://covid19api.com/) API.",r.a.createElement("br",null)))},M=a(62),z=a(237),U=a(233),F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={totalConfirmedData:[],totalRecoveredData:[],totalDeathsData:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=[],t=[],a=[],n=[];this.props.data.map((function(r){e.push(new Date(r.Date).toLocaleDateString()),t.push(r.Confirmed),a.push(r.Recovered),n.push(r.Deaths)}));var r={labels:e,datasets:[{label:"Total Confirmed",fill:!1,lineTension:.1,borderColor:"#3ccafa",pointBorderColor:"#3ccafa",pointBackgroundColor:"#3ccafa",pointHoverBackgroundColor:"#3ccafa",pointHoverBorderColor:"#3ccafa",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]},o={labels:e,datasets:[{label:"Total Recovered",fill:!1,lineTension:.1,borderColor:"#0bb519",pointBorderColor:"#0bb519",pointBackgroundColor:"#0bb519",pointHoverBackgroundColor:"#0bb519",pointHoverBorderColor:"#0bb519",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a}]},l={labels:e,datasets:[{label:"Total Deaths",fill:!1,lineTension:.1,borderColor:"red",pointBorderColor:"red",pointBackgroundColor:"red",pointHoverBackgroundColor:"red",pointHoverBorderColor:"red",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:n}]};this.setState({totalConfirmedData:r,totalRecoveredData:o,totalDeathsData:l})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Chart"},r.a.createElement(z.a,{defaultActiveKey:"totalConfirmed"},r.a.createElement(U.a,{eventKey:"totalConfirmed",title:"Total Confirmed"},r.a.createElement(M.Line,{data:this.state.totalConfirmedData})),r.a.createElement(U.a,{eventKey:"totalRecovered",title:"Total Recovered"},r.a.createElement(M.Line,{data:this.state.totalRecoveredData})),r.a.createElement(U.a,{eventKey:"totalDeaths",title:"Total Deaths"},r.a.createElement(M.Line,{data:this.state.totalDeathsData}))))}}]),a}(n.Component),W=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={apiData:[],loadingData:!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;fetch("https://api.covid19api.com/total/dayone/country/".concat(t.id)).then((function(e){return e.json()})).then((function(t){e.setState({apiData:t,loadingData:!1})}))}},{key:"render",value:function(){var e=this.props.match.params;return r.a.createElement(h.a,null,this.state.loadingData?"loading data...":r.a.createElement("h1",null,this.state.apiData[0].Country," ",r.a.createElement(m.a,{countryCode:e.id,svg:!0,cdnUrl:"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/",cdnSuffix:"svg",title:e.id})),this.state.loadingData?"loading data...":r.a.createElement(F,{data:this.state.apiData}))}}]),a}(n.Component);a(219);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{style:{background:"#F2F2F2"}},r.a.createElement(R,null),r.a.createElement(B.a,{basename:"/"},r.a.createElement(A.a,{exact:!0,path:"/",component:j}),r.a.createElement(A.a,{path:"/About",component:H}),r.a.createElement(A.a,{path:"/Detail/:id",component:W})),r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);
//# sourceMappingURL=main.538d5ef8.chunk.js.map