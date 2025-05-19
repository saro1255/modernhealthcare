import React from "react";
import Slider from "react-slick";
import Slidejson from '../assets/json/products.json'
import { useNavigate } from "react-router-dom";

export default function HomeSlide() {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };

    const product_categ = () => {
        let product_arr = []
        for (let i in Slidejson) {
            product_arr.push(
                <div className="h-56 w-56 cursor-pointer" key={i} onClick={() => show_product(i)}>
                    <div className="h-full w-full items-center justify-center flex flex-col">
                        <div className="h-40 w-40 rounded-full border border-emerald-800 flex items-center justify-center">
                            <img className="rounded-full h-36 w-36 hover:-translate-1 hover:scale-110 duration-300" src={Slidejson[i]['path']} />
                        </div>
                        <label className="m-0">{Slidejson[i]['name']}</label>
                    </div>
                </div>
            )
        }
        return product_arr
    }

    return (
        <div className="slider-container w-full pb-7">
            <Slider {...settings}>
                {product_categ()}
            </Slider>
        </div>
    );
}