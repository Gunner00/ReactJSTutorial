import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import React from "react";

const Expenses = (props) => {
    return (
        <Card className = "expenses">
            {
                props.item.map (
                    (expense) => (
                        <ExpenseItem
                            key = { expense.id }
                            date = { expense.date }
                            title = { expense.title }
                            amount = { expense.amount } />
                    )
                )
            }
        </Card>
    );
}

export default Expenses;