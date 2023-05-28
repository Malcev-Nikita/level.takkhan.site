'use client';

import { usePathname } from 'next/navigation';
import Link from "next/link";
import Logo from "./Logo";


const Header = () => {
    const pathname = usePathname();  

    if (pathname === '/') {
        return (
            <nav className="nav">
                <div className="nav__opacity"></div>

                <div className="container">
                    <Link href="/" className="logo"><Logo/></Link>
    
                    <ul className="nav__ul">
                        <Link href="/"><li>ГЛАВНАЯ</li></Link>
                        <Link href="/"><li>О НАС</li></Link>
                        <Link href="/"><li>УСЛУГИ</li></Link>
                        <Link href="/portfolio"><li>ПОРТФОЛИО</li></Link>
                        <Link href="/"><li>КЛИЕНТЫ</li></Link>
                        <Link href="/"><li>КОНТАКТЫ</li></Link>
                    </ul>
                </div>
            </nav>
        )
    }
    else {
        return (
            <nav className="nav nav__static">
                <div className="nav__opacity"></div>
                
                <div className="container">
                    <Link href="/" className="logo"><Logo/></Link>
                </div>
            </nav>
        )
    }
};

export default Header;