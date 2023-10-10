
const Footer = () => 
{

    return (
        <div className="footer">
            <div className="flex-col gap-3">
               {/* create ul li for footer links */}
                <ul>
                    <li>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Terms of use</a>
                        <a href="#">Privacy policy</a>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Footer;