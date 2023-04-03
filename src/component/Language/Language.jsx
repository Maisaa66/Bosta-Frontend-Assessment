import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next'
import { setLanguage } from '../../Redux Store/languageSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Language(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let element="";

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleChange = (lng) => {
    dispatch(setLanguage(lng));
    console.log(lng);
    i18n.changeLanguage(lng);
    setAnchorEl(null);
    localStorage.setItem('language', lng);
  };
  const language = useSelector((state) => state.language);
  console.log(language);

  if(props.mdScreen){
    element = (
      <Button
        color="error"
        sx={{ borderRadius: "20px" , display:{md:"inline-block", xs:"none"}}}
        className="mx-5"
        onClick={handleClick}
      >
        {t('language')}
        <svg
          width="0.8rem"
          height="0.8rem"
          viewBox="0 0 10 6"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          className="mx-2"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.25 0L5 3.6L8.75 0L10 1.2L5 6L0 1.2L1.25 0Z"
            fill="#e30613"
          ></path>
        </svg>
      </Button>
    );
  }
  else {
    element = (
      <Button
        color="error"
        sx={{ borderRadius: "20px"}}
        className="mx-5"
        onClick={handleClick}
      >
        {t('language')}
        <svg
          width="0.8rem"
          height="0.8rem"
          viewBox="0 0 10 6"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          className="mx-2"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.25 0L5 3.6L8.75 0L10 1.2L5 6L0 1.2L1.25 0Z"
            fill="#e30613"
          ></path>
        </svg>
      </Button>
    );
  }

  return (
    <div>
      {element}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleChange('en')}>{t('english')}</MenuItem>
        <MenuItem onClick={() => handleChange('ar')}>{t('arabic')}</MenuItem>
      </Menu>
    </div>
  );
}
