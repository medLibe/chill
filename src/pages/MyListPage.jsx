import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import MyList from "../components/my_list/MyList";

const MyListPage = () => {

    const myList = [
        {"img": "/verticals/image214.png", "top_ten" : true, "is_new_episode" : true},
        {"img": "/verticals/image231.png", "top_ten" : false, "is_new_episode" : false},
        {"img": "/verticals/image223.png", "top_ten" : true, "is_new_episode" : false},
        {"img": "/verticals/image210.png", "top_ten" : true, "is_new_episode" : false},
        {"img": "/verticals/image228.png", "top_ten" : true, "is_new_episode" : true},
        {"img": "/verticals/image222.png", "top_ten" : true, "is_new_episode" : true},
        {"img": "/verticals/image219.png", "top_ten" : false, "is_new_episode" : true},
        {"img": "/verticals/image235.png", "top_ten" : false, "is_new_episode" : true},
        {"img": "/verticals/image236.png", "top_ten" : false, "is_new_episode" : false},
        {"img": "/verticals/image234.png", "top_ten" : false, "is_new_episode" : false},
        {"img": "/verticals/image220.png", "top_ten" : false, "is_new_episode" : false},
        {"img": "/verticals/image232.png", "top_ten" : false, "is_new_episode" : false},
    ];

    return (
        <>
        <Header/>
            <main className="bg-[#181A1C] font-lato">
                <section id="myList">
                    <div className="mx-4 md:mx-6 lg:mx-8 xl:mx-12 pb-12 pt-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Daftar Saya</h2>

                        {/* list continue to watch */}
                        <div id="wrapperList" className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
                            {myList.map((data, index) => {
                                return (
                                    <MyList
                                        key={index}
                                        img={data.img}
                                        is_new_episode={data.is_new_episode}
                                        top_ten={data.top_ten}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        <Footer/>
        </>
    )
};

export default MyListPage;