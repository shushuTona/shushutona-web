<template>
  <header class="orga-header">
    <div class="header__inner">
      <p class="header__logo">logo</p>

      <HeaderNav />
    </div>
  </header>
</template>

<script>
import HeaderNav from '@/components/molecules/molecules.nav.vue';

export default {
  name: 'Header',
  components: {
    HeaderNav
  }
}
</script>

<style scoped>
.orga-header {

}
</style>
