import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const generateUUID = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4 ^ c).toString(16));

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveHandler = (data) => {
        const expenseData = {
            ...data,
            id: generateUUID()
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => setIsEditing(true);
    const stopEditingHandler = () => setIsEditing(false);

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing &&
            <ExpenseForm
                onSave={saveHandler}
                onCancel={stopEditingHandler}
            />}
        </div>
    );
};

export default NewExpense;