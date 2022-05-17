import Link from "next/link";
import logoPic from "./pictures/krk_logo.svg";
import avaPic from "./pictures/ava1.png";
import Image from 'next/image'
import {Layout} from "antd";

const {Sider, Content} = Layout;

const Index = () => {


    return (
        <div className="container" id="container" style={{padding: "24px"}}>
            <div className="header">
                <div className="header-body">
                    <Image src={logoPic}/>
                    <div className="header-body__menu">
                        <Image className="avatar"
                               src={avaPic}
                               width={55}
                               height={55}
                        />
                        <Link href="/users">
                            <a className="link">Профиль</a>
                        </Link>
                        <Link href="/">
                            <a className="link">Выход</a>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="wrapper" style={{border: "1px solid gray", borderColor: "gray"}}>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
            </div>

            {/*<h1 style={{textAlign: "center"}}>Главная страница</h1>*/}

            <style jsx>
                {`
                  .logo {
                    width: 114px;
                    height: 55px;
                  }

                  .link {
                    text-decoration: none;
                    color: black;
                    font-size: 20px;
                    margin: 10px;
                  }
                `}
            </style>
        </div>
    );
};

export default Index;
