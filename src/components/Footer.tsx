import React, { FC } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const Footer: FC<any> = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const LanguageSelect = () => {
    const [age, setAge] = React.useState('esp');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };

    return (
      <ThemeProvider theme={darkTheme}>

        <Box sx={{ minWidth: 120, marginTop: "20px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Idioma</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Idioma"
              onChange={handleChange}
            >
              <MenuItem value={"esp"}>Espanol</MenuItem>
              <MenuItem value={"en"}>English</MenuItem>

            </Select>
          </FormControl>
        </Box>
      </ThemeProvider>
    );
  }

  return (


    <div className="footer-container">
      <div className="footer-info-one">
        <div className="info-title-footer">Ronaldo Rodriguez (Lazy Boy)</div>
        <div className="info-title-footer-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure
        </div>
        <div>
          <ul className="social-list">
            <li>
              <a
                aria-label="Instagram"
                className="instagram"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/lazyboy.ufc"
              >
                <svg
                  width="48px"
                  height="48px"
                  viewBox="0 0 48 48"
                  version="1.1"
                >
                  <title>Instagram</title>
                  <defs></defs>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-642.000000, -295.000000)"
                      fill="currentColor"
                    >
                      <path d="M666.000048,295 C659.481991,295 658.664686,295.027628 656.104831,295.144427 C653.550311,295.260939 651.805665,295.666687 650.279088,296.260017 C648.700876,296.873258 647.362454,297.693897 646.028128,299.028128 C644.693897,300.362454 643.873258,301.700876 643.260017,303.279088 C642.666687,304.805665 642.260939,306.550311 642.144427,309.104831 C642.027628,311.664686 642,312.481991 642,319.000048 C642,325.518009 642.027628,326.335314 642.144427,328.895169 C642.260939,331.449689 642.666687,333.194335 643.260017,334.720912 C643.873258,336.299124 644.693897,337.637546 646.028128,338.971872 C647.362454,340.306103 648.700876,341.126742 650.279088,341.740079 C651.805665,342.333313 653.550311,342.739061 656.104831,342.855573 C658.664686,342.972372 659.481991,343 666.000048,343 C672.518009,343 673.335314,342.972372 675.895169,342.855573 C678.449689,342.739061 680.194335,342.333313 681.720912,341.740079 C683.299124,341.126742 684.637546,340.306103 685.971872,338.971872 C687.306103,337.637546 688.126742,336.299124 688.740079,334.720912 C689.333313,333.194335 689.739061,331.449689 689.855573,328.895169 C689.972372,326.335314 690,325.518009 690,319.000048 C690,312.481991 689.972372,311.664686 689.855573,309.104831 C689.739061,306.550311 689.333313,304.805665 688.740079,303.279088 C688.126742,301.700876 687.306103,300.362454 685.971872,299.028128 C684.637546,297.693897 683.299124,296.873258 681.720912,296.260017 C680.194335,295.666687 678.449689,295.260939 675.895169,295.144427 C673.335314,295.027628 672.518009,295 666.000048,295 Z M666.000048,299.324317 C672.40826,299.324317 673.167356,299.348801 675.69806,299.464266 C678.038036,299.570966 679.308818,299.961946 680.154513,300.290621 C681.274771,300.725997 682.074262,301.246066 682.91405,302.08595 C683.753934,302.925738 684.274003,303.725229 684.709379,304.845487 C685.038054,305.691182 685.429034,306.961964 685.535734,309.30194 C685.651199,311.832644 685.675683,312.59174 685.675683,319.000048 C685.675683,325.40826 685.651199,326.167356 685.535734,328.69806 C685.429034,331.038036 685.038054,332.308818 684.709379,333.154513 C684.274003,334.274771 683.753934,335.074262 682.91405,335.91405 C682.074262,336.753934 681.274771,337.274003 680.154513,337.709379 C679.308818,338.038054 678.038036,338.429034 675.69806,338.535734 C673.167737,338.651199 672.408736,338.675683 666.000048,338.675683 C659.591264,338.675683 658.832358,338.651199 656.30194,338.535734 C653.961964,338.429034 652.691182,338.038054 651.845487,337.709379 C650.725229,337.274003 649.925738,336.753934 649.08595,335.91405 C648.246161,335.074262 647.725997,334.274771 647.290621,333.154513 C646.961946,332.308818 646.570966,331.038036 646.464266,328.69806 C646.348801,326.167356 646.324317,325.40826 646.324317,319.000048 C646.324317,312.59174 646.348801,311.832644 646.464266,309.30194 C646.570966,306.961964 646.961946,305.691182 647.290621,304.845487 C647.725997,303.725229 648.246066,302.925738 649.08595,302.08595 C649.925738,301.246066 650.725229,300.725997 651.845487,300.290621 C652.691182,299.961946 653.961964,299.570966 656.30194,299.464266 C658.832644,299.348801 659.59174,299.324317 666.000048,299.324317 Z M666.000048,306.675683 C659.193424,306.675683 653.675683,312.193424 653.675683,319.000048 C653.675683,325.806576 659.193424,331.324317 666.000048,331.324317 C672.806576,331.324317 678.324317,325.806576 678.324317,319.000048 C678.324317,312.193424 672.806576,306.675683 666.000048,306.675683 Z M666.000048,327 C661.581701,327 658,323.418299 658,319.000048 C658,314.581701 661.581701,311 666.000048,311 C670.418299,311 674,314.581701 674,319.000048 C674,323.418299 670.418299,327 666.000048,327 Z M681.691284,306.188768 C681.691284,307.779365 680.401829,309.068724 678.811232,309.068724 C677.22073,309.068724 675.931276,307.779365 675.931276,306.188768 C675.931276,304.598171 677.22073,303.308716 678.811232,303.308716 C680.401829,303.308716 681.691284,304.598171 681.691284,306.188768 Z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label="Facebook"
                className="facebook"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/LuisRonaldoLazyBoy"
              >
                <svg viewBox="0 0 48 48" version="1.1">
                  <title>Facebook Lazy-boy</title>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-325.000000, -295.000000)"
                      fill="currentColor"
                    >
                      <path d="M350.638355,343 L327.649232,343 C326.185673,343 325,341.813592 325,340.350603 L325,297.649211 C325,296.18585 326.185859,295 327.649232,295 L370.350955,295 C371.813955,295 373,296.18585 373,297.649211 L373,340.350603 C373,341.813778 371.813769,343 370.350955,343 L358.119305,343 L358.119305,324.411755 L364.358521,324.411755 L365.292755,317.167586 L358.119305,317.167586 L358.119305,312.542641 C358.119305,310.445287 358.701712,309.01601 361.70929,309.01601 L365.545311,309.014333 L365.545311,302.535091 C364.881886,302.446808 362.604784,302.24957 359.955552,302.24957 C354.424834,302.24957 350.638355,305.625526 350.638355,311.825209 L350.638355,317.167586 L344.383122,317.167586 L344.383122,324.411755 L350.638355,324.411755 L350.638355,343 L350.638355,343 Z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>

            <li>
              <a
                aria-label="Youtube"
                target="_blank"
                className="youtube"
                rel="noreferrer"
                href="https://www.youtube.com/@LazyboyUFC"
              >
                <svg viewBox="0 0 48 34" version="1.1">
                  <title>Youtube</title>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-567.000000, -302.000000)"
                      fill="currentColor"
                    >
                      <path d="M586.044,325.269916 L586.0425,311.687742 L599.0115,318.502244 L586.044,325.269916 Z M614.52,309.334163 C614.52,309.334163 614.0505,306.003199 612.612,304.536366 C610.7865,302.610299 608.7405,302.601235 607.803,302.489448 C601.086,302 591.0105,302 591.0105,302 L590.9895,302 C590.9895,302 580.914,302 574.197,302.489448 C573.258,302.601235 571.2135,302.610299 569.3865,304.536366 C567.948,306.003199 567.48,309.334163 567.48,309.334163 C567.48,309.334163 567,313.246723 567,317.157773 L567,320.82561 C567,324.73817 567.48,328.64922 567.48,328.64922 C567.48,328.64922 567.948,331.980184 569.3865,333.447016 C571.2135,335.373084 573.612,335.312658 574.68,335.513574 C578.52,335.885191 591,336 591,336 C591,336 601.086,335.984894 607.803,335.495446 C608.7405,335.382148 610.7865,335.373084 612.612,333.447016 C614.0505,331.980184 614.52,328.64922 614.52,328.64922 C614.52,328.64922 615,324.73817 615,320.82561 L615,317.157773 C615,313.246723 614.52,309.334163 614.52,309.334163 L614.52,309.334163 Z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>


          </ul>
          <div>{LanguageSelect()}</div>
          <div className="reserve-rights"> © 2024 derechos reservados Ronaldo Rodriguez</div>
        </div>
      </div>

      <div className="footer-info-two">
        <div className="info-title-footer">Patrocinadores</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure
        </div>
        <div>{"{Lista de pratocinadores}"}</div>
      </div>

      <div className="footerinfo-three">
        <div className="info-title-footer">contacto</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure
        </div>
        <div>{"{Lista contacto}"}</div>
      </div>
    </div>

  );
};

export default Footer;
