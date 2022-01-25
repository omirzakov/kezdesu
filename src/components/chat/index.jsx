import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [bids, setBids] = useState([0]);
    const ws = new WebSocket("wss://ws.bitstamp.net");

    const apiCall = {
        event: "bts:subscribe",
        data: { channel: "order_book_btcusd" },
    };

    ws.onopen = (event) => {
        ws.send(JSON.stringify(apiCall));
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
            { firstBids }
        </div>
    )
}
export default Chat;