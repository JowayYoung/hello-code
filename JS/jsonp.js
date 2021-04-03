function Jsonp(url, name, cb) {
	const script = document.createElement("script");
	script.src = url;
	script.async = true;
	window[name] = data => cb && cb(data);
	document.body.appendChild(script);
}