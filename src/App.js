import { useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList'
import Form from './components/Form/Index'

function App() {
  
  const [items, setItems] = useState([]);

  const onSubmitForm = (data) => {
    setItems(items => [...items, data])
    console.log(items);
  }

  return (
    <div className="App">
        <Form onSubmitForm={onSubmitForm} />
        <CardList items={items} />
    </div>
  );
}

export default App;
