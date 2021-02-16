<template>
    <DefaultLayout>
        <HeaderBar />
        <main id="home">
            <section>
                <div class="inner">
                    <h1>Hello, I'm Jack, an independent freelance designer and developer, currently based in London.</h1>
                    
                    <p>I'm a big fan of building products that are intuitive and fun, eliminating noise through good code and simple design. Specialising in content management, publishing, e-commerce, live streaming and real-time applications, video and audio, and storytelling.</p>

                    <p>I've worked with companies such as Air New Zealand, Tesco, News UK, IBM, and The Economist as developer. Built and lead technology teams at agencies. And built websites for <a href="https://www.beryl.cc" target="_blank" class="external">Beryl</a> and <a href="https://www.bullboat.co.uk" target="_blank" class="external">Bullboat</a>. Alongside my client work, I also make my own products such as <a href="https://www.unalike.net" target="_blank" class="external">Unalike</a>.</p>
                </div>
            </section>

            <section id="home__portfolio">
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

import '~/scss/home.scss';

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
