import Vue from 'vue';

import '~/scss/reset.scss'; 
import '~/scss/root.scss'; 
import '~/scss/styles.scss';

import DefaultLayout from '~/layouts/Default.vue';
import HeaderBar from '~/components/HeaderBar.vue';
import FooterBar from '~/components/FooterBar.vue';
import Contact from '~/components/Contact.vue';

import dayjs from 'dayjs';

import updateLocale from 'dayjs/plugin/updateLocale';
dayjs.extend(updateLocale);

import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

dayjs.updateLocale('en', {
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'just now',
        m: '1 min ago',
        mm: '%d mins ago',
        h: '1 hour ago',
        hh: '%d hours ago',
        d: '1 day ago',
        dd: '%d days ago',
        M: '1 month ago', 
        MM: '%d months ago',
        y: '1 year ago',
        yy: '%d years ago',
    },
});

Vue.filter('formatDate', function(value) {
    if (value) {
        return dayjs(String(value)).fromNow(true);
    }
});

export default function(Vue, {appOptions, router, head, isClient}) {

    Vue.component('DefaultLayout', DefaultLayout);

    Vue.component('HeaderBar', HeaderBar);
    Vue.component('FooterBar', FooterBar);
    Vue.component('Contact', Contact);
    
}
