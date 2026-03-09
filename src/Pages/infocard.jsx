import Logo from '../assets/ennaarlogo.png';

export function Infocard() {
    return (
        <>
            <div className='container mt-4'>
                <h2 className='mb-4 text-primary'>Welcome to <span>Ennaar Energy Systems</span></h2>
                <div className='row g-3'>
                    <div className='col-sm-3 bg-light' 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',  // Horizontally center the content
                        alignItems: 'center',  // Vertically center the content
                        height: 'auto',  // Ensure full viewport height for vertical centering
                        margin: 0  // Remove any default margins
                    }}>
                        <center><img src={Logo} alt="" width={300} /></center>
                        {/* <center>Since 2006</center> */}
                    </div>
                    <div className='col-sm'>
                        <h6 style={{ textAlign: 'justify', lineHeight: '2' }}>
                            Ennaar Energy Systems is one of the leading boiler manufacturers in India more than 13 years.
                            The company manufacturing all types of boilers for various industries such as, textile processing,
                            modern rice mills, paper, sugar, fertilizers, oil refinery industries, tannery & food processing
                            units up to the capacity of 40tph & pressure up to 40kg/cm for all kinds of fuels.
                            The company has manufacturing facilities to under take the fabrication of boilers upto 40 tph.
                            The company has advanced welding methods, bending machines for tubes & plates bending,
                            drilling facilities for ensuring quality products. The company has an in-house team for designing,
                            manufacturing, quality assuring, marketing, well erection &; commissioning services with excellent management.
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}