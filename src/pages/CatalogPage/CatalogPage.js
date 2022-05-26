import React, {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import { Catalog } from "../../components/Catalog/Catalog";
import { Filter } from "../../components/Filter/Filter";
import { useHttpClient } from "../../api/useHttpClient";
import { onlyNumber } from "../../utils/validateFunctions";
import "./CatalogPage.scss";
import {catalogMock} from "../../mock/mockCatalog";

export const CatalogPage = () => {
  const [catalog, setCatalog] = useState([]);
  const { loading, request } = useHttpClient();

  //Filters
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");

  const changeAge = (event) => setAge(event.target.value);
  const changeGender = (event) => setGender(event.target.value);
  const changeMinAge = (event) => setMinAge(onlyNumber(event.target.value))
  const changeMaxAge = (event) => setMaxAge(onlyNumber(event.target.value))

  useEffect(() => {
    request('catalog', 'GET').then(res => {
      setCatalog(catalogMock);
    });
  }, [request]);

  return (
    <div className="container catalog-page">
      <Filter
        age={age}
        changeAge={changeAge}
        gender={gender}
        changeGender={changeGender}
        minAge={minAge}
        changeMinAge={changeMinAge}
        setMinAge={setMinAge}
        maxAge={maxAge}
        changeMaxAge={changeMaxAge}
        setMaxAge={setMaxAge}
      />
      <div>
        <Catalog catalog={catalog} loading={loading} />
      </div>
    </div>
  )
}
