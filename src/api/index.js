import axios from "axios";

export const BASE_URL = 'http://172.20.10.2:8082/admin';


export const fetchAuthorize = async (body) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log('here');
    const data = await axios.post("http://172.20.10.2:8082/admin/auth/login", {
        "email": "gg@mail.com",
        "password": "111"
    });
    console.log(data)

    // var raw = JSON.stringify({
    //     "email": "gg@mail.com",
    //     "password": "111"
    // });

    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    // };

    // fetch("http://172.20.17.124:8082/admin/auth/login", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
}