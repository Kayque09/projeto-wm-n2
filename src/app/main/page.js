import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header/header';
import img1 from '../assets/img1.jpg'
import main from './main.css'
 
export default function Main() {
    return(
        <>
        <Header />
        <section>
            <p className='titulo'>O cuidado e preservação do planeta dependem de cada um de nós.</p>
            <Image src={img1} height={500} width={500}/>
        </section>
        </>
    );
}