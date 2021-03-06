define(function(){

	var cookieName = 'xmasName';

	function setCookie(c_name,value,exdays)
	{
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value = escape(value) + ((exdays===null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie = c_name + "=" + c_value;
	}

	function getCookie(c_name)
	{
		var i,x,y,ARRcookies=document.cookie.split(";");
		for ( i = 0; i < ARRcookies.length; i++ )
		{
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");
			if ( x === c_name ) {
				return unescape(y);
			}
		}
	}

	function getName () {
		return getCookie(cookieName);
	}

	function hasName () {
		return !!getCookie(cookieName);
	}

	function setName (newName) {
		if(getName() !== newName) {
			setCookie(cookieName, newName, 90);
		}
	}

	return {
		hasName : hasName,
		setName : setName,
		getName : getName
	};
});