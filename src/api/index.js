import axios from "axios";
import api, { BASE_URL } from "../middleware/api"


export const fetchAuthorize = async (body) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": "gg@mail.com",
        "password": "111"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://172.20.10.9:8082/admin/auth/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}