<template>
    <DefaultLayout>
        <HeaderBar />
        <main id="home">
            <section>
                <div class="inner">
                    <h1>
                        Hello, I'm a London based freelance product designer and developer, crafting digital media products and services.<br><br>
                        Helping people meet the future head-on, so they can always be creating. Specialising in scalable content management and publishing, e-commerce, live streaming and realtime applications, video and audio.
                    </h1>
                </div>
            </section>

            <Slides v-for="(project, index) in $page.home.data.projects" :key="index" :data-name="project.name" :loadingimage="project.loadingimage" :slides="project.slides">
                <template #header>
                    <h2>{{ project.title }}</h2>
                </template>
                <template #footer>
                    <p>{{ project.summary }}</p>
                    <p class="link"><a :href="project.url" target="_blank">{{ project.label }}</a></p>
                </template>
            </Slides>

            <section>
                <div class="inner">
                    <h2>What I do</h2>
                    <p>
                        Progressive web apps, high performant back-end applications, scalable serverless architecture, modern headless content management, and Shopify commerce websites.
                    </p>
                </div>
            </section>


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
                {name: 'description', content: ''},
            ],
        };
    },
    components: {
        JournalList,
    },
};

</script>
