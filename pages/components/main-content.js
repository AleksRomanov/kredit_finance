import React from 'react';
import {Card, Space} from "antd";
// import 'antd/dist/antd.css';
import { Cascader } from 'antd';


function onChange(value) {
    console.log(value);
}

const options = [
    {
        value: 'рубль',
        label: 'Рубль',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

const MainContent = () => {
    return (
        <div>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Card size="small">
                    <Cascader options={options} onChange={onChange} placeholder="Please select" />
                    <Card style={{ width: 184 }}>
                        <p>Card content</p>
                    </Card>
                    <Card style={{ width: 184 }}>
                        <p>Card content</p>
                    </Card>
                    <Card style={{ width: 184 }}>
                        <p>Card content</p>
                    </Card>
                </Card>
            </Space>
        </div>
    );
};

export default MainContent;
