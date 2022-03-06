import React from "react";


const Map = () => <h1>Map</h1>
const Profile = () => <h1>Profile</h1>
const Login = () => <h1>Login</h1>

const PAGES = {
  login: Login,
  profile: Profile,
  map: Map
}

class App extends React.Component {
  state = { page: "login" };

  setPage = (page) => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state
    const Page = PAGES[page]

    return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => {this.setPage("map");
          }}
          >
              Map
            </button>
          </li>
          <li>
            <button onClick={() => {this.setPage("profile");
          }}
          >
            Profile
            </button>
          </li>
          <li>
            <button onClick={() => {this.setPage("login");
            }}
          >
            Logout
          </button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Page setPage={this.setPage} />
    </main>
    </>
    );
  }
}

export default App;
