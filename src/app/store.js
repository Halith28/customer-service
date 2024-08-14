import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "../component/TicketCreation/ticketSlice";

const store = configureStore({
  reducer: {
    services: serviceReducer,
  },
});

export default store;
