import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/home";
import HeaderPage from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import Projects from "./pages/project";
import ClickSpark from "./components/HieuUng/ClickSpark";


const Layout = () => {

  const layoutStyle = {
    display: "flex",
    // flexDirection: "column",
    // minHeight: "100vh",
    backgroundColor: "#E5CCFF"
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // padding: "0 100px",
    color: "white"
  };

  return (
    <ClickSpark
      sparkColor='red'
      sparkSize={12}
      sparkRadius={80}
      sparkCount={20}
      duration={1300}
    >
    <div className='layout-app' >
      {/* <SplashCursor /> */}
      
      <HeaderPage />
      
      <div className="content-wrapper" style={contentStyle}>
        <Outlet />
      </div>      
      <Footer />
    </div>
    </ClickSpark>
  );
};


export default function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,

      children: [
        {
          index: true, 
          element: 
            <Home />,
          errorElement: <NotFound />,
        },
        {
          path: "project",
          element: 
            <Projects />,
          errorElement: <NotFound />,
        },
       
        // {
        //   path: "myaccount",
        //   element: 
        //   <ProtectedRoute>
        //     <MyAccount />
        //   </ProtectedRoute>,
        //   errorElement: <NotFound />,
        // },           
        // {
        //   path: "login-web",
        //   element: <DangNhap />,
        //   errorElement: <NotFound />,
        // },
        // {
        //   path: "register-web",
        //   element: <DangKy />,
        //   errorElement: <NotFound />,
        // },   
      ],
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}