import { TwitterCard } from "./components/TwitterCard";

const App = () => {
  return (
    <main className="flex flex-1 flex-col items-center gap-6 p-8 justify-center">
      <h1>Twitter Card</h1>
      <TwitterCard
        name="Ada Lovelace"
        user="adalovelace"
        followers={1815}
        url="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <TwitterCard
        name="Alan Turing"
        user="alanturing"
        followers={42}
        url="https://randomuser.me/api/portraits/men/32.jpg"
      />
    </main>
  );
};

export default App;
