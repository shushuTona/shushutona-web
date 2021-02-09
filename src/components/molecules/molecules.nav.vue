<template>
    <nav class="header__nav">
        <ul class="header__navList">
            <li class="header__navListItem"><router-link class="header__navListLink" to="/">Home</router-link></li>
            <li class="header__navListItem"><router-link class="header__navListLink" to="/about">About</router-link></li>
            <li class="header__navListItem"><router-link class="header__navListLink" to="/product">Product</router-link></li>
            <li class="header__navListItem"><router-link class="header__navListLink" to="/skill">Skill</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'HeaderNav',
}
</script>

<style scoped lang="scss">
.header {
    &__navList {
        display: flex;
        justify-content: center;
    }

    &__navListItem {
        & + .header__navListItem {
            margin-left: 40px;
        }
    }

    &__navListLink {
        padding: 0 0 8px;
        display: block;
        font-size: 1.6em;
        text-decoration: none;
        color: $FONT_COLOR;
        overflow: hidden;
        position: relative;

        @include breakPC() {
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
            color: $MAIN_COLOR;
            cursor: default;
        }
    }
}
</style>