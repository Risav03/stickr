import { useEffect, useState } from 'react';

type ApiResponse = {
    message?: string;
    error?: string;
};

const TestApiResponses = () => {
    const [protectedResponse, setProtectedResponse] = useState<ApiResponse | null>(null);
    const [publicResponse, setPublicResponse] = useState<ApiResponse | null>(null);

    const fetchProtectedApi = () => {
        fetch('/api/protected/testp')
            .then((res) => res.json())
            .then((data) => setProtectedResponse(data))
            .catch((err) => setProtectedResponse({ error: err.message }));
    };

    const fetchPublicApi = () => {
        fetch('/api/test')
            .then((res) => res.json())
            .then((data) => setPublicResponse(data))
            .catch((err) => setPublicResponse({ error: err.message }));
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
        </div>
    );
};

export default TestApiResponses;
