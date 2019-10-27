// 2019 GUILLEUS Hugues

(async ()=>{
	try {
		var repos = await getRepos();
		var ls = document.getElementById("lsRepo")
		for (let repo of repos) {
			if (typeof repo.homepage != "string") {
				continue ;
			}
			if (repo.homepage.indexOf("https://huguesguilleus.github.io/") != 0) {
				continue ;
			}
			if (repo.name == "huguesguilleus.github.io") {
				continue ;
			}
			ls.insertAdjacentHTML("beforeend", `<li>
				<hgroup>${repo.name}</hgroup>
				<a href="${repo.homepage}">${repo.homepage}</a>
				${
					repo.description ? `<p>${repo.description}</p>` : ""
				}
			</li>` )
		}
	} catch (e) {
		console.log(e);
	}
})();

// Get the list of the repository
function getRepos() {
	var req = new XMLHttpRequest();
	req.open("get", "https://api.github.com/users/HuguesGuilleus/repos", true)
	req.send();
	return new Promise(function(resolve, reject) {
		req.addEventListener("load", event=>{
			resolve(JSON.parse(req.responseText));
		}, false);
		req.addEventListener("error", reject, false);
	});
}
