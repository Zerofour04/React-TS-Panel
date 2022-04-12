import {createSlice} from '@reduxjs/toolkit';
import {EmployeeState} from './employeeModels';


const initialState: EmployeeState = {
    employees: [],
    requestState: {
        isLoading: false,
        errorMessage: null
    }
};

const employeeSlice = createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {
        setInitialData(state, action) {
            state.employees = action.payload;
        },
        setLoading(state, action) {
            state.requestState.isLoading = action.payload;
        },
        setErrorMessage(state, action) {
            state.requestState.errorMessage = action.payload;
        },
        setSelectedEmployee(state, action) {
            state.selectedEmployee = action.payload;
        },
    }
});

export default employeeSlice;


