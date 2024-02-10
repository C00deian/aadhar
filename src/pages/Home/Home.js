import React, { useState, useEffect } from "react";
import "./home.css";
import Button from "../../components/common/Button/Button";
import Breadcrumbs from "../../components/common/breadcumbs/Breadcrumbs";
import Footer from "../../components/common/Footer/Footer";

import Navbar from "../../components/Navbar/Navbar";
import Menubar from "../MenuSidebar/Menubar";

const Home = () => {
  const [pointsBalance, setPointsBalance] = useState(0);
  const [totalApplications, setTotalApplications] = useState(0);
  const [completedApplications, setCompletedApplications] = useState(0);
  const [rejectedApplications, setRejectedApplications] = useState(0);

  const [childBalance, setChildBalance] = useState(0);
  const [totalChildApplications, setTotalChildApplications] = useState(0);
  const [totalChildCompleted, setTotalChildCompleted] = useState(0);
  const [totalChildRejected, setTotalChildRejected] = useState(0);

  // Simulating data fetching or updates
  useEffect(() => {
    // You can replace this with actual data fetching logic
    // For now, I'm using a timeout to simulate asynchronous data fetching
    const fetchData = async () => {
      // Simulate fetching data for Points
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPointsBalance(250);

      // Simulate fetching data for Applications
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTotalApplications(150);
      setCompletedApplications(75);
      setRejectedApplications(25);

      // Simulate fetching data for Child Balance
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setChildBalance(120);

      // Simulate fetching data for Child Applications
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTotalChildApplications(80);
      setTotalChildCompleted(40);
      setTotalChildRejected(10);
    };

    fetchData();
  }, []);

  return (
    <>
      <Menubar />
      <Navbar />
      <div className="first-half">
        <div className="title-section">
          <p className="dashboard">Dashboard</p>
          <div className="breadcrumb">
            <Breadcrumbs />
          </div>
        </div>

        <div className="button-section">
          <Button />
        </div>
      </div>

      <section>
        <div className="hero-section">
          <div className="Heading">
            <h2>Welcome to Retailer Panel</h2>
          </div>

          <div className="container">
            <div className="card card-1">
              <div className="card-number">{pointsBalance}</div>
              <div className="card-item">Points Balance</div>
            </div>
            <div className="card card-2">
              <div className="card-number">{totalApplications}</div>
              <div className="card-item">Total Application</div>
            </div>
            <div className="card card-3">
              <div className="card-number">{completedApplications}</div>
              <div className="card-item">Completed</div>
            </div>
            <div className="card card-4">
              <div className="card-number">{rejectedApplications}</div>
              <div className="card-item">Rejected</div>
            </div>
          </div>

          <div className="container">
            <div className="card card-1">
              <div className="card-number">{childBalance}</div>
              <div className="card-item">Child Balance</div>
            </div>
            <div className="card card-2">
              <div className="card-number">{totalChildApplications}</div>
              <div className="card-item">Total Child Application</div>
            </div>
            <div className="card card-3">
              <div className="card-number">{totalChildCompleted}</div>
              <div className="card-item">Total Child Completed</div>
            </div>
            <div className="card card-4">
              <div className="card-number">{totalChildRejected}</div>
              <div className="card-item">Total Child Rejected</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
