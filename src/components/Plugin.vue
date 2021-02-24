<template>
  <div>
    <h1>LOLAILO</h1>
  </div>
</template>

<script>
import{mount} from '@vue/test-utils';

export default {
  name: "Plugin"
};

mount(Component, {
  mocks: {
    $route
  }
});
</script>

<style scoped></style>
