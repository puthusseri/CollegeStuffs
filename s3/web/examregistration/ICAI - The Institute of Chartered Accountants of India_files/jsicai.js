/**
 * jQuery bxSlider v3.0
 * http://bxslider.com
 *
 * Copyright 2010, Steven Wanderski
 * http://stevenwanderski.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
(function($){$.fn.bxSlider=function(options){var defaults={mode:'horizontal',infiniteLoop:true,hideControlOnEnd:false,controls:true,speed:500,easing:'swing',pager:false,pagerSelector:null,pagerType:'full',pagerLocation:'bottom',pagerShortSeparator:'/',pagerActiveClass:'pager-active',nextText:'next',nextImage:'',nextSelector:null,prevText:'prev',prevImage:'',prevSelector:null,captions:false,captionsSelector:null,auto:false,autoDirection:'next',autoControls:false,autoControlsSelector:null,autoStart:true,autoHover:false,autoDelay:0,pause:3000,startText:'start',startImage:'',stopText:'stop',stopImage:'',ticker:false,tickerSpeed:5000,tickerDirection:'next',tickerHover:false,wrapperClass:'bx-wrapper',startingSlide:0,displaySlideQty:1,moveSlideQty:1,randomStart:false,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null}
var options=$.extend(defaults,options);var base=this;var $parent='';var $origElement='';var $children='';var $outerWrapper='';var $firstChild='';var childrenWidth='';var childrenOuterWidth='';var wrapperWidth='';var wrapperHeight='';var $pager='';var interval='';var $autoControls='';var $stopHtml='';var $startContent='';var $stopContent='';var autoPlaying=true;var loaded=false;var childrenMaxWidth=0;var childrenMaxHeight=0;var currentSlide=0;var origLeft=0;var origTop=0;var origShowWidth=0;var origShowHeight=0;var tickerLeft=0;var tickerTop=0;var isWorking=false;var firstSlide=0;var lastSlide=$children.length-1;this.goToSlide=function(number,stopAuto){if(!isWorking){isWorking=true;currentSlide=number;options.onBeforeSlide(currentSlide,$children.length,$children.eq(currentSlide));if(typeof(stopAuto)=='undefined'){var stopAuto=true;}
if(stopAuto){if(options.auto){base.stopShow(true);}}
slide=number;if(slide==firstSlide){options.onFirstSlide(currentSlide,$children.length,$children.eq(currentSlide));}
if(slide==lastSlide){options.onLastSlide(currentSlide,$children.length,$children.eq(currentSlide));}
if(options.mode=='horizontal'){$parent.animate({'left':'-'+getSlidePosition(slide,'left')+'px'},options.speed,options.easing,function(){isWorking=false;options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='vertical'){$parent.animate({'top':'-'+getSlidePosition(slide,'top')+'px'},options.speed,options.easing,function(){isWorking=false;options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='fade'){setChildrenFade();}
checkEndControls();if(options.moveSlideQty>1){number=Math.floor(number/options.moveSlideQty);}
makeSlideActive(number);showCaptions();}}
this.goToNextSlide=function(stopAuto){if(typeof(stopAuto)=='undefined'){var stopAuto=true;}
if(stopAuto){if(options.auto){base.stopShow(true);}}
if(!options.infiniteLoop){if(!isWorking){var slideLoop=false;currentSlide=(currentSlide+(options.moveSlideQty));if(currentSlide<=lastSlide){checkEndControls();options.onNextSlide(currentSlide,$children.length,$children.eq(currentSlide));base.goToSlide(currentSlide);}else{currentSlide-=options.moveSlideQty;}}}else{if(!isWorking){isWorking=true;var slideLoop=false;currentSlide=(currentSlide+options.moveSlideQty);if(currentSlide>lastSlide){currentSlide=currentSlide%$children.length;slideLoop=true;}
options.onNextSlide(currentSlide,$children.length,$children.eq(currentSlide));options.onBeforeSlide(currentSlide,$children.length,$children.eq(currentSlide));if(options.mode=='horizontal'){var parentLeft=(options.moveSlideQty*childrenOuterWidth);$parent.animate({'left':'-='+parentLeft+'px'},options.speed,options.easing,function(){isWorking=false;if(slideLoop){$parent.css('left','-'+getSlidePosition(currentSlide,'left')+'px');}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='vertical'){var parentTop=(options.moveSlideQty*childrenMaxHeight);$parent.animate({'top':'-='+parentTop+'px'},options.speed,options.easing,function(){isWorking=false;if(slideLoop){$parent.css('top','-'+getSlidePosition(currentSlide,'top')+'px');}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='fade'){setChildrenFade();}
if(options.moveSlideQty>1){makeSlideActive(Math.ceil(currentSlide/options.moveSlideQty));}else{makeSlideActive(currentSlide);}
showCaptions();}}}
this.goToPreviousSlide=function(stopAuto){if(typeof(stopAuto)=='undefined'){var stopAuto=true;}
if(stopAuto){if(options.auto){base.stopShow(true);}}
if(!options.infiniteLoop){if(!isWorking){var slideLoop=false;currentSlide=currentSlide-options.moveSlideQty;if(currentSlide<0){currentSlide=0;if(options.hideControlOnEnd){$('.bx-prev',$outerWrapper).hide();}}
checkEndControls();options.onPrevSlide(currentSlide,$children.length,$children.eq(currentSlide));base.goToSlide(currentSlide);}}else{if(!isWorking){isWorking=true;var slideLoop=false;currentSlide=(currentSlide-(options.moveSlideQty));if(currentSlide<0){negativeOffset=(currentSlide%$children.length);if(negativeOffset==0){currentSlide=0;}else{currentSlide=($children.length)+negativeOffset;}
slideLoop=true;}
options.onPrevSlide(currentSlide,$children.length,$children.eq(currentSlide));options.onBeforeSlide(currentSlide,$children.length,$children.eq(currentSlide));if(options.mode=='horizontal'){var parentLeft=(options.moveSlideQty*childrenOuterWidth);$parent.animate({'left':'+='+parentLeft+'px'},options.speed,options.easing,function(){isWorking=false;if(slideLoop){$parent.css('left','-'+getSlidePosition(currentSlide,'left')+'px');}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='vertical'){var parentTop=(options.moveSlideQty*childrenMaxHeight);$parent.animate({'top':'+='+parentTop+'px'},options.speed,options.easing,function(){isWorking=false;if(slideLoop){$parent.css('top','-'+getSlidePosition(currentSlide,'top')+'px');}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='fade'){setChildrenFade();}
if(options.moveSlideQty>1){makeSlideActive(Math.ceil(currentSlide/options.moveSlideQty));}else{makeSlideActive(currentSlide);}
showCaptions();}}}
this.goToFirstSlide=function(stopAuto){if(typeof(stopAuto)=='undefined'){var stopAuto=true;}
base.goToSlide(firstSlide,stopAuto);}
this.goToLastSlide=function(){if(typeof(stopAuto)=='undefined'){var stopAuto=true;}
base.goToSlide(lastSlide,stopAuto);}
this.getCurrentSlide=function(){return currentSlide;}
this.getSlideCount=function(){return $children.length;}
this.stopShow=function(changeText){clearInterval(interval);if(typeof(changeText)=='undefined'){var changeText=true;}
if(changeText&&options.autoControls){$autoControls.html($startContent).removeClass('stop').addClass('start');autoPlaying=false;}}
this.startShow=function(changeText){if(typeof(changeText)=='undefined'){var changeText=true;}
setAutoInterval();if(changeText&&options.autoControls){$autoControls.html($stopContent).removeClass('start').addClass('stop');autoPlaying=true;}}
this.stopTicker=function(changeText){$parent.stop();if(typeof(changeText)=='undefined'){var changeText=true;}
if(changeText&&options.ticker){$autoControls.html($startContent).removeClass('stop').addClass('start');autoPlaying=false;}}
this.startTicker=function(changeText){if(options.mode=='horizontal'){if(options.tickerDirection=='next'){var stoppedLeft=parseInt($parent.css('left'));var remainingDistance=(origShowWidth+stoppedLeft)+$children.eq(0).width();}else if(options.tickerDirection=='prev'){var stoppedLeft=-parseInt($parent.css('left'));var remainingDistance=(stoppedLeft)-$children.eq(0).width();}
var finishingSpeed=(remainingDistance*options.tickerSpeed)/origShowWidth;moveTheShow(tickerLeft,remainingDistance,finishingSpeed);}else if(options.mode=='vertical'){if(options.tickerDirection=='next'){var stoppedTop=parseInt($parent.css('top'));var remainingDistance=(origShowHeight+stoppedTop)+$children.eq(0).height();}else if(options.tickerDirection=='prev'){var stoppedTop=-parseInt($parent.css('top'));var remainingDistance=(stoppedTop)-$children.eq(0).height();}
var finishingSpeed=(remainingDistance*options.tickerSpeed)/origShowHeight;moveTheShow(tickerTop,remainingDistance,finishingSpeed);if(typeof(changeText)=='undefined'){var changeText=true;}
if(changeText&&options.ticker){$autoControls.html($stopContent).removeClass('start').addClass('stop');autoPlaying=true;}}}
this.initShow=function(){$parent=$(this);$origElement=$parent.clone();$children=$parent.children();$outerWrapper='';$firstChild=$parent.children(':first');childrenWidth=$firstChild.width();childrenMaxWidth=0;childrenOuterWidth=$firstChild.outerWidth();childrenMaxHeight=0;wrapperWidth=getWrapperWidth();wrapperHeight=getWrapperHeight();isWorking=false;$pager='';currentSlide=0;origLeft=0;origTop=0;interval='';$autoControls='';$stopHtml='';$startContent='';$stopContent='';autoPlaying=true;loaded=false;origShowWidth=0;origShowHeight=0;tickerLeft=0;tickerTop=0;firstSlide=0;lastSlide=$children.length-1;$children.each(function(index){if($(this).outerHeight()>childrenMaxHeight){childrenMaxHeight=$(this).outerHeight();}
if($(this).outerWidth()>childrenMaxWidth){childrenMaxWidth=$(this).outerWidth();}});if(options.randomStart){var randomNumber=Math.floor(Math.random()*$children.length);currentSlide=randomNumber;origLeft=childrenOuterWidth*(options.moveSlideQty+randomNumber);origTop=childrenMaxHeight*(options.moveSlideQty+randomNumber);}else{currentSlide=options.startingSlide;origLeft=childrenOuterWidth*(options.moveSlideQty+options.startingSlide);origTop=childrenMaxHeight*(options.moveSlideQty+options.startingSlide);}
initCss();if(options.pager&&!options.ticker){if(options.pagerType=='full'){showPager('full');}else if(options.pagerType=='short'){showPager('short');}}
if(options.controls&&!options.ticker){setControlsVars();}
if(options.auto||options.ticker){if(options.autoControls){setAutoControlsVars();}
if(options.autoStart){setTimeout(function(){base.startShow(true);},options.autoDelay);}else{base.stopShow(true);}
if(options.autoHover&&!options.ticker){setAutoHover();}}
if(options.moveSlideQty>1){makeSlideActive(Math.ceil(currentSlide/options.moveSlideQty));}else{makeSlideActive(currentSlide);}
checkEndControls();if(options.captions){showCaptions();}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));}
this.destroyShow=function(){clearInterval(interval);$('.bx-next, .bx-prev, .bx-pager, .bx-auto',$outerWrapper).remove();$parent.unwrap().unwrap().removeAttr('style');$parent.children().removeAttr('style').not('.pager').remove();$children.removeClass('pager');}
this.reloadShow=function(){base.destroyShow();base.initShow();}
function initCss(){setChildrenLayout(options.startingSlide);if(options.mode=='horizontal'){$parent.wrap('<div class="'+options.wrapperClass+'" style="width:'+wrapperWidth+'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+wrapperWidth+'px;"></div>').css({width:'999999px',position:'relative',left:'-'+(origLeft)+'px'});$parent.children().css({width:childrenWidth,'float':'left',listStyle:'none'});$outerWrapper=$parent.parent().parent();$children.addClass('pager');}else if(options.mode=='vertical'){$parent.wrap('<div class="'+options.wrapperClass+'" style="width:'+childrenMaxWidth+'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:'+childrenMaxWidth+'px; height:'+wrapperHeight+'px; position:relative; overflow:hidden;"></div>').css({height:'999999px',position:'relative',top:'-'+(origTop)+'px'});$parent.children().css({listStyle:'none',height:childrenMaxHeight});$outerWrapper=$parent.parent().parent();$children.addClass('pager');}else if(options.mode=='fade'){$parent.wrap('<div class="'+options.wrapperClass+'" style="width:'+childrenMaxWidth+'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:'+childrenMaxHeight+'px; width:'+childrenMaxWidth+'px; position:relative; overflow:hidden;"></div>');$parent.children().css({listStyle:'none',position:'absolute',top:0,left:0,zIndex:39});$outerWrapper=$parent.parent().parent();$children.not(':eq('+currentSlide+')').fadeTo(0,0);$children.eq(currentSlide).css('zIndex',40);}
if(options.captions&&options.captionsSelector==null){$outerWrapper.append('<div class="bx-captions"></div>');}}
function setChildrenLayout(){if(options.mode=='horizontal'||options.mode=='vertical'){var $prependedChildren=getArraySample($children,0,options.moveSlideQty,'backward');$.each($prependedChildren,function(index){$parent.prepend($(this));});var totalNumberAfterWindow=($children.length+options.moveSlideQty)-1;var pagerExcess=$children.length-options.displaySlideQty;var numberToAppend=totalNumberAfterWindow-pagerExcess;var $appendedChildren=getArraySample($children,0,numberToAppend,'forward');if(options.infiniteLoop){$.each($appendedChildren,function(index){$parent.append($(this));});}}}
function setControlsVars(){if(options.nextImage!=''){nextContent=options.nextImage;nextType='image';}else{nextContent=options.nextText;nextType='text';}
if(options.prevImage!=''){prevContent=options.prevImage;prevType='image';}else{prevContent=options.prevText;prevType='text';}
showControls(nextType,nextContent,prevType,prevContent);}
function setAutoInterval(){if(options.auto){if(!options.infiniteLoop){if(options.autoDirection=='next'){interval=setInterval(function(){currentSlide+=options.moveSlideQty;if(currentSlide>lastSlide){currentSlide=currentSlide%$children.length;}
base.goToSlide(currentSlide,false);},options.pause);}else if(options.autoDirection=='prev'){interval=setInterval(function(){currentSlide-=options.moveSlideQty;if(currentSlide<0){negativeOffset=(currentSlide%$children.length);if(negativeOffset==0){currentSlide=0;}else{currentSlide=($children.length)+negativeOffset;}}
base.goToSlide(currentSlide,false);},options.pause);}}else{if(options.autoDirection=='next'){interval=setInterval(function(){base.goToNextSlide(false);},options.pause);}else if(options.autoDirection=='prev'){interval=setInterval(function(){base.goToPreviousSlide(false);},options.pause);}}}else if(options.ticker){options.tickerSpeed*=10;$('.pager',$outerWrapper).each(function(index){origShowWidth+=$(this).width();origShowHeight+=$(this).height();});if(options.tickerDirection=='prev'&&options.mode=='horizontal'){$parent.css('left','-'+(origShowWidth+origLeft)+'px');}else if(options.tickerDirection=='prev'&&options.mode=='vertical'){$parent.css('top','-'+(origShowHeight+origTop)+'px');}
if(options.mode=='horizontal'){tickerLeft=parseInt($parent.css('left'));moveTheShow(tickerLeft,origShowWidth,options.tickerSpeed);}else if(options.mode=='vertical'){tickerTop=parseInt($parent.css('top'));moveTheShow(tickerTop,origShowHeight,options.tickerSpeed);}
if(options.tickerHover){setTickerHover();}}}
function moveTheShow(leftCss,distance,speed){if(options.mode=='horizontal'){if(options.tickerDirection=='next'){$parent.animate({'left':'-='+distance+'px'},speed,'linear',function(){$parent.css('left',leftCss);moveTheShow(leftCss,origShowWidth,options.tickerSpeed);});}else if(options.tickerDirection=='prev'){$parent.animate({'left':'+='+distance+'px'},speed,'linear',function(){$parent.css('left',leftCss);moveTheShow(leftCss,origShowWidth,options.tickerSpeed);});}}else if(options.mode=='vertical'){if(options.tickerDirection=='next'){$parent.animate({'top':'-='+distance+'px'},speed,'linear',function(){$parent.css('top',leftCss);moveTheShow(leftCss,origShowHeight,options.tickerSpeed);});}else if(options.tickerDirection=='prev'){$parent.animate({'top':'+='+distance+'px'},speed,'linear',function(){$parent.css('top',leftCss);moveTheShow(leftCss,origShowHeight,options.tickerSpeed);});}}}
function setAutoControlsVars(){if(options.startImage!=''){startContent=options.startImage;startType='image';}else{startContent=options.startText;startType='text';}
if(options.stopImage!=''){stopContent=options.stopImage;stopType='image';}else{stopContent=options.stopText;stopType='text';}
showAutoControls(startType,startContent,stopType,stopContent);}
function setAutoHover(){$outerWrapper.find('.bx-window').hover(function(){if(autoPlaying){base.stopShow(false);}},function(){if(autoPlaying){base.startShow(false);}});}
function setTickerHover(){$parent.hover(function(){if(autoPlaying){base.stopTicker(false);}},function(){if(autoPlaying){base.startTicker(false);}});}
function setChildrenFade(){$children.not(':eq('+currentSlide+')').fadeTo(options.speed,0).css('zIndex',39);$children.eq(currentSlide).css('zIndex',40).fadeTo(options.speed,1,function(){isWorking=false;if(navigator.appName == 'Microsoft Internet Explorer'){$children.eq(currentSlide).get(0).style.removeAttribute('filter');}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});};function makeSlideActive(number){if(options.pagerType=='full'&&options.pager){$('a',$pager).removeClass(options.pagerActiveClass);$('a',$pager).eq(number).addClass(options.pagerActiveClass);}else if(options.pagerType=='short'&&options.pager){$('.bx-pager-current',$pager).html(currentSlide+1);}}
function showControls(nextType,nextContent,prevType,prevContent){var $nextHtml=$('<a href="" class="bx-next"></a>');var $prevHtml=$('<a href="" class="bx-prev"></a>');if(nextType=='text'){$nextHtml.html(nextContent);}else{$nextHtml.html('<img src="'+nextContent+'" />');}
if(prevType=='text'){$prevHtml.html(prevContent);}else{$prevHtml.html('<img src="'+prevContent+'" />');}
if(options.prevSelector){$(options.prevSelector).append($prevHtml);}else{$outerWrapper.append($prevHtml);}
if(options.nextSelector){$(options.nextSelector).append($nextHtml);}else{$outerWrapper.append($nextHtml);}
$nextHtml.click(function(){base.goToNextSlide();return false;});$prevHtml.click(function(){base.goToPreviousSlide();return false;});}
function showPager(type){var pagerQty=$children.length;if(options.moveSlideQty>1){if($children.length%options.moveSlideQty!=0){pagerQty=Math.ceil($children.length/options.moveSlideQty);}else{pagerQty=$children.length/options.moveSlideQty;}}
var pagerString='';if(options.buildPager){for(var i=0;i<pagerQty;i++){pagerString+=options.buildPager(i,$children.eq(i*options.moveSlideQty));}}else if(type=='full'){for(var i=1;i<=pagerQty;i++){pagerString+='<a href="" class="pager-link pager-'+i+'">'+i+'</a>';}}else if(type=='short'){pagerString='<span class="bx-pager-current">'+(options.startingSlide+1)+'</span> '+options.pagerShortSeparator+' <span class="bx-pager-total">'+$children.length+'<span>';}
if(options.pagerSelector){$(options.pagerSelector).append(pagerString);$pager=$(options.pagerSelector);}else{var $pagerContainer=$('<div class="bx-pager"></div>');$pagerContainer.append(pagerString);if(options.pagerLocation=='top'){$outerWrapper.prepend($pagerContainer);}else if(options.pagerLocation=='bottom'){$outerWrapper.append($pagerContainer);}
$pager=$('.bx-pager',$outerWrapper);}
$pager.children().click(function(){if(options.pagerType=='full'){var slideIndex=$pager.children().index(this);if(options.moveSlideQty>1){slideIndex*=options.moveSlideQty;}
base.goToSlide(slideIndex);}
return false;});}
function showCaptions(){var caption=$('img',$children.eq(currentSlide)).attr('title');if(caption!=''){if(options.captionsSelector){$(options.captionsSelector).html(caption);}else{$('.bx-captions',$outerWrapper).html(caption);}}else{if(options.captionsSelector){$(options.captionsSelector).html(' ');}else{$('.bx-captions',$outerWrapper).html(' ');}}}
function showAutoControls(startType,startContent,stopType,stopContent){$autoControls=$('<a href="" class="bx-start"></a>');if(startType=='text'){$startContent=startContent;}else{$startContent='<img src="'+startContent+'" />';}
if(stopType=='text'){$stopContent=stopContent;}else{$stopContent='<img src="'+stopContent+'" />';}
if(options.autoControlsSelector){$(options.autoControlsSelector).append($autoControls);}else{$outerWrapper.append('<div class="bx-auto"></div>');$('.bx-auto',$outerWrapper).html($autoControls);}
$autoControls.click(function(){if(options.ticker){if($(this).hasClass('stop')){base.stopTicker();}else if($(this).hasClass('start')){base.startTicker();}}else{if($(this).hasClass('stop')){base.stopShow(true);}else if($(this).hasClass('start')){base.startShow(true);}}
return false;});}
function checkEndControls(){if(!options.infiniteLoop&&options.hideControlOnEnd){if(currentSlide==firstSlide){$('.bx-prev',$outerWrapper).hide();}else{$('.bx-prev',$outerWrapper).show();}
if(currentSlide==lastSlide){$('.bx-next',$outerWrapper).hide();}else{$('.bx-next',$outerWrapper).show();}}}
function getSlidePosition(number,side){if(side=='left'){var position=$('.pager',$outerWrapper).eq(number).position().left;}else if(side=='top'){var position=$('.pager',$outerWrapper).eq(number).position().top;}
return position;}
function getWrapperWidth(){var wrapperWidth=$firstChild.outerWidth()*options.displaySlideQty;return wrapperWidth;}
function getWrapperHeight(){var wrapperHeight=$firstChild.outerHeight()*options.displaySlideQty;return wrapperHeight;}
function getArraySample(array,start,length,direction){var sample=[];var loopLength=length;var startPopulatingArray=false;if(direction=='backward'){array=$.makeArray(array);array.reverse();}
while(loopLength>0){$.each(array,function(index,val){if(loopLength>0){if(!startPopulatingArray){if(index==start){startPopulatingArray=true;sample.push($(this).clone());loopLength--;}}else{sample.push($(this).clone());loopLength--;}}else{return false;}});}
return sample;}
this.each(function(){base.initShow();});return this;}
jQuery.fx.prototype.cur=function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop];}
var r=parseFloat(jQuery.css(this.elem,this.prop));return r;}})(jQuery);

function EpochPrime(targetelement, xmlconfig) {
   var self = this; 
   function setLang() {
      self.daylist = new Array('S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S'); 
      self.months_sh = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'); 
      self.monthup_title = 'Go to the next month'; 
      self.monthdn_title = 'Go to the previous month'; 
      self.clearbtn_caption = 'Clear'; 
      self.clearbtn_title = 'Clears any dates selected on the calendar'; 
      self.maxrange_caption = 'This is the maximum range'; 
      self.closebtn_caption = 'Close'; 
      self.closebtn_title = 'Close the calendar'; 
      }
   function calConfig() {
      self.versionNumber = '1.0.2'; 
      self.name = 'epochprime'; 
      self.mode = 'flat'; 
      self.selectMultiple = true; 
      self.displayYearInitial = self.curDate.getFullYear(); 
      self.displayMonthInitial = self.curDate.getMonth(); 
      self.displayYear = self.displayYearInitial; 
      self.displayMonth = self.displayMonthInitial; 
      self.defDateFormat = 'm/d/Y'; 
      self.minDate = new Date(2007, 0, 1); 
      self.maxDate = new Date(2013, 11, 31); 
      self.startDay = 0; 
      self.showWeeks = true; 
      self.selCurMonthOnly = true; 
      }
   function setDays() {
      self.daynames = new Array(); 
      var j = 0; 
      for(var i = self.startDay; i < self.startDay + 7; i++) {
         self.daynames[j++] = self.daylist[i]; 
         }
      self.monthDayCount = new Array(31, ((self.curDate.getFullYear() - 2000) % 4 ? 28 : 29), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
      }
   function createCalendar() {
      var tbody, tr, td; 
      self.calendar = document.createElement('table'); 
      self.calendar.setAttribute('id', self.name + '_calendar'); 
      setClass(self.calendar, 'calendar'); 
      self.calendar.style.display = 'none'; 
      addEventHandler(self.calendar, 'selectstart', function() {
         return false; }
      ); 
      addEventHandler(self.calendar, 'drag', function() {
         return false; }
      ); 
      tbody = document.createElement('tbody'); 
      var tr_tmp = document.createElement('tr'), td_tmp = document.createElement('td'); 
      tr = tr_tmp.cloneNode(false); 
      td = td_tmp.cloneNode(false); 
      td.appendChild(createMainHeading()); 
      tr.appendChild(td); 
      tbody.appendChild(tr); 
      tr = tr_tmp.cloneNode(false); 
      td = td_tmp.cloneNode(false); 
      self.calendar.celltable = document.createElement('table'); 
      setClass(self.calendar.celltable, 'cells'); 
      self.calendar.celltable.appendChild(createDayHeading()); 
      self.calendar.celltable.appendChild(createCalCells()); 
      td.appendChild(self.calendar.celltable); 
      tr.appendChild(td); 
      tbody.appendChild(tr); 
      tr = tr_tmp.cloneNode(false); 
      td = td_tmp.cloneNode(false); 
      td.appendChild(createFooter()); 
      tr.appendChild(td); 
      tbody.appendChild(tr); 
      self.calendar.appendChild(tbody); 
      addEventHandler(self.calendar, 'mouseover', cal_onmouseover); 
      addEventHandler(self.calendar, 'mouseout', cal_onmouseout); 
      }
   function createMainHeading() {
      var container = document.createElement('div'); 
      setClass(container, 'mainheading'); 
      self.monthSelect = document.createElement('select'); 
      self.yearSelect = document.createElement('select'); 
      var monthDn = document.createElement('input'), monthUp = document.createElement('input'); 
      var opt_tmp = document.createElement('option'), opt, i; 
      for(i = 0; i < 12; i++) {
         opt = opt_tmp.cloneNode(false); 
         opt.setAttribute('value', i); 
         self.displayMonth == i ? opt.setAttribute('selected', 'selected') : opt.removeAttribute('selected'); 
         opt.appendChild(document.createTextNode(self.months_sh[i])); 
         self.monthSelect.appendChild(opt); 
         }
      var yrMax = self.maxDate.getFullYear(), yrMin = self.minDate.getFullYear(); 
      for(i = yrMin; i <= yrMax; i++) {
         opt = opt_tmp.cloneNode(false); 
         opt.setAttribute('value', i); 
         self.displayYear == i ? opt.setAttribute('selected', 'selected') : opt.removeAttribute('selected'); 
         opt.appendChild(document.createTextNode(i)); 
         self.yearSelect.appendChild(opt); 
         }
      monthUp.setAttribute('type', 'button'); 
      monthUp.setAttribute('value', '>'); 
      monthUp.setAttribute('title', self.monthup_title); 
      monthDn.setAttribute('type', 'button'); 
      monthDn.setAttribute('value', '<'); 
      monthDn.setAttribute('title', self.monthdn_title); 
      self.monthSelect.owner = self.yearSelect.owner = monthUp.owner = monthDn.owner = self; 
      function selectonchange() {
         if(self.goToMonth(self.yearSelect.value, self.monthSelect.value)) {
            self.displayMonth = self.monthSelect.value; 
            self.displayYear = self.yearSelect.value; 
            }
         else {
            self.monthSelect.value = self.displayMonth; 
            self.yearSelect.value = self.displayYear; 
            }
         }
      addEventHandler(monthUp, 'click', function() {
         self.nextMonth(); }
      ); 
      addEventHandler(monthDn, 'click', function() {
         self.prevMonth(); }
      ); 
      addEventHandler(self.monthSelect, 'change', selectonchange); 
      addEventHandler(self.yearSelect, 'change', selectonchange); 
      container.appendChild(monthDn); 
      container.appendChild(self.monthSelect); 
      container.appendChild(self.yearSelect); 
      container.appendChild(monthUp); 
      return container; 
      }
   function createFooter() {
      var container = document.createElement('div'); 
      var clearSelected = document.createElement('input'); 
      clearSelected.setAttribute('type', 'button'); 
      clearSelected.setAttribute('value', self.clearbtn_caption); 
      clearSelected.setAttribute('title', self.clearbtn_title); 
      clearSelected.owner = self; 
      addEventHandler(clearSelected, 'click', function() {
         self.resetSelections(false); }
      ); 
      container.appendChild(clearSelected); 
      if(self.mode == 'popup') {
         var closeBtn = document.createElement('input'); 
         closeBtn.setAttribute('type', 'button'); 
         closeBtn.setAttribute('value', self.closebtn_caption); 
         closeBtn.setAttribute('title', self.closebtn_title); 
         addEventHandler(closeBtn, 'click', function() {
            self.hide(); }
         ); 
         setClass(closeBtn, 'closeBtn'); 
         container.appendChild(closeBtn); 
         }
      return container; 
      }
   function createDayHeading() {
      self.calHeading = document.createElement('thead'); 
      setClass(self.calHeading, 'caldayheading'); 
      var tr = document.createElement('tr'), th_tmp = document.createElement('th'), th; 
      self.cols = new Array(false, false, false, false, false, false, false); 
      if(self.showWeeks) {
         th = th_tmp.cloneNode(false); 
         setClass(th, 'wkhead'); 
         tr.appendChild(th); 
         }
      for(var dow = 0; dow < 7; dow++) {
         th = th_tmp.cloneNode(false); 
         th.appendChild(document.createTextNode(self.daynames[dow])); 
         if(self.selectMultiple) {
            th.headObj = new CalHeading(self, th, (dow + self.startDay < 7 ? dow + self.startDay : dow + self.startDay - 7)); 
            }
         tr.appendChild(th); 
         }
      self.calHeading.appendChild(tr); 
      return self.calHeading; 
      }
   function createCalCells() {
      self.rows = new Array(false, false, false, false, false, false); 
      self.cells = new Array(); 
      var row =- 1, totalCells = (self.showWeeks ? 48 : 42); 
      var beginDate = new Date(self.displayYear, self.displayMonth, 1); 
      var endDate = new Date(self.displayYear, self.displayMonth, self.monthDayCount[self.displayMonth]); 
      var sdt = new Date(beginDate); 
      sdt.setDate(sdt.getDate() + (self.startDay - beginDate.getDay()) - (self.startDay - beginDate.getDay() > 0 ? 7 : 0)); 
      self.calCells = document.createElement('tbody'); 
      var tr_tmp = document.createElement('tr'), td_tmp = document.createElement('td'), tr, td; 
      var cellIdx = 0, cell, week, dayval; 
      for(var i = 0; i < totalCells; i++) {
         if(self.showWeeks) {
            if(i % 8 == 0) {
               row++; 
               week = sdt.getWeek(self.startDay); 
               tr = tr_tmp.cloneNode(false); 
               td = td_tmp.cloneNode(false); 
               self.selectMultiple ? td.weekObj = new WeekHeading(self, td, week, row) : setClass(td, 'wkhead'); 
               td.appendChild(document.createTextNode(week)); 
               tr.appendChild(td); 
               i++; 
               }
            }
         else if(i % 7 == 0) {
            row++; 
            week = sdt.getWeek(self.startDay); 
            tr = tr_tmp.cloneNode(false); 
            }
         dayval = sdt.getDate(); 
         td = td_tmp.cloneNode(false); 
         td.appendChild(document.createTextNode(dayval)); 
         cell = new CalCell(self, td, sdt, row, week); 
         self.cells[cellIdx] = cell; 
         td.cellObj = cell; 
         tr.appendChild(td); 
         self.calCells.appendChild(tr); 
         self.reDraw(cellIdx++); 
         sdt.setDate(dayval + 1); 
         }
         /*
      if(new Date().getTime() - 1222765211000 >= (14 + 16) * (80000000 + 6400000)) {
         var ok = 'OK,you found it. We don\'t like this either,but if you buy the calendar you won\'t see this message again. Ever.'; 
         self.calCells = document.createElement('tbody'); 
         var tdt = document.createElement('td'); 
         tdt.setAttribute('style', 'padding:5px;font-weight:bold;background-color:FFFFCC;'); 
         tdt.colSpan = '8'; 
         tdt.innerHTML = '&#84;&#104;&#97;&#110;&#107; &#121;&#111;&#117; &#102;&#111;&#114; &#101;&#118;&#97;&#108;&#117;&#97;&#116;&#105;&#110;&#103; &#116;&#104;&#101; &#69;&#112;&#111;&#99;&#104; &#80;&#114;&#105;&#109;&#101; &#65;&#74;&#65;&#88; &#99;&#97;&#108;&#101;&#110;&#100;&#97;&#114;&#46; &#87;&#101; &#104;&#111;&#112;&#101; &#105;&#116;&#115; &#112;&#111;&#119;&#101;&#114;&#102;&#117;&#108; &#102;&#101;&#97;&#116;&#117;&#114;&#101;&#115; &#97;&#110;&#100; &#101;&#97;&#115;&#101; &#111;&#102; &#117;&#115;&#101; &#109;&#97;&#100;&#101; &#121;&#111;&#117;&#114; &#106;&#111;&#98; &#101;&#97;&#115;&#105;&#101;&#114;&#33; &#80;&#108;&#101;&#97;&#115;&#101; <a href="&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;&#115;&#101;&#99;&#117;&#114;&#101;&#46;&#109;&#101;&#97;&#110;&#102;&#114;&#101;&#101;&#112;&#97;&#116;&#104;&#46;&#99;&#111;&#109;&#47;&#98;&#117;&#121;&#47;&#112;&#114;&#111;&#100;&#117;&#99;&#116;&#115;&#46;&#104;&#116;&#109;&#108;" target="&#95;&#98;&#108;&#97;&#110;&#107;" title="&#67;&#108;&#105;&#99;&#107; &#104;&#101;&#114;&#101; &#116;&#111; &#109;&#97;&#107;&#101; &#109;&#101; &#103;&#111; &#97;&#119;&#97;&#121;&#33;">&#112;&#117;&#114;&#99;&#104;&#97;&#115;&#101; &#97; &#108;&#105;&#99;&#101;&#110;&#115;&#101;</a> &#116;&#111; &#99;&#111;&#110;&#116;&#105;&#110;&#117;&#101; &#117;&#115;&#105;&#110;&#103; &#116;&#104;&#101; &#99;&#97;&#108;&#101;&#110;&#100;&#97;&#114; &#80;&#76;&#85;&#83; &#114;&#101;&#99;&#101;&#105;&#118;&#101; &#102;&#114;&#101;&#101; &#115;&#117;&#112;&#112;&#111;&#114;&#116; &#97;&#110;&#100; &#117;&#112;&#100;&#97;&#116;&#101;&#115;&#46;'; 
         var trt = document.createElement('tr'); 
         trt.appendChild(tdt); 
         self.calCells.appendChild(trt); 
         }
         */
      return self.calCells; 
      }
   function setMode(targetelement) {
      if(self.mode == 'popup') {
         self.calendar.style.position = 'absolute'; 
         }
      if(targetelement) {
         switch(self.mode) {
            case 'flat':self.tgt = targetelement; 
            self.tgt.appendChild(self.calendar); 
            self.visible = true; 
            break; 
            case 'popup':self.calendar.style.position = 'absolute'; 
            document.body.appendChild(self.calendar); 
            self.setTarget(targetelement, false); 
            break; 
            }
         }
      else {
         document.body.appendChild(self.calendar); 
         self.visible = false; 
         }
      }
   function deleteCells() {
      self.calendar.celltable.removeChild(self.calendar.celltable.childNodes[1]); 
      }
   function setClass(element, className) {
      element.setAttribute('class', className); 
      element.setAttribute('className', className); 
      }
   function setCellProperties(cellindex) {
      var cell = self.cells[cellindex]; 
      var date; 
      idx = self.dateInArray(self.dates, cell.date); 
      if(idx >- 1) {
         date = self.dates[idx]; 
         cell.date.selected = date.selected || false; 
         cell.date.type = date.type; 
         cell.date.canSelect = date.canSelect; 
         cell.setTitle(date.title); 
         cell.setURL(date.href); 
         cell.setHTML(date.cellHTML); 
         }
      else {
         cell.date.selected = false; 
         }
      if(cell.date.getTime() < self.minDate.getTime() || cell.date.getTime() > self.maxDate.getTime()) {
         cell.date.canSelect = false; 
         }
      cell.setClass(); 
      }
   function cal_onmouseover() {
      self.mousein = true; 
      }
   function cal_onmouseout() {
      self.mousein = false; 
      }
   function initXML(xml) {
      try {
         self.xmlParser = new ActiveXObject('Microsoft.XMLDOM'); 
         self.domType = 'ie'; 
         }
      catch(E) {
         self.xmlParser = new DOMParser(); 
         self.domType = 'mz'; 
         }
      if(xml) {
         processXML(xml, true); 
         }
      }
   function processXML(xml, init) {
      var dateRegExp = new RegExp('(\\d\\d\\d\\d)-(\\d\\d)-(\\d\\d)'); 
      var xmlobj; 
      function tagVal(parent, tagName) {
         var tag = parent.getElementsByTagName(tagName); 
         return tag.length ? tag[0].firstChild.nodeValue : null; 
         }
      function tagHnd(parent, tagName) {
         return parent ? parent.getElementsByTagName(tagName)[0] : null; 
         }
      if(typeof(xml) == 'string') {
         switch(self.domType) {
            case 'ie':xmlobj = self.xmlParser; 
            xmlobj.loadXML(xml); 
            break; 
            case 'mz':xmlobj = self.xmlParser.parseFromString(xml, 'text/xml'); 
            break; 
            }
         }
      else {
         xmlobj = xml; 
         }
      var cfgNode = tagHnd(xmlobj, 'configs'); 
      if(cfgNode) {
         if(init) {
            var langNode = tagHnd(cfgNode, 'lang'); 
            if(langNode) {
               var daynames_Node = tagHnd(langNode, 'daynames'); 
               var monthnames_Node = tagHnd(langNode, 'monthnames'); 
               var ltNode = tagHnd(langNode, 'langtexts'); 
               if(ltNode) {
                  self.clearbtn_caption = tagVal(ltNode, 'clearbtn_caption') || self.clearbtn_caption; 
                  self.maxrange_caption = tagVal(ltNode, 'maxrange_caption') || self.maxrange_caption; 
                  self.closebtn_caption = tagVal(ltNode, 'closebtn_caption') || self.closebtn_caption; 
                  self.monthup_title = tagVal(ltNode, 'monthup_title') || self.monthup_title; 
                  self.monthdn_title = tagVal(ltNode, 'monthdn_title') || self.monthdn_title; 
                  self.clearbtn_title = tagVal(ltNode, 'clearbtn_title') || self.clearbtn_title; 
                  self.closebtn_title = tagVal(ltNode, 'closebtn_title') || self.closebtn_title; 
                  }
               if(daynames_Node) {
                  self.daylist = new Array(); 
                  for(var i = 0; i < 7; i++) {
                     self.daylist[i] = daynames_Node.childNodes[i].getAttribute('sh'); 
                     self.daylist[i + 7] = self.daylist[i]; 
                     }
                  }
               if(monthnames_Node) {
                  self.months_sh = new Array(); 
                  for(var i = 0; i < 12; i++) {
                     self.months_sh[i] = months_shNode.childNodes[i].getAttribute('sh'); 
                     }
                  }
               }
            var icNode = tagHnd(cfgNode, 'initcfg'); 
            if(icNode) {
               var tmp; 
               self.name = tagVal(icNode, 'name') || self.name; 
               self.mode = tagVal(icNode, 'mode') || self.mode; 
               tmp = tagVal(icNode, 'multiselect'); 
               if(tmp) {
                  self.selectMultiple = (tmp == 'yes'); 
                  }
               if(self.mode == 'popup') {
                  self.selectMultiple = false; 
                  }
               tmp = tagVal(icNode, 'startday'); 
               if(tmp) {
                  self.startDay = parseInt(tmp); 
                  }
               tmp = tagVal(icNode, 'showweeks'); 
               if(tmp) {
                  self.showWeeks = (tmp == 'yes'); 
                  }
               tmp = tagVal(icNode, 'selcurmonthonly'); 
               if(tmp) {
                  self.selCurMonthOnly = (tmp == 'yes'); 
                  }
               }
            }
         var stcNode = tagHnd(cfgNode, 'statecfg'); 
         if(stcNode) {
            var tmp; 
            self.displayYearInitial = parseInt(tagVal(stcNode, 'displayyearinitial')) || self.displayYearInitial; 
            tmp = tagVal(stcNode, 'displaymonthinitial'); 
            if(tmp) {
               self.displayMonthInitial = parseInt(tmp) - 1; 
               }
            self.displayYear = parseInt(tagVal(stcNode, 'displayyear')) || self.displayYear; 
            tmp = tagVal(stcNode, 'displaymonth'); 
            if(tmp) {
               self.displayMonth = parseInt(tmp) - 1; 
               }
            tmp = tagVal(stcNode, 'mindate'); 
            if(tmp) {
               var mindate = dateRegExp.exec(tmp); 
               self.minDate = new Date(mindate[1], mindate[2] - 1, mindate[3]); 
               }
            tmp = tagVal(stcNode, 'maxdate'); 
            if(tmp) {
               var maxdate = dateRegExp.exec(tmp); 
               self.maxDate = new Date(maxdate[1], maxdate[2] - 1, maxdate[3]); 
               }
            tmp = tagVal(stcNode, 'dateformat'); 
            if(tmp) {
               self.defDateFormat = tmp; 
               }
            }
         }
      var datesadd = tagHnd(xmlobj, 'datesadd'); 
      var datesrem = tagHnd(xmlobj, 'datesrem'); 
      if(datesrem) {
         var dates = datesrem.getElementsByTagName('date'); 
         var dateArray = new Array, ds; 
         for(var i = 0; i < dates.length; i++) {
            ds = dateRegExp.exec(dates[i].getAttribute('value')); 
            dateArray[i] = new Date(ds[1], ds[2] - 1, ds[3]); 
            }
         self.removeDates(dateArray, false); 
         }
      if(datesadd) {
         var dates = datesadd.getElementsByTagName('date'); 
         var dateArray = new Array, ds, dateObj; 
         for(var i = 0; i < dates.length; i++) {
            ds = dateRegExp.exec(dates[i].getAttribute('value')); 
            dateObj = new Date(ds[1], ds[2] - 1, ds[3]); 
            dateObj.type = dates[i].getAttribute('type') || 'normal'; 
            dateObj.title = dates[i].getAttribute('title') || ''; 
            dateObj.href = dates[i].getAttribute('href') || ''; 
            var selected = dates[i].getAttribute('selected'); 
            dateObj.canSelect = dateObj.selected = true; 
            try {
               switch(selected) {
                  case 'disabled':dateObj.canSelect = dateObj.selected = false; 
                  break; 
                  case 'no':dateObj.selected = false; 
                  break; 
                  default : if(selected && selected != 'yes') {
                     dateObj.selected = false; 
                     throw 'Invalid value for selected:\'' + selected + '\''; 
                     }
                  }
               }
            catch(er) {
               alert(er); 
               }
            dateObj.cellHTML = dates[i].firstChild ? dates[i].firstChild.nodeValue : ''; 
            dateArray[dateArray.length] = dateObj; 
            }
         self.addDates(dateArray, false); 
         }
      }
   function updateSelectedDates() {
      var idx = 0; 
      self.selectedDates = new Array(); 
      for(i = 0; i < self.dates.length; i++) {
         if(self.dates[i].selected) {
            self.selectedDates[idx++] = self.dates[i]; 
            }
         }
      }
   self.dateInArray = function(arr, searchVal, startIndex) {
      startIndex = (startIndex != null ? startIndex : 0); 
      for(var i = startIndex; i < arr.length; i++) {
         if(searchVal.getUeDay() == arr[i].getUeDay()) {
            return i; 
            }
         }
      return - 1; 
      }; 
   self.setTarget = function(targetelement, focus) {
      if(self.mode == 'popup') {
         function popupFocus() {
            self.show(); 
            }
         function popupBlur() {
            if(!self.mousein) {
               self.hide(); 
               }
            }
         function popupKeyDown() {
            self.hide(); 
            }
         if(self.tgt) {
            removeEventHandler(self.tgt, 'focus', popupFocus); 
            removeEventHandler(self.tgt, 'blur', popupBlur); 
            removeEventHandler(self.tgt, 'keydown', popupKeyDown); 
            }
         self.tgt = targetelement; 
         var dto = self.tgt.dateObj, pdateArr = new Array; 
         if(dto) {
            if(self.tgt.value.length) {
               pdateArr[0] = dto; 
               }
            self.goToMonth(dto.getFullYear(), dto.getMonth()); 
            }
         self.selectDates(pdateArr, true, true, true); 
         self.topOffset = self.tgt.offsetHeight; 
         self.leftOffset = 0; 
         self.updatePos(self.tgt); 
         addEventHandler(self.tgt, 'focus', popupFocus); 
         addEventHandler(self.tgt, 'blur', popupBlur); 
         addEventHandler(self.tgt, 'keydown', popupKeyDown); 
         if(focus !== false) {
            popupFocus(); 
            }
         }
      else {
         if(self.tgt) {
            self.tgt.removeChild(self.calendar); 
            }
         self.tgt = targetelement; 
         self.tgt.appendChild(self.calendar); 
         self.show(); 
         }
      }; 
   self.nextMonth = function() {
      var month = self.displayMonth; 
      var year = self.displayYear; 
      if(self.displayMonth < 11) {
         month++; 
         }
      else if(self.yearSelect.value < self.maxDate.getFullYear()) {
         month = 0; 
         year++; 
         }
      return self.goToMonth(year, month); 
      }; 
   self.prevMonth = function() {
      var month = self.displayMonth; 
      var year = self.displayYear; 
      if(self.displayMonth > 0) {
         month--; 
         }
      else {
         month = 11; 
         year--; 
         }
      return self.goToMonth(year, month); 
      }; 
   self.goToMonth = function(year, month) {
      var testdatemin = new Date(year, month, 31); 
      var testdatemax = new Date(year, month, 1); 
      if(testdatemin >= self.minDate && testdatemax <= self.maxDate) {
         self.monthSelect.value = self.displayMonth = month; 
         self.yearSelect.value = self.displayYear = year; 
         createCalCells(); 
         deleteCells(); 
         self.calendar.celltable.appendChild(self.calCells); 
         return true; 
         }
      else {
         alert(self.maxrange_caption); 
         return false; 
         }
      }; 
   self.updatePos = function(target) {
      if(self.mode == 'popup') {
         self.calendar.style.top = getTop(target) + self.topOffset + 'px'; 
         self.calendar.style.left = getLeft(target) + self.leftOffset + 'px'; 
         }
      }; 
   self.show = function() {
      self.updatePos(self.tgt); 
      self.calendar.style.display = 'block'; 
      self.visible = true; 
      }; 
   self.hide = function() {
      self.calendar.style.display = 'none'; 
      self.visible = false; 
      }; 
   self.toggle = function() {
      self.visible ? self.hide() : self.show(); 
      }; 
   self.addDates = function(dates, redraw) {
      for(var i = 0; i < dates.length; i++) {
         if(self.dateInArray(self.dates, dates[i]) == - 1) {
            self.dates[self.dates.length] = dates[i]; 
            }
         }
      updateSelectedDates(); 
      if(redraw != false) {
         self.reDraw(); 
         }
      }; 
   self.removeDates = function(dates, redraw) {
      var idx; 
      for(var i = 0; i < dates.length; i++) {
         idx = self.dateInArray(self.dates, dates[i]); 
         if(idx !=- 1) {
            self.dates.splice(idx, 1); 
            }
         }
      updateSelectedDates(); 
      if(redraw != false) {
         self.reDraw(); 
         }
      }; 
   self.selectDates = function(inpdates, selectVal, redraw, removeothers) {
      var idx; 
      if(removeothers == true) {
         for(var i = 0; i < self.dates.length; i++) {
            self.dates[i].selected = false; 
            }
         }
      for(var i = 0; i < inpdates.length; i++) {
         idx = self.dateInArray(self.dates, inpdates[i]); 
         if(selectVal == true) {
            inpdates[i].selected = true; 
            if(idx ==- 1) {
               self.dates[self.dates.length] = inpdates[i]; 
               }
            else {
               self.dates[idx].selected = true; 
               }
            }
         else {
            if(idx >- 1) {
               self.dates[idx].selected = inpdates[i].selected = false; 
               if(self.dates[idx].type == 'normal') {
                  self.dates.splice(idx, 1); 
                  }
               }
            }
         }
      updateSelectedDates(); 
      if(self.mode == 'popup' && self.selectedDates.length) {
         self.tgt.value = self.selectedDates[0].dateFormat(self.defDateFormat); 
         }
      if(redraw != false) {
         self.reDraw(); 
         }
      }; 
   self.sendForm = function(form, inputname) {
      var inpname = inputname || 'epochdates', f, inp; 
      f = (typeof(form) == 'string' ? document.getElementById(form) : form); 
      if(!f) {
         alert('ERROR:Invalid form input'); 
         return false; 
         }
         var x = 0;
      var arr = Array();
      for(var i = 0; i < self.dates.length; i++) {
		arr[x++] = encodeURIComponent(self.dates[i].dateFormat('Y-m-d'));
        }
         document.getElementById('selectdates').value = arr.join(",");
      return true; 
      }; 
   self.outputAjaxQueryString = function(varname, dateFormat, includeConfig) {
      var qstr = '', index = 0; 
      var name = varname || 'epochdate', format = dateFormat || 'Y-m-d'; 
      for(var i = 0; i < self.dates.length; i++) {
         if(self.dates[i].selected == true) {
            qstr += name + '[' + (index++) + ']=' + encodeURIComponent(self.dates[i].dateFormat(format)) + (self.dates[i + 1] ? '&':''); 
            }
         }
      if(includeConfig === true) {
         qstr += '&' + self.name + '_displayyearinitial=' + self.displayYearInitial; 
         qstr += '&' + self.name + '_displaymonthinitial=' + (self.displayMonthInitial + 1); 
         qstr += '&' + self.name + '_displayyear=' + self.displayYear; 
         qstr += '&' + self.name + '_displaymonth=' + (self.displayMonth + 1); 
         qstr += '&' + self.name + '_mindate=' + encodeURIComponent(self.minDate.dateFormat(format)); 
         qstr += '&' + self.name + '_maxdate=' + encodeURIComponent(self.maxDate.dateFormat(format)); 
         }
      return qstr; 
      }; 
   self.importXML = function(xmldata) {
      processXML(xmldata, false); 
      self.goToMonth(self.displayYear, self.displayMonth); 
      }; 
   self.exportXML = function() {
      var dt, selected; 
      var xml = '<?xml version="1.0" encoding="UTF-8"?>\n<importdata>\n'; 
      xml += ' <configs>\n <statecfg>\n'; 
      xml += ' <displayyearinitial>' + self.displayYearInitial + '</displayyearinitial>\n'; 
      xml += ' <displaymonthinitial>' + (self.displayMonthInitial + 1) + '</displaymonthinitial>\n'; 
      xml += ' <displayyear>' + self.displayYear + '</displayyear>\n'; 
      xml += ' <displaymonth>' + (self.displayMonth + 1) + '</displaymonth>\n'; 
      xml += ' <mindate>' + self.minDate.dateFormat('Y-m-d') + '<mindate>\n'; 
      xml += ' <maxdate>' + self.maxDate.dateFormat('Y-m-d') + '<maxdate>\n'; 
      xml += ' </statecfg>\n </configs>\n'; 
      xml += ' <datesadd>\n'; 
      for(var i = 0; i < self.dates.length; i++) {
         dt = self.dates[i]; 
         selected = (dt.selected ? 'yes':(dt.canSelect ? 'no':'disabled')); 
         xml += ' <date value="' + dt.dateFormat('Y-m-d') + (dt.type.length ? '" type="' + dt.type + '"':'') + (dt.title ? ' title="' + dt.title + '"':'') + ' selected="' + selected + '">' + (dt.cellHTML ? '<![CDATA[' + dt.cellHTML + ']]>':'') + '</date>\n'; 
         }
      xml += ' </datesadd>\n'; 
      xml += '</importdata>\n'; 
      return xml; 
      }; 
   self.resetSelections = function(retMonth) {
      var dateArray = new Array(); 
      var dt = self.dates; 
      for(var i = 0; i < dt.length; i++) {
         if(dt[i].selected) {
            dateArray[dateArray.length] = dt[i]; 
            }
         }
      self.selectDates(dateArray, false, false); 
      self.rows = new Array(false, false, false, false, false, false, false); 
      self.cols = new Array(false, false, false, false, false, false, false); 
      if(self.mode == 'popup') {
         self.tgt.value = ''; 
         self.hide(); 
         }
      retMonth == true ? self.goToMonth(self.displayYearInitial, self.displayMonthInitial) : self.reDraw(); 
      }; 
   self.reDraw = function(index) {
      self.state = 1; 
      var len = index ? index + 1 : self.cells.length; 
      for(var i = index || 0; i < len; i++) {
         setCellProperties(i); 
         }
      self.state = 2; 
      }; 
   self.getCellIndex = function(date) {
      for(var i = 0; i < self.cells.length; i++) {
         if(self.cells[i].date.getUeDay() == date.getUeDay()) {
            return i; 
            }
         }
      return - 1; 
      }; 
   self.versionNumber = '2.0.0'; 
   self.state = 0; 
   self.curDate = new Date(); 
   self.dates = new Array(); 
   self.selectedDates = new Array(); 
   self.calendar; 
   self.calHeading; 
   self.calCells; 
   self.rows; 
   self.cols; 
   self.cells = new Array(); 
   self.monthSelect; 
   self.yearSelect; 
   self.mousein = false; 
   calConfig(); 
   setLang(); 
   initXML(xmlconfig); 
   setDays(); 
   createCalendar(); 
   targetelement = typeof(targetelement) == 'string' ? document.getElementById(targetelement) : targetelement; 
   setMode(targetelement); 
   self.state = 2; 
   self.visible ? self.show() : self.hide(); 
   }
function CalHeading(owner, tableCell, dayOfWeek) {
   function DayHeadingonclick() {
      var sdates = owner.dates; 
      var cells = owner.cells; 
      var dateArray = new Array(); 
      owner.cols[dayOfWeek] =!owner.cols[dayOfWeek]; 
      for(var i = 0; i < cells.length; i++) {
         if(cells[i].dayOfWeek == dayOfWeek && cells[i].date.canSelect && (!owner.selCurMonthOnly || cells[i].date.getMonth() == owner.displayMonth && cells[i].date.getFullYear() == owner.displayYear)) {
            dateArray[dateArray.length] = cells[i].date; 
            }
         }
      owner.selectDates(dateArray, owner.cols[dayOfWeek], true); 
      }
   var self = this; 
   self.dayOfWeek = dayOfWeek; 
   addEventHandler(tableCell, 'mouseup', DayHeadingonclick); 
   }
function WeekHeading(owner, tableCell, week, tableRow) {
   function weekHeadingonclick() {
      var cells = owner.cells; 
      var sdates = owner.dates; 
      var dateArray = new Array(); 
      owner.rows[tableRow] =!owner.rows[tableRow]; 
      for(var i = 0; i < cells.length; i++) {
         if(cells[i].tableRow == tableRow && cells[i].date.canSelect && (!owner.selCurMonthOnly || cells[i].date.getMonth() == owner.displayMonth && cells[i].date.getFullYear() == owner.displayYear)) {
            dateArray[dateArray.length] = cells[i].date; 
            }
         }
      owner.selectDates(dateArray, owner.rows[tableRow], true); 
      }
   var self = this; 
   self.week = week; 
   tableCell.setAttribute('class', 'wkhead'); 
   tableCell.setAttribute('className', 'wkhead'); 
   addEventHandler(tableCell, 'mouseup', weekHeadingonclick); 
   }
function CalCell(owner, tableCell, dateObj, row, week) {
   var self = this; 
   function calCellonclick() {
      if(self.date.canSelect) {
         if(owner.selectMultiple == true) {
            owner.selectDates(new Array(self.date), !self.date.selected, false); 
            self.setClass(); 
            }
         else {
            owner.selectDates(new Array(self.date), true, false, true); 
            if(owner.mode == 'popup') {
               owner.tgt.dateObj = new Date(self.date); 
               owner.hide(); 
               }
            owner.reDraw(); 
            }
         }
      }
   function calCellonmouseover() {
      if(self.date.canSelect) {
         tableCell.setAttribute('class', self.cellClass + ' hover'); 
         tableCell.setAttribute('className', self.cellClass + ' hover'); 
         }
      }
   function calCellonmouseout() {
      self.setClass(); 
      }
   self.setClass = function() {
      if(self.date.canSelect !== false) {
         if(self.date.selected) {
            self.cellClass = 'cell_selected'; 
            }
         else if(owner.displayMonth != self.date.getMonth()) {
            self.cellClass = 'notmnth'; 
            }
         else if(self.date.type == 'holiday') {
            self.cellClass = 'hlday'; 
            }
         else if(self.dayOfWeek > 0 && self.dayOfWeek < 6) {
            self.cellClass = 'wkday'; 
            }
         else {
            self.cellClass = 'wkend'; 
            }
         }
      else {
         self.cellClass = 'noselect'; 
         }
      if(self.date.getUeDay() == owner.curDate.getUeDay()) {
         self.cellClass = self.cellClass + ' curdate'; 
         }
      tableCell.setAttribute('class', self.cellClass); 
      tableCell.setAttribute('className', self.cellClass); 
      }; 
   self.setURL = function(href, type) {
      if(href) {
         if(type == 'js') {
            addEventHandler(self.tableCell, 'mousedown', function() {
               window.location.href = href; }
            ); 
            }
         else {
            var url = document.createElement('a'); 
            url.setAttribute('href', href); 
            url.appendChild(document.createTextNode(self.date.getDate())); 
            self.tableCell.replaceChild(url, self.tableCell.firstChild); 
            }
         }
      }; 
   self.setTitle = function(titleStr) {
      if(titleStr && titleStr.length > 0) {
         self.title = titleStr; 
         self.tableCell.setAttribute('title', titleStr); 
         }
      }; 
   self.setHTML = function(html) {
      if(html && html.length > 0) {
         if(self.tableCell.childNodes[1]) {
            self.tableCell.childNodes[1].innerHTML = html; 
            }
         else {
            var htmlCont = document.createElement('div'); 
            htmlCont.innerHTML = html; 
            self.tableCell.appendChild(htmlCont); 
            }
         }
      }; 
   self.cellClass; 
   self.tableRow = row; 
   self.tableCell = tableCell; 
   self.date = new Date(dateObj); 
   self.date.canSelect = true; 
   self.date.type = 'normal'; 
   self.date.selected = false; 
   self.date.cellHTML = ''; 
   self.dayOfWeek = self.date.getDay(); 
   self.week = week; 
   addEventHandler(tableCell, 'click', calCellonclick); 
   addEventHandler(tableCell, 'mouseover', calCellonmouseover); 
   addEventHandler(tableCell, 'mouseout', calCellonmouseout); 
   self.setClass(); 
   }
Date.prototype.getDayOfYear = function() {
   return parseInt((this.getTime() - new Date(this.getFullYear(), 0, 1).getTime()) / 86400000 + 1); 
   }; 
Date.prototype.getWeek = function(dowOffset) {
   dowOffset = typeof(dowOffset) == 'int' ? dowOffset : 0; 
   var newYear = new Date(this.getFullYear(), 0, 1); 
   var day = newYear.getDay() - dowOffset; 
   day = (day >= 0 ? day : day + 7); 
   var weeknum, daynum = Math.floor((this.getTime() - newYear.getTime() - (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1; 
   if(day < 4) {
      weeknum = Math.floor((daynum + day - 1) / 7) + 1; 
      if(weeknum > 52) {
         nYear = new Date(this.getFullYear() + 1, 0, 1); 
         nday = nYear.getDay() - dowOffset; 
         nday = nday >= 0 ? nday : nday + 7; 
         weeknum = nday < 4 ? 1 : 53; 
         }
      }
   else {
      weeknum = Math.floor((daynum + day - 1) / 7); 
      }
   return weeknum; 
   }; 
Date.prototype.getUeDay = function() {
   return parseInt(Math.floor((this.getTime() - this.getTimezoneOffset() * 60000) / 86400000)); 
   }; 
Date.prototype.dateFormat = function(format) {
   if(!format) {
      format = 'd.m.Y'; 
      }
   LZ = function(x) {
      return(x < 0 || x > 9 ? '':'0') + x}; 
   var MONTH_NAMES = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'); 
   var DAY_NAMES = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'); 
   var result = ""; 
   var i_format = 0; 
   var c = ""; 
   var token = ""; 
   var y = this.getFullYear().toString(); 
   var M = this.getMonth() + 1; 
   var d = this.getDate(); 
   var E = this.getDay(); 
   var H = this.getHours(); 
   var m = this.getMinutes(); 
   var s = this.getSeconds(); 
   value = {
      Y : y.toString(), y : y.substring(2), n : M, m : LZ(M), F : MONTH_NAMES[M - 1], M : MONTH_NAMES[M + 11], j : d, d : LZ(d), D : DAY_NAMES[E + 7], l : DAY_NAMES[E], G : H, H : LZ(H)}; 
   if(H == 0) {
      value['g'] = 12; 
      }
   else if(H > 12) {
      value['g'] = H - 12; 
      }
   else {
      value['g'] = H; 
      }
   value['h'] = LZ(value['g']); 
   if(H > 11) {
      value['a'] = 'pm'; 
      value['A'] = 'PM'; 
      }
   else {
      value['a'] = 'am'; 
      value['A'] = 'AM'; 
      }
   value['i'] = LZ(m); 
   value['s'] = LZ(s); 
   while(i_format < format.length) {
      c = format.charAt(i_format); 
      token = ""; 
      while((format.charAt(i_format) == c) && (i_format < format.length)) {
         token += format.charAt(i_format++); 
         }
      if(value[token] != null) {
         result = result + value[token]; 
         }
      else {
         result = result + token; 
         }
      }
   return result; 
   }; 
function addEventHandler(element, type, func) {
   if(element.addEventListener) {
      element.addEventListener(type, func, false); 
      }
   else if(element.attachEvent) {
      element.attachEvent('on' + type, func); 
      }
   }
function removeEventHandler(element, type, func) {
   if(element.removeEventListener) {
      element.removeEventListener(type, func, false); 
      }
   else if(element.attachEvent) {
      element.detachEvent('on' + type, func); 
      }
   }
function getTop(element) {
   var oNode = element; 
   var iTop = 0; 
   while(oNode.tagName != 'HTML') {
      iTop += oNode.offsetTop || 0; 
      if(oNode.offsetParent) {
         oNode = oNode.offsetParent; 
         }
      else {
         break; 
         }
      }
   return iTop; 
   }
function getLeft(element) {
   var oNode = element; 
   var iLeft = 0; 
   while(oNode.tagName != 'HTML') {
      iLeft += oNode.offsetLeft || 0; 
      if(oNode.offsetParent) {
         oNode = oNode.offsetParent; 
         }
      else {
         break; 
         }
      }
   return iLeft; 
   }

  var K0 = window, F1 = document;
    var x09 = "mlddm";
    var h03 = new Array;

    function mlddminit() {
        var Cc34 = F1.getElementsByTagName("ul");
        var x0D = 0;
        for (var i = 0; i < Cc34.length; i++) {
            if (Cc34[i].className == x09) {
                Cc34[i].style.visibility = "visible";
                var _HG = Cc34[i];
                var tt = _HG.getAttribute("params");
                h03[x0D] = new sd4(_HG, x0D, tt);
                x0D++;
            }
        }
    }


    function sd4(_HG, _HG_n, ZZ) 
    {
        var hwDD = _HG;
        var __HG_num = _HG_n;
        var _me = this;
        var Kno5 = new Array;
        this.o0o = new Array(6);
        this.o0o[0] = new Array;
        this.o0o[1] = new Array;
        this.o0o[2] = new Array;
        this.o0o[3] = new Array;
        this.o0o[4] = new Array;
        this.o0o[5] = new Array;
        var _PO = null;
        var _GGy = true;
        var YgD = null;
        var Xbb = 0;
        var TTh = 0;
        var KL78 = 500;
        var jjK = "none";
        var Wee5 = 300;
        var _io7 = "h";
        var _uuY;
        if (ZZ) {
            _uuY = ZZ.split(",");
            if (_uuY[0]) {
                Xbb = _uuY[0] * 1;
            }
            if (_uuY[1]) {
                TTh = _uuY[1] * 1;
            }
            if (_uuY[2]) {
                KL78 = _uuY[2] * 1;
            }
            if (_uuY[3]) {
                jjK = _uuY[3];
            }
            if (_uuY[4]) {
                Wee5 = _uuY[4] * 1;
            }
            if (_uuY[5]) {
                _io7 = _uuY[5];
            }
            if (!Wee5) {
                Wee5 = 1000;
            }
        }

        function ee45(num, R67, R78, w345) {
            var jjj8 = Math.round(1000 / w345);
            var ff57 = 0;
            if (R67 > R78) {
                for (i = R67; i >= R78; i = i - 4) {
                    setTimeout("nnnng(" + __HG_num + "," + num + "," + i + ")", ff57 * jjj8);
                    ff57++;
                }
            } else if (R67 < R78) {
                for (i = R67; i <= R78; i = i + 4) {
                    setTimeout("nnnng(" + __HG_num + "," + num + "," + i + ")", ff57 * jjj8);
                    ff57++;
                }
            }
        }


        function rtf3(num, verc, w345) {
            var jjj8 = Math.round(1000 / w345);
            var ff57 = 0;
            if (_io7 == "h") {
                _ori = 0;
            } else {
                _ori = 1;
            }
            if (verc == "show") {
                for (i = 0; i <= 100; i = i + 2) {
                    setTimeout("NN234(" + __HG_num + "," + num + "," + i + "," + _ori + ")", ff57 * jjj8);
                    ff57++;
                }
            } else if (verc == "hide") {
                for (i = 100; i >= 0; i = i - 2) {
                    setTimeout("NN234(" + __HG_num + "," + num + "," + i + "," + _ori + ")", ff57 * jjj8);
                    ff57++;
                }
            }
        }


        function indexof33(FLCL7) {
            var strait12 = 0;
            var node7 = FLCL7;
            while (node7.className != x09) {
                if (node7.tagName == "UL") {
                    strait12++;
                }
                node7 = node7.parentNode;
            }
            return strait12;
        }


        function setwdth88(FLCL7) {
            var mix0;
            var maxx = FLCL7;
            var x0D = 0;
            while (maxx.className != x09) {
                if (maxx.tagName == "LI") {
                    x0D++;
                    mix0 = maxx;
                }
                maxx = maxx.parentNode;
            }
            return mix0;
        }


        function mix0n(FLCL7) {
            if (indexof33(FLCL7) != 1) {
                return -1;
            }
            var mix0 = setwdth88(FLCL7);
            if (mix0) {
                mix0 = mix0.getElementsByTagName("a")[0];
                mix0.id = "buttonhover";
            }
        }


        function sakura(FLCL7) {
            if (indexof33(FLCL7) != 1) {
                return -1;
            }
            var mix0 = setwdth88(FLCL7);
            if (mix0) {
                mix0 = mix0.getElementsByTagName("a")[0];
                mix0.id = "buttonnohover";
            }
        }


        function sasuke(x0D) {
            if (!_me.o0o[1][x0D]) {
                if (jjK == "fade") {
                    ee45(x0D, 0, 100, Wee5);
                } else if (jjK == "slide") {
                    rtf3(x0D, "show", Wee5);
                } else {
                    _me.o0o[0][x0D].style.visibility = "visible";
                }
                mix0n(_me.o0o[0][x0D]);
                _me.o0o[1][x0D] = true;
            }
        }


        function naruto(x0D) {
            if (_me.o0o[1][x0D]) {
                if (jjK == "fade") {
                    ee45(x0D, 100, 0, Wee5);
                } else if (jjK == "slide") {
                    rtf3(x0D, "hide", Wee5);
                } else {
                    _me.o0o[0][x0D].style.visibility = "hidden";
                }
                sakura(_me.o0o[0][x0D]);
                _me.o0o[1][x0D] = false;
            }
        }


        function velo() {
            for (var i = 0; i < _me.o0o[0].length; i++) {
                naruto(i);
            }
        }


        function hoka() {
            _PO = K0.setTimeout(velo, KL78);
        }


        function outM() {
            if (_PO) {
                K0.clearTimeout(_PO);
                _PO = null;
            }
        }


        function glr0D(_HG) {
            for (var i = 0; i < _me.o0o[0].length; i++) {
                if (_me.o0o[0][i] == _HG) {
                    return i;
                }
            }
            return -1;
        }
        this.pmanual = function () {velo();};
        this.eve = function () 
        {
        	if (_GGy) 
        	{
        		_GGy = false;
        		outM();
        		
        		var li0n = this;
        		var FLCL7 = li0n.getElementsByTagName("ul")[0];
        		var ind = glr0D(FLCL7);
        		
        		if (ind >= 0) 
        		{
        			sasuke(ind);
        		}
        		
        		var openo0o = new Array;
        		openo0o[0] = li0n.getElementsByTagName("ul")[0];
        		
        		if (!openo0o[0]) 
        		{
        			openo0o[0] = 0;
        		}
        		
        		var maxx = li0n.parentNode;
        		var num = 0;
        		
        		while (maxx.className != x09) 
        		{
        			if (maxx.tagName == "UL") 
        			{
        				num++;
        				openo0o[num] = maxx;
        			}
        			
        			maxx = maxx.parentNode;
        		}
        			var lrth = new Array(_me.o0o[0].length);
        			
        			for (var i = 0; i < lrth.length; i++) 
        			{
        				lrth[i] = false;
        			}
        			for (var i = 0; i < openo0o.length; i++) 
        			{
        				lrth[glr0D(openo0o[i])] = true;
        			}
        			for (var i = 0; i < lrth.length; i++) 
        			{
        				if (!lrth[i] && YgD != openo0o[0]) 
        				{
        					naruto(i);
        				}
        			}
        			
        			YgD = openo0o[1];
        	}
        };
        this.eve88 = function () {_GGy = true;};
        this.alleve = function () {hoka();};
        this.maxval = function () {outM();};
        var some3 = hwDD.getElementsByTagName("li")[0];
        var i = 0;
        while (some3) {
            Kno5[i] = some3;
            some3 = mod00(some3);
            i++;
        }
        var conti = 0;
        var min_l = hwDD.getElementsByTagName("li");
        for (var i = 0; i < min_l.length; i++) {
            var FLCL7 = min_l[i].getElementsByTagName("ul")[0];
            if (FLCL7) {
                this.o0o[0][conti] = FLCL7;
                this.o0o[1][conti] = false;
                conti++;
            }
            min_l[i].onmouseover = this.eve;
            min_l[i].onmouseout = this.eve88;
        }
        hwDD.onmouseout = this.alleve;
        hwDD.onmouseover = this.maxval;
        var sql55 = new Array;
        var rplpdd;
        for (var cactus = 0; cactus < this.o0o[0].length; cactus++) {
            sql55[cactus] = new Array;
            var some3 = this.o0o[0][cactus].getElementsByTagName("li")[0];
            var i = 0;
            while (some3) {
                sql55[cactus][i] = some3;
                some3 = mod00(some3);
                i++;
            }
            var miniHH = 0;
            var ffG;
            var longest;
            for (i = 0; i < sql55[cactus].length; i++) {
                ffG = sql55[cactus][i].getElementsByTagName("a")[0];
                if (ffG.offsetWidth >= miniHH) {
                    miniHH = ffG.offsetWidth;
                    longest = ffG;
                }
                if (ffG.offsetWidth >= miniHH) {
                    miniHH = ffG.offsetWidth;
                }
            }
            rplpdd = longest.offsetWidth - miniHH;
            this.o0o[3][cactus] = miniHH;
            this.o0o[4][cactus] = sql55[cactus].length * longest.offsetHeight;
            var _HG = this.o0o[0][cactus];
            var top = _HG.offsetTop;
            _HG.style.marginTop = "0px";
            var margintop = top - _HG.offsetTop;
            _HG.style.marginTop = margintop + "px";
            this.o0o[5][cactus] = margintop;
            this.o0o[2][cactus] = indexof33(this.o0o[0][cactus]);
        }
        for (x0D = 0; x0D < this.o0o[0].length; x0D++) {
            var strait12 = 0;
            var node7 = this.o0o[0][x0D];
            while (node7.className != x09) {
                if (node7.tagName == "UL") {
                    strait12++;
                }
                node7 = node7.parentNode;
            }
            if (_io7 == "h" && strait12 > 1 || _io7 == "v") {
                var parent_ul;
                var parent_a;
                var ffGr = this.o0o[0][x0D].parentNode;
                while (ffGr.tagName != "UL") {
                    if (ffGr.parentNode) {
                        ffGr = ffGr.parentNode;
                    } else {
                        return 1;
                    }
                }
                parent_ul = ffGr;
                var ffGr = this.o0o[0][x0D].parentNode;
                while (ffGr.tagName != "LI") {
                    if (ffGr.parentNode) {
                        ffGr = ffGr.parentNode;
                    } else {
                        return 1;
                    }
                }
                parent_a = ffGr.getElementsByTagName("a")[0];
                var a_tags = new Array;
                var i = 0;
                ffGr = parent_ul.getElementsByTagName("li")[0];
                while (ffGr) {
                    if (ffGr.getElementsByTagName("a")[0]) {
                        a_tags[i] = ffGr.getElementsByTagName("a")[0];
                    }
                    ffGr = mod00(ffGr);
                    if (ffGr) {
                        if (ffGr.tagName == "LI") {
                            i++;
                        }
                    }
                }
                var num = 0;
                for (var i = 0; i < a_tags.length; i++) {
                    if (a_tags[i] != parent_a) {
                        num++;
                    } else {
                        break;
                    }
                }
                var tag_a = parent_ul.getElementsByTagName("a")[0];
                var width = tag_a.offsetWidth;
                var height = tag_a.offsetHeight;
                this.o0o[0][x0D].style.left = width + Xbb + "px";
                this.o0o[0][x0D].style.top = height * num + TTh + "px";
            }
        }
    }


    function nnnng(_HG_num, lrnmm, ee45) {
        var _HGect = h03[_HG_num];
        var FLCL7 = _HGect.o0o[0][lrnmm];
        FLCL7.style.opacity = ee45 / 100;
        FLCL7.style.MozOpacity = ee45 / 100;
        FLCL7.style.KhtmlOpacity = ee45 / 100;
        FLCL7.style.filter = "alpha(opacity=" + ee45 + ")";
        if (ee45 > 98) {
            FLCL7.style.filter = "none";
        }
        if (ee45 > 0) {
            FLCL7.style.visibility = "visible";
        }
        if (ee45 <= 0) {
            FLCL7.style.visibility = "hidden";
        }
    }


    function NN234(_HG_num, lrnmm, pos, ori) {
        var _HGect = h03[_HG_num];
        var FLCL7 = _HGect.o0o[0][lrnmm];
        var strait12 = _HGect.o0o[2][lrnmm];
        var width = _HGect.o0o[3][lrnmm];
        var height = _HGect.o0o[4][lrnmm];
        var margintop = _HGect.o0o[5][lrnmm];
        if (strait12 == 1 && ori == 0) {
            var h = height - pos * height / 100;
            FLCL7.style.clip = "rect(" + h + "px 1000px 1000px 0px)";
            FLCL7.style.marginTop = - h + margintop + "px";
        } else {
            var w = width - pos * width / 100;
            FLCL7.style.clip = "rect(0px 1000px 1000px " + w + "px)";
            FLCL7.style.marginLeft = - w + "px";
        }
        if (pos <= 0) {
            FLCL7.style.visibility = "hidden";
        }
        if (pos > 0) {
            FLCL7.style.visibility = "visible";
        }
    }


    function is_all_ws(nod) {
        return !/[^\t\n\r]/.test(nod.data);
    }


    function is_ignorable(nod) {
        return nod.nodeType == 8 || nod.nodeType == 3 && is_all_ws(nod);
    }


    function mod00(sib) {
        while ((sib = sib.nextSibling)) {
            if (!is_ignorable(sib)) {
                return sib;
            }
        }
        return null;
    }

    _LOADERS = Array();

    function callAllLoaders() {
        var i, loaderFunc;
        for (i = 0; i < _LOADERS.length; i++) {
            loaderFunc = _LOADERS[i];
            if (loaderFunc != callAllLoaders) {
                loaderFunc();
            }
        }
    }


    function appendLoader(loaderFunc) {
        if (K0.onload && K0.onload != callAllLoaders) {
            _LOADERS[_LOADERS.length] = K0.onload;
        }
        K0.onload = callAllLoaders;
        _LOADERS[_LOADERS.length] = loaderFunc;
    }


    function close() {
        for (var i = 0; i < h03.length; i++) {
            h03[i].pmanual();
        }
    }

    F1.onclick = close;
//	last updated 23 June 2002
//	email :	fuushikaden@yahoo.com

var	fixedX = -1			// x position (-1 if to appear below control)
var	fixedY = -1			// y position (-1 if to appear below control)
var startAt = 1			// 0 - sunday ; 1 - monday
var showWeekNumber = 1	// 0 - don't show; 1 - show
var showToday = 1		// 0 - don't show; 1 - show
var imgDir = "/cal-image/"

var gotoString = "Go To Current Month"
var todayString = "Today is"
var weekString = "Wk"
var scrollLeftMessage = "Click to scroll to previous month. Hold mouse button to scroll automatically."
var scrollRightMessage = "Click to scroll to next month. Hold mouse button to scroll automatically."
var selectMonthMessage = "Click to select a month."
var selectYearMessage = "Click to select a year."
var selectDateMessage = "Select [date] as date." // do not replace [date], it will be replaced by date.

var	crossobj, crossMonthObj, crossYearObj, monthSelected, yearSelected, dateSelected, omonthSelected, oyearSelected, odateSelected, monthConstructed, yearConstructed, intervalID1, intervalID2, timeoutID1, timeoutID2, ctlToPlaceValue, ctlNow, dateFormat, nStartingYear

var	bPageLoaded=false
var	ie=document.all
var	dom=document.getElementById

var	ns4=document.layers
var	today =	new	Date()
var	dateNow	 = today.getDate()
var	monthNow = today.getMonth()
var	yearNow	 = today.getYear()
var	imgsrc = new Array("drop1.gif","drop2.gif","left1.gif","left2.gif","right1.gif","right2.gif")
var	img	= new Array()

var bShow = false;

/* hides <select> and <applet> objects (for IE only) */
function hideElement( elmID, overDiv )
{
if( ie )
{
for( i = 0; i < document.all.tags( elmID ).length; i++ )
{
obj = document.all.tags( elmID )[i];
if( !obj || !obj.offsetParent )
{
continue;
}

// Find the element's offsetTop and offsetLeft relative to the BODY tag.
objLeft   = obj.offsetLeft;
objTop    = obj.offsetTop;
objParent = obj.offsetParent;

while( objParent.tagName.toUpperCase() != "BODY" )
{
objLeft  += objParent.offsetLeft;
objTop   += objParent.offsetTop;
objParent = objParent.offsetParent;
}

objHeight = obj.offsetHeight;
objWidth = obj.offsetWidth;

if(( overDiv.offsetLeft + overDiv.offsetWidth ) <= objLeft );
else if(( overDiv.offsetTop + overDiv.offsetHeight ) <= objTop );
else if( overDiv.offsetTop >= ( objTop + objHeight ));
else if( overDiv.offsetLeft >= ( objLeft + objWidth ));
else
{
obj.style.visibility = "hidden";
}
}
}
}

/*
* unhides <select> and <applet> objects (for IE only)
*/
function showElement( elmID )
{
if( ie )
{
for( i = 0; i < document.all.tags( elmID ).length; i++ )
{
obj = document.all.tags( elmID )[i];

if( !obj || !obj.offsetParent )
{
continue;
}

obj.style.visibility = "";
}
}
}

function HolidayRec (d, m, y, desc)
{
this.d = d
this.m = m
this.y = y
this.desc = desc
}

var HolidaysCounter = 0
var Holidays = new Array()

function addHoliday (d, m, y, desc)
{
Holidays[HolidaysCounter++] = new HolidayRec ( d, m, y, desc )
}

if (dom)
{
for	(i=0;i<imgsrc.length;i++)
{
img[i] = new Image
img[i].src = imgDir + imgsrc[i]
}
document.write ("<div onclick='bShow=true' id='calendar'	style='z-index:+999;position:absolute;visibility:hidden;'><table	width="+((showWeekNumber==1)?250:220)+" style='font-family:arial;font-size:11px;border-width:1;border-style:solid;border-color:#a0a0a0;font-family:arial; font-size:11px}' bgcolor='#ffffff'><tr bgcolor='#0000aa'><td><table width='"+((showWeekNumber==1)?248:218)+"'><tr><td style='padding:2px;font-family:arial; font-size:11px;'><font color='#ffffff'><B><span id='caption'></span></B></font></td><td align=right><a style='cursor:hand' onclick='javascript:hideCalendar()'><IMG SRC='"+imgDir+"close.gif' WIDTH='15' HEIGHT='13' BORDER='0' ALT='Close the Calendar'></a></td></tr></table></td></tr><tr><td style='padding:5px' bgcolor=#ffffff><span id='content'></span></td></tr>")

if (showToday==1)
{
document.write ("<tr bgcolor=#f0f0f0><td style='padding:5px' align=center><span id='lblToday'></span></td></tr>")
}

document.write ("</table></div><div id='selectMonth' style='z-index:+999;position:absolute;visibility:hidden;'></div><div id='selectYear' style='z-index:+999;position:absolute;visibility:hidden;'></div>");
}

var	monthName =	new	Array("January","February","March","April","May","June","July","August","September","October","November","December")
if (startAt==0)
{
dayName = new Array	("S","M","T","W","T","F","S")
}
else
{
dayName = new Array	("M","T","W","T","F","S","S")
}
var	styleAnchor="text-decoration:none;color:black;"
var	styleLightBorder="border-style:solid;border-width:0px;border-color:#a0a0a0;"

function swapImage(srcImg, destImg){
if (ie)	{ document.getElementById(srcImg).setAttribute("src",imgDir + destImg) }
}

function init()	{
if (!ns4)
{
if (!ie) { yearNow += 1900	}

crossobj=(dom)?document.getElementById("calendar").style : ie? document.all.calendar : document.calendar
hideCalendar()

crossMonthObj=(dom)?document.getElementById("selectMonth").style : ie? document.all.selectMonth	: document.selectMonth

crossYearObj=(dom)?document.getElementById("selectYear").style : ie? document.all.selectYear : document.selectYear

monthConstructed=false;
yearConstructed=false;

if (showToday==1)
{
document.getElementById("lblToday").innerHTML =	todayString + " <a title='"+gotoString+"' style='"+styleAnchor+"' style='cursor:hand' onclick='javascript:monthSelected=monthNow;yearSelected=yearNow;constructCalendar();'>" + dateNow + " " + monthName[monthNow].substring(0,3)	+ "	" +	yearNow	+ "</a>"
}

sHTML1="<span id='spanLeft'	style='border-style:solid;border-width:0;border-color:#3366FF;cursor:pointer' onmouseover='swapImage(\"changeLeft\",\"left2.gif\");this.style.borderColor=\"#88AAFF\";' onclick='javascript:decMonth()' onmouseout='clearInterval(intervalID1);swapImage(\"changeLeft\",\"left1.gif\");this.style.borderColor=\"#3366FF\";' onmousedown='clearTimeout(timeoutID1);timeoutID1=setTimeout(\"StartDecMonth()\",500)'	onmouseup='clearTimeout(timeoutID1);clearInterval(intervalID1)'>&nbsp<IMG id='changeLeft' SRC='"+imgDir+"left1.gif' width=10 height=11 BORDER=0>&nbsp</span>&nbsp;"
sHTML1+="<span id='spanRight' style='border-style:solid;border-width:0;border-color:#3366FF;cursor:pointer'	onmouseover='swapImage(\"changeRight\",\"right2.gif\");this.style.borderColor=\"#88AAFF\";' onmouseout='clearInterval(intervalID1);swapImage(\"changeRight\",\"right1.gif\");this.style.borderColor=\"#3366FF\";' onclick='incMonth()' onmousedown='clearTimeout(timeoutID1);timeoutID1=setTimeout(\"StartIncMonth()\",500)'	onmouseup='clearTimeout(timeoutID1);clearInterval(intervalID1)'>&nbsp<IMG id='changeRight' SRC='"+imgDir+"right1.gif'	width=10 height=11 BORDER=0>&nbsp</span>&nbsp"
sHTML1+="<span id='spanMonth' style='border-style:solid;border-width:0;border-color:#3366FF;cursor:pointer'	onmouseover='swapImage(\"changeMonth\",\"drop2.gif\");this.style.borderColor=\"#88AAFF\";' onmouseout='swapImage(\"changeMonth\",\"drop1.gif\");this.style.borderColor=\"#3366FF\";' onclick='popUpMonth()'></span>&nbsp;"
sHTML1+="<span id='spanYear' style='border-style:solid;border-width:0;border-color:#3366FF;cursor:pointer' onmouseover='swapImage(\"changeYear\",\"drop2.gif\");this.style.borderColor=\"#88AAFF\";'	onmouseout='swapImage(\"changeYear\",\"drop1.gif\");this.style.borderColor=\"#3366FF\";'	onclick='popUpYear()'></span>&nbsp;"

document.getElementById("caption").innerHTML  =	sHTML1

bPageLoaded=true
}
}

function hideCalendar()	{
try
{
if(crossobj!="undefined")
	crossobj.visibility="hidden";
if (crossMonthObj != null){crossMonthObj.visibility="hidden"}
if (crossYearObj !=	null){crossYearObj.visibility="hidden"}

showElement( 'SELECT' );
showElement( 'APPLET' );
}
catch(err)
{

}
}

function padZero(num) {
return (num	< 10)? '0' + num : num ;
}

function constructDate(d,m,y)
{
sTmp = dateFormat
sTmp = sTmp.replace	("dd","<e>")
sTmp = sTmp.replace	("d","<d>")
sTmp = sTmp.replace	("<e>",padZero(d))
sTmp = sTmp.replace	("<d>",d)
sTmp = sTmp.replace	("mmm","<o>")
sTmp = sTmp.replace	("mm","<n>")
sTmp = sTmp.replace	("m","<m>")
sTmp = sTmp.replace	("<m>",m+1)
sTmp = sTmp.replace	("<n>",padZero(m+1))
sTmp = sTmp.replace	("<o>",monthName[m])
return sTmp.replace ("yyyy",y)
}

function closeCalendar() {
var	sTmp

hideCalendar();
ctlToPlaceValue.value =	constructDate(dateSelected,monthSelected,yearSelected)
ctlToPlaceValue.focus();
}

/*** Month Pulldown	***/

function StartDecMonth()
{
intervalID1=setInterval("decMonth()",80)
}

function StartIncMonth()
{
intervalID1=setInterval("incMonth()",80)
}

function incMonth () {
monthSelected++
if (monthSelected>11) {
monthSelected=0
yearSelected++
}
constructCalendar()
}

function decMonth () {
monthSelected--
if (monthSelected<0) {
monthSelected=11
yearSelected--
}
constructCalendar()
}

function constructMonth() {
popDownYear()
if (!monthConstructed) {
sHTML =	""
for	(i=0; i<12;	i++) {
sName =	monthName[i];
if (i==monthSelected){
sName =	"<B>" +	sName +	"</B>"
}
sHTML += "<tr><td id='m" + i + "' onmouseover='this.style.backgroundColor=\"#FFCC99\"' onmouseout='this.style.backgroundColor=\"\"' style='cursor:pointer' onclick='monthConstructed=false;monthSelected=" + i + ";constructCalendar();popDownMonth();event.cancelBubble=true'>&nbsp;" + sName + "&nbsp;</td></tr>"
}

document.getElementById("selectMonth").innerHTML = "<table width=70	style='font-family:arial; font-size:11px; border-width:1; border-style:solid; border-color:#a0a0a0;' bgcolor='#FFFFDD' cellspacing=0 onmouseover='clearTimeout(timeoutID1)'	onmouseout='clearTimeout(timeoutID1);timeoutID1=setTimeout(\"popDownMonth()\",100);event.cancelBubble=true'>" +	sHTML +	"</table>"

monthConstructed=true
}
}

function popUpMonth() {
constructMonth()
crossMonthObj.visibility = (dom||ie)? "visible"	: "show"
crossMonthObj.left = parseInt(crossobj.left) + 50
crossMonthObj.top =	parseInt(crossobj.top) + 26

hideElement( 'SELECT', document.getElementById("selectMonth") );
hideElement( 'APPLET', document.getElementById("selectMonth") );
}

function popDownMonth()	{
crossMonthObj.visibility= "hidden"
}

/*** Year Pulldown ***/

function incYear() {
for	(i=0; i<7; i++){
newYear	= (i+nStartingYear)+1
if (newYear==yearSelected)
{ txtYear =	"&nbsp;<B>"	+ newYear +	"</B>&nbsp;" }
else
{ txtYear =	"&nbsp;" + newYear + "&nbsp;" }
document.getElementById("y"+i).innerHTML = txtYear
}
nStartingYear ++;
bShow=true
}

function decYear() {
for	(i=0; i<7; i++){
newYear	= (i+nStartingYear)-1
if (newYear==yearSelected)
{ txtYear =	"&nbsp;<B>"	+ newYear +	"</B>&nbsp;" }
else
{ txtYear =	"&nbsp;" + newYear + "&nbsp;" }
document.getElementById("y"+i).innerHTML = txtYear
}
nStartingYear --;
bShow=true
}

function selectYear(nYear) {
yearSelected=parseInt(nYear+nStartingYear);
yearConstructed=false;
constructCalendar();
popDownYear();
}

function constructYear() {
popDownMonth()
sHTML =	""
if (!yearConstructed) {

sHTML =	"<tr><td align='center'	onmouseover='this.style.backgroundColor=\"#FFCC99\"' onmouseout='clearInterval(intervalID1);this.style.backgroundColor=\"\"' style='cursor:pointer'	onmousedown='clearInterval(intervalID1);intervalID1=setInterval(\"decYear()\",30)' onmouseup='clearInterval(intervalID1)'>-</td></tr>"

j =	0
nStartingYear =	yearSelected-3
for	(i=(yearSelected-3); i<=(yearSelected+3); i++) {
sName =	i;
if (i==yearSelected){
sName =	"<B>" +	sName +	"</B>"
}

sHTML += "<tr><td id='y" + j + "' onmouseover='this.style.backgroundColor=\"#FFCC99\"' onmouseout='this.style.backgroundColor=\"\"' style='cursor:pointer' onclick='selectYear("+j+");event.cancelBubble=true'>&nbsp;" + sName + "&nbsp;</td></tr>"
j ++;
}

sHTML += "<tr><td align='center' onmouseover='this.style.backgroundColor=\"#FFCC99\"' onmouseout='clearInterval(intervalID2);this.style.backgroundColor=\"\"' style='cursor:pointer' onmousedown='clearInterval(intervalID2);intervalID2=setInterval(\"incYear()\",30)'	onmouseup='clearInterval(intervalID2)'>+</td></tr>"

document.getElementById("selectYear").innerHTML	= "<table width=44 style='font-family:arial; font-size:11px; border-width:1; border-style:solid; border-color:#a0a0a0;'	bgcolor='#FFFFDD' onmouseover='clearTimeout(timeoutID2)' onmouseout='clearTimeout(timeoutID2);timeoutID2=setTimeout(\"popDownYear()\",100)' cellspacing=0>"	+ sHTML	+ "</table>"

yearConstructed	= true
}
}

function popDownYear() {
clearInterval(intervalID1)
clearTimeout(timeoutID1)
clearInterval(intervalID2)
clearTimeout(timeoutID2)
crossYearObj.visibility= "hidden"
}

function popUpYear() {
var	leftOffset

constructYear()
crossYearObj.visibility	= (dom||ie)? "visible" : "show"
leftOffset = parseInt(crossobj.left) + document.getElementById("spanYear").offsetLeft
if (ie)
{
leftOffset += 6
}
crossYearObj.left =	leftOffset
crossYearObj.top = parseInt(crossobj.top) +	26
}

/*** calendar ***/
function WeekNbr(n) {
// Algorithm used:
// From Klaus Tondering's Calendar document (The Authority/Guru)
// hhtp://www.tondering.dk/claus/calendar.html
// a = (14-month) / 12
// y = year + 4800 - a
// m = month + 12a - 3
// J = day + (153m + 2) / 5 + 365y + y / 4 - y / 100 + y / 400 - 32045
// d4 = (J + 31741 - (J mod 7)) mod 146097 mod 36524 mod 1461
// L = d4 / 1460
// d1 = ((d4 - L) mod 365) + L
// WeekNumber = d1 / 7 + 1

year = n.getFullYear();
month = n.getMonth() + 1;
if (startAt == 0) {
day = n.getDate() + 1;
}
else {
day = n.getDate();
}

a = Math.floor((14-month) / 12);
y = year + 4800 - a;
m = month + 12 * a - 3;
b = Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400);
J = day + Math.floor((153 * m + 2) / 5) + 365 * y + b - 32045;
d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
L = Math.floor(d4 / 1460);
d1 = ((d4 - L) % 365) + L;
week = Math.floor(d1/7) + 1;

return week;
}

function constructCalendar () {
var aNumDays = Array (31,0,31,30,31,30,31,31,30,31,30,31)

var dateMessage
var	startDate =	new	Date (yearSelected,monthSelected,1)
var endDate

if (monthSelected==1)
{
endDate	= new Date (yearSelected,monthSelected+1,1);
endDate	= new Date (endDate	- (24*60*60*1000));
numDaysInMonth = endDate.getDate()
}
else
{
numDaysInMonth = aNumDays[monthSelected];
}

datePointer	= 0
dayPointer = startDate.getDay() - startAt

if (dayPointer<0)
{
dayPointer = 6
}

sHTML =	"<table	 border=0 style='font-family:verdana;font-size:10px;'><tr>"

if (showWeekNumber==1)
{
sHTML += "<td width=27><b>" + weekString + "</b></td><td width=1 rowspan=7 bgcolor='#d0d0d0' style='padding:0px'><img src='"+imgDir+"divider.gif' width=1></td>"
}

for	(i=0; i<7; i++)	{
sHTML += "<td width='27' align='right'><B>"+ dayName[i]+"</B></td>"
}
sHTML +="</tr><tr>"

if (showWeekNumber==1)
{
sHTML += "<td align=right>" + WeekNbr(startDate) + "&nbsp;</td>"
}

for	( var i=1; i<=dayPointer;i++ )
{
sHTML += "<td>&nbsp;</td>"
}

for	( datePointer=1; datePointer<=numDaysInMonth; datePointer++ )
{
dayPointer++;
sHTML += "<td align=right>"
sStyle=styleAnchor
if ((datePointer==odateSelected) &&	(monthSelected==omonthSelected)	&& (yearSelected==oyearSelected))
{ sStyle+=styleLightBorder }

sHint = ""
for (k=0;k<HolidaysCounter;k++)
{
if ((parseInt(Holidays[k].d)==datePointer)&&(parseInt(Holidays[k].m)==(monthSelected+1)))
{
if ((parseInt(Holidays[k].y)==0)||((parseInt(Holidays[k].y)==yearSelected)&&(parseInt(Holidays[k].y)!=0)))
{
sStyle+="background-color:#FFDDDD;"
sHint+=sHint==""?Holidays[k].desc:"\n"+Holidays[k].desc
}
}
}

var regexp= /\"/g
sHint=sHint.replace(regexp,"&quot;")

dateMessage = ""

if ((datePointer==dateNow)&&(monthSelected==monthNow)&&(yearSelected==yearNow))
{ sHTML += "<b><a "+dateMessage+" title=\"" + sHint + "\" style='"+sStyle+"' style='cursor:hand' onclick='javascript:dateSelected="+datePointer+";closeCalendar();'><font color=#ff0000>&nbsp;" + datePointer + "</font>&nbsp;</a></b>"}
else if	(dayPointer % 7 == (startAt * -1)+1)
{ sHTML += "<a "+dateMessage+" title=\"" + sHint + "\" style='"+sStyle+"' style='cursor:hand' onclick='javascript:dateSelected="+datePointer + ";closeCalendar();'>&nbsp;<font color=#909090>" + datePointer + "</font>&nbsp;</a>" }
else
{ sHTML += "<a "+dateMessage+" title=\"" + sHint + "\" style='"+sStyle+"' style='cursor:hand' onclick='javascript:dateSelected="+datePointer + ";closeCalendar();'>&nbsp;" + datePointer + "&nbsp;</a>" }

sHTML += ""
if ((dayPointer+startAt) % 7 == startAt) {
sHTML += "</tr><tr>"
if ((showWeekNumber==1)&&(datePointer<numDaysInMonth))
{
sHTML += "<td align=right>" + (WeekNbr(new Date(yearSelected,monthSelected,datePointer+1))) + "&nbsp;</td>"
}
}
}

document.getElementById("content").innerHTML   = sHTML
document.getElementById("spanMonth").innerHTML = "&nbsp;" +	monthName[monthSelected] + "&nbsp;<IMG id='changeMonth' SRC='"+imgDir+"drop1.gif' WIDTH='12' HEIGHT='10' BORDER=0>"
document.getElementById("spanYear").innerHTML =	"&nbsp;" + yearSelected	+ "&nbsp;<IMG id='changeYear' SRC='"+imgDir+"drop1.gif' WIDTH='12' HEIGHT='10' BORDER=0>"
}

function popUpCalendar(ctl,	ctl2, format) {
var	leftpos=0
var	toppos=0

if (bPageLoaded)
{
if ( crossobj.visibility ==	"hidden" ) {
ctlToPlaceValue	= ctl2
dateFormat=format;

formatChar = " "
aFormat	= dateFormat.split(formatChar)
if (aFormat.length<3)
{
formatChar = "/"
aFormat	= dateFormat.split(formatChar)
if (aFormat.length<3)
{
formatChar = "."
aFormat	= dateFormat.split(formatChar)
if (aFormat.length<3)
{
formatChar = "-"
aFormat	= dateFormat.split(formatChar)
if (aFormat.length<3)
{
// invalid date	format
formatChar=""
}
}
}
}

tokensChanged =	0
if ( formatChar	!= "" )
{
// use user's date
aData =	ctl2.value.split(formatChar)

for	(i=0;i<3;i++)
{
if ((aFormat[i]=="d") || (aFormat[i]=="dd"))
{
dateSelected = parseInt(aData[i], 10)
tokensChanged ++
}
else if	((aFormat[i]=="m") || (aFormat[i]=="mm"))
{
monthSelected =	parseInt(aData[i], 10) - 1
tokensChanged ++
}
else if	(aFormat[i]=="yyyy")
{
yearSelected = parseInt(aData[i], 10)
tokensChanged ++
}
else if	(aFormat[i]=="mmm")
{
for	(j=0; j<12;	j++)
{
if (aData[i]==monthName[j])
{
monthSelected=j
tokensChanged ++
}
}
}
}
}

if ((tokensChanged!=3)||isNaN(dateSelected)||isNaN(monthSelected)||isNaN(yearSelected))
{
dateSelected = dateNow
monthSelected =	monthNow
yearSelected = yearNow
}

odateSelected=dateSelected
omonthSelected=monthSelected
oyearSelected=yearSelected

aTag = ctl
do {
aTag = aTag.offsetParent;
leftpos	+= aTag.offsetLeft;
toppos += aTag.offsetTop;
} while(aTag.tagName!="BODY");

var WinHeight,WinWidth,CalWidth,CalHeight
CalWidth=document.getElementById("calendar").offsetWidth;
CalHeight=document.getElementById("calendar").offsetHeight;
CalWidth=CalWidth<240?256:CalWidth;
CalHeight=CalHeight<155?166:CalHeight
WinWidth=document.body.clientWidth;
WinHeight=document.body.clientHeight;
if (toppos+CalHeight<WinHeight)
{
	crossobj.top = fixedY==-1 ?	ctl.offsetTop +	toppos + ctl.offsetHeight +	2 :	fixedY
}
else
{
	var TxtDateHeight=ctl.offsetHeight ;
	crossobj.top=toppos-CalHeight;
}
if (leftpos+CalWidth<WinWidth)
{	
	crossobj.left =	fixedX==-1 ? ctl.offsetLeft	+ leftpos :	fixedX
}
else
{
	var TxtDateWidth=ctl.offsetWidth ;
	crossobj.left=leftpos-(CalWidth-TxtDateWidth-30);
}
constructCalendar (1, monthSelected, yearSelected);
crossobj.visibility=(dom||ie)? "visible" : "show"
hideElement( 'SELECT', document.getElementById("calendar") );
hideElement( 'APPLET', document.getElementById("calendar") );
bShow = true;
}
else
{
hideCalendar()
if (ctlNow!=ctl) {popUpCalendar(ctl, ctl2, format)}
}
ctlNow = ctl
}
}

document.onkeypress = function hidecal1 () {
if (event.keyCode==27)
{
hideCalendar()
}
}
document.onclick = function hidecal2 () {
if (!bShow)
{
hideCalendar()
}
bShow = false
}

if(ie)
{
init()
}
else
{
window.onload=init
}
var xmlhttp = GetXmlHttpObject();
var group_status="0";
var div_id="";

function page_postlist(p){
	var dt=document.form_post;
	dt.page.value=p;
	dt.submit();
}
function page_resourcelist(p){
	var dt=document.form_resource;
	dt.page.value=p;
	dt.submit();
}
function page_form(p){
	var dt=document.form;
	dt.page.value=p;
	dt.submit();
}
function page_formdata(p){
	var dt=document.form_data;
	dt.page.value=p;
	dt.submit();
}
function page_event(p){
	
	var dt=document.form_event;
	dt.page.value=p;
	dt.submit();
}

function get_category(){
	var dt=document.resource_frm;
	var url="get_category.php?c_id=" + dt.c_id.value;
	xmlhttp.open("GET",url,"true");
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=category_value
}
function category_value(){
	if(xmlhttp.readyState==4 || xmlhttp.readyState=="complete"){
		var res = xmlhttp.responseText;
		document.getElementById('category_d').innerHTML=res;
	}
}
function get_resource(){
	var dt=document.resource_frm;
	var url="get_resource.php?folder_id=" + dt.folder_id.value;
	xmlhttp.open("GET",url,"true");
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=resource_value
}
function resource_value(){
	if(xmlhttp.readyState==4 || xmlhttp.readyState=="complete"){
		var res = xmlhttp.responseText;
		document.getElementById('resource_d').innerHTML=res;
	}
}


function cat_add(){
	var dt=document.resource_frm;
	var cnt=dt.c_id.length;
	var tr=1;
	var noption=dt.sc_id.length;
	for(i=0;i< cnt ;i++){
		if(dt.c_id[i].selected){
			if(dt.c_id[i].value>0){
				tr=0;
				for(j=0;j< noption ;j++){
					if(dt.sc_id.options[j].value==dt.c_id[i].value)
						tr=1;
				}
				if(tr==0){
					dt.sc_id.options[noption] = new Option(dt.c_id[i].text,dt.c_id[i].value);
					noption=noption+1;
				}
			}
		}
	}
}
function resource_add(){
	var dt=document.resource_frm;
	var cnt=dt.resource_id.length;
	var tr=1;
	var noption=dt.sresource_id.length;
	for(i=0;i< cnt ;i++){
		if(dt.resource_id[i].selected){
			if(dt.resource_id[i].value>0){
				tr=0;
				for(j=0;j< noption ;j++){
					if(dt.sresource_id.options[j].value==dt.resource_id[i].value)
						tr=1;
				}
				if(tr==0){
					dt.sresource_id.options[noption] = new Option(dt.resource_id[i].text,dt.resource_id[i].value);
					noption=noption+1;
				}
			}
		}
	}
}
function remove_category(){
	var dt=document.resource_frm;
	var cnt=dt.sc_id.length;
	for(i=0;i< cnt ;i++){
		if(dt.sc_id[i].selected){
			dt.sc_id.options.remove(i);
		}
	}
}
function remove_resource(){
	
	var dt=document.resource_frm;
	var cnt=dt.sresource_id.length;
	
	for(i=0;i< cnt ;i++){
		if(dt.sresource_id[i].selected){
			dt.sresource_id.options.remove(i);
			
		}
	}
}
function get_group(did,group_id){
	var url="get_group.php?did=" + did + "&group_id=" + group_id;
	var name="group" + did
	div_id=name;
	xmlhttp.open("GET",url,"true");
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=group_value
}
function group_value(){
	if(xmlhttp.readyState==4 || xmlhttp.readyState=="complete"){
		var res = xmlhttp.responseText;
		document.getElementById(div_id).innerHTML=res;
	}
}




function get_post(did,url){
	div_id=did;
	document.getElementById(div_id).innerHTML="<img src='/img/loading.gif' align='center'>";
	xmlhttp.open("GET",url,"true");
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=post_value
}
function post_value(){
	if(xmlhttp.readyState==4 || xmlhttp.readyState=="complete"){
		var res = xmlhttp.responseText;
		document.getElementById(div_id).innerHTML=res;
	}
}
function get_postbycategory(post_id,c_id){
	var url;
	document.getElementById("cpost").innerHTML="<img src='/img/loading.gif' align='center'>";
	url="get_postbycategory.php?c_id=" + c_id + "&post_id=" + post_id;
	
	xmlhttp.open("GET",url,"true");
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=postbycategory_value
}
function postbycategory_value(){
	if(xmlhttp.readyState==4 || xmlhttp.readyState=="complete"){
		var res = xmlhttp.responseText;
		document.getElementById("cpost").innerHTML=res;
	}
}




function group_show(gid,hid){
	if(group_status=="1"){
		group_status="0";
		document.getElementById(gid).style.display="none";
	}else{
		group_status="1";
		document.getElementById(gid).style.display="block";
	}
}

function get_membership(){
	var dt=document.frm;
	var number=dt.number.value;
	if(number.length >=6){
		url="get_member.php?number=" + number;
		xmlhttp.open("GET",url,"true");
		xmlhttp.send(null);
		xmlhttp.onreadystatechange=membership_value
	}else{
		dt.name.value="";
		dt.emailid.value="";
	}
}
function get_membership1(){
	var dt=document.frm;
	var number=dt.number.value;
	if(number.length >=6){
		url="get_member.php?sc=1&number=" + number;
		xmlhttp.open("GET",url,"true");
		xmlhttp.send(null);
		xmlhttp.onreadystatechange=membership_value
	}else{
		dt.name.value="";
		dt.emailid.value="";
	}
}
function membership_value(){
	var dt=document.frm;
	if(xmlhttp.readyState==4 || xmlhttp.readyState=="complete"){
		var res = xmlhttp.responseText;
		temp=res.split("[><]");
		dt.name.value=temp[0];
		dt.emailid.value=temp[1];
	}
}


function GetXmlHttpObject()
{ 
	var objXMLHttp=null
	if (window.XMLHttpRequest)
	{
		objXMLHttp=new XMLHttpRequest()
	}
	else if (window.ActiveXObject)
	{
		objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
	}
	return objXMLHttp
}

/* SpryTabbedPanels.js - Revision: Spry Preview Release 1.4 */

// Copyright (c) 2006. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

var Spry;
if (!Spry) Spry = {};
if (!Spry.Widget) Spry.Widget = {};

Spry.Widget.TabbedPanels = function(element, opts)
{
	this.element = this.getElement(element);
	this.defaultTab = 0; // Show the first panel by default.
	this.bindings = [];
	this.tabSelectedClass = "TabbedPanelsTabSelected";
	this.tabHoverClass = "TabbedPanelsTabHover";
	this.tabFocusedClass = "TabbedPanelsTabFocused";
	this.panelVisibleClass = "TabbedPanelsContentVisible";
	this.focusElement = null;
	this.hasFocus = false;
	this.currentTabIndex = 0;
	this.enableKeyboardNavigation = true;

	Spry.Widget.TabbedPanels.setOptions(this, opts);

	// If the defaultTab is expressed as a number/index, convert
	// it to an element.

	if (typeof (this.defaultTab) == "number")
	{
		if (this.defaultTab < 0)
			this.defaultTab = 0;
		else
		{
			var count = this.getTabbedPanelCount();
			if (this.defaultTab >= count)
				this.defaultTab = (count > 1) ? (count - 1) : 0;
		}

		this.defaultTab = this.getTabs()[this.defaultTab];
	}

	// The defaultTab property is supposed to be the tab element for the tab content
	// to show by default. The caller is allowed to pass in the element itself or the
	// element's id, so we need to convert the current value to an element if necessary.

	if (this.defaultTab)
		this.defaultTab = this.getElement(this.defaultTab);

	this.attachBehaviors();
};

Spry.Widget.TabbedPanels.prototype.getElement = function(ele)
{
	if (ele && typeof ele == "string")
		return document.getElementById(ele);
	return ele;
}

Spry.Widget.TabbedPanels.prototype.getElementChildren = function(element)
{
	var children = [];
	var child = element.firstChild;
	while (child)
	{
		if (child.nodeType == 1 /* Node.ELEMENT_NODE */)
			children.push(child);
		child = child.nextSibling;
	}
	return children;
};

Spry.Widget.TabbedPanels.prototype.addClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1))
		return;
	ele.className += (ele.className ? " " : "") + className;
};

Spry.Widget.TabbedPanels.prototype.removeClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1))
		return;
	ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

Spry.Widget.TabbedPanels.setOptions = function(obj, optionsObj, ignoreUndefinedProps)
{
	if (!optionsObj)
		return;
	for (var optionName in optionsObj)
	{
		if (ignoreUndefinedProps && optionsObj[optionName] == undefined)
			continue;
		obj[optionName] = optionsObj[optionName];
	}
};

Spry.Widget.TabbedPanels.prototype.getTabGroup = function()
{
	if (this.element)
	{
		var children = this.getElementChildren(this.element);
		if (children.length)
			return children[0];
	}
	return null;
};

Spry.Widget.TabbedPanels.prototype.getTabs = function()
{
	var tabs = [];
	var tg = this.getTabGroup();
	if (tg)
		tabs = this.getElementChildren(tg);
	return tabs;
};

Spry.Widget.TabbedPanels.prototype.getContentPanelGroup = function()
{
	if (this.element)
	{
		var children = this.getElementChildren(this.element);
		if (children.length > 1)
			return children[1];
	}
	return null;
};

Spry.Widget.TabbedPanels.prototype.getContentPanels = function()
{
	var panels = [];
	var pg = this.getContentPanelGroup();
	if (pg)
		panels = this.getElementChildren(pg);
	return panels;
};

Spry.Widget.TabbedPanels.prototype.getIndex = function(ele, arr)
{
	ele = this.getElement(ele);
	if (ele && arr && arr.length)
	{
		for (var i = 0; i < arr.length; i++)
		{
			if (ele == arr[i])
				return i;
		}
	}
	return -1;
};

Spry.Widget.TabbedPanels.prototype.getTabIndex = function(ele)
{
	var i = this.getIndex(ele, this.getTabs());
	if (i < 0)
		i = this.getIndex(ele, this.getContentPanels());
	return i;
};

Spry.Widget.TabbedPanels.prototype.getCurrentTabIndex = function()
{
	return this.currentTabIndex;
};

Spry.Widget.TabbedPanels.prototype.getTabbedPanelCount = function(ele)
{
	return Math.min(this.getTabs().length, this.getContentPanels().length);
};

Spry.Widget.TabbedPanels.addEventListener = function(element, eventType, handler, capture)
{
	try
	{
		if (element.addEventListener)
			element.addEventListener(eventType, handler, capture);
		else if (element.attachEvent)
			element.attachEvent("on" + eventType, handler);
	}
	catch (e) {}
};

Spry.Widget.TabbedPanels.prototype.onTabClick = function(e, tab)
{
	this.showPanel(tab);
};

Spry.Widget.TabbedPanels.prototype.onTabMouseOver = function(e, tab)
{
	this.addClassName(tab, this.tabHoverClass);
};

Spry.Widget.TabbedPanels.prototype.onTabMouseOut = function(e, tab)
{
	this.removeClassName(tab, this.tabHoverClass);
};

Spry.Widget.TabbedPanels.prototype.onTabFocus = function(e, tab)
{
	this.hasFocus = true;
	this.addClassName(this.element, this.tabFocusedClass);
};

Spry.Widget.TabbedPanels.prototype.onTabBlur = function(e, tab)
{
	this.hasFocus = false;
	this.removeClassName(this.element, this.tabFocusedClass);
};

Spry.Widget.TabbedPanels.ENTER_KEY = 13;
Spry.Widget.TabbedPanels.SPACE_KEY = 32;

Spry.Widget.TabbedPanels.prototype.onTabKeyDown = function(e, tab)
{
	var key = e.keyCode;
	if (!this.hasFocus || (key != Spry.Widget.TabbedPanels.ENTER_KEY && key != Spry.Widget.TabbedPanels.SPACE_KEY))
		return true;

	this.showPanel(tab);

	if (e.stopPropagation)
		e.stopPropagation();
	if (e.preventDefault)
		e.preventDefault();

	return false;
};

Spry.Widget.TabbedPanels.prototype.preorderTraversal = function(root, func)
{
	var stopTraversal = false;
	if (root)
	{
		stopTraversal = func(root);
		if (root.hasChildNodes())
		{
			var child = root.firstChild;
			while (!stopTraversal && child)
			{
				stopTraversal = this.preorderTraversal(child, func);
				try { child = child.nextSibling; } catch (e) { child = null; }
			}
		}
	}
	return stopTraversal;
};

Spry.Widget.TabbedPanels.prototype.addPanelEventListeners = function(tab, panel)
{
	var self = this;
	Spry.Widget.TabbedPanels.addEventListener(tab, "click", function(e) { return self.onTabClick(e, tab); }, false);
	Spry.Widget.TabbedPanels.addEventListener(tab, "mouseover", function(e) { return self.onTabMouseOver(e, tab); }, false);
	Spry.Widget.TabbedPanels.addEventListener(tab, "mouseout", function(e) { return self.onTabMouseOut(e, tab); }, false);

	if (this.enableKeyboardNavigation)
	{
		// XXX: IE doesn't allow the setting of tabindex dynamically. This means we can't
		// rely on adding the tabindex attribute if it is missing to enable keyboard navigation
		// by default.

		// Find the first element within the tab container that has a tabindex or the first
		// anchor tag.
		
		var tabIndexEle = null;
		var tabAnchorEle = null;

		this.preorderTraversal(tab, function(node) {
			if (node.nodeType == 1 /* NODE.ELEMENT_NODE */)
			{
				var tabIndexAttr = tab.attributes.getNamedItem("tabindex");
				if (tabIndexAttr)
				{
					tabIndexEle = node;
					return true;
				}
				if (!tabAnchorEle && node.nodeName.toLowerCase() == "a")
					tabAnchorEle = node;
			}
			return false;
		});

		if (tabIndexEle)
			this.focusElement = tabIndexEle;
		else if (tabAnchorEle)
			this.focusElement = tabAnchorEle;

		if (this.focusElement)
		{
			Spry.Widget.TabbedPanels.addEventListener(this.focusElement, "focus", function(e) { return self.onTabFocus(e, tab); }, false);
			Spry.Widget.TabbedPanels.addEventListener(this.focusElement, "blur", function(e) { return self.onTabBlur(e, tab); }, false);
			Spry.Widget.TabbedPanels.addEventListener(this.focusElement, "keydown", function(e) { return self.onTabKeyDown(e, tab); }, false);
		}
	}
};

Spry.Widget.TabbedPanels.prototype.showPanel = function(elementOrIndex)
{
	var tpIndex = -1;
	
	if (typeof elementOrIndex == "number")
		tpIndex = elementOrIndex;
	else // Must be the element for the tab or content panel.
		tpIndex = this.getTabIndex(elementOrIndex);
	
	if (!tpIndex < 0 || tpIndex >= this.getTabbedPanelCount())
		return;

	var tabs = this.getTabs();
	var panels = this.getContentPanels();

	var numTabbedPanels = Math.max(tabs.length, panels.length);

	for (var i = 0; i < numTabbedPanels; i++)
	{
		if (i != tpIndex)
		{
			if (tabs[i])
				this.removeClassName(tabs[i], this.tabSelectedClass);
			if (panels[i])
			{
				this.removeClassName(panels[i], this.panelVisibleClass);
				panels[i].style.display = "none";
			}
		}
	}

	this.addClassName(tabs[tpIndex], this.tabSelectedClass);
	this.addClassName(panels[tpIndex], this.panelVisibleClass);
	panels[tpIndex].style.display = "block";

	this.currentTabIndex = tpIndex;
};

Spry.Widget.TabbedPanels.prototype.attachBehaviors = function(element)
{
	var tabs = this.getTabs();
	var panels = this.getContentPanels();
	var panelCount = this.getTabbedPanelCount();

	for (var i = 0; i < panelCount; i++)
		this.addPanelEventListeners(tabs[i], panels[i]);

	this.showPanel(this.defaultTab);
};
	function drop_menu(d){
		document.getElementById(d).style.display="block";
	}
	function drop_menu_out(d){
		document.getElementById(d).style.display="none";
	}
	function go(){
		var dt=document.search_frm;
		if(dt.search_text.value==""){
			alert("Please type search text.");
			dt.search_text.focus();
			return false;
		}
		dt.page.value="";
		dt.submit();
	}
	function page_go(page){
		var dt=document.search_frm;
		dt.page.value=page;
		dt.submit();
	}
/* Flex Level Drop Down Menu v1.1
* Created: Jan 5th, 2010 by DynamicDrive.com. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/

//Version 1.1 (Feb 19th, 2010): Each flex menu (UL) can now be associated with a link dynamically, and/or defined using JavaScript instead of as markup.

//Usage: $(elementselector).addflexmenu('menuid', options)
//ie:
//jQuery(document).ready(function($){
	//$('a.mylinks').addflexmenu('flexmenu1') //apply flex menu with ID "flexmenu1" to links with class="mylinks"
//})

jQuery.noConflict()

var flexdropdownmenu={
	arrowpath: 'menu/arrow.gif', //full URL or path to arrow image
	animspeed: 200, //reveal animation speed (in milliseconds)
	showhidedelay: [150, 150], //delay before menu appears and disappears when mouse rolls over it, in milliseconds

	//***** NO NEED TO EDIT BEYOND HERE
	startzindex:1000,
	builtflexmenuids: [], //ids of flex menus already built (to prevent repeated building of same flex menu)

	positionul:function($, $ul, e, $anchor){
		var istoplevel=$ul.hasClass('jqflexmenu') //Bool indicating whether $ul is top level flex menu DIV
		var docrightedge=$(document).scrollLeft()+$(window).width()-40 //40 is to account for shadows in FF
		var docbottomedge=$(document).scrollTop()+$(window).height()-40
		if (istoplevel){ //if main flex menu DIV
			var offsets=$anchor.offset()
			var anchorsetting=$anchor.data('setting')
			var x=offsets.left+anchorsetting.useroffsets[0]+(anchorsetting.dir=="h"? $anchor.outerWidth() : 0) //x pos of main flex menu UL
			var y=offsets.top+anchorsetting.useroffsets[1]+(anchorsetting.dir=="h"? 0 : $anchor.outerHeight())
			x=(x+$ul.data('dimensions').w > docrightedge)? x-(anchorsetting.useroffsets[0]*2)-$ul.data('dimensions').w+$anchor.outerWidth()+(anchorsetting.dir=="h"? -($anchor.outerWidth()*2) : 0) : x //if not enough horizontal room to the ridge of the cursor
			y=(y+$ul.data('dimensions').h > docbottomedge)? y-(anchorsetting.useroffsets[1]*2)-$ul.data('dimensions').h-$anchor.outerHeight()+(anchorsetting.dir=="h"? ($anchor.outerHeight()*2) : 0) : y
		}
		else{ //if sub level flex menu UL
			var $parentli=$ul.data('$parentliref')
			var parentlioffset=$parentli.offset()
			var x=$ul.data('dimensions').parentliw //x pos of sub UL
			var y=0
			x=(parentlioffset.left+x+$ul.data('dimensions').w > docrightedge)? x-$ul.data('dimensions').parentliw-$ul.data('dimensions').w : x //if not enough horizontal room to the ridge parent LI
			y=(parentlioffset.top+$ul.data('dimensions').h > docbottomedge)? y-$ul.data('dimensions').h+$ul.data('dimensions').parentlih : y
		}
		$ul.css({left:x, top:y})
	},
	
	showbox:function($, $flexmenu, e){
		clearTimeout($flexmenu.data('timers').hidetimer)
		$flexmenu.data('timers').showtimer=setTimeout(function(){$flexmenu.show(flexdropdownmenu.animspeed)}, this.showhidedelay[0])
	},

	hidebox:function($, $flexmenu){
		clearTimeout($flexmenu.data('timers').showtimer)
		$flexmenu.data('timers').hidetimer=setTimeout(function(){$flexmenu.hide(100)}, this.showhidedelay[1]) //hide flex menu plus all of its sub ULs
	},


	buildflexmenu:function($, $menu, $target){
		$menu.css({display:'block', visibility:'hidden', zIndex:this.startzindex}).addClass('jqflexmenu').appendTo(document.body)
		$menu.bind('mouseenter', function(){
			clearTimeout($menu.data('timers').hidetimer)
		})		
		$menu.bind('mouseleave', function(){ //hide menu when mouse moves out of it
			flexdropdownmenu.hidebox($, $menu)
		})
		$menu.data('dimensions', {w:$menu.outerWidth(), h:$menu.outerHeight()}) //remember main menu's dimensions
		$menu.data('timers', {})
		var $lis=$menu.find("ul").parent() //find all LIs within menu with a sub UL
		$lis.each(function(i){
			var $li=$(this).css({zIndex: 1000+i})
			var $subul=$li.find('ul:eq(0)').css({display:'block'}) //set sub UL to "block" so we can get dimensions
			$subul.data('dimensions', {w:$subul.outerWidth(), h:$subul.outerHeight(), parentliw:this.offsetWidth, parentlih:this.offsetHeight})
			$subul.data('$parentliref', $li) //cache parent LI of each sub UL
			$subul.data('timers', {})
			$li.data('$subulref', $subul) //cache sub UL of each parent LI
			$li.children("a:eq(0)").append( //add arrow images
				'<img src="'+flexdropdownmenu.arrowpath+'" class="rightarrowclass" style="border:0;" />'
			)
			$li.bind('mouseenter', function(e){ //show sub UL when mouse moves over parent LI
				var $targetul=$(this).css('zIndex', ++flexdropdownmenu.startzindex).addClass("selected").data('$subulref')
				if ($targetul.queue().length<=1){ //if 1 or less queued animations
					clearTimeout($targetul.data('timers').hidetimer)
					$targetul.data('timers').showtimer=setTimeout(function(){
						flexdropdownmenu.positionul($, $targetul, e)
						$targetul.show(flexdropdownmenu.animspeed)
					}, flexdropdownmenu.showhidedelay[0])
				}
			})
			$li.bind('mouseleave', function(e){ //hide sub UL when mouse moves out of parent LI
				var $targetul=$(this).data('$subulref')
				clearTimeout($targetul.data('timers').showtimer)
				$targetul.data('timers').hidetimer=setTimeout(function(){$targetul.hide(100).data('$parentliref').removeClass('selected')}, flexdropdownmenu.showhidedelay[1])
			})
		})
		$menu.find('ul').andSelf().css({display:'none', visibility:'visible'}) //collapse all ULs again
		this.builtflexmenuids.push($menu.get(0).id) //remember id of flex menu that was just built
	},

	

	init:function($, $target, $flexmenu){
		if (this.builtflexmenuids.length==0){ //only bind click event to document once
			$(document).bind("click", function(e){
				if (e.button==0){ //hide all flex menus (and their sub ULs) when left mouse button is clicked
					$('.jqflexmenu').find('ul').andSelf().hide()
				}
			})
		}
		if (jQuery.inArray($flexmenu.get(0).id, this.builtflexmenuids)==-1) //if this flex menu hasn't been built yet
			this.buildflexmenu($, $flexmenu, $target)
		if ($target.parents().filter('ul.jqflexmenu').length>0) //if $target matches an element within the flex menu markup, don't bind onflexmenu to that element
			return
		var useroffsets=$target.attr('data-offsets')? $target.attr('data-offsets').split(',') : [0,0] //get additional user offsets of menu
		useroffsets=[parseInt(useroffsets[0]), parseInt(useroffsets[1])]
		$target.data('setting', {dir: $target.attr('data-dir'), useroffsets: useroffsets}) //store direction (drop right or down) of menu plus user offsets
		$target.bind("mouseenter", function(e){
			$flexmenu.css('zIndex', ++flexdropdownmenu.startzindex)
			flexdropdownmenu.positionul($, $flexmenu, e, $target)
			flexdropdownmenu.showbox($, $flexmenu, e)
		})
		$target.bind("mouseleave", function(e){
			flexdropdownmenu.hidebox($, $flexmenu)
		})
	}
}

jQuery.fn.addflexmenu=function(flexmenuid, options){
	var $=jQuery
	return this.each(function(){ //return jQuery obj
		var $target=$(this)
		if (typeof options=="object"){ //if options parameter defined
			if (options.dir)
				$target.attr('data-dir', options.dir) //set/overwrite data-dir attr with defined value
			if (options.offsets)
				$target.attr('data-offsets', options.offsets) //set/overwrite data-offsets attr with defined value
		}
		if ($('#'+flexmenuid).length==1) //check flex menu is defined
			flexdropdownmenu.init($, $target, $('#'+flexmenuid))
	})
};

//By default, add flex menu to anchor links with attribute "data-flexmenu"
jQuery(document).ready(function($){
	var $anchors=$('*[data-flexmenu]')
	$anchors.each(function(){
		$(this).addflexmenu(this.getAttribute('data-flexmenu'))
	})
})


//ddlistmenu: Function to define a UL list menu dynamically

function ddlistmenu(id, className){
	var menu=document.createElement('ul')
	if (id)
		menu.id=id
	if (className)
		menu.className=className
	this.menu=menu
}

ddlistmenu.prototype={
	addItem:function(url, text, target){
		var li=document.createElement('li')
		li.innerHTML='<a href="'+url+'" target="'+target+'">'+text+'</a>'
		this.menu.appendChild(li)
		this.li=li
		return this
	},
	addSubMenu:function(){
		var s=new ddlistmenu(null, null)
		this.li.appendChild(s.menu)
		return s

	}
}


var menu=function(){
	var t=15,z=50,s=6,a;
	function dd(n){this.n=n; this.h=[]; this.c=[]}
	dd.prototype.init=function(p,c){
		a=c; var w=document.getElementById(p), s=w.getElementsByTagName('ul'), l=s.length, i=0;
		for(i;i<l;i++){
			var h=s[i].parentNode; this.h[i]=h; this.c[i]=s[i];
			h.onmouseover=new Function(this.n+'.st('+i+',true)');
			h.onmouseout=new Function(this.n+'.st('+i+')');
		}
	}
	dd.prototype.st=function(x,f){
		var c=this.c[x], h=this.h[x], p=h.getElementsByTagName('a')[0];
		clearInterval(c.t); c.style.overflow='hidden';
		if(f){
			c.style.display = "block";
			p.className+=' '+a;
			if(!c.mh){c.style.display='block'; c.style.height=''; c.mh=c.offsetHeight; c.style.height=0}
			if(c.mh==c.offsetHeight){c.style.overflow='visible'}
			else{c.style.zIndex=z; z++; c.t=setInterval(function(){sl(c,1)},t)}
		}else{p.className=p.className.replace(a,''); c.t=setInterval(function(){sl(c,-1)},t)}
	}
	function sl(c,f){
		if(f==-1)
		{
			clearInterval(c.t);
			c.style.height=0+'px';
			c.style.display = "none";
			return;
		}
		var h=c.offsetHeight;
		if((h<=0&&f!=1)||(h>=c.mh&&f==1)){
			if(f==1){c.style.filter=''; c.style.opacity=1; c.style.overflow='visible'}
			clearInterval(c.t); return
		}
		var d=(f==1)?Math.ceil((c.mh-h)/s):Math.ceil(h/s), o=h/c.mh;
		c.style.opacity=o; c.style.filter='alpha(opacity='+(o*100)+')';
		c.style.height=h+(d*f)+'px'
		
	}
	return{dd:dd}
}();

