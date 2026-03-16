# Expense Tracker CLI

A lightweight Command Line Interface (CLI) tool built with Node.js to manage your daily expenses. It stores data locally in a JSON file, allowing you to track spending, set budgets, and filter by category or month.

---

## 🚀 Features

* **Persistence:** Automatically creates and maintains a `data.json` file.
* **CRUD Operations:** Add, update, delete, and list expenses.
* **Summaries:** View total spending or monthly breakdowns.
* **Budgeting:** Check if your spending exceeds a set limit for a specific month.
* **Categorization:** Group and filter expenses for better organization.

---

## 🛠️ Installation

1.  Ensure you have [Node.js](https://nodejs.org/) installed.
2.  Clone this repository or copy the script file.
3.  Open your terminal in the project directory.
4.  (Optional) Rename your script to `index.js`.

---

## 📖 Usage Guide

Run the script using `node index.js` followed by the method and flags.

### 1. Add an Expense
```bash
node index.js add --description "Lunch" --amount 20 --category "Food" --month 3
```

2. List All Expenses

Displays a formatted list of all recorded expenses.
```bash
node index.js list
```
3. Update an Expense

You must provide the ID of the expense you wish to modify.
```bash
node index.js update --id 1 --description "Fancy Dinner" --amount 50
```
4. Delete an Expense
```bash
node index.js delete --id 1
```

5. Get Summaries
```bash
Total Summary: node index.js summary
```
```bash
Monthly Summary: node index.js summary --month 3
```
Filter by Category
```bash
node index.js category --category "Food"
```
7. Budget Check

Check if your total spending for a specific month exceeds a given limit.
```bash
node index.js budget --budget 500 --month 3
```
Data Structure
The application stores information in data.json using the following schema:

Field	Description
ID	Unique identifier (auto-incremented)
item	Description of the expense
amount	Numeric value of the cost
categories	User-defined category tag
calendar_month	Numeric representation (1-12)
createdAt	Date the entry was created (YYYY-MM-DD)
updatedAt	Timestamp of the last update
