import { useState } from "react";
import { UserProps } from "../types/user";

import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function loadUser(userName: string): Promise<void> {
        setUser(null);
        setError(false);

        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        setLoading(false);

        if (response.status === 404) {
            setError(true);
            return;
        }

        const { avatar_url, login, location, followers, following } = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        }

        setUser(userData);
    }

    return <div>
        <Search loadUser={loadUser} />
        {loading && <Loading />}
        {user && <User {...user} />}
        {error && <Error />}
    </div>
};

export default Home;