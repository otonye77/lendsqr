import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { columns } from "../../Utility/Utility";
import {
    useTable,
    useSortBy,
    useFilters,
    useGlobalFilter,
    usePagination,
  } from "react-table";
  import { useEffect, useMemo, useRef, useState, MutableRefObject } from "react";
  import { Filter } from "../Filter/Filter";
  import ColumnFilter from "../ColumnFilter/ColumnFilter";
  import Pagination from "../Pagination/Pagination.component";
  import { useRecoilState } from "recoil";
  import { modalFilterState, filterModalToggleState } from "../../atoms/Dashboard";

const UserTable = () => {
    const [selectedRow, setSelectedRow] = useState(0);
    const [actionModal, setActionModal] = useState(false);
    const [formData, setFormData] = useRecoilState(modalFilterState);
    const [filterModal, setFilterModal] = useRecoilState(filterModalToggleState);

    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const filterRef = useRef() as MutableRefObject<HTMLDivElement>;

    const navigate = useNavigate();

    useEffect(() => {
        const checkIfClickedOutside = (event: any) => {
            if(actionModal && ref.current && !ref.current.contains(event.target)){
                setActionModal(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        }
    }, [actionModal])

    const statuses = ["Active", "Inactive", "Pending", "Blacklisted"];
    const data: any = useLoaderData();
    console.log(data);

    return (
       <>
        <div className="table-container">
            <div className="hidden">
               
            </div>
        </div>
       </>
    )
}
export default UserTable;