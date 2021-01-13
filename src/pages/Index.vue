<template>
    <DefaultLayout>
        <HeaderBar />
        <main id="home">
            <section>
                <div class="inner">
                    <h1>
                        Hello, I'm a London based product designer and developer. Crafting digital media products and services, and helping people meet the future head-on, so they can always be creating.<br><br>
                        I also provide hands-on freelance development consultancy for agencies and brands, specialising in scalable content management and publishing, e-commerce, live streaming and realtime applications, video and audio, privacy, and data driven storytelling.
                    </h1>
                </div>
            </section>

            <Slides v-for="(project, index) in $page.home.data.projects" :key="index" :data-name="project.name" :slides="project.slides">
                <template #header>
                    <h2>{{ project.title }}</h2>
                </template>
                <template #footer>
                    <p>{{ project.summary }}</p>
                    <p class="link"><a :href="project.url" target="_blank">{{ project.label }}</a>&#8599;</p>
                </template>
            </Slides>

            <section>
                <div class="inner">
                    <p>
                        My method is minimalism. Not abstract minimalism, but simplicity that is functional and accessible, with a non-ideological view on technology stacks and an empathetic approach to user experience.
                    </p>

                    <p>
                        I'm also a member of <a href="https://bima.co.uk/" target="_blank">BIMA</a>&#8599; and a fellow of the <a href="https://www.thersa.org/" target="_blank">RSA</a>&#8599;, with a passion for technology inclusion, privacy, and education.
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
};

</script>
