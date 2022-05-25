function t843_init(recId){var rec=document.querySelector('#rec'+recId);if(!rec)return;var container=rec.querySelector('.t843');if(!container)return;t843_setHeight(recId);window.addEventListener('resize',t_throttle(function(){if(window.noAdaptive&&window.noAdaptive===!0&&window.isMobile)return;t843_setHeight(recId)}));if(typeof jQuery!=='undefined'){$(container).bind('displayChanged',function(){t843_setHeight(recId)})}else{container.addEventListener('displayChanged',function(){t843_setHeight(recId)})}
if(container&&container.classList.contains('t843__previewmode')){setInterval(function(){t843_setHeight(recId)},5000)}}
function t843_setHeight(recId){var rec=document.querySelector('#rec'+recId);if(!rec)return;var container=rec.querySelector('.t843');if(!container)return;var blockImages=rec.querySelectorAll('.t843__blockimg');var isLoaded=!0;for(var i=0;i<blockImages.length;i++){var blockImage=blockImages[i];var width=blockImage.getAttribute('data-image-width');var height=blockImage.getAttribute('data-image-height');var ratio=height/width;var padding=ratio*100;blockImage.style.paddingBottom=padding+'%';if(!blockImage.classList.contains('loaded')){isLoaded=!1}}
if(window.innerWidth>960){var textWraps=rec.querySelectorAll('.t843__textwrapper');var deskImages=rec.querySelectorAll('.t843__desktopimg');for(var i=0;i<textWraps.length;i++){textWraps[i].style.height=deskImages[i].clientHeight+'px'}}
if(!isLoaded){if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}}
function t849_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var accordion=rec.querySelectorAll('.t849__accordion')[0];var headers=rec.querySelectorAll('.t849__header');var isLazy=document.getElementById('allrecords').getAttribute('data-tilda-lazy');if(accordion){accordion=accordion.getAttribute('data-accordion')}else{accordion='false'}
for(var i=0;i<headers.length;i++){headers[i].addEventListener('click',function(){var element=this;var container=element.nextElementSibling;if(element.classList.contains('t849__opened')){element.classList.remove('t849__opened');t849_accordionHide(container)}else{if(accordion==='true'){t849_accordionAllHide(headers)}
element.classList.add('t849__opened');container.style.display='block';var height=container.scrollHeight;container.style.maxHeight='0px';setTimeout(function(){container.style.maxHeight=height+'px'},0)}
if(window.lazy==='y'||isLazy==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}})}
function t849_accordionAllHide(headers){for(var i=0;i<headers.length;i++){var elementHide=headers[i];elementHide.classList.remove('t849__opened');t849_accordionHide(elementHide.nextElementSibling)}}
function t849_accordionHide(container){if(!container.style.maxHeight)container.style.maxHeight=container.scrollHeight+'px';setTimeout(function(){container.style.maxHeight='0px'},0)}}