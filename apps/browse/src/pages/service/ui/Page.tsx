import { Service } from '@src/entities/service';

import { ServiceDetails } from '@src/widgets/ServiceDetails';
import { useState } from 'react';

interface Props {
  service: Service;
}

enum Steps {
  DETAILS = 'details',
  BOOKING = 'booking',
}

export const ServicePage = ({ service }: Props) => {
  const [step, setStep] = useState<Steps>(Steps.DETAILS);

  return (
    <div style={{ padding: 32 }}>
      {step === Steps.DETAILS && (
        <ServiceDetails
          service={service}
          onBook={() => setStep(Steps.BOOKING)}
        />
      )}
    </div>
  );
};
