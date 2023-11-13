
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const RoomDetails = () => {
    const [room, setRoom] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("/rooms.json")
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id);
                setRoom(singleRoom);
                setLoading(false);
            })
            .catch(err => console.log(err.message));
    }, [id]);

    if (loading) {
        return <Loader></Loader>
    }


    return (
        <div>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            <Container>
                {room?.title}
            </Container>
        </div>
    );
};

export default RoomDetails;