import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Flight from "../../pages/Flight";
import Activities from "../../pages/Activities";
import Hostel from "../../pages/Hostel";

const Navigation = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Flight labelFor="flight" limit={3} />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
      <Route
        path="/flight"
        element={
          <Flight labelFor="flight" limit={3} />
        }
      />
      <Route
        path="/hostel"
        element={
          <Hostel labelFor="hostel" />
        }
      />
      <Route
        path="/home-stay"
        element={
          <Hostel labelFor="home-stay" />
        }
      />
      <Route
        path="/holiday-pack"
        element={
          <Flight labelFor="flight" limit={3} />
        }
      />
      <Route
        path="/train"
        element={
          <Flight labelFor="flight" limit={3} />
        }
      />
      <Route
        path="/bus"
        element={
          <Flight labelFor="flight" limit={3} />
        }
      />
      <Route
        path="/cabs"
        element={
          <Flight labelFor="flight" limit={3} />
        }
      />
      <Route
        path="/visa"
        element={
          <Flight labelFor="flight" limit={3} />
        }
      />
      <Route
        path="/charted-flight"
        element={
          <Flight labelFor="charted-flight" limit={2} />
        }
      />
      <Route
        path="/activities"
        element={
          <Activities />
        }
      />
    </Routes>
  );
};

export default Navigation;
