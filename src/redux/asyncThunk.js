import Api from "@/Api/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchTranslations = createAsyncThunk(
    'language/fetchTranslations',
    async () => {
        const resp = await Api.getTranslate()
        return resp.data[0]
    }
)
