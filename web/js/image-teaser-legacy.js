!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?exports["image-teaser-legacy"]=t(require("jquery")):e["image-teaser-legacy"]=t(e.jquery)}(window,(function(e){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=236)}({0:function(t,i){t.exports=e},236:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ccImageTeaserLegacy=void 0;var n=i(0),a=i(237);t.ccImageTeaserLegacy=function(e,t){new a.ImageTeaserLegacy(n(t),e)}},237:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(238);Object.defineProperty(t,"ImageTeaserLegacy",{enumerable:!0,get:function(){return n.default}}),i(240)},238:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),a=i(239),s=function(){function e(e,t){var i;this._lazyLoadedImages=[],this._lazyImageResizeEventHandlerAdded=!1,this._$container=e;var a=this,s={teaserName:"cs-image-teaser-legacy",carouselBreakpoint:breakpoint.tablet},r=breakpoint.tablet-1,o={spaceBetween:8,slidesPerView:parseInt(this._$container.data("items-per-view"),10)||1,slidesPerGroup:parseInt(this._$container.data("items-per-view"),10)||1,isSlider:Boolean(this._$container.data("is-slider"))||!1,isSliderMobile:Boolean(this._$container.data("mobile-is-slider"))||!1,loop:!0,centeredSlides:!1,breakpoints:(i={},i[r]={slidesPerView:parseInt(this._$container.data("mobile-items-per-view"),10)||parseInt(this._$container.data("items-per-view"),10)||1,slidesPerGroup:parseInt(this._$container.data("mobile-items-per-view"),10)||parseInt(this._$container.data("items-per-view"),10)||1},i),preloadImages:!1,lazy:{loadPrevNext:!0,loadOnTransitionStart:!0},on:{init:function(){a._fireCallback("onInit",this)},lazyImageReady:function(e,t){a._handleLazyImageReadyEvent(this,t)}}};if(this._settings=n.extend(!0,s,o,t),this._settingsOverrides=this._getDataAttrOverrideSettings(),this._settingsOverrides&&(this._settings=n.extend(!0,this._settings,this._settingsOverrides)),this._settings.isSlider&&this._initTeaser(this._$container),this._settings.isSliderMobile&&!this._settings.isSlider){var l=this;this._toggleMobileTeaser(),n(window).on("resize",(function(){l._toggleMobileTeaser()}))}}return e.prototype.getInstance=function(){return this._teaserInstance},e.prototype._getDataAttrOverrideSettings=function(){var e,t=this._$container.data("js-configuration");if(t)try{e=JSON.parse(JSON.stringify(t))}catch(e){console.warn("Could not parse settings from data-attribute: "+e)}return e},e.prototype._initTeaser=function(e){this._teaserInstance=new a.default(e,this._settings)},e.prototype._toggleMobileTeaser=function(){n(window).width()<this._settings.carouselBreakpoint?this._teaserInstance||(this._$container.addClass(this._settings.teaserName+"--slider"),this._initTeaser(this._$container)):this._teaserInstance&&(this._teaserInstance.destroy(),this._$container.removeClass(this._settings.teaserName+"--slider").find("."+this._settings.teaserName+"__slides").removeAttr("style").find("."+this._settings.teaserName+"__slide").removeAttr("style"),this._teaserInstance=void 0)},e.prototype._fireCallback=function(e,t){var i=this._settings.callbacks;i&&i[e]&&"function"==typeof i[e]&&i[e](t)},e.prototype._handleLazyImageReadyEvent=function(e,t){var i=this;if(this._lazyLoadedImages.push(t),n(e.$el).hasClass(this._settings.teaserName+"__wrapper--content-display-outside")&&e.navigation.prevEl&&e.navigation.nextEl&&this._lazyLoadedImages.length>=e.params.slidesPerView){var a,s,r=function(){if(n(window).width()>=breakpoint.tablet&&n(e.$el).parents("."+i._settings.teaserName+"--slider").length){var t=0;if(e.slides.each((function(e,a){var r=n(a).find("."+i._settings.teaserName+"__image");r.length&&r.outerHeight()>t&&(t=(s=r).outerHeight())})),s.length){var a=t/2;n(e.navigation.prevEl).css("top",a),n(e.navigation.nextEl).css("top",a)}}};r(),this._lazyImageResizeEventHandlerAdded||n(window).on("resize",(function(){clearTimeout(a),a=setTimeout(r,250)}))}},e}();t.default=s},239:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),a=i(4);t.default=function(e,t){var i,s,r=(t=t||{}).teaserName?t.teaserName:"cs-teaser",o="."+r,l=e.find(o+"__wrapper"),d=t.paginationName?t.paginationName:r+"__pagination",u=t.fractionPaginationSeparator?t.fractionPaginationSeparator:"/",c=t.scrollbarName?t.scrollbarName:r+"__scrollbar";e.data(r,this);var p,_=!t.slidesPerView||"auto"===t.slidesPerView,f={slideClass:r+"__slide",slideActiveClass:r+"__slide--active",slideVisibleClass:r+"__slide--visible",slideDuplicateClass:r+"__slide--clone",slideNextClass:r+"__slide--next",slidePrevClass:r+"__slide--prev",wrapperClass:r+"__slides",spaceBetween:20,watchSlidesVisibility:!0,navigation:{nextEl:e.find(o+"__nav--next")[0],prevEl:e.find(o+"__nav--prev")[0],disabledClass:r+"__nav--disabled"},pagination:{el:e.find("."+d),renderBullet:function(e,t){return'\n                <li class="'+t+'">\n                    <button class="'+d+'-button">'+(e+1)+"</button>\n                </li>\n            "},renderFraction:function(e,t){return'\n                <span class="'+r+"__number "+e+'"></span>\n                '+u+'\n                <span class="'+r+"__number "+t+'"></span>\n            '},bulletClass:d+"-item",bulletActiveClass:d+"-item--active",currentClass:r+"__number--current",totalClass:r+"__number--total",clickable:!0},scrollbar:{el:e.find("."+c).length?e.find("."+c):null,dragClass:c+"--drag",hide:!0},onlyBulletPagination:!1,slideMinWidth:200,calculateSlides:!0,maxSlidesPerView:null,paginationBreakpoint:5};(p=n.extend(!0,{},f,t)).slideMinWidth=parseInt(p.slideMinWidth,10),p.spaceBetween=parseInt(p.spaceBetween,10),p.paginationBreakpoint=parseInt(p.paginationBreakpoint,10),p.hasOwnProperty("slidesPerGroup")&&(p.slidesPerGroup=parseInt(p.slidesPerGroup,10));var g=function(){var e=Math.floor(l.innerWidth()/(p.slideMinWidth+p.spaceBetween)),t=parseInt(p.maxSlidesPerView,10);return e<t?e:t};_&&p.calculateSlides&&(p.slidesPerView=p.slidesPerGroup=g());var h=function(){if(e.addClass(p.teaserName+"--ready"),e.trigger("teaserUpdated"),(1!==i.originalParams.slidesPerView||i.params.calculateSlides)&&!i.params.onlyBulletPagination){var t=i.slides.length;Math.ceil(t/i.params.slidesPerGroup)>i.params.paginationBreakpoint?i.params.pagination.type="fraction":i.params.pagination.type="bullets",i.pagination.render(),i.pagination.update()}};a.default(["Swiper"]).then((function(t){var a=t[0];i=new a(e.find(o+"__wrapper"),p),s=!1,setTimeout((function(){h(),i.update()}));var r=n(window).width();n(window).on("resize",(function(){var t=n(window).width();s||t===r||(e.is(":visible")&&_&&p.calculateSlides&&(p.slidesPerView=p.slidesPerGroup=g(),i.params=n.extend(!0,i.params,p)),h(),i.update(),r=t)}))})),this.getSwiper=function(){return i},this.destroy=function(){i.destroy(),s=!0}}},240:function(e,t,i){"use strict";i.r(t)},4:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){void 0===e&&(e=[]);var t=jQuery.Deferred();return requirejs(e,(function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return setTimeout((function(){return t.resolve(e)}))}),(function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return t.reject(e)})),t}}})}));