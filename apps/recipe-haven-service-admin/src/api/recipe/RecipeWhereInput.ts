import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RecipeWhereInput = {
  category?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  ingredients?: StringNullableFilter;
  name?: StringNullableFilter;
  steps?: StringNullableFilter;
};
