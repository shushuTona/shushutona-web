<template>
    <header class="l-header">
        <div class="header__inner">
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
    padding: 0 20px;

    .header {
        &__inner {
            margin: 0 auto;
            padding: 12px 0;
            width: 100%;
            max-width: $CONTENT_WIDTH;
            position: relative;
            z-index: 1;

            @include breakPC() {
                padding: 24px 0;
            }
        }

        &__logo {
            text-align: center;
        }
    }
}
</style>
