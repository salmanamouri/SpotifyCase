import { useGetUserQuery  } from "../../api/apiSlice";

export const UserProfile = () => {
    const { data: user, isLoading } = useGetUserQuery();

    if (isLoading) return <div> Loading ... </div>;
    if (!user) return null;

    return (
        <>
            <div className="profile">
                <img src={user?.images[0]?.url} alt="Profile" />
                <div>
                    <h2>{user?.display_name}</h2>
                    <p>{user?.email}</p>
                </div>
            </div>
        </>
    )
}