<template>
    <DefaultLayout>
        <HeaderBar />
        <main class="home">
            <section>
                <div class="inner">
                    <h1>Hello, I'm Jack, an independent freelance product designer and developer, currently based in London.</h1>

                    <p>I make products and services that are intuitive and fun, eliminating noise with simple design and good code. Specialising in publishing, content management, real-time and live streaming, video and audio, and storytelling.</p>
                    
                    <p>Alongside my consultancy work, I make my own products and services such as <a href="https://www.unalike.net" target="_blank" class="external">Unalike</a>.</p>
                </div>
            </section>

            <section class="home__portfolio">
                <div class="inner">
                    <video ref="video" autoplay loop playsinline :muted="videoMuted" @click.prevent="handleClickVideo">
                        <source src="/portfolio-out.mp4" type="video/mp4">
                        <source src="/portfolio-out.webm" type="video/webm">
                    </video>

                    <a @click="toggleVideoMute" v-text="videoMuted ? 'UNMUTE' : 'MUTE'" />
                </div>
            </section>
            
            <Contact />

            <JournalList />

            <FooterBar />
        </main>
    </DefaultLayout>
</template>

<script>

import './Index.scss';

import JournalList from '../components/JournalList.vue';

export default {
    metaInfo() {
        return {
            title: 'Things & That - Product design and development.',
            meta: [
                {name: 'description', content: 'London based freelance product designer and developer, building digital media products and services.'},
            ],
        };
    },
    components: {
        JournalList,
    },
    data() {
        return {
            videoMuted: true,
        };
    },
    methods: {
        handleClickVideo() {

            this.toggleVideoMute();
            
        },
        toggleVideoMute() {

            this.videoMuted = !this.videoMuted;
            
        },
    },
};

</script>
