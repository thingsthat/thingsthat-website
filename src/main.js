import '~/scss/reset.scss'; 
import '~/scss/root.scss'; 
import '~/scss/styles.scss'; 
import '~/scss/content.scss';

import DefaultLayout from '~/layouts/Default.vue';
import HeaderBar from '~/components/HeaderBar.vue';
import FooterBar from '~/components/FooterBar.vue';
import Slides from '~/components/Slides.vue';
import Contact from '~/components/Contact.vue';

export default function(Vue, {appOptions, router, head, isClient}) {

    Vue.component('DefaultLayout', DefaultLayout);

    Vue.component('HeaderBar', HeaderBar);
    Vue.component('FooterBar', FooterBar);
    Vue.component('Slides', Slides);
    Vue.component('Contact', Contact);
    
}
