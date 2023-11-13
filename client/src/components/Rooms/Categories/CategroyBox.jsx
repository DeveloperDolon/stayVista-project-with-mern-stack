import PropTypes from "prop-types";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({label, icon: Icon, selected}) => {

    const [params] = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        let currentQuery = {};

        if(params) {
            currentQuery = qs.parse(params.toString());
            const updatedQuery = {...currentQuery, category: label};
            const url = qs.stringifyUrl({
                url: "/",
                query: updatedQuery
            });

            navigate(url);
        }
    }

    return (
        <div onClick={handleClick} 
        className={`flex flex-col items-center justify-center gap-2 p-3 hover:text-neutral-700 transition cursor-pointer ${selected ? " border-b-4 border-neutral-700 text-neutral-700" : ""}}`}>
            <p className="text-sm font-medium">{label}</p>
            <Icon size={26}></Icon>
        </div>
    );
};

export default CategoryBox;
CategoryBox.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    selected: PropTypes.bool
};