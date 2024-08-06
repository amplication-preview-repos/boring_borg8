import { JsonValue } from "type-fest";

export type Recipe = {
  category: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  ingredients: string | null;
  name: string | null;
  steps: string | null;
  updatedAt: Date;
};
