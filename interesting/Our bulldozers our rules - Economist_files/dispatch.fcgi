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
    x1ey.x1fN = 'http://cstatic.weborama.fr/advertiser/1594/14/283/418/';
    x1ey.x1lp = '331';



    x1ey.conf_oba = true;
    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;

    adperfobj.clicks = new Array();
    adperfobj.clicks[0] = 'https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssBZzBs6AtzyA0b7v9bM8ugxfRDI4BfMtH_y90QM0mzVZnL5a6iDmc2Iva1F2h6-6G_y_wlBRas4iBiWn00BWjFOZDHTxiwp5kFw6EMRkII5kQX-LX7yvC2zro-s0eLF49noYI0AgCl1MueLTNQu9qBufCCAk7rusfv2kgvs-EoaqKRbzn55OE5Mp2owU6kwQikBIk&sai=AMfl-YSWDKfMBgXCsvnJ35-LjS-rJ-X9l1AmV_H0LgEwwnkm28-lyB7XFoNW-ig__YHgAP5EdUa4Nu98ZA&sig=Cg0ArKJSzBn7fI8rSzV3EAE&urlfix=1&adurl=http%3A%2F%2Fie.solution.weborama.fr%2Ffcgi-bin%2Fdispatch.fcgi%3Fa.A%3Dcl%26a.si%3D1594%26a.te%3D610%26a.aap%3D331%26a.agi%3D88%26g.lu%3D' + (adperfobj.landing_urls[0] || '');


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
x1cl.x1c(x1ey, 4759, '728x90-DataMining.html', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');
x1cl = new x1bb.x1hW();
x1cl.x1c(x1ey, 4758, '728x90-DataMining_TheEconomist.gif', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');




    x1ey.x1gQ();


}
x1L('adperf_core_' + adperf_version + '_scrambled.js');