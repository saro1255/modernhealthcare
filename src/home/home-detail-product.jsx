import ProductsJson from '../assets/json/products.json';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function Products(){
    const navigate = useNavigate();
    const ind_product = (pro_id,subCat_id) => {
        navigate('/show-individual-product', { state : {pro_id, subCat_id} });
    }
    const location = useLocation();
    let product_categ = location.state?.pro_id
    const product_div = () => {
        const product_list = [];
        for (let j in ProductsJson[product_categ]['subcateg']) {
            let product_details = ProductsJson[product_categ]['subcateg'][j]
            product_list.push(
                <div className='w-90 py-4 bg-gray-50 md:h-[36rem] h-[30rem] rounded-lg drop-shadow hover:drop-shadow-lg hover:-translate-y-1 hover:scale-110 duration-300' key={j}>
                    <div className='h-3/6 flex items-center justify-center w-full'>
                        <img className='object-contain h-full w-5/6' src={product_details['path']} />
                    </div>
                    <div className='h-3/6 w-full px-6'>
                        <div className='h-1/5 w-full'>
                            <label className='m-0 text-teal-700 text-lg font-bold w-full'>{product_details['name']}</label>
                        </div>
                        <div className='h-3/5'>
                            <label className='text-teal-700' >{product_details['desc']}</label>
                        </div>
                        <div className='h-1/5 flex items-center'>
                        <label className='h-full flex items-center mb-2 gap-4'><span className='hover:-translate-y-1 hover:scale-110 duration-300 flex items-center gap-5 font-bold text-teal-600 hover:text-teal-700 cursor-pointer' onClick={() => ind_product(product_categ,j)}>Read More <i className="fa-solid fa-angles-right pt-1"></i></span></label>
                        </div>
                    </div>
                </div>
            )
        }
        return product_list;
    }
    return(
        <div className="md:p-10 p-2 grid md:grid-cols-4 grid-cols-2 gap-10">
            { product_div() }
        </div>
    )
}