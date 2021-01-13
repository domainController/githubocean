// create a context menu
browser.contextMenus.create({
	id: "GitSearch",
	title: "Search on GitHub",
	contexts: ["selection"]
});

// add action listener to the context menu

browser.contextMenus.onClicked.addListener(launchMyGitSearch);

function launchMyGitSearch(info, tab){
	const gitSearchQuery = "https://github.com/search?q=" + info.selectionText;

	  browser.tabs.create({url:gitSearchQuery});
}
