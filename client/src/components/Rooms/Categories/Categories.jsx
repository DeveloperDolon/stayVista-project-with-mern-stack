import { useSearchParams } from "react-router-dom";
import { categories } from "../../../../public/categoriesData";
import Container from "../../Shared/Container";
import CategoryBox from "./CategroyBox";
import "./style.css";

const Categories = () => {
    const [params] = useSearchParams();
    const category = params.get("category");

    return (
        <Container>
            <div id="scroll-style" className="flex justify-between gap-5 pb-2 overflow-x-auto mb-10 pt-4">
                {categories?.map(item => <CategoryBox key={item.label} 
                selected={item?.label === category}
                label={item?.label} 
                icon={item?.icon}></CategoryBox>)}
            </div> 
        </Container>
    );
};

export default Categories;