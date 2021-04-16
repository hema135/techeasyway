import React, { Component } from 'react';
import './App.css';
import Header from './modules/Header';
import Welcome from './modules/Welcome';
import About from './modules/About';
import Promotion from './modules/Promotion'
import Testimonial from './modules/Testimonial';
import Footer from './modules/Footer';



class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Welcome />
        <About />
        <Promotion />
        <Testimonial />
        <Footer />
      </div>
    )
  }
}
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
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
