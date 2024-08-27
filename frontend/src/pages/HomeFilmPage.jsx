import React, { useRef, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import HighlightSeries from "../components/film_series/HighlightSeries";
import ContinueToWatch from "../components/film_series/ContinueToWatch";
import ButtonScrollbar from "../layouts/ButtonScrollbar";
import TopRatings from "../components/film_series/TopRatings";
import Trendings from "../components/film_series/Trendings";
import NewReleases from "../components/film_series/NewReleases";
import Premiums from "../components/film_series/Premiums";
import ModalDetailMovie from "../layouts/ModalDetailMovie";
import VideoPlayer from "../layouts/VideoPlayer";

const HomeFilmPage = () => {
    const wrapperListRefContinueToWatch = useRef(null);
    const wrapperListRefPremium = useRef(null);
    const wrapperListRefTopRating = useRef(null);
    const wrapperListRefTrending = useRef(null);
    const wrapperListRefNewRelease = useRef(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [showDetailMovie, setDetailMovie] = useState(false);
    const [showVideoPlayer, setVideoPlayer] = useState(false);

    const openDetailMovie = (section) => {
        setSelectedSection(section)
        setDetailMovie(true);
    }

    const closeDetailMovie = () => {
        setDetailMovie(false);
    }

    const openVideoPlayer = () => {
        setVideoPlayer(true);
    }

    const closeVideoPlayer = () => {
        setVideoPlayer(false);
    }

    const continueToWatchList = [
        {"img": "/horizontals/image233.png", "title": "Don't Look Up", "rating": "4.5/5"},
        {"img": "/horizontals/image219.png", "title": "Blue Lock", "rating": "4.6/5"},
        {"img": "/horizontals/image227.png", "title": "Missing", "rating": "4.2/5"},
        {"img": "/horizontals/image224.png", "title": "A Man Called Otto", "rating": "4.4/5"},
        {"img": "/horizontals/image220.png", "title": "The Little Mermaid", "rating": "4.6/5"},
        {"img": "/horizontals/image235.png", "title": "The Devil All The Time", "rating": "4.6/5"},
    ];

    const premiumList = [
        {"img": "/verticals/image211.png"},
        {"img": "/verticals/image222.png"},
        {"img": "/verticals/image217.png"},
        {"img": "/verticals/image214.png"},
        {"img": "/verticals/image218.png"},
        {"img": "/verticals/image208.png"},
    ];

    const topRatingList = [
        {"img": "/verticals/image219.png", "is_new_episode" : true},
        {"img": "/verticals/image230.png", "is_new_episode" : false},
        {"img": "/verticals/image234.png", "is_new_episode" : false},
        {"img": "/verticals/image214.png", "is_new_episode" : false},
        {"img": "/verticals/image217.png", "is_new_episode" : false},
        {"img": "/verticals/image205.png", "is_new_episode" : false},
    ];

    const trendingList = [
        {"img": "/verticals/image212.png", "top_ten" : true},
        {"img": "/verticals/image221.png", "top_ten" : true},
        {"img": "/verticals/image235.png", "top_ten" : true},
        {"img": "/verticals/image215.png", "top_ten" : true},
        {"img": "/verticals/image211.png", "top_ten" : true},
        {"img": "/verticals/image207.png", "top_ten" : true},
    ];

    const newReleaseList = [
        {"img": "/verticals/image211.png", "top_ten" : true, "is_new_episode" : false},
        {"img": "/verticals/image222.png", "top_ten" : false, "is_new_episode" : true},
        {"img": "/verticals/image217.png", "top_ten" : true, "is_new_episode" : false},
        {"img": "/verticals/image214.png", "top_ten" : false, "is_new_episode" : true},
        {"img": "/verticals/image218.png", "top_ten" : false, "is_new_episode" : false},
        {"img": "/verticals/image208.png", "top_ten" : false, "is_new_episode" : false},
    ];

    return (
        <>
        <Header/>
            <main className="bg-[#181A1C] font-lato">
                <section id="hightlihtSeries">
                    <HighlightSeries/>
                </section>

                <section id="continueToWatch">
                    <div className="mt-12 ms-4 md:mx-8 pb-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Melanjutkan Tonton Film</h2>

                        {/* list continue to watch */}
                        <div className="relative">
                            <div id="wrapperList"
                                ref={wrapperListRefContinueToWatch}
                                className="flex overflow-x-auto md:overflow-x-hidden"
                                style={{ 
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none', }}
                                onClick={openVideoPlayer}>
                                {continueToWatchList.map((data, index) => {
                                    return (
                                        <ContinueToWatch
                                            key={index}
                                            img={data.img}
                                            title={data.title}
                                            rating={data.rating}
                                            is_new_episode={data.is_new_episode}
                                        />
                                    )
                                })}
                            </div>
                            <ButtonScrollbar wrapperListRef={wrapperListRefContinueToWatch}/>
                        </div>
                    </div>
                </section>

                <section id="premiums">
                    <div className="ms-4 md:mx-8 pb-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Series Persembahan Chill</h2>

                        {/* list continue to watch */}
                        <div className="relative">
                            <div id="wrapperList"
                                ref={wrapperListRefPremium}
                                className="flex overflow-x-auto md:overflow-x-hidden"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                }} 
                                onClick={() => openDetailMovie("premiums")}>
                                {premiumList.map((data, index) => {
                                    return (
                                        <Premiums
                                            key={index}
                                            img={data.img}
                                        />
                                    )
                                })}
                            </div>
                            <ButtonScrollbar wrapperListRef={wrapperListRefPremium} />
                        </div>
                    </div>
                </section>

                <section id="topRating">
                    <div className="ms-4 md:mx-8 pb-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Top Rating Film dan Series Hari Ini</h2>

                        {/* list continue to watch */}
                        <div className="relative">
                            <div id="wrapperList"
                                ref={wrapperListRefTopRating}
                                className="flex overflow-x-auto md:overflow-x-hidden"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                }}
                                onClick={() => openDetailMovie("topRating")}>
                                {topRatingList.map((data, index) => {
                                    return (
                                        <TopRatings
                                            key={index}
                                            img={data.img}
                                            is_new_episode={data.is_new_episode}
                                        />
                                    )
                                })}
                            </div>
                            <ButtonScrollbar wrapperListRef={wrapperListRefTopRating} />
                        </div>
                    </div>
                </section>

                <section id="trending">
                    <div className="ms-4 md:mx-8 pb-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Film Trending</h2>

                        {/* list continue to watch */}
                        <div className="relative">
                            <div id="wrapperList"
                                ref={wrapperListRefTrending}
                                className="flex overflow-x-auto md:overflow-x-hidden"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                }}
                                onClick={() => openDetailMovie("trending")}>
                                {trendingList.map((data, index) => {
                                    return (
                                        <Trendings
                                            key={index}
                                            img={data.img}
                                            top_ten={data.top_ten}
                                        />
                                    )
                                })}
                            </div>
                            <ButtonScrollbar wrapperListRef={wrapperListRefTrending} />
                        </div>
                    </div>
                </section>

                <section id="newRelease">
                    <div className="ms-4 pb-8 md:mx-8 md:pb-20">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">Rilis Baru</h2>

                        {/* list continue to watch */}
                        <div className="relative">
                            <div id="wrapperList"
                                ref={wrapperListRefNewRelease}
                                className="flex overflow-x-auto md:overflow-x-hidden"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                }}
                                onClick={() => openDetailMovie("newRelease")}>
                                {newReleaseList.map((data, index) => {
                                    return (
                                        <NewReleases
                                            key={index}
                                            img={data.img}
                                            top_ten={data.top_ten}
                                            is_new_episode={data.is_new_episode}
                                        />
                                    )
                                })}
                            </div>
                            <ButtonScrollbar wrapperListRef={wrapperListRefNewRelease} />
                        </div>
                    </div>
                </section>

                {showDetailMovie && (
                    <ModalDetailMovie 
                    onClose={closeDetailMovie}
                    sectionContent={selectedSection}
                    typeMovie={'film'} />
                )}

                {showVideoPlayer && (
                    <VideoPlayer
                    onClose={closeVideoPlayer}
                    typeMovie={'film'} />
                )}
            </main>
        <Footer/>
        </>
    )
};

export default HomeFilmPage;