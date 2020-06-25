<template>
    <DefaultLayout>
        <BackgroundJunePride ref="background" />
        <HeaderBar />
        <main id="home">
            <section data-name="default">
                <div class="inner">
                    <h1>{{ $page.home.data.header }}</h1>
                </div>
            </section>

            <section data-name="default">
                <div class="inner" v-html="$page.home.data.body" />
            </section>

            <Slides v-for="(project, index) in $page.home.data.projects" :key="index" :data-name="project.name" :slides="project.slides">
                <template v-slot:header>
                    <h2>{{ project.title }}</h2>
                </template>
                <template v-slot:footer>
                    <p>{{ project.summary }}</p>
                    <p class="link"><a :href="project.url" target="_blank">{{ project.label }}</a></p>
                </template>
            </Slides>
        
            <Contact data-name="default" />

            <JournalList data-name="default" />

            <FooterBar data-name="default" />
        </main>
    </DefaultLayout>
</template>

<page-query>

query {
    home(path: "/home") {
        id
        data {
            title
            header
            body
            projects {
                name
                title
                summary
                url
                label
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
import BackgroundJunePride from '../components/BackgroundJunePride.vue';

export default {
    metaInfo() {
        return {
            title: this.$page.home.data.title,
            meta: [
                {name: 'description', content: ''},
            ],
        };
    },
    components: {
        JournalList,
        BackgroundJunePride,
    },
};

</script>
