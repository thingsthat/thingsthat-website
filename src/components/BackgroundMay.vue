<template>
    <canvas id="may-canvas" class="background-fixed" />
</template>

<script>

import Granim from 'granim';

/**
 * May background, using a nice little gradient library.
 */
export default {
    mounted() {

        if (process.isClient) {

            this.granimInstance = new Granim({
                element: '#may-canvas',
                name: 'granim',
                opacity: [1, 1],
                direction: 'diagonal',
                isPausedWhenNotInView: true,
                stateTransitionSpeed: 500,
                states: {
                    'default': {
                        gradients: [
                            ['#000', '#000'],
                        ],
                    },
                    'emmly': {
                        gradients: [
                            ['#8012ff', '#ba8eff'],
                        ],
                    },
                    'unalike': {
                        gradients: [
                            ['#ff0075', '#5100fd'],
                        ],
                    },
                    'beryl': {
                        gradients: [
                            ['#04d0b3', '#26fbdd'],
                        ],
                    },
                    'youpeople': {
                        gradients: [
                            ['#0080ff', '#00ffff'],
                        ],
                    },
                    'bullboat': {
                        gradients: [
                            ['#e53e44', '#413341'],
                        ],
                    },
                },
            });

            window.addEventListener('scroll', this.handleScroll);

        }

    },
    beforeDestroy() {

        
    },
    methods: {
        handleScroll() {

            const elements = document.querySelectorAll('[data-name]');

            for (const element of elements) {
                if (element.offsetTop > window.scrollY - window.innerHeight + 400) {
                    this.granimInstance.changeState(element.dataset.gradient);
                    break;
                }

            }
        },
    },
};

</script>
