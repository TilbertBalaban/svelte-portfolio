<script>
  import HeroSection from '$components/sections/HeroSection.svelte';
  import AboutMeSection from '$components/sections/AboutMeSection.svelte';
  import MyWorkSection from '$components/sections/MyWorkSection.svelte';
  import SkillsSection from '$components/sections/SkillsSection.svelte';
  import ContactSection from '$components/sections/ContactSection.svelte';

  const { data } = $props();
  const { developmentExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutMeSection developmentExperience={developmentExperience} />
<MyWorkSection projects={projects} />
<SkillsSection skills={skills} />
<ContactSection />