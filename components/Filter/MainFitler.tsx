import React, { useEffect, useState } from "react";
import { baseApi } from "../../constant/constant";

import { InfoSlider } from "../../Interface/Interface";
import useStore from "../../zustand";

import ComicItem from "../Comics/ComicItem";
import Paginations from "../Pagination/Paginations";
import SkeletonLoading from "../Skeleton/SkeletonLoading";

interface Filter {
  filters: {
    page: number;
    type: string;
    first: string;
  };
  handlePageChange: (pageNumber: number) => void;
}

const MainFilter: React.FC<Filter> = ({ filters, handlePageChange }) => {
  const [sliders, setSliders] = useState<InfoSlider[]>([]);
  const { loading, setLoading } = useStore();
  const [countPages, setCountPages] = useState<number>(1);
  useEffect(() => {
    const fetchSlider = async () => {
      try {
        setLoading(true);

        const response = await baseApi.get(
          `/truyen/category/${filters.type}?page=${filters.page}`
        );
        setSliders(response.data[0].thumbnails);
        setCountPages(5570);

        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        console.log(err.message);
      }
    };

    fetchSlider();
  }, [filters, setLoading]);
  return (
    <>
      <div className="mt-6  w-full mb-6 grid grid-cols-2 px-6 gap-x-4 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:px-24 2xl:grid-cols-6 2xl:px-36">
        {!loading ? (
          sliders.map((slider: InfoSlider) => (
            <ComicItem
              key={slider.slug}
              name={slider.name}
              image={slider.image}
              url={slider.url}
              slug={slider.slug}
            />
          ))
        ) : (
          <>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </>
        )}
      </div>

      <div className="pagination mb-12 mt-8">
        <Paginations
          setPage={handlePageChange}
          page={filters.page}
          countPages={countPages}
        />
      </div>
    </>
  );
};

export default MainFilter;
