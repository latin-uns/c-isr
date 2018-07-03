var isIE = (navigator.userAgent.indexOf('MSIE') != -1);
var isIE11 = (navigator.userAgent.indexOf('Trident') != -1);
var isFF = (navigator.userAgent.indexOf('Firefox') != -1);
var isChrome = (navigator.userAgent.indexOf('Chrome') != -1);
var isSafari = (navigator.userAgent.indexOf('Safari') != -1);
var isOpera = (navigator.userAgent.indexOf('Opera') != -1);
var ClassID = "CLSID:8F184CF0-0C87-4D4C-A343-355DE74E6BCC";
var FFID = "application/softnyxlauncher,version=1.0";
var LauncherVersion = "20121015_SoftnyxWeb";


var LoadIE = "0";
var LoadFF = "0";

var Load_PluginSucess = "1";
var Error_LoadPlugin = "2";
var Error_LoadIE = "3";
var Error_LoadFF = "3";

var LauncherUser = "4"
var LauncherNotuse = "5";

var Sucess = "9";

LoadPlugin();
//브라우저에 따른 activeX나 플러그인 찾기
function LoadPlugin() {
    if (isIE || isIE11) {
        return LoadPluginIE();
    }
    else if (isFF || isChrome || isSafari || isOpera) {
        navigator.plugins.refresh(false);
        return LoadPluginFF();
    }
    else {
        return Error_LoadPlugin;
    }
}

function RegeditCheck() {

    if (isIE || isIE11) {
        return Regedit_CheckIE();
    }
    else if (isFF || isChrome || isSafari || isOpera) {
        navigator.plugins.refresh(false);
        return Regedit_CheckFF();
    }
    else {
        return Error_LoadPlugin;
    }

}

function Regedit_CheckIE() {

    try {
        var obj = document.myX.Check_Regedit(); //document.myx;  //new ActiveXObject("Softnyx_Launcher_Start");

        if (obj != 1) {

            return Error_LoadIE;
        }

        else {
            return Load_PluginSucess;
        }
    }
    catch (e) {
        return Error_LoadIE;
    }
    return Error_LoadIE

}

function Regedit_CheckFF() {

    for (var i = 0; i < navigator.mimeTypes.length; i++) {

        if (FFID == navigator.mimeTypes[i].type) {
            if (navigator.mimeTypes[i].enabledPlugin != null) {
                return Load_PluginSucess;
            }
            else {

            }
        }
        else {

        }
    }
    return Error_LoadIE;
}


//IE라면
function LoadPluginIE() {

    var IEObject = '<OBJECT id="myX" CLASSID="clsid:8F184CF0-0C87-4D4C-A343-355DE74E6BCC" width="0" height="0"></OBJECT>';
    var hiddenLauncher = document.getElementById('hidIELauncher');
    if (hiddenLauncher) {
        document.getElementById('hidIELauncher').innerHTML = '';
        hiddenLauncher.innerHTML = IEObject;

    }
    else {

        return Error_LoadIE;
    }

    return LoadIE;
}

//FF라면
function LoadPluginFF() {
    var launcherHTML = '<EMBED ID="myX" WIDTH="0" HEIGHT="0" TYPE="' + FFID + '"  style="visibility: hidden"> </EMBED>';

    var hiddenLauncher = document.getElementById('hidIELauncher');
    if (hiddenLauncher) {
        hiddenLauncher.innerHTML = '';
        hiddenLauncher.innerHTML = launcherHTML;
    }
    else {
        return Error_LoadFF;
    }

    return LoadFF;
}

//런처 실행
function Start_GameLauncher(id, pass, game, to, serviceType) {

    try {
        var ctl = document.getElementById("myX");
        var result = "";
        if (isIE || isIE11) {
            ctl = document.myX;
        }
        if (ctl != null && ctl != "") {
            result = ctl.Load_Event(serviceType, id, pass, game, to);
        }
        else {
            return LauncherNotuse;
        }

        if (result == "1" || result == 1)
            return LauncherUser;
        else
            return LauncherNotuse;

    }
    catch (e) {
        return LauncherNotuse;
    }
}

function Check_Version() {
    var version = "";
    try {
        var ctl = document.getElementById("myX");
        var result = "";
        if (isIE || isIE11) {
            ctl = document.myX;
        }

        if (ctl != null && ctl != "") {
            if (LauncherVersion == ctl.CheckVersion())
                return "T"
        }

    }
    catch (e) {
        return "F";
    }

    return "F";

}

function isWinDesktop() {
    var filter = "win16|win32|win64";
    if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
            return false;
        } else {
            return true;
        }
    }
}

function bar(arg) {

}