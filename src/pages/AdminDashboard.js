import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import { Admin, Resource } from "react-admin";
import mysqlServerProvider from "../utils/dataProvider.js";
import {
  PostList,
  PostEdit,
  PostCreate,
  PostShow,
  UserList,
  UserEdit,
  UserCreate,
  UserShow,
  CartList,
  CartEdit,
  CartCreate,
  CartShow,
  DiscountList,
  DiscountEdit,
  DiscountCreate,
  DiscountShow,
  FreeGameList,
  FreeGameEdit,
  FreeGameCreate,
  FreeGameShow,
  GameList,
  GameEdit,
  GameCreate,
  GameShow,
  GenreList,
  GenreEdit,
  GenreCreate,
  GenreShow,
  PaymentList,
  PaymentEdit,
  PaymentCreate,
  PaymentShow,
  PaymentDelete,
  PlatformList,
  PlatformEdit,
  PlatformCreate,
  PlatformShow,
  ProductList,
  ProductEdit,
  ProductCreate,
  ProductShow,
  PurchaseList,
  PurchaseEdit,
  PurchaseCreate,
  PurchaseShow,
  ScreenshotList,
  ScreenshotEdit,
  ScreenshotCreate,
  ScreenshotShow,
  StoreList,
  StoreEdit,
  StoreCreate,
  StoreShow,
  TagList,
  TagEdit,
  TagCreate,
  TagShow,
  WishlistList,
  WishlistEdit,
  WishlistCreate,
  WishlistShow,
  YoutubeVideoList,
  YoutubeVideoEdit,
  YoutubeVideoCreate,
  YoutubeVideoShow,
} from "../utils/posts.js";

const AdminDashboard = () => {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    const fetchAdmin = async () => {
      const response = await fetch("/api/admin");
      const data = await response.json();
      setAdmin(data);
    };

    fetchAdmin();
  }, []);

  const dataProvider = mysqlServerProvider;

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>
          {admin.username
            ? `${admin.username}, welcome to the Admin Dashboard`
            : "Loading..."}
        </h1>
        <Admin dataProvider={dataProvider}>
          <Resource
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            show={PostShow}
          />
          <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="carts"
            list={CartList}
            edit={CartEdit}
            create={CartCreate}
            show={CartShow}
          />
          <Resource
            name="discounts"
            list={DiscountList}
            edit={DiscountEdit}
            create={DiscountCreate}
            show={DiscountShow}
          />
          <Resource
            name="freegames"
            list={FreeGameList}
            edit={FreeGameEdit}
            create={FreeGameCreate}
            show={FreeGameShow}
          />
          <Resource
            name="games"
            list={GameList}
            edit={GameEdit}
            create={GameCreate}
            show={GameShow}
          />
          <Resource
            name="genres"
            list={GenreList}
            edit={GenreEdit}
            create={GenreCreate}
            show={GenreShow}
          />
          <Resource
            name="payments"
            list={PaymentList}
            edit={PaymentEdit}
            create={PaymentCreate}
            show={PaymentShow}
          />
          <Resource
            name="platforms"
            list={PlatformList}
            edit={PlatformEdit}
            create={PlatformCreate}
            show={PlatformShow}
          />
          <Resource
            name="products"
            list={ProductList}
            edit={ProductEdit}
            create={ProductCreate}
            show={ProductShow}
          />
          <Resource
            name="purchases"
            list={PurchaseList}
            edit={PurchaseEdit}
            create={PurchaseCreate}
            show={PurchaseShow}
          />
          <Resource
            name="screenshots"
            list={ScreenshotList}
            edit={ScreenshotEdit}
            create={ScreenshotCreate}
            show={ScreenshotShow}
          />
          <Resource
            name="stores"
            list={StoreList}
            edit={StoreEdit}
            create={StoreCreate}
            show={StoreShow}
          />
          <Resource
            name="tags"
            list={TagList}
            edit={TagEdit}
            create={TagCreate}
            show={TagShow}
          />
          <Resource
            name="wishlists"
            list={WishlistList}
            edit={WishlistEdit}
            create={WishlistCreate}
            show={WishlistShow}
          />
          <Resource
            name="youtubevideos"
            list={YoutubeVideoList}
            edit={YoutubeVideoEdit}
            create={YoutubeVideoCreate}
            show={YoutubeVideoShow}
          />
        </Admin>
      </div>
    </>
  );
};

export default AdminDashboard;
