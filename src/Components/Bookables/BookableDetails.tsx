import React, { ReactElement } from 'react'
import {useState} from "react";
import {days, sessions} from "../../static.json";

interface Props {
    
}

function BookableDetails({bookable}: any): ReactElement | null {

    const [hasDetails, setHasDetails] = useState(true)

    function toggleDetails() {
        setHasDetails(has => !has)
    }
    
    return bookable ? (
    <div className="bookable-details">
        <div className="item">
            <div className="item-header">
                <h2>
                    {bookable.title}
                </h2>
                <span className="controls">
                    <label>
                        <input
                            type='checkbox'
                            aria-checked={hasDetails}
                            onChange={toggleDetails}
                        />
                        Show Details
                    </label>
                </span>
            </div>
            <p>{bookable.notes}</p>
            {hasDetails && (
                <div className="item-deails" data-testid='itemDetails'>
                    <h3>Availability</h3>
                    <div className="bookable-availability" data-testid='bookableAvail'>
                        <ul>
                            {bookable.days.sort().map(((d: any) => <li key={d}>{bookable.days[d]}</li>))}
                        </ul>
                        <ul>
                            {bookable.sessions.map(((s: any) => <li key={s}>{bookable.sessions[s]}</li>))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    </div>
    ) : null
}

export default BookableDetails
