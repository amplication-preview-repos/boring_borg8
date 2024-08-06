import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  ingredients?: SortOrder;
  name?: SortOrder;
  steps?: SortOrder;
  updatedAt?: SortOrder;
};
