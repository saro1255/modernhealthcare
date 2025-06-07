import React, { useState, useEffect, useRef } from 'react';
import products from '../assets/json/products.json';

export default function HOmeProducts() {
    const grid_products = Object.values(products);
    const [selected, setSelected] = useState(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    useEffect(() => {
        if (!selected) return;

        const interval = setInterval(() => {
            setSlideIndex((prev) =>
                prev + 1 >= selected.images.length ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [selected]);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;
        const distance = touchStartX.current - touchEndX.current;
        const threshold = 50;

        if (distance > threshold) {
            setSlideIndex((prev) => (prev + 1) % selected.images.length);
        } else if (distance < -threshold) {
            setSlideIndex((prev) =>
                (prev - 1 + selected.images.length) % selected.images.length
            );
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    function highlightTextFromMarkup(text) {
        const regex = /\|([^|]+)\|/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
            }
            parts.push(
            <mark key={match.index} className="bg-transparent text-teal-800 font-bold">
                {match[1]}
            </mark>
            );
            lastIndex = regex.lastIndex;
        }

        if (lastIndex < text.length) {
            parts.push(text.slice(lastIndex));
        }

        return parts;
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[250px]">
                {grid_products.map((product, index) => {
                    const isFirst = index === 0 || index % 10 === 0;
                    const colSpan = isFirst ? "md:col-span-2" : "col-span-1";
                    const rowSpan = isFirst ? "row-span-2" : "row-span-1";

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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg h-full max-h-9/10">
                    <div className="bg-white rounded-2xl max-w-2xl w-full relative shadow-xl lg:m-0 m-2 overflow-y-auto max-h-[92vh]">
                        <button
                            onClick={() => setSelected(null)}
                            className="w-full px-2 text-right text-gray-400 hover:text-black text-2xl"
                        >
                            &times;
                        </button>
                        <div className='px-8 py-4'>
                            <div
                                className="relative w-full h-80 mb-6 overflow-hidden rounded-xl p-4"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                {selected.images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`slide-${i}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === slideIndex ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                ))}
                                {/* Manual Controls */}
                                {selected.images.length > 1 && (
                                    <button
                                        onClick={() => setSlideIndex((prev) => (prev - 1 + selected.images.length) % selected.images.length)}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black text-3xl z-10"
                                    >
                                        ‹
                                    </button>
                                )}
                                {selected.images.length > 1 && (
                                    <button
                                        onClick={() =>
                                            setSlideIndex((prev) => (prev + 1) % selected.images.length)
                                        }
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-3xl z-10"
                                    >
                                        ›
                                    </button>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-teal-800 font-prompt mb-2">{selected.name}</h3>
                            <p className="text-teal-800 font-prompt text-justify">{selected.desc.split('\n').map((line, index) => (
                                                                                        <div key={index}>
                                                                                            {highlightTextFromMarkup(line)}
                                                                                        </div>
                                                                                    ))}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}