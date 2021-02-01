<template>
    <section v-if="items.length > 0" class="journal-list">
        <div class="inner">
            <h2>Journal</h2>
            
            <ul ref="list">
                <li v-for="(item, index) in items" :key="index">
                    <a :href="`https://blog.thingsthat.com${item.path}`" target="_blank">
                        <strong>{{ item.meta.title }}</strong>
                        <p class="date">{{ item.publishedAt | formatDate }}</p>
                        {{ item.meta.summary }}
                        {{ item.tags.join(' ') }}
                    </a>
                </li>
            </ul>
        </div>
    </section>  
</template>

<script>

import '~/scss/components/journal.scss';

import Unalike from '@createunalike/unalike-js';

export default {
    name: 'JournalList',
    data() {
        return {
            items: [],
        };
    },
    async mounted() {

        this.fetch();

    },
    beforeDestroy() {

        if (process.isClient && this.resizeObserver) {
            this.resizeObserver.disconnect();
        }

    },
    methods: {
        async fetch() {

            if (process.isClient) {

                try {

                    const client = new Unalike.Client();
                    client.setApi('https://thingsthat.unalike.net/api');

                    const response = await client.query(`query contents($pageSize: Int, $sortBy: String, $sortDirection: SortDirection, $type: [String]) {
                        contents(pageSize: $pageSize, sortBy: $sortBy, sortDirection: $sortDirection, type: $type) {
                            id
                            meta
                            path
                            tags
                            publishedAt
                        }
                    }`, {
                        pageSize: 20,
                        sortBy: 'publishedAt',
                        sortDirection: 'DESC',
                        type: ['story'],
                    });

                    this.items = response.data.contents.filter((item) => item.meta);

                    for (const item of this.items) {
                        if ('title' in item.meta && typeof item.meta.title == 'object') {
                            item.meta.title = Unalike.Transformer.convertDeltaToHtml(item.meta.title);
                            item.meta.title = item.meta.title.replace(/(<([^>]+)>)/gi, '');
                        }
                    }

                    this.resizeObserver = new ResizeObserver((entries) => {
                        this.resizeItems();
                    });

                    // start observing a DOM node
                    this.resizeObserver.observe(document.body);
                    
                    this.resizeItems();

                    this.$emit('loaded');

                } catch (err) {

                    console.error(err);

                }
        
            }

        },
        resizeItems() {

            if (this.$refs.list) {

                let columns = [0, 0, 0];

                if (window.innerWidth < 768) {
                    columns = [0];
                } else if (window.innerWidth < 1124) {
                    columns = [0, 0];
                }

                const allItems = this.$refs.list.childNodes;
                let colIndex = 0;

                for (let i = 0; i < allItems.length; i++) {
                    
                    const padding = 20;
                    const item = allItems[i];
                    const width = (this.$refs.list.getBoundingClientRect().width / columns.length) - (padding / columns.length);
                    const itemHeight = item.getBoundingClientRect().height;
                    
                    item.style.width = `${width}px`;

                    const top = columns[colIndex];
                    const left = (width + padding) * (colIndex);
                    
                    item.style.top = `${top}px`;
                    item.style.left = `${left}px`;

                    const newTop = columns[colIndex] + itemHeight + padding;
                    columns[colIndex] = newTop;

                    colIndex++;

                    if (colIndex == columns.length) {
                        colIndex = 0;
                    }

                }

                let totalHeight = 0;

                for (const column of columns) {
                    if (column > totalHeight) {
                        totalHeight = column;
                    }
                }

                this.$refs.list.style.height = `${totalHeight}px`;

            }
            
        },
    },
};
</script>
