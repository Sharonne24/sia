import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BlogDetail from './components/BlogDetail';
import Portfolio from './components/Portfolio';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel=""
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App () {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/blog" component={BlogDetail} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
