import React from "react";
import $ from "jquery";
import axios from "axios";
import arrayMove from "array-move";

import Create from "../../components/Create";
import Landing from "../../components/Landing";
import Modal from "../../components/Modal";
import ResultList from "../../components/ResultList";
import SaveBar from "../../components/SaveBar";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import TrackList from "../../components/TrackList";

import * as config from "../../../config.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onSortEnd = this.onSortEnd.bind(this);
    this.saveRanking = this.saveRanking.bind(this);
    this.search = this.search.bind(this);
    this.searchAlbum = this.searchAlbum.bind(this);
    this.searchArtist = this.searchArtist.bind(this);
    this.selectAlbum = this.selectAlbum.bind(this);
    this.toCreate = this.toCreate.bind(this);
    this.toByAlbum = this.toByAlbum.bind(this);
    this.toByArtist = this.toByArtist.bind(this);
    this.toLanding = this.toLanding.bind(this);

    this.state = {
      albums: [],
      tracks: [],
      flow: "landing"
    }
  }

  async saveRanking() {
    let handle = $(".handle-input").val();
    let tracks = this.state.tracks.map((item, index) => {
      return ({
        name: item.name,
        duration: item.duration,
        track_number: item.track_number,
        order: index + 1
      });
    });
    let ranking = {
      artists: this.state.albums[0].artists,
      album: this.state.albums[0].name,
      tracks: tracks,
      user: handle
    };
    if (handle) {
      axios.post(`${config.endpoint}/ranking`, ranking)
        .then(res => {
          this.setState({
            flow: "saved",
          })
        })
        .catch(err => console.log(err));
      return;
    }
  }

  searchAlbum() {
    this.search("album");
  }

  searchArtist() {
    this.search("artist");
  }

  async search(type) {
    let q = $(".search-input").val();
    let url = `${config.endpoint}/spotify/${type}/${q}`;
    if (q) {
      axios.get(url)
        .then(res => {
          this.setState({
            albums: res.data,
            tracks: [],
            flow: "search-result"
          });
        });
    }
  }

  async selectAlbum(item) {
    let url = `${config.endpoint}/spotify/fullalbum/${item.spotify_id}`;
    axios.get(url)
      .then(res => {
        this.setState({
          albums: [res.data],
          tracks: res.data.tracks,
          flow: "creating-ranking"
        });
      })
  }

  onSortEnd(ev) {
    this.setState({
      tracks: arrayMove(this.state.tracks, ev.oldIndex, ev.newIndex),
    });
  };

  toCreate() {
    this.setState({
      flow: "create",
    });
  }

  toLanding() {
    this.setState({
      flow: "landing",
    });
  }

  toByAlbum() {
    this.setState({
      flow: "by-album",
    });
  }

  toByArtist() {
    this.setState({
      flow: "by-artist",
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Title />
        {this.state.flow === "landing" && <Landing toCreate={this.toCreate} />}
        {this.state.flow === "create"
          && <Create byAlbum={this.toByAlbum} byArtist={this.toByArtist} />}
        {this.state.flow === "by-album" && <SearchBar searchBy={this.searchAlbum} text="album" />}
        {this.state.flow === "by-artist" && <SearchBar searchBy={this.searchArtist} text="artist" />}
        {this.state.flow === "search-result" && <ResultList albums={this.state.albums} selectAlbum={this.selectAlbum} />}
        {this.state.flow === "creating-ranking" && <SaveBar saveRanking={this.saveRanking} />}
        {this.state.flow === "creating-ranking" && <TrackList tracks={this.state.tracks} onSortEnd={this.onSortEnd} />}
        {this.state.flow === "saved" && <Modal text="Ranking saved succesfully!" toLanding={this.toLanding} />}
      </div>
    )
  }
}

export default App;
