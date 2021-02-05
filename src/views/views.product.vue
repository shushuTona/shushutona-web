<template>
    <div class="views-product">
        <Heading2 :headingText="'This is an product page'" />
    </div>
</template>

<script>
import Heading2 from '@/components/atoms/atoms.heading2.vue';

export default {
    name: 'Product',
    components: {
        Heading2
    }
}
</script>

<style scoped lang="scss">
.views-product {
    @include resetMargin();
}
</style>
