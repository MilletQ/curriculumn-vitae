<script setup lang="ts">
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';

const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);
</script>

<template>
  <div class="card h-fit">
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">{{ $t('about') }}</h2>
    <p class="text-sm text-gray-600 dark:text-night-200">
      {{ resume.profile.aboutMe }}
    </p>
  </div>
</template>
