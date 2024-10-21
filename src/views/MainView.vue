<script setup lang="ts">
import ProfileCard from '@/components/ProfileCard.vue';
import ResumeCard from '@/components/ResumeCard.vue';
import InfoCard from '@/components/InfoCard.vue';
import SkillCard from '@/components/SkillCard.vue';
import AboutCard from '@/components/AboutCard.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import EducationView from '@/views/EducationView.vue';
import ProjectView from '@/views/ProjectView.vue';
import SettingsPopover from '@/components/SettingPopover.vue';
</script>

<template>
  <main class="container mx-auto max-w-6xl px-4 py-4">
    <div class="gap-5 sm:grid lg:grid-cols-3">
      <!-- Start left side -->
      <div class="space-y-5">
        <!-- start profile  -->
        <ProfileCard />
        <SettingsPopover />
        <!-- End profile  -->
        <!-- Start resume -->
        <ResumeCard />
        <!-- End resume -->
        <!-- Start user information -->
        <InfoCard />
        <EducationView />
        <!-- End user information -->
        <!-- Start skills -->
        <SkillCard />
        <!-- End skills -->
        <!-- Start Language -->
        <!-- <LanguageCard /> -->
      </div>
      <!-- End left side -->
      <!-- Start right side -->
      <div class="mt-4 space-y-5 sm:mt-0 lg:col-span-2">
        <!-- Start about me -->
        <AboutCard />
        <!-- End about me -->
        <!-- <RouterView /> -->
        <ExperienceView />
        <ProjectView />
      </div>
      <!-- End right side -->
    </div>
  </main>
</template>
