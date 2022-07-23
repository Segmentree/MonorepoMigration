import { ref } from 'vue';
import { ApiResponse, EngineReview, EngineReviewComponent } from '../models';
import { Dictionary } from '@ligo/shared/utils';
import { RESOURCES } from './resources';
import { blokApiService } from './api.blok.service';

function engineReviewToHash(engineReviews: EngineReview[]) {
  return engineReviews.reduce((res: Dictionary, review: EngineReview) => {
    res[review.name] = review;
    return res;
  }, {} as Dictionary);
}

export function getStoryblokReviews() {
  const reviews = ref();
  const loading = ref(true);
  blokApiService
    .get<ApiResponse<EngineReviewComponent>>(RESOURCES.REVIEWS)
    .then((res) => {
      const [singleComponent] = res.data.story.content.body;
      const engineReviews = singleComponent.engineReviews;
      reviews.value = engineReviewToHash(engineReviews);
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      loading.value = false;
    });
  return { reviews, loading };
}
