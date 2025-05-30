<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$components/Button.svelte';

  const onclick = () => {
    goto('/#contact');
  }
</script>

<section class="hero-section default-margin">
  <h3>Hello! I'm Tilbert</h3>
  <div class="underscore mb-m"></div>
  <h1>I'm a Frontend developer with 7 years of</h1>
  <h1 class="dark-grey mb-m">web experiences.</h1>
  <Button {onclick}>Contact me</Button>
</section>

<style>
  .hero-section {
    padding-top: 60px;
  }
</style>
