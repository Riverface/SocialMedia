import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/HeadersFooters/Header'
import PersonProfile from './Components/PersonProfile'
import ContentFeed from './Components/ContentFeed'
import PeopleToFollow from './Components/PeopleToFollow'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <Header />
      <PersonProfile />
      <ContentFeed />
      <PeopleToFollow />
    </>
  );
}
export default App;