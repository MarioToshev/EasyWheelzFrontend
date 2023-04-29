import React from 'react'
import EditCarForm from '../components/EditCarForm';
import {useLocation} from "react-router-dom"

function EditCarPage() {

    const { state } = useLocation();
    const car = state.car;
    return (
        <EditCarForm car={car} />
    )
}
export default EditCarPage;