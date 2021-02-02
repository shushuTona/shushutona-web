<template>
  <main class="views-about">
    <h1>This is an about page</h1>

    <Btn :btnText="'ボタンモジュール'" />
    <Btn :btnText="'強調ボタンモジュール'" :isEmphasis="true" />
  </main>
</template>

<script>
import Btn from '@/components/atoms/atoms.btn.vue';

export default {
  name: 'About',
  components: {
    Btn
  }
}
</script>

<style scoped lang="scss">
.views-about {

}
</style>