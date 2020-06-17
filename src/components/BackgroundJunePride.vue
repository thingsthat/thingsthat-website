<template>
    <canvas id="june-canvas" class="background-full" />
</template>

<script>

/**
 * Junes Pride draw rainbox draw background.
 */
export default {
    data() {
        return {
            points: [],
            pageHeight: 0,
        };
    },
    mounted() {

        if (process.isClient) {

            this.initCanvas();

            this.$parent.$el.addEventListener('mousemove', this.handleMouseMove);

            this.animate();

            window.addEventListener('resize', this.initCanvas);
   
        }

    },
    beforeDestroy() {

        if (process.isClient) {

            window.removeEventListener('resize', this.initCanvas);
                
            this.points = null;

            if (this.timerStartUntwist) {
                clearTimeout(this.timerStartUntwist);
            }
            if (this.timerUntwist) {
                clearInterval(this.timerUntwist);
            }

        }
        
    },
    methods: {
        initCanvas() {

            const canvas = this.$el;
            const ctx = canvas.getContext('2d');
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = this.$parent.$el.offsetHeight;
            ctx.strokeStyle = '#BADA55';
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.lineWidth = 100;

            this.pageHeight = this.$parent.$el.offsetHeight;

        },
        handleMouseMove(e) {

            if (this.timerStartUntwist) {
                clearTimeout(this.timerStartUntwist);
            }
            if (this.timerUntwist) {
                clearInterval(this.timerUntwist);
            }

            const pageX = e.touches && e.touches[0] ? e.touches[0].pageX : e.pageX;
            const pageY = e.touches && e.touches[0] ? e.touches[0].pageY : e.pageY;

            if (this.points.length == 0) {
                this.points.push({
                    x: pageX,
                    y: pageY,
                    hue: 0,
                });
            }
                    
            const lastPoint = this.points[this.points.length - 1];
            let hue = lastPoint.hue;
            
            hue++;
            if (hue >= 360) {
                hue = 0;
            }

            this.points.push({
                x: pageX,
                y: pageY,
                hue,
            });

            if (this.points.length > 500) {
                this.points = this.points.slice(this.points.length - 500, this.points.length);
            }

            this.timerStartUntwist = setTimeout(() => {
                this.startUntwist();
            }, 5000);

        },
        startUntwist() {

            this.timerUntwist = setInterval(() => {
                this.points = this.points.slice(3, this.points.length);

                if (this.points.length <= 3) {
                    this.points = [];
                    clearInterval(this.timerUntwist);
                }
            }, 100);

        },
        animate() {

            requestAnimationFrame(() => {
                if (this.points !== null) {
                    this.animate();
                }
            });

            this.drawLatestLines();

            if (this.pageHeight != this.$parent.$el.offsetHeight) {
                this.initCanvas();
            }

        },
        drawLatestLines() {

            const canvas = this.$el;
            const ctx = canvas.getContext('2d');

            if (this.points.length > 2) {
            
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.moveTo(this.points[0].x, this.points[0].y);
                ctx.strokeStyle = `hsl(${this.points[0].hue}, 100%, 50%)`;
                
                for (let i = 0; i < this.points.length; i++) {
                    ctx.lineTo(this.points[i].x, this.points[i].y);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(this.points[i].x, this.points[i].y);
                    ctx.strokeStyle = `hsl(${this.points[i].hue}, 100%, 50%)`;
                }

            }

        },
    },
};

</script>
