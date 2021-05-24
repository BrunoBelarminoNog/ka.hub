import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";

import TagImg from "../assets/st.svg";
import CapaKa from '../assets/capaka.png'

export const GlobalStyles = createGlobalStyle`

:root {
	--black: #050311;
	--darkgray: #141414;
	--red: #be4b4b;
	--white: #f5f5f4;
	--blue: #1782FE;
	--darkblue: #226BBF;
	--design-2: url(${CapaKa});
    --design-1: linear-gradient(
      90deg,
      hsl(188, 93%, 68%),
      hsl(233, 93%, 68%),
      hsl(278, 93%, 68%),
      hsl(323, 93%, 68%),
      hsl(8, 93%, 68%),
      hsl(53, 93%, 68%),
      hsl(98, 93%, 68%),
      hsl(143, 93%, 68%)
    );
	--design-3: radial-gradient(circle at center center, transparent 0%,rgb(33,33,33) 99%),repeating-linear-gradient(0deg, rgba(163, 163, 163,0.2) 0px, rgba(163, 163, 163,0.2) 1px,transparent 1px, transparent 6px),repeating-linear-gradient(90deg, rgba(163, 163, 163,0.2) 0px, rgba(163, 163, 163,0.2) 1px,transparent 1px, transparent 6px),linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33));
	--design-4: repeating-linear-gradient(135deg, rgb(22, 32, 107) 0px, rgb(22, 32, 107) 2px,rgb(27, 40, 181) 2px, rgb(27, 40, 181) 4px,rgb(43, 56, 142) 4px, rgb(43, 56, 142) 6px,rgb(60, 66, 108) 6px, rgb(60, 66, 108) 8px,rgb(28, 38, 109) 8px, rgb(28, 38, 109) 10px,rgb(75, 95, 167) 10px, rgb(75, 95, 167) 12px,rgb(48, 75, 176) 12px, rgb(48, 75, 176) 14px,rgb(92, 107, 206) 14px, rgb(92, 107, 206) 16px,rgb(43, 65, 189) 16px, rgb(43, 65, 189) 18px,rgb(63, 67, 142) 18px, rgb(63, 67, 142) 20px,rgb(111, 123, 214) 20px, rgb(111, 123, 214) 22px,rgb(40, 65, 176) 22px, rgb(40, 65, 176) 24px,rgb(35, 47, 103) 24px, rgb(35, 47, 103) 26px,rgb(46, 61, 190) 26px, rgb(46, 61, 190) 28px,rgb(87, 91, 161) 28px, rgb(87, 91, 161) 30px,rgb(41, 65, 173) 30px, rgb(41, 65, 173) 32px,rgb(49, 58, 116) 32px, rgb(49, 58, 116) 34px,rgb(28, 57, 163) 34px, rgb(28, 57, 163) 36px,rgb(48, 59, 162) 36px, rgb(48, 59, 162) 38px,rgb(30, 37, 134) 38px, rgb(30, 37, 134) 40px,rgb(36, 47, 171) 40px, rgb(36, 47, 171) 42px,rgb(62, 74, 119) 42px, rgb(62, 74, 119) 44px,rgb(50, 80, 198) 44px, rgb(50, 80, 198) 46px,rgb(121, 133, 213) 46px, rgb(121, 133, 213) 48px,rgb(19, 40, 125) 48px, rgb(19, 40, 125) 50px,rgb(71, 77, 186) 50px, rgb(71, 77, 186) 52px,rgb(68, 76, 160) 52px, rgb(68, 76, 160) 54px,rgb(46, 56, 116) 54px, rgb(46, 56, 116) 56px,rgb(92, 114, 193) 56px, rgb(92, 114, 193) 58px,rgb(47, 58, 104) 58px, rgb(47, 58, 104) 60px,rgb(91, 95, 163) 60px, rgb(91, 95, 163) 62px,rgb(35, 50, 187) 62px, rgb(35, 50, 187) 64px,rgb(37, 53, 126) 64px, rgb(37, 53, 126) 66px,rgb(99, 111, 185) 66px, rgb(99, 111, 185) 68px,rgb(100, 108, 190) 68px, rgb(100, 108, 190) 70px,rgb(32, 50, 131) 70px, rgb(32, 50, 131) 72px,rgb(106, 127, 210) 72px, rgb(106, 127, 210) 74px,rgb(45, 70, 173) 74px, rgb(45, 70, 173) 76px,rgb(35, 58, 186) 76px, rgb(35, 58, 186) 78px,rgb(39, 64, 175) 78px, rgb(39, 64, 175) 80px,rgb(54, 60, 160) 80px, rgb(54, 60, 160) 82px,rgb(36, 46, 146) 82px, rgb(36, 46, 146) 84px,rgb(60, 65, 162) 84px, rgb(60, 65, 162) 86px,rgb(42, 54, 161) 86px, rgb(42, 54, 161) 88px,rgb(30, 42, 137) 88px, rgb(30, 42, 137) 90px,rgb(56, 79, 173) 90px, rgb(56, 79, 173) 92px,rgb(21, 39, 105) 92px, rgb(21, 39, 105) 94px,rgb(59, 67, 107) 94px, rgb(59, 67, 107) 96px,rgb(64, 69, 116) 96px, rgb(64, 69, 116) 98px,rgb(31, 56, 180) 98px, rgb(31, 56, 180) 100px,rgb(48, 77, 193) 100px, rgb(48, 77, 193) 102px,rgb(41, 55, 119) 102px, rgb(41, 55, 119) 104px,rgb(89, 103, 154) 104px, rgb(89, 103, 154) 106px,rgb(37, 51, 114) 106px, rgb(37, 51, 114) 108px,rgb(40, 54, 145) 108px, rgb(40, 54, 145) 110px,rgb(53, 66, 166) 110px, rgb(53, 66, 166) 112px,rgb(28, 35, 133) 112px, rgb(28, 35, 133) 114px,rgb(65, 83, 203) 114px, rgb(65, 83, 203) 116px,rgb(79, 93, 142) 116px, rgb(79, 93, 142) 118px,rgb(76, 80, 133) 118px, rgb(76, 80, 133) 120px,rgb(44, 53, 118) 120px, rgb(44, 53, 118) 122px,rgb(51, 64, 122) 122px, rgb(51, 64, 122) 124px,rgb(85, 97, 179) 124px, rgb(85, 97, 179) 126px,rgb(43, 49, 107) 126px, rgb(43, 49, 107) 128px,rgb(73, 90, 184) 128px, rgb(73, 90, 184) 130px,rgb(38, 70, 199) 130px, rgb(38, 70, 199) 132px,rgb(67, 86, 163) 132px, rgb(67, 86, 163) 134px,rgb(46, 68, 155) 134px, rgb(46, 68, 155) 136px,rgb(70, 86, 192) 136px, rgb(70, 86, 192) 138px,rgb(41, 47, 107) 138px, rgb(41, 47, 107) 140px,rgb(24, 32, 146) 140px, rgb(24, 32, 146) 142px,rgb(54, 79, 206) 142px, rgb(54, 79, 206) 144px,rgb(60, 73, 176) 144px, rgb(60, 73, 176) 146px,rgb(49, 64, 150) 146px, rgb(49, 64, 150) 148px,rgb(89, 94, 206) 148px, rgb(89, 94, 206) 150px,rgb(61, 67, 120) 150px, rgb(61, 67, 120) 152px,rgb(71, 80, 147) 152px, rgb(71, 80, 147) 154px,rgb(47, 57, 113) 154px, rgb(47, 57, 113) 156px,rgb(45, 54, 108) 156px, rgb(45, 54, 108) 158px,rgb(56, 67, 150) 158px, rgb(56, 67, 150) 160px,rgb(117, 123, 201) 160px, rgb(117, 123, 201) 162px,rgb(16, 27, 103) 162px, rgb(16, 27, 103) 164px,rgb(84, 99, 166) 164px, rgb(84, 99, 166) 166px,rgb(48, 51, 108) 166px, rgb(48, 51, 108) 168px,rgb(90, 99, 158) 168px, rgb(90, 99, 158) 170px,rgb(40, 54, 184) 170px, rgb(40, 54, 184) 172px,rgb(45, 60, 157) 172px, rgb(45, 60, 157) 174px,rgb(34, 47, 162) 174px, rgb(34, 47, 162) 176px,rgb(49, 72, 202) 176px, rgb(49, 72, 202) 178px,rgb(24, 35, 102) 178px, rgb(24, 35, 102) 180px,rgb(61, 78, 153) 180px, rgb(61, 78, 153) 182px,rgb(69, 83, 163) 182px, rgb(69, 83, 163) 184px,rgb(37, 45, 120) 184px, rgb(37, 45, 120) 186px,rgb(48, 61, 162) 186px, rgb(48, 61, 162) 188px,rgb(45, 53, 114) 188px, rgb(45, 53, 114) 190px,rgb(38, 47, 145) 190px, rgb(38, 47, 145) 192px,rgb(52, 76, 165) 192px, rgb(52, 76, 165) 194px,rgb(39, 55, 134) 194px, rgb(39, 55, 134) 196px,rgb(89, 97, 179) 196px, rgb(89, 97, 179) 198px,rgb(56, 67, 186) 198px, rgb(56, 67, 186) 200px,rgb(42, 57, 124) 200px, rgb(42, 57, 124) 202px,rgb(45, 50, 146) 202px, rgb(45, 50, 146) 204px,rgb(26, 32, 104) 204px, rgb(26, 32, 104) 206px,rgb(125, 136, 210) 206px, rgb(125, 136, 210) 208px,rgb(104, 118, 184) 208px, rgb(104, 118, 184) 210px,rgb(33, 48, 120) 210px, rgb(33, 48, 120) 212px,rgb(41, 54, 175) 212px, rgb(41, 54, 175) 214px,rgb(45, 48, 106) 214px, rgb(45, 48, 106) 216px,rgb(63, 70, 111) 216px, rgb(63, 70, 111) 218px,rgb(35, 60, 161) 218px, rgb(35, 60, 161) 220px,rgb(37, 46, 114) 220px, rgb(37, 46, 114) 222px,rgb(53, 59, 154) 222px, rgb(53, 59, 154) 224px,rgb(79, 102, 205) 224px, rgb(79, 102, 205) 226px,rgb(30, 47, 123) 226px, rgb(30, 47, 123) 228px,rgb(34, 62, 166) 228px, rgb(34, 62, 166) 230px,rgb(83, 90, 158) 230px, rgb(83, 90, 158) 232px,rgb(27, 44, 108) 232px, rgb(27, 44, 108) 234px,rgb(40, 58, 122) 234px, rgb(40, 58, 122) 236px,rgb(112, 130, 194) 236px, rgb(112, 130, 194) 238px,rgb(118, 125, 205) 238px, rgb(118, 125, 205) 240px,rgb(48, 53, 121) 240px, rgb(48, 53, 121) 242px,rgb(85, 96, 194) 242px, rgb(85, 96, 194) 244px,rgb(26, 49, 144) 244px, rgb(26, 49, 144) 246px,rgb(59, 82, 172) 246px, rgb(59, 82, 172) 248px,rgb(55, 65, 202) 248px, rgb(55, 65, 202) 250px,rgb(60, 76, 145) 250px, rgb(60, 76, 145) 252px,rgb(109, 118, 207) 252px, rgb(109, 118, 207) 254px,rgb(40, 50, 106) 254px, rgb(40, 50, 106) 256px,rgb(79, 92, 149) 256px, rgb(79, 92, 149) 258px,rgb(60, 72, 150) 258px, rgb(60, 72, 150) 260px,rgb(80, 96, 206) 260px, rgb(80, 96, 206) 262px,rgb(57, 73, 211) 262px, rgb(57, 73, 211) 264px,rgb(106, 117, 182) 264px, rgb(106, 117, 182) 266px,rgb(29, 37, 194) 266px, rgb(29, 37, 194) 268px,rgb(23, 29, 114) 268px, rgb(23, 29, 114) 270px,rgb(86, 99, 200) 270px, rgb(86, 99, 200) 272px,rgb(37, 48, 105) 272px, rgb(37, 48, 105) 274px,rgb(22, 33, 137) 274px, rgb(22, 33, 137) 276px,rgb(42, 55, 122) 276px, rgb(42, 55, 122) 278px,rgb(41, 50, 167) 278px, rgb(41, 50, 167) 280px,rgb(46, 57, 182) 280px, rgb(46, 57, 182) 282px,rgb(63, 66, 108) 282px, rgb(63, 66, 108) 284px,rgb(83, 86, 140) 284px, rgb(83, 86, 140) 286px,rgb(98, 105, 193) 286px, rgb(98, 105, 193) 288px,rgb(35, 52, 213) 288px, rgb(35, 52, 213) 290px,rgb(27, 46, 156) 290px, rgb(27, 46, 156) 292px,rgb(26, 31, 127) 292px, rgb(26, 31, 127) 294px,rgb(30, 41, 138) 294px, rgb(30, 41, 138) 296px,rgb(62, 86, 207) 296px, rgb(62, 86, 207) 298px,rgb(43, 59, 131) 298px, rgb(43, 59, 131) 300px,rgb(57, 64, 216) 300px, rgb(57, 64, 216) 302px,rgb(52, 65, 116) 302px, rgb(52, 65, 116) 304px,rgb(17, 25, 113) 304px, rgb(17, 25, 113) 306px,rgb(44, 65, 151) 306px, rgb(44, 65, 151) 308px,rgb(30, 45, 152) 308px, rgb(30, 45, 152) 310px,rgb(94, 118, 203) 310px, rgb(94, 118, 203) 312px,rgb(78, 87, 132) 312px, rgb(78, 87, 132) 314px,rgb(57, 66, 107) 314px, rgb(57, 66, 107) 316px,rgb(33, 69, 213) 316px, rgb(33, 69, 213) 318px,rgb(78, 83, 146) 318px, rgb(78, 83, 146) 320px,rgb(25, 31, 104) 320px, rgb(25, 31, 104) 322px,rgb(59, 70, 167) 322px, rgb(59, 70, 167) 324px,rgb(43, 52, 133) 324px, rgb(43, 52, 133) 326px,rgb(94, 118, 203) 326px, rgb(94, 118, 203) 328px,rgb(79, 105, 212) 328px, rgb(79, 105, 212) 330px,rgb(55, 63, 115) 330px, rgb(55, 63, 115) 332px,rgb(99, 105, 203) 332px, rgb(99, 105, 203) 334px,rgb(26, 52, 166) 334px, rgb(26, 52, 166) 336px,rgb(40, 47, 127) 336px, rgb(40, 47, 127) 338px,rgb(81, 94, 149) 338px, rgb(81, 94, 149) 340px,rgb(28, 47, 141) 340px, rgb(28, 47, 141) 342px,rgb(49, 58, 139) 342px, rgb(49, 58, 139) 344px,rgb(38, 44, 157) 344px, rgb(38, 44, 157) 346px,rgb(43, 61, 165) 346px, rgb(43, 61, 165) 348px,rgb(41, 51, 121) 348px, rgb(41, 51, 121) 350px,rgb(94, 106, 160) 350px, rgb(94, 106, 160) 352px,rgb(52, 65, 205) 352px, rgb(52, 65, 205) 354px,rgb(57, 70, 207) 354px, rgb(57, 70, 207) 356px,rgb(49, 57, 143) 356px, rgb(49, 57, 143) 358px,rgb(73, 89, 176) 358px, rgb(73, 89, 176) 360px,rgb(39, 46, 111) 360px, rgb(39, 46, 111) 362px,rgb(32, 64, 208) 362px, rgb(32, 64, 208) 364px,rgb(66, 90, 186) 364px, rgb(66, 90, 186) 366px,rgb(86, 103, 214) 366px, rgb(86, 103, 214) 368px,rgb(23, 28, 110) 368px, rgb(23, 28, 110) 370px,rgb(42, 49, 116) 370px, rgb(42, 49, 116) 372px,rgb(122, 126, 205) 372px, rgb(122, 126, 205) 374px,rgb(78, 97, 203) 374px, rgb(78, 97, 203) 376px,rgb(46, 52, 120) 376px, rgb(46, 52, 120) 378px,rgb(67, 89, 185) 378px, rgb(67, 89, 185) 380px,rgb(36, 43, 175) 380px, rgb(36, 43, 175) 382px,rgb(38, 59, 146) 382px, rgb(38, 59, 146) 384px,rgb(49, 53, 103) 384px, rgb(49, 53, 103) 386px,rgb(109, 122, 209) 386px, rgb(109, 122, 209) 388px,rgb(86, 107, 200) 388px, rgb(86, 107, 200) 390px,rgb(57, 68, 109) 390px, rgb(57, 68, 109) 392px,rgb(76, 95, 165) 392px, rgb(76, 95, 165) 394px,rgb(80, 83, 135) 394px, rgb(80, 83, 135) 396px,rgb(43, 64, 143) 396px, rgb(43, 64, 143) 398px,rgb(105, 110, 202) 398px, rgb(105, 110, 202) 400px,rgb(77, 88, 189) 400px, rgb(77, 88, 189) 402px,rgb(79, 91, 182) 402px, rgb(79, 91, 182) 404px);
	--design-5: linear-gradient(135deg, rgba(20, 138, 95,0.2) 0%, rgba(20, 138, 95,0.2) 16.667%,rgba(19, 167, 97,0.2) 16.667%, rgba(19, 167, 97,0.2) 33.334%,rgba(19, 197, 100,0.2) 33.334%, rgba(19, 197, 100,0.2) 50.001%,rgba(20, 108, 92,0.2) 50.001%, rgba(20, 108, 92,0.2) 66.668%,rgba(21, 78, 90,0.2) 66.668%, rgba(21, 78, 90,0.2) 83.335%,rgba(18, 227, 102,0.2) 83.335%, rgba(18, 227, 102,0.2) 100.002%),linear-gradient(45deg, rgba(20, 138, 95,0.2) 0%, rgba(20, 138, 95,0.2) 16.667%,rgba(19, 167, 97,0.2) 16.667%, rgba(19, 167, 97,0.2) 33.334%,rgba(19, 197, 100,0.2) 33.334%, rgba(19, 197, 100,0.2) 50.001%,rgba(20, 108, 92,0.2) 50.001%, rgba(20, 108, 92,0.2) 66.668%,rgba(21, 78, 90,0.2) 66.668%, rgba(21, 78, 90,0.2) 83.335%,rgba(18, 227, 102,0.2) 83.335%, rgba(18, 227, 102,0.2) 100.002%),linear-gradient(135deg, rgba(20, 138, 95,0.2) 0%, rgba(20, 138, 95,0.2) 16.667%,rgba(19, 167, 97,0.2) 16.667%, rgba(19, 167, 97,0.2) 33.334%,rgba(19, 197, 100,0.2) 33.334%, rgba(19, 197, 100,0.2) 50.001%,rgba(20, 108, 92,0.2) 50.001%, rgba(20, 108, 92,0.2) 66.668%,rgba(21, 78, 90,0.2) 66.668%, rgba(21, 78, 90,0.2) 83.335%,rgba(18, 227, 102,0.2) 83.335%, rgba(18, 227, 102,0.2) 100.002%),linear-gradient(90deg, rgb(107, 243, 95),rgb(90, 222, 31));
	--design-6: radial-gradient(circle at top right, rgb(15, 54, 60) 0%, rgb(15, 54, 60) 3%,rgb(62, 41, 84) 3%, rgb(62, 41, 84) 50%,rgb(108, 28, 108) 50%, rgb(108, 28, 108) 60%,rgb(155, 14, 131) 60%, rgb(155, 14, 131) 63%,rgb(201, 1, 155) 63%, rgb(201, 1, 155) 100%);
	--design-7: repeating-radial-gradient(
      circle at 17% 32%,
      rgb(235, 243, 60),
      rgb(149, 112, 197),
      rgb(115, 252, 224),
      rgb(116, 71, 5),
      rgb(223, 46, 169),
      rgb(73, 80, 75),
      rgb(231, 248, 17) 2px
    );
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, button, cite, code,
del, dfn, em, img, ins, input, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  	outline: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: var(--black);
	color: var(--white);
	font-family: 'Montserrat', sans-serif;
}

body::before {
	content: "";
	width: 650px;
	height: 650px;
	position: fixed;
	bottom: -150px;
	right: -120px;
	opacity: .09;
	z-index: -1;
	background: url(${TagImg});
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html {
	font-size: 70%;
}


@media screen and (min-width: 480px) {
	html {
		font-size: 70%;
	}
}

@media screen and (min-width: 768px) {
	html {
		font-size: 80%;
	}
}

@media screen and (min-width: 980px) {
	html {
		font-size: 90%;
	}
}

a {
	text-decoration: none;
}

button {
    cursor: pointer;
	font-family: 'Montserrat', sans-serif;
	transition: all 300ms;
	&:hover {
		filter: brightness(.9);
	}
}

`;

export const StyledToastContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast--error {
    background: var(--red);
  }
  .Toastify__toast--success {
    background: var(--blue);
  }
`;
