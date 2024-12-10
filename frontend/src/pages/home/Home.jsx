import Banner from "./Banner"
import News from "./News";
import Recommended from "./Recommended";
import TopSellers from './TopSellers';

const home = () => {
  return (
    <>
      <Banner/>
      <TopSellers/>
      <Recommended/>
      <News/>
    </>
  )
}

export default home