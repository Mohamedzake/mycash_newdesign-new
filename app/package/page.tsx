"use client"
import React from 'react'
import Header from '../_components/Header'
// import Image from 'next/image'
// import bg from "@/public/bg.png";
import { useTranslations } from "next-intl";
// import Link from 'next/link';
import ContactUs from '../_components/ContactUs';
import Footer from '../_components/Footer';
// import { Packages } from '../_components/Packages';
import { Pricing } from '../_components/Pricing';
import WhatsApp from '../_components/WhatsApp';
// import Link from 'next/link';
const Package = () => {
  const t = useTranslations("package");
  return (
        <section className="">

            <Header />
            <WhatsApp />
            <div className="flex flex-col justify-center items-center gap-6 w-full h-full text-center mt-32">

                <div className='text-2xl text-gray-900 flex flex-col gap-y-4  '>
                    <h1 className="text-2xl font-bold lg:text-3xl xl:text-3xl 2xl:text-4xl ">
                        {t("title")}
                    </h1>
                    <h2 className="text-base lg:text-lg xl:text-lg 2xl:text-xl mx-4">
                        {t("subtitle")}
                    </h2>
                </div>

                {/* <div className="flex flex-row justify-center gap-x-2 w-full  ">
                    <Link
                        href="#"
                        className="text-nowrap text-center px-16  block text-white py-3 text-xs xs:px-12 col-span-5 lg:text-lg bg-primary-green hover:bg-white hover:text-primary-green transition rounded-full font-bold border-primary-green border-2">
                        {t("start_now")}
                    </Link>
                </div> */}
            </div>
            <Pricing />
            <ContactUs />
            <Footer />
        </section>
  )
}

export default Package