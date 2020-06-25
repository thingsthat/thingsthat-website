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
                    'unalike': {
                        gradients: [
                            ['#ff0075', '#5100fd'],
                        ],
                    },
                },
            });

            window.addEventListener('scroll', this.handleScroll);

        }

    },
    beforeDestroy() {

        if (process.isClient) {
            window.removeEventListener('scroll', this.handleScroll);
        }
        
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
