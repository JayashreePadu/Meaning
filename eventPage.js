var menuItem = {
	"id": "meaning",
	"title": "Meaning?",
	"contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
	return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']'); // prepares the string to remove blank spaces and special characters.
}

chrome.contextMenus.onClicked.addListener(function(clickData){
	if (clickData.menuItemId == "meaning" && clickData.selectionText){
		var dictUrl = "https://dictionary.com/browse/" + fixedEncodeURI(clickData.selectionText);
		var createData = {
			"url": dictUrl,
			"type": "popup",
			"top": 5,
			"left": 5,
			"width": screen.availWidth / 2,
			"height": screen.availHeight / 2
		};
		chrome.windows.create(createData, function(){});
	}
});