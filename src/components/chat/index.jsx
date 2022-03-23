import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [bids, setBids] = useState([0]);
    const ws = new WebSocket("ws://172.20.10.2:8082/listEvents");

    ws.onopen = function () {
        alert("Соединение установлено.");
    };

    ws.onclose = function (event) {
        if (event.wasClean) {
            alert('Соединение закрыто чисто');
        } else {
            alert('Обрыв соединения'); // например, "убит" процесс сервера
        }
        alert('Код: ' + event.code + ' причина: ' + event.reason);
    };

    ws.onerror = function (error) {
        alert("Ошибка " + error.message);
    };

    useEffect(() => {
        ws.onmessage = function (event) {
            const json = JSON.parse(event.data);
            try {
                if ((json.event = "data")) {
                    setBids(json.data.bids.slice(0, 5));
                }
            } catch (err) {
                console.log(err);
            }
        };
    }, [])

    const firstBids = bids.map((item) => {
        return (
            <div>
                <p> {item}</p>
            </div>
        );
    });


    return (
        <div>
            {firstBids}
        </div>
    )
}
export default Chat;