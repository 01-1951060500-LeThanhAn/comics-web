import { useEffect, useState } from "react";

import { genresComics, topComics } from "../service/home";
import { Category } from "../Interface/Interface";
import SelectItem from "../components/Filter/SelectItem";

import MainFitler from "../components/Filter/MainFitler";
import MainLayout from "../components/LayOut/MainLayout";
import MetaTitle from "./title";
import SelectCategory from "../components/Filter/SelectCategory";

const FilterComic = () => {
  const [genres, setGenres] = useState<Category[]>(genresComics);
  const [top, setTop] = useState<Category[]>(topComics);

  const [filters, setFilters] = useState<{
    page: number;
    type: string;
    first: string;
  }>({
    page: 1,
    type: "truyen-moi-cap-nhat",
    first: "top-all",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setGenres(genres);
    setTop(top);
  }, [filters.page, filters.type, genres, top]);

  const handlePageChange = (pageNumber: number) => {
    setFilters({ ...filters, page: Number(pageNumber) });
  };

  const setTypes = (value: string) => {
    setFilters({ ...filters, type: value });
  };

  const setFirst = (value: string) => {
    setFilters({ ...filters, first: value });
  };

  return (
    <>
      <MainLayout>
        <MetaTitle
          title="Comics App | Website đọc truyện tranh"
          description="Website được tạo bởi Nextjs"
          image="https://firebasestorage.googleapis.com/v0/b/nhattruyen-af981.appspot.com/o/Screenshot%202022-12-02%20094444.jpg?alt=media&token=adf77c98-b5fc-4b57-aa31-bf1530994db9"
        />
        <div className="min-h-screen ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:px-24 2xl:px-36 gap-x-2 px-4">
            <SelectItem
              genres={genres}
              selected={filters.type}
              setSelected={setTypes}
            />

            <SelectCategory
              category={top}
              selected={filters.first}
              setSelected={setTypes}
            />
          </div>

          <MainFitler filters={filters} handlePageChange={handlePageChange} />
        </div>
      </MainLayout>
    </>
  );
};

export default FilterComic;
