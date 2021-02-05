<template>
    <div class="views-about">
        <Heading2 :headingText="'This is an about page'" />
        <Btn :btnText="'ボタンモジュール'" />
        <Btn :btnText="'強調ボタンモジュール'" :isEmphasis="true" />
    </div>
</template>

<script>
import Btn from '@/components/atoms/atoms.btn.vue';
import Heading2 from '@/components/atoms/atoms.heading2.vue';

export default {
    name: 'About',
    components: {
        Btn,
        Heading2
    }
}
</script>

<style scoped lang="scss">
.views-about {
    @include resetMargin();
}
</style>