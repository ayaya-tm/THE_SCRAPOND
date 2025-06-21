import Discription from "../components/orverview/Discription";
import Timeline from "../components/orverview/Timeline";

const Orverview = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-700 to-red-800 text-white p-6">
      <div className="space-y-3 relative z-10 bg-white/10 backdrop-blur-md border border-yellow-500 p-8 md:p-10 rounded-2xl shadow-2xl max-w-9xl w-full space-y-6">
      <Discription />
      <Timeline />
      </div>
    </div>
  );
};
export default Orverview;