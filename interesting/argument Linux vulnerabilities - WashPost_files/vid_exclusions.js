//= require_tree .

window.top.videoExclusions = {
  vid_excl_cat: [],
};

/**
  * Checks if argument is an Array.
  * @param {*} a The data type to check.
  * @return {Boolean} true if argument is Array, false otherwise.
*/
function isArray(a){
   return Array.isArray ? Array.isArray(a) : a instanceof Array;
}

/**
  * Checks each word in an array to see if that word (including variations) exists in a string.
  * @param {Array|String} wordList A list of words to check for.
  * @param {String} str String of words to check against.
  * @param {Boolean} opt_noVariations Set to true to just check exact words, without variations.
  * @return {Boolean} Returns true if a match is found, else returns false.
*/
function wordMatch(wordList, str, opt_noVariations) {
    opt_noVariations = opt_noVariations || false;
    wordList = isArray(wordList) ? wordList : [wordList];
    var regex = [],
      variations = opt_noVariations ? '' : '(|s|es|ed|ing|er)',
      l = wordList.length;
    if(l && str){
      while(l--) {
        regex.push(wordList[l] + variations);
        // console.log(regex);
      }
        regex = '\\b' + regex.join('\\b|\\b') + '\\b';
      return (new RegExp(regex, 'i').test(str));
    }
  return false;
}

//var keywords1 = ['ISIS','two','corrupt', 'four','shoot','shell'];

/**
  * Checks a String/Array for matched words against the exclusion categories' lists
  * @param {Array|String} wordList list of words to check for
  * @return {Array} Returns an array of matched categories 
*/
function vidExclusions(keywords) {
  var vid_excl = [],
  obj = {
    natural_disaster : ['shell', 'exxon', 'citgo', 'bp', 'chevron', 'hess', 'sunoco','disaster', 'fire', 'explosion', 'oil', 'coal', 'death', 'dead', 'quake', 'earthquake','tsunami', 'tornado', 'hurricane', 'flood','bed bug','infestation', 'gas'],
    human_disaster : ['ISIS', 'ISIL', 'Al Qaeda', 'Syria', 'Syrian', 'Assad', 'shooter', 'shooting', 'migrants', 'aylan kurdi', 'refugee crisis', 'drown', 'shoot', 'vatican', 'spanair', 'aground', 'rescue', 'attack', 'disaster', 'explosion', 'war', 'hostage', 'terror', 'terrorist', 'bomb', 'blast', 'mining', 'miner', 'violence', 'riot', 'crash', '9/11', 'sept. 11', 'september 11', 'behead', 'United 93', 'pistorius', 'ebola', 'rape', 'rapist', 'amtrak', 'derailment', 'hillary clinton', 'benghazi'],
    financial_crisis : ['corrupt', 'goldman', 'aig', 'foreclosure', 'enron', 'sec', 'mortgage','Insurance', 'health', 'bank', 'wall street', 'protest', 'labor strike', 'union strike','labor issue', 'union issue', 'teacher strike', 'teachers strike', 'election'],
    inappropriate : ['gambling','sex','alcohol','pornography']
  },
  key;

  var isMedia = window.wp_meta_data && window.wp_meta_data.contentType && window.wp_meta_data.contentType[0] === "MediaGallery";
  var isVideo = window.wp_meta_data && window.wp_meta_data.contentType && window.wp_meta_data.contentType[0] === "VideoStory";

  if (isMedia || isVideo) {
      vid_excl.push('media');
    }
    
    if ((/washingtonpost\.com|personalpost|obituaries|weather|jobs\/search/).test(window.commercialNode) || isVideo) {
      vid_excl.push('intrusive');
    }
  for(key in obj) {
    if(obj.hasOwnProperty(key) && wordMatch(obj[key], keywords)) {
      vid_excl.push(key);
    }
  }
  return vid_excl;
}

//window.top.videoExclusions.vid_excl_cat = vidExclusions(keywords1);
//console.log("vid_excl: ", vidExclusions(keywords1));







