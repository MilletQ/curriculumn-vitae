<script setup lang="ts">
import { useThemeStore } from '@/stores/ThemeStore';
import { useResumeStore } from '@/stores/ResumeStore';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n({ useScope: 'global' });

onMounted(() => {
  /** Load theme */
  const theme = useThemeStore();
  theme.loadTheme();
  /** Load Resume Language */
  const resume = useResumeStore();
  resume.loadResume();
  /** Set Locale */
  if ('locale' in localStorage) {
    locale.value = localStorage.locale;
  }
  document.title = t('resume');
});
</script>

<template>
  <router-view></router-view>
</template>
