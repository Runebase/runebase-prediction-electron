webpackJsonp([5],{2015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),i=p(o),l=n(19),s=p(n(2052)),u=p(n(348)),d=p(n(2066)),c=p(n(2167)),f=p(n(2053));function p(e){return e&&e.__esModule?e:{default:e}}var m=(0,l.inject)("store")(a=(0,l.observer)(a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.props.store.predCourt.init()}},{key:"render",value:function(){var e=this.props.store.predCourt,t=e.list,n=e.loadMore,a=e.loadingMore;if(e.loading)return i.default.createElement(f.default,null);var r=(t||[]).map(function(e,t){return i.default.createElement(d.default,{key:t,index:t,event:e})});return i.default.createElement(o.Fragment,null,i.default.createElement(c.default,null),i.default.createElement(s.default,{spacing:u.default.padding.sm.value,data:r,loadMore:n,loadingMore:a}))}}]),t}())||a)||a;t.default=m},2052:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),l=f(i),s=f(n(3)),u=n(14),d=n(9),c=n(345);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=(0,d.defineMessages)({loadMoreMsg:{id:"load.more",defaultMessage:"loading more"}}),g=(r=a=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=a=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.handleOnScroll=function(){var e=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight,n=document.documentElement.clientHeight||window.innerHeight;Math.ceil(e+n)>=t&&a.props.hasMore&&a.props.loadMore()},p(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleOnScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleOnScroll)}},{key:"render",value:function(){return l.default.createElement(u.Grid,{container:!0,spacing:this.props.spacing},this.props.data,this.props.loadingMore&&l.default.createElement(h,null))}}]),t}(),a.propTypes={hasMore:s.default.bool,loadingMore:s.default.bool,loadMore:s.default.func,spacing:s.default.number,data:s.default.oneOfType([s.default.array,s.default.object])},a.defaultProps={hasMore:!0,loadMore:void 0,loadingMore:!1,spacing:void 0,data:void 0},r);t.default=g;var h=function(){return l.default.createElement(b,null,l.default.createElement(c.Loading,{text:m.loadMoreMsg}))},b=function(e){return l.default.createElement("div",Object.assign({style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",margin:20}},e))}},2053:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Row=void 0;var a=s(n(1)),r=n(14),o=n(9),i=s(n(345)),l=s(n(2067));function s(e){return e&&e.__esModule?e:{default:e}}var u=(0,o.defineMessages)({loadEventListMsg:{id:"load.eventList",defaultMessage:"loading"}}),d=(0,r.withStyles)(l.default)(function(e){var t=e.classes,n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["classes"]);return a.default.createElement("div",Object.assign({className:t.row},n))});t.Row=d,t.default=(0,r.withStyles)(l.default)(function(e){var t=e.classes;return a.default.createElement(d,null,a.default.createElement(i.default,{className:t.loading,text:u.loadEventListMsg}))})},2066:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,o,i,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),u=E(s),d=E(n(3)),c=n(89),f=n(9),p=n(14),m=E(n(6)),g=n(16),h=n(18),b=E(n(352)),v=E(n(2087)),y=n(33);function E(e){return e&&e.__esModule?e:{default:e}}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var w=h.Phases.BETTING,M=h.Phases.RESULT_SETTING,_=h.Phases.VOTING,O=h.Phases.FINALIZING,j=h.Phases.WITHDRAWING,C=(0,f.defineMessages)({pending:{id:"str.pending",defaultMessage:"Pending"},placeBet:{id:"bottomButtonText.placeBet",defaultMessage:"Place Bet"},setResult:{id:"str.setResult",defaultMessage:"Set Result"},arbitrate:{id:"bottomButtonText.arbitrate",defaultMessage:"Arbitrate"},finalizeResult:{id:"str.finalizeResult",defaultMessage:"Finalize Result"},withdraw:{id:"str.withdraw",defaultMessage:"Withdraw"},archived:{id:"bottomButtonText.archived",defaultMessage:"Archived"}}),T=(a=(0,p.withStyles)(v.default,{withTheme:!0}),(0,f.injectIntl)(r=a((i=o=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=a=x(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.getAmountLabel=function(){var e=a.props.event,t=e.phase,n=e.token,r=e.amounts,o=e.runebaseAmount,i=e.predAmount;switch(t){case w:case M:case _:return parseFloat((0,g.sum)(r).toFixed(2))+" "+n;case O:return"";case j:return parseFloat((0,g.sum)(o).toFixed(2))+" RUNES, "+parseFloat((0,g.sum)(i).toFixed(2))+" PRED";default:console.error("Unhandled phase: "+t)}},a.getButtonText=function(){var e=a.props.event.phase;switch(e){case w:return C.placeBet;case M:return C.setResult;case _:return C.arbitrate;case O:return C.finalizeResult;case j:return C.withdraw;default:console.error("Unhandled phase: "+e)}},x(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.PureComponent),l(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.index,a=this.props.event,r=a.name,o=a.isPending,i=a.isUpcoming,l=a.url,s=a.endTime,d=this.props.intl,g=d.locale,h=d.messages,v=d.formatMessage,E=this.getAmountLabel();return u.default.createElement(p.Grid,{item:!0,xs:12,sm:6,md:4,lg:3},u.default.createElement(c.Link,{to:l},u.default.createElement(p.Card,{className:t.eventCard},u.default.createElement("div",{className:(0,m.default)(t.eventCardBg,"bg"+n%8)}),u.default.createElement("div",{className:(0,m.default)(t.eventCardSection,"top")},o&&u.default.createElement(b.default,{id:"str.pendingConfirmation",message:"Pending Confirmation"}),i&&u.default.createElement(b.default,{id:"str.upcoming",message:"Upcoming",type:"upcoming"}),u.default.createElement(p.Typography,{variant:"headline",className:t.eventCardName},r),u.default.createElement("div",{className:t.eventCardInfo},E&&u.default.createElement("div",null,u.default.createElement("i",{className:(0,m.default)(t.dashBoardCardIcon,"icon iconfont icon-ic_token")}),u.default.createElement(f.FormattedMessage,{id:"str.raised",defaultMessage:"Raised"})," "+E),u.default.createElement("div",null,u.default.createElement("i",{className:(0,m.default)(t.dashBoardCardIcon,"icon iconfont icon-ic_timer")}),void 0!==s?""+(0,y.getEndTimeCountDownString)(s,g,h):u.default.createElement(f.FormattedMessage,{id:"str.end",defaultMessage:"Ended"})))),u.default.createElement(p.Divider,null),u.default.createElement("div",{className:(0,m.default)(t.eventCardSection,"button")},i?u.default.createElement(f.FormattedMessage,{id:"str.waitForResultSetting",defaultMessage:"Waiting for result setting"}):v(this.getButtonText())))))}}]),t}(),o.propTypes={classes:d.default.object.isRequired,intl:f.intlShape.isRequired,index:d.default.number.isRequired,endTime:d.default.string},o.defaultProps={endTime:void 0},r=i))||r)||r);t.default=T},2067:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){return{row:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",margin:20},loading:{width:"5rem",height:"5rem",marginTop:360}}}},2087:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return{eventCard:{position:"relative",borderRadius:"5px",boxShadow:"0px 0px 20px 0px rgba(0,0,0,0.05)",border:"2px solid rgba(0,0,0,0.075)","&:hover":{boxShadow:"0px 5px 20px 3px rgba(0,0,0,0.1)",transform:"translateY(-2px)",transition:".1s all ease-in-out"},"&:active":{opacity:"0.9"}},eventCardSection:{position:"relative",padding:e.padding.sm.px,"&.top":{height:"320px"},"&.button":{textAlign:"center",paddingTop:e.padding.xs.px,paddingBottom:e.padding.xs.px,lineHeight:1,fontSize:e.sizes.font.textMd,color:e.palette.text.primary}},dashboardTime:{color:e.palette.text.hint,fontWeight:"600",display:"block",paddingBottom:"10px"},eventCardName:{marginBottom:e.padding.xs.px,display:"-webkit-box",maxWidth:"400px",maxHeight:"160px",margin:"0 auto",WebkitLineClamp:5,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",fontWeight:"700",color:"rgba(0,0,0,0.75)"},unconfirmedTag:{background:e.palette.secondary.light,color:e.palette.secondary.main,border:"solid 1px "+e.palette.secondary.main,borderRadius:e.borderRadius,padding:"2px "+e.padding.unit.px,marginBottom:e.padding.unit.px,fontSize:e.sizes.font.meta},dashBoardCardIcon:{marginRight:e.padding.unit.px},eventCardInfo:{position:"absolute",bottom:e.padding.sm.px,color:e.palette.text.primary},eventCardInfoItem:{padding:"3px 0px"}}}},2167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,o,i,l,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),d=v(u),c=v(n(3)),f=n(9),p=v(n(356)),m=n(19),g=n(14),h=n(18),b=v(n(2168));function v(e){return e&&e.__esModule?e:{default:e}}var y=(a=(0,g.withStyles)(b.default,{withTheme:!0}),r=(0,m.inject)("store"),(0,f.injectIntl)(o=a(o=r(o=(0,m.observer)((l=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),s(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.noCreateEventButton,a=e.fontSize,r=e.store,o=r.sortBy,i=r.createEvent;return d.default.createElement(g.Grid,{container:!0,className:t.dashboardActionsWrapper},d.default.createElement(g.Grid,{item:!0,xs:8},!n&&d.default.createElement(g.Button,{variant:"raised",size:"medium",className:t.createEventButton,onClick:i.open},d.default.createElement(p.default,{fontSize:a}),d.default.createElement(f.FormattedMessage,{id:"create.dialogTitle",defaultMessage:"Create an event"}))),d.default.createElement(g.Grid,{item:!0,xs:4,className:t.dashboardActionsRight},d.default.createElement("span",{className:t.dashboardActionsSortLabel},d.default.createElement(f.FormattedMessage,{id:"sort.label",defaultMessage:"Sort By"})),d.default.createElement(g.Card,{className:t.dashboardActionsSort},d.default.createElement(g.FormControl,null,d.default.createElement(g.Select,{disableUnderline:!0,value:o,onChange:function(e){return r.sortBy=e.target.value}},d.default.createElement(g.MenuItem,{value:h.SortBy.ASCENDING},d.default.createElement(f.FormattedMessage,{id:"sort.ascEndTime",defaultMessage:"End Earliest"})),d.default.createElement(g.MenuItem,{value:h.SortBy.DESCENDING},d.default.createElement(f.FormattedMessage,{id:"sort.descEndTime",defaultMessage:"End Latest"})))))))}}]),t}(),i.propTypes={classes:c.default.object.isRequired,noCreateEventButton:c.default.bool},i.defaultProps={noCreateEventButton:!1},o=l))||o)||o)||o)||o);t.default=y},2168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return{dashboardActionsWrapper:{marginBottom:e.padding.sm.px},createEventButton:{padding:"12px "+e.padding.sm.px,verticalAlign:"middle"},dashboardActionsRight:{textAlign:"right"},dashboardActionsSort:{display:"inline-block",padding:e.padding.unit.px+" "+e.padding.sm.px,verticalAlign:"middle"},dashboardActionsSortLabel:{marginRight:e.padding.sm.px}}}}});