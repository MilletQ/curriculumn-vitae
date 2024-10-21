<script setup lang="ts">
import SettingPopoverLanguage from './SettingPopoverLanguage.vue';
import SettingPopoverTheme from './SettingPopoverTheme.vue';
</script>

<template>
  <div class="card">
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">{{ $t('settings.title') }}</h2>
    <SettingPopoverTheme class="mb-4" />
    <SettingPopoverLanguage />
  </div>
</template>
