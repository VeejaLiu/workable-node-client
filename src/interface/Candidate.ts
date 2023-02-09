interface CandidateAccount {
  subdomain: string; // Account's subdomain
  name: string; // Account's name
}

interface CandidateJob {
  shortcode: string; // Job's system generated code
  title: string; // Job's title
}

interface CandidateEducation {
  id: string;
  degree: string; // The graduation degree
  school: string; // The name of the school graduated
  'field_of_study': string; // The field of study
  'start_date': Date; // The date started
  'end_date': Date; // The date ended
}

interface CandidateExperience {
  id: string;
  title: string; // The title of the experience entry
  summary: string; // The summary of the experience entry
  'start_date': Date; // The date started
  'end_date': Date; // The date ended
  company: string; // The company name
  industry: string; // The industry of the company
  current: boolean; // Indicates if currently works there
}

interface CandidateSocialProfile {
  type:
    | 'academiaedu'
    | 'angellist'
    | 'behance'
    | 'bitbucket'
    | 'blogger'
    | 'crunchbase'
    | 'dandyid'
    | 'delicious'
    | 'deviantart'
    | 'digg'
    | 'doyoubuzz'
    | 'dribble'
    | 'dribbble'
    | 'econsultancy'
    | 'facebook'
    | 'flavorsme'
    | 'flickr'
    | 'fullcontact'
    | 'getglue'
    | 'gist'
    | 'github'
    | 'goodreads'
    | 'googleplus'
    | 'gravatar'
    | 'hackernews'
    | 'hiim'
    | 'klout'
    | 'lanyrd'
    | 'linkedin'
    | 'myspace'
    | 'ohloh'
    | 'orkut'
    | 'pinterest'
    | 'quora'
    | 'reddit'
    | 'scribd'
    | 'skype'
    | 'slideshare'
    | 'stackexchange'
    | 'stackoverflow'
    | 'tumblr'
    | 'twitter'
    | 'typepad'
    | 'vk'
    | 'wordpress'
    | 'xing'; // The slug name of the social profile.
  name: string; // The full name of the social profile
  username: string;
  url: string; // Url to the candidate's social profile page
}

interface CandidateLocation {
  'location_str': string; // The string representation of the location
  country: string; // The country full name
  'country_code': string; // The 2-letter ISO code of the country
  region: string; // The region of the candidate
  'region_code': string; // The code of the region of the candidate
  city: string; // The city of the candidate
  'zip_code': string; // The ZIP code of the candidate
}

export interface Candidate {
  id: string; // The candidate identifier
  name: string; // Candidate's full name
  firstname: string; // Candidate's first name
  lastname: string; // Candidate's last name
  headline: string; // Candidate's headline
  account: CandidateAccount;
  job: CandidateJob;
  stage: string; // Candidate's stage slug
  disqualified: boolean; // True if candidate is disqualified
  'disqualification_reason': string; // null if member has not provided a disqualification reason
  sourced: boolean; // True if candidate has been sourced
  'profile_url': string; // Candidate's URL in Workable
  email: string; // Candidate's email
  domain: string; // Where candidate came from
  'created_at': string; // Timestamp when candidate was created
  'updated_at': string; // Last timestamp when candidate was updated
  'hired_at': Date; // The date the candidate was moved to the hired stage
  address: string; // The address of the candidate
  phone: string; // The phone number of the candidate
}

export interface CandidateDetail extends Candidate {
  'image_url': string; // Url of candidate's avatar. Available only if provided by the candidate
  'disqualified_at': number; // The timestamp the candidate was disqualified
  'outbound_mailbox': string; // Mailbox that can be used to communicate with the candidate and inform the recruitment team of the job as well
  'uploader_id': string; // The id of the member uploaded the candidate.
  'cover_letter': string; // The cover letter provided when candidate applied
  summary: string; // The summary of the candidate
  'education_entries': CandidateEducation[]; // A collection with education entries
  'experience_entries': CandidateExperience[]; // A collection with working experience entries
  skills: any[]; // A collection with skill names
  answers: any[]; // A collection with the answers provided
  'resume_url': string; // Url to the candidate resume
  'social_profiles': CandidateSocialProfile[]; // A collection with social profiles of the candidate
  tags: any[]; // A collection with tags
  location: CandidateLocation; // The location of the candidate
  'originating_candidate_id': string; // The ID this candidate originated from (has a value in case of candidate move)
}
