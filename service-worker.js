chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(event => {
	console.info(`Blocked: ${event.request.url}`)
})