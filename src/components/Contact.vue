<template>
    <section class="contact">
        <div class="inner">
            <h2>Say hello</h2>

            <div v-show="pop" class="pop-up" :style="`left: ${popX}px; top: ${popY}px;`">
                <div v-show="pop == 'me'" style="background-image: url(/img/popme.jpg)" />
                <div v-show="pop == 'rocket'" style="background-image: url(/img/poprocket.gif)" />
            </div>

            <p>
                If you'd like to work with me <span class="pop" @mousemove="show($event, 'me')" @mouseleave="hide">📸</span> or meet my dog Rocket <span class="pop" @mousemove="show($event, 'rocket')" @mouseleave="hide">🚀</span>
                please contact me at <a href="mailto:hello@thingsthat.com" target="_blank">hello@thingsthat.com</a>.
                Or you can stalk me on...

                <a href="https://www.instagram.com/thgsthat/" target="_blank" class="external">Instagram</a>,
                <a href="https://www.linkedin.com/company/thingsthat" target="_blank" class="external">LinkedIn</a>, and 
                <a href="https://github.com/thingsthat" target="_blank" class="external">Github</a>.
            </p>

            <p>
                Otherwise, once lockdown ends, you can visit me at my London office at Somerset House Exchange, Strand, London WC2R 1LA. I'm a member of <a href="https://bima.co.uk/" class="external" target="_blank">BIMA</a> and a fellow of the <a href="https://www.thersa.org/" class="external" target="_blank">RSA</a>.
            </p>
        </div>
    </section>
</template>

<script>

import '~/scss/components/contact.scss';

export default {
    name: 'Contact',
    data() {
        return {
            pop: null,
            popX: 0,
            popY: 0,
        };
    },
    methods: {
        show(e, pop) {
            this.pop = pop;
            this.popX = e.layerX;
            this.popY = e.layerY;

            if (e.pageX > window.innerWidth - 300) {
                this.popX = this.popX - 300;
            }
        },
        hide() {
            this.pop = null;
        },
    },
};

</script>
