import {
	configureStore,
	createAsyncThunk,
	createSlice,
} from "@reduxjs/toolkit";

const API_URL = "";
export const fetchResponses = createAsyncThunk(
	"ask/fetchResponses",
	async (question, { getState }) => {
		const urlObj = new URL(
			"https://project-2.technative.dev.f90.co.uk/ai/hedgehog",
		);
		urlObj.searchParams.set("query", question ?? getState().ask.question);

		const response = await fetch(urlObj);
		const data = await response.json();
		return {
			results: data.results,
			question,
		};
	},
);

const askSlice = createSlice({
	name: "ask",
	initialState: {
		question: null,
		responses: null,
		pending: false,
		error: false,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchResponses.pending, (state, action) => {
			state.pending = true;
			state.error = false;
		});
		builder.addCase(fetchResponses.fulfilled, (state, action) => {
			if (action.payload.question == null) {
				state.responses.push(...action.payload.results);
			} else {
				state.question = action.payload.question;
				state.responses = action.payload.results;
			}

			state.pending = false;
			state.error = false;
		});
		builder.addCase(fetchResponses.rejected, (state, action) => {
			state.pending = false;
			state.error = true;
		});
	},
});

const store = configureStore({
	reducer: {
		ask: askSlice.reducer,
	},
});

export default store;
