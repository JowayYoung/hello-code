function Ajax({ data = {}, error = null, headers = {}, success = null, type = "get", url = "" }) {
	const xhr = new XMLHttpRequest();
	const method = type.toUpperCase();
	const params = StringifyUrlSearch(data); // eslint-disable-line
	if (method === "GET") {
		xhr.open(method, params ? `${url}${params}` : `${url}?t=${+new Date()}`, true);
		xhr.send();
	} else if (method === "POST") {
		xhr.open(method, url, true);
		Object.entires(headers).forEach(v => xhr.setRequestHeader(v[0], v[1]));
		xhr.send(params);
	}
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				success && success(xhr.responseText);
			} else {
				error && error(xhr.status);
			}
		}
	};
}

Ajax({
	error: err => console.log(err),
	success: res => console.log(res),
	url: "https://api.yangzw.vip:3168/blogTag"
});