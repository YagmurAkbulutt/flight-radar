import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../utils/constants";
import axios from "axios";



export const getFlights = createAsyncThunk('flights/getFlights', async () => {
    //1- api istği atıldı
    const res = await axios.request(options)

    // 2- apidan gelen veriyi formatla
    //aircraft dizisi içerisindekileri nesneye çevir
    const formatted = res.data.aircraft.map((item) => ({
        id: item[0],
        code: item[1],
        lat: item[2],
        lng: item[3],
    }))

    //3- aksiyonun payloadı olacak değeri return et
    return formatted;
})