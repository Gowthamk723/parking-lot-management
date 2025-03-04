import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./pages/dashboard/Dashboard";
import { reservationData } from "./data";
import { useState } from "react";
import Bookslot from "./pages/Bookslot";
import Slots from "./pages/Slots";
import Clients from "./pages/Clients";

function App() {
  const [formattedData, setFormattedData] = useState({
    labels: reservationData.map((e) => e.month),
    datasets: [
      {
        label: "Completed Reservations",
        data: reservationData.map((e) => e.completedReservations),
        backgroundColor: ["#2D2B40"],
        stack: "Reservations",
      },
      {
        label: "Canceled Reservations",
        data: reservationData.map((e) => e.CanceledReservations),
        backgroundColor: ["#376EFB"],
        stack: "Reservations",
      },
    ],
  });

  return (
    <main className="grid justify-end max-[920px]:flex max-[920px]:flex-col max-[920px]:items-center">
      <NavBar />
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard reservationData={formattedData} />}
        />
        <Route path="/bookslot" element={<Bookslot />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </main>
  );
}

export default App;
