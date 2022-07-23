export interface EngineReview {
  name: string;
  score: string;
  text: string;
}

export interface EngineReviewComponent {
  engineReviews: EngineReview[];
}
