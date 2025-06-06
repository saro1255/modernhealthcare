import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HOmeProducts from './home-products';
import Footer from '../common/footer';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <div className="row gap-5 h-screen" id="home">
                <div className="h-screen w-full bg-[url('/assets/images/front2.png')] bg-no-repeat bg-cover bg-center">
                    <div className='flex justify-center pl-12 md:pl-28 flex-col backdrop-blur-sm backdrop-brightness-50 h-full w-full gap-5'>
                        <label className="font-prompt lg:text-3xl text-2xl flex flex-col gap-2">
                            <label className='lg:tracking-[.4em] tracking-[.3em] text-emerald-500'>The lifeline to</label>
                            <label className='tracking-[.3em] text-emerald-300'>HEALTH & CARE</label>
                        </label>
                        <label className="font-prompt lg:text-3xl text-2xl flex flex-col gap-2">
                            <label className='lg:tracking-[.4em] tracking-[.3em] text-emerald-500'>Touching lives with</label>
                            <label className='tracking-[.3em] text-emerald-300'>CARE & HYGIENE</label>
                        </label>
                    </div>
                </div>
            </div>

            <div id="products">
                <div className="flex mt-10 mb-2">
                    <label className="font-prata text-xl w-full text-emerald-800 text-center">Products</label>
                </div>
                <div>
                    <HOmeProducts />
                </div>
            </div>

            <div id="about">
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}