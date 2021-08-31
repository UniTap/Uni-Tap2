
const signInForm = document.querySelector(".signInForm");
const submitbutton = document.querySelector("#submitbutton");


signInForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const signInemail = document.querySelector("#email");
    const signInPassword = document.querySelector("#password");
  
    const email = signInemail.value;
    const password = signInPassword.value;
    console.log(email);
    console.log(password);

    
fetch("./users.json")
.then((res) => res.json())
.then(data => {
    
    console.log(email);
    const obj = { email: `${email}`, password: `${password}`}
    data.push(obj);
    console.log(data[1].email, ",", data[1].password);
    console.log(obj);


    // function download(content, fileName, contentType) {
    //     var a = document.createElement("a");
    //     var file = new Blob([content], {type: contentType});
    //     a.href = URL.createObjectURL(file);
    //     a.download = 'user.json';
    //     a.click();
    // }
    // download(obj, 'users.json', 'application/json');

    
    // data.send();
    // 
  // data.push(data[1].email, data[1].password)
})
    
})

