﻿function MM_swapImgRestore() { var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc } function MM_preloadImages() { var d = document; if (d.images) { if (!d.MM_p) d.MM_p = new Array(); var i, j = d.MM_p.length, a = MM_preloadImages.arguments; for (i = 0; i < a.length; i++) if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i] } } } function MM_findObj(n, d) { var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) { d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p) } if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n]; for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document); if (!x && d.getElementById) x = d.getElementById(n); return x } function MM_swapImage() { var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3) if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2] } } function MM_showHideLayers() { var i, p, v, obj, args = MM_showHideLayers.arguments; for (i = 0; i < (args.length - 2); i += 3) with (document) if (getElementById && ((obj = getElementById(args[i])) != null)) { v = args[i + 2]; if (obj.style) { obj = obj.style; v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v } obj.visibility = v } } jQuery(function ($) { $('.gnb>button').click(function () { $(this).next().slideToggle(200) }); $('.gnb>ul>li').mouseover(function () { $(this).addClass('active').siblings().removeClass('active') }).focus(function () { $(this).mouseover() }); $('.gnb').mouseout(function () { $(this).contents().contents().removeClass('active') }) }); function IsEmail(v) { return (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(v) } function IsBlank(v) { if (v == '') return false; if (((/^\s+|\s+$/g).test(v)) == true) return false; return true } function IsEnter(evnt) { if (evnt) { var charCode = evnt.keyCode || evnt.which; if (charCode == 13) { return true } else { return false } } return true } function IsInt(v) { return (/^[0-9]+$/).test(v) ? true : false } function IsIntEng(v) { return (/^[0-9a-zA-Z]+$/).test(v) ? true : false } function IsEng(v) { return (/^[a-zA-Z]+$/).test(v) ? true : false } function GetTrim(v) { return v.replace(/(^\s*)|(\s*$)/g, "") } function GetLTrim(v) { return v.replace(/(^\s*)/, "") } function GetRTrim(v) { return v.replace(/(\s*$)/, "") } function GetByteLength(v) { var cnt = 0; for (var i = 0; i < v.length; i++) { if (v.charCodeAt(i) > 127) cnt += 2; else cnt++ } return cnt } function GetInt(v) { if (!isNaN(v)) { return parseInt(v) } else { return null } } function IsMobileBrowser() { if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { return true } else return false } function ReadCookie(name) { str = document.cookie; start = str.indexOf(name); if (start == -1) return ''; start = start + name.length + 1; end = str.indexOf(";", start); if (end == -1) end = str.length; str = str.substring(start, end); return unescape(str) } function SetComma(num) { var len, point, str; num = num + ""; point = num.length % 3; len = num.length; str = num.substring(0, point); while (point < len) { if (str != "") str += ","; str += num.substring(point, point + 3); point += 3 } return str } function CheckNumber() { var e = event.keyCode; window.status = e; if (e >= 48 && e <= 57) return; if (e >= 96 && e <= 105) return; if (e >= 37 && e <= 40) return; if (e == 8 || e == 9 || e == 46) return; event.returnValue = false } function popMessage(varTitle, varMSG, varGotoURL) { popMessageBackGround(); $("#CM_commonBarTitle").text(varTitle); $("#CM_layer_title").text(varMSG); if (varGotoURL.length == 0) { popUpHide() } else { $("#CM_ALINK").attr('href', varGotoURL) } $("#CM_commonLayer").show() } function popMessageBackGround() { $('#CM_backLayer').show(); $('#modalbg_CM_commonLayer').css({ 'height': '100%' }); $('#modalbg_CM_commonLayer').show() } var popUpHide = function () { $('#CM_backLayer').hide(); $("#CM_commonLayer").hide(); $("#modalbg_CM_commonLayer").hide() } 