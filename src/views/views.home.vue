<template>
    <div class="views-home">
        <Heading1 :headingText="'Shushutona-web'" />

        <p><a href="/">ddddd</a></p>
    </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';

export default {
    name: 'Home',
    components: {
        Heading1
    }
}
</script>

<style scoped lang="scss">
.views-home {
    @include resetMargin();
}
</style>
