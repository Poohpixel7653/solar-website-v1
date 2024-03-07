import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const CustomerMap = () => {
  const MAPBOX_MAP_KEY =
    "pk.eyJ1IjoicG9vaHBpeGVsNzY1MyIsImEiOiJjbHRiYzVoMm0wd2p1MmltZ25ib2V3MTFjIn0.QRwaSlvUgNl6eQVEli--iw";

  return (
    <div className="w-full h-[100vh] bg-[#0f2c32] py-24">
      <div className="md:max-w-[1400px] m-auto max-w-[600px] relative">
        <h1 className="md:leading-[72px] text-3xl font-bold">
          MONO<span className="text-[#208486]"> Service Categories</span>
        </h1>
        <p className="text-lg text-gray-600">
          Various versions have evolved over the years, sometime by accidentally
        </p>
        <div className="h-[600px] mt-4">
          <Map
            mapboxAccessToken={MAPBOX_MAP_KEY}
            initialViewState={{
              latitude: 18.317588,
              longitude: 99.397334,
              zoom: 10,
            }}
            scrollZoom={false}
            mapStyle="mapbox://styles/mapbox/outdoors-v12"
          >
            <Marker
              latitude={18.317588}
              longitude={99.397334}
              onClick={() => {
                console.log("Click");
              }}
            />
          </Map>
        </div>
      </div>
    </div>
  );
};

export default CustomerMap;
