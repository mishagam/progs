function splitIndexSlots(){for(var e=new Array,t=new Array,n=0;n<index_slots.length;n++){var i=index_slots[n].split("_"),d=i.shift(),s=d,a=i.join("_");"O"==s?e.push(a):"P"==s&&t.push(a)}return[e,t]}function clearTargeting(e){for(var t=[],n=[],i=[],d=splitIndexSlots(),s=d[0],a=d[1],o=0;o<s.length;o++)s[o]!=e&&(t.push(s[o]),i.push("O_"+s[o]));for(var o=0;o<a.length;o++)a[o]!=e&&(n.push(a[o]),i.push("P_"+a[o]));index_slots=i,googletag&&googletag.pubads&&googletag.pubads().setTargeting&&(s.length>0?googletag.pubads().setTargeting("IOM",s):googletag.pubads().setTargeting("IOM",[]),a.length>0?googletag.pubads().setTargeting("IPM",a):googletag.pubads().setTargeting("IPM",[]))}function cygnus_index_judge(e){for(var t={},n=/^[OM]_(?:T([0-9])_)?(.*)_.*$/,i=[],d=0;d<e.length;d++)if("P"!==e[d].split("_")[0]){var s=n.exec(e[d]);if("undefined"!=typeof s&&null!==s){var a,o;if(a=s[1],o=s[2],("undefined"==typeof a||null===a)&&(a=0),t[o]=t[o]||{},"undefined"==typeof t[o].tier||t[o].tier<a){t[o].tier=a;var r=e[d];if(a>0){var _=e[d].split("_"),u=_.shift(),g=_.join("_");_.shift();var l=_.join("_");r=u+"_"+l,_IndexRequestData.targetIDToBid[l]=_IndexRequestData.targetIDToBid[g]}t[o].target=r}}}else i.push(e[d]);var p=[];for(var f in t)t.hasOwnProperty(f)!==!1&&p.push(t[f].target);return p.concat(i)}function cygnus_index_parse_res(e){try{if(e){if("object"!=typeof _IndexRequestData||"object"!=typeof _IndexRequestData.impIDToSlotID||"undefined"==typeof _IndexRequestData.impIDToSlotID[e.id])return;var t,n=0;"object"==typeof _IndexRequestData.reqOptions&&"object"==typeof _IndexRequestData.reqOptions[e.id]&&("function"==typeof _IndexRequestData.reqOptions[e.id].callback&&(t=_IndexRequestData.reqOptions[e.id].callback),"number"==typeof _IndexRequestData.reqOptions[e.id].targetMode&&(n=_IndexRequestData.reqOptions[e.id].targetMode)),_IndexRequestData.lastRequestID=e.id;for(var i=[],d="undefined"==typeof e.seatbid?0:e.seatbid.length,s=0;d>s;s++)for(var a=0;a<e.seatbid[s].bid.length;a++){var o=e.seatbid[s].bid[a];if("object"==typeof o.ext&&"string"==typeof o.ext.pricelevel&&"undefined"!=typeof _IndexRequestData.impIDToSlotID[e.id][o.impid]){var r=_IndexRequestData.impIDToSlotID[e.id][o.impid];"undefined"==typeof index_slots&&(index_slots=[]),"undefined"==typeof _IndexRequestData.targetIDToBid&&(_IndexRequestData.targetIDToBid={});var _,u;"string"==typeof o.ext.dealid?(_=1===n?r+o.ext.pricelevel:r+"_"+o.ext.dealid,u="P_"):(_=r+o.ext.pricelevel,u="O_"),index_slots.push(u+_),void 0===_IndexRequestData.targetIDToBid[_]?_IndexRequestData.targetIDToBid[_]=[o.adm]:_IndexRequestData.targetIDToBid[_].push(o.adm);var g={};g.impressionID=o.impid,"undefined"!=typeof o.ext.dealid&&(g.dealID=o.ext.dealid),g.bid=o.price,g.slotID=r,g.priceLevel=o.ext.pricelevel,g.target=u+_,i.push(g)}}"function"==typeof t&&(0===i.length?t(e.id):t(e.id,i)),index_slots=cygnus_index_judge(index_slots),cygnus_report("rb","RB="+index_slots.join())}}catch(l){}"undefined"==typeof index_slots&&(index_slots=[]),cygnus_index_set_targets()}function cygnus_index_set_targets(){"function"==typeof window.cygnus_index_ready_state&&window.cygnus_index_ready_state(),window.index_slots_last=index_slots,index_slots=[]}function cygnus_log(){}function index_render(e,t){"undefined"==typeof index_demand&&(index_demand={});for(var n=t.split("_"),i=n[0],d=0;d<index_slots_render.length;d++)if("string"==typeof index_slots_render[d]["O_"+t]){cygnus_log("unpack tier"+t),t=index_slots_render[d]["O_"+t];var s=t.split("_");t=s[1]+"_"+s[2]+"_"+s[3],i=s[1]+"_"+s[2]}cygnus_log("index_render: "+t);try{var a=_IndexRequestData.targetIDToBid[t].pop();null!=a?(e.write(a),cygnus_report("ri","RI="+t),cygnus_log("Logged demand for slot "+i),index_demand[i]=1,delete index_no_demand[i]):cygnus_report("rinull","RINULL="+t)}catch(o){}}function cygnus_report(e,t){}function cygnus_copy(e){var t=new Object;for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function getSlotInfo(e){for(var t=0;t<cygnus_index_args.slots.length;t++){var n=cygnus_index_args.slots[t];if(n.id==e)return n}}index_slot_to_size={},index_slots_render=[],index_slots_add=[];var cygnus_tid=4;cygnus_index_stats={sampling:{defaults:1,rd:.01,rb:.01,rdp:.01,ri:.1,rinull:1,gstatus:0}};
;cygnus_index_parse_res({"id": "399075521"});