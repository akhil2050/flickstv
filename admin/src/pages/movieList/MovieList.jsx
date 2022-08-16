import "./movieList.css";
import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovContext } from "../../context/movContext/MovContext";
import { deleteMovie, getMovies } from "../../context/movContext/apiCalls";

export default function MovieList() {
  const { movies, dispatch } = useContext(MovContext);
  // console.log("movie ;-",movies);

  useEffect(() => {
    getMovies(dispatch);
    
  }, [dispatch]);
  // console.log("after useffect",movies);

  const handleDelete = (id) => {
    console.log("handle delet called");
    deleteMovie(id, dispatch);
  };

  const columns = [
    // { field: "_id", headerName: "ID", width: 150 },
    { field: "movieTitle", headerName: "Title", width: 120 },
    // {
    //   field: "movie",
    //   headerName: "Movie",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="productListItem">
    //         {/* <img className="productListImg" src={params.row.img} alt="" /> */}
    //         {params.row.movieTitle}
    //       </div>
    //     );
    //   },
    // },
    { field: "movieDesc", headerName: "Desc", width: 120 },
    { field: "genre", headerName: "Genre", width: 150 },
    // { field: "year", headerName: "year", width: 120 },
    // { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        // console.log("para", params.row);
        return (
          <>
            <Link
              to={{ pathname: "/movie/" + params.row._id, movie: params.row }}
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

// import * as React from "react";
// import { DataGrid } from "@material-ui/data-grid";

// const columns = [
//   { field: "DT_RowId", headerName: "DT_RowId(ID)", width: 150 },
//   { field: "color", headerName: "Color", width: 100 },
//   { field: "value", headerName: "Value", width: 130 }
// ];

// const rows = [
//   {
//     DT_RowId: "1",
//     color: "red",
//     value: "#f00"
//   },
//   {
//     DT_RowId: "2",
//     color: "green",
//     value: "#0f0"
//   },
//   {
//     DT_RowId: "3",
//     color: "blue",
//     value: "#00f"
//   },
//   {
//     DT_RowId: "4",
//     color: "cyan",
//     value: "#0ff"
//   }
// ];
const rows = movies;

  return (
    <div className="productList">
    <div style={{ height: 550, width: "100%" }}>
      <DataGrid
        getRowId={(r) => r._id}
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
    </div>
  );
}