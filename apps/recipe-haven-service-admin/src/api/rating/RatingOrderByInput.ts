import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  author?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
};
