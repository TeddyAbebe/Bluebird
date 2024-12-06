import React from 'react';
import { Bird } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center">
      <Bird className="h-8 w-8 text-white" />
      <span className="ml-2 text-xl font-semibold text-white">Bluebird Millcreek</span>
    </div>
  );
}