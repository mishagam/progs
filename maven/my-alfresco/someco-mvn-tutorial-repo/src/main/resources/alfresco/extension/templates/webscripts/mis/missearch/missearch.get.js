model["fromJS"] = "Misha Search from JS!";
logger.error("Msg: Mis Search was called");

function main() {
	logger.error("Inside missearch.get.js");
	var mispapers = search.luceneSearch("TYPE:\"{http://www.someco.com/model/content/1.0}mishaText\"");
	if (mispapers == null || mispapers.length == 0) {
	    logger.error("No misha texts found");
	    status.code = 404;
	    status.message = "No misha texts found";
	    status.redirect = true;
	} else {
	    var mishaTextsInfo = new Array();
	    for (i = 0; i < mispapers.length; i++) {
            var mp = mispapers[i];
	        var paper = "" + mispapers[i];
            var content = mp.content;  // worked, provided html
            var props = mispapers[i].properties;
            var title = props["{http://www.alfresco.org/model/content/1.0}title"]
	        mishaTextsInfo[i] = "One more paper Title: " + title;
            logger.error("one more mis text paper added: " + paper);
            sprops = "\n"
            for(var po in props){
                sprops += po + " : " + props[po] + "\n"
            }
            logger.error("props: " + sprops);
	    }
	    model.mishatexts = mishaTextsInfo.join(";<br>");
        
        // create file
        createfile()
	    return model;
	}
}

function createfile() {
    var myfile = userhome.createFile("newfile07.txt");
    myfile.content = "Some my file content"
    myfile.properties["{http://www.alfresco.org/model/content/1.0}title"] = "My File Title"
    myfile.save()   
    
}

main();
