import React from "react";
import {LoginWithAuth} from "./components/Login/Login.jsx";
import {Map} from "./components/Map/Map.jsx";
import {ProfileWithAuth} from "./components/Profile/Profile.jsx";
import {Registration}  from "./components/Registration/Registration.jsx";
import {withAuth} from "./components/AuthContext/AuthContext.jsx";
import './App.css';


const PAGES = {
  login: (props) =>  <LoginWithAuth {...props}/>,
  profile: (props) => <ProfileWithAuth {...props}/>,
  map: (props) => <Map {...props}/>,
  registration: (props) => <Registration {...props}/>
}

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn){
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }
  };

  unauthenticate = () => {
    this.props.logOut();
    this.navigateTo("login");
  }

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
          <li className="menu__item">
            <button className="button" onClick={this.unauthenticate}>
              Выйти
            </button>
          </li>
        </ul>
      </nav>
    </header> }
    <main className="main-content">
      <section className="section"> 
        <Page navigateTo={this.navigateTo.bind(this)}/>
      </section>
    </main>
    </>
    );
  }
}

export default withAuth(App);
