import { IconType } from 'react-icons';
import { AiOutlineUser } from 'react-icons/ai';
import { BsPinAngle } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';
import { HiOutlineDocumentCurrencyEuro } from 'react-icons/hi2';
import {
  LiaFileInvoiceSolid,
  LiaFileInvoiceDollarSolid,
} from 'react-icons/lia';
import { LuFileChartPie, LuPackage } from 'react-icons/lu';
import {
  MdDashboardCustomize,
  MdOutlineCampaign,
  MdOutlineNoteAlt,
  MdOutlineRocketLaunch,
} from 'react-icons/md';
import { PiPhoneListBold } from 'react-icons/pi';
import { RiFileList3Line } from 'react-icons/ri';
import { TbInvoice, TbUserQuestion } from 'react-icons/tb';
import { TfiLayoutTab } from 'react-icons/tfi';
import { VscHome } from 'react-icons/vsc';

export interface SubNavType {
  id: string;
  label: string;
  icon: IconType;

  shouldOpenModal: boolean;
}
export interface NavigationDataType {
  id: string;
  label: string;
  subNavs: SubNavType[];
}

export const navigationData: NavigationDataType[] = [
  {
    id: 'hm',
    label: '',
    subNavs: [
      {
        id: 'home',
        label: 'Home',
        icon: VscHome,
        shouldOpenModal: false,
      },
      {
        id: 'Recent',
        label: 'Recent',
        icon: CiClock2,
        shouldOpenModal: false,
      },
      {
        id: 'Pinned',
        label: 'Pinned',
        icon: BsPinAngle,
        shouldOpenModal: false,
      },
    ],
  },
  {
    id: 'My-work',
    label: 'My work',
    subNavs: [
      {
        id: 'Sales-accelerator',
        label: 'Sales accelerator',
        icon: MdOutlineRocketLaunch,
        shouldOpenModal: false,
      },
      {
        id: 'Dashboards',
        label: 'Dashboards',
        icon: MdDashboardCustomize,
        shouldOpenModal: false,
      },
      {
        id: 'Activities',
        label: 'Activities',
        icon: MdOutlineNoteAlt,
        shouldOpenModal: false,
      },
    ],
  },
  {
    id: 'Customers',
    label: 'Customers',
    subNavs: [
      {
        id: 'Accounts',
        label: 'Accounts',
        icon: TfiLayoutTab,
        shouldOpenModal: false,
      },
      {
        id: 'Contact',
        label: 'Contact',
        icon: AiOutlineUser,
        shouldOpenModal: false,
      },
    ],
  },
  {
    id: 'Sales change',
    label: 'Sales change',
    subNavs: [
      {
        id: 'Leads',
        label: 'Leads',
        icon: PiPhoneListBold,
        shouldOpenModal: false,
      },
      {
        id: 'Opportunities',
        label: 'Opportunities',
        icon: TbInvoice,
        shouldOpenModal: false,
      },
      {
        id: 'Competitors',
        label: 'Competitors',
        icon: TbUserQuestion,
        shouldOpenModal: false,
      },
      {
        id: 'Agent Skill',
        label: 'Agent Skill',
        icon: TbUserQuestion,
        shouldOpenModal: true,
      },
    ],
  },
  {
    id: 'Collateral',
    label: 'Collateral',
    subNavs: [
      {
        id: 'Quotes',
        label: 'Quotes',
        icon: LuFileChartPie,
        shouldOpenModal: false,
      },
      {
        id: 'Orders',
        label: 'Orders',
        icon: LiaFileInvoiceSolid,
        shouldOpenModal: false,
      },
      {
        id: 'Invoices',
        label: 'Invoices',
        icon: LiaFileInvoiceDollarSolid,
        shouldOpenModal: false,
      },
      {
        id: 'Products',
        label: 'Products',
        icon: LuPackage,
        shouldOpenModal: false,
      },
      {
        id: 'Sales Literature',
        label: 'Sales Literature',
        icon: HiOutlineDocumentCurrencyEuro,
        shouldOpenModal: false,
      },
    ],
  },
  {
    id: 'Marketing',
    label: 'Marketing',
    subNavs: [
      {
        id: 'Marketing lists',
        label: 'Marketing lists',
        icon: RiFileList3Line,
        shouldOpenModal: false,
      },
      {
        id: 'Quick Campaigns',
        label: 'Quick Campaigns',
        icon: MdOutlineCampaign,
        shouldOpenModal: false,
      },
    ],
  },
];
