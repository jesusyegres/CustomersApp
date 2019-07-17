import { FETCH_CUSTOMERS } from "../constants";
import {createAction} from 'redux-actions';

const customers = [
    {
        "dni":"270003230",
        "name":"chapulin",
        "age":32
    },
    {
        "dni":"272300",
        "name":"javier",
        "age":10
    },
    {
        "dni":"270000",
        "name":"yegres",
        "age":2
    },
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers );