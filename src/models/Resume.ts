import type { Education } from './Education';
import type { Experience } from './Experience';
import type { InfoItem } from './InfoItem';
import type { Profile } from './Profile';
import type { Project } from './Project';

export interface Resume {
  profile: Profile;
  cv: InfoItem;
  information: InfoItem[];
  skill: string[];
  experience: Experience[];
  education: Education[];
  project: Project[];
}
