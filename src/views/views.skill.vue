<template>
    <div class="views-skill">
        <Heading2 :headingText="'This is an skill page'" />
    </div>
</template>

<script>
import Heading2 from '@/components/atoms/atoms.heading2.vue';

export default {
    name: 'Skill',
    components: {
        Heading2
    }
}
</script>

<style scoped lang="scss">
.views-skill {
    @include resetMargin();
}
</style>
