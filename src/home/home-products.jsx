import React, { useState, useEffect } from 'react';
import products from '../assets/json/products.json';

export default function HOmeProducts() {
    const grid_products = Object.values(products);
    const [selected, setSelected] = useState(null);
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        if (!selected) return;
        const interval = setInterval(() => {
            setSlideIndex((prev) =>
                prev + 1 >= selected.images.length ? 0 : prev + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [selected]);
    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[250px]">
                {grid_products.map((product, index) => {
                    var isFirst = 0;
                    if (index === 0 || index % 10 === 0) {
                        isFirst = 1;
                    } else {
                        isFirst = 0;
                    }
                    var colSpan = isFirst ? "md:col-span-2" : "col-span-1";
                    var rowSpan = isFirst ? "row-span-2" : "row-span-1";

                    return (
                        <div
                            key={index}
                            className={`cursor-pointer relative group overflow-hidden rounded-2xl shadow-md bg-white ${colSpan} ${rowSpan}`}
                            onClick={() => {
                                setSelected(product);
                                setSlideIndex(0);
                            }}
                        >
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-white/30 backdrop-blur text-center py-2">
                                <p className="text-sm font-semibold text-teal-800 font-prompt tracking-wider">{product.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg">
                    <div className="bg-white rounded-2xl max-w-2xl w-full relative shadow-xl lg:m-0 m-2">
                        <button onClick={() => setSelected(null)} className="w-full px-2 text-right text-gray-400 hover:text-black text-2xl">
                            &times;
                        </button>
                        <div className='px-8 py-4'>
                            <div className="relative w-full h-80 mb-6 overflow-hidden rounded-xl p-4">
                                {selected.images.map((img, i) => (
                                    <img key={i} src={img} alt={`slide-${i}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === slideIndex ? 'opacity-100' : 'opacity-0'}`} />
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-teal-800 font-prompt mb-2">{selected.name}</h3>
                            <p className="text-teal-800 font-prompt">{selected.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}