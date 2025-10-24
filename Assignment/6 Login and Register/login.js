window.onload = loginLoad;
function loginLoad(){
	var from = document.getElementById("myLogin");
    from.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	console.log(username);

	const password = urlParams.get('password')
	console.log(password);

	var loginusername = document.forms["myLogin"]["username"].value;
	console.log(loginusername); 
	var loginpassword = document.forms["myLogin"]["password"].value;
	console.log(loginpassword); 
	if(username != loginusername || password != loginpassword ){
		alert("Login failed!!!");
		return false
	}else{
		alert("Login complete");
		return false
	}
}