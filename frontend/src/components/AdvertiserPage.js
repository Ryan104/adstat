import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ProductList } from "./ProductList";
import { SidebarLayout } from "./SidebarLayout";
import { get as getAdvertisers } from "../repositories/advertiser-repository";

export const AdvertiserPage = () => {
  const [advertisers, setAdvertisers] = useState({
    list: [],
    isLoading: false,
    selectedId: null
  });
  useEffect(() => {
    const fetchAdvertisers = async () => {
      setAdvertisers({ ...advertisers, isLoading: true });
      try {
        const advertiserList = await getAdvertisers();
        setAdvertisers({ list: advertiserList, isLoading: false });
      } catch (e) {
        console.log(e);
        setAdvertisers({ ...advertisers, isLoading: false });
      }
    };
    fetchAdvertisers();
  }, []);

  const handleSelect = id => {
    setAdvertisers({ ...advertisers, selectedId: id });
  };

  const listContent = advertisers.isLoading ? (
    <CircularProgress />
  ) : (
    <ProductList
      products={advertisers.list}
      onSelect={handleSelect}
      selectedId={advertisers.selectedId}
    />
  );

  return (
    <SidebarLayout
      sideBarContent={listContent}
      primaryContent={
        <div>
          coming soon - see how products are performing with each advertiser
        </div>
      }
    />
  );
};
