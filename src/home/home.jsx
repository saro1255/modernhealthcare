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
                <div className="h-screen w-full bg-[url('/assets/images/homeimg.jpg')] bg-no-repeat bg-cover flex justify-center pl-12 md:pl-28 flex-col">
                    <label className="font-prata tracking-widest text-5xl text-emerald-800">
                        Care For Your Skin,<br />Care For Your<br />Beauty
                    </label>
                    <label className="font-prompt tracking-widest text-md text-emerald-700 mt-7">
                        Our skin care clinic best dermatologists in<br />
                        Lahore and Islamabad offer premium <br />
                        aesthetics.
                    </label>
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