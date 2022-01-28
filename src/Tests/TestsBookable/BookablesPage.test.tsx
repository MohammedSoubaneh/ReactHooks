import BookablesPageList from '../../Components/Bookables/BookablesList'; 
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import { text } from 'stream/consumers';
import {bookables} from '../../static.json'

describe('Testing Bookable', () => {

    test('should return text ', () => {
        const {getByText} = render(<BookablesPageList/>)
        expect(getByText('Games Room')).toBeInTheDocument()
    })  

    test('should update the setBookableIndex state', () => {
        const {getByText} = render(<BookablesPageList/>)
        expect(getByText('Next')).toBeInTheDocument()
    })  

    test('should return amount of children in list', () => {
        const {getByText} = render(<BookablesPageList/>)
        const listElement = document.querySelector('ul')
        expect(listElement?.childElementCount).toBe(4);
    })
    
    test('should return names for bookedrooms', () => {
        const {getByText, getByTestId, getAllByText} = render(<BookablesPageList/>)
        fireEvent.click(getByText('Next'))
        expect(getByText('Meeting Room')).toBeInTheDocument()
        expect(getByText('Games Room')).toBeInTheDocument()
        expect(getByText('Lounge')).toBeInTheDocument()
    })
    test('should return content in for button', () => {
        const { getByText, getByTestId} = render(<BookablesPageList/>)
        const textId = getByTestId('nextBtn')
        expect(textId.textContent).toBe('Next')
    })
    
    test('should return value for how much are in group', () => {
        const {getByText, getByTestId} = render(<BookablesPageList/>)
        expect(getByTestId('selectBtn').childElementCount).toBe(2)
    })
})

describe('Test bookable ', () => {
    test('should review days and session', () => {
        const { getByRole, getByText, queryByText } = render(<BookablesPageList/>)
        const checked = getByRole('checkbox', {checked: false})
        expect(checked).not.toBeChecked()
        expect(queryByText('Availability')).toBeNull()
        fireEvent.click(checked)
        expect(checked).toBeChecked()
        expect(checked).toBeTruthy()
        const availText = getByText('Availability')
        expect(availText).toBeInTheDocument()
        
    })

    test('should have nested elements', () => {
        const {getByTestId, getByRole} =render(<BookablesPageList/>)
        const checked = getByRole('checkbox', {checked: false})
        fireEvent.click(checked)
        expect(checked).toBeChecked()
        expect(checked).toBeTruthy()
        const itemDetails = getByTestId('itemDetails')
        const bookabaleAvailability = getByTestId('bookableAvail')
        expect(itemDetails).toContainElement(bookabaleAvailability)
    })
    
    
})

