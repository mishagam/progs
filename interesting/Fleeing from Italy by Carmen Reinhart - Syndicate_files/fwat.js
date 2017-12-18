var FlowliWat=function(){function n(){this.SourceIdCustomVariable={Index:1,Name:"SourceId"};this.DocumentUrlCustomVariable={Index:2,Name:"DocumentUrl"};this.DocumentLanguageCustomVariable={Index:3,Name:"DocumentLanguage"};this.EntranceTypeCustomVariable={Index:4,Name:"EntranceType"};this.SourceDocumentFullUrlCustomVariable={Index:5,Name:"SourceDocumentFullUrl"};this.UserEmailCustomVariable={Index:1,Name:"Email"};this.ArticleRootUrls=[];this.CopyrightTexts=[]}return n.prototype.LoadScript=function(n,t){var r=this,i=document.createElement("script");i.type="text/javascript";try{i.src=n}catch(u){console.error(u.message)}i.readyState?i.onreadystatechange=function(){var n=i.readyState;(n==="loaded"||n==="complete")&&(i.onreadystatechange=null,t.call(r))}:i.onload=t.bind(this);document.getElementsByTagName("head")[0].appendChild(i)},n.prototype.IsEmpty=function(n){return n==null||0===n.length},n.prototype.GetDocumentInfo=function(){var n={Url:null,Title:null,Language:null,FullUrl:null},f=document.querySelector("[data-flowli-url]"),u,o,i,r,e,s,t;if(f!=null)n.FullUrl=f.getAttribute("data-flowli-url"),n.Title=f.getAttribute("data-flowli-title");else if(this.ArticleRootUrls.length>0&&this.CopyrightTexts.length>0)for(u=0;u<this.ArticleRootUrls.length;u++)if(o=this.ArticleRootUrls[u].toLowerCase(),i=document.body.querySelectorAll("a[href*='"+o+"']"),i.length>0)for(r=0;r<i.length;r++)if(this.ContainCopyright(i[r])){e=i[r];n.FullUrl=e.href;n.Title=e.textContent.trim();(n.Title.slice(-1)=="”"||n.Title.slice(-1)=="“"||n.Title.slice(-1)=='"')&&(n.Title=n.Title.slice(0,-1));(n.Title.slice(0,1)=="”"||n.Title.slice(0,1)=="“"||n.Title.slice(0,1)=='"')&&(n.Title=n.Title.slice(1));n.Title=n.Title.trim().replace(/</g,"&lt;").replace(/>/g,"&gt;");break}return this.IsEmpty(n.FullUrl)?null:(n.FullUrl.slice(-1)=="/"&&(n.FullUrl=n.FullUrl.slice(0,-1)),s=n.FullUrl.toLowerCase().replace("http://","").replace("https://","").replace("//",""),t=s.split("/"),t.length>=4?(n.Url=t[t.length-2],n.Language=t[t.length-1]):(n.Url=t[t.length-1],n.Language="english"),n.Language=="commentary")?null:n},n.prototype.ContainCopyright=function(n){for(var t=n.parentNode.textContent.toLowerCase().replace('"',"'"),i=0;i<this.CopyrightTexts.length;i++)if(t.indexOf(this.CopyrightTexts[i].toLowerCase())>=0)return!0;return t.indexOf("project")>=0&&t.indexOf("syndicate")>=0&&t.indexOf("permission")>=0?!0:!1},n.prototype.Track=function(){var t,n;if(typeof FlowliWatConfig=="object"){if(typeof Piwik!="object"){this.LoadScript(FlowliWatConfig.TrackerServerUrl+"piwik.js",this.Track);return}(t=this.GetDocumentInfo(),t!=null||FlowliWatConfig.SiteId.toString()==FlowliWatConfig.SourceId)&&(n=Piwik.getTracker(FlowliWatConfig.TrackerServerUrl+"piwik.php",FlowliWatConfig.SiteId),t!=null&&(this.IsEmpty(t.FullUrl)||n.setCustomUrl(t.FullUrl),this.IsEmpty(t.Title)||n.setDocumentTitle(t.Title),n.setCustomVariable(this.SourceIdCustomVariable.Index,this.SourceIdCustomVariable.Name,FlowliWatConfig.SourceId.toString(),"page"),n.setCustomVariable(this.DocumentUrlCustomVariable.Index,this.DocumentUrlCustomVariable.Name,t.Url,"page"),n.setCustomVariable(this.DocumentLanguageCustomVariable.Index,this.DocumentLanguageCustomVariable.Name,t.Language,"page"),n.setCustomVariable(this.EntranceTypeCustomVariable.Index,this.EntranceTypeCustomVariable.Name,"0","page"),FlowliWatConfig.SiteId.toString()!=FlowliWatConfig.SourceId&&(n.setCustomVariable(this.SourceDocumentFullUrlCustomVariable.Index,this.SourceDocumentFullUrlCustomVariable.Name,window.location.href,"page"),n.disableCookies())),FlowliWatConfig.SiteId.toString()==FlowliWatConfig.SourceId&&FlowliWatConfig.UserId&&n.setUserId(FlowliWatConfig.UserId),FlowliWatConfig.SiteId.toString()==FlowliWatConfig.SourceId&&(Piwik.MediaAnalytics.setPiwikTrackers([n]),n.setDownloadClasses("download-link"),n.enableLinkTracking(!1),Piwik.MediaAnalytics.scanForMedia()),n.trackPageView())}},n}(),_flowliTracker=new FlowliWat;_flowliTracker.Track();
//# sourceMappingURL=flowli.wat.min.js.map
