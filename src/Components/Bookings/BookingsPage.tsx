import React, { ReactElement } from 'react'
import WeekPicker from './weekPicker';

interface Props {
    
}

function BookingsPage({}: Props): ReactElement {
    return (
        <main className="bookings-page">
            <p>Bookings Page</p>
            <WeekPicker date={new Date()}/>
        </main>
    )
}

export default BookingsPage
