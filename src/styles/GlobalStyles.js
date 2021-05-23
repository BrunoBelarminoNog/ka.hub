import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer } from 'react-toastify';

import TagImg from '../assets/st.svg'
 
export const GlobalStyles = createGlobalStyle`

:root {
	--black: #050311;
	--darkgray: #141414;
	--red: #be4b4b;
	--white: #f5f5f4;
	--blue: #1782FE;
	--darkblue: #226BBF;
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
	font-size: 50%;
}


@media screen and (min-width: 360px) {
	html {
		font-size: 60%;
	}
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