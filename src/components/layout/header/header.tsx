import { GlobeIcon, MenuIcon } from 'lucide-react'
import { Button } from '../../ui/button'
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '../../ui/dialog'
import { Logo } from '../../ui/logo'
import { HeaderNav } from './header-nav'

function HeaderMenu({
	className,
	navClassName,
	variant = 'default',
}: {
	className?: string
	navClassName?: string
	variant?: 'default' | 'mobile'
}) {
	if (variant === 'mobile') {
		return (
			<div className={`flex flex-col w-full gap-6 ${className}`}>
				<div className='flex flex-col space-y-6'>
					<HeaderNav className={`text-lg ${navClassName}`} />
					<button className='flex items-center gap-2 text-white'>
						<GlobeIcon />
					</button>
				</div>
				<div className='flex flex-col w-full gap-3'>
					<Button variant='ghost' size='slim' className='w-full justify-center'>
						Увійти
					</Button>
					<Button
						variant='primary'
						size='slim'
						className='w-full justify-center'
					>
						Реєстрація
					</Button>
				</div>
			</div>
		)
	}

	return (
		<div className={`contents ${className}`}>
			<div className='bg-white/5 rounded-[50px] backdrop-blur-md border border-white/20 h-full px-5 flex items-center gap-10'>
				<HeaderNav className={`[&_ul]:max-xl:gap-5 ${navClassName}`} />
				<button>
					<GlobeIcon color='#fff' />
				</button>
			</div>
			<div className='flex items-center text-white bg-white/5 rounded-[50px] backdrop-blur-md border border-white/20 h-full px-5'>
				<Button variant='ghost' size='slim'>
					Увійти
				</Button>
				<Button variant='primary' size='slim'>
					Реєстрація
				</Button>
			</div>
		</div>
	)
}

export function Header() {
	return (
		<header className='fixed top-[2em] left-0 right-0 z-50 mx-auto w-[90%] flex items-center justify-between h-[60px] gap-5 max-xl:gap-3'>
			<div className='bg-white/5 rounded-[50px] backdrop-blur-md border border-white/20 px-5 h-full flex items-center gap-5'>
				<Logo height={32} width={140} />
				<hr className='w-[1px] h-[80%] bg-[#676767] border-none max-[420px]:hidden' />
				<span className='font-semibold text-xs text-white max-[420px]:hidden'>
					Simply in
					<br /> control
				</span>
			</div>

			<div className='flex items-center h-full gap-5 max-xl:gap-3 max-lg:hidden'>
				<HeaderMenu />
			</div>

			<Dialog>
				<DialogTrigger className='h-full lg:hidden' asChild>
					<div className='bg-white/5 rounded-[50px] backdrop-blur-md border border-white/20 h-full flex items-center'>
						<Button variant='ghost'>
							<MenuIcon />
						</Button>
					</div>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px] p-6'>
					<DialogTitle className='text-xl font-semibold mb-6'>Меню</DialogTitle>
					<HeaderMenu
						variant='mobile'
						navClassName='[&_ul]:flex-col [&_ul]:items-start [&_ul]:gap-4'
					/>
				</DialogContent>
			</Dialog>
		</header>
	)
}
