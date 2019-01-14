function getColor() {
	//建立数组
	var arr1 = new Array();
	var arr2 = new Array();

	for(i = 0; i < 9; i++) {
		arr1.push(i);
	}
	for(y = 0; y < 3; y++) {
		var x = Math.floor(Math.random() * arr1.length);
		arr2.push(arr1[x]);
		arr1.splice(x, 1);
	}
	closeColor();
	//随机颜色
	for(z = 0; z < 3; z++) {
		var rgb;
		function rgbc() {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			var rgb = "rgb(" + r + "," + g + "," + b + ")";
			return rgb;
		}
		document.getElementById("box" + arr2[z]).style.background = rgbc();
	}

}

function closeColor() {
	for(q = 0; q < 9; q++) {
		document.getElementById("box" + q).style.background = "#F4A460";
	}
}
var t;
function start(){
	clearInterval(t);
	t = setInterval(getColor, 500);
}
function end(){
	clearInterval(t);
	closeColor();
}