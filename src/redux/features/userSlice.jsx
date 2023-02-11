import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        username: "hernando.exe",
        fullname: "Hernando",
        pp: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export const currentUser = state => state.user.value

export default userSlice.reducer