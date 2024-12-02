import React, { createContext, useContext, useState } from "react";

interface Purchase {
  id: string;
  date: string;
  items: {
    id: string;
    title: string;
    quantity: number;
    price: number;
  }[];
  total: number;
}

interface PurchaseContextType {
  purchases: Purchase[];
  addPurchase: (purchase: Purchase) => void;
}

const PurchaseContext = createContext<PurchaseContextType>({
  purchases: [],
  addPurchase: () => {},
});

export const PurchaseProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const addPurchase = (purchase: Purchase) => {
    setPurchases((prev) => [...prev, purchase]);
  };

  return (
    <PurchaseContext.Provider value={{ purchases, addPurchase }}>
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchase = () => useContext(PurchaseContext);
