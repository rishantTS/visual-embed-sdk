(self.webpackChunk_thoughtspot_visual_embed_sdk=self.webpackChunk_thoughtspot_visual_embed_sdk||[]).push([[644],{862:function(e,t,n){var a=n(8).default;function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(l,i,u):l[i]=e[i]}return l.default=e,n&&n.set(e,l),l},e.exports.default=e.exports,e.exports.__esModule=!0},1189:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),r=n(5444),l=n(2519),o=n(5612),i=function(){return a.createElement("main",{className:"pageStyles"},a.createElement("title",null,(0,o.Z)("404_PAGE_TITLE")),a.createElement("h1",{className:"headingStyles"},(0,o.Z)("404_PAGE_HEADING")),a.createElement("p",{className:"paragraphStyles"},(0,o.Z)("404_PAGE_MSG_PRETEXT")," ",a.createElement("span",{role:"img","aria-label":"Pensive emoji"},"😔")," ",(0,o.Z)("404_PAGE_MSG"),a.createElement("br",null),null,a.createElement("br",null),a.createElement(r.Link,{to:"/?pageid="+l.NOT_FOUND_GO_HOME_PAGE_ID},(0,o.Z)("404_GO_HOME_LINK_TEXT")),"."))};function u(){return a.createElement(i,null)}},5612:function(e,t,n){"use strict";var a,r=n(9703);t.Z=function(e){return a||(a=(0,r.useIntl)()),a.formatMessage({id:e})}},2519:function(e){e.exports={DOC_REPO_NAME:"/visual-embed-sdk",DOC_NAV_PAGE_ID:"nav",TS_HOST_PARAM:"tshost",TS_ORIGIN_PARAM:"origin",TS_APP_ROOT_PARAM:"appRoot",TS_PAGE_ID_PARAM:"pageid",NAV_PREFIX:"navprefix",PREVIEW_PREFIX:"previewPrefix",VISUAL_EMBED_SDK_PREFIX:"visualEmbedSDKPrefix",NOT_FOUND_PAGE_ID:"404-error",NOT_FOUND_GO_HOME_PAGE_ID:"introduction",TYPE_DOC_PREFIX:"typedoc",DEFAULT_HOST:"https://try-everywhere.thoughtspot.cloud",DEFAULT_PREVIEW_HOST:"https://try-everywhere.thoughtspot.cloud/v2",DEFAULT_APP_ROOT:"/everywhere",IS_PUBLIC_SITE_OPEN:"isPublicSiteOpen",BUILD_ENVS:{PROD:"PROD",DEV:"DEV",STAGING:"STAGING",PROD_VERSIONING:"PROD_VERSIONING",LOCAL:"LOCAL"},DEPLOY_ENVS:{RELEASE:"release",DEV:"dev"},VERSION_DROPDOWN:[{label:"Cloud",link:"/visual-embed-sdk/release/en"},{label:"Dev",link:"/visual-embed-sdk/dev/en"},{label:"7.1",link:"/visual-embed-sdk/7.1/en"}]}},9703:function(e,t,n){"use strict";var a=n(5318),r=n(862);t.__esModule=!0;var l={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};t.IntlContextConsumer=t.IntlContextProvider=t.changeLocale=t.navigate=t.withIntl=t.Link=void 0;var o=n(7616);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(l,e)||(t[e]=o[e]))}));var i=r(n(4687));t.Link=i.default,t.navigate=i.navigate,t.changeLocale=i.changeLocale;var u=a(n(8770));t.withIntl=u.default;var s=n(8368);t.IntlContextProvider=s.IntlContextProvider,t.IntlContextConsumer=s.IntlContextConsumer},4687:function(e,t,n){"use strict";var a=n(5318);t.__esModule=!0,t.changeLocale=t.navigate=t.default=void 0;var r=a(n(7154)),l=a(n(7316)),o=a(n(7294)),i=a(n(5697)),u=n(5444),s=n(8368),c=function(e){var t=e.to,n=e.language,a=e.children,i=e.onClick,c=(0,l.default)(e,["to","language","children","onClick"]);return o.default.createElement(s.IntlContextConsumer,null,(function(e){var l=n||e.language,s=e.routed||n?"/"+l+t:""+t;return o.default.createElement(u.Link,(0,r.default)({},c,{to:s,onClick:function(e){n&&localStorage.setItem("gatsby-intl-language",n),i&&i(e)}}),a)}))};c.propTypes={children:i.default.node.isRequired,to:i.default.string,language:i.default.string},c.defaultProps={to:""};var d=c;t.default=d;t.navigate=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl,a=n.language,r=n.routed?"/"+a+e:""+e;(0,u.navigate)(r,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,a="/"+e+(t||function(e){if(!n)return e;var t=e.indexOf("/",1);return e.substring(t)}(function(e){var t="/visual-embed-sdk/7.1";return 0===e.indexOf(t)&&(e=e.slice(t.length)),e}(window.location.pathname)))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,u.navigate)(a)}}},8770:function(e,t,n){"use strict";var a=n(5318);t.__esModule=!0,t.default=void 0;var r=a(n(7294)),l=n(7616);t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),r.default.createElement((0,l.injectIntl)(e),t)}}}}]);
//# sourceMappingURL=component---docs-src-pages-404-tsx-8b969968cab3baaf3c6e.js.map