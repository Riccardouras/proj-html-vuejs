import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import { faLocationDot as faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone as faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF as faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTelegram as faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faInstagram as faInstagram } from '@fortawesome/free-brands-svg-icons'

import './scss/style.scss'
library.add(faLocationDot,faPhone,faFacebookF,faTelegram,faInstagram)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

