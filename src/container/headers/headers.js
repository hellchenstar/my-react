/*
 * @Author: chenx
 * @Descripttion:
 * @Date: 2022-08-05 14:24:50
 * @LastEditors: chenx
 * @LastEditTime: 2022-08-11 11:57:45
 */
import "./headers.scss";
import logo from "../../assets/logo/logo.svg";
const menuList = [
  { name: "首页", id: 1 },
  { name: "商品", id: 2 },
  { name: "订单", id: 3 },
  { name: "售后", id: 4 },
];

function Headers(props) {
  // 菜单列表
  const menuItems = menuList.map((el) => (
    <div className="menuItem" key={el.id} onClick={() => goMenu(el.id)}>
      {el.name}
    </div>
  ));
  return (
    <div className="headers">
      <img className="logo" src={logo} alt="logo" />
      <div className="menuList">{menuItems}</div>
    </div>
  );
}
const goMenu = (id) => {
  console.log(id);
};
export default Headers;
