const defaultFilters=["*://*.instagram.com/*",]



chrome.webRequest.onBeforeRequest.addListener(

    (details)=>{
        return{cancel:true}},
    {urls: defaultFilters},
    ["blocking"]
)
