import React from 'react';
import '../scss/App.scss';
import Category from './Category';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  async componentDidMount() {
    let api_key = process.env.REACT_APP_API_KEY;
    let today = new Date().toISOString().split('T')[0];
    let url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${today}&api-key=${api_key}`;

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ categories: data.results.lists });
  }

  render() {
    let categoryItems = this.state.categories.map(el => {
      return <Category bb="4" data={el} key={el.list_id}></Category>;
    });

    return (
      <div className="app">
        {this.state.categories.length > 0 ? (
          categoryItems
        ) : (
          <div className="loader">
            <video
              src="https://thumbs.gfycat.com/RemorsefulUnitedHowlermonkey-mobile.mp4"
              no-controls="true"
              autoPlay
            ></video>
            <p>Look at me dancing while i fetch your books...</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
