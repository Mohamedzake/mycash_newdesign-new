"use client";
import Header from "../_components/Header"

import ContactUs from "../_components/ContactUs"
import Footer from "../_components/Footer"
import WhatsApp from "../_components/WhatsApp";
import ContactUsToday from "../_components/ContactUsToday";
import { useTranslations } from "next-intl";
const GetInTouch = () => {
    const t = useTranslations("contactustoday")
    return (
        <section>
          <div className="bg-contactus_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] ">
              <Header />
              <WhatsApp />


                  <div className='flex flex-col justify-center items-center  h-full gap-6 text-2xl text-white  gap-y-4 text-center  lg:w-[60%] m-auto *:leading-10 '>
                      <h1 className="text-2xl font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                           {t("heading")}
                      </h1>
                      <h2 className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl w-[60%] ">
                            {t("description")}
                      </h2>
              </div>

          </div>
              

            <ContactUsToday />
          <ContactUs />
          <Footer />
        </section>
    )
}

export default GetInTouch