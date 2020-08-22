<template>
    <section class="slides">
        <div class="slides__head inner">
            <slot name="header" />
        </div>
        <div v-if="lazyShow && slides" class="slides__items inner">
            <div v-for="(item, index) in slides" :key="index" :class="[current == index ? 'current' : null, `slides__${item.type}`]">
                <div v-if="item.type == 'video'">
                    <video autoplay muted loop playsinline disableremoteplayback>
                        <source v-if="item.src.webm" :src="item.src.webm" type="video/webm">
                        <source v-if="item.src.mp4" :src="item.src.mp4" type="video/mp4">
                    </video> 
                </div>
                <div v-if="item.type == 'image'" :style="`background-image: url(${item.src});`" />
            </div>
        </div>
        <div v-if="!lazyShow && defaultImage" class="slides__items inner">
            <div class="current slides__image">
                <div :style="`background-image: url(${defaultImage});`" />
            </div>
        </div>
        <div class="slides__foot inner">
            <slot name="footer" />
        </div>
    </section>
</template>

<script>

import '~/scss/components/slides.scss';

export default {
    props: {
        defaultImage: {
            type: String,
            default: null,
        },
        slides: {
            type: Array,
            default: null,
        },
    },
    data() {
        return {
            current: 0,
            lazyShow: false,
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
                    this.lazyShow = true;
                    
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
