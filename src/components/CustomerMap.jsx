import { useState, useEffect, useRef } from "react";
import ReactMapGL, { GeolocateControl, Marker, NavigationControl, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { customerData } from "../data/customerMap";
import ClusterMap from "./ClusterMap";
import { projects } from "../data/project";


const CustomerMap = ({id}) => {

  return (
    // 0f2c32
    <div id={id} className="w-full bg-[#808080] py-24">
      <div className="md:max-w-[1400px] m-auto max-w-[600px] relative">
        <h1 className="md:leading-[72px] text-3xl font-bold">
          MONO<span className="text-[#6abe99]"> Service Categories</span>
        </h1>
        <p className="text-lg text-[#d1d1d1]">
          สถานที่ของผลงานที่ผ่านมา{" "}
          <span className="text-[#6abe99]">
            {" "}
            Mono Energy Contruction co.,ltd.
          </span>
        </p>
        <div className="h-[600px] mt-4">
          <ClusterMap locations={projects} />
        </div>
      </div>
    </div>
  );
};

export default CustomerMap;
