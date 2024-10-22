<template>
  <div id="resume2" class="resume card border- mx-auto h-[1629px] w-[1152px] rounded-none" ref="content">
    <div class="top-row">
      <span class="person-name"> {{ resume.profile.name }} </span>
      <span class="person-position">
        {{ resume.profile.job }}
      </span>
    </div>
    <div class="col">
      <div class="left-col">
        <div class="person-image">
          <div class="image-centerer">
            <div class="img"></div>
          </div>
        </div>
        <div class="contact">
          <h3>{{ $t('contact') }}</h3>
          <div class="contact-row">
            <span>{{ resume.information.find((x) => x.icon == 'EnvelopeIcon')?.value }}</span>
          </div>
          <div class="contact-row dots">
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
          </div>
          <div class="contact-row">
            <span>{{ resume.information.find((x) => x.icon == 'DevicePhoneMobileIcon')?.value }}</span>
          </div>
          <div class="contact-row dots">
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
          </div>
          <div class="contact-row">
            <span>{{ resume.information.find((x) => x.icon == 'HomeIcon')?.value }}</span>
          </div>
          <div v-if="resume.profile.socialNetwork.find((x) => x.name == 'Github')?.url" class="contact-row dots">
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
          </div>
          <div v-if="resume.profile.socialNetwork.find((x) => x.name == 'Github')?.url" class="contact-row">
            <span>{{ resume.profile.socialNetwork.find((x) => x.name == 'Github')?.url }}</span>
          </div>
        </div>
        <div class="education">
          <h3>{{ $t('education') }}</h3>
          <div class="education-block" v-for="education in resume.education" :key="education.college">
            <div class="row">
              <span class="degree">{{ education.college }}</span>
            </div>
            <div class="row">
              <span class="degree-description">{{ education.course }} {{ education.start }} - {{ education.end }}</span>
            </div>
          </div>
        </div>
        <div class="skills-block">
          <h3>{{ $t('skills') }}</h3>
          <div class="skills">
            <div class="skill" v-for="(skill, index) in resume.skill" :key="index">
              <span class="skill-name">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right-col">
        <div class="experience">
          <h3>{{ $t('experience') }}</h3>
          <div class="experience-block" v-for="experience in resume.experience" :key="experience.company">
            <div class="row">
              <span class="company"> {{ experience.company }} - </span>
              <span class="job-title"> {{ experience.job }} </span>
            </div>
            <div class="row">
              <span class="time-period"> {{ experience.start }}-{{ experience.end }}</span>
            </div>
            <div class="row">
              <span class="job-description"> {{ experience.description }} </span>
            </div>
          </div>
        </div>
        <div class="experience">
          <h3>{{ $t('project') }}</h3>
          <div class="experience-block" v-for="project in resume.project" :key="project.name">
            <div class="row">
              <span class="company"> {{ project.name }}</span>
            </div>
            <div class="row">
              <span class="time-period"> {{ project.language }}</span>
            </div>
            <div class="row">
              <span class="job-description"> {{ project.description }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';
//@ts-ignore
import html2pdf from 'html2pdf.js';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);
// 绑定到要转换为PDF的DOM元素
const content = ref<HTMLElement>();
onMounted(() => {
  const opt = {
    filename: `${t('resume')}.pdf`, // 输出的PDF文件名
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, width: 1152, height: 1629 }, // 更高分辨率
    jsPDF: { orientation: 'portrait' }, // 设置纸张格式
  };
  html2pdf().from(content.value).set(opt).save();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume2 {
  font-family: 'Raleway', sans-serif;
  padding: 90px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  a,
  a:focus,
  a:hover,
  a:visited {
    text-decoration: none;
  }
  h3 {
    text-transform: uppercase;
    padding-top: 0;
    margin-top: 0;
    letter-spacing: 5px;
    font-weight: 400;
  }
  .top-row {
    width: 100%;
    padding-top: 0px;
    padding-bottom: 90px;
    span {
      width: 100%;
      display: block;
      text-align: center;
      font-weight: normal;
    }
    span.person-name {
      text-transform: uppercase;
      font-size: 50px;
      letter-spacing: 10px;
    }
    span.person-position {
      letter-spacing: 5px;
    }
  }
  .col {
    display: grid;
    grid-template-columns: 1fr 3fr; /* 设置左边栏占1单位，右边栏占3单位 */
    justify-content: center; /* 让两列居中 */
    column-gap: 50px;
    .left-col {
      justify-self: end;
      width: inherit;
      float: left;
      padding-left: 0;
      padding-right: 0;
      .person-image .image-centerer {
        display: flex;
        justify-content: center;
        height: auto;
        overflow: hidden;
        .img {
          flex: none;
          background: url('../assets/img/profile/me.jpg');
          background-position: center;
          background-size: cover;
          height: 250px;
          width: 100%;
        }
      }
      .contact h3 {
        font-size: x-large;
        text-align: center;
        margin-top: 30px;
        font-weight: bold;
      }
      .contact .contact-row {
        text-align: center;
        letter-spacing: 2px;
        margin-bottom: 3px;
        a {
          color: black;
        }
      }
      .contact .contact-row:first-of-type {
        margin-top: 30px;
      }
      .contact .contact-row.dots {
        margin-top: 20px;
        margin-bottom: 15px;
        font-size: 10px;
        color: rgba(153, 153, 153, 0.6);
      }
      .education {
        margin-top: 50px;
        h3 {
          font-size: x-large;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .education-block {
          margin-bottom: 10px;
          .degree {
            font-size: 19px;
            text-transform: uppercase;
            margin-bottom: 3px;
          }
        }
      }
      .skills-block {
        margin-top: 50px;
        position: relative;
        h3 {
          font-size: x-large;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .skills {
          margin-bottom: 10px;
          margin-bottom: 20px;
          position: relative;
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          .skill {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            position: relative;
            border: #333333 1px solid;
            margin: 3px;
            float: left;
            font-size: 8px;
            .skill-name {
              text-align: center;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              width: 100%;
            }
          }
          .skills-other {
            display: inline-block;
            width: 100%;
            margin-top: 20px;
          }
        }
      }
    }
    .right-col {
      width: inherit;
      float: right;
      padding-left: 0;
      padding-right: 0;
      .experience h3 {
        font-size: x-large;
        margin-bottom: 20px;
        font-weight: bold;
      }
      .experience-block {
        margin-bottom: 20px;
        .row {
          margin-bottom: 3px;
        }
        .row .company {
          text-transform: uppercase;
          font-size: 19px;
        }
        .row .job-title {
          font-size: 19px;
        }
      }
    }
  }
}
.dark {
  h3 {
    color: #f5f5f5; // 夜间模式下的文本颜色，例如夜间的浅色
  }
  a,
  span {
    color: #88869e;
  }
}
</style>
