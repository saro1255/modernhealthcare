import ProductsJson from '../assets/json/products.json';
import contentJson from '../assets/json/content.json'
import { useLocation } from 'react-router-dom';
export default function Products() {
    const location = useLocation();
    let proid = location.state?.pro_id
    let categid = location.state?.subCat_id
    var show_pro = ProductsJson[proid]['subcateg'][categid]
    var content_label = []
    var content = contentJson[proid] && contentJson[proid][categid] ? contentJson[proid][categid] : ''
    for (var i in content) {
        content_label.push(
            <label className='m-0 text-teal-700 text-md'>{content[i]}</label>
        )
    }
    const products = Object.values(ProductsJson);
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 space-y-24">
            <h2 className="text-4xl font-bold text-center mb-12">Our Featured Products</h2>

            {products.map((product, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center ${!isEven ? 'md:flex-row-reverse' : ''
                            } gap-8`}
                    >
                        <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src={product.path}
                                alt={product.name}
                                className="w-full h-[300px] md:h-[400px] object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{product.name}</h3>
                            <p className="text-gray-600 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                            </p>
                        </div>
                    </div>
                );
            })}
        </section>
    )
}