document.addEventListener("DOMContentLoaded", ()=>{
	var u = document.URL.replace(/.*:\/\/.*?\/(.*)\??.*/, "$1").split("/");
	var last = u.pop();
	var all = '<a href="/">/</a>' ;
	var root = "" ;
	for (let e of u) {
		root += "/" + e ;
		all += `<a href="${root}">${e}/</a>`
	}
	if (last) {
		all += `<a href="${root}/${last}">${last}</a>`
	}
	document.getElementById("path404").innerHTML = all ;
}, {once: true,});
