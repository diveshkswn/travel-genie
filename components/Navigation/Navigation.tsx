import { useRouter } from "next/navigation";

export const Navigation = () => {
    const router = useRouter();
    return (
        <div className="d-flex" style={{
            justifyContent: 'space-evenly',
            fontSize: '24px'
        }}>
            <span
                className="user-icon mx-2 d-flex justify-content-center align-items-center"
                onClick={() => {
                    router.back();
                }}
            >
                <i className="bi bi-caret-left-fill" />
            </span>
            <span
                className="user-icon mx-2 d-flex justify-content-center align-items-center"
                onClick={() => {
                    router.push("discover");
                }}
            >
                <i className="bi bi-house" />
            </span>
        </div>)
}