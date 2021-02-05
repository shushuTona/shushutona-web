<template>
    <div class="views-home">
        <Heading2 :headingText="'This is an home page'" />
    </div>
</template>

<script>
import Heading2 from '@/components/atoms/atoms.heading2.vue';

export default {
    name: 'Home',
    components: {
        Heading2
    }
}
</script>

<style scoped lang="scss">
.views-home {
    @include resetMargin();
}
</style>
