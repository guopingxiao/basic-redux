import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import MenuList from './MenuList';

export const Menu = () => {
  const dispatch = useDispatch()

  const menu = useSelector((state) => state.menu)

  const onChange = (value) => {
    dispatch.menu.setMenu(value);
    dispatch.posts.fetchPostList(value);
  }

  return (
    <MenuList
        value={menu}
        onChange={onChange}
        options={["reactjs", "vuejs", "angularjs"]}
    />
  )
}

