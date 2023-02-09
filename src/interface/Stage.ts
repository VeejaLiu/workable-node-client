export interface Stage {
  slug: string; // The unique token of the stage
  name: string; // The stage name
  kind:
    | 'sourced'
    | 'applied'
    | 'shortlisted'
    | 'assessment'
    | 'phone-screen'
    | 'interview'
    | 'offer'
    | 'hired'; // The type of the stage. Possible values are sourced, applied, shortlisted, assessment, phone-screen, interview, offer & hired
  position: number; // The position of the stage in the pipeline (zero based)
}
