<template>
    <DefaultLayout>
        <BackgroundJunePride ref="background" />
        <HeaderBar />
        <main id="home">
            <section data-name="default">
                <div class="inner">
                    <h1>Building independent media products and services, and helping others do the same</h1>
                </div>
            </section>

            <section data-name="default">
                <div class="inner">
                    <p>Hello</p>
                        
                    <p>
                        I'm Zac, a London based maker of products and technology consultant. In a world of ever confusing media and technology,
                        I started Things &amp; That to help brands, agencies, and individuals meet the future head-on with independent 
                        design, development and insights. Building products that future-enable creators with tools and services that have purpose
                        and meaning.
                    </p>
        
                    <p>
                        Specialising in media product design and development, high performant front-end frameworks, headless Shopify e-commerce,
                        bespoke content management systems and publishing, live and streaming services, video and audio.
                        When there's something I can't do, or I need an extra hand, I partner with a network of passionate independent freelance
                        providers to tailor solutions to projects large and small.
                    </p>
                </div>
            </section>

            <Slides data-name="unalike" :slides="[
                {
                    type: 'video',
                    src: {
                        webm: `/img/products/unalike/slide1.webm`,
                        mp4: `/img/products/unalike/slide1.mp4`
                    }
                },
            ]"
            >
                <template v-slot:header>
                    <h2>
                        Unalike. Giving stories a voice.
                    </h2>
                </template>
                <template v-slot:footer>
                    <p>
                        An independent publishing platform designed for writers, creators, journalists, and publishers, with tools that reimagine the wa we create, publish, and own stories.
                    </p>
                    <p class="link"><a href="https://www.unalike.net" target="_blank">www.unalike.net</a></p>
                </template>
            </Slides>
            
            <Slides data-name="bullboat" :slides="[
                { type: 'image', src: `/img/clients/bullboat/slide1.jpg`},
            ]"
            >
                <template v-slot:header>
                    <h2>
                        Bullboat
                    </h2>
                </template>
                <template v-slot:footer>
                    <p>
                        Headless content managed website build for a europe based brand distributor.
                    </p>
                    <p class="link"><a href="https://bullboat.co.uk" target="_blank">www.bullboat.co.uk</a></p>
                </template>
            </Slides>
            
            <Slides data-name="beryl" :slides="[
                { 
                    type: 'video', 
                    src: {
                        mp4: `/img/clients/beryl/background-beryl.mp4`,
                        webm: `/img/clients/beryl/background-beryl.webm`,
                    }
                },
                { type: 'image', src: `/img/clients/beryl/1.jpg`},
                { type: 'image', src: `/img/clients/beryl/2.jpg`},
                { type: 'image', src: `/img/clients/beryl/3.jpg`},
                { type: 'image', src: `/img/clients/beryl/4.jpg`},
                { type: 'image', src: `/img/clients/beryl/5.jpg`},
                { type: 'image', src: `/img/clients/beryl/6.jpg`},
                { type: 'image', src: `/img/clients/beryl/7.jpg`},
                { type: 'image', src: `/img/clients/beryl/8.jpg`},
                { type: 'image', src: `/img/clients/beryl/9.jpg`},
                { type: 'image', src: `/img/clients/beryl/0.jpg`},
            ]"
            >
                <template v-slot:header>
                    <h2>
                        Beryl
                    </h2>
                </template>
                <template v-slot:footer>
                    <p>
                        Shopify e-commerce and headless content managed website build for a London based bike mobility and product company.
                    </p>
                    <p class="link"><a href="https://beryl.cc" target="_blank">www.beryl.cc</a></p>
                </template>
            </Slides>

            <Slides data-name="youpeople" :slides="[
                { 
                    type: 'video',
                    src: {
                        mp4: `/img/clients/youpeople/background-youpeople.mp4`,
                        webm: `/img/clients/youpeople/background-youpeople.webm`
                    }
                },
                { type: 'image', src: `/img/clients/youpeople/1.jpg`},
                { type: 'image', src: `/img/clients/youpeople/2.jpg`},
                { type: 'image', src: `/img/clients/youpeople/3.jpg`},
                { type: 'image', src: `/img/clients/youpeople/4.jpg`},
                { type: 'image', src: `/img/clients/youpeople/5.jpg`},
                { type: 'image', src: `/img/clients/youpeople/6.jpg`},
            ]"
            >
                <template v-slot:header>
                    <h2>
                        YouPeople
                    </h2>
                </template>
                <template v-slot:footer>
                    <p>
                        Bespoke headless Shopify e-commerce and chatbot for a fashion start-up.
                    </p>
                    <p class="link"><a href="https://youpeople.co.uk" target="_blank">www.youpeople.co.uk</a></p>
                </template>
            </Slides>

            <Contact data-name="default" />

            <JournalList data-name="default" />

            <FooterBar data-name="default" />
        </main>
    </DefaultLayout>
</template>

<script>

import '~/scss/home.scss';

import JournalList from '../components/JournalList.vue';
import BackgroundJunePride from '../components/BackgroundJunePride.vue';

export default {
    metaInfo: {
        title: 'Things & That - Media technology design and development.',
    },
    components: {
        JournalList,
        BackgroundJunePride,
    },
};

</script>

