<template>
    <DefaultLayout>
        <HeaderBar />
        <main id="error">
            <section>
                <div class="inner">
                    <div>
                        Argh... you found us!
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
