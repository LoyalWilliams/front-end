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
	var searchURL = window.location.search;
	var dic=parseUrl(searchURL);
	alert(dic);
	console.log("dic:"+dic);
	alert(dic["key"]+":"+dic["key2"]);
    if(!dic["kdkd"])alert("1");else alert(2);
    if(dic["key"])alert("1");else alert(2);

	var para=window.location.search;
	// alert(para+":"+window.location.search);
	console.log(111)
	console.log("href:"+window.location.href);
	console.log("hash:"+window.location.hash);
	console.log("referrer:"+document.referrer);
	console.log("para:"+para);