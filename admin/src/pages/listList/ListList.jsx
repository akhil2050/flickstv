import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";


export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);
  console.log("list ;-", lists);
  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };
  console.log("after useffect", lists);
  const columns = [
    // { field: "_id", headerName: "ID", width: 250 },
    { field: "listTitle", headerName: "Title", width: 250 },
    { field: "genre", headerName: "Genre", width: 250 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/list/" + params.row._id, list: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  const rows = lists;
  console.log("rows", rows);
  return (
    <div className="productList">
      <div style={{ height: 550, width: "100%" }}>
        <DataGrid
          rows={rows}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
          getRowId={(r) => r._id}
        />
      </div>
    </div>
  );
}

