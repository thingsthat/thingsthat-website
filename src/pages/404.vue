<template>
    <DefaultLayout>
        <HeaderBar />
        <main id="error">
            <section>
                <div class="inner">
                    <div class="">
                        <router-link to="/">Argh... you found us!</router-link>
                    </div>
                </div>
            </section>
        </main>
    </DefaultLayout>
</template>

<script>

import '~/scss/error.scss';

export default {
    metaInfo: {
        title: 'Are you lost?',
    },
};

</script>
