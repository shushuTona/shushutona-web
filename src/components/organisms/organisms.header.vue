<template>
    <header
        class="l-header"
        :class="{ 'is-open': isOpen }"
    >
        <button
            class="header__btn"
            @click="toggleMenu"
        ><span class="header__btnInner">btn</span></button>

        <div class="header__inner" :class="{ 'of-transition': ofTransition }">
            <nav class="header__nav">
                <ul class="header__navList">
                    <li class="header__navListItem"><router-link class="header__navListLink" to="/" @click.native="closeMenu">Home</router-link></li>
                    <li class="header__navListItem"><router-link class="header__navListLink" to="/about" @click.native="closeMenu">About</router-link></li>
                    <li class="header__navListItem"><router-link class="header__navListLink" to="/product" @click.native="closeMenu">Product</router-link></li>
                    <li class="header__navListItem"><router-link class="header__navListLink" to="/skill" @click.native="closeMenu">Skill</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isOpen: false,
            ofTransition: false,
            mql: window.matchMedia('screen and (max-width: 759px)')
        }
    },
    mounted() {
        this.mql.addEventListener('change', this.mqlHandler);
        this.mqlHandler();
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            this.isOpen = false;
        },
        mqlHandler() {
            if (this.mql.matches) {
                this.ofTransition = true;
            } else {
                this.ofTransition = false;
            }

            this.closeMenu();
        }
    }
}
</script>

<style scoped lang="scss">
.l-header {
    padding: 0 24px;
    font-family: "Quicksand", sans-serif;
    position: fixed;
    bottom: 45px;
    right: 0;
    z-index: 100;

    @include breakPC() {
        position: relative;
        bottom: 0;
    }

    .header {
        // SPメニュー表示ボタン
        &__btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid $MAIN_COLOR;
            background-color: #fff;
            white-space: nowrap;
            text-indent: 10em;
            transition: border-color $TRANSITION, background-color $TRANSITION;
            overflow: hidden;
            position: relative;
            z-index: 100;
            cursor: pointer;

            @include breakPC() {
                display: none;
            }

            &::before,
            &::after {
                content: "";
                margin: auto;
                width: 25px;
                height: 2px;
                background-color: $MAIN_COLOR;
                transition: background-color $TRANSITION, transform $TRANSITION;
                transition-delay: $TRANSITION;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }

            &::before {
                transform: translateY(8px);
            }

            &::after {
                transform: translateY(-8px);
            }

            &Inner {
                &::before {
                    content: "";
                    margin: auto;
                    width: 25px;
                    height: 2px;
                    background-color: $MAIN_COLOR;
                    transition: opacity $TRANSITION;
                    transition-delay: $TRANSITION;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }
            }
        }

        &__inner {
            margin: 0 auto;
            padding: 24px;
            width: 100%;
            max-width: $CONTENT_WIDTH;
            z-index: 1;

            @include breakSP() {
                height: 100%;
                background-color: $MAIN_COLOR;
                transform: translateX(100vw);
                position: fixed;
                top: 0;
                left: 0;

                &.of-transition {
                    transition: transform $TRANSITION;
                    transition-delay: .3s;
                }
            }

            @include breakPC() {
                padding: 24px 0;
                position: relative;
            }
        }

        &__nav {
            @include breakSP() {
                height: 100%;
                display: flex;
                align-items: center;
            }
        }

        &__navList {
            @include breakSP() {
                width: 100%;
                display: block;
            }

            @include breakPC() {
                display: flex;
                justify-content: center;
            }
        }

        &__navListItem {
            text-align: center;
            overflow: hidden;

            & + .header__navListItem {
                @include breakSP() {
                    margin-top: 24px;
                }

                @include breakPC() {
                    margin-left: 40px;
                }
            }

            &:nth-of-type(1) {
                .header__navListLink {
                    transition-delay: $TRANSITION;
                }
            }

            &:nth-of-type(2) {
                .header__navListLink {
                    transition-delay: $TRANSITION * 1.5;
                }
            }

            &:nth-of-type(3) {
                .header__navListLink {
                    transition-delay: $TRANSITION * 2;
                }
            }

            &:nth-of-type(4) {
                .header__navListLink {
                    transition-delay: $TRANSITION * 2.5;
                }
            }
        }

        &__navListLink {
            padding: 0;
            display: inline-block;
            color: #fff;
            font-size: 1.6em;
            text-decoration: none;
            overflow: hidden;
            position: relative;

            @include breakSP() {
                padding: 0 0 0 16px;
                transition:
                    transform $TRANSITION,
                    opacity $TRANSITION;
                transform: translateY(100px);
            }

            @include breakPC() {
                padding: 0 0 8px;
                display: block;
                color: $FONT_COLOR;
                font-size: 2.4rem;
            }

            // カレント以外のリンクhover表示
            &:not([aria-current="page"]) {
                &::before,
                &::after {
                    content: "";
                    height: 4px;
                    transform: translateX(-100px);
                    transition: transform $TRANSITION;
                    transition-delay: 0;
                    position: absolute;
                    left: 0;
                }

                &::before {
                    width: 100%;
                    background-color: $MAIN_COLOR;
                    bottom: 4px;
                }

                &::after {
                    width: 80%;
                    background-color: $SUB_COLOR;
                    bottom: 0;
                    transition-delay: .1s;
                }

                @include hover() {
                    &::before,
                    &::after {
                        transform: translateX(0);
                    }
                }
            }

            &[aria-current="page"] {
                @include breakSP() {
                    color: #fff;

                    &::before {
                        content: "";
                        margin: auto;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 5px 0 5px 10px;
                        border-color: transparent transparent transparent $SUB_COLOR;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                    }
                }

                @include breakPC() {
                    color: $MAIN_COLOR;
                    cursor: default;
                }
            }
        }
    }

    &.is-open {
        .header {
            &__btn {
                border-color: #fff;
                background-color: $MAIN_COLOR;

                @keyframes openBtnTop {
                    0% {
                        transform: translateY(8px);
                    }

                    50% {
                        transform: translateY(0);
                    }

                    100% {
                        transform: rotate(135deg);
                    }
                }

                @keyframes openBtnBottom {
                    0% {
                        transform: translateY(-8px);
                    }

                    50% {
                        transform: translateY(0);
                    }

                    100% {
                        transform: rotate(-135deg);
                    }
                }

                &::before,
                &::after {
                    background-color: #fff;
                    transform-origin: center;
                    animation-duration: .5s;
                    animation-fill-mode: both;
                }

                &::before {
                    animation-name: openBtnTop;
                }

                &::after {
                    animation-name: openBtnBottom;
                }

                &Inner {
                    &::before {
                        opacity: 0;
                    }
                }
            }

            &__inner {
                transform: translateX(0);
                transition-delay: 0s;
            }

            &__navItem {
                &:nth-of-type(1),
                &:nth-of-type(2),
                &:nth-of-type(3),
                &:nth-of-type(4) {
                    .header__navListLink {
                        transition-delay: 0;
                    }
                }
            }

            &__navListLink {
                transform: translateY(0);
            }
        }
    }
}
</style>
