import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

    const expenses = props.expenses;
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart
                    expenses={filteredExpenses}
                />
                <ExpensesList
                    filteredExpenses={filteredExpenses}
                />
            </div>
        </Card>
    );
}

export default Expenses;