import { Routes, Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The welcome page</h1>
      <Routes>
        <Route path="/welcome/new-user" element={() => <p>Welcome</p>} />
      </Routes>
    </section>
  );
};

export default Welcome;
