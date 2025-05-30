<script>
  import HeroSection from 'src/lib/components/sections/HeroSection.svelte'
  import AboutMeSection from 'src/lib/components/sections/AboutMeSection.svelte';
  import MyWorkSection from 'src/lib/components/sections/MyWorkSection.svelte';
  import SkillsSection from 'src/lib/components/sections/SkillsSection.svelte';
  import ContactSection from 'src/lib/components/sections/ContactSection.svelte';

  const { data } = $props();
  const { developmentExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutMeSection developmentExperience={developmentExperience} />
<MyWorkSection projects={projects} />
<SkillsSection skills={skills} />
<ContactSection />