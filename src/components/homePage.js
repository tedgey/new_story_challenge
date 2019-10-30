import React from "react";

export default class HomePage extends React.Component {
  state = {
    loading: true,
    comic: null
  };

  async componentDidMount() {
    const url = "https://xkcd.now.sh/?comic=latest";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ comic: data, loading: false });
    console.log(data);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.comic ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.comic.title}</div>
            <img
              src={this.state.comic.img}
              alt={this.state.comic.title}
              title={this.state.comic.alt}
              className="latestImage"
            />
            <div>
              This comic was published on {this.state.comic.month},{" "}
              {this.state.comic.day}, {this.state.comic.year}
            </div>
          </div>
        )}
      </div>
    );
  }
}
