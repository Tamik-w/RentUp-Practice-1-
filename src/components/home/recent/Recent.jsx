import React from "react";
import Heading from "../../common/Heading";
import RecentCard from "./RecentCard.jsx";
import './Recent.css'

const Recent = () => {
    return (
        <>
            <section className="recent padding">
                <div className="container">
                    <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aligua. Ut enim ad minin veniam.' />
                    <RecentCard />
                </div>
            </section>
        </>
    )
}

export default Recent