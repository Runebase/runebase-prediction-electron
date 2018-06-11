webpackJsonp([0],{188:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l,u,c,d,p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),m=n(f),g=a(4),b=n(g),h=a(24),v=a(508),y=n(v),T=a(35),w=a(18),E=a(2322),S=n(E),x=a(2367),R=n(x),k=a(36),M=a(2369),C=n(M),O=0,_=1,P=2,j=3,A=(0,w.defineMessages)({set:{id:"activitiesTab.Set",defaultMessage:"Result Setting"},finalize:{id:"str.finalize",defaultMessage:"Finalize"},withdraw:{id:"str.withdraw",defaultMessage:"Withdraw"},history:{id:"activitiesTab.History",defaultMessage:"Activities History"}}),B=(i=(0,T.withStyles)(C.default,{withTheme:!0}),l=(0,h.connect)(function(e){return Object.assign({},e.App.toJS(),{actionableItemCount:e.Graphql.get("actionableItemCount")})}),(0,w.injectIntl)(u=i(u=l((d=c=function(e){function t(e){r(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=void 0;switch(a.props.match.path){case k.RouterPath.set:n=O;break;case k.RouterPath.finalize:n=_;break;case k.RouterPath.withdraw:n=P;break;case k.RouterPath.activityHistory:n=j}return a.state={tabIdx:n},a.getTabLabel=a.getTabLabel.bind(a),a.handleTabChange=a.handleTabChange.bind(a),a}return o(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.history,n=this.state.tabIdx;return m.default.createElement("div",null,m.default.createElement(y.default,{indicatorColor:"primary",value:n,onChange:this.handleTabChange,className:t.activitiesTabWrapper},m.default.createElement(v.Tab,{label:this.getTabLabel(k.EventStatus.Set)}),m.default.createElement(v.Tab,{label:this.getTabLabel(k.EventStatus.Finalize)}),m.default.createElement(v.Tab,{label:this.getTabLabel(k.EventStatus.Withdraw)}),m.default.createElement(v.Tab,{label:this.props.intl.formatMessage(A.history)})),m.default.createElement("div",{className:t.activitiesTabContainer},n===O&&m.default.createElement(S.default,{eventStatusIndex:k.EventStatus.Set}),n===_&&m.default.createElement(S.default,{eventStatusIndex:k.EventStatus.Finalize}),n===P&&m.default.createElement(S.default,{eventStatusIndex:k.EventStatus.Withdraw}),n===j&&m.default.createElement(R.default,{history:a})))}},{key:"getTabLabel",value:function(e){var t=this.props,a=t.actionableItemCount,n=t.intl,r=void 0,s=void 0;switch(e){case k.EventStatus.Set:r=n.formatMessage(A.set),s=a[k.EventStatus.Set];break;case k.EventStatus.Finalize:r=n.formatMessage(A.finalize),s=a[k.EventStatus.Finalize];break;case k.EventStatus.Withdraw:r=n.formatMessage(A.withdraw),s=a[k.EventStatus.Withdraw]}var o="";return s>0&&(o=" ("+s+")"),""+r+o}},{key:"handleTabChange",value:function(e,t){switch(t){case O:this.props.history.push(k.RouterPath.set);break;case _:this.props.history.push(k.RouterPath.finalize);break;case P:this.props.history.push(k.RouterPath.withdraw);break;case j:this.props.history.push(k.RouterPath.activityHistory);break;default:throw new Error("Invalid tab index: "+t)}}}]),t}(f.Component),c.propTypes={intl:w.intlShape.isRequired,match:b.default.object.isRequired,history:b.default.object.isRequired,classes:b.default.object.isRequired,actionableItemCount:b.default.object},c.defaultProps={actionableItemCount:void 0},u=d))||u)||u)||u);t.default=B},2318:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return{txidLabel:{width:"150px"},txidRow:{position:"relative",height:"85px"},txidWrapper:{position:"absolute",left:"24px",top:"4px",bottom:"4px",right:"24px",paddingTop:"18px"},txIdText:{"&:hover":{color:"#585AFA",cursor:"pointer"},textDecoration:"underline"}}};t.default=n},2320:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),s=n(r),o=a(4),i=n(o),l=a(27),u=a(18),c=a(2318),d=n(c),p=a(134),f=n(p),m=function(e){var t=e.classes,a=e.transaction;return s.default.createElement(l.TableCell,{padding:"dense",className:t.txidRow},s.default.createElement("div",{className:t.txidWrapper},s.default.createElement("div",{className:t.txidLabel},s.default.createElement(u.FormattedMessage,{id:"str.transactionId",defaultMessage:"Transaction ID"})),s.default.createElement("div",{className:t.txIdText,onClick:function(e){e.stopPropagation(),window.open(f.default.explorer.tx+"/"+a.txid,"_blank")}},a.txid)))};m.propTypes={classes:i.default.object.isRequired,transaction:i.default.object.isRequired},t.default=(0,u.injectIntl)((0,l.withStyles)(d.default,{withTheme:!0})(m))},2321:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),s=n(r),o=a(4),i=n(o),l=a(285),u=a(18),c=a(35),d=a(2318),p=n(d),f=function(e){var t=e.classes,a=e.transaction;return s.default.createElement(l.TableCell,{padding:"dense",className:t.txidRow},s.default.createElement("div",{className:t.txidWrapper},s.default.createElement("div",{className:t.txidLabel},s.default.createElement(u.FormattedMessage,{id:"str.addressUsed",defaultMessage:"Address Used"})),s.default.createElement("div",null,a.senderAddress)))};f.propTypes={classes:i.default.object.isRequired,transaction:i.default.object.isRequired},t.default=(0,u.injectIntl)((0,c.withStyles)(p.default,{withTheme:!0})(f))},2322:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,u,c,d,p,f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(0),g=n(m),b=a(4),h=n(b),v=a(24),y=a(26),T=n(y),w=a(35),E=a(18),S=a(2323),x=n(S),R=a(36),k=a(45),M=n(k),C=a(84),O=n(C),_=a(2324),P=n(_),j=a(2327),A=n(j),B=a(2329),q=n(B),I=(0,E.defineMessages)({placeBet:{id:"bottomButtonText.placeBet",defaultMessage:"Place Bet"},setResult:{id:"str.setResult",defaultMessage:"Set Result"},arbitrate:{id:"bottomButtonText.arbitrate",defaultMessage:"Arbitrate"},finalizeResult:{id:"str.finalizeResult",defaultMessage:"Finalize Result"},withdraw:{id:"str.withdraw",defaultMessage:"Withdraw"}}),L=R.TransactionStatus.Pending,N=50,F=(l=(0,w.withStyles)(x.default,{withTheme:!0}),u=(0,v.connect)(function(e){return{topics:e.Graphql.get("getTopicsReturn"),oracles:e.Graphql.get("getOraclesReturn"),sortBy:e.Dashboard.get("sortBy"),syncBlockNum:e.App.get("syncBlockNum"),walletAddresses:e.App.get("walletAddresses"),txReturn:e.Graphql.get("txReturn")}},function(e){return{setAppLocation:function(t){return e(M.default.setAppLocation(t))},getActionableTopics:function(t,a,n,r){return e(O.default.getActionableTopics(t,a,n,r))},getOracles:function(t,a,n,r,s){return e(O.default.getOracles(t,a,n,r,s))}}}),(0,E.injectIntl)(c=l(c=u((p=d=function(e){function t(){var e,a,n,i;s(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={skip:0},n.loadMoreData=function(){var e=n.state.skip,t=n.props,a=t.eventStatusIndex,r=t.sortBy,s=t.walletAddresses;e+=N,n.executeGraphRequest(a,r,N,e,s),n.setState({skip:e})},n.setAppLocation=function(e){var t,a=(t={},r(t,R.EventStatus.Bet,R.AppLocation.qtumPrediction),r(t,R.EventStatus.Set,R.AppLocation.resultSet),r(t,R.EventStatus.Vote,R.AppLocation.botCourt),r(t,R.EventStatus.Finalize,R.AppLocation.finalize),r(t,R.EventStatus.Withdraw,R.AppLocation.withdraw),t);n.props.setAppLocation(a[e])},i=a,o(n,i)}return i(t,e),f(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.eventStatusIndex,a=e.sortBy,n=e.walletAddresses;this.setAppLocation(t),this.executeGraphRequest(t,a,N,0,n)}},{key:"componentWillReceiveProps",value:function(e){var t=e.eventStatusIndex,a=e.sortBy,n=e.syncBlockNum,r=e.walletAddresses,s=e.txReturn;if(t!==this.props.eventStatusIndex||a!==this.props.sortBy||n!==this.props.syncBlockNum||r!==this.props.walletAddresses||s!==this.props.txReturn){var o=r||this.props.walletAddresses;this.executeGraphRequest(t,a,N,0,o),this.setState({skip:0})}}},{key:"executeGraphRequest",value:function(e,t,a,n,r){var s=this.props,o=s.getActionableTopics,i=s.getOracles,l=t||R.SortBy.Ascending;switch(e){case R.EventStatus.Bet:i([{token:R.Token.Qtum,status:R.OracleStatus.Voting},{token:R.Token.Qtum,status:R.OracleStatus.Created}],{field:"endTime",direction:l},a,n);break;case R.EventStatus.Set:var u=[{token:R.Token.Qtum,status:R.OracleStatus.OpenResultSet}];T.default.each(r,function(e){u.push({token:R.Token.Qtum,status:R.OracleStatus.WaitResult,resultSetterQAddress:e.address})}),i(u,{field:"resultSetEndTime",direction:l},a,n);break;case R.EventStatus.Vote:var c=r.map(function(e){return e.address});i([{token:R.Token.Bot,status:R.OracleStatus.Voting},{token:R.Token.Qtum,status:R.OracleStatus.WaitResult,excludeResultSetterQAddress:c}],{field:"endTime",direction:l},a,n);break;case R.EventStatus.Finalize:i([{token:R.Token.Bot,status:R.OracleStatus.WaitResult}],{field:"endTime",direction:l},a,n);break;case R.EventStatus.Withdraw:o(r,{field:"blockNum",direction:l},a,n);break;default:throw new RangeError("Invalid tab position "+e)}}},{key:"render",value:function(){var e=this.props,t=e.theme,a=e.eventStatusIndex,n=R.EventStatus.Withdraw,r=a===n?this.topics:this.oracles,s=[];return s=0===r.length?g.default.createElement(A.default,null):a===n?r.map(function(e,t){return g.default.createElement(P.default,Object.assign({key:e.txid,index:t},e))}):r.map(function(e,t){return g.default.createElement(P.default,Object.assign({key:e.txid,index:t},e))}),g.default.createElement(q.default,{spacing:t.padding.sm.value,data:s,loadMore:this.loadMoreData,hasMore:s.length>=this.state.skip+N})}},{key:"oracles",get:function(){var e,t,a=this.props,n=a.oracles,s=a.eventStatusIndex,o=a.intl.formatMessage,i=(e={},r(e,R.EventStatus.Bet,o(I.placeBet)),r(e,R.EventStatus.Set,o(I.setResult)),r(e,R.EventStatus.Vote,o(I.arbitrate)),r(e,R.EventStatus.Finalize,o(I.finalizeResult)),r(e,R.EventStatus.Withdraw,o(I.withdraw)),e)[s],l=R.TransactionType.ApproveSetResult,u=R.TransactionType.SetResult,c=R.TransactionType.ApproveVote,d=R.TransactionType.Vote,p=R.TransactionType.FinalizeResult,f=R.TransactionType.Bet,m=(t={},r(t,R.EventStatus.Set,[l,u]),r(t,R.EventStatus.Vote,[c,d]),r(t,R.EventStatus.Finalize,[p]),r(t,R.EventStatus.Bet,[f]),t)[s]||[];return T.default.get(n,"data",[]).map(function(e){var t=parseFloat(T.default.sum(e.amounts).toFixed(2)),a=e.transactions.some(function(e){var t=e.type,a=e.status;return m.includes(t)&&a===L}),n=s===R.EventStatus.Vote&&e.status===R.OracleStatus.WaitResult;return Object.assign({amountLabel:s!==R.EventStatus.Finalize?t+" "+e.token:"",url:"/oracle/"+e.topicAddress+"/"+e.address+"/"+e.txid,endTime:s===R.EventStatus.Set?e.resultSetEndTime:e.endTime,unconfirmed:!e.topicAddress&&!e.address||a,buttonText:i,isUpcoming:n},e)})}},{key:"topics",get:function(){var e=this,t=R.TransactionType.WithdrawEscrow,a=R.TransactionType.Withdraw;return T.default.get(this.props.topics,"data",[]).map(function(n){var r=parseFloat(T.default.sum(n.qtumAmount).toFixed(2)),s=parseFloat(T.default.sum(n.botAmount).toFixed(2)),o=[t,a],i=n.transactions.some(function(e){var t=e.type,a=e.status;return o.includes(t)&&a===L});return Object.assign({amountLabel:r+" QTUM, "+s+" BOT",unconfirmed:i,url:"/topic/"+n.address,buttonText:e.props.intl.formatMessage(I.withdraw),isUpcoming:!1},n)})}}]),t}(m.Component),d.propTypes={theme:h.default.object.isRequired,getActionableTopics:h.default.func.isRequired,topics:h.default.object,getOracles:h.default.func,oracles:h.default.object,eventStatusIndex:h.default.number.isRequired,sortBy:h.default.string,syncBlockNum:h.default.number,setAppLocation:h.default.func.isRequired,walletAddresses:h.default.array.isRequired,intl:E.intlShape.isRequired,status:h.default.string,txReturn:h.default.object},d.defaultProps={txReturn:void 0,topics:{},getOracles:void 0,oracles:{},sortBy:R.SortBy.Ascending,syncBlockNum:void 0,status:""},c=p))||c)||c)||c);t.default=F},2323:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return{scroll:{width:"100%",display:"flex",flexWrap:"wrap",boxSizing:"border-box"},hint:{position:"fixed",bottom:"140px",left:"23px",boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)"}}};t.default=n},2324:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l,u,c,d,p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),m=n(f),g=a(4),b=n(g),h=a(104),v=a(18),y=a(27),T=a(7),w=n(T),E=a(500),S=n(E),x=a(2325),R=n(x),k=a(2326),M=n(k),C=a(68),O=(0,v.defineMessages)({raise:{id:"str.raised",defaultMessage:"Raised"},ends:{id:"str.ends",defaultMessage:"Ends"},upcoming:{id:"str.upcoming",defaultMessage:"Upcoming"}}),_=(i=(0,y.withStyles)(M.default,{withTheme:!0}),l=(0,y.withStyles)(R.default,{withTheme:!0}),(0,v.injectIntl)(u=i(u=l((d=c=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.index,n=e.url,r=e.name,s=e.amountLabel,o=e.endTime,i=e.buttonText,l=e.unconfirmed,u=e.isUpcoming,c=this.props.intl,d=c.locale,p=c.messages;return m.default.createElement(y.Grid,{item:!0,xs:12,sm:6,md:4,lg:3},m.default.createElement(h.Link,{to:n},m.default.createElement(y.Card,{className:t.eventCard},m.default.createElement("div",{className:(0,w.default)(t.eventCardBg,"bg"+a%8)}),m.default.createElement("div",{className:(0,w.default)(t.eventCardSection,"top")},l&&m.default.createElement(S.default,{id:"str.pendingConfirmation",message:"Pending Confirmation"}),u&&m.default.createElement(S.default,{id:"str.upcoming",message:"Upcoming",type:"upcoming"}),m.default.createElement(y.Typography,{variant:"headline",className:t.eventCardName},r),m.default.createElement("div",{className:t.dashboardTime},void 0!==o&&this.props.intl.formatMessage(O.ends)+": "+(0,C.getShortLocalDateTimeString)(o)),m.default.createElement("div",{className:t.eventCardInfo},s&&m.default.createElement("div",null,m.default.createElement("i",{className:(0,w.default)(t.dashBoardCardIcon,"icon iconfont icon-ic_token")}),m.default.createElement(v.FormattedMessage,{id:"str.raised",defaultMessage:"Raised"})," "+s),m.default.createElement("div",null,m.default.createElement("i",{className:(0,w.default)(t.dashBoardCardIcon,"icon iconfont icon-ic_timer")}),void 0!==o?""+(0,C.getEndTimeCountDownString)(o,d,p):m.default.createElement(v.FormattedMessage,{id:"str.end",defaultMessage:"Ended"})))),m.default.createElement(y.Divider,null),m.default.createElement("div",{className:(0,w.default)(t.eventCardSection,"button")},u?m.default.createElement(v.FormattedMessage,{id:"str.waitForResultSetting",defaultMessage:"Waiting for result setting"}):i))))}}]),t}(f.Component),c.propTypes={classes:b.default.object.isRequired,index:b.default.number.isRequired,url:b.default.string.isRequired,name:b.default.string.isRequired,amountLabel:b.default.string,endTime:b.default.string,buttonText:b.default.string.isRequired,unconfirmed:b.default.bool.isRequired,intl:v.intlShape.isRequired,isUpcoming:b.default.bool.isRequired},c.defaultProps={amountLabel:void 0,endTime:void 0},u=d))||u)||u)||u);t.default=_},2325:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{eventCard:{position:"relative"},eventCardSection:{position:"relative",padding:e.padding.sm.px,"&.top":{height:"320px"},"&.button":{textAlign:"center",paddingTop:e.padding.xs.px,paddingBottom:e.padding.xs.px,lineHeight:1,fontSize:e.sizes.font.textMd,color:e.palette.text.primary}},dashboardTime:{color:e.palette.text.hint},eventCardName:{marginBottom:e.padding.xs.px,display:"-webkit-box",maxWidth:"400px",maxHeight:"160px",margin:"0 auto",WebkitLineClamp:5,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis"},unconfirmedTag:{background:e.palette.secondary.light,color:e.palette.secondary.main,border:"solid 1px "+e.palette.secondary.main,borderRadius:e.borderRadius,padding:"2px "+e.padding.unit.px,marginBottom:e.padding.unit.px,fontSize:e.sizes.font.meta},dashBoardCardIcon:{marginRight:e.padding.unit.px},eventCardInfo:{position:"absolute",bottom:e.padding.sm.px,color:e.palette.text.primary}}};t.default=n},2326:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{eventCardSection:{"&.top":{marginTop:"30px"}},eventCardBg:{position:"absolute",left:e.padding.sm.px,right:0,height:"50px",backgroundImage:"url(/images/sports-card-1.png)",backgroundSize:"cover",backgroundPosition:"right",backgroundRepeat:"no-repeat","&.bg1":{backgroundImage:"url(/images/sports-card-2.png)"},"&.bg2":{backgroundImage:"url(/images/sports-card-3.png)"},"&.bg3":{backgroundImage:"url(/images/sports-card-4.png)"},"&.bg4":{backgroundImage:"url(/images/sports-card-5.png)"},"&.bg5":{backgroundImage:"url(/images/sports-card-6.png)"},"&.bg6":{backgroundImage:"url(/images/sports-card-7.png)"},"&.bg7":{backgroundImage:"url(/images/sports-card-8.png)"}}}};t.default=n},2327:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),s=n(r),o=a(4),i=n(o),l=a(18),u=a(37),c=n(u),d=a(501),p=n(d),f=a(35),m=a(2328),g=n(m),b=function(e){var t=e.classes;return s.default.createElement("div",{className:t.eventsEmptyWrapper},s.default.createElement(p.default,{className:t.eventsEmptyIcon,fontSize:!0}),s.default.createElement(c.default,{variant:"body1"},s.default.createElement(l.FormattedMessage,{id:"dashboard.empty",defaultMessage:"No Event at Current Status"})," "))};b.propTypes={classes:i.default.object.isRequired},t.default=(0,f.withStyles)(g.default,{withTheme:!0})(b)},2328:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return{eventsEmptyWrapper:{width:"300px",position:"relative",left:"50%",marginLeft:"-150px",top:"15vh",textAlign:"center"},eventsEmptyIcon:{fontSize:"100px",opacity:"0.15"}}};t.default=n},2329:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l,u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),d=n(c),p=a(4),f=n(p),m=a(103),g=n(m),b=(l=i=function(e){function t(){var e,a,n,o;r(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return a=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.handleOnScroll=function(){var e=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight,a=document.documentElement.clientHeight||window.innerHeight;Math.ceil(e+a)>=t&&n.props.hasMore&&n.props.loadMore()},o=a,s(n,o)}return o(t,e),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleOnScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleOnScroll)}},{key:"render",value:function(){return d.default.createElement(g.default,{container:!0,spacing:this.props.spacing},this.props.data)}}]),t}(c.Component),i.propTypes={hasMore:f.default.bool,loadMore:f.default.func,spacing:f.default.number,data:f.default.oneOfType([f.default.array,f.default.object])},i.defaultProps={hasMore:!1,loadMore:void 0,spacing:void 0,data:void 0},l);t.default=b},2331:function(e,t,a){"use strict";function n(e,t,a){var n=(0,s.getIntlProvider)(t,a),r=n.formatMessage;switch(e){case o.TransactionType.ApproveCreateEvent:case o.TransactionType.ApproveSetResult:case o.TransactionType.ApproveVote:return r(i.approveBotTransfer);case o.TransactionType.CreateEvent:return r(i.createEvent);case o.TransactionType.Bet:return r(i.bet);case o.TransactionType.SetResult:return r(i.setResult);case o.TransactionType.Vote:return r(i.vote);case o.TransactionType.FinalizeResult:return r(i.finalizeResult);case o.TransactionType.Withdraw:return r(i.withdraw);case o.TransactionType.WithdrawEscrow:return r(i.withdrawEscrow);case o.TransactionType.Transfer:return r(i.transfer);case o.TransactionType.ResetApprove:return r(i.resetApproval);default:return console.error("Invalid txType: "+e),""}}Object.defineProperty(t,"__esModule",{value:!0}),t.getTxTypeString=n;var r=a(18),s=a(286),o=a(36),i=(0,r.defineMessages)({resetApproval:{id:"tx.resetApproval",defaultMessage:"Reset Approval"},approveBotTransfer:{id:"tx.approveBotTransfer",defaultMessage:"Approve BOT Transfer"},createEvent:{id:"str.createEvent",defaultMessage:"Create Event"},bet:{id:"str.bet",defaultMessage:"Bet"},setResult:{id:"str.setResult",defaultMessage:"Set Result"},vote:{id:"str.vote",defaultMessage:"Vote"},finalizeResult:{id:"str.finalizeResult",defaultMessage:"Finalize Result"},withdraw:{id:"str.withdraw",defaultMessage:"Withdraw"},withdrawEscrow:{id:"str.withdrawEscrow",defaultMessage:"Withdraw Escrow"},transfer:{id:"str.transfer",defaultMessage:"Transfer"}})},2367:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function s(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,d,p,f,m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(0),b=n(g),h=a(4),v=n(h),y=a(26),T=n(y),w=a(24),E=a(103),S=n(E),x=a(37),R=n(x),k=a(285),M=n(k),C=a(7),O=n(C),_=a(504),P=n(_),j=a(35),A=a(18),B=a(2368),q=n(B),I=a(69),L=n(I),N=a(2320),F=n(N),z=a(2321),W=n(z),D=a(45),H=n(D),V=a(84),U=n(V),G=a(68),Q=a(286),J=a(2331),X=a(36),Y=((0,A.defineMessages)({statusSuccess:{id:"str.success",defaultMessage:"Success"},statusPending:{id:"str.pending",defaultMessage:"Pending"},statusFail:{id:"str.fail",defaultMessage:"Fail"}}),u=(0,j.withStyles)(q.default,{withTheme:!0}),c=(0,w.connect)(function(e){return{syncBlockNum:e.App.get("syncBlockNum"),oracles:e.Graphql.get("getOraclesReturn"),transactions:e.Graphql.get("getTransactionsReturn")}},function(e){return{setAppLocation:function(t){return e(H.default.setAppLocation(t))},getOracles:function(t,a){return e(U.default.getOracles(t,a))},getTransactions:function(t,a,n,r){return e(U.default.getTransactions(t,a,n,r))}}}),(0,A.injectIntl)(d=u(d=c((f=p=function(e){function t(){var e,a,n,r;o(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return a=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={transactions:[],order:X.SortBy.Descending.toLowerCase(),orderBy:"createdTime",perPage:10,page:0,limit:50,skip:0,expanded:[]},n.executeTxsRequest=function(){var e=n.state,t=e.orderBy,a=e.order,r=e.limit,s=e.skip,o=a===X.SortBy.Descending.toLowerCase()?X.SortBy.Descending:X.SortBy.Ascending;n.props.getTransactions([{type:X.TransactionType.ApproveCreateEvent},{type:X.TransactionType.CreateEvent},{type:X.TransactionType.Bet},{type:X.TransactionType.ApproveSetResult},{type:X.TransactionType.SetResult},{type:X.TransactionType.ApproveVote},{type:X.TransactionType.Vote},{type:X.TransactionType.FinalizeResult},{type:X.TransactionType.Withdraw},{type:X.TransactionType.WithdrawEscrow},{type:X.TransactionType.ResetApprove}],{field:t,direction:o},r,s)},n.getTableHeader=function(){var e=[{id:"createdTime",name:"str.time",nameDefault:"Time",numeric:!1,sortable:!0},{id:"type",name:"str.type",nameDefault:"Type",numeric:!1,sortable:!0},{id:"name",name:"str.name",nameDefault:"Name",numeric:!1,sortable:!1},{id:"amount",name:"str.amount",nameDefault:"Amount",numeric:!0,sortable:!0},{id:"fee",name:"str.fee",nameDefault:"Gas Fee (QTUM)",numeric:!0,sortable:!0},{id:"status",name:"str.status",nameDefault:"Status",numeric:!1,sortable:!0},{id:"actions",name:"str.empty",nameDefault:"",numeric:!1,sortable:!1}];return b.default.createElement(k.TableHead,null,b.default.createElement(k.TableRow,null,e.map(function(e){return e.sortable?n.getSortableCell(e):n.getNonSortableCell(e)})))},n.getSortableCell=function(e){var t=n.state,a=t.order,r=t.orderBy;return b.default.createElement(k.TableCell,{key:e.id,numeric:e.numeric,sortDirection:r===e.id&&a},b.default.createElement(P.default,{title:b.default.createElement(A.FormattedMessage,{id:"str.sort",defaultMessage:"Sort"}),enterDelay:L.default.intervals.tooltipDelay,placement:e.numeric?"bottom-end":"bottom-start"},b.default.createElement(k.TableSortLabel,{active:r===e.id,direction:a,onClick:n.createSortHandler(e.id)},b.default.createElement(A.FormattedMessage,{id:e.name,default:e.nameDefault}))))},n.getNonSortableCell=function(e){return b.default.createElement(k.TableCell,{key:e.id,numeric:e.numeric},b.default.createElement(A.FormattedMessage,{id:e.name,default:e.nameDefault}))},n.getTableRows=function(){var e=n.state,t=e.transactions,a=e.page,r=e.perPage,s=T.default.slice(t,a*r,a*r+r);return b.default.createElement(k.TableBody,null,T.default.map(s,function(e,t){return n.getTableRow(e,t)}))},n.handleClick=function(e,t){return function(a){var r=n.state.expanded,o=r.indexOf(e),i=[];t?n.props.getOracles([{topicAddress:t}],{field:"endTime",direction:X.SortBy.Descending}):i=-1===o?[].concat(s(r),[e]):[].concat(s(r.slice(0,o)),s(r.slice(o+1))),n.setState({expanded:i})}},n.getTableRow=function(e){var t=e.name,a=e.topic,r=e.type,s=e.txid,o=e.amount,i=e.token,l=e.fee,u=e.status,c=e.createdTime,d=n.props,p=d.intl,f=d.classes,m=p.locale,g=p.messages,h=[],v=n.state.expanded.includes(s);return h[0]=b.default.createElement(k.TableRow,{key:s,selected:v,onClick:n.handleClick(s),className:f.clickToExpandRow},b.default.createElement(k.TableCell,{className:f.summaryRowCell},(0,G.getShortLocalDateTimeString)(c)),b.default.createElement(k.TableCell,null,(0,J.getTxTypeString)(r,m,g)),b.default.createElement(K,{clickable:a&&a.address,onClick:n.handleClick(s,a&&a.address)},t||a&&a.name),b.default.createElement(k.TableCell,{numeric:!0},(o||"")+"  "+(o?i:"")),b.default.createElement(k.TableCell,{numeric:!0},l),b.default.createElement(k.TableCell,null,b.default.createElement(A.FormattedMessage,{id:("str."+u).toLowerCase()},function(e){return(0,Q.i18nToUpperCase)(e)})),b.default.createElement(k.TableCell,null,b.default.createElement("i",{className:(0,O.default)(v?"icon-ic_down":"icon-ic_up","icon iconfont",f.arrowSize)}))),h[1]=b.default.createElement(k.TableRow,{key:"txaddr-"+s,selected:!0,onClick:n.handleClick(s),className:v?f.show:f.hide},b.default.createElement(W.default,{transaction:e,className:f.detailRow}),b.default.createElement(k.TableCell,null),b.default.createElement(F.default,{transaction:e}),b.default.createElement(k.TableCell,null),b.default.createElement(k.TableCell,null),b.default.createElement(k.TableCell,null),b.default.createElement(k.TableCell,null)),h},n.getTableFooter=function(){var e=n.state,t=e.transactions,a=e.perPage,r=e.page;return b.default.createElement(k.TableFooter,null,b.default.createElement(k.TableRow,null,b.default.createElement(k.TablePagination,{colSpan:12,count:t.length,rowsPerPage:a,page:r,onChangePage:n.handleChangePage,onChangeRowsPerPage:n.handleChangePerPage})))},n.handleChangePage=function(e,t){var a=n.state,r=a.transactions,s=a.perPage,o=a.skip;n.setState({expanded:[]});var i=o;Math.floor(r.length/s)-1===t&&(i=r.length),n.setState({page:t,skip:i})},n.handleChangePerPage=function(e){n.setState({perPage:e.target.value})},n.createSortHandler=function(e){return function(t){n.handleSorting(t,e)}},n.handleSorting=function(e,t){var a=n.state.transactions,r=t,s=X.SortBy.Descending.toLowerCase();n.state.orderBy===t&&n.state.order===X.SortBy.Descending.toLowerCase()&&(s=X.SortBy.Ascending.toLowerCase());var o=T.default.orderBy(a,[r],[s]);n.setState({transactions:o,orderBy:r,order:s})},r=a,i(n,r)}return l(t,e),m(t,[{key:"componentWillMount",value:function(){(0,this.props.setAppLocation)(X.AppLocation.activityHistory),this.executeTxsRequest()}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,a=t.oracles,n=t.transactions,r=t.syncBlockNum;if(e.oracles!==a){var s=(0,G.getDetailPagePath)(e.oracles.data);s&&this.props.history.push(s)}if(e.syncBlockNum!==r&&this.executeTxsRequest(),e.transactions||n){var o=T.default.orderBy(e.transactions?e.transactions:n,[this.state.orderBy],[this.state.order]);this.setState({transactions:o})}}},{key:"componentDidUpdate",value:function(e,t){this.state.skip!==t.skip&&this.executeTxsRequest()}},{key:"render",value:function(){var e=this.props.classes,t=this.state.transactions;return b.default.createElement(S.default,{container:!0,spacing:0},t.length?b.default.createElement(M.default,{className:e.historyTable},this.getTableHeader(),this.getTableRows(),this.getTableFooter()):b.default.createElement(R.default,{variant:"body1"},b.default.createElement(A.FormattedMessage,{id:"str.emptyTxHistory",defaultMessage:"You do not have any transactions right now."})))}}]),t}(g.Component),p.propTypes={intl:A.intlShape.isRequired,history:v.default.object.isRequired,classes:v.default.object.isRequired,setAppLocation:v.default.func.isRequired,getOracles:v.default.func.isRequired,oracles:v.default.object,getTransactions:v.default.func.isRequired,transactions:v.default.array,syncBlockNum:v.default.number.isRequired},p.defaultProps={oracles:void 0,transactions:void 0},d=f))||d)||d)||d);t.default=Y;var K=(0,j.withStyles)(q.default)(function(e){var t=e.classes,a=e.clickable,n=(e.topic,r(e,["classes","clickable","topic"]));return b.default.createElement(k.TableCell,null,b.default.createElement("span",Object.assign({className:a&&t.viewEventLink},n)))})},2368:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return{historyTable:{overflowX:"scroll"},viewEventLink:{"&:hover":{color:"#585AFA",cursor:"pointer"},textDecoration:"underline"},clickToExpandRow:{cursor:"pointer"},summaryRowCell:{paddingTop:"24px",paddingBottom:"24px"},hide:{display:"none"},show:{display:"table-row"},arrowSize:{fontSize:"8px"}}};t.default=n},2369:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{activitiesTabWrapper:{background:e.palette.background.paper,position:"fixed",top:e.sizes.navHeight,left:0,right:0},activitiesTabContainer:{marginTop:e.sizes.navHeight}}};t.default=n}});