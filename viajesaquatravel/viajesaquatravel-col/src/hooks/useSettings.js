import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';
import { siteConfig } from '../config/siteConfig';

const DEFAULT_AGENCY = siteConfig.agency || {};

const DEFAULT_PROMO_PALETTE = {
  preset: 'amber',
  bgFrom: '#F59E0B',
  bgTo: '#EAB308',
  text: '#0F172A',
  glow: '#F59E0B',
};

const SEED_PROMO = siteConfig.seed?.settings?.promo_button || {};

const DEFAULT_PROMO_BUTTON = {
  id: 'promo_button',
  label: SEED_PROMO.label || 'Ofertas Especiales',
  isVisible: SEED_PROMO.isVisible ?? true,
  targetPath: SEED_PROMO.targetPath || '/ofertas',
  palette: DEFAULT_PROMO_PALETTE,
  pulse: SEED_PROMO.pulse ?? true,
};

/**
 * Escucha en tiempo real settings/agency y settings/promo_button desde Firestore,
 * con respaldo automático a siteConfig si los documentos aún no existen.
 */
export function useSettings() {
  const [agency, setAgency] = useState(DEFAULT_AGENCY);
  const [promoButton, setPromoButton] = useState(DEFAULT_PROMO_BUTTON);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let agencyReady = false;
    let promoReady = false;

    const markReady = () => {
      if (agencyReady && promoReady) {
        setLoading(false);
      }
    };

    const unsubAgency = onSnapshot(
      doc(db, 'settings', 'agency'),
      (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          setAgency({
            ...DEFAULT_AGENCY,
            ...data,
            social: {
              ...(DEFAULT_AGENCY.social || {}),
              ...(data.social || {}),
            },
            mapPins:
              Array.isArray(data.mapPins) && data.mapPins.length > 0
                ? data.mapPins
                : DEFAULT_AGENCY.mapPins || [],
          });
        } else {
          setAgency(DEFAULT_AGENCY);
        }
        agencyReady = true;
        markReady();
      },
      () => {
        setAgency(DEFAULT_AGENCY);
        agencyReady = true;
        markReady();
      }
    );

    const unsubPromo = onSnapshot(
      doc(db, 'settings', 'promo_button'),
      (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          setPromoButton({
            ...DEFAULT_PROMO_BUTTON,
            ...data,
            palette: {
              ...DEFAULT_PROMO_PALETTE,
              ...(data.palette || {}),
            },
          });
        } else {
          setPromoButton(DEFAULT_PROMO_BUTTON);
        }
        promoReady = true;
        markReady();
      },
      () => {
        setPromoButton(DEFAULT_PROMO_BUTTON);
        promoReady = true;
        markReady();
      }
    );

    return () => {
      unsubAgency();
      unsubPromo();
    };
  }, []);

  return { agency, promoButton, loading };
}