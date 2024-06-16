import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  Show,
  SimpleShowLayout,
} from "react-admin";

export const PostList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
    </Datagrid>
  </List>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);

export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
    </SimpleShowLayout>
  </Show>
);

export const CartList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="user_id" />
      <TextField source="game_id" />
    </Datagrid>
  </List>
);

export const CartEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="user_id" />
      <TextInput source="game_id" />
    </SimpleForm>
  </Edit>
);

export const CartCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="user_id" />
      <TextInput source="game_id" />
    </SimpleForm>
  </Create>
);

export const CartShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="user_id" />
      <TextField source="game_id" />
    </SimpleShowLayout>
  </Show>
);

export const DiscountList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="game_id" />
      <TextField source="discount" />
    </Datagrid>
  </List>
);

export const DiscountEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="game_id" />
      <TextInput source="discount" />
    </SimpleForm>
  </Edit>
);

export const DiscountCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="game_id" />
      <TextInput source="discount" />
    </SimpleForm>
  </Create>
);

export const DiscountShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="game_id" />
      <TextField source="discount" />
    </SimpleShowLayout>
  </Show>
);

export const FreeGameList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="game_id" />
    </Datagrid>
  </List>
);

export const FreeGameEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="game_id" />
    </SimpleForm>
  </Edit>
);

export const FreeGameCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="game_id" />
    </SimpleForm>
  </Create>
);

export const FreeGameShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="game_id" />
    </SimpleShowLayout>
  </Show>
);

export const GameList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="price" />
    </Datagrid>
  </List>
);

export const GameEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="price" />
    </SimpleForm>
  </Edit>
);

export const GameCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="price" />
    </SimpleForm>
  </Create>
);

export const GameShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="price" />
    </SimpleShowLayout>
  </Show>
);

export const GenreList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="genre" />
    </Datagrid>
  </List>
);

export const GenreEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="genre" />
    </SimpleForm>
  </Edit>
);

export const GenreCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="genre" />
    </SimpleForm>
  </Create>
);

export const GenreShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="genre" />
    </SimpleShowLayout>
  </Show>
);

export const PaymentList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="user_id" />
      <TextField source="game_id" />
      <TextField source="price" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const PaymentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="user_id" />
      <TextInput source="game_id" />
      <TextInput source="price" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);

export const PaymentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="user_id" />
      <TextInput source="game_id" />
      <TextInput source="price" />
      <TextInput source="status" />
    </SimpleForm>
  </Create>
);

export const PaymentShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="user_id" />
      <TextField source="game_id" />
      <TextField source="price" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);

export const PlatformList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="platform" />
    </Datagrid>
  </List>
);

export const PlatformEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="platform" />
    </SimpleForm>
  </Edit>
);

export const PlatformCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="platform" />
    </SimpleForm>
  </Create>
);

export const PlatformShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="platform" />
    </SimpleShowLayout>
  </Show>
);

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="game_id" />
      <TextField source="store_id" />
      <TextField source="price" />
    </Datagrid>
  </List>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="game_id" />
      <TextInput source="store_id" />
      <TextInput source="price" />
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="game_id" />
      <TextInput source="store_id" />
      <TextInput source="price" />
    </SimpleForm>
  </Create>
);

export const ProductShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="game_id" />
      <TextField source="store_id" />
      <TextField source="price" />
    </SimpleShowLayout>
  </Show>
);

export const PurchaseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="user_id" />
      <TextField source="game_id" />
    </Datagrid>
  </List>
);

export const PurchaseEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="user_id" />
      <TextInput source="game_id" />
    </SimpleForm>
  </Edit>
);

export const PurchaseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="user_id" />
      <TextInput source="game_id" />
    </SimpleForm>
  </Create>
);

export const PurchaseShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="user_id" />
      <TextField source="game_id" />
    </SimpleShowLayout>
  </Show>
);

export const ScreenshotList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="game_id" />
      <TextField source="url" />
    </Datagrid>
  </List>
);

export const ScreenshotEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="game_id" />
      <TextInput source="url" />
    </SimpleForm>
  </Edit>
);

export const ScreenshotCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="game_id" />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);

export const ScreenshotShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="game_id" />
      <TextField source="url" />
    </SimpleShowLayout>
  </Show>
);

export const StoreList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="store" />
    </Datagrid>
  </List>
);

export const StoreEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="store" />
    </SimpleForm>
  </Edit>
);

export const StoreCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="store" />
    </SimpleForm>
  </Create>
);

export const StoreShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="store" />
    </SimpleShowLayout>
  </Show>
);

export const TagList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="tag" />
    </Datagrid>
  </List>
);

export const TagEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="tag" />
    </SimpleForm>
  </Edit>
);

export const TagCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="tag" />
    </SimpleForm>
  </Create>
);

export const TagShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="tag" />
    </SimpleShowLayout>
  </Show>
);

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="email" />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="username" />
      <TextField source="email" />
    </SimpleShowLayout>
  </Show>
);

export const WishlistList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="user_id" />
      <TextField source="game_id" />
    </Datagrid>
  </List>
);

export const WishlistEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="user_id" />
      <TextInput source="game_id" />
    </SimpleForm>
  </Edit>
);

export const WishlistCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="user_id" />
      <TextInput source="game_id" />
    </SimpleForm>
  </Create>
);

export const WishlistShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="user_id" />
      <TextField source="game_id" />
    </SimpleShowLayout>
  </Show>
);

export const YoutubeVideoList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="game_id" />
      <TextField source="url" />
    </Datagrid>
  </List>
);

export const YoutubeVideoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="game_id" />
      <TextInput source="url" />
    </SimpleForm>
  </Edit>
);

export const YoutubeVideoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="game_id" />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);

export const YoutubeVideoShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="game_id" />
      <TextField source="url" />
    </SimpleShowLayout>
  </Show>
);
