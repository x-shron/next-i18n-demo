import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import enUsTrans from "../public/locales/en-us.json";
import zhCnTrans from "../public/locales/zh-cn.json";
import {
  initReactI18next
} from 'react-i18next';

i18n.use(initReactI18next).init(
    {
        resources:{
            en:{
                translation:enUsTrans
            },
            zh:{
                translation:zhCnTrans
            }                      
        },
        fallbackLng:'zh',
        debug:true,

    }
)

export default i18n