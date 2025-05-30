<script>
  import HeroSection from 'src/lib/components/sections/HeroSection.svelte'
  import AboutMeSection from 'src/lib/components/sections/AboutMeSection.svelte';

  const { data } = $props();
  const { developmentExperience } = data;
</script>

<HeroSection />
<AboutMeSection developmentExperience={developmentExperience} />