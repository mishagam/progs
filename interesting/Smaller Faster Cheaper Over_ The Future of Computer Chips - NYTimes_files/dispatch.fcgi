/*
(c) Copyright Weborama SA - France. All rights reserved.
It is illegal to modify, disassemble, sell, copy or publish this software
or any part thereof. The use of this software is only permitted with the
prior and express written permission of Weborama SA - France.
More information: http://www.weborama.com/contacts/
*/
function x17() {
    var x1cl, x1ey = x1bb.x1cj();
    x1ey.x1ie = x1bb.x1nn(x1ey.x1ie,'wuid=&retargeting=&');
    x1ey.x1fN = 'https://cstatic.weborama.fr/advertiser/534/299/1649/2125/';
    x1ey.x1lp = '2779';



    x1ey.conf_oba = false;
    
    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;

    adperfobj.clicks = new Array();
    adperfobj.clicks[0] = 'https://nym1-ib.adnxs.com/click?TJa_ZPlL5j9I4XoUrkfhPwAAAKCZmRVAXI_C9Shc4T9mZmZmZmbmPxdyP6g52O9hKS7MaM_aoRqk2NtZAAAAAOo_bwBNDgAAHwUAAAIAAACrqLEEX9sOAAAAAABVU0QAVVNEACwB-gB7pQAAAAABAgUCAAAAAKoA3SY5fgAAAAA./cnd=%21RwlUpAiItOAIEKvRxiUY37Y7IAAoADoJTllNMjoyOTMy/bn=61750/referrer=nytimes.com/clickenc=https%3A%2F%2Frtbprojects.solution.weborama.fr%2Ffcgi-bin%2Fdispatch.fcgi%3Fa.A%3Dcl%26a.si%3D534%26a.te%3D2411%26a.aap%3D2779%26a.agi%3D163%26g.lu%3D' + (adperfobj.landing_urls[0] || '');


    try{
        adperfobj.imptrackers = new Array(
                
        );

        adperfobj.clicktrackers = (new Array(
                
        ).concat(adperfobj.clicktrackers));

        adperfobj.eventtrackers = (new Array(
                
        ).concat(adperfobj.eventtrackers));
    }catch(scr_e){}



    x1ey.addTrackers(adperfobj);
    x1ey.addClicks(adperfobj);

    x1cl = new x1bb.x1ig();
x1cl.x1c(x1ey, 9523, 'index.html', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');




    x1ey.x1gQ();


}
x1L('adperf_core_' + adperf_version + '_scrambled.js');