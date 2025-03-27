import React, { useEffect } from "react";
import Nav from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";
import { PriceingPlan } from "../assets/assist";

import AOS from "aos";
import "aos/dist/aos.css";

const Prices = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div>
      <Nav />
      <div className="Prices mt-28">
        <div className="Ratio">
          <div className="Titels">
            <h2 data-aos="fade-up">Our Resort Priceing</h2>
            <p data-aos="fade-up" data-aos-delay="200" className=" w-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam
              laudantium maxime repellat!
            </p>
          </div>
          <div className="mt-28 flex items-center justify-between gap-10">
            {PriceingPlan &&
              PriceingPlan.map((ResortsPrices, index) => (
                <div
                  className="Card border rounded-lg pb-10"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 200}`}
                >
                  <div className="Images block rounded-lg overflow-hidden p-3">
                    <img
                      className="rounded-lg"
                      src={ResortsPrices.PhotoLink}
                      alt=""
                    />
                  </div>
                  <div className="Textss pl-10">
                    <h3 className="mt-3">{ResortsPrices.Name}</h3>
                    <span className="">{ResortsPrices.PlotLocation}</span>
                    <p className="mt-7 w-11/12">{ResortsPrices.InfoText}</p>
                    <h2 className="mt-5">
                      {ResortsPrices.Price}{" "}
                      <span className="font-normal text-xl">$</span>
                    </h2>
                    <button className="border rounded-md px-7 py-4 mt-5">
                      Learn more
                    </button>
                    <span></span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prices;
