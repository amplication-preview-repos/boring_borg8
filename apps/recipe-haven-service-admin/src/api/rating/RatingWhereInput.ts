import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RatingWhereInput = {
  author?: StringNullableFilter;
  comment?: StringNullableFilter;
  id?: StringFilter;
  score?: IntNullableFilter;
};
