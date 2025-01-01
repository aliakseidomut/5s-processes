import Layout from "@components/Layout";
import Contacts from "@pages/Contacts";
import Home from "@pages/Home";
import Tasks from "@pages/Tasks";
import { Routes, Route } from "react-router";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
