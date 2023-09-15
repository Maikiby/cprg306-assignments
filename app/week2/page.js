import Link from "next/link";
import StudentInfo from "../studentinfo";

export default function Week2() {
    return (
        <div>
            <h1>Week 2</h1>
            <StudentInfo />
            <Link href='/'> 
                <p>Home</p>
            </Link>
        </div>
    )
}
