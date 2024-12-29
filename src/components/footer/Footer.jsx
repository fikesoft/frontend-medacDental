// Footer.jsx
import React from 'react';
import '../../css/footer/footer.scss'; // Import the SCSS file
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const BookingInfo = ({ Icon, Title, Subtitle }) => (
        <div className="booking-info">
            <Icon className="icon" />
            <div className="info">
                <h4>{Title}</h4>
                <p>{Subtitle}</p>
            </div>
        </div>
    );

    return (
        <footer className="footer">
            <div className="footer-section contact-info">
                <BookingInfo Icon={AccessTimeIcon} Title={"Office Timings"} Subtitle={"Monday - Saturday (9:00am to 5pm) Sunday (Closed)"} />
                <BookingInfo Icon={FmdGoodOutlinedIcon} Title={"Email Address"} Subtitle={"Smile01@gmail.com"} />
                <BookingInfo Icon={LocalPhoneOutlinedIcon} Title={"Phone Number"} Subtitle={"0900-78601"} />
                <BookingInfo Icon={QuestionAnswerOutlinedIcon} Title={"Live Chat"} Subtitle={"+1-2064512559"} />
            </div>
            <div className="footer-section nav-links">
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/appointment')}>Appointments</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-section copyright">
                <p>&copy; 2024 MedacDental All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
