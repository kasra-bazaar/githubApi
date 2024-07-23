import { useState } from "react";
import Form from "./components/form/Form";
import ImgSection from "./components/image/ImgSection";
import List from "./components/list/List";

function App() {
  const [userId, setUserId] = useState<string | null>(null);
  return (
    <main className=" flex gap-16 flex-col justify-center items-center mx-auto p-5">
      <ImgSection />
      <Form onAddValue={(value) => setUserId(value)} />
      <List userId={userId} />
    </main>
  );
}

export default App;
