import React from "react";
import {Login} from "./components/Login/Login.jsx";
import {Map} from "./components/Map/Map.jsx";
import {Profile} from "./components/Profile/Profile.jsx";
import {Registration}  from "./components/Registration/Registration.jsx";
import './App.css'


const PAGES = {
  login: <Login/>,
  profile: <Profile/>,
  map: <Map/>,
  registration: <Registration/>
}

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo(page) {
    this.setState({ currentPage: page });
  };

  render() {

    const Page = PAGES[this.state.currentPage]

    return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => {this.navigateTo("login");
          }}
          >
              Login
            </button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo("map");
          }}
          >
              Map
            </button>
          </li>
          <li>
            <button onClick={() => {this.navigateTo("profile");
          }}
          >
              Profile
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section> 
        {PAGES[this.state.currentPage]}
      </section>
    </main>
    </>
    );
  }
}

export default App;
