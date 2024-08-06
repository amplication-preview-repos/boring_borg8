import { InputJsonValue } from "../../types";

export type RecipeUpdateInput = {
  category?: string | null;
  image?: InputJsonValue;
  ingredients?: string | null;
  name?: string | null;
  steps?: string | null;
};
