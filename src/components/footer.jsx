export default function Footer() {
    return (
        <div className="bg-blue-900 text-white p-8">
            <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
                {/* Quick Links Section */}
                <div className="flex flex-col text-center space-y-4 md:space-y-2 md:text-left">
                    <p className="font-bold text-xl text-teal-400 tracking-wider">Quick Links</p>
                    <a href="#about" className="hover:text-teal-300 transition-transform transform hover:scale-110">About</a>
                    <a href="#work" className="hover:text-teal-300 transition-transform transform hover:scale-110">Projects</a>
                    <a href="#skills" className="hover:text-teal-300 transition-transform transform hover:scale-110">Skills</a>
                    <a href="#project" className="hover:text-teal-300 transition-transform transform hover:scale-110">Certificates</a>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col text-center space-y-4 md:space-y-2 md:text-left">
                    <p className="font-bold text-xl text-teal-400 tracking-wider">Connect Via</p>
                    <a href="https://www.linkedin.com/in/jayant-paithane-38059b281/" target="_blank" rel="noopener noreferrer" 
                        className="hover:text-teal-300 transition-transform transform hover:scale-110">
                        <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://www.instagram.com/jayant_paithane?igsh=MTU5ejk1OGVxaW1jeg==" target="_blank" rel="noopener noreferrer" 
                        className="hover:text-teal-300 transition-transform transform hover:scale-110">
                        <i className="fa-brands fa-instagram"></i> Instagram
                    </a>
                    <a href="mailto:jayantpaithane111@gmail.com"  target="_blank" rel="noopener noreferrer" 
                        className="hover:text-teal-300 transition-transform transform hover:scale-110">
                        <i className="fa-brands fa-google"></i> Gmail
                    </a>
                    <a href="tel:+91-8767749157" target="_blank" rel="noopener noreferrer" 
                        className="hover:text-teal-300 transition-transform transform hover:scale-110">
                            
                        <i className="fa-solid fa-phone-alt"></i> Phone
                    </a>


                </div>

                {/* Privacy & Policies Section */}
                <div className="flex flex-col text-center space-y-4 md:space-y-2 md:text-left">
                    <p className="m-2 flex justify-center tracking-[0.1em]">
                        Made with <i className="text-red-500 fa-solid fa-heart m-1"></i> by Jayant.
                    </p>
                    <p className="text-sm mt-4">© 2025 Jayant Paithane. All rights reserved.</p>
                </div>
            </div>
            {/* Optional "Back to Top" button */}
            <a href="#hero" className="fixed bottom-5 right-5 p-2 bg-teal-400 text-white rounded-full hover:bg-teal-500">
                ↑ Back to Top
            </a>

        </div>
    );
}
