import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SchoolList() {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        // Fetch school data from the MySQL database
    }, []);

    return (
        <div>
            {schools.map((school) => (
                <div key={school.id}>
                    <h3>{school.name}</h3>
                    <p>{school.address}</p>
                    <Image src={school.imageUrl} alt={school.name} />
                </div>
            ))}
        </div>
    );
}
