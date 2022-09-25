import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Hello World
//         </p>
//       </header>
//     </div>
//   );
// }
//
// export default App;


import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";

const App = () => {

    const expense = [
        {
            id: 'el1',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2022, 2, 10)
        },
        {
            id: 'el2',
            title: 'Car Insurance',
            amount: 1200,
            date: new Date(2022, 5, 10)
        },
        {
            id: 'el3',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2022, 6, 5)
        },
        {
            id: 'el4',
            title: 'Lamborghini Aventador',
            amount: 10000,
            date: new Date(2022, 9, 1)
        }
    ]

    return (
        <div>
            <NewExpense />
            <Expenses items={expense}/>
        </div>
    )
}

export default App;