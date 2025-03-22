import { useTransition } from "react";

interface TabButtonProps {
  action: () => void;
  children: React.ReactNode;
  isActive: boolean;
}

export function TabButtonEcosystem({ action, children, isActive }: TabButtonProps) {
  const [, startTransition] = useTransition();

  return (
    <div
      onClick={() => startTransition(action)}
      className={`p-[2rem] my-1 text-start text-xl font-semibold rounded-xl cursor-pointer transition-all
      ${isActive ? "bg-bg-purple-primary text-color-1-700 font-semibold text-xl text-start" : "hover:bg-custom-gray-second"}
      `}
    >
      {children}
    </div>
  );
}

export function TabButtonFeature({ action, children, isActive }: TabButtonProps) {
  const [, startTransition] = useTransition(); 

  if (isActive) {
    return <b>{children}</b>;
  }

  return (
    <div
      onClick={() => {
        startTransition(() => {
          action();
        });
      }}
    >
      {children}
    </div>
  );

}
