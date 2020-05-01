function insert(num) {
	document.form.textview.value = document.form.textview.value+num;
}

function equal() {
	var exp = document.form.textview.value;

	if (exp) {
		document.form.textview.value = eval(exp);
	}
}

function clean() {
	document.form.textview.value = "";
}

function back() {
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.length-1);
}

function mostrarCodigo(event) {
	var code = event.charCode;

	switch (code) {
		case 48 : insert(0); break;
		case 49 : insert(1); break;
		case 50 : insert(2); break;
		case 51 : insert(3); break;
		case 52 : insert(4); break;
		case 53 : insert(5); break;
		case 54 : insert(6); break;
		case 55 : insert(7); break;
		case 56 : insert(8); break;
		case 57 : insert(9); break;
		case 47 : insert("/"); break;
		case 42 : insert("*"); break;
		case 45 : insert("-"); break;
		case 43 : insert("+"); break;
		case 44 : insert("."); break;
		case 13 : equal(); break;
		default : console.log(code);
	}
}

document.onkeydown = function(evt) {
    evt = evt || window.event;

    if (evt.keyCode == 27) {
        clean();
    } else if (evt.keyCode == 8) {
    	back();
    } 
};