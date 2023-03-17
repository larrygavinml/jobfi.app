import React from "react";
import { usePage } from '@inertiajs/react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

export function Navbar(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#333'
      }
    },
    typography: {
      fontSize: 10,
    },
  });

  console.log('lg',props.transparent)

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { user } = usePage().props;
  const ref = React.useRef();
  const [height, setHeight] = React.useState("0px");
  const onLoad = () => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  };

  function handleClick() {
    console.log('handleClick')
  }

  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    > 
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="https://www.jobfi.io"
          >
            JobFi.eth
          </a>

          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="flex items-center">
          <iframe   src="https://c.jobfi.io/login"width={200} height={50} ></iframe>
            </li>
            { 
            user ?
            <li className="flex items-center">
              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <i className="fa fa-registered"></i> 
               {
                <Link href="/jobs" className="ml-4 text-sm text-gray-700 underline">Home</Link>
                
                }
              </button>
            </li>
            : null


            }
            <li className="flex items-center">
              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <i className="fa fa-sign-in"></i> 
                {
                            user ?
                            <Link href="/home" className="text-sm text-gray-700 underline">Account</Link>
                            :
                            <Link href="/login" className="text-sm text-gray-700 underline">Login</Link>
                }
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className={`lg:mt-36 lg:ml-2 mt-40 uppercase ${props.hiddenBreadcrumbs ? 'hidden' : ''}`}>
        <ThemeProvider theme={theme}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="primary" href="/" variant="inherit" onClick={handleClick}>
              Home
            </Link>
            <Link color="primary" href="/jobs" onClick={handleClick}>
              Jobs
            </Link>
          </Breadcrumbs>
        </ThemeProvider>
      </div>
    </nav>
  );
}
