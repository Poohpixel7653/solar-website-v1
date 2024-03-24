import React, { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import Supercluster from "supercluster";
import { customerData } from "../data/customerMap";

const supercluster = new Supercluster({
  radius: 75,
  maxZoom: 20,
});

const ClusterMap = ({ locations }) => {
  const mapRef = useRef();
  const MAPBOX_MAP_KEY =
    "pk.eyJ1IjoicG9vaHBpeGVsNzY1MyIsImEiOiJjbHRiYzVoMm0wd2p1MmltZ25ib2V3MTFjIn0.QRwaSlvUgNl6eQVEli--iw";

  const [points, setPoints] = useState([]);
  const [cluster, setCluster] = useState([]);
  const [bounds, setBounds] = useState([-180, -85, 180, 85]);
  const [zoom, setZoom] = useState(6);
  const [showPopup, setShowPopup] = useState(true);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    const points = locations.map((customer) => ({
      type: "Feature",
      properties: {
        cluster: false,
        kwp: customer.kwp,
        customerId: customer.id,
        customerName: customer.name,
        lng: customer.location.lng,
        lat: customer.location.lat,
        image: customer.images[0],
      },
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(customer.location.lng),
          parseFloat(customer.location.lat),
        ],
      },
    }));

    setPoints(points);
  }, []);

  useEffect(() => {
    supercluster.load(points);
    setCluster(supercluster.getClusters(bounds, zoom));
  }, [points, zoom, bounds]);

  useEffect(() => {
    if (mapRef.current) {
      setBounds(mapRef.current.getMap().getBounds().toArray().flat());
    }
  }, [mapRef?.current]);

  return (
    <ReactMapGL
      scrollZoom={false}
      initialViewState={{ latitude: 13.736717, longitude: 100.523186, zoom: 5 }}
      mapboxAccessToken={MAPBOX_MAP_KEY}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      ref={mapRef}
      onZoomEnd={(e) => setZoom(Math.round(e.viewState.zoom))}
    >
      {cluster.map((cluster) => {
        const { cluster: isCluster, point_count } = cluster.properties;
        const [longitude, latitude] = cluster.geometry.coordinates;

        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              longitude={longitude}
              latitude={latitude}
            >
              <div
                className="relative inline-flex items-center justify-center w-20 h-20 p-5 text-white overflow-hidden bg-[#2596be] rounded-full"
                style={{
                  width: `${10 + (point_count / points.length) * 20}px`,
                  height: `${10 + (point_count / points.length) * 20}px`,
                }}
                onClick={() => {
                  const zoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    20
                  );
                  mapRef.current.flyTo({
                    center: [longitude, latitude],
                    zoom,
                    speed: 10,
                  });
                }}
              >
                {point_count}
                <div></div>
              </div>
            </Marker>
          );
        }

        return (
          <Marker
            key={`marker-${cluster.properties.customerId}`}
            longitude={longitude}
            latitude={latitude}
            onClick={() => {
              setPopupInfo(cluster.properties);
              console.log(popupInfo);
              console.log(Number(popupInfo.lng));
              console.log(Number(popupInfo.lat));
            }}
          >
            <img
              src={cluster.properties.image}
              alt="Avatar"
              class="rounded-full h-10 w-10"
            ></img>
          </Marker>
        );
      })}

      {popupInfo && (
        <Popup
          key={popupInfo.id}
          longitude={Number(popupInfo.lng)}
          latitude={Number(popupInfo.lat)}
          maxWidth="360px"
          anchor="bottom"
          onClose={() => setPopupInfo(null)}
          closeOnClick={false}
        >
          <div className="flex items-center">
            <img
              style={{ marginRight: 5 }}
              src={popupInfo.image}
              alt="location-icon"
              width={20}
              height={20}
            />
            <span>
              {popupInfo.customerName} ({popupInfo.kwp} kWp)
            </span>
          </div>
        </Popup>
      )}
      <NavigationControl position="bottom-right" />
    </ReactMapGL>
  );
};

export default ClusterMap;
