

var IPEBrandID = (function() {
    var _url = location.href.toLowerCase();
    if (_url.search("bbc.co.uk/news") != -1 || _url.search("bbc.com/news") != -1) {
        return "1";
    } else if (_url.search("bbc.co.uk/travel") != -1 || _url.search("bbc.com/travel") != -1 ||
              _url.search("bbc.co.uk/travelnews") != -1 || _url.search("bbc.com/travelnews") != -1) {
        return "2";
    } else if (_url.search("bbc.co.uk/future") != -1 || _url.search("bbc.com/future") != -1) {
        return "3";
    } else if (_url.search("bbc.co.uk/autos") != -1 || _url.search("bbc.com/autos") != -1) {
        return "4";
    } else if (_url.search("bbc.co.uk/culture") != -1 || _url.search("bbc.com/culture") != -1) {
        return "5";
    } else if (_url.search("bbc.co.uk/capital") != -1 || _url.search("bbc.com/capital") != -1) {
        return "6";
    } else if (_url.search("bbc.co.uk/sport") != -1 || _url.search("bbc.com/sport") != -1) {
        return "7";
    } else if (_url.search(/bbc\.com\/?($|\?)/i) != -1) {
        return "8";
    } else if (_url.search("bbc.com/earth/world") != -1) {
        return "9";
    } else {
        return "99";
    }
})();
    
//SiteIDs for the hitCounter
//1 News: http://www.bbc.co.uk/news/ 
//2 Travel: http://www.bbc.com/travel 
//3 Future: http://www.bbc.com/future 
//4 Autos: http://www.bbc.com/autos 
//5 Culture: http://www.bbc.com/culture 
//6 Capital: http://www.bbc.com/capital 
//7 Sport: http://www.bbc.com/sport 


var IPEBrand = (function() {
    if (IPEBrandID == 1) {
        return "news";
    } else if (IPEBrandID == 2) {
        return "travel";
    } else if (IPEBrandID == 3) {
        return "future";
    } else if (IPEBrandID == 4) {
        return "autos";
    } else if (IPEBrandID == 5) {
        return "culture";
    } else if (IPEBrandID == 6) {
        return "capital";
    } else if (IPEBrandID == 7) {
        return "sport";
    } else if (IPEBrandID == 8) {
        return "home";
    } else if (IPEBrandID == 9) {
        return "earth";
    } else {
        return "";
    }
})();

var IPESurveys = { 
	//Configurations
	maxPageNum : 3, //maximum page count.
	pageCookie : "IPE_PAGE", //page count cookie name.
	done : "DONE", //Cookie value when hit max page delay.
	rateTotal : 1000,
	data : [
		{
			rate : function() { 
				return 1000; 
			},
			surveyID : 117154,
			langID : 1,
			urls : ["(bbc.co(m|\\.uk)/sport/.*/winter-olympics/|bbc.co(m|\\.uk)/sport/winter-olympics/)"],
			minPageViews : 1,
			maxPageViews : 3
		},
		{
			rate : function() { 
				var IPEurl = location.href.toLowerCase();
				if (IPEBrandID == 1) {
					if (IPEurl.search(/bbc\.com\/news\/\/?($|\?)/i) != -1 || IPEurl.search(/bbc\.co\.uk\/news\/\/?($|\?)/i) != -1) {
						return 50;
					} else {
						return 550;
					}
				} else if (IPEBrandID == 2) {
					return 480;
				} else if (IPEBrandID == 3) {
					return 400;
				} else if (IPEBrandID == 4) {
					return 800;
				} else if (IPEBrandID == 5) {
					return 600;
				} else if (IPEBrandID == 6) {
					return 800;
				} else if (IPEBrandID == 7) {
					if (IPEurl.search(/bbc\.com\/sport\/0\/\/?($|\?)/i) != -1 || IPEurl.search(/bbc\.co\.uk\/sport\/0\/\/?($|\?)/i) != -1) {
						return 50;
					} else {
						return 550;
					}
				} else if (IPEBrandID == 8) {
					return 100;
				} else if (IPEBrandID == 9) {
					return 700;
				} else {
					return 0;
				}
			},
			langID : 1,
			surveyID: 115604,
			urls : [".*"]
		}
	],

	//*****Library*****
	//check urls 
	searchURL: function (urls) {
		var currentURL = window.location.href;
		var re;
		for(var i = 0;i<urls.length;i++) {	
			re = new RegExp(urls[i],"i");
			if(re.test(currentURL)) {
				return true;
			}
		}
		return false;
	},
	
	getFirstMatch : function() {
		//Handle page view counter
		var val = IPESurveys.getPageCount();
		for(var i=0; i < IPESurveys.data.length; i++) {
			var minPageViews =  IPESurveys.data[i].minPageViews || 1;
			var maxPageViews =  IPESurveys.data[i].maxPageViews || 1;
			if(val >= minPageViews && val <= maxPageViews && IPESurveys.searchURL(IPESurveys.data[i].urls)) {
				return IPESurveys.data[i];
			}
		}
		
		return null;
	},
	//Get the current page count.  Calculates new count first time called
	getPageCount: function() {
		var IPECount = 1;
		var prev = IPESurveys.GetC(IPESurveys.pageCookie);
		if (prev !== IPESurveys.done) {
			prev = parseInt(prev, 10);
			if(!isNaN(prev)) {
				IPECount = prev + 1;
			}
			return IPECount;	
		}
		else{
			return IPESurveys.done;
		}
	},
	updatePageCount : function() {
		var pageCount = IPESurveys.getPageCount();
		if(pageCount > 0 && pageCount < IPESurveys.maxPageNum) {
			IPESurveys.CCook(IPESurveys.pageCookie, pageCount); //increase page counter
		} else if(pageCount >= IPESurveys.maxPageNum) {
			IPESurveys.CCook(IPESurveys.pageCookie, IPESurveys.done);
		}
	},
	CCook: function (n, v, d) {
		var exp = '';
		var dm = document.domain;
		if (d) {
			var dt = new Date();
			dt.setTime(dt.getTime() + (d * 24 * 60 * 60 * 1000));
			exp = '; expires=' + dt.toGMTString();
		}
		document.cookie = n + '=' + v + exp + '; path=/;domain=' + dm + ';';
	},
	
	GetC: function(n){
		var nEQ= n+'=';
		var ca= document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c= ca[i];
			while (c.charAt(0)==' ') c= c.substring(1,c.length);
			if (c.indexOf(nEQ) === 0) 
			return c.substring(nEQ.length,c.length);
		} 
		return null;
	},
	
	launchInvite: function(surveyID) {
		(function(d, f) {
			var s = d.createElement('script'), a = "async", b = "defer";
			s.setAttribute(a,a);
			s.setAttribute(b,b);
			s.type = 'text/javascript';  
			s.src = f;  
			d.getElementsByTagName('head')[0].appendChild(s);
		})(document, document.location.protocol + "//ips-invite.iperceptions.com/webValidator.aspx?sdfc=73ea2534-"+ surveyID +"-d4da8a55-a268-455d-bb84-a20552979e1a&lID=1&source=91787&loc=STUDY&cD=90&rF=False&iType=1&domainname=0");
	},
	
	main: function() {
		//check for mobile/tablet icon persistence
		if(/(^|;)\s*IPE_M_FORCE\s*=/.test(document.cookie)) {
			IPESurveys.launchInvite(IPESurveys.GetC("IPE_M_FORCE"));
		} else {
			var urlMatch = IPESurveys.getFirstMatch();
			if(urlMatch !== null && urlMatch.rate() > Math.floor(Math.random() * IPESurveys.rateTotal)) {
				IPESurveys.launchInvite(urlMatch.surveyID);  
			}
		
			IPESurveys.updatePageCount();
			
			var pageCount = IPESurveys.getPageCount();
			if(pageCount !== IPESurveys.done) {
				IPESurveys.CCook('IPE_FORCE', 1); //bypass regulator
			} else if(pageCount === IPESurveys.done && urlMatch !== null) {
				IPESurveys.CCook('IPE_BLOCK', 1);
			}
		}
	}
};

IPESurveys.main();
