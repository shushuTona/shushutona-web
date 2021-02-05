<template>
    <nav class="header__nav">
        <ul class="header__navList">
            <li class="header__navListItem"><router-link to="/">Home</router-link></li>
            <li class="header__navListItem"><router-link to="/about">About</router-link></li>
            <li class="header__navListItem"><router-link to="/product">Product</router-link></li>
            <li class="header__navListItem"><router-link to="/skill">Skill</router-link></li>
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
    &__nav {

    }

    &__navList {
        display: flex;
        justify-content: center;
    }

    &__navListItem {
        & + .header__navListItem {
            margin-left: 40px;
        }

        a {
            display: block;
            font-size: 1.6em;
            text-decoration: none;
            color: $FONT_COLOR;

            @include breakPC() {
                font-size: 2.4rem;
            }
        }
    }
}
</style>