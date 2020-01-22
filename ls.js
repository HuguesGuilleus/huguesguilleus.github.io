// 2019 GUILLEUS Hugues

document.addEventListener("DOMContentLoaded", async () => {
	let ls = document.getElementById("lsRepo");
	(await getRepos()).filter(repo => !repo.archived && repo.description)
		.filter(repo => repo.name != "huguesguilleus.github.io")
		.sort((r1, r2) => r1.name < r2.name)
		.forEach(repo => ls.insertAdjacentHTML("beforeend", `<li>
			<hgroup>
				<a href="${repo.html_url}" title="GitHub" ><img class="mark" src="/GitHub-Mark.png"></a>
				${repo.name}
				${
					repo.homepage ? `<a href="${repo.homepage}">${repo.homepage}</a>` :""
				}
			</hgroup>
			${
				repo.description ? `<p>${repo.description}</p>` : ""
			}
			</li>`));

	let r = document.getElementById("repository");
	if (r) {
		r.hidden = false;
	}
}, {
	once: true,
});

// Get the list of the repository
function getRepos() {
	var req = new XMLHttpRequest();
	req.open("get", "https://api.github.com/users/HuguesGuilleus/repos", true)
	req.send();
	return new Promise(function (resolve, reject) {
		req.addEventListener("load", event => {
			resolve(JSON.parse(req.responseText));
		}, false);
		req.addEventListener("error", reject, false);
	});
}
