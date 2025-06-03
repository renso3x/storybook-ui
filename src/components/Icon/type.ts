import { Expiring } from "./svg/expiring";
import { ExpiredLoan } from "./svg/expired-loan";
import { Mileage } from "./svg/mileage";
import { PlateNumber } from "./svg/plate-number";
import { Warning } from "./svg/warning";
import { Handle } from "./svg/handle";
import { Info } from "./svg/info";
import { Battery } from "./svg/battery";
import { CarAlert } from "./svg/car-alert";
import { CarInfo } from "./svg/car-info";
import { UVEye } from "./svg/uveye";
import { Sold } from "./svg/sold";
import { Meter } from "./svg/meter";
import { Route } from "./svg/route";
import { Close } from "./svg/close";
import { Bulb } from "./svg/bulb";
import { Share } from "./svg/share";
import { Star } from "./svg/bulb copy";
import { AddDate } from "./svg/add-date";
import { AddVehicle } from "./svg/add-vehicle";
import { Search } from "./svg/search";
import { Notification } from "./svg/notification";
import { Cart } from "./svg/cart";
import { Faq } from "./svg/faq";
import { Logout } from "./svg/logout";
import { Announcement } from "./svg/announcement";
import { ExternalLink } from "./svg/external-link";
import { Tax } from "./svg/tax";
import { DailyPrice } from "./svg/daily-price";
import { LockedPrice } from "./svg/locked-price";
import { ChildSeat } from "./svg/child-seat";
import { Pacifier } from "./svg/pacifier";
import { Concierge } from "./svg/concierge";
import { FuelCan } from "./svg/fuel-can";
import { Key } from "./svg/key";
import { Toll } from "./svg/toll";
import { CarWash } from "./svg/car-wash";
import { CarShine } from "./svg/car-shine";
import { SmokeOrPet } from "./svg/smoke-pet";
import { Refuel } from "./svg/refuel";
import { Warranty } from "./svg/warranty";
import { Insurance } from "./svg/insurance";
import { Scissor } from "./svg/scissor";
import { ArrowDown } from "./svg/arrow-down";
import { MiscOne } from "./svg/misc-one";
import { MiscTwo } from "./svg/misc-two";
import { Luggage } from "./svg/luggage";
import { Calendar } from "./svg/calendar";
import { Dashboard } from "./svg/dashboard";
import { CirclePlus } from "./svg/circle-plus";
import { Crown } from "./svg/crown";
import { Restricted } from "./svg/restricted";
import { Car } from "./svg/car";
import { Card } from "./svg/card";
import { Shuttle } from "./svg/shuttle";
import { Tool } from "./svg/tool";
import { Chart } from "./svg/chart";
import { CarPort } from "./svg/car-port";
import { Document } from "./svg/document";
import { FileBox } from "./svg/file-box";
import { Unsigned } from "./svg/unsigned";
import { DollarSquare } from "./svg/dollar-square";
import { User } from "./svg/user";
import { Headset } from "./svg/headset";
import { BarChart } from "./svg/bar-chart";
import { DealerPrincipal } from "./svg/dealer-principal";
import { Task } from "./svg/task";
import { Cog } from "./svg/cog";
import { Guide } from "./svg/guide";
import { MobileApp } from "./svg/mobile-app";
import { DarkMode } from "./svg/dark-mode";
import { Shield } from "./svg/shield";
import { CheckSquare } from "./svg/check-square";
import { MapPin } from "./svg/map-pin";
import { KeyFob } from "./svg/key-fob";
import { HourGlass } from "./svg/hour-glass";
import { ThunderCircle } from "./svg/thunder-circle";
import { Recall } from "./svg/recall";
import { CloseCircle } from "./svg/close-circle";
import { ClockCircle } from "./svg/clock-circle";
import { CheckCircle } from "./svg/check-circle";
import { Datepicker } from "./svg/datepicker";

export const IconsMap = {
  CheckCircle,
  Mileage,
  Expiring,
  ExpiredLoan,
  PlateNumber,
  Warning,
  Handle,
  Info,
  Battery,
  CarAlert,
  CarInfo,
  UVEye,
  Sold,
  Meter,
  Route,
  Close,
  Bulb,
  Share,
  Star,
  AddDate,
  AddVehicle,
  Search,
  Notification,
  Cart,
  Faq,
  Logout,
  Announcement,
  ExternalLink,
  Tax,
  DailyPrice,
  LockedPrice,
  ChildSeat,
  Pacifier,
  Concierge,
  FuelCan,
  Key,
  Toll,
  CarWash,
  CarShine,
  SmokeOrPet,
  Refuel,
  Warranty,
  Insurance,
  Scissor,
  ArrowDown,
  MiscOne,
  MiscTwo,
  Luggage,
  Calendar,
  Dashboard,
  CirclePlus,
  Crown,
  Restricted,
  Car,
  Card,
  Shuttle,
  Tool,
  Chart,
  CarPort,
  Document,
  FileBox,
  Unsigned,
  DollarSquare,
  User,
  Headset,
  BarChart,
  DealerPrincipal,
  Task,
  Cog,
  Guide,
  MobileApp,
  DarkMode,
  Shield,
  CheckSquare,
  MapPin,
  KeyFob,
  HourGlass,
  ThunderCircle,
  Recall,
  CloseCircle,
  ClockCircle,
  Datepicker,
} as const;

// Type for Icon names (ensures only valid names are used)
export type IconName = keyof typeof IconsMap;
