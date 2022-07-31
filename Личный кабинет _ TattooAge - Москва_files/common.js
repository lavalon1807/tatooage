/*! jQuery UI - v1.12.1 - 2017-06-27
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}t.ui=t.ui||{},t.ui.version="1.12.1";var i=0,s=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),a=0,r=o.length;r>a;a++)for(i in o[a])n=o[a][i],o[a].hasOwnProperty(i)&&void 0!==n&&(e[i]=t.isPlainObject(n)?t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=s.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,s){var n,o,a,r,l,h=i.nodeName.toLowerCase();return"area"===h?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(h)?(r=!i.disabled,r&&(l=t(i).closest("fieldset")[0],l&&(r=!l.disabled))):r="a"===h?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var n=!1;t(document).on("mouseup",function(){n=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!n){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,o="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!o&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),n=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,n=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}
},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,l,h,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)l=s.snapElements[d].left-s.margins.left,h=l+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,l-g>_||m>h+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(l-_),r=g>=Math.abs(h-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(l-m),r=g>=Math.abs(h-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable});






var Common = {
	init: function() {
        Common.slogan();
        Common.menu();
        Common.reviews();
	},
    slogan: function() {
        

    },
    menu: function() {
        $('.mob_menu').on('click',function(event){
            event.preventDefault();
            $('nav').toggleClass('open')
        })
    },
    
    
    reviews: function() {
    	var $reviews = $('.reviews-section');
    	var $form = $reviews.find('form');
    	var $formContainer = $reviews.find('.review-form');
    	var $submit = $form.find('[type=submit]');
    	var $showReviews = $reviews.find('.add-review');
    	var $reviewsContainer = $reviews.find('.reviews');
    	
    	
    	$showReviews.click(function() {
    		if ($(this).hasClass('requires-auth')) { 
	    		$('#divRegistration').css({'display':'flex'})        
	        	$('#divRegistration [name=email]').focus();
	        	$('#divRegistration').attr('data-auth-action', $(this).attr('data-auth-action') || '');
	        	return false;
        	}
    		$formContainer.show();
    		$form.find('textarea').focus();
    		
    		return false;    	
    	});
    	
    	$reviews.find('.buttonCancel').click(function() {
    		$formContainer.hide();
    		
    		return false;
    	});	

    	 $form.ajaxForm({
    	 	dataType: 'json',
    	 	success: function(data) {
    	 	    $formContainer.hide();
    	 	    $reviews.find('.empty').remove();
    	 	    $.get('/system/php/scripts/reviews.php', {id: data.id}, function(data) {
    		    	$reviewsContainer.append(data);    		    
    	 	    });
    	 	},
    	 	error: function(e) {
    	 		console.log(e.responseJSON);
    	 	}
    	 });

    }
};

$.SetAvailableFilters = function() {};


var helpers = {
    TwoD: function (num) {
        return num > 9 ? num : ('0' + num);
    },

    strings: {
        depilate: function (str) {
            return str.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n').replace(/^ *([\s\S]*?)[ \r\n]*$/, '$1');
        },
        ucfirst: function (str) {
            return str.length ? str.substr(0, 1).toUpperCase() + str.substr(1) : '';
        }
    },

    numbers: {
        padded: function (num, size) {
            return (new Array(num ? size - Math.floor(Math.log(num) / Math.log(10)) : size).join('0')) + num;
        },
        separated: function (sum) {
            if (sum > 1000000) {
                return Math.floor(sum / 1000000) + ' ' + helpers.numbers.padded(Math.floor(sum / 1000) % 1000, 3) + ' ' + helpers.numbers.padded(sum % 1000, 3);

            } else if (sum > 1000) {
                return Math.floor(sum / 1000) + ' ' + helpers.numbers.padded(sum % 1000, 3);

            } else {
                return sum;
            }
        },
        separatedSum: function(sum) {
        	var roubles = Math.floor(sum);
        	var cents = Math.floor((sum * 100) % 100);
        	
        	return helpers.numbers.separated(roubles) + (cents > 0 ? '.' + helpers.TwoD(cents) : '');
        },
        verbal: function (sum, one, four, many, skipNumber, separated) {
            var perSum = sum % 100;
            var prefix = skipNumber ? '' : ((separated ? helpers.numbers.separated(sum) : sum) + ' ');

            if (perSum <= 10 || perSum >= 20) {
                switch (perSum % 10) {
                    case 1:
                        return prefix + one;
                        break;

                    case 2:
                    case 3:
                    case 4:
                        return prefix + four;
                }
            }

            return prefix + many;
        },
        filesize: function (num) {
            if (num > 1000000) {
                return Math.round(num / 100000) / 10 + ' Мб';

            } else if (num > 10000) {
                return Math.round(num / 1000) + ' Кб';

            } else if (num > 1000) {
                return Math.round(num / 100) / 10 + ' Кб';

            } else {
                return helpers.numbers.verbal(num, 'байт', 'байта', 'байт');
            }
        }
    },

    time: {
        monthNames: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
        monthNamesBy: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
        weekdays: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        weekday: function (date) {
            var cd = helpers.time.fromDate(date);
            return helpers.time.weekdays[cd.getDay()];
        },
        toDate: function (cd) {
            return (cd.getYear() > 1900 ? cd.getYear() : cd.getYear() + 1900) + '-' + helpers.TwoD(cd.getMonth() + 1) + '-' + helpers.TwoD(cd.getDate());
        },
        toDateHuman: function (cd, sep, withTime) { // лол
            if (typeof cd == 'string') {
                cd = helpers.time.fromDate(cd);
            }
            if (typeof sep == 'undefined') sep = '.';

            return helpers.TwoD(cd.getDate()) + sep + helpers.TwoD(cd.getMonth() + 1) + sep + (cd.getYear() > 1900 ? cd.getYear() : cd.getYear() + 1900)
                + (withTime ? ', ' + helpers.TwoD(cd.getHours()) + ':' + helpers.TwoD(cd.getMinutes()) : '');
        },
        toDateTime: function (cd, separator) {
            return (cd.getYear() > 1900 ? cd.getYear() : cd.getYear() + 1900) + '-' + helpers.TwoD(cd.getMonth() + 1) + '-' + helpers.TwoD(cd.getDate()) + ' ' + helpers.TwoD(cd.getHours()) + ':' + helpers.TwoD(cd.getMinutes()) + ':' + helpers.TwoD(cd.getSeconds());
        },
        toVerbal: function (date) {
            if (date instanceof Date) {
                date = helpers.time.toDate(date);
            }

            var dateParts = date.split('-');

            return dateParts[2] + ' ' + helpers.time.monthNamesBy[dateParts[1] - 1] + ' ' + dateParts[0];
        },
        currentYear: function () {
            if (typeof helpers.time._currentYear != 'undefined') {
                return helpers.time._currentYear;
            }

            helpers.time._currentYear = (new Date()).getYear();
            if (helpers.time._currentYear < 1900) {
                helpers.time._currentYear += 1900;
            }
        },
        toVerbalTime: function (date, separator, noSameYear) {
            if (date instanceof Date) {
                date = helpers.time.toDateTime(date);
            }

            var dateParts = date.split(/[-: ]/)
                , year = ' ' + dateParts[0];

            if (typeof separator == 'undefined') separator = ', ';
            if (noSameYear && helpers.time.currentYear() == dateParts[0]) {
                year = '';
            }

            return dateParts[2] + ' ' + helpers.time.monthNamesBy[dateParts[1] - 1] + year + separator + dateParts[3] + ':' + dateParts[4];
        },

        fromDateParts: function(year, month, day, hour, minute, second) {
            var cd = new Date();
            cd.setYear(year);
            cd.setMonth(month - 1);
            cd.setDate(day);

            cd.setHours(hour);
            cd.setMinutes(minute);
            cd.setSeconds(typeof second == 'undefined' ? 0 : second);

            return cd;

        },
        fromDate: function (date) {
            var cd = new Date();
            console.log(date);
            var mainParts = date.split(' ');
            var dateParts = mainParts[0].split('-');
            cd.setYear(dateParts[0] - 0);
            cd.setMonth(dateParts[1] - 1);
            cd.setDate(dateParts[2] - 0);

            if (mainParts.length) {
                var timeParts = mainParts[1].split(':');
                cd.setHours(timeParts[0] - 0);
                cd.setMinutes(timeParts[1] - 1);
                cd.setSeconds(timeParts[2] - 0);
            }

            return cd;
        },
        nextDate: function (date) {
            var cd = helpers.time.fromDate(date);
            cd.setTime(cd.getTime() + (86400 + 3600) * 1000);

            return helpers.time.toDate(cd);
        },
        range: function (from, to) {
            var fromDate = new Date(from);
            var toDate = new Date(to);
            var result = 0;

            while (fromDate.getTime() <= toDate.getTime()) {
                fromDate.setTime(fromDate.getTime() + 86400 * 1000);
                ++result;
            }

            return result;
        },
        verbalSpan: function (from, to) {
            var fromSplit = from.split('-');
            var toSplit = to.split('-');

            if (from == to) {
                return fromSplit[2] + ' ' + helpers.time.monthNamesBy[fromSplit[1] - 1];
            }

            if (fromSplit[1] == toSplit[1]) {
                return 'с ' + fromSplit[2] + ' по ' + toSplit[2] + ' ' + helpers.time.monthNamesBy[fromSplit[1] - 1];
            }

            if (fromSplit[0] == toSplit[0]) {
                return 'с ' + fromSplit[2] + ' ' + helpers.time.monthNamesBy[fromSplit[1] - 1] + ' по ' + toSplit[2] + ' ' + helpers.time.monthNamesBy[toSplit[1] - 1];
            }

            return 'с ' + fromSplit[2] + ' ' + helpers.time.monthNamesBy[fromSplit[1] - 1] + ' ' + fromSplit[0] + ' по ' + toSplit[2] + ' ' + helpers.time.monthNamesBy[toSplit[1] - 1] + ' ' + toSplit[0];
        },
        secondsToTime: function (seconds) {
            seconds = Math.round(seconds);

            if (seconds > 3600) {
                return helpers.TwoD(Math.floor(seconds / 3600)) + ':' + helpers.TwoD(Math.floor((seconds % 3600) / 60)) + ':' + helpers.TwoD(seconds % 60);
            } else {
                return helpers.TwoD(Math.floor((seconds % 3600) / 60)) + ':' + helpers.TwoD(seconds % 60);
            }
        }
    }
};


$(function() {
	Common.init();
full_weight = 0;
$(".in_cat a").each(function(){
    full_weight+=$(this).innerWidth();
});
$(".in_cat > div").width(full_weight+40);

$(function()
{
	$('.in_cat').each(
		function()
		{
			$(this).jScrollPane(
				{
					showArrows: $(this).is('.arrow')
				}
			);
			var api = $(this).data('jsp');
			var throttleTimeout;
			$(window).bind(
				'resize',
				function()
				{
					if (!throttleTimeout) {
						throttleTimeout = setTimeout(
							function()
							{
								api.reinitialise();
								throttleTimeout = null;
							},
							50
						);
					}
				}
			);
		}
	)

});
	function top_s(){
		$('.header_block.header_block_page > div').each(
			
			function()
			{
				$(this).jScrollPane(
					{
						showArrows: $(this).is('.arrow')
					}
				);
				var api = $(this).data('jsp');
				var throttleTimeout;
				$(window).bind(
					'resize',
					function()
					{
						if (!throttleTimeout) {
							throttleTimeout = setTimeout(
								function()
								{
									api.reinitialise();
									throttleTimeout = null;
								},
								50
							);
						}
					}
				);
			}
		)
	}
	


	if($(window).width() <= 650) {
		top_s();
	}
	
$( window ).resize(function() {
  top_s();
  if($('.in_cat .current').length) {
	if($('.in_cat .current').index()>0) {
		$('.in_cat .jspPane').css('left', - ($('.in_cat a.current').position().left) + ($(window).width()/2) - ($('.in_cat a.current').innerWidth()/2));
		console.log('3')
	}
}
});	

function top_dr(){
$('.in_cat .jspPane').draggable({
    axis: 'x',
    cursor: "move",
    drag: function( event, ui) {

        var posu = ui.position.left;
        console.log($(this).width())
		console.log()
        if((-posu) >= ($('.in_cat .jspPane > div').width() - $(window).width())) {
			$('.in_cat .jspPane').css('left', -($('.in_cat .jspPane > div').width() - $(window).width()));

			return false;
        }
		if ( posu >= 0 ) {
            $('.in_cat .jspPane').css('left', 0);
            return false;
        }
    }
});
if($('.in_cat .current').length) {
	if($('.in_cat .current').index()>0) {
		$('.in_cat .jspPane').css('left', - ($('.in_cat a.current').position().left) + ($(window).width()/2) - ($('.in_cat a.current').innerWidth()/2));
		console.log('3')
	}
}
$('.header_block .jspPane').draggable({
    axis: 'x',
    cursor: "move",
    drag: function( event, ui) {

        var pos = ui.position.left;
        console.log($(this).width())

        if((-pos) >= ($('.header_block .jspPane > div').width() - $(window).width())) {
			$('.header_block .jspPane').css('left', -($('.header_block .jspPane > div').width() - $(window).width()));
			return false;
        }
		if ( pos >= 0 ) {
            $('.header_block .jspPane').css('left', 0);
            return false;
            console.log('2')
        }
    }
});

if($('.header_block .jspPane').length) {
	if($('.header_block a.current').parent().index()) {
		if($('.header_block a.current').length)
		{
		console.log('1')
		$('.header_block .jspPane').css('left', - ($('.header_block a.current').parent().position().left) + ($(window).width()/2) - (($('.header_block a.current').parent().width()+35)/2));	
		}
	}	
}

}
top_dr()


setTimeout(top_dr, 400)


$(window).resize(function(){
	if($(window).width() <= 800) {
		top_dr()
	}
});
	function getScrollTop() {
			   var scrOfY = 0;
			   if( typeof( window.pageYOffset ) == "number" ) {
					   scrOfY = window.pageYOffset;
			   } else if( document.body
			   && ( document.body.scrollLeft
			   || document.body.scrollTop ) ) {
					   scrOfY = document.body.scrollTop;
			   } else if( document.documentElement
			   && ( document.documentElement.scrollLeft
				|| document.documentElement.scrollTop ) ) {
					   scrOfY = document.documentElement.scrollTop;
			   }
			   return scrOfY;
	}
	jQuery(window).scroll(function() {
		fixPaneRefresh();
	});
	
	function fixPaneRefresh(){
		if (jQuery(".header_fix").length) {
			var top  = getScrollTop();
			if (top < 100) jQuery(".header_fix").removeClass('scroll_b'); 
			else jQuery(".header_fix").addClass('scroll_b');
		}
		if($(window).width()< 993 && $('.catalog_sort_filter').length){
			
			var top  = getScrollTop();
			if(top > 100) {
				$('.catalog_sort_filter').css({'position':'fixed','top':67,'right':'1px','left':'3px','z-index':'9996'}).prev('.text').css({'margin-bottom':'75px'})
			}else {
				$('.catalog_sort_filter, h1 + .text').attr('style',' ')
			}
		}
		
		
		if($(window).width()> 903){
			
			var top  = getScrollTop();
			if(top > 100) {
				$('.in_cat').css({'margin-top':'41px'})
			}else {
				$('.in_cat').css({'margin-top':'89px'})
			}
		}
		
		if($(window).width()< 903){
			
			var top  = getScrollTop();
			if(top > 100) {
				$('._header_logo-home img:first-child').css({'display':'none'})
			
			}
		
		} else {
			if (top < 100) jQuery(".header_fix").removeClass('scroll_b'); 
			else jQuery(".header_fix").addClass('scroll_b');
		}
		 
		
		if($('.go_top_btn').length) {
			var top  = getScrollTop();
			if($(window).height()/2 < top) {
				$('.go_top_btn').css({'bottom': '45px'});
				if($(window).width() < 1024) {
					$('.go_top_btn').css({'bottom': '90px'});
				}
			}else{
				$('.go_top_btn').attr('style',' ')
			}
		}
		
	}
	$('.go_top_btn').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
  			return false;
    });

    
    $('.mobile_btn ').on('click',function(){
        $(this).toggleClass('active');
        $('body, html').toggleClass('hidden');
    });
    
    
    $('.catalog_sort_filter').on('click',function(){
        $('section > .sidebar').addClass('active');
        $('body').addClass('hidden');
        if($(window).width() < 800 ) {
        	//$('.sidebar').css({'top': $('.in_cat').position().top + 34})
        }
    });
    
    $('.modal_close').on('click',function(e){
        e.preventDefault()
        $('section > .sidebar').removeClass('active');
        $('body').removeClass('hidden');
    });
    
    
    $('.cabinet_item').on('click',function(){
        $(this).toggleClass('open');
    });
    
    $('.modal_bg,.modal .modal_close').on('click',function(e){
        e.preventDefault();
        $('.modal').fadeOut();
        $('body').removeClass('hidden');
    });
    
    $(document).on('click','.requires-auth',function(e){
    	e.preventDefault();
        $('#divRegistration').css({'display':'flex'})        
        $('#divRegistration [name=email]').focus();
        
        $('#divRegistration').attr('data-auth-action', $(this).attr('data-auth-action') || '');
    });
    
    $(document).on('click','.notify-presence.press-me',function(e){
    	//$('#divNotifyMe').css({'display':'flex'});
        //$('#divNotifyMe [name=notify-email]').focus();
    });
    
    $('.send-request-form').on('click',function(e){
        e.preventDefault();
        $('#divFormRequest').css({'display':'flex'})
        $('#divFormRequest form').show();
        $('#divFormRequest .success').hide();
        
        $('#divFormRequest [name=fio]').focus();
    });
    
    $('.send-request-schedule').on('click',function(e){
        e.preventDefault();
        $('#divFormRequestSchedule').css({'display':'flex'})
        $('#divFormRequestSchedule form').show();
        $('#divFormRequestSchedule .success').hide();
        
        $('#divFormRequestSchedule [name=fio]').focus();
    });
    
    $('.send-request-master').on('click',function(e){
        e.preventDefault();
        $('#divFormRequestMaster').css({'display':'flex'})
        	.find('form').show().end()
        	.find('.success').hide().end()        
        	.find('[name=master]').val($(this).attr('data-master-id'))
        	.find('[name=fio]').focus();
        	
        return false;
    });
    
   $('.send-request-price').on('click',function(e){
        e.preventDefault();
        $('#divFormRequestPrice').css({'display':'flex'})
        	.find('form').show().end()
        	.find('.success').hide().end()        
        	.find('[name=master]').val($(this).attr('data-master-id'))
        	.find('[name=fio]').focus();
        	
        return false;
    });
    
    
    $('.send-request-model').on('click',function(e){
    	console.log('zoo');
        e.preventDefault();
        $('#divFormRequestModel').css({'display':'flex'})
        	.find('form').show().end()
        	.find('.success').hide().end()        
        	.find('[name=master]').val($(this).attr('data-master-id'))
        	.find('[name=fio]').focus();
        	
        return false;
    });
    

    

  
    
    
     
        
        
        var owl = $('.slider_home');
        
        owl.owlCarousel({
            loop: true,
            nav: true,
            center: true,
            autoplay: true,
            smartSpeed: 2000,
            autoplayTimeout: 9000,
            autoplayHoverPause: true,
            items: 1,
            
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }
        });
        
        owl.on('translate.owl.carousel', function (event) {
            var index = event.item.index;
            $('.owl-item').eq(index).addClass('in');
            $('.owl-item').eq(index - 1).addClass('out');
            $('.owl-next, .owl-prev').prop('disabled', true);
            owl.removeClass('reverse');
        });

        owl.on('translated.owl.carousel', function (event) {
            $('.carousel .in').removeClass('in');
            $('.carousel .out').removeClass('out');
            $('.owl-next, .owl-prev').prop('disabled', false);
        });

        $('.owl-prev').on('click', function () {
            owl.addClass('reverse');
        });

        $('.owl-next').on('click', function () {
            owl.removeClass('reverse');
        }); 
        
        
        
  
    
    
    
    
    
    
    
    
        
    if($('.brand').length) {
        $('.brand').owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                500:{
                    items:3
                },
                1000:{
                    items:7
                }
            }
        })
    }
    function item_cat() {
    	if($('.category_item').length) {
	        
	    }
    
    };
    function new_h() {
		if( $('.slider_lit').length){
			$('.slider_lit').each(function(){
				if($(this).height() > $(this).next('.slider_big').height()) {
				
					//$(this).height($(this).next('.slider_big').height());
	
				}
			})
		}
    }
    
    if($('.slider_big').length) {
        $('.slider_big').owlCarousel({
            items:1,
		    margin:10,
            nav:true,
            loop:false,
            onDragged: function(event){
                var item = event.item.index;
                $('.slider_lit').each(function(){
                    $(this).find('div').removeClass('active');
                    $(this).find('div:eq('+item+')').addClass('active');
                })
            },
            onInitialized: function(event){ 
            	setTimeout(new_h(), 400);
            }
        });
        
        $('.owl-prev, .owl-next').click(function(){
        	var indexElem = 0;
            $('.slider_big .owl-item').each(function(index, value){
                if($(this).hasClass('active')) {
                	indexElem = index;
                }
            });
            $('.slider_lit div').removeClass('active');
            $('.slider_lit').find('div:eq('+ indexElem +')').addClass('active');
        })
        $('.slider_lit > div').on('click',function() {
            $(this).parents('.slider').find('.slider_lit > div').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.slider').find('.slider_big').trigger('to.owl.carousel', [$(this).index(),300]);
        })
        $('.slider_big:not(".without_popup") img').on('click',function() {
        	if(!$(this).parents('.slider_big').hasClass('slider_cont')) {
            $('.modal_gal').css({'display':'flex'});
            $('body').addClass('hidden');
            }else{
            	$(this).parents('section').find('.modal_gal').css({'display':'flex'});
            	$(this).parents('section').find('.modal_gal').find('img').attr('src',$(this).attr('src'))
            	$('body').addClass('hidden');
            	$(this).parents('section').find('.modal_gal').find('.modal_h1 span').html($(this).attr('alt'))
            }
        })
    }
    
    $('.sl_left').on('click',function(){
    console.log('1')
        	var section = $(this).parents('section');
        	if(section.find('.slider_lit .active').prev('div').length) {
	        	section.find('.modal_h1 span').html(section.find('.slider_lit .active').prev('div').find('img').attr('alt'))
	        	section.find('.slider_lit .active').removeClass('active').prev('div').addClass('active');
	        	section.find('.slider_big').trigger('prev.owl.carousel');
	        	section.find('.modal_content .slider img').attr('src',section.find('.owl-item.active img').attr('src'))
        	}
        })
        $('.sl_right').on('click',function(){
        	var section = $(this).parents('section');
        	if(section.find('.slider_lit .active').next('div').length) {
	        	section.find('.modal_h1 span').html(section.find('.slider_lit .active').next('div').find('img').attr('alt'))
	        	section.find('.slider_lit .active').removeClass('active').next('div').addClass('active');
	        	section.find('.slider_big').trigger('next.owl.carousel');
	        	
	        	section.find('.modal_content .slider img').attr('src',section.find('.owl-item.active img').attr('src'))
	        	console.log('2')
        	}
        })
        
        
    setTimeout(function() {
        $('input[type=checkbox], input[type=radio], select').styler();
    }, 100); 
    
    
    
 	$('.catalog_block').each(function() {
 		var $catalog = $(this);
 		
 		$catalog.on({
 			change: function() {
 				var $this = $(this);
 				var $option = $(this.options[this.selectedIndex]);
 				var $item = $(this).closest('.catalog_item');
 				
 				
 				$item.find('.price').html($option.attr('data-price') + ' руб.' + ' <i class="icon icon-cart"></i>');
 				
 				$item.find('.add-to-basket').toggleClass('inactive', $option.attr('data-present') != '1');
 				
 				
			
				if ($option.attr('quantity') >0) {
					$item.find('.add-to-basket').addClass('hide');
					$item.find('.nitem_to_basket').removeClass('hide');
					$item.find('.update-quantity-basket').removeClass('hide');
					$item.find('.update_quantity').removeClass('hide');
					
					$item.find('.update-quantity-basket').val($option.attr('quantity'));
						
				} else {
					$item.find('.add-to-basket').removeClass('hide');
					$item.find('.nitem_to_basket').addClass('hide');
					$item.find('.update-quantity-basket').addClass('hide');
					$item.find('.update_quantity').addClass('hide');
					$item.find('.update-quantity-basket').val(0);
	
				}	
 				
 				console.log('change');
 			} 		
 		}, 'select');
 	});
 	
 	var basketData = {items: []};
 	if (typeof basketDataLoad !== 'undefined') {
 		basketData = basketDataLoad;
 	}
 	
 	basketData.items.map(function(item) {
 		$('.sale-item[data-item-id="' + item.id + '"] .add-to-basket').addClass('selected');
 	});

	var $modalAdded = $('.modal_add:eq(0)'); 	
 	
 	$(document).on({
		click: function() {
			console.log(123);
			var $this = $(this);
			var $item = $this.closest('.sale-item');
			
			var is_catalog=$item.hasClass('catalog_item');		
			var itemId = $item.attr('data-item-id');
			var color = 0;
			
			if ($this.hasClass('inactive')) return false;
			
			var $select = $item.find('select.item-subtype');
			if ($select.length) {
				itemId = $select.val();
			}
			
			$.post('/system/api/basket/add-item', {id: itemId, color: color}, function(data) {
				if (data.result == 'success') {
				
					
					$('.nav_a.icon-cart').html('<span>' + data.basket.count + '</span>');
					//$this.addClass('selected');
					$modalAdded.show();
					setTimeout(function() {
						$modalAdded.fadeOut(1000);					
					}, 500);
					
					$select.find('option:selected').attr('quantity', 1)
					
					$item.find('.update-quantity-basket').val(1);
					$item.find('.add-to-basket').addClass('hide');
					
					$item.find('.nitem_to_basket').removeClass('hide');
					
					$item.find('.update-quantity-basket').removeClass('hide');
					
					$item.find('.update_quantity').removeClass('hide');
						
					
				} else {
					alert(data.reason);	
				}
				
			}, 'json');
			
			return false;
		}
	}, '.add-to-basket');
	
	$(document).on({
		click: function() {
            console.log(this);
			var $this = $(this);
			var $item = $this.closest('.sale-item');				
			var itemId = $item.attr('data-item-id');
			var color = 0;
			var updateQuantity=$item.find('.update-quantity-basket')
			var is_catalog=$item.hasClass('catalog_item');	
			
			var quantity=parseInt(updateQuantity.val());
			if($this.attr('type')=='plus') {
				quantity++;
			} else {
				quantity--;
			}
			
			updateQuantity.val(quantity);
			
			var $select = $item.find('select.item-subtype');
			if ($select.length) {
				itemId = $select.val();
			}
			
			if(quantity<1) {
				$.post('/system/api/basket/delete-item', {id: itemId, color: color}, function(data) {
					if (data.result == 'success') {
						$('.nav_a.icon-cart').html('<span>' + data.basket.count + '</span>');
						$select.find('option:selected').attr('quantity', 0)
						$item.find('.update-quantity-basket').addClass('hide');
						$item.find('.update_quantity').addClass('hide');
						$item.find('.add-to-basket').removeClass('hide');
						$item.find('.item_to_basket').addClass('hide');
					} else {
						alert(data.reason);	
					}
					
				}, 'json');
			} else {
				$.post('/system/api/basket/update-quantity', {id: itemId, color: color, quantity: quantity}, function(data) {
					if (data.result == 'success') {
						$('.nav_a.icon-cart').html('<span>' + data.basket.count + '</span>');
						$select.find('option:selected').attr('quantity', quantity)
						//$this.addClass('selected');
						$this.addClass('success');
						setTimeout(function() {
							$this.removeClass('success');				
						}, 500);
						
						
					} else {
						alert(data.reason);	
					}
					
				}, 'json');
			
			}
			return false;
		}
	}, '.update_quantity');
	
	$(document).on('change', '.update-quantity-basket', function() {
			var $this = $(this);
			var $item = $this.closest('.sale-item');				
			var itemId = $item.attr('data-item-id');
			var color = 0;
			var is_catalog=$item.hasClass('catalog_item');	
			var quantity=$this.val();
			
			var $select = $item.find('select.item-subtype');
			if ($select.length) {
				itemId = $select.val();
			}
			
			if(quantity<1) {
				$.post('/system/api/basket/delete-item', {id: itemId, color: color}, function(data) {
					if (data.result == 'success') {
						$item.find('.update-quantity-basket').addClass('hide');
						$item.find('.update_quantity').addClass('hide');
						$item.find('.add-to-basket').removeClass('hide');
						
						
					} else {
						alert(data.reason);	
					}
					
				}, 'json');
			} else {
				$.post('/system/api/basket/update-quantity', {id: itemId, color: color, quantity: quantity}, function(data) {
					if (data.result == 'success') {
						$('.nav_a.icon-cart').html('<span>' + data.basket.count + '</span>');
						//$this.addClass('selected');
						$this.addClass('success');
						setTimeout(function() {
							$this.removeClass('success');				
						}, 500);
						
						
					} else {
						alert(data.reason);	
					}
					
				}, 'json');
			
			}
			return false;
	});
	
		
		
		$(document).on('click', '.icon-favourite', function(e){
			let id = $(this).closest('.sale-item').data("item-id");
			addLike(id, true); 
		});
		
		
		 
		 
		
		
	  	function addLike(id, popup = false) {
  			$.ajax({
		      url: '/system/php/scripts/likes.php',
		      method: 'POST',
		      dataType: 'json',
		      data: {id: id},
		      success: function(data) {
		        if (data.status == true) {  
		        	if (popup) {
			            $('.sale-item[data-item-id="'+ id +'"]').toggleClass('_active');	
			            $('.sale-item[data-item-id="'+ id +'"]').find( '._active-add-icon' ).toggleClass('active');	 
			          }  
		        } else {
		          if (data.reason == 'requires-authicon') {
		            auth();
		          } 
		        }
		      }
		    });  
      	}     
      	
      	
  		
		$(document).on({
		click: function() {
			var $this = $(this);
			if ($this.hasClass('inactive')) return false;
			if ($this.hasClass('requires-auth')) return;
			$('#sendBlock').css({'display':'flex'});
			return false;
		}
		
		
	}, '.send-price');
	
	$(document).on({
		click: function() {
			var $this = $(this);
			var $item = $this.closest('.sale-item');				
			var itemId = $('#selectItemVariation').val();
			
			var $sendBlock=$('#sendBlock')
			
			var link=$item.find('[name=link]').val();
			var comment=$item.find('[name=comment]').val();
			
			
			$.post('/system/api/notifyme/send-price', {id: itemId, link: link, comment: comment}, function(data) {
					if (data.result == 'success') {
						$('#sendBlock .modal_in .form').html('Отправлено');
						setTimeout(function() {
									$sendBlock.fadeOut(1000);					
								}, 500);
					
				
						
					} else {
						alert(data.reason);	
					}
					
				}, 'json');
				
			return false;
		}
		
		
	}, '.send-price-ok');
	
	$(document).on({
		click: function() {
			var $this = $(this);
			var $item = $this.closest('.sale-item');				
			var itemId = $item.attr('data-item-id');
			var $notifyEmail = $('#divNotifyMe'); // $item.find('.notify-presence-email');
			var $button = $item.find('.notify-presence');
			
			if ($this.hasClass('inactive')) return false;
			if ($this.hasClass('requires-auth')) return;
			
			var $select = $item.find('select.item-subtype');
			if ($select.length) {
				itemId = $select.val();
			}
						
			if (typeof myReminders[itemId] === 'undefined') {
				var email = $item.find('.notify-presence-email input[type="text"]').val();
			
				$.post('/system/api/notifyme/add-notify', {id: itemId, email: email}, function(data) {
				console.log(data);
					if (data.result == 'success') {
						$button.removeClass('press-me');
						myReminders[itemId] = true;
						$notifyEmail.hide();

					} else {
						if (typeof data.email != 'undefined') {
							$item.append($notifyEmail);
							$notifyEmail.show();
							$notifyEmail.find('input[type="text"]').focus();
							
						} else {					
							alert(data.reason);	
						}
					}
					
				}, 'json');
				
			} else {
				$.post('/system/api/notifyme/remove-notify', {id: itemId}, function(data) {
					if (data.result == 'success') {
						$button.addClass('press-me');
						delete myReminders[itemId];
						
					} else {
						alert(data.reason);	
					}
					
				}, 'json');
			}
			
			return false;
		}
		
		
	}, '.notify-presence');
 	
 	$('.sale-item').each(function() {
		var $item = $(this);
		var $button = $item.find('.notify-presence');
		var itemId = $item.attr('data-item-id');
		
		var $select = $item.find('select.item-subtype');
		if ($select.length) {
			itemId = $select.val();
		}

		$button.toggleClass('press-me', typeof myReminders[itemId] === 'undefined');				
	});
 	
 	$(document).click(function() {
 		$modalAdded.hide();
 	});
 	
 	
 	$('.send-me-form').each(function() {
 		var $form = $(this);
 		var $dropZone = $form.find('.droppy');
 		
 		$dropZone.dropzone({ 
 			url: "/system/api/auth/upload-photo",
 			success: function(data, res) {
 				var response = JSON.parse(res); 				
 				$(data.previewElement).append('<input type="hidden" name="attached[]" value="' + response.file + '">');
 			}
 		});
 		
 		$dropZone.on({
 			click: function() {
 				$(this).closest('.dz-preview').remove(); 				 			
 			}
 		
 		}, '.dz-error-mark');
 		
		$form.ajaxForm({
			beforeSubmit: function(){
				$form.find('.error').text('');
			}, 
			dataType: 'json', 
			success: function(data) {
				if (data.result == 'success') {
					$form.hide();
					$form.closest('.modal').find('.success').show();
									
				} else {
					for (var i in data.errors) {
						$form.find('[name="' + i.toLowerCase() + '"]').closest('.form-group').find('.error').html(data.errors[i]);
					}
				}
			}
		});
 		
 	});
 	
 	$('.send-me-master').each(function() {
 		var $form = $(this);
 		
 		$form.ajaxForm({
			beforeSubmit: function(){
				$form.find('.error').text('');
			}, 
			dataType: 'json', 
			success: function(data) {
				if (data.result == 'success') {
					$form.hide();
					$form.closest('.modal').find('.success').show();
									
				} else {
					for (var i in data.errors) {
						$form.find('[name="' + i.toLowerCase() + '"]').closest('.form-group').find('.error').html(data.errors[i]);
					}
				}
			}
		});
 		
 	});
 	
 	
 	$('.send-me-schedule').each(function() {
 		var $form = $(this);
 		
 		$form.ajaxForm({
			beforeSubmit: function(){
				$form.find('.error').text('');
			}, 
			dataType: 'json', 
			success: function(data) {
				if (data.result == 'success') {
					$form.hide();
					$form.closest('.modal').find('.success').show();
									
				} else {
					for (var i in data.errors) {
						$form.find('[name="' + i.toLowerCase() + '"]').closest('.form-group').find('.error').html(data.errors[i]);
					}
				}
			}
		});
 		
 	});
 	
 	
 	
 	
 	$('.send-me-model').each(function() {
 		var $form = $(this);
 		var $dropZone = $form.find('.droppy');
 		
 		$dropZone.dropzone({ 
 			url: "/system/api/auth/upload-photo",
 			success: function(data, res) {
 				var response = JSON.parse(res); 				
 				$(data.previewElement).append('<input type="hidden" name="attached[]" value="' + response.file + '">');
 			}
 		});
 		
 		$dropZone.on({
 			click: function() {
 				$(this).closest('.dz-preview').remove(); 				 			
 			}
 		
 		}, '.dz-error-mark');
 		
		$form.ajaxForm({
			beforeSubmit: function(){
				$form.find('.error').text('');
			}, 
			dataType: 'json', 
			success: function(data) {
				if (data.result == 'success') {
					$form.hide();
					$form.closest('.modal').find('.success').show();
									
				} else {
					for (var i in data.errors) {
						$form.find('[name="' + i.toLowerCase() + '"]').closest('.form-group').find('.error').html(data.errors[i]);
					}
				}
			}
		});
 		
 	});
 	
	$('#formAuth').each(function() {
		var $form = $(this);

		$form.find('[name="phone"]').inputmask({
			mask: "9 (999) 999-99-999",
		});

		$form.find('.remind-password').click(function() {
			var phone = $form.find('[name="phone"]').val();
			var $error = $form.find('.error');
			
			if (phone == '') {
				$error.html('Введите, пожалуйста, номер телефона');
				return false;
			}		
			
			$.ajax('/system/api/auth/remindPhone', {
				data: {	
					phone: phone
				}, 
				success: function(data) {
					$error.text(data.message);			
					
				}, 
				error: function(e) {
					if (e.responseJSON) {
						$error.text(e.responseJSON.message);
					}
				}
			});
			
			
			return false;
		});

		$form.ajaxForm({
			beforeSubmit: function(){
		 		$('#formAuth .error').html('');
		 	}, 
		 	dataType: 'json', 
		 	success: function(data) {
		 		 console.log('#formAuth success', data.result)
		 		if (data.result == 'success') {
		 		
		 			if ($('#divRegistration').attr('data-auth-action') == 'reload') {
						document.location.reload();
					
		 			} else {
		 				document.location.reload();
		 				//document.location.href = '/cabinet/';
				}
									
				} else {
					$('#formAuth .error').html(data.reason);
		 		}
		 	},
		 	error: function(error) {
		 		$('#formAuth .error').html(error.reason);
		 		// console.log('#formAuth error', error.status)
		 	}
		 });

	});  
	
	$('#formChangePassword').each(function() {
		var $form = $(this);
		$form.find('.submit-order').click(function() {
			var password = $form.find('[name="password"]').val();
			var password2 = $form.find('[name="password2"]').val();
			var $error = $form.find('.error');
			
			if (password !== password2 || password == '' || password2 == '') {
				$error;
				return false;
			}else {
				$form.find('.success').show();
	 		}
	 		
	 		return false;
		});
	});  
	
	
	var modal = document.getElementsByClassName("wrapper_window");
	var modalSearch = document.getElementById("searchModal");
	var modalPromo = document.getElementById("modalPromo");
	var btn = document.getElementById("searchModalShow");
	var filter = document.getElementById("divSearch");
	const searchInput = document.getElementById("searchInput");
	var close = document.getElementsByClassName("m-close"),
	index, modalAll, closer;
	for (index = 0; index < close.length; index++) {
	    modalAll = modal[index];
	    closer = close[index];
		closer.addEventListener('click', closerHandler(modalAll))
	}
	function closerHandler(modalAll) {
	    return function (event) {
	        event.preventDefault();
	        modalAll.classList.remove('modal-active');
	        $('body').removeClass('compensate-for-scrollbar');
	    }
	}
	btn.onclick = function() {
		searchInput.focus();
		modalSearch.classList.add('modal-active');
	  $('body').addClass('compensate-for-scrollbar');
	  $('.more-items-search').each(function(){
			$(this).css({'display':'none'});
		});
	}
	window.onclick = function(event) {
	  if (event.target == modalSearch) {
	    modalSearch.classList.remove('modal-active');
	    $('body').removeClass('compensate-for-scrollbar');
	  }
	  if (event.target == modalPromo) {
	    modalPromo.classList.remove('modal-active');
	    $('body').removeClass('compensate-for-scrollbar');
	  }
	}
	document.getElementById("clearButton").onclick = function(e) {
	   	e.preventDefault();
	   	searchInput.focus();
	  	document.getElementById("searchInput").value = "";
	  	document.getElementById("clearButton").style.opacity = "0";
	  	filter.style.display = "none";
	  	$('.more-items-search').each(function(){
			$(this).css({'display':'none'});
		});
	}
	 
	
		
});    



/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));
/*!
 * jScrollPane - v2.0.23 - 2016-01-28
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2014 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.fn.jScrollPane=function(b){function c(b,c){function d(c){var f,h,j,k,l,o,p=!1,q=!1;if(N=c,void 0===O)l=b.scrollTop(),o=b.scrollLeft(),b.css({overflow:"hidden",padding:0}),P=b.innerWidth()+rb,Q=b.innerHeight(),b.width(P),O=a('<div class="jspPane" />').css("padding",qb).append(b.children()),R=a('<div class="jspContainer" />').css({width:P+"px",height:Q+"px"}).append(O).appendTo(b);else{if(b.css("width",""),p=N.stickToBottom&&A(),q=N.stickToRight&&B(),k=b.innerWidth()+rb!=P||b.outerHeight()!=Q,k&&(P=b.innerWidth()+rb,Q=b.innerHeight(),R.css({width:P+"px",height:Q+"px"})),!k&&sb==S&&O.outerHeight()==T)return void b.width(P);sb=S,O.css("width",""),b.width(P),R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}O.css("overflow","auto"),S=c.contentWidth?c.contentWidth:O[0].scrollWidth,T=O[0].scrollHeight,O.css("overflow",""),U=S/P,V=T/Q,W=V>1,X=U>1,X||W?(b.addClass("jspScrollable"),f=N.maintainPosition&&($||bb),f&&(h=y(),j=z()),e(),g(),i(),f&&(w(q?S-P:h,!1),v(p?T-Q:j,!1)),F(),C(),L(),N.enableKeyboardNavigation&&H(),N.clickOnTrack&&m(),J(),N.hijackInternalLinks&&K()):(b.removeClass("jspScrollable"),O.css({top:0,left:0,width:R.width()-rb}),D(),G(),I(),n()),N.autoReinitialise&&!pb?pb=setInterval(function(){d(N)},N.autoReinitialiseDelay):!N.autoReinitialise&&pb&&clearInterval(pb),l&&b.scrollTop(0)&&v(l,!1),o&&b.scrollLeft(0)&&w(o,!1),b.trigger("jsp-initialised",[X||W])}function e(){W&&(R.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'),a('<div class="jspDragBottom" />'))),a('<div class="jspCap jspCapBottom" />'))),cb=R.find(">.jspVerticalBar"),db=cb.find(">.jspTrack"),Y=db.find(">.jspDrag"),N.showArrows&&(hb=a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",k(0,-1)).bind("click.jsp",E),ib=a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",k(0,1)).bind("click.jsp",E),N.arrowScrollOnHover&&(hb.bind("mouseover.jsp",k(0,-1,hb)),ib.bind("mouseover.jsp",k(0,1,ib))),j(db,N.verticalArrowPositions,hb,ib)),fb=Q,R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){fb-=a(this).outerHeight()}),Y.hover(function(){Y.addClass("jspHover")},function(){Y.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",E),Y.addClass("jspActive");var c=b.pageY-Y.position().top;return a("html").bind("mousemove.jsp",function(a){p(a.pageY-c,!1)}).bind("mouseup.jsp mouseleave.jsp",o),!1}),f())}function f(){db.height(fb+"px"),$=0,eb=N.verticalGutter+db.outerWidth(),O.width(P-eb-rb);try{0===cb.position().left&&O.css("margin-left",eb+"px")}catch(a){}}function g(){X&&(R.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'),a('<div class="jspDragRight" />'))),a('<div class="jspCap jspCapRight" />'))),jb=R.find(">.jspHorizontalBar"),kb=jb.find(">.jspTrack"),_=kb.find(">.jspDrag"),N.showArrows&&(nb=a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",k(-1,0)).bind("click.jsp",E),ob=a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",k(1,0)).bind("click.jsp",E),N.arrowScrollOnHover&&(nb.bind("mouseover.jsp",k(-1,0,nb)),ob.bind("mouseover.jsp",k(1,0,ob))),j(kb,N.horizontalArrowPositions,nb,ob)),_.hover(function(){_.addClass("jspHover")},function(){_.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",E),_.addClass("jspActive");var c=b.pageX-_.position().left;return a("html").bind("mousemove.jsp",function(a){r(a.pageX-c,!1)}).bind("mouseup.jsp mouseleave.jsp",o),!1}),lb=R.innerWidth(),h())}function h(){R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){lb-=a(this).outerWidth()}),kb.width(lb+"px"),bb=0}function i(){if(X&&W){var b=kb.outerHeight(),c=db.outerWidth();fb-=b,a(jb).find(">.jspCap:visible,>.jspArrow").each(function(){lb+=a(this).outerWidth()}),lb-=c,Q-=c,P-=b,kb.parent().append(a('<div class="jspCorner" />').css("width",b+"px")),f(),h()}X&&O.width(R.outerWidth()-rb+"px"),T=O.outerHeight(),V=T/Q,X&&(mb=Math.ceil(1/U*lb),mb>N.horizontalDragMaxWidth?mb=N.horizontalDragMaxWidth:mb<N.horizontalDragMinWidth&&(mb=N.horizontalDragMinWidth),_.width(mb+"px"),ab=lb-mb,s(bb)),W&&(gb=Math.ceil(1/V*fb),gb>N.verticalDragMaxHeight?gb=N.verticalDragMaxHeight:gb<N.verticalDragMinHeight&&(gb=N.verticalDragMinHeight),Y.height(gb+"px"),Z=fb-gb,q($))}function j(a,b,c,d){var e,f="before",g="after";"os"==b&&(b=/Mac/.test(navigator.platform)?"after":"split"),b==f?g=b:b==g&&(f=b,e=c,c=d,d=e),a[f](c)[g](d)}function k(a,b,c){return function(){return l(a,b,this,c),this.blur(),!1}}function l(b,c,d,e){d=a(d).addClass("jspActive");var f,g,h=!0,i=function(){0!==b&&tb.scrollByX(b*N.arrowButtonSpeed),0!==c&&tb.scrollByY(c*N.arrowButtonSpeed),g=setTimeout(i,h?N.initialDelay:N.arrowRepeatFreq),h=!1};i(),f=e?"mouseout.jsp":"mouseup.jsp",e=e||a("html"),e.bind(f,function(){d.removeClass("jspActive"),g&&clearTimeout(g),g=null,e.unbind(f)})}function m(){n(),W&&db.bind("mousedown.jsp",function(b){if(void 0===b.originalTarget||b.originalTarget==b.currentTarget){var c,d=a(this),e=d.offset(),f=b.pageY-e.top-$,g=!0,h=function(){var a=d.offset(),e=b.pageY-a.top-gb/2,j=Q*N.scrollPagePercent,k=Z*j/(T-Q);if(0>f)$-k>e?tb.scrollByY(-j):p(e);else{if(!(f>0))return void i();e>$+k?tb.scrollByY(j):p(e)}c=setTimeout(h,g?N.initialDelay:N.trackClickRepeatFreq),g=!1},i=function(){c&&clearTimeout(c),c=null,a(document).unbind("mouseup.jsp",i)};return h(),a(document).bind("mouseup.jsp",i),!1}}),X&&kb.bind("mousedown.jsp",function(b){if(void 0===b.originalTarget||b.originalTarget==b.currentTarget){var c,d=a(this),e=d.offset(),f=b.pageX-e.left-bb,g=!0,h=function(){var a=d.offset(),e=b.pageX-a.left-mb/2,j=P*N.scrollPagePercent,k=ab*j/(S-P);if(0>f)bb-k>e?tb.scrollByX(-j):r(e);else{if(!(f>0))return void i();e>bb+k?tb.scrollByX(j):r(e)}c=setTimeout(h,g?N.initialDelay:N.trackClickRepeatFreq),g=!1},i=function(){c&&clearTimeout(c),c=null,a(document).unbind("mouseup.jsp",i)};return h(),a(document).bind("mouseup.jsp",i),!1}})}function n(){kb&&kb.unbind("mousedown.jsp"),db&&db.unbind("mousedown.jsp")}function o(){a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),Y&&Y.removeClass("jspActive"),_&&_.removeClass("jspActive")}function p(c,d){if(W){0>c?c=0:c>Z&&(c=Z);var e=new a.Event("jsp-will-scroll-y");if(b.trigger(e,[c]),!e.isDefaultPrevented()){var f=c||0,g=0===f,h=f==Z,i=c/Z,j=-i*(T-Q);void 0===d&&(d=N.animateScroll),d?tb.animate(Y,"top",c,q,function(){b.trigger("jsp-user-scroll-y",[-j,g,h])}):(Y.css("top",c),q(c),b.trigger("jsp-user-scroll-y",[-j,g,h]))}}}function q(a){void 0===a&&(a=Y.position().top),R.scrollTop(0),$=a||0;var c=0===$,d=$==Z,e=a/Z,f=-e*(T-Q);(ub!=c||wb!=d)&&(ub=c,wb=d,b.trigger("jsp-arrow-change",[ub,wb,vb,xb])),t(c,d),O.css("top",f),b.trigger("jsp-scroll-y",[-f,c,d]).trigger("scroll")}function r(c,d){if(X){0>c?c=0:c>ab&&(c=ab);var e=new a.Event("jsp-will-scroll-x");if(b.trigger(e,[c]),!e.isDefaultPrevented()){var f=c||0,g=0===f,h=f==ab,i=c/ab,j=-i*(S-P);void 0===d&&(d=N.animateScroll),d?tb.animate(_,"left",c,s,function(){b.trigger("jsp-user-scroll-x",[-j,g,h])}):(_.css("left",c),s(c),b.trigger("jsp-user-scroll-x",[-j,g,h]))}}}function s(a){void 0===a&&(a=_.position().left),R.scrollTop(0),bb=a||0;var c=0===bb,d=bb==ab,e=a/ab,f=-e*(S-P);(vb!=c||xb!=d)&&(vb=c,xb=d,b.trigger("jsp-arrow-change",[ub,wb,vb,xb])),u(c,d),O.css("left",f),b.trigger("jsp-scroll-x",[-f,c,d]).trigger("scroll")}function t(a,b){N.showArrows&&(hb[a?"addClass":"removeClass"]("jspDisabled"),ib[b?"addClass":"removeClass"]("jspDisabled"))}function u(a,b){N.showArrows&&(nb[a?"addClass":"removeClass"]("jspDisabled"),ob[b?"addClass":"removeClass"]("jspDisabled"))}function v(a,b){var c=a/(T-Q);p(c*Z,b)}function w(a,b){var c=a/(S-P);r(c*ab,b)}function x(b,c,d){var e,f,g,h,i,j,k,l,m,n=0,o=0;try{e=a(b)}catch(p){return}for(f=e.outerHeight(),g=e.outerWidth(),R.scrollTop(0),R.scrollLeft(0);!e.is(".jspPane");)if(n+=e.position().top,o+=e.position().left,e=e.offsetParent(),/^body|html$/i.test(e[0].nodeName))return;h=z(),j=h+Q,h>n||c?l=n-N.horizontalGutter:n+f>j&&(l=n-Q+f+N.horizontalGutter),isNaN(l)||v(l,d),i=y(),k=i+P,i>o||c?m=o-N.horizontalGutter:o+g>k&&(m=o-P+g+N.horizontalGutter),isNaN(m)||w(m,d)}function y(){return-O.position().left}function z(){return-O.position().top}function A(){var a=T-Q;return a>20&&a-z()<10}function B(){var a=S-P;return a>20&&a-y()<10}function C(){R.unbind(zb).bind(zb,function(a,b,c,d){bb||(bb=0),$||($=0);var e=bb,f=$,g=a.deltaFactor||N.mouseWheelSpeed;return tb.scrollBy(c*g,-d*g,!1),e==bb&&f==$})}function D(){R.unbind(zb)}function E(){return!1}function F(){O.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(a){x(a.target,!1)})}function G(){O.find(":input,a").unbind("focus.jsp")}function H(){function c(){var a=bb,b=$;switch(d){case 40:tb.scrollByY(N.keyboardSpeed,!1);break;case 38:tb.scrollByY(-N.keyboardSpeed,!1);break;case 34:case 32:tb.scrollByY(Q*N.scrollPagePercent,!1);break;case 33:tb.scrollByY(-Q*N.scrollPagePercent,!1);break;case 39:tb.scrollByX(N.keyboardSpeed,!1);break;case 37:tb.scrollByX(-N.keyboardSpeed,!1)}return e=a!=bb||b!=$}var d,e,f=[];X&&f.push(jb[0]),W&&f.push(cb[0]),O.bind("focus.jsp",function(){b.focus()}),b.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(b){if(b.target===this||f.length&&a(b.target).closest(f).length){var g=bb,h=$;switch(b.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:d=b.keyCode,c();break;case 35:v(T-Q),d=null;break;case 36:v(0),d=null}return e=b.keyCode==d&&g!=bb||h!=$,!e}}).bind("keypress.jsp",function(b){return b.keyCode==d&&c(),b.target===this||f.length&&a(b.target).closest(f).length?!e:void 0}),N.hideFocus?(b.css("outline","none"),"hideFocus"in R[0]&&b.attr("hideFocus",!0)):(b.css("outline",""),"hideFocus"in R[0]&&b.attr("hideFocus",!1))}function I(){b.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),O.unbind(".jsp")}function J(){if(location.hash&&location.hash.length>1){var b,c,d=escape(location.hash.substr(1));try{b=a("#"+d+', a[name="'+d+'"]')}catch(e){return}b.length&&O.find(d)&&(0===R.scrollTop()?c=setInterval(function(){R.scrollTop()>0&&(x(b,!0),a(document).scrollTop(R.position().top),clearInterval(c))},50):(x(b,!0),a(document).scrollTop(R.position().top)))}}function K(){a(document.body).data("jspHijack")||(a(document.body).data("jspHijack",!0),a(document.body).delegate('a[href*="#"]',"click",function(b){var c,d,e,f,g,h,i=this.href.substr(0,this.href.indexOf("#")),j=location.href;if(-1!==location.href.indexOf("#")&&(j=location.href.substr(0,location.href.indexOf("#"))),i===j){c=escape(this.href.substr(this.href.indexOf("#")+1));try{d=a("#"+c+', a[name="'+c+'"]')}catch(k){return}d.length&&(e=d.closest(".jspScrollable"),f=e.data("jsp"),f.scrollToElement(d,!0),e[0].scrollIntoView&&(g=a(window).scrollTop(),h=d.offset().top,(g>h||h>g+a(window).height())&&e[0].scrollIntoView()),b.preventDefault())}}))}function L(){var a,b,c,d,e,f=!1;R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(g){var h=g.originalEvent.touches[0];a=y(),b=z(),c=h.pageX,d=h.pageY,e=!1,f=!0}).bind("touchmove.jsp",function(g){if(f){var h=g.originalEvent.touches[0],i=bb,j=$;return tb.scrollTo(a+c-h.pageX,b+d-h.pageY),e=e||Math.abs(c-h.pageX)>5||Math.abs(d-h.pageY)>5,i==bb&&j==$}}).bind("touchend.jsp",function(){f=!1}).bind("click.jsp-touchclick",function(){return e?(e=!1,!1):void 0})}function M(){var a=z(),c=y();b.removeClass("jspScrollable").unbind(".jsp"),O.unbind(".jsp"),b.replaceWith(yb.append(O.children())),yb.scrollTop(a),yb.scrollLeft(c),pb&&clearInterval(pb)}var N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb=this,ub=!0,vb=!0,wb=!1,xb=!1,yb=b.clone(!1,!1).empty(),zb=a.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";"border-box"===b.css("box-sizing")?(qb=0,rb=0):(qb=b.css("paddingTop")+" "+b.css("paddingRight")+" "+b.css("paddingBottom")+" "+b.css("paddingLeft"),rb=(parseInt(b.css("paddingLeft"),10)||0)+(parseInt(b.css("paddingRight"),10)||0)),a.extend(tb,{reinitialise:function(b){b=a.extend({},N,b),d(b)},scrollToElement:function(a,b,c){x(a,b,c)},scrollTo:function(a,b,c){w(a,c),v(b,c)},scrollToX:function(a,b){w(a,b)},scrollToY:function(a,b){v(a,b)},scrollToPercentX:function(a,b){w(a*(S-P),b)},scrollToPercentY:function(a,b){v(a*(T-Q),b)},scrollBy:function(a,b,c){tb.scrollByX(a,c),tb.scrollByY(b,c)},scrollByX:function(a,b){var c=y()+Math[0>a?"floor":"ceil"](a),d=c/(S-P);r(d*ab,b)},scrollByY:function(a,b){var c=z()+Math[0>a?"floor":"ceil"](a),d=c/(T-Q);p(d*Z,b)},positionDragX:function(a,b){r(a,b)},positionDragY:function(a,b){p(a,b)},animate:function(a,b,c,d,e){var f={};f[b]=c,a.animate(f,{duration:N.animateDuration,easing:N.animateEase,queue:!1,step:d,complete:e})},getContentPositionX:function(){return y()},getContentPositionY:function(){return z()},getContentWidth:function(){return S},getContentHeight:function(){return T},getPercentScrolledX:function(){return y()/(S-P)},getPercentScrolledY:function(){return z()/(T-Q)},getIsScrollableH:function(){return X},getIsScrollableV:function(){return W},getContentPane:function(){return O},scrollToBottom:function(a){p(Z,a)},hijackInternalLinks:a.noop,destroy:function(){M()}}),d(c)}return b=a.extend({},a.fn.jScrollPane.defaults,b),a.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){b[this]=b[this]||b.speed}),this.each(function(){var d=a(this),e=d.data("jsp");e?e.reinitialise(b):(a("script",d).filter('[type="text/javascript"],:not([type])').remove(),e=new c(d,b),d.data("jsp",e))})},a.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}});


/**
 * Input mask for order form
*/
// показать/скрыть длинный текст
	$(document).on('click', '.short-text__button', function(e){
		e.preventDefault();
		$(this).parent().prev().toggleClass('short-text--active');
		$(this).parent().toggleClass('short-text__controls--active');
	});
	
$(document).ready(function(){

	 $(".order [name='phone']").inputmask({
	 	mask: "9 (999) 999-99-999",
	 });
	$(".order_info_item form").submit(function() {
		var hiddenInput = $(this).find("input[name='email']").val();
		if(hiddenInput) {
			return false;
		}
	});
	
	
	
	
	
	/*lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })*/
	
	
	
	
});