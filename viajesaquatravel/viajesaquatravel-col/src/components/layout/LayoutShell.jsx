import Navbar from './Navbar';
import Footer from './Footer';
import SocialDock from './SocialDock';
import WhatsAppFab from '../ui/WhatsAppFab';

export default function LayoutShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220] text-slate-100 font-sans">
      <Navbar />
      <SocialDock />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}