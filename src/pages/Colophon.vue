<template>
    <DefaultLayout>
        <HeaderBar />
        <main>
            <section>
                <div class="inner">
                    <h2>Colophon</h2>

                    <p>Things &amp; That is an independent maker of products based in London.</p>
                    <p>This site is open-source and was produced in 2020. It is built with the <a href="https://gridsome.org/" class="external" target="_blank">Gridsome</a> framework for <a href="https://vuejs.org/" class="external" target="_blank">Vue.js</a>. The font is <a href="https://rsms.me/inter/" class="external" target="_blank">Inter</a>, a free and open-source font family crafted for computer screens.</p>
                    <p>The site code repository is stored with <a href="https://github.com/thingsthat/thingsthat-website" class="external" target="_blank">GitHub</a> and hosting is with <a href="https://netlify.com" class="external" target="_blank">Netlify</a>.</p>
                </div>
            </section>

            <FooterBar />
        </main>
    </DefaultLayout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Colophon',
    },
};
</script>
