var searchURL = window.location.search;
var paras=parseUrl(searchURL);
var key=paras["key"];
function parseUrl(searchURL){
	searchURL = searchURL.substring(1, searchURL.length);
    var splits = searchURL.split("&");
    kvs={};
    for (var i = splits.length - 1; i >= 0; i--) {
    	kv=splits[i].split("=");
    	kvs[kv[0]]=kv[1];
    }
    return kvs;
}