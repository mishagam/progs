var onLock = function(pubId, artId) {
    // clear the paygated content
    $('#pdfDownloadLink').html('PDF link loading...');
};

var onUnlock = function(pubId, artId) {
    console.log(pubId,artId, "cointent");
    var tk = cointent.getAuthToken();
    var params = tk || {};
    params.publisher = pubId;
    params.article = artId;

    $.ajax({
        type : 'get',
        url : '/getcontent.php',
        data : params,
        dataType : 'json',
        success : function (response) {
            if (!response) {
                $('#pdfDownloadLink').html("No response content from server.");
                return;
            }
            if (!response || !response.file || !response.expire) {
                $('#pdfDownloadLink').html("Response from server is not valid JSON or does not contain file URL.");
                if (response.error) {
                    console.error(response.error);
                }
                return;
            }
            var strLink = '<a href="' + response.file + '">Download PDF Version</a> <br/> ';
            if(response.fileClean)
            {
                strLink += '<a href="'+ response.fileClean + '">Download G-Rated PDF Version</a> <br/> '
            }
            strLink += '(Links expires in <span id="linkExpire">' + response.expire + '</span> sec)';

            $('#pdfDownloadLink').html(strLink);
            setupCounter(response.expire); // set up number of seconds to count down
        },
        error : function (response) {
            $('#pdfDownloadLink').html('Network error.');
            console.error(response);
        }
    });
};

if (window.cointent) {
    cointent.ready(function() {
        cointent.addLockCallback(onLock);
        cointent.addUnlockCallback(onUnlock);
    });
}

var interv;
var setupCounter = function(sec) {
    interv = setInterval(function() {
        var current = parseInt($('#linkExpire').text());
        if (current > 1) {
            $('#linkExpire').html( (current-1) );
        } else {
            $('#linkExpire').html( 'Expired!' );
            clearInterval(interv);
        }
    }, 1000);
};