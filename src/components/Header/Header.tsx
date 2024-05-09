import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { Avatar, Badge, Button } from "antd";
import { selectCart } from "../../store/slices/cartSlice";
import { useAppSelector } from "../../hooks/reduxHooks";

type PropTypes = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ setShowCart }: PropTypes) {
  const items = useAppSelector(selectCart);

  return (
    <div className="header">
      <div className="headerLeft">
        <img src={logo} alt="logo" />
      </div>

      <div className="headerMid">
        <SearchBar />
      </div>

      <div className="headerRight">
        <div className="cartContainer">
          <Badge count={items.length} offset={[0, 8]}>
            <Button
              icon={<ShoppingCartOutlined style={{ fontSize: "28px" }} />}
              size="large"
              type="link"
              shape="circle"
              onClick={() => setShowCart((prev) => !prev)}
            />
          </Badge>
        </div>
        <Avatar className="avatar" size="large" icon={<UserOutlined />} />
      </div>
    </div>
  );
}

export default Header;
