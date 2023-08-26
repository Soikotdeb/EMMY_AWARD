
import AwardWinnerMomant from "../AwardWinnerMomant/AwardWinnerMomant";
import BrandPartners from "../BrandPartners/BrandPartners";
import HomeBanner from "../HomeBanner/HomeBanner";
import RaisingYouthInfo from "../RaisingYouthInfo/RaisingYouthInfo";



const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
        <BrandPartners></BrandPartners>
        <RaisingYouthInfo></RaisingYouthInfo>
        <AwardWinnerMomant></AwardWinnerMomant>
        </div>
    );
};

export default Home;