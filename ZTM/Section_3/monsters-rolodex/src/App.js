import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      count: 30,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return { count: prevState.count + prevProps.increment }
    },
    () => console.log("callback", this.state.count))
    console.log("out of setState", this.state.count);
  }

  render() {
    const { monsters, searchField } = this.state;
    /*
    // 위에랑 밑이랑 같은 표현!
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    */
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <button onClick={this.handleClick}>Update State</button>
        <p>{this.state.count}</p>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
