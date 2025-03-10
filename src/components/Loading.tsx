import { FourSquare } from "react-loading-indicators";

export default function Loading() {
  return (
    <div className="bg-BsGray-100 flex justify-center items-center h-screen">
      <FourSquare
        color="#f7c873"
        size="large"
        text="Loading..."
        textColor="#f7c873"
      />
    </div>
  );
}
