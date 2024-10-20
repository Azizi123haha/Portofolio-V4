import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const AboutMe = () => {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const projectCollection = collection(db, "projects");
    getDocs(projectCollection)
      .then((querySnapshot) => {
        setProjectCount(querySnapshot.size);
      })
      .catch((error) => {
        console.error("Error fetching projects: ", error);
      });
  }, []);

  return (
    <>
      <div className="md:px-[10%] px-[6%]" id="About">
        <div
          className="text-4xl text-[#ced4d7] font-bold md:pb-8 pb-4"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          ABOUT ME
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Kolom Kiri */}
          <div className="flex justify-center items-center md:pr-10 pr-0 md:w-auto ">
            <div data-aos="fade-up" data-aos-duration="1000">
              <img
                src="/Photo.png"
                alt="Photo Siluet"
                className="w-[30rem] h-auto rounded-xl "
                id="ImgAbout"
              />
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="md:w-full flex flex-col justify-between">
            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Halo, nama gw Muhammad Ramdhan Azizi, biasa di panggil "ajiji" atau "Azizi", bukan Azizi Shafa Asadel yee, umur gw 14 tahun, hobi gw nge desain ( gabut doang njir ), udah sih segitu aja, kepo lu ( gw ganteng )
            </p>

            <div
              class="grid grid-cols-2 md:gap-4 gap-5 mt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
                id="InfoAbout"
              >
                <b className="text-3xl text-[#ced4d7]">1+</b>
                <div className="text-center text-[#a6adba]">Years of Experience</div>
              </div>
              <div
                class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
                id="InfoAbout"
              >
                <b className="text-3xl text-[#ced4d7]">{projectCount}+</b>
                <div className="text-center text-[#a6adba]">Project Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
