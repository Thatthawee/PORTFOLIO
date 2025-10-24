window.onload = pageLoad;
function pageLoad() {
    let form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password1 = document.getElementsByName("password")[0].value;
    var password2 = document.getElementsByName("password")[1].value;
    var firstname = document.getElementsByName("firstname")[0].value;
    var lastname = document.getElementsByName("lastname")[0].value;
    var gender = document.getElementsByName("gender")[0].value;
    var bday = document.getElementsByName("bday")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var username = document.getElementsByName("username")[0].value;

    console.table(password1,password2)

    if (password1 != password2) {
        alert("Your confirm password isn't correct!")
        return false;
    }else if (lastname ==""|| bday ==""|| email ==""||username ==""||gender == ""){
        alert("Fill your information!")
        return false;
    }
}