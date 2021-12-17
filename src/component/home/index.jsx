import React from 'react'
import Banner from './Banner'
import BottNavigation from './bottomnav/NavigationTab'

import ProductSlider from './Slider'
import ScrollableTabsButtonAuto from './Tab'

function Home() {
    return (
        <div style={{overflowX:"hidden"}}>
            <Banner />
            <ScrollableTabsButtonAuto />
               <ProductSlider />
            <BottNavigation />
        </div>
    )
}

export default Home
