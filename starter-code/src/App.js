import React, { Component } from "react";
import "./App.css";


class App extends Component {
  render() {
    return (
        <div>
              <div className="App">
        <nav>
        <img src = "/images/ironhack-logo.svg"/>
                <img src = "/images/menu-top.svg"/>
        </nav>
           

            <h1>Say hello to<br/> 
            ReactJS
            
            </h1>
<p> You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
</div>
<div class= "section1"> 
    <div>
        <h4>Declarative</h4>
<img src ="/images/icon1.png"/>
<p>React makes it painless to create interactive UI's</p>
</div>
    <div>
        <h4>Components</h4>
<img src ="/images/icon2.png"/>
<p>Build encapsulated components that manage their state.</p>
</div>
    <div>
        <h4>Single Way</h4>
<img src ="/images/icon3.png"/>
<p>A set of immutable values are passed to the component's.</p>
</div>
<div>
    <h4>JSX</h4>
<img src ="/images/icon4.png"/>
<p>Statistically-typed, designed to run on modern browsers.</p>
</div>
</div>
</div>

    );
  }
}

export default App;