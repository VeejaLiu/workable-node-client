interface JobDepartmentHierarchy {
  id: number; // The id of the department
  name: string; // The name of the department
}

interface JobLocation {
  location_str: string; // The location string translated into the language of the job. The location string consists of city, region, and country separated by comma (some of these elements might be missing).
  country: string; // The country name as defined in job editor
  country_code: string; // The two digit country code
  region: string; // The region: as defined in job editor
  region_code: string; // The two digit region code
  city: string; // The city as defined in job editor
  zip_code: string; // The zip code as defined in job editor
  telecommuting: boolean; // Indicates if this is a remote/telecommute job
}


export interface Job {
  id: string;// The job identifier
  title: string;// The short title of the job
  full_title: string;// The full title of the job
  shortcode: string;// System generated job code
  code: string;// Job code as defined in editor
  state: string;// The job state. Possible values are draft, published, closed, archived. Where closed is a job used internally or confidentially
  department: string;// The job department as defined in editor
  department_hierarchy: JobDepartmentHierarchy[]; // A collection with the ancestor departments of the job department including that
  url: string;// URL to the job page
  application_url: string;// URL to the job application form
  shortlink: string;// short URL to the job page
  location: JobLocation;
  created_at: Date;// The timestamp the job created
}
