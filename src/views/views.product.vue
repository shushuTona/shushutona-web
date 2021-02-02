<template>
  <div class="views-product">
    <Heading1 :headingText="'This is an product page'" />
  </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';

export default {
  name: 'Product',
  components: {
    Heading1
  }
}
</script>

<style scoped lang="scss">
.views-product {
    @include resetMargin();
}
</style>
