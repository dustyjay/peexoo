<template>
    <div id="app">
        <Header />
        <main>
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'app',
    components: {
        Header: () => import('./components/Header'),
        Footer: () => import('./components/Footer')
    },
    methods: {
        ...mapMutations(['SET_WINDOW_WIDTH']),
        handleResize() {
            const width = window.innerWidth;
            if (width < 640) {
                this.SET_WINDOW_WIDTH('mobile');
            } else if (width < 968) {
                this.SET_WINDOW_WIDTH('tablet');
            } else this.SET_WINDOW_WIDTH('desktop');
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
