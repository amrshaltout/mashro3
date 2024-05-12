import React from 'react';

import UploadImage from '@/components/UploadImage/UploadImage';

// export const getStaticProps = async () => {
//     const res = await fetch('https://rentor-b.onrender.com/user/all');
//     const data = await res.json();

//     return {
//         props: { users : data }
//     }
// }

const Fetch = ({ users }) => {
    return (    
        <div>
        
            <UploadImage />


        </div>
    );
}

export default Fetch;