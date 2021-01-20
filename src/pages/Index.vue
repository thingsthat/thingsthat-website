<template>
    <DefaultLayout>
        <HeaderBar />
        <main id="home">
            <section>
                <div class="inner">
                    <h1>Hello, I'm Jack, an independent freelance designer and developer, currently based in London.</h1>
                    <p>I'm a big fan of building products that are intuitive and fun, eliminating noise through good code and simple design. Specialising in content management, publishing, e-commerce, live streaming and real-time applications, video and audio, and storytelling.</p>
                    <p>I've worked with companies such as Air New Zealand, Tesco, News UK, IBM, and The Economist. Built and lead teams at Monitise and ClickOn. And created websites for <a href="https://www.beryl.cc" target="_blank" class="external">Beryl</a> and <a href="https://www.bullboat.co.uk" target="_blank" class="external">Bullboat</a>. Alongside my freelance work, I also design and build my own ventures such as <a href="https://www.unalike.net" target="_blank" class="external">Unalike</a>.</p>
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
};

</script>
