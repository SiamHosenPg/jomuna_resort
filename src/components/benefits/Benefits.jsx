import React, { useEffect } from "react";
import { BeneFitsTexts } from "../../assets/assist";

import AOS from "aos";
import "aos/dist/aos.css";

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="Benefits">
      <div className="Ratio">
        <div className="TopSection flex items-center justify-start gap-10 mt-48">
          <div
            className="Line w-48 h-1 bg-blue-900"
            data-aos="fade-right"
          ></div>
          <h2 data-aos="fade-up" data-aos-delay="200">
            Benefits you get when you <br /> using ours servics
          </h2>
        </div>
        <div className="Cards flex justify-between gap-20 mt-32">
          {BeneFitsTexts &&
            BeneFitsTexts.map((Benefitscontents, index) => {
              return (
                <div
                  key={index}
                  className="Card flex justify-between items-start gap-10 "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="Icon w-48 ">
                    <img src={Benefitscontents.Icon} alt="" />
                  </div>
                  <div className="Text">
                    <h3>{Benefitscontents.Title}</h3>
                    <p className=" mt-5 text-sm">{Benefitscontents.Texts}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
