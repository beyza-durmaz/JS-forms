const userForm = document.querySelector("#userForm");
const userName = document.querySelector("#userName");
const userSurname = document.querySelector("#userSurname");
const userAge = document.querySelector("#userAge");
const subContainer = document.querySelector(".sub-container");



const submitHandler = (e) => {
    e.preventDefault();
    if (userName.value && userSurname.value && userAge.value >= 18) {
        showInfos(userName.value, userSurname.value, userAge.value);
        userName.value = ""
        userSurname.value = ""
        userAge.value = null;
    } else if(userName.value && userSurname.value && userAge.value < 18){
        alert("Lütfen yaşınızı giriniz. Yaşınız 18 veya 18'den büyük olmalıdır!");
        userAge.value = null;
    } else {
        alert("Lütfen tüm değerleri giriniz!");
    }
}

let userListDOM = document.querySelector("#userList");

const showInfos = (userName, userSurname, userAge) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `Bilginiz: ${userName} ${userSurname} ${userAge}`;
    userListDOM.appendChild(liDOM);
    liDOM.classList.add("list-group-item");
}

userForm.addEventListener("submit", submitHandler);