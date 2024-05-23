import {
	configureStore,
	createAsyncThunk,
	createSlice,
} from "@reduxjs/toolkit";

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

export const fetchProducts = createAsyncThunk(
	"products/fetch",
	async (queryInput, { getState }) => {
		const urlObj = new URL(
			"https://project-2.technative.dev.f90.co.uk/products/hedgehog",
		);
		let query = queryInput;
		if (query == null) {
			query = { ...getState().products.query };
			query.page++;
		} else {
			query.page ??= 1;
		}

		for (const [name, value] of Object.entries(query)) {
			if (value != null) {
				urlObj.searchParams.set(name, value);
			}
		}

		const response = await fetch(urlObj);
		const data = await response.json();
		return {
			results: data.products,
			query,
			isQuerySpecified: queryInput != null,
		};
	},
	{ condition: (_, { getState }) => !getState().products.pending },
);
const productsSlice = createSlice({
	name: "products",
	initialState: {
		query: null,
		results: null,
		gotAllResults: false,
		pending: false,
		error: false,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state, action) => {
			state.pending = true;
			state.error = false;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			if (action.payload.isQuerySpecified) {
				state.results = action.payload.results;
				state.gotAllResults = action.payload.query["page-size"] == null; // If unspecified, all results will be returned by the API
			} else {
				state.results.push(...action.payload.results);
				if (action.payload.query["page-size"] != null) {
					if (
						action.payload.results.length <
						action.payload.query["page-size"]
					) {
						state.gotAllResults = true;
					}
				}
			}
			state.query = action.payload.query;

			state.pending = false;
			state.error = false;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.pending = false;
			state.error = true;
		});
	},
});

const store = configureStore({
	reducer: {
		ask: askSlice.reducer,
		products: productsSlice.reducer,
	},
});

export default store;
