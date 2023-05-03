import React, { useEffect, useState } from "react"
import NavbarV2 from '../../../global-components/navbar-v2'
import Footer from "../../../global-components/footer";
import StaffTestimonial from "./staff-manegement-testimonial";
import StaffServices from "./staff-manegement-services";
import PageHead from "../ServicesComponents/PageHead";
import staffVideo from '../../../images/StaffVideo.m4v'

const StaffManagement = (props) => {

    const [title, setTitle] = useState("Staff Management | Property Wallet");

    useEffect(() => {
        if (props.location.pathname == "/staff-management") {
            setTitle("Staff Management | Property Wallet")
        } else {
            setTitle("Staff Management | Property Wallet")
        }
        // console.log(props.location.pathname)
    }, []);

    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            <NavbarV2 />
            {/* <StaffHead /> */}
            <PageHead title={`Staff Management`} content={'Streamline Your Workforce with Staff Management'} video={staffVideo} />
            <StaffServices />
            {/* <StaffTestimonial /> */}
            <Footer />
        </>
    )
}
export default StaffManagement