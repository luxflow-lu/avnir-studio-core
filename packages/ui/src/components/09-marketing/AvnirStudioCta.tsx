import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";
import { ContentSplit } from "./ContentSplit";

export interface AvnirStudioCtaProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "compact";
}

export const AvnirStudioCta = React.forwardRef<HTMLElement, AvnirStudioCtaProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <section ref={ref} className={cx("section--xl", className)} {...props}>
        <div className="container">
          <ContentSplit
            title="L'application des artistes 2.0"
            subtitle="Découvres AVNIR-Studio, notre écosystème d'outils et services dédiés aux besoins des artistes et producteurs indépendants modernes."
            actions={
              <Button 
                variant="solid" 
                size="lg" 
                onClick={() => window.location.href = 'https://avnir-studio.com'}
              >
                Découvrir AVNIR-Studio
              </Button>
            }
            image={
              <div className="avnir-sphere-container">
                <div className="gradient-avnir"></div>
                
                {/* Orbite AVNIR-Studio */}
                <div className="orbiter orbiter--avnir">
                  <div className="carrier">
                    <div className="planet planet--avnir">
                      <img src="/brandkit/avnir-studio/icon.svg" alt="AVNIR-Studio" className="planet-img" />
                    </div>
                  </div>
                </div>
                
                {/* Orbite Jacques */}
                <div className="orbiter orbiter--jacques">
                  <div className="carrier">
                    <div className="planet planet--jacques">
                      <img src="/brandkit/jacques/icon.svg" alt="Jacques" className="planet-img" />
                    </div>
                  </div>
                </div>
              </div>
            }
            reverse
          />
        </div>
      </section>
    );
  }
);

AvnirStudioCta.displayName = "AvnirStudioCta";
