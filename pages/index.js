import Link from "next/link";
import logoPic from "./pictures/krk_logo.svg";
import avaPic from "./pictures/ava1.png";
import Image from 'next/image'
import {Form, Layout} from "antd";
import Sider from "antd/lib/layout/Sider";


const {Content} = Layout;

const Index = () => {

    return (
        <div className="container">
            <div className="header">
                <div className="header-body">
                    <Image src={logoPic}/>
                    <div className="header-body__menu">
                        <Image className="header-body__photo"
                               src={avaPic}
                               width={55}
                               height={55}
                        />
                        <Link href="/users">
                            <a className="header-body__profile">Профиль</a>
                        </Link>
                        <Link href="/">
                            <a className="header-body__quit">Выход</a>
                        </Link>
                    </div>
                </div>
            </div>


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

            <style jsx>
                {`
                  .logo {
                    width: 114px;
                    height: 55px;
                  }
                `}
            </style>
        </div>
    );
};

export default Index;
