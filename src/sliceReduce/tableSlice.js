import f from "../foto/SheduleDistrict23.jpg";
import { createSlice } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const initialState = {
  data: [
    { hoist: "51854", rp: "12 с ШР", foto: f, avt: 3, info: "шр" },
    { hoist: "51833", rp: 12, foto: "", avt: "" },
    { hoist: "51770", rp: 12, foto: "", avt: "" },
    { hoist: "51792", rp: 12, foto: "", avt: "" },
    { hoist: "51834", rp: 8, foto: "", avt: "10A" },
    { hoist: "51771", rp: 7, foto: "", avt: "AE-20" },
    { hoist: "51939", rp: 2, foto: "", avt: "АП-16" },
    {
      hoist: "51795",
      rp: 2,
      foto: "",
      avt: "№8-АЕ-20",
      info: "фаза одна идет к контролерам",
    },
    { hoist: "52023", rp: 3, foto: "", avt: "" },
    { hoist: "51879", rp: 6, foto: "", avt: "№5- 100A" },
    { hoist: "52046", rp: "ШР18", foto: "", avt: "№5-10A" },
    { hoist: "51880", rp: 5, foto: "", avt: "№9 -40A" },
    { hoist: "52045", rp: 5, foto: "", avt: "№7-16A" },
    { hoist: "51800", rp: 5, foto: "", avt: "№4 ФП-16А" },
    { hoist: "51843", rp: 3, foto: "", avt: "ШР16А" },
    { hoist: "51798", rp: 3, foto: "", avt: "ШР 16А" },
    { hoist: "51888", rp: 3, foto: "", avt: "ШР 16А" },
    { hoist: "52805 ", rp: 3, foto: "", avt: " 40А " },
    { hoist: "52806 ", rp: 3, foto: "", avt: "№7- 16А " },
    { hoist: "52019 ", rp: 3, foto: "", avt: "№3- ак63 " },
    { hoist: "52020 ", rp: 3, foto: "", avt: "№3- АЕ-25А " },
    { hoist: "51892 ", rp: 8, foto: "", avt: "ШР1-10А " },
    { hoist: "51891 ", rp: 8, foto: "", avt: "ШР1-10А  " },
    { hoist: "51831 ", rp: 8, foto: "", avt: "ШР1-10А " },
    { hoist: "51908 ", rp: 9, foto: "", avt: "25А " },
    { hoist: "51872 ", rp: 10, foto: "", avt: "№6- АП10А" },
    { hoist: "51871 ", rp: 10, foto: "", avt: "№2 АП-10А" },
    { hoist: "51906 ", rp: 14, foto: "", avt: "№11 АЕ-20А" },
    { hoist: "51927 ", rp: 14, foto: "", avt: "№16 АП-16А" },
    {
      hoist: "52939",
      rp: 2,
      foto: "",
      avt: `  <Link> "<i> №6<i> <b>АП-16</b>А"</Link> `,
    },
    {
      hoist: "51832",
      rp: 14,
      foto: "",
      avt: "№3 АЕ-100А",
      info: "Вместе с нагрев машиной №51791 ",
    },
    { hoist: "51915 ", rp: 14, foto: "", avt: "№5 АЕ-80А", info: "ШР АП-10А" },
    { hoist: "51830 ", rp: 14, foto: "", avt: "№5 АЕ-80А", info: "ШР АП-10А" },
    { hoist: "51924 ", rp: 14, foto: "", avt: "№5 АЕ-80А", info: "ШР АП-10А" },
    { hoist: "51925 ", rp: 14, foto: "", avt: "№5 АЕ-80А", info: "ШР АП-10А" },
    { hoist: "51926 ", rp: 14, foto: "", avt: "№5 АЕ-80А", info: "ШР АП-10А" },
    { hoist: "51922 ", rp: 14, foto: "", avt: "№5 АЕ-80А", info: "ШР АП-10А" },
    { hoist: "52044 ", rp: 14, foto: "", avt: "№5 АЕ-80А", info: "ШР АП-10А" },
  ],
  infohoist: "",
  o: {},
};

const mySlice = createSlice({
  name: "mySlice",
  initialState,
  reducers: {
    setData(state, action) {
      console.log(action.payload);

      state = state.data.find((el) => el.hoist.trim() == action.payload);
    },

    addNumb(state, action) {},
  },
});

export const { setData, addNumb } = mySlice.actions;
export default mySlice.reducer;
