import React from "react";
import {Login} from "./components/Login/Login.jsx";
import {Map} from "./components/Map/Map.jsx";
import {Profile} from "./components/Profile/Profile.jsx";
import {Registration}  from "./components/Registration/Registration.jsx";
import './App.css'


const PAGES = {
  login: Login,
  profile: Profile,
  map: Map,
  registration: Registration
}

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo(page) {
    this.setState({ currentPage: page });
  };

  render() {

    const Page = PAGES[this.state.currentPage]

    return (
    <> { !(this.state.currentPage === 'login' || this.state.currentPage === 'registration') &&
    
    <header className="header">
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <button className="button" onClick={() => {this.navigateTo("login");
          }}
          >
              Login
            </button>
          </li>
          <li className="menu__item">
            <button className="button" onClick={() => {this.navigateTo("map");
          }}
          >
              Map
            </button>
          </li>
          <li className="menu__item">
            <button className="button" onClick={() => {this.navigateTo("profile");
          }}
          >
              Profile
            </button>
          </li>
        </ul>
      </nav>
    </header> }
    <main className="main-content">
      <section className="section"> 
        <Page navigateTo = {this.navigateTo.bind(this)} />
      </section>
    </main>
    </>
    );
  }
}

export default App;
