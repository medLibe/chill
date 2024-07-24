import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import MyList from "../components/my_list/MyList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import AddModalList from "../components/my_list/AddModalList";

import { addMovie, deleteMovie, getMyList } from "../services/api/ApiMoviesList";

const MyListPage = () => {
    const [showCloseButton, setShowCloseButton] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [myList, setMyList] = useState([]);

    const fetchMyList = async () => {
        try {
            await getMyList();
            const response = await getMyList();
            setMyList(response);
        } catch (error) {
            console.error('Error fetching myList:', error);
        }
    };

    useEffect(() => {
        fetchMyList();
    }, []);

    const toggleCloseButton = () => {
        setShowCloseButton(!showCloseButton);
    };

    const toggleAddModal = () => {
        setShowAddModal(!showAddModal);
    }

    // add to collection data mockapi movie list
    const addToList = async (item) => {
        try{
            await addMovie(item);
            await fetchMyList();
        }catch(error){
            console.error('Error adding movie: ', error);
        }
    };

    // remove from collection data mockapi movie list
    const removeFromList = async (id) => {
        try{
            await deleteMovie(id);
            await fetchMyList();
        }catch(error){
            console.error('Error removing movie: ', error);
        }
    }

    return (
        <>
        <Header/>
            <main className="bg-[#181A1C] font-lato">
                <section id="myList">
                    <div className="mx-4 md:mx-6 lg:mx-8 xl:mx-12 pb-12 pt-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">Daftar Saya</h2>
                            
                            {/* right button */}
                            <div>
                                <button className="text-white px-3 py-2 bg-[#0F1E93] text-lg rounded-lg ml-3"
                                    onClick={toggleAddModal}>Tambah Daftar</button>
                                <button className="text-white ms-3"
                                    onClick={toggleCloseButton}><FontAwesomeIcon icon={faPencilAlt}/></button>
                            </div>
                        </div>

                        {/* list continue to watch */}
                        {myList.length === 0 ? (
                            <div className="text-white text-2xl text-center my-80 md:my-64">Tidak Ada Daftar Ditemukan :(</div>
                        ) : (
                            <div id="wrapperList" className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
                            {myList.map((data, index) => {
                                    return (
                                        <MyList
                                            key={index}
                                            id={data.id}
                                            img={data.img}
                                            // is_new_episode={data.is_new_episode}
                                            // top_ten={data.top_ten}
                                            showCloseButton={showCloseButton}
                                            removeFromList={() => removeFromList(data.id)}
                                        />
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        <Footer/>

        {/* add new modal */}
        {showAddModal && (
            <AddModalList
                toggleAddModal={toggleAddModal}
                addToList={addToList}
            />
        )}
        </>
    )
};

export default MyListPage;