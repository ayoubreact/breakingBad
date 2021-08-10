import { Container } from "@mantine/core";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./comp/Header";
import axios from "axios";
import CharacterGrid from "./comp/CharacterGrid";
import Serach from "./comp/Serach";
import Navbar from "./comp/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Episodes from "./comp/Episodes";
import Deaths from "./comp/Deaths";
import Quotes from "./comp/Quotes";
import Character from "./comp/Character";
export default function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      setCharacters(result.data);
      setIsLoading(false);
    };
    fetchItem();
  }, [query]);
  return (
    <div>
      <Container>
        <Header />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/breakingBad">
              <Serach getQuery={(q) => setQuery(q)} />
              <CharacterGrid isLoading={isLoading} items={characters} />
            </Route>
            <Route exact path="/character/:id">
              <Character />
            </Route>
            <Route exact path="/episodes">
              <Episodes />
            </Route>
            <Route exact path="/deaths">
              <Deaths />
            </Route>
            <Route exact path="/quotes">
              <Quotes />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}
