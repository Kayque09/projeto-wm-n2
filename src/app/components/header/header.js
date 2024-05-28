

import Link from 'next/link';
 import { Leaf } from 'lucide-react'
 import header from "./header.css"


export default function Header() {
    return(

        <header className='container'>
                <Leaf className='logo' />
            <nav className='menu'>
                <Link href="/">Home</Link>
                <Link href="../../diretriz">Diretriz ONU</Link>
                <Link href="../agua">Água</Link>
                <Link href="../ar">Ar</Link>
            </nav>
              
        </header>
        
    );
}