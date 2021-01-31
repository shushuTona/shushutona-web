<template>
  <div id="app">
    <Header />

    <router-view/>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/organisms/organisms.header.vue';
import Footer from '@/components/organisms/organisms.footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 14px;

  @include breakPC() {
    font-size: 16px;
  }
}

a,
button {
  outline: none;
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;;
}

p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
</style>
