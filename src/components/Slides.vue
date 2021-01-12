<template>
    <section class="slides">
        <div class="inner">
            <div class="slides__head">
                <slot name="header" />
            </div>
            <div v-if="slides" class="slides__items">
                <div v-for="(item, index) in slides" :key="index" class="slides__item" :class="[current == index ? 'current' : null, `slides__${item.type}`]" :style="`background-image: url(${loadingimage});`">
                    <div v-if="item.type == 'video'">
                        <video autoplay muted loop playsinline disableremoteplayback>
                            <source v-if="item.src.webm" :src="item.src.webm" type="video/webm">
                            <source v-if="item.src.mp4" :src="item.src.mp4" type="video/mp4">
                        </video> 
                    </div>
                    <div v-if="item.type == 'image'" :style="`background-image: url(${item.src});`" />
                </div>
            </div>
            <div class="slides__foot">
                <slot name="footer" />
            </div>
        </div>
    </section>
</template>

<script>

import '~/scss/components/slides.scss';

export default {
    props: {
        slides: {
            type: Array,
            default: null,
        },
        loadingimage: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            current: 0,
        };
    },
    mounted() {

        if (process.isClient) {

            // Timer for slide
            this.timerSlide = setInterval(() => {

                this.current = this.current + 1; 

                if (this.current >= this.slides.length) {
                    this.current = 0;
                }

            }, 1500);

            // Time for lazy load on scroll
            // TODO: Worth preloading assets here.
            this.scrollListener = window.addEventListener('scroll', () => {

                if (this.$el.offsetTop > window.scrollY - window.innerHeight + 400) {
                    if (this.scrollListener) {
                        window.removeEventListener(this.scrollListener);
                        this.scrollListener = null;
                    }
                }

            });

        }
        
    },
    beforeDestroy() {

        // Clear timers and listeners if thet exist
        if (this.timerSlide) {
            clearInterval(this.timerSlide);
            this.timerSlide = null;
        }

        if (this.scrollListener) {
            window.removeEventListener(this.scrollListener);
            this.scrollListener = null;
        }
        
    },
};
</script>
