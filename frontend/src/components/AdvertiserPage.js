import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { ProductList } from "./ProductList";
import { SidebarLayout } from "./SidebarLayout";

export const AdvertiserPage = () => {
  const [advertisers, setAdvertisers] = useState({
    list: [],
    isLoading: false
  });
  useEffect(() => {
    const fetchAdvertisers = async () => {
      setAdvertisers({ ...advertisers, isLoading: true });
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/advertiser`
        );
        console.log(res.data);
        setAdvertisers({ list: res.data, isLoading: false });
      } catch (e) {
        console.log(e);
        setAdvertisers({ ...advertisers, isLoading: false });
      }
    };
    fetchAdvertisers();
  }, []);

  const listContent = advertisers.isLoading ? (
    <CircularProgress />
  ) : (
    <ProductList products={advertisers.list} />
  );

  return <SidebarLayout sideBarContent={listContent} />;
};
