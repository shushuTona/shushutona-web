<template>
    <div class="views-about">
        <Heading1 :headingText="'This is an about page'" />
        <Btn :btnText="'ボタンモジュール'" />
        <Btn :btnText="'強調ボタンモジュール'" :isEmphasis="true" />
    </div>
</template>

<script>
import Btn from '@/components/atoms/atoms.btn.vue';
import Heading1 from '@/components/atoms/atoms.heading1.vue';

export default {
    name: 'About',
    components: {
        Btn,
        Heading1
    }
}
</script>

<style scoped lang="scss">
.views-about {
    @include resetMargin();
}
</style>