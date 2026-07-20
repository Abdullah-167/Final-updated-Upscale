import RCMCta from "./RCMCta";
import RCMHero from "./RCMHero";
import RCMProcess from "./RCMProcess";
import RCMResults from "./RCMResults";
import RCMSpecialtiesStatement from "./RCMSpecialties";
import RCMWhoWeServe from "./RCMWhoWeServe";
import RCMSystemFlow from "./RCMWhyOutsource";
import RCMWhyOutsource from "./RCMWhyOutsource";

const RCMMAin = () => {
  return (
    <div>
      <RCMHero />
      <RCMSpecialtiesStatement />
      <RCMProcess />
      <RCMResults /> 
      <RCMSystemFlow />
      <RCMWhoWeServe />
      <RCMCta />
    </div>
  );
};

export default RCMMAin;
