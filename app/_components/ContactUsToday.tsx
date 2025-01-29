// import { useTranslations } from 'next-intl'
import React from 'react'

// import { FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { IoMdPin } from "react-icons/io";

// import ContactUsForm from './ContactUsForm';

const ContactUsToday = () => {
    // const t = useTranslations("contactustoday")

    // const contactData = [{
    //     "text": t("phone_number"),
    //     "icon": <FaPhoneAlt />,
    //     "info": "966920031014+"
    // }, 
    // {
    //     "text": t("email"),
    //     "icon": <MdOutlineMailOutline />,
    //     "info": "sales@mycash.sa"
    // }, 
    // {
    //     "text": "العنوان",
    //     "icon": <IoMdPin />,
    //     "info": t("address_text"),

    // }]


    return (
        <section >
            {/* <div className='container mx-auto my-6 grid grid-cols-10 lg:grid'>
                <div className='right-content col-span-4 '>
                    <h2 className='text-primary-blue text-2xl font-bold lg:text-3xl xl:text-4xl'>{t('contactustoday')}</h2>
                    {contactData.map((item, index) => (
                            <div key={index} className='flex flex-col mb-8 text-primary-green text-xl lg:text-2xl '>
                                <div className="flex items-center gap-3 py-3 rounded-3xl">                            
                                    <div className="text-white bg-primary-green py-3 px-3 rounded-full">{item.icon}</div>
                                    <h3 >{item.text}</h3>
                                </div>

                                <p className="text-primary-grey-grey">{item.info}</p>
                            </div>                        
                    ))}

                </div>
                <div className='leftt-content col-span-6 bg-red-100'>
                    <ContactUsForm />
                </div>

            </div> */}
            {/* <p className="text-center text-3xl py-6">تحت الإنشاء</p>
            <p className="text-center text-xl py-6">فريق عمل ماي كاش</p> */}
            
        </section>
    )
}

export default ContactUsToday