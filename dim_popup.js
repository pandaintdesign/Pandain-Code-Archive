var dim_popup = dim_getCookie('dim_popup')
if (dim_popup == "" || dim_popup == null ) {
    jQuery_bs("#dim_popup").addClass('open');
}        
    
jQuery_bs("#dim_popup_close").click(function(){
    jQuery_bs("#dim_popup").removeClass('open');
});
jQuery_bs("#dim_popup_today").click(function(){
    dim_setCookie('dim_popup', '1', 0, '/');
    jQuery_bs("#dim_popup").removeClass('open');
});

function dim_getCookie( name ){
var dc = document.cookie;
var prefix = name + "="
var begin = dc.indexOf("; " + prefix);
if ( begin == -1 ){
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
}
else begin += 2
var end = document.cookie.indexOf(";", begin);
if (end == -1) end = dc.length;
return unescape(dc.substring(begin + prefix.length, end));
}
function dim_setCookie( name, value, expires, path, domain, secure ){
var curCookie = name + "=" + escape( value ) +
    ( ( expires ) ? "; expires=" + expires.toGMTString() : "" ) +
    ( ( path ) ? "; path=" + path : "" ) +
    ( ( domain ) ? "; domain=" + domain : "" ) +
    ( ( secure ) ? "; secure" : "" );
document.cookie = curCookie;
}