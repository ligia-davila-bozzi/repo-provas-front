import { useState } from 'react';
import Navibar from '../components/Navibar';
import HomeContainer from '../components/HomeContainer';
import Footer from '../components/Footer';
import ChoiceViewModal from '../components/ChoiceViewModal';

function Home() {
    const [isHidden, setIsHidden] = useState(true);
    console.log(isHidden)

    return (
        <>
            <Navibar />
            <HomeContainer setIsHidden={setIsHidden} />
            <Footer />
            <ChoiceViewModal isHidden={isHidden} setIsHidden={setIsHidden} />
        </>
    );
}

export default Home;