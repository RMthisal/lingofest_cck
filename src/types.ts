export interface EventConfig {
  eventName: string;
  subTitle: string;
  presenter: string;
  occasion: string;
  invitationLead: string;
  chiefGuest: {
    name: string;
    designation: string;
    institution: string;
    roleTag: string;
  };
  invitationMessage: {
    p1: string;
    p2: string;
    p3: string;
  };
  details: {
    date: string;
    weekday: string;
    formattedDate: string;
    time: string;
    venueHall: string;
    venueSchool: string;
    locationCity: string;
    timezone: string;
  };
  closingLead: string;
  organizer: {
    name: string;
    school: string;
  };
  programmeTitle: string;
  programmeSubtitle: string;
  programmes: {
    id: string;
    title: string;
    description: string;
    icon: string;
    highlight: string;
  }[];
}

export interface FlagItem {
  id: string;
  country: string;
  language: string;
  greeting: string;
  script: string;
  code: string;
}
