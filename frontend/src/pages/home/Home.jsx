import Banner from "./Banner"
import Recommended from "./Recommended";
import TopSellers from './TopSellers';

const home = () => {
  return (
    <>
      <Banner/>
      <TopSellers/>
      <Recommended/>
    </>
  )
}

export default home