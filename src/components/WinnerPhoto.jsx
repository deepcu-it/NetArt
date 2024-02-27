import react from 'react';

const WinnerPhoto = () => {
    return (
        <div className='winner-photo'>
            <div>
                <img className='image1' src="../Netart-Test/asserts/1.png" alt="winner-photo" />
            </div>
            <div>
                <div className='winner-photo-text-title'>
                    <b> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b>
                </div>
                <div className='winner-photo-text-bullet'>
                    <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>

                    </ul>
                </div>
                <img className='image2' src="../Netart-Test/asserts/2.png" alt="winner-photo" />
                <div className='winner-photo-text-title'>
                Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </div>
            </div>
            
        </div>
    );
};

export default WinnerPhoto