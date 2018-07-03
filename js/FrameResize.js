    var iframeids = "frmContent"
    var iframehide = "yes"
    var getFFVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")).split("../index.html")[1]
    var FFextraHeight=parseFloat(getFFVersion)>=0.1? 16 : 0

    function resizeCaller() 
    {
        var dyniframe=new Array()
				
        if (document.getElementById)
            resizeIframe(iframeids)

        if ((document.all || document.getElementById) && iframehide=="no") 
        {
            var tempobj=document.all? document.all[iframeids] : document.getElementById(iframeids)
            tempobj.style.display="block"
        }

    }

    function resizeIframe(frameid) 
    {
        var currentfr=document.getElementById(frameid)
        
        if (currentfr)
        {
            currentfr.style.display="block"

            if (currentfr.Document && currentfr.Document.body.scrollHeight)
                currentfr.height = currentfr.Document.body.scrollHeight + 50;            
            else if (currentfr.contentDocument && currentfr.contentDocument.body.offsetHeight)
                currentfr.height = currentfr.contentDocument.body.offsetHeight + FFextraHeight + 50;

            if (currentfr.addEventListener)
                currentfr.addEventListener("load", readjustIframe, false)
            else if (currentfr.attachEvent)
            {
                currentfr.detachEvent("onload", readjustIframe)
                currentfr.attachEvent("onload", readjustIframe)
            }
       }
    }

    function readjustIframe(loadevt) 
    {
        var crossevt=(window.event)? event : loadevt
        var iframeroot=(crossevt.currentTarget)? crossevt.currentTarget : crossevt.srcElement

        if (iframeroot)
            resizeIframe(iframeroot.id);
    }

    function loadintoIframe(iframeid, url) 
    {
        if (document.getElementById)
            document.getElementById(iframeid).src=url
    }

    function SetSize()
    {
        if (window.addEventListener)
            window.addEventListener("load", resizeCaller, false)
        else if (window.attachEvent)
            window.attachEvent("onload", resizeCaller)
        else
            window.onload=resizeCaller
    }