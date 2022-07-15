import React , {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
       {
       title: 'what is React?',
       content: 'React is a front end javascript framework'
       },
     
       {
       title: 'Why use React?',
       content: 'React is favourite JS library among engineers'
       },

       {
       title: 'How do you use React?',
       content: 'you use React by creating components'
       }     
];

const options = [

 {
 label:'the color Red',
 value:'Red'
 },
 {
 label:'the color Blue',
 value:'Blue'
 },
 {
 label:'the color Olive Green',
 value:'Olive Green'
 }
];

  const App = () => {
       const [selected,setSelected] = useState(options[0]);
       return (
       
       <div>
       <Header/>

       <Route path="/">
       <Accordion items={items}/>
       </Route>

       <Route path="/list">
       <Search/>
       </Route>

       <Route path="/dropdown">
       <Dropdown
       label="Select a color"
       options={options}
       selected={selected}
       onSelectedChange={setSelected}
       />
       </Route>

       <Route path="/translate">
       <Translate/>
       </Route>

       </div>

       );

};

export default App;