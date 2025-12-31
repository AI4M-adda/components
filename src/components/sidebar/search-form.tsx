import { useSearchForm } from '@components/store/useSearchForm'
import { Label } from '@rgba/ui/components/label'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from '@rgba/ui/components/sidebar'
import { Search } from 'lucide-react'

export function SearchForm({ ...props }: React.ComponentProps<'form'>) {
  const { search, onSearch } = useSearchForm()
  console.log(search)
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative overflow-hidden">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the docs..."
            className="pl-8"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
