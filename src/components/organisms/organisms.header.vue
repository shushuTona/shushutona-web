<template>
    <header class="l-header">
        <div class="header__inner">
            <p class="header__logo">logo</p>

            <HeaderNav />
        </div>
    </header>
</template>

<script>
import HeaderNav from '@/components/molecules/molecules.nav.vue';

export default {
    name: 'Header',
    components: {
        HeaderNav
    }
}
</script>

<style scoped lang="scss">
.l-header {
    .header {
        &__logo {
            text-align: center;
        }
    }
}
</style>
