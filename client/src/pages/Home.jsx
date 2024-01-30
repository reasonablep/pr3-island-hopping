import IslandList from "../components/IslandList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <IslandList />
      <Cart />
    </div>
  );
};

export default Home;
