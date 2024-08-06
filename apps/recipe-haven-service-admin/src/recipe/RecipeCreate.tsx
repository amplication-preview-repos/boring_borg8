import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RecipeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <div />
        <TextInput label="ingredients" multiline source="ingredients" />
        <TextInput label="name" source="name" />
        <TextInput label="steps" multiline source="steps" />
      </SimpleForm>
    </Create>
  );
};
