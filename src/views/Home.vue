<template>
    <div class="home">
        <section class="home-landing">
            <img
                src="../assets/img/banner.jpg"
                class="home__banner"
                alt="banner"
            />
            <nav class="primary-bg">
                <div class="home-landing__bottom container">
                    <div
                        class="home-landing__camera"
                        v-if="getWindowWidth === 'desktop'"
                    >
                        <img
                            src="../assets/img/camera-girl.jpeg"
                            alt="Camera girl"
                        />
                    </div>
                    <div>
                        <ul class="home-landing__menu">
                            <li
                                class="home-landing__item"
                                v-for="(item, i) in landingLinks"
                                :key="i"
                                :class="{
                                    active: item.name === activeLink
                                }"
                            >
                                <a
                                    href="#"
                                    class="home-landing__link"
                                    @click="setActive(item)"
                                    v-html="item.name"
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>

        <section class=" container">
            <div class="home-shots">
                <h3 class="home-shots__header">
                    Afroshots
                    <img src="../assets/img/tick.png" alt="tick" />
                </h3>
                <div class="home-shots__buttons">
                    <button class="btn btn__primary--outline">
                        Message photographer
                    </button>
                    <button class="btn btn__primary">Book Now</button>
                </div>
            </div>
        </section>

        <section class=" calendar-box">
            <div class="calendar"><div id="demo-first"></div></div>
            <div class="calendar"><div id="demo-second"></div></div>
            <div class="calendar"><div id="demo-third"></div></div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import cal from '../vendors/mobiscroll.javascript.min';
export default {
    name: 'home',
    components: {},
    data() {
        return {
            activeLink: 'Availablity',
            landingLinks: [
                {
                    name: 'Details'
                },
                {
                    name: 'Portfolio'
                },
                {
                    name: 'Availablity'
                },
                {
                    name: 'Pricing&nbsp;Packages'
                },
                {
                    name: 'Review'
                }
            ]
        };
    },
    computed: {
        ...mapGetters(['getWindowWidth'])
    },
    methods: {
        setActive(item) {
            this.activeLink = item.name;
        }
    },
    mounted() {
        console.log(cal);
        cal.settings = {
            lang: 'en', // Specify language like: lang: 'pl' or omit setting to use default
            theme: 'ios', // Specify theme like: theme: 'ios' or omit setting to use default
            themeVariant: 'light' // More info about themeVariant: https://docs.mobiscroll.com/4-9-1/javascript/calendar#opt-themeVariant
        };

        const now = new Date();

        cal.calendar('#demo-second', {
            display: 'inline', // Specify display mode like: display: 'bottom' or omit setting to use default
            colors: [
                {
                    d: new Date(now.getFullYear(), now.getMonth(), 16),
                    background: '#D3D3D3'
                }
            ]
        });

        cal.calendar('#demo-first', {
            display: 'inline', // Specify display mode like: display: 'bottom' or omit setting to use default
            colors: [
                {
                    d: new Date(now.getFullYear(), now.getMonth(), 20),
                    background: '#D3D3D3'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), 21),
                    background: '#D3D3D3'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), 22),
                    background: '#D3D3D3'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), 23),
                    background: '#D3D3D3'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), 24),
                    background: '#D3D3D3'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), 25),
                    background: '#D3D3D3'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), 26),
                    background: '#D3D3D3'
                },
                {
                    d: new Date(now.getFullYear(), now.getMonth(), 27),
                    background: '#D3D3D3'
                }
            ]
        });

        cal.calendar('#demo-third', {
            display: 'inline', // Specify display mode like: display: 'bottom' or omit setting to use default
            colors: [{ d: '12/8', background: '#D3D3D3' }]
        });
    }
};
</script>

<style scoped>
@import url('../vendors/mobiscroll.javascript.min.css');
</style>
