import { Rating as TRating } from "../api/rating/Rating";

export const RATING_TITLE_FIELD = "author";

export const RatingTitle = (record: TRating): string => {
  return record.author?.toString() || String(record.id);
};
