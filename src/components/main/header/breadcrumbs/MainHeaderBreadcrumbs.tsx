import { Breadcrumbs, Link, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

const MainHeaderBreadcrumbs = () => {
  const [age, setAge] = useState<string>('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
        Core
      </Link>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
        size="small"
        sx={{
          '& fieldset': {
            border: 'none',
          },
        }}
      >
        <MenuItem value={'10'}>Ten</MenuItem>
        <MenuItem value={'20'}>Twenty</MenuItem>
        <MenuItem value={'30'}>Thirty</MenuItem>
      </Select>
    </Breadcrumbs>
  );
};

export default MainHeaderBreadcrumbs;
