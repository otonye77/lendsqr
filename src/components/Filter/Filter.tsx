import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { filterState } from "../../atoms/Dashboard";

interface FilterProps {
    filter: any;
    setFilter: any;
}

export const Filter = (props: FilterProps) => {
    const {setFilter} = props;
    const filterValue = useRecoilValue(filterState);
    useEffect(() => {
        setFilter(filterValue)
    }, [filterValue])
    return (
        <div>
            <span>Search Table</span>
            <input type="text" defaultValue={filterValue || ""} placeholder="Filter" />
            
        </div>
    )
}