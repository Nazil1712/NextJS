import Image from "next/image";
import notFoundImg from "../../public/404.jpg";

export default function NotFound() {
    return (
        <>
        <Image src={notFoundImg} alt="NotFoundImage">
        </Image>
        </>
    )
}