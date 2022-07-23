<template>
  <div class="full-width full-height">
    <q-card
      v-if="!showVideo"
      id="preview"
      v-ripple
      flat
      :class="`q-hoverable border-radius-${radius} full-height`"
    >
      <q-item class="q-pa-none full-height" clickable @click="onLoadVideo">
        <q-img :class="`border-radius-${radius}`" :src="getImgPreview">
          <div
            class="bg-none full-height full-width row justify-center items-center"
          >
            <q-circular-progress
              show-value
              class="text-white q-ma-md"
              :indeterminate="videoLoading"
              :value="loadProgress"
              size="90px"
              :thickness="0.2"
              color="primary"
              center-color="grey-8"
              track-color="transparent"
            >
              <q-icon size="xl" name="mdi-play" />
            </q-circular-progress>
          </div>
        </q-img>
      </q-item>
    </q-card>
    <div
      :id="instanceId + '-youtubeVideo'"
      :class="`full-width border-radius-${radius} row items-center`"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  getCurrentInstance,
  nextTick
} from 'vue';

const YOUTUBE_IMG_PREVIEW = 'https://img.youtube.com/vi/';
const IMG_MAX_RESOLUTION = '/maxresdefault.jpg';
const PROGRESS = 100;
const LOADING_TIME = 1000;

export default defineComponent({
  name: 'BasicYouTubeVideo',
  components: {},
  props: {
    videoUrl: {
      type: String,
      required: true
    },
    radius: {
      type: String,
      default: '10'
    }
  },
  setup(props) {
    const loadProgress = ref(PROGRESS);
    const videoLoading = ref(false);
    const showVideo = ref(false);
    const player = ref();

    // Init youtube API comunication ********************************
    let tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    // **************************************************************

    const getId = computed(() => {
      const urlParts = props.videoUrl.split('/');
      return urlParts[urlParts.length - 1];
    });

    const getImgPreview = computed(() => {
      return YOUTUBE_IMG_PREVIEW + getId.value + IMG_MAX_RESOLUTION;
    });

    const instanceId = computed((): string => {
      return (getCurrentInstance() as any)._uid;
    });

    function onPlayerReady(event) {
      // Control the player when the component is ready
      event.target.playVideo();
    }

    function onPlayerStateChange(event) {
      // Control the player when the state change
      console.log('On Player State Change');
    }

    function onLoadVideo() {
      const previewHeight = document.getElementById('preview').offsetHeight;
      videoLoading.value = true;
      setTimeout(() => {
        showVideo.value = true;
        nextTick(() => {
          player.value = new YT.Player(instanceId.value + '-youtubeVideo', {
            videoId: getId.value,
            height: previewHeight,
            events: {
              onReady: onPlayerReady,
              onStateChange: onPlayerStateChange
            }
          });
        });
      }, LOADING_TIME);
    }

    return {
      getId,
      getImgPreview,
      loadProgress,
      videoLoading,
      onLoadVideo,
      showVideo,
      instanceId
    };
  }
});
</script>
