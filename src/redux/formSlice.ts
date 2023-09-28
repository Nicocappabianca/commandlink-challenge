import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  [key: string]: string;
}

interface UpdateFormFieldPayload {
  id: string;
  value: string;
}

const formSlice = createSlice({
  name: "form",
  initialState: {} as FormState,
  reducers: {
    updateFormField: (state, action: PayloadAction<UpdateFormFieldPayload>) => {
      const { id, value } = action.payload;
      state[id] = value;
    },
  },
});

export const { updateFormField } = formSlice.actions;
export default formSlice.reducer;
