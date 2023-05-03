// import NavbarV2Areeb from "../../global-components/navbarV1areebcrm";
// import Navbar from "../../global-components/navbar-v2";
// import { useLocation } from "react-router-dom";
// import SellWithUsMobilize from "./sellwithus-mobilize";
// import CurveCustom from "./sell-with-us-curve";
// import ImapactApp from "./impact-app";
// import SellwithusPrice from "./sellwithus-price";
// import SixBoxes from "./sell-with-six-box";
// import ContentImg from "./sellwithus-content-img";
// import SellWithUsServices from "./sell-with-us-services";

import React, { useEffect, useState } from "react"
import NavbarV2 from '../../global-components/navbar-v2'
import SellWithUsHead from "./sell-with-us-head";
import Footer from "../../global-components/footer";
import SellWithUsChoose from "./sellwithus-choose";
import BottomLineBox from "../BottomLineBoxes.js";
import FaqsOrText from "./sell-with-faqs-text";
import CallToActonSellWithUs from "./sell-with-us-cal-to-action";
import SideServices from "../SideServices";

// 
import SecondBanner from "../../images/SecondBanner.m4v"
import servicesImg from '../../images/SellWithUsServices.png'

// icon
import compaign from "../../images/Services-analytic-icon/campaign.png";
import documentation from "../../images/Services-analytic-icon/documentation.png";
import finance from "../../images/Services-analytic-icon/finance.png";
import inventory from "../../images/Services-analytic-icon/inventory.png";
import recovery from "../../images/Services-analytic-icon/recovery.png";
import report from "../../images/Services-analytic-icon/report.png";
import './sellwithus.css'
import SellWithUsFeature from "./sell-with-us-feature";

const SellWithUs = (props) => {
    const [title, setTitle] = useState("CRM | Property Wallet");
    useEffect(() => {
        if (props.location.pathname === "/crm") {
            setTitle("CRM | Property Wallet")
        } else {
            setTitle("CRM | Property Wallet")
        }
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);

    const contentArry = [
        {
            title: 'Campaigns Management',
            content: 'Managing digital campaigns doesn’t have to be complicated! Here at property wallet crm, we have the perfect solution for anyone who wants to launch effective and successful campaigns.',
            img: compaign
        },
        {
            title: 'Property Documentation',
            content: 'Keeping up with the paperwork for any property can be tricky and time consuming. But it doesn’t have to be! Introducing Property wallet CRM - the safe, secure, and efficient way to manage your property documentation with ease.',
            img: documentation
        },
        {
            title: 'Basic Finance Management',
            content: "Are you fed up with your financial problems? We've got your back! Welcome to Property Wallet CRM, a financial planner developed to assist you with property buying and selling calculations and revenue.",
            img: finance
        },
        {
            title: 'Inventory Management',
            content: 'Say goodbye to time-consuming paperwork and manual mistakes. You can keep track of every asset quickly and accurately with the Property wallet CRM inventory management system.',
            img: inventory
        },
        {
            title: 'Reporting Management',
            content: 'It’s time to drop the manual reporting, and upgrade to a modern, automated reporting system.⁣ With Property wallet CRM, you’ll be able to access up-to-date insights about your business all in one place.',
            img: report
        },
        {
            title: 'Recovery Management',
            content: 'Don’t bear the stress of it all alone! With property wallet CRM, we make property recovery management easy - and fast. learn more about our amazing Property Recovery Management services.',
            img: recovery
        }
    ]

    const statment = [
        {
            title: "Mission Statement",
            content: "Simplifying Property Processes for Builders & Developers Revolutionize your real estate business with Property Wallet CRM & providing real estate business best solution CRM software in Pakistan. Innovative, comprehensive, and designed for success."
        },
        {
            title: "Vision Statement",
            content: "Empowering builders with innovative CRM software for streamlined operations, enhanced customer relationships, and business growth."
        }
    ]

    const startSellingProvideList = [
        {
            provideList: 'Inventory Management'
        },
        {
            provideList: 'Property documentation'
        },
        {
            provideList: 'Basic Finance'
        },
        {
            provideList: 'Recovery Management'
        },
        {
            provideList: 'Reporting Management'
        },
        {
            provideList: 'Campaigns Management'
        }
    ]
    const marketing = [
        {
            key: "1",
            heading: "Inventory Management",
            title: "We Provide You Potential Buyers",
            content: "Inventory management for a real estate builder CRM involves the systematic tracking and control of all the properties that are available for sale or lease. It involves managing all aspects of the properties, including their pricing, availability, location, features, and any other relevant information. This requires accurate and up-to-date information about the properties, which can be accessed and managed through the CRM software .An effective CRM system can help the real estate builder achieve these objectives by providing a centralized platform for managing all aspects of their inventory.",
            // "Now is the moment to act and capture greater options; let us assist you in getting in front of the right customer. We can guide you to a prosperous future with our unique approach and professional advice.",

        },
        {
            key: "2",
            heading: "Customer Self Service Application (CSSA)",
            title: "We provide you an all-in-one solution",
            content: "The Property Wallet CRM Customer Self Service Application provides a comprehensive solution for customers to manage their purchase plots  & payment plan transactions. The main key  features of (CSSA) Recovery Management and Transfer Management, Inventory Management users can easily track their property progress and can initiate transfers request. Additionally, the application allows customers to initiate new plot requests and receive top-notch customer support.",
            // "An all-in-one CRM solution can be very beneficial to projects. Property Wallet CRM includes capabilities such as recovery management, inventory management, basic finance, property documentation, and reporting and analytics.",
        },
        {
            key: "3",
            heading: "File Management",
            title: "We have a huge amount of dealers",
            content: "The Property Wallet CRM File Management system offers a comprehensive and centralized platform to store and manage real estate documents. It simplifies the process of creating property files of existing projects and includes robust search and organization tools for easy access to critical files. This powerful application streamlines the file management process, allowing real estate professionals to save time and enhance their productivity. By utilizing this innovative system, real estate agents can efficiently manage their property documents, ultimately helping them to better serve their clients."
            // "We are having a large number of real estate dealers can be helpful for a project since it allows them to have a larger reach and a diversified set of agents who can help sell properties to a variety of buyers.",
        },
    ];

    const crmOffered = [
        {
            provideList: 'Social Media Campaigns'
        },
        {
            provideList: 'Lead Management'
        },
        {
            provideList: 'Inventory Management'
        },
        {
            provideList: 'File Management'
        },
        {
            provideList: 'Biometric Solution'
        },
        {
            provideList: 'Recovery Management'
        },
        {
            provideList: 'Report & Analytics'
        },
        {
            provideList: 'Customer Sales Services'
        },
        {
            provideList: 'Transfer Management'
        }
    ]

    return (
        <>
            <NavbarV2 />
            <SellWithUsHead heading="Ready to put your property on the market? Let us help you make it a reality!" content="Property wallet CRM is here to make your transition as smooth and stress-free as possible. We want you to get the best return on your investment while avoiding costly surprises down the line." />

            <SellWithUsFeature statment={statment} customClass="margin-top-fix-1 ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />

            {/* <SellWithUsServices /> */}
            <SideServices gallery={servicesImg} type='image' namingList={crmOffered} heading="What services Property Wallet CRM offered" bottomContent="You can easily manage all parts of your property from one convenient location with our advanced and customised platform. We have everything you need to streamline your operations and unlock the full potential of your properties, whether you're a builder, real estate agent, or property manager. Contact us today to learn more about how Property Wallet CRM may assist you in reaching your goals." />
            <SellWithUsChoose peraContent={marketing} content="From assessing potential buyers, to promotions and marketing, we’ve got it all covered" heading="Why Choose Property Wallet CRM" />
            <SideServices gallery={SecondBanner} type='video' namingList={startSellingProvideList} heading="What includes in Property Wallet CRM" bottomContent='Unlock the potential of your projects with Property Wallet CRM! Our all-in-one CRM solution makes it easier for you to manage recovery, inventory, finance, campaigns, documents and analytics. Get a clear overview of your project and stay on top of progress with powerful reporting and analytics. Say goodbye to tedious manual processes - save valuable time and money with Property Wallet CRM.' />
            {/* <ContentImg /> */}
            <BottomLineBox heading="ARE YOU READY TO TAKE THE NEXT MAJOR STEP IN YOUR BUSINESS?" content='Join property wallet today and start selling with us!' contentArry={contentArry} />
            <FaqsOrText heading="Got Questions?" content="Learn everything about Property Wallet and the most frequently asked questions." />
            <CallToActonSellWithUs />
            <Footer />
            {/* <SixBoxes /> */}
            {/* <Navbar /> */}
            {/* <SellWithUsMobilize /> */}
            {/* <CurveCustom /> */}
            {/* <SellwithusPrice /> */}
            {/* <ImapactApp /> */}
            {/* {load ?
                <div>
                    <NavbarV2Areeb />
                    <SellWithUsHead />
                    <SixBoxes />
                    <SellWithUsChoose />
                    <ContentImg />
                    <AnalyticContent />
                    <FaqsOrText />
                    <CallToActonSellWithUs />
                    <Footer />
                </div> : <img src={loadImg} className='backGround-img' alt="Loading" />
            } */}

        </>
    )
}
export default SellWithUs