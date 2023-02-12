import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        isDarkMode: false,
    },
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.value.isDarkMode = true;
        },
        toggleLightMode: (state) => {
            state.value.isDarkMode = false;
        }
    },
})

export const themeMode = (state) => state.theme.value.isDarkMode;

export default themeSlice.reducer