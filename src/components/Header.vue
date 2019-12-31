<template>
    <header>
        <nav class="nav">
            <div class="nav-left">
                <img
                    class="nav__logo"
                    src="../assets/peexoo.png"
                    alt="Peexoo"
                />
            </div>
            <div class="nav-right">
                <template v-if="getWindowWidth !== 'desktop'">
                    <div
                        ref="trigger"
                        :class="{ 'is-active': showSidebar }"
                        @click.stop="toggleDropdown"
                        class="nav__mobile--button"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div
                        class="nav__mobile--list"
                        @click.stop="toggleDropdown"
                        :class="{ show: showSidebar }"
                    >
                        <div class="nav__mobile--wrapper">
                            <div>
                                <ul>
                                    <li class="nav__item">
                                        <a class="nav__link" href="#">
                                            I am a photographer
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a class="nav__link" href="#">
                                            Explore photos
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a class="nav__link" href="#">
                                            Find a photographer
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a class="nav__link" href="#">
                                            Find my photos
                                        </a>
                                    </li>
                                    <li class="nav__item">
                                        <a
                                            class="nav__link primary-dark"
                                            href="#"
                                        >
                                            Login or Register
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </template>
                <ul class="nav__list" v-else>
                    <li class="nav__item">
                        <a class="nav__link" href="#">
                            I am a photographer
                        </a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="#">
                            Explore photos
                        </a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="#">
                            Find a photographer
                        </a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="#">
                            Find my photos
                        </a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link primary-dark" href="#">
                            Login or Register
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'app-header',
    data() {
        return {
            showSidebar: false
        };
    },
    computed: {
        ...mapGetters(['getWindowWidth'])
    },
    methods: {
        toggleDropdown() {
            document.body.classList.toggle('no-scroll');
            this.showSidebar = !this.showSidebar;
        }
    }
};
</script>
