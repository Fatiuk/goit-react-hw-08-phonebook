import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default SharedLayout;
