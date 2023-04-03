import React from "react";
import { Typography } from "@mui/material";
import Complain from "../Complain/Complain";
import { useTranslation } from 'react-i18next'

const ClientDetail = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column">
      <div id="addressDetail" className="mb-3">
        <Typography
          sx={{ flex: "1 1 100%", mb: 2, ml: 1, fontWeight: 700 }}
          id="tableTitle"
          component="div"
        >
          {t("Delivery address")}
        </Typography>
        <Typography
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.04)", p: 3, borderRadius: 4 }}
          color="#002B5B"
        >
         {t('Imbaba, Talaat Harb Street, Al Omal City, next to Al Prince, House 17, Block 22, Giza')}
        </Typography>
      </div>

      <Complain></Complain>
    </div>
  );
};

export default ClientDetail;
