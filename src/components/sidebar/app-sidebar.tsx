import * as React from 'react'
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Layout,
  LucideIcon,
  Map,
  Navigation,
  PieChart,
  Search,
  Settings2,
  SquareTerminal,
  UtilityPole,
} from 'lucide-react'

import { NavMain } from '@components/components/sidebar/nav-main'
import { NavProjects } from '@components/components/sidebar/nav-projects'
import { NavUser } from '@components/components/sidebar/nav-user'
import { TeamSwitcher } from '@components/components/sidebar/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@rgba/ui/components/sidebar'
import { SearchForm } from './search-form'
import { useSearchForm } from '@components/store/useSearchForm'

interface NavItem {
  title: string
  url: string
}

interface NavMainItem {
  title: string
  url: string
  icon: LucideIcon
  isActive?: boolean
  items: NavItem[]
}

// This is sample data.
const data = {
  user: {
    name: 'RGBA',
    email: 'rgba@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Inputs',
      url: 'inputs',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Button',
          url: 'button',
        },
        {
          title: 'Button Group',
          url: 'button-group',
        },
        {
          title: 'Checkbox',
          url: 'checkbox',
        },

        {
          title: 'Floating Button',
          url: 'floating-button',
        },
        {
          title: 'Radio',
          url: 'radio',
        },
        {
          title: 'Rating',
          url: 'rating',
        },
        {
          title: 'Select',
          url: 'select',
        },
        {
          title: 'Slider',
          url: 'slider',
        },
        {
          title: 'Switch',
          url: 'switch',
        },
        {
          title: 'Text Field',
          url: 'text-field',
        },
      ],
    },
    {
      title: 'Data Display',
      url: 'data-display',
      icon: Bot,
      items: [
        {
          title: 'Avatar',
          url: 'avatar',
        },
        {
          title: 'Badge',
          url: 'badge',
        },
        {
          title: 'Chip',
          url: 'chip',
        },
        {
          title: 'List',
          url: 'list',
        },
        {
          title: 'Table',
          url: 'table',
        },
        {
          title: 'Tooltip',
          url: 'tooltip',
        },
        {
          title: 'Typography',
          url: 'typography',
        },
      ],
    },
    {
      title: 'Feedback',
      url: 'feedback',
      icon: BookOpen,
      items: [
        {
          title: 'alert',
          url: 'alert',
        },
        {
          title: 'alert-dialog',
          url: 'alert-dialog',
        },

        {
          title: 'dialog',
          url: 'dialog',
        },
        {
          title: 'Progress',
          url: 'progress',
        },
        {
          title: 'toast',
          url: 'toast',
        },
        {
          title: 'popover',
          url: 'popover',
        },
        {
          title: 'Skeleton',
          url: 'skeleton',
        },
        {
          title: 'Sonner',
          url: 'sonner',
        },
      ],
    },
    {
      title: 'Surface',
      url: 'surface',
      icon: Settings2,
      items: [
        {
          title: 'Accordion',
          url: 'accordion',
        },
        {
          title: 'Card',
          url: 'card',
        },
        {
          title: 'Paper',
          url: 'paper',
        },
      ],
    },
    {
      title: 'Navigation',
      url: 'navigation',
      icon: Navigation,
      items: [
        {
          title: 'Bottom Navigation',
          url: 'bottom-navigation',
        },
        {
          title: 'Breadcrumb',
          url: 'breadcrumb',
        },
        {
          title: 'Drawer',
          url: 'drawer',
        },
        {
          title: 'Link',
          url: 'link',
        },
        {
          title: 'Menu',
          url: 'menu',
        },
        {
          title: 'Menu',
          url: 'menu',
        },
        {
          title: 'Pagination',
          url: 'pagination',
        },
        {
          title: 'Speed Dial',
          url: 'speed-dial',
        },
        {
          title: 'Stepper',
          url: 'stepper',
        },
        {
          title: 'Tabs',
          url: 'tabs',
        },
      ],
    },
    {
      title: 'Layout',
      url: 'layout',
      icon: Layout,
      items: [
        {
          title: 'Box',
          url: 'box',
        },
        {
          title: 'Container',
          url: 'container',
        },
        {
          title: 'Flex',
          url: 'flex',
        },
        {
          title: 'Grid',
          url: 'grid',
        },
      ],
    },
    {
      title: 'Utils',
      url: 'utils',
      icon: UtilityPole,
      items: [
        {
          title: 'Box',
          url: 'box',
        },
        {
          title: 'Container',
          url: 'container',
        },
        {
          title: 'Flex',
          url: 'flex',
        },
        {
          title: 'Grid',
          url: 'grid',
        },
      ],
    },
  ],
  others: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { teams, others, user } = data
  const { search } = useSearchForm()

  const navMain: NavMainItem[] = []
  data.navMain.filter((item) => {
    const items = item?.items?.filter((subItem) =>
      subItem.title.toLowerCase().includes(search.toLowerCase()),
    )
    if (items.length > 0) {
      navMain.push({
        ...item,
        items,
      })
    } else {
      return false
    }
  })
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {navMain.length > 0 && <NavMain items={navMain} />}
        <NavProjects projects={others} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
