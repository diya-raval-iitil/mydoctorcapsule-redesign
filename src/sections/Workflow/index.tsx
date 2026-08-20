import { memo } from 'react';
import { StepList } from '@/components/common/StepList';
import { WORKFLOW_STEPS } from '@/constants/site';

function WorkflowSection() {
  return (
    <div id="how-it-works">
      <StepList
        kicker="How It Works"
        title="One platform. A simpler healthcare journey."
        buttonLabel="Start your journey"
        buttonHref="/contact"
        steps={WORKFLOW_STEPS}
      />
    </div>
  );
}

export default memo(WorkflowSection);
