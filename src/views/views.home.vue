<template>
    <div class="views-home">
        <FirstView>
            <Heading1 :headingText="'Shushutona-web'" />
        </FirstView>

        <p><a href="/">ddddd</a></p>
    </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';
import FirstView from '@/components/atoms/atoms.firstView.vue';

export default {
    name: 'Home',
    components: {
        Heading1,
        FirstView
    },
    created() {
        document.title = 'shushutona-web';
    },
    computed: {
        commitLinkArray() {
            return this.$store.state.commitLinkArray;
        }
    }
}
</script>

<style scoped lang="scss">
.views-home {
    @include resetMargin();
}
</style>
