import { useTranslations } from 'next-intl'
import React from 'react'

const ContactUsForm = () => {
  const t = useTranslations("contactustoday")
  return (
    <div>
        <form action="">
            <div className='email'>
              <label htmlFor="">{t("email")}</label>
              <input type="email" placeholder={t("email_text")} />
            </div>


            <div className='your_name'>
              <label htmlFor="">{t("name")}</label>
              <input type="email" placeholder={t("name_text")} />
            </div>

            <div className='phone'>
              <label htmlFor="">{t("phone")}</label>
              <input type="tel" placeholder={t("phone_text")} />
            </div>

            <div className='phone'>
              <label htmlFor="">{t("company_name")}</label>
              <input type="text" placeholder={t("company_name_text")} />
            </div>

            <div className='phone'>
              <label htmlFor="">{t("your_msg")}</label>
              <input type="text" placeholder={t("your_msg_area")} />
            </div>
            <button >{t("send")}</button>
        </form>
    </div>
  )
}

export default ContactUsForm