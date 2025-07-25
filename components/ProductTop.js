'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CarCard from './CarCard';
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';

const YourComponent = () => {
  const [allTemps, setAllTemps] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/products', { cache: 'no-store' });
      if (response.ok) {
        const data = await response.json();
        setAllTemps(data.slice(-4)); // Get only the first 4
      } else {
        console.error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div className="ProvidersIfSelectedProductMatchesFilter mt-4">
      <content-block slug="product-page-wssb">
        <div className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL">
          <style>{`
            /* Ensure swiper slides don't shrink and have margin for spacing */
            .swiper-slide {
              flex-shrink: 0 !important;
              margin-right: 12px; /* fallback margin for gap */
              box-sizing: border-box;
            }

            /* Remove last slide margin-right */
            .swiper-slide:last-child {
              margin-right: 0;
            }
          `}</style>

          {allTemps && allTemps.length > 0 ? (
            <>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{height:auto;text-align:center;}",
                }}
              />

              <div data-product-list-category="ymal-slider">
                <div className="padforcat">
                  <h1
                    onClick={() => router.push("/shop")}
                    className="myntit mb-3 sm:mb-5"
                    style={{ cursor: 'pointer' }}
                  >
                    TRENDING NOW 
                  </h1>

                  <section className="mb-5" style={{ maxWidth: "100%" }}>
                    <Swiper
                      modules={[Autoplay]}
                      loop={true} 
                      breakpoints={{
                        150: {
                          slidesPerView: 1,
                          spaceBetween: 0, // smaller gap on mobile
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 24, // medium gap on tablets
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 40, // larger gap on desktop
                        },
                      }}
                      spaceBetween={20} // fallback default gap
                    >
                      {allTemps.map((temp, index) => (
                        <SwiperSlide key={temp.id} style={{ padding: '0' }}>
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.3,
                              ease: "easeOut",
                            }}
                            style={{ padding: '0.5rem' }}
                          >
                            <CarCard temp={temp} />
                          </motion.div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </section>
                </div>
              </div>
            </>
          ) : (
            <div className="home___error-container">
              <h2 className="text-black text-xl font-bold">
                No products available
              </h2>
            </div>
          )}
        </div>
      </content-block>
    </div>
  );
};

export default YourComponent;
