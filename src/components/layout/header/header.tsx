import { GlobeIcon, MenuIcon } from 'lucide-react'
import { Logo } from '../../ui/logo'
import { Container } from '../container'
import { HeaderNav } from './header-nav'
import { Button } from '../../ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../../ui/dialog'
import { cn } from '@/lib/utils'

function HeaderMenu({
	className,
	buttonsClassName,
}: {
	className?: string
	buttonsClassName?: string
}) {
	return (
		<div className={cn('flex items-center gap-14', className)}>
			<HeaderNav />
			<button>
				<GlobeIcon />
			</button>
			<div className={cn('flex items-center gap-8', buttonsClassName)}>
				<Button>Увійти</Button>
				<Button variant='primary'>Реєстрація</Button>
			</div>
		</div>
	)
}

export function Header() {
	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-white/90'>
			<Container className='py-4 flex items-center justify-between gap-10'>
				<Logo width={150} height={35} />

				<Dialog>
					<DialogTrigger asChild>
						<Button className='lg:hidden p-3 rounded-lg'>
							<MenuIcon />
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Меню</DialogTitle>
						</DialogHeader>
						<HeaderMenu
							className='flex-col items-start gap-5 mt-10 max-sm:[&_nav_ul]:flex-col max-sm:[&_nav_ul]:gap-4 max-sm:[&_nav_ul]:items-start'
							buttonsClassName='max-sm:flex-col max-sm:items-start max-sm:gap-5'
						/>
					</DialogContent>
				</Dialog>

				<HeaderMenu className='max-lg:hidden' />
			</Container>
		</header>
	)
}
