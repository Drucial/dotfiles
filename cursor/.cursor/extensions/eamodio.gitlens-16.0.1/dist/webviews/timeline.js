var e,t,o={47:(e,t,o)=>{const n=o(602),r=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,s=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,a=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/uy,l=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,c=/\p{M}+/gu,h={limit:1/0,ellipsis:""},d=(e,t={},o={})=>{const p=t.limit??1/0,u=t.ellipsis??"",g=t?.ellipsisWidth??(u?d(u,h,o).width:0),m=o.ansiWidth??0,f=o.controlWidth??0,y=o.ambiguousWidth??1,v=o.emojiWidth??2,w=o.fullWidthWidth??2,x=o.regularWidth??1,$=o.wideWidth??2;let C=0,_=0,P=e.length,S=0,A=!1,D=P,T=Math.max(0,p-g),E=0,O=0,F=0,B=0;e:for(;;){if(O>E||_>=P&&_>C){const t=e.slice(E,O)||e.slice(C,_);S=0;for(const e of t.replaceAll(c,"")){const t=e.codePointAt(0)||0;if(B=(0,n.isFullWidth)(t)?w:(0,n.isWide)(t)?$:y!==x&&(0,n.isAmbiguous)(t)?y:x,F+B>T&&(D=Math.min(D,Math.max(E,C)+S)),F+B>p){A=!0;break e}S+=e.length,F+=B}E=O=0}if(_>=P)break;if(l.lastIndex=_,l.test(e)){if(S=l.lastIndex-_,B=S*x,F+B>T&&(D=Math.min(D,_+Math.floor((T-F)/x))),F+B>p){A=!0;break}F+=B,E=C,O=_,_=C=l.lastIndex}else if(r.lastIndex=_,r.test(e)){if(F+m>T&&(D=Math.min(D,_)),F+m>p){A=!0;break}F+=m,E=C,O=_,_=C=r.lastIndex}else if(s.lastIndex=_,s.test(e)){if(S=s.lastIndex-_,B=S*f,F+B>T&&(D=Math.min(D,_+Math.floor((T-F)/f))),F+B>p){A=!0;break}F+=B,E=C,O=_,_=C=s.lastIndex}else if(a.lastIndex=_,a.test(e)){if(F+v>T&&(D=Math.min(D,_)),F+v>p){A=!0;break}F+=v,E=C,O=_,_=C=a.lastIndex}else _+=1}return{width:A?T:F,index:A?D:P,truncated:A,ellipsed:A&&p>=g}}},602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0;t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109;t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510;t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return o[e](s,s.exports,r),s.exports}r.m=o,r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[])),r.u=e=>"lib-billboard.js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="#{root}/dist/webviews/",void 0!==r&&Object.defineProperty(r,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),e={122:0},t=t=>{var o,n,{ids:s,modules:a,runtime:l}=t,c=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);for(l&&l(r);c<s.length;c++)n=s[c],r.o(e,n)&&e[n]&&e[n][0](),e[s[c]]=0},r.f.j=(o,n)=>{var s=r.o(e,o)?e[o]:void 0;if(0!==s)if(s)n.push(s[1]);else{var a=import("./"+r.u(o)).then(t,(t=>{throw 0!==e[o]&&(e[o]=void 0),t}));a=Promise.race([a,new Promise((t=>s=e[o]=[t]))]),n.push(s[1]=a)}};var s={};r.d(s,{h:()=>TimelineApp});const a=14;var l=(e=>(e.Community="community",e.CommunityWithAccount="community-with-account",e.Pro="pro",e.Teams="teams",e.Enterprise="enterprise",e))(l||{}),c=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Community=0]="Community",e[e.ProPreview=1]="ProPreview",e[e.ProPreviewExpired=2]="ProPreviewExpired",e[e.ProTrial=3]="ProTrial",e[e.ProTrialExpired=4]="ProTrialExpired",e[e.ProTrialReactivationEligible=5]="ProTrialReactivationEligible",e[e.Paid=6]="Paid",e))(c||{});const h=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,d=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,p=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let u;const g=new Map;let m,f,y;function v(e,t,o,n=!0){const r=`${o??""}:${t=t??void 0}`;let s=g.get(r);if(null==s){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=d.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(h))if(null!=t)for(const[e,n]of Object.entries(t))if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}return o}(t);let a;a=null==o?m:"system"===o?void 0:[o],s=new Intl.DateTimeFormat(a,e),n&&g.set(r,s)}if(null==t||d.test(t))return s.format(e);function a(e){const t=`${o??""}:time:${e}`;let r=g.get(t);if(null==r){const s={localeMatcher:"best fit",timeStyle:e};let a;a=null==o?m:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(a,s),n&&g.set(t,r)}return r}const l=s.formatToParts(e);return t.replace(h,((t,o,n,r,s,c,h,d,p,u,g,m,f,y,v)=>{if(null!=o)return o.substring(1,o.length-1);for(const[t,o]of Object.entries(v)){if(null==o)continue;const n=l.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return x(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=a("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}const w=["th","st","nd","rd"];function x(e){const t=e%100;return`${e}${w[(t-20)%10]??w[t]??w[0]}`}function $(e){switch(e){case l.CommunityWithAccount:return"GitLens Community";case l.Pro:return"GitLens Pro";case l.Teams:return"GitLens Teams";case l.Enterprise:return"GitLens Enterprise";case l.Community:default:return"GitLens"}}l.Community,l.CommunityWithAccount,l.Pro,l.Teams,l.Enterprise;function C(e,t){return _(e.plan.effective.expiresOn,t)}function _(e,t){return null!=e?function(e,t,o,n){const r=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=n??Math.floor;switch(o){case"days":return s(r/864e5);case"hours":return s(r/36e5);case"minutes":return s(r/6e4);case"seconds":return s(r/1e3);default:return r}}(Date.now(),new Date(e),t,Math.round):void 0}function P(e){return(t=e.plan.actual.id)!==l.Community&&t!==l.CommunityWithAccount;var t}class IpcCall{constructor(e,t,o=!1,n=!1){this.scope=e,this.reset=o,this.pack=n,this.method=`${e}/${t}`}is(e){return e.method===this.method}}class IpcCommand extends IpcCall{}class IpcNotification extends IpcCall{}const S=new IpcCommand("core","webview/ready"),A=new IpcCommand("core","webview/focus/changed"),D=(new IpcCommand("core","command/execute"),new IpcCommand("core","configuration/update"),new IpcCommand("core","telemetry/sendEvent")),T=(new IpcNotification("core","window/focus/didChange"),new IpcCommand("core","webview/focus/didChange"));new IpcNotification("core","configuration/didChange");const E="timeline",O=new IpcCommand(E,"point/open"),F=new IpcCommand(E,"period/update"),B=new IpcNotification(E,"didChange");class context_request_event_s extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}}class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{const t=e.composedPath()[0];e.context===this.context&&t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{const t=e.composedPath()[0];if(e.context!==this.context||t===this.host)return;const o=new Set;for(const[e,{consumerHost:t}]of this.subscriptions)o.has(e)||(o.add(e),t.dispatchEvent(new context_request_event_s(this.context,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function W(e,t,o){let n,r,s,a,l;function c(){const e=Date.now();if(function(e){const o=e-(r??0);return null==r||o>=t||o<0}(e))h();else{l=setTimeout(c,t-(e-(r??0)))}}function h(){return l=void 0,n?function(){const t=n,o=s;return n=s=void 0,a=e.apply(o,t),a}():(n=void 0,s=void 0,a)}function d(...e){const h=Date.now();return n=null!=o&&n?o(n,e):e,s=this,r=h,null==l&&(l=setTimeout(c,t)),a}return d.cancel=function(){null!=l&&clearTimeout(l),n=void 0,r=void 0,s=void 0,l=void 0},d.flush=function(){return null==l?a:(clearTimeout(l),h())},d.pending=function(){return null!=l},d}const U=/\(([\s\S]*)\)/,V=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,G=/\s?=.*$/;function j(e){const t=.001*performance.now();let o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],n-=e[1],n<0&&(o--,n+=1e9)),[o,n]}function q(){let e=0;return{get current(){return e},next:function(){return 1073741823===e&&(e=0),++e}}}const Q=q(),J=new Map;function Y(e){J.delete(e)}function K(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} → ${e.toString(16).padStart(5)}]`}function Z(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};const o=t?Q.current:void 0,n=Q.next();return{scopeId:n,prevScopeId:o,prefix:`${K(n,o)} ${e}`}}Error;function X(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}Error;r(47);var ee=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(ee||{});Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));const te="utm_source=gitlens-extension&utm_medium=in-app-links",oe=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${te}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${te}`,graph:`https://gitkraken.com/solutions/commit-graph?${te}`,launchpad:`https://gitkraken.com/solutions/launchpad?${te}`,platform:`https://gitkraken.com/devex?${te}`,pricing:`https://gitkraken.com/gitlens/pricing?${te}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${te}`,security:`https://help.gitkraken.com/gitlens/security?${te}`,workspaces:`https://gitkraken.com/solutions/workspaces?${te}`,cli:`https://gitkraken.com/cli?${te}`,browserExtension:`https://gitkraken.com/browser-extension?${te}`,desktop:`https://gitkraken.com/git-client?${te}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${te}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${te}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${te}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${te}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${te}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${te}`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${te}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${te}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${te}#streamline-collaboration`}),{fromCharCode:ie}=String;new TextEncoder;function ne(e){const[t,o]=j(e);return 1e3*t+Math.floor(o/1e6)}function re(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);const se=Symbol("logInstanceNameFn");function ae(e){return function(e,t=!1){let o,n,r,s,a,l=0,c=!1,h=!1,d=!0;null!=e&&({args:o,if:n,enter:r,exit:s,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:d=!0}=e);l>0&&(h=!0,d=!0);d&&(c=!0);const p=he.isDebugging,u=t?he.debug:he.log,g=p?"debug":"info";return(e,t,m)=>{let f,y;if("function"==typeof m.value?(f=m.value,y="value"):"function"==typeof m.get&&(f=m.get,y="get"),null==f||null==y)throw new Error("Not supported");const v=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(V,"")||t,t=t.slice(0,t.indexOf("{"));let o=t.indexOf("("),n=t.indexOf(")");o=o>=0?o+1:0,n=n>0?n:t.indexOf("="),t=t.slice(o,n),t=`(${t})`;const r=U.exec(t);return null!=r?r[1].split(",").map((e=>e.trim().replace(G,""))):[]}(f):[];m[y]=function(...e){if(!p&&!he.enabled(g)||null!=n&&!n.apply(this,e))return f.apply(this,e);const m=Q.current,y=Q.next(),w=null!=this?function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor}else t=e.constructor;let o=t?.name??"";const n=o.indexOf("_");o=-1===n?o:o.substring(n+1),null!=t?.[se]&&(o=t[se](e,o));return o}(this):void 0;let x,$=w?c?`${K(y,m)} ${w}.${t}`:`${w}.${t}`:t;null!=a&&($=a({id:y,instance:this,instanceName:w??"",name:t,prefix:$},...e)),c&&(x=function(e,t){return t={prevScopeId:Q.current,...t},J.set(e,t),t}(y,{scopeId:y,prevScopeId:m,prefix:$}));const C=null!=r?r(...e):"";let _;if(!1===o||0===e.length)_="",h||u.call(he,`${$}${C}`);else{let t;_="";let n,r,s,a=-1;for(s of e){if(n=v[++a],t=o?.[a],null!=t){if("boolean"==typeof t)continue;if(_.length>0&&(_+=", "),"string"==typeof t){_+=t;continue}r=String(t(s))}else _.length>0&&(_+=", "),r=he.toLoggable(s);_+=n?`${n}=${r}`:r}h||u.call(he,_?`${$}${C}(${_})`:`${$}${C}`)}if(h||d||null!=s){const t=d?j():void 0,o=e=>{const o=void 0!==t?` [${ne(t)}ms]`:"";h?he.error(e,_?`${$}${C}(${_})`:`${$}${C}`,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`):he.error(e,$,x?.exitDetails?`failed${x.exitDetails}${o}`:`failed${o}`),c&&Y(y)};let n;try{n=f.apply(this,e)}catch(e){throw o(e),e}const r=e=>{let o,n,r,a;if(null!=t?(o=ne(t),o>500?(n=he.warn,r=` [*${o}ms] (slow)`):(n=u,r=` [${o}ms]`)):(r="",n=u),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${he.toLoggable(e)}`);else x?.exitFailed?(a=x.exitFailed,n=(e,...t)=>he.error(null,e,...t)):a="completed";h?(0===l||o>l)&&n.call(he,_?`${$}${C}(${_}) ${a}${x?.exitDetails||""}${r}`:`${$}${C} ${a}${x?.exitDetails||""}${r}`):n.call(he,_?`${$}(${_}) ${a}${x?.exitDetails||""}${r}`:`${$} ${a}${x?.exitDetails||""}${r}`),c&&Y(y)};return null!=n&&X(n)?n.then(r,o):r(n),n}return f.apply(this,e)}}}(e,!0)}const le=new Set(["accessToken","password","token"]),ce=function(e,t){return le.has(e)?`<${t}>`:t},he=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=de(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=de(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(t??=this.provider.sanitize??ce,Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:""}};function de(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}const pe={enabled:e=>he.enabled(e)||he.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":he.error(void 0,t,o,...n);break;case"warn":he.warn(t,o,...n);break;case"info":he.log(t,o,...n);break;default:he.debug(t,o,...n)}}};class LoggerContext{constructor(e){this.scope=Z(e,void 0),he.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off")}log(e,...t){"string"==typeof e?he.log(this.scope,e,...t):he.log(e,t.shift(),...t)}}class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(D,e)}dispose(){this.disposables.forEach((e=>e.dispose()))}}var ue;function ge(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function me(e,t){return new Promise((o=>{e.addEventListener(t,(function n(r){r.target===e&&(e.removeEventListener(t,n),o())}))}))}(ue||(ue={})).on=function(e,t,o,n){let r=!1;if("string"==typeof e){const s=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,s,n??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,s,n??!0))}}}const s=function(e){o(e,this)};return e.addEventListener(t,s,n??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,s,n??!1))}}},Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Stopwatch{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:Z(e??"",!1),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??pe,this._time=j(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=j(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=j(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,n]=j(this._time),r=1e3*o+Math.floor(n/1e6),s=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${r}ms]${e?.suffix??""}`)}}const fe=class _Emitter{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);const n=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=_Emitter._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};fe._noop=function(){};let be=fe;const ye={done:!0,value:void 0},ve=class _Node{constructor(e){this.element=e,this.next=_Node.Undefined,this.prev=_Node.Undefined}};ve.Undefined=new ve(void 0);let we=ve;class LinkedList{constructor(){this._first=we.Undefined,this._last=we.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===we.Undefined}clear(){this._first=we.Undefined,this._last=we.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new we(e);if(this._first===we.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===we.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===we.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==we.Undefined&&e.next!==we.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===we.Undefined&&e.next===we.Undefined?(this._first=we.Undefined,this._last=we.Undefined):e.next===we.Undefined?(this._last=this._last.prev,this._last.next=we.Undefined):e.prev===we.Undefined&&(this._first=this._first.next,this._first.prev=we.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===we.Undefined?ye:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==we.Undefined;t=t.next)e.push(t.element);return e}}var xe=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,$e=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?ke(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&xe(t,o,s),s};let Ce;function _e(){return Ce??=acquireVsCodeApi()}const Pe=q();function Se(){return`webview:${Pe.next()}`}let Ae=class{constructor(e){this.appName=e,this._onReceiveMessage=new be,this._pendingHandlers=new Map,this._api=_e(),this._disposable=ue.on(window,"message",(e=>this.onMessageReceived(e)))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){const t=J.get(Q.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const n=function(e,t,...o){return(t?.provider??pe).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(Z(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),n?.stop()}if(null==o.completionId)this._onReceiveMessage.fire(o);else{const e=De(o.method,o.completionId);this._pendingHandlers.get(e)?.(o)}}sendCommand(e,t){const o=Se();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){const o=Se(),n=new Promise(((t,n)=>{const r=De(e.response.method,o);let s;function a(){clearTimeout(s),s=void 0,this._pendingHandlers.delete(r)}s=setTimeout((()=>{a.call(this),n(new Error(`Timed out waiting for completion of ${r}`))}),6e4),this._pendingHandlers.set(r,(e=>{a.call(this),queueMicrotask((()=>t(e.params)))}))}));return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),n}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}};var Re;function De(e,t){return`${e}|${t}`}$e([ae({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],Ae.prototype,"onMessageReceived",1),$e([ae({args:{0:e=>e.method,1:!1}})],Ae.prototype,"sendCommand",1),$e([ae({args:{0:e=>e.method,1:!1,2:!1}})],Ae.prototype,"sendRequest",1),$e([ae({args:{0:e=>`${e.id}, method=${e.method}`}})],Ae.prototype,"postMessage",1),Ae=$e([(Re=(e,t)=>`${e.appName}(${t})`,e=>{e[se]=Re})],Ae);const Te="gl-telemetry-fired";function Le(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class RGBA{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=Le(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class HSLA{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Le(Math.max(Math.min(1,t),0),3),this.l=Le(Math.max(Math.min(1,o),0),3),this.a=Le(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=e.a,s=Math.max(t,o,n),a=Math.min(t,o,n);let l=0,c=0;const h=(a+s)/2,d=s-a;if(d>0){switch(c=Math.min(h<=.5?d/(2*h):d/(2-2*h),1),s){case t:l=(o-n)/d+(o<n?6:0);break;case o:l=(n-t)/d+2;break;case n:l=(t-o)/d+4}l*=60,l=Math.round(l)}return new HSLA(l,c,h,r)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:r}=e;let s,a,l;if(0===o)s=a=l=n;else{const e=n<.5?n*(1+o):n+o-n*o,r=2*n-e;s=HSLA._hue2rgb(r,e,t+1/3),a=HSLA._hue2rgb(r,e,t),l=HSLA._hue2rgb(r,e,t-1/3)}return new RGBA(Math.round(255*s),Math.round(255*a),Math.round(255*l),r)}}class HSVA{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=Le(Math.max(Math.min(1,t),0),3),this.v=Le(Math.max(Math.min(1,o),0),3),this.a=Le(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=Math.max(t,o,n),s=r-Math.min(t,o,n),a=0===r?0:s/r;let l;return l=0===s?0:r===t?((o-n)/s%6+6)%6:r===o?(n-t)/s+2:(t-o)/s+4,new HSVA(Math.round(60*l),a,r,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:r}=e,s=n*o,a=s*(1-Math.abs(t/60%2-1)),l=n-s;let[c,h,d]=[0,0,0];return t<60?(c=s,h=a):t<120?(c=a,h=s):t<180?(h=s,d=a):t<240?(h=a,d=s):t<300?(c=a,d=s):t<=360&&(c=s,d=a),c=Math.round(255*(c+l)),h=Math.round(255*(h+l)),d=Math.round(255*(d+l)),new RGBA(c,h,d,r)}}function Ee(e,t){return t.getPropertyValue(e).trim()}const Oe=class _Color{static from(e){return e instanceof _Color?e:We(e)||_Color.red}static fromCssVariable(e,t){return We(Ee(e,t))||_Color.red}static fromHex(e){return Ue(e)||_Color.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else{if(!(e instanceof HSVA))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=HSVA.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva))}getRelativeLuminance(){return Le(.2126*_Color._relativeLuminanceForComponent(this.rgba.r)+.7152*_Color._relativeLuminanceForComponent(this.rgba.g)+.0722*_Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new Fe(new RGBA(0,0,0,e.rgba.a));if(1===t)return new Fe(new RGBA(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const r=(e,o)=>{const s=e.mix(o,.5),a=s.getRelativeLuminance();return Math.abs(t-a)<1e-7||!n--?s:a>t?r(e,s):r(s,o)},s=(o>t?r(Fe.black,e):r(e,Fe.white)).rgba;return new Fe(new RGBA(s.r,s.g,s.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new _Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:n,a:r}=this.rgba;return new _Color(new RGBA(t,o,n,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new _Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,n=t.a,r=o+n*(1-o);if(r<1e-6)return _Color.transparent;const s=this.rgba.r*o/r+t.r*n*(1-o)/r,a=this.rgba.g*o/r+t.g*n*(1-o)/r,l=this.rgba.b*o/r+t.b*n*(1-o)/r;return new _Color(new RGBA(s,a,l,r))}mix(e,t){return function(e,t,o){const n=e.rgba,r=t.rgba;return new Fe(new RGBA(n.r+o*(r.r-n.r),n.g+o*(r.g-n.g),n.b+o*(r.b-n.b),n.a+o*(r.a-n.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:n,a:r}=this.rgba;return new _Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-o),e.rgba.b-r*(e.rgba.b-n),1))}flatten(...e){const t=e.reduceRight(((e,t)=>_Color._flatten(t,e)));return _Color._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new _Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return Me(e);return Be(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-n)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};Oe.white=new Oe(new RGBA(255,255,255,1)),Oe.black=new Oe(new RGBA(0,0,0,1)),Oe.red=new Oe(new RGBA(255,0,0,1)),Oe.blue=new Oe(new RGBA(0,0,255,1)),Oe.green=new Oe(new RGBA(0,255,0,1)),Oe.cyan=new Oe(new RGBA(0,255,255,1)),Oe.lightgrey=new Oe(new RGBA(211,211,211,1)),Oe.transparent=new Oe(new RGBA(0,0,0,0));let Fe=Oe;function Be(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function Ie(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function Me(e){return`#${Ie(e.rgba.r)}${Ie(e.rgba.g)}${Ie(e.rgba.b)}`}const ze=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function We(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===ee.Hash)return Ue(e);const t=ze.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new Fe(new RGBA(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new Fe(new HSLA(n[0],n[1],n[2],n[3]))}return Fe.red}function Ue(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==ee.Hash)return null;switch(t){case 7:{const t=16*He(e.charCodeAt(1))+He(e.charCodeAt(2)),o=16*He(e.charCodeAt(3))+He(e.charCodeAt(4)),n=16*He(e.charCodeAt(5))+He(e.charCodeAt(6));return new Fe(new RGBA(t,o,n,1))}case 9:{const t=16*He(e.charCodeAt(1))+He(e.charCodeAt(2)),o=16*He(e.charCodeAt(3))+He(e.charCodeAt(4)),n=16*He(e.charCodeAt(5))+He(e.charCodeAt(6)),r=16*He(e.charCodeAt(7))+He(e.charCodeAt(8));return new Fe(new RGBA(t,o,n,r/255))}case 4:{const t=He(e.charCodeAt(1)),o=He(e.charCodeAt(2)),n=He(e.charCodeAt(3));return new Fe(new RGBA(16*t+t,16*o+o,16*n+n))}case 5:{const t=He(e.charCodeAt(1)),o=He(e.charCodeAt(2)),n=He(e.charCodeAt(3)),r=He(e.charCodeAt(4));return new Fe(new RGBA(16*t+t,16*o+o,16*n+n,(16*r+r)/255))}default:return null}}function He(e){switch(e){case ee.Digit0:return 0;case ee.Digit1:return 1;case ee.Digit2:return 2;case ee.Digit3:return 3;case ee.Digit4:return 4;case ee.Digit5:return 5;case ee.Digit6:return 6;case ee.Digit7:return 7;case ee.Digit8:return 8;case ee.Digit9:return 9;case ee.a:case ee.A:return 10;case ee.b:case ee.B:return 11;case ee.c:case ee.C:return 12;case ee.d:case ee.D:return 13;case ee.e:case ee.E:return 14;case ee.f:case ee.F:return 15}return 0}const Ve=new be,Ne=Ve.event;function Ge(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,r=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),s=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),a=Ee("--vscode-editor-background",o);let l=Ee("--vscode-editor-foreground",o);return l||(l=Ee("--vscode-foreground",o)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:r,isHighContrastTheme:s,isInitializing:null==e}}class App{constructor(e){this.appName=e;const t=[],o=Ge();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(Ne(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=_e(),this._hostIpc=new Ae(this.appName),t.push(this._hostIpc),this._telemetry=new TelemetryContext(this._hostIpc),t.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Ve.fire(Ge(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(this._hostIpc.onReceiveMessage((e=>{if(!0===T.is(e))window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));else this.onMessageReceived(e)}))),this.sendCommand(S,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(ue.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0}))),t.push(ue.on(window,Te,(e=>{this._telemetry.sendEvent(e.detail)}))),this.log("opened")}bind(){document.querySelectorAll("a").forEach((e=>{e.href===e.title&&e.removeAttribute("title")})),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=W((e=>{this.sendCommand(A,e)}),150);this.bindDisposables.push(ue.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),ue.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}}class TimelineChart{constructor(e,t){this.placement=t,this._onDidClickDataPoint=new be,this._commitsByTimestamp=new Map,this._authorsByIndex=new Map,this._indexByAuthors=new Map,this._dateFormat=void 0,this._shortDateFormat=void 0,this._selector=e;const o=()=>{const e=this._size;this._chart?.resize({width:e.width,height:e.height})},n=this.compact?32:0,r=this.compact?16:0;this.$container=document.querySelector(e).parentElement,this._resizeObserver=new ResizeObserver((e=>{const t=e[0].borderBoxSize[0],s={width:Math.floor(t.inlineSize)+n,height:Math.floor(t.blockSize)+r};this._size=s,requestAnimationFrame(o)}));const s=this.$container.getBoundingClientRect();this._size={height:Math.floor(s.height)+n,width:Math.floor(s.width)+r},this._resizeObserver.observe(this.$container,{box:"border-box"})}get onDidClickDataPoint(){return this._onDidClickDataPoint.event}get compact(){return"editor"!==this.placement}dispose(){this._resizeObserver.disconnect(),this._chart?.destroy()}reset(){this._chart?.unselect(),this._chart?.unzoom()}setEmptyState(e,t){const o=document.getElementById("empty"),n=document.getElementById("header");null!=t.uri?(0===e?.length?(o.innerHTML="<p>No commits found for the specified time period.</p>",o.removeAttribute("hidden")):o.setAttribute("hidden",""),n.removeAttribute("hidden")):null==e?(o.innerHTML="<p>There are no editors open that can provide file history information.</p>",o.removeAttribute("hidden"),n.setAttribute("hidden","")):(o.setAttribute("hidden",""),n.removeAttribute("hidden"))}async updateChart(e){this._dateFormat=e.dateFormat,this._shortDateFormat=e.shortDateFormat,this._commitsByTimestamp.clear(),this._authorsByIndex.clear(),this._indexByAuthors.clear();let t=e?.dataset;if(null!=t||e.access.allowed||"editor"!==this.placement||(t=function(){const e=[],t=["Eric Amodio","Justin Roberts","Keith Daulton","Ramin Tadayon","Ada Lovelace","Grace Hopper"],o=10;for(let n=0;n<o;n++){const r=new Date((new Date).getTime()-Math.floor(7776e6*Math.random()));e.push({commit:String(n),author:t[Math.floor(Math.random()*t.length)],date:r.toISOString(),message:"",additions:0===n?2:n===o-1?50:Math.floor(20*Math.random())+1,deletions:0===n?1:n===o-1?25:Math.floor(20*Math.random())+1,sort:r.getTime()})}return e.sort(((e,t)=>t.sort-e.sort))}()),this.setEmptyState(t,e),null==t||0===t.length)return this._chart?.destroy(),void(this._chart=void 0);const o={},n={},s={},a={},l={},c=[],h={},d=[];let p,u,g,m,f,y=0;const{bb:v,bar:w,bubble:x,zoom:$}=await r.e(162).then(r.bind(r,400));for(p of t){({author:u,date:g,additions:m,deletions:f}=p),this._indexByAuthors.has(u)||(this._indexByAuthors.set(u,y),this._authorsByIndex.set(y,u),y--);const e="time";null==h[e]&&(h[e]=[],h.additions=[],h.deletions=[],o.additions=e,o.deletions=e,a.additions="y2",a.deletions="y2",s.additions="Additions",s.deletions="Deletions",n.additions="rgba(73, 190, 71, 1)",n.deletions="rgba(195, 32, 45, 1)",l.additions=w(),l.deletions=w(),d.push(e),c.push(["additions","deletions"]));const t=`${e}.${u}`;null==h[t]&&(h[t]=[],h[u]=[],o[u]=t,a[u]="y",s[u]=u,l[u]=x(),d.push(t)),h[e].push(g),h.additions.push(m??0),h.deletions.push(f??0),h[t].push(g);const r=null==m&&null==f?6:(m??0)+(f??0);h[u].push({y:this._indexByAuthors.get(u),z:r}),this._commitsByTimestamp.set(g,p)}c.push(d);const C=Object.entries(h).map((([e,t])=>[e,...t]));null!=this._chart&&null!=this._loading&&(this._loading.cancel(),this._loading=void 0,this._chart?.destroy(),this._chart=void 0),this._loading=function(){const e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0};return e.promise=new Promise(((t,o)=>{e.fulfill=function(o){e.pending=!1,t(o)},e.cancel=function(t){e.pending=!1,null!=t?o(t):o()}})),e}();try{if(null==this._chart){const e=this.getChartOptions($);null==e.axis&&(e.axis={y:{tick:{}}}),null==e.axis.y&&(e.axis.y={tick:{}}),null==e.axis.y.tick&&(e.axis.y.tick={}),e.axis.y.min=y-2,e.axis.y.tick.values=[...this._authorsByIndex.keys()],e.data={...e.data,axes:a,colors:n,columns:C,groups:c,names:s,types:l,xs:o},e.onafterinit=()=>setTimeout((()=>{this._loading?.fulfill(),this._loading=void 0}),250),this._chart=v.generate(e)}else this._chart.config("axis.y.tick.values",[...this._authorsByIndex.keys()],!1),this._chart.config("axis.y.min",y-2,!1),this._chart.groups(c),this._chart.load({axes:a,colors:n,columns:C,names:s,types:l,xs:o,unload:!0,done:()=>{setTimeout((()=>{this._loading?.fulfill(),this._loading=void 0}),250)}});return await this._loading.promise}catch(e){}}getChartOptions(e){const t={bindto:this._selector,data:{xFormat:"%Y-%m-%dT%H:%M:%S.%LZ",xLocaltime:!1,onclick:this.onDataPointClicked.bind(this)},axis:{x:{type:"timeseries",clipPath:!1,localtime:!0,show:!0,tick:{centered:!0,culling:!1,fit:!1,format:e=>this.compact?"":"number"==typeof e?e:v(e,this._shortDateFormat??"short"),multiline:!1,show:!1,outer:!this.compact}},y:{max:0,padding:{top:75,bottom:100},show:!0,tick:{format:e=>this.compact?"":this._authorsByIndex.get(e)??"",outer:!this.compact,show:this.compact}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:e=>this.compact?"":e,outer:!this.compact}}},bar:{width:2,sensitivity:4,padding:2},bubble:{maxR:100,zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!this.compact,padding:10},point:{sensitivity:"radius"},resize:{auto:!1},size:this._size,tooltip:{grouped:!0,format:{title:this.getTooltipTitle.bind(this),name:this.getTooltipName.bind(this),value:this.getTooltipValue.bind(this)},show:!0,order:"desc"},zoom:{enabled:e(),type:"drag",rescale:!0,resetButton:!0,extent:[1,.01],x:{min:100}}};return t}getTooltipName(e,t,o,n){if("additions"===o||"deletions"===o)return e;const r=new Date(this._chart.data(o)[0].values[n].x),s=this._commitsByTimestamp.get(r.toISOString());return s?.commit.slice(0,8)??"00000000"}getTooltipTitle(e){const t=new Date(e),o=`${function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,r,s]of p){const a=Math.abs(o);if(a>=n||1e3===n)return t?(null==u&&(null!=y?u=y.resolvedOptions().locale:null!=f?u=f.resolvedOptions().locale:(y=new Intl.RelativeTimeFormat(m,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),u=y.resolvedOptions().locale)),"en"===u||u?.startsWith("en-")?`${Math.round(a/r)}${s}`:(null==y&&(y=new Intl.RelativeTimeFormat(m,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),y.format(Math.round(o/r),e))):(null==f&&(f=new Intl.RelativeTimeFormat(m,{localeMatcher:"best fit",numeric:"auto",style:"long"})),f.format(Math.round(o/r),e))}return""}(t))}   (${v(t,this._dateFormat)})`,n=this._commitsByTimestamp.get(t.toISOString());return null==n?o:`${n.author}, ${o}`}getTooltipValue(e,t,o,n){if("additions"===o||"deletions"===o)return 0===e?void 0:e;const r=new Date(this._chart.data(o)[0].values[n].x),s=this._commitsByTimestamp.get(r.toISOString());return s?.message??"???"}onDataPointClicked(e,t){const o=this._commitsByTimestamp.get(new Date(e.x).toISOString());null!=o&&this._onDidClickDataPoint.fire({data:{id:o.commit,selected:!0}})}}const je=globalThis,qe=je.ShadowRoot&&(void 0===je.ShadyCSS||je.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),Je=new WeakMap;class css_tag_n{constructor(e,t,o){if(this._$cssResult$=!0,o!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(qe&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=Je.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Je.set(t,e))}return e}toString(){return this.cssText}}const Ye=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,Qe),Ke=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new css_tag_n(o,e,Qe)},Ze=qe?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Ye(t)})(e):e,{is:Xe,defineProperty:et,getOwnPropertyDescriptor:tt,getOwnPropertyNames:ot,getOwnPropertySymbols:it,getPrototypeOf:nt}=Object,rt=globalThis,st=rt.trustedTypes,at=st?st.emptyScript:"",lt=rt.reactiveElementPolyfillSupport,ct=(e,t)=>e,ht={toAttribute(e,t){switch(t){case Boolean:e=e?at:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},dt=(e,t)=>!Xe(e,t),pt={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:dt};Symbol.metadata??=Symbol("metadata"),rt.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&et(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=tt(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const s=n?.call(this);r.call(this,t),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pt}static _$Ei(){if(this.hasOwnProperty(ct("elementProperties")))return;const e=nt(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ct("properties"))){const e=this.properties,t=[...ot(e),...it(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Ze(e))}else void 0!==e&&t.push(Ze(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(qe)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),n=je.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:ht).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:ht;this._$Em=n,this[n]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??dt)(this[e],t))return;this.P(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[ct("elementProperties")]=new Map,b[ct("finalized")]=new Map,lt?.({ReactiveElement:b}),(rt.reactiveElementVersions??=[]).push("2.0.4");const ut=globalThis,gt=ut.trustedTypes,mt=gt?gt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ft="$lit$",bt=`lit$${Math.random().toFixed(9).slice(2)}$`,yt="?"+bt,vt=`<${yt}>`,wt=document,xt=()=>wt.createComment(""),kt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$t=Array.isArray,Ct=e=>$t(e)||"function"==typeof e?.[Symbol.iterator],_t="[ \t\n\f\r]",Pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,St=/-->/g,At=/>/g,Rt=RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Tt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Et=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Ot=Et(1),Ft=(Et(2),Et(3),Symbol.for("lit-noChange")),Bt=Symbol.for("lit-nothing"),It=new WeakMap,Mt=wt.createTreeWalker(wt,129);function zt(e,t){if(!$t(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==mt?mt.createHTML(t):t}const Wt=(e,t)=>{const o=e.length-1,n=[];let r,s=2===t?"<svg>":3===t?"<math>":"",a=Pt;for(let t=0;t<o;t++){const o=e[t];let l,c,h=-1,d=0;for(;d<o.length&&(a.lastIndex=d,c=a.exec(o),null!==c);)d=a.lastIndex,a===Pt?"!--"===c[1]?a=St:void 0!==c[1]?a=At:void 0!==c[2]?(Lt.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=Rt):void 0!==c[3]&&(a=Rt):a===Rt?">"===c[0]?(a=r??Pt,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?Rt:'"'===c[3]?Tt:Dt):a===Tt||a===Dt?a=Rt:a===St||a===At?a=Pt:(a=Rt,r=void 0);const p=a===Rt&&e[t+1].startsWith("/>")?" ":"";s+=a===Pt?o+vt:h>=0?(n.push(l),o.slice(0,h)+ft+o.slice(h)+bt+p):o+bt+(-2===h?t:p)}return[zt(e,s+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class N{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,s=0;const a=e.length-1,l=this.parts,[c,h]=Wt(e,t);if(this.el=N.createElement(c,o),Mt.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Mt.nextNode())&&l.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(ft)){const t=h[s++],o=n.getAttribute(e).split(bt),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:a[2],strings:o,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),n.removeAttribute(e)}else e.startsWith(bt)&&(l.push({type:6,index:r}),n.removeAttribute(e));if(Lt.test(n.tagName)){const e=n.textContent.split(bt),t=e.length-1;if(t>0){n.textContent=gt?gt.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],xt()),Mt.nextNode(),l.push({type:2,index:++r});n.append(e[t],xt())}}}else if(8===n.nodeType)if(n.data===yt)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(bt,e+1));)l.push({type:7,index:r}),e+=bt.length-1}r++}}static createElement(e,t){const o=wt.createElement("template");return o.innerHTML=e,o}}function Ut(e,t,o=e,n){if(t===Ft)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl;const s=kt(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e),r._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=Ut(e,r._$AS(e,t.values),r,n)),t}class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??wt).importNode(t,!0);Mt.currentNode=n;let r=Mt.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new R(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new z(r,this,e)),this._$AV.push(t),l=o[++a]}s!==l?.index&&(r=Mt.nextNode(),s++)}return Mt.currentNode=wt,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=Bt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ut(this,e,t),kt(e)?e===Bt||null==e||""===e?(this._$AH!==Bt&&this._$AR(),this._$AH=Bt):e!==this._$AH&&e!==Ft&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):Ct(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Bt&&kt(this._$AH)?this._$AA.nextSibling.data=e:this.T(wt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(zt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new M(n,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=It.get(e.strings);return void 0===t&&It.set(e.strings,t=new N(e)),t}k(e){$t(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const r of e)n===t.length?t.push(o=new R(this.O(xt()),this.O(xt()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=Bt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Bt}_$AI(e,t=this,o,n){const r=this.strings;let s=!1;if(void 0===r)e=Ut(this,e,t,0),s=!kt(e)||e!==this._$AH&&e!==Ft,s&&(this._$AH=e);else{const n=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=Ut(this,n[o+a],t,a),l===Ft&&(l=this._$AH[a]),s||=!kt(l)||l!==this._$AH[a],l===Bt?e=Bt:e!==Bt&&(e+=(l??"")+r[a+1]),this._$AH[a]=l}s&&!n&&this.j(e)}j(e){e===Bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Bt?void 0:e}}class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Bt)}}class L extends k{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=Ut(this,e,t,0)??Bt)===Ft)return;const o=this._$AH,n=e===Bt&&o!==Bt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==Bt&&(o===Bt||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ut(this,e)}}const Ht=ut.litHtmlPolyfillSupport;Ht?.(N,R),(ut.litHtmlVersions??=[]).push("3.2.1");class lit_element_r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=o?.renderBefore??null;n._$litPart$=r=new R(t.insertBefore(xt(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ft}}lit_element_r._$litElement$=!0,lit_element_r.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_r});const Vt=globalThis.litElementPolyfillSupport;Vt?.({LitElement:lit_element_r});(globalThis.litElementVersions??=[]).push("4.1.1");const Nt=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Gt={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:dt},jt=(e=Gt,t,o)=>{const{kind:n,metadata:r}=o;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,r,e)},init(t){return void 0!==t&&this.P(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const r=this[n];t.call(this,o),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+n)};function qt(e){return(t,o)=>"object"==typeof o?jt(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const Qt=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function Jt(e,t){return(o,n,r)=>{const s=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof n?o:r??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Qt(o,n,{get(){let o=e.call(this);return void 0===o&&(o=s(this),(null!==o||this.hasUpdated)&&t.call(this,o)),o}})}return Qt(o,n,{get(){return s(this)}})}}var Yt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,Zt=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?Kt(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&Yt(t,o,s),s};const Xt=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc","debug-breakpoint-unverified":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","debug-stackframe-dot":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11","gl-commit-horizontal":"\\f101","gl-graph":"\\f102","gl-next-commit":"\\f103","gl-prev-commit-menu":"\\f104","gl-prev-commit":"\\f105","gl-compare-ref-working":"\\f106","gl-branches-view":"\\f107","gl-commit-view":"\\f108","gl-commits-view":"\\f109","gl-compare-view":"\\f10a","gl-contributors-view":"\\f10b","gl-history-view":"\\f10c","gl-remotes-view":"\\f10d","gl-repositories-view":"\\f10e","gl-search-view":"\\f10f","gl-stashes-view":"\\f110","gl-tags-view":"\\f111","gl-worktrees-view":"\\f112","gl-gitlens":"\\f113","gl-stash-pop":"\\f114","gl-stash-save":"\\f115","gl-unplug":"\\f116","gl-open-revision":"\\f117","gl-switch":"\\f118","gl-expand":"\\f119","gl-list-auto":"\\f11a","gl-repo-force-push":"\\f11b","gl-pinned-filled":"\\f11c","gl-clock":"\\f11d","gl-provider-azdo":"\\f11e","gl-provider-bitbucket":"\\f11f","gl-provider-gerrit":"\\f120","gl-provider-gitea":"\\f121","gl-provider-github":"\\f122","gl-provider-gitlab":"\\f123","gl-gitlens-inspect":"\\f124","gl-workspaces-view":"\\f125","gl-cloud-patch":"\\f128","gl-cloud-patch-share":"\\f129","gl-inspect":"\\f12a","gl-repository-filled":"\\f12b","gl-code-suggestion":"\\f12d","gl-diff-multiple":"\\f12e","gl-diff-single":"\\f12f","gl-repo-fetch":"\\f130","gl-repo-pull":"\\f131","gl-repo-push":"\\f132","gl-provider-jira":"\\f133","gl-play-button":"\\f134","rocket-filled":"\\f135"});let eo=class extends lit_element_r{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};eo.styles=Ke`
		:host {
			--code-icon-size: 16px;
			--code-icon-v-align: text-bottom;

			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${Ye(Object.entries(Xt).map((([e,t])=>`\n\t\t\t\t\t\t:host([icon='${e}'])::before {\n\t\t\t\t\t\t\tcontent: '${t}';\n\t\t\t\t\t\t}\n\t\t\t\t\t`)).join(""))}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,Zt([qt({reflect:!0})],eo.prototype,"icon",2),Zt([qt({reflect:!0})],eo.prototype,"modifier",2),Zt([qt({type:Number})],eo.prototype,"size",2),Zt([qt({reflect:!0})],eo.prototype,"flip",2),Zt([qt({reflect:!0})],eo.prototype,"rotate",2),eo=Zt([Nt("code-icon")],eo);var to=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,io=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?oo(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&to(t,o,s),s};let no=class extends lit_element_r{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Ot`<div class="progress-bar"></div>`}};no.styles=Ke`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,io([qt({reflect:!0})],no.prototype,"mode",2),io([qt({type:Boolean})],no.prototype,"active",2),io([qt()],no.prototype,"position",2),no=io([Nt("progress-indicator")],no);Ke`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const ro=Ke`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,so=Ke`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,ao=Ke`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`,lo=Ke`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${ro}
	}
	a:hover {
		text-decoration: underline;
	}
`;Ke`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;var co=Object.defineProperty,ho=Object.defineProperties,po=Object.getOwnPropertyDescriptor,uo=Object.getOwnPropertyDescriptors,go=Object.getOwnPropertySymbols,mo=Object.prototype.hasOwnProperty,fo=Object.prototype.propertyIsEnumerable,bo=(e,t,o)=>t in e?co(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,yo=(e,t)=>{for(var o in t||(t={}))mo.call(t,o)&&bo(e,o,t[o]);if(go)for(var o of go(t))fo.call(t,o)&&bo(e,o,t[o]);return e},vo=(e,t)=>ho(e,uo(t)),wo=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?po(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&co(t,o,s),s},xo=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)},ko=new Map,$o=new WeakMap;function Co(e){return null!=e?e:{keyframes:[],options:{duration:0}}}function _o(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Po(e,t){ko.set(e,Co(t))}function So(e,t,o){const n=$o.get(e);if(null==n?void 0:n[t])return _o(n[t],o.dir);const r=ko.get(t);return r?_o(r,o.dir):{keyframes:[],options:{duration:0}}}var Ao=Ke`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ro=Ke`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Do=new Set,To=new Map;let Lo,Eo="ltr",Oo="en";const Fo="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Fo){const e=new MutationObserver(Io);Eo=document.documentElement.dir||"ltr",Oo=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Bo(...e){e.map((e=>{const t=e.$code.toLowerCase();To.has(t)?To.set(t,Object.assign(Object.assign({},To.get(t)),e)):To.set(t,e),Lo||(Lo=e)})),Io()}function Io(){Fo&&(Eo=document.documentElement.dir||"ltr",Oo=document.documentElement.lang||navigator.language),[...Do.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Do.add(this.host)}hostDisconnected(){Do.delete(this.host)}dir(){return`${this.host.dir||Eo}`.toLowerCase()}lang(){return`${this.host.lang||Oo}`.toLowerCase()}getTranslationData(e){var t,o;const n=new Intl.Locale(e.replace(/_/g,"-")),r=null==n?void 0:n.language.toLowerCase(),s=null!==(o=null===(t=null==n?void 0:n.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==o?o:"";return{locale:n,language:r,region:s,primary:To.get(`${r}-${s}`),secondary:To.get(r)}}exists(e,t){var o;const{primary:n,secondary:r}=this.getTranslationData(null!==(o=t.lang)&&void 0!==o?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Lo&&Lo[e])}term(e,...t){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let r;if(o&&o[e])r=o[e];else if(n&&n[e])r=n[e];else{if(!Lo||!Lo[e])return String(e);r=Lo[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}}var Mo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Bo(Mo);var zo=Mo,Wo=class extends LocalizeController{};Bo(zo);var Uo,Ho=Ke`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Vo=class extends lit_element_r{constructor(){super(),((e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)})(this,Uo,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const o=new CustomEvent(e,yo({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const n=customElements.get(e);if(!n){try{customElements.define(e,t,o)}catch(n){customElements.define(e,class extends t{},o)}return}let r=" (unknown version)",s=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in n&&n.version&&(s=" v"+n.version)}attributeChangedCallback(e,t,o){var n,r,s;xo(n=this,r=Uo,"read from private field"),(s?s.call(n):r.get(n))||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,o,n)=>{xo(e,t,"write to private field"),n?n.call(e,o):t.set(e,o)})(this,Uo,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)}))}};Uo=new WeakMap,Vo.version="2.18.0",Vo.dependencies={},wo([qt()],Vo.prototype,"dir",2),wo([qt()],Vo.prototype,"lang",2);const No=Math.min,Go=Math.max,jo=Math.round,qo=Math.floor,Qo=e=>({x:e,y:e}),Jo={left:"right",right:"left",bottom:"top",top:"bottom"},Yo={start:"end",end:"start"};function Ko(e,t,o){return Go(e,No(t,o))}function Zo(e,t){return"function"==typeof e?e(t):e}function Xo(e){return e.split("-")[0]}function ei(e){return e.split("-")[1]}function ti(e){return"x"===e?"y":"x"}function oi(e){return"y"===e?"height":"width"}function ii(e){return["top","bottom"].includes(Xo(e))?"y":"x"}function ni(e){return ti(ii(e))}function ri(e){return e.replace(/start|end/g,(e=>Yo[e]))}function si(e){return e.replace(/left|right|bottom|top/g,(e=>Jo[e]))}function ai(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function li(e){const{x:t,y:o,width:n,height:r}=e;return{width:n,height:r,top:o,left:t,right:t+n,bottom:o+r,x:t,y:o}}function ci(e,t,o){let{reference:n,floating:r}=e;const s=ii(t),a=ni(t),l=oi(a),c=Xo(t),h="y"===s,d=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2,u=n[l]/2-r[l]/2;let g;switch(c){case"top":g={x:d,y:n.y-r.height};break;case"bottom":g={x:d,y:n.y+n.height};break;case"right":g={x:n.x+n.width,y:p};break;case"left":g={x:n.x-r.width,y:p};break;default:g={x:n.x,y:n.y}}switch(ei(t)){case"start":g[a]-=u*(o&&h?-1:1);break;case"end":g[a]+=u*(o&&h?-1:1)}return g}async function hi(e,t){var o;void 0===t&&(t={});const{x:n,y:r,platform:s,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=Zo(t,e),m=ai(g),f=l[u?"floating"===p?"reference":"floating":p],y=li(await s.getClippingRect({element:null==(o=await(null==s.isElement?void 0:s.isElement(f)))||o?f:f.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:h,rootBoundary:d,strategy:c})),v="floating"===p?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,w=await(null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),x=await(null==s.isElement?void 0:s.isElement(w))&&await(null==s.getScale?void 0:s.getScale(w))||{x:1,y:1},$=li(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:w,strategy:c}):v);return{top:(y.top-$.top+m.top)/x.y,bottom:($.bottom-y.bottom+m.bottom)/x.y,left:(y.left-$.left+m.left)/x.x,right:($.right-y.right+m.right)/x.x}}function di(){return"undefined"!=typeof window}function pi(e){return mi(e)?(e.nodeName||"").toLowerCase():"#document"}function ui(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function gi(e){var t;return null==(t=(mi(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function mi(e){return!!di()&&(e instanceof Node||e instanceof ui(e).Node)}function fi(e){return!!di()&&(e instanceof Element||e instanceof ui(e).Element)}function bi(e){return!!di()&&(e instanceof HTMLElement||e instanceof ui(e).HTMLElement)}function yi(e){return!(!di()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof ui(e).ShadowRoot)}function vi(e){const{overflow:t,overflowX:o,overflowY:n,display:r}=_i(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(r)}function wi(e){return["table","td","th"].includes(pi(e))}function xi(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function ki(e){const t=$i(),o=fi(e)?_i(e):e;return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function $i(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ci(e){return["html","body","#document"].includes(pi(e))}function _i(e){return ui(e).getComputedStyle(e)}function Pi(e){return fi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Si(e){if("html"===pi(e))return e;const t=e.assignedSlot||e.parentNode||yi(e)&&e.host||gi(e);return yi(t)?t.host:t}function Ai(e){const t=Si(e);return Ci(t)?e.ownerDocument?e.ownerDocument.body:e.body:bi(t)&&vi(t)?t:Ai(t)}function Ri(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=Ai(e),s=r===(null==(n=e.ownerDocument)?void 0:n.body),a=ui(r);if(s){const e=Di(a);return t.concat(a,a.visualViewport||[],vi(r)?r:[],e&&o?Ri(e):[])}return t.concat(r,Ri(r,[],o))}function Di(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ti(e){const t=_i(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=bi(e),s=r?e.offsetWidth:o,a=r?e.offsetHeight:n,l=jo(o)!==s||jo(n)!==a;return l&&(o=s,n=a),{width:o,height:n,$:l}}function Li(e){return fi(e)?e:e.contextElement}function Ei(e){const t=Li(e);if(!bi(t))return Qo(1);const o=t.getBoundingClientRect(),{width:n,height:r,$:s}=Ti(t);let a=(s?jo(o.width):o.width)/n,l=(s?jo(o.height):o.height)/r;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Oi=Qo(0);function Fi(e){const t=ui(e);return $i()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Oi}function Bi(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),s=Li(e);let a=Qo(1);t&&(n?fi(n)&&(a=Ei(n)):a=Ei(e));const l=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==ui(e))&&t}(s,o,n)?Fi(s):Qo(0);let c=(r.left+l.x)/a.x,h=(r.top+l.y)/a.y,d=r.width/a.x,p=r.height/a.y;if(s){const e=ui(s),t=n&&fi(n)?ui(n):n;let o=e,r=Di(o);for(;r&&n&&t!==o;){const e=Ei(r),t=r.getBoundingClientRect(),n=_i(r),s=t.left+(r.clientLeft+parseFloat(n.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(n.paddingTop))*e.y;c*=e.x,h*=e.y,d*=e.x,p*=e.y,c+=s,h+=a,o=ui(r),r=Di(o)}}return li({width:d,height:p,x:c,y:h})}function Ii(e,t){const o=Pi(e).scrollLeft;return t?t.left+o:Bi(gi(e)).left+o}function Mi(e,t,o){void 0===o&&(o=!1);const n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-(o?0:Ii(e,n)),y:n.top+t.scrollTop}}function zi(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=ui(e),n=gi(e),r=o.visualViewport;let s=n.clientWidth,a=n.clientHeight,l=0,c=0;if(r){s=r.width,a=r.height;const e=$i();(!e||e&&"fixed"===t)&&(l=r.offsetLeft,c=r.offsetTop)}return{width:s,height:a,x:l,y:c}}(e,o);else if("document"===t)n=function(e){const t=gi(e),o=Pi(e),n=e.ownerDocument.body,r=Go(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=Go(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let a=-o.scrollLeft+Ii(e);const l=-o.scrollTop;return"rtl"===_i(n).direction&&(a+=Go(t.clientWidth,n.clientWidth)-r),{width:r,height:s,x:a,y:l}}(gi(e));else if(fi(t))n=function(e,t){const o=Bi(e,!0,"fixed"===t),n=o.top+e.clientTop,r=o.left+e.clientLeft,s=bi(e)?Ei(e):Qo(1);return{width:e.clientWidth*s.x,height:e.clientHeight*s.y,x:r*s.x,y:n*s.y}}(t,o);else{const o=Fi(e);n={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return li(n)}function Wi(e,t){const o=Si(e);return!(o===t||!fi(o)||Ci(o))&&("fixed"===_i(o).position||Wi(o,t))}function Ui(e,t,o){const n=bi(t),r=gi(t),s="fixed"===o,a=Bi(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=Qo(0);if(n||!n&&!s)if(("body"!==pi(t)||vi(r))&&(l=Pi(t)),n){const e=Bi(t,!0,s,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else r&&(c.x=Ii(r));const h=!r||n||s?Qo(0):Mi(r,l);return{x:a.left+l.scrollLeft-c.x-h.x,y:a.top+l.scrollTop-c.y-h.y,width:a.width,height:a.height}}function Hi(e){return"static"===_i(e).position}function Vi(e,t){if(!bi(e)||"fixed"===_i(e).position)return null;if(t)return t(e);let o=e.offsetParent;return gi(e)===o&&(o=o.ownerDocument.body),o}function Ni(e,t){const o=ui(e);if(xi(e))return o;if(!bi(e)){let t=Si(e);for(;t&&!Ci(t);){if(fi(t)&&!Hi(t))return t;t=Si(t)}return o}let n=Vi(e,t);for(;n&&wi(n)&&Hi(n);)n=Vi(n,t);return n&&Ci(n)&&Hi(n)&&!ki(n)?o:n||function(e){let t=Si(e);for(;bi(t)&&!Ci(t);){if(ki(t))return t;if(xi(t))return null;t=Si(t)}return null}(e)||o}const Gi={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:n,strategy:r}=e;const s="fixed"===r,a=gi(n),l=!!t&&xi(t.floating);if(n===a||l&&s)return o;let c={scrollLeft:0,scrollTop:0},h=Qo(1);const d=Qo(0),p=bi(n);if((p||!p&&!s)&&(("body"!==pi(n)||vi(a))&&(c=Pi(n)),bi(n))){const e=Bi(n);h=Ei(n),d.x=e.x+n.clientLeft,d.y=e.y+n.clientTop}const u=!a||p||s?Qo(0):Mi(a,c,!0);return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-c.scrollLeft*h.x+d.x+u.x,y:o.y*h.y-c.scrollTop*h.y+d.y+u.y}},getDocumentElement:gi,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:r}=e;const s=[..."clippingAncestors"===o?xi(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let n=Ri(e,[],!1).filter((e=>fi(e)&&"body"!==pi(e))),r=null;const s="fixed"===_i(e).position;let a=s?Si(e):e;for(;fi(a)&&!Ci(a);){const t=_i(a),o=ki(a);o||"fixed"!==t.position||(r=null),(s?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||vi(a)&&!o&&Wi(e,a))?n=n.filter((e=>e!==a)):r=t,a=Si(a)}return t.set(e,n),n}(t,this._c):[].concat(o),n],a=s[0],l=s.reduce(((e,o)=>{const n=zi(t,o,r);return e.top=Go(n.top,e.top),e.right=No(n.right,e.right),e.bottom=No(n.bottom,e.bottom),e.left=Go(n.left,e.left),e}),zi(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Ni,getElementRects:async function(e){const t=this.getOffsetParent||Ni,o=this.getDimensions,n=await o(e.floating);return{reference:Ui(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=Ti(e);return{width:t,height:o}},getScale:Ei,isElement:fi,isRTL:function(e){return"rtl"===_i(e).direction}};function ji(e,t,o,n){void 0===n&&(n={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=n,h=Li(e),d=r||s?[...h?Ri(h):[],...Ri(t)]:[];d.forEach((e=>{r&&e.addEventListener("scroll",o,{passive:!0}),s&&e.addEventListener("resize",o)}));const p=h&&l?function(e,t){let o,n=null;const r=gi(e);function s(){var e;clearTimeout(o),null==(e=n)||e.disconnect(),n=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),s();const{left:h,top:d,width:p,height:u}=e.getBoundingClientRect();if(l||t(),!p||!u)return;const g={rootMargin:-qo(d)+"px "+-qo(r.clientWidth-(h+p))+"px "+-qo(r.clientHeight-(d+u))+"px "+-qo(h)+"px",threshold:Go(0,No(1,c))||1};let m=!0;function f(e){const t=e[0].intersectionRatio;if(t!==c){if(!m)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}m=!1}try{n=new IntersectionObserver(f,{...g,root:r.ownerDocument})}catch(e){n=new IntersectionObserver(f,g)}n.observe(e)}(!0),s}(h,o):null;let u,g=-1,m=null;a&&(m=new ResizeObserver((e=>{let[n]=e;n&&n.target===h&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var e;null==(e=m)||e.observe(t)}))),o()})),h&&!c&&m.observe(h),m.observe(t));let f=c?Bi(e):null;return c&&function t(){const n=Bi(e);!f||n.x===f.x&&n.y===f.y&&n.width===f.width&&n.height===f.height||o();f=n,u=requestAnimationFrame(t)}(),o(),()=>{var e;d.forEach((e=>{r&&e.removeEventListener("scroll",o),s&&e.removeEventListener("resize",o)})),null==p||p(),null==(e=m)||e.disconnect(),m=null,c&&cancelAnimationFrame(u)}}const qi=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:r,y:s,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:o,platform:n,elements:r}=e,s=await(null==n.isRTL?void 0:n.isRTL(r.floating)),a=Xo(o),l=ei(o),c="y"===ii(o),h=["left","top"].includes(a)?-1:1,d=s&&c?-1:1,p=Zo(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&"number"==typeof m&&(g="end"===l?-1*m:m),c?{x:g*d,y:u*h}:{x:u*h,y:g*d}}(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(n=l.arrow)&&n.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:a}}}}},Qi=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:r}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=Zo(e,t),h={x:o,y:n},d=await hi(t,c),p=ii(Xo(r)),u=ti(p);let g=h[u],m=h[p];if(s){const e="y"===u?"bottom":"right";g=Ko(g+d["y"===u?"top":"left"],g,g-d[e])}if(a){const e="y"===p?"bottom":"right";m=Ko(m+d["y"===p?"top":"left"],m,m-d[e])}const f=l.fn({...t,[u]:g,[p]:m});return{...f,data:{x:f.x-o,y:f.y-n,enabled:{[u]:s,[p]:a}}}}}},Ji=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:r,middlewareData:s,rects:a,initialPlacement:l,platform:c,elements:h}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...y}=Zo(e,t);if(null!=(o=s.arrow)&&o.alignmentOffset)return{};const v=Xo(r),w=ii(l),x=Xo(l)===l,$=await(null==c.isRTL?void 0:c.isRTL(h.floating)),C=u||(x||!f?[si(l)]:function(e){const t=si(e);return[ri(e),t,ri(t)]}(l)),_="none"!==m;!u&&_&&C.push(...function(e,t,o,n){const r=ei(e);let s=function(e,t,o){const n=["left","right"],r=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:n:t?n:r;case"left":case"right":return t?s:a;default:return[]}}(Xo(e),"start"===o,n);return r&&(s=s.map((e=>e+"-"+r)),t&&(s=s.concat(s.map(ri)))),s}(l,f,m,$));const P=[l,...C],S=await hi(t,y),A=[];let D=(null==(n=s.flip)?void 0:n.overflows)||[];if(d&&A.push(S[v]),p){const e=function(e,t,o){void 0===o&&(o=!1);const n=ei(e),r=ni(e),s=oi(r);let a="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=si(a)),[a,si(a)]}(r,a,$);A.push(S[e[0]],S[e[1]])}if(D=[...D,{placement:r,overflows:A}],!A.every((e=>e<=0))){var T,E;const e=((null==(T=s.flip)?void 0:T.index)||0)+1,t=P[e];if(t)return{data:{index:e,overflows:D},reset:{placement:t}};let o=null==(E=D.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!o)switch(g){case"bestFit":{var O;const e=null==(O=D.filter((e=>{if(_){const t=ii(e.placement);return t===w||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:O[0];e&&(o=e);break}case"initialPlacement":o=l}if(r!==o)return{reset:{placement:o}}}return{}}}},Yi=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,n;const{placement:r,rects:s,platform:a,elements:l}=t,{apply:c=()=>{},...h}=Zo(e,t),d=await hi(t,h),p=Xo(r),u=ei(r),g="y"===ii(r),{width:m,height:f}=s.floating;let y,v;"top"===p||"bottom"===p?(y=p,v=u===(await(null==a.isRTL?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(v=p,y="end"===u?"top":"bottom");const w=f-d.top-d.bottom,x=m-d.left-d.right,$=No(f-d[y],w),C=No(m-d[v],x),_=!t.middlewareData.shift;let P=$,S=C;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(S=x),null!=(n=t.middlewareData.shift)&&n.enabled.y&&(P=w),_&&!u){const e=Go(d.left,0),t=Go(d.right,0),o=Go(d.top,0),n=Go(d.bottom,0);g?S=m-2*(0!==e||0!==t?e+t:Go(d.left,d.right)):P=f-2*(0!==o||0!==n?o+n:Go(d.top,d.bottom))}await c({...t,availableWidth:S,availableHeight:P});const A=await a.getDimensions(l.floating);return m!==A.width||f!==A.height?{reset:{rects:!0}}:{}}}},Ki=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:r,rects:s,platform:a,elements:l,middlewareData:c}=t,{element:h,padding:d=0}=Zo(e,t)||{};if(null==h)return{};const p=ai(d),u={x:o,y:n},g=ni(r),m=oi(g),f=await a.getDimensions(h),y="y"===g,v=y?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",$=s.reference[m]+s.reference[g]-u[g]-s.floating[m],C=u[g]-s.reference[g],_=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let P=_?_[x]:0;P&&await(null==a.isElement?void 0:a.isElement(_))||(P=l.floating[x]||s.floating[m]);const S=$/2-C/2,A=P/2-f[m]/2-1,D=No(p[v],A),T=No(p[w],A),E=D,O=P-f[m]-T,F=P/2-f[m]/2+S,B=Ko(E,F,O),W=!c.arrow&&null!=ei(r)&&F!==B&&s.reference[m]/2-(F<E?D:T)-f[m]/2<0,U=W?F<E?F-E:F-O:0;return{[g]:u[g]+U,data:{[g]:B,centerOffset:F-B-U,...W&&{alignmentOffset:U}},reset:W}}}),Zi=(e,t,o)=>{const n=new Map,r={platform:Gi,...o},s={...r.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:s=[],platform:a}=o,l=s.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:p}=ci(h,n,c),u=n,g={},m=0;for(let o=0;o<l.length;o++){const{name:s,fn:f}=l[o],{x:y,y:v,data:w,reset:x}=await f({x:d,y:p,initialPlacement:n,placement:u,strategy:r,middlewareData:g,rects:h,platform:a,elements:{reference:e,floating:t}});d=null!=y?y:d,p=null!=v?v:p,g={...g,[s]:{...g[s],...w}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(u=x.placement),x.rects&&(h=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):x.rects),({x:d,y:p}=ci(h,u,c))),o=-1)}return{x:d,y:p,placement:u,strategy:r,middlewareData:g}})(e,t,{...r,platform:s})},Xi=1;class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const en=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends directive_i{constructor(e){if(super(e),e.type!==Xi||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return Ft}});function tn(e){return nn(e)}function on(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function nn(e){for(let t=e;t;t=on(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=on(e);t;t=on(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||"none"!==e.filter)return t;if("BODY"===t.tagName)return t}}return null}var rn=class extends Vo{constructor(){super(...arguments),this.localize=new Wo(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let o=0,n=0,r=0,s=0,a=0,l=0,c=0,h=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(o=e.left,n=e.bottom,r=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(o=t.left,n=t.bottom,r=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(o=e.right,n=e.top,r=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(o=t.right,n=t.top,r=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&(this.cleanup=ji(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>e()))):e()}))}reposition(){if(!this.active||!this.anchorEl)return;const e=[qi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Yi({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ji({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Qi({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Yi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Ki({element:this.arrowEl,padding:this.arrowPadding}));const t="absolute"===this.strategy?e=>Gi.getOffsetParent(e,tn):Gi.getOffsetParent;Zi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:vo(yo({},Gi),{getOffsetParent:t})}).then((({x:e,y:t,middlewareData:o,placement:n})=>{const r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=o.arrow.x,t=o.arrow.y;let n="",a="",l="",c="";if("start"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?o:"",c=r?"":o}else if("end"===this.arrowPlacement){const o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":o,c=r?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",n="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",n="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:n,right:a,bottom:l,left:c,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition")}render(){return Ot`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${en({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${en({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Ot`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function sn(e,t){return new Promise((o=>{e.addEventListener(t,(function n(r){r.target===e&&(e.removeEventListener(t,n),o())}))}))}function an(e,t,o){return new Promise((n=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=e.animate(t,vo(yo({},o),{duration:cn()?0:o.duration}));r.addEventListener("cancel",n,{once:!0}),r.addEventListener("finish",n,{once:!0})}))}function ln(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function cn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function hn(e){return Promise.all(e.getAnimations().map((e=>new Promise((t=>{e.cancel(),requestAnimationFrame(t)})))))}function dn(e,t){const o=yo({waitUntilFirstUpdate:!1},t);return(t,n)=>{const{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),s=this[r];t!==s&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[n](t,s))}})),r.call(this,e)}}}rn.styles=[Ho,Ro],wo([Jt(".popup")],rn.prototype,"popup",2),wo([Jt(".popup__arrow")],rn.prototype,"arrowEl",2),wo([qt()],rn.prototype,"anchor",2),wo([qt({type:Boolean,reflect:!0})],rn.prototype,"active",2),wo([qt({reflect:!0})],rn.prototype,"placement",2),wo([qt({reflect:!0})],rn.prototype,"strategy",2),wo([qt({type:Number})],rn.prototype,"distance",2),wo([qt({type:Number})],rn.prototype,"skidding",2),wo([qt({type:Boolean})],rn.prototype,"arrow",2),wo([qt({attribute:"arrow-placement"})],rn.prototype,"arrowPlacement",2),wo([qt({attribute:"arrow-padding",type:Number})],rn.prototype,"arrowPadding",2),wo([qt({type:Boolean})],rn.prototype,"flip",2),wo([qt({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map((e=>e.trim())).filter((e=>""!==e)),toAttribute:e=>e.join(" ")}})],rn.prototype,"flipFallbackPlacements",2),wo([qt({attribute:"flip-fallback-strategy"})],rn.prototype,"flipFallbackStrategy",2),wo([qt({type:Object})],rn.prototype,"flipBoundary",2),wo([qt({attribute:"flip-padding",type:Number})],rn.prototype,"flipPadding",2),wo([qt({type:Boolean})],rn.prototype,"shift",2),wo([qt({type:Object})],rn.prototype,"shiftBoundary",2),wo([qt({attribute:"shift-padding",type:Number})],rn.prototype,"shiftPadding",2),wo([qt({attribute:"auto-size"})],rn.prototype,"autoSize",2),wo([qt()],rn.prototype,"sync",2),wo([qt({type:Object})],rn.prototype,"autoSizeBoundary",2),wo([qt({attribute:"auto-size-padding",type:Number})],rn.prototype,"autoSizePadding",2),wo([qt({attribute:"hover-bridge",type:Boolean})],rn.prototype,"hoverBridge",2);var pn=class extends Vo{constructor(){super(),this.localize=new Wo(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=ln(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=ln(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await hn(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:o}=So(this,"tooltip.show",{dir:this.localize.dir()});await an(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await hn(this.body);const{keyframes:e,options:o}=So(this,"tooltip.hide",{dir:this.localize.dir()});await an(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,sn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,sn(this,"sl-after-hide")}render(){return Ot`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${en({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};pn.styles=[Ho,Ao],pn.dependencies={"sl-popup":rn},wo([Jt("slot:not([name])")],pn.prototype,"defaultSlot",2),wo([Jt(".tooltip__body")],pn.prototype,"body",2),wo([Jt("sl-popup")],pn.prototype,"popup",2),wo([qt()],pn.prototype,"content",2),wo([qt()],pn.prototype,"placement",2),wo([qt({type:Boolean,reflect:!0})],pn.prototype,"disabled",2),wo([qt({type:Number})],pn.prototype,"distance",2),wo([qt({type:Boolean,reflect:!0})],pn.prototype,"open",2),wo([qt({type:Number})],pn.prototype,"skidding",2),wo([qt()],pn.prototype,"trigger",2),wo([qt({type:Boolean})],pn.prototype,"hoist",2),wo([dn("open",{waitUntilFirstUpdate:!0})],pn.prototype,"handleOpenChange",1),wo([dn(["content","distance","hoist","placement","skidding"])],pn.prototype,"handleOptionsChange",1),wo([dn("disabled")],pn.prototype,"handleDisabledChange",1),Po("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Po("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});pn.define("sl-tooltip");var un=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,mn=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?gn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&un(t,o,s),s};Po("tooltip.show",null),Po("tooltip.hide",null);let fn=class extends lit_element_r{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){const e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}}));const e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect()}render(){return Ot`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??Bt}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${this.content}</slot>
			</div>
		</sl-tooltip>`}};fn.styles=Ke`
		sl-tooltip {
			--max-width: 320px;
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}
	`,mn([qt()],fn.prototype,"content",2),mn([qt({reflect:!0})],fn.prototype,"placement",2),mn([qt({type:Boolean})],fn.prototype,"disabled",2),mn([qt({type:Number})],fn.prototype,"distance",2),mn([qt({type:Boolean})],fn.prototype,"hoist",2),fn=mn([Nt("gl-tooltip")],fn);var bn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,vn=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?yn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&bn(t,o,s),s};let wn=class extends lit_element_r{constructor(){super(...arguments),this.disabled=!1,this.full=!1}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled.toString())}render(){return this.tooltip?Ot`<gl-tooltip .content=${this.tooltip}>${this.renderControl()}</gl-tooltip>`:this.querySelectorAll('[slot="tooltip"]').length>0?Ot`<gl-tooltip>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?Ot`<a
				class="control"
				tabindex="${!1===this.disabled?0:-1}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:Ot`<button class="control" ?disabled=${this.disabled}>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};wn.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},wn.styles=[ao,Ke`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);

				color: inherit;
				text-decoration: none;

				width: max-content;
				height: 100%;
				cursor: pointer;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-block;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${so}
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],vn([Jt(".control")],wn.prototype,"control",2),vn([qt({reflect:!0})],wn.prototype,"appearance",2),vn([qt({type:Boolean,reflect:!0})],wn.prototype,"disabled",2),vn([qt({reflect:!0})],wn.prototype,"density",2),vn([qt({type:Boolean,reflect:!0})],wn.prototype,"full",2),vn([qt()],wn.prototype,"href",2),vn([qt({reflect:!0})],wn.prototype,"role",1),vn([qt()],wn.prototype,"tooltip",2),wn=vn([Nt("gl-button")],wn);var xn=(e=>(e.ActionPrefix="gitlens.action.",e.AddAuthors="gitlens.addAuthors",e.BrowseRepoAtRevision="gitlens.browseRepoAtRevision",e.BrowseRepoAtRevisionInNewWindow="gitlens.browseRepoAtRevisionInNewWindow",e.BrowseRepoBeforeRevision="gitlens.browseRepoBeforeRevision",e.BrowseRepoBeforeRevisionInNewWindow="gitlens.browseRepoBeforeRevisionInNewWindow",e.ClearFileAnnotations="gitlens.clearFileAnnotations",e.CloseUnchangedFiles="gitlens.closeUnchangedFiles",e.CompareWith="gitlens.compareWith",e.CompareHeadWith="gitlens.compareHeadWith",e.CompareWorkingWith="gitlens.compareWorkingWith",e.ComputingFileAnnotations="gitlens.computingFileAnnotations",e.ConnectRemoteProvider="gitlens.connectRemoteProvider",e.CopyCurrentBranch="gitlens.copyCurrentBranch",e.CopyDeepLinkToBranch="gitlens.copyDeepLinkToBranch",e.CopyDeepLinkToCommit="gitlens.copyDeepLinkToCommit",e.CopyDeepLinkToComparison="gitlens.copyDeepLinkToComparison",e.CopyDeepLinkToFile="gitlens.copyDeepLinkToFile",e.CopyDeepLinkToFileAtRevision="gitlens.copyDeepLinkToFileAtRevision",e.CopyDeepLinkToLines="gitlens.copyDeepLinkToLines",e.CopyDeepLinkToRepo="gitlens.copyDeepLinkToRepo",e.CopyDeepLinkToTag="gitlens.copyDeepLinkToTag",e.CopyDeepLinkToWorkspace="gitlens.copyDeepLinkToWorkspace",e.CopyMessageToClipboard="gitlens.copyMessageToClipboard",e.CopyRemoteBranchesUrl="gitlens.copyRemoteBranchesUrl",e.CopyRemoteBranchUrl="gitlens.copyRemoteBranchUrl",e.CopyRemoteCommitUrl="gitlens.copyRemoteCommitUrl",e.CopyRemoteComparisonUrl="gitlens.copyRemoteComparisonUrl",e.CopyRemoteFileUrl="gitlens.copyRemoteFileUrlToClipboard",e.CopyRemoteFileUrlWithoutRange="gitlens.copyRemoteFileUrlWithoutRange",e.CopyRemoteFileUrlFrom="gitlens.copyRemoteFileUrlFrom",e.CopyRemotePullRequestUrl="gitlens.copyRemotePullRequestUrl",e.CopyRemoteRepositoryUrl="gitlens.copyRemoteRepositoryUrl",e.CopyShaToClipboard="gitlens.copyShaToClipboard",e.CopyRelativePathToClipboard="gitlens.copyRelativePathToClipboard",e.ApplyPatchFromClipboard="gitlens.applyPatchFromClipboard",e.PastePatchFromClipboard="gitlens.pastePatchFromClipboard",e.CopyPatchToClipboard="gitlens.copyPatchToClipboard",e.CopyWorkingChangesToWorktree="gitlens.copyWorkingChangesToWorktree",e.CreatePatch="gitlens.createPatch",e.CreateCloudPatch="gitlens.createCloudPatch",e.CreatePullRequestOnRemote="gitlens.createPullRequestOnRemote",e.DiffDirectory="gitlens.diffDirectory",e.DiffDirectoryWithHead="gitlens.diffDirectoryWithHead",e.DiffFolderWithRevision="gitlens.diffFolderWithRevision",e.DiffFolderWithRevisionFrom="gitlens.diffFolderWithRevisionFrom",e.DiffWith="gitlens.diffWith",e.DiffWithNext="gitlens.diffWithNext",e.DiffWithNextInDiffLeft="gitlens.diffWithNextInDiffLeft",e.DiffWithNextInDiffRight="gitlens.diffWithNextInDiffRight",e.DiffWithPrevious="gitlens.diffWithPrevious",e.DiffWithPreviousInDiffLeft="gitlens.diffWithPreviousInDiffLeft",e.DiffWithPreviousInDiffRight="gitlens.diffWithPreviousInDiffRight",e.DiffLineWithPrevious="gitlens.diffLineWithPrevious",e.DiffWithRevision="gitlens.diffWithRevision",e.DiffWithRevisionFrom="gitlens.diffWithRevisionFrom",e.DiffWithWorking="gitlens.diffWithWorking",e.DiffWithWorkingInDiffLeft="gitlens.diffWithWorkingInDiffLeft",e.DiffWithWorkingInDiffRight="gitlens.diffWithWorkingInDiffRight",e.DiffLineWithWorking="gitlens.diffLineWithWorking",e.DisconnectRemoteProvider="gitlens.disconnectRemoteProvider",e.DisableDebugLogging="gitlens.disableDebugLogging",e.EnableDebugLogging="gitlens.enableDebugLogging",e.DisableRebaseEditor="gitlens.disableRebaseEditor",e.EnableRebaseEditor="gitlens.enableRebaseEditor",e.ExternalDiff="gitlens.externalDiff",e.ExternalDiffAll="gitlens.externalDiffAll",e.FetchRepositories="gitlens.fetchRepositories",e.GenerateCommitMessage="gitlens.generateCommitMessage",e.GenerateCommitMessageScm="gitlens.scm.generateCommitMessage",e.GetStarted="gitlens.getStarted",e.GKSwitchOrganization="gitlens.gk.switchOrganization",e.InviteToLiveShare="gitlens.inviteToLiveShare",e.OpenBlamePriorToChange="gitlens.openBlamePriorToChange",e.OpenBranchesOnRemote="gitlens.openBranchesOnRemote",e.OpenBranchOnRemote="gitlens.openBranchOnRemote",e.OpenCurrentBranchOnRemote="gitlens.openCurrentBranchOnRemote",e.OpenChangedFiles="gitlens.openChangedFiles",e.OpenCommitOnRemote="gitlens.openCommitOnRemote",e.OpenComparisonOnRemote="gitlens.openComparisonOnRemote",e.OpenFileHistory="gitlens.openFileHistory",e.OpenFileFromRemote="gitlens.openFileFromRemote",e.OpenFileOnRemote="gitlens.openFileOnRemote",e.OpenFileOnRemoteFrom="gitlens.openFileOnRemoteFrom",e.OpenFileAtRevision="gitlens.openFileRevision",e.OpenFileAtRevisionFrom="gitlens.openFileRevisionFrom",e.OpenFolderHistory="gitlens.openFolderHistory",e.OpenOnRemote="gitlens.openOnRemote",e.OpenCloudPatch="gitlens.openCloudPatch",e.OpenPatch="gitlens.openPatch",e.OpenPullRequestOnRemote="gitlens.openPullRequestOnRemote",e.OpenAssociatedPullRequestOnRemote="gitlens.openAssociatedPullRequestOnRemote",e.OpenRepoOnRemote="gitlens.openRepoOnRemote",e.OpenRevisionFile="gitlens.openRevisionFile",e.OpenRevisionFileInDiffLeft="gitlens.openRevisionFileInDiffLeft",e.OpenRevisionFileInDiffRight="gitlens.openRevisionFileInDiffRight",e.OpenWalkthrough="gitlens.openWalkthrough",e.OpenWorkingFile="gitlens.openWorkingFile",e.OpenWorkingFileInDiffLeft="gitlens.openWorkingFileInDiffLeft",e.OpenWorkingFileInDiffRight="gitlens.openWorkingFileInDiffRight",e.PullRepositories="gitlens.pullRepositories",e.PushRepositories="gitlens.pushRepositories",e.GitCommands="gitlens.gitCommands",e.GitCommandsBranch="gitlens.gitCommands.branch",e.GitCommandsBranchCreate="gitlens.gitCommands.branch.create",e.GitCommandsBranchDelete="gitlens.gitCommands.branch.delete",e.GitCommandsBranchPrune="gitlens.gitCommands.branch.prune",e.GitCommandsBranchRename="gitlens.gitCommands.branch.rename",e.GitCommandsCheckout="gitlens.gitCommands.checkout",e.GitCommandsCherryPick="gitlens.gitCommands.cherryPick",e.GitCommandsHistory="gitlens.gitCommands.history",e.GitCommandsMerge="gitlens.gitCommands.merge",e.GitCommandsRebase="gitlens.gitCommands.rebase",e.GitCommandsRemote="gitlens.gitCommands.remote",e.GitCommandsRemoteAdd="gitlens.gitCommands.remote.add",e.GitCommandsRemotePrune="gitlens.gitCommands.remote.prune",e.GitCommandsRemoteRemove="gitlens.gitCommands.remote.remove",e.GitCommandsReset="gitlens.gitCommands.reset",e.GitCommandsRevert="gitlens.gitCommands.revert",e.GitCommandsShow="gitlens.gitCommands.show",e.GitCommandsStash="gitlens.gitCommands.stash",e.GitCommandsStashDrop="gitlens.gitCommands.stash.drop",e.GitCommandsStashList="gitlens.gitCommands.stash.list",e.GitCommandsStashPop="gitlens.gitCommands.stash.pop",e.GitCommandsStashPush="gitlens.gitCommands.stash.push",e.GitCommandsStashRename="gitlens.gitCommands.stash.rename",e.GitCommandsStatus="gitlens.gitCommands.status",e.GitCommandsSwitch="gitlens.gitCommands.switch",e.GitCommandsTag="gitlens.gitCommands.tag",e.GitCommandsTagCreate="gitlens.gitCommands.tag.create",e.GitCommandsTagDelete="gitlens.gitCommands.tag.delete",e.GitCommandsWorktree="gitlens.gitCommands.worktree",e.GitCommandsWorktreeCreate="gitlens.gitCommands.worktree.create",e.GitCommandsWorktreeDelete="gitlens.gitCommands.worktree.delete",e.GitCommandsWorktreeOpen="gitlens.gitCommands.worktree.open",e.OpenOrCreateWorktreeForGHPR="gitlens.ghpr.views.openOrCreateWorktree",e.PlusConnectCloudIntegrations="gitlens.plus.cloudIntegrations.connect",e.PlusHide="gitlens.plus.hide",e.PlusLogin="gitlens.plus.login",e.PlusLogout="gitlens.plus.logout",e.PlusManage="gitlens.plus.manage",e.PlusManageCloudIntegrations="gitlens.plus.cloudIntegrations.manage",e.PlusReactivateProTrial="gitlens.plus.reactivateProTrial",e.PlusResendVerification="gitlens.plus.resendVerification",e.PlusRestore="gitlens.plus.restore",e.PlusShowPlans="gitlens.plus.showPlans",e.PlusSignUp="gitlens.plus.signUp",e.PlusStartPreviewTrial="gitlens.plus.startPreviewTrial",e.PlusContinueFeaturePreview="gitlens.plus.continueFeaturePreview",e.PlusUpgrade="gitlens.plus.upgrade",e.PlusValidate="gitlens.plus.validate",e.PlusSimulateSubscription="gitlens.plus.simulateSubscription",e.QuickOpenFileHistory="gitlens.quickOpenFileHistory",e.RefreshLaunchpad="gitlens.launchpad.refresh",e.RefreshGraph="gitlens.graph.refresh",e.RefreshHover="gitlens.refreshHover",e.Reset="gitlens.reset",e.ResetAIKey="gitlens.resetAIKey",e.ResetViewsLayout="gitlens.resetViewsLayout",e.RevealCommitInView="gitlens.revealCommitInView",e.ShareAsCloudPatch="gitlens.shareAsCloudPatch",e.SearchCommits="gitlens.showCommitSearch",e.SearchCommitsInView="gitlens.views.searchAndCompare.searchCommits",e.ShowBranchesView="gitlens.showBranchesView",e.ShowCommitDetailsView="gitlens.showCommitDetailsView",e.ShowCommitInView="gitlens.showCommitInView",e.ShowCommitsInView="gitlens.showCommitsInView",e.ShowCommitsView="gitlens.showCommitsView",e.ShowContributorsView="gitlens.showContributorsView",e.ShowDraftsView="gitlens.showDraftsView",e.ShowFileHistoryView="gitlens.showFileHistoryView",e.ShowGraph="gitlens.showGraph",e.ShowGraphPage="gitlens.showGraphPage",e.ShowGraphView="gitlens.showGraphView",e.ShowHomeView="gitlens.showHomeView",e.ShowAccountView="gitlens.showAccountView",e.ShowInCommitGraph="gitlens.showInCommitGraph",e.ShowInCommitGraphView="gitlens.showInCommitGraphView",e.ShowInDetailsView="gitlens.showInDetailsView",e.ShowInTimeline="gitlens.showInTimeline",e.ShowLastQuickPick="gitlens.showLastQuickPick",e.ShowLaunchpad="gitlens.showLaunchpad",e.ShowLaunchpadView="gitlens.showLaunchpadView",e.ShowLineCommitInView="gitlens.showLineCommitInView",e.ShowLineHistoryView="gitlens.showLineHistoryView",e.OpenOnlyChangedFiles="gitlens.openOnlyChangedFiles",e.ShowPatchDetailsPage="gitlens.showPatchDetailsPage",e.ShowQuickBranchHistory="gitlens.showQuickBranchHistory",e.ShowQuickCommit="gitlens.showQuickCommitDetails",e.ShowQuickCommitFile="gitlens.showQuickCommitFileDetails",e.ShowQuickCurrentBranchHistory="gitlens.showQuickRepoHistory",e.ShowQuickFileHistory="gitlens.showQuickFileHistory",e.ShowQuickRepoStatus="gitlens.showQuickRepoStatus",e.ShowQuickCommitRevision="gitlens.showQuickRevisionDetails",e.ShowQuickCommitRevisionInDiffLeft="gitlens.showQuickRevisionDetailsInDiffLeft",e.ShowQuickCommitRevisionInDiffRight="gitlens.showQuickRevisionDetailsInDiffRight",e.ShowQuickStashList="gitlens.showQuickStashList",e.ShowRemotesView="gitlens.showRemotesView",e.ShowRepositoriesView="gitlens.showRepositoriesView",e.ShowSearchAndCompareView="gitlens.showSearchAndCompareView",e.ShowSettingsPage="gitlens.showSettingsPage",e.ShowSettingsPageAndJumpToFileAnnotations="gitlens.showSettingsPage!file-annotations",e.ShowSettingsPageAndJumpToBranchesView="gitlens.showSettingsPage!branches-view",e.ShowSettingsPageAndJumpToCommitsView="gitlens.showSettingsPage!commits-view",e.ShowSettingsPageAndJumpToContributorsView="gitlens.showSettingsPage!contributors-view",e.ShowSettingsPageAndJumpToFileHistoryView="gitlens.showSettingsPage!file-history-view",e.ShowSettingsPageAndJumpToLineHistoryView="gitlens.showSettingsPage!line-history-view",e.ShowSettingsPageAndJumpToRemotesView="gitlens.showSettingsPage!remotes-view",e.ShowSettingsPageAndJumpToRepositoriesView="gitlens.showSettingsPage!repositories-view",e.ShowSettingsPageAndJumpToSearchAndCompareView="gitlens.showSettingsPage!search-compare-view",e.ShowSettingsPageAndJumpToStashesView="gitlens.showSettingsPage!stashes-view",e.ShowSettingsPageAndJumpToTagsView="gitlens.showSettingsPage!tags-view",e.ShowSettingsPageAndJumpToWorkTreesView="gitlens.showSettingsPage!worktrees-view",e.ShowSettingsPageAndJumpToViews="gitlens.showSettingsPage!views",e.ShowSettingsPageAndJumpToCommitGraph="gitlens.showSettingsPage!commit-graph",e.ShowSettingsPageAndJumpToAutolinks="gitlens.showSettingsPage!autolinks",e.ShowStashesView="gitlens.showStashesView",e.ShowTagsView="gitlens.showTagsView",e.ShowTimelinePage="gitlens.showTimelinePage",e.ShowTimelineView="gitlens.showTimelineView",e.ShowWorktreesView="gitlens.showWorktreesView",e.ShowWorkspacesView="gitlens.showWorkspacesView",e.StartWork="gitlens.startWork",e.StashApply="gitlens.stashApply",e.StashSave="gitlens.stashSave",e.StashSaveFiles="gitlens.stashSaveFiles",e.SwitchAIModel="gitlens.switchAIModel",e.SwitchMode="gitlens.switchMode",e.ToggleCodeLens="gitlens.toggleCodeLens",e.ToggleFileBlame="gitlens.toggleFileBlame",e.ToggleFileBlameInDiffLeft="gitlens.toggleFileBlameInDiffLeft",e.ToggleFileBlameInDiffRight="gitlens.toggleFileBlameInDiffRight",e.ToggleFileChanges="gitlens.toggleFileChanges",e.ToggleFileChangesOnly="gitlens.toggleFileChangesOnly",e.ToggleFileHeatmap="gitlens.toggleFileHeatmap",e.ToggleFileHeatmapInDiffLeft="gitlens.toggleFileHeatmapInDiffLeft",e.ToggleFileHeatmapInDiffRight="gitlens.toggleFileHeatmapInDiffRight",e.ToggleLaunchpadIndicator="gitlens.launchpad.indicator.toggle",e.ToggleGraph="gitlens.toggleGraph",e.ToggleMaximizedGraph="gitlens.toggleMaximizedGraph",e.ToggleLineBlame="gitlens.toggleLineBlame",e.ToggleReviewMode="gitlens.toggleReviewMode",e.ToggleZenMode="gitlens.toggleZenMode",e.ViewsCopy="gitlens.views.copy",e.ViewsCopyAsMarkdown="gitlens.views.copyAsMarkdown",e.ViewsCopyUrl="gitlens.views.copyUrl",e.ViewsOpenDirectoryDiff="gitlens.views.openDirectoryDiff",e.ViewsOpenDirectoryDiffWithWorking="gitlens.views.openDirectoryDiffWithWorking",e.ViewsOpenUrl="gitlens.views.openUrl",e.WalkthroughConnectIntegrations="gitlens.walkthrough.connectIntegrations",e.WalkthroughGitLensInspect="gitlens.walkthrough.gitlensInspect",e.WalkthroughOpenAcceleratePrReviews="gitlens.walkthrough.openAcceleratePrReviews",e.WalkthroughOpenCommunityVsPro="gitlens.walkthrough.openCommunityVsPro",e.WalkthroughOpenHelpCenter="gitlens.walkthrough.openHelpCenter",e.WalkthroughOpenInteractiveCodeHistory="gitlens.walkthrough.openInteractiveCodeHistory",e.WalkthroughOpenStartIntegrations="gitlens.walkthrough.openStartIntegrations",e.WalkthroughOpenStreamlineCollaboration="gitlens.walkthrough.openStreamlineCollaboration",e.WalkthroughOpenWalkthrough="gitlens.walkthrough.openWalkthrough",e.WalkthroughPlusSignUp="gitlens.walkthrough.plus.signUp",e.WalkthroughPlusUpgrade="gitlens.walkthrough.plus.upgrade",e.WalkthroughPlusReactivate="gitlens.walkthrough.plus.reactivate",e.WalkthroughShowAutolinks="gitlens.walkthrough.showAutolinks",e.WalkthroughShowDraftsView="gitlens.walkthrough.showDraftsView",e.WalkthroughShowGraph="gitlens.walkthrough.showGraph",e.WalkthroughShowLaunchpad="gitlens.walkthrough.showLaunchpad",e.WalkthroughWorktreeCreate="gitlens.walkthrough.worktree.create",e.WalkthoughOpenDevExPlatform="gitlens.walkthrough.openDevExPlatform",e.Deprecated_DiffHeadWith="gitlens.diffHeadWith",e.Deprecated_DiffWorkingWith="gitlens.diffWorkingWith",e.Deprecated_OpenBranchesInRemote="gitlens.openBranchesInRemote",e.Deprecated_OpenBranchInRemote="gitlens.openBranchInRemote",e.Deprecated_OpenCommitInRemote="gitlens.openCommitInRemote",e.Deprecated_OpenFileInRemote="gitlens.openFileInRemote",e.Deprecated_OpenInRemote="gitlens.openInRemote",e.Deprecated_OpenRepoInRemote="gitlens.openRepoInRemote",e.Deprecated_ShowFileHistoryInView="gitlens.showFileHistoryInView",e))(xn||{});const kn=36e5;const $n=[{key:"gitlens16",code:"GITLENS16",states:[c.Community,c.ProPreview,c.ProPreviewExpired,c.ProTrial,c.ProTrialExpired,c.ProTrialReactivationEligible],startsOn:new Date("2024-11-11T06:59:00.000Z").getTime(),expiresOn:new Date("2024-11-24T06:59:00.000Z").getTime(),command:{tooltip:"Save more than 55% during our GitLens 16 sale!"},locations:["account","badge","gate"],quickpick:{detail:"$(star-full) Save more than 55% during our GitLens 16 sale!"}},{key:"pro50",states:[c.Community,c.ProPreview,c.ProPreviewExpired,c.ProTrial,c.ProTrialExpired,c.ProTrialReactivationEligible],command:{tooltip:"Save 33% or more on your 1st seat of Pro."},locations:["account","badge","gate"],quickpick:{detail:"$(star-full) Save 33% or more on your 1st seat of Pro"}}];function Cn(e,t,o){if(null!=e)for(const n of $n)if((null==o||o===n.key)&&_n(n,e)){if(null==t||null==n.locations||n.locations.includes(t))return n;break}}function _n(e,t){const o=Date.now();return(null==e.states||e.states.includes(t))&&(null==e.expiresOn||e.expiresOn>o)&&(null==e.startsOn||e.startsOn<o)}const Pn=Ke`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus,
	a:focus-visible {
		outline-color: var(--focus-border);
		outline-style: solid;
		outline-width: 1px;
		border-radius: 0.2rem;
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var Sn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,Rn=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?An(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&Sn(t,o,s),s};let Dn=class extends lit_element_r{constructor(){super(...arguments),this.type="info"}get hasPromo(){return null!=this.promo}render(){if(!this.promo)return;const e=this.renderPromo(this.promo);return e?"link"===this.type?Ot`<a
				class="link"
				href="${this.promo.command?.command??"command:gitlens.plus.upgrade"}"
				title="${(e=>e??Bt)(this.promo.command?.tooltip)}"
				>${e}</a
			>`:Ot`<p class="promo">${e}</p>`:void 0}renderPromo(e){switch(e.key){case"pro50":return Ot`<span class="content${"link"===this.type?Bt:" muted"}"
					><b>Save 33% or more</b> on your 1st seat of Pro</span
				>`;case"gitlens16":return Ot`<span class="content${"link"===this.type?Bt:" muted"}"
					><b>Save more than 55%</b> during our GitLens 16 sale!</span
				>`}}};Dn.styles=[Ke`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],Rn([qt({type:Object})],Dn.prototype,"promo",2),Rn([qt({reflect:!0,type:String})],Dn.prototype,"type",2),Rn([qt({reflect:!0,type:Boolean,attribute:"has-promo"})],Dn.prototype,"hasPromo",1),Dn=Rn([Nt("gl-promo")],Dn);var Tn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,En=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?Ln(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&Tn(t,o,s),s};let On=class extends lit_element_r{firstUpdated(){"alert"===this.appearance&&queueMicrotask((()=>this.button.focus()))}render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":Bt,t=this.state?Cn(this.state,"gate"):void 0;switch(this.state){case c.VerificationRequired:return Ot`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Fn(xn.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Fn(xn.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case c.Community:case c.ProPreviewExpired:return this.featurePreview&&!function(e){const t=e.usages;if(null==t||0===t.length)return!1;const o=(new Date(t[t.length-1].expiresOn).getTime()-(new Date).getTime())/kn;return t.length>3||3===t.length&&o<=0||o>=24}(this.featurePreview)?Ot`${this.renderFeaturePreview(this.featurePreview)}`:Ot`<slot name="feature"></slot>
					<p>
						Use on privately-hosted repos requires
						<a href="${oe.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Fn(xn.PlusSignUp,this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${Fn(xn.PlusLogin,this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${re("day",a)} of
						<a href="${oe.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case c.ProTrialExpired:return Ot`<slot name="feature"></slot>
					<p>Use on privately-hosted repos requires <a href="${oe.communityVsPro}">GitLens Pro</a>.</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Fn(xn.PlusUpgrade,this.source)}"
							>Upgrade to Pro</gl-button
						><span
							>or
							<a href="${Fn(xn.PlusLogin,this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>${this.renderPromo(t)}</p>`;case c.ProTrialReactivationEligible:return Ot`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${e}"
							href="${Fn(xn.PlusReactivateProTrial,this.source)}"
							>Continue</gl-button
						><span
							>or
							<a href="${Fn(xn.PlusLogin,this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${re("day",a)}!
					</p> `}}renderFeaturePreview(e){const t="alert"===(this.appearance??"alert")?"alert":Bt,o=e.usages.length;if(0===o)return Ot`<slot name="feature"></slot>
				<gl-button appearance="${t}" href="${this.featurePreviewCommandLink}">Continue</gl-button>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
					repos, or
					<a href="${Fn(xn.PlusLogin,this.source)}" title="Sign In">sign in</a>.<br />
					${"alert"!==t?Ot`<br />`:""} For full access to all GitLens Pro features,
					<a href="${Fn(xn.PlusSignUp,this.source)}"
						>start your free ${a}-day Pro trial</a
					>
					— no credit card required.
				</p> `;const n=3-o;return Ot`
			${this.renderFeaturePreviewStep(e,o)}
			<p class="actions-row">
				<gl-button class="inline" appearance="${t}" href="${this.featurePreviewCommandLink}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${Fn(xn.PlusLogin,this.source)}" title="Sign In">sign in</a></span
				>
			</p>
			<p>
				After continuing, you will have ${re("day",n,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
				repos.<br />
				${"alert"!==t?Ot`<br />`:""} For full access to all GitLens Pro features,
				<a href="${Fn(xn.PlusSignUp,this.source)}"
					>start your free ${a}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"===e.feature)switch(t){case 1:return Ot`<p>Try Commit Search</p>
							<p>
								Search for commits in your repo by author, commit message, SHA, file, change, or type.
								Turn on the commit filter to show only commits that match your query.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-commit-search.webp"
									style="width:100%"
									alt="Graph Commit Search"
								/>
							</p> `;case 2:return Ot`
							<p>Try the Graph Minimap</p>
							<p>
								Visualize the amount of changes to a repository over time, and inspect specific points
								in the history to locate branches, stashes, tags and pull requests.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-minimap.webp"
									style="width:100%"
									alt="Graph Minimap"
								/>
							</p>
						`;default:return Ot`<slot name="feature"></slot>`}return Ot`<slot name="feature"></slot>`}renderPromo(e){return Ot`<gl-promo .promo=${e}></gl-promo>`}};function Fn(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}On.styles=[Pn,Ke`
			:host {
				--gk-action-radius: 0.3rem;
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button:not(.inline) {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button:not(.inline) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}

			.actions {
				text-align: center;
			}

			.actions-row {
				display: flex;
				gap: 0.6em;
				align-items: baseline;
				justify-content: center;
				white-space: nowrap;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],En([Jt("gl-button")],On.prototype,"button",2),En([qt({type:Object})],On.prototype,"featurePreview",2),En([qt({type:String})],On.prototype,"featurePreviewCommandLink",2),En([qt({type:String})],On.prototype,"appearance",2),En([qt()],On.prototype,"featureWithArticleIfNeeded",2),En([qt({type:Object})],On.prototype,"source",2),En([qt({attribute:!1,type:Number})],On.prototype,"state",2),En([qt({type:String})],On.prototype,"webroot",2),On=En([Nt("gl-feature-gate-plus-state")],On);var Bn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Mn=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?In(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&Bn(t,o,s),s};let zn=class extends lit_element_r{render(){if(!this.visible||null!=this.state&&(null!=(e=this.state)&&(e===c.Paid||e===c.ProPreview||e===c.ProTrial)))return void(this.hidden=!0);var e;const t=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,Ot`
			<section>
				<slot></slot>
				<gl-feature-gate-plus-state
					appearance=${t}
					.featurePreview=${this.featurePreview}
					.featurePreviewCommandLink=${this.featurePreviewCommandLink}
					.featureWithArticleIfNeeded=${this.featureWithArticleIfNeeded}
					.source=${this.source}
					.state=${this.state}
					.webroot=${this.webroot}
				>
					<slot name="feature" slot="feature"></slot>
				</gl-feature-gate-plus-state>
			</section>
		`}};zn.styles=[Pn,Ke`
			:host {
				--background: var(--vscode-sideBar-background);
				--foreground: var(--vscode-sideBar-foreground);

				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				overflow: auto;
				z-index: 100;

				box-sizing: border-box;
			}

			:host-context(body[data-placement='editor']),
			:host([appearance='alert']) {
				--background: transparent;
				--foreground: var(--vscode-editor-foreground);

				backdrop-filter: blur(3px) saturate(0.8);
				padding: 0 2rem;
			}

			::slotted(p) {
				margin: revert !important;
			}

			::slotted(p:first-child) {
				margin-top: 0 !important;
			}

			section {
				--section-foreground: var(--foreground);
				--section-background: var(--background);
				--section-border-color: transparent;

				display: flex;
				flex-direction: column;
				padding: 0 2rem 1.3rem 2rem;
				background: var(--section-background);
				color: var(--section-foreground);
				border: 1px solid var(--section-border-color);

				height: min-content;
			}

			:host-context(body[data-placement='editor']) section,
			:host([appearance='alert']) section {
				--section-foreground: var(--color-alert-foreground);
				--section-background: var(--color-alert-infoBackground);
				--section-border-color: var(--color-alert-infoBorder);

				--link-decoration-default: underline;
				--link-foreground: var(--vscode-foreground);
				/* --link-foreground-active: var(--vscode-foreground); */

				/* --link-foreground: var(--vscode-textLink-foreground); */
				--link-foreground-active: var(--vscode-textLink-activeForeground);

				border-radius: 0.3rem;
				max-width: 600px;
				max-height: min-content;
				margin: 0.2rem auto;
				padding: 1.3rem;
			}

			:host-context(body[data-placement='editor']) section ::slotted(gl-button),
			:host([appearance='alert']) section ::slotted(gl-button) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
		`],Mn([qt({reflect:!0})],zn.prototype,"appearance",2),Mn([qt({type:Object})],zn.prototype,"featurePreview",2),Mn([qt({type:String})],zn.prototype,"featurePreviewCommandLink",2),Mn([qt()],zn.prototype,"featureWithArticleIfNeeded",2),Mn([qt({type:Object})],zn.prototype,"source",2),Mn([qt({attribute:!1,type:Number})],zn.prototype,"state",2),Mn([qt({type:Boolean})],zn.prototype,"visible",2),Mn([qt({type:String})],zn.prototype,"webroot",2),zn=Mn([Nt("gl-feature-gate")],zn);rn.define("sl-popup");const Wn=new WeakMap;function Un(e,t){return function(o,n,r){let s=Wn.get(o.constructor);null==s&&Wn.set(o.constructor,s=[]),s.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}class GlElement extends lit_element_r{emit(e,t,o){const n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(n),n}update(e){const t=Wn.get(this.constructor);if(null!=t)for(const{keys:o,method:n,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;const t=o.filter((t=>e.has(t)));t.length&&n.call(this,t)}super.update(e)}}var Hn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Nn=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?Vn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&Hn(t,o,s),s};let Gn=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{if(this.open&&this.hasTrigger("focus")){if(e.composedPath().includes(this))return;this.hide()}},this.handleTriggerClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{e.composedPath().includes(this)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const e=ge(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout((()=>this.show()),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);const t=e.composedPath();if(t[t.length-2]===this)return;if(this.hasPopupFocus())return;const o=ge(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout((()=>this.hide()),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")}else document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide")}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,me(this,"gl-popover-after-show")}async hide(){if(this.open)return this.open=!1,me(this,"gl-popover-after-hide")}render(){return Ot`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}};Gn.shadowRootOptions={...lit_element_r.shadowRootOptions,delegatesFocus:!0},Gn.styles=Ke`
		:host {
			--hide-delay: 0ms;
			--show-delay: 500ms;

			display: contents;
		}

		.popover {
			--arrow-size: var(--sl-tooltip-arrow-size);
			--arrow-color: var(--sl-tooltip-background-color);
		}

		.popover::part(popup) {
			z-index: var(--sl-z-index-tooltip);
		}

		.popover::part(arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		.popover[placement^='top']::part(popup) {
			transform-origin: bottom;
		}

		.popover[placement^='bottom']::part(popup) {
			transform-origin: top;
		}

		.popover[placement^='left']::part(popup) {
			transform-origin: right;
		}

		.popover[placement^='right']::part(popup) {
			transform-origin: left;
		}

		.popover[data-current-placement^='top']::part(arrow) {
			border-top-width: 0;
			border-left-width: 0;
			clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
		}

		.popover[data-current-placement^='bottom']::part(arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
			clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
		}

		.popover[data-current-placement^='left']::part(arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
			clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
		}

		.popover[data-current-placement^='right']::part(arrow) {
			border-top-width: 0;
			border-right-width: 0;
			clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
		}

		.popover__body {
			display: block;
			width: fit-content;
			border: 1px solid var(--gl-tooltip-border-color);
			border-radius: var(--sl-tooltip-border-radius);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
			background-color: var(--sl-tooltip-background-color);
			font-family: var(--sl-tooltip-font-family);
			font-size: var(--sl-tooltip-font-size);
			font-weight: var(--sl-tooltip-font-weight);
			line-height: var(--sl-tooltip-line-height);
			text-align: start;
			white-space: normal;
			color: var(--sl-tooltip-color);
			padding: var(--sl-tooltip-padding);
			user-select: none;
			-webkit-user-select: none;
			max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
			/* max-height: var(--auto-size-available-height);
			overflow: auto; */
			pointer-events: all;
		}

		.popover[data-current-placement^='top'] .popover__body,
		.popover[data-current-placement^='bottom'] .popover__body {
			width: max-content;
		}

		/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
	`,Nn([Jt("#popover")],Gn.prototype,"body",2),Nn([Jt("sl-popup")],Gn.prototype,"popup",2),Nn([qt({reflect:!0})],Gn.prototype,"placement",2),Nn([qt({type:Object})],Gn.prototype,"anchor",2),Nn([qt({reflect:!0,type:Boolean})],Gn.prototype,"disabled",2),Nn([qt({type:Number})],Gn.prototype,"distance",2),Nn([qt({reflect:!0,type:Boolean})],Gn.prototype,"open",2),Nn([qt({reflect:!0,type:Boolean})],Gn.prototype,"arrow",2),Nn([qt({type:Number})],Gn.prototype,"skidding",2),Nn([qt()],Gn.prototype,"trigger",2),Nn([qt({type:Boolean})],Gn.prototype,"hoist",2),Nn([Un("open",{afterFirstUpdate:!0})],Gn.prototype,"handleOpenChange",1),Nn([Un(["distance","hoist","placement","skidding"])],Gn.prototype,"handleOptionsChange",1),Nn([Un("disabled")],Gn.prototype,"handleDisabledChange",1),Gn=Nn([Nt("gl-popover")],Gn);var jn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,Qn=(e,t,o,n)=>{for(var r,s=n>1?void 0:n?qn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&jn(t,o,s),s};let Jn=class extends lit_element_r{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:C(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return Ot`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){const e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===c.VerificationRequired)return Ot`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;if(P(this.subscription)||this.cloud&&null!=this.subscription.account)return Ot`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.state)&&(t===c.ProPreview||t===c.ProTrial))return Ot`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}var t;return e}renderPopoverHeader(){const e=Ot`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===c.Paid?Ot`<div class="popup-header">${e}</div>`:this.cloud?this.preview?Ot`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:Ot`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?Ot`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:Ot`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){if(null==this.subscription)return Bt;let e;switch(this.state){case c.Paid:e=Ot`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${Yn(xn.ShowAccountView,void 0)}"
							>${$(this.subscription?.plan.actual.id??l.Pro)}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case c.VerificationRequired:e=Ot`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Yn(xn.PlusResendVerification,this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${Yn(xn.PlusValidate,this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case c.ProTrial:{const t=this.daysRemaining;e=Ot`<p>
						You have
						<strong>${t<1?"<1 day":re("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case c.ProTrialExpired:e=Ot`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(Ot`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case c.ProTrialReactivationEligible:e=Ot`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${re("day",a)}!
					</p>
					<div class="actions center">
						<gl-button
							appearance="primary"
							density="tight"
							href="${Yn(xn.PlusReactivateProTrial,this.source)}"
							tooltip="Reactivate your Pro trial for another ${re("day",a)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:if(!this.cloud&&this.state===c.ProPreview){const t=this.daysRemaining;e=Ot`<p>
							You have
							<strong>${t<1?"<1 day":re("day",t,{infix:" more "})} left</strong>
							to preview
							<gl-tooltip hoist content="Pro features that do not require an account"
								><span class="hint">local</span></gl-tooltip
							>
							Pro features.
						</p>
						${this.renderStartTrialActions()}`;break}e=Ot`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return Ot`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return Ot`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button
				appearance="primary"
				density="tight"
				href="${Yn(xn.PlusSignUp,this.source)}"
				>Start ${a}-day Pro Trial</gl-button
			>
			&nbsp;or <a href="${Yn(xn.PlusLogin,this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){const t=Cn(this.state,"badge");return Ot`<div class="actions">
			${e??Bt}
			<gl-button
				appearance="primary"
				density="tight"
				href="${Yn(xn.PlusUpgrade,this.source)}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo(t)}
		</div>`}renderPromo(e){return Ot`<gl-promo .promo=${e}></gl-promo>`}};function Yn(e,t){return`command:${e}${t?`?${encodeURIComponent(JSON.stringify(t))}`:""}`}Jn.styles=[ao,lo,Ke`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus {
				${Ye(ro)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],Qn([qt({type:Boolean})],Jn.prototype,"cloud",2),Qn([qt({reflect:!0})],Jn.prototype,"placement",2),Qn([qt({type:Boolean})],Jn.prototype,"preview",2),Qn([qt({type:Object})],Jn.prototype,"source",2),Qn([qt({attribute:!1})],Jn.prototype,"subscription",2),Jn=Qn([Nt("gl-feature-badge")],Jn);class TimelineApp extends App{constructor(){super("TimelineApp")}onInitialize(){this.updateState()}onBind(){const e=super.onBind?.()??[];return e.push(ue.on(document,"keydown",(e=>this.onKeyDown(e))),ue.on(document.getElementById("periods"),"change",((e,t)=>this.onPeriodChanged(e,t))),{dispose:()=>this._chart?.dispose()}),e}onMessageReceived(e){if(!0===B.is(e))this.state=e.params.state,this.setState(this.state),this.updateState();else super.onMessageReceived?.(e)}onChartDataPointClicked(e){this.sendCommand(O,e)}onKeyDown(e){"Escape"!==e.key&&"Esc"!==e.key||this._chart?.reset()}onPeriodChanged(e,t){const o=t.options[t.selectedIndex].value;!function(e){if("all"===e)return;const[t,o]=e.split("|");if(isNaN(Number(t))||"D"!==o&&"M"!==o&&"Y"!==o)throw new Error(`Invalid period: ${e}`)}(o),this.log(`onPeriodChanged(): name=${t.name}, value=${o}`),this.updateLoading(!0),this.sendCommand(F,{period:o})}updateState(){const e=document.getElementById("subscription-gate");null!=e&&(e.source={source:"timeline",detail:"gate"},e.state=this.state.access.subscription.current.state,e.visible=!0!==this.state.access.allowed);const t=null==this.state.access.subscription?.current||!P(this.state.access.subscription?.current),o=document.querySelectorAll("gl-feature-badge");for(const e of o)e.source={source:"timeline",detail:"badge"},e.subscription=this.state.access.subscription.current,e.hidden=!t;null==this._chart&&(this._chart=new TimelineChart("#chart",this.placement),this._chart.onDidClickDataPoint(this.onChartDataPointClicked,this));let{title:n,sha:r}=this.state,s="";if(null!=n){const e=n.lastIndexOf("/");if(e>=0){const t=n.substring(e+1);s=n.substring(0,e),n=t}}else"editor"!==this.placement||null!=this.state.dataset||this.state.access.allowed||(n="index.ts",s="src/app");function a(e,t,o){const n=document.querySelector(`[data-bind="${e}"]`);null!=n&&(o?.html?n.innerHTML=t??"":n.textContent=t??"")}a("title",n),a("description",s),a("sha",r?`<code-icon icon="git-commit" size="16"></code-icon><span class="sha">${r}</span>`:void 0,{html:!0});const l=document.getElementById("periods");if(null!=l){const e=this.state?.period,t=l.getElementsByTagName("option");for(const o of t)e===o.getAttribute("value")?o.setAttribute("selected",""):o.removeAttribute("selected")}this._chart.updateChart(this.state).finally((()=>this.updateLoading(!1)))}updateLoading(e){document.getElementById("spinner")?.setAttribute("active",e?"true":"false")}}new TimelineApp;var Kn=s.h;export{Kn as TimelineApp};