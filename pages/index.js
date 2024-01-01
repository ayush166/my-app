import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Layout>
                <div>
                    <h1>Welcome to the Edunify School Management System</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/addSchool">
                                    Add School
                                </Link>
                            </li>
                            <li>
                                <Link href="/showSchools">
                                    Show Schools
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </Layout>

        </>
    );
}
