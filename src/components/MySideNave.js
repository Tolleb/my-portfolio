/** @format */
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";

function MySideNave() {
  const navigate = useNavigate();
  return (
    <SideNav
      onSelect={(Selected) => {
        console.log(Selected);
        navigate("/" + Selected);
      }}
      className='mysidenav'>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected='home'>
        <NavItem eventKey='home'>
          <NavIcon>
            <i
              className='fa fa-fw fa-home'
              style={{ fontSize: "20px", color: " #3b1010" }}></i>
          </NavIcon>
          <NavText style={{ fontSize: "20px", color: " #3b1010" }}>
            Home
          </NavText>
        </NavItem>
        <NavItem eventKey='about'>
          <NavIcon>
            <i
              className='fa fa-fw fa-user'
              style={{ fontSize: "20px", color: " #3b1010" }}></i>
          </NavIcon>
          <NavText style={{ fontSize: "20px", color: " #3b1010" }}>
            About
          </NavText>
        </NavItem>
        <NavItem eventKey='work'>
          <NavIcon>
            <i
              className='fa fa-fw fa-laptop-code'
              style={{ fontSize: "20px", color: " #3b1010" }}></i>
          </NavIcon>
          <NavText style={{ fontSize: "20px", color: " #3b1010" }}>
            My works
          </NavText>
        </NavItem>
        <NavItem eventKey='contact'>
          <NavIcon>
            <i
              className='fa fa-fw fa-phone'
              style={{ fontSize: "20px", color: " #3b1010" }}></i>
          </NavIcon>
          <NavText style={{ fontSize: "20px", color: " #3b1010" }}>
            Contact
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default MySideNave;
