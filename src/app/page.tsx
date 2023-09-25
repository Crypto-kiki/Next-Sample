import { NextPage } from "next";

// NextPage대신 FC(Function component를 사용해도 됨. 리액트에서 타입정할 때.)
// Next에서는 NextPage라는 걸 제공함.
const Home: NextPage = () => {
  return <main className="bg-red-100">Home</main>;
};

export default Home;
