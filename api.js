var i;
$.ajax({
url:"https://api.spotify.com/v1/search?q=artist:nickelback&type=album"
}).done(function(ep){
	console.log(ep);

	let count = ep.tracks.items.length;
	let html = `
	<div id ="eugene"></div>`;

	document.querySelector('#gene').innerHTML = html;
	html = `<h4>Playlist</h4>
	<div class ="table-wrapper">
	<table class = "alt">
	<thread>
	<tr>
	<th>Name</th>
	<th>Track</th>
	</tr>
	</thread>
	<tbody>`;

	for(i=0;i<count;i++){
		html +=`
		<tr>
		<td>${gene.tracks.items[i].name}</td>
		<td><audio controls><source src ="${gene.tracks.items[1].preview_url}" type="audio/ogg"></audio></td>
		</tr>
		`;}


html +=`</tbody>`;
	document.querySelector('#eugene').innerHTML= html;



});