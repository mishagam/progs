/**
 * $Id$
 * (c) 2006 Anime News Network
 * desc: General javascript definitions
 */

function $N(val){
  var elems = document.getElementsByName(val);
  for (var i=0; i<elems.length; i++)
    if (elems[i].checked)
      return $(elems[i]);
  return $(elems[0]);
}

if (typeof(debug)=='string' && debug=='on'){
  true_alert = alert;
  debug_alert = 
  window.alert = function(msg){
    window.alert.invocations = window.alert.invocations+1 || 0;
    if (window.alert.invocations < 10)
      true_alert(msg);
    else if (!confirm(msg))
      window.alert = null;
  }
}
else
  debug_alert = function(msg){}

document.fully_loaded = false;
Event.observe(window, "load", function(){ document.fully_loaded = true; });

function ann_init(arg) {
  if (typeof(arg) == 'number') arguments.callee.max = arg;
  if (!ann_init_setup()) return;//not ready; DOM has not finished loading
  if (document.dom_loaded_time) return;
  document.dom_loaded_time = new Date();
  ann_init_elements(arguments.callee.max);
  emphasize_location_hash();
  Event.observe(window, 'scroll', emphasize_location_hash);
  ads_by();
  init_menu();
}

function emphasize_location_hash()
{
  var a = arguments.callee.emphasized_element || null;
  var b = null;
  if (/^#(.+)/.match(document.location.hash)) b = $(RegExp.$1)
  if (a == b) return;
  if (a) a.removeClassName('location_hash');
  if (b) b.addClassName('location_hash');
  arguments.callee.emphasized_element = b;
  if (b) //leave 7px above the scrolled-to element 
  { var pos = document.viewport.getScrollOffsets();
    window.scrollTo(pos[0], pos[1]-7);
  }
}

function ann_init_setup()
{
  if ($('DOM_end')) return true;
  if (!already_called(arguments.callee)) {
    //setup callbacks (only once) for when DOM has finished loading
    if (document.addEventListener) //ideal method
      document.addEventListener("DOMContentLoaded", ann_init, false);
    setTimeout(ann_init,1);//fast fallback
    Event.observe(window,'load',ann_init);//slow fallback
  }
  return false;
}

function already_called(callee) {
  if (callee.done) return true;
  callee.done = true;
  return false;
}

//override prototype.js
Element.addMethods({
  show: function(element, show) {
    element = $(element);
    element.style.display = '';
    if (show===false) element.style.display = 'none';
    return element;
  }
});

ann_ad = {};
if (!window.set_sponsor) set_sponsor = function(ad_type, name, sponsor_id)
{
  var container;
  switch(ad_type){
    case "BANNER": container = $('banner-container');  break;
    case "RECT":   container = $('rect-container');    break;
    case "VIDEO":  container = $('video-player-area'); break;
  }
  if (container){
    if (name){
      container.writeAttribute('sponsor', name);
      container.show();
    }
    else{
      container.removeAttribute('sponsor');
      container.hide();
    }
    ads_by();
    var off = container.select('div.turn-off')[0];
    if (sponsor_id && off){
      off.onclick = function(){
        new Ajax.Updater(container.id, '/my/subscription/turn_off!?advertiser='+sponsor_id, {asynchronous:true, evalScripts:true});
      }
      off.innerHTML = 'no more ads from '+name;
    }
  }
}

function ads_by()
{
  var node = $('ads_by');
  if (!node) return;
  
  var arr = ['video-player-area', 'banner-container', 'rect-container'];
  arr = arr.map(function(elem){
    if (elem = $(elem))
      if (elem.style.visibility != 'hidden')
        if (elem.style.display != 'none')
          return elem.readAttribute('sponsor');
    return null;
  });
  
  arr = arr.compact().uniq();
  node.innerHTML = arr.size()==0 ? '' : 'Ads by '+arr.join(' &amp; ');
}

function ann_init_elements(max) {
  var to_init = $$('[ann_init]');
  for (var i=0; i<to_init.length; i++)
    ann_init_element(to_init[i]);
}

function ann_init_element(elem) {
  var initparam = elem.getAttribute('ann_init');
  try {
    eval(initparam.gsub(/\bthis\b/,'elem'));
  }
  catch(e){
    debug_alert('ann_init failed for\n'+initparam+'\n\nmsg:\n'+e.message);
  }
  /*
  This does not work at all in IE6
  not even an exception is raised
  try {
    elem.ann_init = eval('(function(){ '+initparam+' })');
  }
  catch(e) {
    elem.ann_init = function(){ eval(initparam); };
  }
  elem.ann_init();
  */
}

function show_label_over(textfield, show) {
  textfield = $(textfield);
  var list = textfield.parentNode.childNodes;
  var label = null;
  for (var i=0; i<list.length; i++)
    if (list[i].tagName == 'LABEL')
      label = list[i];
    else if (list[i] == textfield)
      break;
  if (!show)
    label.style.visibility = 'hidden';
  else {
    if (textfield.value.match(/^\s*$/))
      label.style.visibility = 'visible';
    else
      label.style.visibility = 'hidden';
  }
}

function check_mandatory_fields(submit_button) {
  var list = submit_button.form.elements;
  for (var i=0; i<list.length; i++)
    if (list[i].type == 'text' || list[i].type == 'password')
      if (list[i].value.match(/^\s*$/) && list[i].getAttribute('optional') != 'true')
      { list[i].focus();
        alert('oops, you forgot to type in something');
        return false;
      }
}

function register_event_handler(obj, eventname, fn) {
  if (obj.addEventListener)
    obj.addEventListener(eventname, fn, false);
  else
    obj.attachEvent('on'+eventname, fn);
}

function toggle_visibility(id, make_visible) {
  var obj = $(id).style;
  if (make_visible == null) 
    make_visible = (obj.display == 'none');
  obj.display = make_visible ? '' : 'none';
}

function toggle_login_box() {
  toggle_visibility('login-info');
  show_label_over('login_name', true);
  show_label_over('login_pwd', true);
}

function ensureNumeric(elem, fp, neg){
  elem.observe('keypress', function(ev){
    if (ev.charCode >= 48 && ev.charCode <= 57) return;//number
    if (ev.charCode == 46 && fp && !elem.value.include('.')) return;//dot
    if (ev.charCode == 45 && neg && elem.value=='') return;//minus
    if (ev.charCode == 0 || ev.altKey || ev.ctrlKey) return;//control char
    ev.stop();
  });
  elem.observe('keyup', function(ev){
    var rx = '^[^0-9'+(fp?'.':'')+(neg?'-':'')+']*';
    rx += '('+(neg?'-?':'')+'[0-9]*'+(fp?'[.]?[0-9]*':'')+')';
    rx = new RegExp(rx);
    var m = elem.value.match(rx);
    elem.value = m ? m[1] : '';
  });
}
function validateNumeric(e, fp){
  if (e.charCode >= 48 && e.charCode <= 57) return true;//number
  if (e.charCode == 46 && fp) return true;//dot
  if (e.charCode == 0) return true;//control char
  e.stop();
  return false;
}

function windowHeight() {
  if( typeof( window.innerHeight ) == 'number' )
    //Non-IE
    return window.innerHeight;
    
  if( document.documentElement && document.documentElement.clientHeight ) 
    //IE 6+ in 'standards compliant mode'
    return document.documentElement.clientHeight;
    
  if( document.body && document.body.clientHeight )
    //IE 4 compatible
    return document.body.clientHeight;

  return null;
}

function find_by_tag_name(collection, tag) {
  for (var i=0; i<collection.length; i++)
    if (collection[i].tagName == tag) 
      return collection[i];
  return null;
}

function check_presence_of_ad(container, rect) {
  var ad = find_by_tag_name(container.childNodes, 'DIV');
  if (!ad) return;
  
  //NOTE: the container has to be visible otherwise the ad's offsetHeight will be zero
  if (ad.offsetHeight > 40){
    if (rect) put_rectangle_above_fold();
    return;
  }
  
  //hide the ad since it seems to be empty
  container.style.visibility = 'hidden';
  //but just in case the ad has simply not loaded *yet*, re-check every 100ms
  //for up to two seconds after the page has fully loaded.
  var fn, cpt = 20;
  fn = function(){
    if (ad.offsetHeight > 40){
      container.style.visibility = 'visible';
      ads_by();
      if (rect) put_rectangle_above_fold();
    }
    else{
      if (document.fully_loaded) cpt -= 1;
      if (cpt > 0)
        setTimeout(fn, 100);
      else{
        container.style.display = 'none';
        ads_by();
      }
    }
  };
  fn();
}

function put_rectangle_above_fold() {
  if (Prototype.Browser.Safari) return;
  //return;
  if (Element.visible('rect-container')) {
    //maximum height of rect-container to display above fold
    var maxh = 0
      + parseInt(Element.getStyle('rect-container', 'padding-top'))
      + Element.getHeight($('rect-container').firstDescendant()) //"advertisement" label
      + 250 //show 250px of the rectangle above the fold
      + parseInt(Element.getStyle('rect-container', 'padding-bottom'));
    
    //compute height of rect-spacer in order to put rectangle right above the fold
    var h = windowHeight()
      - Position.cumulativeOffset($('rect-spacer'))[1]
      - parseInt(Element.getStyle('rect-container', 'margin-top'))
      - Math.min(maxh, Element.getHeight('rect-container'))
      - 2;
    
    //use this height only if it's bigger than the default (minimum) height
    if (h > Element.getHeight('rect-spacer'))
    {
      $('rect-spacer').style.height = h+'px';
    }
  }
}

function realurl(link, url)
{
  var tracker = link.href;
  link.href = url;
  link.observe('mousedown',function(){ link.href = tracker; });
  link.observe('click',function(){ link.href = tracker; });
  link.observe('mouseout',function(){ link.href = url; });
}


//add the mailto link by javascript to confuse harvesters
function mlink(link) {
  var list = link.childNodes;
  var span = list[list.length-1];
  link.removeChild(span);
  var n = span.childNodes.length;
  var name, host = span.childNodes[n-2].childNodes[0].nodeValue;
  if (n == 3) {
    //name is first part of email
    name = list[0].nodeValue;
    link.appendChild(document.createTextNode('@'+host));
  }
  else {
    //name is different from email
    name = span.childNodes[n-4].childNodes[0].nodeValue;
  }
  if (link.tagName == "A")
    link.href = 'mailto:'+name+'@'+host;
  else
    link.innerHTML = '<a href="mailto:'+name+'@'+host+'">'+name+'@'+host+'</a>';
}

function post_with_confirmation(url, msg)
{
  if (typeof(url) == 'object') url = url.href.replace('(js)','');
  
  if (msg == '' || confirm(msg)) {
    var f = document.createElement('form');
    document.body.appendChild(f);
    f.method = 'POST';
    f.action = url;
    f.submit();
  }
}



/**
 * Author: Istvan Pusztai
 * Date: 2006-10-30
 * Last Modified: 2006-11-10
 * This javascript uses the prototype framework.
 */

function init_menu()
{
  // quit if this function has already been called
  if(arguments.callee.done) return;
  // flag this function so we don't do the same thing twice
  arguments.callee.done = true;
	
	tabsParentNode = $('tabs');
	menusParentNode = $('menus');
	totalTabsLength = 0;
	if (!tabsParentNode) return;

	// Traverse DOM to attach events to tabs
	for(var i = 0; i < tabsParentNode.childNodes.length; i++) 
		if(tabsParentNode.childNodes[i].nodeName == "DIV")
		{
			var child = tabsParentNode.childNodes[i];
			Event.observe(child.id, 'mouseover', tabMouseOver, false);
			Event.observe(child.id, 'mouseout', tabMouseOut, false);
			totalTabsLength += child.offsetWidth;
			if(child.className == "tab_selected")
			{
				defaultTab = child;
				previousTab = defaultTab;
			}
		}
	//if(totalTabsLength > 460) menusParentNode.style.width = (totalTabsLength + 15) + "px";
	// Attach events to menus
	for(var i = 0; i < menusParentNode.childNodes.length; i++)
		if(menusParentNode.childNodes[i].nodeName == "DIV")
		{
			var child = menusParentNode.childNodes[i];
			Event.observe(child.id, 'mouseover', menuMouseOver, false);
			Event.observe(child.id, 'mouseout', menuMouseOut, false);
			if(child.className == "show")
			{
				defaultMenu = child;
				previousMenu = defaultMenu;
			}
		}
	noSection = (defaultMenu == null) ? true : false;
	if (defaultMenu){
	  $('page-header-navigation').addClassName('with-nav');
	  $('page-header-navigation').addClassName('with-default');
	}
} // END onLoadEvent()

// Constants
var DELAY_TABSELECT = 200;
var DELAY_REVERT = 500; 

// Variables to be initialized during the DOM traversal for event attachement
var defaultTab = null;
var defaultMenu = null;
var previousTab = null;
var previousMenu  = null;
var currentTab = null;
var currentMenu = null;
var noSection;

// Variables to be initialized during events
var keyPressTimer = null;
var tabMouseOverTimer = null;
var tabMouseOutTimer = null;
var menuMouseOutTimer = null;
var autoRevertTimer = null;

// Hover states
var tabHovered = false;
var menuHovered = false;

// Parent nodes (container divs) of tabs and menus
var tabsParentNode = null;
var menusParentNode = null;

// User bar variables
var currentPageBookmarked = false;


// Attach keyPress event to listen to keystrokes
Event.observe(document, 'keypress', keyPressEvent, false);

///////////////////////////////////////////////////////////////////////////////////////////
// + TABBED MENU
///////////////////////////////////////////////////////////////////////////////////////////
function switchTab(revertme)
{
	clearTimeout(autoRevertTimer);
	
	if(previousMenu != null)
		previousMenu.className = "hide"; // set previous submenu to hidden
		
	currentMenu.className = ""; // set the target submenu visible
	
	if(previousTab != null)
	{
		if(noSection)
			previousTab.className = ""; // set previous tab to unselected
		else
		{
			if(previousTab.id == defaultTab.id)
				previousTab.className = "on";
			else
				previousTab.className = ""; // set previous tab to unselected
		}
	}
	currentTab.className = "tab_selected"; // set current tab to selected
	$('page-header-navigation').addClassName('with-nav');
	
	previousMenu = currentMenu;
	previousTab = currentTab;

	if(revertme == true)
		autoRevertTimer = setTimeout(revert, DELAY_REVERT);
}
function revert()
{
	if(!tabHovered && !menuHovered)
	{
		if(!noSection)
		{
			currentTab = defaultTab;
			currentMenu = defaultMenu;
			switchTab(false);
		}
		else if(previousMenu != null)
		{
			previousMenu.className = "hide"; // set previous submenu to hidden
			previousTab.className = ""; // set previous tab to unselected
			$('page-header-navigation').removeClassName('with-nav');
		}
	}
}
function tabMouseOver(e)
{
	tabHovered = true;
	if(tabMouseOutTimer != null) clearTimeout(tabMouseOutTimer);
	if(tabMouseOverTimer != null) clearTimeout(tabMouseOverTimer);
	
	var targ = Event.element(e); // find the target from Event e
	var targetMenu = $(targ.alt);
	
	if(targetMenu == null)
		return;
	
	currentTab = targ.parentNode.parentNode;
	currentMenu = targetMenu;
	
	tabMouseOverTimer = setTimeout(switchTab, DELAY_TABSELECT); // menu id is located in the image tag's alt property
}
function tabMouseOut(e)
{
	tabHovered = false;
	if(tabMouseOverTimer != null) clearTimeout(tabMouseOverTimer);
	if(tabMouseOutTimer != null) clearTimeout(tabMouseOutTimer);
	tabMouseOutTimer = setTimeout(revert, DELAY_REVERT);
}
function menuMouseOut(e)
{
	menuHovered = false;
}
function menuMouseOver(e)
{
	menuHovered = true;
}
function scroll_to_menu(id)
{
  scroll(2000,0);
  var tab = $("tab_"+id);
  if (!tab) return;
  currentTab = tab
  currentMenu = $("menu_"+id);
  switchTab(false);  
}
function keyPressEvent(e)
{
	if(menuMouseOutTimer != null) clearTimeout(menuMouseOutTimer);
	if(tabMouseOutTimer != null) clearTimeout(tabMouseOutTimer);
	if(keyPressTimer != null) clearTimeout(keyPressTimer);
	//keyPressTimer = setTimeout(revert, DELAY_REVERT);
	
	var targ = Event.element(e); // find the target from Event e
	if(targ.nodeName == "INPUT" || targ.nodeName == "TEXTAREA"  || targ.nodeName == "SELECT") // Disable tab switchTabing if focus is in an input or textarea
		return;
		
	var code;
	if(!e)
		var e = window.event;
	if(e.keyCode)
		code = e.keyCode;
	else if(e.charCode)
		code = e.charCode;
	switch(code)
	{
		case 65:
		case 97: // a
			scroll_to_menu("admin");
			break;
		case 83:
		case 115: // s
			scroll_to_menu("sponsor");
			break;
		case 78:
		case 110: // n
      scroll_to_menu("news");
			break;
		case 87:
		case 119: // w
			scroll_to_menu("newanime");
			break;
		case 86:
		case 118: // v
			scroll_to_menu("views");
			break;
		case 69:
		case 101: // e
			scroll_to_menu("encyclopedia");
			break;
		case 73:
		case 105: // i
			scroll_to_menu("video");
			break;
		case 70:
		case 102: // f
			scroll_to_menu("forum");
			break;
		case 77:
		case 109: // m
			scroll_to_menu("myann");
			break;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////
// + FLOATING MENU(S)
///////////////////////////////////////////////////////////////////////////////////////////

var openedId = null;
var openedSrc = null;
var clickWithinMenu = false;

var curContainer = null;
var aniCounter = 0;
var aniCurrrentSL = 0;

function display(id, sourceId)
{
	if(openedId == id)
	{
		hideOpened();
		return;
	}
	
	hideOpened();
	var target = $(id);
	var source = $(sourceId);
	openedSrc = source;
	
	openedId = id;
	pos = Position.cumulativeOffset(source);
	if(sourceId == "filter_btn")
	{
		target.style.left = (pos[0] - 65) + "px";
		//target.style.top = (pos[1] + 7) + "px";//Firefox
		//target.style.top = (pos[1] + 22) + "px";//IE
		target.style.top = (34) + "px";//both
	}
	else
	{
		target.style.left = pos[0] + "px";
		target.style.top = (pos[1] + 19) + "px";
	}
	target.style.visibility = "visible";
	
	Event.observe(target, 'click', clickFloatingMenuEvent, true);
	Event.observe(source, 'click', clickFloatingMenuEvent, true);
	Event.observe(document, 'click', clickEvent, false);
}
function clickFloatingMenuEvent()
{
	clickWithinMenu = true;
}
function clickEvent()
{
	if(clickWithinMenu)
	{
		clickWithinMenu = false;
	}
	else
	{
		Event.stopObserving($(openedId), 'click', clickFloatingMenuEvent, true);
		Event.stopObserving(openedSrc, 'click', clickFloatingMenuEvent, true);
		Event.stopObserving(document, 'click', clickEvent, false);
		hideOpened();
	}	
}
function hideOpened()
{
	if(openedId != null)
	{
		$(openedId).style.visibility = "hidden";
		openedId = null;
	}
}
function sforward(id)
{
	curContainer = $(id);
	aniCurrrentSL = curContainer.scrollLeft;
	aniRight();
}
function sback(id)
{
	curContainer = $(id);
	aniCurrrentSL = curContainer.scrollLeft;
	aniLeft();
}
function aniRight()
{
	if(aniCounter <= 15)
	{
		curContainer.scrollLeft = easeInOut(aniCurrrentSL, aniCurrrentSL + 300, 15, aniCounter, 2.5);
		aniCounter++;
		setTimeout(aniRight, 24);
	}
	else
		aniCounter = 0;
}
function aniLeft()
{
	if(aniCounter <= 15)
	{
		curContainer.scrollLeft = easeInOut(aniCurrrentSL, aniCurrrentSL -300 , 15, aniCounter, 2.5);
		aniCounter++;
		setTimeout(aniLeft, 24);
	}
	else
		aniCounter = 0;
}
function easeInOut(minValue, maxValue, totalSteps, actualStep, powr)
{ 
    var delta = maxValue - minValue; 
    var step = minValue+(Math.pow(((1 / totalSteps) * actualStep), powr) * delta); 
    return Math.ceil(step) 
}

///////////////////////////////////////////////////////////////////////////////////////////
// + SEARCH
///////////////////////////////////////////////////////////////////////////////////////////
function fsearch(type)
{
	$('netnav_search_type').name = 'type'
	$('netnav_search_type').value = type;
	$('netnav_search').submit();
}
function imgSwap(res, source)
{
	source.alt = source.src;
	source.src = res;
	source.onmouseout = function() { source.src = source.alt ;};
}

var gallery_id = -1;
function show_gallery(n,event) {
  var img;
  if (window.gallery_page_refresh && event){
    img = Event.extend(event).element();
    img.parentNode.href = '?'+n;
    return;
  }
  if ($('gallery_pic'+n)) {
    for (j=-1; j<=1; j++) {
      if (img = $('gallery_img'+(n+j))) {
        img.src = img.getAttribute('xsrc');
      }
    }
    if (gallery_id >= 0) $('gallery_pic'+gallery_id).hide();
    $('gallery_pic'+n).show();
    gallery_id = n;
  }
}

function init_tri_state_checkboxes()
{
  var inputs = document.getElementsByTagName('input');
  for (i=0; i<inputs.length; i++) {
    if (inputs[i].type == "checkbox") {
      var chk = $(inputs[i])
      if (m = chk.id.match(/(tristate\d+)in/)) {
        var img = $(document.createElement("img"));
        img.setStyle({border: '1px solid black', padding: '1px', width: '9px', height: '9px', margin: '0 2px -2px 0'});
        img.setAttribute('tristate', m[1]);
        chk.insert({before: img});
        Event.observe(img, 'click', toggle_tri_state);
        display_tri_state(img);
        chk.hide();
      }
    }
  }
}

function toggle_tri_state(event){
  var img = Event.element(event);
  var chk_in = $(img.getAttribute('tristate')+'in');
  var chk_ex = $(img.getAttribute('tristate')+'ex');
  
  if (!chk_in.checked && !chk_ex.checked) {
    chk_in.checked = true;
    chk_ex.checked = false;
    if (chk_in.value == "erotica") $('AO').checked = true;
  }
  else if (chk_in.checked && !chk_ex.checked) {
    chk_in.checked = false;
    chk_ex.checked = true;
  }
  else {
    chk_in.checked = false;
    chk_ex.checked = false;
  }
  
  display_tri_state(img);
}

function display_tri_state(img) {
  var chk_in = $(img.getAttribute('tristate')+'in');
  var chk_ex = $(img.getAttribute('tristate')+'ex');
  
  if (chk_in.checked && !chk_ex.checked)
    img.src = '/stylesheets/system/confirm.gif';
  else if (!chk_in.checked && chk_ex.checked)
    img.src = '/stylesheets/system/delete.gif';
  else
    img.src = '/img/spacer.gif';
}

function hovr(obj)
{
  if (Prototype.Browser.IE6)
  {
    Event.observe(obj,'mouseover',function(){obj.addClassName('hover')});
    Event.observe(obj,'mouseout',function(){obj.removeClassName('hover')});
  }
}

function on_off(id, on)
{
  id = $(id);
  id.disabled = !on;
  var elem = id.select('input')
    .concat(id.select('select'))
    .concat(id.select('textarea'));
  for (var i=0; i<elem.length; i++) elem[i].disabled = !on;
}

function textlimit(obj)
{
  obj.style.maxWidth = obj.getWidth()+'px';
  obj.style.width = "100%";
}

function popdown(link, elem)
{
  if (!elem) elem = link.next();
  link.href = "#";
  elem.hide();
  link.observe('click', function(ev){
    elem.toggle();
    ev.stop();
  });
}

function sidebar_tabs(group)
{
  var buttons = group.childElements();
  //var widths = buttons.map(Element.getWidth);
  buttons.map(function(elem,i){
    var fn;
    buttons[i].observe('click', fn=function(){
      var content = group;
      for (var j=0; j<buttons.length; j++){
        content = content.next();
        if (i == j){
          buttons[j].addClassName('active');
          content.show();
        }
        else{
          buttons[j].removeClassName('active');
          content.hide();
        }
      }
    });
    //buttons[i].style.width = widths[i]+'px';
    if (i==0) fn();
  });
}

function no_doubleclick(event)
{
  var elem = $(event).element();
  var t = new Date - elem.clicktime;
  elem.clicktime = new Date;
  if (t < 10000) return event.returnValue = false;
}


Encyc = {
  
  bigger_image: function(ev) {
    ev.stop();
    var img = $(ev).element();
    if (!img.bigger) img.bigger = {
      thumb_src: img.src,
      big_src: img.src.gsub(/thumbnails\/\w+/,'thumbnails/max500x600'),
      thumb_title: img.title,
      big_title: 'Click to go back to thumbnail'
    }
    img.bigger.show = !img.bigger.show;
    img.src = img.bigger.show ? img.bigger.big_src : img.bigger.thumb_src;
    img.title = img.bigger.show ? img.bigger.big_title : img.bigger.thumb_title;
    img.style.cursor = img.bigger.show ? 'ne-resize' : 'sw-resize';
    img.parentNode.blur();
  },
  
  toggle_all_operations: function() {
    if (!Encyc.all_items) {
      Encyc.all_items = $$('span.encyc-op');
      Encyc.all_items.each(Encyc.init_operations);
    }
    for (var i=0; i<Encyc.all_items.length; i++) {
      Encyc.all_items[i].toggleClassName('pin');
    }
  },
  
  init_operations: function(elem, is_mouseover) {
    elem = $(elem);
    if (!elem.getAttribute('ann_loaded')) {
      elem.firstDescendant().insert({after: '<span class="o">'+Encyc.generate_op_html(elem)+'</span>'});
      Encyc.observe_operations(elem, is_mouseover==true)
      elem.setAttribute('ann_loaded', true);
    }
  },
  
  observe_operations: function(op_container){
    var icon = op_container.firstDescendant();
    icon.observe('click', function(){ op_container.toggleClassName('pin') });
  },
  
  edit_url: function(code) {
    if (code.match(/^[APC]I/))
      return 'addinfo.php?code='+code;
    else
      return 'anime-editcredits.php?code='+code;
  },
  
  generate_op_html:  function(elem) {
    var arr = new Array;
    var code = elem.getAttribute("ann_code");
    var edit = elem.getAttribute("ann_edit");
    var audit = elem.getAttribute("ann_audit");
    var err = elem.getAttribute("ann_err");
    var source = elem.getAttribute("ann_source");
    if (source.length <= 3) source ='';
    
    if (edit == 1)
      arr.push('<a href="'+Encyc.edit_url(code)+'" class="own">edit</a>');

    if (audit)
      arr.push('<a href="audit/new?for='+audit+'">audit</a>')
    else if (!err)
      arr.push('<a href="error-report.php?code='+code+'" title="Report an error with this">error</a>');
    else{
      var label = edit == 1 ? '<strong>error</strong>' : 'error';
      var title = err == 1 ? '1 person reported an error with this' : err+' people reported errors with this';
      var endorse = elem.getAttribute("ann_endorse");
      if (endorse) title += ' (and '+endorse+' think there is no problem)';
      arr.push('<a href="error-report.php?code='+code+'" title="'+title+'" class=RED>'+label+'</a>');
    }

    if (source != '')
      arr.push('<a href="javascript:void(0)" onclick="Encyc.toggle_source(this)">source</a>');
    else if (edit == 1)
      arr.push('<a href="'+Encyc.edit_url(code)+'" class=RED>no source</a>');
    else
      arr.push('<a>no source</a>');
    
    return arr.join('<wbr>');
  },
  
  toggle_source: function(link){
    var ops = $(link);
    link.blur();
    while (!ops.getAttribute('ann_code')) ops = ops.parentNode;
    ops.toggleClassName('show-source');
    
    if (!link.hasClassName('src')){
      link.addClassName('src');
      var username = Encyc.user_lookup_table[ops.getAttribute('ann_user')];
      var str = '<tr><td>'+ops.getAttribute('ann_source')+'</td></tr>';
      if (username) str += '<tr><td>Added by: '+username+'</td></tr>';
      link.insert({after: '<span class="src"><table class="layout" border="0" cellspacing="0">'+str+'</table></span>'});
      var span = link.next();
      var max_width = document.viewport.getWidth() - 10 - span.cumulativeOffset().left;
      if (max_width > 500) max_width = 500;
      span.setStyle({width: max_width+'px'});
    }
  }
  
};


InfiniteCanvas = Class.create({
  
  initialize: function(container, old){
    this.container = container;
    this.max_autoload = old ? 4000 : 3000;
    Event.observe(window, 'scroll', this.on_scroll.bind(this));
  },
  
  on_scroll: function(){
    if (this.in_viewport(this.last_element()))
      if (this.may_enlarge_page())
        this.load_more(true);
  },
  
  may_enlarge_page: function(){
    var cTop = this.container.cumulativeOffset().top;
    var cHeight = this.container.getHeight();
    var vHeight = document.viewport.getHeight();
    if (cHeight > this.max_autoload) return false;
    if (cTop+cHeight <= vHeight) return true;
    
    var cBottom = this.container.viewportOffset().top + cHeight;
    return cBottom > vHeight;
  },
  
  in_viewport: function(elem,a){
    var elemTop = elem.viewportOffset().top;
    var elemBottom = elemTop + elem.getHeight();
    if (a) alert(elemTop+'-'+elemBottom);
    if (elemBottom-200 < elemTop) elemTop = elemBottom-200;
    var viewportHeight = document.viewport.getHeight();
    if (a) alert(elemBottom+' > 0 && '+elemTop+' < '+viewportHeight);
    return (elemBottom > 0 && elemTop < viewportHeight);
  },
  
  last_element: function(container){
    return this.container.childElements().last();
  },
  
  load_more: function(scroll){
    var ic = this;
    if (ic.loading) return;
    ic.loading = true;
    var load_more = ic.last_element().readAttribute('load_more');
    if (!load_more) return;
    ic.last_element().writeAttribute('load_more',null);
    new Ajax.Request(load_more, {
      onSuccess: function(transport){
        ic.container.insert({bottom: transport.responseText})
        ic.loading = false;
        if (scroll) ic.on_scroll();
      }
    })
  }
  
});

 
var MD5 = function(string) {
 
	function RotateLeft(lValue, iShiftBits) {
		return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
	}
 
	function AddUnsigned(lX,lY) {
		var lX4,lY4,lX8,lY8,lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
 	}
 
 	function F(x,y,z) { return (x & y) | ((~x) & z); }
 	function G(x,y,z) { return (x & z) | (y & (~z)); }
 	function H(x,y,z) { return (x ^ y ^ z); }
	function I(x,y,z) { return (y ^ (x | (~z))); }
 
	function FF(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function GG(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function HH(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function II(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1=lMessageLength + 8;
		var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
		var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
		var lWordArray=Array(lNumberOfWords-1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while ( lByteCount < lMessageLength ) {
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount-(lByteCount % 4))/4;
		lBytePosition = (lByteCount % 4)*8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
		lWordArray[lNumberOfWords-2] = lMessageLength<<3;
		lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
		return lWordArray;
	};
 
	function WordToHex(lValue) {
		var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
		for (lCount = 0;lCount<=3;lCount++) {
			lByte = (lValue>>>(lCount*8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
		}
		return WordToHexValue;
	};
 
	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	};
 
	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;
 
	string = Utf8Encode(string);
 
	x = ConvertToWordArray(string);
 
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 
	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}
 
	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 
	return temp.toLowerCase();
}


