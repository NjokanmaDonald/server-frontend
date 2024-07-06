import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const libraries = ["places"];

const Map = ({ onLocationSelect }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBR0QVeS5rmGkPm4bbUEg1pzEaTiIa9cic",
    libraries: libraries,
  });

  const [location, setLocation] = useState({ lat: null, lng: null });

  // const handleLocationSelect = (lat, lng) => {
  //   setLocation({ lat, lng });
  // };

  return (
    <div className="Map">
      {!isLoaded ? (
        <h3>Loading.....</h3>
      ) : (
        <>
          <PlacesAutoComplete onLocationSelect={onLocationSelect} />
        </>
      )}
    </div>
  );
};

const PlacesAutoComplete = ({ onLocationSelect }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({});

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    const result = await getGeocode({ address });
    const { lat, lng } = await getLatLng(result[0]);
    console.log(`${address} Coordinates --> lat: ${lat} lng:${lng}`);
    onLocationSelect(lat, lng);
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Select Your Location"
        className="p-1"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ description, place_id }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Map;
