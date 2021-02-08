<template>
    <div class="views-product">
        <FirstView>
            <Heading1 :headingText="'Product'" />

            <p>githubのリポジトリ</p>
        </FirstView>
    </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';
import FirstView from '@/components/atoms/atoms.firstView.vue';

export default {
    name: 'Product',
    components: {
        Heading1,
        FirstView
    }
}
</script>

<style scoped lang="scss">
.views-product {
    @include resetMargin();
}
</style>
