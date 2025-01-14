// AI-Generated
interface Name {
  fullName: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

interface Image {
  small: string;
  large: string;
  empty: boolean;
  colorCode: number;
}

export interface Child {
  childId: string;
  institutionId: string;
  groupId: string;
  createdTime: string;
  name: Name;
  birthday: string;
  homeAddress: string | null;
  extraInfo: string;
  language: string;
  nationality: string;
  birthplace: string;
  gender: number;
  startDate: string;
  endDate: string | null;
  leavingReason: string | null;
  isTestChild: boolean;
  relations: any | null;
  image: Image;
  isSleeping: boolean;
  naps: any[];
  hasVacation: boolean;
  isSick: boolean;
  isAbsent: boolean;
  leaves: any[];
  onBus: boolean;
  onTrip: boolean;
  statuses: any[];
  statusRegistrations: any[];
  checkins: CheckIn[];
  checkedIn: boolean;
  checkinTime: string | null;
  pickupTime: string | null;
  pickupRelationId: string | null;
  pickupName: string;
}

// AI-Generated
export interface CheckIn {
  childCheckinId: string;
  childId: string;
  institutionId: string;
  groupId: string;
  checkinTime: string;
  pickupTime: string;
  pickupRelationId: string;
  goHomeWithChildId: string;
  checkoutTime: string | null;
  checkinLoginId: string;
  checkoutLoginId: string;
  autoCheckedOut: boolean;
  deletedAt: string | null;
  hours: string | null;
  checkinStatements: string | null;
}
