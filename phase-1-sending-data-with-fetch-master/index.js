function submitData(getName, getEmail){
    return fetch("http://localhost:3000/users",{
        method: "post",
        headers:{
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: getName,
            email: getEmail
        })
    }).then(resp=> resp.json())
    .then (data => {
        document.querySelector("body").append(data.id)
    }).catch(error=> {
        document.querySelector("body").innerHTML= error.message
        console.log(document.querySelector("body").innerHTML)
    })
}