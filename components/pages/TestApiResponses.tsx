import { useEffect, useState } from 'react';
import { sdk } from "@farcaster/miniapp-sdk";
import { fetchWrapper } from '@/lib/fetchWrapper';
import useUserInfo from '@/lib/hooks/useUserInfo';

type ApiResponse = {
    message?: string;
    error?: string;
};

const TestApiResponses = () => {
    const user = useUserInfo()
    const [protectedResponse, setProtectedResponse] = useState<any>(null);
    const [publicResponse, setPublicResponse] = useState<any>(null);
    const [userInfo, setUserInfo] = useState<any>(null);

    const fetchProtectedApi = () => {
        fetchWrapper('/api/protected/testp')
            .then((data) => setProtectedResponse(data))
            .catch((err) => setProtectedResponse({ error: err.message }));
    };

    const fetchPublicApi = () => {
        fetch('/api/test')
            .then((res) => res.json())
            .then((data) => setPublicResponse(data))
            .catch((err) => setPublicResponse({ error: err.message }));
    };
    
    const fetchUserInfo = () => {
        const info = sessionStorage.getItem('userInfo');
        if (info) {
            try {
                setUserInfo(JSON.parse(info));
            } catch (e) {
                setUserInfo({ error: 'Invalid userInfo data' });
            }
        } else {
            setUserInfo({ error: 'No userInfo in sessionStorage' });
        }
    };

    return (
        <div>
            <h1>API Responses</h1>
            <div>
                <h2>Protected API Response:</h2>
                <pre>{JSON.stringify(protectedResponse, null, 2)}</pre>
                <button onClick={fetchProtectedApi}>Fetch Protected API</button>
            </div>
            <div>
                <h2>Public API Response:</h2>
                <pre>{JSON.stringify(publicResponse, null, 2)}</pre>
                <button onClick={fetchPublicApi}>Fetch Public API</button>
            </div>
            <div>
                <h2>User Info:</h2>
                <pre>{JSON.stringify(userInfo, null, 2)}</pre>
                <button className='bg-green-800 rounded-lg p-2' onClick={fetchUserInfo}>Fetch User Info</button>
            </div>
        </div>
    );
};

export default TestApiResponses;
