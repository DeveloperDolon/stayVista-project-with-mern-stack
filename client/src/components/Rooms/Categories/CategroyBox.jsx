import PropTypes from "prop-types";

const CategoryBox = ({label, icon: Icon, }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
            <p className="text-sm font-medium">{label}</p>
            <Icon size={26}></Icon>
        </div>
    );
};

export default CategoryBox;
CategoryBox.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
}