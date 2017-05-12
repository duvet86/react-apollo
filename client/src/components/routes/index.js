import DashBoard from "components/navigation/DashBoard";
import ChannelsListContainer
  from "components/channelList/ChannelsListContainer";
import PageBuilderContainer from "components/pageBuilder/PageBuilderContainer";
import Settings from "components/navigation/Settings";
import Profile from "components/navigation/Profile";
import Help from "components/navigation/Help";

const routes = [
  {
    id: 1,
    path: "/",
    label: "Dashboard",
    component: DashBoard,
    isSideBar: true
  },
  {
    id: 2,
    path: "/channellist",
    label: "Channel List",
    component: ChannelsListContainer,
    isSideBar: true
  },
  {
    id: 3,
    path: "/pageBuilder",
    label: "Page Builder",
    component: PageBuilderContainer,
    isSideBar: true
  },
  {
    id: 4,
    path: "/settings",
    label: "Settings",
    component: Settings
  },
  {
    id: 5,
    path: "/profile",
    label: "Profile",
    component: Profile
  },
  {
    id: 6,
    path: "/help",
    label: "Help",
    component: Help
  }
];

const topBarRoutes = routes.filter(route => !route.isSideBar);
const sideBarRoutes = routes.filter(route => route.isSideBar);

export { topBarRoutes, sideBarRoutes };
export default routes;
