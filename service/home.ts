import { baseApi } from "../constant/constant";
import { InfoSlider } from "../Interface/Interface";

export const getBanner = async () => {
  const res = await baseApi.get("/truyen/category/truyen-moi-cap-nhat");
  return res.data[0].thumbnails.slice(0, 50);
};

export const getHomeApi = async (type: string): Promise<InfoSlider[]> => {
  const response = baseApi.get(`${type}`);
  return (await response).data[0].thumbnails;
};

export const genresComics = [
  {
    title: "Truyện Hot",
    type: "truyen-hot",
  },
  {
    title: "Truyện nhiều chapter",
    type: "chapter",
  },
  {
    title: "Truyện yêu thích",
    type: "truyen-yeu-thich",
  },
  {
    title: "Truyện Mới",
    type: "truyen-tranh-moi",
  },
  {
    title: "Truyện mới cập nhật",
    type: "truyen-moi-cap-nhat",
  },
];

export const topComics = [
  {
    title: "Truyện nổi bật ngày",
    type: "top-ngay",
  },
  {
    title: "Truyện nổi bật tuần",
    type: "top-week",
  },
  {
    title: "Truyện nổi bật tháng",
    type: "top-month",
  },
  {
    title: "Truyện nổi bật top đầu",
    type: "top-all",
  },
];
