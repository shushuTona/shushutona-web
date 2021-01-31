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

</style>