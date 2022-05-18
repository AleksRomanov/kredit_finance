import React from 'react';
import {Form, Layout} from "antd";
import Sider from "antd/lib/layout/Sider";
import {Content} from "antd/es/layout/layout";

const MainMenu = () => {
    return (

        <div className="main wrapper">
            <div className="main-body">
                <Layout>
                    <Sider className="main-body__sec1">
                        <ul className="main-body__list">
                            <li className="main-body__item">Меню - 1</li>
                            <li className="main-body__item">Меню - 2</li>
                            <li className="main-body__item">Меню - 3</li>
                        </ul>

                    </Sider>

                    <Content className="main-body__sec2">
                        <Form>
                            <p>!!!!!!</p>
                        </Form>
                    </Content>
                </Layout>
            </div>
        </div>

    );
};

export default MainMenu;
