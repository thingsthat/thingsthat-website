<template>
    <canvas v-show="show" id="june-canvas" class="background-full" />
</template>

<script>

/**
 * Junes Pride draw rainbox draw background.
 */
export default {
    data() {
        return {
            show: false,
            points: [],
            pageHeight: 0,
            isDrawActive: true,
        };
    },
    mounted() {

        if (process.isClient) {
            
            // If mobile, do nothing. Doesn't work on mobile, as finger is for scrolling.
            if (this.isMobile()) {
                return;
            }

            this.initCanvas();

            this.$parent.$el.addEventListener('mousemove', this.handleMouseMove);

            this.animate();

            window.addEventListener('resize', this.initCanvas);
            window.addEventListener('scroll', this.handleScroll);
   
        }

    },
    beforeDestroy() {

        if (process.isClient) {

            if (this.isMobile()) {
                return;
            }

            window.removeEventListener('resize', this.initCanvas);
            window.removeEventListener('scroll', this.handleScroll);
                
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
        isMobile() {
            return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        },
        initCanvas() {

            this.show = true;

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
        handleScroll() {

            // Basic draw lock
            this.isDrawActive = false;

            if (this.timerDrawWait) {
                clearTimeout(this.timerDrawWait);
            }

            this.timerDrawWait = setTimeout(() => {
                this.isDrawActive = true;
            }, 500);

        },
        handleMouseMove(e) {

            if (!this.isDrawActive) {
                return;
            }

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

            // Untwist the line
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

            // Handles any change in dynamic data loading on page
            if (this.pageHeight != this.$parent.$el.offsetHeight) {
                this.initCanvas();
            }

        },
        drawLatestLines() {

            const canvas = this.$el;
            const ctx = canvas.getContext('2d');

            if (this.points.length > 2) {
            
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                for (let i = 0; i < this.points.length - 1; i++) {
                    
                    // Stop any major jumps in position
                    if (i > 0 && Math.abs(this.points[i].y - this.points[i+1].y) > 200) {
                        continue;
                    }

                    ctx.beginPath();
                    ctx.moveTo(this.points[i].x, this.points[i].y);
                    ctx.strokeStyle = `hsl(${this.points[i].hue}, 100%, 50%)`;
                    ctx.lineTo(this.points[i+1].x, this.points[i+1].y);
                    ctx.stroke();

                    
                }
            }

        },
    },
};

</script>
