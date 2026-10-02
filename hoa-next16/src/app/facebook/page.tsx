'use client';
import { useRouter } from 'next/navigation';


const FacebookPage = () => {
    const router = useRouter();
    const annut = () => {
        router.push('/');
    }
    return (
        <div>
            trang facebook
            <div>
                <button onClick={() => { annut() }}>trang chu</button>
            </div>
        </div>
    );
};

export default FacebookPage;