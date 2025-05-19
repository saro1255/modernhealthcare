import toplist from '../assets/json/top-products.json'
import products from '../assets/json/products.json'
import { useNavigate } from 'react-router-dom'
export default function Toplist() {
    const navigate = useNavigate();
    const show_ind_pro = (pro_id,subCat_id) => {
        navigate('/show-individual-product', { state : {pro_id, subCat_id} });
    }
    let toplist_products = () => {
        let list_arr = []
        for(let i in toplist){
            for(let j in toplist[i]){
                list_arr.push(
                    <div className='flex justify-center w-full' key={toplist[i][j]} onClick={() => show_ind_pro(i,toplist[i][j])}>
                        <div className='md:h-52 md:w-40 h-48 w-44 hover:-translate-1 hover:scale-110 duration-300 cursor-pointer'>
                            <div className='md:h-40 md:w-40 h-36 w-36 border border-[#b7d8d2] flex items-center justify-center'>
                                <img className='object-contain h-36' src={products[i]['subcateg'][toplist[i][j]]['path']} />
                            </div>
                            <label className='m-0'>{products[i]['subcateg'][toplist[i][j]]['name']}</label>
                        </div>
                    </div>
                )
            }
        }
        return list_arr
    }
    return (
        <div className='md:w-full flex justify-center'>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-10 text-center w-5/6'>
                { toplist_products() }
            </div>
        </div>
    )
}