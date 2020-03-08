import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ProductList } from "./ProductList";
import { SidebarLayout } from "./SidebarLayout";
import { get as getAdvertisers } from "../repositories/advertiser-repository";

export const AdvertiserPage = () => {
  const [advertisers, setAdvertisers] = useState({
    list: [],
    isLoading: false
  });
  useEffect(() => {
    const fetchAdvertisers = async () => {
      setAdvertisers({ ...advertisers, isLoading: true });
      try {
        const advertiserList = await getAdvertisers();
        console.log(advertiserList);
        setAdvertisers({ list: advertiserList, isLoading: false });
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
