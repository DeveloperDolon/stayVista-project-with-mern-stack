import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [params] = useSearchParams();
    const category = params.get("category");


    useEffect(() => {
        fetch("./rooms.json")
            .then(res => res.json())
            .then(data => {

                if (category) {
                    const filtered = data.filter(room => room.category === category);
                    setRooms(filtered);
                } else setRooms(data);
            })
            .catch(err => console.log(err.message));
    }, [category]);

    return (
        <Container>
            {
                rooms && rooms.length > 0 ? 
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {
                        rooms?.map(room => <Card key={room._id} room={room}></Card>)
                    }
                </div> :
                    <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
                        <Heading center={true} title={"No Rooms Available in This Category!"} subtitle={"Please select other categories."}></Heading>
                    </div>
            }
        </Container>
    );
};

export default Rooms;