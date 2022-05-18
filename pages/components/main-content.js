import React from 'react';
import {Card, Space} from "antd";

const MainContent = () => {
    return (
        <div>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Card title="Card" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Space>
        </div>
    );
};

export default MainContent;
