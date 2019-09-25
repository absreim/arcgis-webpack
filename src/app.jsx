import React, { Component } from 'react';
/* eslint-disable import/no-unresolved */
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
/* eslint-enable import/no-unresolved */

export default class App extends Component {
  componentDidMount() {
    const map = new Map({
      basemap: 'topo-vector',
    });
    this.mapView = new MapView({
      container: this.mapDiv,
      map,
      center: [-118.71511, 34.09042],
      zoom: 11,
    });
  }

  render() {
    return (
      <div
        ref={
          (element) => { this.mapDiv = element; }
        }
      />
    );
  }
}
