import React, { ReactElement } from 'react'
import BookableView from './BookableView';

interface Props {
    
}

function BookablesPage({}: Props): ReactElement {
    return (
        <main>
            <BookableView />
        </main>
    )
}

export default BookablesPage
