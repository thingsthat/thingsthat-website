<template>
    <DefaultLayout>
        <HeaderBar />
        <main class="error">
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

import './404.scss';

export default {
    metaInfo: {
        title: 'Are you lost?',
    },
};

</script>
