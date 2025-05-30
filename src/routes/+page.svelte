<script>
  import {
    AboutMeSection,
    ContactSection,
    Header,
    HeroSection,
    MyWorkSection,
    SkillsSection,
  } from "$components";

  const { data } = $props();
  const { developmentExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutMeSection developmentExperience={developmentExperience} />
<MyWorkSection projects={projects} />
<SkillsSection skills={skills} />
<ContactSection />