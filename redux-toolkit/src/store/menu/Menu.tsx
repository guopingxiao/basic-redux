import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuList from "components/MenuList";
import { setMenu } from "./menuSlice";
import { fetchPostList } from "../posts/postsSlice";
import { RootState } from "store/rootReducer";

export const Menu = () => {
  const dispatch = useDispatch();

  const menu = useSelector((state: RootState) => state.menu);

  const onChange = (value: string) => {
    dispatch(setMenu(value));
    dispatch(fetchPostList(value));
  };

  return (
    <MenuList
      value={menu}
      onChange={onChange}
      options={["reactjs", "vuejs", "angularjs"]}
    />
  );
};
