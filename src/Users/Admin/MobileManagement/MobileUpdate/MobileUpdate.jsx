import React from "react";
import Navbar from "../../HeaderNabar/HeaderNavbar";
import Asidebar from "../../Asidebar/Asidebar";
import FingerPrint from "../../../../components/FingerPrint/FingerPrint";
import Breadcrumb from "../../BreadCrumb/Breadcrumb";

const MobileUpdate = () => {
  const title = "Mobile Update";
  const links = [
    { title: "Home", href: "/dashboard" },
    { title: "Mobile Update", href: "" },
     
  ];
  const mylinks = [
    {
      to: "/mobileupdate",
      text: "View Customer",
      icon: "ri-team-line text-white text-2xl ",
    },
  ];
  return (
    <div>
      <Navbar />
      <Asidebar />
      <Breadcrumb title={title} links={links} mylinks={mylinks}/>
      <div className="p-4 sm:ml-72 mb-32 bg-gray-300">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg   mt-14 bg-white">
          <h3 className="text-2xl font-bold ml-10">Mobile Upadate</h3>
          <form className="m-5 p-6 border rounded-md shadow-md bg-white">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="bg-white border border-black text-gray-900 text-sm  rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="John"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="father_name"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Father name
                </label>
                <input
                  type="text"
                  id="father_name"
                  className="bg-white border border-black text-gray-900 text-sm  rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="Doe"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor=" date"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Date of Apply
                </label>
                <input
                  type="date"
                  id=" date"
                  className="bg-white border border-black text-gray-900 text-sm  rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder=""
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="aadhaar_number"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Aadhaar number
                </label>
                <input
                  type="number"
                  id="aadhaar_number"
                  className="bg-white border border-black text-gray-900 text-sm  rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="1233-4335-6738"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor=" mobile_number"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  id=" mobile_number"
                  className="bg-white border border-black text-gray-900 text-sm  rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="+91-232-324-2434"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor=" email"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Email Id
                </label>
                <input
                  type="email"
                  id=" email"
                  className="bg-white border border-black text-gray-900 text-sm  rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="emil@gjv.com"
                  required=""
                />
              </div>
            </div>
            <div className="mb-6 grid gap-6 md:grid-cols-5 ">
              <FingerPrint />
              <FingerPrint />
              <FingerPrint />
              <FingerPrint />
              <FingerPrint />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobileUpdate;
