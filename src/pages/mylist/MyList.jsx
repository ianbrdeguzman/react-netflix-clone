import React from 'react';
import Card from '../../components/card/Card';
import { useSelector } from 'react-redux';
import { MyListSection, MyListContent } from './myListStyles';

const MyList = () => {
    const { myList } = useSelector((state) => state.myList);
    return (
        <MyListSection>
            <h2>My List</h2>
            <MyListContent>
                {myList.map((video) => {
                    return (
                        <Card
                            key={video.id}
                            {...video}
                            inMyList
                            video={video}
                        />
                    );
                })}
            </MyListContent>
        </MyListSection>
    );
};

export default MyList;
