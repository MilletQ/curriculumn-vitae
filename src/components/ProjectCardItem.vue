<script setup lang="ts">
import type { Project } from '@/models/Project';
import HeroIcon from './HeroIcon.vue';
import { getImagePath } from '@/helpers/Helper';

defineProps<{ item: Project; separator: boolean }>();
</script>

<template>
  <div class="mb-5 flex items-start">
    <img
      :src="getImagePath(item.image)"
      alt="project logo"
      class="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700" />
    <div class="ml-3 w-full space-y-5">
      <div class="flex justify-between">
        <div class="space-y-1.5">
          <div class="font-medium dark:text-night-50">{{ item.name }}</div>
          <div class="flex space-x-5 text-gray-400 dark:text-night-400">
            <div class="flex items-center gap-1 text-sm font-medium">
              <HeroIcon :icon="'CodeBracketIcon'" class="h-4 w-4 shrink-0 stroke-2" />
              <span>{{ item.language }}</span>
            </div>
          </div>
        </div>
      </div>
      <p class="text-sm text-gray-600 dark:text-night-300">
        {{ item.description }}
      </p>
      <div v-if="separator" class="border-b border-dashed border-gray-200 dark:border-night-600"></div>
    </div>
  </div>
</template>
