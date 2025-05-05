"use client";

import { useAuth } from "@clerk/nextjs";

const TestPage = () => {
    const { isLoaded, userId } = useAuth();

    if (!isLoaded) {
        return null;
    }

    return (
        <div className="h-full flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-semibold">Test Page</h2>
                {userId ? (
                    <p>Logged in as: {userId}</p>
                ) : (
                    <p>Not logged in</p>
                )}
            </div>
        </div>
    );
}

export default TestPage;