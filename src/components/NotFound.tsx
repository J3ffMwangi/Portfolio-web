import React from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "./Button.tsx";

interface NotFoundProps {
  onBackHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-[#0b0f17] flex items-center justify-center p-4">
      <div className="max-w-md w-full p-8 rounded-2xl bg-[#111726] border border-slate-800 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto text-2xl font-bold font-heading">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-100 font-heading">Page Not Found</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The link you followed doesn't exist or has moved. Let's get you back to Jeff's portfolio.
          </p>
        </div>
        <div className="pt-2">
          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={onBackHome}
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};
