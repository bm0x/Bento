// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
	const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

	var d = new Date();
	var mm = monthNames[d.getMonth()];
	var dd = d.getDate();
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var hh = d.getHours();
	var ss = d.getSeconds();
	var ampm = ampm = hh >= 12 ? ' PM' : ' AM';

	if (CONFIG.twelveHourFormat) {
		ampm = hh >= 12 ? ' pm' : ' am';
		hh = hh % 12;
		hh = hh ? hh : 12;
	}

	document.getElementById('hour').innerText = hh;
	document.getElementById('separator').innerHTML = ' : ';
	document.getElementById('minutes').innerText = min;
	//document.getElementById('separator2').innerHTML = ' : ';
	document.getElementById('seconds').innerText = ' ' + ampm;

	document.getElementById('month').innerText = mm;
	document.getElementById('day').innerText = dd;

	setTimeout(displayClock, 1000);
}
