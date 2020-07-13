<template>
    <section v-if="items.length > 0" class="journal-list">
        <div class="inner">
            <h2>Blog</h2>
            
            <div class="journal-list__list">
                <div v-for="(col, colindex) in cols" :key="colindex" class="col">
                    <a v-for="(item, index) in cols[colindex]" :key="index" :href="`https://thingsthat.unalike.net${item.path}`" class="item" target="_blank">
                        <figure v-if="item.meta.media && item.meta.media.content">
                            <img loading="lazy" :src="item.meta.media.content.data.url">
                        </figure>

                        <div class="label">
                            <strong>{{ item.meta.title }}</strong>
                            {{ item.meta.summary }}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>  
</template>

<script>

import '~/scss/components/journal-list.scss';

import Unalike from '@createunalike/unalike-js';

export default {
    name: 'JournalList',
    data() {
        return {
            cols: [],
            items: [],
        };
    },
    async mounted() {

        if (process.isClient) {

            try {

                const client = new Unalike();
                client.setApi('https://thingsthat.unalike.net/api/');

                const response = await client.query(`query contents($pageSize: Int, $sortBy: String, $sortDirection: SortDirection, $type: [String]) {
                    contents(pageSize: $pageSize, sortBy: $sortBy, sortDirection: $sortDirection, type: $type) {
                        id
                        meta
                        path
                    }
                }`, {
                    pageSize: 20,
                    sortBy: 'publishedAt',
                    sortDirection: 'DESC',
                    type: ['articlemedia', 'article'],
                });

                this.items = response.data.contents.filter((item) => item.meta);
                
                this.refreshColumns();

                window.addEventListener('resize', this.refreshColumns);

                this.$emit('loaded');

            } catch (err) {

                console.error(err);

            }
    
        }

    },
    beforeDestroy() {

        if (process.isClient) {
            window.removeEventListener('resize', this.refreshColumns);
        }
        
    },
    methods: {
        refreshColumns() {

            this.cols = [];

            if (window.innerWidth > 1200) {
                this.cols.push([]);
                this.cols.push([]);
                this.cols.push([]); 
            } else if (window.innerWidth > 824) {
                this.cols.push([]);
                this.cols.push([]); 
            } else {
                this.cols.push([]);
            }

            let colIndex = 0;

            for (const item of this.items) {
                this.cols[colIndex].push(item);
                colIndex++;

                if (colIndex >= this.cols.length) {
                    colIndex = 0;
                }
            }
            
        },
    },
};
</script>
