/* global $, domain_name */
/**
 *
 * @param jQueryJobs
 *   jQuery object to use. This is to help use versioning.
 */
function economist_jobs_init(jQueryJobs) {
  "use strict";
  /* We had to use an ajax call rather than the jquery getJSON method to prevent
   * the data being called multiple times.
   */
  window.jQueryJobs = jQueryJobs;
  jQueryJobs.ajax({
    // domain_name variable is supplied by code sent to DART to curcumvent cross domian issues.
    url : "//media.economist.com" + '/ads_jobs.json',
    // Tell ajax this is a jsonp call.
    dataType: 'jsonp',
    // Cache is set to true because the jsonp datatype automatically
    // sets cache to false resulting in multiple calls.
    cache: true,
    // jsonp must be set to false to prevent multiple calls.
    jsonp: false,
    // Jquery documentation gives this as jsonpCallback (capital C) at the
    // time of writing this did not work.
    jsonpcallback: 'economist_jobs'
  });
}

function logo_theme(job) {
  "use strict";

  return '<div id="classified_ads_jobs" style="display:inline-block; width:109px; height:109px; vertical-align:top; text-align: center; position:relative; padding:8px; font-family:Verdana,Arial,sans-serif; font-size:62.5%;">' +
    '<img src="' + job.logo + '" alt="' + job.employer + '" height="50px" border="0"/>' +
    '<a target="_blank" style="text-decoration:none; color:#08526D;" onMouseOver="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'none\'" title="Read more or apply for ' + job.title + '" href="' + job.url + '" >' +
    '<h4 style="line-height: 12px; text-align:left; font-size:11px; color:#08526D; font-weight:normal; margin:1px; height:42px; overflow:hidden;">' + job.title_short + '</h4>' +
    '</a>' +
    '<div style="position:absolute; bottom:0; left:13px; border-top: 1px solid #E6E6E6; margin:3px 0 5px;">' +
    '<h6 style="line-height: 12px; font-size:9px; color:#CC0000; margin:3px 0 0;">Jobs.economist.com</h6>' +
    '</div>' +
    '</div>';
}

function nologo_theme(job) {
  "use strict";

  return '<div id="classified_ads_jobs" style="display:inline-block; width:109px; height:109px; vertical-align:top; text-align: center; position:relative; padding:8px; font-family:Verdana,Arial,sans-serif; font-size:62.5%;">' +
    '<h3 style="font-size:10px; min-height:40px; margin-bottom:0;">' + job.employer + '</h3>' +
    '<a target="_blank" style="text-decoration:none; color:#08526D;" onMouseOver="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'none\'" title="Read more or apply for ' + job.title + '" href="' + job.url + '" >' +
    '<h4 style="line-height: 12px; text-align:left; font-size:11px; color:#08526D; font-weight:normal; margin:1px; height:42px; overflow:hidden;">' + job.title_short + '</h4>' +
    '</a>' +
    '<div style="position:absolute; bottom:0; left:13px; border-top: 1px solid #E6E6E6; margin:3px 0 5px;">' +
    '<h6 style="line-height: 12px; font-size:9px; color:#CC0000; margin:3px 0 0;">Jobs.economist.com</h6>' +
    '</div>' +
    '</div>';
}

function economist_jobs (data) {
  "use strict";

  // Check some data came back, if not degrade to default.
  if (data.length === 0) { return; }
  var jobs = [], $ad_slot = null;
  // If there are no more slots, return.
  if (window.jQueryJobs(".jobad-slot:not('.job-ad-proc')").length === 0) {
    return;
  }
  else {
    $ad_slot = window.jQueryJobs(".jobad-slot:not('.job-ad-proc'):first").addClass('job-ad-proc');
  }
  window.jQueryJobs.each(data, function(i, item){
    job = {};
    job.title = item.title;
    job.url = item.url;
    job.employer = item.employer;
    job.hasLogo = item.hasLogo;
    if (item.hasLogo == 'true') {
      job.logo = item.logo;
    }
    else {
      job.logo = "";
    }
    jobs[jobs.length] = job;
  });

  // We check the job add slots again just to be sure.
  if (jobs.length > 0) {
    var rnd = Math.floor(Math.random()*(jobs.length));
    var job = jobs[rnd];

    if (job.title.length > 38) {
      job.title_short = job.title.substring(0, 35) + '&hellip;';
    }
    else {
      job.title_short = job.title;
    }

    if (job.hasLogo == 'true') {
      $ad_slot.html(logo_theme(job));
    }
    else {
      $ad_slot.html(nologo_theme(job));
    }
  }
}

/**
 * This is the ad that goes to Ad-Operations and is served.
 * This works in concert with ec_ads_jobs.js. This is here as
 * a reference.
 */
(function() {
  "use strict";

  // Localize jQuery variable
  var jQueryJobs;

  /******** Called once jQuery has loaded ******/
  function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQueryJobs = window.jQuery.noConflict(true);
    // Call our main function
    main();
  }

  /******** Our main function ********/
  function main() {
    jQueryJobs(document).ready(function(jQueryJobs) {
      // We can use jQuery 1.6.2 here
      economist_jobs_init(jQueryJobs);
    });
  }

  /******** Load jQuery if not present *********/
  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.6.2') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
      "//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          scriptLoadHandler();
        }
      };
    } else { // Other browsers
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  } else {
    // The jQuery version on the window is the one we want to use
    jQueryJobs = window.jQuery;
    main();
  }

})(); // We call our anonymous function immediately