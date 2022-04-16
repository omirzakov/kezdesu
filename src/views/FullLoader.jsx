import { Spin } from 'antd';
import React from 'react';

const FullLoader = () => {


    return (
        <div style={{width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spin />
        </div>
    )
}
export default FullLoader;