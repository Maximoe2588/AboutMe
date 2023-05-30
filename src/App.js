import React from 'react';
import Header from './components/Header';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Header />
      <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      <footer>
        <p>© 2023 Your Name</p>
      </footer>
    </div>
  );
};

export default App;
