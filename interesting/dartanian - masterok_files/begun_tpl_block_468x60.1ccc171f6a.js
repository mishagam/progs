Begun.Autocontext.Customization.setTpls({
	"begun_html_tpls": [
		{"block_468x60": '\
<span class="begun_adv_span">\
<div class="begun_adv begun_adv_fix {{fix_layout}}"{{block_hover}}>\
<div class="begun_adv_common {{extended_block_class}} banners_count_{{banners_count}}">\
<table class="begun_adv_table {{css_thumbnails}}">\
<tr>\
<span class="begun_adv_age">18+</span>\
{{banners}}\
</tr>\
</table>\
<a class="begun_adv_sys_logo snap_noshots" href="{{begun_url}}" target="_blank" style="display:{{logo_display}}">{{begun_logo}}</a>\
</div>\
</div>\
</span>\
'},
		{'banner_468x60': '\
<td class="begun_adv_cell" style="width:{{banner_width}} !important" title="{{fullDomain}}" onclick="{{onclick}}" _url="{{url}}" _banner_id="{{banner_id}}">\
{{thumb}}\
<div class="begun_adv_block">\
<div class="begun_adv_title">{{cross}}<a class="snap_noshots" target="_blank" href="{{url}}" title="{{fullDomain}}">{{favicon}}{{title}}</a></div>\
<div class="begun_adv_text"><a class="snap_noshots" target="_blank" href="{{url}}" title="{{fullDomain}}">{{descr}}</a>{{gifts_link}}</div>\
<div class="begun_adv_contact">{{contact}}<span>{{bnnr_warn}}</span></div>\
</div>\
</td>\
'}
	],
	"begun_css_tpls": [
		{"block_468x60": '\
#begun_block_{{block_id}} .begun_adv {\
	width: 468px !important;\
	height: 60px !important;\
}\
#begun_block_{{block_id}} .begun_adv.begun_fix_layout {\
	width: 466px !important;\
	height: 58px !important;\
}\
#begun_block_{{block_id}} .begun_adv_common {\
	position: relative !important;\
	height: 58px !important;\
}\
#begun_block_{{block_id}} .begun_adv_common.begun_extended_block {\
	padding-right: 0 !important;\
}\
#begun_block_{{block_id}} .begun_adv_fix .begun_adv_common .begun_adv_cell {\
    padding: 5px 0 0 9px !important;\
}\
#begun_block_{{block_id}} .begun_adv_fix .begun_adv_title {\
	margin-bottom: 0 !important;\
}\
#begun_block_{{block_id}} .begun_adv_title * {\
	font-size: 15px !important;\
	font-weight: bold !important;\
    line-height: 1 !important;\
}\
#begun_block_{{block_id}} .begun_adv_text {\
    line-height: 1.1 !important;\
}\
#begun_block_{{block_id}} .begun_adv_text * {\
	font-size: 11px !important;\
	line-height: 1 !important;\
}\
#begun_block_{{block_id}} .begun_adv_contact * {\
	font-size: 11px !important;\
}\
#begun_block_{{block_id}} .begun_adv_fix {\
	overflow: hidden !important;\
}\
#begun_block_{{block_id}} .begun_warn_message {\
    display:inline !important;\
    font-size:9px !important;\
}\
'}
	]
});
/*$LastChangedRevision$*/
Begun.Autocontext.tplLoaded("begun_tpl_block_468x60");
