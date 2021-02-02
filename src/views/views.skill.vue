<template>
  <div class="views-skill">
    <Heading1 :headingText="'This is an skill page'" />
  </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';

export default {
  name: 'Skill',
  components: {
    Heading1
  }
}
</script>

<style scoped lang="scss">
.views-skill {
    @include resetMargin();
}
</style>
