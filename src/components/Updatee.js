import React from "react";
import { UpdateContext } from "../context/update";
import Loading from "../components/Products/Loading";
//import ProductList from "../components/Products/ProductList";
//import PageProducts from "../components/Products/PageProducts";
//import Filters from "../components/Products/Filters";
import PageUpate from "../components/Update/PageUpdate";
import UpdateFilter from "../components/Update/UpdateFilter";
export default function Updatee() {
  const { loading, update } = React.useContext(UpdateContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <UpdateFilter />
      <PageUpate></PageUpate>
    </>
  );
}