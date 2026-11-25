import Navbar from './Navbar';
import Footer from './Footer';
import SocialDock from '../../components/layout/SocialDock';
import WhatsAppFab from '../ui/WhatsAppFab';

export default function LayoutShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <SocialDock />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}