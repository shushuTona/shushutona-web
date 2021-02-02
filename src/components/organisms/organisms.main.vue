<template>
    <main class="l-main">
      <router-view/>
    </main>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped lang="scss">
.l-main {
  padding: 0 20px;

  & > [class^="views-"] {
    margin: 0 auto;
    width: 100%;
    max-width: $CONTENT_WIDTH;
  }
}
</style>
