<template>
    <div class="views-about">
        <Heading1 :headingText="'This is an about page'" />
        <Heading2 :headingText="'h2 heading'" />
        <Heading3 :headingText="'h3 heading'" />
        <Btn :btnText="'ボタンモジュール'" />
        <Btn :btnText="'強調ボタンモジュール'" :isEmphasis="true" />
    </div>
</template>

<script>
import Btn from '@/components/atoms/atoms.btn.vue';
import Heading1 from '@/components/atoms/atoms.heading1.vue';
import Heading2 from '@/components/atoms/atoms.heading2.vue';
import Heading3 from '@/components/atoms/atoms.heading3.vue';

export default {
    name: 'About',
    components: {
        Btn,
        Heading1,
        Heading2,
        Heading3
    }
}
</script>

<style scoped lang="scss">
.views-about {
    @include resetMargin();
}
</style>