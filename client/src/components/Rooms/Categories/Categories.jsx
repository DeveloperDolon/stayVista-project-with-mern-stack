import { categories } from "../../../../public/categoriesData";
import Container from "../../Shared/Container";
import CategoryBox from "./CategroyBox";
import "./style.css";

const Categories = () => {
    return (
        <Container>
            <div id="scroll-style" className="flex justify-between gap-5 overflow-x-auto mb-16 pt-4">
                {categories?.map(item => <CategoryBox key={item.label} label={item?.label} 
                icon={item?.icon}></CategoryBox>)}
            </div>
        </Container>
    );
};

export default Categories;