import {
	configureStore,
	createAsyncThunk,
	createSlice,
} from "@reduxjs/toolkit";

export const fetchResponses = createAsyncThunk(
	"ask/fetchResponses",
	async () => {
		const apiURL =
			"https://project-2.technative.dev.f90.co.uk/ai/hedgehog?query=what+are+the+best+dinosaurs";
		const response = await fetch(apiURL);
		const data = await response.json();
		console.log(data);
		return data.results;
	},
);

const askSlice = createSlice({
	name: "ask",
	initialState: {
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
			state.responses = action.payload;
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
