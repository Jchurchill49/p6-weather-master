function RefreshTrafficImages(iter) {
    if (iter == 1) return setTimeout("RefreshTrafficImages(2)", refresh * 1000);

    var tmp = "?" + (new Date()).getTime();

    if (camImageSrc != null) {
            document.images[camImageControlId].src = camImageSrc + tmp;
    }

    if (mapImageSrc != null) {
            document.images[mapImageControlId].src = mapImageSrc + tmp;
    }
    return setTimeout("RefreshTrafficImages(2)", refresh * 1000);
}

var camImageSrc = null;
if (typeof camImageControlId != "undefined") {
    if (camImageControlId != "") {
        camImageSrc = document.images[camImageControlId].src;
    }
}
var mapImageSrc = null;
if (typeof mapImageControlId != "undefined") {
    if (mapImageControlId != "") {
        mapImageSrc = document.images[mapImageControlId].src;
    }
}
if (refresh > 6)
    var refreshTimer = RefreshTrafficImages(1);




var hilitedZoom = "none";

/* Show an object  */
function showObject(object) {
    /* Simple version detection */
    var oldNS = (navigator.appName == "Netscape" && parseInt(navigator.appVersion, 10) < 5);
    var newNS = (navigator.appName == "Netscape" && parseInt(navigator.appVersion, 10) >= 5);
    var toshow, changeVis;
    if (newNS === true) {
        toshow = document.getElementById(object);
        toshow.style.visibility = "visible";
    }
    else {
        changeVis = ((oldNS === true) ? "document." + object + ".visibility = 'show';" : "document.all." + object + ".style.visibility = 'visible';");
        eval(changeVis);
    }
}

/* Hide an object */
function hideObject(object) {
    var oldNS = (navigator.appName == "Netscape" && parseInt(navigator.appVersion, 10) < 5);
    var newNS = (navigator.appName == "Netscape" && parseInt(navigator.appVersion, 10) >= 5);
    var toshow, changeVis;
    if (newNS === true) {
        toshow = document.getElementById(object);
        toshow.style.visibility = "hidden";
    }
    else {
        changeVis = ((oldNS === true) ? "document." + object + ".visibility = 'hide';" : "document.all." + object + ".style.visibility = 'hidden';");
        eval(changeVis);
    }
}

function hiliteZoom(objName) {
    if (hilitedZoom != ("none")) {
        if (hilitedZoom != objName) {
            hideObject(hilitedZoom);
        }
    }
    if (objName != "none") {
        showObject(objName);
    }
    hilitedZoom = objName;
}

// popup window
var windowObjectReference = null;
function showPopup(theURL, camurl, label, width, height) {
    if (width == 0) {
        width = 320;
    }
    
    winwidth = width + 60;

    if (height == 0) {
        height = 261;
    }
    
    winheight = height + 120;

    if (windowObjectReference == null || windowObjectReference.closed) {
        //scrollbars=0,resizable=1,toolbar=0,location=0,menubar=0  width=" + winwidth + ",height=" + winheight + 
        var popupfeatures = "top=240,left=120,toolbar=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1";

        windowObjectReference = window.open(theURL, "WSDOTTrafficCamWindow", popupfeatures);
    }
    else {
        windowObjectReference.focus();
    };

    var cam = windowObjectReference.document.getElementById("TrafficCameraImage");
    if (cam != null) {
        cam.src = camurl;
        cam.width = width;
        cam.height = height;
    }

    windowObjectReference.window.resizeTo(winwidth, winheight);

    return false;
}


function camLoad() {
    var cam = document.getElementById("TrafficCameraImage");
    var url_param = gup("camurl");
    cam.src = url_param;
}

function gup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}

function menuPosition(menuId) {
    var menuselection = document.getElementById(menuId);
    if (menuselection != null) {
        menuselection.className = 'menuSelected';
    }
}

function HighlightCamera(camdivid) {
    var camdiv = document.getElementById(camdivid);
    if (camdiv != null)
        camdiv.className = 'cameraIconSelected';
}