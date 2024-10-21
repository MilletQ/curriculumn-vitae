<script setup lang="ts">
import InfoCardItem from './InfoCardItem.vue';
import HeroIcon from './HeroIcon.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';
// import { ref } from 'vue';
const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);

// // 点击按钮时导出PDF
// const downloadPDF = (pdfContent: any) => {
//   const opt = {
//     pagebreak: { mode: 'avoid-all', after: '#col' },
//     filename: `${t('resume')}.pdf`, // 输出的PDF文件名
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 2 }, // 更高分辨率
//     jsPDF: { orientation: 'portrait' }, // 设置纸张格式
//   };
//   //调用html2pdf将元素转换为PDF并下载;
//   html2pdf().from(pdfContent).set(opt).save();
// };
</script>

<template>
  <div class="card">
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">{{ $t('resume') }}</h2>
    <InfoCardItem :key="0" :item="resume.cv">
      <router-link to="resume" class="cursor-pointer rounded-full bg-primary-500/20 py-2.5 px-2.5 text-primary-500">
        <HeroIcon :icon="'ArrowDownTrayIcon'" class="stroke- h-5 w-5 hover:animate-pulse" />
      </router-link>
    </InfoCardItem>
  </div>
</template>
