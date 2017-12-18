
        var _SUB2metadata =
        {
                clientid       : "CD09D60B-7F5A-4892-9A6F-DF741EBB2158",
                clientname     : "Sub2",
                serviceversion : "v13.0",
                cookiedomain   : ".sub2tech.com",
                callingdomain  : "",
                newsletter     : "",
                login          : "",
                applynow       : "",
                applynow       : "",
                debug          : "N",
                collectcookies : "N",
                testurn        : 0

        };

        var _SUB2_queue = _SUB2_queue || [];
        function S2Tech_2Prompt()                                              { if( _SUB2metadata.debug == "Y" ) alert( "QUEUE:S2Tech_2Prompt"               ); _SUB2_queue.push( [ 'S2Tech_2Prompt' ] ); }
        function S2Tech_MatchData_NA( t, f, s, a1, a2, a3, a4, p, e, l, m, o ) { if( _SUB2metadata.debug == "Y" ) alert( "QUEUE:S2Tech_MatchData_NA"          ); _SUB2_queue.push( [ 'S2Tech_MatchData_NA', t, f, s, a1, a2, a3, a4, p, e, l, m, o ] ); }
        function S2Tech_StoreRegistrationData( f, s, e )                       { if( _SUB2metadata.debug == "Y" ) alert( "QUEUE:S2Tech_StoreRegistrationData" ); _SUB2_queue.push( [ 'S2Tech_StoreRegistrationData', f, s, e ] ); }
        function S2Tech_2Shop()                                                { if( _SUB2metadata.debug == "Y" ) alert( "QUEUE:S2Tech_2Shop"                 ); _SUB2_queue.push( [ 'S2Tech_2Shop' ] ); }
        function S2Tech_LastProductViewed()                                    { if( _SUB2metadata.debug == "Y" ) alert( "QUEUE:S2Tech_LastProductViewed"     ); _SUB2_queue.push( [ 'S2Tech_LastProductViewed' ] ); }
        function S2Tech_addOrder(o,a,t,tx,sh,ci,co,cy)                         { if( _SUB2metadata.debug == "Y" ) alert( "QUEUE:S2Tech_addOrder"              ); _SUB2_queue.push( [ 'S2Tech_addOrder', o,a,t,tx,sh,ci,co,cy ] ); }
        function S2Tech_addItem(o,s,n,c,p,q)                                   { if( _SUB2metadata.debug == "Y" ) alert( "QUEUE:S2Tech_addItem"               ); _SUB2_queue.push( [ 'S2Tech_addItem', o,s,n,c,p,q ] ); }
        function S2Tech_addItemToBasket(s, n, p, q, a)                         { if (_SUB2metadata.debug == "Y")  alert("QUEUE:S2Tech_addItemToBasket"        ); _SUB2_queue.push( ['S2Tech_addItemToBasket', s, n, p, q, a]); }
        function S2Tech_updateItemInBasket(s, n, p, q, a)                      { if (_SUB2metadata.debug == "Y")  alert("QUEUE:S2Tech_updateItemInBasket"     ); _SUB2_queue.push( ['S2Tech_updateItemInBasket', s, n, p, q, a]); }
        function S2Tech_SendDataToHub(c, d)                                    { if (_SUB2metadata.debug == "Y")  alert("QUEUE:S2Tech_SendDataToHub"     	  ); _SUB2_queue.push( ['S2Tech_SendDataToHub', c, d]); }

	var __SUB2 = {

			clientid       	: "",
			parameters 	: null,
			serviceversion 	: "v13.0",
			interval 	: 0,
			version 	: "v4",
			v1 		: 0,
			v2 		: 0,
			v3 		: 0,
			v4 		: 0,

			push : function (fn, p){
			
			},
			
			run : function () {

			}
	};