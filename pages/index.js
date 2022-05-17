import Link from "next/link";
import logoPic from "./krk_logo.svg";
import Image from 'next/image'

const Index = () => {
    return (
        <div className="container">
            <div className="header">
                <Image src={logoPic}/>
                <Link href="/users">
                    <a className="link">Профиль</a>
                </Link>
                <Link href="/">
                    <a className="link">Выход</a>
                </Link>
            </div>
            <h1 style={{textAlign: "center"}}>Главная страница</h1>

            <style jsx>
                {`
                  .link {
                    text-decoration: none;
                    color: black;
                    font-size: 20px;
                    margin: 10px;
                  }

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
