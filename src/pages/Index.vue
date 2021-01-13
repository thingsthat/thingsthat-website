<template>
    <DefaultLayout>
        <HeaderBar />
        <main id="home">
            <section>
                <div class="inner">
                    <h1>
                        Hello, I'm Jack, an independent freelance designer and developer, currently based in London. Specialising in content management, publishing, e-commerce, live streaming and realtime applications, video and audio, and storytelling.
                    </h1>

                    <p>
                        I'm a big fan of building products that are intuitive and fun, eliminating noise through good code and simple design. Alongside my product work, I write about and advocate for technology inclusion, privacy, and education.
                    </p>
                </div>
            </section>

            <Slides v-for="(project, index) in projects" :key="index" :data-name="project.name" :slides="project.slides">
                <template #header>
                    <h3>{{ project.title }}</h3>
                </template>
                <template #footer>
                    <p>{{ project.summary }}</p>
                    <p class="link"><a :href="project.url" target="_blank" class="external">{{ project.label }}</a></p>
                </template>
            </Slides>

            <Contact />

            <JournalList />

            <FooterBar />
        </main>
    </DefaultLayout>
</template>

<page-query>

query {
    home(path: "/home") {
        id
        data {
            projects {
                name
                title
                summary
                url
                label
                loadingimage
                slides {
                    type
                    src {
                        image
                        webm
                        mp4
                    }
                }
            }
        }
    }
}

</page-query>

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
            projects: [
                {
                    'name': 'unalike',
                    'title': 'Unalike. Giving stories a voice.',
                    'summary': 'A publishing platform designed for writers, creators, journalists, and publishers, with tools that reimagine the way we create, publish, and own stories.',
                    'url': 'https://www.unalike.net',
                    'label': 'www.unalike.net',
                    'slides': [
                        {
                            'type': 'image',
                            'src': {
                                'image': '/img/products/unalike/slide1.png',
                            },
                        },
                    ],
                },
            ],
        };
    },
};

</script>
