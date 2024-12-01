/**
 * @author David Roman <david@inarix.com>
 * @file Translate
 * @desc Created on 2021-04-13 1:37:42 pm
 * @copyright Inarix
 */
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import globalEng from './eng/global.json';
import globalSpanish from './spanish/global.json';


const fallbackLng = ['fr'];

const DETECTION_OPTIONS = {
  order: ['localStorage'],
  caches: ['localStorage'],
};

const i18 = i18next.createInstance();
i18.use(LanguageDetector);
i18.use(initReactI18next);

i18.init({
  interpolation: { escapeValue: false },
  fallbackLng,
  debug: true,
  detection: DETECTION_OPTIONS,
  resources: {
    en: {
      global: globalEng,
    },
    es: {
      global: globalSpanish,
    },
  },
});

export default i18;
