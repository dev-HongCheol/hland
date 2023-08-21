import { useAppSelector } from '@libs/stores';
import { Breadcrumbs, Link, styled } from '@mui/material';

const BreadcrumbsLink = styled(Link)({
  fontSize: '0.65rem',
});

const MainHeaderBreadcrumbs = () => {
  const { breadcrumbs } = useAppSelector((state) => state.product);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <BreadcrumbsLink underline="hover" color="inherit" href="#">
        HOME
      </BreadcrumbsLink>
      {breadcrumbs.map((menuName) => (
        <BreadcrumbsLink underline="hover" color="inherit" href="#" key={menuName}>
          {menuName}
        </BreadcrumbsLink>
      ))}
    </Breadcrumbs>
  );
};

export default MainHeaderBreadcrumbs;
